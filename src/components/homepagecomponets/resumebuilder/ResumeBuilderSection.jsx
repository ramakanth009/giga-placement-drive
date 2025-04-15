// src/components/resumebuilder/ResumeBuilderSection.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Paper, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
// import ResumeTemplateImage from '../../assets/resume-template.png'; // Add this image

const useStyles = makeStyles({
  section: {
    padding: '70px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #f0f4ff 0%, #e6f2ff 100%)',
    marginTop: '-40px', // Create overlap effect with hero section
    zIndex: 5,
  },
  container: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  banner: {
    width: '90%',
    maxWidth: '1000px',
    padding: '40px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1A1B4A 100%)',
    boxShadow: '0 20px 60px rgba(42, 43, 106, 0.3)',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    transform: 'translateY(-30px)',
    marginBottom: '30px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    '@media (max-width: 768px)': {
      padding: '30px 20px',
      width: '95%',
    },
  },
  bannerTitle: {
    fontSize: '2.8rem !important',
    fontWeight: '800 !important',
    color: 'black !important',
    margin: '0 0 15px !important',
    position: 'relative',
    '@media (max-width: 768px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.8rem !important',
    },
  },
  highlightText: {
    color: '#FFC614 !important',
    position: 'relative',
    display: 'inline-block',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '5px',
      left: '0',
      width: '100%',
      height: '30%',
      background: 'rgba(255, 198, 20, 0.2)',
      zIndex: -1,
      borderRadius: '2px',
    },
  },
  bannerSubtitle: {
    fontSize: '1.3rem !important',
    color: 'black !important',
    margin: '0 auto 25px !important',
    maxWidth: '700px',
    '@media (max-width: 768px)': {
      fontSize: '1.1rem !important',
    },
  },
  freeChip: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    fontWeight: 'bold !important',
    fontSize: '1rem !important',
    padding: '5px 15px !important',
    borderRadius: '20px !important',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15) !important',
    animation: '$pulse 2s infinite',
    '@media (max-width: 768px)': {
      fontSize: '0.9rem !important',
    },
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    },
    '50%': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
    },
    '100%': {
      transform: 'scale(1)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    },
  },
  featureList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    margin: '20px 0 30px',
    '@media (max-width: 768px)': {
      gap: '10px',
    },
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '8px 15px',
    borderRadius: '50px',
    '@media (max-width: 768px)': {
      padding: '6px 12px',
      fontSize: '0.9rem',
    },
  },
  featureIcon: {
    color: '#FFC614 !important',
    marginRight: '8px !important',
    fontSize: '1.2rem !important',
    '@media (max-width: 768px)': {
      fontSize: '1rem !important',
    },
  },
  featureText: {
    fontSize: '1rem !important',
    color: 'black !important',
    fontWeight: '500 !important',
    '@media (max-width: 768px)': {
      fontSize: '0.9rem !important',
    },
  },
  buildButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    padding: '15px 40px !important',
    borderRadius: '50px !important',
    fontSize: '1.3rem !important',
    fontWeight: 'bold !important',
    textTransform: 'none !important',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important',
    boxShadow: '0 10px 25px rgba(255, 198, 20, 0.4) !important',
    marginTop: '10px',
    marginBottom: '15px',
    '&:hover': {
      backgroundColor: 'white !important',
      transform: 'translateY(-7px) scale(1.05)',
      boxShadow: '0 15px 35px rgba(255, 198, 20, 0.5) !important',
    },
    '@media (max-width: 768px)': {
      padding: '12px 30px !important',
      fontSize: '1.1rem !important',
    },
  },
  previewSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
    position: 'relative',
  },
  previewTitle: {
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    margin: '0 0 30px !important',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      background: '#FFC614',
      borderRadius: '2px',
    },
  },
  resumePreview: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      gap: '20px',
    },
  },
  templateCard: {
    width: '280px',
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
    },
    '@media (max-width: 768px)': {
      width: '220px',
    },
  },
  templateImage: {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
    objectPosition: 'top',
    '@media (max-width: 768px)': {
      height: '280px',
    },
  },
  templateLabel: {
    padding: '15px',
    textAlign: 'center',
    fontWeight: 'bold !important',
    fontSize: '1rem !important',
    color: '#2A2B6A !important',
  },
  starIcon: {
    position: 'absolute',
    color: '#FFC614',
    zIndex: 0,
    opacity: 0.5,
  },
  starBurst: {
    position: 'absolute',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 198, 20, 0.2) 0%, rgba(255, 198, 20, 0) 70%)',
    zIndex: 0,
  },
  starburst1: {
    top: '10%',
    left: '10%',
  },
  starburst2: {
    bottom: '5%',
    right: '15%',
  },
  limitedText: {
    fontSize: '1rem !important',
    color: 'black !important',
    fontStyle: 'italic !important',
    margin: '15px 0 0 !important',
  },
});

const ResumeBuilderSection = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setAnimated(true);
    
    // Generate random star positions
    const stars = document.querySelectorAll(`.${classes.starIcon}`);
    stars.forEach(star => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = 20 + Math.random() * 30;
      star.style.top = `${top}%`;
      star.style.left = `${left}%`;
      star.style.fontSize = `${size}px`;
    });
  }, []);

  const handleBuildResumeClick = () => {
    // Navigate to resume builder page
    navigate('/resume-builder');
  };

  const features = [
    "ATS Optimized",
    "Technical Templates",
    "Skills Highlighting",
    "Project Showcase",
    "Quick to Create"
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.starburst1} />
      <Box className={classes.starburst2} />
      
      {/* Add multiple decorative stars */}
      {[...Array(8)].map((_, i) => (
        <StarIcon key={i} className={classes.starIcon} />
      ))}
      
      <Container maxWidth="lg" className={classes.container}>
        <Paper 
          elevation={0} 
          className={classes.banner}
          sx={{
            opacity: animated ? 1 : 0,
            transform: animated ? 'translateY(-30px)' : 'translateY(0px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <Chip 
            icon={<StarIcon />} 
            label="FREE" 
            className={classes.freeChip} 
          />
          
          <Typography variant="h1" className={classes.bannerTitle}>
            Create Your <span className={classes.highlightText}>Professional Resume</span>
          </Typography>
          
          <Typography variant="h4" className={classes.bannerSubtitle}>
            Stand out from the competition with an ATS-friendly resume designed for tech roles
          </Typography>
          
          <Box className={classes.featureList}>
            {features.map((feature, index) => (
              <Box 
                key={index} 
                className={classes.featureItem}
                sx={{
                  opacity: animated ? 1 : 0,
                  transform: animated ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  transitionDelay: `${0.2 + (index * 0.1)}s`,
                }}
              >
                <CheckCircleIcon className={classes.featureIcon} />
                <Typography className={classes.featureText}>
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>
          
          <Button 
            variant="contained" 
            className={classes.buildButton}
            onClick={handleBuildResumeClick}
            endIcon={<ArrowForwardIcon />}
            sx={{
              opacity: animated ? 1 : 0,
              transform: animated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
              transitionDelay: '0.6s',
            }}
          >
            Build Your FREE Resume Now
          </Button>
          
          <Typography variant="body2" className={classes.limitedText}>
            Start building your professional resume in minutes
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default ResumeBuilderSection;