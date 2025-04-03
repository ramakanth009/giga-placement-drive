import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import Hero from "../../components/fullstackcomponents/hero/hero";
import FullstackImportance from "../../components/fullstackcomponents/fullstackimportance/FullstackImportance";
import HiringRolesBoxes from "../../components/fullstackcomponents/hiringrolesgrid/HiringRolesGrid";
import Footer from "../../components/common/footer/Footer";
import FullStackFaq from "../../components/fullstackcomponents/faqfullstack/FaqFullstack";

const Fullstack = () => {
  return (
    <div>
        <Navbar />
      <Hero />
      <FullstackImportance />
      <HiringRolesBoxes />
      <FullStackFaq />
      <Footer />
    </div>
  );
};

export default Fullstack;
