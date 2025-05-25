// src/pages/homepage/Homepage.jsx
import React from "react";
import { Box } from "@mui/material";
import Hero from "../../components/homepagecomponets/herosection/Hero";
import PageBackground from "../../components/common/background/PageBackground";
import HiringPartners from "../../components/common/hiringpartners/HiringPartners";
import OtherPrograms from "../../components/homepagecomponets/otherprograms/OtherPrograms";
import Faq from "../../components/homepagecomponets/faqhomepage/FaqHomepage";
import ResumeBuilderSection from "../../components/homepagecomponets/resumebuilder/ResumeBuilderSection";
import PreScreeningBanner from "../../components/homepagecomponets/prescreening/PreScreeningBanner";
import CampusSection from "../../components/homepagecomponets/campussection/CampusSection";

const Homepage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        isolation: "isolate",
      }}
    >
      <PageBackground />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        
        {/* Hero Section */}
        <Hero />
        
        <ResumeBuilderSection />
        
        {/* PreScreeningBanner Test */}
        <PreScreeningBanner />
        <CampusSection />
        {/* Hiring Partners as separate section */}
        <HiringPartners />
        
        <OtherPrograms />
        <Faq />
      </Box>
    </Box>
  );
};

export default Homepage;