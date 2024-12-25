import React from 'react';
import hero4 from "../Assets/Images/SAFETY (1).png"; // Ensure this path is correct
import back3 from "../Assets/Background/SAFETY (3).png"
import back5 from "../Assets/Background/SAFETY (5).png"
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

const Home = () => {
  AOS.init({
    duration: 2000, // Animation duration in milliseconds
    once: false,    // Animation triggers every time the element enters the viewport
    offset: 200     // Offset distance in pixels (increase this for higher delay)
  });

  return (
    <>
      {/* Section 1 */}
      <div className="lg:h-[122vh] h-[110vh] overflow-hidden border border-black">
      <div className='w-full lg:h-screen h-[110vh]  '>
      <img src={hero4} alt="" className='w-full h-full lg:h-auto  object-cover' />
      </div>
      <section   
     
        className="text-white relative overflow-hidden lg:h-screen h-fit  -translate-y-[80%]  lg:-translate-y-[80%]  "
      >
        <div className="w-fit mx-auto ">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="ltext-left  lg:text-left max-w-lg lg:mr-12 text-yellow-500">
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
            <div className="relative mt-10 lg:mt-4 lg:-translate-y-10">
              <img
                src={phone} // Replace with your actual image path
                alt="Phone showing app screens"
                className="w-fit max-w-md lg:max-w-lg mx-auto h-96 lg:h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      </div>


      

      {/* section2 */}


   
    <section className="relative bg-black text-white py-12 px-6 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
          <img
            src={phone2} // Replace with your image path
            alt="Accident Detected Screen"
            className=""
          />
        
        </div>

        {/* Text Section */}
        <div className="mt-8 lg:mt-0 lg:ml-12 max-w-lg text-center lg:text-left text-yellow-500">
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

    <div className="max-h-[122vh]">
      <div className='w-full h-screen  '>
      <img src={back3} alt="" className='w-full  object-cover' />
      </div>
      <section   
     
        className="text-white relative overflow-hidden h-screen   -translate-y-[80%]  "
      >
        <div className="w-fit mx-auto ">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="text-center lg:text-left max-w-lg lg:mr-12 text-yellow-500">
              <h1 className=" text-4xl font-semibold">03</h1>
              <h2 className="text-4xl lg:text-5xl font-bold mt-2">
                PLAN YOUR<br />ADVENTURE
              </h2>
              <p className="text-gray-400 mt-4">
              Plan and customize different routes for tomorrows adventures


              </p>
              <p className="text-gray-400 mt-4">
              Our Trip Planner makes it easy finding the best roads to your destination


              </p>
             
            </div>

            {/* Phone Image */}
            <div className="relative mt-10 lg:mt-4 lg:-translate-y-10">
              <img
                src={phone3} // Replace with your actual image path
                alt="Phone showing app screens"
                className="w-fit max-w-md lg:max-w-lg mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      </div>






      {/* section4 */}


   
      <section className="relative bg-black text-white py-12 px-6 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
          <img
            src={phone4} // Replace with your image path
            alt="Accident Detected Screen"
            className=""
          />
        
        </div>

        {/* Text Section */}
        <div className="mt-8 lg:mt-0 lg:ml-12 max-w-lg text-center lg:text-left text-yellow-500">
          <h1 className=" text-4xl font-semibold">04</h1>
          <h2 className="text-3xl lg:text-5xl font-bold mt-2 leading-snug">
            EXPLORE YOUR <br /> SURROUNDINGS
          </h2>
          <p className="text-gray-300 mt-4">
          Discover the best routes made by other bikers or drive your own using Turn-by-Turn Navigation.
          </p>
        </div>
      </div>

      {/* Decorative Orange Line */}
      <div className="absolute top-0 right-0 w-24 lg:w-32 h-1 bg-orange-500"></div>
    </section>

    
    {/* secction5 */}
      <div className="max-h-[122vh]">
      <div className='w-full h-screen  '>
      <img src={back5} alt="" className='w-full  object-cover' />
      </div>
      <section   
     
        className="text-white relative overflow-hidden h-screen   -translate-y-[80%]  "
      >
        <div className="w-fit mx-auto ">
          <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-between">
            {/* Text Section */}
            <div className="text-center lg:text-left max-w-lg lg:mr-12 text-yellow-500">
              <h1 className=" text-4xl font-semibold">05</h1>
              <h2 className="text-4xl lg:text-5xl font-bold mt-2">
                TRACK YOUR<br />PROGRESS
              </h2>
              <p className="text-gray-400 mt-4">
              Get statistics for your rides and develop your driver profile.


              </p>
              <p className="text-gray-400 mt-4">
              Plan your upcoming trips with your friends or share ride tips in the chat



              </p>
           
            </div>

            {/* Phone Image */}
            <div className="relative mt-10 lg:mt-4 lg:-translate-y-10">
              <img
                src={phone5} // Replace with your actual image path
                alt="Phone showing app screens"
                className="w-fit max-w-md lg:max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      </div>



      <Questions />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
