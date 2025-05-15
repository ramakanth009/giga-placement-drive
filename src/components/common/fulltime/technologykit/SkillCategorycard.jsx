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
    '@media (max-width: 1200px)': {
      padding: '28px',
      minHeight: '210px',
    },
    '@media (max-width: 960px)': {
      padding: '25px',
      minHeight: '200px',
    },
    '@media (max-width: 600px)': {
      padding: '20px',
      minHeight: '190px',
    },
    '@media (max-width: 480px)': {
      padding: '18px',
      minHeight: '180px',
    },
    '@media (max-width: 375px)': {
      padding: '15px',
      minHeight: '170px',
      '&::before': {
        width: '6px',
      },
    },
  },
  categoryTitle: {
    fontSize: '1.5rem !important',
    fontWeight: '600 !important',
    color: '#4A63E7 !important',
    marginBottom: '25px !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.4rem !important',
      marginBottom: '22px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.3rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem !important',
      marginBottom: '16px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1rem !important',
      marginBottom: '14px !important',
    },
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    '@media (max-width: 1200px)': {
      gap: '11px',
    },
    '@media (max-width: 960px)': {
      gap: '10px',
    },
    '@media (max-width: 600px)': {
      gap: '9px',
    },
    '@media (max-width: 480px)': {
      gap: '8px',
    },
    '@media (max-width: 375px)': {
      gap: '7px',
    },
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