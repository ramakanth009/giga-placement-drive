import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CodeIcon from '@mui/icons-material/Code';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import SpeedIcon from '@mui/icons-material/Speed';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    width: '100%',
    padding: '40px 0',
    overflow: 'hidden',
    background: 'linear-gradient(to bottom, #f7f9ff 0%, #ffffff 100%)',
  },
  // Custom background element
  backgroundGradient: {
    position: 'absolute',
    width: '767px',
    height: '566px',
    top: '-100px',
    left: '-150px',
    background: '#BCE1FF',
    borderRadius: '50%',
    opacity: '0.3',
    filter: 'blur(100px)',
    zIndex: '-1',
  },
  title: {
    fontSize: "2.5rem !important",
    fontWeight: 'bold !important',
    textAlign: 'center',
    marginBottom: '12px !important',
    color: "#2A2B6A !important",
    position: 'relative',
    zIndex: '2',
    '& span': {
      color: '#FFC614 !important',
    },
    "@media (max-width: 960px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem !important",
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    textAlign: 'center',
    color: '#555 !important',
    marginBottom: '36px !important',
    maxWidth: '90%',
    margin: '0 auto 36px auto !important',
    position: 'relative',
    zIndex: '2',
    "@media (max-width: 960px)": {
      fontSize: '1rem !important',
      marginBottom: '30px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.95rem !important',
      marginBottom: '24px !important',
      maxWidth: '95%',
    },
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '24px 20px',
    height: '100%',
    position: 'relative',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    zIndex: '1',
    transform: 'translateY(0)',
    transition: 'all 0.3s ease-out',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
      '& $iconContainer': {
        transform: 'scale(1.05)',
      }
    },
    "@media (max-width: 960px)": {
      height: '100%',
      padding: '20px 16px',
    },
    "@media (max-width: 600px)": {
      padding: '18px 14px',
    },
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '40px',
    width: '100%',
    padding: '0 24px',
    gap: '30px',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: '1',
    "@media (max-width: 1200px)": {
      gap: '25px',
    },
    "@media (max-width: 960px)": {
      gap: '20px',
      padding: '0 15px',
    },
    "@media (max-width: 600px)": {
      gap: '15px',
      padding: '0 10px',
    },
  },
  cardWrapper: {
    width: '23%',
    '@media (max-width: 1200px)': {
      width: '46%',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      maxWidth: '350px',
    }
  },
  iconContainer: {
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '18px',
    transition: 'transform 0.4s ease',
    "@media (max-width: 600px)": {
      width: '45px',
      height: '45px',
      marginBottom: '14px',
    },
  },
  advantageTitle: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '8px !important',
    minHeight: '30px !important',
    "@media (max-width: 960px)": {
      fontSize: '1.1rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1rem !important',
      minHeight: 'auto !important',
    },
  },
  advantageDescription: {
    fontSize: '0.95rem !important',
    color: '#555 !important',
    lineHeight: '1.5 !important',
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
    },
  },
  headerContainer: {
    position: 'relative',
    marginBottom: '40px',
    zIndex: '1',
  },
  decorCircle: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(42, 43, 106, 0.05) 0%, rgba(42, 43, 106, 0) 70%)',
    zIndex: 0,
  },
  circle1: {
    width: '300px',
    height: '300px',
    top: '-150px',
    right: '-50px',
  },
  circle2: {
    width: '400px',
    height: '400px',
    bottom: '-150px',
    left: '-100px',
    background: 'radial-gradient(circle, rgba(255, 198, 20, 0.08) 0%, rgba(255, 198, 20, 0) 70%)',
  },
});

const FullStackImportance = () => {
  const classes = useStyles();

  // Define advantages with icons and colors
  const advantages = [
    {
      icon: <CodeIcon sx={{ fontSize: '2rem' }} />,
      title: 'Solve End-to-End Solutions',
      description: 'Create complete web applications from concept to deployment',
      color: '#8a5cf7',
    },
    {
      icon: <GroupWorkIcon sx={{ fontSize: '2rem' }} />,
      title: 'Reduce Development Overhead',
      description: 'Minimize communication gaps between different development teams',
      color: '#4376eb',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: '2rem' }} />,
      title: 'Accelerate Product Development',
      description: 'Deliver integrated solutions faster and more efficiently',
      color: '#f07c3e',
    },
    {
      icon: <EmojiObjectsIcon sx={{ fontSize: '2rem' }} />,
      title: 'Drive Innovation',
      description: 'Build applications with cutting-edge technological capabilities',
      color: '#e8518d',
    },
  ];

  return (
    <Box className={classes.wrapper}>
      {/* Custom background gradient on left side */}
      <Box className={classes.backgroundGradient} />
      
      {/* Background circles */}
      <Box className={`${classes.decorCircle} ${classes.circle1}`} />
      <Box className={`${classes.decorCircle} ${classes.circle2}`} />

      <Box className={classes.headerContainer}>
        <Typography variant="h2" className={classes.title}>
          Why Full Stack Development <span>Is Important To Learn</span>
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          In Today's Competitive Tech Market, Full-Stack Developers Are Not Just Programmers – They Are
          Strategic Problem Solvers Who Bridge Multiple Technological Domains. Companies Are Actively
          Seeking Versatile Developers Who Can:
        </Typography>
      </Box>

      <Box className={classes.cardsContainer}>
        {advantages.map((advantage, index) => (
          <Box className={classes.cardWrapper} key={index}>
            <Box className={classes.card}>
              <Box 
                className={classes.iconContainer} 
                sx={{ backgroundColor: `${advantage.color}20` }}
              >
                <Box sx={{ color: advantage.color }}>
                  {advantage.icon}
                </Box>
              </Box>
              <Typography className={classes.advantageTitle}>
                {advantage.title}
              </Typography>
              <Typography className={classes.advantageDescription}>
                {advantage.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FullStackImportance;