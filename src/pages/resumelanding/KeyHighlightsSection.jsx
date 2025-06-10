import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import StarIcon from '@mui/icons-material/Star';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VerifiedIcon from '@mui/icons-material/Verified';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const useStyles = makeStyles({
  section: {
    padding: '40px 0',
    background: 'linear-gradient(135deg, #101138 0%, #2A2B6A 100%)',
    '@media (max-width: 960px)': {
      padding: '80px 0',
    },
    '@media (max-width: 600px)': {
      padding: '60px 0',
    },
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  titleSection: {
    textAlign: 'center',
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      marginBottom: '50px',
    },
  },
  mainTitle: {
    fontSize: '3.5rem !important',
    fontWeight: 'bold !important',
    color: '#ffffff',
    marginBottom: '20px !important',
    letterSpacing: '-0.02em',
    textAlign: 'center',
    '@media (max-width: 960px)': {
      fontSize: '2.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2.2rem !important',
    },
  },
  brandHighlight: {
    color: '#ffc614',
    position: 'relative',
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#a0a0a0 !important',
    textAlign: 'center !important',
    maxWidth: '600px',
    lineHeight: '1.6 !important',
    margin: '0 !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      maxWidth: '90%',
    },
  },
  highlightsGrid: {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    width: '100vw',
    margin: '0 auto',
    padding: '20px 0',
    marginLeft: 'calc(-50vw + 50%)',
    marginRight: 'calc(-50vw + 50%)',
  },
  slider: {
    display: 'flex',
    gap: '40px',
    animation: '$slide 40s linear infinite',
    '&:hover': {
      animationPlayState: 'paused',
    },
  },
  '@keyframes slide': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(-50%)',
    },
  },
  highlightCard: {
    flex: '0 0 300px',
    background: 'rgba(255,255,255,0.10)',
    borderRadius: '20px',
    padding: '40px 30px',
    position: 'relative',
    border: '1.5px solid rgba(255,255,255,0.18)',
    overflow: 'hidden',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
    backdropFilter: 'blur(8px)',
    '@media (max-width: 600px)': {
      padding: '30px 25px',
      flex: '0 0 250px',
    },
  },
  iconContainer: {
    width: '70px',
    height: '70px',
    background: '#fff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '25px',
    boxShadow: '0 2px 12px 0 rgba(255, 198, 20, 0.15)',
    border: '2px solid #ffc614',
    position: 'relative',
    zIndex: 2,
    '& svg': {
      fontSize: '32px',
      color: '#ffc614',
    },
    '@media (max-width: 600px)': {
      width: '60px',
      height: '60px',
      '& svg': {
        fontSize: '28px',
      },
    },
  },
  highlightTitle: {
    fontSize: '1.3rem',
    fontWeight: '700 !important',
    color: '#fff !important',
    marginBottom: '0 !important',
    transition: 'color 0.3s ease',
    position: 'relative',
    zIndex: 2,
    letterSpacing: '0.01em',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem',
    },
  },
  decorativeElement: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '40px',
    height: '40px',
    pointerEvents: 'none',
    zIndex: 1,
  },
  backgroundPattern: {
    display: 'none',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '60px',
    marginTop: '80px',
    '@media (max-width: 960px)': {
      gap: '40px',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: '30px',
      alignItems: 'center',
    },
  },
  statItem: {
    textAlign: 'center',
    '& h3': {
      fontSize: '2.5rem',
      fontWeight: '800 !important',
      color: '#ffc614 !important',
      marginBottom: '10px !important',
      '@media (max-width: 600px)': {
        fontSize: '2rem',
      },
    },
    '& p': {
      fontSize: '1rem',
      color: '#a0a0a0 !important',
      margin: '0 !important',
    },
  },
});

const KeyHighlightsSection = () => {
  const classes = useStyles();

  const highlights = [
    { 
      icon: <StarIcon />, 
      title: "Top Rated",
    },
    { 
      icon: <FlashOnIcon />, 
      title: "Lightning Fast",
    },
    { 
      icon: <PsychologyIcon />, 
      title: "Gen AI Recommendation",
    },
    { 
      icon: <LightbulbIcon />, 
      title: "Project Suggestion",
    },
    { 
      icon: <DesignServicesIcon />, 
      title: "Professional Layouts",
    },
    { 
      icon: <ThumbUpIcon />, 
      title: "Recruiters Approved Templates",
    },
    { 
      icon: <VerifiedIcon />, 
      title: "ATS-Friendly",
    },
    { 
      icon: <TrendingUpIcon />, 
      title: "Skills Suggestion",
    }
  ];

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.titleSection}>
          <Typography variant="h2" className={classes.mainTitle}>
            Key Highlights of{' '}
            <span className={classes.brandHighlight}>Giga Resume Builder</span>
          </Typography>
          <Typography className={classes.subtitle}>
            Discover the powerful features that make our resume builder stand out from the crowd
          </Typography>
        </Box>

        <Box className={classes.highlightsGrid}>
          <Box className={classes.slider}>
            {[...highlights, ...highlights].map((highlight, index) => (
              <Box
                key={index}
                className={classes.highlightCard}
              >
                <Box className={classes.iconContainer}>
                  {highlight.icon}
                </Box>
                <Typography className={classes.highlightTitle}>
                  {highlight.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default KeyHighlightsSection;