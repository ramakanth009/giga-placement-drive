// 20. TechnologyKit Component
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SkillCategory from './SkillCategorycard';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    backgroundColor: '#ffffff',
    '@media (max-width: 1200px)': {
      padding: '55px 0',
    },
    '@media (max-width: 960px)': {
      padding: '50px 0',
    },
    '@media (max-width: 600px)': {
      padding: '45px 0',
    },
    '@media (max-width: 480px)': {
      padding: '40px 0',
    },
    '@media (max-width: 375px)': {
      padding: '35px 0',
    },
  },
  titleContainer: {
    marginBottom: '50px',
    '@media (max-width: 1200px)': {
      marginBottom: '45px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '40px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '35px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '25px',
    },
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
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.9rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.7rem !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.5rem !important',
      marginBottom: '8px !important',
    },
  },
  subtitle: {
    fontSize: '1.5rem !important',
    color: '#FFC614 !important',
    textAlign: 'center',
    fontWeight: '600 !important',
    marginBottom: '50px !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.4rem !important',
      marginBottom: '45px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.3rem !important',
      marginBottom: '40px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
      marginBottom: '35px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem !important',
      marginBottom: '30px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1rem !important',
      marginBottom: '25px !important',
    },
  },
  sectionTitle: {
    fontSize: '1.8rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    marginBottom: '30px !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.7rem !important',
      marginBottom: '28px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.6rem !important',
      marginBottom: '25px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.5rem !important',
      marginBottom: '22px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.4rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.3rem !important',
      marginBottom: '18px !important',
    },
  },
  categoriesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    marginTop: '20px',
    '@media (max-width: 1200px)': {
      gap: '22px',
      marginTop: '18px',
    },
    '@media (max-width: 960px)': {
      gap: '20px',
      marginTop: '16px',
    },
    '@media (max-width: 600px)': {
      gap: '18px',
      marginTop: '15px',
    },
    '@media (max-width: 480px)': {
      gap: '15px',
      marginTop: '12px',
    },
    '@media (max-width: 375px)': {
      gap: '12px',
      marginTop: '10px',
    },
  },
  categoryWrapper: {
    flex: '1 1 calc(33.333% - 16px)',
    minWidth: '300px',
    '@media (max-width: 1200px)': {
      minWidth: '280px',
    },
    '@media (max-width: 960px)': {
      flex: '1 1 calc(50% - 12px)',
      minWidth: '260px',
    },
    '@media (max-width: 600px)': {
      minWidth: '240px',
    },
    '@media (max-width: 480px)': {
      minWidth: '220px',
    },
    '@media (max-width: 375px)': {
      flex: '1 1 100%',
      minWidth: '200px',
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
