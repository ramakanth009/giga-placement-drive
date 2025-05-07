import React from 'react'
import FullStackHero from '../../components/fulltime/fullstack/fullstackhero/FullStackHero'
import Navbar from '../../components/common/navbar/Navbar'
import Footer from '../../components/common/footer/Footer'
import TestimonialComponent from '../../components/common/testimonialcomponent/TestimonialComponent'
import FullStackProgramFee from '../../components/common/fulltime/programfee/ProgramFee'
import FullStackIndustryFacts from '../../components/common/fulltime/industryfacts/IndustryBackedFacts'
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
