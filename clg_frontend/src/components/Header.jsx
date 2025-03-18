import { Typewriter } from "react-simple-typewriter";
import { FaGift, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-teal-600 text-white text-sm flex justify-between items-center px-6 py-2">
      
      {/* Left Section - Typing Text */}
      <div className="font-bold">
        <Typewriter words={["Welcome To IIIT Sonepat"]} loop cursor />
      </div>

      

      {/* Right Section - Accessibility & Social Icons */}
      
      <div className="flex items-center space-x-4">
        {/* Donate Button */}
      <button className="bg-black px-3 py-1 flex items-center space-x-2 text-white font-bold rounded">
        <FaGift />
        <span>DONATE</span>
      </button>
        {/* Font Size Options */}
        <div className="flex space-x-1">
          <button className="hover:underline">A-</button>
          <button className="hover:underline">A</button>
          <button className="hover:underline">A+</button>
        </div>

        {/* Language Switch */}
        <span className="cursor-pointer">हिन्दी</span>

        {/* Email & Screen Reader */}
        {/* <MdEmail className="text-lg cursor-pointer" />
        <span className="cursor-pointer">Screen Reader</span> */}

        {/* Social Media Icons */}
        <FaFacebookF className="cursor-pointer hover:text-gray-300" />
        <FaTwitter className="cursor-pointer hover:text-gray-300" />
        <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
        <FaInstagram className="cursor-pointer hover:text-gray-300" />
        <FaYoutube className="cursor-pointer hover:text-gray-300" />
      </div>

    </div>
  );
};

export default Header;
