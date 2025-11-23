export default function DebugPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Environment Variables Debug</h1>
      <div className="space-y-4">
        <div>
          <strong>NEXT_PUBLIC_SUPABASE_URL:</strong> 
          <span className="ml-2 bg-yellow-100 p-1">
            {process.env.NEXT_PUBLIC_SUPABASE_URL || 'NOT FOUND'}
          </span>
        </div>
        <div>
          <strong>NEXT_PUBLIC_SUPABASE_ANON_KEY:</strong> 
          <span className="ml-2 bg-yellow-100 p-1">
            {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '***' + process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.slice(-8) : 'NOT FOUND'}
          </span>
        </div>
      </div>
    </div>
  )
}