// src/components/whoshouldjoin/WhoShouldJoin.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactComponent as WorkIcon} from '../../assets/WorkIcon.svg';
import { ReactComponent as SchoolIcon} from '../../assets/SchoolIcon.svg';
import { ReactComponent as SwitchAccountIcon} from '../../assets/SwitchAccountIcon.svg';
import { ReactComponent as BusinessCenterIcon} from '../../assets/BusinessCenterIcon.svg';

const useStyles = makeStyles({
  section: {
    padding: '80px 40px',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    position: 'relative',
    "@media (max-width: 960px)": {
      padding: '60px 30px',
    },
    "@media (max-width: 600px)": {
      padding: '40px 20px',
    },
  },
  contentContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '60px',
    width: '100%',
    position: 'relative',
    "@media (max-width: 960px)": {
      marginBottom: '40px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '30px',
    },
  },
  title: {
    fontSize: '2.8rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    position: 'relative',
    display: 'inline-block',
    "@media (max-width: 960px)": {
      fontSize: '2.5rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '2rem !important',
    },
  },
  boxesContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px',
    position: 'relative',
    "@media (max-width: 960px)": {
      flexWrap: 'wrap',
      gap: '40px 30px',
    },
    "@media (max-width: 600px)": {
      flexDirection: 'column',
      gap: '30px',
    },
  },
  categoryBox: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '25px 15px',
    position: 'relative',
    borderRadius: '12px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    background: 'rgba(255, 255, 255, 0.8)',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.08)',
      '& $iconContainer': {
        transform: 'scale(1.1) rotate(5deg)',
      },
    },
    "@media (max-width: 960px)": {
      width: '45%',
    },
    "@media (max-width: 600px)": {
      width: '100%',
      padding: '20px 15px',
      maxWidth: '400px',
      margin: '0 auto',
    },
  },
  iconContainer: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '25px',
    background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.05), rgba(255, 198, 20, 0.05))',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.4s ease',
    '& svg': {
      width: '50px',
      height: '50px',
      color: '#2A2B6A',
      transition: 'all 0.3s ease',
    },
    "&:hover svg": {
      color: '#FFC614',
    },
    "@media (max-width: 600px)": {
      width: '80px',
      height: '80px',
      marginBottom: '20px',
      '& svg': {
        width: '45px',
        height: '45px',
      },
    },
  },
  categoryTitle: {
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '16px !important',
    minHeight: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    transition: 'all 0.3s ease',
    "@media (max-width: 960px)": {
      fontSize: '1.4rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.3rem !important',
      marginBottom: '12px !important',
      minHeight: 'auto',
    },
  },
  categoryDescription: {
    fontSize: '1rem !important',
    color: '#4A4A4A !important',
    lineHeight: '1.6 !important',
    minHeight: '100px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    "@media (max-width: 960px)": {
      fontSize: '0.95rem !important',
      minHeight: '110px',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
      minHeight: 'auto',
      marginBottom: '10px',
    },
  },
  divider: {
    position: 'absolute',
    top: '15%',
    right: '-15px',
    width: '4px',
    height: '70%',
    background: 'repeating-linear-gradient(to bottom, rgba(42, 43, 106, 0.8) 0, rgba(42, 43, 106, 0.8) 6px, transparent 6px, transparent 12px)',
    zIndex: 2,
    opacity: 0,
    animation: '$fadeIn 0.5s ease forwards',
    animationDelay: '0.5s',
    "@media (max-width: 960px)": {
      display: 'none', // Hide divider on tablet and mobile
    },
  },
  gradientDivider: {
    position: 'absolute',
    top: '15%',
    right: '-15px',
    width: '4px',
    height: '70%',
    background: 'repeating-linear-gradient(to bottom, rgba(42, 43, 106, 0.8) 0, rgba(42, 43, 106, 0.8) 6px, transparent 6px, transparent 12px)',
    zIndex: 2,
    mask: 'linear-gradient(to bottom, rgba(42, 43, 106, 0.8), rgba(255, 198, 20, 0.8))',
    WebkitMask: 'linear-gradient(to bottom, rgba(42, 43, 106, 0.8), rgba(255, 198, 20, 0.8))',
    opacity: 0,
    animation: '$fadeIn 0.5s ease forwards',
    animationDelay: '0.5s',
    "@media (max-width: 960px)": {
      display: 'none', // Hide divider on tablet and mobile
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
  // Background decorative elements
  decorativeElement: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(42, 43, 106, 0.03)',
    zIndex: 1,
  },
  yellowDecoration: {
    background: 'rgba(255, 198, 20, 0.05)',
  },
  categoryBoxVisible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  decorationBox: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    backgroundImage: 'radial-gradient(rgba(42, 43, 106, 0.1) 2px, transparent 2px)',
    backgroundSize: '20px 20px',
    opacity: 0.5,
    zIndex: 1,
  },
});

const WhoShouldJoin = () => {
  const classes = useStyles();
  const [visibleCategories, setVisibleCategories] = useState([]);

  // Generate random decorative elements
  const decorativeElements = [
    { top: '15%', left: '5%', width: '250px', height: '250px', isYellow: true },
    { top: '65%', left: '15%', width: '180px', height: '180px', isYellow: false },
    { top: '20%', right: '8%', width: '200px', height: '200px', isYellow: false },
    { top: '70%', right: '12%', width: '150px', height: '150px', isYellow: true },
  ];

  const decorationBoxes = [
    { top: '10%', right: '20%', rotation: '15deg' },
    { bottom: '15%', left: '10%', rotation: '-10deg' },
  ];

  // Categories data with icons
  const categories = [
    {
      icon: <SchoolIcon />,
      title: 'Final-Year Students',
      description: 'Bridge The Gap Between Academics And Industry With Job-Specific Skills That Employers Actually Want.',
    },
    {
      icon: <WorkIcon />,
      title: 'Recent Graduates',
      description: 'Stand Out From Thousands Of Other Job Seekers With Portfolio Projects And Direct Employer Connections.',
    },
    {
      icon: <SwitchAccountIcon />,
      title: 'Career Switchers',
      description: 'Transition Into Tech With A Focused 30-Day Program That Builds Employable Skills Fast.',
    },
    {
      icon: <BusinessCenterIcon />,
      title: 'Freelancers & Contractors',
      description: 'Enhance Your Service Offerings With In-Demand Skills And Connect With Potential Long-Term Clients.',
    },
  ];

  // Animate categories on scroll
  useEffect(() => {
    const handleScroll = () => {
      const categoriesElement = document.getElementById('categories-container');
      if (!categoriesElement) return;

      const rect = categoriesElement.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100;
      
      if (isVisible && visibleCategories.length === 0) {
        const timers = categories.map((_, index) => {
          return setTimeout(() => {
            setVisibleCategories(prev => [...prev, index]);
          }, 200 * index);
        });
        
        return () => timers.forEach(timer => clearTimeout(timer));
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCategories.length, categories.length]);

  return (
    <Box className={classes.section}>
      {/* Background decorative elements */}
      {decorativeElements.map((element, index) => (
        <Box
          key={`element-${index}`}
          className={`${classes.decorativeElement} ${element.isYellow ? classes.yellowDecoration : ''}`}
          sx={{
            top: element.top,
            left: element.left,
            right: element.right,
            width: element.width,
            height: element.height,
          }}
        />
      ))}

      {/* Dotted pattern boxes */}
      {decorationBoxes.map((box, index) => (
        <Box
          key={`decoration-${index}`}
          className={classes.decorationBox}
          sx={{
            top: box.top,
            left: box.left,
            right: box.right,
            bottom: box.bottom,
            transform: `rotate(${box.rotation})`,
          }}
        />
      ))}

      <Container maxWidth="lg">
        <Box className={classes.contentContainer}>
          <Box className={classes.titleContainer}>
            <Typography variant="h2" className={classes.title}>
              Who Should Join This Program
            </Typography>
          </Box>

          <Box id="categories-container" className={classes.boxesContainer}>
            {categories.map((category, index) => (
              <Box 
                key={index} 
                className={classes.categoryBox}
                sx={{
                  opacity: visibleCategories.includes(index) ? 1 : 0,
                  transform: visibleCategories.includes(index) 
                    ? 'translateY(0)' 
                    : 'translateY(30px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                <Box className={classes.iconContainer}>
                  {category.icon}
                </Box>
                <Typography variant="h5" className={classes.categoryTitle}>
                  {category.title}
                </Typography>
                <Typography variant="body1" className={classes.categoryDescription}>
                  {category.description}
                </Typography>
                
                {/* Vertical gradient dotted divider between boxes (except for the last one) */}
                {index < categories.length - 1 && (
                  <Box 
                    className={classes.gradientDivider}
                    sx={{
                      background: `repeating-linear-gradient(
                        to bottom, 
                        rgba(42, 43, 106, 0.8) 0, 
                        rgba(42, 43, 106, 0.8) 6px, 
                        transparent 6px, 
                        transparent 12px
                      )`,
                      WebkitMaskImage: 'linear-gradient(to bottom, rgba(42, 43, 106, 0.8) 0%, rgba(255, 198, 20, 0.8) 100%)',
                      maskImage: 'linear-gradient(to bottom, rgba(42, 43, 106, 0.8) 0%, rgba(255, 198, 20, 0.8) 100%)',
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhoShouldJoin;