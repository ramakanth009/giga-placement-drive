import React, { useState } from 'react';
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
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
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
  iconContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#ADAEF64A',
    },
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
    transition: 'color 0.3s ease',
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
    transition: 'color 0.3s ease',
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
  }
});

const HighlightCard = ({ icon, title }) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box 
      className={classes.highlightCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box className={classes.iconContainer}>
        <Box className={classes.icon}>
          {React.cloneElement(icon, { style: { color: isHovered ? '#2A2B6A' : 'white' } })}
        </Box>
      </Box>
      <Typography className={classes.title} style={{ color: isHovered ? '#2A2B6A' : 'white' }}>
        {title}
      </Typography>
    </Box>
  );
};

export default HighlightCard;