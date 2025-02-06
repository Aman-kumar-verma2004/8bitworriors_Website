export default function EventBanner() {
    return (
      <div className="relative h-64 bg-green-600">
        <img src="/eventpagebanner.jpg" alt="Event Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4 ">Tech Club Events</h1>
            <p className="text-xl text-white">Join us for exciting workshops, hackathons, and tech talks!</p>
          </div>
        </div>
      </div>
    )
  }
  
  