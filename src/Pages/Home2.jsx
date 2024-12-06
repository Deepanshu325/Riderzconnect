import React from 'react'
import Hero from '../Component/Hero'
import Name from '../Component/Name'
import Carousel from '../Component/Carousel'
import Footer from '../Component/Footer'


const Home2 = () => {
  return (
    <>
    <div className='bg-black'>
    <div className='bg-black '>
<Hero/>

<div className='mt-10 '>
<Name/>
</div>

</div>
<div  className="min-h-screen flex items-center justify-center pl-16 pr-16 relative bottom-24">
<Carousel/>
</div>
<div>
    <Footer/>
</div>
</div>

</>

  )
}

export default Home2
