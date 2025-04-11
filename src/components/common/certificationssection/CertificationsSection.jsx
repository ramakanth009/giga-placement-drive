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
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
      marginBottom: '40px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.6rem !important',
      marginBottom: '30px !important',
    },
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      gap: '30px',
    },
  },
  leftContent: {
    width: '50%',
    color: 'white',
    '@media (max-width: 960px)': {
      width: '100%',
      textAlign: 'center',
    },
  },
  rightContent: {
    width: '45%',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    '@media (max-width: 960px)': {
      width: '80%',
    },
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
  expertiseTitle: {
    fontSize: '5rem !important',
    fontWeight: 'bold !important',
    color: 'rgba(255, 255, 255, 0.25) !important',
    position: 'absolute',
    left: '0',
    top: '40px',
    '@media (max-width: 960px)': {
      fontSize: '4rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '3rem !important',
    },
  },
  validateTitle: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    marginBottom: '20px !important',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.7rem !important',
    },
  },
  description: {
    fontSize: '1.2rem !important',
    color: 'white !important',
    marginBottom: '25px !important',
    fontWeight: '500 !important',
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  subDescription: {
    fontSize: '0.95rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  certificateImage: {
    maxWidth: '100%',
    width: '450px', // Increased fixed width
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    transform: 'rotate(3deg)',
    transition: 'transform 0.3s ease',
    position: 'relative',
    zIndex: 2,
    '&:hover': {
      transform: 'rotate(0deg)',
    },
    '@media (max-width: 1200px)': {
      width: '400px', // Responsive width for smaller screens
    },
    '@media (max-width: 960px)': {
      width: '350px', // Responsive width for tablet
    },
    '@media (max-width: 600px)': {
      width: '300px', // Responsive width for mobile
    },
  },
  certificateGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90%',
    borderRadius: '10px',
    background: 'rgba(255, 198, 20, 0.3)',
    filter: 'blur(20px)',
    zIndex: 1,
  },
  decorCircle1: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 198, 20, 0.2) 0%, rgba(255, 198, 20, 0) 70%)',
    top: '-50px',
    right: '-50px',
    zIndex: 1,
  },
  decorCircle2: {
    position: 'absolute',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(66, 133, 244, 0.2) 0%, rgba(66, 133, 244, 0) 70%)',
    bottom: '-30px',
    left: '-30px',
    zIndex: 1,
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