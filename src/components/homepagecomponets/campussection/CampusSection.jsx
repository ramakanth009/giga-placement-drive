import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EventIcon from '@mui/icons-material/Event';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    backgroundColor: 'transparent',
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
    '@media (max-width: 480px)': {
      padding: '40px 0',
    },
    '@media (max-width: 375px)': {
      padding: '30px 0',
    },
  },
  container: {
    position: 'relative',
    zIndex: 3,
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '60px',
    '@media (max-width: 1200px)': {
      marginBottom: '50px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '45px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '40px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '35px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '30px',
    },
  },
  title: {
    fontSize: '2.8rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2.5rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.3rem !important',
      marginBottom: '16px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
      marginBottom: '14px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.8rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.6rem !important',
      marginBottom: '10px !important',
    },
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#666666 !important',
    maxWidth: '800px',
    margin: '0 auto !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.15rem !important',
      maxWidth: '750px',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
      maxWidth: '700px',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      maxWidth: '95%',
      lineHeight: '1.5 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
      lineHeight: '1.4 !important',
    },
  },
  campusGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '40px',
    '@media (max-width: 1200px)': {
      gap: '35px',
    },
    '@media (max-width: 960px)': {
      gridTemplateColumns: '1fr',
      gap: '30px',
    },
    '@media (max-width: 600px)': {
      gap: '25px',
    },
    '@media (max-width: 480px)': {
      gap: '20px',
    },
    '@media (max-width: 375px)': {
      gap: '15px',
    },
  },
  campusCard: {
    padding: '35px',
    borderRadius: '20px !important',
    background: 'white',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08) !important',
    border: '1px solid rgba(42, 43, 106, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: 'translateY(-12px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15) !important',
      '& $iconContainer': {
        transform: 'scale(1.1) rotate(5deg)',
        backgroundColor: '#2A2B6A',
        '& svg': {
          color: 'white',
        },
      },
      '& $cardTitle': {
        color: '#2A2B6A',
      },
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '5px',
      background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 100%)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '&:hover::before': {
      opacity: 1,
    },
    '@media (max-width: 1200px)': {
      padding: '30px',
    },
    '@media (max-width: 960px)': {
      padding: '25px',
    },
    '@media (max-width: 600px)': {
      padding: '20px',
      borderRadius: '15px !important',
    },
    '@media (max-width: 480px)': {
      padding: '18px',
    },
    '@media (max-width: 375px)': {
      padding: '15px',
      borderRadius: '12px !important',
    },
  },
  iconContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'rgba(42, 43, 106, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '25px',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
    boxShadow: '0 8px 20px rgba(42, 43, 106, 0.15)',
    '& svg': {
      fontSize: '36px',
      color: '#2A2B6A',
      transition: 'color 0.3s ease',
    },
    '@media (max-width: 1200px)': {
      width: '75px',
      height: '75px',
      marginBottom: '22px',
      '& svg': {
        fontSize: '34px',
      },
    },
    '@media (max-width: 960px)': {
      width: '70px',
      height: '70px',
      marginBottom: '20px',
      '& svg': {
        fontSize: '32px',
      },
    },
    '@media (max-width: 600px)': {
      width: '65px',
      height: '65px',
      marginBottom: '18px',
      '& svg': {
        fontSize: '30px',
      },
    },
    '@media (max-width: 480px)': {
      width: '60px',
      height: '60px',
      marginBottom: '16px',
      '& svg': {
        fontSize: '28px',
      },
    },
    '@media (max-width: 375px)': {
      width: '55px',
      height: '55px',
      marginBottom: '14px',
      '& svg': {
        fontSize: '26px',
      },
    },
  },
  cardTitle: {
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    color: '#333333 !important',
    marginBottom: '15px !important',
    transition: 'color 0.3s ease',
    '@media (max-width: 1200px)': {
      fontSize: '1.4rem !important',
      marginBottom: '14px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.35rem !important',
      marginBottom: '13px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.2rem !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.1rem !important',
      marginBottom: '8px !important',
    },
  },
  cardDescription: {
    fontSize: '1rem !important',
    color: '#666666 !important',
    lineHeight: '1.7 !important',
    flex: 1,
    '@media (max-width: 1200px)': {
      fontSize: '0.95rem !important',
      lineHeight: '1.6 !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      lineHeight: '1.5 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.8rem !important',
      lineHeight: '1.4 !important',
    },
  },
  decorativeElement: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 198, 20, 0.05) 0%, rgba(255, 198, 20, 0) 70%)',
    zIndex: 1,
    '@media (max-width: 960px)': {
      width: '200px',
      height: '200px',
    },
    '@media (max-width: 600px)': {
      width: '150px',
      height: '150px',
    },
  },
  topRightDecor: {
    top: '-150px',
    right: '-150px',
    '@media (max-width: 960px)': {
      top: '-100px',
      right: '-100px',
    },
    '@media (max-width: 600px)': {
      top: '-75px',
      right: '-75px',
    },
  },
  bottomLeftDecor: {
    bottom: '-150px',
    left: '-150px',
    background: 'radial-gradient(circle, rgba(42, 43, 106, 0.05) 0%, rgba(42, 43, 106, 0) 70%)',
    '@media (max-width: 960px)': {
      bottom: '-100px',
      left: '-100px',
    },
    '@media (max-width: 600px)': {
      bottom: '-75px',
      left: '-75px',
    },
  },
});

const CampusSection = () => {
  const classes = useStyles();

  const campusAreas = [
    {
      icon: <SchoolIcon />,
      title: "The Foundation Hall",
      description: "A Dynamic Space Where Students From All Backgrounds Come Together For The First Time. Through Collaborative Learning, High-Energy Sessions, Peer Interactions, and Solving Problems You Never Thought You Could."
    },
    {
      icon: <BuildIcon />,
      title: "The Product Chamber",
      description: "The Product Chamber is where real tech products are built and executed collaboratively by teams. It's a dynamic space designed to engage, inspire, and prepare you to become product-ready."
    },
    {
      icon: <RocketLaunchIcon />,
      title: "The Startup Studio",
      description: "Fuel your ideas with personalized mentorship and founder guidance to build, launch, and scale your product. This is where the most creative students secure up to ₹1 lakh in funding, not as a prize, but as real support to turn their tech startup ideas into reality."
    },
    {
      icon: <PersonIcon />,
      title: "The Mentor Hub (1on1)",
      description: "Connect with industry experts and experienced guides who provide personalized support to accelerate your learning and career growth. The Mentor Hub is where your questions find answers, and your potential takes shape with a 1:1 session."
    },
    {
      icon: <BusinessCenterIcon />,
      title: "The Venture Hall",
      description: "At Venture Hall, Gigaversity hosts exclusive startup events where founders, venture capitalists (VCs), industry leaders, and investors come together. Students pitch their ideas, receive expert feedback, and present live demos."
    },
    {
      icon: <EventIcon />,
      title: "Tech Connect Mela",
      description: "Monthly networking event where students, alumni, industry professionals, and startup founders come together to share ideas, collaborate on projects, and build meaningful connections that last beyond the program."
    }
  ];

  return (
    <Box className={classes.section}>
      <Box className={`${classes.decorativeElement} ${classes.topRightDecor}`} />
      <Box className={`${classes.decorativeElement} ${classes.bottomLeftDecor}`} />
      
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            State of the Art <span>Campus</span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Learn, build, and grow in a dynamic space equipped with everything you need to thrive in tech.
          </Typography>
        </Box>

        <Box className={classes.campusGrid}>
          {campusAreas.map((area, index) => (
            <Paper key={index} className={classes.campusCard} elevation={0}>
              <Box className={classes.iconContainer}>
                {area.icon}
              </Box>
              <Typography className={classes.cardTitle}>
                {area.title}
              </Typography>
              <Typography className={classes.cardDescription}>
                {area.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CampusSection;