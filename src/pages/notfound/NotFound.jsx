// src/pages/notfound/NotFound.jsx
import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import Navbar from '../../components/common/navbar/Navbar';
import Footer from '../../components/common/footer/Footer';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const useStyles = makeStyles({
  notFoundContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  contentWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #e4ecfb 100%)',
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  paper: {
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '700px',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 600px)': {
      padding: '30px 20px',
    },
  },
  iconContainer: {
    margin: '0 auto 30px',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 20px rgba(42, 43, 106, 0.15)',
    '@media (max-width: 600px)': {
      width: '80px',
      height: '80px',
      marginBottom: '20px',
    },
  },
  errorIcon: {
    fontSize: '50px !important',
    color: '#2A2B6A',
    '@media (max-width: 600px)': {
      fontSize: '40px !important',
    },
  },
  title: {
    fontSize: '3rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    '@media (max-width: 600px)': {
      fontSize: '2.5rem !important',
    },
  },
  message: {
    fontSize: '1.2rem !important',
    color: '#555 !important',
    marginBottom: '30px !important',
    maxWidth: '500px',
    margin: '0 auto 30px !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '25px !important',
    },
  },
  homeButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '10px 24px !important',
    borderRadius: '8px !important',
    fontWeight: 'bold !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: '#1A1B4A !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 5px 15px rgba(42, 43, 106, 0.3) !important',
    },
    '@media (max-width: 600px)': {
      padding: '8px 20px !important',
      fontSize: '0.9rem !important',
    },
  },
  patternBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'radial-gradient(#2A2B6A12 1px, transparent 1px), radial-gradient(#2A2B6A12 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 10px 10px',
    opacity: 0.5,
    zIndex: -1,
  },
  decorCircle: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'radial-gradient(ellipse at center, rgba(42, 43, 106, 0.2) 0%, rgba(42, 43, 106, 0) 70%)',
    zIndex: -1,
  },
  circle1: {
    width: '200px',
    height: '200px',
    top: '-80px',
    right: '-80px',
  },
  circle2: {
    width: '150px',
    height: '150px',
    bottom: '-50px',
    left: '-50px',
  },
});

const NotFound = () => {
  const classes = useStyles();

  return (
    <Box className={classes.notFoundContainer}>
      <Navbar />
      
      <Box className={classes.contentWrapper}>
        <Container maxWidth="lg" className={classes.container}>
          <Paper className={classes.paper} elevation={0}>
            <Box className={classes.patternBackground} />
            <Box className={`${classes.decorCircle} ${classes.circle1}`} />
            <Box className={`${classes.decorCircle} ${classes.circle2}`} />
            
            <Box className={classes.iconContainer}>
              <ErrorOutlineIcon className={classes.errorIcon} />
            </Box>
            
            <Typography variant="h1" className={classes.title}>
              404 - Page Not Found
            </Typography>
            
            <Typography variant="body1" className={classes.message}>
              The page you are looking for might have been removed or is temporarily unavailable. Please check the URL or go back to the homepage.
            </Typography>
            
            <Button 
              variant="contained" 
              className={classes.homeButton}
              component={Link}
              to="/"
              startIcon={<ArrowBackIcon />}
            >
              Back to Homepage
            </Button>
          </Paper>
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default NotFound;