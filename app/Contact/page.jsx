'use client'
import React from 'react'
import Header from '../components/headerone/Main'
import Bredcom from '../components/Bredcom/Main'
import Brand from '../components/menhomethree/Brand'
import Touch from '../components/mencontact/Touch'
import Map from '../components/mencontact/Map'
import Form from '../components/mencontact/Form' 
import LandingLayout from '../LandingLayout'

function page() {
  return (
    <LandingLayout>
        <Header/>
        {/* <Bredcom title="Home" subtitle="Contact Us"/> */}
        <Touch/>
        <Map/>
        <Form/>

    </LandingLayout>
  )
}

export default page;