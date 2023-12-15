'use client'
import React from 'react'
import Header from '../components/headerone/Main'
import Bredcom from '../components/Bredcom/Main'
import Brand from '../components/menhomethree/Brand'
import First from '../components/menteacher/First'
import Expert from '../components/menhomethree/Expert'
import LandingLayout from '../LandingLayout'

function page() {

  //GET ALL TUTORS
  return (
    <LandingLayout>
        <Header/>
        <Bredcom title="Home" subtitle="Our Tutors"/>
        <First/>
        <Brand/>
        <Expert/>
    </LandingLayout>
  )
}

export default page;