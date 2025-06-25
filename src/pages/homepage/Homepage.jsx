// src/pages/homepage/Homepage.jsx
import React from "react";
import { Box } from "@mui/material";
import PageBackground from "../../components/common/background/PageBackground";
// import Hero from "../../components/homepagecomponets/herosection/Hero";
// import CampusSection from "../../components/homepagecomponets/campussection/CampusSection";
import HiringPartners from "../../components/common/hiringpartners/HiringPartners";
import OtherPrograms from "../../components/homepagecomponets/otherprograms/OtherPrograms";
import Faq from "../../components/homepagecomponets/faqhomepage/FaqHomepage";
import ResumeBuilderSection from "../../components/homepagecomponets/resumebuilder/ResumeBuilderSection";
import PreScreeningBanner from "../../components/homepagecomponets/prescreening/PreScreeningBanner";
// import LearningBreakdown from "../../components/homepagecomponets/learningbreakdown/LearningBreakdown";
import StartupFundProcess from "../../components/homepagecomponets/startupfundprocess/StartupFundProcess";
import TechFutureSection from "../../components/homepagecomponets/techfuturesection/TechFutureSection";
import PlacementPortalSection from "../../components/homepagecomponets/placementportalsection/PlacementPortalSection";
import MentorShowcase from "../../components/homepagecomponets/mentorshowcase/MentorShowcase";
import ContactDetailsForm from "../../components/common/contactform/ContactDetailsForm";
import PodcastShowcaseSection from "../../components/homepagecomponets/podcastshowcase/PodcastShowcaseSection";
import AIIntegrationSection from "../../components/homepagecomponets/aiintegrationsection/AIIntegrationSection";
// import HeroSection from "../../pages/resumelanding/HeroSection";
// import WhyUseSection from "../../pages/resumelanding/WhyUseSection";
// import KeyHighlightsSection from "../../pages/resumelanding/KeyHighlightsSection";
// import ComparisonTableSection from "../../pages/resumelanding/ComparisonTableSection";
// import TemplatesGallerySection from "../../pages/resumelanding/TemplatesGallerySection";
// import WhoIsItFor from "../../pages/resumelanding/WhoIsItFor";
// import SmartResumeSection from "../../pages/resumelanding/SmartResumeSection";
import Hero from "../../components/homepagecomponets/newdeisgns/HeroSection";
import Banner from "../../components/homepagecomponets/newdeisgns/Banner";
import CampusSection from "../../components/homepagecomponets/newdeisgns/CampusSection";
import useAdvancedSEO from "../../hooks/useAdvancedSEO";
import { advancedSeoData } from "../../data/advancedSeoData";

const Homepage = () => {
  useAdvancedSEO(advancedSeoData.homepage);
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
        <Banner />
        <ResumeBuilderSection />
        <CampusSection />
        <OtherPrograms />
        {/* <LearningBreakdown /> */}
        <HiringPartners />
        <PodcastShowcaseSection />
        <StartupFundProcess />
        <AIIntegrationSection />
        <TechFutureSection />
        <MentorShowcase />
        <PlacementPortalSection />
        <PreScreeningBanner />
        <ContactDetailsForm />
        <Faq />
        {/* <HeroSection />
        <WhyUseSection />
        <KeyHighlightsSection />
        <TemplatesGallerySection />
        <WhoIsItFor />
        <SmartResumeSection />
        <ComparisonTableSection /> */}
      </Box>
    </Box>
  );
};

export default Homepage;
