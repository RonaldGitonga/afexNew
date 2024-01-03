'use client'
import React from 'react'
import Header from '../../components/headerone/Main'
import Bredcom from '../../components/Bredcom/Main'
import First from '../../components/menblogdeatils/First'
import LandingLayout from '../../LandingLayout'


function page() {
  //GET BLOG BY ID
  return (
 
   
     <LandingLayout>
        <Header/>
        // <Bredcom title="Home" subtitle="Blog Details"/>
        <First/>
      </LandingLayout>
  
  )
}

export default page