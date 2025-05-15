import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import DataScienceHero from "../../components/fulltime/datascience/datasciencehero/DataScienceHero";
import TestimonialComponent from "../../components/common/testimonialcomponent/TestimonialComponent";
import DataScienceProgramHighlights from "../../components/fulltime/datascience/programhighlights/DataScienceProgramHighlights";
import DataScienceAIToolkit from "../../components/fulltime/datascience/aitoolkit/DataScienceAIToolkit";
import DataScienceIndustryFacts from "../../components/fulltime/datascience/industryfacts/DataScienceIndustryFacts";
import DataScienceCaseStudies from "../../components/fulltime/datascience/dataSciencecasestudies/DataScienceCaseStudies";
import DataScienceProgramFee from "../../components/fulltime/datascience/programfee/DataScienceProgramFee";
import FulltimeCertificates from "../../components/common/fulltime/fulltimeCertificates/FulltimeCertificates";
import DataScienceProjectsSection from "../../components/fulltime/datascience/projectssection/DataScienceProjectsSection";
import DataScienceTechnologyKit from '../../components/fulltime/datascience/technologykit/DataScienceTechnologyKit'
import DataScienceCurriculum from "../../components/fulltime/datascience/curriculum/DataScienceCurriculum";
import DataScienceSkillsMaster from "../../components/fulltime/datascience/skillsmaster/DataScienceSkillsMaster";
import DataScienceLearningPath from '../../components/fulltime/datascience/learningpathtimeline/DataScienceLearningPath';

const DatascienceFulltime = () => {
  return (
    <div>
      <Navbar />
      <DataScienceHero />
      <DataScienceLearningPath />
      <DataScienceProgramHighlights />
      <DataScienceAIToolkit />
      <DataScienceIndustryFacts />
      <DataScienceSkillsMaster />
      <DataScienceCurriculum />
      <DataScienceTechnologyKit />
      <DataScienceProjectsSection />
      <DataScienceCaseStudies />
      <FulltimeCertificates />
      <DataScienceProgramFee />
      <TestimonialComponent />
      <Footer />
    </div>
  );
};

export default DatascienceFulltime;
