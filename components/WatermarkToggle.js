'use client'
import { useState } from 'react'

export default function WatermarkToggle({ defaultChecked = true, onChange }) {
  const [enabled, setEnabled] = useState(defaultChecked)

  const handleToggle = (value) => {
    setEnabled(value)
    onChange?.(value)
  }

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-gray-700">Add Watermark</span>
      <button
        type="button"
        className={`${enabled ? 'bg-primary-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
        onClick={() => handleToggle(!enabled)}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
        />
      </button>
    </div>
  )
}