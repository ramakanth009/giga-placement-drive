// src/components/common/fulltime/programhighlights/HighlightCard.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  highlightCard: {
    width: '240px',
    height: '300px',
    borderRadius: '140px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.8s ease',
    position: 'relative',
    overflow: 'hidden',
    '& $iconContainer': {
      backgroundColor: '#ADAEF64A',
    },
    '@media (max-width: 1200px)': {
      width: '230px',
      height: '290px',
      padding: '18px',
    },
    '@media (max-width: 960px)': {
      width: '220px',
      height: '280px',
      padding: '16px',
    },
    '@media (max-width: 600px)': {
      width: '200px',
      height: '260px',
      padding: '15px',
    },
    '@media (max-width: 480px)': {
      width: '180px',
      height: '230px',
      padding: '12px',
    },
    '@media (max-width: 375px)': {
      width: '160px',
      height: '210px',
      padding: '10px',
    },
  },
  activeCard: {
    transform: 'translateY(-10px) scale(1.05)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 15px 35px rgba(42, 43, 106, 0.3)',
    '& $title': {
      color: '#2A2B6A !important',
    },
    '& $iconContainer': {
      backgroundColor: '#2A2B6A',
      transform: 'scale(1.1) rotate(5deg)',
    },
    '& $icon': {
      color: 'white !important',
    },
    '& $ripple': {
      transform: 'scale(15)',
      opacity: 0,
    },
  },
  iconContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    transition: 'background-color 0.8s ease, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      width: '75px',
      height: '75px',
      marginBottom: '18px',
    },
    '@media (max-width: 960px)': {
      width: '70px',
      height: '70px',
      marginBottom: '16px',
    },
    '@media (max-width: 600px)': {
      width: '65px',
      height: '65px',
      marginBottom: '15px',
    },
    '@media (max-width: 480px)': {
      width: '60px',
      height: '60px',
      marginBottom: '12px',
    },
    '@media (max-width: 375px)': {
      width: '55px',
      height: '55px',
      marginBottom: '10px',
    },
  },
  icon: {
    transform: 'scale(1.5)',
    color: 'white',
    transition: 'color 0.8s ease',
    '@media (max-width: 1200px)': {
      transform: 'scale(1.45)',
    },
    '@media (max-width: 960px)': {
      transform: 'scale(1.4)',
    },
    '@media (max-width: 600px)': {
      transform: 'scale(1.35)',
    },
    '@media (max-width: 480px)': {
      transform: 'scale(1.3)',
    },
    '@media (max-width: 375px)': {
      transform: 'scale(1.25)',
    },
  },
  title: {
    color: 'white',
    fontSize: '1rem !important',
    fontWeight: '600 !important',
    textAlign: 'center',
    lineHeight: '1.4 !important',
    maxWidth: '220px',
    transition: 'color 0.8s ease',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      fontSize: '0.95rem !important',
      maxWidth: '210px',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.9rem !important',
      maxWidth: '200px',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
      maxWidth: '180px',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem !important',
      maxWidth: '160px',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem !important',
      maxWidth: '140px',
    },
  },
  ripple: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'rgba(42, 43, 106, 0.2)',
    transform: 'translate(-50%, -50%) scale(0)',
    opacity: 1,
    transition: 'transform 1.5s ease-out, opacity 1.5s ease-out',
    zIndex: 1,
  },
  // Animation keyframes
  '@keyframes pulse': {
    '0%': {
      boxShadow: '0 0 0 0 rgba(42, 43, 106, 0.4)',
    },
    '70%': {
      boxShadow: '0 0 0 15px rgba(42, 43, 106, 0)',
    },
    '100%': {
      boxShadow: '0 0 0 0 rgba(42, 43, 106, 0)',
    },
  },
  '@keyframes rotateIcon': {
    '0%': {
      transform: 'scale(1.5) rotate(0deg)',
    },
    '50%': {
      transform: 'scale(1.8) rotate(180deg)',
    },
    '100%': {
      transform: 'scale(1.5) rotate(360deg)',
    },
  },
  pulseAnimation: {
    animation: '$pulse 2s infinite',
  },
});

const HighlightCard = ({ icon, title, isActive }) => {
  const classes = useStyles();

  return (
    <Box 
      className={`${classes.highlightCard} ${isActive ? classes.activeCard : ''} ${isActive ? classes.pulseAnimation : ''}`}
    >
      <Box className={classes.iconContainer}>
        <Box className={classes.icon}>
          {React.cloneElement(icon, { style: { color: isActive ? 'white' : 'white' } })}
        </Box>
      </Box>
      <Typography className={classes.title}>
        {title}
      </Typography>
      <Box className={classes.ripple}></Box>
    </Box>
  );
};

export default HighlightCard;