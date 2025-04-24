// src/components/common/curriculum/Curriculum.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles({
  curriculumSection: {
    padding: '45px 0',
    backgroundColor: '#f8f9fc',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
    padding: '0 20px',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '60px',
    position: 'relative',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    position: 'relative',
    display: 'inline-block',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: '#FFC614',
      borderRadius: '2px',
    },
    '& span': {
      color: '#FFC614 !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.2rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.8rem !important',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#555 !important',
    maxWidth: '800px',
    margin: '30px auto 0 !important',
    "@media (max-width: 600px)": {
      fontSize: '1rem !important',
    },
  },
  contentContainer: {
    display: 'flex',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
    },
  },
  weeksPanel: {
    width: '40%',
    backgroundColor: '#2A2B6A',
    padding: '40px 0',
    '@media (max-width: 960px)': {
      width: '100%',
      padding: '30px 0',
    },
  },
  weeksList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '0 30px',
    '@media (max-width: 600px)': {
      padding: '0 20px',
      gap: '10px',
    },
  },
  weekItem: {
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    transform: 'translateX(0)',
    padding: '18px 25px',
    borderRadius: '12px',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateX(5px)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      '& $weekIconContainer': {
        backgroundColor: '#FFC614',
        '& svg': {
          color: '#2A2B6A',
        },
      },
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '0',
      top: '0',
      height: '100%',
      width: '4px',
      backgroundColor: '#FFC614',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '@media (max-width: 600px)': {
      padding: '15px 20px',
    },
  },
  activeWeekItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateX(5px)',
    '&::before': {
      opacity: 1,
    },
  },
  weekIconContainer: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
    transition: 'all 0.3s ease',
    flexShrink: 0,
    '& svg': {
      fontSize: '20px',
      color: 'white',
      transition: 'color 0.3s ease',
    },
    '@media (max-width: 600px)': {
      width: '36px',
      height: '36px',
      marginRight: '12px',
      '& svg': {
        fontSize: '18px',
      },
    },
  },
  activeWeekIconContainer: {
    backgroundColor: '#FFC614',
    '& svg': {
      color: '#2A2B6A',
    },
  },
  weekTitle: {
    color: 'white',
    fontWeight: '500',
    fontSize: '1.1rem !important',
    transition: 'all 0.3s ease',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  skillsPanel: {
    width: '60%',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 960px)': {
      width: '100%',
      padding: '30px 20px',
    },
  },
  roleTitle: {
    fontSize: '2rem !important',
    fontWeight: '800 !important',
    color: '#2A2B6A !important',
    marginBottom: '30px !important',
    position: 'relative',
    transition: 'all 0.5s ease',
    transform: 'translateY(0)',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '0',
      width: '60px',
      height: '3px',
      backgroundColor: '#FFC614',
      transition: 'width 0.8s ease',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.7rem !important',
      marginBottom: '25px !important',
    },
  },
  activeTitleUnderline: {
    '&::after': {
      width: '60px',
    },
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  skillItem: {
    display: 'flex',
    alignItems: 'flex-start',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  skillVisible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  skillDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#FFC614',
    marginTop: '8px',
    marginRight: '15px',
    flexShrink: 0,
  },
  skillText: {
    fontSize: '1.05rem !important',
    color: '#444 !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  backgroundElement: {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0.5,
    zIndex: 1,
  },
  skillsBackground: {
    background: 'radial-gradient(circle, rgba(42, 43, 106, 0.03) 0%, rgba(42, 43, 106, 0) 70%)',
    width: '500px',
    height: '500px',
    top: '-250px',
    right: '-200px',
  },
  decorativeDots: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    backgroundImage: 'radial-gradient(#2A2B6A 2px, transparent 2px)',
    backgroundSize: '20px 20px',
    opacity: 0.05,
    zIndex: 1,
    bottom: '5%',
    left: '5%',
  },
  exploreButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
  },
  exploreButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '12px 24px !important',
    borderRadius: '8px !important',
    fontWeight: 'bold !important',
    fontSize: '1rem !important',
    transition: 'all 0.3s ease !important',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: '#1A1B4A !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15) !important',
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
      padding: '10px 20px !important',
      fontSize: '0.9rem !important',
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
});

const Curriculum = ({ title, subtitle, weeks, skills, domain = 'fullstack' }) => {
  const classes = useStyles();
  const [activeWeek, setActiveWeek] = useState(0);
  const [visibleSkills, setVisibleSkills] = useState([]);
  const skillsRef = useRef([]);

  useEffect(() => {
    // Reset skill visibility when active week changes
    setVisibleSkills([]);

    // Animate each skill item with a delay
    const showSkills = () => {
      const currentSkills = skills[activeWeek];
      const delays = currentSkills.map((_, index) => setTimeout(() => {
        setVisibleSkills(prev => [...prev, index]);
      }, 100 + (index * 100)));

      return () => delays.forEach(delay => clearTimeout(delay));
    };

    // Add small delay before starting animation
    const timer = setTimeout(showSkills, 200);
    return () => clearTimeout(timer);
  }, [activeWeek, skills]);

  return (
    <Box className={classes.curriculumSection}>
      <Box className={classes.wrapper}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body1" className={classes.subtitle}>
              {subtitle}
            </Typography>
          )}
        </Box>

        <Box className={classes.contentContainer}>
          {/* Weeks Panel */}
          <Box className={classes.weeksPanel}>
            <Box className={classes.weeksList}>
              {weeks.map((week, index) => (
                <Box 
                  key={index}
                  onClick={() => setActiveWeek(index)}
                  className={`${classes.weekItem} ${activeWeek === index ? classes.activeWeekItem : ''}`}
                >
                  <Box 
                    className={`${classes.weekIconContainer} ${activeWeek === index ? classes.activeWeekIconContainer : ''}`}
                  >
                    {week.icon}
                  </Box>
                  <Typography className={classes.weekTitle}>
                    {week.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Skills Panel */}
          <Box className={classes.skillsPanel}>
            {/* Background elements */}
            <Box 
              className={`${classes.backgroundElement} ${classes.skillsBackground}`} 
            />
            <Box className={classes.decorativeDots} />

            <Typography variant="h3" className={classes.roleTitle}>
              {weeks[activeWeek].title}
            </Typography>

            <Box className={classes.skillsList}>
              {skills[activeWeek].map((skill, index) => (
                <Box 
                  key={index}
                  className={`${classes.skillItem} ${visibleSkills.includes(index) ? classes.skillVisible : ''}`}
                  ref={el => skillsRef.current[index] = el}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <Box className={classes.skillDot} />
                  <Typography className={classes.skillText}>
                    {skill}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box className={classes.exploreButtonContainer}>
          <Button 
            variant="contained" 
            className={classes.exploreButton}
            endIcon={<ArrowForwardIcon />}
          >
            Explore Full Curriculum
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Curriculum;