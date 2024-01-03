'use client'
import React from 'react'
import Header from '../../components/headerone/Main'
import Bredcom from '../../components/Bredcom/Main'
import First from '../../components/menblogdeatils/First'


function page() {
  //GET BLOG BY ID
  return (
 
    <>
        <Header/>
        // <Bredcom title="Home" subtitle="Blog Details"/>
        <First/>
        </>
  )
}

export default page