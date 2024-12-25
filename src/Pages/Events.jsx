import React from 'react'
import SimpleNavbar from '../Component/Simplenav'
import Filters from '../Component/Filter'
import CardLayout from '../Component/Cardlayout'
import Footer from '../Component/Footer'
import Questions from '../Component/Questions'

const Events = () => {
  return (
    <div className='w-full bg-black'>
        <div className='w-1/2 mx-auto '>
      <SimpleNavbar name="Events"/>
      </div>
      <div className='w-[180vh] mx-auto'>
        <div>
          <h1 className='text-white font-bold pl-6 text-lg'>Showing all 5 results</h1>
        </div>
        <Filters/>
      </div>
      <div className='w-[80%] mx-auto border border-white'>
        <CardLayout/>
      </div>
      <div className='mt-28'>
        <Questions/>
        <Footer/>
      </div>
    </div>
  )
}

export default Events;
