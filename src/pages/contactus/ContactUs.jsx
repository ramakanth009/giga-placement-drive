// src/pages/contactus/ContactUs.jsx
import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Background from '../../components/homepagecomponets/background/Background';
import ContactHeroSection from '../../components/contactcomponents/ContactHeroSection';
import ContactFormSection from '../../components/contactcomponents/ContactFormSection';
import MapSection from '../../components/contactcomponents/MapSection';

const useStyles = makeStyles({
  pageContainer: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    // isolation: "isolate",
  },
  contentContainer: {
    position: "relative",
    zIndex: 2, // Ensure proper z-index
  }
});

// Changed component name from Contact to ContactUs to match import in App.js
const ContactUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.pageContainer}>
      <Background />
      <Box className={classes.contentContainer}>
        <ContactHeroSection />
        <ContactFormSection />
        <MapSection />
      </Box>
    </Box>
  );
};

export default ContactUs;