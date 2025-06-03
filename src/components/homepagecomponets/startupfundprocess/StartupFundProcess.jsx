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
  },
  subtitle: {
    fontSize: '1rem !important',
    color: 'rgba(255, 255, 255, 0.7) !important',
    marginBottom: '30px !important',
    maxWidth: '600px',
    margin: '0 auto 30px auto !important',
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
  },
  stepsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2%',
    position: 'relative',
    marginTop: '20px',
    '@media (max-width: 1000px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '50px',
    },
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '14%',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1000px)': {
      width: '80%',
      maxWidth: '300px',
    },
  },
  stepNumberContainer: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#4263EB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15px',
    position: 'relative',
    zIndex: 2,
  },
  stepNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  stepTitle: {
    fontSize: '1rem !important',
    minWidth: '400px !important',
    fontWeight: '600 !important',
    marginBottom: '8px !important',
    color: 'white !important',
  },
  stepDescription: {
    fontSize: '0.85rem !important',
    color: 'rgba(255, 255, 255, 0.7) !important',
    lineHeight: '1.4 !important',
  },
  progressLine: {
    position: 'absolute',
    height: '2px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    top: '20px',
    left: '10%',
    right: '10%',
    zIndex: 1,
    '@media (max-width: 1000px)': {
      display: 'none',
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
          Get Access to the Gigaversity ₹1 Lakh Startup Fund
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