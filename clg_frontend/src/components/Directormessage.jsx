import React, { useState } from "react";
import directorImage from "../assets/DirectorIIITSonepat.jpeg";

const fullMessage = `
Being the Director of an Institution of National Importance is a matter of pride as well as responsibility. 
Now, as the baton has passed on to me, I realize that it is for me to lay a roadmap that would take this institution to even greater heights. 
Having come from a research background and having seen, at close quarters, what meaningful research output can do for the growth and prestige of the country, 
I am convinced that research has to be a thrust area for our institutions of higher learning...
`;

const DirectorMessage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Message */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 flex items-center">
            <span className="mr-2">📜</span> Director's Message
          </h2>

          {/* Conditionally render truncated or full message */}
          <div
            className={`text-lg font-serif text-gray-700 leading-relaxed ${
              isExpanded ? "max-h-[300px] overflow-auto p-4 border border-gray-300 rounded-md shadow-sm bg-white" : ""
            }`}
          >
            {isExpanded ? fullMessage : `${fullMessage.substring(0, 300)}...`}
          </div>

          {/* Toggle Button */}
          <button
            className="mt-3 text-blue-600 hover:underline focus:outline-none"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>

          <p className="mt-4 font-semibold text-gray-900">Prof. Manisha Sharma</p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/3">
          <img
            src={directorImage}
            alt="Director"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
