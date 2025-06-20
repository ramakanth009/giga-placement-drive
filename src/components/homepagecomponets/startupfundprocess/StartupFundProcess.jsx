import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {ReactComponent as Step1} from "../../../assets/startup/step1.svg";
import {ReactComponent as Step2} from "../../../assets/startup/step2.svg";
import {ReactComponent as Step3} from "../../../assets/startup/step3.svg";
import {ReactComponent as Step4} from "../../../assets/startup/step4.svg";
import {ReactComponent as Step5} from "../../../assets/startup/step5.svg";
import {ReactComponent as Step6} from "../../../assets/startup/step6.svg";

const useStyles = makeStyles({
  section: {
    padding: '60px 0 120px 0',
    backgroundColor: '#f8f9fa',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: '700 !important',
    marginBottom: '12px !important',
    color: '#1a1a1a !important',
    lineHeight: '1.2 !important',
  },
  rupeeText: {
    color: '#4f46e5 !important',
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#6b7280 !important',
    marginBottom: '60px !important',
    maxWidth: '600px',
    margin: '0 auto 60px auto !important',
  },
  stepsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'relative',
    marginTop: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
    '@media (max-width: 1200px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '40px',
    },
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '160px',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      width: '100%',
      maxWidth: '300px',
    },
  },
  stepNumber: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#fbbf24',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 3,
    fontSize: '1.2rem !important',
    fontWeight: '700 !important',
    color: '#1a1a1a !important',
    boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)',
  },
  stepContent: {
    textAlign: 'center',
    marginBottom: '30px',
    zIndex: 3,
    position: 'relative',
  },
  stepTitle: {
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
    marginBottom: '8px !important',
    color: '#1a1a1a !important',
    lineHeight: '1.3 !important',
  },
  stepDescription: {
    fontSize: '0.9rem !important',
    color: '#6b7280 !important',
    lineHeight: '1.4 !important',
    maxWidth: '140px',
    margin: '0 auto',
  },
  pillarContainer: {
    position: 'relative',
    width: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    '@media (max-width: 1200px)': {
      display: 'none',
    },
  },
  pillar: {
    width: '80px',
    background: 'linear-gradient(135deg, #e5e7eb 0%, #d1d5db 50%, #9ca3af 100%)',
    borderRadius: '40px 40px 8px 8px',
    position: 'relative',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-8px',
      left: '0',
      right: '0',
      height: '16px',
      background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
      borderRadius: '50%',
      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '0',
      right: '0',
      height: '16px',
      background: 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)',
      borderRadius: '50%',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
  },
  pillar1: {
    height: '60px',
  },
  pillar2: {
    height: '80px',
  },
  pillar3: {
    height: '100px',
  },
  pillar4: {
    height: '120px',
  },
  pillar5: {
    height: '140px',
  },
  pillar6: {
    height: '160px',
  },
  iconContainer: {
    width: '80px',
    height: '80px',
    backgroundColor: '#3b3f75',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '-40px',
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)',
    zIndex: 4,
    boxShadow: '0 8px 25px rgba(59, 63, 117, 0.3)',
    '& svg': {
      width: '40px',
      height: '40px',
      transform: 'rotate(-45deg)',
      color: 'white',
      fill: 'white',
    },
  },
});

const StartupFundProcess = () => {
  const classes = useStyles();

  const steps = [
    {
      number: "01",
      title: "Ideation",
      description: "Think of a real-world tech problem worth solving. Conceptualize, validate, and evaluate product-market fit.",
      Icon: Step1,
      pillarClass: classes.pillar1
    },
    {
      number: "02",
      title: "Prototyping",
      description: "Design and build your MVP using Gigaversity's labs, tools, and mentor guidance.",
      Icon: Step2,
      pillarClass: classes.pillar2
    },
    {
      number: "03",
      title: "Mentorship",
      description: "Get 1:1 sessions with startup founders, tech leaders, and VCs to refine your product.",
      Icon: Step3,
      pillarClass: classes.pillar3
    },
    {
      number: "04",
      title: "Pitch Day",
      description: "Present your startup to our in-house incubation panel for feedback and funding.",
      Icon: Step4,
      pillarClass: classes.pillar4
    },
    {
      number: "05",
      title: "Get Funded",
      description: "Receive up to ₹1 Lakh to build, scale, and launch your product from our campus.",
      Icon: Step5,
      pillarClass: classes.pillar5
    },
    {
      number: "06",
      title: "Scale your Tech Product",
      description: "Grow your MVP into a market-ready product with expert guidance, UX improvements, and go-to-market strategies.",
      Icon: Step6,
      pillarClass: classes.pillar6
    }
  ];

  return (
    <Box className={classes.section}>
      <Container maxWidth="xl" className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          Get Access to the <span className={classes.rupeeText}>₹1 Lakh Startup</span> Fund
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Turn your tech idea into reality — right from campus.
        </Typography>
        
        <Box className={classes.stepsContainer}>
          {steps.map((step, index) => (
            <Box key={step.number} className={classes.step}>
              <Box className={classes.stepNumber}>{step.number}</Box>
              
              <Box className={classes.stepContent}>
                <Typography className={classes.stepTitle}>{step.title}</Typography>
                <Typography className={classes.stepDescription}>{step.description}</Typography>
              </Box>
              
              <Box className={classes.pillarContainer}>
                <Box className={`${classes.pillar} ${step.pillarClass}`}>
                  <Box className={classes.iconContainer}>
                    <step.Icon />
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StartupFundProcess;