import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 1200px)': {
      padding: '70px 0',
    },
    '@media (max-width: 960px)': {
      padding: '60px 0',
    },
    '@media (max-width: 600px)': {
      padding: '50px 0',
    },
    '@media (max-width: 480px)': {
      padding: '40px 0',
    },
    '@media (max-width: 375px)': {
      padding: '30px 0',
    },
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '50px',
    '@media (max-width: 1200px)': {
      marginBottom: '45px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '40px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '35px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '25px',
    },
  },
  titleBlue: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '10px !important',
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.9rem !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.7rem !important',
      marginBottom: '7px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.5rem !important',
      marginBottom: '6px !important',
    },
  },
  titleYellow: {
    fontSize: '1.8rem !important',
    color: '#FFC614 !important',
    maxWidth: '800px',
    margin: '0 auto !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.7rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.6rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.4rem !important',
      maxWidth: '90%',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.3rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.2rem !important',
    },
  },
  factsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    '@media (max-width: 1200px)': {
      gap: '28px',
    },
    '@media (max-width: 960px)': {
      gap: '25px',
    },
    '@media (max-width: 600px)': {
      gap: '20px',
      flexDirection: 'column',
      alignItems: 'center',
    },
    '@media (max-width: 480px)': {
      gap: '18px',
    },
    '@media (max-width: 375px)': {
      gap: '15px',
    },
  },
  factCard: {
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
    backgroundColor: '#ffffff',
    maxWidth: '500px',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
    },
    '@media (max-width: 1200px)': {
      padding: '28px',
      maxWidth: '480px',
    },
    '@media (max-width: 960px)': {
      padding: '25px',
      maxWidth: '450px',
    },
    '@media (max-width: 600px)': {
      padding: '20px',
      maxWidth: '100%',
    },
    '@media (max-width: 480px)': {
      padding: '18px',
    },
    '@media (max-width: 375px)': {
      padding: '15px',
    },
  },
  quoteIcon: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'rgba(42, 43, 106, 0.1)',
    fontSize: '60px !important',
    '@media (max-width: 1200px)': {
      fontSize: '55px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '50px !important',
      top: '18px',
      right: '18px',
    },
    '@media (max-width: 600px)': {
      fontSize: '45px !important',
      top: '15px',
      right: '15px',
    },
    '@media (max-width: 480px)': {
      fontSize: '40px !important',
      top: '12px',
      right: '12px',
    },
    '@media (max-width: 375px)': {
      fontSize: '35px !important',
      top: '10px',
      right: '10px',
    },
  },
  factText: {
    fontSize: '1.1rem !important',
    lineHeight: '1.6 !important',
    color: '#333333 !important',
    marginBottom: '20px !important',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
      marginBottom: '15px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      marginBottom: '10px !important',
    },
  },
  sourceText: {
    fontSize: '0.9rem !important',
    color: '#666666 !important',
    fontStyle: 'italic',
    '@media (max-width: 960px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.75rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.7rem !important',
    },
  },
  decorCircle: {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: 'rgba(42, 43, 106, 0.03)',
    zIndex: 1,
  },
  circle1: {
    width: '200px',
    height: '200px',
    top: '-100px',
    right: '-50px',
    '@media (max-width: 960px)': {
      width: '180px',
      height: '180px',
      top: '-90px',
      right: '-45px',
    },
    '@media (max-width: 600px)': {
      width: '150px',
      height: '150px',
      top: '-75px',
      right: '-35px',
    },
    '@media (max-width: 480px)': {
      width: '120px',
      height: '120px',
      top: '-60px',
      right: '-30px',
    },
    '@media (max-width: 375px)': {
      width: '100px',
      height: '100px',
      top: '-50px',
      right: '-25px',
    },
  },
  circle2: {
    width: '300px',
    height: '300px',
    bottom: '-150px',
    left: '-100px',
    '@media (max-width: 960px)': {
      width: '250px',
      height: '250px',
      bottom: '-125px',
      left: '-80px',
    },
    '@media (max-width: 600px)': {
      width: '200px',
      height: '200px',
      bottom: '-100px',
      left: '-70px',
    },
    '@media (max-width: 480px)': {
      width: '160px',
      height: '160px',
      bottom: '-80px',
      left: '-60px',
    },
    '@media (max-width: 375px)': {
      width: '140px',
      height: '140px',
      bottom: '-70px',
      left: '-50px',
    },
  },
});

const IndustryBackedFacts = ({ titleBlue, titleYellow, facts = [] }) => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.titleBlue}>
            {titleBlue}
          </Typography>
          <Typography variant="h3" className={classes.titleYellow}>
            {titleYellow}
          </Typography>
        </Box>

        <Box className={classes.factsContainer}>
          {facts && facts.map((fact, index) => (
            <Paper key={index} className={classes.factCard} elevation={0}>
              <FormatQuoteIcon className={classes.quoteIcon} />
              <Box className={`${classes.decorCircle} ${classes.circle1}`}></Box>
              <Box className={`${classes.decorCircle} ${classes.circle2}`}></Box>
              <Typography className={classes.factText}>
                {fact.text}
              </Typography>
              <Typography className={classes.sourceText}>
                Source: {fact.source}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default IndustryBackedFacts;