import React from 'react'
import FullStackHero from '../../components/fulltime/fullstack/fullstackhero/FullStackHero'
import Navbar from '../../components/common/navbar/Navbar'
import Footer from '../../components/common/footer/Footer'
import TestimonialComponent from '../../components/common/testimonialcomponent/TestimonialComponent'
import FullStackProgramFee from '../../components/fulltime/fullstack/programfee/FullStackProgramFee'
import FullStackIndustryFacts from '../../components/fulltime/fullstack/industryfacts/FullStackIndustryFacts'
import FulltimeCertificates from '../../components/common/fulltime/fulltimeCertificates/FulltimeCertificates';


const FullstackFulltime = () => {
  return (
    <div>
        <Navbar/>
        <FullStackHero />
        <FullStackIndustryFacts />
        <FulltimeCertificates />
        <FullStackProgramFee />
        <TestimonialComponent />
        <Footer />
    </div>
  )
}

export default FullstackFulltime
