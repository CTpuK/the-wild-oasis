import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://djtkteishwxsqiejenwc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqdGt0ZWlzaHd4c3FpZWplbndjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4NTkzMDksImV4cCI6MjAxNTQzNTMwOX0.gcLZTIguSVQtgjTecQV1xX7jO7QSvlYcQqQ05pAwhDY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
