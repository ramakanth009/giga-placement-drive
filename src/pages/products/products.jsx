// src/pages/homepage/Homepage.jsx
import React from "react";
import { Box } from "@mui/material";
import HeroSection from "../resumelanding/HeroSection";
import WhyUseSection from "../resumelanding/WhyUseSection";
import KeyHighlightsSection from "../resumelanding/KeyHighlightsSection";
import ComparisonTableSection from "../resumelanding/ComparisonTableSection";
import TemplatesGallerySection from "../resumelanding/TemplatesGallerySection";
import WhoIsItFor from "../resumelanding/WhoIsItFor";
import SmartResumeSection from "../resumelanding/SmartResumeSection";
import useAdvancedSEO from "../../hooks/useAdvancedSEO";
import { advancedSeoData } from "../../data/advancedSeoData";

const Products = () => {
  useAdvancedSEO(advancedSeoData.products);

  return (
    <Box>
      <HeroSection />
      <WhyUseSection />
      <KeyHighlightsSection />
      <TemplatesGallerySection />
      <WhoIsItFor />
      <SmartResumeSection />
      <ComparisonTableSection />
    </Box>
  );
};

export default Products;
