import { FaSearch } from "react-icons/fa";
import collegeLogo from "../assets/college.png";
import logo2 from "../assets/logo2.png";


const Header2 = () => {
  return (
    <div className="bg-white flex justify-between items-center px-6 py-4 shadow-md">
      
      {/* Left Section - Logo and Text */}
      <div className="flex items-center space-x-4 ">
        <img 
          src={collegeLogo}
          alt="IIT Guwahati Logo" 
          className="h-18 w-[450px]"
        />
      </div>

      {/* Middle Section - Search */}
      <div className="flex items-center space-x-2 text-gray-600">
        <FaSearch className="text-orange-500 text-lg" />
        <div className="text-sm">
          <p>Looking for..</p>
          <p className="font-semibold">Search on IIITS</p>
        </div>
      </div>

      {/* Right Section - Additional Logos */}
      <div className="flex items-center space-x-4">
        <img 
          src={logo2} 
          alt="G20 Logo" 
          className="h-12 w-[300px]"
        />
      </div>
      
    </div>
  );
};

export default Header2;
