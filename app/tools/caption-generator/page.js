'use client'
import { useState } from 'react'

export default function CaptionGenerator() {
  const [topic, setTopic] = useState('')
  const [tone, setTone] = useState('funny')
  const [captions, setCaptions] = useState([])

  const generateCaptions = () => {
    // Simple client-side caption generation using templates
    const templates = {
      funny: [
        `When your ${topic} is on point 👌`,
        `Me trying to explain ${topic} to my friends... 🤔`,
        `${topic} level: expert 🏆`
      ],
      inspirational: [
        `Embrace the journey of ${topic} 🌟`,
        `Your ${topic} journey starts today ✨`,
        `Believe in your ${topic} dreams 💫`
      ],
      educational: [
        `5 things I learned about ${topic}`,
        `The truth about ${topic} no one tells you`,
        `How to master ${topic} in 30 days`
      ]
    }
    
    setCaptions(templates[tone] || [])
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Caption & Hashtags Generator</h1>
        <p className="text-gray-600 mb-8">Generate viral captions and hashtags for your posts</p>

        <div className="card">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Post Topic
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder="What's your post about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tone
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="funny">Funny</option>
                <option value="inspirational">Inspirational</option>
                <option value="educational">Educational</option>
                <option value="casual">Casual</option>
              </select>
            </div>

            <button
              onClick={generateCaptions}
              disabled={!topic.trim()}
              className="w-full btn-primary disabled:opacity-50"
            >
              Generate Captions
            </button>
          </div>

          {captions.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Generated Captions</h3>
              <div className="space-y-3">
                {captions.map((caption, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg border">
                    <p className="text-gray-800">{caption}</p>
                    <div className="mt-2 text-sm text-gray-600">
                      #instagram #content #creator #{topic.replace(/\s+/g, '')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}