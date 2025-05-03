// src/components/common/certificationssection/CertificationsSection.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  section: {
    position: 'relative',
    overflow: 'hidden',
    background: '#2A2B6A',
    padding: '40px 0 80px',
    '@media (max-width: 1200px)': {
      padding: '35px 0 70px',
    },
    '@media (max-width: 960px)': {
      padding: '30px 0 60px',
    },
    '@media (max-width: 600px)': {
      padding: '25px 0 50px',
    },
    '@media (max-width: 480px)': {
      padding: '20px 0 40px',
    },
    '@media (max-width: 375px)': {
      padding: '15px 0 30px',
    },
  },
  sectionTitle: {
    fontSize: '2rem !important',
    fontWeight: 'bold !important',
    color: '#ffffff !important',
    marginBottom: '50px !important',
    textAlign: 'center',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '1.9rem !important',
      marginBottom: '45px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
      marginBottom: '40px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.6rem !important',
      marginBottom: '30px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.4rem !important',
      marginBottom: '25px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.2rem !important',
      marginBottom: '20px !important',
    },
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 1200px)': {
      gap: '25px',
    },
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      gap: '30px',
    },
    '@media (max-width: 600px)': {
      gap: '25px',
    },
    '@media (max-width: 480px)': {
      gap: '20px',
    },
    '@media (max-width: 375px)': {
      gap: '15px',
    },
  },
  leftContent: {
    width: '50%',
    color: 'white',
    '@media (max-width: 1200px)': {
      width: '48%',
    },
    '@media (max-width: 960px)': {
      width: '100%',
      textAlign: 'center',
    },
    '@media (max-width: 600px)': {
      width: '100%',
    },
    '@media (max-width: 480px)': {
      width: '100%',
    },
    '@media (max-width: 375px)': {
      width: '100%',
    },
  },
  rightContent: {
    width: '45%',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    '@media (max-width: 1200px)': {
      width: '48%',
    },
    '@media (max-width: 960px)': {
      width: '80%',
    },
    '@media (max-width: 600px)': {
      width: '85%',
    },
    '@media (max-width: 480px)': {
      width: '90%',
    },
    '@media (max-width: 375px)': {
      width: '95%',
    },
  },
  expertiseTitle: {
    fontSize: '5rem !important',
    fontWeight: 'bold !important',
    color: 'rgba(255, 255, 255, 0.25) !important',
    position: 'absolute',
    left: '0',
    top: '40px',
    '@media (max-width: 1200px)': {
      fontSize: '4.5rem !important',
      top: '35px',
    },
    '@media (max-width: 960px)': {
      display: 'none', // Hide on tablet and mobile versions
    },
  },
  validateTitle: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    marginBottom: '20px !important',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
      marginBottom: '16px !important',
      textAlign: 'center',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.7rem !important',
      marginBottom: '14px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.5rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.3rem !important',
      marginBottom: '10px !important',
    },
  },
  description: {
    fontSize: '1.2rem !important',
    color: 'white !important',
    marginBottom: '25px !important',
    fontWeight: '500 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.15rem !important',
      marginBottom: '22px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
      marginBottom: '20px !important',
      textAlign: 'center',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
      marginBottom: '16px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
      marginBottom: '14px !important',
    },
  },
  subDescription: {
    fontSize: '0.95rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.93rem !important',
      lineHeight: '1.55 !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.9rem !important',
      lineHeight: '1.5 !important',
      textAlign: 'center',
      margin: '0 auto',
      maxWidth: '90%',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
      lineHeight: '1.45 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem !important',
      lineHeight: '1.4 !important',
      maxWidth: '95%',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem !important',
      lineHeight: '1.35 !important',
    },
  },
  certificateImage: {
    maxWidth: '100%',
    width: '450px', // Increased fixed width
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    // transform: 'rotate(3deg)',
    transition: 'transform 0.3s ease',
    position: 'relative',
    zIndex: 2,
    // '&:hover': {
    //   transform: 'rotate(0deg)',
    // },
    '@media (max-width: 1200px)': {
      width: '400px', // Responsive width for smaller screens
    },
    '@media (max-width: 960px)': {
      width: '350px', // Responsive width for tablet
    },
    '@media (max-width: 600px)': {
      width: '300px', // Responsive width for mobile
      borderRadius: '8px',
    },
    '@media (max-width: 480px)': {
      width: '260px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
    },
    '@media (max-width: 375px)': {
      width: '230px',
      borderRadius: '6px',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
    },
  },
  // certificateGlow: {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: '90%',
  //   height: '90%',
  //   borderRadius: '10px',
  //   background: 'rgba(255, 198, 20, 0.3)',
  //   filter: 'blur(20px)',
  //   zIndex: 1,
  // },
  // decorCircle1: {
  //   position: 'absolute',
  //   width: '200px',
  //   height: '200px',
  //   borderRadius: '50%',
  //   background: 'radial-gradient(circle, rgba(255, 198, 20, 0.2) 0%, rgba(255, 198, 20, 0) 70%)',
  //   top: '-50px',
  //   right: '-50px',
  //   zIndex: 1,
  // },
  decorCircle2: {
    position: 'absolute',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(66, 133, 244, 0.2) 0%, rgba(66, 133, 244, 0) 70%)',
    bottom: '-30px',
    left: '-30px',
    zIndex: 1,
    '@media (max-width: 1200px)': {
      width: '140px',
      height: '140px',
      bottom: '-28px',
      left: '-28px',
    },
    '@media (max-width: 960px)': {
      width: '130px',
      height: '130px',
      bottom: '-25px',
      left: '-25px',
    },
    '@media (max-width: 600px)': {
      width: '120px',
      height: '120px',
      bottom: '-22px',
      left: '-22px',
    },
    '@media (max-width: 480px)': {
      width: '100px',
      height: '100px',
      bottom: '-20px',
      left: '-20px',
    },
    '@media (max-width: 375px)': {
      width: '80px',
      height: '80px',
      bottom: '-18px',
      left: '-18px',
    },
  },
});

const CertificationsSection = ({ certificateImage, fieldType = 'Full Stack Development' }) => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.sectionTitle}>
          Certifications <span>That Set You Apart</span>
        </Typography>

        <Box className={classes.contentContainer}>
          <Box className={classes.leftContent}>
            <Typography variant="h1" className={classes.expertiseTitle}>
              Expertise
            </Typography>
            
            <Typography variant="h3" className={classes.validateTitle}>
              Validate Your Expertise
            </Typography>
            
            <Typography variant="body1" className={classes.description}>
              Gain A Certification That Showcases Your Skills And
              Helps You Stand Out In The Competitive Job Market.
            </Typography>
            
            <Typography variant="body2" className={classes.subDescription}>
              Showcase Your {fieldType} Expertise And Unlock Career
              Opportunities In {fieldType === 'Full Stack Development' 
                ? 'Web Development, Software Engineering, And Scalable Application Development.'
                : 'Data Analysis, Machine Learning, And Business Intelligence.'
              }
            </Typography>
          </Box>
          
          <Box className={classes.rightContent}>
            <Box className={classes.decorCircle1} />
            <Box className={classes.decorCircle2} />
            <Box className={classes.certificateGlow} />
            <img 
              src={certificateImage} 
              alt={`${fieldType} Certificate Sample`} 
              className={classes.certificateImage}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CertificationsSection;