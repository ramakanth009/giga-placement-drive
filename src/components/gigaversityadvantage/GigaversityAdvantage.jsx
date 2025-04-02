// src/components/gigaversityadvantage/GigaversityAdvantage.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AdvantageBoxes from './AdvantageBoxes';

const useStyles = makeStyles({
  section: {
    padding: '100px 0',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#f9fafc',
    background: 'linear-gradient(180deg, #f9fafc 0%, #f0f7ff 100%)',
    "@media (max-width: 960px)": {
      padding: '70px 0',
    },
    "@media (max-width: 600px)": {
      padding: '50px 0',
    },
  },
  contentContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
    position: 'relative',
    "@media (max-width: 960px)": {
      flexDirection: 'column',
      gap: '40px',
    },
  },
  leftContent: {
    width: '40%',
    paddingRight: '40px',
    marginBottom: '50px',
    position: 'relative',
    zIndex: 2,
    "@media (max-width: 1200px)": {
      width: '45%',
      paddingRight: '30px',
    },
    "@media (max-width: 960px)": {
      width: '100%',
      paddingRight: '0',
      marginBottom: '30px',
      textAlign: 'center',
    },
  },
  title: {
    fontSize: '3.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    lineHeight: '1.2 !important',
    marginBottom: '10px !important',
    position: 'relative',
    zIndex: 2,
    "&::after": {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '0',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #FFC614, #FFA114)',
      borderRadius: '2px',
      "@media (max-width: 960px)": {
        left: '50%',
        transform: 'translateX(-50%)',
      },
    },
    "@media (max-width: 1200px)": {
      fontSize: '3rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.8rem !important',
      lineHeight: '1.3 !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '2.3rem !important',
      lineHeight: '1.3 !important',
    },
  },
  yellowText: {
    color: '#FFC614 !important',
    display: 'block',
  },
  description: {
    fontSize: '1.25rem !important',
    color: '#4A4A4A !important',
    lineHeight: '1.6 !important',
    marginTop: '30px !important',
    position: 'relative',
    zIndex: 2,
    "@media (max-width: 960px)": {
      fontSize: '1.15rem !important',
      marginTop: '25px !important',
      maxWidth: '600px',
      margin: '25px auto 0 !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1rem !important',
      marginTop: '20px !important',
      lineHeight: '1.5 !important',
    },
  },
  decorationCircle: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'linear-gradient(145deg, rgba(255,198,20,0.15), rgba(42,43,106,0.05))',
    zIndex: 1,
  },
  bigCircle: {
    width: '300px',
    height: '300px',
    top: '-100px',
    left: '-150px',
    "@media (max-width: 960px)": {
      width: '200px',
      height: '200px',
      top: '-70px',
      left: '-100px',
    },
    "@media (max-width: 600px)": {
      width: '150px',
      height: '150px',
      top: '-50px',
      left: '-75px',
    },
  },
  smallCircle: {
    width: '150px',
    height: '150px',
    bottom: '-60px',
    right: '10%',
    background: 'linear-gradient(145deg, rgba(42,43,106,0.08), rgba(255,198,20,0.12))',
    "@media (max-width: 960px)": {
      width: '100px',
      height: '100px',
      bottom: '-40px',
      right: '5%',
    },
    "@media (max-width: 600px)": {
      width: '80px',
      height: '80px',
      bottom: '-30px',
      right: '3%',
    },
  },
  dotPatternOne: {
    position: 'absolute',
    width: '140px',
    height: '140px',
    top: '10%',
    right: '5%',
    opacity: 0.3,
    backgroundImage: 'radial-gradient(#2A2B6A 2px, transparent 2px)',
    backgroundSize: '15px 15px',
    zIndex: 1,
    "@media (max-width: 960px)": {
      width: '100px',
      height: '100px',
      top: '15%',
      right: '10%',
    },
    "@media (max-width: 600px)": {
      display: 'none',
    },
  },
  dotPatternTwo: {
    position: 'absolute',
    width: '120px',
    height: '120px',
    bottom: '15%',
    left: '10%',
    opacity: 0.3,
    backgroundImage: 'radial-gradient(#FFC614 2px, transparent 2px)',
    backgroundSize: '12px 12px',
    zIndex: 1,
    "@media (max-width: 960px)": {
      width: '80px',
      height: '80px',
      bottom: '10%',
      left: '5%',
    },
    "@media (max-width: 600px)": {
      display: 'none',
    },
  },
});

const GigaversityAdvantage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      {/* Decorative elements */}
      <Box className={`${classes.decorationCircle} ${classes.bigCircle}`}></Box>
      <Box className={`${classes.decorationCircle} ${classes.smallCircle}`}></Box>
      <Box className={classes.dotPatternOne}></Box>
      <Box className={classes.dotPatternTwo}></Box>
      
      <Container maxWidth="lg">
        <Box className={classes.contentContainer}>
          {/* Left Content */}
          <Box className={classes.leftContent}>
            <Typography variant="h2" className={classes.title}>
              The Gigaversity
              <span className={classes.yellowText}>Advantage</span>
            </Typography>
            <Typography variant="body1" className={classes.description}>
              Gain Job-Ready Skills, Build A Strong Resume, And Apply Expertise Through Hands-On Learning And Personalized Guidance For Career Success.
            </Typography>
          </Box>

          {/* Right Content - Advantage Boxes Component (remains unchanged) */}
          <AdvantageBoxes />
        </Box>
      </Container>
    </Box>
  );
};

export default GigaversityAdvantage;