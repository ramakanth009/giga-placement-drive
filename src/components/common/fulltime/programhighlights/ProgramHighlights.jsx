// src/components/common/fulltime/programhighlights/ProgramHighlights.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HighlightCard from './HighlightCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles({
  section: {
    padding: '30px 0',
    background: '#2A2B6A', // Updated to dark blue
    position: 'relative',
    overflow: 'hidden',
    minHeight: '500px', // Reduced height
    '@media (max-width: 960px)': {
      padding: '50px 0',
      minHeight: '600px',
    },
    '@media (max-width: 600px)': {
      padding: '30px 0',
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
    width: '400px', // Reduced size
    height: '400px', // Reduced size
    borderRadius: '50%',
    border: '2px dashed rgba(255, 255, 255, 0.1)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    '@media (max-width: 960px)': {
      width: '250px',
      height: '250px',
    },
    '@media (max-width: 600px)': {
      width: '200px',
      height: '200px',
    },
  },
  container: {
    position: 'relative',
    zIndex: 5,
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '20px', // Reduced margin
    position: 'relative',
    zIndex: 5,
    '@media (max-width: 960px)': {
      marginBottom: '10px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '5px',
    },
  },
  title: {
    fontSize: '2.5rem !important', // Reduced font size
    fontWeight: 'bold !important',
    color: 'white !important', // Updated text color
    position: 'relative',
    display: 'inline-block',
    '& span': {
      color: '#FFC614', // Updated highlighted text color to yellow
      display: 'inline-block',
    },
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
      
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important','&::after': {
        width: '50px',
        height: '3px',
        bottom: '-10px',
      },
    },
  },
  cardOrbit: {
    position: 'relative',
    width: '100%',
    height: '380px', // Reduced height
    perspective: '1000px',
    '@media (max-width: 960px)': {
      height: '400px',
    },
  },
  orbitContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    transform: 'translate(-50%, -50%) translateX(0)',
    transition: 'transform 0.8s ease-in-out',
  },
  cardPosition: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transition: 'all 0.8s ease-in-out',
  },
  centerRing: {
    display:"none",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '120px', // Reduced size
    height: '120px', // Reduced size
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,198,20,0.2) 0%, rgba(255,198,20,0.05) 100%)', // Updated to yellow
    boxShadow: '0 0 40px rgba(255, 198, 20, 0.3)',
    zIndex: 4,
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '40px', // Reduced size
      height: '40px', // Reduced size
      borderRadius: '50%',
      background: '#FFC614', // Updated to yellow
      boxShadow: '0 0 30px #FFC614',
    },
    '@media (max-width: 960px)': {
      width: '80px',
      height: '80px',
      '&::after': {
        width: '25px',
        height: '25px',
      },
    },
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px', // Reduced margin
    gap: '20px',
    position: 'relative',
    zIndex: 5,
  },
  controlButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
    color: 'white !important',
    padding: '10px !important', // Reduced padding
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
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Updated to match requested path dot color
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  activeIndicator: {
    backgroundColor: '#FFC614', // Updated to yellow
    transform: 'scale(1.3)',
    boxShadow: '0 0 10px #FFC614',
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
  const [slidePosition, setSlidePosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const orbitRef = useRef(null);
  const canvasRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  // Add auto-slide effect
  useEffect(() => {
    if (highlights.length <= 1) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % highlights.length);
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [highlights.length, isPaused]);

  // Add mouse enter/leave handlers to container
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  useEffect(() => {
    // Update slide position based on active index
    setSlidePosition(-activeIndex * 100);
    
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
    const starCount = 150; // Reduced star count
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5, // Reduced size
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
    // Calculate horizontal position for sliding
    const xOffset = (index - activeIndex) * 300; // Adjust distance between cards
    
    // Determine if this card is active
    const isActive = index === activeIndex;
    
    // Calculate opacity based on distance from active card
    const distanceFromActive = Math.abs(index - activeIndex);
    const opacity = distanceFromActive > 1 ? 0.3 : 1 - (distanceFromActive * 0.3);
    
    // Calculate scale based on distance from active card (smaller if further)
    const scale = isActive ? 1 : 0.85;
    
    return {
      transform: `translate(-50%, -50%) translateX(${xOffset}px) scale(${scale})`,
      zIndex: isActive ? 10 : 5,
      opacity: opacity,
    };
  };

  return (
    <Box className={classes.section}>
      <canvas ref={canvasRef} className={classes.starsCanvas} />
      <Box className={classes.orbitPath}></Box>
      <Container 
        maxWidth="lg" 
        className={classes.container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Box className={classes.titleContainer}>
          <Typography variant='h2' className={classes.title}>
            Highlights of the <span>Program</span>
          </Typography>
        </Box>
        
        <Box className={classes.cardOrbit}>
          <Box 
            ref={orbitRef}
            className={classes.orbitContainer}
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