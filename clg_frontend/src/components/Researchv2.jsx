import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import research1 from "../assets/research1.jpg";
import research2 from "../assets/research2.jpg";
import research3 from "../assets/research3.jpg";

const researchData = [
  {
    id: 1,
    title: "Data Science & AI with IBM",
    subtitle: "PG Diploma",
    description: "Learn data science with real-world projects.",
    image: research1,
  },
  {
    id: 2,
    title: "Computer Science and Engineering",
    subtitle: "B.Tech. (CSE)",
    description: "Advanced CSE curriculum with practical labs.",
    image: research2,
  },
  {
    id: 3,
    title: "Electronics and Communications Engineering",
    subtitle: "B.Tech. (ECE)",
    description: "Cutting-edge electronics and communication courses.",
    image: research3,
  },
  {
    id: 3,
    title: "Electronics and Communications Engineering",
    subtitle: "B.Tech. (ECE)",
    description: "Cutting-edge electronics and communication courses.",
    image: research3,
  },
  {
    id: 3,
    title: "Electronics and Communications Engineering",
    subtitle: "B.Tech. (ECE)",
    description: "Cutting-edge electronics and communication courses.",
    image: research3,
  },
];

const ResearchCard = ({ title, subtitle, description, image }) => {
  return (
    <motion.div
      className="w-[300px] h-[400px] bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
    >
      {/* Image Section */}
      <div className="h-[40%]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Text Section */}
      <div className="p-6 h-[60%] flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-4">
          <button className="bg-transparent border border-teal-600 text-teal-500 px-4 py-2 text-sm rounded-lg hover:bg-teal-500 hover:text-white transition">
            View More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ResearchCarousel = () => {
  return (
    <div className="w-full bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-4xl font-bold text-center text-white mb-12">
          Research
        </h2> */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={-300}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {researchData.map((research) => (
            <SwiperSlide key={research.id}>
              <ResearchCard
                title={research.title}
                subtitle={research.subtitle}
                description={research.description}
                image={research.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ResearchCarousel;
