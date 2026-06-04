// Ambil library Supabase client dari CDN resmi
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Kredensial API Supabase Proyek BacaBaca Anda
const SUPABASE_URL = "https://qxsofrouubnwitezixnl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4c29mcm91dWJud2l0ZXppeG5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2OTQ1MjIsImV4cCI6MjA4NjI3MDUyMn0.4U5hEyRelnH7uBPyNOkLDBDvrHx8N3XeKk4Eo-T6BJc";

// Inisialisasi instance Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Ekspor objek supabase agar siap diimpor di file HTML
export { supabase };