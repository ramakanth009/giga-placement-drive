import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const useStyles = makeStyles({
  section: {
    padding: '50px 0',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 1200px)': {
      padding: '45px 0',
    },
    '@media (max-width: 960px)': {
      padding: '40px 0',
    },
    '@media (max-width: 600px)': {
      padding: '35px 0',
    },
    '@media (max-width: 480px)': {
      padding: '30px 0',
    },
    '@media (max-width: 375px)': {
      padding: '25px 0',
    },
  },
  sectionTitle: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '15px !important',
    position: 'relative',
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.4rem !important',
      marginBottom: '8px !important',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#666 !important',
    textAlign: 'center',
    marginBottom: '40px !important',
    maxWidth: '800px',
    margin: '0 auto 40px auto !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.05rem !important',
      maxWidth: '700px',
      marginBottom: '35px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '600px',
      marginBottom: '30px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
      maxWidth: '90%',
      marginBottom: '25px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      marginBottom: '18px !important',
    },
  },
  statsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '25px',
    '@media (max-width: 1200px)': {
      gap: '22px',
    },
    '@media (max-width: 900px)': {
      gap: '20px',
    },
    '@media (max-width: 600px)': {
      gap: '15px',
      flexDirection: 'column',
      alignItems: 'center',
    },
    '@media (max-width: 480px)': {
      gap: '12px',
    },
    '@media (max-width: 375px)': {
      gap: '10px',
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
    '@media (max-width: 1200px)': {
      width: '200px',
      padding: '25px 18px',
    },
    '@media (max-width: 960px)': {
      width: '180px',
      padding: '22px 16px',
    },
    '@media (max-width: 600px)': {
      width: '85%',
      maxWidth: '320px',
      padding: '20px 15px',
    },
    '@media (max-width: 480px)': {
      width: '90%',
      maxWidth: '280px',
      padding: '18px 12px',
    },
    '@media (max-width: 375px)': {
      width: '95%',
      maxWidth: '260px',
      padding: '15px 10px',
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
    '@media (max-width: 1200px)': {
      width: '65px',
      height: '65px',
      marginBottom: '12px',
    },
    '@media (max-width: 960px)': {
      width: '60px',
      height: '60px',
      marginBottom: '10px',
    },
    '@media (max-width: 600px)': {
      width: '55px',
      height: '55px',
      marginBottom: '8px',
    },
    '@media (max-width: 480px)': {
      width: '50px',
      height: '50px',
      marginBottom: '6px',
    },
    '@media (max-width: 375px)': {
      width: '45px',
      height: '45px',
      marginBottom: '5px',
    },
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
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.9rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.7rem !important',
      marginBottom: '5px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.5rem !important',
      marginBottom: '4px !important',
    },
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
    '@media (max-width: 1200px)': {
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
      lineHeight: '1.3 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem !important',
      lineHeight: '1.2 !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem !important',
    },
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
    '@media (max-width: 1200px)': {
      width: '250px',
      height: '250px',
      top: '-125px',
      left: '-125px',
    },
    '@media (max-width: 960px)': {
      width: '200px',
      height: '200px',
      top: '-100px',
      left: '-100px',
    },
    '@media (max-width: 600px)': {
      width: '150px',
      height: '150px',
      top: '-75px',
      left: '-75px',
    },
    '@media (max-width: 480px)': {
      width: '120px',
      height: '120px',
      top: '-60px',
      left: '-60px',
    },
    '@media (max-width: 375px)': {
      width: '100px',
      height: '100px',
      top: '-50px',
      left: '-50px',
    },
  },
  circle2: {
    width: '250px',
    height: '250px',
    bottom: '-100px',
    right: '-100px',
    background: 'radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, rgba(255, 107, 107, 0) 70%)',
    '@media (max-width: 1200px)': {
      width: '200px',
      height: '200px',
      bottom: '-75px',
      right: '-75px',
    },
    '@media (max-width: 960px)': {
      width: '150px',
      height: '150px',
      bottom: '-50px',
      right: '-50px',
    },
    '@media (max-width: 600px)': {
      width: '120px',
      height: '120px',
      bottom: '-40px',
      right: '-40px',
    },
    '@media (max-width: 480px)': {
      width: '100px',
      height: '100px',
      bottom: '-30px',
      right: '-30px',
    },
    '@media (max-width: 375px)': {
      width: '80px',
      height: '80px',
      bottom: '-25px',
      right: '-25px',
    },
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

const AnimatedCounter = ({ end, duration = 2000, className, loopInterval = 3000 }) => {
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let rafId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        rafId = window.requestAnimationFrame(step);
      }
    };

    rafId = window.requestAnimationFrame(step);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [end, duration, run]);

  useEffect(() => {
    if (count === end) {
      const timeoutId = setTimeout(() => {
        setCount(0);
        setRun((r) => r + 1);
      }, loopInterval);
      return () => clearTimeout(timeoutId);
    }
  }, [count, end, loopInterval]);

  return <span className={className}>{count}</span>;
};

const TechFutureSection = () => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box className={classes.section} ref={sectionRef}>
      <Box className={`${classes.decorCircle} ${classes.circle1}`} />
      <Box className={`${classes.decorCircle} ${classes.circle2}`} />
      
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.sectionTitle}>
          Tech is the <span style={{ color: '#FFC614' }}>Future</span>
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          The world runs on code and data. Here's why your timing is perfect:
        </Typography>
        
        <Box className={classes.statsContainer}>
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