// src/components/common/fulltime/technologykit/TechnologyKit.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SkillCategory from './SkillCategory';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    backgroundColor: '#ffffff',
  },
  titleContainer: {
    marginBottom: '50px',
  },
  mainTitle: {
    fontSize: '2.5rem !important',
    fontWeight: '700 !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '15px !important',
    '& span': {
      color: '#FFC614 !important',
    },
  },
  subtitle: {
    fontSize: '1.5rem !important',
    color: '#FFC614 !important',
    textAlign: 'center',
    fontWeight: '600 !important',
    marginBottom: '50px !important',
  },
  sectionTitle: {
    fontSize: '1.8rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    marginBottom: '30px !important',
  },
  categoriesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    marginTop: '20px',
  },
  categoryWrapper: {
    flex: '1 1 calc(33.333% - 16px)',
    minWidth: '300px',
    '@media (max-width: 960px)': {
      flex: '1 1 calc(50% - 12px)',
    },
    '@media (max-width: 600px)': {
      flex: '1 1 100%',
    },
  },
});

const TechnologyKit = ({ programName, categories }) => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Box className={classes.titleContainer}>
          <Typography className={classes.mainTitle}>
            Your Technology Kit for <span>{programName}</span>
          </Typography>
          <Typography className={classes.subtitle}>
            Master tools used in real-world data science projects.
          </Typography>
        </Box>

        <Typography className={classes.sectionTitle}>Technical Skills</Typography>

        <Box className={classes.categoriesContainer}>
          {categories.map((category, index) => (
            <Box key={index} className={classes.categoryWrapper}>
              <SkillCategory 
                title={category.title}
                skills={category.skills}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TechnologyKit;