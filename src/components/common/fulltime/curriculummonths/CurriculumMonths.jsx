// src/components/common/fulltime/curriculummonths/CurriculumMonths.jsx
import React, { useRef } from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MonthCard from './MonthCard';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    backgroundColor: '#FFFFFF',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '50px',
    maxWidth: '1200px',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    '& span': {
      color: '#FFC614 !important',
    },
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#666666 !important',
    lineHeight: '1.6 !important',
    maxWidth: '1000px',
    margin: '0 auto !important',
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
  },
  navigationButton: {
    position: 'absolute',
    backgroundColor: 'white !important',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1) !important',
    zIndex: 2,
    '&:hover': {
      backgroundColor: '#f5f5f5 !important',
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
    maxWidth: 'calc(100% - 100px)',
    margin: '0 auto',
    overflow: 'hidden',
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
      <Container maxWidth="lg">
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
      </Container>
    </Box>
  );
};

export default CurriculumMonths;