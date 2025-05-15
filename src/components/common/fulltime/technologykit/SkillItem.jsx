// src/components/common/fulltime/technologykit/SkillItem.jsx
import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  skillItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    backgroundColor: '#f8faff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
    border: '1px solid rgba(74, 99, 231, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'default',
    '&:hover': {
      backgroundColor: 'rgba(74, 99, 231, 0.08)',
      transform: 'translateY(-3px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
      '& $iconCircle': {
        backgroundColor: '#4A63E7',
        color: 'white',
        transform: 'rotateY(180deg)',
      },
    },
    '@media (max-width: 960px)': {
      padding: '7px 14px',
    },
    '@media (max-width: 600px)': {
      padding: '6px 12px',
    },
  },
  iconCircle: {
    width: '34px',
    height: '34px',
    borderRadius: '10px',
    backgroundColor: 'rgba(74, 99, 231, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px',
    transition: 'all 0.5s ease',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
    '@media (max-width: 960px)': {
      width: '30px',
      height: '30px',
      marginRight: '10px',
    },
    '@media (max-width: 600px)': {
      width: '28px',
      height: '28px',
      marginRight: '8px',
    },
  },
  iconText: {
    fontSize: '0.85rem !important',
    fontWeight: '700 !important',
    color: '#4A63E7 !important',
    transition: 'color 0.3s ease',
    '@media (max-width: 600px)': {
      fontSize: '0.8rem !important',
    },
  },
  skillText: {
    fontSize: '0.95rem !important',
    color: '#444 !important',
    fontWeight: '500 !important',
    transition: 'color 0.3s ease',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
});

const SkillItem = ({ initials, name }) => {
  const classes = useStyles();

  return (
    <Tooltip title={`Experience with ${name}`} arrow placement="top">
      <Box className={classes.skillItem}>
        <Box className={classes.iconCircle}>
          <Typography className={classes.iconText}>{initials}</Typography>
        </Box>
        <Typography className={classes.skillText}>{name}</Typography>
      </Box>
    </Tooltip>
  );
};

export default SkillItem;