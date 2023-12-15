'use client'
import React from 'react'
import Header from '../components/headerone/Main'
import Bredcom from '../components/Bredcom/Main'
import First from '../components/menblog/First'
import LandingLayout from '../LandingLayout'


function page() {
  return (
    <LandingLayout>
        <Header/>
        <Bredcom title="Home" subtitle="Blog"/>
        <First/>
    </LandingLayout>
  )
}

export default page;