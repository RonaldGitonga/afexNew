'use client'
import React from 'react'
import Header from '../../../components/headerone/Main'
import Bredcom from '../components/Bredcom/Main'
import Brand from '../components/menhomethree/Brand'
import First from '../components/menevent/First'
import LandingLayout from '../../../LandingLayout'

function page() {
  return (
    <LandingLayout>
        <Header/>
        <Bredcom title="Home" subtitle="Upcoming Events"/>
        <First/>
        <Brand/>
    </LandingLayout>
  )
}

export default page;