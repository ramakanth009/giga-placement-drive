import React from 'react'
import Navbar from '../../components/common/navbar/Navbar'
import FullStackHero from '../../components/fulltime/fullstack/fullstackhero/FullStackHero'
import FullStackIndustryFacts from '../../components/fulltime/fullstack/industryfacts/FullStackIndustryFacts'
import FullStackProgramHighlights from '../../components/fulltime/fullstack/programhighlights/FullStackProgramHighlights'
import FullStackTechnologyKit from '../../components/fulltime/fullstack/technologykit/FullStackTechnologyKit'
import Fullstackcurriculam from '../../components/fulltime/fullstack/curriculum/FullStackCurriculum'
import FullStackProjectSection from '../../components/fulltime/fullstack/projectssection/FullStackProjectsSection'
import FullStackCaseStudies from '../../components/fulltime/fullstack/fullStackcasestudies/FullStackCaseStudies'
import FulltimeCertificates from '../../components/common/fulltime/fulltimeCertificates/FulltimeCertificates';
import FullStackProgramFee from '../../components/fulltime/fullstack/programfee/FullStackProgramFee'
import TestimonialComponent from '../../components/common/testimonialcomponent/TestimonialComponent'
import Footer from '../../components/common/footer/Footer'
import FullStackSkillsMaster from '../../components/fulltime/fullstack/skillsmaster/FullStackSkillsMaster'
import FullStackCurriculumMonths from '../../components/fulltime/fullstack/curriculummonths/FullStackCurriculumMonths'
import FullStackAIToolkit from '../../components/fulltime/fullstack/aitoolkit/FullStackAIToolkit'


const FullstackFulltime = () => {
  return (
    <div>
        <Navbar/>
        <FullStackHero />
        <FullStackIndustryFacts />
        <FullStackProgramHighlights />
        <FullStackAIToolkit />
        <FullStackCurriculumMonths />
        <FullStackSkillsMaster />
        <Fullstackcurriculam />
        <FullStackIndustryFacts />
        <FullStackTechnologyKit />
        <FullStackProjectSection />
        <FullStackCaseStudies />
        <FulltimeCertificates />
        <FullStackProgramFee />
        <TestimonialComponent />
        <Footer />
    </div>
  )
}

export default FullstackFulltime
