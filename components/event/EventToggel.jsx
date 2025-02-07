export default function EventToggle({ activeTab, setActiveTab }) {
  return (
    <div className="flex justify-center space-x-2 mb-10 p-2 rounded-lg shadow-md">
  <button
    type="button"
    className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-300
      ${activeTab === "upcoming" 
        ? "bg-green-700 text-white shadow-md scale-105" 
        : "bg-green-200 text-green-900 hover:bg-green-300 hover:shadow-lg"}`}
    onClick={() => setActiveTab("upcoming")}
  >
    Upcoming Events
  </button>

  <button
    type="button"
    className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-300
      ${activeTab === "past" 
        ? "bg-green-700 text-white shadow-md scale-105" 
        : "bg-green-200 text-green-900 hover:bg-green-300 hover:shadow-lg"}`}
    onClick={() => setActiveTab("past")}
  >
    Past Events
  </button>
</div>

  )
}

