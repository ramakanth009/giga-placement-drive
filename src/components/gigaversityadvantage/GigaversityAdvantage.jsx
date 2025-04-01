// src/components/gigaversityadvantage/GigaversityAdvantage.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AdvantageBoxes from './AdvantageBoxes';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#f9fafc',
    "@media (max-width: 960px)": {
      padding: '60px 0',
    },
    "@media (max-width: 600px)": {
      padding: '40px 0',
    },
  },
  contentContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
    position: 'relative',
    "@media (max-width: 960px)": {
      flexDirection: 'column',
      gap: '40px',
    },
  },
  leftContent: {
    width: '40%',
    paddingRight: '40px',
    marginBottom: '50px',
    "@media (max-width: 1200px)": {
      width: '45%',
      paddingRight: '30px',
    },
    "@media (max-width: 960px)": {
      width: '100%',
      paddingRight: '0',
      marginBottom: '30px',
      textAlign: 'center',
    },
  },
  title: {
    fontSize: '3.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    lineHeight: '1.2 !important',
    marginBottom: '10px !important',
    "@media (max-width: 1200px)": {
      fontSize: '3rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.8rem !important',
      lineHeight: '1.3 !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '2.3rem !important',
      lineHeight: '1.3 !important',
    },
  },
  yellowText: {
    color: '#FFC614 !important',
    display: 'block',
  },
  description: {
    fontSize: '1.25rem !important',
    color: '#4A4A4A !important',
    lineHeight: '1.6 !important',
    marginTop: '30px !important',
    "@media (max-width: 960px)": {
      fontSize: '1.15rem !important',
      marginTop: '25px !important',
      maxWidth: '600px',
      margin: '25px auto 0 !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1rem !important',
      marginTop: '20px !important',
      lineHeight: '1.5 !important',
    },
  },
});

const GigaversityAdvantage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Box className={classes.contentContainer}>
          {/* Left Content */}
          <Box className={classes.leftContent}>
            <Typography variant="h2" className={classes.title}>
              The Gigaversity
              <span className={classes.yellowText}>Advantage</span>
            </Typography>
            <Typography variant="body1" className={classes.description}>
              Gain Job-Ready Skills, Build A Strong Resume, And Apply Expertise Through Hands-On Learning And Personalized Guidance For Career Success.
            </Typography>
          </Box>

          {/* Right Content - Advantage Boxes Component */}
          <AdvantageBoxes />
        </Box>
      </Container>
    </Box>
  );
};

export default GigaversityAdvantage;