// src/components/homepagecomponets/resumebuilder/ResumeBuilderSection.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

// Import the new ResumeCard component
import ResumeCard from './ResumeCard';

const useStyles = makeStyles({
  section: {
    marginTop: '5px',
    marginBottom: '5px',
    position: 'relative',
    overflow: 'visible',
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  outerBox: {
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1A1B4A 100%)',
    boxShadow: '0 25px 60px rgba(42, 43, 106, 0.15)',
    position: 'relative',
    borderRadius: '20px',
  },
  contentWrapper: {
    padding: '60px 40px',
    display: 'flex',
    gap: '30px',
    justifyContent: 'space-between',
    position: 'relative',
    '@media (max-width: 1100px)': {
      flexDirection: 'column',
      padding: '50px 30px',
      gap: '40px',
    },
    '@media (max-width: 600px)': {
      padding: '40px 20px',
      gap: '30px',
    },
  },
  leftContent: {
    flex: '1',
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    lineHeight: '1.2 !important',
    marginBottom: '20px !important',
    '@media (max-width: 1200px)': {
      fontSize: '2.5rem !important',
    },
    '@media (max-width: 900px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '15px !important',
    },
  },
  highlightText: {
    color: '#FFC614 !important',
    position: 'relative',
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    marginBottom: '30px !important',
    maxWidth: '700px',
    textAlign: 'center', 
    margin: '0 auto 30px !important',
    '@media (max-width: 900px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '20px !important',
    },
  },
  featuresContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '30px',
    maxWidth: '700px',
    margin: '0 auto 30px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  },
  featureIcon: {
    fontSize: '1rem !important',
    marginRight: '10px',
    color: '#FFC614',
  },
  featureText: {
    fontSize: '1rem !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    fontWeight: '500 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  statsContainer: {
    display: 'flex',
    gap: '20px',
    marginBottom: '30px',
    justifyContent: 'center',
    maxWidth: '700px',
    margin: '0 auto 30px',
    '@media (max-width: 600px)': {
      gap: '15px',
      flexWrap: 'wrap',
    },
  },
  statItem: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: '15px 20px',
    minWidth: '120px',
    textAlign: 'center',
    '@media (max-width: 900px)': {
      padding: '12px 15px',
      minWidth: '100px',
    },
    '@media (max-width: 600px)': {
      padding: '10px',
      flex: '1',
      minWidth: '80px',
    },
  },
  statNumber: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    color: '#FFC614 !important',
    marginBottom: '5px !important',
    '@media (max-width: 900px)': {
      fontSize: '1.6rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.4rem !important',
      marginBottom: '3px !important',
    },
  },
  statLabel: {
    fontSize: '0.85rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    '@media (max-width: 600px)': {
      fontSize: '0.75rem !important',
    },
  },
  buildButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    padding: '14px 30px !important',
    borderRadius: '50px !important',
    fontSize: '1.1rem !important',
    fontWeight: 'bold !important',
    textTransform: 'none !important',
    boxShadow: '0 10px 25px rgba(255, 198, 20, 0.3) !important',
    transition: 'all 0.3s ease !important',
    maxWidth: 'fit-content',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: '#FFD23F !important',
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 35px rgba(255, 198, 20, 0.4) !important',
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
    '@media (max-width: 600px)': {
      padding: '12px 25px !important',
      fontSize: '1rem !important',
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
  
  rightContent: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px)`,
    backgroundSize: '30px 30px',
    opacity: 0.3,
    zIndex: 1,
  },
  floatingIcons: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  floatingIcon: {
    position: 'absolute',
    color: 'rgba(255, 255, 255, 0.05)',
    animation: '$float 8s infinite ease-in-out',
  },
  '@keyframes float': {
    '0%': {
      transform: 'translateY(0) rotate(0deg)',
    },
    '50%': {
      transform: 'translateY(-20px) rotate(10deg)',
    },
    '100%': {
      transform: 'translateY(0) rotate(0deg)',
    },
  },
});

const ResumeBuilderSection = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const handleBuildClick = () => {
    navigate('/payment-under-construction');
  };
  
  // Floating icons for background effect
  const floatingIcons = [
    { icon: <CodeIcon />, top: '15%', left: '10%', size: '40px', delay: '0s' },
    { icon: <SchoolIcon />, top: '25%', right: '15%', size: '35px', delay: '1s' },
    { icon: <PsychologyIcon />, bottom: '20%', left: '20%', size: '45px', delay: '2s' },
    { icon: <SettingsIcon />, top: '70%', right: '25%', size: '30px', delay: '3s' },
    { icon: <DesignServicesIcon />, top: '40%', left: '25%', size: '35px', delay: '4s' },
  ];
  
  return (
    <Box className={classes.section}>
        <Box className={classes.outerBox}>
          <Box className={classes.backgroundPattern} />
          
          {/* Floating icons in the background */}
          <Box className={classes.floatingIcons}>
            {floatingIcons.map((icon, index) => (
              <Box
                key={index}
                className={classes.floatingIcon}
                sx={{
                  top: icon.top,
                  left: icon.left,
                  right: icon.right,
                  bottom: icon.bottom,
                  fontSize: icon.size,
                  animationDelay: icon.delay,
                }}
              >
                {icon.icon}
              </Box>
            ))}
          </Box>
          
          <Box className={classes.contentWrapper}>
            <Box 
              className={classes.leftContent}
              sx={{
                opacity: animated ? 1 : 0,
                transform: animated ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
              }}
            >
              <Typography variant="h1" className={classes.title}>
                Build Your <span className={classes.highlightText}>ATS-Optimized</span> Resume
              </Typography>
              
              <Typography variant="body1" className={classes.subtitle}>
                Create a standout resume in minutes that passes through Applicant Tracking Systems and impresses hiring managers in both tech and non-tech roles.
              </Typography>
              
              <Box className={classes.featuresContainer}>
                {[
                  "Industry-specific templates for tech and non-tech roles",
                  "AI-powered content suggestions for each section",
                  "Keyword optimization for job description matching",
                  "Tailor your skills for different career paths",
                  "Multiple resume formats for different industries"
                ].map((feature, index) => (
                  <Box 
                    key={index} 
                    className={classes.featureItem}
                    sx={{
                      opacity: animated ? 1 : 0,
                      transform: animated ? 'translateX(0)' : 'translateX(-20px)',
                      transition: 'opacity 0.6s ease, transform 0.6s ease',
                      transitionDelay: `${0.2 + (index * 0.1)}s`,
                    }}
                  >
                    <DoneIcon className={classes.featureIcon} />
                    <Typography className={classes.featureText}>{feature}</Typography>
                  </Box>
                ))}
              </Box>
              
              <Box 
                className={classes.statsContainer}
                sx={{
                  opacity: animated ? 1 : 0,
                  transform: animated ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.7s ease, transform 0.7s ease',
                  transitionDelay: '0.7s',
                }}
              >
                <Box className={classes.statItem}>
                  <Typography className={classes.statNumber}>3x</Typography>
                  <Typography className={classes.statLabel}>More Interviews</Typography>
                </Box>
                <Box className={classes.statItem}>
                  <Typography className={classes.statNumber}>5 min</Typography>
                  <Typography className={classes.statLabel}>To Create</Typography>
                </Box>
                <Box className={classes.statItem}>
                  <Typography className={classes.statNumber}>95%</Typography>
                  <Typography className={classes.statLabel}>ATS Pass Rate</Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Button 
                  variant="contained" 
                  className={classes.buildButton}
                  onClick={handleBuildClick}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    opacity: animated ? 1 : 0,
                    transform: animated ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease, transform 0.8s ease',
                    transitionDelay: '0.9s',
                  }}
                >
                  Build Your FREE Resume Now
                </Button>
              </Box>
            </Box>
            
            {/* Right content now using the new ResumeCard component */}
            <Box 
              className={classes.rightContent}
              sx={{
                opacity: animated ? 1 : 0,
                transform: animated ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.9s ease, transform 0.9s ease',
                transitionDelay: '0.5s',
              }}
            >
              <ResumeCard animated={animated} />
            </Box>
          </Box>
        </Box>
    </Box>
  );
};

export default ResumeBuilderSection;