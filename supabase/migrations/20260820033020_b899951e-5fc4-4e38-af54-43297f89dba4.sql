CREATE POLICY "user_roles_read_policy" ON public.user_roles
FOR SELECT TO authenticated
USING (true);
