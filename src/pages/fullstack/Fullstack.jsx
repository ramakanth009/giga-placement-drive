import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import Hero from "../../components/fullstackcomponents/hero/hero";
import FullstackImportance from "../../components/fullstackcomponents/fullstackimportance/FullstackImportance";
import HiringRolesBoxes from "../../components/fullstackcomponents/hiringrolesboxes/HiringRolesBoxes";
import ProgramWorksSection from "../../components/common/programworks/ProgramWorksSection";
import Footer from "../../components/common/footer/Footer";
import FullStackFaq from "../../components/fullstackcomponents/faqfullstack/FaqFullstack";
import { fullStackItems } from "../../data/programWorksData";
import LimitedTimeOffer from "../../components/common/limitedtimeoffer/LimitedTimeOffer";
import HiringPartners from "../../components/common/hiringpartners/HiringPartners";
import FullStackCurriculum from "../../components/fullstackcomponents/curriculum/FullStackCurriculum";
import CareerBanner from "../../components/common/careerbanner/CareerBanner";
import TestimonialComponent from "../../components/common/testimonialcomponent/TestimonialComponent";
import ProjectsSection from "../../components/fullstackcomponents/projectssection/ProjectsSection";
import ProjectHigh from "../../components/common/projecthighlightimg/ProjectHigh";


const Fullstack = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FullstackImportance />
      <HiringRolesBoxes />
      <ProjectHigh />
      <FullStackCurriculum />
      <ProjectsSection />
      <HiringPartners />
      <LimitedTimeOffer />
      <ProgramWorksSection items={fullStackItems} />
      <TestimonialComponent />
      <FullStackFaq />
      <CareerBanner />
      <Footer />
    </div>
  );
};

export default Fullstack;
