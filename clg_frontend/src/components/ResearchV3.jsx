import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import research1 from "../assets/research1.jpg";
import research2 from "../assets/research2.jpg";
import research3 from "../assets/research3.jpg";

const ResearchV3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);
  const autoSlideRef = useRef(null);
  const containerRef = useRef(null);

  const programs = [
    {
      title: "Computer Science and Social Sciences",
      degree: "B.Tech. (CSS)",
      image: research1
    },
    {
      title: "Computer Science and Biosciences",
      degree: "B.Tech. (CSB)",
      image: research2
    },
    {
      title: "Computer Science and Engineering",
      degree: "M.Tech. (CSE)",
      image: research3
    },
    {
      title: "Computer Science and Engineering",
      degree: "Ph.D. (CSE)",
      image: research1
    },
    {
      title: "Computer Science and Engineering",
      degree: "M.S. (CSE)",
      image: research2
    }
  ];

  // Auto-slide functionality with reduced time interval
  const startAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    
    autoSlideRef.current = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 3000); // Changed from 4000 to 3000 milliseconds (3 seconds)
  };

  useEffect(() => {
    startAutoSlide();
    
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Reduced animation time from 600ms to 500ms
  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection('next');
    
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % programs.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection('prev');
    
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + programs.length) % programs.length);
      setIsAnimating(false);
    }, 500);
  };

  const getCardStyle = (position) => {
    const baseStyle = {
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', // Reduced from 0.6s to 0.5s
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: position === 'active' ? 20 : 10,
      opacity: 1,
      width: '400px',
      willChange: 'transform, opacity, filter',
    };

    // Going next (right to left)
    if (direction === 'next' && isAnimating) {
      if (position === 'active') {
        return {
          ...baseStyle,
          transform: 'translate(-150%, -50%) scale(0.75)',
          opacity: 0.4,
          filter: 'brightness(80%)',
          zIndex: 10,
        };
      } else if (position === 'next') {
        return {
          ...baseStyle,
          transform: 'translate(-50%, -50%) scale(1)',
          opacity: 1,
          filter: 'brightness(100%)',
          zIndex: 20,
        };
      } else if (position === 'prev') {
        return {
          ...baseStyle,
          transform: 'translate(-250%, -50%) scale(0.5)',
          opacity: 0,
          zIndex: 5,
        };
      } else if (position === 'prev-prev') {
        return {
          ...baseStyle,
          transform: 'translate(-300%, -50%) scale(0.25)',
          opacity: 0,
          zIndex: 1,
        };
      } else if (position === 'next-next') {
        // Improved entry animation for rightmost card
        return {
          ...baseStyle,
          transform: 'translate(200%, -50%) scale(0.75)', // Start further to the right
          opacity: 0.4,
          filter: 'brightness(80%)',
          zIndex: 5,
          transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)', // Improved easing
        };
      }
    } 
    // Going prev (left to right)
    else if (direction === 'prev' && isAnimating) {
      if (position === 'active') {
        return {
          ...baseStyle,
          transform: 'translate(50%, -50%) scale(0.75)',
          opacity: 0.4,
          filter: 'brightness(80%)',
          zIndex: 10,
        };
      } else if (position === 'prev') {
        return {
          ...baseStyle,
          transform: 'translate(-50%, -50%) scale(1)',
          opacity: 1,
          filter: 'brightness(100%)',
          zIndex: 20,
        };
      } else if (position === 'next') {
        return {
          ...baseStyle,
          transform: 'translate(150%, -50%) scale(0.5)',
          opacity: 0,
          zIndex: 5,
        };
      } else if (position === 'next-next') {
        return {
          ...baseStyle,
          transform: 'translate(200%, -50%) scale(0.25)',
          opacity: 0,
          zIndex: 1,
        };
      } else if (position === 'prev-prev') {
        return {
          ...baseStyle,
          transform: 'translate(-125%, -50%) scale(0.75)', // Changed from -100% to -125%
          opacity: 0.4,
          filter: 'brightness(80%)',
          zIndex: 5,
          transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Different easing
        };
      }
    }
    // Default positions (not animating)
    else {
      if (position === 'active') {
        return {
          ...baseStyle,
          transform: 'translate(-50%, -50%) scale(1)',
          opacity: 1,
          filter: 'brightness(100%)',
          zIndex: 20,
        };
      } else if (position === 'prev') {
        return {
          ...baseStyle,
          transform: 'translate(-150%, -50%) scale(0.75)',
          opacity: 0.4,
          filter: 'brightness(80%)',
          zIndex: 10,
        };
      } else if (position === 'next') {
        return {
          ...baseStyle,
          transform: 'translate(50%, -50%) scale(0.75)',
          opacity: 0.4,
          filter: 'brightness(80%)',
          zIndex: 10,
        };
      } else if (position === 'prev-prev') {
        return {
          ...baseStyle,
          transform: 'translate(-225%, -50%) scale(0.5)',
          opacity: 0,
          zIndex: 5,
        };
      } else if (position === 'next-next') {
        // Better default position for the rightmost card
        return {
          ...baseStyle,
          transform: 'translate(200%, -50%) scale(0.5)', // Position it more to the right
          opacity: 0,
          zIndex: 5,
        };
      }
    }

    return baseStyle;
  };

  const getVisiblePrograms = () => {
    const prevPrevIndex = (activeIndex - 2 + programs.length) % programs.length;
    const prevIndex = (activeIndex - 1 + programs.length) % programs.length;
    const nextIndex = (activeIndex + 1) % programs.length;
    const nextNextIndex = (activeIndex + 2) % programs.length;
    
    // Always show 5 cards for a smooth experience
    return [
      {
        ...programs[prevPrevIndex],
        position: 'prev-prev',
        index: prevPrevIndex
      },
      {
        ...programs[prevIndex],
        position: 'prev',
        index: prevIndex
      },
      {
        ...programs[activeIndex],
        position: 'active',
        index: activeIndex
      },
      {
        ...programs[nextIndex],
        position: 'next',
        index: nextIndex
      },
      {
        ...programs[nextNextIndex],
        position: 'next-next',
        index: nextNextIndex
      }
    ];
  };

  // Pause auto-slide on hover
  const handleMouseEnter = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  // Resume auto-slide on mouse leave
  const handleMouseLeave = () => {
    startAutoSlide();
  };

  // Handle manual navigation button clicks
  const handleNavClick = (handler) => {
    // Execute the navigation action
    handler();
    
    // Reset the auto-slide timer to prevent immediate auto-slide after manual navigation
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    startAutoSlide();
  };

  return (
    <div className="bg-gray-100 py-5">
      {/* Section 1 - Title */}
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">Research</h2>
        <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
      </div>

      {/* Section 2 - Programs Carousel */}
      <div className="relative max-w-7xl mx-auto px-4 mb-5">
        <div className="flex justify-center items-center">
          <button 
            onClick={() => handleNavClick(handlePrev)}
            className="absolute left-4 z-30 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-transform duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div 
            ref={containerRef}
            className="relative w-full h-[500px] overflow-hidden"
            style={{ perspective: '1000px' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full h-full relative">
              {getVisiblePrograms().map((program) => (
                <div
                  key={`${program.position}-${program.index}`}
                  style={getCardStyle(program.position)}
                  className="transform-gpu"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full transform transition-transform duration-500">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                      <p className="text-gray-600 mb-4">{program.degree}</p>
                      <button className="px-6 py-2 border-2 border-teal-500 text-teal-500 rounded-md hover:bg-teal-500 hover:text-white transition-colors">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => handleNavClick(handleNext)}
            className="absolute right-4 z-30 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-transform duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchV3;