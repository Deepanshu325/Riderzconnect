import React from 'react';
import hero4 from "../Assets/Images/SAFETY (1).png"; // Ensure this path is correct
import back3 from "../Assets/Background/SAFETY_3.jpg"
import back5 from "../Assets/Background/SAFETY_5.jpg"
import Footer from '../Component/Footer';
import Questions from '../Component/Questions';
import AOS from 'aos';
import phone from "../Assets/phone/2 (1).png"
import phone2 from "../Assets/phone/1 (1).png"
import phone3 from "../Assets/phone/3 (1).png"
import phone4 from "../Assets/phone/4 (1).png"
import phone5 from "../Assets/phone/5 (2).png"
import google from "../Assets/Icons/google.webp"
import appstore from "../Assets/Icons/app_store.webp"
import 'aos/dist/aos.css';
import image from "../Assets/Background/SAFETY_1.jpg"

const Home = () => {
  AOS.init({
    duration: 2000, // Animation duration in milliseconds
    once: false,    // Animation triggers every time the element enters the viewport
    offset: 200     // Offset distance in pixels (increase this for higher delay)
  });

  return (
    <>
    <div className='overflow-hidden'>
      {/* Section 1 */}
      <div
      className="w-full h-auto min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: '100% 100%', // Stretches image to fit div
    backgroundRepeat: 'no-repeat',// Ensures the whole image fits
     // Prevents the image from repeating
        backgroundPosition: 'center', // Centers the image
      }}
    >
             <div className="w-fit mx-auto  ">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="ltext-left  lg:text-left max-w-lg lg:mr-12 text-yellow-500 mt-20 md:mt-32 lg:mt-0 ">
              <h1 className=" text-4xl font-semibold">01</h1>
              <h2 className="text-4xl lg:text-5xl font-bold mt-2">
                SAFETY<br />DISCOVERY<br />COMMUNITY
              </h2>
              <p className="text-gray-400 mt-4">
                The lifesaving motorcycle app that will take your riding to the next level
              </p>
              <div className="flex items-center justify-center lg:justify-start mt-6 space-x-4">
                <a href="#" className="inline-block">
                  <img
                    src={google}
                    alt="Get it on Google Play"
                    className="h-12"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img
                    src={appstore}
                    alt="Download on the App Store"
                    className="h-12"
                  />
                </a>
              </div>
            </div>

            {/* Phone Image */}
            <div className="w-auto ">
              <img
                src={phone} // Replace with your actual image path
                alt="Phone showing app screens"
                className=" pt-24"
              />
            </div>
          </div>
        </div>
    </div>
      

      {/* section2 */}


   
    <section className="relative bg-black text-white py-12 px-6 lg:px-24">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="flex flex-col lg:flex-row  lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
          <img
            src={phone2} // Replace with your image path
            alt="Accident Detected Screen"
            className=""
          />
        
        </div>

        {/* Text Section */}
        <div className="mt-8 lg:mt-0 lg:ml-12 max-w-lg  lg:text-left text-yellow-500">
          <h1 className=" text-4xl font-semibold">02</h1>
          <h2 className="text-3xl lg:text-5xl font-bold mt-2 leading-snug">
            Feel safe <br /> while riding
          </h2>
          <p className="text-gray-300 mt-4">
            Automatic crash detection using algorithms that detect accidents. In
            case of an accident, your Safety Contacts will be notified of your
            position.
          </p>
        </div>
      </div>

      {/* Decorative Orange Line */}
      <div className="absolute top-0 right-0 w-24 lg:w-32 h-1 bg-orange-500"></div>
    </section>







    {/* section3 */}

    <div
      className="w-full h-auto min-h-screen"
      style={{
        backgroundImage: `url(${back3})`,
        backgroundSize: '100% 100%', // Stretches image to fit div
    backgroundRepeat: 'no-repeat',// Ensures the whole image fits
     // Prevents the image from repeating
        backgroundPosition: 'center', // Centers the image
      }}
    >
             <div className="w-fit mx-auto  ">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="ltext-left  lg:text-left max-w-lg lg:mr-12 text-yellow-500">
              <h1 className=" text-4xl font-semibold">03</h1>
              <h2 className="text-4xl lg:text-5xl font-bold mt-2">
                PLAN YOUR <br />ADVENTURE
              </h2>
              <p className="text-gray-400 mt-4">
              Plan and customize different routes for tomorrows adventures
              </p>

              <p className="text-gray-400 mt-4">
              Our Trip Planner makes it easy finding the best roads to your destination
              </p>
             
            </div>

            {/* Phone Image */}
            <div className="w-auto ">
              <img
                src={phone3} // Replace with your actual image path
                alt="Phone showing app screens"
                className=" pt-20"
              />
            </div>
          </div>
        </div>
    </div>





      {/* section4 */}


   
      <section className="relative bg-black text-white py-12 px-6 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="hidden lg:block">
          <img
            src={phone4} // Replace with your image path
            alt="Accident Detected Screen"
            className=""
          />
        
        </div>

        {/* Text Section */}
        <div className="mt-8 lg:mt-0 lg:ml-12 max-w-lg  lg:text-left text-yellow-500">
          <h1 className=" text-4xl font-semibold">04</h1>
          <h2 className="text-3xl lg:text-5xl font-bold mt-2 leading-snug">
            EXPLORE YOUR <br /> SURROUNDINGS
          </h2>
          <p className="text-gray-300 mt-4">
          Discover the best routes made by other bikers or drive your own using Turn-by-Turn Navigation.
          </p>
        </div>

        <div className=" lg:hidden">
          <img
            src={phone4} // Replace with your image path
            alt="Accident Detected Screen"
            className=""
          />
        
        </div>
      </div>

      {/* Decorative Orange Line */}
      <div className="absolute top-0 right-0 w-24 lg:w-32 h-1 bg-orange-500"></div>
    </section>

    
    {/* secction5 */}
    <div
      className="w-full h-auto min-h-screen"
      style={{
        backgroundImage: `url(${back5})`,
        backgroundSize: '100% 100%', // Stretches image to fit div
    backgroundRepeat: 'no-repeat',// Ensures the whole image fits
     // Prevents the image from repeating
        backgroundPosition: 'center', // Centers the image
      }}
    >
             <div className="w-fit mx-auto   ">
          <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-between">
            {/* Text Section */}
            <div className="ltext-left  lg:text-left max-w-lg lg:mr-12 text-yellow-500">
              <h1 className=" text-4xl font-semibold">05</h1>
              <h2 className="text-4xl lg:text-5xl font-bold mt-2">
                TRACK YOUR <br />PROGRESS
              </h2>
              <p className="text-gray-400 mt-4">
              Get statistics for your rides and develop your driver profile
              </p>

              <p className="text-gray-400 mt-4">
              Plan your upcoming trips with your friends or share ride tips in the chat


              </p>
             
            </div>

            {/* Phone Image */}
            <div className="w-auto ">
              <img
                src={phone5} // Replace with your actual image path
                alt="Phone showing app screens"
                className=" pt-20"
              />
            </div>
          </div>
        </div>
    </div>



      <Questions />
      {/* Footer */}
      <Footer />

      </div>
     
    </>
  );
};

export default Home;
