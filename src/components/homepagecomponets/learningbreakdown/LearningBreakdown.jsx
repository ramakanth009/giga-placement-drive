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
    background: 'linear-gradient(135deg, #f8fafc 0%, #eef4ff 100%)',
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
    marginBottom: '80px',
    '@media (max-width: 600px)': {
      marginBottom: '50px',
    },
  },
  title: {
    fontSize: '3rem !important',
    fontWeight: '700 !important',
    color: '#1e293b !important',
    marginBottom: '20px !important',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #4338ca 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    '@media (max-width: 960px)': {
      fontSize: '2.5rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
    },
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#64748b !important',
    maxWidth: '600px',
    margin: '0 auto !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      maxWidth: '90%',
    },
  },
  timelineContainer: {
    position: 'relative',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  timelineLine: {
    position: 'absolute',
    left: '50%',
    top: '0',
    bottom: '0',
    width: '4px',
    background: 'linear-gradient(180deg, #2A2B6A 0%, #4338ca 50%, #FFC614 100%)',
    borderRadius: '2px',
    transform: 'translateX(-50%)',
    '@media (max-width: 768px)': {
      left: '30px',
      transform: 'none',
    },
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '60px',
    '&:last-child': {
      marginBottom: '0',
    },
    '@media (max-width: 768px)': {
      marginBottom: '40px',
    },
  },
  timelineItemLeft: {
    paddingRight: '60px',
    textAlign: 'right',
    '@media (max-width: 768px)': {
      paddingRight: '0',
      paddingLeft: '80px',
      textAlign: 'left',
    },
  },
  timelineItemRight: {
    paddingLeft: '60px',
    textAlign: 'left',
    '@media (max-width: 768px)': {
      paddingLeft: '80px',
    },
  },
  phaseCard: {
    padding: '30px',
    borderRadius: '20px !important',
    backgroundColor: 'white !important',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08) !important',
    border: '1px solid rgba(148, 163, 184, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-8px) scale(1.02)',
      boxShadow: '0 25px 50px rgba(42, 43, 106, 0.15) !important',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '4px',
      background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 100%)',
    },
    '@media (max-width: 768px)': {
      padding: '24px',
      borderRadius: '16px !important',
    },
  },
  phaseNumber: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #4338ca 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    boxShadow: '0 8px 20px rgba(42, 43, 106, 0.3)',
    border: '4px solid white',
    zIndex: 2,
    '@media (max-width: 768px)': {
      left: '5px',
      width: '40px',
      height: '40px',
      fontSize: '1rem',
    },
  },
  phaseNumberLeft: {
    right: '-85px',
    '@media (max-width: 768px)': {
      right: 'auto',
      left: '5px',
    },
  },
  phaseNumberRight: {
    left: '-85px',
    '@media (max-width: 768px)': {
      left: '5px',
    },
  },
  phaseHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    '@media (max-width: 768px)': {
      marginBottom: '16px',
    },
  },
  phaseHeaderLeft: {
    justifyContent: 'flex-end',
    '@media (max-width: 768px)': {
      justifyContent: 'flex-start',
    },
  },
  phaseHeaderRight: {
    justifyContent: 'flex-start',
  },
  iconContainer: {
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
    transition: 'all 0.3s ease',
    '@media (max-width: 768px)': {
      width: '50px',
      height: '50px',
      marginRight: '16px',
    },
  },
  iconContainerLeft: {
    order: 2,
    marginRight: '0',
    marginLeft: '20px',
    '@media (max-width: 768px)': {
      order: 0,
      marginLeft: '0',
      marginRight: '16px',
    },
  },
  phaseIcon: {
    fontSize: '28px !important',
    color: 'white',
    '@media (max-width: 768px)': {
      fontSize: '24px !important',
    },
  },
  phaseHeaderText: {
    flex: 1,
  },
  phaseHeaderTextLeft: {
    order: 1,
    textAlign: 'right',
    '@media (max-width: 768px)': {
      order: 1,
      textAlign: 'left',
    },
  },
  phaseTitle: {
    fontSize: '1.5rem !important',
    fontWeight: '700 !important',
    color: '#1e293b !important',
    marginBottom: '8px !important',
    '@media (max-width: 768px)': {
      fontSize: '1.3rem !important',
    },
  },
  phaseMonths: {
    fontSize: '1rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    '@media (max-width: 768px)': {
      fontSize: '0.9rem !important',
    },
  },
  phaseDescription: {
    fontSize: '1rem !important',
    color: '#64748b !important',
    lineHeight: '1.7 !important',
    '@media (max-width: 768px)': {
      fontSize: '0.95rem !important',
      lineHeight: '1.6 !important',
    },
  },
  decorativeBlob: {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0.1,
    zIndex: 1,
  },
  blob1: {
    width: '300px',
    height: '300px',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #4338ca 100%)',
    top: '100px',
    right: '-150px',
    animation: '$float 8s ease-in-out infinite',
  },
  blob2: {
    width: '250px',
    height: '250px',
    background: 'linear-gradient(135deg, #FFC614 0%, #f59e0b 100%)',
    bottom: '100px',
    left: '-125px',
    animation: '$float 8s ease-in-out infinite 4s',
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0) rotate(0deg)',
    },
    '50%': {
      transform: 'translateY(-20px) rotate(10deg)',
    },
  },
  phaseIconColors: {
    0: {
      bg: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    },
    1: {
      bg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    },
    2: {
      bg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    },
    3: {
      bg: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    },
  },
});

const LearningBreakdown = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:768px)');
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll('[data-timeline-item]');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
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
      <Box className={classes.decorativeBlob} sx={classes.blob1} />
      <Box className={classes.decorativeBlob} sx={classes.blob2} />
      
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            Learning Breakdown
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            A thoughtfully structured journey that transforms you from a beginner to an industry-ready professional.
          </Typography>
        </Box>

        <Box className={classes.timelineContainer}>
          <Box className={classes.timelineLine} />
          
          {phases.map((phase, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visibleItems.includes(index);
            
            return (
              <Box
                key={index}
                className={`${classes.timelineItem} ${isLeft ? classes.timelineItemLeft : classes.timelineItemRight}`}
                data-timeline-item
                data-index={index}
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible 
                    ? 'translateX(0)' 
                    : `translateX(${isLeft && !isMobile ? '-50px' : '50px'})`,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: `${index * 0.2}s`,
                }}
              >
                <Paper className={classes.phaseCard} elevation={0}>
                  <Box 
                    className={`${classes.phaseNumber} ${isLeft ? classes.phaseNumberLeft : classes.phaseNumberRight}`}
                  >
                    {phase.number}
                  </Box>
                  
                  <Box className={`${classes.phaseHeader} ${isLeft ? classes.phaseHeaderLeft : classes.phaseHeaderRight}`}>
                    <Box 
                      className={`${classes.iconContainer} ${isLeft ? classes.iconContainerLeft : ''}`}
                      sx={{ 
                        background: classes.phaseIconColors[index].bg,
                      }}
                    >
                      {phase.icon}
                    </Box>
                    
                    <Box className={`${classes.phaseHeaderText} ${isLeft ? classes.phaseHeaderTextLeft : ''}`}>
                      <Typography className={classes.phaseTitle}>
                        {phase.title}
                      </Typography>
                      <Typography className={classes.phaseMonths}>
                        {phase.months}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography className={classes.phaseDescription}>
                    {phase.description}
                  </Typography>
                </Paper>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default LearningBreakdown;