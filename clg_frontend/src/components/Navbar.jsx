import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import DropdownMenu from "./DropDownMenu";

const menuItems = [
  {
    title: "About",
    submenus: [
      {
        heading: "About IIIT Sonepat",
        links: ["About Us", "Vision & Mission", "Past Directors", "Campus Map", "Campus Life"],
      },
      {
        heading: "Administration",
        links: ["Board of Governors", "Senate", "Administration", "Director", "Finance Committee", "Works Committee"],
      }
    ],
  },
  {
    title: "Academics",
    submenus: [
      {
        heading: "Academic",
        links: ["Faculty","Academic Calender","Academic Calender","Academic Calender","Academic Calender","Academic Calender","Academic Calender","Academic Calender",],
      },
      {
        heading: "Departments",
        links: ["Computer Science", "Electronics", "Mathematics"],
      },
    ],
  },
  {
    title: "Departments",
    submenus: [
      {
        heading: "Student Life",
        links: ["Hostels", "Clubs & Societies", "Sports", "Events"],
      },
      {
        heading: "Resources",
        links: ["Library", "Counseling", "Health Services"],
      },
    ],
  },
  {
    title: "Admissions",
    submenus: [
      {
        heading: "Student Life",
        links: ["Hostels", "Clubs & Societies", "Sports", "Events"],
      },
      {
        heading: "Resources",
        links: ["Library", "Counseling", "Health Services"],
      },
    ],
  },
  {
    title: "Research",
    submenus: [
      {
        heading: "Student Life",
        links: ["Hostels", "Clubs & Societies", "Sports", "Events"],
      },
      {
        heading: "Resources",
        links: ["Library", "Counseling", "Health Services"],
      },
    ],
  },
  {
    title: "Collaborations",
    submenus: [
      {
        heading: "Student Life",
        links: ["Hostels", "Clubs & Societies", "Sports", "Events"],
      },
      {
        heading: "Resources",
        links: ["Library", "Counseling", "Health Services"],
      },
    ],
  },
  {
    title: "Placements",
    submenus: [
      {
        heading: "Student Life",
        links: ["Hostels", "Clubs & Societies", "Sports", "Events"],
      },
      {
        heading: "Resources",
        links: ["Library", "Counseling", "Health Services"],
      },
    ],
  },
  {
    title: "Life at IIITS",
    submenus: [
      {
        heading: "Student Life",
        links: ["Hostels", "Clubs & Societies", "Sports", "Events"],
      },
      {
        heading: "Resources",
        links: ["Library", "Counseling", "Health Services"],
      },
    ],
  },
  {
    title: "CONVOCATION 2024",
    submenus: [
      {
        heading: "Student Life",
        links: ["Hostels", "Clubs & Societies", "Sports", "Events"],
      },
      {
        heading: "Resources",
        links: ["Library", "Counseling", "Health Services"],
      },
    ],
  }
];

// const Navbar = () => {
//   return (
//     <nav className="h-[50px] bg-gray-900 text-white px-6 py-3 flex items-center justify-center shadow-md">
//       {/* Home Icon */}
      

//       {/* Menu Items */}
//       <div className="flex bg-red h-full ">
//       <FaHome className="text-xl cursor-pointer hover:text-gray-400 mr-[13px] mt-[2px]" />
//         {menuItems.map((item, index) => (
//           <DropdownMenu key={index} title={item.title} submenus={item.submenus} />
//         ))}
//       </div>
//     </nav>
//   );
// };
const Navbar = () => {
    return (
      <nav className="sticky top-0 z-50 w-full h-[50px] bg-gray-900 text-white px-6 py-3 flex items-center justify-center shadow-md">
        {/* Home Icon */}
        <Link to="/">
          <FaHome className="text-xl cursor-pointer hover:text-gray-400 mr-[13px] mt-[2px]" />
        </Link>
  
        {/* Menu Items */}
        <div className="flex h-full">
          {menuItems.map((item, index) => (
            <DropdownMenu key={index} title={item.title} submenus={item.submenus} />
          ))}
        </div>
      </nav>
    );
  };
    

export default Navbar;
