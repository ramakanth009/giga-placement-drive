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
    "@media (max-width: 1200px)": {
      padding: '40px 0',
      minHeight: 'auto',
    },
    "@media (max-width: 960px)": {
      padding: '35px 0',
    },
    "@media (max-width: 600px)": {
      padding: '30px 0',
    },
    "@media (max-width: 480px)": {
      padding: '25px 0',
    },
    "@media (max-width: 375px)": {
      padding: '20px 0',
    },
  },
  wrapper: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
    padding: '0 20px',
    "@media (max-width: 1200px)": {
      maxWidth: '95%',
    },
    "@media (max-width: 960px)": {
      maxWidth: '96%',
    },
    "@media (max-width: 600px)": {
      maxWidth: '97%',
      padding: '0 15px',
    },
    "@media (max-width: 480px)": {
      maxWidth: '98%',
      padding: '0 12px',
    },
    "@media (max-width: 375px)": {
      maxWidth: '100%',
      padding: '0 10px',
    },
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '60px',
    position: 'relative',
    "@media (max-width: 1200px)": {
      marginBottom: '50px',
    },
    "@media (max-width: 960px)": {
      marginBottom: '45px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '40px',
    },
    "@media (max-width: 480px)": {
      marginBottom: '35px',
    },
    "@media (max-width: 375px)": {
      marginBottom: '30px',
    },
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
    "@media (max-width: 1200px)": {
      fontSize: '2.3rem !important',
      '&::after': {
        width: '75px',
        bottom: '-13px',
      },
    },
    "@media (max-width: 960px)": {
      fontSize: '2.1rem !important',
      '&::after': {
        width: '70px',
        bottom: '-12px',
        height: '3.5px',
      },
    },
    "@media (max-width: 600px)": {
      fontSize: '1.8rem !important',
      '&::after': {
        width: '60px',
        bottom: '-10px',
        height: '3px',
      },
    },
    "@media (max-width: 480px)": {
      fontSize: '1.6rem !important',
      '&::after': {
        width: '50px',
        bottom: '-9px',
      },
    },
    "@media (max-width: 375px)": {
      fontSize: '1.4rem !important',
      '&::after': {
        width: '45px',
        bottom: '-8px',
        height: '2.5px',
      },
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#555 !important',
    maxWidth: '800px',
    margin: '30px auto 0 !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.05rem !important',
      maxWidth: '750px',
      margin: '28px auto 0 !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1rem !important',
      maxWidth: '700px',
      margin: '25px auto 0 !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.95rem !important',
      maxWidth: '95%',
      margin: '22px auto 0 !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.9rem !important',
      margin: '20px auto 0 !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.85rem !important',
      margin: '18px auto 0 !important',
    },
  },
  contentContainer: {
    display: 'flex',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    "@media (max-width: 1200px)": {
      borderRadius: '18px',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
    },
    "@media (max-width: 960px)": {
      flexDirection: 'column',
      borderRadius: '16px',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
    },
    "@media (max-width: 600px)": {
      borderRadius: '14px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    },
    "@media (max-width: 480px)": {
      borderRadius: '12px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    },
    "@media (max-width: 375px)": {
      borderRadius: '10px',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    },
  },
  weeksPanel: {
    width: '40%',
    backgroundColor: '#2A2B6A',
    padding: '40px 0',
    "@media (max-width: 1200px)": {
      width: '40%',
      padding: '35px 0',
    },
    "@media (max-width: 960px)": {
      width: '100%',
      padding: '30px 0',
    },
    "@media (max-width: 600px)": {
      padding: '25px 0',
    },
    "@media (max-width: 480px)": {
      padding: '20px 0',
    },
    "@media (max-width: 375px)": {
      padding: '18px 0',
    },
  },
  weeksList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '0 30px',
    "@media (max-width: 1200px)": {
      gap: '14px',
      padding: '0 25px',
    },
    "@media (max-width: 960px)": {
      gap: '12px',
      padding: '0 22px',
    },
    "@media (max-width: 600px)": {
      gap: '10px',
      padding: '0 20px',
    },
    "@media (max-width: 480px)": {
      gap: '8px',
      padding: '0 15px',
    },
    "@media (max-width: 375px)": {
      gap: '6px',
      padding: '0 12px',
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
    "@media (max-width: 1200px)": {
      padding: '16px 22px',
      borderRadius: '10px',
    },
    "@media (max-width: 960px)": {
      padding: '14px 20px',
    },
    "@media (max-width: 600px)": {
      padding: '12px 18px',
      borderRadius: '8px',
    },
    "@media (max-width: 480px)": {
      padding: '10px 15px',
      '&:hover': {
        transform: 'translateX(3px)',
      },
    },
    "@media (max-width: 375px)": {
      padding: '8px 12px',
      borderRadius: '6px',
      '&:hover': {
        transform: 'translateX(2px)',
      },
      '&::before': {
        width: '3px',
      },
    },
  },
  activeWeekItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateX(5px)',
    '&::before': {
      opacity: 1,
    },
    "@media (max-width: 1200px)": {
      transform: 'translateX(4px)',
    },
    "@media (max-width: 960px)": {
      transform: 'translateX(4px)',
    },
    "@media (max-width: 600px)": {
      transform: 'translateX(3px)',
    },
    "@media (max-width: 480px)": {
      transform: 'translateX(3px)',
    },
    "@media (max-width: 375px)": {
      transform: 'translateX(2px)',
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
    "@media (max-width: 1200px)": {
      width: '38px',
      height: '38px',
      marginRight: '14px',
      '& svg': {
        fontSize: '19px',
      },
    },
    "@media (max-width: 960px)": {
      width: '36px',
      height: '36px',
      marginRight: '13px',
      '& svg': {
        fontSize: '18px',
      },
    },
    "@media (max-width: 600px)": {
      width: '34px',
      height: '34px',
      marginRight: '12px',
      '& svg': {
        fontSize: '17px',
      },
    },
    "@media (max-width: 480px)": {
      width: '32px',
      height: '32px',
      marginRight: '10px',
      '& svg': {
        fontSize: '16px',
      },
    },
    "@media (max-width: 375px)": {
      width: '28px',
      height: '28px',
      marginRight: '8px',
      '& svg': {
        fontSize: '14px',
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
    "@media (max-width: 1200px)": {
      fontSize: '1.05rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.95rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.85rem !important',
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
    "@media (max-width: 1200px)": {
      width: '60%',
      padding: '35px',
    },
    "@media (max-width: 960px)": {
      width: '100%',
      padding: '30px',
    },
    "@media (max-width: 600px)": {
      padding: '25px 20px',
    },
    "@media (max-width: 480px)": {
      padding: '20px 15px',
    },
    "@media (max-width: 375px)": {
      padding: '18px 12px',
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
    "@media (max-width: 1200px)": {
      fontSize: '1.8rem !important',
      marginBottom: '28px !important',
      '&::after': {
        width: '55px',
        bottom: '-9px',
      },
    },
    "@media (max-width: 960px)": {
      fontSize: '1.7rem !important',
      marginBottom: '25px !important',
      '&::after': {
        width: '50px',
        bottom: '-8px',
      },
    },
    "@media (max-width: 600px)": {
      fontSize: '1.5rem !important',
      marginBottom: '22px !important',
      '&::after': {
        width: '45px',
        height: '2.5px',
        bottom: '-7px',
      },
    },
    "@media (max-width: 480px)": {
      fontSize: '1.3rem !important',
      marginBottom: '20px !important',
      '&::after': {
        width: '40px',
        height: '2.5px',
        bottom: '-6px',
      },
    },
    "@media (max-width: 375px)": {
      fontSize: '1.2rem !important',
      marginBottom: '18px !important',
      '&::after': {
        width: '35px',
        height: '2px',
        bottom: '-5px',
      },
    },
  },
  activeTitleUnderline: {
    '&::after': {
      width: '60px',
    },
    "@media (max-width: 1200px)": {
      '&::after': {
        width: '55px',
      },
    },
    "@media (max-width: 960px)": {
      '&::after': {
        width: '50px',
      },
    },
    "@media (max-width: 600px)": {
      '&::after': {
        width: '45px',
      },
    },
    "@media (max-width: 480px)": {
      '&::after': {
        width: '40px',
      },
    },
    "@media (max-width: 375px)": {
      '&::after': {
        width: '35px',
      },
    },
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    "@media (max-width: 1200px)": {
      gap: '15px',
    },
    "@media (max-width: 960px)": {
      gap: '14px',
    },
    "@media (max-width: 600px)": {
      gap: '12px',
    },
    "@media (max-width: 480px)": {
      gap: '10px',
    },
    "@media (max-width: 375px)": {
      gap: '8px',
    },
  },
  skillItem: {
    display: 'flex',
    alignItems: 'flex-start',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    "@media (max-width: 1200px)": {
      transform: 'translateY(18px)',
    },
    "@media (max-width: 960px)": {
      transform: 'translateY(16px)',
    },
    "@media (max-width: 600px)": {
      transform: 'translateY(14px)',
    },
    "@media (max-width: 480px)": {
      transform: 'translateY(12px)',
    },
    "@media (max-width: 375px)": {
      transform: 'translateY(10px)',
    },
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
    "@media (max-width: 1200px)": {
      width: '9px',
      height: '9px',
      marginTop: '7px',
      marginRight: '14px',
    },
    "@media (max-width: 960px)": {
      marginRight: '13px',
    },
    "@media (max-width: 600px)": {
      width: '8px',
      height: '8px',
      marginTop: '6px',
      marginRight: '12px',
    },
    "@media (max-width: 480px)": {
      width: '7px',
      height: '7px',
      marginTop: '6px',
      marginRight: '10px',
    },
    "@media (max-width: 375px)": {
      width: '6px',
      height: '6px',
      marginTop: '5px',
      marginRight: '8px',
    },
  },
  skillText: {
    fontSize: '1.05rem !important',
    color: '#444 !important',
    lineHeight: '1.6 !important',
    "@media (max-width: 1200px)": {
      fontSize: '1rem !important',
      lineHeight: '1.55 !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '0.95rem !important',
      lineHeight: '1.5 !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
      lineHeight: '1.45 !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.85rem !important',
      lineHeight: '1.4 !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.8rem !important',
      lineHeight: '1.35 !important',
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
    "@media (max-width: 1200px)": {
      width: '450px',
      height: '450px',
      top: '-225px',
      right: '-180px',
    },
    "@media (max-width: 960px)": {
      width: '400px',
      height: '400px',
      top: '-200px',
      right: '-160px',
    },
    "@media (max-width: 600px)": {
      width: '350px',
      height: '350px',
      top: '-175px',
      right: '-140px',
    },
    "@media (max-width: 480px)": {
      width: '300px',
      height: '300px',
      top: '-150px',
      right: '-120px',
    },
    "@media (max-width: 375px)": {
      width: '250px',
      height: '250px',
      top: '-125px',
      right: '-100px',
    },
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
    "@media (max-width: 1200px)": {
      width: '180px',
      height: '180px',
      backgroundSize: '18px 18px',
    },
    "@media (max-width: 960px)": {
      width: '160px',
      height: '160px',
      backgroundSize: '16px 16px',
    },
    "@media (max-width: 600px)": {
      width: '140px',
      height: '140px',
      backgroundSize: '14px 14px',
    },
    "@media (max-width: 480px)": {
      width: '120px',
      height: '120px',
      backgroundSize: '12px 12px',
    },
    "@media (max-width: 375px)": {
      width: '100px',
      height: '100px',
      backgroundSize: '10px 10px',
    },
  },
  exploreButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
    "@media (max-width: 1200px)": {
      marginTop: '35px',
    },
    "@media (max-width: 960px)": {
      marginTop: '30px',
    },
    "@media (max-width: 600px)": {
      marginTop: '25px',
    },
    "@media (max-width: 480px)": {
      marginTop: '20px',
    },
    "@media (max-width: 375px)": {
      marginTop: '18px',
    },
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
    "@media (max-width: 1200px)": {
      padding: '11px 22px !important',
      fontSize: '0.95rem !important',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15) !important',
      },
    },
    "@media (max-width: 960px)": {
      padding: '10px 20px !important',
      fontSize: '0.9rem !important',
      borderRadius: '7px !important',
    },
    "@media (max-width: 600px)": {
      padding: '9px 18px !important',
      fontSize: '0.85rem !important',
      borderRadius: '6px !important',
    },
    "@media (max-width: 480px)": {
      padding: '8px 16px !important',
      fontSize: '0.8rem !important',
      '&:hover': {
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15) !important',
      },
    },
    "@media (max-width: 375px)": {
      padding: '7px 14px !important',
      fontSize: '0.75rem !important',
      borderRadius: '5px !important',
      '&:hover': {
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.15) !important',
      },
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
            {title} wow
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