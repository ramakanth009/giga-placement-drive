// src/components/indemandroles/InDemandRoles.jsx
import React, { useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CodeIcon from '@mui/icons-material/Code';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    background: 'linear-gradient(180deg, #2A2B6A 0%, #1A1B4A 100%)',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    "@media (max-width: 960px)": {
      padding: '50px 0',
    },
    "@media (max-width: 600px)": {
      padding: '40px 0',
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
    "@media (max-width: 768px)": {
      width: '400px',
      height: '400px',
    },
  },
  // topRightGlow: {
  //   background: '#FFC614',
  //   bottom: '-200px',
  //   top: '-100px',
  // },
  bottomLeftGlow: {
    background: '#4376eb',
    bottom: '-300px',
    left: '-200px',
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
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-12px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      background: '#FFC614',
    },
    '& span': {
      color: '#FFC614 !important',
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
    marginTop: '25px !important',
    "@media (max-width: 768px)": {
      fontSize: '1.3rem !important',
      marginTop: '20px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.1rem !important',
      marginTop: '15px !important',
    },
  },
  tabsContainer: {
    display: 'flex',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '4px',
    marginBottom: '40px',
    width: '100%',
    maxWidth: '750px',
    justifyContent: 'space-between',
    gap: '20px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    "@media (max-width: 768px)": {
      flexDirection: 'column',
      gap: '10px',
      marginBottom: '30px',
    },
    "@media (max-width: 480px)": {
      borderRadius: '12px',
      padding: '3px',
    },
  },
  tabButton: {
    flex: '0 0 48%',
    padding: '16px !important',
    color: 'white !important',
    fontWeight: '600 !important',
    borderRadius: '12px !important',
    textTransform: 'none !important',
    fontSize: '1.1rem !important',
    transition: 'all 0.3s ease !important',
    "@media (max-width: 768px)": {
      flex: 'none',
      width: '100%',
      padding: '12px !important',
      fontSize: '1rem !important',
    },
    "@media (max-width: 480px)": {
      borderRadius: '10px !important',
      padding: '10px !important',
      fontSize: '0.9rem !important',
    },
  },
  activeTabButton: {
    backgroundColor: 'white !important',
    color: '#2A2B6A !important',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1) !important',
  },
  rolesContainer: {
    width: '100%',
    maxWidth: '1000px',
    "@media (max-width: 768px)": {
      maxWidth: '600px',
    },
  },
  roleCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '8px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '35px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    },
    "@media (max-width: 600px)": {
      height: '32px',
      padding: '6px 8px',
      borderRadius: '10px',
    },
    "@media (max-width: 480px)": {
      height: '30px',
      padding: '5px 7px',
    },
  },
  roleIcon: {
    marginRight: '10px',
    color: '#2A2B6A',
    fontSize: '24px !important',
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
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
    fontSize: '1.1rem !important',
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
    marginTop: '40px',
    position: 'relative',
    zIndex: 2,
    "@media (max-width: 768px)": {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
      marginTop: '30px',
    },
  },
  button: {
    padding: '12px 24px !important',
    borderRadius: '8px !important',
    fontWeight: 'bold !important',
    fontSize: '1rem !important',
    textTransform: 'none !important',
    transition: 'all 0.3s ease !important',
    "@media (max-width: 600px)": {
      padding: '10px 20px !important',
      fontSize: '0.9rem !important',
      width: '80%',
      maxWidth: '300px',
    },
  },
  checkButton: {
    backgroundColor: 'transparent !important',
    border: '2px solid white !important',
    color: 'white !important',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
    },
  },
  joinButton: {
    backgroundColor: 'white !important',
    color: '#2A2B6A !important',
    '&:hover': {
      backgroundColor: '#FFC614 !important',
      color: '#2A2B6A !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
    },
  },
  firstRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
    "@media (max-width: 640px)": {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '10px',
    },
  },
  secondRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    "@media (max-width: 640px)": {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
  },
  roleWrapper: {
    width: '32%',
    "@media (max-width: 768px)": {
      width: '31%',
    },
    "@media (max-width: 640px)": {
      width: '80%',
    },
  },
  roleWrapperSecondRow: {
    width: '32%',
    "@media (max-width: 768px)": {
      width: '31%',
    },
    "@media (max-width: 640px)": {
      width: '80%',
    },
  },
  decorativeDot: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '50%',
  },
});

const InDemandRoles = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('fullstack');

  const tabs = [
    { id: 'fullstack', label: 'Full Stack Development Roles' },
    { id: 'datascience', label: 'Data Science Roles' },
  ];

  // Restructured roles data to handle the new layout
  const roles = {
    fullstack: {
      firstRow: [
        { id: 'uiux', title: 'UI/UX Developer' },
        { id: 'frontend', title: 'Frontend Developer' },
        { id: 'mern', title: 'MERN Stack Developer' },
      ],
      secondRow: [
        { id: 'backend', title: 'Backend Engineer' },
        { id: 'fullstack', title: 'Full Stack Developer' },
      ]
    },
    datascience: {
      firstRow: [
        { id: 'dataanalyst', title: 'Data Analyst' },
        { id: 'datascientist', title: 'Data Scientist' },
        { id: 'mleng', title: 'ML Engineer' },
      ],
      secondRow: [
        { id: 'dataeng', title: 'Data Engineer' },
        { id: 'aispecialist', title: 'AI Specialist' },
      ]
    },
  };

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

  // Handle tab hover
  const handleTabHover = (tabId) => {
    setActiveTab(tabId);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <Box className={classes.section}>
      {/* Background glows */}
      <Box className={`${classes.backgroundGlow} ${classes.topRightGlow}`} />
      <Box className={`${classes.backgroundGlow} ${classes.bottomLeftGlow}`} />
      
      {/* Decorative dots */}
      {decorativeDots.map((dot, index) => (
        <Box 
          key={`dot-${index}`}
          className={classes.decorativeDot}
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

        {/* Tabs - now with onMouseEnter for hover effect */}
        <Box className={classes.tabsContainer}>
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              className={`${classes.tabButton} ${
                activeTab === tab.id ? classes.activeTabButton : ''
              }`}
              onMouseEnter={() => handleTabHover(tab.id)}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </Box>

        {/* Roles in custom layout */}
        <Box className={classes.rolesContainer}>
          {/* First row - 3 roles */}
          <Box className={classes.firstRow}>
            {roles[activeTab].firstRow.map((role) => (
              <Box key={role.id} className={classes.roleWrapper}>
                <Box className={classes.roleCard}>
                  <CodeIcon className={classes.roleIcon} />
                  <Typography className={classes.roleText}>
                    {role.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Second row - 2 roles */}
          <Box className={classes.secondRow}>
            {roles[activeTab].secondRow.map((role) => (
              <Box key={role.id} className={classes.roleWrapperSecondRow}>
                <Box className={classes.roleCard}>
                  <CodeIcon className={classes.roleIcon} />
                  <Typography className={classes.roleText}>
                    {role.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box className={classes.actionsContainer}>
          <Button
            variant="outlined"
            className={`${classes.button} ${classes.checkButton}`}
          >
            Check Your Eligibility
          </Button>
          <Button
            variant="contained"
            className={`${classes.button} ${classes.joinButton}`}
          >
            Join Us Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default InDemandRoles;