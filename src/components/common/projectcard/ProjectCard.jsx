import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  projectCard: {
    width: '100%',
    minHeight:'250px',
    maxWidth: '300px',
    position: 'relative',
    padding: '20px',
    borderRadius: '10px',
    background: 'white',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    borderTopRightRadius: '50%',
    marginTop: '50px',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    '@media (max-width: 960px)': {
      maxWidth: '100%',
      marginBottom: '40px',
    },
  },
  iconContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#0F3460',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    position: 'absolute',
    top: '5px',
    left: '10px',
    zIndex: 1,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '18px !important',
    fontWeight: 'bold !important', 
    color: '#0A487A !important',
    marginBottom: '12px !important',
    marginTop: '30px !important',
  },
  description: {
    fontSize: '14px !important',
    color: '#6C6C6C !important',
    lineHeight: '1.5 !important',
  },

});

const ProjectCard = ({ icon, title, description }) => {
  const classes = useStyles();

  return (
    <Box sx={{ position: 'relative' }}>
      <Box className={classes.iconContainer}>
        {icon}
      </Box>
      <Box className={classes.projectCard}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body2" className={classes.description}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;