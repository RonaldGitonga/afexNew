'use client'
import React from 'react'
import University from '../components/Menabout/University'
import Header from '../components/headerone/Main'
import Bredcom from '../components/Bredcom/Main'
import Scholarship from '../components/menhome/Scholarship'
import Frequently from '../components/menhome/Frequently'
import Campus from '../components/Menabout/Campus'
import Testimonial from '../components/menhome/Testimonial'
import Brand from '../components/menhomethree/Brand'
import LandingLayout from '../LandingLayout'

function page() {
  return (
    <LandingLayout>
        <Header/>
        {/* <Bredcom title="Home" subtitle="About Us"/> */}
        <University/>
        {/* <Scholarship/> */}
        {/* <Frequently/> */}
        <Campus/>
        <Testimonial/>
       
    </LandingLayout>
  )
}

export default page