// src/components/homepagecomponets/gigaversityadvantage/GigaversityAdvantage.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AdvantageBoxes from './AdvantageBoxes';

const useStyles = makeStyles({
  section: {
    padding: '80px 50px',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#f9fafc',
    background: 'linear-gradient(180deg, #f9fafc 0%, #f0f7ff 100%)',
    margin: '0 auto',
    "@media (max-width: 1200px)": {
      padding: '70px 40px',
    },
    "@media (max-width: 960px)": {
      padding: '60px 24px',
    },
    "@media (max-width: 600px)": {
      padding: '50px 16px',
    },
    "@media (max-width: 480px)": {
      padding: '40px 12px',
    },
    "@media (max-width: 375px)": {
      padding: '30px 10px',
    },
  },
  contentContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
    position: 'relative',
    maxWidth: '1400px',
    margin: '0 auto',
    "@media (max-width: 1200px)": {
      maxWidth: '1100px',
    },
    "@media (max-width: 960px)": {
      flexDirection: 'column',
      gap: '40px',
    },
    "@media (max-width: 600px)": {
      gap: '30px',
    },
    "@media (max-width: 480px)": {
      gap: '25px',
    },
    "@media (max-width: 375px)": {
      gap: '20px',
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
      marginBottom: '40px',
    },
    "@media (max-width: 960px)": {
      width: '100%',
      paddingRight: '0',
      marginBottom: '20px',
      textAlign: 'center',
      maxWidth: '700px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '15px',
      maxWidth: '100%',
    },
    "@media (max-width: 480px)": {
      marginBottom: '10px',
    },
    "@media (max-width: 375px)": {
      marginBottom: '5px',
    },
  },
  title: {
    fontSize: '2.8rem !important',
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
      "@media (max-width: 480px)": {
        width: '60px',
        height: '3px',
        bottom: '-10px',
      },
      "@media (max-width: 375px)": {
        width: '50px',
        height: '3px',
        bottom: '-8px',
      },
    },
    "@media (max-width: 1200px)": {
      fontSize: '2.5rem !important',
      lineHeight: '1.25 !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.3rem !important',
      lineHeight: '1.3 !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '2rem !important',
      lineHeight: '1.3 !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.8rem !important',
      lineHeight: '1.3 !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '1.6rem !important',
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
    "@media (max-width: 1200px)": {
      fontSize: '1.2rem !important',
      marginTop: '28px !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.15rem !important',
      marginTop: '25px !important',
      maxWidth: '600px',
      margin: '25px auto 0 !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.1rem !important',
      marginTop: '22px !important',
      lineHeight: '1.5 !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1rem !important',
      marginTop: '20px !important',
      lineHeight: '1.5 !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.95rem !important',
      marginTop: '18px !important',
      lineHeight: '1.4 !important',
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
    "@media (max-width: 1200px)": {
      width: '280px',
      height: '280px',
      top: '-90px',
      left: '-140px',
    },
    "@media (max-width: 960px)": {
      width: '250px',
      height: '250px',
      top: '-80px',
      left: '-120px',
    },
    "@media (max-width: 600px)": {
      width: '200px',
      height: '200px',
      top: '-70px',
      left: '-100px',
    },
    "@media (max-width: 480px)": {
      width: '180px',
      height: '180px',
      top: '-60px',
      left: '-90px',
    },
    "@media (max-width: 375px)": {
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
    "@media (max-width: 1200px)": {
      width: '140px',
      height: '140px',
      bottom: '-55px',
    },
    "@media (max-width: 960px)": {
      width: '130px',
      height: '130px',
      bottom: '-50px',
      right: '8%',
    },
    "@media (max-width: 600px)": {
      width: '120px',
      height: '120px',
      bottom: '-45px',
      right: '6%',
    },
    "@media (max-width: 480px)": {
      width: '100px',
      height: '100px',
      bottom: '-40px',
      right: '5%',
    },
    "@media (max-width: 375px)": {
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
    top: '2%',
    right: '5%',
    opacity: 0.2,
    backgroundImage: 'radial-gradient(#2A2B6A 2px, transparent 2px)',
    backgroundSize: '15px 15px',
    zIndex: 2,
    "@media (max-width: 1200px)": {
      width: '130px',
      height: '130px',
      backgroundSize: '14px 14px',
    },
    "@media (max-width: 960px)": {
      width: '120px',
      height: '120px',
      top: '15%',
      right: '10%',
      backgroundSize: '13px 13px',
    },
    "@media (max-width: 600px)": {
      width: '100px',
      height: '100px',
      backgroundSize: '12px 12px',
    },
    "@media (max-width: 480px)": {
      width: '90px',
      height: '90px',
      backgroundSize: '10px 10px',
    },
    "@media (max-width: 375px)": {
      width: '70px',
      height: '70px',
      backgroundSize: '8px 8px',
      opacity: 0.15,
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
    "@media (max-width: 1200px)": {
      width: '110px',
      height: '110px',
      backgroundSize: '11px 11px',
    },
    "@media (max-width: 960px)": {
      width: '100px',
      height: '100px',
      bottom: '10%',
      left: '8%',
      backgroundSize: '10px 10px',
    },
    "@media (max-width: 600px)": {
      width: '90px',
      height: '90px',
      backgroundSize: '9px 9px',
      left: '6%',
    },
    "@media (max-width: 480px)": {
      width: '80px',
      height: '80px',
      backgroundSize: '8px 8px',
      left: '5%',
    },
    "@media (max-width: 375px)": {
      width: '60px',
      height: '60px',
      backgroundSize: '6px 6px',
      left: '3%',
      opacity: 0.25,
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
      
      <Box className={classes.contentContainer}>
        {/* Left Content */}
        <Box className={classes.leftContent}>
          <Typography variant="h2" className={classes.title}>
            The Advantage of 
            <span className={classes.yellowText}>Virtual PLacement Drive</span>
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Gain Job-Ready Skills, Build A Strong Resume, And Apply Expertise Through Hands-On Learning And Personalized Guidance For Career Success.
          </Typography>
        </Box>

        {/* Right Content - Advantage Boxes Component */}
        <AdvantageBoxes />
      </Box>
    </Box>
  );
};

export default GigaversityAdvantage;