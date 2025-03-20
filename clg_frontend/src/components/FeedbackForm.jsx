import React, { useRef, useEffect } from "react";
import { X } from "lucide-react";

const FeedbackForm = ({ onClose }) => {
  const formRef = useRef(null);

  // Close form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Prevent default form submission behavior
  const handleSubmit = (event) => {
    event.preventDefault(); // 💡 Prevent page reload
    console.log("Form submitted!");
    // Add form handling logic here (e.g., send data to backend)
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/60 transition-opacity duration-300 ease-in-out">
      <div
        ref={formRef}
        className="w-full max-w-md bg-white rounded-lg shadow-lg transform animate-slideDown mt-16"
      >
        {/* Header */}
        <div className="flex justify-between items-center bg-gray-900 text-neutral-50 p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">Share Your Feedback</h2>
          <X className="cursor-pointer text-white hover:text-teal-500" onClick={onClose} />
        </div>

        {/* Form */}
        <div className="p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 border rounded focus:outline-teal-500"
            />
            <input
              type="email"
              placeholder="Enter A Valid Email"
              className="w-full p-3 border rounded focus:outline-teal-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 border rounded focus:outline-teal-500"
            ></textarea>
            
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
                onClick={onClose}
              >
                Close
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;