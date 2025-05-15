// 19. SkillItem Component
import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  skillItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px',
    backgroundColor: 'white',
    borderRadius: '50px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    width: 'fit-content',
    '@media (max-width: 1200px)': {
      padding: '5px 9px',
    },
    '@media (max-width: 960px)': {
      padding: '4px 8px',
    },
    '@media (max-width: 600px)': {
      padding: '4px 7px',
    },
    '@media (max-width: 480px)': {
      padding: '3px 6px',
    },
    '@media (max-width: 375px)': {
      padding: '2px 5px',
    },
  },
  iconCircle: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#E0E7FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px',
    '@media (max-width: 1200px)': {
      width: '28px',
      height: '28px',
      marginRight: '11px',
    },
    '@media (max-width: 960px)': {
      width: '26px',
      height: '26px',
      marginRight: '10px',
    },
    '@media (max-width: 600px)': {
      width: '24px',
      height: '24px',
      marginRight: '8px',
    },
    '@media (max-width: 480px)': {
      width: '22px',
      height: '22px',
      marginRight: '7px',
    },
    '@media (max-width: 375px)': {
      width: '20px',
      height: '20px',
      marginRight: '6px',
    },
  },
  iconText: {
    fontSize: '0.7rem !important',
    fontWeight: '600 !important',
    color: '#4A63E7 !important',
    '@media (max-width: 960px)': {
      fontSize: '0.65rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.6rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.55rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.5rem !important',
    },
  },
  skillText: {
    fontSize: '0.9rem !important',
    color: '#444 !important',
    fontWeight: '500 !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.75rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.65rem !important',
    },
  },
});

const SkillItem = ({ initials, name }) => {
  const classes = useStyles();

  return (
    <Box className={classes.skillItem}>
      <Box className={classes.iconCircle}>
        <Typography className={classes.iconText}>{initials}</Typography>
      </Box>
      <Typography className={classes.skillText}>{name}</Typography>
    </Box>
  );
};

export default SkillItem;
