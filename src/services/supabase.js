
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://vwyvfnzxkyynhfskioyz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3eXZmbnp4a3l5bmhmc2tpb3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1MDQ0MTUsImV4cCI6MjAzODA4MDQxNX0.XQgtfnYQBZ1dcWLW2Z-iqHz65SfmcnccMwUwjBT4SEc'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;