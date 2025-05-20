// src/pages/homepage/Homepage.jsx
import React from "react";
import { Box } from "@mui/material";
import Hero from "../../components/homepagecomponets/herosection/Hero";
import PageBackground from "../../components/common/background/PageBackground";
import HiringPartners from "../../components/common/hiringpartners/HiringPartners";
import JobKickstart from "../../components/homepagecomponets/jobkickstart/JobKickstart";
import WhyDifferent from "../../components/homepagecomponets/whydifferent/WhyDifferent";
import InDemandRoles from "../../components/homepagecomponets/indemandroles/InDemandRoles";
import TrainingPlanComponent from "../../components/homepagecomponets/trainingplancomponent/TrainingPlanComponent";
import GigaversityAdvantage from "../../components/homepagecomponets/gigaversityadvantage/GigaversityAdvantage";
import HowItWorks from "../../components/homepagecomponets/howitworks/HowItWorks";
import WhoShouldJoin from "../../components/homepagecomponets/whoshouldjoin/WhoShouldJoin";
import LimitedTimeOffer from "../../components/common/limitedtimeoffer/LimitedTimeOffer";
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
      {/* <PageBackground /> */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        
        {/* Hero Section */}
        <Hero />
        
        <ResumeBuilderSection />
        {/* Hiring Partners as separate section */}
        <HiringPartners />
        
        <JobKickstart /> 
        {/* Add the WhyDifferent component */}
        <WhyDifferent />

        {/* Your other homepage content will go here */}
        <InDemandRoles />

        <TrainingPlanComponent />

        <GigaversityAdvantage />

        <HowItWorks />

        <WhoShouldJoin />

        <LimitedTimeOffer />

        <OtherPrograms />
        <Faq />
      </Box>
    </Box>
  );
};

export default Homepage;