// src/components/hiringpartners/HiringPartners.jsx
import React, { useRef, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Import SVG logos as React components
import { ReactComponent as AccentureLogo } from '../../assets/hiringpartners/Accenture.svg';
import { ReactComponent as AdobeLogo } from '../../assets/hiringpartners/Adobe.svg';
import { ReactComponent as AdpLogo } from '../../assets/hiringpartners/adp.svg';
import { ReactComponent as AmazonLogo } from '../../assets/hiringpartners/Amazon.svg';
import { ReactComponent as BharatPeLogo } from '../../assets/hiringpartners/BharatPe.svg';
import { ReactComponent as CapgeminiLogo } from '../../assets/hiringpartners/capgemini.svg';
import { ReactComponent as CredLogo } from '../../assets/hiringpartners/Cred.svg';
import { ReactComponent as DellLogo } from '../../assets/hiringpartners/Dell.svg';
import { ReactComponent as DeloitteLogo } from '../../assets/hiringpartners/deloitte.svg';
import { ReactComponent as FlipkartLogo } from '../../assets/hiringpartners/Flipkart.svg';
import { ReactComponent as InfosysLogo } from '../../assets/hiringpartners/Infosys.svg';
import { ReactComponent as MuSigmaLogo } from '../../assets/hiringpartners/Mu-Sigma.svg';
import { ReactComponent as PharmEasyLogo } from '../../assets/hiringpartners/pharmeasy.svg';
import { ReactComponent as PhonePeLogo } from '../../assets/hiringpartners/PhonePe.svg';
import { ReactComponent as TcsLogo } from '../../assets/hiringpartners/tcs.svg';
import { ReactComponent as TechMahindraLogo } from '../../assets/hiringpartners/Tech_Mahindra.svg';
import { ReactComponent as WiproLogo } from '../../assets/hiringpartners/Wipro.svg';
import { ReactComponent as ZohoLogo } from '../../assets/hiringpartners/zoho.svg';

const useStyles = makeStyles({
  partnersSection: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    margin: '0px 0px 0px 110px',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '180px',
  },
  titleContainer: {
    position: 'relative',
    zIndex: 2,
    width: '30%',
    paddingLeft: '40px',
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
  logoSvg: {
    width: '120px',
    height: '60px',
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
    pointerEvents: 'none', // Ensures click events pass through to elements below
  },
  whiteFadeRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '10%',
    height: '100%',
    background: 'linear-gradient(to left, #ffffff 70%, rgba(255, 255, 255, 0))',
    zIndex: 1,
    pointerEvents: 'none', // Ensures click events pass through to elements below
  },
});

const HiringPartners = () => {
  const classes = useStyles();
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Define the logos array with their React components
  const logos = [
    { Logo: AccentureLogo, alt: 'Accenture' },
    { Logo: AdobeLogo, alt: 'Adobe' },
    { Logo: AdpLogo, alt: 'ADP' },
    { Logo: AmazonLogo, alt: 'Amazon' },
    { Logo: BharatPeLogo, alt: 'BharatPe' },
    { Logo: CapgeminiLogo, alt: 'Capgemini' },
    { Logo: CredLogo, alt: 'Cred' },
    { Logo: DellLogo, alt: 'Dell' },
    { Logo: DeloitteLogo, alt: 'Deloitte' },
    { Logo: FlipkartLogo, alt: 'Flipkart' },
    { Logo: InfosysLogo, alt: 'Infosys' },
    { Logo: MuSigmaLogo, alt: 'Mu Sigma' },
    { Logo: PharmEasyLogo, alt: 'PharmEasy' },
    { Logo: PhonePeLogo, alt: 'PhonePe' },
    { Logo: TcsLogo, alt: 'TCS' },
    { Logo: TechMahindraLogo, alt: 'Tech Mahindra' },
    { Logo: WiproLogo, alt: 'Wipro' },
    { Logo: ZohoLogo, alt: 'Zoho' },
  ];

  // Duplicate logos for seamless infinite scrolling
  const allLogos = [...logos, ...logos];

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
    // <Container maxWidth="lg" sx={{ pt: 0, mt: 0 }}> {/* Remove padding/margin */}
      <Box className={classes.partnersSection}>
        {/* Title on the left */}
        <Box className={classes.titleContainer}>
          <Typography variant="h4" className={classes.sectionTitle}>
            Our Hiring<br />Partners
          </Typography>
        </Box>
        
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
            {allLogos.map(({ Logo, alt }, index) => (
              <Box key={index} className={classes.logoWrapper}>
                <Logo 
                  className={classes.logoSvg} 
                  title={alt}
                  aria-label={alt}
                />
              </Box>
            ))}
          </Box>
        </Box>
        
        {/* White fade overlays */}
        <Box className={classes.whiteFadeLeft} />
        {/* <Box className={classes.whiteFadeRight} /> */}
      </Box>
    // </Container>
  );
};

export default HiringPartners;