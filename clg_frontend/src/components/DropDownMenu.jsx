import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const DropdownMenu = ({ title, submenus }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative bg-red "
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-1 hover:text-gray-300 h-[50px] mt-[-12px] p-[10px] text-[19px]">
        <span>{title}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-900 shadow-lg rounded-lg p-4 z-10  ">
          {submenus.map((menu, idx) => (
            <div key={idx} className="mb-3">
              <h3 className="text-blue-600 font-semibold">{menu.heading}</h3>
              <ul className="mt-2 space-y-1">
                {menu.links.map((link, i) => (
                  <li key={i} className="hover:text-blue-500 cursor-pointer">
                    {typeof link === 'string' ? (
                      <span>{link}</span>
                    ) : (
                      <Link to={link.path}>{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
