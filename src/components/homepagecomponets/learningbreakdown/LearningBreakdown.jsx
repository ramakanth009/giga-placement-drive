import React from 'react';
import { Box, Typography, Container, Button, Card, CardContent, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles({
  section: {
    padding: '40px 0',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  titleSection: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  mainTitle: {
    fontSize: '2.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '12px !important',
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.5rem !important',
    },
  },
  subtitle: {
    fontSize: '1rem !important',
    color: '#666 !important',
    maxWidth: '600px',
    margin: '0 auto !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      maxWidth: '90%',
    },
  },
  journeyContainer: {
    display: 'flex',
    gap: '20px',
    marginBottom: '30px',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      gap: '15px',
    },
  },
  phaseCard: {
    flex: 1,
    borderRadius: '16px !important',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1) !important',
    transition: 'all 0.3s ease !important',
    background: '#ffffff',
    border: '2px solid transparent',
    minHeight: '320px',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15) !important',
    },
    '@media (max-width: 600px)': {
      minHeight: '280px',
    },
  },
  highlightCard: {
    border: '2px solid #FFC614 !important',
    background: 'linear-gradient(135deg, #fff9e6 0%, #ffffff 100%) !important',
    boxShadow: '0 12px 32px rgba(255, 198, 20, 0.2) !important',
  },
  cardContent: {
    padding: '20px !important',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 600px)': {
      padding: '16px !important',
    },
  },
  phaseNumber: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    backgroundColor: '#2A2B6A',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem !important',
    fontWeight: 'bold !important',
    '@media (max-width: 600px)': {
      width: '30px',
      height: '30px',
      fontSize: '0.8rem !important',
      top: '12px',
      left: '12px',
    },
  },

  phaseTitle: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginTop: '25px !important',
    marginBottom: '8px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
      marginTop: '20px !important',
    },
  },
  monthsChip: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    fontSize: '0.75rem !important',
    height: '24px !important',
    marginBottom: '12px !important',
    fontWeight: '600 !important',
    alignSelf: 'flex-start',
  },
  phaseDescription: {
    fontSize: '0.85rem !important',
    color: '#555 !important',
    lineHeight: '1.4 !important',
    marginBottom: '12px !important',
    flex: 1,
  },
  keyPoints: {
    marginTop: 'auto',
  },
  keyPoint: {
    fontSize: '0.75rem !important',
    color: '#2A2B6A !important',
    backgroundColor: 'rgba(42, 43, 106, 0.08)',
    padding: '4px 8px',
    borderRadius: '12px',
    marginBottom: '4px',
    display: 'inline-block',
    marginRight: '6px',
    fontWeight: '500 !important',
  },
  ctaContainer: {
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    padding: '12px 32px !important',
    borderRadius: '30px !important',
    fontSize: '1rem !important',
    fontWeight: 'bold !important',
    textTransform: 'none !important',
    boxShadow: '0 8px 20px rgba(255, 198, 20, 0.3) !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: '#FFD23F !important',
      transform: 'translateY(-2px)',
      boxShadow: '0 12px 25px rgba(255, 198, 20, 0.4) !important',
    },
    '@media (max-width: 600px)': {
      padding: '10px 24px !important',
      fontSize: '0.9rem !important',
    },
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'radial-gradient(rgba(42, 43, 106, 0.05) 2px, transparent 2px)',
    backgroundSize: '30px 30px',
    opacity: 0.5,
    zIndex: 1,
  },
});

const LearningJourney = () => {
  const classes = useStyles();

  const phases = [
    {
      number: '01',
      title: 'Foundation Phase',
      months: 'Months 1 - 3',
      description: 'Develop essential core skills through practical tasks and focused coding exercises. Build a strong technical foundation.',
      keyPoints: ['Essential coding fundamentals', 'Practical task completion', 'L1 Assessment preparation', 'Technology specialization guidance'],
      highlight: false,
    },
    {
      number: '02',
      title: 'Specialization Phase',
      months: 'Months 4 - 6',
      description: 'Focus on your chosen technology area by working on real product features and building your professional portfolio.',
      keyPoints: ['Real product feature development', 'Professional portfolio building', 'Specialized skill mastery', 'L2 Assessment preparation'],
      highlight: false,
    },
    {
      number: '03',
      title: 'Product Building',
      months: 'Months 7 - 9',
      description: 'Collaborate in teams to develop complete tech products from MVP to deployment. Explore startup opportunities.',
      keyPoints: ['Team collaboration projects', 'MVP to deployment cycle', 'Real-world solution building', 'Startup idea pitching'],
      highlight: false,
    },
    {
      number: '04',
      title: 'Career Launch',
      months: 'Months 10 - 12',
      description: 'Career Readiness Training with internships, technical assessments, and job placement through 300+ hiring partners.',
      keyPoints: ['Career Readiness Training (CRT)', 'Mock interviews & assessments', 'Communication skill development', 'Job placement support'],
      highlight: true,
      stats: ['300+ Partners', '2000+ Jobs'],
    },
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.backgroundPattern} />
      
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.titleSection}>
          <Typography variant="h2" className={classes.mainTitle}>
            Explore the Gigaversity Learning Journey
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            A thoughtfully structured journey that transforms you from a beginner to an industry-ready professional.
          </Typography>
        </Box>

        <Box className={classes.journeyContainer}>
          {phases.map((phase, index) => (
            <Card 
              key={phase.number} 
              className={`${classes.phaseCard} ${phase.highlight ? classes.highlightCard : ''}`}
            >
              <CardContent className={classes.cardContent}>
                <Typography className={classes.phaseTitle}>
                  {phase.title}
                </Typography>
                
                <Chip 
                  label={phase.months}
                  className={classes.monthsChip}
                  size="small"
                />
                
                <Typography className={classes.phaseDescription}>
                  {phase.description}
                </Typography>
                
                <Box className={classes.keyPoints}>
                  {phase.keyPoints.map((point, idx) => (
                    <Box key={idx} className={classes.keyPoint}>
                      {point}
                    </Box>
                  ))}
                  
                  {phase.stats && (
                    <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                      {phase.stats.map((stat, idx) => (
                        <Box 
                          key={idx} 
                          sx={{ 
                            backgroundColor: '#FFC614', 
                            color: '#2A2B6A', 
                            padding: '4px 8px', 
                            borderRadius: '12px',
                            fontSize: '0.75rem',
                            fontWeight: 'bold'
                          }}
                        >
                          {stat}
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box className={classes.ctaContainer}>
          <Button 
            variant="contained"
            className={classes.startButton}
            endIcon={<ArrowForwardIcon />}
          >
            START YOUR JOURNEY TODAY
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LearningJourney;