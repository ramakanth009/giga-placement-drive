// src/components/blog/BlogHero.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  heroSection: {
    position: 'relative',
    backgroundColor: '#2A2B6A',
    padding: '80px 0',
    color: 'white',
    overflow: 'hidden',
    '@media (max-width: 960px)': {
      padding: '60px 0',
    },
    '@media (max-width: 600px)': {
      padding: '50px 0',
    },
  },
  contentContainer: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
  },
  title: {
    fontSize: '3.5rem !important',
    fontWeight: 'bold !important',
    marginBottom: '20px !important',
    background: 'linear-gradient(45deg, #FFFFFF 30%, #FFC614 90%)',
    backgroundClip: 'text !important',
    textFillColor: 'transparent !important',
    WebkitBackgroundClip: 'text !important',
    WebkitTextFillColor: 'transparent !important',
    '@media (max-width: 960px)': {
      fontSize: '2.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2.2rem !important',
    },
  },
  subtitle: {
    fontSize: '1.2rem !important',
    maxWidth: '700px',
    margin: '0 auto !important',
    opacity: 0.9,
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
      maxWidth: '90%',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  shapeDivider: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    overflow: 'hidden',
    lineHeight: 0,
    transform: 'rotate(180deg)',
    '& svg': {
      position: 'relative',
      display: 'block',
      width: 'calc(100% + 1.3px)',
      height: '70px',
    },
    '& .shapeFill': {
      fill: '#FFFFFF',
    },
  },
  backgroundDots: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 2px, transparent 2px)',
    backgroundSize: '30px 30px',
    zIndex: 1,
  },
  backgroundBlob1: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 198, 20, 0.1)',
    top: '-100px',
    right: '-100px',
    filter: 'blur(70px)',
    zIndex: 1,
  },
  backgroundBlob2: {
    position: 'absolute',
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    backgroundColor: 'rgba(74, 76, 155, 0.2)',
    bottom: '-80px',
    left: '-50px',
    filter: 'blur(60px)',
    zIndex: 1,
  },
});

const BlogHero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroSection}>
      <Box className={classes.backgroundDots} />
      <Box className={classes.backgroundBlob1} />
      <Box className={classes.backgroundBlob2} />
      
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Typography variant="h1" className={classes.title}>
          Gigaversity Blog
        </Typography>
        <Typography variant="h6" className={classes.subtitle}>
          Insights, guides, and resources to help you master your tech career through project-based learning and hands-on experience
        </Typography>
      </Container>
      
      <Box className={classes.shapeDivider}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shapeFill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shapeFill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shapeFill"></path>
        </svg>
      </Box>
    </Box>
  );
};

export default BlogHero;