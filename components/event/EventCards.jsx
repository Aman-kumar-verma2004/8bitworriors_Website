export default function EventCard({ event, onClick }) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >

        {/* image here */}
      <img src={event.image || "/2.png"} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-2">{new Date(event.date).toLocaleDateString()}</p>
        <p className="text-gray-600 mb-2">{event.location}</p>
        <p className="text-gray-700 line-clamp-2">{event.description}</p>
      </div>
    </div>
  )
}

