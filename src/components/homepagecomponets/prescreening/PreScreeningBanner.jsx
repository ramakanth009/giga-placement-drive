import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

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
    '@media (max-width: 1200px)': {
      padding: '18px 0',
      margin: '25px 12px',
      borderRadius: '14px',
    },
    '@media (max-width: 960px)': {
      padding: '16px 0',
      margin: '20px 10px',
      borderRadius: '12px',
    },
    '@media (max-width: 600px)': {
      padding: '15px 0',
      margin: '15px 8px',
      borderRadius: '10px',
    },
    '@media (max-width: 480px)': {
      padding: '12px 0',
      margin: '12px 6px',
      borderRadius: '8px',
    },
    '@media (max-width: 375px)': {
      padding: '10px 0',
      margin: '10px 4px',
      borderRadius: '6px',
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
    '@media (max-width: 1200px)': {
      maxWidth: '1200px',
      padding: '0 18px',
    },
    '@media (max-width: 960px)': {
      maxWidth: '900px',
      padding: '0 16px',
    },
    '@media (max-width: 600px)': {
      maxWidth: '100%',
      padding: '0 14px',
    },
    '@media (max-width: 480px)': {
      padding: '0 12px',
    },
    '@media (max-width: 375px)': {
      padding: '0 10px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#ffffff !important',
    marginBottom: '15px !important',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2) !important',
    lineHeight: '1.2 !important',
    '@media (max-width: 1200px)': {
      fontSize: '2.2rem !important',
      marginBottom: '14px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '10px !important',
      lineHeight: '1.3 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.4rem !important',
      marginBottom: '6px !important',
      lineHeight: '1.4 !important',
    },
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    maxWidth: '700px',
    marginBottom: '30px !important',
    lineHeight: '1.5 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.1rem !important',
      maxWidth: '600px',
      marginBottom: '28px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '500px',
      marginBottom: '25px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
      maxWidth: '90%',
      marginBottom: '20px !important',
      lineHeight: '1.6 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      marginBottom: '15px !important',
      maxWidth: '95%',
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
    '@media (max-width: 1200px)': {
      gap: '12px',
      marginBottom: '28px',
      maxWidth: '1200px',
    },
    '@media (max-width: 960px)': {
      gap: '10px',
      marginBottom: '25px',
      maxWidth: '900px',
    },
    '@media (max-width: 600px)': {
      gap: '8px',
      marginBottom: '20px',
      maxWidth: '100%',
    },
    '@media (max-width: 480px)': {
      gap: '6px',
      marginBottom: '18px',
    },
    '@media (max-width: 375px)': {
      gap: '4px',
      marginBottom: '15px',
    },
  },
  targetItemWrapperFirstRow: {
    width: 'calc(50% - 7.5px)',
    minWidth: '300px',
    '@media (max-width: 1200px)': {
      width: 'calc(50% - 6px)',
      minWidth: '280px',
    },
    '@media (max-width: 960px)': {
      width: 'calc(50% - 5px)',
      minWidth: '250px',
    },
    '@media (max-width: 680px)': {
      width: '100%',
      minWidth: 'unset',
    },
    '@media (max-width: 480px)': {
      width: '100%',
    },
    '@media (max-width: 375px)': {
      width: '100%',
    },
  },
  targetItemWrapperSecondRow: {
    width: 'calc(33.33% - 10px)',
    minWidth: '300px',
    '@media (max-width: 1200px)': {
      width: 'calc(33.33% - 8px)',
      minWidth: '280px',
    },
    '@media (max-width: 960px)': {
      width: 'calc(50% - 5px)',
      minWidth: '250px',
    },
    '@media (max-width: 680px)': {
      width: '100%',
      minWidth: 'unset',
    },
    '@media (max-width: 480px)': {
      width: '100%',
    },
    '@media (max-width: 375px)': {
      width: '100%',
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
    '@media (max-width: 1200px)': {
      padding: '18px',
      borderRadius: '10px',
      minHeight: '70px',
    },
    '@media (max-width: 960px)': {
      padding: '16px',
      borderRadius: '8px',
      minHeight: '65px',
    },
    '@media (max-width: 600px)': {
      padding: '14px',
      borderRadius: '6px',
      minHeight: '60px',
    },
    '@media (max-width: 480px)': {
      padding: '12px',
      minHeight: '55px',
    },
    '@media (max-width: 375px)': {
      padding: '10px',
      borderRadius: '4px',
      minHeight: '50px',
    },
  },
  checkIcon: {
    color: '#FFC614 !important',
    fontSize: '32px !important',
    marginRight: '15px !important',
    marginTop: '2px !important',
    flexShrink: 0,
    '@media (max-width: 1200px)': {
      fontSize: '30px !important',
      marginRight: '14px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '28px !important',
      marginRight: '12px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '24px !important',
      marginRight: '10px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '22px !important',
      marginRight: '8px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '20px !important',
      marginRight: '6px !important',
    },
  },
  targetText: {
    color: 'white !important',
    fontSize: '0.95rem !important',
    fontWeight: '500 !important',
    lineHeight: '1.4 !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.85rem !important',
      lineHeight: '1.5 !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.8rem !important',
      lineHeight: '1.6 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.75rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.7rem !important',
      lineHeight: '1.7 !important',
    },
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
    '@media (max-width: 1200px)': {
      padding: '11px 28px !important',
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 960px)': {
      padding: '10px 25px !important',
      fontSize: '1rem !important',
    },
    '@media (max-width: 600px)': {
      padding: '9px 22px !important',
      fontSize: '0.95rem !important',
      borderRadius: '40px !important',
    },
    '@media (max-width: 480px)': {
      padding: '8px 20px !important',
      fontSize: '0.9rem !important',
      borderRadius: '35px !important',
    },
    '@media (max-width: 375px)': {
      padding: '7px 18px !important',
      fontSize: '0.85rem !important',
      borderRadius: '30px !important',
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
    '@media (max-width: 960px)': {
      backgroundSize: '100% 100%, 100% 100%, 25px 25px',
    },
    '@media (max-width: 600px)': {
      backgroundSize: '100% 100%, 100% 100%, 20px 20px',
    },
    '@media (max-width: 375px)': {
      backgroundSize: '100% 100%, 100% 100%, 15px 15px',
    },
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
    fontSize: '1.2rem !important',
    '$applyButton:hover &': {
      transform: 'translateX(3px)',
    },
    '@media (max-width: 600px)': {
      marginLeft: '6px !important',
      fontSize: '1rem !important',
    },
    '@media (max-width: 375px)': {
      marginLeft: '4px !important',
      fontSize: '0.9rem !important',
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
    navigate('/pre-screening-test');
  };

  const handleClick = () => {
    navigate('/pre-screening-test');
  };

  const targetAudienceWithIcons = [
    {
      // text: "People who got Cheated by backdoor IT jobs with fake offers and false placement promises",
      text: "Empowering aspiring IT professionals to rebuild their careers through genuine opportunities and trusted support after setbacks from fraudulent placements.",
      icon: WarningAmberIcon
    },
    {
      text: "Graduates before 2021 aiming to restart their careers with practical skills and structured Method",
      icon: SchoolIcon
    },
    {
      text: "Professionals from non-tech roles looking to switch into tech with job-specific training and guidance",
      icon: BusinessCenterIcon
    },
    {
      text: "Individuals with personal career gaps, now ready to return to the workforce through expert-led tech programs.",
      icon: RestartAltIcon
    },
    {
      text: "Passionate learners who lacked mentorship and path, now determined to begin their tech journey.",
      icon: EmojiObjectsIcon
    },
  ];

  const firstRowItems = targetAudienceWithIcons.slice(0, 2);
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
      '@media (max-width: 600px)': {
        fontSize: '10px',
        padding: '4px 8px',
        borderRadius: '15px',
      },
      '@media (max-width: 375px)': {
        fontSize: '8px',
        padding: '3px 6px',
        borderRadius: '10px',
      },
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
            Gigaversity <span style={{ color: '#FFC614' }}>Pre-Screener</span> Test
          </Typography>
          
          <Typography className={classes.subtitle}>
            Your first step towards a transformative tech education experience.
          </Typography>
          
          <Box className={classes.targetAudienceGrid}>
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
            title="Check your job readiness with our skill evaluation test"
          >
            Evaluate Your Readiness
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PreScreeningBanner;