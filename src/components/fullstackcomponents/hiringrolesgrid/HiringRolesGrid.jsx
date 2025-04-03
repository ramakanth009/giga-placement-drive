import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  section: {
    padding: '70px 0',
    background: '#ffffff',
    position: 'relative',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
  },
  highlightText: {
    color: '#FFC614 !important',
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#666666 !important',
    maxWidth: '900px',
    margin: '0 auto !important',
    lineHeight: '1.8 !important',
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      padding: '0 20px',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    },
  },
  rolesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    width: '100%',
  },
  roleBox: {
    padding: '25px 15px',
    width: '220px',
    minHeight: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      borderColor: '#2A2B6A',
    },
    '@media (max-width: 960px)': {
      width: 'calc(33.33% - 20px)',
      minWidth: '200px',
    },
    '@media (max-width: 600px)': {
      width: 'calc(50% - 20px)',
      minWidth: '150px',
    },
  },
  iconContainer: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    backgroundColor: '#0972d3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15px',
    '& img': {
      width: '35px',
      height: '35px',
      objectFit: 'contain',
    },
  },
  roleTitle: {
    fontSize: '1.1rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center !important',
    lineHeight: '1.3 !important',
  },
  highlight: {
    fontWeight: 'bold !important',
  },
});

const HiringRolesBoxes = () => {
  const classes = useStyles();

  // Data for roles
  const roles = [
    {
      title: 'Data Analyst',
      icon: '📊', // This would be replaced with actual image paths
    },
    {
      title: 'Frontend Developer',
      icon: '🖥️',
    },
    {
      title: 'Backend Developer',
      icon: '⚙️',
    },
    {
      title: 'Full Stack Developer',
      icon: '💻',
    },
    {
      title: 'Node.js Developer',
      icon: '📱',
    },
    {
      title: 'React Developer',
      icon: '⚛️',
    },
    {
      title: 'Cloud Developer (Entry Level)',
      icon: '☁️',
    },
    {
      title: 'DevOps Engineer Intern',
      icon: '🔄',
    }
  ];

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            Get Trained For The Roles <span className={classes.highlightText}>Companies Are Hiring For!</span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            In Just 30 Days, Launch Your Career In One Of Today's Most Dynamic Tech Fields. Our Full Stack 
            Development Program Connects You Directly With Hiring Partners Looking For Fresh Talent – All For 
            Less Than <span className={classes.highlight}>Your Monthly Data Recharge</span>.
          </Typography>
        </Box>

        <Box className={classes.rolesContainer}>
          {roles.map((role, index) => (
            <Box key={index} className={classes.roleBox}>
              <Box className={classes.iconContainer}>
                <Typography variant="h5" style={{color: 'white'}}>{role.icon}</Typography>
              </Box>
              <Typography className={classes.roleTitle}>
                {role.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HiringRolesBoxes;