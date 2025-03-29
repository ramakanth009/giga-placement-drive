// src/components/howitworks/HowItWorks.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import StudentImage from '../../assets/little-boy-at-the-table.png'; // Using the image from your project

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
    left: '66px',
    top: '50px',
    bottom: '50px',
    width: '0px',
    borderLeft: '2.5px dashed #6A6B6C',
    zIndex: 1,
  },
  step: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
    position: 'relative',
    zIndex: 2,
    "& .MuiTypography-root + .MuiTypography-root": {
      marginLeft: '5px', // Adding gap between number and text
    }
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
    position: 'relative', // This ensures the number is positioned properly
    "&.MuiTypography-root": {
      marginRight: '5px',
    }
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
              <svg className={classes.decorationDots} width="108" height="74" viewBox="0 0 108 74" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="92.3902" cy="4.28421" rx="4.33914" ry="4.28421" fill="#2A2B6A" fill-opacity="0.22"/>
  <ellipse cx="59.979" cy="23.2894" rx="6.23158" ry="6.1527" fill="#2A2B6A" fill-opacity="0.22"/>
  <ellipse cx="4.33914" cy="29.21" rx="4.33914" ry="4.28421" fill="#2A2B6A" fill-opacity="0.22"/>
  <ellipse cx="98.6068" cy="37.7792" rx="9.07274" ry="8.95789" fill="#2A2B6A" fill-opacity="0.22"/>
  <ellipse cx="35.557" cy="44.0107" rx="6.70594" ry="6.62105" fill="#2A2B6A" fill-opacity="0.22"/>
  <ellipse cx="71.3438" cy="60.4715" rx="13.7016" ry="13.5281" fill="#2A2B6A" fill-opacity="0.22"/>
</svg>


            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;