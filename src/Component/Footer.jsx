import React from "react";

const Footer = () => {
  return (
    <div className="bg-white">
    <footer className=" bg-black/80 text-white py-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Riderzconnect</h3>
            <p className="text-gray-400">
              Riderzconnect is your trusted partner for real-time accident detection
              and road safety. Join us in creating a safer driving experience.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#features" className="hover:text-blue-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-blue-400">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400">Email: support@riderzconnect.com</p>
            <p className="text-gray-400">Phone: +1 (234) 567-890</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; 2024 Detecht. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
