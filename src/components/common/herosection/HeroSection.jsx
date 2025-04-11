// src/components/common/herosection/HeroSection.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
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
  },
  contentContainer: {
    position: 'relative',
    zIndex: 2,
    padding: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 960px)': {
      padding: '50px 0',
      flexDirection: 'column',
      gap: '30px',
    },
  },
  leftContent: {
    width: '58%',
    '@media (max-width: 960px)': {
      width: '100%',
      textAlign: 'center',
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
    alignItems: 'center',
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
    borderRight: "1px solid #A3A3A3",
    '&:last-child': {
      borderRight: 'none',
    },
    '@media (max-width: 960px)': {
      width: '100%',
      padding: '10px 0',
      borderRight: 'none',
      borderBottom: "1px solid #000000",
      '&:last-child': {
        borderBottom: 'none',
      },
    },
  },
  featureText: {
    fontSize: '1.1rem !important',
    fontWeight: '700 !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
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
    '&:hover': {
      backgroundColor: '#1a1b43 !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 25px rgba(42, 43, 106, 0.3) !important',
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
      <Container maxWidth="lg">
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

            <Button 
              variant="contained" 
              className={classes.joinButton} 
              component={Link} 
              to="/payment-under-construction"
            >
              Join Us Now
            </Button>

            <Typography className={classes.eligibilityText}>
              Eligible for 2023, 2024, and 2025 batches
            </Typography>
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
      </Container>
    </Box>
  );
};

export default HeroSection;