import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../Assets/white_logo_transparent_background.png";

const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({}); // Store dropdown state for each item
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track scroll position
  const [navbarVisible, setNavbarVisible] = useState(true); // Control navbar visibility
  const location = useLocation();

  // Collapse menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false); // Close mobile menu on page change
    setDropdownOpen({}); // Close dropdown on page change
  }, [location]);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setNavbarVisible(false); // Scrolling down
      else setNavbarVisible(true); // Scrolling up
      setLastScrollY(window.scrollY); // Update scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Toggle dropdown menu visibility for each menu item
  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };
  
  // Toggle mobile menu visibility
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className={`bg-black/60 opacity-80 text-white z-50 fixed w-full top-0 left-0 transition-all duration-300 ${navbarVisible ? 'translate-y-0' : '-translate-y-28'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
          <div className="flex justify-between items-center h-20 md:h-32">
            {/* Left Section - Logo */}
            <div className="flex-shrink-0 w-[15%] sm:w-[10%]">
              <Link to="/">
                <img src={logo} alt="Logo" className="h-10 sm:h-12 md:h-16 lg:h-28 lg:w-48 rounded-lg" />
              </Link>
            </div>

            {/* Center Section - Desktop Menu */}
            <div className="hidden md:flex w-[70%] items-center justify-center space-x-4">
              <ul className="flex space-x-4">
                {/* Menu items with dropdown functionality */}
                {['home', 'gallery', 'rides', 'shop', 'events', 'media', 'news', 'pages'].map((item) => (
                  <li key={item} className="relative group">
                    <div className="flex items-center justify-between">
                      {/* Main link */}
                      <Link to={`/${item}`} className="text-white px-2 py-1 rounded-md text-sm font-medium hover:bg-gray-700">
                        {item.toUpperCase()}
                      </Link>

                      {/* Down Arrow Button */}
                      <button
                        onClick={() => toggleDropdown(item)}
                        className="text-white px-2 py-1"
                      >
                        &#9662; {/* Down Arrow */}
                      </button>
                    </div>

                    {/* Dropdown Menu */}
                    {dropdownOpen[item] && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                        <ul className="py-1">
                          <li><Link to={`/gallery/${item}/collection1`} className="text-gray-700 block px-4 py-2 text-sm">Collection 1</Link></li>
                          <li><Link to={`/gallery/${item}/collection2`} className="text-gray-700 block px-4 py-2 text-sm">Collection 2</Link></li>
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Signup Button */}
            <div className="hidden md:flex">
              <Link to="/signup" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 text-sm font-medium">
                JOIN THE CLUB
              </Link>
            </div>

            {/* Mobile Menu - Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-xl">
                ☰ {/* Hamburger Menu */}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`md:hidden transition-all ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
            <div className="mt-2 rounded-md shadow-lg">
              <div className="py-1">
                {['home', 'events', 'rides', 'gallery', 'login'].map((item) => (
                  <Link key={item} to={`/${item}`} className="block text-white px-4 py-2 text-lg hover:bg-gray-600">
                    {item.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
