// src/components/hiringpartners/HiringPartners.jsx
import React, { useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Import SVG logos as React components
import { ReactComponent as AccentureLogo } from '../../../assets/hiringpartners/Accenture.svg';
import { ReactComponent as AdobeLogo } from '../../../assets/hiringpartners/Adobe.svg';
import { ReactComponent as AdpLogo } from '../../../assets/hiringpartners/adp.svg';
import { ReactComponent as AmazonLogo } from '../../../assets/hiringpartners/Amazon.svg';
import { ReactComponent as BharatPeLogo } from '../../../assets/hiringpartners/BharatPe.svg';
import { ReactComponent as CapgeminiLogo } from '../../../assets/hiringpartners/capgemini.svg';
import { ReactComponent as CredLogo } from '../../../assets/hiringpartners/Cred.svg';
import { ReactComponent as DellLogo } from '../../../assets/hiringpartners/Dell.svg';
import { ReactComponent as DeloitteLogo } from '../../../assets/hiringpartners/deloitte.svg';
import { ReactComponent as FlipkartLogo } from '../../../assets/hiringpartners/Flipkart.svg';
import { ReactComponent as InfosysLogo } from '../../../assets/hiringpartners/Infosys.svg';
import { ReactComponent as MuSigmaLogo } from '../../../assets/hiringpartners/Mu-Sigma.svg';
import { ReactComponent as PharmEasyLogo } from '../../../assets/hiringpartners/pharmeasy.svg';
import { ReactComponent as PhonePeLogo } from '../../../assets/hiringpartners/PhonePe.svg';
import { ReactComponent as TcsLogo } from '../../../assets/hiringpartners/tcs.svg';
import { ReactComponent as TechMahindraLogo } from '../../../assets/hiringpartners/Tech_Mahindra.svg';
import { ReactComponent as WiproLogo } from '../../../assets/hiringpartners/Wipro.svg';
import { ReactComponent as ZohoLogo } from '../../../assets/hiringpartners/zoho.svg';

const useStyles = makeStyles({
  partnersSectionWrapper: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: '30px 0',
    margin: '30px 0',
    '@media (max-width: 768px)': {
      padding: '20px 0',
      margin: '20px 0',
    },
  },
  titleContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 768px)': {
      marginBottom: '20px',
    },
  },
  sectionTitle: {
    color: "#2A2B6A !important",
    fontWeight: 'bold !important',
    textAlign: 'center !important',
    fontSize: "2.5rem !important",
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '60px',
      height: '3px',
      backgroundColor: '#FFC614',
      bottom: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      '&:after': {
        width: '50px',
      },
    },
  },
  partnersSection: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '150px',
    overflow: 'hidden',
    '@media (max-width: 768px)': {
      height: '120px',
    },
    '@media (max-width: 480px)': {
      height: '100px',
    },
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
    left: '0',
    width: 'auto',
    '@media (max-width: 768px)': {
      animation: '$slideAnimation 20s linear infinite',
    },
    '@media (max-width: 480px)': {
      animation: '$slideAnimation 15s linear infinite',
    },
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 30px',
    flexShrink: 0,
    '@media (max-width: 768px)': {
      padding: '0 20px',
    },
    '@media (max-width: 480px)': {
      padding: '0 15px',
    },
  },
  logoSvg: {
    width: '120px',
    height: '60px',
    opacity: 0.9,
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    '@media (max-width: 960px)': {
      width: '100px',
      height: '50px',
    },
    '@media (max-width: 768px)': {
      width: '80px',
      height: '40px',
    },
    '@media (max-width: 480px)': {
      width: '70px',
      height: '35px',
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
    width: '18%',
    height: '100%',
    background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0.4) 80%, rgba(255, 255, 255, 0.1))',
    zIndex: 1,
    pointerEvents: 'none',
    '@media (max-width: 768px)': {
      width: '20%',
    },
  }, 
  whiteFadeRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '18%',
    height: '100%',
    background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0.4) 80%, rgba(255, 255, 255, 0.1))',
    zIndex: 1,
    pointerEvents: 'none',
    '@media (max-width: 768px)': {
      width: '20%',
    },
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
    <Box className={classes.partnersSectionWrapper}>
      {/* Title at the top and centered */}
      <Box className={classes.titleContainer}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Our Hiring Partners
        </Typography>
      </Box>
      
      <Box className={classes.partnersSection}>
        {/* Logo slider */}
        <Box 
          className={classes.logoContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
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
        <Box className={classes.whiteFadeRight} />
      </Box>
    </Box>
  );
};

export default HiringPartners;