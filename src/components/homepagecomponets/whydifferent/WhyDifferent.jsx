import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactComponent as Briefcase } from '../../../assets/briefcase.svg';
import { ReactComponent as Calender } from '../../../assets/calender.svg';
import { ReactComponent as Sheet } from '../../../assets/sheet.svg';
import { ReactComponent as Graph } from '../../../assets/graph.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles({
  section: {
    padding: '20px 0 40px 0',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 50%, #f0f7ff 100%)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    "@media (max-width: 1200px)": {
      padding: '20px 0 35px 0',
    },
    "@media (max-width: 960px)": {
      padding: '60px 0',
    },
    "@media (max-width: 600px)": {
      padding: '45px 0',
    },
    "@media (max-width: 480px)": {
      padding: '35px 0',
    },
    "@media (max-width: 375px)": {
      padding: '30px 0',
    },
  },
  bgDecoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at 20% 30%, rgba(42, 43, 106, 0.03) 0%, transparent 400px), radial-gradient(circle at 80% 70%, rgba(255, 198, 20, 0.03) 0%, transparent 400px)',
    zIndex: 0,
  },
  header: {
    marginBottom: '10px',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    animation: '$fadeIn 0.8s ease-out',
    width: '100%',
    maxWidth: '1200px',
    padding: '0 24px',
    "@media (max-width: 600px)": {
      padding: '0 16px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: '800 !important',
    color: '#2A2B6A !important',
    marginBottom: '16px !important',
    
    '& span': {
      background: 'linear-gradient(90deg, #FFC614 0%, #FFD700 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      padding: '0 5px',
    },
    
    "@media (max-width: 1200px)": {
      fontSize: '2.3rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.1rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.8rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.6rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '1.5rem !important',
    },
  },
  subtitle: {
    maxWidth: '800px',
    margin: '0 auto !important',
    fontSize: '1.1rem !important',
    lineHeight: '1.7 !important',
    color: '#555 !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.05rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1rem !important',
      maxWidth: '700px',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.95rem !important',
      maxWidth: '100%',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.9rem !important',
      lineHeight: '1.6 !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.85rem !important',
    },
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1200px',
    marginTop: '20px',
    zIndex: 1,
    padding: '0 24px',
    "@media (max-width: 1200px)": {
      maxWidth: '960px',
    },
    "@media (max-width: 960px)": {
      flexDirection: 'row',
      maxWidth: '720px',
      gap: '20px',
    },
    "@media (max-width: 600px)": {
      padding: '0 16px',
      maxWidth: '100%',
    },
  },
  featuresPanel: {
    width: '55%',
    paddingRight: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    "@media (max-width: 1200px)": {
      width: '50%',
      paddingRight: '40px',
    },
    "@media (max-width: 960px)": {
      width: '48%',
      paddingRight: '30px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '0',
      display: 'none',
    },
  },
  featureTabButton: {
    padding: '20px 25px !important',
    paddingLeft: '30px !important',
    borderRadius: '5px !important',
    display: 'flex !important',
    alignItems: 'flex-start !important',
    justifyContent: 'flex-start !important',
    marginBottom: '15px !important',
    width: '100% !important',
    textAlign: 'left !important',
    backgroundColor: 'white !important',
    transition: 'all 0.3s ease !important',
    border: '1px solid #E5E8F0 !important',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05) !important',
    color: '#333 !important',
    position: 'relative',
    overflow: 'hidden',
    transform: 'translateX(0)',
    "&:before": {
      content: '""',
      position: 'absolute',
      left: '0',
      top: '0',
      height: '0%',
      width: '4px',
      backgroundColor: '#FFC614',
      transition: 'height 0.5s ease',
    },
    "&:hover": {
      backgroundColor: '#F8F9FF !important',
      boxShadow: '0 5px 15px rgba(42, 43, 106, 0.1) !important',
      transform: 'translateX(5px)',
      "&:before": {
        height: '30%',
      },
    },
    "&:last-child": {
      marginBottom: '0 !important',
    },
    "@media (max-width: 1200px)": {
      padding: '18px 22px !important',
      paddingLeft: '25px !important',
    },
    "@media (max-width: 960px)": {
      padding: '15px 20px !important',
      paddingLeft: '20px !important',
    },
  },
  activeTab: {
    backgroundColor: '#2A2B6A !important',
    border: '1px solid #2A2B6A !important',
    color: 'white !important',
    boxShadow: '0 8px 25px rgba(42, 43, 106, 0.25) !important',
    transform: 'translateX(10px)',
    "&:before": {
      height: '100%',
      animation: '$growLine 0.5s ease',
    },
    "&:hover": {
      backgroundColor: '#2A2B6A !important',
      transform: 'translateX(10px)',
      "&:before": {
        height: '100%',
      },
    },
  },
  tabIconContainer: {
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
    flexShrink: 0,
    transition: 'all 0.3s ease',
    backgroundColor: 'rgba(42, 43, 106, 0.06)',
    "@media (max-width: 1200px)": {
      width: '45px',
      height: '45px',
      marginRight: '12px',
    },
    "@media (max-width: 960px)": {
      width: '40px',
      height: '40px',
      marginRight: '10px',
    },
  },
  activeIconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'rotate(5deg) scale(1.1)',
  },
  tabIcon: {
    width: '25px',
    height: '25px',
    color: '#2A2B6A',
    transition: 'all 0.3s ease',
    '& path': {
      fill: '#2A2B6A',
      transition: 'fill 0.3s ease',
    },
    "@media (max-width: 1200px)": {
      width: '22px',
      height: '22px',
    },
    "@media (max-width: 960px)": {
      width: '20px',
      height: '20px',
    },
  },
  activeIcon: {
    '& path': {
      fill: '#FFC614',
    },
    transform: 'scale(1.1)',
  },
  tabContent: {
    flex: 1,
  },
  tabTitle: {
    fontWeight: '700 !important',
    fontSize: '1.1rem !important',
    lineHeight: '1.3 !important',
    marginBottom: '5px !important',
    transition: 'color 0.3s ease',
    textTransform: 'uppercase',
    "@media (max-width: 1200px)": {
      fontSize: '1.05rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1rem !important',
    },
  },
  tabDescription: {
    fontSize: '0.9rem !important',
    opacity: 0.85,
    transition: 'color 0.3s ease',
    lineHeight: '1.5 !important',
    textTransform: "capitalize",
    "@media (max-width: 1200px)": {
      fontSize: '0.85rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '0.85rem !important',
      lineHeight: '1.4 !important',
    },
  },
  detailsPanel: {
    width: '45%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.08)',
    minHeight: '450px',
    "@media (max-width: 1200px)": {
      width: '50%',
      minHeight: '420px',
    },
    "@media (max-width: 960px)": {
      width: '48%',
      minHeight: '380px',
    },
    "@media (max-width: 600px)": {
      display: 'none',
      minHeight: 'auto',
    },
  },
  detailsContent: {
    padding: '40px',
    width: '100%',
    height: '100%',
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transform: 'translateY(20px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    pointerEvents: 'none',
    "@media (max-width: 1200px)": {
      padding: '35px',
    },
    "@media (max-width: 960px)": {
      padding: '30px',
    },
  },
  activeContent: {
    opacity: 1,
    transform: 'translateY(0)',
    zIndex: 2,
    pointerEvents: 'auto',
  },
  detailNumber: {
    fontSize: '5rem !important',
    fontWeight: '900 !important',
    color: 'rgba(42, 43, 106, 0.05) !important',
    position: 'absolute',
    top: '20px',
    right: '30px',
    lineHeight: '1 !important',
    transition: 'all 0.5s ease',
    "@media (max-width: 1200px)": {
      fontSize: '4.5rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '4rem !important',
    },
  },
  detailTitle: {
    fontSize: '2rem !important',
    fontWeight: '800 !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    position: 'relative',
    transition: 'all 0.5s ease',
    transform: 'translateY(0)',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '0',
      width: '0px',
      height: '3px',
      backgroundColor: '#FFC614',
      transition: 'width 0.8s ease',
    },
    "@media (max-width: 1200px)": {
      fontSize: '1.8rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.7rem !important',
    },
  },
  activeTitleUnderline: {
    '&::after': {
      width: '60px',
    },
  },
  detailDescription: {
    fontSize: '1.1rem !important',
    color: '#555 !important',
    lineHeight: '1.8 !important',
    marginBottom: '25px !important',
    maxWidth: '90%',
    transition: 'all 0.5s ease',
    transform: 'translateY(0)',
    "@media (max-width: 1200px)": {
      fontSize: '1.05rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1rem !important',
      lineHeight: '1.7 !important',
    },
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  '@keyframes slideDown': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@keyframes slideUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@keyframes slideInLeft': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-30px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.05)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
  '@keyframes growLine': {
    '0%': {
      height: '0%',
    },
    '100%': {
      height: '100%',
    },
  },
  
  // Mobile accordion styles
  mobileAccordionContainer: {
    display: 'none',
    width: '100%',
    marginTop: '30px',
    marginBottom: '20px',
    "@media (max-width: 600px)": {
      display: 'block',
    },
  },
  autoRotatingIndicator: {
    display: 'none',
    fontSize: '0.75rem !important',
    color: 'rgba(42, 43, 106, 0.6) !important',
    textAlign: 'center',
    marginTop: '15px',
    fontStyle: 'italic',
    "@media (max-width: 600px)": {
      display: 'block',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.7rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.65rem !important',
    },
  },
  accordion: {
    borderRadius: '8px !important',
    marginBottom: '12px !important',
    overflow: 'hidden',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.08) !important',
    background: 'white !important',
    border: '1px solid rgba(0, 0, 0, 0.05) !important',
    transition: 'box-shadow 0.3s ease !important',
    '&:before': {
      display: 'none',
    },
    '&.Mui-expanded': {
      boxShadow: '0 8px 25px rgba(42, 43, 106, 0.12) !important',
      marginBottom: '12px !important',
    },
    "@media (max-width: 480px)": {
      marginBottom: '10px !important',
      '&.Mui-expanded': {
        marginBottom: '10px !important',
      }
    },
    "@media (max-width: 375px)": {
      marginBottom: '8px !important',
      '&.Mui-expanded': {
        marginBottom: '8px !important',
      }
    },
  },
  accordionSummary: {
    minHeight: 'unset !important',
    padding: '15px 16px !important',
    "&.Mui-expanded": {
      minHeight: 'unset !important',
      background: '#F8F9FF !important',
      borderRadius: '8px 8px 0 0',
    },
    "@media (max-width: 480px)": {
      padding: '12px 12px !important',
    },
    "@media (max-width: 375px)": {
      padding: '10px 12px !important',
    },
  },
  accordionSummaryContent: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 !important',
    "&.Mui-expanded": {
      margin: '0 !important',
    },
  },
  accordionIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(42, 43, 106, 0.06)',
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    marginRight: '15px',
    "@media (max-width: 480px)": {
      width: '34px',
      height: '34px',
      marginRight: '12px',
    },
    "@media (max-width: 375px)": {
      width: '30px',
      height: '30px',
      marginRight: '10px',
    },
  },
  accordionIconActive: {
    backgroundColor: '#2A2B6A',
    '& svg path': {
      fill: '#FFC614',
    },
  },
  accordionIcon: {
    width: '22px',
    height: '22px',
    color: '#2A2B6A',
    '& path': {
      fill: '#2A2B6A',
      transition: 'fill 0.3s ease',
    },
    "@media (max-width: 480px)": {
      width: '18px',
      height: '18px',
    },
    "@media (max-width: 375px)": {
      width: '16px',
      height: '16px',
    },
  },
  accordionTitle: {
    fontWeight: '600 !important',
    fontSize: '1rem !important',
    color: '#2A2B6A !important',
    "@media (max-width: 480px)": {
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.85rem !important',
    },
  },
  accordionDetails: {
    padding: '0 16px 20px !important',
    "@media (max-width: 480px)": {
      padding: '0 12px 15px !important',
    },
    "@media (max-width: 375px)": {
      padding: '0 12px 12px !important',
    },
  },
  accordionDescription: {
    fontSize: '0.95rem !important',
    color: '#555 !important',
    lineHeight: '1.6 !important',
    "@media (max-width: 480px)": {
      fontSize: '0.85rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.8rem !important',
    },
  },
  expandIcon: {
    color: '#2A2B6A !important',
    transition: 'transform 0.3s ease !important',
    "@media (max-width: 480px)": {
      fontSize: '1.2rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '1.1rem !important',
    },
  },
});

const WhyDifferent = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const [animateContent, setAnimateContent] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(0);
  const timerRef = useRef(null);
  const autoRotateTimerRef = useRef(null);

  // Auto-rotate tabs for desktop/tablet views
  useEffect(() => {
    const rotateTab = () => {
      setActiveTab(prev => (prev + 1) % 4);
    };
    
    const autoRotate = setInterval(rotateTab, 5000);
    
    return () => clearInterval(autoRotate);
  }, []);

  // Auto-rotate accordion items for mobile view
  useEffect(() => {
    // Only auto-rotate on mobile view
    if (window.innerWidth <= 600) {
      const rotateAccordion = () => {
        setExpandedAccordion(prev => {
          // If none is expanded, start with the first one
          if (prev === false) return 0;
          // Otherwise move to the next or back to the first
          return (prev + 1) % 4;
        });
      };
      
      autoRotateTimerRef.current = setInterval(rotateAccordion, 5000);
    }
    
    return () => {
      if (autoRotateTimerRef.current) {
        clearInterval(autoRotateTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Animation timing logic
    clearTimeout(timerRef.current);
    setAnimateContent(false);
    
    timerRef.current = setTimeout(() => {
      setAnimateContent(true);
    }, 100);
    
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [activeTab]);

  const features = [
    {
      id: 0,
      icon: <Briefcase className={`${classes.tabIcon} ${activeTab === 0 ? classes.activeIcon : ''}`} />,
      title: "Job-First Approach",
      shortDescription: "Our curriculum is built on real-world job requirements, teaching exactly what employers need.",
      fullDescription: "Unlike traditional courses, we design our curriculum based on direct feedback from hiring partners. We analyze real job descriptions and industry trends to identify the exact skills that employers are looking for right now.",
    },
    {
      id: 1,
      icon: <Calender className={`${classes.tabIcon} ${activeTab === 1 ? classes.activeIcon : ''}`} />,
      title: "Weekly Role Rotation",
      shortDescription: "Explore different domain specializations weekly to expand your job opportunities.",
      fullDescription: "Our unique weekly role rotation system allows you to experience different job roles within your chosen domain. This approach helps you discover your strengths and gives you multiple pathways to employment.",
    },
    {
      id: 2,
      icon: <Sheet className={`${classes.tabIcon} ${activeTab === 2 ? classes.activeIcon : ''}`} />,
      title: "Instant Coding Setup",
      shortDescription: "AI-powered coding environments let you start instantly—no setup required.",
      fullDescription: "Forget about complex local environment setup. Our AI-powered cloud development environments eliminate all technical barriers, allowing you to focus on learning and creating from day one.",
    },
    {
      id: 3,
      icon: <Graph className={`${classes.tabIcon} ${activeTab === 3 ? classes.activeIcon : ''}`} />,
      title: "Hands-On Projects",
      shortDescription: "Build a strong portfolio with 10+ real-world projects that impress employers.",
      fullDescription: "Theory alone won't get you hired. That's why every concept you learn is immediately applied to real-world projects. By the end of the program, you'll have a portfolio of work that demonstrates your capabilities to employers.",
    },
  ];

  // Add staggered animation for tabs
  const getFeatureAnimation = (index) => {
    const baseDelay = 0.3;
    const staggerDelay = 0.15;
    const delay = baseDelay + (index * staggerDelay);
    
    return {
      animation: `$slideInLeft ${0.5}s ease-out ${delay}s both`,
    };
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    // Clear auto-rotation when user manually interacts
    if (autoRotateTimerRef.current) {
      clearInterval(autoRotateTimerRef.current);
      autoRotateTimerRef.current = null;
    }
    
    setExpandedAccordion(isExpanded ? panel : false);
    
    // Resume auto-rotation after 15 seconds of inactivity
    setTimeout(() => {
      if (window.innerWidth <= 600 && !autoRotateTimerRef.current) {
        autoRotateTimerRef.current = setInterval(() => {
          setExpandedAccordion(prev => {
            return (typeof prev === 'number' ? (prev + 1) % 4 : 0);
          });
        }, 5000);
      }
    }, 15000);
  };

  return (
    <Box className={classes.section}>
      <Box className={classes.bgDecoration} />
      <Box className={classes.header}>
        <Typography variant="h2" className={classes.title}>
          Why Gigaversity <span>Is Different</span>
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Our innovative approach sets us apart from traditional learning platforms, focusing on real-world skills and direct employer connections.
        </Typography>
      </Box>
      <Box className={classes.contentWrapper}>
        <Box className={classes.featuresPanel}>
          {features.map((feature, index) => (
            <Button
              key={index}
              className={`${classes.featureTabButton} ${activeTab === index ? classes.activeTab : ''}`}
              onMouseEnter={() => setActiveTab(index)}
              style={getFeatureAnimation(index)}
            >
              <Box className={`${classes.tabIconContainer} ${activeTab === index ? classes.activeIconContainer : ''}`}>
                {React.cloneElement(feature.icon, {
                  className: `${classes.tabIcon} ${activeTab === index ? classes.activeIcon : ''}`,
                })}
              </Box>
              <Box className={classes.tabContent}>
                <Typography className={classes.tabTitle} style={{color: activeTab === index ? 'white' : '#333'}}>
                  {feature.title}
                </Typography>
                <Typography className={classes.tabDescription} style={{color: activeTab === index ? 'rgba(255,255,255,0.85)' : 'inherit'}}>
                  {feature.shortDescription}
                </Typography>
              </Box>
            </Button>
          ))}
        </Box>
        
        <Box className={classes.detailsPanel}>
          {features.map((feature, index) => (
            <Box
              key={index}
              className={`${classes.detailsContent} ${activeTab === index ? classes.activeContent : ''}`}
              style={animateContent && activeTab === index ? {
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              } : {}}
            >
              <Typography 
                className={classes.detailNumber}
                style={animateContent && activeTab === index ? {
                  animation: '$pulse 2s infinite',
                } : {}}
              >
                0{index + 1}
              </Typography>
              <Typography 
                variant="h3" 
                className={classes.detailTitle}
                style={animateContent && activeTab === index ? {
                  animation: '$slideDown 0.5s ease-out',
                } : {}}
              >
                {feature.title}
              </Typography>
              <Typography 
                className={classes.detailDescription}
                style={animateContent && activeTab === index ? {
                  animation: '$slideUp 0.5s ease-out 0.2s both',
                } : {}}
              >
                {feature.fullDescription}
              </Typography>
            </Box>
          ))}
        </Box>
        
        {/* Mobile Accordion Version */}
        <Box className={classes.mobileAccordionContainer}>
          {features.map((feature, index) => (
            <Accordion 
              key={index}
              expanded={expandedAccordion === index}
              onChange={handleAccordionChange(index)}
              className={classes.accordion}
              TransitionProps={{ timeout: 500 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                className={classes.accordionSummary}
                classes={{
                  content: classes.accordionSummaryContent
                }}
              >
                <Box 
                  className={`${classes.accordionIconContainer} ${expandedAccordion === index ? classes.accordionIconActive : ''}`}
                >
                  {React.cloneElement(feature.icon, {
                    className: classes.accordionIcon
                  })}
                </Box>
                <Typography className={classes.accordionTitle}>
                  {feature.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography className={classes.accordionDescription}>
                  {feature.fullDescription}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
          <Typography className={classes.autoRotatingIndicator}>
            Auto-rotating content • Tap any section to pause
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyDifferent;