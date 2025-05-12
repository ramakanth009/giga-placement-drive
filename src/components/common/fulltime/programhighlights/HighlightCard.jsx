// src/components/common/fulltime/programhighlights/HighlightCard.jsx
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  highlightCard: {
    width: '280px',
    height: '350px',
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
  },
  iconContainer: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      // transform: 'translateY(-5px)',
      backgroundColor: 'rgba(255, 255, 255, 0.2) !important',
    },
  },
  icon: {
    width: '50px',
    height: '50px',
    color: 'white',
    transition: 'color 0.3s ease',
  },
  title: {
    color: 'white',
    fontSize: '1.3rem !important',
    fontWeight: '600 !important',
    textAlign: 'center',
    lineHeight: '1.4 !important',
    maxWidth: '220px',
    transition: 'color 0.3s ease',
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