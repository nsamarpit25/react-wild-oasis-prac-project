import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ndnvuwyduxhevhpeedau.supabase.co";
const supabaseKey =
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbnZ1d3lkdXhoZXZocGVlZGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2NTg4NTYsImV4cCI6MjA1MzIzNDg1Nn0.bvhmRXLvwhyvi7-jtdJkFzkcZcMam4slj-YUd1Yh9IQ";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
