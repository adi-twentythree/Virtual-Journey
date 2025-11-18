import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from '../assets/Icons/Icon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClasses = ({ isActive }) =>
    isActive ? "text-red-500" : "text-black hover:text-orange-500 transition-colors duration-300";

  return (
    <nav className="fixed w-full z-20 bg-white ">
      <div className="flex items-center lg:justify-center justify-between h-16 px-4 sm:px-6 lg:px-8 lg:gap-96">
        {/* Logo */}
          <NavLink
            to="/"
            className="text-black flex items-center gap-4 "
          >
            <img src={Logo} alt="Virtual Journey" width="50" height="auto" />
            <p>Virtual Journey</p>
          </NavLink>


        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-expanded={isOpen}
          >
            <div className="relative w-8 h-6 flex flex-col justify-between">
              <span
                className={`block h-1 w-8 bg-orange-500 rounded transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              ></span>
              <span
                className={`block h-1 w-8 bg-orange-500 rounded transition-opacity ${isOpen ? "opacity-0" : "opacity-100"
                  }`}
              ></span>
              <span
                className={`block h-1 w-8 bg-orange-500 rounded transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center text-lg gap-20 font-medium">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/portfolio" className={navLinkClasses}>
            Portfolio
          </NavLink>
          <NavLink to="/gallery" className={navLinkClasses}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden flex flex-col items-center bg-white/1 backdrop-blur-lg text-black space-y-14 mt-8 pb-4 transition-all font-semibold duration-300 ${isOpen ? "block" : "hidden"
          }`}
      >
        <li>
          <NavLink to="/" onClick={toggleMenu} className="hover:text-orange-500">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            onClick={toggleMenu}
            className="hover:text-orange-500"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            onClick={toggleMenu}
            className="hover:text-orange-500"
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className="pb-8 hover:text-orange-500"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
