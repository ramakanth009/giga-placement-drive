// src/components/contactcomponents/contactherosection/ContactHeroSection.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  heroSection: {
    position: 'relative',
    background: 'url(/path/to/your/image.jpg) no-repeat center center',
    color: 'white',
    padding: '80px 30px 350px',
    textAlign: 'center',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: '#2A2B6A',
      clipPath: 'polygon(0 0, 100% 0, 100% 66%, 0 100%)',
      zIndex: -1,
      height: '598px',
      width: '100%',
      borderRadius: "0 0 64% 30%"
    },
    "@media (max-width: 1200px)": {
      padding: '75px 25px 330px',
    },
    "@media (max-width: 960px)": {
      padding: '70px 20px 310px',
    },
    "@media (max-width: 600px)": {
      padding: '60px 15px 280px',
      '&::before': {
        height: '550px',
      }
    },
    "@media (max-width: 480px)": {
      padding: '50px 15px 250px',
      '&::before': {
        height: '500px',
      }
    },
    "@media (max-width: 375px)": {
      padding: '40px 10px 220px',
      '&::before': {
        height: '450px',
      }
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

const ContactHeroSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroSection}>
      <Typography variant="h1" className={classes.pageTitle}>
        Contact <span className={classes.highlightText}>Us</span>
      </Typography>
      <Typography variant="h6" className={classes.pageSubtitle}>
        Whether you're looking to upskill, switch careers, or hire top talent, Gigaversity is here
        to support your journey!
      </Typography>
    </Box>
  );
};

export default ContactHeroSection;