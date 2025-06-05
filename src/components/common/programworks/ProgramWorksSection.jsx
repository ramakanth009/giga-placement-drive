// src/components/common/programworks/ProgramWorksSection.jsx
import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const cardColors = [
  '#E3F2FD', // Light Blue
  '#F3E5F5', // Light Purple
  '#E8F5E9', // Light Green
  '#FFF3E0', // Light Orange
];

const useStyles = makeStyles({
  section: {
    padding: '40px 0',
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  titleContainer: {
    marginBottom: '30px',
    textAlign: 'center',
    "@media (max-width: 960px)": {
      marginBottom: '25px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '20px',
    },
  },
  titleWrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  title: {
    fontSize: '2.2rem !important',
    fontWeight: 'bold !important',
    color: '#0A1929 !important',
    marginBottom: '8px !important',
    '& span': {
      color: '#FFC614 !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.6rem !important',
    },
  },
  boxesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    "@media (max-width: 600px)": {
      gap: '15px',
    },
  },
  boxRow: {
    display: 'flex',
    gap: '20px',
    width: '100%',
    "@media (max-width: 960px)": {
      gap: '15px',
    },
    "@media (max-width: 600px)": {
      flexDirection: 'column',
    },
  },
  boxWrapper: {
    flex: 1,
    maxWidth: 'calc(50% - 10px)',
    "@media (max-width: 600px)": {
      maxWidth: '100%',
    },
  },
  box: {
    padding: '24px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
    },
    "@media (max-width: 600px)": {
      padding: '18px',
      gap: '15px',
    },
  },
  circleNumber: {
    minWidth: '45px',
    height: '45px',
    borderRadius: '50%',
    backgroundColor: '#001F3F',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    "@media (max-width: 600px)": {
      minWidth: '40px',
      height: '40px',
      fontSize: '1.2rem',
    },
  },
  contentWrapper: {
    flex: 1,
  },
  boxTitle: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#0A1929 !important',
    marginBottom: '8px !important',
    "@media (max-width: 600px)": {
      fontSize: '1.1rem !important',
      marginBottom: '6px !important',
    },
  },
  boxDescription: {
    fontSize: '0.95rem !important',
    color: '#4A4A4A !important',
    lineHeight: '1.5 !important',
    margin: 0,
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
    },
  },
});

const ProgramWorksSection = ({ items, isPrimaryPage = true }) => {
  const classes = useStyles();
  const firstRow = items.slice(0, 2);
  const secondRow = items.slice(2);

  const renderCard = (item, index) => (
    <Box className={classes.boxWrapper} key={index}>
      <Paper 
        className={classes.box} 
        elevation={0}
        sx={{ backgroundColor: cardColors[index % cardColors.length] }}
      >
        <Box className={classes.circleNumber}>
          {index + 1}
        </Box>
        <Box className={classes.contentWrapper}>
          <Typography variant="h5" className={classes.boxTitle}>
            {item.title}
          </Typography>
          <Typography variant="body1" className={classes.boxDescription}>
            {item.description}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            Why Our <span>Program Works</span>
          </Typography>
        </Box>

        <Box className={classes.boxesContainer}>
          <Box className={classes.boxRow}>
            {firstRow.map((item, index) => renderCard(item, index))}
          </Box>
          <Box className={classes.boxRow}>
            {secondRow.map((item, index) => renderCard(item, index + 2))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProgramWorksSection;