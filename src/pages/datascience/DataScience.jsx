import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import Hero from "../../components/datasciencecomponents/hero/Hero";
import DataScienceImportance from "../../components/datasciencecomponents/datascienceimportance/DataScienceImportance";
import Footer from "../../components/common/footer/Footer";
import DataScienceFaq from "../../components/datasciencecomponents/datasciencefaq/DatascienceFaq";
import ProgramWorksSection from "../../components/common/programworks/ProgramWorksSection";
import LimitedTimeOffer from "../../components/common/limitedtimeoffer/LimitedTimeOffer";
import { dataScienceItems } from "../../data/programWorksData";
import HiringPartners from "../../components/common/hiringpartners/HiringPartners";
import DataScienceCurriculum from "../../components/datasciencecomponents/curriculum/DataScienceCurriculum";
import CareerBanner from "../../components/common/careerbanner/CareerBanner";
import TestimonialComponent from "../../components/common/testimonialcomponent/TestimonialComponent";
import ProjectsSection from "../../components/datasciencecomponents/projectssection/ProjectsSection";
import ProjectHigh from "../../components/common/projecthighlightimg/ProjectHigh";
import HiringRolesBoxes from "../../components/datasciencecomponents/hiringrolesboxes/HiringRolesBoxes";
import DataScienceCertificationsSection from "../../components/datasciencecomponents/certificationsection/DataScienceCertificationsSection";

const DataScience = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <DataScienceImportance />
      <HiringRolesBoxes />
      <ProjectHigh />
      <DataScienceCurriculum />
      <ProjectsSection />
      <DataScienceCertificationsSection />
      <HiringPartners />
      <LimitedTimeOffer />
      <ProgramWorksSection items={dataScienceItems} />
      <TestimonialComponent />
      <DataScienceFaq />
      <CareerBanner />
      <Footer />
    </div>
  );
};

export default DataScience;