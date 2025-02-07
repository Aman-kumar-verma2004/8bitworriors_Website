export default function EventCard({ event, onClick }) {
  return (
    


  <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-6 lg:px-12">
  <div
    className="relative bg-black rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 group w-full sm:w-[30rem] lg:w-[38rem] h-auto"
    onClick={onClick}
  >
    {/* Image Section */}
    <img
      src={event.image || "/2.png"}
      alt={event.title}
      className="w-full h-52 sm:h-56 lg:h-60 object-cover transition-opacity duration-500 group-hover:opacity-30"
    />

    {/* Glassmorphism Effect on Hover */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center 
                    backdrop-blur-lg bg-green-200/20 border border-white/30 rounded-lg p-6 
                    opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <h3 className="text-2xl sm:text-3xl font-semibold text-black drop-shadow-lg mb-2 max-w-xs sm:max-w-md lg:max-w-lg">
        {event.title}
      </h3>
      <p className="text-lg text-black drop-shadow-lg mb-2">{new Date(event.date).toLocaleDateString()}</p>
      <p className="text-lg text-black drop-shadow-lg mb-2">{event.location}</p>
      <p className="text-black drop-shadow-lg line-clamp-3 max-w-xs sm:max-w-md lg:max-w-lg">
        {event.description}
      </p>
    </div>
  </div>
</div>

  



  )
}

