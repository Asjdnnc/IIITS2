import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const notices = [
  "📢 Mid-Semester Exams start from April 10th, 2025.",
  "🚀 Workshop on AI & ML - Register by March 20th!",
  "🏆 Hackathon registrations open - Prize pool ₹1,00,000!",
  "📜 Convocation 2024 details announced. Check the official site!",
  "📅 Academic Calendar for 2025 released.",
  "🔬 Research grant applications open until March 31st.",
  "🎉 Annual Fest - Get ready for exciting events!",
  "💼 Internship & Placement drive starts in April.",
];

const NoticesVerticalCarousel = () => {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let interval;
    if (!paused) {
      interval = setInterval(() => {
        const firstNotice = notices.shift(); // Remove the first notice
        notices.push(firstNotice); // Push it to the end
      }, 30000); // Change notice every 3 seconds
    }
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div
      className="relative bg-gray-900  text-white p-4 rounded-lg shadow-lg w-full max-w-md mx-auto overflow-hidden mt-[50px] ml-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Title */}
      <h2 className="text-lg font-semibold mb-3 text-center">📜 Latest Notices</h2>

      {/* Scrolling Container */}
      <div className="h-40 overflow-hidden relative">
        <motion.div
          animate={{ y: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 15, // Controls speed (increase for slower)
            ease: "linear",
          }}
          className="flex flex-col space-y-3"
        >
          {notices.concat(notices).map((notice, index) => (
            <div
              key={index}
              className="bg-white text-blue-900 px-4 py-2 rounded-md shadow-md"
            >
              {notice}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NoticesVerticalCarousel;
