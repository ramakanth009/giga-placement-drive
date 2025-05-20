// src/pages/contactus/Contact.jsx
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
    isolation: "isolate",
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <Box className={classes.pageContainer}>
      <Background />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <ContactHeroSection />
        <ContactFormSection />
        <MapSection />
      </Box>
    </Box>
  );
};

export default Contact;