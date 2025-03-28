// src/components/indemandroles/InDemandRoles.jsx
import React, { useState } from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CodeIcon from '@mui/icons-material/Code';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    background: 'linear-gradient(180deg, #2A2B6A 0%, #1A1B4A 100%)',
    color: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  mainTitle: {
    fontSize: '2.8rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    marginBottom: '16px !important',
    '& span': {
      color: '#FFC614 !important',
    },
  },
  subtitle: {
    fontSize: '1.5rem !important',
    fontWeight: '500 !important',
    color: 'white !important',
  },
  tabsContainer: {
    display: 'flex',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '4px',
    marginBottom: '40px',
    width: '100%',
    maxWidth: '800px',
  },
  tabButton: {
    flex: 1,
    padding: '16px !important',
    color: 'white !important',
    fontWeight: '600 !important',
    borderRadius: '12px !important',
    textTransform: 'none !important',
    fontSize: '1.1rem !important',
    transition: 'all 0.3s ease !important',
  },
  activeTabButton: {
    backgroundColor: 'white !important',
    color: '#2A2B6A !important',
  },
  rolesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    width: '100%',
  },
  roleCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '8px 6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '320px',
    // minHeight: '100px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    // gap:"30px",
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    },
  },
  roleIcon: {
    marginRight: '12px',
    color: '#2A2B6A',
    fontSize: '28px !important',
  },
  roleText: {
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
    fontSize: '1.3rem !important',
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '40px',
  },
  button: {
    padding: '12px 24px !important',
    borderRadius: '8px !important',
    fontWeight: 'bold !important',
    fontSize: '1rem !important',
    textTransform: 'none !important',
  },
  checkButton: {
    backgroundColor: 'transparent !important',
    border: '2px solid white !important',
    color: 'white !important',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
    },
  },
  joinButton: {
    backgroundColor: 'white !important',
    color: '#2A2B6A !important',
    '&:hover': {
      backgroundColor: '#e6e6e6 !important',
    },
  },
});

const InDemandRoles = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('fullstack');

  const tabs = [
    { id: 'fullstack', label: 'Full Stack Development Roles' },
    { id: 'datascience', label: 'Data Science Roles' },
  ];

  const roles = {
    fullstack: [
      { id: 'uiux', title: 'UI/UX Developer' },
      { id: 'frontend', title: 'Frontend Developer' },
      { id: 'mern', title: 'MERN Stack Developer' },
      { id: 'backend', title: 'Backend Engineer' },
      { id: 'fullstack', title: 'Full Stack Developer' },
    ],
    datascience: [
      { id: 'dataanalyst', title: 'Data Analyst' },
      { id: 'datascientist', title: 'Data Scientist' },
      { id: 'mleng', title: 'ML Engineer' },
      { id: 'dataeng', title: 'Data Engineer' },
      { id: 'aispecialist', title: 'AI Specialist' },
    ],
  };

  return (
    <Box className={classes.section}>
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

        {/* Tabs */}
        <Box className={classes.tabsContainer}>
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              className={`${classes.tabButton} ${
                activeTab === tab.id ? classes.activeTabButton : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </Box>

        {/* Roles Grid */}
        <Box className={classes.rolesContainer}>
          <Grid container spacing={3} justifyContent="center">
            {roles[activeTab].map((role) => (
              <Grid item xs={12} sm={6} md={4} key={role.id}>
                <Box className={classes.roleCard}>
                  <CodeIcon className={classes.roleIcon} />
                  <Typography className={classes.roleText}>
                    {role.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
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