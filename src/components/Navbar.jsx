import { useState } from "react";
import { Link } from "react-router-dom";
import { Smile, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 w-full px-4 lg:px-8 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center text-[#07a1d9] text-2xl font-bold">
          <img src="assets/images/LOGO.png" className=" h-14" alt="logo" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-[#07a1d9]">Home</Link>
          <Link to="/about" className="hover:text-[#07a1d9]">About</Link>
          <Link to="/services" className="hover:text-[#07a1d9]">Our Service</Link>
          <Link to="/gallery" className="hover:text-[#07a1d9]">Gallery</Link>
          <Link to="/latest_case" className="hover:text-[#07a1d9]">Our Latest Cases</Link>
          <Link to="/testimonial" className="hover:text-[#07a1d9]">Testimonials</Link>
          <Link to="/contact" className="hover:text-[#07a1d9]">Contact</Link>
          {/* <Link
            to="/appointment"
            className="bg-[#07a1d9] hover:bg-[#2885a7] text-white py-2 px-4 rounded transition"
          >
            Appointment
          </Link> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 space-y-4 text-gray-700 font-medium flex flex-col">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#07a1d9]">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#07a1d9]">About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-[#07a1d9]">Our Service</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-[#07a1d9]">Gallery</Link>
          <Link to="/latest_case" onClick={() => setIsOpen(false)} className="hover:text-[#07a1d9]">Our Latest Cases</Link>
          <Link to="/testimonial" onClick={() => setIsOpen(false)} className="hover:text-[#07a1d9]">Testimonials</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#07a1d9]">Contact</Link>
          {/* <Link
            to="/appointment"
            onClick={() => setIsOpen(false)}
            className="bg-[#07a1d9] hover:bg-[#2885a7] text-white py-2 px-4 rounded transition w-fit"
          >
           En
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
