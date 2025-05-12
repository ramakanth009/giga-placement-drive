// src/components/common/fulltime/technologykit/SkillCategory.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SkillItem from './SkillItem';

const useStyles = makeStyles({
  categoryContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: '15px',
    padding: '30px',
    minHeight: '220px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: '8px',
      backgroundColor: '#4A63E7',
      borderRadius: '8px 0 0 8px !important',
    },
},
categoryTitle: {
    fontSize: '1.5rem !important',
    fontWeight: '600 !important',
    color: '#4A63E7 !important',
    marginBottom: '25px !important',
},
skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },
});

const SkillCategory = ({ title, skills }) => {
  const classes = useStyles();

  return (
    <Box className={classes.categoryContainer}>
      <Typography className={classes.categoryTitle}>{title}</Typography>
      <Box className={classes.skillsContainer}>
        {skills.map((skill, index) => (
          <SkillItem 
            key={index} 
            initials={skill.initials} 
            name={skill.name} 
          />
        ))}
      </Box>
    </Box>
  );
};

export default SkillCategory;