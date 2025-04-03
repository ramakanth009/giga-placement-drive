import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  bannerContainer: {
    background: 'linear-gradient(90deg, #f0f6ff 0%, #e4f0ff 100%)',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '0 0 20px 20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
  },
  contentContainer: {
    position: 'relative',
    zIndex: 2,
    padding: '60px 0',
    '@media (max-width: 960px)': {
      padding: '50px 0',
    },
    '@media (max-width: 600px)': {
      padding: '40px 0',
    },
  },
  leftContent: {
    '@media (max-width: 960px)': {
      textAlign: 'center',
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
    display: 'block',
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
    display: 'flex',
    gap: '15px',
    marginBottom: '40px',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '30px',
    },
  },
  featureBox: {
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '8px',
    padding: '15px 20px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '180px',
    '@media (max-width: 960px)': {
      width: '80%',
      maxWidth: '320px',
    },
  },
  featureText: {
    fontSize: '0.95rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
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
    '@media (max-width: 960px)': {
      marginTop: '30px',
    },
  },
  bannerImage: {
    maxWidth: '100%',
    height: 'auto',
    position: 'relative',
    zIndex: 2,
    borderRadius: '12px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 960px)': {
      maxWidth: '80%',
    },
  },
  shapesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 1,
  },
  purpleTriangle: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '35%',
    height: '100%',
    background: '#6B6ECC',
    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
    opacity: 0.9,
    zIndex: 1,
  },
  greenTriangle: {
    position: 'absolute',
    top: 0,
    right: '30%',
    width: '45%',
    height: '100%',
    background: '#8CD0A4',
    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
    opacity: 0.7,
    zIndex: 0,
  },
  circleElement: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(255, 198, 20, 0.1)',
  },
  circle1: {
    width: '150px',
    height: '150px',
    bottom: '10%',
    left: '5%',
    '@media (max-width: 600px)': {
      width: '100px',
      height: '100px',
    },
  },
  circle2: {
    width: '80px',
    height: '80px',
    top: '15%',
    left: '15%',
    background: 'rgba(42, 43, 106, 0.1)',
    '@media (max-width: 600px)': {
      width: '60px',
      height: '60px',
    },
  },
  imageOverlay: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    bottom: '20px',
    left: '20px',
    borderRadius: '12px',
    border: '3px dashed rgba(42, 43, 106, 0.2)',
    zIndex: 1,
  },
});

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.bannerContainer}>
      {/* Decorative shapes */}
      <Box className={classes.shapesContainer}>
        <Box className={classes.purpleTriangle} />
        <Box className={classes.greenTriangle} />
        <Box className={`${classes.circleElement} ${classes.circle1}`} />
        <Box className={`${classes.circleElement} ${classes.circle2}`} />
      </Box>

      <Container maxWidth="lg">
        <Box className={classes.contentContainer}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box className={classes.leftContent}>
                <Typography variant="h1" className={classes.bannerTitle}>
                  Virtual Placement Drive For
                  <span className={classes.highlightText}>Full Stack Development</span>
                </Typography>
                <Typography variant="h6" className={classes.subTitle}>
                  India's Premier Virtual Hiring & Learning Experience
                </Typography>

                <Box className={classes.featuresContainer}>
                  <Box className={classes.featureBox}>
                    <Typography className={classes.featureText}>
                      Code with AI, 400+ Job Opportunities
                    </Typography>
                  </Box>
                  <Box className={classes.featureBox}>
                    <Typography className={classes.featureText}>
                      30-Day Expert Training
                    </Typography>
                  </Box>
                  <Box className={classes.featureBox}>
                    <Typography className={classes.featureText}>
                      ₹199 Limited Offer
                    </Typography>
                  </Box>
                </Box>

                <Button variant="contained" className={classes.joinButton}>
                  Join Us Now
                </Button>

                <Typography className={classes.eligibilityText}>
                  Eligible for 2023, 2024, and 2025 batches
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box className={classes.imageContainer}>
                <Box className={classes.imageOverlay} />
                <img 
                  src="/api/placeholder/400/500" 
                  alt="Young professional with laptop" 
                  className={classes.bannerImage}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;