// src/components/common/fulltime/skillsmaster/SkillCategory.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  skillCategory: {
    position: 'absolute',
    textAlign: 'center',
    width: '230px',
  },
  skillText: {
    fontSize: '1.25rem !important',
    fontWeight: '500 !important',
    color: '#4A4A4A !important',
    marginBottom: '8px !important',
  },
  skillLine: {
    height: '3px',
    width: '100%',
    background: 'linear-gradient(90deg, #475AD7 0%, #A8B5FC 100%)',
    borderRadius: '10px',
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