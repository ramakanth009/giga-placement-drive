// src/pages/homepage/Homepage.jsx
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/herosection/hero";
import Background from "../../components/background/Background";
import HiringPartners from "../../components/hiringpartners/HiringPartners";
import { Box } from "@mui/material";

const Homepage = () => {
  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      minHeight: '100vh',
      isolation: 'isolate', // Creates a new stacking context
    }}>
      {/* Include the Background component */}
      <Background />
      
      {/* Content with higher z-index */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        
        {/* Add the Hiring Partners section */}
        
        {/* Your other homepage content will go here */}
      </Box>
    </Box>
  );
};

export default Homepage;