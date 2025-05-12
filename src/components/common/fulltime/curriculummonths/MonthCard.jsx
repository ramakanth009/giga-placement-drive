// src/components/common/fulltime/curriculummonths/MonthCard.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  cardContainer: {
    width: '220px',
    height: '180px',
    backgroundColor: '#F5F7FF',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
    boxSizing: 'border-box',
  },
  monthCircle: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#475AD7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15px',
  },
  monthNumber: {
    color: '#FFFFFF',
    fontSize: '2rem !important', 
    fontWeight: '600 !important',
  },
  monthLabel: {
    color: '#2A2B6A',
    fontSize: '1.5rem !important',
    fontWeight: '600 !important',
    marginBottom: '8px !important',
  },
  topicLabel: {
    color: '#555555',
    fontSize: '1rem !important',
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