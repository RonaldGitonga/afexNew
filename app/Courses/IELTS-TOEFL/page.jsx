'use client'
import React from 'react'
import Bredcom from '../../components/Bredcom/Main'
import Header from '../../components/headerone/Main'
import Second from '../../components/mencoursedetails/Second'

import LandingLayout from '../../LandingLayout'



//get course by id../


function page() {
  return (
    <LandingLayout>
        <Header/>
        {/* <Bredcom title="Courses" subtitle="IELTS/TOEFL" /> */}
        <Second/>
        
    </LandingLayout>
  )
}

export default page;