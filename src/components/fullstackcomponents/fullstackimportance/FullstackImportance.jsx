import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    background: 'linear-gradient(to bottom, #f0f6ff, #ffffff)',
    position: 'relative',
    overflow: 'hidden',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  mainTitle: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '10px !important',
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
  },
  highlightText: {
    color: '#FFC614 !important',
    fontWeight: 'bold !important',
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#666666 !important',
    maxWidth: '900px',
    margin: '0 auto !important',
    lineHeight: '1.8 !important',
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
      padding: '0 20px',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  boxesContainer: {
    marginTop: '30px',
  },
  advantageBox: {
    position: 'relative',
    padding: '30px 20px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: '15px !important',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05) !important',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1) !important',
    },
  },
  numberCircle: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: 'white',
  },
  circle1: {
    background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
  },
  circle2: {
    background: 'linear-gradient(135deg, #2ecc71, #27ae60)',
  },
  circle3: {
    background: 'linear-gradient(135deg, #3498db, #2980b9)',
  },
  circle4: {
    background: 'linear-gradient(135deg, #f39c12, #d35400)',
  },
  boxTitle: {
    fontSize: '1.25rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '10px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
  },
  boxText: {
    fontSize: '0.95rem !important',
    color: '#666666 !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  decorativeCircle: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(255, 198, 20, 0.1)',
    zIndex: 0,
  },
  circle: {
    width: '300px',
    height: '300px',
    top: '-150px',
    left: '-150px',
  },
  smallCircle: {
    width: '200px',
    height: '200px',
    bottom: '-100px',
    right: '-100px',
    background: 'rgba(42, 43, 106, 0.05)',
  },
});

const FullstackImportance = () => {
  const classes = useStyles();

  // Data for the advantage boxes
  const advantages = [
    {
      id: 1,
      title: 'Solve End-to-End Solutions',
      description: 'Create complete web applications from concept to deployment',
      circleClass: classes.circle1,
    },
    {
      id: 2,
      title: 'Reduce Development Overhead',
      description: 'Minimize communication gaps between different development teams',
      circleClass: classes.circle2,
    },
    {
      id: 3,
      title: 'Accelerate Product Development',
      description: 'Deliver integrated solutions faster and more efficiently',
      circleClass: classes.circle3,
    },
    {
      id: 4,
      title: 'Drive Innovation',
      description: 'Build applications with cutting-edge technological capabilities',
      circleClass: classes.circle4,
    },
  ];

  return (
    <Box className={classes.section}>
      {/* Decorative elements */}
      <Box className={`${classes.decorativeCircle} ${classes.circle}`} />
      <Box className={`${classes.decorativeCircle} ${classes.smallCircle}`} />

      <Container maxWidth="lg">
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.mainTitle}>
            Why Full Stack Development <span className={classes.highlightText}>Is Important To Learn?</span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            In Today's Competitive Tech Market, Full-Stack Developers Are Not Just Programmers – They Are
            Strategic Problem Solvers Who Bridge Multiple Technological Domains.
            Companies Are Actively Seeking Versatile Developers Who Can:
          </Typography>
        </Box>

        <Grid container spacing={3} className={classes.boxesContainer}>
          {advantages.map((advantage) => (
            <Grid item xs={12} sm={6} md={3} key={advantage.id}>
              <Paper elevation={0} className={classes.advantageBox}>
                <Box className={`${classes.numberCircle} ${advantage.circleClass}`}>
                  {advantage.id}
                </Box>
                <Typography variant="h6" className={classes.boxTitle}>
                  {advantage.title}
                </Typography>
                <Typography variant="body2" className={classes.boxText}>
                  {advantage.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FullstackImportance;