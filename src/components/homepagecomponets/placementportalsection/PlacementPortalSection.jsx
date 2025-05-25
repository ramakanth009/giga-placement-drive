import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import WorkIcon from '@mui/icons-material/Work';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AssignmentIcon from '@mui/icons-material/Assignment';
import VideocamIcon from '@mui/icons-material/Videocam';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TimelineIcon from '@mui/icons-material/Timeline';

const useStyles = makeStyles({
  section: {
    padding: '20px 0',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 1200px)': {
      padding: '70px 0',
    },
    '@media (max-width: 960px)': {
      padding: '60px 0',
    },
    '@media (max-width: 600px)': {
      padding: '50px 0',
    },
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '50px',
    position: 'relative',
    '@media (max-width: 600px)': {
      marginBottom: '40px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '3px',
      background: 'linear-gradient(90deg, #2A2B6A, #FFC614)',
      borderRadius: '2px',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#666666 !important',
    maxWidth: '700px',
    margin: '0 auto !important',
    marginTop: '20px !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      maxWidth: '90%',
    },
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
    '@media (max-width: 960px)': {
      gap: '25px',
    },
    '@media (max-width: 600px)': {
      gap: '20px',
    },
  },
  cardWrapper: {
    flex: '1 1 calc(33.333% - 20px)',
    minWidth: '280px',
    maxWidth: '380px',
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 960px)': {
      flex: '1 1 calc(50% - 20px)',
    },
    '@media (max-width: 600px)': {
      flex: '1 1 100%',
      maxWidth: '100%',
    },
  },
  card: {
    padding: '35px 25px !important',
    borderRadius: '16px !important',
    boxShadow: '0 10px 30px rgba(42, 43, 106, 0.08) !important',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff !important',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 15px 40px rgba(42, 43, 106, 0.12) !important',
    },
    '@media (max-width: 600px)': {
      padding: '30px 20px !important',
      borderRadius: '12px !important',
    },
  },
  iconContainer: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '25px',
    backgroundColor: '#f0f3ff',
    boxShadow: '0 8px 20px rgba(42, 43, 106, 0.1)',
    '@media (max-width: 600px)': {
      width: '60px',
      height: '60px',
      marginBottom: '20px',
    },
  },
  icon: {
    fontSize: '30px !important',
    color: '#2A2B6A !important',
    '@media (max-width: 600px)': {
      fontSize: '26px !important',
    },
  },
  cardTitle: {
    fontSize: '1.25rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    textAlign: 'center',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
      marginBottom: '12px !important',
    },
  },
  cardDescription: {
    fontSize: '0.95rem !important',
    color: '#666666 !important',
    textAlign: 'center',
    lineHeight: '1.6 !important',
    '@media (max-width: 600px)': {
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

const PlacementPortalSection = () => {
  const classes = useStyles();

  const features = [
    {
      title: "1000+ Curated Opportunities",
      description: "Access a wide range of verified roles from top startups and leading tech companies actively hiring fresh talent like you.",
      icon: <WorkIcon className={classes.icon} />,
    },
    {
      title: "Custom Job Alerts",
      description: "Get personalized job alerts based on your skills, interests, and career goals—sourced from India's top job platforms, all in one place.",
      icon: <NotificationsActiveIcon className={classes.icon} />,
    },
    {
      title: "Skill-Based Assessments",
      description: "Demonstrate your expertise with real-time coding tasks and domain-specific evaluations designed to match industry expectations.",
      icon: <AssignmentIcon className={classes.icon} />,
    },
    {
      title: "Mock Interview Coach",
      description: "Prepare with AI-powered and expert-led mock interviews. Receive actionable insights and performance analysis to build interview confidence.",
      icon: <VideocamIcon className={classes.icon} />,
    },
    {
      title: "Proctored Testing & Employer Access",
      description: "Participate in secure, monitored evaluations where your performance speaks for you. High scores enhance your visibility to potential employers, enabling companies to identify and connect directly through the platform.",
      icon: <VerifiedUserIcon className={classes.icon} />,
    },
    {
      title: "Application Progress Tracker",
      description: "Gain real-time insights into the status of every job application. From resume selection to review and final decision, stay informed at every stage, ensuring complete transparency throughout your hiring journey.",
      icon: <TimelineIcon className={classes.icon} />,
    },
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.backgroundPattern} />
      
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            Gigaversity Placement Portal & Smart Tracking
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Everything you need to launch your career, track your progress, and connect with top employers—all in one place.
          </Typography>
        </Box>
        
        <Box className={classes.cardsContainer}>
          {features.map((feature, idx) => (
            <Box key={idx} className={classes.cardWrapper}>
              <Paper className={classes.card} elevation={0}>
                <Box className={classes.iconContainer}>
                  {feature.icon}
                </Box>
                <Typography className={classes.cardTitle}>
                  {feature.title}
                </Typography>
                <Typography className={classes.cardDescription}>
                  {feature.description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PlacementPortalSection;