// src/components/gigaversityadvantage/AdvantageBoxes.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  boxesContainer: {
    width: '60%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    position: 'relative',
  },
  leftBoxesContainer: {
    width: 'calc(50% - 10px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '-20px', // Positioning left boxes slightly higher
  },
  rightBoxesContainer: {
    width: 'calc(50% - 10px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '20px', // Positioning right boxes slightly lower
  },
  advantageBox: {
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    borderRadius: '20px 20px 60px 20px', /* Initial border-radius */
    padding: '35px 30px',
    width: '100%',
    height: 'auto',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    transition: `
      transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.8s ease,
      border-radius 2s cubic-bezier(0.22, 1, 0.36, 1)
    `,
    willChange: 'border-radius, transform, box-shadow',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)',
      borderRadius: '16px 16px 16px 16px'
    }
  },
  leftBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '4px',
    height: '0%',
    backgroundColor: '#2A2B6A',
    transition: 'height 0.9s cubic-bezier(0.19, 1, 0.22, 1)',
  },
  activeBorder: {
    height: '100%',
  },
  boxTitle: {
    padding: "0px 20px",
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    position: 'relative',
    transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  titleLine: {
    position: 'absolute',
    bottom: '-5px',
    left: '20px',
    width: '0px',
    height: '2px',
    backgroundColor: '#FFC614',
    transition: 'width 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  activeTitleLine: {
    width: '50px',
  },
  boxDescription: {
    padding: "0px 20px",
    fontSize: '1rem !important',
    color: '#666666 !important',
    lineHeight: '1.5 !important',
    opacity: 0.9,
    transition: 'opacity 0.7s ease',
  },
  activeDescription: {
    opacity: 1,
  },
  // Removed icon styles
  shimmerEffect: {
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
    pointerEvents: 'none',
    transition: 'transform 1.5s ease',
  },
  animateShimmer: {
    transform: 'translateX(200%)',
  },
  fadeInBox: {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  fadeInVisible: {
    opacity: 1,
    transform: 'translateY(0)',
  }
});

const AdvantageBoxes = () => {
  const classes = useStyles();
  const [activeBox, setActiveBox] = useState(null);
  const [animated, setAnimated] = useState([]);
  const [shimmerStates, setShimmerStates] = useState({});

  // Set up the entry animations
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimated([1]);
    }, 100);
    
    const timer2 = setTimeout(() => {
      setAnimated(prev => [...prev, 2]);
    }, 300);
    
    const timer3 = setTimeout(() => {
      setAnimated(prev => [...prev, 3]);
    }, 500);
    
    const timer4 = setTimeout(() => {
      setAnimated(prev => [...prev, 4]);
    }, 700);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  // Set up shimmer animations
  useEffect(() => {
    // Function to create periodic shimmer effect
    const createShimmerEffect = (id) => {
      // Set shimmer state to true
      setShimmerStates(prev => ({ ...prev, [id]: true }));
      
      // After animation duration, reset it
      setTimeout(() => {
        setShimmerStates(prev => ({ ...prev, [id]: false }));
      }, 1500); // Duration of the shimmer animation
    };
    
    // Initial shimmer for each box with staggered timing
    const initialTimers = [1, 2, 3, 4].map((id, index) => {
      return setTimeout(() => {
        createShimmerEffect(id);
      }, 2000 + (index * 1000)); // Start after initial animations
    });
    
    // Periodic shimmer effect
    const intervalIds = [1, 2, 3, 4].map((id) => {
      return setInterval(() => {
        createShimmerEffect(id);
      }, 7000 + Math.random() * 5000); // Random interval between 7-12 seconds
    });
    
    return () => {
      initialTimers.forEach(timer => clearTimeout(timer));
      intervalIds.forEach(interval => clearInterval(interval));
    };
  }, []);

  const leftBoxes = [
    {
      id: 1,
      title: '1-Hour Live Projects Sessions Everyday',
      description: 'Engage With Industry Experts Who Guide You Through Concepts And Answer Questions In Real Time.',
    },
    {
      id: 3,
      title: 'Personalized Feedback',
      description: 'Receive Expert Guidance On Your Code, Models, And Presentations To Ensure You`re Job-Ready.',
    },
  ];

  const rightBoxes = [
    {
      id: 2,
      title: 'Hands-On Project Work',
      description: 'Work On Real Projects That Help You Practice Your Skills And Create A Strong Portfolio For Job Applications.',
    },
    {
      id: 4,
      title: 'Job Preparation Activities',
      description: 'From Resume-Building To Interview Practice, We Prepare You For Every Stage Of The Hiring Process.',
    },
  ];

  // Check icon removed

  const handleMouseEnter = (id) => {
    setActiveBox(id);
  };

  const handleMouseLeave = () => {
    setActiveBox(null);
  };

  return (
    <Box className={classes.boxesContainer}>
      {/* Left side boxes (positioned slightly higher) */}
      <Box className={classes.leftBoxesContainer}>
        {leftBoxes.map((box) => (
          <Box 
            key={box.id} 
            className={`${classes.advantageBox} ${classes.fadeInBox} ${animated.includes(box.id) ? classes.fadeInVisible : ''}`}
            onMouseEnter={() => handleMouseEnter(box.id)}
            onMouseLeave={handleMouseLeave}
            style={{ transitionDelay: `${(box.id - 1) * 0.2}s` }}
          >
            <Box 
              className={`${classes.leftBorder} ${activeBox === box.id ? classes.activeBorder : ''}`}
            />
            <Typography variant="h5" className={classes.boxTitle}>
              {box.title}
              <Box 
                className={`${classes.titleLine} ${activeBox === box.id ? classes.activeTitleLine : ''}`}
              />
            </Typography>
            <Typography 
              variant="body2" 
              className={`${classes.boxDescription} ${activeBox === box.id ? classes.activeDescription : ''}`}
            >
              {box.description}
            </Typography>
            {/* Removed check icon */}
            <Box 
              className={`${classes.shimmerEffect} ${shimmerStates[box.id] ? classes.animateShimmer : ''}`}
            />
          </Box>
        ))}
      </Box>

      {/* Right side boxes (positioned slightly lower) */}
      <Box className={classes.rightBoxesContainer}>
        {rightBoxes.map((box) => (
          <Box 
            key={box.id} 
            className={`${classes.advantageBox} ${classes.fadeInBox} ${animated.includes(box.id) ? classes.fadeInVisible : ''}`}
            onMouseEnter={() => handleMouseEnter(box.id)}
            onMouseLeave={handleMouseLeave}
            style={{ transitionDelay: `${(box.id - 1) * 0.2}s` }}
          >
            <Box 
              className={`${classes.leftBorder} ${activeBox === box.id ? classes.activeBorder : ''}`}
            />
            <Typography variant="h5" className={classes.boxTitle}>
              {box.title}
              <Box 
                className={`${classes.titleLine} ${activeBox === box.id ? classes.activeTitleLine : ''}`}
              />
            </Typography>
            <Typography 
              variant="body2" 
              className={`${classes.boxDescription} ${activeBox === box.id ? classes.activeDescription : ''}`}
            >
              {box.description}
            </Typography>
            {/* Removed check icon */}
            <Box 
              className={`${classes.shimmerEffect} ${shimmerStates[box.id] ? classes.animateShimmer : ''}`}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AdvantageBoxes;