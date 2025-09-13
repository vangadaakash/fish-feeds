import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes, FaFish } from "react-icons/fa";
import logo from "/images/nav-logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/918933095000"; // ✅ Your correct WhatsApp link

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-2" : "bg-gradient-to-r from-teal-700 to-blue-800 py-3"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={logo}
              alt="Populerr Fish Feeds Logo"
              className="h-12 w-12 rounded-full border-2 border-white shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 bg-amber-500 rounded-full p-1">
              <FaFish className="text-white text-xs" />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className={`font-bold text-xl md:text-2xl tracking-tight ${isScrolled ? "text-gray-800" : "text-white"}`}>
              POPULERR FISH FEED
            </h1>
            <p className={`text-xs ${isScrolled ? "text-gray-600" : "text-blue-100"} hidden md:block`}>
              Premium Aquaculture Nutrition
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`font-medium py-2 relative group transition duration-300 ${isScrolled ? "text-gray-700 hover:text-teal-600" : "text-white hover:text-amber-300"}`}>
            Home
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-teal-600" : "bg-amber-300"}`}></span>
          </Link>
          <Link to="/products" className={`font-medium py-2 relative group transition duration-300 ${isScrolled ? "text-gray-700 hover:text-teal-600" : "text-white hover:text-amber-300"}`}>
            Products
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-teal-600" : "bg-amber-300"}`}></span>
          </Link>
          <Link to="/about" className={`font-medium py-2 relative group transition duration-300 ${isScrolled ? "text-gray-700 hover:text-teal-600" : "text-white hover:text-amber-300"}`}>
            About
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-teal-600" : "bg-amber-300"}`}></span>
          </Link>
          <Link to="/contact" className={`font-medium py-2 relative group transition duration-300 ${isScrolled ? "text-gray-700 hover:text-teal-600" : "text-white hover:text-amber-300"}`}>
            Contact
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-teal-600" : "bg-amber-300"}`}></span>
          </Link>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition duration-300 shadow-md hover:shadow-lg ml-4"
          >
            <FaWhatsapp className="text-lg" />
            <span>Chat Now</span>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition duration-300 ${isScrolled ? "bg-green-500 text-white" : "bg-white text-green-600"}`}
          >
            <FaWhatsapp className="text-lg" />
          </a>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md transition duration-300 ${isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-blue-700"}`}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full shadow-lg ${isScrolled ? "bg-white" : "bg-blue-800"}`}>
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-1">
            <Link to="/" onClick={() => setIsOpen(false)} className={`py-3 px-4 rounded-lg transition duration-300 ${isScrolled ? "text-gray-700 hover:bg-teal-50 hover:text-teal-600" : "text-white hover:bg-blue-700"}`}>
              Home
            </Link>
            <Link to="/products" onClick={() => setIsOpen(false)} className={`py-3 px-4 rounded-lg transition duration-300 ${isScrolled ? "text-gray-700 hover:bg-teal-50 hover:text-teal-600" : "text-white hover:bg-blue-700"}`}>
              Products
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={`py-3 px-4 rounded-lg transition duration-300 ${isScrolled ? "text-gray-700 hover:bg-teal-50 hover:text-teal-600" : "text-white hover:bg-blue-700"}`}>
              About
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={`py-3 px-4 rounded-lg transition duration-300 ${isScrolled ? "text-gray-700 hover:bg-teal-50 hover:text-teal-600" : "text-white hover:bg-blue-700"}`}>
              Contact
            </Link>

            {/* Fixed WhatsApp Button in Mobile Menu */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition duration-300 mt-2"
            >
              <FaWhatsapp className="text-lg" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
