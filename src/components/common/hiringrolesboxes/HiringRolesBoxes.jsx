// src/components/common/hiringrolesboxes/HiringRolesBoxes.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  section: {
    padding: '80px 40px',
    background: props => props.backgroundGradient || 'linear-gradient(to bottom, #f6f9fd, #ffffff)',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 768px)': {
      padding: '60px 20px',
    },
  },
  decorativeShape: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: props => props.decorativeShapeGradient || 'radial-gradient(circle, rgba(42, 43, 106, 0.05) 0%, rgba(42, 43, 106, 0) 70%)',
    zIndex: 1,
  },
  decorativeShapeTop: {
    top: '-200px',
    right: '-100px',
  },
  decorativeShapeBottom: {
    bottom: '-200px',
    left: '-100px',
    background: props => props.decorativeShapeBottomGradient || 'radial-gradient(circle, rgba(255, 198, 20, 0.05) 0%, rgba(255, 198, 20, 0) 70%)',
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
    color: '#666666 !important',
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
  highlight: {
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
  },
  rolesWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    gap: '15px',
    width: '100%',
    overflowX: 'auto',
    paddingBottom: '15px',
    alignItems: 'center', // Ensure all boxes are aligned vertically
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
    height: '220px', // Increased from 200px
    flexShrink: 0,
    borderRadius: '20px',
    background: 'white',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between', // Space between icon and text
    padding: '30px 20px',
    transform: 'translateY(0)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    '@media (max-width: 1200px)': {
      width: '170px',
      height: '210px', // Increased from 190px
      padding: '25px 15px',
    },
    '@media (max-width: 600px)': {
      width: '150px',
      height: '190px', // Increased from 170px
      padding: '20px 15px',
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
    backgroundColor: props => props.iconContainerBgColor || '#2A2B6A',
    background: props => props.iconContainerGradient || undefined,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    transition: 'all 0.4s ease',
    boxShadow: '0 5px 15px rgba(42, 43, 106, 0.3)',
    position: 'relative',
    '& svg': {
      color: 'white !important',
      fontSize: '28px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '@media (max-width: 600px)': {
      width: '50px',
      height: '50px',
      marginBottom: '15px',
      '& svg': {
        fontSize: '24px',
      },
    },
    '@media (max-width: 480px)': {
      width: '45px',
      height: '45px',
      marginBottom: '10px',
      '& svg': {
        fontSize: '20px',
      },
    },
  },
  roleTitle: {
    fontSize: '1.1rem !important',
    fontWeight: 'bold !important',
    color: '#333 !important',
    textAlign: 'center !important',
    lineHeight: '1.3 !important',
    transition: 'color 0.3s ease',
    width: '100%', // Ensure all text containers have same width
    height: '75px', // Increased from 60px
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // Fixing text overflow issues
    whiteSpace: 'normal', // Allow text to wrap
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    // New properties for better text handling
    wordWrap: 'break-word',
    hyphens: 'auto',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      height: '65px', // Increased from 50px
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      height: '60px', // Increased from 45px
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
    transform: 'translateY(30px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const HiringRolesBoxes = ({
  title,
  subtitle,
  highlightedText,
  roles,
  backgroundGradient,
  decorativeShapeGradient,
  decorativeShapeBottomGradient,
  iconContainerBgColor,
  iconContainerGradient
}) => {
  const styleProps = { 
    backgroundGradient, 
    decorativeShapeGradient, 
    decorativeShapeBottomGradient,
    iconContainerBgColor,
    iconContainerGradient
  };
  const classes = useStyles(styleProps);
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

  return (
    <Box className={classes.section}>
      {/* Decorative elements */}
      <Box className={`${classes.decorativeShape} ${classes.decorativeShapeTop}`} />
      <Box className={`${classes.decorativeShape} ${classes.decorativeShapeBottom}`} />
      <Box className={`${classes.decorativeDots} ${classes.dotsTopRight}`} />
      <Box className={`${classes.decorativeDots} ${classes.dotsBottomLeft}`} />

      <Box className={classes.contentWrapper}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            {title} <span className={classes.highlightText}>{highlightedText}</span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            In Just 30 Days, Launch Your Career In One Of Today's Most {subtitle} Fields. Our {subtitle} 
            Program Connects You Directly With Hiring Partners Looking For Fresh Talent – All For 
            Less Than <span className={classes.highlight}>Your Monthly Data Pack</span>.
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
};

export default HiringRolesBoxes;