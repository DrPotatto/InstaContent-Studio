import { createClient } from '@supabase/supabase-js'

// For production - these will be set in Netlify environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// For development fallback
const devSupabaseUrl = 'https://qfcrdfqtrxvurrfgvmuc.supabase.co'
const devSupabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmY3JkZnF0cnh2dXJyZmd2bXVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MDQzNzIsImV4cCI6MjA3OTQ4MDM3Mn0.LD09vrEkhMVP8KkLGl00gMNkL3WSE3kUyK2sXzQByOw'

const isBrowser = typeof window !== 'undefined'

let supabase

if (isBrowser) {
  supabase = createClient(
    supabaseUrl || devSupabaseUrl,
    supabaseAnonKey || devSupabaseAnonKey,
    {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        flowType: 'pkce'
      }
    }
  )
} else {
  // Server-side mock
  supabase = {}
}

export { supabase }
export default supabase