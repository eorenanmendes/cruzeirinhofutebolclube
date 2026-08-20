# Implementation Plan - Student Registration and Admin System

Add a student registration system and an administrative dashboard to the Cruzeirinho Futebol Clube website while preserving existing public pages and branding.

## User Review Required

> [!IMPORTANT]
> The admin area will require authentication. I will use Lovable Cloud (Supabase) for authentication and data storage.

- **WhatsApp Integration**: Should the "Send to WhatsApp" button open a pre-filled message in the user's WhatsApp client, or do you require a background server-side API integration? (Initial implementation will be the client-side link for safety).
- **Admin Access**: Which email should be granted initial admin access?

## Proposed Changes

### 1. Database & Backend (Lovable Cloud)
- Create `students` table:
  - Fields: name, birth_date, student_cpf, student_rg, photo_url, parent_name, parent_cpf, parent_rg, phone, email, address, modality, category, notes, signature_url, protocol_number, status (pending, analysis, approved, active, inactive).
- Create `user_roles` table for admin access control.
- Enable RLS policies:
  - `authenticated` admins can manage all data.
  - Public can insert (for registration).

### 2. Public Frontend Additions
- **Header**: Add "Cadastro de Aluno" link.
- **New Route**: `src/routes/cadastro.tsx`
  - Responsive multi-step form using `react-hook-form` and `zod`.
  - Photo upload with preview.
  - Digital signature canvas component.
  - Protocol generation and success message.
  - WhatsApp redirect with formatted student data.

### 3. Administrative Area
- **New Route**: `src/routes/admin/index.tsx` (Protected)
  - Dashboard stats (total students, by modality, etc.).
  - Searchable/filterable student table.
- **New Route**: `src/routes/admin/student/$id.tsx`
  - Detailed view with profile photo and digital signature.
  - Status management (Pendente -> Ativo).
  - Edit/Delete functionality.
- **New Route**: `src/routes/admin/settings.tsx`
  - Configure WhatsApp number and institution name.

### 4. Security & Navigation
- Implement `_authenticated` layout gate for admin routes.
- Secure storage buckets for photos and signatures.

## Technical Details

- **Components**: `SignatureCanvas` for digital signing, `ImageUpload` for 3x4 photos.
- **Routing**: TanStack Router path-based routes.
- **State Management**: TanStack Query for admin data fetching.
- **Styling**: Tailwind CSS v4, matching the existing "Blue/Black" sporty aesthetic.
