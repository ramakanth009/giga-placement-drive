import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  section: {
    padding: '40px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #101138 0%, #1e1c44 100%)',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 
        'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      backgroundSize: '30px 30px',
      zIndex: 1,
    },
    '@media (max-width: 1200px)': {
      padding: '35px 0',
      '&:before': {
        backgroundSize: '25px 25px',
      },
    },
    '@media (max-width: 960px)': {
      padding: '30px 0',
      '&:before': {
        backgroundSize: '22px 22px',
      },
    },
    '@media (max-width: 600px)': {
      padding: '25px 0',
      '&:before': {
        backgroundSize: '20px 20px',
      },
    },
    '@media (max-width: 480px)': {
      padding: '20px 0',
      '&:before': {
        backgroundSize: '18px 18px',
      },
    },
    '@media (max-width: 375px)': {
      padding: '18px 0',
      '&:before': {
        backgroundSize: '15px 15px',
      },
    },
  },
  glowEffect: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    zIndex: 1,
    opacity: 0.3,
    filter: 'blur(150px)',
    background: '#8a5cf7',
    top: '-200px',
    right: '-100px',
    '@media (max-width: 1200px)': {
      width: '400px',
      height: '400px',
      top: '-150px',
      right: '-75px',
    },
    '@media (max-width: 960px)': {
      width: '350px',
      height: '350px',
      top: '-125px',
      right: '-50px',
    },
    '@media (max-width: 600px)': {
      width: '300px',
      height: '300px',
      top: '-100px',
      right: '-25px',
    },
    '@media (max-width: 480px)': {
      width: '250px',
      height: '250px',
      top: '-75px',
      right: '0px',
    },
    '@media (max-width: 375px)': {
      width: '200px',
      height: '200px',
      top: '-50px',
      right: '25px',
    },
  },
  container: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem !important',
    fontWeight: '700 !important',
    marginBottom: '8px !important',
    color: 'white !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.6rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.4rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.3rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.2rem !important',
    },
  },
  subtitle: {
    fontSize: '1rem !important',
    color: 'rgba(255, 255, 255, 0.7) !important',
    marginBottom: '30px !important',
    maxWidth: '600px',
    margin: '0 auto 30px auto !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.95rem !important',
      maxWidth: '550px',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.9rem !important',
      maxWidth: '500px',
      marginBottom: '25px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
      maxWidth: '90%',
      marginBottom: '20px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem !important',
      marginBottom: '15px !important',
    },
  },
  fundingButton: {
    backgroundColor: '#E91E63 !important',
    color: 'white !important',
    padding: '6px 15px !important',
    borderRadius: '50px !important',
    fontSize: '0.9rem !important',
    fontWeight: 'bold !important',
    display: 'inline-block !important',
    marginBottom: '20px !important',
    '@media (max-width: 1200px)': {
      padding: '5px 13px !important',
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 960px)': {
      padding: '5px 12px !important',
      fontSize: '0.8rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 600px)': {
      padding: '4px 10px !important',
      fontSize: '0.75rem !important',
      marginBottom: '15px !important',
    },
    '@media (max-width: 480px)': {
      padding: '4px 9px !important',
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 375px)': {
      padding: '3px 8px !important',
      fontSize: '0.65rem !important',
    },
  },
  stepsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2%',
    position: 'relative',
    marginTop: '20px',
    '@media (max-width: 1200px)': {
      gap: '1.5%',
      marginTop: '18px',
    },
    '@media (max-width: 1000px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '50px',
    },
    '@media (max-width: 960px)': {
      gap: '40px',
      marginTop: '15px',
    },
    '@media (max-width: 600px)': {
      gap: '30px',
      marginTop: '12px',
    },
    '@media (max-width: 480px)': {
      gap: '25px',
      marginTop: '10px',
    },
    '@media (max-width: 375px)': {
      gap: '20px',
      marginTop: '8px',
    },
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '14%',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      width: '15%',
    },
    '@media (max-width: 1000px)': {
      width: '80%',
      maxWidth: '300px',
    },
    '@media (max-width: 600px)': {
      width: '90%',
      maxWidth: '280px',
    },
    '@media (max-width: 480px)': {
      width: '95%',
      maxWidth: '260px',
    },
    '@media (max-width: 375px)': {
      width: '100%',
      maxWidth: '240px',
    },
  },
  stepNumberContainer: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#4263EB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15px',
    position: 'relative',
    zIndex: 2,
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(66, 99, 235, 0.3)',
    overflow: 'hidden',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '0 6px 20px rgba(66, 99, 235, 0.4)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '30px',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.3)',
      transform: 'skewX(-30deg) translateX(-150px)',
      animation: '$shine 3s infinite',
    },
    '@media (max-width: 1200px)': {
      width: '55px',
      height: '55px',
    },
    '@media (max-width: 960px)': {
      width: '50px',
      height: '50px',
    },
    '@media (max-width: 600px)': {
      width: '45px',
      height: '45px',
      marginBottom: '12px',
    },
    '@media (max-width: 480px)': {
      width: '40px',
      height: '40px',
      marginBottom: '10px',
    },
    '@media (max-width: 375px)': {
      width: '35px',
      height: '35px',
      marginBottom: '8px',
    },
  },
  stepNumber: {
    color: 'white',
    fontWeight: 'bold !important',
    fontSize: '1.8rem !important',
    animation: '$pulse 2s infinite',
    '@media (max-width: 1200px)': {
      fontSize: '1.6rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.5rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1rem !important',
    },
  },
  stepTitle: {
    fontSize: '1rem !important',
    minWidth: '400px !important',
    fontWeight: '600 !important',
    marginBottom: '8px !important',
    color: 'white !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.95rem !important',
      minWidth: '350px !important',
    },
    '@media (max-width: 1000px)': {
      minWidth: 'unset !important',
      maxWidth: '300px',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.9rem !important',
      maxWidth: '280px',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
      maxWidth: '260px',
      marginBottom: '6px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem !important',
      maxWidth: '240px',
      marginBottom: '5px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem !important',
      maxWidth: '220px',
      marginBottom: '4px !important',
    },
  },
  stepDescription: {
    fontSize: '0.85rem !important',
    color: 'rgba(255, 255, 255, 0.7) !important',
    lineHeight: '1.4 !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.75rem !important',
      lineHeight: '1.3 !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.7rem !important',
      lineHeight: '1.2 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.65rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.6rem !important',
    },
  },
  progressLine: {
    position: 'absolute',
    height: '2px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    top: '30px',
    left: '10%',
    right: '10%',
    zIndex: 1,
    '@media (max-width: 1200px)': {
      top: '27px',
    },
    '@media (max-width: 1000px)': {
      display: 'none',
    },
  },
  '@keyframes shine': {
    '0%': {
      transform: 'skewX(-30deg) translateX(-150px)',
    },
    '100%': {
      transform: 'skewX(-30deg) translateX(350px)',
    },
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.1)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
});

const StartupFundProcess = () => {
  const classes = useStyles();

  const steps = [
    {
      number: 1,
      title: "Ideation",
      description: "Think of a real-world tech problem worth solving. Conceptualize, validate, and evaluate product-market fit."
    },
    {
      number: 2,
      title: "Prototyping",
      description: "Design and build your MVP using Gigaversity's labs, tools, and mentor guidance."
    },
    {
      number: 3,
      title: "Mentorship",
      description: "Get 1:1 sessions with startup founders, tech leaders, and VCs to refine your product."
    },
    {
      number: 4,
      title: "Pitch Day",
      description: "Present your startup to our in-house incubation panel for feedback and funding."
    },
    {
      number: 5,
      title: "Get Funded",
      description: "Receive up to ₹1 Lakh to build, scale, and launch your product from our campus."
    },
    {
      number: 6,
      title: "Scale your Tech Product",
      description: "Grow your MVP into a market-ready product with expert guidance, UX improvements, and go-to-market strategies."
    }
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.glowEffect} />
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          Get Access to the <span style={{ color: '#FFC614' }}>₹1 Lakh Startup </span>Fund
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Turn your tech idea into reality — right from campus.
        </Typography>
        
        <Box className={classes.fundingButton}>
          ₹1 LAKH FUNDING
        </Box>
        
        <Box className={classes.stepsContainer}>
          <Box className={classes.progressLine}></Box>
          
          {steps.map((step) => (
            <Box key={step.number} className={classes.step}>
              <Box className={classes.stepNumberContainer}>
                <Typography className={classes.stepNumber}>{step.number}</Typography>
              </Box>
              <Typography className={classes.stepTitle}>{step.title}</Typography>
              <Typography className={classes.stepDescription}>{step.description}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StartupFundProcess;