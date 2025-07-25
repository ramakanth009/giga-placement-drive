import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  bannerWrapper: {
    width: '100%',
    backgroundColor: '#f8f9fc',
    borderTop: '1px solid #e0e4e8',
    borderBottom: '1px solid #e0e4e8',
    padding: '30px 0',
    '@media (max-width: 1200px)': {
      padding: '28px 0',
    },
    '@media (max-width: 960px)': {
      padding: '26px 0',
    },
    '@media (max-width: 600px)': {
      padding: '25px 0',
    },
    '@media (max-width: 480px)': {
      padding: '22px 0',
    },
    '@media (max-width: 375px)': {
      padding: '20px 0',
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
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '7px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.4rem !important',
      marginBottom: '5px !important',
      lineHeight: '1.3 !important',
    },
  },
  highlightText: {
    color: '#FFC614 !important',
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#666 !important',
    marginBottom: '20px !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.15rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
      marginBottom: '17px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '16px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      marginBottom: '14px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      marginBottom: '12px !important',
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
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: '#1A1B4A !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 4px 12px rgba(42, 43, 106, 0.3) !important',
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
      padding: '11px 26px !important',
      fontSize: '1.05rem !important',
      marginBottom: '14px !important',
    },
    '@media (max-width: 960px)': {
      padding: '10px 24px !important',
      fontSize: '1rem !important',
      marginBottom: '13px !important',
    },
    '@media (max-width: 600px)': {
      padding: '10px 24px !important',
      fontSize: '1rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 480px)': {
      padding: '9px 22px !important',
      fontSize: '0.95rem !important',
      marginBottom: '10px !important',
      borderRadius: '5px !important',
    },
    '@media (max-width: 375px)': {
      padding: '8px 20px !important',
      fontSize: '0.9rem !important',
      marginBottom: '8px !important',
      borderRadius: '4px !important',
    },
  },
  supportText: {
    fontSize: '0.95rem !important',
    color: '#777 !important',
    maxWidth: '700px',
    lineHeight: '1.5 !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.93rem !important',
      maxWidth: '650px',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.9rem !important',
      maxWidth: '600px',
      lineHeight: '1.45 !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
      maxWidth: '90%',
      lineHeight: '1.4 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem !important',
      maxWidth: '95%',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem !important',
      lineHeight: '1.35 !important',
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

const CareerBanner = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.bannerWrapper}>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h1" className={classes.headline}>
          Kickstart <span className={classes.highlightText}>Career Journey Today</span>
        </Typography>
        
        <Typography variant="h6" className={classes.subtitle}>
          Limited Seats Available | Price Increases Soon
        </Typography>
        
        <Button 
          variant="contained" 
          className={classes.ctaButton}
          onClick={() => {
            // navigate('/cart');
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Ensure scroll to top
          }}
        >
          Launching Soon
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