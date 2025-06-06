import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Chip, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    background: 'linear-gradient(135deg, #f8fafc 0%, #eef4ff 100%)',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'radial-gradient(rgba(42, 43, 106, 0.03) 2px, transparent 2px)',
    backgroundSize: '40px 40px',
    zIndex: 0,
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
    zIndex: 1,
    position: 'relative',
  },
  title: {
    fontSize: '3rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    lineHeight: '1.2 !important',
    '@media (max-width: 960px)': {
      fontSize: '2.5rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
    },
  },

  subtitle: {
    fontSize: '1.2rem !important',
    color: '#666 !important',
    maxWidth: '800px',
    margin: '0 auto !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  journeyContainer: {
    position: 'relative',
    maxWidth: '1400px',
    margin: '0 auto',
    zIndex: 1,
  },
  timeline: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '20px',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      gap: '40px',
    },
  },
  timelineConnector: {
    position: 'absolute',
    top: '120px',
    left: '12.5%',
    right: '12.5%',
    height: '4px',
    background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 50%, #2A2B6A 100%)',
    borderRadius: '2px',
    zIndex: 0,
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  progressLine: {
    position: 'absolute',
    top: '120px',
    left: '12.5%',
    height: '4px',
    background: '#FFC614',
    borderRadius: '2px',
    zIndex: 1,
    transition: 'width 2s ease-in-out',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  phaseCard: {
    position: 'relative',
    width: '350px',
    minHeight: '450px',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    background: 'white',
    borderRadius: '20px !important',
    border: '2px solid transparent',
    boxShadow: '0 8px 32px rgba(42, 43, 106, 0.1) !important',
    zIndex: 2,
    '&:hover': {
      transform: 'translateY(-10px) scale(1.02)',
      boxShadow: '0 20px 60px rgba(42, 43, 106, 0.2) !important',
      borderColor: '#FFC614',
    },
    '@media (max-width: 960px)': {
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
    },
  },
  activeCard: {
    transform: 'translateY(-10px) scale(1.02)',
    boxShadow: '0 20px 60px rgba(42, 43, 106, 0.2) !important',
    borderColor: '#FFC614',
  },
  phaseNumber: {
    position: 'absolute',
    top: '-25px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1a1b4a 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    boxShadow: '0 8px 20px rgba(42, 43, 106, 0.3)',
    zIndex: 3,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
    marginBottom: '20px',
  },
  phaseIcon: {
    fontSize: '48px !important',
    color: '#FFC614',
    backgroundColor: 'rgba(255, 198, 20, 0.1)',
    borderRadius: '50%',
    padding: '20px',
    transition: 'all 0.3s ease',
  },
  cardContent: {
    padding: '20px 25px 25px !important',
    textAlign: 'center',
  },
  phaseTitle: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '8px !important',
  },
  duration: {
    fontSize: '1rem !important',
    color: '#FFC614 !important',
    fontWeight: '600 !important',
    marginBottom: '15px !important',
  },
  description: {
    fontSize: '0.95rem !important',
    color: '#666 !important',
    lineHeight: '1.6 !important',
    marginBottom: '20px !important',
  },
  highlightsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: '15px',
  },
  highlight: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.85rem !important',
    color: '#2A2B6A !important',
    fontWeight: '500 !important',
  },
  highlightIcon: {
    fontSize: '16px !important',
    color: '#FFC614',
    marginRight: '8px',
  },
  statsContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '10px',
  },
  statChip: {
    backgroundColor: 'rgba(42, 43, 106, 0.05) !important',
    color: '#2A2B6A !important',
    fontSize: '0.75rem !important',
    fontWeight: '600 !important',
    padding: '4px 8px !important',
  },
  footer: {
    textAlign: 'center',
    marginTop: '60px',
    zIndex: 1,
    position: 'relative',
  },
  ctaButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    padding: '12px 30px !important',
    borderRadius: '30px !important',
    fontSize: '1.1rem !important',
    fontWeight: 'bold !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: '#2A2B6A !important',
      color: '#FFC614 !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 25px rgba(42, 43, 106, 0.3) !important',
    },
  },
});

const InteractiveLearningJourney = () => {
  const classes = useStyles();
  const [activePhase, setActivePhase] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  const phases = [
    {
      number: '01',
      title: 'Foundation Phase',
      duration: 'Months 1-3',
      description: 'Develop essential core skills through practical tasks and focused coding exercises. Build a strong technical foundation.',
      highlights: [
        'Essential coding fundamentals',
        'Practical task completion',
        'L1 Assessment preparation',
        'Technology specialization guidance'
      ],
      stats: ['Core Skills', 'L1 Ready']
    },
    {
      number: '02',
      title: 'Specialization Phase',
      duration: 'Months 4-6',
      description: 'Focus on your chosen technology area by working on real product features and building your professional portfolio.',
      highlights: [
        'Real product feature development',
        'Professional portfolio building',
        'Specialized skill mastery',
        'L2 Assessment preparation'
      ],
      stats: ['Portfolio', 'L2 Ready']
    },
    {
      number: '03',
      title: 'Product Building',
      duration: 'Months 7-9',
      description: 'Collaborate in teams to develop complete tech products from MVP to deployment. Explore startup opportunities.',
      highlights: [
        'Team collaboration projects',
        'MVP to deployment cycle',
        'Real-world solution building',
        'Startup idea pitching'
      ],
      stats: ['Team Projects', 'Funding Support']
    },
    {
      number: '04',
      title: 'Career Launch',
      duration: 'Months 10-12',
      description: 'Career Readiness Training with internships, technical assessments, and job placement through 300+ hiring partners.',
      highlights: [
        'Career Readiness Training (CRT)',
        'Mock interviews & assessments',
        'Communication skill development',
        'Job placement support'
      ],
      stats: ['300+ Partners', '2000+ Jobs']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [phases.length]);

  useEffect(() => {
    const width = ((activePhase + 1) / phases.length) * 75;
    setProgressWidth(width);
  }, [activePhase, phases.length]);

  return (
    <Box className={classes.container}>
      <Box className={classes.backgroundPattern} />
      
      <Box className={classes.header}>
        <Typography variant="h1" className={classes.title}>
          Explore the Gigaversity Learning Journey
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          A thoughtfully structured journey that transforms you from a beginner to an industry-ready professional.
        </Typography>
      </Box>

      <Box className={classes.journeyContainer}>
        <Box className={classes.timeline}>
          <Box className={classes.timelineConnector} />
          <Box 
            className={classes.progressLine} 
            style={{ width: `${progressWidth}%` }}
          />
          
          {phases.map((phase, index) => (
            <Card
              key={index}
              className={`${classes.phaseCard} ${activePhase === index ? classes.activeCard : ''}`}
              onMouseEnter={() => setActivePhase(index)}
              onClick={() => setActivePhase(index)}
            >
              <Box className={classes.phaseNumber}>
                {phase.number}
              </Box>
              
              <CardContent className={classes.cardContent}>
                <Typography className={classes.phaseTitle}>
                  {phase.title}
                </Typography>
                
                <Typography className={classes.duration}>
                  {phase.duration}
                </Typography>
                
                <Typography className={classes.description}>
                  {phase.description}
                </Typography>
                
                <Box className={classes.highlightsContainer}>
                  {phase.highlights.map((highlight, idx) => (
                    <Box key={idx} className={classes.highlight}>
                      {highlight}
                    </Box>
                  ))}
                </Box>
                
                <Box className={classes.statsContainer}>
                  {phase.stats.map((stat, idx) => (
                    <Chip key={idx} label={stat} className={classes.statChip} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Box className={classes.footer}>
        <Button variant="contained" className={classes.ctaButton}>
          Start Your Journey Today
        </Button>
      </Box>
    </Box>
  );
};

export default InteractiveLearningJourney;