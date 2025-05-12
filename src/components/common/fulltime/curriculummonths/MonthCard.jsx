import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  cardContainer: {
    width: '220px',
    height: '210px',
    backgroundColor: '#F5F7FF',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
    boxSizing: 'border-box',
    '@media (max-width: 1200px)': {
      width: '210px',
      height: '200px',
      padding: '18px',
    },
    '@media (max-width: 960px)': {
      width: '195px',
      height: '190px',
      padding: '16px',
    },
    '@media (max-width: 600px)': {
      width: '180px',
      height: '180px',
      padding: '15px',
    },
    '@media (max-width: 480px)': {
      width: '160px',
      height: '170px',
      padding: '14px',
    },
    '@media (max-width: 375px)': {
      width: '140px',
      height: '160px',
      padding: '12px',
    },
  },
  monthCircle: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    minHeight: '70px',
    backgroundColor: '#475AD7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15px',
    '@media (max-width: 1200px)': {
      width: '65px',
      height: '65px',
      minHeight: '65px',
      marginBottom: '14px',
    },
    '@media (max-width: 960px)': {
      width: '60px',
      height: '60px',
      minHeight: '60px',
      marginBottom: '13px',
    },
    '@media (max-width: 600px)': {
      width: '55px',
      height: '55px',
      minHeight: '55px',
      marginBottom: '12px',
    },
    '@media (max-width: 480px)': {
      width: '50px',
      height: '50px',
      minHeight: '50px',
      marginBottom: '10px',
    },
    '@media (max-width: 375px)': {
      width: '45px',
      height: '45px',
      minHeight: '45px',
      marginBottom: '8px',
    },
  },
  monthNumber: {
    color: '#FFFFFF',
    fontSize: '2rem !important', 
    fontWeight: '600 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.9rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.7rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.5rem !important',
    },
  },
  monthLabel: {
    color: '#2A2B6A',
    fontSize: '1.5rem !important',
    fontWeight: '600 !important',
    marginBottom: '8px !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.4rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.3rem !important',
      marginBottom: '7px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem !important',
      marginBottom: '5px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1rem !important',
      marginBottom: '4px !important',
    },
  },
  topicLabel: {
    color: '#555555',
    fontSize: '1rem !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem !important',
    },
  }
});

const MonthCard = ({ number, topic }) => {
  const classes = useStyles();

  return (
    <Box className={classes.cardContainer}>
      <Box className={classes.monthCircle}>
        <Typography className={classes.monthNumber}>{number}</Typography>
      </Box>
      <Typography className={classes.monthLabel}>Month</Typography>
      <Typography className={classes.topicLabel}>{topic}</Typography>
    </Box>
  );
};

export default MonthCard;