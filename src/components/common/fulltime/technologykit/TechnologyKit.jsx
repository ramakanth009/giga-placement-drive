// src/components/common/fulltime/technologykit/TechnologyKit.jsx
import React, { useState } from 'react';
import { Box, Typography, Container, Paper, Tabs, Tab } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SkillCategory from './SkillCategorycard';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    backgroundColor: '#f8faff',
    backgroundImage: 'linear-gradient(135deg, #f8faff 0%, #ffffff 100%)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(74, 99, 231, 0.05) 0%, rgba(74, 99, 231, 0) 70%)',
      top: '-150px',
      right: '-100px',
      zIndex: 1,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255, 198, 20, 0.05) 0%, rgba(255, 198, 20, 0) 70%)',
      bottom: '-200px',
      left: '-150px',
      zIndex: 1,
    },
    '@media (max-width: 960px)': {
      padding: '60px 0',
    },
    '@media (max-width: 600px)': {
      padding: '50px 0',
    },
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  titleContainer: {
    marginBottom: '60px',
    position: 'relative',
    '@media (max-width: 960px)': {
      marginBottom: '40px',
    },
  },
  mainTitle: {
    fontSize: '2.8rem !important',
    fontWeight: '800 !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '16px !important',
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #4A63E7 0%, #FFC614 100%)',
      borderRadius: '2px',
    },
    '& span': {
      color: '#4A63E7 !important',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '30%',
        background: 'rgba(255, 198, 20, 0.2)',
        zIndex: -1,
      },
    },
    '@media (max-width: 960px)': {
      fontSize: '2.4rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
    },
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#555 !important',
    textAlign: 'center',
    fontWeight: '400 !important',
    marginTop: '30px !important',
    maxWidth: '800px',
    margin: '0 auto !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
      maxWidth: '95%',
    },
  },
  tabs: {
    marginBottom: '40px',
    '& .MuiTabs-flexContainer': {
      justifyContent: 'center',
    },
    '& .MuiTab-root': {
      color: '#666 !important',
      fontSize: '1rem !important',
      fontWeight: '500 !important',
      padding: '12px 24px !important',
      transition: 'all 0.3s ease !important',
      borderRadius: '30px !important',
      marginRight: '10px !important',
      textTransform: 'none !important',
      '&.Mui-selected': {
        color: '#4A63E7 !important',
        backgroundColor: 'rgba(74, 99, 231, 0.1) !important',
      },
    },
    '& .MuiTabs-indicator': {
      display: 'none !important',
    },
    '@media (max-width: 600px)': {
      '& .MuiTab-root': {
        padding: '8px 16px !important',
        fontSize: '0.9rem !important',
      },
    },
  },
  categoriesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    '@media (max-width: 960px)': {
      gap: '25px',
    },
    '@media (max-width: 600px)': {
      gap: '20px',
    },
  },
  categoryWrapper: {
    flex: '1 1 calc(33.333% - 20px)',
    minWidth: '300px',
    transform: 'translateY(0)',
    transition: 'transform 0.5s ease, box-shadow 0.5s ease',
    '&:hover': {
      transform: 'translateY(-10px)',
    },
    '@media (max-width: 960px)': {
      flex: '1 1 calc(50% - 20px)',
      minWidth: '260px',
    },
    '@media (max-width: 600px)': {
      flex: '1 1 100%',
    },
  },
  tabContent: {
    animation: '$fadeIn 0.6s ease-in-out',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
});

const TechnologyKit = ({ programName, categories, title, subtitle }) => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const [visibleCategories, setVisibleCategories] = useState(categories);

  // For tab navigation - you can add more tabs like 'All', 'Frontend', 'Backend' etc.
  const tabs = ['All Skills', 'Programming', 'Frameworks', 'Tools'];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    
    // Filter categories based on tab selection (just an example)
    if (newValue === 0) {
      setVisibleCategories(categories);
    } else if (newValue === 1) {
      setVisibleCategories(categories.filter(cat => 
        cat.title.includes('Programming') || cat.title.includes('Language')
      ));
    } else if (newValue === 2) {
      setVisibleCategories(categories.filter(cat => 
        cat.title.includes('Framework') || cat.title.includes('Libraries')
      ));
    } else {
      setVisibleCategories(categories.filter(cat => 
        !cat.title.includes('Programming') && 
        !cat.title.includes('Language') && 
        !cat.title.includes('Framework') && 
        !cat.title.includes('Libraries')
      ));
    }
  };

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.mainTitle}>
            {title} <span>{programName}</span>
          </Typography>
          <Typography className={classes.subtitle}>
            {subtitle}
          </Typography>
        </Box>

        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          className={classes.tabs}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab} />
          ))}
        </Tabs>

        <Box className={classes.tabContent}>
          <Box className={classes.categoriesContainer}>
            {visibleCategories.map((category, index) => (
              <Box 
                key={index} 
                className={classes.categoryWrapper} 
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transitionDelay: `${index * 0.05}s`
                }}
              >
                <SkillCategory 
                  title={category.title}
                  skills={category.skills}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TechnologyKit;