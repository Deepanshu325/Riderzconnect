import React from 'react'
import helmet from "../Assets/Icons/helmet.png"
import support from "../Assets/Icons/collaboration.png"
import community from "../Assets/Icons/group.png"

const Ourmission = () => {
  return (
    <div className='bg-black/90 w-full min-h-screen pb-16'>
      <div>
        <h1 className='text-white text-center pt-32 font-bold mb-4'>WHAT WE DO</h1>
        <p className='text-white text-center text-6xl font-bold'>OUR MISSIONS</p>
      </div>

      <div className='flex flex-col lg:flex-row mt-20 lg:space-x-8 space-y-8 lg:space-y-0 px-4'>
        {/* Ride Outs Section */}
        <div className='w-full lg:w-1/3  overflow-hidden hover:bg-black pt-16 pb-8'>
          <div className='h-16 w-16 mx-auto mb-6'>
            <img src={helmet} alt="icon" className='w-[70%]' />
          </div>
          <h1 className='text-white text-2xl text-center mb-6 font-bold hover:text-yellow-500 '>RIDE OUTS</h1>
          <div className="w-full mx-auto">
            <p className='text-sm text-white/35 text-center font-bold'>
              Lex Rider regularly organises ride-outs suitable for all types of bikes and speeds. Our ride-outs range from short, local routes, to continental travel.
            </p>
          </div>
        </div>

        {/* Supports Section */}
        <div className='w-full lg:w-1/3  overflow-hidden hover:bg-black pt-16 pb-8'>
          <div className='h-16 w-16 mx-auto mb-6'>
            <img src={support} alt="icon" className='w-[70%]' />
          </div>
          <h1 className='text-white text-2xl text-center mb-6 font-bold hover:text-yellow-500 '>SUPPORTS</h1>
          <div className="w-full mx-auto">
            <p className='text-sm text-white/35 text-center font-bold'>
              Establish a brotherhood of other like minded bikers who take an oath to stand with us, to support and defend the Constitution against all enemies, foreign and domestic.
            </p>
          </div>
        </div>

        {/* Communities Section */}
        <div className='w-full lg:w-1/3  overflow-hidden hover:bg-black pt-16 pb-8'>
          <div className='h-16 w-16 mx-auto mb-6'>
            <img src={community} alt="icon" className='w-[70%]' />
          </div>
          <h1 className='text-white text-2xl text-center mb-6 font-bold hover:text-yellow-500 '>COMMUNITIES</h1>
          <div className="w-full mx-auto">
            <p className='text-sm text-white/35 text-center font-bold'>
              Provide an opportunity to give back to communities as well as provide assistance to veterans related injuries via charities, benefits, and donations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourmission;
