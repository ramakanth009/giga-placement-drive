import React from 'react'
import FullStackHero from '../../components/fulltime/fullstack/fullstackhero/FullStackHero'
import FullStackIndustryFacts from '../../components/fulltime/fullstack/industryfacts/FullStackIndustryFacts'
import FullStackProgramHighlights from '../../components/fulltime/fullstack/programhighlights/FullStackProgramHighlights'
// import FullStackTechnologyKit from '../../components/fulltime/fullstack/technologykit/FullStackTechnologyKit'
import Fullstackcurriculam from '../../components/fulltime/fullstack/curriculum/FullStackCurriculum'
import FullStackProjectSection from '../../components/fulltime/fullstack/projectssection/FullStackProjectsSection'
import FullStackCaseStudies from '../../components/fulltime/fullstack/fullStackcasestudies/FullStackCaseStudies'
import FulltimeCertificates from '../../components/common/fulltime/fulltimeCertificates/FulltimeCertificates';
import FullStackProgramFee from '../../components/fulltime/fullstack/programfee/FullStackProgramFee'
import TestimonialComponent from '../../components/common/testimonialcomponent/TestimonialComponent'
// import FullStackSkillsMaster from '../../components/fulltime/fullstack/skillsmaster/FullStackSkillsMaster'
import FullStackAIToolkit from '../../components/fulltime/fullstack/aitoolkit/FullStackAIToolkit'
import FullStackLearningPath from '../../components/fulltime/fullstack/learningpathtimeline/FullStackLearningPath';
import FullFullStackFullTimeFaq from "../../components/fulltime/fullstack/faq/FullStackFullTimeFaq"
import useAdvancedSEO from '../../hooks/useAdvancedSEO'
import { advancedSeoData } from '../../data/advancedSeoData'

const FullstackFulltime = () => {
  useAdvancedSEO(advancedSeoData.fullstack);
  return (
    <div>
        <FullStackHero />
        <FullStackLearningPath />
        <FullStackProgramHighlights />
        <FullStackIndustryFacts />
        <FullStackAIToolkit />
        {/* <FullStackSkillsMaster /> */}
        <Fullstackcurriculam />
        {/* <FullStackTechnologyKit /> */}
        <FullStackProjectSection />
        <FullStackCaseStudies />
        <FulltimeCertificates />
        <FullStackProgramFee />
        <TestimonialComponent />
        <FullFullStackFullTimeFaq />
    </div>
  )
}

export default FullstackFulltime
