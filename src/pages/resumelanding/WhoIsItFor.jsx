// src/components/landing/WhoIsItFor.jsx
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { CheckCircle, Person, Work, TrendingUp, Code } from '@mui/icons-material';
import makeStylesWithTheme from '../../styles/makeStylesAdapter';

const useStyles = makeStylesWithTheme((theme) => ({
  audienceSection: {
    background: '#fff',
    padding: '4rem 1.5rem',
    position: 'relative',
    overflow: 'hidden',
    // Add SVG grid background as ::before
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      background: `url("data:image/svg+xml,%3Csvg width='800' height='600' viewBox='0 0 800 600' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L100 80L200 40L300 120L400 60L500 140L600 100L700 180L800 120' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M0 200L100 120L200 180L300 100L400 160L500 80L600 140L700 60L800 100' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M0 400L100 320L200 380L300 300L400 360L500 280L600 340L700 260L800 300' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M0 600L100 520L200 580L300 500L400 560L500 480L600 540L700 460L800 500' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M0 0L0 200L0 400L0 600' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M100 80L100 120L100 320L100 520' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M200 40L200 180L200 380L200 580' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M300 120L300 100L300 300L300 500' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M400 60L400 160L400 360L400 560' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M500 140L500 80L500 280L500 480' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M600 100L600 140L600 340L600 540' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M700 180L700 60L700 260L700 460' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M800 120L800 100L800 300L800 500' stroke='%23F3F3F3' stroke-width='1'/%3E%3C/svg%3E") repeat`,
      backgroundSize: 'cover',
      pointerEvents: 'none',
      opacity: 1,
    },
    zIndex: 1,
    '@media (max-width: 1200px)': {
      padding: '3.5rem 1.2rem',
    },
    '@media (max-width: 960px)': {
      padding: '3rem 1rem',
    },
    '@media (max-width: 768px)': {
      padding: '2.5rem 0.8rem',
    },
    '@media (max-width: 600px)': {
      padding: '2rem 0.8rem',
    },
    '@media (max-width: 480px)': {
      padding: '1.8rem 0.5rem',
    },
    '@media (max-width: 375px)': {
      padding: '1.5rem 0.3rem',
    },
  },
  sectionTitle: {
    fontSize: '2.2rem !important',
    fontWeight: '800 !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '2.5rem !important',
    background: '#fff',
    borderRadius: '18px',
    display: 'inline-block',
    padding: '16px 32px',
    position: 'relative',
    zIndex: 2,
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    border: '1px solid #f0f0f0',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2rem !important',
      padding: '14px 28px',
      marginBottom: '2rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
      marginBottom: '1.8rem !important',
      padding: '12px 24px',
      borderRadius: '15px',
    },
    '@media (max-width: 768px)': {
      fontSize: '1.6rem !important',
      padding: '10px 20px',
      borderRadius: '12px',
      marginBottom: '1.5rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.4rem !important',
      padding: '8px 16px',
      marginBottom: '1.2rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.3rem !important',
      padding: '6px 12px',
      marginBottom: '1rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.2rem !important',
      padding: '6px 10px',
      borderRadius: '8px',
      marginBottom: '0.8rem !important',
    },
  },

  // WHEEL DESIGN (Desktop/Tablet)
  wheelContainer: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    margin: '0 auto',
    zIndex: 2,
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    display: 'block',
    '@media (max-width: 1200px)': {
      paddingTop: '1.2rem',
      paddingBottom: '1.2rem',
    },
    '@media (max-width: 960px)': {
      paddingTop: '1rem',
      paddingBottom: '1rem',
    },
    '@media (max-width: 768px)': {
      display: 'none', // Hide wheel on mobile
    },
  },
  wheel: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.8rem',
    flexWrap: 'nowrap',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '10%',
      right: '10%',
      top: '50%',
      height: '3px',
      background: '#FFC614',
      zIndex: 1,
      transform: 'translateY(-50%)',
    },
    '@media (max-width: 1200px)': {
      gap: '1.5rem',
    },
    '@media (max-width: 960px)': {
      gap: '1.2rem',
      '&::before': {
        left: '5%',
        right: '5%',
      },
    },
  },
  wheelItem: {
    position: 'relative',
    width: 160,
    height: 160,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
    borderRadius: '50%',
    boxShadow: '0 4px 18px 0 rgba(42,43,106,0.10)',
    border: '3px solid #FFC614',
    transition: 'transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s',
    cursor: 'pointer',
    padding: '14px',
    zIndex: 2,
    '&:hover': {
      transform: 'scale(1.08)',
      boxShadow: '0 8px 32px 0 #ffc61455, 0 0 0 4px #fff',
      borderColor: '#2A2B6A',
    },
    '@media (max-width: 1200px)': {
      width: 140,
      height: 140,
      padding: '12px',
    },
    '@media (max-width: 960px)': {
      width: 120,
      height: 120,
      padding: '10px',
    },
  },
  wheelText: {
    fontSize: '0.9rem',
    color: '#2A2B6A',
    fontWeight: 600,
    textAlign: 'center',
    lineHeight: 1.3,
    zIndex: 3,
    wordBreak: 'break-word',
    maxWidth: '100%',
    '@media (max-width: 1200px)': {
      fontSize: '0.85rem',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.8rem',
    },
  },
  wheelCenter: {
    position: 'relative',
    width: 140,
    height: 140,
    background: 'radial-gradient(circle at 60% 40%, #FFC614 80%, #FFD95C 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
    boxShadow: '0 8px 32px 0 rgba(42,43,106,0.13)',
    border: '4px solid #fff',
    transform: 'none',
    left: 'auto',
    top: 'auto',
    '@media (max-width: 1200px)': {
      width: 120,
      height: 120,
    },
    '@media (max-width: 960px)': {
      width: 110,
      height: 110,
    },
  },
  wheelCenterText: {
    color: '#2A2B6A',
    fontWeight: 700,
    fontSize: '1.1rem',
    textAlign: 'center',
    '@media (max-width: 1200px)': {
      fontSize: '1rem',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.9rem',
    },
  },

  // POINTS DESIGN (Mobile)
  pointsContainer: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    '@media (max-width: 600px)': {
      padding: '0 0.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '0 0.3rem',
    },
    '@media (max-width: 375px)': {
      padding: '0 0.1rem',
    },
  },
  pointsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    '@media (max-width: 600px)': {
      gap: '1rem',
    },
    '@media (max-width: 480px)': {
      gap: '0.8rem',
    },
    '@media (max-width: 375px)': {
      gap: '0.6rem',
    },
  },
  pointItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1.2rem',
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(42, 43, 106, 0.08)',
    border: '2px solid #f0f2ff',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: 'linear-gradient(90deg, #FFC614, #2A2B6A)',
      transform: 'translateX(-100%)',
      transition: 'transform 0.3s ease',
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 30px rgba(42, 43, 106, 0.15)',
      border: '2px solid #FFC614',
      '&::before': {
        transform: 'translateX(0)',
      },
      '& $pointIcon': {
        transform: 'scale(1.1) rotate(5deg)',
        background: 'linear-gradient(135deg, #FFC614, #2A2B6A)',
      },
    },
    '&.active': {
      border: '2px solid #FFC614',
      boxShadow: '0 8px 30px rgba(255, 198, 20, 0.3)',
      '&::before': {
        transform: 'translateX(0)',
      },
      '& $pointIcon': {
        background: 'linear-gradient(135deg, #FFC614, #2A2B6A)',
        transform: 'scale(1.05)',
      },
    },
    '@media (max-width: 600px)': {
      padding: '1rem',
      gap: '0.8rem',
      borderRadius: '12px',
    },
    '@media (max-width: 480px)': {
      padding: '0.8rem',
      gap: '0.6rem',
      borderRadius: '10px',
    },
    '@media (max-width: 375px)': {
      padding: '0.6rem',
      gap: '0.5rem',
      borderRadius: '8px',
    },
  },
  pointIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #2A2B6A, #4a4d9e)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '1.5rem',
    flexShrink: 0,
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    '@media (max-width: 600px)': {
      width: '40px',
      height: '40px',
      fontSize: '1.3rem',
      borderRadius: '10px',
    },
    '@media (max-width: 480px)': {
      width: '36px',
      height: '36px',
      fontSize: '1.1rem',
      borderRadius: '8px',
    },
    '@media (max-width: 375px)': {
      width: '32px',
      height: '32px',
      fontSize: '1rem',
      borderRadius: '6px',
    },
  },
  pointContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  pointTitle: {
    fontSize: '1.1rem !important',
    fontWeight: '700 !important',
    color: '#2A2B6A !important',
    marginBottom: '0.3rem !important',
    lineHeight: '1.3 !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '0.2rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
    },
  },
  pointDescription: {
    fontSize: '0.85rem !important',
    color: '#666 !important',
    lineHeight: '1.4 !important',
    margin: '0 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.75rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.7rem !important',
    },
  },
  mobileBrandContainer: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '2rem',
      marginBottom: '1rem',
    },
    '@media (max-width: 600px)': {
      marginTop: '1.5rem',
      marginBottom: '0.8rem',
      zIndex: 0,
    },
    '@media (max-width: 480px)': {
      marginTop: '1.2rem',
      marginBottom: '0.6rem',
      zIndex: 0,
    },
    '@media (max-width: 375px)': {
      marginTop: '1rem',
      marginBottom: '0.5rem',
      zIndex: 0,
    },
  },
  mobileBrand: {
    background: 'linear-gradient(135deg, #FFC614, #FFD95C)',
    borderRadius: '50px',
    padding: '12px 24px',
    boxShadow: '0 8px 25px rgba(255, 198, 20, 0.3)',
    '@media (max-width: 600px)': {
      padding: '10px 20px',
      borderRadius: '40px',
    },
    '@media (max-width: 480px)': {
      padding: '8px 16px',
      borderRadius: '30px',
    },
    '@media (max-width: 375px)': {
      padding: '6px 12px',
      borderRadius: '25px',
    },
  },
  mobileBrandText: {
    color: '#2A2B6A',
    fontWeight: '700 !important',
    fontSize: '1rem !important',
    textAlign: 'center',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem !important',
    },
  },
}));

const WhoIsItFor = () => {
  const classes = useStyles();
  const wheelRef = useRef();
  const [activeIdx, setActiveIdx] = React.useState(0);

  const targetAudience = [
    {
      text: "Students and freshers entering the job market",
      title: "Students & Freshers",
      description: "Perfect for new graduates and career starters",
      icon: <Person />
    },
    {
      text: "Working professionals upgrading roles or switching careers",
      title: "Career Switchers",
      description: "Ideal for professionals changing career paths",
      icon: <Work />
    },
    {
      text: "Individuals with career gaps needing impactful resumes",
      title: "Career Gap Recovery",
      description: "Get back into the workforce with confidence",
      icon: <TrendingUp />
    },
    {
      text: "Tech enthusiasts wanting to showcase Gen AI & project skills",
      title: "Tech Enthusiasts",
      description: "Showcase your AI and technical project skills",
      icon: <Code />
    }
  ];

  // Cycle highlight effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % targetAudience.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [targetAudience.length]);

  return (
    <Box className={classes.audienceSection}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" mb={4}>
          <Typography variant="h2" className={classes.sectionTitle}>
            Who is it <span>for?</span>
          </Typography>
        </Box>
        
        {/* WHEEL DESIGN FOR DESKTOP/TABLET */}
        <Box className={classes.wheelContainer}>
          <Box className={classes.wheel} ref={wheelRef}>
            {targetAudience.slice(0, 2).map((audience, idx) => (
              <Box
                key={idx}
                className={classes.wheelItem}
                style={activeIdx === idx ? {
                  transform: 'scale(1.08)',
                  boxShadow: '0 8px 32px 0 #ffc61455, 0 0 0 4px #fff',
                  borderColor: '#2A2B6A'
                } : {}}
              >
                <Typography className={classes.wheelText}>{audience.text}</Typography>
              </Box>
            ))}
            <Box className={classes.wheelCenter}>
              <Typography className={classes.wheelCenterText}>
                Giga<br />Resume
              </Typography>
            </Box>
            {targetAudience.slice(2, 4).map((audience, idx) => (
              <Box
                key={idx + 2}
                className={classes.wheelItem}
                style={activeIdx === idx + 2 ? {
                  transform: 'scale(1.08)',
                  boxShadow: '0 8px 32px 0 #ffc61455, 0 0 0 4px #fff',
                  borderColor: '#2A2B6A'
                } : {}}
              >
                <Typography className={classes.wheelText}>{audience.text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* POINTS DESIGN FOR MOBILE */}
        <Box className={classes.pointsContainer}>
          <Box className={classes.pointsList}>
            {targetAudience.map((audience, idx) => (
              <Box
                key={idx}
                className={`${classes.pointItem} ${activeIdx === idx ? 'active' : ''}`}
              >
                <Box className={classes.pointIcon}>
                  {audience.icon}
                </Box>
                <Box className={classes.pointContent}>
                  <Typography className={classes.pointTitle}>
                    {audience.title}
                  </Typography>
                  <Typography className={classes.pointDescription}>
                    {audience.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          
          <Box className={classes.mobileBrandContainer}>
            <Box className={classes.mobileBrand}>
              <Typography className={classes.mobileBrandText}>
                Giga Resume Builder
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhoIsItFor;