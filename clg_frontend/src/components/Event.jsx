import { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const events = [
  { title: "Role and Relevance of e-library in the Era of Globalization and War Space", date: "22-10-2024 - 22-10-2024" },
  { title: "Swacchata Hi Seva", date: "17-09-2024 - 02-10-2024" },
  { title: "National Space Day", date: "23-08-2024 - 23-08-2024" },
  { title: "Partition Horrors Remembrance Day", date: "14-08-2024 - 14-08-2024" },
  { title: "Startup Summit 3.0", date: "08-08-2024 - 08-08-2024" },
  { title: "5-day offline Faculty Development Programme (FDP)", date: "07-08-2024 - 11-08-2024" },
];

const EventsCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 3000); // Scrolls every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">📢 Upcoming Events</h2>

      <div className="h-40 overflow-hidden relative">
        <div
          className="absolute w-full transition-transform duration-500"
          style={{ transform: `translateY(-${index * 60}px)` }}
        >
          {events.map((event, i) => (
            <div
              key={i}
              className={`flex items-center space-x-4 py-2 px-4 ${
                i === index ? "bg-gray-100 rounded-lg shadow-md" : ""
              }`}
            >
              <FaCalendarAlt className="text-red-500 text-lg" />
              <div>
                <h3 className="text-sm font-semibold text-red-600">{event.title}</h3>
                <p className="text-xs text-gray-500">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsCarousel;
