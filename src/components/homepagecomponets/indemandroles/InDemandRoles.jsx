// src/components/homepagecomponets/indemandroles/InDemandRoles.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CodeIcon from '@mui/icons-material/Code';
import DataIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import BarChartIcon from '@mui/icons-material/BarChart';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import LayersIcon from '@mui/icons-material/Layers';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import DataObjectIcon from '@mui/icons-material/DataObject';
import MemoryIcon from '@mui/icons-material/Memory';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';

const useStyles = makeStyles({
  section: {
    padding: '50px 0',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1A1B4A 100%)',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    "@media (max-width: 960px)": {
      padding: '60px 0',
    },
    "@media (max-width: 600px)": {
      padding: '50px 0',
    },
  },
  backgroundGlow: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    filter: 'blur(150px)',
    opacity: 0.15,
    zIndex: 0,
  },
  bottomLeftGlow: {
    background: '#4376eb',
    bottom: '-300px',
    left: '-200px',
  },
  topRightGlow: {
    background: '#7039e5',
    top: '-200px',
    right: '-200px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '40px',
    "@media (max-width: 768px)": {
      marginBottom: '30px',
    },
  },
  mainTitle: {
    fontSize: '2.8rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    marginBottom: '16px !important',
    position: 'relative',
    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      background: 'linear-gradient(90deg, rgba(255,198,20,0.7) 0%, #FFC614 50%, rgba(255,198,20,0.7) 100%)',
      borderRadius: '2px',
    },
    '& span': {
      color: '#FFC614 !important',
      position: 'relative',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.4rem !important',
    },
    "@media (max-width: 768px)": {
      fontSize: '2rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.8rem !important',
      '&:after': {
        width: '50px',
        bottom: '-10px',
      },
    },
  },
  subtitle: {
    fontSize: '1.5rem !important',
    fontWeight: '500 !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    marginTop: '20px !important',
    "@media (max-width: 768px)": {
      fontSize: '1.3rem !important',
      marginTop: '25px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.1rem !important',
      marginTop: '10px !important',
    },
  },
  categoriesContainer: {
    display: 'flex',
    flexDirection: 'column', 
    width: '100%',
    maxWidth: '1200px',
    gap: '50px',
    margin: '10px 0 10px',
    "@media (max-width: 600px)": {
      gap: '40px',
      margin: '5px 0 5px',
    },
  },
  categoryHeader: {
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    borderRadius: '16px',
    padding: '18px 25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '25px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    borderLeft: '5px solid #FFC614',
    transition: 'all 0.3s ease',
    "&:before": {
      content: '""',
      position: 'absolute',
      right: '0',
      top: '0',
      width: '40%',
      height: '100%',
      background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 100%)',
    },
    "&:after": {
      content: '""',
      position: 'absolute',
      top: '-100%',
      left: '-100%',
      width: '100%',
      height: '300%',
      background: 'linear-gradient(60deg, rgba(255,255,255,0.1) 5%, rgba(255,255,255,0) 50%)',
      transform: 'rotate(20deg)',
      pointerEvents: 'none',
    },
    "&:hover": {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transform: 'translateY(-3px)',
    },
    "@media (max-width: 600px)": {
      padding: '15px 20px',
      marginBottom: '20px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '10px',
    },
  },
  categoryTitleGroup: {
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
  },
  categoryTitle: {
    fontSize: '1.25rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    marginLeft: '15px !important',
    zIndex: 1,
    "@media (max-width: 600px)": {
      fontSize: '1.1rem !important',
      marginLeft: '10px !important',
    },
  },
  categoryIcon: {
    color: '#FFC614',
    fontSize: '26px !important',
    zIndex: 1,
    filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.2))',
    "@media (max-width: 600px)": {
      fontSize: '24px !important',
    },
  },
  categoryRightContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    "@media (max-width: 768px)": {
      gap: '10px',
    },
    "@media (max-width: 600px)": {
      width: '100%',
      justifyContent: 'space-between',
    },
  },
  statChip: {
    borderRadius: '20px !important',
    fontSize: '0.85rem !important',
    fontWeight: '500 !important',
    padding: '2px 8px !important',
    height: '28px !important',
    zIndex: '1 !important',
    "@media (max-width: 768px)": {
      fontSize: '0.8rem !important',
      height: '26px !important',
    },
  },
  demandChip: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    '& .MuiChip-icon': {
      color: '#2A2B6A !important',
    },
  },
  growthChip: {
    backgroundColor: '#4cd964 !important',
    color: '#333 !important',
    '& .MuiChip-icon': {
      color: '#333 !important',
    },
  },
  verifiedChip: {
    backgroundColor: '#00a0fc !important',
    color: 'white !important',
    '@media (max-width: 480px)': {
      display: 'none !important',
    },
  },
  rolesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    width: '100%',
    "@media (max-width: 768px)": {
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: '15px',
    },
    "@media (max-width: 480px)": {
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '12px',
    },
  },
  roleCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '66px',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    cursor: 'pointer',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transform: 'translateY(-8px)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
      borderColor: 'rgba(255, 198, 20, 0.3)',
      '&:before': {
        opacity: 1,
      },
      '& $roleIcon': {
        transform: 'scale(1.2)',
        color: '#FFC614',
      },
      '& $roleText': {
        transform: 'translateY(-2px)',
      },
    },
    "@media (max-width: 600px)": {
      height: '60px',
      padding: '12px',
    },
  },
  roleIcon: {
    marginRight: '10px',
    color: 'rgba(255, 198, 20, 0.8)',
    fontSize: '24px !important',
    transition: 'all 0.3s ease',
    filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.2))',
    "@media (max-width: 600px)": {
      fontSize: '20px !important',
      marginRight: '8px',
    },
    "@media (max-width: 480px)": {
      fontSize: '18px !important',
      marginRight: '6px',
    },
  },
  roleText: {
    color: 'white !important',
    fontWeight: '600 !important',
    fontSize: '1rem !important',
    transition: 'transform 0.3s ease',
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.8rem !important',
    },
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '50px',
    position: 'relative',
    zIndex: 2,
    "@media (max-width: 768px)": {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
      marginTop: '40px',
    },
  },
  button: {
    padding: '12px 24px !important',
    borderRadius: '8px !important',
    fontWeight: 'bold !important',
    fontSize: '1rem !important',
    textTransform: 'none !important',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15) !important',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    "&:before": {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
      zIndex: -1,
    },
    "@media (max-width: 600px)": {
      padding: '10px 20px !important',
      fontSize: '0.9rem !important',
      width: '80%',
      maxWidth: '300px',
    },
  },
  checkButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    border: 'none !important',
    '&:hover': {
      backgroundColor: '#FFD647 !important',
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2) !important',
    },
  },
  decorativeDot: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '50%',
  },
  hiddenMd: {
    "@media (max-width: 768px)": {
      display: 'none',
    },
  },
  hiddenSm: {
    "@media (max-width: 480px)": {
      display: 'none',
    },
  },
  categoryContainer: {
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  },
  visibleCategory: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const InDemandRoles = () => {
  const classes = useStyles();
  const [visibleCategories, setVisibleCategories] = useState([]);

  // Animation effect for categories
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Extract index from the data attribute
            const index = parseInt(entry.target.dataset.index);
            if (!isNaN(index) && !visibleCategories.includes(index)) {
              setTimeout(() => {
                setVisibleCategories(prev => [...prev, index]);
              }, index * 300); // Staggered animation
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    // Observe category containers
    const elements = document.querySelectorAll('[data-category]');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, [visibleCategories]);

  // Categories and their roles with additional metadata
  const categories = [
    {
      title: "Full Stack Development Roles",
      icon: <CodeIcon className={classes.categoryIcon} />,
      demandLevel: "High Demand",
      growthRate: "+35% YoY",
      verified: true,
      roles: [
        { id: 'uiux', title: 'UI/UX Developer', icon: <ComputerIcon className={classes.roleIcon} /> },
        { id: 'frontend', title: 'Frontend Developer', icon: <CodeIcon className={classes.roleIcon} /> },
        { id: 'backend', title: 'Backend Engineer', icon: <StorageIcon className={classes.roleIcon} /> },
        { id: 'mern', title: 'MERN Stack Developer', icon: <DeveloperModeIcon className={classes.roleIcon} /> },
        { id: 'fullstack', title: 'Full Stack Developer', icon: <LayersIcon className={classes.roleIcon} /> }
      ]
    },
    {
      title: "Data Science Roles",
      icon: <DataIcon className={classes.categoryIcon} />,
      demandLevel: "Very High Demand",
      growthRate: "+42% YoY",
      verified: true,
      roles: [
        { id: 'dataanalyst', title: 'Data Analyst', icon: <BarChartIcon className={classes.roleIcon} /> },
        { id: 'datascientist', title: 'Data Scientist', icon: <DataObjectIcon className={classes.roleIcon} /> },
        { id: 'mleng', title: 'ML Engineer', icon: <MemoryIcon className={classes.roleIcon} /> },
        { id: 'dataeng', title: 'Data Engineer', icon: <StorageIcon className={classes.roleIcon} /> },
        { id: 'aispecialist', title: 'AI Specialist', icon: <BubbleChartIcon className={classes.roleIcon} /> }
      ]
    }
  ];

  // Create decorative dots positions
  const decorativeDots = [
    { top: '15%', left: '7%' },
    { top: '25%', left: '12%' },
    { top: '35%', left: '5%' },
    { top: '75%', left: '9%' },
    { top: '80%', left: '15%' },
    { top: '20%', right: '8%' },
    { top: '30%', right: '15%' },
    { top: '65%', right: '10%' },
    { top: '85%', right: '12%' },
  ];

  return (
    <Box className={classes.section}>
      {/* Background glows */}
      <Box className={`${classes.backgroundGlow} ${classes.bottomLeftGlow}`} />
      <Box className={`${classes.backgroundGlow} ${classes.topRightGlow}`} />
      
      {/* Decorative dots */}
      {decorativeDots.map((dot, index) => (
        <Box 
          key={`dot-${index}`}
          className={`${classes.decorativeDot} ${index % 2 === 0 ? classes.hiddenMd : ''} ${index % 3 === 0 ? classes.hiddenSm : ''}`}
          sx={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            animation: `pulse ${(2 + Math.random() * 2)}s infinite alternate`,
            '@keyframes pulse': {
              '0%': { opacity: 0.3, transform: 'scale(1)' },
              '100%': { opacity: 0.8, transform: 'scale(1.5)' }
            }
          }}
        />
      ))}

      <Container maxWidth="lg" className={classes.container}>
        {/* Title Section */}
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.mainTitle}>
            Top In-Demand <span>Roles You Can Land</span>
          </Typography>
          <Typography variant="h4" className={classes.subtitle}>
            New Opportunities Added Every Week
          </Typography>
        </Box>

        {/* Categories and Roles */}
        <Box className={classes.categoriesContainer}>
          {categories.map((category, categoryIndex) => (
            <Box 
              key={categoryIndex} 
              className={`${classes.categoryContainer} ${visibleCategories.includes(categoryIndex) ? classes.visibleCategory : ''}`}
              data-category
              data-index={categoryIndex}
              sx={{ transitionDelay: `${categoryIndex * 0.2}s` }}
            >
              <Box className={classes.categoryHeader}>
                <Box className={classes.categoryTitleGroup}>
                  {category.icon}
                  <Typography className={classes.categoryTitle}>
                    {category.title}
                  </Typography>
                </Box>
                
                <Box className={classes.categoryRightContent}>
                  <Chip 
                    icon={<WorkIcon />}
                    label={category.demandLevel}
                    className={`${classes.statChip} ${classes.demandChip}`}
                    size="small"
                  />
                  <Chip 
                    icon={<TrendingUpIcon />}
                    label={category.growthRate}
                    className={`${classes.statChip} ${classes.growthChip}`}
                    size="small"
                  />
                  {category.verified && (
                    <Chip 
                      icon={<VerifiedIcon />}
                      label="Verified Employers"
                      className={`${classes.statChip} ${classes.verifiedChip}`}
                      size="small"
                    />
                  )}
                </Box>
              </Box>
              
              <Box className={classes.rolesGrid}>
                {category.roles.map((role, roleIndex) => (
                  <Box key={roleIndex} className={classes.roleCard}>
                    {role.icon}
                    <Typography className={classes.roleText}>
                      {role.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Action Buttons */}
        <Box className={classes.actionsContainer}>
          <Button
            variant="contained"
            className={`${classes.button} ${classes.checkButton}`}
          >
            Check Your Eligibility
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default InDemandRoles;