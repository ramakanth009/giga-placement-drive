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
  },
  contentContainer: {
    display: 'flex',
    width: '100%',
    justifyContent:"center",
    alignItems: 'center',
    position: 'relative',
  },
  leftContent: {
    width: '40%',
    paddingRight: '40px',
    marginBottom:'50px',
  },
  title: {
    fontSize: '3.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    lineHeight: '1.2 !important',
    marginBottom: '10px !important',
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