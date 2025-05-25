import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #f6f9ff 0%, #edf5ff 100%)',
  },
  sectionTitle: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#4263EB !important',
    textAlign: 'center',
    marginBottom: '15px !important',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #5E72E4, #825EE4)',
      borderRadius: '2px',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#666 !important',
    textAlign: 'center',
    marginBottom: '40px !important',
    maxWidth: '800px',
    margin: '0 auto 40px auto !important',
  },
  statsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '25px',
    '@media (max-width: 900px)': {
      gap: '20px',
    },
    '@media (max-width: 600px)': {
      gap: '15px',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  statCard: {
    width: '220px',
    padding: '30px 20px',
    borderRadius: '16px !important',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08) !important',
    transition: 'all 0.3s ease !important',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12) !important',
      '& $iconContainer': {
        transform: 'scale(1.1) rotate(10deg)',
      },
    },
    '@media (max-width: 600px)': {
      width: '85%',
      maxWidth: '320px',
    },
  },
  card1: {
    background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
    borderTop: '5px solid #4263EB',
  },
  card2: {
    background: 'linear-gradient(135deg, #ffffff 0%, #fff2f0 100%)',
    borderTop: '5px solid #FF6B6B',
  },
  card3: {
    background: 'linear-gradient(135deg, #ffffff 0%, #f1fffd 100%)',
    borderTop: '5px solid #20C997',
  },
  card4: {
    background: 'linear-gradient(135deg, #ffffff 0%, #fff9f0 100%)',
    borderTop: '5px solid #FFA500',
  },
  iconContainer: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15px',
    transition: 'all 0.4s ease',
    position: 'relative',
  },
  icon1: {
    color: '#4263EB',
    background: 'rgba(66, 99, 235, 0.1)',
  },
  icon2: {
    color: '#FF6B6B',
    background: 'rgba(255, 107, 107, 0.1)',
  },
  icon3: {
    color: '#20C997',
    background: 'rgba(32, 201, 151, 0.1)',
  },
  icon4: {
    color: '#FFA500',
    background: 'rgba(255, 165, 0, 0.1)',
  },
  statValue: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    marginBottom: '10px !important',
  },
  value1: {
    color: '#4263EB !important',
  },
  value2: {
    color: '#FF6B6B !important',
  },
  value3: {
    color: '#20C997 !important',
  },
  value4: {
    color: '#FFA500 !important',
  },
  statTitle: {
    fontSize: '1rem !important',
    fontWeight: '500 !important',
    color: '#555 !important',
    lineHeight: '1.4 !important',
  },
  decorCircle: {
    position: 'absolute',
    borderRadius: '50%',
    opacity: '0.5',
    zIndex: 0,
  },
  circle1: {
    width: '300px',
    height: '300px',
    top: '-150px',
    left: '-150px',
    background: 'radial-gradient(circle, rgba(66, 99, 235, 0.1) 0%, rgba(66, 99, 235, 0) 70%)',
  },
  circle2: {
    width: '250px',
    height: '250px',
    bottom: '-100px',
    right: '-100px',
    background: 'radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, rgba(255, 107, 107, 0) 70%)',
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },
});

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, className }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span className={className}>{count}</span>;
};

const TechFutureSection = () => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.querySelector(`.${classes.section}`);
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [classes.section]);

  return (
    <Box className={classes.section}>
      {/* Decorative circles */}
      <Box className={`${classes.decorCircle} ${classes.circle1}`} />
      <Box className={`${classes.decorCircle} ${classes.circle2}`} />
      
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.sectionTitle}>
          Tech is the Future
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          The world runs on code and data. Here's why your timing is perfect:
        </Typography>
        
        <Box className={classes.statsContainer}>
          {/* Stat Card 1 */}
          <Paper className={`${classes.statCard} ${classes.card1}`} elevation={0}>
            <Box className={`${classes.iconContainer} ${classes.icon1}`}>
              <BarChartIcon fontSize="large" />
            </Box>
            <Typography variant="h3" className={`${classes.statValue} ${classes.value1}`}>
              {isVisible ? <AnimatedCounter end={28} /> : "0"}%
            </Typography>
            <Typography variant="body1" className={classes.statTitle}>
              YoY growth in demand for Data Science roles in India
            </Typography>
          </Paper>
          
          {/* Stat Card 2 */}
          <Paper className={`${classes.statCard} ${classes.card2}`} elevation={0}>
            <Box className={`${classes.iconContainer} ${classes.icon2}`}>
              <EmojiEventsIcon fontSize="large" />
            </Box>
            <Typography variant="h3" className={`${classes.statValue} ${classes.value2}`}>
              {isVisible ? <AnimatedCounter end={2} duration={1000} /> : "0"}nd
            </Typography>
            <Typography variant="body1" className={classes.statTitle}>
              India's global rank as hub for Full Stack Development talent
            </Typography>
          </Paper>
          
          {/* Stat Card 3 */}
          <Paper className={`${classes.statCard} ${classes.card3}`} elevation={0}>
            <Box className={`${classes.iconContainer} ${classes.icon3}`}>
              <WorkIcon fontSize="large" />
            </Box>
            <Typography variant="h3" className={`${classes.statValue} ${classes.value3}`}>
              {isVisible ? <AnimatedCounter end={30} /> : "0"}K+
            </Typography>
            <Typography variant="body1" className={classes.statTitle}>
              Open roles for developers and data professionals monthly
            </Typography>
          </Paper>
          
          {/* Stat Card 4 */}
          <Paper className={`${classes.statCard} ${classes.card4}`} elevation={0}>
            <Box className={`${classes.iconContainer} ${classes.icon4}`}>
              <MonetizationOnIcon fontSize="large" />
            </Box>
            <Typography variant="h3" className={`${classes.statValue} ${classes.value4}`}>
              ${isVisible ? <AnimatedCounter end={10} duration={1500} /> : "0"}B+
            </Typography>
            <Typography variant="body1" className={classes.statTitle}>
              Funding received by Indian tech startups in 2024 alone
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default TechFutureSection;