import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://qxsofrouubnwitezixnl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4c29mcm91dWJud2l0ZXppeG5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2OTQ1MjIsImV4cCI6MjA4NjI3MDUyMn0.4U5hEyRelnH7uBPyNOkLDBDvrHx8N3XeKk4Eo-T6BJc'

export const supabase = createClient(supabaseUrl, supabaseKey)