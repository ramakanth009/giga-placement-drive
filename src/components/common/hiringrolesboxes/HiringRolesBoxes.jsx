// src/components/common/hiringrolesboxes/HiringRolesBoxes.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const useStyles = makeStyles({
  section: {
    padding: '80px 30px',
    background: props => props.backgroundGradient || 'linear-gradient(170deg, #f8fbff 0%, #f0f6ff 70%, #f2f8ff 100%)',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 768px)': {
      padding: '60px 20px',
    },
  },
  
  decorativeShape: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: props => props.decorativeShapeGradient || 'radial-gradient(circle, rgba(42, 43, 106, 0.05) 0%, rgba(42, 43, 106, 0) 70%)',
    zIndex: 1,
  },
  decorativeShapeTop: {
    top: '-200px',
    right: '-100px',
  },
  decorativeShapeBottom: {
    bottom: '-200px',
    left: '-100px',
    background: props => props.decorativeShapeBottomGradient || 'radial-gradient(circle, rgba(255, 198, 20, 0.05) 0%, rgba(255, 198, 20, 0) 70%)',
  },
  decorativeLines: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1,
    opacity: 0.07,
    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%232A2B6A\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1400px',
    margin: '0 auto',
  },
  headerContainer: {
    position: 'relative',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      marginBottom: '40px',
    },
  },
  sectionBadge: {
    background: 'linear-gradient(135deg, #2A2B6A 0%, #3F40A1 100%)',
    color: 'white',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '30px',
    marginBottom: '15px',
    display: 'inline-block',
    boxShadow: '0 4px 12px rgba(42, 43, 106, 0.2)',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '5px !important',
    position: 'relative',
    display: 'inline-block',
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #FFC614, #FF9D00)',
      borderRadius: '4px',
    },
  },
  highlightText: {
    color: '#FFC614 !important',
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#666666 !important',
    maxWidth: '850px',
    margin: '30px auto 0 !important',
    lineHeight: '1.8 !important',
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '95%',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    },
  },
  highlight: {
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
  },
  rolesContainer: {
    position: 'relative',
    // padding: '5px 0',
    overflow: 'hidden',
  },
  rolesScrollContainer: {
    display: 'flex',
    justifyContent: 'center',
    overflowX: 'auto',
    overflowY: 'hidden',
    padding: '20px 10px 40px',
    scrollbarWidth: 'thin',
    scrollbarColor: 'rgba(42, 43, 106, 0.3) rgba(0, 0, 0, 0.05)',
    '-webkit-overflow-scrolling': 'touch',
    position: 'relative',
    gap: '20px',
    '&::-webkit-scrollbar': {
      height: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'rgba(0, 0, 0, 0.05)',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(42, 43, 106, 0.3)',
      borderRadius: '10px',
    },
  },
  // fadeLeft: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '10%',
  //   height: '100%',
  //   background: 'linear-gradient(to right, rgba(246, 249, 253, 1), rgba(246, 249, 253, 0))',
  //   zIndex: 3,
  //   pointerEvents: 'none',
  // },
  // fadeRight: {
  //   position: 'absolute',
  //   top: 0,
  //   right: 0,
  //   width: '10%',
  //   height: '100%',
  //   background: 'linear-gradient(to left, rgba(246, 249, 253, 1), rgba(246, 249, 253, 0))',
  //   zIndex: 3,
  //   pointerEvents: 'none',
  // },
  roleCard: {
    position: 'relative',
    width: '220px',
    height: 'auto',
    minHeight: '250px',
    flexShrink: 0,
    background: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    border: '1px solid rgba(0, 0, 0, 0.03)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingBottom: '20px',
    transform: 'translateY(0)',
    '&:hover': {
      transform: 'translateY(-15px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    },
    '@media (max-width: 768px)': {
      width: '200px',
      minHeight: '230px',
    },
    '@media (max-width: 480px)': {
      width: '180px',
      minHeight: '220px',
    },
  },
  
  cardTop: {
    width: '100%',
    height: '90px',
    background: props => props.iconContainerGradient || 'linear-gradient(135deg, #2A2B6A 0%, #3F40A1 100%)',
    borderRadius: '16px 16px 0 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
        '@media (max-width: 768px)': {
      height: '80px',
    },
  },
  roleIconWrapper: {
    width: '65px',
    height: '65px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    position: 'relative',
    zIndex: 2,
    '& svg': {
      color: 'white',
      fontSize: '30px',
    },
  },
  roleContent: {
    padding: '20px 15px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  verifiedBadge: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    zIndex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.15) !important',
    color: 'white !important',
    fontSize: '0.7rem !important',
    padding: '2px 8px !important',
    borderRadius: '20px !important',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
    '& .MuiChip-icon': {
      fontSize: '0.9rem !important',
      color: 'white !important',
    },
  },
  roleTitle: {
    fontSize: '1.1rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center !important',
    margin: '10px 0 !important',
    minHeight: '44px !important',
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '30px',
      height: '2px',
      background: '#FFC614',
    },
    '@media (max-width: 768px)': {
      fontSize: '1rem !important',
      minHeight: '40px !important',
    },
  },
  roleFeatures: {
    margin: '15px 0 0',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  roleFeature: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: '0.85rem',
    color: '#666',
    marginBottom: '8px',
    textAlign: 'center',
    fontSize: '0.85rem !important',
    '@media (max-width: 768px)': {
      fontSize: '0.8rem !important',
    },
  },
  featureIcon: {
    color: '#4CAF50',
    fontSize: '1rem !important',
    marginRight: '6px',
  },
  statusChip: {
    backgroundColor: 'rgba(76, 175, 80, 0.1) !important',
    color: '#4CAF50 !important',
    fontSize: '0.75rem !important',
    fontWeight: 'bold !important',
    marginTop: '8px !important',
    '& .MuiChip-icon': {
      color: '#4CAF50 !important',
    },
  },
  fadeIn: {
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  decorativeDots: {
    position: 'absolute',
    width: '180px',
    height: '180px',
    backgroundImage: 'radial-gradient(#2A2B6A 2px, transparent 2px)',
    backgroundSize: '15px 15px',
    opacity: 0.1,
    zIndex: 1,
  },
  dotsTopRight: {
    top: '10%',
    right: '5%',
  },
  dotsBottomLeft: {
    bottom: '10%',
    left: '5%',
  },
});

const HiringRolesBoxes = ({
  title,
  subtitle,
  highlightedText,
  roles,
  backgroundGradient,
  decorativeShapeGradient,
  decorativeShapeBottomGradient,
  iconContainerBgColor,
  iconContainerGradient
}) => {
  const styleProps = { 
    backgroundGradient, 
    decorativeShapeGradient, 
    decorativeShapeBottomGradient,
    iconContainerBgColor,
    iconContainerGradient
  };
  const classes = useStyles(styleProps);
  const [visibleItems, setVisibleItems] = useState([]);

  // Animation effect for cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Extract index from the data attribute
            const index = parseInt(entry.target.dataset.index);
            if (!isNaN(index) && !visibleItems.includes(index)) {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 150); // Staggered animation
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Observe all role cards
    const elements = document.querySelectorAll('[data-role-card]');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, [visibleItems]);

  // Add features to each role
  const roleFeatures = [
    'Growth Oriented',
    'High Demand',
    'Hybrid/Remote Work',
  ];

  return (
    <Box className={classes.section}>
      {/* Decorative elements */}
      <Box className={classes.decorativeShape} className={classes.decorativeShapeTop} />
      <Box className={classes.decorativeShape} className={classes.decorativeShapeBottom} />
      <Box className={classes.decorativeLines} />
      <Box className={classes.decorativeDots} className={classes.dotsTopRight} />
      <Box className={classes.decorativeDots} className={classes.dotsBottomLeft} />

      <Box className={classes.contentWrapper}>
        <Box className={classes.headerContainer}>
          <Typography variant="h2" className={classes.title}>
            {title} <span className={classes.highlightText}>{highlightedText}</span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            In Just 30 Days, Launch Your Career In One Of Today's Most {subtitle} Fields. Our {subtitle} 
            Program Connects You Directly With Hiring Partners Looking For Fresh Talent – All For 
            Less Than <span className={classes.highlight}>Your Monthly Data Pack</span>.
          </Typography>
        </Box>

        <Box className={classes.rolesContainer}>
          {/* Fade-out gradients on sides */}
          <Box className={classes.fadeLeft} />
          <Box className={classes.fadeRight} />
          
          <Box className={classes.rolesScrollContainer}>
            {roles.map((role, index) => (
              <Paper
                key={index}
                className={`${classes.roleCard} ${classes.fadeIn} ${visibleItems.includes(index) ? classes.visible : ''}`}
                elevation={0}
                sx={{ transitionDelay: `${index * 0.1}s` }}
                data-role-card
                data-index={index}
              >
                
                <Box className={classes.cardTop}>
                  <Box className={classes.roleIconWrapper}>
                    {role.icon}
                  </Box>
                </Box>
                
                <Box className={classes.roleContent}>
                  <Typography className={classes.roleTitle}>
                    {role.title}
                  </Typography>
                  
                  <Box className={classes.roleFeatures}>
                    {index === 0 && (
                      <>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          UI/UX Specialized
                        </Typography>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          Creative Focus
                        </Typography>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          Design-Driven
                        </Typography>
                      </>
                    )}
                    
                    {index === 1 && (
                      <>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          High Market Demand
                        </Typography>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          Versatile Skills
                        </Typography>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          Remote Friendly
                        </Typography>
                      </>
                    )}
                    
                    {index === 2 && (
                      <>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          Server Architecture
                        </Typography>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          API Development
                        </Typography>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          Database Expertise
                        </Typography>
                      </>
                    )}
                    
                    {index === 3 && (
                      <>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          Modern Stack
                        </Typography>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          DevOps Integration
                        </Typography>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          Scalable Solutions
                        </Typography>
                      </>
                    )}
                    
                    {index === 4 && (
                      <>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          Full-Spectrum Skills
                        </Typography>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          End-to-End Projects
                        </Typography>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          Technical Leadership
                        </Typography>
                      </>
                    )}
                    
                    {index >= 5 && (
                      <>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          Industry Expert
                        </Typography>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          Competitive Field
                        </Typography>
                        <Typography className={classes.roleFeature}>
                          <CheckCircleIcon className={classes.featureIcon} />
                          Growth-Oriented
                        </Typography>
                      </>
                    )}
                  </Box>
                  
                  <Chip 
                    label="Actively Hiring" 
                    size="small"
                    className={classes.statusChip}
                  />
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HiringRolesBoxes;