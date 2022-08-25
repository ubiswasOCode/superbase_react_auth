import { createClient } from "@supabase/supabase-js";

const supabaseURL = process.env.REACT_APP_SUPABASE_URL;
const supabaseAEON_Key = process.env.REACT_APP_SUPABASE_AEON_KEY;

export const supabase = createClient{ supabaseURL, supabaseAEON_Key };