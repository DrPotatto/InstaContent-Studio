import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InstaContent Studio - Create Viral Instagram Content',
  description: 'AI-powered Instagram content creation studio. Generate posts, captions, and schedule content - zero cost launch.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {children}
        </div>
        
        {/* Paddle SDK will be added here later */}
        <script 
          src="https://cdn.paddle.com/paddle/v2/paddle.js" 
          defer
        />
      </body>
    </html>
  )
}