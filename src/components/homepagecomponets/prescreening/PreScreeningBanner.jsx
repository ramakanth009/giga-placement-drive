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
    background: `linear-gradient(135deg, #232459 0%, #2d2e6e 100%)`,
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(35, 36, 89, 0.2)',
    margin: '30px 15px',
    maxWidth: '1800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (max-width: 960px)': {
      padding: '25px 0',
    },
    '@media (max-width: 600px)': {
      padding: '20px 15px',
      borderRadius: '10px',
    },
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    padding: '0 20px',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#FFC614 !important',
    marginBottom: '15px !important',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2) !important',
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.6rem !important',
      marginBottom: '10px !important',
    },
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    maxWidth: '700px',
    marginBottom: '30px !important',
    lineHeight: '1.5 !important',
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      marginBottom: '25px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
      marginBottom: '20px !important',
    },
  },
  targetAudienceGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px',
    width: '100%',
    maxWidth: '1400px',
    marginBottom: '30px',
    '@media (max-width: 960px)': {
      gap: '12px',
      marginBottom: '25px',
    },
    '@media (max-width: 600px)': {
      gap: '10px',
      marginBottom: '20px',
    },
  },
  targetItemWrapperFirstRow: {
    width: 'calc(50% - 7.5px)',
    minWidth: '300px',
    '@media (max-width: 1200px)': {
      width: 'calc(50% - 10px)',
    },
    '@media (max-width: 680px)': {
      width: '100%',
      minWidth: 'unset',
    },
  },
  targetItemWrapperSecondRow: {
    width: 'calc(33.33% - 10px)',
    minWidth: '300px',
    '@media (max-width: 1200px)': {
      width: 'calc(50% - 10px)',
    },
    '@media (max-width: 680px)': {
      width: '100%',
      minWidth: 'unset',
    },
  },
  targetItem: {
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'left',
    transition: 'all 0.3s ease',
    height: '100%',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    minHeight: '75px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
    },
  },
  checkIcon: {
    color: '#FFC614 !important',
    fontSize: '32px !important',
    marginRight: '15px !important',
    marginTop: '2px !important',
    flexShrink: 0,
    '@media (max-width: 960px)': {
      fontSize: '28px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '24px !important',
      marginRight: '12px !important',
    },
  },
  targetText: {
    color: 'white !important',
    fontSize: '0.95rem !important',
    fontWeight: '500 !important',
    lineHeight: '1.4 !important',
  },
  applyButton: {
    backgroundColor: '#FFC614 !important',
    color: '#232459 !important',
    padding: '12px 30px !important',
    borderRadius: '50px !important',
    fontWeight: 'bold !important',
    fontSize: '1.1rem !important',
    textTransform: 'none !important',
    boxShadow: '0 5px 15px rgba(255, 198, 20, 0.3) !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: '#FFD344 !important',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(255, 198, 20, 0.4) !important',
    },
    '@media (max-width: 600px)': {
      padding: '10px 25px !important',
      fontSize: '1rem !important',
    },
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `
      radial-gradient(circle at 20% 20%, rgba(255, 198, 20, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 198, 20, 0.05) 0%, transparent 50%),
      radial-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px)
    `,
    backgroundSize: '100% 100%, 100% 100%, 30px 30px',
    opacity: 0.6,
    zIndex: 1,
    animation: '$backgroundFloat 20s ease-in-out infinite',
    pointerEvents: 'none',
  },
  '@keyframes backgroundFloat': {
    '0%, 100%': {
      transform: 'translateY(0) scale(1)',
      opacity: 0.6,
    },
    '50%': {
      transform: 'translateY(-10px) scale(1.02)',
      opacity: 0.8,
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

  const handleClick = () => {
    navigate('/pre-screening-test');
  };

  const targetAudienceWithIcons = [
    {
      text: "People who got Cheated by backdoor IT jobs with fake offers and false placement promises",
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

  // First 2 items go in the first row (changed from 3)
  const firstRowItems = targetAudienceWithIcons.slice(0, 2);
  // Remaining 3 items go in the second row (changed from 2)
  const secondRowItems = targetAudienceWithIcons.slice(2);

  const hoverStyles = {
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    position: 'relative',
    '&::after': {
      content: '"Click to start"',
      position: 'absolute',
      bottom: '-20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#FFC614',
      color: '#2A2B6A',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
      opacity: 0,
      transition: 'opacity 0.2s ease',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    '&:hover::after': {
      opacity: 1
    }
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
        
        <Box className={classes.contentWrapper}>
          <Typography className={classes.title}>
            Gigaversity Pre-Screener Test
          </Typography>
          
          <Typography className={classes.subtitle}>
            Your first step towards a transformative tech education experience.
          </Typography>
          
          <Box className={classes.targetAudienceGrid}>
            {/* First row with 2 items */}
            {firstRowItems.map(({ text, icon: IconComponent }, index) => (
              <Box 
                key={index} 
                className={classes.targetItemWrapperFirstRow}
                onClick={handleClick}
                sx={{ ...hoverStyles }}
              >
                <Box className={classes.targetItem}>
                  <IconComponent className={classes.checkIcon} />
                  <Typography className={classes.targetText}>
                    {text}
                  </Typography>
                </Box>
              </Box>
            ))}

            {/* Second row with 3 items */}
            {secondRowItems.map(({ text, icon: IconComponent }, index) => (
              <Box 
                key={index + 2} 
                className={classes.targetItemWrapperSecondRow}
                onClick={handleClick}
                sx={{ ...hoverStyles }}
              >
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