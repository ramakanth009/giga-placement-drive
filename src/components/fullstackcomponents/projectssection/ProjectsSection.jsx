import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ProjectCard from '../../common/projectcard/ProjectCard';
import StoreIcon from '@mui/icons-material/Store';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskIcon from '@mui/icons-material/Assignment';
import ChatIcon from '@mui/icons-material/Chat';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #FFFFFF 4.46%, #B5D1ED 100%)',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#333366 !important',
    marginBottom: '16px !important',
    '& span': {
      color: '#FFB800 !important',
    },
  },
  projectsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
});

const ProjectsSection = () => {
  const classes = useStyles();

  const projects = [
    {
      icon: <StoreIcon fontSize="large" />,
      title: "E-Commerce Platform",
      description: "Develop A Full-Featured Online Shopping Website With Payment Integration. Demonstrate Complex Frontend And Backend Interactions."
    },
    {
      icon: <DashboardIcon fontSize="large" />,
      title: "Social Media Dashboard",
      description: "Create A Real-Time Dashboard With User Authentication, Post Management, And Analytics. Showcase Your Full-Stack Development Skills."
    },
    {
      icon: <TaskIcon fontSize="large" />,
      title: "Collaborative Task Management App",
      description: "Build A Project Management Tool With Real-Time Updates And User Collaboration Features. Highlight Your Ability To Create Scalable Web Applications."
    },
    {
      icon: <ChatIcon fontSize="large" />,
      title: "Real-Time Chat Application",
      description: "Develop A Messaging Platform With WebSocket Integration. Demonstrate Advanced Communication Technologies."
    }
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