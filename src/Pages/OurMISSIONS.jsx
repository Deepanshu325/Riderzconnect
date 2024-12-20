import React from 'react'
import ClubInfo from '../Component/Clubinfo'
import image from "../Assets/rev_slidehome1_1.jpg"
import MotorcycleClub from '../Component/MotorCycleClub'
import OurRides from '../Component/OurRides'
import MembershipSection from '../Component/MembershipSection'
import Members from '../Component/Members'
import OurGallery from '../Component/OurGallery'
import Runningnumbers from '../Component/Runningnumbers'
import Questions from '../Component/Questions'
import Footer from '../Component/Footer'

const OurMISSIONS = () => {
  return (
   
   <>
   <div className='overflow-hidden'>
     <ClubInfo name="OUR MISSION" background={image}/>
     <MotorcycleClub/>
     <OurRides/>
     <MembershipSection/>
     <Members/>
     <div className=''>
     <Runningnumbers/>
     </div>
     <OurGallery/>
     <Questions/>
     <Footer/>
     </div>
     
   
   </>
  )
}

export default OurMISSIONS
