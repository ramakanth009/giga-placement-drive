import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  bannerWrapper: {
    width: '100%',
    backgroundColor: '#f8f9fc',
    borderTop: '1px solid #e0e4e8',
    borderBottom: '1px solid #e0e4e8',
    padding: '30px 0',
    '@media (max-width: 600px)': {
      padding: '25px 0',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  headline: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    marginBottom: '8px !important',
    color: '#2A2B6A !important',
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
  },
  highlightText: {
    color: '#FFC614 !important',
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#666 !important',
    marginBottom: '20px !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '16px !important',
    },
  },
  ctaButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '12px 28px !important',
    fontSize: '1.1rem !important',
    fontWeight: 'bold !important',
    borderRadius: '6px !important',
    marginBottom: '15px !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: '#1A1B4A !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 4px 12px rgba(42, 43, 106, 0.3) !important',
    },
    '@media (max-width: 600px)': {
      padding: '10px 24px !important',
      fontSize: '1rem !important',
    },
  },
  supportText: {
    fontSize: '0.95rem !important',
    color: '#777 !important',
    maxWidth: '700px',
    lineHeight: '1.5 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
    },
  },
});

const CareerBanner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.bannerWrapper}>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h1" className={classes.headline}>
          Launch Your <span className={classes.highlightText}>Full Stack Career Today</span>
        </Typography>
        
        <Typography variant="h6" className={classes.subtitle}>
          Limited Seats Available | Price Increases Soon
        </Typography>
        
        <Button 
          variant="contained" 
          className={classes.ctaButton}
          href="#join-program"
        >
          JOIN NOW FOR JUST ₹199
        </Button>
        
        <Typography variant="body1" className={classes.supportText}>
          Transform Your Career In Just 30 Days With The Skills Employers Are Actively Seeking. 
          Your Future In Data Science Starts Here.
        </Typography>
      </Container>
    </Box>
  );
};

export default CareerBanner;