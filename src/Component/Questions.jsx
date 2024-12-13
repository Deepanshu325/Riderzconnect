import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Questions = () => {

  
     AOS.init({
            duration: 2000, // Animation duration in milliseconds
            once: false,    // Animation triggers every time the element enters the viewport
            offset: window   // Offset distance in pixels (increase this for higher delay)
        });


  return (
    <div className="w-full bg-black/90 py-4 px-8 pb-20">
      <div className="mx-auto flex flex-wrap gap-8 justify-between">
        {/* Left Section */}
        <div className="flex-1 rounded-lg p-6 w-full md:w-[60%]">
          <h2 className="text-5xl font-bold mb-4 text-white" data-aos="fade-right">DO YOU HAVE QUESTIONS</h2>
          <h3 className="text-5xl font-semibold mb-6 text-white" data-aos="fade-left">
            DO NOT WAIT, <span className='text-yellow-500' data-aos="fade-left"> LET'S TALK</span>
          </h3>
          <div className='w-full flex flex-wrap gap-12 mt-16'>
            <div className="flex items-center">
              <FaPhone className="text-yellow-500 text-sm lg:text-xl mr-4" />
              <span className="text-xl lg:text-3xl text-white" data-aos="fade-left">+1 234 567 890</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-yellow-500 text-sm lg:text-xl mr-4" />
              <span className=" text-xl lg:text-3xl text-white" data-aos="fade-left">example@example.com</span>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-1 rounded-lg p-6 w-full md:max-w-[20%]">
          <h4 className="text-xl font-bold mb-10 text-white">HEAD OFFICE</h4>
          <p className="mb-2 text-gray-400 font-semibold">Box 565,</p>
          <p className="mb-2 text-gray-400 font-semibold">Charlestown, Nevis,</p>
          <p className="mb-2 text-gray-400 font-semibold">West Indies,</p>
          <p className="mb-2 text-gray-400 font-semibold">Caribbean</p>
          <p className="mb-2 text-yellow-500 font-semibold">VIEW MAP</p>
        </div>

        {/* Right Section */}
        <div className="flex-1 rounded-lg p-6 w-full md:max-w-[20%]">
          <h4 className="text-xl font-bold mb-10 text-white">QUICK LINKS</h4>
          <p className="mb-2 text-gray-400 font-semibold">About</p>
          <p className="mb-2 text-gray-400 font-semibold">Our Missions</p>
          <p className="mb-2 text-gray-400 font-semibold">Videos</p>
          <p className="mb-2 text-gray-400 font-semibold">Albums</p>
          <p className="mb-2 text-gray-400 font-semibold">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
