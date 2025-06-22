import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    width: '100%',
  },
  header: {
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: '800 !important',
    marginBottom: '12px !important',
    color: '#2A2B6A !important',
    textShadow: '0 4px 12px rgba(42, 43, 106, 0.2)',
    '@media (max-width: 768px)': {
      fontSize: '2rem !important',
    },
  },
  highlightText: {
    color: '#FFC614 !important',
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#64748b !important',
    marginBottom: '20px !important',
    maxWidth: '500px',
    margin: '0 auto 20px auto !important',
  },
  fundingBadge: {
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1e1f4f 100%)',
    color: 'white !important',
    padding: '8px 20px !important',
    borderRadius: '20px !important',
    fontSize: '0.9rem !important',
    fontWeight: '700 !important',
    display: 'inline-block !important',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 6px 20px rgba(42, 43, 106, 0.25)',
  },
  pathwayContainer: {
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '20px',
    position: 'relative',
    '@media (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '25px',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: '20px',
    },
  },
  pathLine: {
    position: 'absolute',
    top: '40px',
    left: '8%',
    right: '8%',
    height: '3px',
    background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 50%, #2A2B6A 100%)',
    borderRadius: '2px',
    zIndex: 1,
    '@media (max-width: 1200px)': {
      display: 'none',
    },
  },
  step: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  stepNumber: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #3b4dbf 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    color: 'white',
    fontSize: '1.8rem !important',
    fontWeight: '900 !important',
    boxShadow: '0 12px 30px rgba(42, 43, 106, 0.3), 0 6px 15px rgba(42, 43, 106, 0.2)',
    border: '3px solid white',
    position: 'relative',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '0 16px 40px rgba(42, 43, 106, 0.4)',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: '-4px',
      borderRadius: '50%',
      background: 'linear-gradient(45deg, #FFC614, transparent, #FFC614)',
      zIndex: -1,
      animation: '$rotate 3s linear infinite',
    },
    '@media (max-width: 768px)': {
      width: '70px',
      height: '70px',
      fontSize: '1.6rem !important',
    },
  },
  stepContent: {
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '16px',
    padding: '20px 16px',
    height: '180px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: '0 8px 25px rgba(42, 43, 106, 0.1)',
    border: '1px solid rgba(42, 43, 106, 0.08)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 35px rgba(42, 43, 106, 0.15)',
    },
    '@media (max-width: 768px)': {
      height: '160px',
      padding: '16px 12px',
    },
  },
  stepTitle: {
    fontSize: '1.1rem !important',
    fontWeight: '700 !important',
    marginBottom: '8px !important',
    color: '#2A2B6A !important',
    '@media (max-width: 768px)': {
      fontSize: '1rem !important',
    },
  },
  stepDescription: {
    fontSize: '0.85rem !important',
    color: '#64748b !important',
    lineHeight: '1.4 !important',
    '@media (max-width: 768px)': {
      fontSize: '0.8rem !important',
    },
  },
  decorativeElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(42, 43, 106, 0.04) 0%, transparent 70%)',
      top: '10%',
      left: '5%',
      animation: '$float 8s ease-in-out infinite',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '250px',
      height: '250px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255, 198, 20, 0.06) 0%, transparent 70%)',
      bottom: '10%',
      right: '5%',
      animation: '$float 10s ease-in-out infinite reverse',
    },
  },
  '@keyframes rotate': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' },
  },
});

const StartupFundProcess = () => {
  const classes = useStyles();

  const steps = [
    {
      number: 1,
      title: "Ideation",
      description: "Think of a real-world tech problem worth solving. Conceptualize and validate product-market fit."
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
      title: "Scale Product",
      description: "Grow your MVP into a market-ready product with expert guidance and go-to-market strategies."
    }
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.decorativeElements} />
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            Get Access to the <span className={classes.highlightText}>₹1 Lakh Startup</span> Fund
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Turn your tech idea into reality — right from campus.
          </Typography>
          <Box className={classes.fundingBadge}>
            ₹1 LAKH FUNDING
          </Box>
        </Box>
        
        <Box className={classes.pathwayContainer}>
          <Box className={classes.pathLine} />
          <Box className={classes.stepsGrid}>
            {steps.map((step) => (
              <Box key={step.number} className={classes.step}>
                <Box className={classes.stepNumber}>
                  {step.number}
                </Box>
                <Box className={classes.stepContent}>
                  <Typography className={classes.stepTitle}>{step.title}</Typography>
                  <Typography className={classes.stepDescription}>{step.description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default StartupFundProcess;