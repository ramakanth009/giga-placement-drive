// src/components/common/herosection/HeroSection.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
 bannerContainer: {
    height: "85vh",
    backgroundImage: props => `url(${props.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '0 0 20px 20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
    display: 'flex', // Add display flex
    alignItems: 'center', // Add vertical centering
  },
  contentContainer: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '90%',
    width: '100%', // Add width
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', // Change from 'flex-start' to 'center'
    justifyContent: 'space-between',
    margin: '0 auto',
    '@media (max-width: 960px)': {
      padding: '30px 20px',
      flexDirection: 'column',
      gap: '30px',
    },
  },
  leftContent: {
    // Remove marginTop: '1%'
    width: '58%',
    // Remove paddingTop
    '@media (max-width: 960px)': {
      width: '100%',
      textAlign: 'center',
      marginBottom: '20px', // Add margin bottom instead of padding top
    },
  },
  rightContent: {
    width: '38%',
    '@media (max-width: 960px)': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  bannerTitle: {
    fontSize: '3rem !important',
    fontWeight: '800 !important',
    color: '#2A2B6A !important',
    lineHeight: '1.2 !important',
    marginBottom: '16px !important',
    '@media (max-width: 960px)': {
      fontSize: '2.5rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
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
    '@media (max-width: 960px)': {
      marginBottom: '30px !important',
      maxWidth: '100%',
      margin: '0 auto 30px auto !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  featuresContainer: {
    backgroundColor: "#ffffff",
    display: 'flex',
    alignItems: 'stretch', // changed to stretch
    justifyContent: 'space-between',
    marginBottom: '40px',
    borderRadius: '8px',
    padding: '10px 15px',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      gap: '15px',
      width: '100%',
      margin: '0 auto 30px auto',
    },
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative', // added
    padding: "0 10px",
    '&:not(:last-child)::after': { // changed border to pseudo-element
      content: '""',
      position: 'absolute',
      right: 0,
      top: '5%',
      height: '90%',
      width: '1px',
      backgroundColor: '#A3A3A3',
    },
    '@media (max-width: 960px)': {
      width: '100%',
      padding: '10px 0',
      '&:not(:last-child)::after': {
        right: 'auto',
        top: 'auto',
        bottom: 0,
        height: '1px',
        width: '100%',
        backgroundColor: '#000000',
      },
    },
  },
  featureText: {
    fontSize: '1.1rem !important',
    fontWeight: '700 !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    whiteSpace: 'pre-line !important',
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  joinsection:{
    // marginLeft:"60px !important",
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
    '@media (max-width: 960px)': {
      margin: '0 auto',
      display: 'block',
    },
    '@media (max-width: 600px)': {
      padding: '10px 25px !important',
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
    },
    '@media (max-width: 600px)': {
      fontSize: '0.8rem !important',
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
    '@media (max-width: 960px)': {
      maxWidth: '80%',
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
                <Typography className={classes.featureText}>
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>

<Box className={classes.joinsection} >

          <Button 
            variant="contained" 
            className={classes.joinButton} 
            component={Link} 
            to="/cart"
          >
            Join Us Now
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