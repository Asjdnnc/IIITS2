import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import campaign from "../assets/campaign.jpg";
import collab from "../assets/collab.jpg";
import agnito from "../assets/agnito.jpg"
import workshop from "../assets/workshop.webp"

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);

  const galleries = [
    {
      id: 1,
      name: "Campus Life",
      images: [agnito, collab, workshop],
      url: "/gallery/campus-life",
    },
    {
      id: 2,
      name: "Clubs",
      images: [collab, "/images/gallery/clubs2.jpg", "/images/gallery/clubs3.jpg"],
      url: "/gallery/clubs",
    },
    {
      id: 3,
      name: "Sports",
      images: [collab, "/images/gallery/sports2.jpg", "/images/gallery/sports3.jpg"],
      url: "/gallery/sports",
    },
  ];

  // Open Modal
  const openModal = (gallery, index) => {
    setSelectedGallery(gallery);
    setModalIndex(index);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGallery(null);
    setModalIndex(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleries.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === galleries.length - 1 ? 0 : prevIndex + 1));
  };

  const prevModalSlide = () => {
    setModalIndex((prevIndex) =>
      prevIndex === 0 ? selectedGallery.images.length - 1 : prevIndex - 1
    );
  };

  const nextModalSlide = () => {
    setModalIndex((prevIndex) =>
      prevIndex === selectedGallery.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden mb-6 mt-6">
        <div className="mb-3">
    <h1 className="text-3xl md:text-4xl font-[20px] text-gray-800  text-center tracking-wide uppercase relative">
      Gallery
      <span className="block w-20 h-1 bg-teal-500 mx-auto mt-2 rounded-full"></span>
    </h1>
  </div>
      {/* Carousel */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {galleries.map((gallery, index) => (
          <div key={index} className="min-w-full flex">
            {/* Collage Section */}
            <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-[450px]">
              {gallery.images.map((image, idx) => (
                <div
                  key={idx}
                  className={`relative group overflow-hidden rounded-lg cursor-pointer ${
                    idx === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                  }`}
                  onClick={() => openModal(gallery, idx)}
                >
                  <img
                    src={image}
                    alt={gallery.name}
                    className="w-full h-full object-fit transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-teal-300 bg-opacity-50 opacity-0 group-hover:opacity-40 transition-opacity flex items-center justify-center">
                    <span className="text-white text-lg font-bold">{gallery.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Modal with Blur Background */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-100 backdrop-blur-sm ">
          <div className="relative w-3/4 h-3/4 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <FaTimes size={24} />
            </button>

            {/* Image Slider */}
            <div className="w-full h-full flex items-center justify-center relative">
              <button
                onClick={prevModalSlide}
                className="absolute left-4 bg-gray-800 text-white p-2 rounded-full hover:bg-teal-600"
              >
                <FaChevronLeft size={20} />
              </button>

              <img
                src={selectedGallery.images[modalIndex]}
                alt="Gallery"
                className="w-full h-full object-contain"
              />

              <button
                onClick={nextModalSlide}
                className="absolute right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
