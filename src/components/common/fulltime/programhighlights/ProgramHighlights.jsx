// src/components/common/fulltime/programhighlights/ProgramHighlights.jsx
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HighlightCard from './HighlightCard';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    backgroundColor: '#2A2B6A',
    position: 'relative',
    overflow: 'hidden',
  },
  networkBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url('/network-bg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.15,
    zIndex: 1,
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: '2.8rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    '& span': {
      color: '#FFC614 !important',
    },
  },
  highlightsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  },
  highlightsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '30px',
  },
});

const ProgramHighlights = ({ highlights }) => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Box className={classes.networkBackground}></Box>
      <Container maxWidth="xl" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.title}>
            Highlights of the <span>Program</span>
          </Typography>
        </Box>
        
        <Box className={classes.highlightsContainer}>
          {/* First row - 4 boxes */}
          <Box className={classes.highlightsRow}>
            {highlights.slice(0, 4).map((highlight, index) => (
              <HighlightCard
                key={index}
                icon={highlight.icon}
                title={highlight.title}
              />
            ))}
          </Box>
          
          {/* Second row - remaining boxes */}
          {highlights.length > 4 && (
            <Box className={classes.highlightsRow}>
              {highlights.slice(4).map((highlight, index) => (
                <HighlightCard
                  key={index + 4}
                  icon={highlight.icon}
                  title={highlight.title}
                />
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ProgramHighlights;