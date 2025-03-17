import React, { useState, useEffect } from "react";
import directorImage from "../assets/sir.png"; // Ensure this image exists in the correct path

const messages = [
  "Welcome to IIIT Sonepat, a hub of innovation and excellence...",
  "Our mission is to empower students with knowledge and skills...",
  "We strive to foster creativity and research in emerging technologies...",
];

const TYPING_SPEED = 50; // Speed of typing in ms
const ERASE_SPEED = 30; // Speed of erasing in ms
const DELAY_BEFORE_ERASE = 1500; // Delay before erasing in ms

const DirectorMessage = () => {
  const [text, setText] = useState(""); // Stores the current text being displayed
  const [index, setIndex] = useState(0); // Index of the message being typed
  const [charIndex, setCharIndex] = useState(0); // Character index for typing effect
  const [isDeleting, setIsDeleting] = useState(false); // Controls typing or erasing

  useEffect(() => {
    const currentMessage = messages[index];

    if (!isDeleting && charIndex < currentMessage.length) {
      // Typing Effect
      const typingTimeout = setTimeout(() => {
        setText((prev) => prev + currentMessage[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, TYPING_SPEED);

      return () => clearTimeout(typingTimeout);
    } else if (!isDeleting && charIndex === currentMessage.length) {
      // Wait before starting deletion
      setTimeout(() => setIsDeleting(true), DELAY_BEFORE_ERASE);
    } else if (isDeleting && charIndex > 0) {
      // Erasing Effect
      const erasingTimeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, ERASE_SPEED);

      return () => clearTimeout(erasingTimeout);
    } else if (isDeleting && charIndex === 0) {
      // Move to the next message
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % messages.length);
    }
  }, [charIndex, isDeleting, index]);

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Message */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 flex items-center">
            <span className="mr-2">📜</span> Director's Message
          </h2>
          <p className="text-lg font-serif text-gray-700 leading-relaxed">
            {text}
            <span className="animate-blink">|</span>
          </p>
          <p className="mt-4 font-semibold text-gray-900">Prof. Wakar Ahmad</p>
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
