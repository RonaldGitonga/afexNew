'use client'
import React from 'react'
import Bredcom from '../../components/Bredcom/Main'
import Header from '../../components/headerone/Main'
import First from '../../components/mencoursedetails/First'
//import Brand from '../../components/menhomethree/Brand'
import LandingLayout from '../../LandingLayout'



//get course by id../


function page() {
  return (
    <LandingLayout>
        <Header/>
        {/* <Bredcom title="Courses" subtitle="GRE & GMAT Prep" /> */}
        <First/>
        
    </LandingLayout>
  )
}

export default page;