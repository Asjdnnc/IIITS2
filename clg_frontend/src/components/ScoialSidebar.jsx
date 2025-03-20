import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const SocialSidebar = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/", color: "bg-blue-600" },
    { icon: <FaXTwitter />, url: "https://twitter.com/", color: "bg-sky-400" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/", color: "bg-gradient-to-r from-pink-500 to-yellow-500" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/", color: "bg-blue-700" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/", color: "bg-red-600" }
  ];

  return (
    <div className="fixed top-3/4 left-0 z-50 -translate-y-1/2">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-10 h-10 ${link.color} text-white flex justify-center items-center transition-all duration-300 hover:bg-black hover:w-9 hover:h-9`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;