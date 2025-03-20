import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import clglogo from "../assets/logojpg.jpg";
import dataGov from "../assets/footer_gov_logo/dataGov.png";
import makeInIndia from "../assets/footer_gov_logo/makeInIndia.png";
import mygov from "../assets/footer_gov_logo/mygov.png";
import digitalIndia from "../assets/footer_gov_logo/DI.png";
import indiaGov from "../assets/footer_gov_logo/indiaGov.png";
import swacchBharat from "../assets/footer_gov_logo/swacchBharat.png";
import gandhiJi from "../assets/footer_gov_logo/gandhiJi.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mt-3">
        
        {/* Column 1 - Logo & Address */}
        <div>
          <img src={clglogo} alt="College Logo" className="h-20 mb-4" />
          <p className="text-gray-400 text-sm leading-6">
            Indian Institute of Information Technology, Sonepat <br />
            IIT Delhi Techno Park, Rajiv Gandhi Education City, Rai, Sonepat, Haryana-131001, India
          </p>
          <p className="mt-4 text-gray-400 text-sm">
            <span className="font-bold text-white">Phone:</span> 01302-987910, 7496966902
          </p>
          <p className="text-gray-400 text-sm">
            <span className="font-bold text-white">Email:</span> info@iiitsonepat.ac.in
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <div className="border-t-2 border-teal-600 w-16 mb-4"></div>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-teal-600">Timetables</a></li>
            <li><a href="#" className="hover:text-teal-600">Examinations</a></li>
            <li><a href="#" className="hover:text-teal-600">Semester Registration</a></li>
            <li><a href="#" className="hover:text-teal-600">Convocation</a></li>
            <li><a href="#" className="hover:text-teal-600">Downloads</a></li>
          </ul>
        </div>

        {/* Column 3 - Important Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Important Links</h3>
          <div className="border-t-2 border-teal-600 w-16 mb-4"></div>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-teal-600">MoE</a></li>
            <li><a href="#" className="hover:text-teal-600">JoSAA</a></li>
            <li><a href="#" className="hover:text-teal-600">Virtual Labs</a></li>
            <li><a href="#" className="hover:text-teal-600">NPTEL</a></li>
            <li><a href="#" className="hover:text-teal-600">DigiLocker</a></li>
          </ul>
        </div>

        {/* Column 4 - Newsletter & Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-3">Newsletter Sign Up</h3>
          <div className="border-t-2 border-teal-600 w-16 mb-4"></div>
          <div className="flex items-center bg-neutral-200 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Subscribe with Email"
              className="p-3 w-full text-gray-700 text-sm focus:outline-none"
            />
            <button className="bg-teal-600 px-5 py-[2px] text-black font-semibold mr-[8px] rounded-sm">Join</button>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-3">Alumni Sign Up</h3>
          <div className="border-t-2 border-teal-600 w-16 mb-4"></div>
          <button className="bg-teal-600 px-6 py-2 text-black font-bold rounded-lg hover:bg-teal-800 transition">
            Click here
          </button>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-8">
            <a href="#" className="text-gray-400 hover:text-teal-600 text-2xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-teal-600 text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-teal-600 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-teal-600 text-2xl"><FaLinkedin /></a>
            <a href="#" className="text-gray-400 hover:text-teal-600 text-2xl"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 text-center pt-4 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} IIIT Sonepat. Maintained by <span className="text-white font-bold">Dr. Wakar Ahmad & A4</span>.
      </div>
      <div className="govLogo flex justify-center items-center gap-4 bg-white mt-6 ">
        <a href="https://www.data.gov.in/"><img width={200} height={200} src={dataGov} alt="Data Gov"/></a>
        <a href="https://www.makeinindia.com/"><img width={200} height={200} src={makeInIndia} alt="Make in India" /></a>
        <a href="https://www.mygov.in/"><img width={200} height={200} src={mygov} alt="MyGov" /></a>
        <a href="https://www.digitalindia.gov.in/"><img width={200} height={200} src={digitalIndia} alt="Digital India" /></a>
        <a href="https://www.india.gov.in/"><img width={200} height={200} src={indiaGov} alt="India Gov" /></a>
        <a href="https://swachhbharatmission.ddws.gov.in/"><img width={200} height={200} src={swacchBharat} alt="Swachh Bharat" /></a>
        <a href="https://dsel.education.gov.in/150-years"><img width={200} height={200} src={gandhiJi} alt="Gandhi Ji" /></a>
      </div>
    </footer>
  );
};
export default Footer;
