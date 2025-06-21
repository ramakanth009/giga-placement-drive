// src/components/homepagecomponets/resumebuilder/ResumeBuilderSection.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DoneIcon from "@mui/icons-material/Done";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import the ResumeCard component
import ResumeCard from './ResumeCard';

const useStyles = makeStyles({
  section: {
    marginTop: '10px',
    marginBottom: '5px',
    position: 'relative',
    overflow: 'visible',
    '@media (max-width: 960px)': {
      padding: '40px 0',
    },
    '@media (max-width: 600px)': {
      padding: '30px 0',
    },
    '@media (max-width: 480px)': {
      padding: '25px 0',
    },
  },
  container: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    margin: '0 auto',
    padding:"0 50px",
    '@media (max-width: 960px)': {
      padding: '0 18px',
    },
    '@media (max-width: 600px)': {
      padding: '0 16px',
    },
    '@media (max-width: 480px)': {
      padding: '0 12px',
    },
    '@media (max-width: 375px)': {
      padding: '0 8px',
    },
  },
  outerBox: {
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1A1B4A 100%)',
    boxShadow: '0 25px 60px rgba(42, 43, 106, 0.15)',
    position: 'relative',
    borderRadius: '20px',
    '@media (max-width: 1200px)': {
      borderRadius: '18px',
    },
    '@media (max-width: 600px)': {
      borderRadius: '16px',
    },
    '@media (max-width: 480px)': {
      borderRadius: '14px',
    },
    '@media (max-width: 375px)': {
      borderRadius: '12px',
    },
  },
  contentWrapper: {
    padding: '10px 10px',
    display: 'flex',
    gap: '30px',
    justifyContent: 'space-between',
    position: 'relative',
    minHeight: '620px',
    height: '100%',
    overflow: 'hidden',
    '@media (max-width: 1200px)': {
      padding: '25px 25px',
      gap: '35px',
      minHeight: '700px',
    },
    '@media (max-width: 1100px)': {
      padding: '30px 30px',
      gap: '40px',
      minHeight: '800px',
    },
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      padding: '20px 20px',
      alignItems: 'center',
      height: 'auto',
      minHeight: 'unset',
    },
    '@media (max-width: 600px)': {
      padding: '18px 14px',
      gap: '30px',
    },
    '@media (max-width: 480px)': {
      padding: '16px 12px',
      gap: '25px',
    },
    '@media (max-width: 375px)': {
      padding: '14px 10px',
      gap: '20px',
    },
  },
  
  titleContainer: {
    textAlign: 'center',
    padding: '15px 20px 0',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      padding: '25px 20px 0',
    },
    '@media (max-width: 600px)': {
      padding: '20px 16px 0',
    },
    '@media (max-width: 480px)': {
      padding: '18px 12px 0',
    },
    '@media (max-width: 375px)': {
      padding: '16px 8px 0',
    },
  },

  leftContent: {
    flex: '1.5',
    minWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '20px',
    '@media (max-width: 1200px)': {
      minWidth: '450px',
      gap: '18px',
    },
    '@media (max-width: 960px)': {
      width: '100%',
      minWidth: 'unset',
    },
    '@media (max-width: 600px)': {
      gap: '16px',
    },
    '@media (max-width: 480px)': {
      gap: '14px',
    },
  },
  title: {
    fontSize: '3rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    lineHeight: '1.2 !important',
    '@media (max-width: 1200px)': {
      fontSize: '2.5rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
      textAlign: 'center',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      lineHeight: '1.3 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.4rem !important',
    },
  },
  highlightText: {
    fontSize: '1.5rem !important',
    color: '#FFC614 !important',
    position: 'relative',
    '@media (max-width: 1200px)': {
      fontSize: '1.3rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
    },
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    maxWidth: '700px',
    '@media (max-width: 1200px)': {
      fontSize: '1.1rem !important',
      maxWidth: '600px',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.05rem !important',
      textAlign: 'center',
      margin: '0 auto 25px auto !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '20px !important',
      lineHeight: '1.5 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
      marginBottom: '16px !important',
    },
  },
  featuresContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '0',
    width: '100%',
    maxWidth: '600px',
    alignItems: 'flex-start',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: '20px',
    '@media (max-width: 1200px)': {
      maxWidth: '550px',
      padding: '18px',
    },
    '@media (max-width: 600px)': {
      gap: '8px',
      padding: '15px',
      borderRadius: '12px',
    },
    '@media (max-width: 480px)': {
      padding: '12px',
      gap: '6px',
    },
    '@media (max-width: 375px)': {
      padding: '10px',
      borderRadius: '10px',
    },
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    width: '100%',
    '& > svg': {
      width: '24px',
      textAlign: 'center',
    },
    '@media (max-width: 960px)': {
      width: '100%',
    },
    '@media (max-width: 600px)': {
      alignItems: 'flex-start',
    },
  },
  featureIcon: {
    fontSize: '1rem !important',
    marginRight: '10px',
    color: '#FFC614',
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'center',
    width: '14px',
    '@media (max-width: 600px)': {
      marginTop: '3px',
      fontSize: '0.9rem !important',
      marginRight: '8px',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.85rem !important',
      marginRight: '6px',
    },
  },
  featureText: {
    fontSize: '1.1rem !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    fontWeight: '500 !important',
    paddingLeft: '0',
    '@media (max-width: 1200px)': {
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      lineHeight: '1.4 !important',
      textAlign: 'left',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
    },
  },
  statsContainer: {
    display: 'flex',
    gap: '20px',
    marginBottom: '0',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '@media (max-width: 1200px)': {
      gap: '18px',
    },
    '@media (max-width: 960px)': {
      gap: '15px',
    },
    '@media (max-width: 600px)': {
      gap: '12px',
    },
    '@media (max-width: 480px)': {
      gap: '10px',
    },
  },
  statItem: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: '15px 20px',
    minWidth: '120px',
    textAlign: 'center',
    '@media (max-width: 1200px)': {
      padding: '14px 18px',
      minWidth: '110px',
    },
    '@media (max-width: 960px)': {
      padding: '12px 15px',
      minWidth: '100px',
    },
    '@media (max-width: 600px)': {
      borderRadius: '12px',
    },
    '@media (max-width: 480px)': {
      padding: '10px 12px',
      flex: '1',
      minWidth: '40%',
      maxWidth: 'calc(50% - 5px)',
      borderRadius: '10px',
    },
    '@media (max-width: 375px)': {
      padding: '8px 10px',
      borderRadius: '8px',
    },
  },
  statNumber: {
    fontSize: '2rem !important',
    fontWeight: 'bold !important',
    color: '#FFC614 !important',
    marginBottom: '5px !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.9rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.7rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem !important',
      marginBottom: '3px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.5rem !important',
    },
  },
  statLabel: {
    fontSize: '1rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
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
    '@media (max-width: 1200px)': {
      padding: '13px 28px !important',
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 960px)': {
      margin: '0 auto',
    },
    '@media (max-width: 600px)': {
      padding: '12px 25px !important',
      fontSize: '1rem !important',
      width: '100%',
      maxWidth: '280px',
    },
    '@media (max-width: 480px)': {
      padding: '11px 22px !important',
      fontSize: '0.95rem !important',
      maxWidth: '260px',
    },
    '@media (max-width: 375px)': {
      padding: '10px 20px !important',
      fontSize: '0.9rem !important',
      maxWidth: '240px',
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
    maxWidth: '750px',
    height: '100%',
    minHeight: '620px',
    overflow: 'visible',
    paddingBottom: '60px',
    '@media (max-width: 1200px)': {
      maxWidth: '650px',
      minHeight: '580px',
      paddingBottom: '50px',
    },
    '@media (max-width: 960px)': {
      width: '100%',
      maxWidth: '550px',
      height: 'auto',
      minHeight: '500px',
      marginTop: '20px',
      paddingBottom: '40px',
    },
    '@media (max-width: 600px)': {
      maxWidth: '90%',
      marginTop: '15px',
      minHeight: '450px',
      paddingBottom: '35px',
    },
    '@media (max-width: 480px)': {
      maxWidth: '100%',
      marginTop: '10px',
      minHeight: '400px',
      paddingBottom: '30px',
    },
    '@media (max-width: 375px)': {
      minHeight: '380px',
      paddingBottom: '25px',
    },
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
    '@media (max-width: 600px)': {
      backgroundSize: '25px 25px',
    },
    '@media (max-width: 480px)': {
      backgroundSize: '20px 20px',
    },
  },
  
});

const ResumeBuilderSection = () => {
  const classes = useStyles();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Short delay before starting animations
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleBuildClick = () => {
    window.open('http://resume.gigaversity.in/', '_blank');
  };
  
  return (
    <Box className={classes.section}>
      <Box className={classes.container}>
        <Box className={classes.outerBox}>
          <Box className={classes.backgroundPattern} />
          
          {/* Add centered title section */}
          <Box 
            className={classes.titleContainer}
            sx={{
              opacity: animated ? 1 : 0,
              transform: animated ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <Typography variant="h1" className={classes.title}>
              Write your first career chapter with <span style={{ color: '#FFC614' }}>Gigaversity</span>{" "}
              <Typography
                component="span"
                variant="subtitle1"
                sx={{
                  display: 'block',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'text.secondary',
                  fontSize: { xs: '1.1rem', sm: '1.3rem' },
                  mt: 1,
                }}
                className={classes.highlightText}
              >
                Build your ATS Optimized Resume
              </Typography>
            </Typography>
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
            
            {/* Right content with ResumeCard component */}
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
    </Box>
  );
};

export default ResumeBuilderSection;