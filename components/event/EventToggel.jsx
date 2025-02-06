export default function EventToggle({ activeTab, setActiveTab }) {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
            activeTab === "upcoming" ? "bg-blue-600 text-white" : "bg-white text-gray-900 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Events
        </button>
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
            activeTab === "past" ? "bg-blue-600 text-white" : "bg-white text-gray-900 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("past")}
        >
          Past Events
        </button>
      </div>
    </div>
  )
}

