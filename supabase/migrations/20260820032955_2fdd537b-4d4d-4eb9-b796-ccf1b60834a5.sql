-- Create Enum for Roles
CREATE TYPE public.app_role AS ENUM ('admin', 'secretary', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role public.app_role NOT NULL,
    UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security Definer Function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create students table
CREATE TABLE public.students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    protocol_number TEXT UNIQUE NOT NULL,
    
    -- Student info
    full_name TEXT NOT NULL,
    birth_date DATE NOT NULL,
    cpf TEXT,
    rg TEXT,
    photo_url TEXT,
    
    -- Parent info
    parent_name TEXT NOT NULL,
    parent_cpf TEXT NOT NULL,
    parent_rg TEXT,
    phone TEXT NOT NULL,
    email TEXT,
    address TEXT NOT NULL,
    
    -- Project info
    modality TEXT NOT NULL,
    category TEXT NOT NULL,
    notes TEXT,
    
    -- Consent & Signature
    signature_url TEXT NOT NULL,
    declaration_accepted BOOLEAN NOT NULL DEFAULT FALSE,
    
    -- Metadata
    status TEXT NOT NULL DEFAULT 'pending', -- pending, analysis, approved, active, inactive
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Settings table for institution config
CREATE TABLE public.institution_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institution_name TEXT DEFAULT 'Cruzeirinho Jd. Maringá',
    whatsapp_number TEXT,
    whatsapp_template TEXT,
    modalities TEXT[] DEFAULT ARRAY['Futebol', 'Jiu-Jitsu', 'Capoeira'],
    categories TEXT[] DEFAULT ARRAY['Sub-7', 'Sub-9', 'Sub-11', 'Sub-13', 'Sub-15', 'Sub-17'],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Seed default settings
INSERT INTO public.institution_settings (institution_name) VALUES ('Cruzeirinho Futebol Clube');

-- Grants
GRANT INSERT ON public.students TO anon;
GRANT INSERT ON public.students TO authenticated;
GRANT SELECT, UPDATE, DELETE ON public.students TO authenticated;
GRANT ALL ON public.students TO service_role;

GRANT SELECT ON public.institution_settings TO anon;
GRANT SELECT ON public.institution_settings TO authenticated;
GRANT UPDATE ON public.institution_settings TO authenticated;
GRANT ALL ON public.institution_settings TO service_role;

-- RLS for students
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert for registration" ON public.students
FOR INSERT TO anon
WITH CHECK (true);

CREATE POLICY "Admins can manage all students" ON public.students
FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'secretary'));

-- RLS for institution_settings
ALTER TABLE public.institution_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read for settings" ON public.institution_settings
FOR SELECT TO anon
USING (true);

CREATE POLICY "Admins can update settings" ON public.institution_settings
FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
