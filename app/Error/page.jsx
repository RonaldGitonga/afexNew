'use client'
import React from 'react'
import Header from '../components/headerone/Main'
import Bredcom from '../components/Bredcom/Main'
import First from '../components/menerror/First'
import LandingLayout from '../LandingLayout'



const page = () => {
  return (
    <LandingLayout>
    <Header/>
    <Bredcom title="Home" subtitle="404 Error"/>
    <First/>
</LandingLayout>
  )
}

export default page