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
    padding: '30px 0 0px 0',
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
    color: '#2A2B6A !important',
    lineHeight: '1.2 !important',
  },
  rupeeText: {
    color: '#FFC614 !important',
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#6b7280 !important',
    marginBottom: '40px !important',
    maxWidth: '600px',
    margin: '0 auto 40px auto !important',
  },
  stepsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'relative',
    marginTop: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    '@media (max-width: 1200px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '25px',
    },
  },
  step: {
    display: 'flex',
    flexDirection: 'column', // text on top, icon at bottom
    alignItems: 'center',
    width: '120px',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      width: '100%',
      maxWidth: '250px',
    },
  },
  stepNumber: {
    width: '45px',
    height: '30px',
    borderRadius: '15px',
    backgroundColor: '#FFC614',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom: '10px',
    position: 'relative',
    zIndex: 3,
    fontSize: '0.9rem !important',
    fontWeight: '700 !important',
    color: '#1a1a1a !important',
    boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)',
    textAlign:"center"
  },
  stepContent: {
    textAlign: 'center',
    marginBottom: '12px',
    zIndex: 3,
    position: 'relative',
  },
  stepTitle: {
    fontSize: '0.85rem !important',
    fontWeight: '600 !important',
    marginBottom: '5px !important',
    color: '#1a1a1a !important',
    lineHeight: '1.2 !important',
  },
  stepDescription: {
    fontSize: '0.7rem !important',
    color: '#6b7280 !important',
    lineHeight: '1.2 !important',
    maxWidth: '110px',
    margin: '0 auto',
  },
  svgStep1: {
    '& svg': {
      width: '70px !important',
      height: '70px !important',
    }
  },
  svgStep2: {
    '& svg': {
      width: '75px !important',
      height: '65px !important',
    }
  },
  svgStep3: {
    '& svg': {
      width: '80px !important',
      height: '60px !important',
    }
  },
  svgStep4: {
    '& svg': {
      width: '65px !important',
      height: '75px !important',
    }
  },
  svgStep5: {
    '& svg': {
      width: '70px !important',
      height: '70px !important',
    }
  },
  svgStep6: {
    '& svg': {
      width: '75px !important',
      height: '65px !important',
    }
  },
});

const StartupFundProcess = () => {
  const classes = useStyles();

  const steps = [
    {
      number: "01",
      title: "Ideation",
      description: "Spot a tech problem, ideate, validate, and test market fit.",
      Icon: Step1,
    },
    {
      number: "02",
      title: "Prototyping",
      description: "Design and build your MVP using Gigaversity's labs, tools, and mentor guidance.",
      Icon: Step2,
    },
    {
      number: "03",
      title: "Mentorship",
      description: "Get 1:1 sessions with startup founders, tech leaders, and VCs to refine your product.",
      Icon: Step3,
    },
    {
      number: "04",
      title: "Pitch Day",
      description: "Present your startup to our in-house incubation panel for feedback and funding.",
      Icon: Step4,
    },
    {
      number: "05",
      title: "Get Funded",
      description: "Receive up to ₹1 Lakh to build, scale, and launch your product from our campus.",
      Icon: Step5,
    },
    {
      number: "06",
      title: "Scale your Tech Product",
      description: "Grow your MVP into a market-ready product with expert guidance, UX improvements, and go-to-market strategies.",
      Icon: Step6,
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
              {/* Text content at the top */}
              <Box className={classes.stepContent}>
                <Box className={classes.stepNumber}>{step.number}</Box>
                <Typography className={classes.stepTitle}>{step.title}</Typography>
                <Typography className={classes.stepDescription}>{step.description}</Typography>
              </Box>
              {/* SVG icon at the bottom */}
              <Box>
                <step.Icon />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StartupFundProcess;