'use client'
import React from 'react'
import Header from '../../components/headerone/Main'
import Bredcom from '../../components/Bredcom/Main'
import First from '../../components/menteacherdetails/First'
import LandingLayout from '../../LandingLayout'

function page() {
  //GET TUTOR BY ID
  return (
    <LandingLayout>
        <Header/>
        <Bredcom title="Home" subtitle="Teacher Details"/>
        <First/>
    </LandingLayout>
  )
}

export default page;