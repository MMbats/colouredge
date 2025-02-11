import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="bg-[#0f172a] w-full text-gray-300">
      <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Get Started */}
          <div>
            <h3 className="text-lg font-semibold text-white">Get Started</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="hover:text-orange-500">Request Sample Kit</Link></li>
              <li><Link to="/" className="hover:text-orange-500">My Account</Link></li>
              <li><Link to="/" className="hover:text-orange-500">All Products</Link></li>
              <li><Link to="/" className="hover:text-orange-500">Business Card Guide</Link></li>
              <li><Link to="/" className="hover:text-orange-500">Download Templates</Link></li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="text-lg font-semibold text-white">Learn More</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="hover:text-orange-500">Guarantee</Link></li>
              <li><Link to="/" className="hover:text-orange-500">Production Time</Link></li>
              <li><Link to="/" className="hover:text-orange-500">Paper Stocks</Link></li>
              <li><Link to="/" className="hover:text-orange-500">FAQ</Link></li>
            </ul>
          </div>

          {/* Who We Are */}
          <div>
            <h3 className="text-lg font-semibold text-white">Who We Are</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="hover:text-orange-500">About Us</Link></li>
              <li><Link to="/locations" className="hover:text-orange-500">Locations</Link></li>
              <li><Link to="/capabilities" className="hover:text-orange-500">Capabilities</Link></li>
              <li><Link to="/careers" className="hover:text-orange-500">Careers</Link></li>
            </ul>
          </div>

          {/* Stay In Touch */}
          <div>
            <h3 className="text-lg font-semibold text-white">Stay In Touch</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/contact" className="hover:text-orange-500">Contact Us</Link></li>
              <li><Link to="/feedback" className="hover:text-orange-500">Feedback</Link></li>
              <li><Link to="/collaborations" className="hover:text-orange-500">Collaborations</Link></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
          
          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-4">
            <FaFacebookF className="text-xl hover:text-orange-500 cursor-pointer" />
            <FaTwitter className="text-xl hover:text-orange-500 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-orange-500 cursor-pointer" />
            <FaTiktok className="text-xl hover:text-orange-500 cursor-pointer" />
            <FaYoutube className="text-xl hover:text-orange-500 cursor-pointer" />
            <FaLinkedin className="text-xl hover:text-orange-500 cursor-pointer" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 mt-4">
            &copy; {new Date().getFullYear()} COLOUREDGE.  All rights reserved. | <Link to="/privacy" className="hover:text-orange-500">Privacy Policy</Link> | <Link to="/terms" className="hover:text-orange-500">Terms of Use</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
