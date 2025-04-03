import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import Hero from "../../components/fullstackcomponents/hero/hero";
import FullstackImportance from "../../components/fullstackcomponents/fullstackimportance/FullstackImportance";
import HiringRolesBoxes from "../../components/fullstackcomponents/hiringrolesgrid/HiringRolesGrid";
import ProgramWorksSection from "../../components/common/programworks/ProgramWorksSection";
import Footer from "../../components/common/footer/Footer";
import FullStackFaq from "../../components/fullstackcomponents/faqfullstack/FaqFullstack";
import { fullStackItems } from "../../data/programWorksData";
import LimitedTimeOffer from "../../components/common/limitedtimeoffer/LimitedTimeOffer";
import HiringPartners from "../../components/common/hiringpartners/HiringPartners";
import FullStackCurriculum from "../../components/fullstackcomponents/curriculum/FullStackCurriculum";

const Fullstack = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FullstackImportance />
      <HiringRolesBoxes />
      <FullStackCurriculum />
      <HiringPartners />
      <LimitedTimeOffer />
      <ProgramWorksSection items={fullStackItems} />
      <FullStackFaq />
      <Footer />
    </div>
  );
};

export default Fullstack;
