import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Paper, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    position: 'relative',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    '@media (max-width: 960px)': {
      padding: '60px 0',
    },
    '@media (max-width: 600px)': {
      padding: '40px 0',
    },
  },
  container: {
    position: 'relative',
    zIndex: 3,
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
    '@media (max-width: 600px)': {
      marginBottom: '30px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '16px !important',
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#666 !important',
    maxWidth: '800px',
    margin: '0 auto !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      maxWidth: '90%',
    },
  },
  pathway: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  pathwayLine: {
    position: 'absolute',
    top: '80px',
    left: '0',
    right: '0',
    height: '6px',
    background: 'linear-gradient(90deg, #2A2B6A 0%, #4A63E7 50%, #FFC614 100%)',
    borderRadius: '6px',
    zIndex: 1,
    '@media (max-width: 960px)': {
      top: '0',
      bottom: '0',
      left: '80px',
      right: 'auto',
      width: '6px',
      height: 'auto',
    },
    '@media (max-width: 600px)': {
      left: '60px',
    },
  },
  phaseCard: {
    width: 'calc(25% - 24px)',
    padding: '24px',
    borderRadius: '16px !important',
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'white !important',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08) !important',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.12) !important',
    },
    '@media (max-width: 1200px)': {
      padding: '20px',
    },
    '@media (max-width: 960px)': {
      width: 'calc(100% - 90px)',
      marginLeft: '90px',
      marginBottom: '30px',
      minHeight: 'auto',
    },
    '@media (max-width: 600px)': {
      width: 'calc(100% - 70px)',
      marginLeft: '70px',
      padding: '16px',
    },
  },
  phaseIconContainer: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F3FF',
    marginBottom: '16px',
    position: 'relative',
    marginTop: '-50px',
    border: '4px solid white',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 1200px)': {
      width: '55px',
      height: '55px',
    },
    '@media (max-width: 960px)': {
      position: 'absolute',
      left: '-90px',
      top: '20px',
      marginTop: '0',
    },
    '@media (max-width: 600px)': {
      width: '50px',
      height: '50px',
      left: '-70px',
    },
  },
  phaseIcon: {
    fontSize: '28px !important',
    color: '#2A2B6A',
    '@media (max-width: 600px)': {
      fontSize: '24px !important',
    },
  },
  phaseNumber: {
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#FFC614',
    color: '#2A2B6A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '14px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 600px)': {
      width: '20px',
      height: '20px',
      fontSize: '12px',
    },
  },
  phaseTitle: {
    fontSize: '1.25rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '8px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
  },
  phaseMonths: {
    fontSize: '0.9rem !important',
    fontWeight: '600 !important',
    color: '#FFC614 !important',
    marginBottom: '12px !important',
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 198, 20, 0.1)',
    '@media (max-width: 600px)': {
      fontSize: '0.8rem !important',
      padding: '3px 10px',
    },
  },
  phaseDescription: {
    fontSize: '0.95rem !important',
    color: '#666 !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      lineHeight: '1.5 !important',
    },
  },
  phaseIconColors: {
    0: {
      bg: '#E6F7FF',
      color: '#0288D1',
    },
    1: {
      bg: '#FFF3E0',
      color: '#FF9800',
    },
    2: {
      bg: '#E8F5E9',
      color: '#4CAF50',
    },
    3: {
      bg: '#F3E5F5',
      color: '#9C27B0',
    },
  },
});

const LearningBreakdown = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:960px)');
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    setAnimated(true);
  }, []);

  const phases = [
    {
      number: 1,
      title: "Foundation Phase",
      months: "Months 1–3",
      description: "Develop essential core skills through practical tasks and focused coding exercises. This phase is designed to build a strong technical foundation. Upon completion, you will undertake an L1 assessment to determine the most suitable technology specialization aligned with your strengths and interests.",
      icon: <SchoolIcon className={classes.phaseIcon} />
    },
    {
      number: 2,
      title: "Specialization Phase",
      months: "Months 4–6",
      description: "Focus on learning more about the chosen area by working on real product features and specific tasks. This phase helps build practical skills and starts creating a professional portfolio. It also includes preparation for the L2 assessment to move forward.",
      icon: <BuildIcon className={classes.phaseIcon} />
    },
    {
      number: 3,
      title: "Product Building Phase",
      months: "Month 7–9",
      description: "Collaborate in teams to develop complete tech products, working through all stages—from MVP to deployment. Gain practical experience by building real-world solutions and explore opportunities to pitch and scale startup ideas with funding support.",
      icon: <CodeIcon className={classes.phaseIcon} />
    },
    {
      number: 4,
      title: "Career Launch Phase",
      months: "Months 10–12",
      description: "This phase focuses on job preparation through Career Readiness Training (CRT), including internship opportunities, technical assessments, mock interviews, and communication skill development. With 300+ hiring partners and 2000+ active job openings, this stage is designed to ensure a smooth and confident transition into professional roles.",
      icon: <RocketLaunchIcon className={classes.phaseIcon} />
    }
  ];

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            Learning Breakdown
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            A thoughtfully structured journey that transforms you from a beginner to an industry-ready professional.
          </Typography>
        </Box>

        <Box className={classes.pathway}>
          <Box className={classes.pathwayLine}></Box>
          
          {phases.map((phase, index) => (
            <Paper 
              key={index} 
              className={classes.phaseCard}
              sx={{
                opacity: animated ? 1 : 0,
                transform: animated ? (isMobile ? 'translateX(0)' : 'translateY(0)') : (isMobile ? 'translateX(-30px)' : 'translateY(30px)'),
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                transitionDelay: `${index * 0.2}s`,
              }}
              elevation={0}
            >
              <Box 
                className={classes.phaseIconContainer}
                sx={{ 
                  backgroundColor: classes.phaseIconColors[index].bg,
                  '& .MuiSvgIcon-root': { color: classes.phaseIconColors[index].color }
                }}
              >
                {phase.icon}
                <Box className={classes.phaseNumber}>{phase.number}</Box>
              </Box>
              
              <Typography className={classes.phaseTitle}>
                {phase.title}
              </Typography>
              
              <Typography className={classes.phaseMonths}>
                {phase.months}
              </Typography>
              
              <Typography className={classes.phaseDescription}>
                {phase.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default LearningBreakdown;