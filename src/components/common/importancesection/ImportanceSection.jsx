import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    background: 'linear-gradient(to bottom, #f0f6ff, #ffffff)',
    position: 'relative',
    overflow: 'hidden',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  mainTitle: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '10px !important',
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
  },
  highlightText: {
    color: '#FFC614 !important',
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#666666 !important',
    maxWidth: '900px',
    margin: '0 auto !important',
    lineHeight: '1.8 !important',
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
      padding: '0 20px',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  boxesContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '30px',
    '@media (max-width: 960px)': {
      flexWrap: 'wrap',
    },
  },
  advantageBox: {
    position: 'relative',
    padding: '30px 20px',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    flex: '1',
    maxWidth: '23%',
    '@media (max-width: 1200px)': {
      padding: '25px 15px',
    },
    '@media (max-width: 960px)': {
      maxWidth: '45%',
      flex: '0 0 45%',
    },
    '@media (max-width: 600px)': {
      maxWidth: '100%',
      flex: '0 0 100%',
    },
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    },
  },
  numberCircle: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  circle1: {
    background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
  },
  circle2: {
    background: 'linear-gradient(135deg, #2ecc71, #27ae60)',
  },
  circle3: {
    background: 'linear-gradient(135deg, #3498db, #2980b9)',
  },
  circle4: {
    background: 'linear-gradient(135deg, #f39c12, #d35400)',
  },
  purpleCircle: {
    background: 'linear-gradient(135deg, #9b59b6, #8e44ad)',
  },
  pinkCircle: {
    background: 'linear-gradient(135deg, #e84393, #d81b60)',
  },
  tealCircle: {
    background: 'linear-gradient(135deg, #1abc9c, #16a085)',
  },
  indigoCircle: {
    background: 'linear-gradient(135deg, #5352ed, #3742fa)',
  },
  boxTitle: {
    fontSize: '1.25rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    minHeight: '100px',
    marginBottom: '10px !important',
    textAlign: 'center',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
  },
  boxText: {
    minHeight: '90px',
    fontSize: '0.95rem !important',
    color: '#666666 !important',
    lineHeight: '1.6 !important',
    textAlign: 'center',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  decorativeCircle: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(255, 198, 20, 0.1)',
    zIndex: 0,
  },
  circle: {
    width: '300px',
    height: '300px',
    top: '-150px',
    left: '-150px',
  },
  smallCircle: {
    width: '200px',
    height: '200px',
    bottom: '-100px',
    right: '-100px',
    background: 'rgba(42, 43, 106, 0.05)',
  },
});

const getCircleClass = (classes, index, colorTheme) => {
  if (colorTheme === 'datascience') {
    switch (index % 4) {
      case 0: return classes.purpleCircle;
      case 1: return classes.tealCircle;
      case 2: return classes.indigoCircle;
      case 3: return classes.pinkCircle;
      default: return classes.purpleCircle;
    }
  } else {
    // Default fullstack colors
    switch (index % 4) {
      case 0: return classes.circle1;
      case 1: return classes.circle2;
      case 2: return classes.circle3;
      case 3: return classes.circle4;
      default: return classes.circle1;
    }
  }
};

const ImportanceSection = ({ 
  mainTitle, 
  highlightText, 
  subtitle, 
  advantages,
  colorTheme = 'fullstack', // 'fullstack' or 'datascience'
  bgGradient 
}) => {
  const classes = useStyles();
  
  return (
    <Box className={classes.section} sx={{ background: bgGradient || 'linear-gradient(to bottom, #f0f6ff, #ffffff)' }}>
      {/* Decorative elements */}
      <Box className={`${classes.decorativeCircle} ${classes.circle}`} />
      <Box className={`${classes.decorativeCircle} ${classes.smallCircle}`} />

      <Container maxWidth="lg">
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.mainTitle}>
            {mainTitle} <span className={classes.highlightText}>{highlightText}</span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            {subtitle}
          </Typography>
        </Box>

        <Box className={classes.boxesContainer}>
          {advantages.map((advantage, index) => (
            <Box key={advantage.id} className={classes.advantageBox}>
              <Box className={`${classes.numberCircle} ${getCircleClass(classes, index, colorTheme)}`}>
                {advantage.id}
              </Box>
              <Typography variant="h6" className={classes.boxTitle}>
                {advantage.title}
              </Typography>
              <Typography variant="body2" className={classes.boxText}>
                {advantage.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ImportanceSection;