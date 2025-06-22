// src/pages/homepage/Homepage.jsx
import React from "react";
import { Box } from "@mui/material";
import HeroSection from "../../pages/resumelanding/HeroSection";
import WhyUseSection from "../../pages/resumelanding/WhyUseSection";
import KeyHighlightsSection from "../../pages/resumelanding/KeyHighlightsSection";
import ComparisonTableSection from "../../pages/resumelanding/ComparisonTableSection";
import TemplatesGallerySection from "../../pages/resumelanding/TemplatesGallerySection";
import WhoIsItFor from "../../pages/resumelanding/WhoIsItFor";
import SmartResumeSection from "../../pages/resumelanding/SmartResumeSection";

const Products = () => {
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
