// src/components/background/Background.jsx
import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  backgroundElement: {
    position: 'absolute',
    width: 767,
    height: 566 ,
    top: -314,
    right: 92,
    left: 'auto',
    background: '#BCE1FF',
    zIndex: -1,
    borderRadius:"50%",
    backdropFilter: 'blur(250px)',
  }
});

const Background = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.backgroundElement} />
  );
};

export default Background;