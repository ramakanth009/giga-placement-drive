// src/components/aboutcomponents/herosection/HeroSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LaptopSection from "./LaptopSection";

const useStyles = makeStyles({
  heroSection: {
    position: 'relative',
    color: 'white',
    padding: '80px 30px 40px',
    textAlign: 'center',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: '#2A2B6A',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 66%)',
      zIndex: -1,
      height: '598px',
      width: '100%',
      borderRadius: "0 0 30% 64%"
    },
    "@media (max-width: 1200px)": {
      padding: '70px 25px 40px',
    },
    "@media (max-width: 960px)": {
      padding: '60px 20px 40px',
    },
    "@media (max-width: 600px)": {
      padding: '50px 15px 40px',
      '&::before': {
        height: '550px',
      }
    },
    "@media (max-width: 480px)": {
      padding: '40px 15px 30px',
      '&::before': {
        height: '520px',
        borderRadius: "0 0 25% 55%"
      }
    },
    "@media (max-width: 375px)": {
      padding: '35px 10px 25px',
      '&::before': {
        height: '480px',
        borderRadius: "0 0 20% 45%"
      }
    },
  },
  heroContent: {
    minHeight: '30vh',
    "@media (max-width: 600px)": {
      minHeight: '25vh',
    },
    "@media (max-width: 480px)": {
      minHeight: '20vh',
    },
  },
  pageTitle: {
    color: 'white !important',
    fontSize: '3rem !important',
    fontWeight: 'bold !important',
    marginBottom: '1rem !important',
    "@media (max-width: 1200px)": {
      fontSize: '2.8rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.5rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '2.2rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.8rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '1.6rem !important',
    },
  },
  highlightText: {
    color: "#FFC614",
    position: "relative",
    display: "inline-block"
  },
  pageSubtitle: {
    color: 'white !important',
    fontSize: '1.2rem !important',
    maxWidth: '800px',
    margin: '0 auto !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.15rem !important',
      maxWidth: '750px',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.1rem !important',
      maxWidth: '700px',
    },
    "@media (max-width: 600px)": {
      fontSize: '1rem !important',
      maxWidth: '95%',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.85rem !important',
    },
  }
});

const HeroSection = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.heroSection}>
        <Box className={classes.heroContent}>
          <Typography variant="h1" className={classes.pageTitle}>
            About <span className={classes.highlightText}>Gigaversity</span>
          </Typography>
          <Typography variant="h2" className={classes.pageSubtitle}>
            India's first product-based learning platform designed to transform students into industry-ready professionals
          </Typography>
        </Box>
      </Box>
      <LaptopSection />
    </>
  );
};

export default HeroSection;