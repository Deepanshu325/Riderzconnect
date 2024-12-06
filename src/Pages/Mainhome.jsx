import React from 'react'
import video from "../Assets/Video/PPAR - WS2024 - Landing Page Movie.mp4"
import Event from '../Component/Event'
import AboutSection from '../Component/Aboutsection'
import LargeCard from '../Component/Lg_card'
import Gallery from '../Component/Gallery'
import FullBackgroundCard from '../Component/FullBackgroundCard'
import Feedback from '../Component/Feedback'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TouringStrip from '../Component/Touring'
import Blog from '../Component/Blog'
import Subscribe from '../Component/Subscribe'
import Footer from '../Component/Footer'


const Mainhome = () => {

  AOS.init({
    duration: 2000, // Animation duration in milliseconds
    once: false,     // Whether animation should happen only once
  });
  

  return (

    <>
    <div className='bg-black overflow-hidden'>
    <section className="relative h-[70vh] bg-gray-900">
      {/* Background Video */}
     l <video
        className="absolute inset-0 w-full h-screen object-cover"
        src={video} // Replace with your video URL
        autoPlay
        loop
        muted
        playsInine
      ></video>

      {/* Overlay Content */}
      <div className="h-screen absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-hidden " >
        <div className="text-center text-white px-6">
          <h1 className="text-6xl lg:text-9xl font-bold mb-4 text-yellow-500 opacity-70"  data-aos="fade-left">RIDERHOOD</h1>
          <div className='lg:-translate-y-16 -translate-y-12'>
            <p className='text-black lg:text-3xl font-bold'  data-aos="fade-right">WELCOME TO RIDERZCONNECT</p>
            <p className='text-white font-bold text-2xl w-[40vh] lg:text-5xl lg:w-[140vh] mx-auto '  data-aos="fade-right">We'r Not Only Riding Club, We'Are Team Of Adventure Life</p>
          <p className="text-base mb-6 inline-block w-[40vh]  lg:w-[77vh] text-gray-400 text-center "  data-aos="fade-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor
          </p>
          <div className='w-[40vh] lg:w-[60vh] flex  mx-auto gap-2'>
            <div className=' lg:w-30 mx-auto'  data-aos="fade-right">
          <button className='p-2 lg:p-5 rounded-lg bg-yellow-500 font-bold hover:bg-white hover:text-yellow-500'>CONTACT US</button>
          </div>
          <div className='w-30 mx-auto'  data-aos="fade-left">
          <button className='p-2 lg:p-5 rounded-lg bg-white text-yellow-500 font-bold hover:bg-yellow-500 hover:text-white'>WATCH INTRO</button>
          </div>
          </div>
          </div>
          
        </div>
        
      </div>
      
    </section>
    <div className=" lg:mt-72 mt-72 mb-20 ">

    <Event/>
    </div>

    <div className=" lg:w-[190vh] min-h-screen flex items-center justify-center lg:ml-20">
      <AboutSection/>
    </div>

    <div className="min-h-screen flex items-center justify-center p-4 mt-32">
      <LargeCard/>
    </div>


     {/* Name */}
    <div>
    <div className='w-full  bg-black  mt-12'>
      <p className=' text-8xl lg:text-9xl text-gray-900 text-center' data-aos="fade-down">GALLERY</p>
      <div className='-translate-y-10'>
        <p className='text-white text-3xl text-center font-bold' data-aos="fade-down">Captured Moments From Our Member</p>
        <div className=' w-[45vh] lg:w-[80vh] mx-auto mt-8 '>
        <p className='justify-center text-center text-gray-800 inline-block' data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
      </div>
    </div>
    </div>


<div>
  <Gallery/>
</div>

<div className='mt-12'>
  <FullBackgroundCard/>
</div>
 
 <div className='relative bottom-24'>
  <Feedback/>
 </div>
 <div>
  <TouringStrip/>
 </div>

 
     {/* Blog */}
 <div>
    <div className='w-full  bg-black  mt-12'>
      <p className=' text-9xl text-gray-900 text-center' data-aos="fade-down">BLOG</p>
      <div className='-translate-y-10'>
        <p className='text-white text-3xl text-center font-bold' data-aos="fade-down">Blog & Articles</p>
        <div className=' w-[50vh] lg:w-[80vh] mx-auto mt-8 '>
        <p className='justify-center text-center text-gray-800 inline-block' data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
      </div>
    </div>
    </div>

    <div>
      <Blog/>
    </div>

    <div>
      <Subscribe/>
    </div>

    <div className='pt-32'>
      <Footer/>
    </div>

    </div>
    </>
  )
}

export default Mainhome
