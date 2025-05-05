import React from 'react'
import FullStackHero from '../../components/fulltime/fullstack/fullstackhero/FullStackHero'
import Navbar from '../../components/common/navbar/Navbar'
import Footer from '../../components/common/footer/Footer'
import TestimonialComponent from '../../components/common/testimonialcomponent/TestimonialComponent'

const FullstackFulltime = () => {
  return (
    <div>
        <Navbar/>
        <FullStackHero />
        <TestimonialComponent /> 
        <Footer />
    </div>
  )
}

export default FullstackFulltime
