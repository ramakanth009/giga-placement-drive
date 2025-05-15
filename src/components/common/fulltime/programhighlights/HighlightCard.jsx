// src/components/common/fulltime/programhighlights/HighlightCard.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    width: '280px',
    height: '320px',
    perspective: '1000px',
    cursor: 'pointer',
    transformStyle: 'preserve-3d',
    '@media (max-width: 960px)': {
      width: '240px',
      height: '280px',
    },
    '@media (max-width: 600px)': {
      width: '200px',
      height: '240px',
    },
  },
  cardInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transformStyle: 'preserve-3d',
    borderRadius: '20px',
    '&:hover': {
      transform: 'rotateY(10deg) scale(1.05)',
    },
  },
  active: {
    '& $cardInner': {
      transform: 'rotateY(10deg) scale(1.1)',
    },
    '& $cardFront': {
      boxShadow: '0 0 30px rgba(255, 198, 20, 0.5)',
      background: 'linear-gradient(135deg, rgba(255, 198, 20, 0.1) 0%, rgba(255, 99, 71, 0.3) 100%)',
      backdropFilter: 'blur(10px)',
      border: '2px solid rgba(255, 198, 20, 0.5)',
    },
    '& $iconWrapper': {
      transform: 'scale(1.2) translateY(-10px)',
      boxShadow: '0 15px 35px rgba(255, 198, 20, 0.4)',
      background: 'linear-gradient(135deg, #FFC614 0%, #FF6347 100%)',
    },
    '& $cardTitle': {
      color: 'white',
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
      transform: 'translateY(10px)',
    },
    '& $glowOrb': {
      opacity: 1,
      transform: 'scale(1)',
    },
    '& $particles div': {
      animation: '$float 3s infinite ease-in-out',
    },
  },
  cardFront: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(5px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    overflow: 'hidden',
  },
  iconWrapper: {
    position: 'relative',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    zIndex: 3,
    transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
    '@media (max-width: 960px)': {
      width: '70px',
      height: '70px',
    },
    '@media (max-width: 600px)': {
      width: '60px',
      height: '60px',
    },
  },
  icon: {
    fontSize: '36px',
    color: 'white',
    transition: 'all 0.3s ease',
    '@media (max-width: 960px)': {
      fontSize: '32px',
    },
    '@media (max-width: 600px)': {
      fontSize: '28px',
    },
  },
  cardTitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    marginBottom: '10px !important',
    position: 'relative',
    zIndex: 3,
    transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  glowOrb: {
    position: 'absolute',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,198,20,0.3) 0%, rgba(255,99,71,0) 70%)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(0.5)',
    opacity: 0,
    transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    zIndex: 1,
  },
  particles: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    zIndex: 2,
  },
  particle: {
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
    opacity: 0.3,
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0) translateX(0)',
    },
    '50%': {
      transform: 'translateY(-20px) translateX(10px)',
    },
  },
  // Animated elements
  orbitalRing: {
    position: 'absolute',
    width: '120%',
    height: '120%',
    borderRadius: '50%',
    border: '1px dashed rgba(255, 255, 255, 0.1)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    animation: '$rotate 20s linear infinite',
    zIndex: 1,
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'translate(-50%, -50%) rotate(0deg)',
    },
    '100%': {
      transform: 'translate(-50%, -50%) rotate(360deg)',
    },
  },
  orbitalDot: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 198, 20, 0.6)',
    boxShadow: '0 0 10px rgba(255, 198, 20, 0.6)',
  },
  indicator: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '4px',
    borderRadius: '2px',
    background: 'rgba(255, 255, 255, 0.2)',
    zIndex: 3,
    overflow: 'hidden',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '0%',
      height: '100%',
      background: 'linear-gradient(90deg, #FFC614, #FF6347)',
      transition: 'width 3s linear',
    },
  },
  activeIndicator: {
    '&::after': {
      width: '100%',
    },
  },
});

const HighlightCard = ({ icon, title, isActive, onClick }) => {
  const classes = useStyles();
  const [particles, setParticles] = useState([]);
  const [orbitalDots, setOrbitalDots] = useState([]);

  // Generate orbital dots when component mounts
  useEffect(() => {
    const newOrbitalDots = [];
    const dotCount = 5;
    
    for (let i = 0; i < dotCount; i++) {
      const angle = (i * 360) / dotCount;
      newOrbitalDots.push({
        id: i,
        style: {
          top: `calc(50% + ${Math.sin(angle * Math.PI / 180) * 50}%)`,
          left: `calc(50% + ${Math.cos(angle * Math.PI / 180) * 50}%)`,
          animationDelay: `${i * 0.2}s`,
        },
      });
    }
    
    setOrbitalDots(newOrbitalDots);
  }, []);

  // Generate floating particles when component mounts
  useEffect(() => {
    const newParticles = [];
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        style: {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 10 + 5}px`,
          height: `${Math.random() * 10 + 5}px`,
          opacity: Math.random() * 0.5 + 0.1,
          animationDelay: `${Math.random() * 3}s`,
        },
      });
    }
    
    setParticles(newParticles);
  }, []);

  return (
    <Box className={`${classes.card} ${isActive ? classes.active : ''}`} onClick={onClick}>
      <Box className={classes.cardInner}>
        <Box className={classes.cardFront}>
          {/* Animated background elements */}
          <Box className={classes.orbitalRing}></Box>
          {orbitalDots.map(dot => (
            <Box 
              key={dot.id}
              className={classes.orbitalDot}
              style={dot.style}
            />
          ))}
          
          {/* Floating particles */}
          <Box className={classes.particles}>
            {particles.map(particle => (
              <Box 
                key={particle.id}
                className={classes.particle}
                style={particle.style}
              />
            ))}
          </Box>
          
          {/* Glow effect */}
          <Box className={classes.glowOrb}></Box>
          
          {/* Card content */}
          <Box className={classes.iconWrapper}>
            <Box className={classes.icon}>
              {icon}
            </Box>
          </Box>
          <Typography className={classes.cardTitle}>
            {title}
          </Typography>
          
          {/* Progress indicator */}
          <Box className={`${classes.indicator} ${isActive ? classes.activeIndicator : ''}`}></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HighlightCard;