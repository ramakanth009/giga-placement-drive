import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

// Import campus images
import foundationHallImg from '../../../assets/mentor-room/Foundation-hall.png';
import productRoomImg from '../../../assets/mentor-room/Product-room.jpg';
import startupRoomImg from '../../../assets/mentor-room/Startup-room.png';
import mentorRoomImg from '../../../assets/mentor-room/mentor-room .png';
import caffeImg from '../../../assets/mentor-room/cafe.jpg';
import sportsArenaImg from '../../../assets/mentor-room/sports-arena.jpg';

const useStyles = makeStyles({
  section: {
    backgroundColor: '#f8f9fa',
    padding: '80px 0',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 960px)': {
      padding: '60px 0',
      minHeight: 'auto',
    },
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
    '@media (max-width: 960px)': {
      marginBottom: '40px',
    },
  },
  title: {
    fontSize: '2.8rem !important',
    fontWeight: '700 !important',
    color: '#2c3e50 !important',
    marginBottom: '16px !important',
    letterSpacing: '-0.5px !important',
    lineHeight: '1.2 !important',
    '@media (max-width: 1200px)': {
      fontSize: '2.4rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.7rem !important',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#6c757d !important',
    maxWidth: '600px',
    margin: '0 auto !important',
    lineHeight: '1.6 !important',
    fontWeight: '400 !important',
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '90%',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    },
  },
  campusGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    marginBottom: '50px',
    '@media (max-width: 1200px)': {
      gap: '25px',
    },
    '@media (max-width: 960px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gap: '20px',
    },
  },
  campusCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '1px solid #e9ecef',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
      '& $cardImage': {
        transform: 'scale(1.05)',
      },
    },
  },
  cardImageContainer: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden',
    '@media (max-width: 600px)': {
      height: '180px',
    },
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  cardContent: {
    padding: '24px',
    '@media (max-width: 600px)': {
      padding: '20px',
    },
  },
  cardTitle: {
    fontSize: '1.25rem !important',
    fontWeight: '600 !important',
    color: '#2c3e50 !important',
    marginBottom: '12px !important',
    lineHeight: '1.3 !important',
    '@media (max-width: 600px)': {
      fontSize: '1.15rem !important',
      marginBottom: '10px !important',
    },
  },
  cardDescription: {
    fontSize: '0.95rem !important',
    color: '#6c757d !important',
    lineHeight: '1.5 !important',
    fontWeight: '400 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  ctaContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
    '@media (max-width: 960px)': {
      marginTop: '30px',
    },
  },
  ctaButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2c3e50 !important',
    padding: '14px 32px !important',
    borderRadius: '25px !important',
    fontSize: '1rem !important',
    fontWeight: '600 !important',
    textTransform: 'none !important',
    boxShadow: '0 4px 12px rgba(255, 198, 20, 0.3) !important',
    transition: 'all 0.3s ease !important',
    border: 'none !important',
    '&:hover': {
      backgroundColor: '#e6b312 !important',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(255, 198, 20, 0.4) !important',
    },
    '@media (max-width: 600px)': {
      padding: '12px 28px !important',
      fontSize: '0.95rem !important',
    },
  },
});

const CampusSection = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/campus');
  };

  const campusAreas = [
    {
      title: "Foundation Hall",
      description: "Dynamic collaborative learning space where students from all backgrounds unite for high-energy sessions and problem-solving.",
      image: foundationHallImg,
    },
    {
      title: "Product Chamber",
      description: "Real tech products are built and executed collaboratively by teams in this dynamic, inspiring workspace.",
      image: productRoomImg,
    },
    {
      title: "Startup Studio",
      description: "Fuel ideas with mentorship and founder guidance. Secure up to ₹1 lakh funding for tech startup ideas.",
      image: startupRoomImg,
    },
    {
      title: "Mentor Hub",
      description: "Connect with industry experts for personalized 1:1 support to accelerate learning and career growth.",
      image: mentorRoomImg,
    },
    {
      title: "Campus Café",
      description: "A vibrant space for thinkers and innovators to connect, recharge, and build meaningful relationships.",
      image: caffeImg,
    },
    {
      title: "Play Arena",
      description: "Sports and recreation space for cricket, badminton, chess, and team-building activities.",
      image: sportsArenaImg,
    }
  ];

  return (
    <Box className={classes.section}>
      <Container maxWidth="xl" className={classes.container}>
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            Gigaversity State of the Art Campus
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Learn, build, and grow in a dynamic environment equipped with everything you need to thrive in the tech industry
          </Typography>
        </Box>

        <Box className={classes.campusGrid}>
          {campusAreas.map((area, index) => (
            <Box
              key={index}
              className={classes.campusCard}
            >
              <Box className={classes.cardImageContainer}>
                <img
                  src={area.image}
                  alt={area.title}
                  className={classes.cardImage}
                />
              </Box>
              
              <Box className={classes.cardContent}>
                <Typography className={classes.cardTitle}>
                  {area.title}
                </Typography>
                <Typography className={classes.cardDescription}>
                  {area.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box className={classes.ctaContainer}>
          <Button
            variant="contained"
            className={classes.ctaButton}
            onClick={handleCTAClick}
          >
            Explore Our Campus
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
export default CampusSection;