import React from 'react'
import Navbar from '../../components/Navbar'
import Main from './_components/Main'
import Why from './_components/Why'
import How from './_components/How'
import Community from './_components/Community'
import Testimonial from './_components/Testimonial'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <Main/>
        <Why/>
        <How/>
        <Community/>
        <Testimonial/>
        <Footer/>
        
    </>
  )
}

export default HomePage