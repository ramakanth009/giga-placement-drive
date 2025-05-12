// src/components/common/fulltime/skillsmaster/SkillCategory.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  skillCategory: {
    position: 'absolute',
    textAlign: 'center',
    width: '230px',
    '@media (max-width: 1200px)': {
      width: '210px',
    },
    '@media (max-width: 960px)': {
      width: '190px',
    },
    '@media (max-width: 600px)': {
      width: '170px',
    },
    '@media (max-width: 480px)': {
      width: '150px',
    },
    '@media (max-width: 375px)': {
      width: '130px',
    },
  },
  skillText: {
    fontSize: '1.25rem !important',
    fontWeight: '500 !important',
    color: '#4A4A4A !important',
    marginBottom: '8px !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.2rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.15rem !important',
      marginBottom: '7px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      marginBottom: '5px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
      marginBottom: '4px !important',
    },
  },
  skillLine: {
    height: '3px',
    width: '100%',
    background: 'linear-gradient(90deg, #475AD7 0%, #A8B5FC 100%)',
    borderRadius: '10px',
    '@media (max-width: 600px)': {
      height: '2.5px',
    },
    '@media (max-width: 375px)': {
      height: '2px',
    },
  },
});

const SkillCategory = ({ title, position }) => {
  const classes = useStyles();

  return (
    <Box className={classes.skillCategory} sx={position}>
      <Typography className={classes.skillText}>
        {title}
      </Typography>
      <Box className={classes.skillLine}></Box>
    </Box>
  );
};

export default SkillCategory;