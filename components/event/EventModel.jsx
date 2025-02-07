"use client"

import { useState } from "react"

export default function EventModal({ event, onClose }) {
  const [isRSVPed, setIsRSVPed] = useState(false)
  
  const eventDate = new Date(event.date)
  const isUpcoming = eventDate > new Date() // Check if the event is in the future

  const handleRSVP = () => {
    setIsRSVPed(true)
    // In a real application, we would make an API call here to register the user
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border-1 border-green-500 shadow-lg shadow-green-500/50">
        <button 
          className="absolute top-1 right-2 text-white-900 hover:text-gray-700"
          onClick={onClose}
        >
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
        <p className="text-gray-400 mb-2">{eventDate.toLocaleDateString()}</p>
        <p className="text-gray-400 mb-4">{event.location}</p>
        <p className="text-gray-400 mb-6">{event.description}</p>

        {isUpcoming && (
          <div className="flex items-center justify-center"> 
            <div className="relative inline-flex items-center justify-center group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-green-100 to-green-500 group-hover:shadow-lg group-hover:shadow-green-500/50"></div>
              <button
                className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full transition-all duration-200"
                onClick={handleRSVP}
                disabled={isRSVPed}
              >
                {isRSVPed ? "RSVP Confirmed" : "RSVP Now"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
