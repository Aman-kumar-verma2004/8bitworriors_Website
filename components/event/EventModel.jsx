"use client"

import { useState } from "react"

export default function EventModal({ event, onClose }) {
  const [isRSVPed, setIsRSVPed] = useState(false)

  const handleRSVP = () => {
    setIsRSVPed(true)
    // In a real application, we would make an API call here to register the user
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button className="absolute text-4xl top-4 right-4 text-gray-900 hover:text-gray-700" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img

          src={event.image || "/5.png"}
          alt={event.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
        <p className="text-gray-600 mb-2">{new Date(event.date).toLocaleDateString()}</p>
        <p className="text-gray-600 mb-4">{event.location}</p>
        <p className="text-gray-700 mb-6">{event.description}</p>
        <button
          className={`px-4 py-2 rounded-md ${
            isRSVPed ? "bg-green-500 text-white cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          onClick={handleRSVP}
          disabled={isRSVPed}
        >
          {isRSVPed ? "RSVP Confirmed" : "RSVP Now"}
        </button>
      </div>
    </div>
  )
}

