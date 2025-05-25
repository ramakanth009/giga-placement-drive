// src/components/common/herosection/HeroSection.jsx
import React from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const useStyles = makeStyles({
  bannerContainer: {
    minHeight: "85vh",
    backgroundImage: props => `url(${props.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '0 0 20px 20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 1200px)': {
      minHeight: "75vh",
    },
    '@media (max-width: 960px)': {
      minHeight: "70vh",
      padding: '0',
    },
    '@media (max-width: 600px)': {
      minHeight: "auto",
      padding: '50px 0',
      borderRadius: '0 0 15px 15px',
    },
    '@media (max-width: 480px)': {
      padding: '40px 0 30px',
    },
  },
  contentContainer: {
    position: 'relative',
    zIndex: 2,
    width: '90%',
    maxWidth: '1400px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 auto',
    '@media (max-width: 1200px)': {
      width: '95%',
    },
    '@media (max-width: 960px)': {
      flexDirection: 'row', // Keep row direction for tablet
      gap: '20px',
      width: '90%',
    },
    '@media (max-width: 600px)': {
      width: '90%',
      flexDirection: 'column', // Change to column for mobile
      gap: '20px',
    },
  },
  leftContent: {
    width: '58%',
    '@media (max-width: 1200px)': {
      width: '55%',
    },
    '@media (max-width: 960px)': {
      width: '50%', // Maintain two-column layout
      textAlign: 'left',
      paddingLeft: '20px',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      textAlign: 'center',
      paddingLeft: '0',
    },
  },
  rightContent: {
    width: '38%',
    '@media (max-width: 1200px)': {
      width: '42%',
    },
    '@media (max-width: 960px)': {
      width: '45%', // Keep two-column layout but with adjusted proportions
      display: 'flex',
      justifyContent: 'center',
    },
    '@media (max-width: 600px)': {
      display: 'none', // Hide image on mobile devices
    },
  },
  bannerTitle: {
    fontSize: '3rem !important',
    fontWeight: '800 !important',
    color: '#2A2B6A !important',
    lineHeight: '1.2 !important',
    marginBottom: '16px !important',
    '@media (max-width: 1200px)': {
      fontSize: '2.7rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.6rem !important',
    },
  },
  highlightText: {
    color: '#FFC614 !important',
    display: props => props.displayAsBlock ? 'block' : 'inline',
  },
  subTitle: {
    fontSize: '1.2rem !important',
    color: '#555555 !important',
    marginBottom: '40px !important',
    maxWidth: '90%',
    '@media (max-width: 1200px)': {
      fontSize: '1.1rem !important',
      marginBottom: '35px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      marginBottom: '25px !important',
      maxWidth: '95%',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '25px !important',
      maxWidth: '100%',
      margin: '0 auto 25px auto !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
    },
  },
  featuresContainer: {
    backgroundColor: "#ffffff",
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginBottom: '40px',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    '@media (max-width: 1200px)': {
      marginBottom: '35px',
      padding: '12px',
    },
    '@media (max-width: 960px)': {
      width: '100%',
      margin: '0 auto 25px auto',
      padding: '8px',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: '0',
      marginBottom: '25px',
      padding: '0',
      boxShadow: 'none',
      background: 'transparent',
    },
    '@media (max-width: 480px)': {
      marginBottom: '20px',
    },
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative',
    padding: "0 10px",
    '&:not(:last-child)::after': {
      content: '""',
      position: 'absolute',
      right: 0,
      top: '10%',
      height: '80%',
      width: '1px',
      backgroundColor: '#e0e0e0',
    },
    '@media (max-width: 1200px)': {
      padding: "0 12px",
    },
    '@media (max-width: 960px)': {
      padding: "0 10px",
      textAlign: 'center',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      padding: '12px 15px',
      margin: '8px 0',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(42, 43, 106, 0.1)',
      display: 'grid',
      gridTemplateColumns: '40px 1fr',
      alignItems: 'center',
      gap: '10px',
      '&:not(:last-child)::after': {
        display: 'none',
      },
    },
  },
  featureText: {
    fontSize: '1.1rem !important',
    fontWeight: '700 !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    whiteSpace: 'pre-line !important',
    '@media (max-width: 1200px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.95rem !important',
      lineHeight: '1.4 !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.05rem !important',
      textAlign: 'left !important',
      padding: '0',
    },
    '@media (max-width: 480px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.95rem !important',
    },
  },
  joinsection: {
    '@media (max-width: 960px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  joinButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '12px 30px !important',
    borderRadius: '8px !important',
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
    textTransform: 'none !important',
    boxShadow: '0 4px 15px rgba(42, 43, 106, 0.2) !important',
    transition: 'all 0.3s ease !important',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: '#1a1b43 !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 25px rgba(42, 43, 106, 0.3) !important',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '30px',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.3)',
      transform: 'skewX(-30deg) translateX(-150px)',
      animation: '$shine 3s infinite',
    },
    '@media (max-width: 1200px)': {
      padding: '10px 25px !important',
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 960px)': {
      padding: '10px 22px !important',
      fontSize: '1rem !important',
    },
    '@media (max-width: 600px)': {
      padding: '12px 25px !important',
      fontSize: '1.1rem !important',
      width: '100%',
      maxWidth: '280px',
      background: 'linear-gradient(45deg, #2A2B6A 30%, #3c3d8a 90%) !important',
      boxShadow: '0 8px 20px rgba(42, 43, 106, 0.3) !important',
    },
    '@media (max-width: 375px)': {
      padding: '10px 20px !important',
      fontSize: '1rem !important',
    },
  },
  eligibilityText: {
    fontSize: '0.9rem !important',
    color: '#666666 !important',
    marginTop: '20px !important',
    fontStyle: 'italic !important',
    '@media (max-width: 960px)': {
      textAlign: 'center',
      marginTop: '15px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
      marginTop: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.8rem !important',
      marginTop: '10px !important',
    },
  },
  imageContainer: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: {
    maxWidth: '100%',
    height: 'auto',
    position: 'relative',
    zIndex: 2,
    borderRadius: '12px',
    // boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 1200px)': {
      maxWidth: '100%',
    },
    '@media (max-width: 960px)': {
      maxWidth: '100%',
      transform: 'scale(0.9)',
    },
  },
  '@keyframes shine': {
    '0%': {
      transform: 'skewX(-30deg) translateX(-150px)',
    },
    '100%': {
      transform: 'skewX(-30deg) translateX(350px)',
    },
  },
});

const HeroSection = ({
  domain,
  highlightText,
  subtitle,
  features,
  heroImage,
  backgroundImage,
  displayAsBlock = false
}) => {
  const styleProps = { backgroundImage, displayAsBlock };
  const classes = useStyles(styleProps);
  const isMobile = useMediaQuery('(max-width:600px)');
  
  return (
    <Box className={classes.bannerContainer}>
      <Box className={classes.contentContainer}>
        <Box className={classes.leftContent}>
          <Typography variant="h1" className={classes.bannerTitle}>
            Virtual Placement Drive For
            <span className={classes.highlightText}>{highlightText}</span>
          </Typography>
          <Typography variant="h6" className={classes.subTitle}>
            {subtitle}
          </Typography>

          <Box className={classes.featuresContainer}>
            {features.map((feature, index) => (
              <Box key={index} className={classes.featureItem}>
                {isMobile && (
                  <Box>
                    {index === 0 && <CodeIcon sx={{ color: '#FFC614' }} />}
                    {index === 1 && <CalendarMonthIcon sx={{ color: '#FFC614' }} />}
                    {index === 2 && <CurrencyRupeeIcon sx={{ color: '#FFC614' }} />}
                  </Box>
                )}
                <Typography className={classes.featureText}>
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box className={classes.joinsection}>
            <Button 
              variant="contained" 
              className={classes.joinButton} 
              component={Link} 
              to="/cart"
            >
              Launching Soon
            </Button>

            <Typography className={classes.eligibilityText}>
              Eligible for 2023, 2024, and 2025 batches
            </Typography>
          </Box>
        </Box>

        <Box className={classes.rightContent}>
          <Box className={classes.imageContainer}>
            <img 
              src={heroImage} 
              alt={`Young professional studying ${domain}`} 
              className={classes.bannerImage}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;