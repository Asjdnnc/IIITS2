import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import clglogo from "../assets/clglogo.png";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Logo & Address */}
        <div>
          <img src= {clglogo} alt="College Logo" className="h-16 mb-4" />
          <p className="text-gray-400">
            Indian Institute of Information Technology, Sonepat <br />
            IIT Delhi Techno Park, Rajiv Gandhi Education City, Rai, Sonepat, Haryana-131001, India
          </p>
          <p className="mt-2 text-gray-400">
            Phone: <span className="text-white font-semibold">01302-987910, 7496966902</span>
          </p>
          <p className="text-gray-400">Email: info@iiitsonepat.ac.in</p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Timetables</a></li>
            <li><a href="#" className="hover:text-white">Examinations</a></li>
            <li><a href="#" className="hover:text-white">Semester Registration</a></li>
            <li><a href="#" className="hover:text-white">Convocation</a></li>
            <li><a href="#" className="hover:text-white">Downloads</a></li>
          </ul>
        </div>

        {/* Column 3 - Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Important Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">MoE</a></li>
            <li><a href="#" className="hover:text-white">JoSAA</a></li>
            <li><a href="#" className="hover:text-white">Virtual Labs</a></li>
            <li><a href="#" className="hover:text-white">NPTEL</a></li>
            <li><a href="#" className="hover:text-white">DigiLocker</a></li>
          </ul>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaLinkedin /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 text-center pt-5 text-gray-400">
        &copy; {new Date().getFullYear()} IIIT Sonepat. Maintained by <span className="text-white font-semibold">Dr. Wakar Ahmad & ACube</span>.
      </div>
    </footer>
  );
};

export default Footer;
