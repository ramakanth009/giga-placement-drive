import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import TestimonialComponent from "../../components/common/testimonialcomponent/TestimonialComponent";
import DataScienceIndustryFacts from "../../components/fulltime/datascience/industryfacts/DataScienceIndustryFacts";
import DataScienceCaseStudies from "../../components/fulltime/datascience/dataSciencecasestudies/DataScienceCaseStudies";
import DataScienceProgramFee from "../../components/common/fulltime/programfee/ProgramFee";
import FulltimeCertificates from "../../components/common/fulltime/fulltimeCertificates/FulltimeCertificates";
import DataScienceProjectsSection from "../../components/fulltime/datascience/projectssection/DataScienceProjectsSection";
import DataScienceTechnologyKit from '../../components/fulltime/datascience/technologykit/DataScienceTechnologyKit'
import DataScienceCurriculum from "../../components/fulltime/datascience/curriculum/DataScienceCurriculum";
import DataScienceSkillsMaster from "../../components/fulltime/datascience/skillsmaster/DataScienceSkillsMaster";
import DataScienceCurriculumMonths from "../../components/fulltime/datascience/curriculummonths/DataScienceCurriculumMonths";


const DatascienceFulltime = () => {
  return (
    <div>
      <Navbar />
      <DataScienceIndustryFacts />
      <DataScienceCurriculumMonths />
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
