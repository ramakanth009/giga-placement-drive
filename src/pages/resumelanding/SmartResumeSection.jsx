// src/components/landing/SmartResumeSection.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { useNavigate } from 'react-router-dom';
import makeStylesWithTheme from '../../styles/makeStylesAdapter';

const useStyles = makeStylesWithTheme((theme) => ({
  finalSection: {
    background: 'linear-gradient(135deg, #101138 0%, #2A2B6A 100%)',
    padding: '5rem 2rem',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 1200px)': {
      padding: '4.5rem 1.8rem',
      minHeight: '55vh',
    },
    '@media (max-width: 960px)': {
      padding: '4rem 1.5rem',
      minHeight: '50vh',
    },
    '@media (max-width: 600px)': {
      padding: '3rem 1rem',
      minHeight: '45vh',
    },
    '@media (max-width: 480px)': {
      padding: '2.5rem 0.8rem',
      minHeight: '40vh',
    },
    '@media (max-width: 375px)': {
      padding: '2rem 0.5rem',
      minHeight: '35vh',
    },
  },
  container: {
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    '@media (max-width: 1200px)': {
      maxWidth: '900px',
      gap: '1.8rem',
    },
    '@media (max-width: 960px)': {
      maxWidth: '800px',
      gap: '1.5rem',
    },
    '@media (max-width: 600px)': {
      maxWidth: '100%',
      gap: '1.2rem',
    },
    '@media (max-width: 480px)': {
      gap: '1rem',
    },
    '@media (max-width: 375px)': {
      gap: '0.8rem',
    },
  },
  finalTitle: {
    fontSize: '3.2rem !important',
    fontWeight: '900 !important',
    color: 'white !important',
    marginBottom: '0 !important',
    position: 'relative',
    zIndex: 2,
    lineHeight: '1.2 !important',
    textAlign: 'center',
    maxWidth: '100%',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2.8rem !important',
      lineHeight: '1.3 !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.5rem !important',
      lineHeight: '1.3 !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
      lineHeight: '1.4 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.8rem !important',
      lineHeight: '1.4 !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.6rem !important',
      lineHeight: '1.4 !important',
    },
  },
  finalDescription: {
    fontSize: '1.3rem !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    marginBottom: '0 !important',
    maxWidth: '850px !important',
    margin: '0 auto !important',
    position: 'relative',
    zIndex: 2,
    lineHeight: '1.6 !important',
    textAlign: 'center',
    '& strong': {
      color: '#FFC614 !important',
      fontWeight: '700 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '1.2rem !important',
      maxWidth: '750px !important',
      lineHeight: '1.6 !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
      maxWidth: '650px !important',
      lineHeight: '1.6 !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      maxWidth: '100% !important',
      lineHeight: '1.5 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      lineHeight: '1.5 !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      lineHeight: '1.5 !important',
    },
  },
  ctaContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    '@media (max-width: 600px)': {
      padding: '0 1rem',
    },
    '@media (max-width: 480px)': {
      padding: '0 0.5rem',
    },
    '@media (max-width: 375px)': {
      padding: '0',
    },
  },
  finalCTA: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    padding: '1.2rem 3rem !important',
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    borderRadius: '60px !important',
    textTransform: 'none !important',
    boxShadow: '0 15px 40px rgba(255, 198, 20, 0.4) !important',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important',
    position: 'relative',
    zIndex: 2,
    border: 'none !important',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: '#FFD23F !important',
      transform: 'translateY(-5px) scale(1.05) !important',
      boxShadow: '0 20px 50px rgba(255, 198, 20, 0.6) !important',
    },
    '&:active': {
      transform: 'translateY(-2px) scale(1.02) !important',
    },
    '@media (max-width: 1200px)': {
      padding: '1.1rem 2.8rem !important',
      fontSize: '1.3rem !important',
    },
    '@media (max-width: 960px)': {
      padding: '1rem 2.5rem !important',
      fontSize: '1.2rem !important',
    },
    '@media (max-width: 600px)': {
      padding: '0.9rem 2rem !important',
      fontSize: '1.1rem !important',
      borderRadius: '50px !important',
      whiteSpace: 'normal',
      textAlign: 'center',
      width: '100%',
      maxWidth: '300px',
    },
    '@media (max-width: 480px)': {
      padding: '0.8rem 1.8rem !important',
      fontSize: '1rem !important',
      borderRadius: '40px !important',
      maxWidth: '280px',
    },
    '@media (max-width: 375px)': {
      padding: '0.7rem 1.5rem !important',
      fontSize: '0.9rem !important',
      borderRadius: '35px !important',
      maxWidth: '260px',
    },
  },
  ctaIcon: {
    fontSize: '1.5rem !important',
    marginLeft: '0.3rem !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.4rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.3rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1rem !important',
    },
  },
  // Background decoration
  backgroundDecoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    zIndex: 1,
    opacity: 0.5,
  },
  // Floating elements for visual enhancement
  floatingElement: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(255, 198, 20, 0.1)',
    animation: '$float 6s ease-in-out infinite',
    zIndex: 1,
    '&:nth-child(1)': {
      width: '80px',
      height: '80px',
      top: '10%',
      left: '10%',
      animationDelay: '0s',
    },
    '&:nth-child(2)': {
      width: '60px',
      height: '60px',
      top: '20%',
      right: '15%',
      animationDelay: '2s',
    },
    '&:nth-child(3)': {
      width: '100px',
      height: '100px',
      bottom: '15%',
      left: '5%',
      animationDelay: '4s',
    },
    '&:nth-child(4)': {
      width: '70px',
      height: '70px',
      bottom: '25%',
      right: '8%',
      animationDelay: '1s',
    },
    '@media (max-width: 960px)': {
      '&:nth-child(1)': {
        width: '60px',
        height: '60px',
      },
      '&:nth-child(2)': {
        width: '45px',
        height: '45px',
      },
      '&:nth-child(3)': {
        width: '75px',
        height: '75px',
      },
      '&:nth-child(4)': {
        width: '50px',
        height: '50px',
      },
    },
    '@media (max-width: 600px)': {
      display: 'none', // Hide on mobile for cleaner look
    },
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0) rotate(0deg)',
      opacity: 0.7,
    },
    '50%': {
      transform: 'translateY(-20px) rotate(180deg)',
      opacity: 1,
    },
  },
}));

const SmartResumeSection = ({ handleCTAClick }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    if (handleCTAClick) {
      handleCTAClick();
    } else {
      window.location.href = 'https://resume.gigaversity.in/';
    }
  };

  return (
    <Box className={classes.finalSection}>
      {/* Background decorations */}
      <Box className={classes.backgroundDecoration} />
      <Box className={classes.floatingElement} />
      <Box className={classes.floatingElement} />
      <Box className={classes.floatingElement} />
      <Box className={classes.floatingElement} />
      
      <Container maxWidth={false} className={classes.container}>
        <Typography variant="h2" className={classes.finalTitle}>
          Giga Resume - The smarter way to build resume in <span>2025</span>
        </Typography>
        
        <Typography variant="body1" className={classes.finalDescription}>
          <strong>Gigaversity Resume Builder</strong> isn't just another <strong>free resume maker</strong> — it's your launchpad to success. 
          With <strong>Gen AI suggestions</strong>, <strong>project-building guidance</strong>, and <strong>ATS-optimized templates</strong>, 
          you're not just creating a resume — you're building your future.
        </Typography>
        
        <Box className={classes.ctaContainer}>
          <Button 
            variant="contained" 
            className={classes.finalCTA}
            onClick={() => window.location.href = 'https://resume.gigaversity.in/'}
            // onClick={handleClick}
            endIcon={<LaunchIcon className={classes.ctaIcon} />}
          >
            Start Building Your Future Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SmartResumeSection;