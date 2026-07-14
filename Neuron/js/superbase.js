import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL="https://rdwhjrgvkenqqlfonsgw.supabase.co";
const PUBLISHABLE_KEY="sb_publishable_QqJHzWXvydo7r4l6YNynpw_EkDN8h2e";

export const supabase = createClient(
  SUPABASE_URL,
  PUBLISHABLE_KEY
);