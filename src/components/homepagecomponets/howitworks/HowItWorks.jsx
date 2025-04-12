import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { 
  TouchApp as SelectIcon,
  HowToReg as RegisterIcon,
  Create as BuildIcon,
  Business as ConnectIcon
} from '@mui/icons-material';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    background: '#f8f9fc',
    position: 'relative',
    overflow: 'hidden',
  },
  hexagonBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.04,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%232A2B6A' fill-opacity='1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    position: 'relative',
    zIndex: 2,
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    position: 'relative',
    display: 'inline-block',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: '#FFC614',
      borderRadius: '2px',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#555 !important',
    maxWidth: '700px',
    margin: '20px auto 0 !important',
  },
  timeline: {
    position: 'relative',
    maxWidth: '1100px',
    margin: '0 auto',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '6px',
      background: 'linear-gradient(to bottom, rgba(255, 198, 20, 0.7), rgba(42, 43, 106, 0.7))',
      top: '0',
      bottom: '0',
      left: '50%',
      marginLeft: '-3px',
      borderRadius: '5px',
      zIndex: 1,
      '@media (max-width: 768px)': {
        left: '40px',
      },
    },
  },
  timelineItem: {
    padding: '10px 40px',
    position: 'relative',
    width: '50%',
    boxSizing: 'border-box',
    opacity: 0,
    transition: 'all 0.5s ease',
    '&:nth-child(odd)': {
      left: '0',
      '& $itemConnector': {
        right: '-12px',
      },
      '& $itemContent': {
        borderRadius: '20px 0 20px 20px',
      },
    },
    '&:nth-child(even)': {
      left: '50%',
      '& $itemConnector': {
        left: '-12px',
      },
      '& $itemContent': {
        borderRadius: '0 20px 20px 20px',
      },
    },
    '@media (max-width: 768px)': {
      width: '100%',
      paddingLeft: '70px',
      paddingRight: '20px',
      '&:nth-child(odd), &:nth-child(even)': {
        left: '0',
        '& $itemConnector': {
          left: '32px',
        },
        '& $itemContent': {
          borderRadius: '0 20px 20px 20px',
        },
      },
    },
  },
  itemVisible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  itemOdd: {
    transform: 'translateX(-50px)',
  },
  itemEven: {
    transform: 'translateX(50px)',
  },
  itemContent: {
    padding: '25px',
    backgroundColor: 'white',
    position: 'relative',
    borderRadius: '20px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
    border: '1px solid #e1e5ee',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    '&:hover': {
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      transform: 'translateY(-5px)',
      '& $itemIcon': {
        transform: 'rotate(360deg)',
      },
    },
  },
  itemConnector: {
    position: 'absolute',
    width: '28px',
    height: '28px',
    backgroundColor: 'white',
    border: '4px solid',
    borderRadius: '50%',
    top: '25px',
    zIndex: 3,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2A2B6A',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  itemIconContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  itemIcon: {
    backgroundColor: '#f5f7ff',
    color: 'currentColor',
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    '& svg': {
      fontSize: '24px',
    },
  },
  itemTitle: {
    fontSize: '1.25rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    margin: 0,
  },
  itemDescription: {
    fontSize: '0.95rem !important',
    color: '#666 !important',
    marginTop: '10px !important',
    lineHeight: '1.6 !important',
  },
  mobileView: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
  desktopView: {
    display: 'block',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  alternativeCard: {
    padding: '25px',
    height: '100%',
    borderRadius: '16px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'white',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 30px rgba(0,0,0,0.12)',
    },
    '&:hover $cardIcon': {
      transform: 'scale(1.1)',
    },
  },
  cardIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    transition: 'transform 0.4s ease',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    '& svg': {
      fontSize: '30px',
      color: 'white',
    },
  },
  stepNumber: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#f5f7ff',
    color: '#2A2B6A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '14px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  cardColorBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '5px',
    width: '100%',
    backgroundColor: 'currentColor',
  },
  cardTitle: {
    fontSize: '1.2rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    marginBottom: '12px !important',
  },
  cardDescription: {
    fontSize: '0.9rem !important',
    color: '#555 !important',
    lineHeight: '1.6 !important',
  },
});

// Steps data
const steps = [
  { 
    icon: <SelectIcon />, 
    title: 'Select Your Domain',
    description: 'Choose your career path with expert guidance in Full Stack Development or Data Science.',
    color: '#8a5cf7',
    number: 1
  },
  { 
    icon: <RegisterIcon />, 
    title: 'Complete Registration',
    description: 'Quick and easy onboarding to gain immediate access to our learning platform.',
    color: '#4376eb',
    number: 2
  },
  { 
    icon: <BuildIcon />, 
    title: 'Build Your Portfolio',
    description: 'Work on real-world projects that demonstrate your skills to potential employers.',
    color: '#f07c3e',
    number: 3
  },
  { 
    icon: <ConnectIcon />, 
    title: 'Connect With Recruiters',
    description: 'Get introduced directly to hiring partners through our placement network.',
    color: '#e8518d',
    number: 4
  },
];

const HowItWorks = () => {
  const classes = useStyles();
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef([]);
  const cardGridRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index, 10);
          if (!visibleItems.includes(index)) {
            setVisibleItems(prev => [...prev, index]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    // Observe timeline items
    timelineRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    // Observe alternative card grid items
    cardGridRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      timelineRef.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
      cardGridRef.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <Box className={classes.section}>
      <Box className={classes.hexagonBg} />
      
      <Box className={classes.container}>
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            How It Works
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Your skills matter more than marks—follow these steps to get noticed!
          </Typography>
        </Box>
        
        {/* Desktop Timeline View */}
        <Box className={`${classes.timeline} ${classes.desktopView}`}>
          {steps.map((step, index) => (
            <Box
              key={index}
              ref={el => timelineRef.current[index] = el}
              data-index={index}
              className={`${classes.timelineItem} ${
                index % 2 === 0 ? classes.itemOdd : classes.itemEven
              } ${visibleItems.includes(index) ? classes.itemVisible : ''}`}
              sx={{ transitionDelay: `${index * 150}ms` }}
            >
              <Box 
                className={classes.itemConnector} 
                sx={{ borderColor: step.color }}
              >
                {step.number}
              </Box>
              
              <Box className={classes.itemContent}>
                <Box className={classes.itemIconContainer}>
                  <Box 
                    className={classes.itemIcon}
                    sx={{ color: step.color }}
                  >
                    {step.icon}
                  </Box>
                  <Typography className={classes.itemTitle}>
                    {step.title}
                  </Typography>
                </Box>
                
                <Typography className={classes.itemDescription}>
                  {step.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        
        {/* Mobile Card Grid View */}
        <Box className={classes.mobileView}>
          <Grid container spacing={3}>
            {steps.map((step, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  ref={el => cardGridRef.current[index] = el}
                  data-index={index}
                  sx={{ 
                    opacity: visibleItems.includes(index) ? 1 : 0, 
                    transform: visibleItems.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.5s ease',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <Paper className={classes.alternativeCard} elevation={0}>
                    <Box 
                      className={classes.cardColorBar}
                      sx={{ backgroundColor: step.color }}
                    />
                    
                    <Box className={classes.stepNumber}>
                      {step.number}
                    </Box>
                    
                    <Box 
                      className={classes.cardIcon}
                      sx={{ backgroundColor: step.color }}
                    >
                      {step.icon}
                    </Box>
                    
                    <Typography className={classes.cardTitle}>
                      {step.title}
                    </Typography>
                    
                    <Typography className={classes.cardDescription}>
                      {step.description}
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorks;