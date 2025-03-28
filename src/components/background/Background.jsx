// src/components/background/Background.jsx
import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  backgroundContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    overflow: 'hidden',
    background: 'linear-gradient(to right, #ffffff, #e6f2ff)',
  },
  backgroundElement: {
    position: 'absolute',
    width: 767,
    height: 566,
    top: -259,
    right: 92,
    background: '#BCE1FF',
    borderRadius: '50%',
    opacity: 0.7,
    filter: 'blur(100px)',
  },
  // Add another background element for visual interest
  backgroundElementSecondary: {
    position: 'absolute',
    width: 500,
    height: 500,
    bottom: -200,
    left: 92,
    background: '#BCE1FF',
    borderRadius: '50%',
    opacity: 0.4,
    filter: 'blur(120px)',
  }
});

const Background = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.backgroundContainer}>
      <Box className={classes.backgroundElement} />
      {/* <Box className={classes.backgroundElementSecondary} /> */}
    </Box>
  );
};

export default Background;