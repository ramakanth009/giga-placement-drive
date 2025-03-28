// src/components/hiringpartners/HiringPartners.jsx
import React, { useRef, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Import company logos 
// Note: You'll need to add these logo files to your assets folder
import accentureLogo from '../../assets/logos/accenture.png';
import adobeLogo from '../../assets/logos/adobe.png';
import amazonLogo from '../../assets/logos/amazon.png';
import deloitteLogo from '../../assets/logos/deloitte.png';
import byjusLogo from '../../assets/logos/byjus.png';

const useStyles = makeStyles((theme) => ({
  partnersSection: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    margin: '40px auto',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  titleContainer: {
    position: 'relative',
    zIndex: 2,
    width: '30%',
    paddingLeft: '40px',
    backgroundColor: "#ffffff", // Remove !important
  },
  
  sectionTitle: {
    color: '#0a192f !important',
    fontWeight: 'bold !important',
    textAlign: 'left !important',
    position: 'relative',
    fontSize: '2rem !important',
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    zIndex: 1,
  },
  logoSlider: {
    display: 'flex',
    transition: 'transform 20s linear infinite',
    animation: '$slideAnimation 25s linear infinite',
    position: 'absolute',
    left: '28%', // Start after the text area
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 30px',
    flexShrink: 0,
  },
  logo: {
    height: '60px',
    objectFit: 'contain',
    opacity: 0.9,
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  '@keyframes slideAnimation': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(-50%)',
    },
  },
  whiteFadeLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '28%', // Match the logoSlider left position
    height: '100%',
    background: 'linear-gradient(to right, #ffffff 70%, rgba(255, 255, 255, 0))',
    zIndex: 1,
  },
  whiteFadeRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '10%',
    height: '100%',
    background: 'linear-gradient(to left, #ffffff 70%, rgba(255, 255, 255, 0))',
    zIndex: 1,
  },
}));

const HiringPartners = () => {
  const classes = useStyles();
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Define the logos array
  const logos = [
    { src: accentureLogo, alt: 'Accenture' },
    { src: adobeLogo, alt: 'Adobe' },
    { src: amazonLogo, alt: 'Amazon' },
    { src: deloitteLogo, alt: 'Deloitte' },
    { src: byjusLogo, alt: 'Byjus' },
    // Add more logos as needed
  ];

  // Duplicate logos for seamless infinite scrolling
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  // Pause animation on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <Container maxWidth="lg">
      <Box className={classes.partnersSection}>
        {/* Title on the left */}
        <Box className={classes.titleContainer}>
          <Typography variant="h4" className={classes.sectionTitle}>
            Our Hiring<br />Partners
          </Typography>
        </Box>
        
        {/* White fade on the left to cover logos behind text */}
        <Box className={classes.whiteFadeLeft} />
        
        {/* Logo slider */}
        <Box 
          className={classes.logoContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Box 
            className={classes.logoSlider} 
            ref={sliderRef}
            sx={{ 
              animationPlayState: isHovered ? 'paused' : 'running',
            }}
          >
            {allLogos.map((logo, index) => (
              <Box key={index} className={classes.logoWrapper}>
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className={classes.logo} 
                />
              </Box>
            ))}
          </Box>
        </Box>
        
        {/* White fade on the right */}
        <Box className={classes.whiteFadeRight} />
      </Box>
    </Container>
  );
};

export default HiringPartners;