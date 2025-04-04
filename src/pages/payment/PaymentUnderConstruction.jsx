import React from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import Navbar from '../../components/common/navbar/Navbar';
import Footer from '../../components/common/footer/Footer';
import ConstructionIcon from '@mui/icons-material/Construction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { ReactComponent as PhonePeLogo } from '../../assets/hiringpartners/PhonePe.svg';

const useStyles = makeStyles({
  container: {
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
    textAlign: 'center',
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
    margin: '0 auto',
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
  logoContainer: {
    width: '180px',
    height: '80px',
    margin: '0 auto 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
      width: '150px',
      height: '70px',
      marginBottom: '20px',
    },
  },
  phonePeLogo: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  constructionIcon: {
    fontSize: '50px !important',
    color: '#2A2B6A',
    '@media (max-width: 600px)': {
      fontSize: '40px !important',
    },
  },
  phoneIcon: {
    fontSize: '28px !important',
    color: '#2A2B6A',
    marginRight: '10px',
    '@media (max-width: 600px)': {
      fontSize: '24px !important',
    },
  },
  title: {
    fontSize: '2.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    '& span': {
      color: '#5a30ff !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
  },
  message: {
    fontSize: '1.1rem !important',
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
  alternativeText: {
    fontSize: '1rem !important',
    color: '#666 !important',
    marginBottom: '20px !important',
    fontWeight: '500 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      marginBottom: '15px !important',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  backButton: {
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
  supportInfo: {
    marginTop: '40px',
    padding: '15px',
    borderRadius: '10px',
    backgroundColor: 'rgba(90, 48, 255, 0.05)',
    border: '1px solid rgba(90, 48, 255, 0.2)',
    textAlign: 'center',
  },
  supportText: {
    fontSize: '0.9rem !important',
    color: '#666 !important',
    marginBottom: '5px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
    },
  },
  patternBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'radial-gradient(#5a30ff1a 1px, transparent 1px), radial-gradient(#2A2B6A12 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 10px 10px',
    opacity: 0.5,
    zIndex: -1,
  },
  decorCircle: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'radial-gradient(ellipse at center, rgba(90, 48, 255, 0.2) 0%, rgba(90, 48, 255, 0) 70%)',
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
  highlight: {
    color: '#5a30ff !important',
    fontWeight: 'bold !important',
  },
});

const PaymentUnderConstruction = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Navbar />
      
      <Box className={classes.contentWrapper}>
        <Container maxWidth="lg">
          <Paper className={classes.paper} elevation={0}>
            <Box className={classes.patternBackground} />
            <Box className={`${classes.decorCircle} ${classes.circle1}`} />
            <Box className={`${classes.decorCircle} ${classes.circle2}`} />
            
            <Box className={classes.logoContainer}>
              <PhonePeLogo className={classes.phonePeLogo} />
            </Box>
            
            <Box className={classes.iconContainer}>
              <ConstructionIcon className={classes.constructionIcon} />
            </Box>
            
            <Typography variant="h1" className={classes.title}>
              PhonePe Payment Gateway <span>Under Construction</span>
            </Typography>
            
            <Typography variant="body1" className={classes.message}>
              We're upgrading our payment system to serve you better. The PhonePe payment gateway is currently under maintenance and will be available soon. We apologize for any inconvenience.
            </Typography>
            
            <Typography variant="body2" className={classes.alternativeText}>
              In the meantime, you can use one of our alternative payment methods:
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px', 
              alignItems: 'center', 
              mb: 3,
              margin: '0 auto',
              maxWidth: '400px'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PhoneAndroidIcon className={classes.phoneIcon} />
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                  UPI: <span className={classes.highlight}>gigaversity@ybl</span>
                </Typography>
              </Box>
              
              <Typography variant="body2" sx={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic', textAlign: 'center' }}>
                After payment, please email your transaction ID to <span className={classes.highlight}>payments@gigaversity.in</span>
              </Typography>
            </Box>
            
            <Box className={classes.buttonContainer}>
              <Button 
                variant="contained" 
                className={classes.backButton}
                component={Link}
                to="/"
                startIcon={<ArrowBackIcon />}
              >
                Back to Homepage
              </Button>
            </Box>
            
            <Box className={classes.supportInfo}>
              <Typography className={classes.supportText}>
                Need help with payment? Contact our support team:
              </Typography>
              <Typography className={classes.supportText}>
                Email: <span className={classes.highlight}>support@gigaversity.in</span> | Phone: <span className={classes.highlight}>9849048999</span>
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default PaymentUnderConstruction;