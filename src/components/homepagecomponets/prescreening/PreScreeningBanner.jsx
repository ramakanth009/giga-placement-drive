import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AssessmentIcon from '@mui/icons-material/Assessment';

const useStyles = makeStyles({
  bannerContainer: {
    position: 'relative',
    padding: '40px 0',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #3c3e8f 100%)',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(42, 43, 106, 0.2)',
    margin: '30px 0',
    '@media (max-width: 960px)': {
      padding: '30px 0',
    },
    '@media (max-width: 600px)': {
      padding: '25px 20px',
      borderRadius: '10px',
    },
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      gap: '20px',
      textAlign: 'center',
    },
  },
  textContent: {
    '@media (max-width: 960px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  title: {
    fontSize: '2.2rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    marginBottom: '10px !important',
    '& span': {
      color: '#FFC614',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.5rem !important',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    maxWidth: '600px',
    marginBottom: '20px !important',
    '@media (max-width: 1200px)': {
      fontSize: '1rem !important',
      maxWidth: '500px',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.95rem !important',
      maxWidth: '100%',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  takeTestButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    padding: '12px 25px !important',
    borderRadius: '50px !important',
    fontWeight: 'bold !important',
    fontSize: '1.1rem !important',
    textTransform: 'none !important',
    boxShadow: '0 5px 15px rgba(255, 198, 20, 0.3) !important',
    transition: 'all 0.3s ease !important',
    position: 'relative',
    '&:hover': {
      backgroundColor: '#FFD344 !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 20px rgba(255, 198, 20, 0.4) !important',
    },
    '@media (max-width: 600px)': {
      padding: '10px 20px !important',
      fontSize: '1rem !important',
    },
  },
  iconContainer: {
    width: '120px',
    height: '120px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: '$pulse 2s infinite',
    '@media (max-width: 1200px)': {
      width: '100px',
      height: '100px',
    },
    '@media (max-width: 600px)': {
      width: '80px',
      height: '80px',
    },
  },
  icon: {
    fontSize: '60px !important',
    color: '#FFC614',
    '@media (max-width: 1200px)': {
      fontSize: '50px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '40px !important',
    },
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px)',
    backgroundSize: '30px 30px',
    opacity: 0.3,
    zIndex: 1,
  },
  '@keyframes pulse': {
    '0%': {
      boxShadow: '0 0 0 0 rgba(255, 198, 20, 0.4)',
    },
    '70%': {
      boxShadow: '0 0 0 15px rgba(255, 198, 20, 0)',
    },
    '100%': {
      boxShadow: '0 0 0 0 rgba(255, 198, 20, 0)',
    },
  },
  badge: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.15) !important',
    borderRadius: '30px !important',
    padding: '8px 16px !important',
    color: 'white !important',
    fontSize: '0.9rem !important',
    fontWeight: 'bold !important',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    '@media (max-width: 600px)': {
      fontSize: '0.8rem !important',
      padding: '6px 12px !important',
    },
  },
  buttonArrow: {
    marginLeft: '8px !important',
    transition: 'transform 0.3s ease',
    '$takeTestButton:hover &': {
      transform: 'translateX(3px)',
    },
  },
  highPoints: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
    '@media (max-width: 960px)': {
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '10px',
    },
    '@media (max-width: 600px)': {
      gap: '8px',
    },
  },
  point: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50px',
    padding: '8px 16px',
    '@media (max-width: 600px)': {
      padding: '6px 12px',
    },
  },
  pointText: {
    color: 'white !important',
    fontSize: '0.9rem !important',
    fontWeight: '500 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.8rem !important',
    },
  },
  dot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#FFC614',
    borderRadius: '50%',
    marginRight: '8px',
    '@media (max-width: 600px)': {
      width: '6px',
      height: '6px',
      marginRight: '6px',
    },
  },
});

const PreScreeningBanner = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const handleTakeTest = () => {
    // Redirect to pre-screening test page
    navigate('/pre-screening-test');
    // Alternative: if using an external link
    // window.open('https://gigaversity.in/prescreening_test', '_blank');
  };

  return (
    <Container maxWidth="xl">
      <Box 
        className={classes.bannerContainer}
        sx={{
          transform: animated ? 'translateY(0)' : 'translateY(50px)',
          opacity: animated ? 1 : 0,
          transition: 'transform 0.6s ease, opacity 0.6s ease',
        }}
      >
        <Box className={classes.backgroundPattern} />
        
        <Box className={classes.badge}>
          <span>✓</span> IT Talent Assessment
        </Box>
        
        <Box className={classes.contentWrapper}>
          <Box className={classes.textContent}>
            <Typography className={classes.title}>
              Fast-Track Your IT Career <span>Evaluation</span>
            </Typography>
            <Typography className={classes.subtitle}>
              Take our comprehensive pre-screening test to assess your IT skills, motivation, and technical proficiency in just 15 minutes.
            </Typography>
            
            <Button 
              className={classes.takeTestButton}
              onClick={handleTakeTest}
              endIcon={<ArrowForwardIcon className={classes.buttonArrow} />}
            >
              Take Pre-Screening Test
            </Button>
            
            <Box className={classes.highPoints}>
              <Box className={classes.point}>
                <Box className={classes.dot} />
                <Typography className={classes.pointText}>15 Min Assessment</Typography>
              </Box>
              <Box className={classes.point}>
                <Box className={classes.dot} />
                <Typography className={classes.pointText}>Instant Results</Typography>
              </Box>
              <Box className={classes.point}>
                <Box className={classes.dot} />
                <Typography className={classes.pointText}>Career Insights</Typography>
              </Box>
            </Box>
          </Box>
          
          <Box className={classes.iconContainer}>
            <AssessmentIcon className={classes.icon} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PreScreeningBanner;