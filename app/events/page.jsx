"use client"

import { useState } from "react"
import EventBanner from "@/components/event/EventBanner" 
import EventToggle from "@/components/event/EventToggel" 
import EventList from "@/components/event/EventList" 
import EventModal from "@/components/event/EventModel" 

const upcomingEvents = [
  {
    id: 1,
    title: "AI Workshop",
    date: "2025-03-15",
    location: "Tech Hub, Room 101",
    description:
      "Join us for an exciting workshop on the latest AI technologies and their applications in various industries.",
    image: "/7.png?height=200&width=300",
  },
  {
    id: 2,
    title: "Hackathon 2025",
    date: "2025-04-20",
    location: "Main Campus, Building A",
    description: "Our annual hackathon is back! Bring your ideas and let's code for 48 hours straight!",
    image: "/3.png?height=200&width=300",
  },
]

const pastEvents = [
  {
    id: 3,
    title: "Web Dev Bootcamp",
    date: "2025-01-10",
    location: "Online",
    description: "A comprehensive bootcamp covering the latest web development technologies and best practices.",
    image: "/4.png?height=200&width=300",
  },
  {
    id: 4,
    title: "Tech Talk: Future of Quantum Computing",
    date: "2024-11-30",
    location: "Auditorium B",
    description:
      "An insightful talk on the future of quantum computing and its potential impact on various industries.",
    image: "/6.png.svg?height=200&width=300",
  },
]

export default function EventPage() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleEventClick = (event) => {
    setSelectedEvent(event)
  }

  const handleCloseModal = () => {
    setSelectedEvent(null)
  }

  return (
    <div className="min-h-screen bg-black">
      <EventBanner />
      <div className="container mx-auto px-4 py-8">
        <EventToggle activeTab={activeTab} setActiveTab={setActiveTab} />
        <EventList events={activeTab === "upcoming" ? upcomingEvents : pastEvents} onEventClick={handleEventClick} />
      </div>
      {selectedEvent && <EventModal event={selectedEvent} onClose={handleCloseModal} />}
    </div>
  )
}

