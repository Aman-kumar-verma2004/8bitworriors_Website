"use client"

import { useState } from "react"
import EventBanner from "@/components/event/EventBanner" 
import EventToggle from "@/components/event/EventToggel" 
import EventList from "@/components/event/EventList" 
import EventModal from "@/components/event/EventModel" 

const upcomingEvents = [
  {
    id: 9,
    title: "AI Workshop",
    date: "2025-03-15",
    location: "Tech Hub, Room 101",
    description:
      "Join us for an exciting workshop on the latest AI technologies and their applications in various industries.",
    image: "/7.png?height=200&width=300",
  },
  // {
  //   id: 2,
  //   title: "Hackathon 2025",
  //   date: "2025-04-20",
  //   location: "Main Campus, Building A",
  //   description: "Our annual hackathon is back! Bring your ideas and let's code for 48 hours straight!",
  //   image: "/3.png?height=200&width=300",
  // },
]

const pastEvents = [
  {
    id: 1,
    title: "8bitWarriors : Orientation 2K24",
    date: "2024-11-23",
    location: "LNCTE AUDITORIUM",
    description: "​Join us for the 8bitWarriors Orientation, a dynamic event designed to introduce you to our vibrant technical college club.",
    image: "/EventsImage/img1.avif?height=200&width=300",
  },
  {
    id: 2,
    title: "Mastering the Art of Presentation",
    date: "2024-07-06",
    location: "VIRTUAL",
    description:
      "Mastering the Art of Presentation, hosted by 8bit Warriors on July 6, 2024, helped attendees refine their public speaking skills and deliver impactful presentations with confidence.",
    image: "/EventsImage/img2.jpg?height=200&width=300",
  },
  {
    id: 3,
    title: "Machine Learning - A Practical Approach",
    date: "2024-03-19",
    location: "LNCT Group of College",
    description:
      "Machine Learning - A Practical Approach,hosted by Rishav Kumar on March 19, 2024, was an engaging session where attendees explored ML concepts in a fun and interactive way",
    image: "/EventsImage/img3.avif?height=200&width=300",
  },
  {
    id: 4,
    title: "Tech Novice",
    date: "2023-10-06",
    location: "VIRTUAL",
    description:
      "Tech Novice, hosted by 8bit Warriors on October 6, 2023, was a virtual session introducing beginners to the fundamentals of programming, helping them take their first steps into the tech world.",
    image: "/EventsImage/img4.jpg?height=200&width=300",
  },
  {
    id: 5,
    title: "Hacktober Fest Odyssey",
    date: "2023-10-02",
    location: "VIRTUAL",
    description:
      "Hacktober Fest Odyssey, hosted by 8bit Warriors on October 2, 2023, was an exciting dive into open-source, where participants embarked on a coding journey to explore and contribute to the world of open-source development.",
    image: "/EventsImage/img5.avif?height=200&width=300",
  },
  {
    id: 6,
    title: "GitHub Workshop",
    date: "2023-09-09",
    location: "VIRTUAL",
    description:
      "GitHub Workshop, hosted by LCC & 8bit Warriors on September 9, 2023, was a collaborative session where tech enthusiasts learned, shared, and networked while exploring the power of GitHub for coding and collaboration.",
    image: "/EventsImage/img6.jpg?height=200&width=300",
  },
  {
    id: 7,
    title: "Getting Started With Flutter",
    date: "2023-05-21",
    location: "VIRTUAL",
    description:
      "Getting Started with Flutter, was an insightful session where attendees explored Flutter's fundamentals and gained hands-on experience in building high-quality applications for mobile, web, and desktop.",
    image: "/EventsImage/img7.avif?height=200&width=300",
  },
  {
    id: 8,
    title: "AR Workshop",
    date: "2023-04-19",
    location: "VIRTUAL",
    description:
      "AR Workshop, was a creative session where participants designed personalized AR Profile Cards, exploring their artistic side with hands-on guidance in a fun and engaging environment.",
    image: "/EventsImage/img8.jpg?height=200&width=300",
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

