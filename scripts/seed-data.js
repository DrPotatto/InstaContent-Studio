const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function seedData() {
  console.log('Seeding initial data...')
  
  // Create admin user (you'll need to create this user manually in Auth first)
  // This is just a placeholder for the admin functionality
  
  console.log('Seed completed!')
}

seedData().catch(console.error)