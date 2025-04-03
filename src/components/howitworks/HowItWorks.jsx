// src/components/howitworks/HowItWorks.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import StudentImage from '../../assets/little-boy-at-the-table.png';

const useStyles = makeStyles({
  section: {
    padding: '50px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #EAF4FF 0%, #F3F8FF 100%)',
    "@media (max-width: 960px)": {
      padding: '40px 0',
    },
    "@media (max-width: 600px)": {
      padding: '30px 0',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 2,
    "@media (max-width: 960px)": {
      flexDirection: 'column',
      gap: '30px',
    },
  },
  leftContent: {
    width: '35%',
    position: 'relative',
    "@media (max-width: 1200px)": {
      width: '35%',
    },
    "@media (max-width: 960px)": {
      width: '60%',
      order: 2, // Move image below content on mobile
    },
    "@media (max-width: 600px)": {
      width: '85%',
    },
  },
  rightContent: {
    width: '50%',
    position: 'relative',
    zIndex: 2,
    "@media (max-width: 1200px)": {
      width: '52%',
    },
    "@media (max-width: 960px)": {
      width: '90%',
      order: 1, // Move content above image on mobile
    },
  },
  imageContainer: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  studentImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '20px',
    // boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.5s ease',
    '&:hover': {
      transform: 'translateY(-10px)',
    },
    "@media (max-width: 960px)": {
      maxWidth: '90%',
    },
  },
  imageDecoration: {
    position: 'absolute',
    width: '140%',
    height: '140%',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
    background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.1) 0%, rgba(255, 198, 20, 0.1) 100%)',
    top: '-20%',
    left: '-20%',
    zIndex: -1,
    animation: '$morphing 15s ease-in-out infinite',
  },
  '@keyframes morphing': {
    '0%': {
      borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
    },
    '25%': {
      borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
    },
    '50%': {
      borderRadius: '30% 70% 50% 50% / 50% 60% 40% 50%',
    },
    '75%': {
      borderRadius: '60% 40% 40% 60% / 40% 50% 50% 60%',
    },
    '100%': {
      borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
    },
  },
  sectionHeading: {
    position: 'relative',
    marginBottom: '30px',
    "@media (max-width: 960px)": {
      textAlign: 'center',
      marginBottom: '25px',
    },
  },
  title: {
    fontSize: '3rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    position: 'relative',
    "@media (max-width: 1200px)": {
      fontSize: '2.7rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.5rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '2rem !important',
      marginBottom: '10px !important',
    },
  },
  subtitle: {
    fontSize: '1.25rem !important',
    color: '#555555 !important',
    marginBottom: '25px !important',
    lineHeight: '1.6 !important',
    maxWidth: '90%',
    "@media (max-width: 1200px)": {
      fontSize: '1.15rem !important',
    },
    "@media (max-width: 960px)": {
      textAlign: 'center',
      marginBottom: '20px !important',
      maxWidth: '100%',
      margin: '0 auto !important',
    },
  },
  stepsContainer: {
    position: 'relative',
    padding: '5px 0 5px 30px',
    "@media (max-width: 960px)": {
      paddingLeft: '20px',
      maxWidth: '500px',
      margin: '0 auto',
    },
    "@media (max-width: 600px)": {
      paddingLeft: '15px',
    },
  },
  stepLine: {
    position: 'absolute',
    left: '58px',
    top: '46px',
    bottom: '70px',
    width: '3px',
    borderRadius: '3px',
    background: 'linear-gradient(to bottom, rgba(42, 43, 106, 0.3), rgba(255, 198, 20, 0.3))',
    zIndex: 1,
    "@media (max-width: 600px)": {
      left: '30px',
      width: '2px',
    },
  },
  step: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 2,
    transform: 'translateX(-20px)',
    opacity: 0,
    transition: 'all 0.5s ease',
    "@media (max-width: 600px)": {
      marginBottom: '15px',
    },
  },
  stepVisible: {
    transform: 'translateX(0)',
    opacity: 1,
  },
  stepNumber: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem !important',
    fontWeight: 'bold !important',
    position: 'relative',
    marginRight: '15px',
    flexShrink: 0,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1A1B4A 100%)',
    color: 'white !important',
    zIndex: 2,
    "&.MuiTypography-root": {
      transition: 'all 0.3s ease',
    },
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-5px',
      left: '-5px',
      right: '-5px',
      bottom: '-5px',
      background: 'linear-gradient(135deg, rgba(255, 198, 20, 0.7) 0%, rgba(42, 43, 106, 0.7) 100%)',
      borderRadius: '50%',
      zIndex: -1,
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '&:hover::before': {
      opacity: 1,
    },
    "@media (max-width: 600px)": {
      width: '45px',
      height: '45px',
      fontSize: '1.2rem !important',
      marginRight: '10px',
    },
  },
  stepContent: {
    flex: 1,
    paddingTop: '5px',
    paddingLeft: '20px',
  },
  stepText: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '8px !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.3rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.2rem !important',
      marginBottom: '5px !important',
    },
  },
  stepDescription: {
    fontSize: '1rem !important',
    color: '#555555 !important',
    lineHeight: '1.6 !important',
    maxWidth: '90%',
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
      lineHeight: '1.5 !important',
      maxWidth: '100%',
    },
  },
  backgroundElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 1,
  },
  particleElement: {
    position: 'absolute',
    borderRadius: '50%',
    background: '#2A2B6A',
    opacity: 0.1,
  },
  yellowParticle: {
    background: '#FFC614',
  },
  dotsBox: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    opacity: 0.05,
    backgroundImage: 'radial-gradient(circle, #2A2B6A 2px, transparent 3px)',
    backgroundSize: '20px 20px',
    backgroundRepeat: 'repeat',
    zIndex: 1,
  },
});

const HowItWorks = () => {
  const classes = useStyles();
  const [visibleSteps, setVisibleSteps] = useState([]);
  const isMobile = useMediaQuery('(max-width:960px)');

  // Steps data with descriptions
  const steps = [
    { 
      number: 1, 
      text: 'Select Your Domain',
      description: 'Choose your career path with expert guidance in Full Stack Development or Data Science.'
    },
    { 
      number: 2, 
      text: 'Complete Registration',
      description: 'Quick and easy onboarding to gain immediate access to our learning platform.' 
    },
    { 
      number: 3, 
      text: 'Build Your Portfolio',
      description: 'Work on real-world projects that demonstrate your skills to potential employers.'
    },
    { 
      number: 4, 
      text: 'Connect With Recruiters',
      description: 'Get introduced directly to hiring partners through our placement network.'
    },
  ];

  // Generate random background elements
  const generateBackgroundElements = () => {
    const particles = [];
    const dotsBoxes = [];
    
    // Generate particles
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 15 + 5;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const isYellow = Math.random() > 0.7;
      
      particles.push({
        top: `${top}%`,
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: Math.random() * 0.08 + 0.02,
        isYellow,
      });
    }
    
    // Generate dot pattern boxes
    for (let i = 0; i < 3; i++) {
      const top = Math.random() * 80 + 10;
      const left = Math.random() * 80 + 10;
      const rotation = Math.random() * 45;
      
      dotsBoxes.push({
        top: `${top}%`,
        left: `${left}%`,
        transform: `rotate(${rotation}deg)`,
      });
    }
    
    return { particles, dotsBoxes };
  };

  // Animate steps on scroll
  useEffect(() => {
    const handleScroll = () => {
      const stepsElement = document.getElementById('steps-container');
      if (!stepsElement) return;

      const rect = stepsElement.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 200;
      
      if (isVisible && visibleSteps.length === 0) {
        // Sequentially show steps with delay
        const timers = steps.map((_, index) => {
          return setTimeout(() => {
            setVisibleSteps(prev => [...prev, index]);
          }, 300 * index);
        });
        
        return () => timers.forEach(timer => clearTimeout(timer));
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSteps.length, steps.length]);

  const { particles, dotsBoxes } = generateBackgroundElements();

  return (
    <Box className={classes.section}>
      {/* Background elements */}
      <Box className={classes.backgroundElements}>
        {particles.map((particle, index) => (
          <Box
            key={`particle-${index}`}
            className={`${classes.particleElement} ${particle.isYellow ? classes.yellowParticle : ''}`}
            sx={{
              top: particle.top,
              left: particle.left,
              width: particle.width,
              height: particle.height,
              opacity: particle.opacity,
            }}
          />
        ))}
        
        {dotsBoxes.map((box, index) => (
          <Box
            key={`dots-${index}`}
            className={classes.dotsBox}
            sx={{
              top: box.top,
              left: box.left,
              transform: box.transform,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg">
        <Box className={classes.container}>
          {/* Left Side - Student Image with animated background */}
          <Box className={classes.leftContent}>
            <Box className={classes.imageContainer}>
              <Box className={classes.imageDecoration} />
              <img 
                src={StudentImage} 
                alt="Student working at desk" 
                className={classes.studentImage}
              />
            </Box>
          </Box>

          {/* Right Side - How It Works Content */}
          <Box className={classes.rightContent}>
            <Box className={classes.sectionHeading}>
              <Typography variant="h2" className={classes.title}>
                How It Works
              </Typography>
              
              <Typography variant="h6" className={classes.subtitle}>
                Your Skills Matter More Than Marks—Follow These
                Steps To Get Noticed!
              </Typography>
            </Box>

            {/* Steps */}
            <Box id="steps-container" className={classes.stepsContainer}>
              <Box className={classes.stepLine}></Box>
              
              {steps.map((step, index) => (
                <Box 
                  key={step.number} 
                  className={`${classes.step} ${visibleSteps.includes(index) ? classes.stepVisible : ''}`}
                  sx={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <Typography variant="h5" className={classes.stepNumber}>
                    {step.number}
                  </Typography>
                  <Box className={classes.stepContent}>
                    <Typography variant="h5" className={classes.stepText}>
                      {step.text}
                    </Typography>
                    <Typography variant="body1" className={classes.stepDescription}>
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;