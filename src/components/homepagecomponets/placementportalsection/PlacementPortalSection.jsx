import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import WorkIcon from '@mui/icons-material/Work';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AssignmentIcon from '@mui/icons-material/Assignment';
import VideocamIcon from '@mui/icons-material/Videocam';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TimelineIcon from '@mui/icons-material/Timeline';

// Import images
import curatedOpportunitiesImg from '../../../assets/Job-Portal-website/1000+curated-Opportunities.png';
import jobAnnouncementImg from '../../../assets/Job-Portal-website/Job-Announcement.png';
import skillAssessmentsImg from '../../../assets/Job-Portal-website/Skill-Based-Assessments.png';
import mockInterviewImg from '../../../assets/Job-Portal-website/Mock-Interview-Coach.png';
import proctoredTestingImg from '../../../assets/Job-Portal-website/Proctored-Testing-Employer-Access.png';
import detailedFeedbackImg from '../../../assets/Job-Portal-website/Detailed-Feedback-and-insights-report.png';

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
    '& span': {
      color: '#FFC614 !important',
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
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    '@media (max-width: 960px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '25px',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gap: '20px',
    },
  },
  featureCard: {
    padding: '0 !important',
    borderRadius: '16px !important',
    boxShadow: '0 10px 30px rgba(42, 43, 106, 0.08) !important',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff !important',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 15px 40px rgba(42, 43, 106, 0.12) !important',
    },
    '@media (max-width: 600px)': {
      borderRadius: '12px !important',
    },
  },
  imageContainer: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden',
    '@media (max-width: 600px)': {
      height: '180px',
    },
  },
  featureImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
    '$featureCard:hover &': {
      transform: 'scale(1.05)',
    },
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, rgba(42, 43, 106, 0.1) 0%, rgba(42, 43, 106, 0.3) 100%)',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '20px',
    '@media (max-width: 600px)': {
      padding: '15px',
    },
  },
  iconContainer: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 600px)': {
      width: '45px',
      height: '45px',
    },
  },
  icon: {
    fontSize: '24px !important',
    color: '#2A2B6A !important',
    '@media (max-width: 600px)': {
      fontSize: '20px !important',
    },
  },
  cardContent: {
    padding: '25px !important',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    '@media (max-width: 600px)': {
      padding: '20px !important',
    },
  },
  cardTitle: {
    fontSize: '1.25rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
      marginBottom: '12px !important',
    },
  },
  cardDescription: {
    fontSize: '0.95rem !important',
    color: '#666666 !important',
    lineHeight: '1.6 !important',
    flexGrow: 1,
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
  decorativeElement: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 198, 20, 0.1) 0%, rgba(255, 198, 20, 0) 70%)',
    zIndex: 1,
  },
  topRightDecor: {
    width: '300px',
    height: '300px',
    top: '-150px',
    right: '-150px',
    '@media (max-width: 960px)': {
      width: '200px',
      height: '200px',
      top: '-100px',
      right: '-100px',
    },
  },
  bottomLeftDecor: {
    width: '400px',
    height: '400px',
    bottom: '-200px',
    left: '-200px',
    background: 'radial-gradient(circle, rgba(42, 43, 106, 0.08) 0%, rgba(42, 43, 106, 0) 70%)',
    '@media (max-width: 960px)': {
      width: '250px',
      height: '250px',
      bottom: '-125px',
      left: '-125px',
    },
  },
});

const PlacementPortalSection = () => {
  const classes = useStyles();

  const features = [
    {
      title: "1000+ Curated Opportunities",
      description: "Access a wide range of verified roles from top startups and leading tech companies actively hiring fresh talent like you.",
      icon: <WorkIcon className={classes.icon} />,
      image: curatedOpportunitiesImg,
    },
    {
      title: "Custom Job Alerts",
      description: "Get personalized job alerts based on your skills, interests, and career goals—sourced from India's top job platforms, all in one place.",
      icon: <NotificationsActiveIcon className={classes.icon} />,
      image: jobAnnouncementImg,
    },
    {
      title: "Skill-Based Assessments",
      description: "Demonstrate your expertise with real-time coding tasks and domain-specific evaluations designed to match industry expectations.",
      icon: <AssignmentIcon className={classes.icon} />,
      image: skillAssessmentsImg,
    },
    {
      title: "Mock Interview Coach",
      description: "Prepare with AI-powered and expert-led mock interviews. Receive actionable insights and performance analysis to build interview confidence.",
      icon: <VideocamIcon className={classes.icon} />,
      image: mockInterviewImg,
    },
    {
      title: "Proctored Testing & Employer Access",
      description: "Provides you with secure, monitored tests based on the job role, skills, or resume that validate and provides you complete insight.",
      icon: <VerifiedUserIcon className={classes.icon} />,
      image: proctoredTestingImg,
    },
    {
      title: "Detailed Feedback and insights report",
      description: "Delivers detailed feedback on body language, tone of voice, and answer quality — including concept-level insights and how to improve each response.",
      icon: <TimelineIcon className={classes.icon} />,
      image: detailedFeedbackImg,
    },
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.backgroundPattern} />
      <Box className={`${classes.decorativeElement} ${classes.topRightDecor}`} />
      <Box className={`${classes.decorativeElement} ${classes.bottomLeftDecor}`} />
      
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            Gigaversity <span>Portal</span> & <span>Smart Tracking</span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Everything you need to launch your career, track your progress, and connect with top employers—all in one place.
          </Typography>
        </Box>
        
        <Box className={classes.featuresGrid}>
          {features.map((feature, idx) => (
            <Paper key={idx} className={classes.featureCard} elevation={0}>
              <Box className={classes.imageContainer}>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className={classes.featureImage}
                />
                <Box className={classes.imageOverlay}>
                  <Box className={classes.iconContainer}>
                    {feature.icon}
                  </Box>
                </Box>
              </Box>
              
              <Box className={classes.cardContent}>
                <Typography className={classes.cardTitle}>
                  {feature.title}
                </Typography>
                <Typography className={classes.cardDescription}>
                  {feature.description}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PlacementPortalSection;