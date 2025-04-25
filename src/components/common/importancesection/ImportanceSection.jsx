// src/components/common/importancesection/ImportanceSection.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    width: '100%',
    padding: '40px 0',
    overflow: 'hidden',
    background: props => props.background || 'linear-gradient(to bottom, #f7f9ff 0%, #ffffff 100%)',
  },
  // Custom background element
  backgroundGradient: {
    position: 'absolute',
    width: '767px',
    height: '566px',
    top: '-100px',
    left: '-150px',
    background: props => props.gradientColor || '#BCE1FF',
    borderRadius: '50%',
    opacity: '0.3',
    filter: 'blur(100px)',
    zIndex: '-1',
    '@media (max-width: 1200px)': {
      width: '600px',
      height: '500px',
      top: '-80px',
      left: '-120px',
    },
    '@media (max-width: 960px)': {
      width: '500px',
      height: '400px',
      top: '-70px',
      left: '-100px',
    },
    '@media (max-width: 600px)': {
      width: '400px',
      height: '300px',
      top: '-60px',
      left: '-80px',
    },
    '@media (max-width: 480px)': {
      width: '300px',
      height: '250px',
      top: '-50px',
      left: '-70px',
    },
    '@media (max-width: 375px)': {
      width: '250px',
      height: '200px',
      top: '-40px',
      left: '-60px',
    },
  },
  title: {
    fontSize: "2.5rem !important",
    fontWeight: 'bold !important',
    textAlign: 'center',
    marginBottom: '12px !important',
    color: "#2A2B6A !important",
    position: 'relative',
    zIndex: '2',
    '& span': {
      color: '#FFC614 !important',
    },
    "@media (max-width: 1200px)": {
      fontSize: "2.3rem !important",
      marginBottom: '10px !important',
    },
    "@media (max-width: 960px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.6rem !important",
      marginBottom: '8px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: "1.4rem !important",
      marginBottom: '6px !important',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    textAlign: 'center',
    color: '#555 !important',
    marginBottom: '36px !important',
    maxWidth: '90%',
    margin: '0 auto 36px auto !important',
    position: 'relative',
    zIndex: '2',
    "@media (max-width: 1200px)": {
      fontSize: '1.05rem !important',
      marginBottom: '32px !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1rem !important',
      marginBottom: '30px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.95rem !important',
      marginBottom: '24px !important',
      maxWidth: '95%',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.9rem !important',
      marginBottom: '20px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.85rem !important',
      marginBottom: '18px !important',
      maxWidth: '100%',
    },
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '24px 20px',
    height: '100%',
    position: 'relative',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    zIndex: '1',
    transform: 'translateY(0)',
    transition: 'all 0.3s ease-out',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
      '& $iconContainer': {
        transform: 'scale(1.05)',
      }
    },
    "@media (max-width: 1200px)": {
      padding: '22px 18px',
      borderRadius: '10px',
    },
    "@media (max-width: 960px)": {
      height: '100%',
      padding: '20px 16px',
    },
    "@media (max-width: 600px)": {
      padding: '18px 14px',
    },
    "@media (max-width: 480px)": {
      padding: '16px 12px',
      '&:hover': {
        transform: 'translateY(-5px)',
      }
    },
    "@media (max-width: 375px)": {
      padding: '14px 10px',
      borderRadius: '8px',
      '&:hover': {
        transform: 'translateY(-3px)',
      }
    },
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '40px',
    width: '100%',
    padding: '0 24px',
    gap: '30px',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: '1',
    "@media (max-width: 1200px)": {
      gap: '25px',
    },
    "@media (max-width: 960px)": {
      gap: '20px',
      padding: '0 15px',
    },
    "@media (max-width: 600px)": {
      gap: '15px',
      padding: '0 10px',
      marginBottom: '30px',
    },
    "@media (max-width: 480px)": {
      gap: '12px',
      padding: '0 8px',
      marginBottom: '25px',
    },
    "@media (max-width: 375px)": {
      gap: '10px',
      padding: '0 5px',
      marginBottom: '20px',
    },
  },
  cardWrapper: {
    width: '23%',
    '@media (max-width: 1200px)': {
      width: '45%',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      maxWidth: '350px',
    },
    '@media (max-width: 480px)': {
      maxWidth: '320px',
    },
    '@media (max-width: 375px)': {
      maxWidth: '280px',
    },
  },
  iconContainer: {
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '18px',
    transition: 'transform 0.4s ease',
    "@media (max-width: 1200px)": {
      width: '48px',
      height: '48px',
      marginBottom: '16px',
    },
    "@media (max-width: 960px)": {
      width: '45px',
      height: '45px',
      marginBottom: '15px',
    },
    "@media (max-width: 600px)": {
      width: '45px',
      height: '45px',
      marginBottom: '14px',
    },
    "@media (max-width: 480px)": {
      width: '40px',
      height: '40px',
      marginBottom: '12px',
      borderRadius: '8px',
    },
    "@media (max-width: 375px)": {
      width: '35px',
      height: '35px',
      marginBottom: '10px',
      borderRadius: '7px',
    },
  },
  advantageTitle: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '8px !important',
    minHeight: '30px !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.15rem !important',
      minHeight: '28px !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.1rem !important',
      minHeight: '26px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1rem !important',
      minHeight: 'auto !important',
      marginBottom: '6px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.95rem !important',
      marginBottom: '5px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.9rem !important',
      marginBottom: '4px !important',
    },
  },
  advantageDescription: {
    fontSize: '0.95rem !important',
    color: '#555 !important',
    lineHeight: '1.5 !important',
    "@media (max-width: 1200px)": {
      fontSize: '0.93rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.85rem !important',
      lineHeight: '1.4 !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.8rem !important',
      lineHeight: '1.3 !important',
    },
  },
  headerContainer: {
    position: 'relative',
    marginBottom: '40px',
    zIndex: '1',
    "@media (max-width: 1200px)": {
      marginBottom: '35px',
    },
    "@media (max-width: 960px)": {
      marginBottom: '30px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '25px',
    },
    "@media (max-width: 480px)": {
      marginBottom: '20px',
    },
    "@media (max-width: 375px)": {
      marginBottom: '18px',
    },
  },
  decorCircle: {
    position: 'absolute',
    borderRadius: '50%',
    background: props => props.decorCircleColor || 'radial-gradient(circle, rgba(42, 43, 106, 0.05) 0%, rgba(42, 43, 106, 0) 70%)',
    zIndex: 0,
  },
  circle1: {
    width: '300px',
    height: '300px',
    top: '-150px',
    right: '-50px',
    "@media (max-width: 1200px)": {
      width: '280px',
      height: '280px',
      top: '-140px',
      right: '-45px',
    },
    "@media (max-width: 960px)": {
      width: '250px',
      height: '250px',
      top: '-125px',
      right: '-40px',
    },
    "@media (max-width: 600px)": {
      width: '200px',
      height: '200px',
      top: '-100px',
      right: '-30px',
    },
    "@media (max-width: 480px)": {
      width: '180px',
      height: '180px',
      top: '-90px',
      right: '-25px',
    },
    "@media (max-width: 375px)": {
      width: '150px',
      height: '150px',
      top: '-75px',
      right: '-20px',
    },
  },
  circle2: {
    width: '400px',
    height: '400px',
    bottom: '-150px',
    left: '-100px',
    background: 'radial-gradient(circle, rgba(255, 198, 20, 0.08) 0%, rgba(255, 198, 20, 0) 70%)',
    "@media (max-width: 1200px)": {
      width: '350px',
      height: '350px',
      bottom: '-130px',
      left: '-90px',
    },
    "@media (max-width: 960px)": {
      width: '300px',
      height: '300px',
      bottom: '-120px',
      left: '-80px',
    },
    "@media (max-width: 600px)": {
      width: '250px',
      height: '250px',
      bottom: '-100px',
      left: '-70px',
    },
    "@media (max-width: 480px)": {
      width: '200px',
      height: '200px',
      bottom: '-80px',
      left: '-60px',
    },
    "@media (max-width: 375px)": {
      width: '150px',
      height: '150px',
      bottom: '-60px',
      left: '-50px',
    },
  },
});

const ImportanceSection = ({
  title,
  highlightText,
  subtitle,
  advantages,
  background,
  gradientColor,
  decorCircleColor
}) => {
  const styleProps = { background, gradientColor, decorCircleColor };
  const classes = useStyles(styleProps);

  return (
    <Box className={classes.wrapper}>
      {/* Custom background gradient on left side */}
      <Box className={classes.backgroundGradient} />
      
      {/* Background circles */}
      <Box className={`${classes.decorCircle} ${classes.circle1}`} />
      <Box className={`${classes.decorCircle} ${classes.circle2}`} />

      <Box className={classes.headerContainer}>
        <Typography variant="h2" className={classes.title}>
          {title} <span>{highlightText}</span>
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          {subtitle}
        </Typography>
      </Box>

      <Box className={classes.cardsContainer}>
        {advantages.map((advantage, index) => (
          <Box className={classes.cardWrapper} key={index}>
            <Box className={classes.card}>
              <Box 
                className={classes.iconContainer} 
                sx={{ backgroundColor: `${advantage.color}20` }}
              >
                <Box sx={{ color: advantage.color }}>
                  {advantage.icon}
                </Box>
              </Box>
              <Typography className={classes.advantageTitle}>
                {advantage.title}
              </Typography>
              <Typography className={classes.advantageDescription}>
                {advantage.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImportanceSection;