import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResearchCarousel from "./Researchv2";  // Your reusable carousel component

const ResearchTabs = () => {
  const [activeTab, setActiveTab] = useState("students");

  return (
    <div className="max-w-7xl mx-auto py-16">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab("students")}
          className={`px-6 py-3 rounded-lg text-lg font-bold transition-all duration-300 ${
            activeTab === "students" ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Student Achievements
        </button>

        <button
          onClick={() => setActiveTab("faculty")}
          className={`px-6 py-3 rounded-lg text-lg font-bold transition-all duration-300 ${
            activeTab === "faculty" ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Faculty Awards
        </button>
      </div>

      {/* Tab Content */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === "students" && (
            <motion.div
              key="students"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <ResearchCarousel />
            </motion.div>
          )}

          {activeTab === "faculty" && (
            <motion.div
              key="faculty"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <ResearchCarousel />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ResearchTabs;
