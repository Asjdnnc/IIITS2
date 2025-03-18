import { FaBook, FaUserGraduate, FaUniversity, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import campus from "../assets/campus3.jpg";

const stats = [
  { icon: <FaBook />, title: "Publications", count: "5500+", color: "bg-green-500" },
  { icon: <FaUserGraduate />, title: "Alumni", count: "2600+", color: "bg-yellow-400" },
  { icon: <FaUniversity />, title: "Students", count: "2800+", color: "bg-red-400" },
  { icon: <FaChartLine />, title: "Placements", count: "2000+", color: "bg-blue-400" },
];

const StatsSection = () => {
  return (
    <div className="relative bg-cover bg-center py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${campus})` }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex justify-center gap-20 flex-wrap opacity-90">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{  duration: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="w-[200px] h-[200px] bg-white shadow-lg rounded-3xl overflow-hidden cursor-pointer transition-transform duration-300"
          >
            {/* Colored region (no animation here) */}
            <div className={`h-1/2 flex justify-center items-center ${item.color}`}>
              {/* Only the icon rotates vertically */}
              <motion.div
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-white text-4xl"
              >
                {item.icon}
              </motion.div>
            </div>

            {/* Title and Count */}
            <div className="h-1/2 bg-white p-6 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold text-gray-700">{item.title}</h3>
              <p className="text-3xl font-extrabold text-gray-900">{item.count}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
