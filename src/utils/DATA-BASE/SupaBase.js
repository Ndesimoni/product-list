import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://pvzfnwxwgkgqkuhfptya.supabase.co";

// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2emZud3h3Z2tncWt1aGZwdHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0MDU3ODksImV4cCI6MjA0MTk4MTc4OX0.dHtg5uYDwgu1Odq1TMhg1bSdYjgPN3hmg7HhYAmv70E";

// export const supabase = createClient(supabaseUrl, supabaseKey);

const VITE_SUPABASE_URL = "https://pvzfnwxwgkgqkuhfptya.supabase.co";
const VITE_SUPABASE_Key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2emZud3h3Z2tncWt1aGZwdHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0MDU3ODksImV4cCI6MjA0MTk4MTc4OX0.dHtg5uYDwgu1Odq1TMhg1bSdYjgPN3hmg7HhYAmv70E";

export const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_Key);

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// export const supabase = createClient(supabaseUrl, supabaseKey);
