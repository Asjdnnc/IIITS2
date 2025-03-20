import React from 'react';
import clglogo from "../assets/logojpg.jpg";

const LoadingScreen = ({ isVisible }) => {
  return (
    <div 
      className={`fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 transition-transform duration-1000 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <img 
        src={clglogo} 
        alt="IIIT Sonepat Logo" 
        className="w-100 h-100 mb-8 animate-pulse"
      />
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce"></div>
      </div>
      <p className="text-white mt-4 text-3xl font-semibold">Welcome to IIIT Sonepat</p>
    </div>
  );
};

export default LoadingScreen; 