// src/components/howitworks/HowItWorks.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import StudentImage from '../../assets/little-boy-at-the-table.png'; // You'll need to add this image to your assets folder

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    background: 'linear-gradient(180deg, #EAF4FF 0%, #F3F8FF 100%)',
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    width: '45%',
    position: 'relative',
  },
  rightContent: {
    width: '50%',
    paddingLeft: '20px',
  },
  imageContainer: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  studentImage: {
    maxWidth: '100%',
    height: 'auto',
  },
  title: {
    fontSize: '3.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    '& span': {
      color: '#FFC614 !important',
    },
  },
  subtitle: {
    fontSize: '1.25rem !important',
    color: '#666666 !important',
    marginBottom: '40px !important',
    lineHeight: '1.6 !important',
  },
  stepsContainer: {
    position: 'relative',
    paddingLeft: '30px',
  },
  stepLine: {
    position: 'absolute',
    left: '38px',
    top: '50px',
    bottom: '50px',
    width: '2px',
    backgroundColor: '#E0E0E0',
    zIndex: 1,
  },
  step: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
    position: 'relative',
    zIndex: 2,
  },
  stepNumber: {
    width: '76px',
    height: '76px',
    borderRadius: '50%',
    backgroundColor: '#2A2B6A',
    color: 'white !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    marginRight: '20px',
  },
  stepText: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
  },
  decorationDots: {
    position: 'absolute',
    right: '0',
    bottom: '0',
    opacity: '0.5',
  },
});

const HowItWorks = () => {
  const classes = useStyles();

  const steps = [
    { number: 1, text: 'Select Your Domain' },
    { number: 2, text: 'Complete Registration' },
    { number: 3, text: 'Build Your Portfolio' },
    { number: 4, text: 'Connect With Recruiters' },
  ];

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Box className={classes.container}>
          {/* Left Side - Student Image */}
          <Box className={classes.leftContent}>
            <Box className={classes.imageContainer}>
              <img 
                src={StudentImage} 
                alt="Student working at desk" 
                className={classes.studentImage}
              />
            </Box>
          </Box>

          {/* Right Side - How It Works Content */}
          <Box className={classes.rightContent}>
            <Typography variant="h2" className={classes.title}>
              How It <span>Works</span>
            </Typography>
            
            <Typography variant="h6" className={classes.subtitle}>
              Your Skills Matter More Than Marks—Follow These
              Steps To Get Noticed!
            </Typography>

            {/* Steps */}
            <Box className={classes.stepsContainer}>
              <Box className={classes.stepLine}></Box>
              
              {steps.map((step) => (
                <Box key={step.number} className={classes.step}>
                  <Typography variant="h5" className={classes.stepNumber}>
                    {step.number}
                  </Typography>
                  <Typography variant="h5" className={classes.stepText}>
                    {step.text}
                  </Typography>
                </Box>
              ))}
              
              {/* Decorative dots (like in the image) */}
              <svg className={classes.decorationDots} width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="132" cy="135" r="8" fill="#2A2B6A38" />
                <circle cx="132" cy="100" r="5" fill="#2A2B6A38" />
                <circle cx="100" cy="135" r="5" fill="#2A2B6A38" />
                <circle cx="110" cy="115" r="3" fill="#2A2B6A38" />
                <circle cx="90" cy="123" r="2" fill="#2A2B6A38" />
                <circle cx="123" cy="85" r="2" fill="#2A2B6A38" />
                <circle cx="143" cy="118" r="4" fill="#2A2B6A38" />
              </svg>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;