'use client'
import React from 'react'
import Bredcom from '../components/Bredcom/Main'
import Header from '../components/headerone/Main'
import First from '../components/mencourses/First'
import Brand from '../components/menhomethree/Brand'
import LandingLayout from '../LandingLayout'


function page() {

  //get ALL courses


  return (
    <LandingLayout>
        <Header/>
        <Bredcom title="Home" subtitle="Courses"/>
        <First/>
        <Brand/>
    </LandingLayout>
  )
}

export default page;