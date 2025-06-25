import React from "react";
import DataScienceHero from "../../components/fulltime/datascience/datasciencehero/DataScienceHero";
import TestimonialComponent from "../../components/common/testimonialcomponent/TestimonialComponent";
import DataScienceProgramHighlights from "../../components/fulltime/datascience/programhighlights/DataScienceProgramHighlights";
import DataScienceAIToolkit from "../../components/fulltime/datascience/aitoolkit/DataScienceAIToolkit";
import DataScienceIndustryFacts from "../../components/fulltime/datascience/industryfacts/DataScienceIndustryFacts";
import DataScienceCaseStudies from "../../components/fulltime/datascience/dataSciencecasestudies/DataScienceCaseStudies";
import DataScienceProgramFee from "../../components/fulltime/datascience/programfee/DataScienceProgramFee";
import FulltimeCertificates from "../../components/common/fulltime/fulltimeCertificates/FulltimeCertificates";
import DataScienceProjectsSection from "../../components/fulltime/datascience/projectssection/DataScienceProjectsSection";
// import DataScienceTechnologyKit from '../../components/fulltime/datascience/technologykit/DataScienceTechnologyKit'
import DataScienceCurriculum from "../../components/fulltime/datascience/curriculum/DataScienceCurriculum";
// import DataScienceSkillsMaster from "../../components/fulltime/datascience/skillsmaster/DataScienceSkillsMaster";
import DataScienceLearningPath from '../../components/fulltime/datascience/learningpathtimeline/DataScienceLearningPath';
import DataScienceFullTimeFaq from "../../components/fulltime/datascience/faqs/DataScienceFullTimeFaq"
import useAdvancedSEO from "../../hooks/useAdvancedSEO";
import { advancedSeoData } from "../../data/advancedSeoData";

const DatascienceFulltime = () => {
  useAdvancedSEO(advancedSeoData.datascience);
  return (
    <div>
      <DataScienceHero />
      <DataScienceLearningPath />
      <DataScienceProgramHighlights />
      <DataScienceIndustryFacts />
      <DataScienceAIToolkit />
      {/* <DataScienceSkillsMaster /> */}
      <DataScienceCurriculum />
      {/* <DataScienceTechnologyKit /> */}
      <DataScienceProjectsSection />
      <DataScienceCaseStudies />
      <FulltimeCertificates />
      <DataScienceProgramFee />
      <TestimonialComponent />
      <DataScienceFullTimeFaq />
    </div>
  );
};

export default DatascienceFulltime;
