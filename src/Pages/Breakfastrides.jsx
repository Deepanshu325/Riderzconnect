import React from 'react'
import SimpleNavbar from '../Component/Simplenav'
import Filters from '../Component/Filter'
import CardLayout from '../Component/Cardlayout'
import Footer from '../Component/Footer'

const Breakfastrides = () => {
  return (
    <div className='w-full bg-black'>
        <div className='w-[40vh] mx-auto text-center '>
      </div>
      <div className='w-[180vh] mx-auto'>
        <div>
          <h1 className='text-white font-bold pl-6 text-lg'>Showing all 5 results</h1>
        </div>
        <Filters/>
      </div>
      <div className='lg:w-[180vh] lg:mx-auto'>
        <CardLayout/>
      </div>
      <div className='mt-28'>
        <Footer/>
      </div>
    </div>
  )
}

export default Breakfastrides
