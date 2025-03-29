// src/components/gigaversityadvantage/AdvantageBoxes.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  boxesContainer: {
    width: '60%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    position: 'relative',
  },
  leftBoxesContainer: {
    width: 'calc(50% - 10px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '-20px', // Positioning left boxes slightly higher
  },
  rightBoxesContainer: {
    width: 'calc(50% - 10px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '20px', // Positioning right boxes slightly lower
  },
  advantageBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    padding: '35px 30px',
    width: '100%',
    height: 'auto',
    boxSizing: 'border-box',
  },
  boxTitle: {
    padding:"0px 20px",
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
},
boxDescription: {
      padding:"0px 20px",
    fontSize: '1rem !important',
    color: '#666666 !important',
    lineHeight: '1.5 !important',
  },
});

const AdvantageBoxes = () => {
  const classes = useStyles();

  const leftBoxes = [
    {
      id: 1,
      title: '1-Hour Live Projects Sessions Everyday',
      description: 'Engage With Industry Experts Who Guide You Through Concepts And Answer Questions In Real Time.',
    },
    {
      id: 3,
      title: 'Personalized Feedback',
      description: 'Receive Expert Guidance On Your Code, Models, And Presentations To Ensure You`re Job-Ready.',
    },
  ];

  const rightBoxes = [
    {
      id: 2,
      title: 'Hands-On Project Work',
      description: 'Work On Real Projects That Help You Practice Your Skills And Create A Strong Portfolio For Job Applications.',
    },
    {
      id: 4,
      title: 'Job Preparation Activities',
      description: 'From Resume-Building To Interview Practice, We Prepare You For Every Stage Of The Hiring Process.',
    },
  ];

  return (
    <Box className={classes.boxesContainer}>
      {/* Left side boxes (positioned slightly higher) */}
      <Box className={classes.leftBoxesContainer}>
        {leftBoxes.map((box) => (
          <Box 
            key={box.id} 
            className={classes.advantageBox}
          >
            <Typography variant="h5" className={classes.boxTitle}>
              {box.title}
            </Typography>
            <Typography variant="body2" className={classes.boxDescription}>
              {box.description}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Right side boxes (positioned slightly lower) */}
      <Box className={classes.rightBoxesContainer}>
        {rightBoxes.map((box) => (
          <Box 
            key={box.id} 
            className={classes.advantageBox}
          >
            <Typography variant="h5" className={classes.boxTitle}>
              {box.title}
            </Typography>
            <Typography variant="body2" className={classes.boxDescription}>
              {box.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AdvantageBoxes;