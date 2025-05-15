// src/components/common/fulltime/technologykit/SkillCategorycard.jsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SkillItem from './SkillItem';

const useStyles = makeStyles({
  categoryContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: '30px 25px',
    minHeight: '220px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.07)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
      '& $categoryTitle::after': {
        width: '70px',
      },
    },
    '@media (max-width: 960px)': {
      padding: '25px 20px',
    },
    '@media (max-width: 600px)': {
      padding: '20px 15px',
    },
  },
  categoryTitle: {
    fontSize: '1.5rem !important',
    fontWeight: '700 !important',
    color: '#2A2B6A !important',
    marginBottom: '25px !important',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '0',
      width: '40px',
      height: '3px',
      background: 'linear-gradient(90deg, #4A63E7 0%, #FFC614 100%)',
      transition: 'width 0.3s ease',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.4rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
      marginBottom: '18px !important',
    },
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    '@media (max-width: 960px)': {
      gap: '10px',
    },
  },
  decorElement: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(74, 99, 231, 0.03) 0%, rgba(74, 99, 231, 0) 70%)',
    width: '150px',
    height: '150px',
    bottom: '-50px',
    right: '-50px',
    zIndex: 0,
  },
});

const SkillCategory = ({ title, skills }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.categoryContainer} elevation={0}>
      <Box className={classes.decorElement}></Box>
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
    </Paper>
  );
};

export default SkillCategory;