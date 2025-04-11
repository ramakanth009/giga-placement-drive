import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  curriculumSection: {
    padding: '50px 200px',
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  '@keyframes slideDown': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@keyframes slideInLeft': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-30px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  '@keyframes slideInRight': {
    '0%': {
      opacity: 0,
      transform: 'translateX(30px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  '@keyframes slideUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },

  titleContainer: {
    textAlign: 'center',
    marginBottom: '40px',
    animation: '$slideDown 0.8s ease-out',
  },
  title: {
    fontSize: '2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '8px !important',
    '& span': {
      color: '#FFC614 !important',
    },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    opacity: 0,
    transform: 'translateY(20px)',
    animation: '$fadeIn 0.8s ease-out forwards, $slideUp 0.8s ease-out forwards',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
    },
  },
  weekItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '14px',
    opacity: 0,
    transform: 'translateX(-20px)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateX(5px)',
    },
  },
  weekBox: {
    borderRadius: '6px',
    padding: '14px 20px',
    fontWeight: 'bold',
    fontSize: '1rem',
    width: '100%',
    marginBottom: '8px',
    transition: 'all 0.3s ease',
  },
  activeWeekBox: {
    backgroundColor: '#06183D',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1b2d57',
    },
  },
  inactiveWeekBox: {
    backgroundColor: 'white',
    color: '#555',
    border: '1px solid #ddd',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
  skillItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    opacity: 0,
    transform: 'translateX(20px)',
    transition: 'all 0.3s ease-out',
  },
  skillIcon: {
    color: '#FFC614',
    marginRight: '16px',
    fontSize: '16px',
  },
  skillText: {
    fontSize: '1rem',
    color: '#555',
    fontWeight: '500',
  },
  weeksColumn: {
    flex: '0 0 50%',
    '@media (max-width: 960px)': {
      flex: '0 0 100%',
      marginBottom: '30px',
    },
  },
  skillsColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: '0 0 50%',
    paddingLeft: '40px',
    '@media (max-width: 960px)': {
      flex: '0 0 100%',
      paddingLeft: '0',
    },
  },
});

const Curriculum = ({ title, weeks, skills }) => {
  const classes = useStyles();
  const [activeWeek, setActiveWeek] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      const weekItems = document.querySelectorAll(`.${classes.weekItem}`);
      weekItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, index * 100);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleWeekHover = (index) => {
    setActiveWeek(index);
    const skillItems = document.querySelectorAll(`.${classes.skillItem}`);
    skillItems.forEach((item, idx) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(20px)';
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }, idx * 100);
    });
  };

  return (
    <Box className={classes.curriculumSection}>
      <Box className={classes.titleContainer}>
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
      </Box>

      <Box className={classes.contentContainer} ref={contentRef}>
        {/* Weeks Column */}
        <Box className={classes.weeksColumn}>
          {weeks.map((week, index) => (
            <Box 
              key={index} 
              className={classes.weekItem} 
              onMouseEnter={() => handleWeekHover(index)}
            >
              <Box 
                className={`${classes.weekBox} ${
                  activeWeek === index ? classes.activeWeekBox : classes.inactiveWeekBox
                }`}
              >
                {week}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Skills Column */}
        <Box className={classes.skillsColumn}>
          {skills[activeWeek].map((skill, index) => (
            <Box 
              key={index} 
              className={classes.skillItem}
            >
              <Typography variant="body1" className={classes.skillText} sx={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ 
                  color: '#FFC614', 
                  marginRight: '16px', 
                  fontSize: '24px',
                  lineHeight: 1 
                }}>✦</span>
                {skill}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Curriculum;