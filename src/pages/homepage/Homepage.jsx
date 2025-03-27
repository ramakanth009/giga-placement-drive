// src/pages/homepage/Homepage.jsx
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Background from "../../components/background/Background";
import { Box } from "@mui/material";

const Homepage = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <Background />
      <Navbar />
      {/* Your other homepage content will go here */}
    </Box>
  );
};

export default Homepage;