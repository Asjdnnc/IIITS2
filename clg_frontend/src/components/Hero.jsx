import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import campaign from "../assets/campaign.jpg"
import agnito from"../assets/agnito.jpg"
import collab from"../assets/collab.jpg"

const images = [
  collab,  // Imported image
    agnito,    // Imported image
    collab,
    agnito
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[600px] ">
      {/* Image Slider */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="Carousel Image"
          className="absolute w-full h-full object-fit"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Left Button */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black"
        onClick={prevSlide}
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Right Button */}
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black"
        onClick={nextSlide}
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`h-3 w-3 rounded-full transition-all ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
