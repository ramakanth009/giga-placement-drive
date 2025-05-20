// src/pages/homepage/Homepage.jsx
import React from "react";
import { Box } from "@mui/material";
import Hero from "../../components/homepagecomponets/herosection/Hero";
import PageBackground from "../../components/common/background/PageBackground";
import HiringPartners from "../../components/common/hiringpartners/HiringPartners";
import OtherPrograms from "../../components/homepagecomponets/otherprograms/OtherPrograms";
import Faq from "../../components/homepagecomponets/faqhomepage/FaqHomepage";
import ResumeBuilderSection from "../../components/homepagecomponets/resumebuilder/ResumeBuilderSection";

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
        {/* Hiring Partners as separate section */}
        <HiringPartners />
        
        {/* Add the WhyDifferent component */}

        {/* Your other homepage content will go here */}






        <OtherPrograms />
        <Faq />
      </Box>
    </Box>
  );
};

export default Homepage;