import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Heroguy from '../../../assets/heroguy3.png'; 
import { ReactComponent as Curve } from '../../../assets/curve.svg';


const useStyles = makeStyles({
  heroSection: {
    backgroundColor: '#f8f9fa',
    // minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '60px 0',
    position: 'relative',
    overflow: 'hidden'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  leftContent: {
    paddingRight: '40px',
    zIndex: 2
  },
  mainTitle: {
    fontSize: '4.5rem !important',
    fontWeight: 'bold !important',
    color: '#292B6B',
    lineHeight: '1.1 !important',
    marginBottom: '20px !important',
    fontFamily: 'Montserrat !important',
  },
  yellowUnderline: {
    width: '580px',
    height: '8px',
    backgroundColor: '#FFC614',
    borderRadius: '4px',
    marginBottom: '30px'
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#000 !important',
    lineHeight: '1.6 !important',
    marginBottom: '40px !important',
    maxWidth: '480px !important',
    fontFamily: 'Montserrat !important'
  },
  applyButton: {
    backgroundColor: '#292B6B !important',
    color: 'white !important',
    padding: '15px 35px !important',
    fontSize: '1.1rem !important',
    fontWeight: 'bold !important',
    textTransform: 'none !important',
    borderRadius: '8px !important',
    boxShadow: 'none !important',
    '&:hover': {
      backgroundColor: '#34495e',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
    }
  },
  rightContent: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '600px'
  },
  yellowCircle: {
    width: '543px',
    height: '543px',
    backgroundColor: '#FFC614',
    borderRadius: '50%',
    position: 'absolute',
    zIndex: 1
  },
  heroImage: {
    width: '400px',
    height: 'auto',
    zIndex: 2,
    position: 'relative',
    bottom: '40px',
  },
  floatingIcon: {
    position: 'absolute',
    zIndex: 3,
    backgroundColor: '#2c3e50',
    borderRadius: '12px',
    padding: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  },
  icon1: {
    top: '50px',
    right: '100px',
    width: '50px',
    height: '50px'
  },
  icon2: {
    bottom: '80px',
    left: '50px',
    width: '45px',
    height: '45px'
  },
  icon3: {
    bottom: '150px',
    right: '50px',
    width: '40px',
    height: '40px'
  },
  iconSvg: {
    width: '100%',
    height: '100%',
    fill: 'white'
  }
});

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroSection}>
      <Container className={classes.container}>
        <Grid container alignItems="center" spacing={12}>
          <Grid item xs={12} md={6}>
            <Box className={classes.leftContent}>
              <Typography className={classes.mainTitle}>
                We’re here<br />
                to shape<br />
                your career!
              </Typography>
              {/* <Box className={classes.yellowUnderline}></Box> */}
              <Curve />
              <Typography className={classes.subtitle}>
                Let's make your work more organize and easily using the
                Gigaversity with many of the latest features!
              </Typography>
              <Button className={classes.applyButton}>
                Apply Now
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box className={classes.rightContent}>
              <Box className={classes.yellowCircle}></Box>
              <img 
                src={Heroguy} 
                alt="Person with laptop" 
                className={classes.heroImage}
              />
              
              {/* Floating Icons */}
              <Box className={`${classes.floatingIcon} ${classes.icon1}`}>
                <svg className={classes.iconSvg} viewBox="0 0 24 24">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
                </svg>
              </Box>
              
              <Box className={`${classes.floatingIcon} ${classes.icon2}`}>
                <svg className={classes.iconSvg} viewBox="0 0 24 24">
                  <path d="M9 11H7v9c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V10l1-1-7.5-7.5c-.5-.5-1.3-.5-1.8 0L3 7.3c-.4.4-.4 1 0 1.4L9 14.4V11z"/>
                  <path d="M16 1H8c-1.1 0-2 .9-2 2v4l7.5 7.5L21 7V3c0-1.1-.9-2-2-2z"/>
                </svg>
              </Box>
              
              <Box className={`${classes.floatingIcon} ${classes.icon3}`}>
                <svg className={classes.iconSvg} viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;