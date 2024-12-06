import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    home: false,
    blog: false,
    gallery: false,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-white  z-50">
    <nav className="bg-black/80 text-white  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Section - Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-gray-400 text-2xl font-light">RIDERZCONNECT</Link>
          </div>

          {/* Center Section - Desktop Menu */}
          <div className="hidden md:flex space-x-4 mx-auto">
            <ul className="flex space-x-4">
            <li className="relative group">
                <Link to="/home">
                <button
                  
                  className="flex items-center text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </button>
                </Link>
              </li>

              <li className="relative group">
                <Link to="/events">
                <button
                  
                  className="flex items-center text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Events
                </button>
                </Link>
              </li>

              <li className="relative group">
                <button
                  onClick={() => toggleDropdown('rides')}
                  className="flex items-center text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Rides
                </button>
              </li>

              <li className="relative group">
                <button
                  onClick={() => toggleDropdown('gallery')}
                  className="flex items-center text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  More
                  <span
                    className={`ml-2 transform transition-transform ${
                      dropdownOpen.gallery ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    &#9662; {/* Down arrow */}
                  </span>
                </button>
                {dropdownOpen.gallery && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                    <ul className="py-1">
                      <li>
                        <Link
                          to="/gallery/collection1"
                          className="text-gray-700 block px-4 py-2 text-sm"
                        >
                          Collection 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/gallery/collection2"
                          className="text-gray-700 block px-4 py-2 text-sm"
                        >
                          Collection 2
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Right Section - Signup and Login Buttons on Desktop */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/signup"
              className="bg-yellow-500 text-white hover:bg-Yellow-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Signup
            </Link>
            <Link
              to="/login"
              className="text-white border-2 border-Yellow-500 hover:bg-Yellow-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu - Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              ☰ {/* Menu icon */}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="mt-2 bg-gray-700 rounded-md shadow-lg">
            <div className="py-1">
              <Link
                to="/home"
                className="block text-white px-4 py-2 text-lg hover:bg-gray-600"
              >
                Home
              </Link>
              <Link
                to="/events"
                className="block text-white px-4 py-2 text-lg hover:bg-gray-600"
              >
                Events
              </Link>
              <Link
                to="/gallery"
                className="block text-white px-4 py-2 text-lg hover:bg-gray-600"
              >
                Rides
              </Link>
              <Link
                to="/login"
                className="block text-white px-4 py-2 text-lg hover:bg-gray-600"
              >
                More
              </Link>
              <Link
                to="/login"
                className="block text-white px-4 py-2 text-sm hover:bg-gray-600"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block text-white px-4 py-2 text-sm hover:bg-gray-600"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default NavigationBar;
