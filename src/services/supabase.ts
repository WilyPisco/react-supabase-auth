
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || supabaseUrl.includes('PON_AQUI')) {
  console.log("Error: La URL de Supabase no está configurada. Por favor, verificar");
  throw new Error("La URL de Supabase no está configurada.");
}
if (!supabaseAnonKey || supabaseAnonKey.includes('PON_AQUI')) {
  console.log("Error: La clave anónima de Supabase no está configurada. Por favor, verificar");
  throw new Error("La clave anónima de Supabase no está configurada.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
