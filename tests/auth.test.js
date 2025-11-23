import { describe, expect, it } from 'vitest'
import { supabase } from '../lib/supabaseClient'

describe('Authentication', () => {
  it('should initialize Supabase client', () => {
    expect(supabase).toBeDefined()
  })
  
  it('should have valid Supabase URL', () => {
    expect(process.env.NEXT_PUBLIC_SUPABASE_URL).toBeDefined()
  })
})