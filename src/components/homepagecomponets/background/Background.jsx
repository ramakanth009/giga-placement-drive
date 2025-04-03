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
    animation: '$pulse 15s infinite alternate',
    "@media (max-width: 960px)": {
      width: 600,
      height: 450,
      top: -200,
      right: 50,
    },
    "@media (max-width: 600px)": {
      width: 400,
      height: 300,
      top: -150,
      right: 30,
    },
  },
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
    animation: '$pulse2 18s infinite alternate',
    "@media (max-width: 960px)": {
      width: 400,
      height: 400,
      bottom: -150,
      left: 50,
    },
    "@media (max-width: 600px)": {
      width: 300,
      height: 300,
      bottom: -100,
      left: 30,
    },
  },
  '@keyframes pulse': {
    '0%': {
      opacity: 0.7,
      transform: 'scale(1) translate(0, 0)',
      background: '#BCE1FF',
    },
    '50%': {
      opacity: 0.5,
      transform: 'scale(1.1) translate(-30px, 20px)',
      background: '#C8E6FF',
    },
    '100%': {
      opacity: 0.7,
      transform: 'scale(1.05) translate(20px, 40px)',
      background: '#A0D6FF',
    }
  },
  '@keyframes pulse2': {
    '0%': {
      opacity: 0.4,
      transform: 'scale(1) translate(0, 0)',
      background: '#BCE1FF',
    },
    '33%': {
      opacity: 0.6,
      transform: 'scale(1.15) translate(30px, -20px)',
      background: '#D4EBFF',
    },
    '66%': {
      opacity: 0.35,
      transform: 'scale(0.95) translate(-20px, 10px)',
      background: '#A8DBFF',
    },
    '100%': {
      opacity: 0.5,
      transform: 'scale(1.1) translate(10px, -30px)',
      background: '#C0E2FF',
    }
  },
  heartbeatGradient1: {
    position: 'absolute',
    width: '800px',
    height: '800px',
    top: '15%',
    left: '5%',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(42, 43, 106, 0.2) 0%, rgba(42, 43, 106, 0) 70%)',
    opacity: 0.3,
    filter: 'blur(40px)',
    animation: '$heartbeat 4s infinite ease-in-out',
    "@media (max-width: 960px)": {
      width: '600px',
      height: '600px',
    },
    "@media (max-width: 600px)": {
      width: '400px',
      height: '400px',
      top: '10%',
      left: '3%',
    },
  },
  heartbeatGradient2: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    bottom: '10%',
    right: '5%',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 198, 20, 0.15) 0%, rgba(255, 198, 20, 0) 70%)',
    opacity: 0.4,
    filter: 'blur(30px)',
    animation: '$heartbeat 4s infinite ease-in-out 1s',
    "@media (max-width: 960px)": {
      width: '500px',
      height: '500px',
    },
    "@media (max-width: 600px)": {
      width: '350px',
      height: '350px',
      bottom: '5%',
      right: '3%',
    },
  },
  colorWave1: {
    position: 'absolute',
    width: '120%',
    height: '200px',
    top: '20%',
    left: '-10%',
    background: 'linear-gradient(90deg, rgba(42, 43, 106, 0) 0%, rgba(42, 43, 106, 0.05) 50%, rgba(42, 43, 106, 0) 100%)',
    transform: 'rotate(-5deg)',
    animation: '$waveMove 15s infinite linear',
    "@media (max-width: 960px)": {
      height: '150px',
    },
    "@media (max-width: 600px)": {
      height: '100px',
    },
  },
  colorWave2: {
    position: 'absolute',
    width: '120%',
    height: '150px',
    top: '60%',
    left: '-10%',
    background: 'linear-gradient(90deg, rgba(255, 198, 20, 0) 0%, rgba(255, 198, 20, 0.03) 50%, rgba(255, 198, 20, 0) 100%)',
    transform: 'rotate(3deg)',
    animation: '$waveMove 18s infinite linear reverse',
    "@media (max-width: 960px)": {
      height: '120px',
    },
    "@media (max-width: 600px)": {
      height: '80px',
    },
  },
  '@keyframes heartbeat': {
    '0%': {
      transform: 'scale(1)',
      opacity: 0.2,
    },
    '25%': {
      transform: 'scale(1.05)',
      opacity: 0.3,
    },
    '50%': {
      transform: 'scale(1)',
      opacity: 0.25,
    },
    '75%': {
      transform: 'scale(1.08)',
      opacity: 0.35,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 0.2,
    },
  },
  '@keyframes waveMove': {
    '0%': {
      transform: 'translateX(-30%) rotate(-5deg)',
    },
    '100%': {
      transform: 'translateX(30%) rotate(-5deg)',
    },
  },
});

const Background = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.backgroundContainer}>
      {/* Main gradient elements */}
      <Box className={classes.backgroundElement} />
      <Box className={classes.backgroundElementSecondary} />
      
      {/* Gradient pulses */}
      <Box className={classes.heartbeatGradient1} />
      <Box className={classes.heartbeatGradient2} />
      
      {/* Animated color waves */}
      <Box className={classes.colorWave1} />
      <Box className={classes.colorWave2} />
    </Box>
  );
};

export default Background;