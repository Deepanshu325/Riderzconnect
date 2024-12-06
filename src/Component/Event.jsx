import React from 'react';

const Event = () => {
  return (
    <div className='bg-white relative lg:w-[190vh] mx-auto rounded-lg overflow-hidden'>
    <div className="flex flex-col  md:flex-row justify-between items-start bg-black/80 shadow-lg rounded-lg p-6">
        
      {/* Left Div */}
      <div className="relative w-full md:w-1/2">
        {/* Background Big Text */}
        <div className="absolute  lg:top-10 left-0 lg:left-16 text-black  text-8xl lg:text-9xl font-bold opacity-40 text-center">EVENTS</div>
        {/* Overlay Content */}
        <div className="relative z-10 p-6">
          {/* Title */}
          <h1 className="text-xl md:text-3xl font-bold mb-6 text-white">Independence Day Ride 2022</h1>
          {/* Details Section */}
          <div className=" flex flex-row gap-2">
            {/* Address */}
            <div className="flex  items-center ">
              <span className="text-xl">📍</span>
              <span className="text-white">1234 Address Street</span>
            </div>
            {/* Date */}
            <div className="flex items-center ">
              <span className="text-xl">📅</span>
              <span className="text-white">12 Dec 2024</span>
            </div>
            {/* Time */}
            <div className="flex items-center ">
              <span className="text-xl">⏰</span>
              <span className="text-white">12:00 PM</span>
            </div>
          
          </div>
          <div className=" items-center mt-4">
             
             <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, officia iusto. Voluptatem autem eum nulla aut</p>
            </div>

            <div className=" items-center mt-4">
             
             <p className=" text-yellow-500 cursor-pointer font-bold" >JOIN EVENTS -> </p>
            </div>
        </div>
      </div>

      {/* Right Div */}
      <div className="w-full md:w-1/2 h-56 md:h-56 mt-6 md:mt-0 flex flex-row items-center bg-black rounded-lg p-6 gap-12">
        {/* Days */}
        <div className="text-center  lg:ml-16">
          <div className="text-3xl font-bold text-white">5</div>
          <div className="text-2xl text-white mt-4">Days</div>
        </div>
        {/* Hours */}
        <div className="text-center  ">
          <div className="text-3xl font-bold text-white">12</div>
          <div className="text-2xl text-white mt-4">Hours</div>
        </div>
        {/* Seconds */}
        <div className="text-center ">
          <div className="text-3xl font-bold text-white">45</div>
          <div className="text-2xl text-white mt-4">Seconds</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Event;
