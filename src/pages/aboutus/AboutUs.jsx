// src/pages/aboutus/About.jsx
import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HeroSection from "../../components/aboutcomponents/HeroSection";
import WhyStartSection from "../../components/aboutcomponents//WhyStartSection";
import CoreValuesSection from "../../components/aboutcomponents//CoreValuesSection";
import WhatSetsUsApartSection from "../../components/aboutcomponents//WhatSetsUsApartSection";

const useStyles = makeStyles({
  pageContainer: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    isolation: "isolate",
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <Box className={classes.pageContainer}>
      <HeroSection />
      <WhyStartSection />
      <CoreValuesSection />
      <WhatSetsUsApartSection />
    </Box>
  );
};

export default About;