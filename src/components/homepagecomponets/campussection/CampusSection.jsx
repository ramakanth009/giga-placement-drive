import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EventIcon from '@mui/icons-material/Event';

const useStyles = makeStyles({
  section: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.95) 0%, rgba(26, 27, 74, 0.9) 100%)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      zIndex: -1,
    },
    '@media (max-width: 960px)': {
      height: 'auto',
      minHeight: '100vh',
      padding: '60px 0',
    },
  },
  container: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    height: '100%',
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
    fontSize: '3.5rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    marginBottom: '20px !important',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '3rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.5rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
    },
  },
  subtitle: {
    fontSize: '1.3rem !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    maxWidth: '800px',
    margin: '0 auto !important',
    lineHeight: '1.6 !important',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
      maxWidth: '90%',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  campusGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '20px',
    height: '400px',
    '@media (max-width: 1200px)': {
      height: '350px',
      gap: '15px',
    },
    '@media (max-width: 960px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(3, 1fr)',
      height: 'auto',
      gap: '20px',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto',
      gap: '15px',
    },
  },
  campusCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-8px) scale(1.02)',
      background: 'rgba(255, 255, 255, 0.15)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      '& $cardIcon': {
        transform: 'scale(1.2) rotate(10deg)',
        color: '#FFC614',
      },
      '& $cardTitle': {
        color: '#FFC614',
      },
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 198, 20, 0.1), transparent)',
      transition: 'left 0.6s',
    },
    '&:hover::before': {
      left: '100%',
    },
    '@media (max-width: 960px)': {
      padding: '20px',
      minHeight: '160px',
    },
    '@media (max-width: 600px)': {
      padding: '24px',
      minHeight: '140px',
    },
  },
  // Z-pattern layout positions
  card1: {
    gridColumn: '1 / 3',
    gridRow: '1',
    '@media (max-width: 960px)': {
      gridColumn: '1',
      gridRow: '1',
    },
  },
  card2: {
    gridColumn: '3 / 5',
    gridRow: '1',
    '@media (max-width: 960px)': {
      gridColumn: '2',
      gridRow: '1',
    },
  },
  card3: {
    gridColumn: '5 / 7',
    gridRow: '1',
    '@media (max-width: 960px)': {
      gridColumn: '1',
      gridRow: '2',
    },
  },
  card4: {
    gridColumn: '1 / 3',
    gridRow: '2',
    '@media (max-width: 960px)': {
      gridColumn: '2',
      gridRow: '2',
    },
  },
  card5: {
    gridColumn: '3 / 5',
    gridRow: '2',
    '@media (max-width: 960px)': {
      gridColumn: '1',
      gridRow: '3',
    },
  },
  card6: {
    gridColumn: '5 / 7',
    gridRow: '2',
    '@media (max-width: 960px)': {
      gridColumn: '2',
      gridRow: '3',
    },
  },
  cardIcon: {
    fontSize: '2.5rem !important',
    color: 'white !important',
    marginBottom: '16px !important',
    transition: 'all 0.3s ease',
    filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))',
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '10px !important',
    },
  },
  cardTitle: {
    fontSize: '1.1rem !important',
    fontWeight: '700 !important',
    color: 'white !important',
    marginBottom: '8px !important',
    transition: 'color 0.3s ease',
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    },
  },
  cardDescription: {
    fontSize: '0.85rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    lineHeight: '1.4 !important',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
    '@media (max-width: 960px)': {
      fontSize: '0.8rem !important',
      WebkitLineClamp: 2,
    },
    '@media (max-width: 600px)': {
      fontSize: '0.8rem !important',
      WebkitLineClamp: 2,
    },
  },
  decorativeElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1,
  },
  floatingShape: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(255, 198, 20, 0.1)',
    animation: '$float 8s ease-in-out infinite',
  },
  shape1: {
    width: '120px',
    height: '120px',
    top: '10%',
    left: '5%',
    animationDelay: '0s',
  },
  shape2: {
    width: '80px',
    height: '80px',
    top: '20%',
    right: '8%',
    animationDelay: '2s',
  },
  shape3: {
    width: '100px',
    height: '100px',
    bottom: '15%',
    left: '3%',
    animationDelay: '4s',
  },
  shape4: {
    width: '60px',
    height: '60px',
    bottom: '25%',
    right: '12%',
    animationDelay: '6s',
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0) rotate(0deg)',
      opacity: 0.3,
    },
    '50%': {
      transform: 'translateY(-30px) rotate(180deg)',
      opacity: 0.6,
    },
  },
});

const CampusSection = () => {
  const classes = useStyles();

  const campusAreas = [
    {
      icon: <SchoolIcon className={classes.cardIcon} />,
      title: "Foundation Hall",
      description: "Dynamic collaborative learning space where students from all backgrounds unite for high-energy sessions and problem-solving.",
      cardClass: classes.card1,
    },
    {
      icon: <BuildIcon className={classes.cardIcon} />,
      title: "Product Chamber",
      description: "Real tech products are built and executed collaboratively by teams in this dynamic, inspiring workspace.",
      cardClass: classes.card2,
    },
    {
      icon: <RocketLaunchIcon className={classes.cardIcon} />,
      title: "Startup Studio",
      description: "Fuel ideas with mentorship and founder guidance. Secure up to ₹1 lakh funding for tech startup ideas.",
      cardClass: classes.card3,
    },
    {
      icon: <PersonIcon className={classes.cardIcon} />,
      title: "Mentor Hub",
      description: "Connect with industry experts for personalized 1:1 support to accelerate learning and career growth.",
      cardClass: classes.card4,
    },
    {
      icon: <BusinessCenterIcon className={classes.cardIcon} />,
      title: "Venture Hall",
      description: "Exclusive startup events where founders, VCs, and investors gather for pitches and live demos.",
      cardClass: classes.card5,
    },
    {
      icon: <EventIcon className={classes.cardIcon} />,
      title: "Startup Mela",
      description: "Monthly networking events connecting students, alumni, professionals, and founders for collaboration.",
      cardClass: classes.card6,
    }
  ];

  return (
    <Box className={classes.section}>
      {/* Decorative floating elements */}
      <Box className={classes.decorativeElements}>
        <Box className={`${classes.floatingShape} ${classes.shape1}`} />
        <Box className={`${classes.floatingShape} ${classes.shape2}`} />
        <Box className={`${classes.floatingShape} ${classes.shape3}`} />
        <Box className={`${classes.floatingShape} ${classes.shape4}`} />
      </Box>

      <Container maxWidth="xl" className={classes.container}>
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            Gigaversity State of the Art <span>Campus</span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Learn, build, and grow in a dynamic environment equipped with everything you need to thrive in the tech industry
          </Typography>
        </Box>

        <Box className={classes.campusGrid}>
          {campusAreas.map((area, index) => (
            <Box
              key={index}
              className={`${classes.campusCard} ${area.cardClass}`}
            >
              {area.icon}
              <Typography className={classes.cardTitle}>
                {area.title}
              </Typography>
              <Typography className={classes.cardDescription}>
                {area.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CampusSection;