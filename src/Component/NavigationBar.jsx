import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../Assets/white_logo_transparent_background.png";

const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({ home: false, blog: false, gallery: false });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track scroll position
  const [navbarVisible, setNavbarVisible] = useState(true); // Control navbar visibility
  const [expandedMenus, setExpandedMenus] = useState({}); // Track expanded submenus

  const location = useLocation();

  // Collapse menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false); // Close mobile menu on page change
    setDropdownOpen({ home: false, blog: false, gallery: false });
    setExpandedMenus({}); // Close expanded submenus
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

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Toggle expand for submenu items
  const toggleExpand = (menu) => {
    setExpandedMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menuItems = [
    { label: 'HOME', link: '/home', subOptions: [] },
    { label: 'ABOUT CLUB', link: '/about-club', subOptions: ['CLUB INFO','CLUB HISTORY','OUR MISSION','OUR MEMBERS'] },
    { label: 'RIDING REPORT', link: '/rides', subOptions: ['Grid Style'] },
    { label: 'SHOP', link: '/shop', subOptions: ['Merchandise', 'Accessories'] },
    { label: 'EVENTS', link: '/events', subOptions: ['Upcoming Events', 'Past Events'] },
    { label: 'MEDIA', link: '/media', subOptions: ['Photos', 'Videos'] },
    { label: 'NEWS', link: '/news', subOptions: ['Latest News', 'Club Updates'] },
    { label: 'PAGES', link: '/pages', subOptions: ['Contact Us', 'FAQ'] },
  ];

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav
        className={`bg-black/60 opacity-80 text-white z-50 fixed w-full top-0 left-0 transition-all duration-300 ${navbarVisible ? 'translate-y-0' : '-translate-y-28'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
          <div className="flex justify-between items-center h-20 md:h-32">
            {/* Left Section - Logo */}
            <div className="flex-shrink-0 w-[50%] sm:w-[50%] md:w-[20%] lg:w-[15%]">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-24 sm:h-16 md:h-20 lg:h-28 w-auto rounded-lg"
                />
              </Link>
            </div>

            {/* Center Section - Desktop Menu */}
            <div className="hidden md:flex w-[70%] items-center justify-center space-x-4">
              <ul className="flex space-x-4">
                {menuItems.map((menu, index) => (
                  <li key={index} className="relative">
                    <div className="flex items-center">
                      <Link
                        to={menu.link}
                        className="text-white px-2 py-1 rounded-md text-sm font-medium hover:bg-gray-700"
                      >
                        {menu.label}
                      </Link>
                      {menu.subOptions.length > 0 && (
                        <button
                          onClick={() => toggleExpand(menu.label)}
                          className="text-white ml-2 focus:outline-none"
                        >
                          {expandedMenus[menu.label] ? '▲' : '▼'}
                        </button>
                      )}
                    </div>

                    {/* Sub-options */}
                    {expandedMenus[menu.label] && menu.subOptions.length > 0 && (
                      <ul className="absolute left-0 mt-2 bg-gray-800 rounded-md shadow-lg w-32">
                        {menu.subOptions.map((option, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={`${menu.link}/${option.toLowerCase().replace(/ /g, '-')}`}
                              className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                            >
                              {option}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Signup Button */}
            <div className="hidden md:flex">
              <Link
                to="/signup"
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 text-sm font-medium"
              >
                JOIN THE CLUB
              </Link>
            </div>

            {/* Mobile Menu - Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-xl"
              >
                ☰ {/* Hamburger Menu */}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`md:hidden transition-all ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}
          >
            <div className="mt-2 rounded-md shadow-lg">
              <div className="py-1">
                {menuItems.map((menu, index) => (
                  <div key={index}>
                    <div className="bg-black opacity-100 flex items-center justify-between px-4 py-2 hover:bg-gray-600">
                      <Link
                        to={menu.link}
                        className="block text-white text-lg"
                      >
                        {menu.label}
                      </Link>
                      {menu.subOptions.length > 0 && (
                        <button
                          onClick={() => toggleExpand(menu.label)}
                          className="text-white focus:outline-none"
                        >
                          {expandedMenus[menu.label] ? '▲' : '▼'}
                        </button>
                      )}
                    </div>
                    {expandedMenus[menu.label] && (
                      <ul className="bg-gray-800">
                        {menu.subOptions.map((option, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={`${menu.link}/${option.toLowerCase().replace(/ /g, '-')}`}
                              className="block px-6 py-2 text-white hover:bg-gray-700"
                            >
                              {option}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
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
