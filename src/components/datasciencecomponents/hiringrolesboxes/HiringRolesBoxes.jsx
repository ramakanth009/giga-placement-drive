import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    background: 'linear-gradient(to bottom, #f6f9fd, #ffffff)',
    position: 'relative',
    overflow: 'hidden',
  },
  decorativeShape: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(42, 43, 106, 0.05) 0%, rgba(42, 43, 106, 0) 70%)',
    zIndex: 1,
  },
  decorativeShapeTop: {
    top: '-200px',
    right: '-100px',
  },
  decorativeShapeBottom: {
    bottom: '-200px',
    left: '-100px',
    background: 'radial-gradient(circle, rgba(255, 198, 20, 0.05) 0%, rgba(255, 198, 20, 0) 70%)',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '60px',
    position: 'relative',
    zIndex: 2,
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
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
    color: '#666666 !important',
    maxWidth: '900px',
    margin: '0 auto !important',
    lineHeight: '1.8 !important',
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      padding: '0 20px',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    },
  },
  highlight: {
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
  },
  rolesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    width: '100%',
    position: 'relative',
    zIndex: 2,
  },
  roleBox: {
    width: '220px',
    height: '220px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '16px',
    backgroundColor: 'white',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    '&:hover': {
      transform: 'translateY(-15px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      '& $iconContainer': {
        transform: 'scale(1.1)',
        backgroundColor: 'rgba(42, 43, 106, 0.9)',
      },
      '& $roleTitle': {
        color: '#2A2B6A !important',
      },
    },
    '@media (max-width: 960px)': {
      width: '200px',
      height: '200px',
    },
    '@media (max-width: 600px)': {
      width: '160px',
      height: '160px',
      padding: '15px',
    },
    '@media (max-width: 480px)': {
      width: '140px',
      height: '140px',
      padding: '10px',
    },
  },
  iconContainer: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    backgroundColor: '#2A2B6A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    transition: 'all 0.4s ease',
    boxShadow: '0 5px 15px rgba(42, 43, 106, 0.3)',
    '@media (max-width: 600px)': {
      width: '60px',
      height: '60px',
      marginBottom: '15px',
    },
    '@media (max-width: 480px)': {
      width: '50px',
      height: '50px',
      marginBottom: '10px',
    },
  },
  iconText: {
    fontSize: '2rem !important',
    color: 'white',
    '@media (max-width: 600px)': {
      fontSize: '1.7rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.4rem !important',
    },
  },
  roleTitle: {
    fontSize: '1.1rem !important',
    fontWeight: 'bold !important',
    color: '#333 !important',
    textAlign: 'center !important',
    lineHeight: '1.3 !important',
    transition: 'color 0.3s ease',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
    },
  },
  decorativeDots: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    backgroundImage: 'radial-gradient(#2A2B6A 2px, transparent 2px)',
    backgroundSize: '20px 20px',
    opacity: 0.1,
    zIndex: 1,
  },
  dotsTopRight: {
    top: '10%',
    right: '5%',
  },
  dotsBottomLeft: {
    bottom: '10%',
    left: '5%',
  },
  fadeIn: {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
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

  // Data for roles - updated based on the image
  const roles = [
    {
      title: 'Data Analyst',
      icon: '📊',
    },
    {
      title: 'Machine Learning Intern',
      icon: '🧠',
    },
    {
      title: 'Business Analyst',
      icon: '📈',
    },
    {
      title: 'AI Associate',
      icon: '🤖',
    },
    {
      title: 'Data Engineer (Entry Level)',
      icon: '⚙️',
    },
    {
      title: 'Data Science Intern',
      icon: '📊',
    }
  ];

  return (
    <Box className={classes.section}>
      {/* Decorative elements */}
      <Box className={`${classes.decorativeShape} ${classes.decorativeShapeTop}`} />
      <Box className={`${classes.decorativeShape} ${classes.decorativeShapeBottom}`} />
      <Box className={`${classes.decorativeDots} ${classes.dotsTopRight}`} />
      <Box className={`${classes.decorativeDots} ${classes.dotsBottomLeft}`} />

      <Container maxWidth="lg">
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

        <Box className={classes.rolesContainer}>
          {roles.map((role, index) => (
            <Box
              key={index}
              className={`${classes.roleBox} ${classes.fadeIn} ${visibleItems.includes(index) ? classes.visible : ''}`}
              sx={{ transitionDelay: `${index * 0.1}s` }}
              data-role-box
              data-index={index}
            >
              <Box className={classes.iconContainer}>
                <Typography className={classes.iconText}>{role.icon}</Typography>
              </Box>
              <Typography className={classes.roleTitle}>
                {role.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default DataScienceRolesBoxes;