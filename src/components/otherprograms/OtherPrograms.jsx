// src/components/otherprograms/OtherPrograms.jsx
import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia, Button, Rating, Chip, Avatar, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LaunchIcon from '@mui/icons-material/Launch';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1e1f4f 100%)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'background 0.5s ease',
  },
  glowEffect: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,198,20,0.15) 0%, rgba(255,198,20,0) 70%)',
    top: '20%',
    right: '10%',
    zIndex: 0,
  },
  glowEffect2: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 70%)',
    bottom: '-150px',
    left: '5%',
    zIndex: 0,
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '60px',
    position: 'relative',
    zIndex: 1,
  },
  title: {
    fontSize: '2.75rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    position: 'relative',
    display: 'inline-block',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: '#FFC614',
      borderRadius: '2px',
    },
  },
  highlight: {
    color: '#FFC614 !important',
    position: 'relative',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '30px',
    position: 'relative',
    zIndex: 2,
  },
  cardWrapper: {
    flex: '0 0 calc(50% - 15px)',
    maxWidth: 'calc(50% - 15px)',
    perspective: '1000px',
  },
  card: {
    position: 'relative',
    borderRadius: '16px !important',
    overflow: 'hidden',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2) !important',
    background: 'transparent !important',
    height: '100%',
    transition: 'transform 0.5s ease',
    transformStyle: 'preserve-3d',
    '&:hover': {
      transform: 'translateY(-10px)',
      '& $overlayGradient': {
        opacity: 0.8,
      },
      '& $viewButtonContainer': {
        transform: 'translateY(0)',
        opacity: 1,
      },
    },
  },
  cardInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    height: '200px',
    width: '100%',
    objectFit: 'cover',
  },
  overlayGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '200px',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)',
    opacity: 0.6,
    transition: 'opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    zIndex: 1,
  },
  pulseDot: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#2ecc71',
    marginRight: '8px',
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'inherit',
      opacity: 0.7,
      animation: '$pulse 1.5s infinite',
    }
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
      opacity: 0.7,
    },
    '70%': {
      transform: 'scale(2)',
      opacity: 0,
    },
    '100%': {
      transform: 'scale(2.5)',
      opacity: 0,
    },
  },
  cardContent: {
    background: 'white',
    padding: '0 !important',
    flex: 1,
    zIndex: 1,
  },
  programHeader: {
    padding: '20px 25px',
    borderBottom: '1px solid #f0f0f0',
  },
  programTitle: {
    fontSize: '1.25rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '8px !important',
    lineHeight: '1.3 !important',
  },
  programBody: {
    padding: '15px 25px 20px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
  },
  featureText: {
    fontSize: '0.9rem !important',
    color: '#555 !important',
    fontWeight: '500 !important',
  },
  featureIcon: {
    color: '#FFC614 !important',
    marginRight: '8px',
    fontSize: '1rem !important',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 25px',
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #f0f0f0',
  },
  stats: {
    display: 'flex',
    alignItems: 'center',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
  },
  ratingValue: {
    fontSize: '0.95rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginLeft: '4px !important',
  },
  starIcon: {
    color: '#FFC614 !important',
    fontSize: '1rem !important',
  },
  duration: {
    fontSize: '0.9rem !important',
    color: '#666 !important',
    fontWeight: '500 !important',
    marginLeft: '4px !important',
  },
  viewButtonContainer: {
    position: 'absolute',
    top: '80px',
    left: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 2,
    transform: 'translateY(20px)',
    opacity: 0,
    transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  bounceAnimation: {
    animation: '$bounce 2s infinite',
  },
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateY(0)',
    },
    '40%': {
      transform: 'translateY(-10px)',
    },
    '60%': {
      transform: 'translateY(-5px)',
    },
  },
  viewButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    padding: '10px 24px !important',
    borderRadius: '30px !important', 
    fontWeight: 'bold !important',
    textTransform: 'none !important',
    fontSize: '0.95rem !important',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25) !important',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important',
    '&:hover': {
      backgroundColor: '#FFD53E !important',
      transform: 'scale(1.05)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3) !important',
    },
  },
  viewButtonIcon: {
    marginLeft: '8px',
    fontSize: '1rem !important',
  },
  programTag: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    zIndex: 2,
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    fontWeight: 'bold !important',
    padding: '5px 12px !important',
    borderRadius: '20px !important',
    fontSize: '0.75rem !important',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15) !important',
  },
  durationTag: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    zIndex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.9) !important',
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
    padding: '5px 12px !important',
    borderRadius: '20px !important',
    fontSize: '0.75rem !important',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15) !important',
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginRight: '4px',
      fontSize: '0.9rem !important',
    },
  },
  viewDetailButton: {
    backgroundColor: 'transparent !important',
    border: 'none !important',
    padding: '0 !important',
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9rem !important',
    transition: 'color 0.3s ease !important',
    '&:hover': {
      color: '#FFC614 !important',
      backgroundColor: 'transparent !important',
      '& $arrowIcon': {
        transform: 'translateX(4px)',
      },
    },
  },
  arrowIcon: {
    marginLeft: '4px',
    fontSize: '0.9rem !important',
    transition: 'transform 0.3s ease',
  },
  // Responsive styles for mobile
  '@media (max-width: 900px)': {
    cardsContainer: {
      flexDirection: 'column',
    },
    cardWrapper: {
      flex: '0 0 100%',
      maxWidth: '100%',
      marginBottom: '20px',
    },
    title: {
      fontSize: '2.2rem !important',
    },
  },
});

const OtherPrograms = () => {
  const classes = useStyles();

  const programs = [
    {
      id: 1,
      title: 'Master Internship Program In Full Stack Development',
      duration: '3 Months',
      features: [
        'Build Real Products',
        'Ecommerce Development',
        'Marketplace Integration',
        'Quick Commerce Solutions'
      ],
      rating: 4.5,
      students: 2854,
      tag: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    },
    {
      id: 2,
      title: 'Master Internship Program In Data Science',
      duration: '3 Months',
      features: [
        'Build Real Products',
        'ATS Resume Builder',
        'AI Chatbot Development',
        'Sales Forecasting Model'
      ],
      rating: 4.5,
      students: 2960,
      tag: 'Data Science',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    }
  ];

  return (
    <Box className={classes.section}>
      {/* Background effects */}
      <Box className={classes.glowEffect}></Box>
      <Box className={classes.glowEffect2}></Box>
      
      <Container maxWidth="lg">
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            Explore Our <span className={classes.highlight}>Other Programs</span>
          </Typography>
        </Box>

        <Box className={classes.cardsContainer}>
          {programs.map((program) => (
            <Box key={program.id} className={classes.cardWrapper}>
              <Card className={classes.card}>
                <Box className={classes.cardInner}>
                  {/* Tag label */}
                  <Chip label={program.tag} className={classes.programTag} />
                  
                  {/* Duration tag */}
                  <Chip 
                    icon={<AccessTimeIcon />} 
                    label={`${program.duration} Duration`} 
                    className={classes.durationTag} 
                  />
                  
                  {/* Image with overlay */}
                  <CardMedia
                    component="img"
                    className={classes.cardMedia}
                    image={program.image}
                    alt={program.title}
                  />
                  <Box className={classes.overlayGradient}></Box>
                  
                  {/* View button that appears on hover */}
                  <Box className={classes.viewButtonContainer}>
                    <Tooltip title="Go to full program page with detailed curriculum">
                      <Button variant="contained" className={classes.viewButton}>
                        Explore Full Program
                        <LaunchIcon className={classes.viewButtonIcon} />
                      </Button>
                    </Tooltip>
                  </Box>
                  
                  {/* Content section */}
                  <CardContent className={classes.cardContent}>
                    <Box className={classes.programHeader}>
                      <Typography variant="h5" className={classes.programTitle}>
                        {program.title}
                      </Typography>
                    </Box>
                    
                    <Box className={classes.programBody}>
                      {program.features.map((feature, index) => (
                        <Box key={index} className={classes.featureItem}>
                          <Box 
                            component="span" 
                            className={classes.featureIcon} 
                            sx={{ 
                              width: '8px', 
                              height: '8px', 
                              borderRadius: '50%', 
                              background: index === 0 ? '#FFC614' : '#2A2B6A', 
                              marginRight: '10px',
                              opacity: index === 0 ? 1 : 0.7
                            }}
                          />
                          <Typography className={classes.featureText}
                            sx={{
                              fontWeight: index === 0 ? '600' : '500',
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    
                    <Box className={classes.statsContainer}>
                      <Box className={classes.stats}>
                        <Box className={classes.statItem}>
                          <StarIcon className={classes.starIcon} />
                          <Typography className={classes.ratingValue}>
                            {program.rating}
                          </Typography>
                        </Box>
                        <Box className={classes.statItem}>
                          <PeopleAltOutlinedIcon sx={{ fontSize: '18px', color: '#2A2B6A' }} />
                          <Typography className={classes.duration}>
                            {program.students}+ students
                          </Typography>
                        </Box>
                        <Box>
                          <Box className={classes.pulseDot}></Box>
                          <Typography component="span" sx={{ fontSize: '0.85rem', fontWeight: 500, color: '#2ecc71' }}>
                            Enrolling Now
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Tooltip title="View program details, syllabus, and enrollment options">
                        <Button className={classes.viewDetailButton}>
                          View Details
                          <ArrowForwardIcon className={classes.arrowIcon} />
                        </Button>
                      </Tooltip>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OtherPrograms;