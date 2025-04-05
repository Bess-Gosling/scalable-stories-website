<<<<<<< HEAD
<<<<<<< HEAD
// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
=======
// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
>>>>>>> 02664fa154458f9d05fd7b8de956479f8d70ad78
=======
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase env vars are missing.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
>>>>>>> cd93de08b8273b741cac3c8fcde4396f72d14ee6
