// src/pages/homepage/Homepage.jsx
import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/herosection/Hero";
import Background from "../../components/background/Background";
import HiringPartners from "../../components/hiringpartners/HiringPartners";
import JobKickstart from "../../components/jobkickstart/JobKickstart";
import WhyDifferent from "../../components/whydifferent/WhyDifferent";
import InDemandRoles from "../../components/indemandroles/InDemandRoles";
import FullStackTrainingPlan from "../../components/trainingplancomponent/FullStackTrainingPlan";
import DataScienceTrainingPlan from "../../components/trainingplancomponent/DataScienceTrainingPlan";
import GigaversityAdvantage from "../../components/gigaversityadvantage/GigaversityAdvantage";
import HowItWorks from "../../components/howitworks/HowItWorks";
import WhoShouldJoin from "../../components/whoshouldjoin/WhoShouldJoin";
import LimitedTimeOffer from "../../components/limitedtimeoffer/LimitedTimeOffer";
import OtherPrograms from "../../components/otherprograms/OtherPrograms";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        isolation: "isolate", // Creates a new stacking context
      }}
    >
      {/* Include the Background component */}
      <Background />

      {/* Content with higher z-index */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Hiring Partners as separate section */}
        <HiringPartners />
        
        <JobKickstart /> 

        {/* Add the WhyDifferent component */}
        <WhyDifferent />

        {/* Your other homepage content will go here */}
        <InDemandRoles />

        <FullStackTrainingPlan />

        <DataScienceTrainingPlan />

        <GigaversityAdvantage />

        <HowItWorks />

        <WhoShouldJoin />

        <LimitedTimeOffer />

        <OtherPrograms />
        <Faq />
        <Footer />
      </Box>
    </Box>
  );
};

export default Homepage;