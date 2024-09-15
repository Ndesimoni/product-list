import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pvzfnwxwgkgqkuhfptya.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2emZud3h3Z2tncWt1aGZwdHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0MDU3ODksImV4cCI6MjA0MTk4MTc4OX0.dHtg5uYDwgu1Odq1TMhg1bSdYjgPN3hmg7HhYAmv70E";
export const supabase = createClient(supabaseUrl, supabaseKey);
