import EventCard from "./EventCards" 

export default function EventList({ events, onEventClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onClick={() => onEventClick(event)} />
      ))}
    </div>
  )
}

