// src/components/otherprograms/OtherPrograms.jsx
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardMedia, 
  Button, 
  Tooltip, 
  Chip, 
  Tabs,
  Tab,
  Divider
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LaunchIcon from '@mui/icons-material/Launch';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import DataUsageIcon from '@mui/icons-material/DataUsage';

// No need to import images as we're using Unsplash URLs directly

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #101138 0%, #1e1c44 100%)',
    // Creates a mesh grid pattern in the background
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 
        'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      backgroundSize: '30px 30px',
      zIndex: 1,
    },
    "@media (max-width: 960px)": {
      padding: '60px 0',
    },
    "@media (max-width: 600px)": {
      padding: '40px 0',
    },
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  topBar: {
    background: 'linear-gradient(90deg, rgba(255, 198, 20, 0.1) 0%, rgba(255, 198, 20, 0.3) 50%, rgba(255, 198, 20, 0.1) 100%)',
    height: '4px',
    width: '100px',
    margin: '0 auto 15px auto',
    borderRadius: '2px',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '50px',
    position: 'relative',
    zIndex: 2,
    "@media (max-width: 960px)": {
      marginBottom: '40px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '30px',
    },
  },
  title: {
    fontSize: '2.75rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    position: 'relative',
    display: 'inline-block',
    "@media (max-width: 960px)": {
      fontSize: '2.4rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '2rem !important',
    },
  },
  highlight: {
    color: '#FFC614 !important',
    position: 'relative',
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: 'rgba(255, 255, 255, 0.7) !important',
    maxWidth: '700px',
    margin: '20px auto 0 !important',
    "@media (max-width: 960px)": {
      fontSize: '1rem !important',
      maxWidth: '90%',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
      maxWidth: '95%',
    },
  },
  tabsContainer: {
    marginBottom: '40px',
    "@media (max-width: 600px)": {
      marginBottom: '30px',
    },
  },
  tabsRoot: {
    minHeight: '60px',
    borderRadius: '30px',
    padding: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    width: 'fit-content',
    margin: '0 auto',
    position: 'relative',
    '& .MuiTabs-indicator': {
      display: 'none',
    },
    "@media (max-width: 600px)": {
      minHeight: '50px',
      borderRadius: '25px',
      padding: '3px',
    },
  },
  tab: {
    color: 'rgba(255, 255, 255, 0.7) !important',
    padding: '0 30px !important',
    minHeight: '50px !important',
    borderRadius: '25px !important',
    textTransform: 'none !important',
    fontSize: '1rem !important',
    fontWeight: '500 !important',
    transition: 'all 0.3s ease !important',
    '&.Mui-selected': {
      color: '#2A2B6A !important',
      background: '#FFC614',
    },
    '& .MuiTab-wrapper': {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    '& svg': {
      marginRight: '10px',
    },
    "@media (max-width: 960px)": {
      padding: '0 20px !important',
    },
    "@media (max-width: 600px)": {
      padding: '0 15px !important',
      minHeight: '44px !important',
      fontSize: '0.9rem !important',
      '& svg': {
        marginRight: '6px',
        fontSize: '1.2rem',
      },
    },
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    position: 'relative',
    zIndex: 2,
    "@media (max-width: 960px)": {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '25px',
    },
  },
  cardWrapper: {
    flex: '1 1 calc(50% - 15px)',
    maxWidth: 'calc(50% - 15px)',
    display: 'flex',
    "@media (max-width: 960px)": {
      flex: '1 1 100%',
      maxWidth: '500px',
    },
  },
  card: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.03) !important',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px !important',
    overflow: 'hidden',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2) !important',
    transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.6s !important',
    padding: '0 !important',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 198, 20, 0.1) !important',
      '& $viewButton': {
        opacity: 1,
        transform: 'translateY(0)',
      },
      '& $cardMedia': {
        transform: 'scale(1.05)',
      },
      '& $hoverOverlay': {
        opacity: 1,
      },
    },
    "@media (max-width: 600px)": {
      borderRadius: '16px !important',
    },
  },
  cardMedia: {
    height: '200px',
    transition: 'transform 0.6s',
    objectFit: 'cover',
    objectPosition: 'center',
    "@media (max-width: 600px)": {
      height: '180px',
    },
  },
  hoverOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '200px',
    background: 'linear-gradient(0deg, rgba(42, 43, 106, 0.1) 0%, rgba(255, 255, 255, 0) 50%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    zIndex: 2,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: '0 0 20px 0',
    "@media (max-width: 600px)": {
      height: '180px',
    },
  },
  viewButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    padding: '10px 24px !important',
    borderRadius: '30px !important', 
    fontWeight: '600 !important',
    textTransform: 'none !important',
    fontSize: '0.95rem !important',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.4s ease !important',
    '&:hover': {
      backgroundColor: 'white !important',
    },
    "@media (max-width: 600px)": {
      padding: '8px 20px !important',
      fontSize: '0.85rem !important',
      borderRadius: '25px !important',
    },
  },
  cardContent: {
    padding: '25px !important',
    color: 'white',
    "@media (max-width: 600px)": {
      padding: '20px !important',
    },
  },
  programTag: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    zIndex: 3,
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    fontWeight: 'bold !important',
    padding: '5px 12px !important',
    borderRadius: '20px !important',
    fontSize: '0.75rem !important',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15) !important',
    "@media (max-width: 600px)": {
      top: '10px',
      left: '10px',
      fontSize: '0.7rem !important',
      padding: '4px 10px !important',
    },
  },
  durationTag: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    zIndex: 3,
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
    "@media (max-width: 600px)": {
      top: '10px',
      right: '10px',
      fontSize: '0.7rem !important',
      padding: '4px 10px !important',
      '& svg': {
        fontSize: '0.8rem !important',
        marginRight: '3px',
      },
    },
  },
  programTitle: {
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    marginBottom: '15px !important',
    lineHeight: '1.3 !important',
    "@media (max-width: 960px)": {
      fontSize: '1.4rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.3rem !important',
      marginBottom: '12px !important',
    },
  },
  divider: {
    backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
    margin: '15px 0 20px !important',
    "@media (max-width: 600px)": {
      margin: '12px 0 16px !important',
    },
  },
  featureList: {
    marginBottom: '20px',
    "@media (max-width: 600px)": {
      marginBottom: '15px',
    },
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    "@media (max-width: 600px)": {
      marginBottom: '10px',
    },
  },
  featureIcon: {
    color: '#FFC614 !important',
    fontSize: '0.8rem !important',
    marginRight: '12px !important',
    "@media (max-width: 600px)": {
      fontSize: '0.7rem !important',
      marginRight: '10px !important',
    },
  },
  featureText: {
    fontSize: '0.95rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    fontWeight: '400 !important',
    "@media (max-width: 600px)": {
      fontSize: '0.85rem !important',
    },
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
    "@media (max-width: 600px)": {
      marginTop: '15px',
    },
  },
  stats: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    "@media (max-width: 600px)": {
      gap: '10px',
    },
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
  },
  statIcon: {
    color: 'rgba(255, 255, 255, 0.7) !important',
    fontSize: '1.1rem !important',
    marginRight: '8px !important',
    "@media (max-width: 600px)": {
      fontSize: '1rem !important',
      marginRight: '6px !important',
    },
  },
  statText: {
    fontSize: '0.9rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    "@media (max-width: 600px)": {
      fontSize: '0.8rem !important',
    },
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
    },
    "@media (max-width: 600px)": {
      width: '8px',
      height: '8px',
      marginRight: '6px',
    },
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
  moreButton: {
    marginTop: '60px !important',
    backgroundColor: 'transparent !important',
    color: 'white !important',
    border: '2px solid rgba(255, 198, 20, 0.5) !important',
    padding: '12px 30px !important',
    borderRadius: '30px !important',
    fontWeight: '600 !important',
    fontSize: '1rem !important',
    transition: 'all 0.3s ease !important',
    display: 'flex !important',
    margin: '0 auto !important',
    '&:hover': {
      backgroundColor: 'rgba(255, 198, 20, 0.1) !important',
      borderColor: '#FFC614 !important',
    },
    "@media (max-width: 960px)": {
      marginTop: '40px !important',
    },
    "@media (max-width: 600px)": {
      marginTop: '30px !important',
      padding: '10px 25px !important',
      fontSize: '0.9rem !important',
      borderRadius: '25px !important',
    },
  },
  glowEffect: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    zIndex: 1,
    opacity: 0.3,
    filter: 'blur(150px)',
    "@media (max-width: 600px)": {
      width: '300px',
      height: '300px',
    },
  },
  purpleGlow: {
    background: '#8a5cf7',
    top: '-200px',
    right: '-100px',
  },
});

const OtherPrograms = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Using Unsplash images that represent student opportunity in respective fields
  const programs = [
    {
      id: 1,
      title: 'Master Internship Program In Full Stack',
      duration: '3 Months',
      features: [
        'Build Real Products with Industry Standards',
        'Ecommerce & Marketplace Development',
        'API Integration & Backend Architecture',
        'Performance Optimization Techniques'
      ],
      rating: 4.8,
      students: 2854,
      tag: 'Full Stack',
      // Image showing collaboration and coding - represents opportunity in full stack
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      level: 'Intermediate',
      category: 'development'
    },
    {
      id: 2,
      title: 'Master Internship Program In Data Science',
      duration: '3 Months',
      features: [
        'Build Production-Ready ML Models',
        'Advanced Data Visualization & Analysis',
        'AI Chatbot & Recommendation Systems',
        'Predictive Analytics Implementation'
      ],
      rating: 4.7,
      students: 2960,
      tag: 'Data Science',
      // Image showing data visualization and analytics - represents opportunity in data science
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      level: 'Advanced',
      category: 'datascience'
    }
  ];

  return (
    <Box className={classes.section}>
      {/* Glow effect - only top purple glow */}
      <Box className={`${classes.glowEffect} ${classes.purpleGlow}`} />
      
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Box className={classes.topBar}></Box>
          <Typography variant="h2" className={classes.title}>
            Explore Our <span className={classes.highlight}>Other Programs</span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Immersive learning experiences designed to transform beginners into industry-ready professionals
          </Typography>
        </Box>

        <Box className={classes.tabsContainer}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            classes={{ root: classes.tabsRoot }}
            centered
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab 
              label="All Programs" 
              className={classes.tab}
              icon={<SchoolIcon />}
            />
            <Tab 
              label="Development" 
              className={classes.tab} 
              icon={<CodeIcon />}
            />
            <Tab 
              label="Data Science" 
              className={classes.tab}
              icon={<DataUsageIcon />}
            />
          </Tabs>
        </Box>

        <Box className={classes.cardsContainer}>
          {programs
            .filter(program => {
              if (tabValue === 0) return true;
              if (tabValue === 1) return program.category === 'development';
              if (tabValue === 2) return program.category === 'datascience';
              return true;
            })
            .map((program) => (
              <Box key={program.id} className={classes.cardWrapper}>
                <Card key={program.id} className={classes.card} sx={{ height: '100%' }}>
                  {/* Tags */}
                  <Chip label={program.tag} className={classes.programTag} />
                  <Chip 
                    icon={<AccessTimeIcon />} 
                    label={program.duration}
                    className={classes.durationTag} 
                  />
                  
                  {/* Media */}
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      className={classes.cardMedia}
                      image={program.image}
                      alt={program.title}
                    />
                    
                    {/* Hover overlay with button */}
                    <Box className={classes.hoverOverlay}>
                      <Button 
                        variant="contained" 
                        className={classes.viewButton}
                        endIcon={<LaunchIcon />}
                      >
                        Explore Program
                      </Button>
                    </Box>
                  </Box>
                  
                  {/* Content */}
                  <Box className={classes.cardContent}>
                    <Typography className={classes.programTitle}>
                      {program.title}
                    </Typography>
                    
                    <Divider className={classes.divider} />
                    
                    {/* Features list */}
                    <Box className={classes.featureList}>
                      {program.features.map((feature, index) => (
                        <Box key={index} className={classes.featureItem}>
                          <Box 
                            component="span" 
                            sx={{ 
                              width: '6px', 
                              height: '6px', 
                              borderRadius: '50%', 
                              backgroundColor: '#FFC614',
                              display: 'inline-block',
                              marginRight: '12px',
                            }} 
                          />
                          <Typography className={classes.featureText}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    
                    {/* Stats */}
                    <Box className={classes.statsContainer}>
                      <Box className={classes.stats}>
                        <Box className={classes.statItem}>
                          <StarIcon className={classes.statIcon} />
                          <Typography className={classes.statText}>
                            {program.rating}
                          </Typography>
                        </Box>
                        
                        <Box className={classes.statItem}>
                          <PeopleAltOutlinedIcon className={classes.statIcon} />
                          <Typography className={classes.statText}>
                            {program.students}+ students
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box className={classes.pulseDot} />
                        <Typography sx={{ 
                          fontSize: { xs: '0.8rem', sm: '0.85rem' }, 
                          fontWeight: 500, 
                          color: '#2ecc71' 
                        }}>
                          Enrolling Now
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
        </Box>
        
        <Button variant="outlined" className={classes.moreButton}>
          View All Programs
        </Button>
      </Container>
    </Box>
  );
};

export default OtherPrograms;