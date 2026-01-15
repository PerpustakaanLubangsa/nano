import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Menangani keamanan CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Membuat Admin Client
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SERVICE_ROLE_KEY') ?? '', // Nama rahasia yang kita simpan di dashboard
      { auth: { persistSession: false } }
    )

    // Mengambil data dari body request
    const { userId } = await req.json()

    if (!userId) {
      throw new Error('User ID diperlukan untuk penghapusan.')
    }

    // Perintah hapus user dari Auth (Sistem Login)
    const { data, error } = await supabaseAdmin.auth.admin.deleteUser(userId)

    if (error) throw error

    return new Response(
      JSON.stringify({ message: `User ${userId} berhasil dihapus.` }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }, 
        status: 200 
      }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }, 
        status: 400 
      }
    )
  }
})
