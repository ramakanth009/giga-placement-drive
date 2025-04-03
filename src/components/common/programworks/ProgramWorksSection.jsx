// src/components/common/programworks/ProgramWorksSection.jsx
import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  titleContainer: {
    marginBottom: '50px',
    "@media (max-width: 960px)": {
      marginBottom: '40px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '30px',
    },
  },
  titleWrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#0A1929 !important',
    marginBottom: '10px !important',
    '& span': {
      color: '#FFC614 !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.2rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.8rem !important',
    },
  },
  boxesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
    "@media (max-width: 960px)": {
      gap: '25px',
    },
    "@media (max-width: 600px)": {
      gap: '20px',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  boxRow: {
    display: 'flex',
    gap: '30px',
    width: '100%',
    "@media (max-width: 960px)": {
      gap: '25px',
    },
    "@media (max-width: 600px)": {
      flexDirection: 'column',
      gap: '20px',
      width: '100%',
    },
  },
  boxWrapper: {
    flex: '1',
    maxWidth: 'calc(50% - 15px)',
    "@media (max-width: 600px)": {
      maxWidth: '100%',
      width: '100%',
    },
  },
  box: {
    padding: '30px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    "@media (max-width: 960px)": {
      padding: '25px',
    },
    "@media (max-width: 600px)": {
      padding: '20px',
    },
  },
  circleNumber: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#001F3F',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    "@media (max-width: 600px)": {
      width: '50px',
      height: '50px',
      fontSize: '1.5rem',
      marginBottom: '15px',
    },
  },
  boxTitle: {
    fontSize: '1.3rem !important',
    fontWeight: 'bold !important',
    color: '#0A1929 !important',
    marginBottom: '10px !important',
    "@media (max-width: 600px)": {
      fontSize: '1.1rem !important',
    },
  },
  boxDescription: {
    fontSize: '1rem !important',
    color: '#4A4A4A !important',
    lineHeight: '1.6 !important',
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
    },
  },
});

const ProgramWorksSection = ({ items, isPrimaryPage = true }) => {
  const classes = useStyles();

  // Split items into rows of 2
  const firstRow = items.slice(0, 2);
  const secondRow = items.slice(2);

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            Why Our <span>Program Works</span>
          </Typography>
        </Box>

        <Box className={classes.boxesContainer}>
          {/* First Row */}
          <Box className={classes.boxRow}>
            {firstRow.map((item, index) => (
              <Box className={classes.boxWrapper} key={index}>
                <Paper className={classes.box} elevation={0}>
                  <Box className={classes.circleNumber}>
                    {index + 1}
                  </Box>
                  <Typography variant="h5" className={classes.boxTitle}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" className={classes.boxDescription}>
                    {item.description}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>

          {/* Second Row */}
          <Box className={classes.boxRow}>
            {secondRow.map((item, index) => (
              <Box className={classes.boxWrapper} key={index}>
                <Paper className={classes.box} elevation={0}>
                  <Box className={classes.circleNumber}>
                    {index + 3} {/* Start numbering from 3 */}
                  </Box>
                  <Typography variant="h5" className={classes.boxTitle}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" className={classes.boxDescription}>
                    {item.description}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProgramWorksSection;