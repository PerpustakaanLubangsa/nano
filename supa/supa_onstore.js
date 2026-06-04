// 1. Ambil library Supabase client dari CDN resmi
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// 2. Kredensial API Supabase terbaru Anda
const SUPABASE_URL = "https://mxnaeepuydqkvtlzpxqk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14bmFlZXB1eWRxa3Z0bHpweHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3Mjk2ODksImV4cCI6MjA5MjMwNTY4OX0.0DjJemqIoFWQhO9Tej9242BQk4mSnTl08uksV_ioeLI";

// 3. Inisialisasi instance Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 4. Ekspor objek supabase agar bisa digunakan di file HTML/JS lain
export { supabase };