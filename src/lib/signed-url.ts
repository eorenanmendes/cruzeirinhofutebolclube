import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

/** Buckets are private: resolve a temporary signed URL for display/download. */
export function useSignedUrl(bucket: string, path?: string | null) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    if (!path) {
      setUrl(null);
      return;
    }
    supabase.storage
      .from(bucket)
      .createSignedUrl(path, 3600)
      .then(({ data }) => {
        if (active) setUrl(data?.signedUrl ?? null);
      });
    return () => {
      active = false;
    };
  }, [bucket, path]);

  return url;
}
