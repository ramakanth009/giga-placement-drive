// src/components/common/fulltime/technologykit/SkillItem.jsx
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
},
iconText: {
    fontSize: '0.7rem !important',
    fontWeight: '600 !important',
    color: '#4A63E7 !important',
  },
  skillText: {
    fontSize: '0.9rem !important',
    color: '#444 !important',
    fontWeight: '500 !important',
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