import React from 'react';
import hero from "../Assets/Background/1. Section 1 SAFETY.png";
import hero2 from "../Assets/Images/home_one_overlay.webp";
import app from "../Assets/Icons/app_store.webp";
import google from "../Assets/Icons/google.webp";
import hero3 from "../Assets/Images/hero3.webp";
import crash from "../Assets/Images/crash.webp";
import Footer from '../Component/Footer';
import hero4 from "../Assets/Images/motorcycle_landscape.webp";
import crash2 from "../Assets/Images/planning_trip_en_11zon.png";
import crash3 from "../Assets/Images/crash3.webp";
import crash4 from "../Assets/phone/SCETION 1.png";
import crash5 from "../Assets/Images/crash4.webp";
import hero5 from "../Assets/Images/home_bottom_overlay.webp";
import Questions from '../Component/Questions';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

   AOS.init({
          duration: 2000, // Animation duration in milliseconds
          once: false,    // Animation triggers every time the element enters the viewport
          offset:200  // Offset distance in pixels (increase this for higher delay)
      });


  return (
    <>
      {/* Section 1 */}
      <div className='w-full overflow-hidden'>
      <div className=' border border-orange-500  w-full overflow-hidden'>
        <div className="w-full overflow-hidden relative h-[70vh]  lg:h-full bg-black">
          <img
            src={hero}
            alt="Background"
            className=" h-[70vh] w-full md:h-[70vh] lg:h-[120vh] object-cover"
            
          />
          
          <div className="z-10 relative pl-8 w-80  text-yellow-500 md:w-[60%] lg:w-[20%] lg:translate-x-10 lg:-translate-y-[100vh] lg:pl-16 ">
            <h1 className="text-4xl font-bold md:text-2xl lg:text-4xl">
              01
            </h1>
            <h2 className="w-20 text-2xl font-semibold mt-2 md:w-auto lg:text-7xl" >
              SAFETY DISCOVERY COMMUNITY
            </h2>
            <p className="mt-4 text-base md:text-lg lg:text-xl lg:w-96" >
              The lifesaving motorcycle app that will take your riding to the next level
            </p>
            <div className="mt-6 grid grid-rows-2 md:grid-rows-none md:grid-cols-2 md:gap-4 lg:gap-16">
              <button className="w-32 mb-2 text-white py-2 px-4 rounded md:w-40" >
                <img src={google} alt="App Store" />
              </button>
              <button className="w-32 mb-2 text-white py-2 px-4 rounded md:w-40" >
                <img src={app} alt="Google Play" />
              </button>
            </div>
          </div>
        </div>
        <div className="lg:z-30 hidden sm:hidden md:hidden lg:block lg:w-[45%] lg:absolute lg:-bottom-6 lg:right-32  overflow-hidden ">
          <img src={crash4} alt="" className='h-[80vh] ' />
        </div>

        {/* Section 2 */}
        <div className="w-full overflow-hidden h-fit relative  md:h-fit  bg-black/95 ">
          <img
            src={hero3}
            alt="Background"
            className="z-0 h-[105vh] lg:w-50%  w-full md:h-[100vh] lg:h-[110vh] object-cover"
          />
          <div className="p-8 mx-auto  text-white bg-black/50 md:p-12 lg:p-16">
            {/* Mobile and Medium Screens: Stack text above the image */}
            <div className="block lg:hidden">
              {/* Mobile Text Content */}
              <h1 className="text-gray-500 text-center font-bold opacity-15 text-4xl lg:text-5xl">
                SAFETY
              </h1>
              <h1 className="text-4xl font-bold text-orange-500 lg:text-sm">
                02
              </h1>
              <h2 className="w-full text-2xl font-semibold mb-4 md:w-[50vh]" data-aos="fade-right">
                Feel safe while riding
              </h2>
              <p className="text-lg mb-2" data-aos="fade-left">
                Automatic crash detection using algorithms that detect accidents.
              </p>
              <p className="text-lg mb-4" data-aos="fade-right">
                In case of an accident, your safety contacts will be notified of your position.
              </p>
              {/* Image for Mobile */}
              <div className="w-full flex justify-center" data-aos="fade-right">
                <img
                  src={crash}
                  alt="Crash Icon"
                  className="h-[50vh] w-auto md:h-[55vh] object-contain"
                />
              </div>
            </div>

            {/* Desktop and Large Screens: Original Design */}
            <div className="hidden lg:flex lg:pl-[20%] md:pl-[10%]" >
              {/* Left Image */}
              <img
                src={crash}
                alt="Crash Icon"
                className="h-[66vh] md:h-[55vh] w-52 md:w-64 lg:w-72 lg:h-[85vh] relative right-0 lg:right-36 lg:left-24"
              />
              {/* Right Image */}
              <img
                src={crash5}
                alt="Crash Icon"
                className="hidden lg:block h-[66vh] md:h-[55vh] w-52 md:w-64 lg:w-72 lg:h-[85vh] relative right-[70vh]"
              />
              {/* Desktop Text Content */}
              <div className="lg:relative lg:right-0 w-[50%]">
                <h1 className="text-gray-500 text-center font-bold opacity-15 text-4xl lg:text-5xl">
                  SAFETY
                </h1>
                <h1 className="text-4xl font-bold text-orange-500 lg:text-5xl">
                  02
                </h1>
                <h2 className="text-4xl font-semibold mb-4 md:w-[50vh] lg:w-[60vh] lg:text-6xl" data-aos="fade-right">
                  Feel safe while riding
                </h2>
                <p className="text-lg mb-2 lg:text-lg" data-aos="fade-left">
                  Automatic crash detection using algorithms that detect accidents.
                </p>
                <p className="text-lg mb-4 lg:text-lg" data-aos="fade-right">
                  In case of an accident, your safety contacts will be notified of your position.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="w-full overflow-hidden relative h-[105vh] md:h-[100vh] lg:h-[100vh]">
          <img
            src={hero4}
            alt="Background"
            className="z-0 h-[130vh] w-[120vh] md:w-full lg:h-[150vh] object-cover"
          />
          <div className="p-8 mx-auto absolute inset-0 text-white bg-black/50 md:p-12 lg:p-16">
            <div className='lg:relative lg:left-40 lg:top-20'>
              <h1 className="text-4xl font-bold text-orange-500 lg:text-5xl">
                03
              </h1>
              <h2 className="w-[30vh] text-4xl font-semibold mb-4 md:w-[50vh] lg:w-[50vh] lg:text-6xl" data-aos="fade-right">
                Plan your adventures
              </h2>
              <p className="text-lg mb-2 lg:text-lg lg:w-[50vh]" data-aos="fade-left">
                Plan and customize different routes for tomorrow's adventures.
              </p>
              <p className="text-lg mb-4 lg:text-lg lg:w-[50vh]" data-aos="fade-right">
                Our Trip Planner makes it easy finding the best roads to your destination.
              </p>
            </div>
            <img
              src={crash2}
              alt="Trip Planning Icon"
              className="h-[60vh] w-48 absolute right-10 md:w-80 lg:w-72 lg:h-[95vh] lg:left-[140vh] lg:bottom-1" data-aos="fade-right"
            />
            <h1 className="z-30 text-gray-500 opacity-15 font-bold text-5xl absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 lg:text-8xl">
              DISCOVERY
            </h1>
          </div>
        </div>

        {/* Section 4 */}
        <div className="w-full h-[100vh] bg-black  md:h-[90vh] lg:h-[121vh]">
          {/* Mobile & Mid-Screen: Text on Top and Images Below */}
          <div className="block lg:hidden">
            {/* Text Section */}
            <div className=" p-8 ">
              <h1 className="text-4xl font-bold text-orange-500">04</h1>
              <h2 className="text-3xl font-semibold mb-4 text-white" data-aos="fade-right">
                Plan your adventures
              </h2>
              <p className="text-lg mb-2 text-gray-500" data-aos="fade-left">
                Discover the best routes made by other bikers or drive your own using Turn-by-Turn Navigation.
              </p>
            </div>
            {/* Image Section */}
            <div className="grid grid-cols-2 items-center sm:ml-2 mt-4" data-aos="fade-right">
              <img
                src={crash2}
                alt="Trip Planning Icon"
                className="h-[40vh] w-auto object-contain"
              />
              <img
                src={crash2}
                alt="Trip Planning Icon"
                className="h-[40vh] w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop View: Unchanged Design */}
          <div className="hidden lg:flex lg:relative left-40 lg:w-[140vh]" data-aos="fade-right">
            {/* Images */}
            <div className="w-1/2 pr-4">
              <img
                src={crash2}
                alt="Trip Planning Icon"
                className="h-[50vh] lg:h-[100vh] lg:w-[83vh]"
              />
            </div>
            <div className="w-1/2">
              <img
                src={crash2}
                alt="Trip Planning Icon"
                className="h-[50vh] lg:h-[100vh] lg:w-[83vh]"
              />
            </div>

            {/* Text Section */}
            <div className="w-80 pt-1 mx-auto lg:mx-0 lg:relative lg:right-12 lg:top-12">
              <div className="lg:flex lg:w-[160vh]">
                <div className="lg:relative lg:left-56 lg:top-40">
                  <h1 className="text-4xl font-bold text-orange-500 lg:text-5xl">04</h1>
                  <h2 className="w-[30vh] text-4xl font-semibold mb-4 text-white lg:text-5xl lg:w-[50vh]" data-aos="fade-right">
                    Plan your adventures
                  </h2>
                  <p className="text-lg mb-2 text-gray-500 lg:w-[50vh]" data-aos="fade-left">
                    Discover the best routes made by other bikers or drive your own using Turn-by-Turn Navigation.
                  </p>
                </div>
              </div>
            </div>
            {/* DISCOVERY Text */}
            <h1 className="z-50 text-gray-500 opacity-15 font-bold text-5xl absolute lg:bottom-4 top-10 left-1/2 transform -translate-x-1/2 lg:translate-x-16  px-4 ">
              COMMUNITY
            </h1>
          </div>
        </div>

        {/* Section 5 */}
        <div className="z-10 w-full h-[110vh] relative  md:h-[140vh]  lg:h-[113vh]" >
          {/* Background Image */}
          <img
            src={hero5}
            alt="Background"
            className="z-0 h-[80vh] w-[120vh] md:w-full md:h-[80vh] lg:h-[121vh] object-cover"
          />
          {/* Content Overlay */}
          <div className="p-8 mx-auto absolute inset-0 text-white bg-black opacity-99 md:p-12 lg:p-0">
            {/* Mobile & Medium Screens */}
            <div className="block lg:hidden">
              {/* Text Section */}
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-orange-500">05</h1>
                <h2 className="text-2xl font-semibold mb-4" data-aos="fade-right">Track your progress</h2>
                <p className="text-lg text-gray-500" data-aos="fade-left">
                  Get statics for your rides and develop your driver profile
                </p>
                <p className="text-lg text-gray-500" data-aos="fade-right">
                  Plan your upcoming trips with your friends or share ride tips in the chat
                </p>
              </div>

              {/* Image Section */}
              <div>
                <img
                  src={crash3}
                  alt="Trip Planning Icon"
                  className="h-[50vh] w-auto mx-auto object-contain"
                />
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:flex lg:w-full lg:relative lg:left-60">
              {/* Left Image */}
              <div className="lg:relative lg:right-28" >
                <img
                  src={crash3}
                  alt="Trip Planning Icon"
                  className="h-[66vh] w-52 mx-auto md:w-64 lg:w-80 lg:h-[96vh] lg:ml-10" 
                />
              </div>

              {/* Right Text Section */}
              <div className="lg:w-[50vh] lg:relative lg:top-40 lg:left-80">
                <h1 className="text-4xl font-bold text-orange-500 lg:text-5xl">05</h1>
                <h2 className="w-[30vh] text-4xl font-semibold mb-4 md:w-[50vh] lg:w-[60vh] lg:text-2xl" data-aos="fade-right">
                  Track your progress
                </h2>
                <p className="text-lg mb-2 text-gray-500 lg:text-lg lg:w-[60vh]" data-aos="fade-left">
                  Get statics for your rides and develop your driver profile
                </p>
                <p className="text-lg mb-4 text-gray-500 lg:text-lg lg:w-[60vh]" data-aos="fade-right">
                  Plan your upcoming trips with your friends or share ride tips in the chat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Questions/>
      {/* Footer */}
      <Footer />
      </div>
    </>
  );
};

export default Home;
