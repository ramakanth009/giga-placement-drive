import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ProjectCard from '../../common/projectcard/ProjectCard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #FFFFFF 4.46%, #B5D1ED 100%)',
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
    textAlign: 'center',
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
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#333366 !important',
    marginBottom: '16px !important',
    '& span': {
      color: '#FFB800 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
      marginBottom: '15px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.1rem !important',
      marginBottom: '14px !important',
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
  projectsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    padding: '0 15px',
    '@media (max-width: 1200px)': {
      gap: '25px',
      padding: '0 20px',
    },
    '@media (max-width: 960px)': {
      gap: '20px',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 30px',
    },
    '@media (max-width: 600px)': {
      gap: '18px',
      padding: '0 20px',
    },
    '@media (max-width: 480px)': {
      gap: '15px',
      padding: '0 15px',
    },
    '@media (max-width: 375px)': {
      gap: '12px',
      padding: '0 10px',
    },
  },
});

const ProjectsSection = () => {
  const classes = useStyles();

  const projects = [
    {
      icon: <ShowChartIcon fontSize="large" />,
      title: "Sales Forecasting Model",
      description: "Predict Future Sales Using Time Series Analysis And Machine Learning Algorithms. Demonstrate Your Ability To Impact Business Revenue Directly."
    },
    {
      icon: <GroupIcon fontSize="large" />,
      title: "Customer Segmentation Analysis",
      description: "Apply Clustering Techniques To Identify Customer Segments For Targeted Marketing Strategies. Show How You Can Drive Personalization And Increase ROI."
    },
    {
      icon: <TrendingUpIcon fontSize="large" />,
      title: "Stock Market Prediction",
      description: "Build Models To Analyze Market Trends And Predict Stock Price Movements. Showcase Your Quantitative Analysis And Financial Modeling Skills."
    },
    {
      icon: <SentimentSatisfiedAltIcon fontSize="large" />,
      title: "Real-Time Sentiment Analysis",
      description: "Develop A Tool That Analyzes Sentiment From Social Media Data Streams. Demonstrate Your NLP Skills And Ability To Extract Insights From Unstructured Data."
    },
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.titleContainer}>
        <Typography variant="h2" className={classes.title}>
          Projects That <span>Get You Hired</span>
        </Typography>
      </Box>

      <Box className={classes.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            icon={project.icon}
            title={project.title}
            description={project.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsSection;