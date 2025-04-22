
import { createClient } from '@supabase/supabase-js';

// Get environment variables with fallback empty strings to prevent initialization errors
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if the required values are present
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL and/or anon key are missing. Please check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
