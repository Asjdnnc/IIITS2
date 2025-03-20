import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Megaphone,
  Briefcase,
  CalendarDays,
} from "lucide-react";

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState("announcement");
  const eventListRef = useRef(null);

  const scrollEvents = (direction) => {
    if (eventListRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      eventListRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-neutral-100 p-10">
      {/* Latest News */}
      <div className="flex items-center">
        <div className="bg-red-600 text-white px-4 py-2 rounded-l-lg font-semibold">
          Latest News
        </div>
        <div className="flex-grow border-t border-gold"></div>
      </div>

      <div className="flex gap-10 mt-6">
        {/* Tabs */}
        <div className="flex flex-col gap-4 w-1/2">
          <div className="flex gap-4">
            <div
              className={`flex items-center gap-2 cursor-pointer p-3 border-b-4 transition ${
                activeTab === "announcement"
                  ? "border-teal-500 bg-blue-100"
                  : "border-transparent"
              }`}
              onClick={() => setActiveTab("announcement")}
            >
              <Megaphone /> Announcement
            </div>
            <div
              className={`flex items-center gap-2 cursor-pointer p-3 border-b-4 transition ${
                activeTab === "recruitment"
                  ? "border-teal-500 bg-blue-100"
                  : "border-transparent"
              }`}
              onClick={() => setActiveTab("recruitment")}
            >
              <Briefcase /> Recruitment
            </div>
          </div>

          {/* Tab Content */}
          <div className="border p-6 bg-white rounded shadow-md">
            {activeTab === "announcement" ? (
              <ul className="list-disc pl-5">
                <li>For Faculty Positions</li>
                <li>For Non-Teaching Staff</li>
                <li>Project Positions of R&D</li>
                <li>Project Positions of II&SI</li>
                <li>Project Positions of Academic Affairs</li>
              </ul>
            ) : (
              <ul className="list-disc pl-5">
                <li>Open Positions in Software Development</li>
                <li>Internship Opportunities</li>
                <li>Administrative Roles</li>
                <li>Research Assistant Positions</li>
              </ul>
            )}
          </div>
        </div>

        {/* Events */}
        <div className="w-1/2">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <CalendarDays />
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollEvents("left")}
                className="p-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => scrollEvents("right")}
                className="p-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div
            ref={eventListRef}
            className="flex flex-col gap-3 overflow-y-auto scrollbar-hide h-[370px] w-[600px]"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="flex-shrink-0 bg-white shadow-md rounded-lg p-4 w-[450px]">
              <div className="bg-brown-600 text-white px-3 py-1 rounded">
                Dec 18 2025
              </div>
              <p className="mt-2">
                VETOMAC 2025 - 20th International Conference on Vibration
                Engineering
              </p>
            </div>

            <div className="flex-shrink-0 bg-white shadow-md rounded-lg p-4 w-[450px]">
              <div className="bg-brown-600 text-white px-3 py-1 rounded">
                Jun 05 2025
              </div>
              <p className="mt-2">
                Recycle 2025, 5th International Conference on Waste Management
              </p>
            </div>

            <div className="flex-shrink-0 bg-white shadow-md rounded-lg p-4 w-[450px]">
              <div className="bg-brown-600 text-white px-3 py-1 rounded">
                Oct 31 2025
              </div>
              <p className="mt-2">
                ICOM 2025 - International Conference on Micro Nano Fluidics
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
