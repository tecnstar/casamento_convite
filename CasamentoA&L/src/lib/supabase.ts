import { createClient } from "@supabase/supabase-js";

// Chaves públicas (publishable) — seguras para ficar no código.
const SUPABASE_URL =
  import.meta.env["VITE_SUPABASE_URL"] ?? "https://kwyaemezbnjofrugusqr.supabase.co";
const SUPABASE_KEY =
  import.meta.env["VITE_SUPABASE_PUBLISHABLE_KEY"] ?? "sb_publishable_LRf4fIgv32PGsoHzX5XQHw_yMUH7hvo";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

export async function confirmRsvp(name: string, companions: string[]) {
  const { data, error } = await supabase.rpc("confirm_rsvp", {
    p_name: name,
    p_companions: companions,
  });
  if (error) throw error;
  return data as string;
}
