// src/components/common/hiringpartners/EnhancedHiringPartners.jsx
import React, { useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Import existing SVG logos
import { ReactComponent as AccentureLogo } from '../../../assets/hiringpartners/Accenture.svg';
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

// Import new SVG logos
import { ReactComponent as AdidasLogo } from '../../../assets/hiringpartners/Adidas-logo.svg';
import { ReactComponent as CaterpillarLogo } from '../../../assets/hiringpartners/caterpillar-preview.svg';
import { ReactComponent as InfrrtLogo } from '../../../assets/hiringpartners/Infrrt.svg';
import { ReactComponent as MedplusLogo } from '../../../assets/hiringpartners/Medplus_logo.svg';
import { ReactComponent as GoldmanSachsLogo } from '../../../assets/hiringpartners/goldman-sachs.svg';
import { ReactComponent as PaytmLogo } from '../../../assets/hiringpartners/paytm.svg';
import { ReactComponent as HappyFoxLogo } from '../../../assets/hiringpartners/happyfox.svg';
import { ReactComponent as SynopsysLogo } from '../../../assets/hiringpartners/Synopsys_Logo.svg';

const useStyles = makeStyles({
  partnersSectionWrapper: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: '50px 0',
    margin: '5px 0',
    '@media (max-width: 768px)': {
      padding: '40px 0',
      margin: '20px 0',
    },
  },
  titleContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 768px)': {
      marginBottom: '30px',
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
      bottom: '-12px',
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
        bottom: '-10px',
      },
    },
  },
  subtitle: {
    color: "#555555 !important",
    textAlign: 'center !important',
    fontSize: "1.1rem !important",
    maxWidth: '800px',
    margin: '30px auto 0 !important',
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '90%',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      margin: '25px auto 0 !important',
    },
  },
  highlightText: {
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
  },
  partnersSection: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '180px', // Increased height for two rows
    overflow: 'hidden',
    '@media (max-width: 768px)': {
      height: '160px',
    },
    '@media (max-width: 480px)': {
      height: '140px',
    },
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column', // Stack rows vertically
    justifyContent: 'space-around', // Distribute space evenly
    overflow: 'hidden',
    zIndex: 1,
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    height: '80px', // Fixed height for each row
    position: 'relative',
    '@media (max-width: 768px)': {
      height: '70px',
    },
    '@media (max-width: 480px)': {
      height: '60px',
    },
  },
  logoSlider: {
    display: 'flex',
    position: 'absolute',
    left: '0',
    width: 'auto',
    height: '100%',
    alignItems: 'center',
  },
  sliderForward: {
    animation: '$slideForward 35s linear infinite',
    '@media (max-width: 768px)': {
      animation: '$slideForward 25s linear infinite',
    },
    '@media (max-width: 480px)': {
      animation: '$slideForward 20s linear infinite',
    },
  },
  sliderBackward: {
    animation: '$slideBackward 35s linear infinite',
    '@media (max-width: 768px)': {
      animation: '$slideBackward 25s linear infinite',
    },
    '@media (max-width: 480px)': {
      animation: '$slideBackward 20s linear infinite',
    },
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 25px',
    flexShrink: 0,
    height: '100%',
    '@media (max-width: 768px)': {
      padding: '0 20px',
    },
    '@media (max-width: 480px)': {
      padding: '0 15px',
    },
  },
  logoSvg: {
    width: '110px',
    height: '55px',
    opacity: 0.85,
    transition: 'all 0.3s ease',
    objectFit: 'contain',
    '&:hover': {
      transform: 'scale(1.05)',
      opacity: 1,
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
  '@keyframes slideForward': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(-50%)',
    },
  },
  '@keyframes slideBackward': {
    '0%': {
      transform: 'translateX(-50%)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  },
  whiteFadeLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '15%',
    height: '100%',
    background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0.4) 80%, rgba(255, 255, 255, 0.1))',
    zIndex: 2,
    pointerEvents: 'none',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  }, 
  whiteFadeRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '15%',
    height: '100%',
    background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0.4) 80%, rgba(255, 255, 255, 0.1))',
    zIndex: 2,
    pointerEvents: 'none',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
});

const HiringPartners = () => {
  const classes = useStyles();
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);
  const [isTopRowHovered, setIsTopRowHovered] = useState(false);
  const [isBottomRowHovered, setIsBottomRowHovered] = useState(false);

  // First row logos
  const firstRowLogos = [
    { Logo: AmazonLogo, alt: 'Amazon' },
    { Logo: AccentureLogo, alt: 'Accenture' }, 
    { Logo: CapgeminiLogo, alt: 'Capgemini' },
    { Logo: DellLogo, alt: 'Dell' },
    { Logo: DeloitteLogo, alt: 'Deloitte' },
    { Logo: FlipkartLogo, alt: 'Flipkart' },
    { Logo: GoldmanSachsLogo, alt: 'Goldman Sachs' },
    { Logo: AdidasLogo, alt: 'Adidas' },
    { Logo: PaytmLogo, alt: 'Paytm' },
    { Logo: ZohoLogo, alt: 'Zoho' },
    { Logo: TcsLogo, alt: 'TCS' },
    { Logo: SynopsysLogo, alt: 'Synopsys' },
  ];

  // Second row logos
  const secondRowLogos = [
    { Logo: InfosysLogo, alt: 'Infosys' },
    { Logo: WiproLogo, alt: 'Wipro' },
    { Logo: MuSigmaLogo, alt: 'Mu Sigma' },
    { Logo: TechMahindraLogo, alt: 'Tech Mahindra' },
    { Logo: PharmEasyLogo, alt: 'PharmEasy' },
    { Logo: PhonePeLogo, alt: 'PhonePe' },
    { Logo: BharatPeLogo, alt: 'BharatPe' },
    { Logo: CredLogo, alt: 'Cred' },
    { Logo: InfrrtLogo, alt: 'Infrrt' },
    { Logo: MedplusLogo, alt: 'Medplus' },
    { Logo: CaterpillarLogo, alt: 'Caterpillar' },
    { Logo: HappyFoxLogo, alt: 'HappyFox' },
  ];

  // Duplicate logos for seamless infinite scrolling
  const allFirstRowLogos = [...firstRowLogos, ...firstRowLogos];
  const allSecondRowLogos = [...secondRowLogos, ...secondRowLogos];

  // Pause animation on hover for first row
  const handleFirstRowMouseEnter = () => {
    setIsTopRowHovered(true);
    if (topRowRef.current) {
      topRowRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleFirstRowMouseLeave = () => {
    setIsTopRowHovered(false);
    if (topRowRef.current) {
      topRowRef.current.style.animationPlayState = 'running';
    }
  };

  // Pause animation on hover for second row
  const handleSecondRowMouseEnter = () => {
    setIsBottomRowHovered(true);
    if (bottomRowRef.current) {
      bottomRowRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleSecondRowMouseLeave = () => {
    setIsBottomRowHovered(false);
    if (bottomRowRef.current) {
      bottomRowRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <Box className={classes.partnersSectionWrapper}>
      {/* Title section */}
      <Box className={classes.titleContainer}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2" className={classes.sectionTitle}>
            Backed by our Hiring Partners
          </Typography>
          
        </Box>
      </Box>
      
      <Box className={classes.partnersSection}>
        {/* Logo container with two rows */}
        <Box className={classes.logoContainer}>
          {/* First row - moves forward */}
          <Box className={classes.logoRow}>
            <Box 
              className={`${classes.logoSlider} ${classes.sliderForward}`} 
              ref={topRowRef}
              sx={{ 
                animationPlayState: isTopRowHovered ? 'paused' : 'running',
              }}
              onMouseEnter={handleFirstRowMouseEnter}
              onMouseLeave={handleFirstRowMouseLeave}
              onTouchStart={handleFirstRowMouseEnter}
              onTouchEnd={handleFirstRowMouseLeave}
            >
              {allFirstRowLogos.map(({ Logo, alt }, index) => (
                <Box key={`row1-${index}`} className={classes.logoWrapper}>
                  <Logo 
                    className={classes.logoSvg} 
                    title={alt}
                    aria-label={alt}
                  />
                </Box>
              ))}
            </Box>
          </Box>
          
          {/* Second row - moves backward */}
          <Box className={classes.logoRow}>
            <Box 
              className={`${classes.logoSlider} ${classes.sliderBackward}`} 
              ref={bottomRowRef}
              sx={{ 
                animationPlayState: isBottomRowHovered ? 'paused' : 'running',
              }}
              onMouseEnter={handleSecondRowMouseEnter}
              onMouseLeave={handleSecondRowMouseLeave}
              onTouchStart={handleSecondRowMouseEnter}
              onTouchEnd={handleSecondRowMouseLeave}
            >
              {allSecondRowLogos.map(({ Logo, alt }, index) => (
                <Box key={`row2-${index}`} className={classes.logoWrapper}>
                  <Logo 
                    className={classes.logoSvg} 
                    title={alt}
                    aria-label={alt}
                  />
                </Box>
              ))}
            </Box>
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