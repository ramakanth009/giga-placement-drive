// src/components/common/fulltime/programhighlights/ProgramHighlights.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HighlightCard from './HighlightCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '600px',
    '@media (max-width: 960px)': {
      padding: '60px 0',
      minHeight: '800px',
    },
    '@media (max-width: 600px)': {
      padding: '40px 0',
    },
  },
  starsCanvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  orbitPath: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    border: '2px dashed rgba(255, 255, 255, 0.1)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    '@media (max-width: 960px)': {
      width: '300px',
      height: '300px',
    },
    '@media (max-width: 600px)': {
      width: '250px',
      height: '250px',
    },
  },
  container: {
    position: 'relative',
    zIndex: 5,
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '80px',
    position: 'relative',
    zIndex: 5,
    '@media (max-width: 960px)': {
      marginBottom: '60px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '40px',
    },
  },
  title: {
    fontSize: '3rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    position: 'relative',
    display: 'inline-block',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100px',
      height: '4px',
      backgroundImage: 'linear-gradient(to right, #FFC614, #FF6347)',
      borderRadius: '2px',
    },
    '& span': {
      background: 'linear-gradient(to right, #FFC614, #FF6347)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.5rem !important',
      '&::after': {
        width: '80px',
      },
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
      '&::after': {
        width: '60px',
        height: '3px',
        bottom: '-10px',
      },
    },
  },
  cardOrbit: {
    position: 'relative',
    width: '100%',
    height: '600px',
    perspective: '1000px',
    '@media (max-width: 960px)': {
      height: '500px',
    },
  },
  orbitContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transformStyle: 'preserve-3d',
    transition: 'transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    width: '100%',
    height: '100%',
    transform: 'translate(-50%, -50%) rotateY(0deg)',
  },
  cardPosition: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transformStyle: 'preserve-3d',
    transition: 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  centerRing: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,198,20,0.2) 0%, rgba(255,99,71,0.05) 100%)',
    boxShadow: '0 0 50px rgba(255, 198, 20, 0.3)',
    zIndex: 4,
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: '#FFC614',
      boxShadow: '0 0 30px #FFC614',
    },
    '@media (max-width: 960px)': {
      width: '100px',
      height: '100px',
      '&::after': {
        width: '30px',
        height: '30px',
      },
    },
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
    gap: '20px',
    position: 'relative',
    zIndex: 5,
  },
  controlButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
    color: 'white !important',
    padding: '12px !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: 'rgba(255, 198, 20, 0.2) !important',
      transform: 'scale(1.1)',
    },
    '&:disabled': {
      color: 'rgba(255, 255, 255, 0.3) !important',
      backgroundColor: 'rgba(255, 255, 255, 0.05) !important',
    },
  },
  indicators: {
    display: 'flex',
    gap: '10px',
    margin: '0 20px',
  },
  indicator: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  activeIndicator: {
    backgroundColor: '#FFC614',
    transform: 'scale(1.3)',
    boxShadow: '0 0 10px #FFC614',
  },
  currentTitle: {
    position: 'relative',
    zIndex: 5,
    textAlign: 'center',
    marginTop: '30px',
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.5s ease',
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
    },
  },
  activeTitleAnimation: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  '@keyframes twinkle': {
    '0%, 100%': {
      opacity: 0.2,
      transform: 'scale(0.5)',
    },
    '50%': {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
});

const ProgramHighlights = ({ highlights }) => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const orbitRef = useRef(null);
  const canvasRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    // Update rotation based on active index
    const newRotation = (360 / highlights.length) * activeIndex;
    setRotation(newRotation);
    
    // Trigger title animation
    setIsTitleVisible(false);
    setTimeout(() => setIsTitleVisible(true), 300);
  }, [activeIndex, highlights.length]);

  useEffect(() => {
    // Star animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const stars = [];
    const starCount = 200;
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2,
        opacity: Math.random(),
        speed: Math.random() * 0.05,
        cycle: Math.random() * 100,
      });
    }
    
    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      // Draw stars
      stars.forEach(star => {
        star.cycle += star.speed;
        const opacity = 0.2 + Math.abs(Math.sin(star.cycle)) * 0.8;
        const size = star.size * (0.5 + Math.abs(Math.sin(star.cycle)) * 0.5);
        
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Move stars slightly
        star.y += star.speed;
        
        // Reset position if star moves off screen
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % highlights.length);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + highlights.length) % highlights.length);
  };

  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  const calculateCardPosition = (index) => {
    const totalCards = highlights.length;
    const angle = (index * 2 * Math.PI) / totalCards;
    const radius = totalCards <= 4 ? 230 : 200;
    
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    const rotateY = (index * 360) / totalCards;
    
    // Calculate if this card is active or should be visible based on its position relative to activeIndex
    const isActive = index === activeIndex;
    
    // Adjust the position and rotation of each card
    return {
      transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg)`,
      zIndex: isActive ? 10 : 5,
      opacity: 1,
    };
  };

  return (
    <Box className={classes.section}>
      <canvas ref={canvasRef} className={classes.starsCanvas} />
      <Box className={classes.orbitPath}></Box>
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.title}>
            Highlights of the <span>Program</span>
          </Typography>
        </Box>
        
        <Box className={classes.cardOrbit}>
          <Box 
            ref={orbitRef}
            className={classes.orbitContainer} 
            style={{ transform: `translate(-50%, -50%) rotateY(${-rotation}deg)` }}
          >
            {highlights.map((highlight, index) => (
              <Box 
                key={index}
                className={classes.cardPosition}
                style={calculateCardPosition(index)}
              >
                <HighlightCard
                  icon={highlight.icon}
                  title={highlight.title}
                  isActive={activeIndex === index}
                  onClick={() => goToIndex(index)}
                />
              </Box>
            ))}
          </Box>
          <Box className={classes.centerRing}></Box>
        </Box>
        
        <Typography 
          className={`${classes.currentTitle} ${isTitleVisible ? classes.activeTitleAnimation : ''}`}
        >
          {highlights[activeIndex]?.title}
        </Typography>
        
        <Box className={classes.controls}>
          <IconButton 
            className={classes.controlButton}
            onClick={goToPrev}
            disabled={highlights.length <= 1}
          >
            <ArrowBackIcon />
          </IconButton>
          
          <Box className={classes.indicators}>
            {highlights.map((_, index) => (
              <Box 
                key={index}
                className={`${classes.indicator} ${activeIndex === index ? classes.activeIndicator : ''}`}
                onClick={() => goToIndex(index)}
              />
            ))}
          </Box>
          
          <IconButton 
            className={classes.controlButton}
            onClick={goToNext}
            disabled={highlights.length <= 1}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default ProgramHighlights;