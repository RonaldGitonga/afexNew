'use client'

import React from 'react'
import Headerone from './components/headerone/Main'
import About from './components/menhome/About'
import Courses from './components/menhome/Courses'
import Event from './components/menhome/Event'

import Shep from './components/menhome/Shep'
import Slider from './components/menhome/Sliderone'
import Frequently from './components/menhome/Frequently'
import Video from './components/menhome/Video'
import Testimonial from './components/menhome/Testimonial'

import Admission from './components/menhome/Admission'
import Redslider from './components/menhome/Redslider'
import Blog from './components/menhome/Blog'
import Subscribe from './components/menhome/Subscribe'
import LandingLayout from './LandingLayout'

function Main() {
  return (
    <LandingLayout>  
        <Headerone/>
        <Slider/>
        <About/>
        <Courses/>
        <Shep/>
        <Event/>
        
        <Frequently/>
        <Video/>
        <Testimonial/>
      
        <Admission/>
        <Redslider/>
        <Blog/>
        <Subscribe/>
    </LandingLayout>
  )
}

export default Main