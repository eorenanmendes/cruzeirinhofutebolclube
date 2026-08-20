-- Storage Policies for student-photos
create policy "Public Access to Student Photos"
  on storage.objects for select
  using ( bucket_id = 'student-photos' );

create policy "Allow Public Upload of Student Photos"
  on storage.objects for insert
  with check ( bucket_id = 'student-photos' );

create policy "Admins can delete student photos"
  on storage.objects for delete
  to authenticated
  using ( bucket_id = 'student-photos' AND (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'secretary')) );

-- Storage Policies for signatures
create policy "Public Access to Signatures"
  on storage.objects for select
  using ( bucket_id = 'signatures' );

create policy "Allow Public Upload of Signatures"
  on storage.objects for insert
  with check ( bucket_id = 'signatures' );

create policy "Admins can delete signatures"
  on storage.objects for delete
  to authenticated
  using ( bucket_id = 'signatures' AND (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'secretary')) );

-- Fix Security Definer Permissions for has_role
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;
