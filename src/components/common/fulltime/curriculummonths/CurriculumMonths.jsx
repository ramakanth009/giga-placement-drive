import React, { useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MonthCard from './MonthCard';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    backgroundColor: '#FFFFFF',
    '@media (max-width: 1200px)': {
      padding: '55px 0',
    },
    '@media (max-width: 960px)': {
      padding: '50px 0',
    },
    '@media (max-width: 600px)': {
      padding: '40px 0',
    },
    '@media (max-width: 480px)': {
      padding: '35px 0',
    },
    '@media (max-width: 375px)': {
      padding: '30px 0',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 40px',
    '@media (max-width: 960px)': {
      padding: '0 30px',
    },
    '@media (max-width: 600px)': {
      padding: '0 20px',
    },
    '@media (max-width: 480px)': {
      padding: '0 15px',
    },
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '50px',
    maxWidth: '1200px',
    '@media (max-width: 1200px)': {
      marginBottom: '45px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '40px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '35px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '25px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.1rem !important',
      marginBottom: '16px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.9rem !important',
      marginBottom: '14px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.7rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.5rem !important',
      marginBottom: '10px !important',
    },
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#666666 !important',
    lineHeight: '1.6 !important',
    maxWidth: '1000px',
    margin: '0 auto !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.15rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.05rem !important',
      maxWidth: '95%',
    },
    '@media (max-width: 480px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.95rem !important',
      lineHeight: '1.5 !important',
    },
  },
  monthsContainer: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
  scrollContainer: {
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',
    scrollbarWidth: 'none', // Firefox
    '&::-webkit-scrollbar': {
      display: 'none', // Chrome and Safari
    },
    msOverflowStyle: 'none', // IE and Edge
    padding: '20px 0',
    maxWidth: '100%',
    margin: '0 auto',
    '@media (max-width: 960px)': {
      gap: '15px',
    },
    '@media (max-width: 600px)': {
      gap: '12px',
      padding: '15px 0',
    },
    '@media (max-width: 480px)': {
      gap: '10px',
      padding: '12px 0',
    },
    '@media (max-width: 375px)': {
      gap: '8px',
      padding: '10px 0',
    },
  },
  navigationButton: {
    position: 'absolute',
    backgroundColor: 'white !important',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1) !important',
    zIndex: 2,
    '&:hover': {
      backgroundColor: '#f5f5f5 !important',
    },
    '@media (max-width: 960px)': {
      width: '40px',
      height: '40px',
    },
    '@media (max-width: 600px)': {
      width: '36px',
      height: '36px',
    },
    '@media (max-width: 480px)': {
      width: '32px',
      height: '32px',
    },
    '@media (max-width: 375px)': {
      width: '30px',
      height: '30px',
    },
  },
  leftButton: {
    left: 0,
  },
  rightButton: {
    right: 0,
  },
  scrollWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: 'calc(100% - 120px)',
    margin: '0 auto',
    overflow: 'hidden',
    '@media (max-width: 960px)': {
      maxWidth: 'calc(100% - 100px)',
    },
    '@media (max-width: 600px)': {
      maxWidth: 'calc(100% - 90px)',
    },
    '@media (max-width: 480px)': {
      maxWidth: 'calc(100% - 80px)',
    },
    '@media (max-width: 375px)': {
      maxWidth: 'calc(100% - 70px)',
    },
  },
});

const CurriculumMonths = ({ title, highlightedText, subtitle, months }) => {
  const classes = useStyles();
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 240; // Card width + gap
      const container = scrollRef.current;
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <Box className={classes.section}>
      <Box className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.title}>
            {title} <span>{highlightedText}</span>
          </Typography>
          <Typography className={classes.subtitle}>
            {subtitle}
          </Typography>
        </Box>
        
        <Box className={classes.monthsContainer}>
          <IconButton 
            className={`${classes.navigationButton} ${classes.leftButton}`}
            onClick={() => handleScroll('left')}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          
          <Box className={classes.scrollWrapper}>
            <Box className={classes.scrollContainer} ref={scrollRef}>
              {months.map((month, index) => (
                <MonthCard 
                  key={index}
                  number={index + 1}
                  topic={month}
                />
              ))}
            </Box>
          </Box>
          
          <IconButton 
            className={`${classes.navigationButton} ${classes.rightButton}`}
            onClick={() => handleScroll('right')}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CurriculumMonths;