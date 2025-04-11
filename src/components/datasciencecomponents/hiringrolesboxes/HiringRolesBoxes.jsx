import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BarChartIcon from '@mui/icons-material/BarChart';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import StorageIcon from '@mui/icons-material/Storage';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';

const useStyles = makeStyles({
  section: {
    padding: '80px 40px',
    background: 'linear-gradient(135deg, #f7faff 0%, #f0f6ff 100%)',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 768px)': {
      padding: '60px 20px',
    },
  },
  decorativeCircle: {
    position: 'absolute',
    borderRadius: '50%',
    zIndex: 1,
  },
  circle1: {
    width: '300px',
    height: '300px',
    top: '-150px',
    right: '-100px',
    background: 'radial-gradient(circle, rgba(42, 43, 106, 0.08) 0%, rgba(42, 43, 106, 0) 70%)',
  },
  circle2: {
    width: '250px',
    height: '250px',
    bottom: '-120px',
    left: '-80px',
    background: 'radial-gradient(circle, rgba(255, 198, 20, 0.1) 0%, rgba(255, 198, 20, 0) 70%)',
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1360px',
    margin: '0 auto',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '50px',
    position: 'relative',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '16px !important',
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
  },
  highlightText: {
    color: '#FFC614 !important',
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#555 !important',
    maxWidth: '850px',
    margin: '0 auto !important',
    lineHeight: '1.8 !important',
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '95%',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    },
  },
  rolesWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    gap: '15px',
    width: '100%',
    overflowX: 'auto',
    paddingBottom: '15px',
    '&::-webkit-scrollbar': {
      height: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(42, 43, 106, 0.2)',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      borderRadius: '10px',
    },
    '@media (max-width: 1200px)': {
      paddingBottom: '20px',
    },
  },
  roleBox: {
    width: '200px',
    height: '180px',
    flexShrink: 0,
    borderRadius: '20px',
    background: 'white',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    transform: 'translateY(0)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    '@media (max-width: 1200px)': {
      width: '170px',
      height: '170px',
    },
    '@media (max-width: 600px)': {
      width: '150px',
      height: '150px',
      padding: '15px',
    },
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
      '& $iconContainer': {
        transform: 'scale(1.05)',
      },
    },
  },
  iconContainer: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '12px',
    backgroundImage: 'linear-gradient(135deg, #2A2B6A 0%, #3f4098 100%)',
    color: 'white',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(42, 43, 106, 0.2)',
    '@media (max-width: 600px)': {
      width: '50px',
      height: '50px',
    },
    '@media (max-width: 480px)': {
      width: '45px',
      height: '45px',
    },
  },
  roleIcon: {
    fontSize: '28px !important',
    '@media (max-width: 600px)': {
      fontSize: '24px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '20px !important',
    },
  },
  roleTitle: {
    fontSize: '1.1rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
    },
  },
  fadeIn: {
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const DataScienceRolesBoxes = () => {
  const classes = useStyles();
  const [visibleItems, setVisibleItems] = useState([]);

  // Animation effect for boxes
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Extract index from the data attribute
            const index = parseInt(entry.target.dataset.index);
            if (!isNaN(index) && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Observe all role boxes
    const elements = document.querySelectorAll('[data-role-box]');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, [visibleItems]);

  // Data for roles with Material-UI icons
  const roles = [
    {
      title: 'Data Analyst',
      icon: <AnalyticsIcon className={classes.roleIcon} />,
    },
    {
      title: 'Machine Learning Intern',
      icon: <PsychologyIcon className={classes.roleIcon} />,
    },
    {
      title: 'Business Analyst',
      icon: <BarChartIcon className={classes.roleIcon} />,
    },
    {
      title: 'AI Associate',
      icon: <SmartToyIcon className={classes.roleIcon} />,
    },
    {
      title: 'Data Engineer (Entry Level)',
      icon: <StorageIcon className={classes.roleIcon} />,
    },
    {
      title: 'Data Science Intern',
      icon: <DataThresholdingIcon className={classes.roleIcon} />,
    }
  ];

  return (
    <Box className={classes.section}>
      {/* Decorative elements */}
      <Box className={`${classes.decorativeCircle} ${classes.circle1}`} />
      <Box className={`${classes.decorativeCircle} ${classes.circle2}`} />

      <Box className={classes.contentWrapper}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            Get Trained For The Roles <span className={classes.highlightText}>Companies Are Hiring For!</span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            In Just 30 Days, Launch Your Career In One Of Today's Most Sought-After Fields. Our Data Science 
            Program Connects You Directly With Hiring Partners Looking For Fresh Talent – All For Less Than 
            Your Monthly Data Recharge.
          </Typography>
        </Box>

        <Box className={classes.rolesWrapper}>
          {roles.map((role, index) => (
            <Box
              key={index}
              className={`${classes.roleBox} ${classes.fadeIn} ${visibleItems.includes(index) ? classes.visible : ''}`}
              sx={{ transitionDelay: `${index * 0.1}s` }}
              data-role-box
              data-index={index}
            >
              <Box className={classes.iconContainer}>
                {role.icon}
              </Box>
              <Typography className={classes.roleTitle}>
                {role.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default DataScienceRolesBoxes;