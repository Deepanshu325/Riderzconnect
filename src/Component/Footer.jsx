import React from 'react';
import logo from "../Assets/white_logo_transparent_background.png";

const Footer = () => {
  return (
    <footer className="bg-black/95 text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        {/* Left Section */}
        <div className="text-center text-gray-400">
          <p>Copyright © 2019. All Rights Reserved.</p>
        </div>

        {/* Middle Section (Logo) */}
        <div className="text-center">
          <img src={logo} alt="Logo" className="mx-auto h-32" />
        </div>

        {/* Right Section (Social Media) */}
        <div className="flex justify-center lg:justify-end items-center space-x-4">
          <h1 className="font-bold text-md">SOCIAL MEDIA</h1>
          <div className="bg-black h-10 w-10 flex items-center justify-center">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-xl text-white"></i>
            </a>
          </div>
          <div className="bg-black h-10 w-10 flex items-center justify-center">
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-xl text-white"></i>
            </a>
          </div>
          <div className="bg-black h-10 w-10 flex items-center justify-center">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-google text-xl text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
