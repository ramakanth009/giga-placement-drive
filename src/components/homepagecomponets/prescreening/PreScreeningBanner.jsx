import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const useStyles = makeStyles({
  bannerContainer: {
    position: 'relative',
    padding: '20px 0',
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
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    marginBottom: '15px !important',
    '@media (max-width: 1200px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.6rem !important',
    },
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    maxWidth: '700px',
    marginBottom: '40px !important',
    lineHeight: '1.5 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.1rem !important',
      maxWidth: '600px',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '100%',
      marginBottom: '30px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    },
  },
  targetAudienceGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px',
    width: '100%',
    maxWidth: '1200px',
    marginBottom: '40px',
    '@media (max-width: 1200px)': {
      maxWidth: '900px',
    },
    '@media (max-width: 960px)': {
      gap: '12px',
      maxWidth: '700px',
    },
    '@media (max-width: 768px)': {
      gap: '15px',
      marginBottom: '30px',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
    },
  },
  targetItemWrapper: {
    width: 'calc(33.33% - 10px)',
    '@media (max-width: 960px)': {
      width: 'calc(50% - 6px)',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      maxWidth: '400px',
    },
  },
  targetItemWrapperSecondRow: {
    width: 'calc(50% - 7.5px)',
    '@media (max-width: 960px)': {
      width: 'calc(50% - 6px)',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      maxWidth: '400px',
    },
  },
  targetItem: {
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '15px',
    textAlign: 'left',
    transition: 'all 0.3s ease',
    height: '100%',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      transform: 'translateY(-2px)',
    },
    '@media (max-width: 600px)': {
      padding: '12px',
    },
  },
  checkIcon: {
    color: '#FFC614 !important',
    fontSize: '24px !important',
    marginRight: '12px !important',
    marginTop: '2px !important',
    flexShrink: 0,
    '@media (max-width: 600px)': {
      fontSize: '20px !important',
      marginRight: '10px !important',
    },
  },
  targetText: {
    color: 'white !important',
    fontSize: '1rem !important',
    fontWeight: '500 !important',
    lineHeight: '1.4 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  applyButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    padding: '15px 35px !important',
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
      padding: '12px 25px !important',
      fontSize: '1rem !important',
    },
  },
  iconContainer: {
    width: '100px',
    height: '100px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: '$pulse 2s infinite',
    marginBottom: '20px',
    '@media (max-width: 600px)': {
      width: '80px',
      height: '80px',
      marginBottom: '15px',
    },
  },
  icon: {
    fontSize: '50px !important',
    color: '#FFC614',
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
 
  buttonArrow: {
    marginLeft: '8px !important',
    transition: 'transform 0.3s ease',
    '$applyButton:hover &': {
      transform: 'translateX(3px)',
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

  const handleApplyNow = () => {
    // Redirect to pre-screening test page
    navigate('/pre-screening-test');
    // Alternative: if using an external link
    // window.open('https://gigaversity.in/prescreening_test', '_blank');
  };

  const targetAudienceWithIcons = [
    {
      text: "People who have been cheated by backdoor jobs in IT — promised false placements or fake offer letters",
      icon: WarningAmberIcon
    },
    {
      text: "Graduates before 2021 looking for a career reboot",
      icon: SchoolIcon
    },
    {
      text: "Professionals wanting to switch into tech roles",
      icon: BusinessCenterIcon
    },
    {
      text: "Individuals with career gaps due to personal reasons",
      icon: RestartAltIcon
    },
    {
      text: "Passionate learners who never got the right tech start",
      icon: EmojiObjectsIcon
    },
    
  ];

  // First 3 items go in the first row
  const firstRowItems = targetAudienceWithIcons.slice(0, 3);
  // Remaining items go in the second row
  const secondRowItems = targetAudienceWithIcons.slice(3);

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
        
        <Box className={classes.contentWrapper}>
          <Box className={classes.iconContainer}>
            <AssessmentIcon className={classes.icon} />
          </Box>
          
          <Typography className={classes.title}>
            Gigaversity Pre-Screener Test
          </Typography>
          
          <Typography className={classes.subtitle}>
            Your first step towards a transformative tech education experience.
          </Typography>
          
          <Box className={classes.targetAudienceGrid}>
            {/* First row with 3 items */}
            {firstRowItems.map(({ text, icon: IconComponent }, index) => (
              <Box key={index} className={classes.targetItemWrapper}>
                <Box className={classes.targetItem}>
                  <IconComponent className={classes.checkIcon} />
                  <Typography className={classes.targetText}>
                    {text}
                  </Typography>
                </Box>
              </Box>
            ))}

            {/* Second row with 2 items */}
            {secondRowItems.map(({ text, icon: IconComponent }, index) => (
              <Box key={index + 3} className={classes.targetItemWrapperSecondRow}>
                <Box className={classes.targetItem}>
                  <IconComponent className={classes.checkIcon} />
                  <Typography className={classes.targetText}>
                    {text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          
          <Button 
            className={classes.applyButton}
            onClick={handleApplyNow}
            endIcon={<ArrowForwardIcon className={classes.buttonArrow} />}
          >
            Evaluate Your Readiness
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PreScreeningBanner;