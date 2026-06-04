import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://heosadzwckwmbjhxydtm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhlb3NhZHp3Y2t3bWJqaHh5ZHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyMDk5MDMsImV4cCI6MjA4Mjc4NTkwM30.4tUQQNsczDqX6xuzvq8C5JncxvX_RAdwr95xMaWIvhY'

export const supabase = createClient(supabaseUrl, supabaseKey)