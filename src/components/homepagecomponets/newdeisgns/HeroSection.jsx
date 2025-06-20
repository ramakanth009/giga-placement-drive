import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Heroguy from '../../../assets/heroguy3.png'; 
import { ReactComponent as Curve } from '../../../assets/curve.svg';
import { ReactComponent as Stack } from '../../../assets/stack.svg';
import { ReactComponent as Tick } from '../../../assets/tick.svg';
import { ReactComponent as Message } from '../../../assets/message.svg';


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
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '96px', // similar to spacing={12}
    '@media (max-width:900px)': {
      flexDirection: 'column',
      gap: '48px',
    }
  },
  leftBox: {
    flex: 1,
    paddingRight: '40px',
    zIndex: 2,
    '@media (max-width:900px)': {
      paddingRight: 0,
    }
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
  rightBox: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '600px',
    '@media (max-width:900px)': {
      height: '400px',
      marginTop: '32px'
    }
  },
  yellowCircle: {
    width: '500px',
    height: '500px',
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
    bottom: '55px',
  },
  floatingIcon: {
    position: 'absolute',
    zIndex: 3,
    // backgroundColor: '#2c3e50',
    borderRadius: '12px',
    padding: '12px',
    // boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  },
  icon1: {
    top: '83px',
    right: '66px',
    width: '50px',
    height: '50px'
  },
  icon2: {
    bottom: '210px',
    left: '-15px',
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
    // width: '100%',
    // height: '100%',
    // fill: 'white'
  }
});

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroSection}>
      <Container className={classes.container}>
        <Box className={classes.flexRow}>
          <Box className={classes.leftBox}>
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
          <Box className={classes.rightBox}>
            <Box className={classes.yellowCircle}></Box>
            <img 
              src={Heroguy} 
              alt="Person with laptop" 
              className={classes.heroImage}
            />
            {/* Floating Icons */}
            <Box className={`${classes.floatingIcon} ${classes.icon1}`}>
              <Stack/>
            </Box>
            <Box className={`${classes.floatingIcon} ${classes.icon2}`}>
              <Tick/>
            </Box>
            <Box className={`${classes.floatingIcon} ${classes.icon3}`}>
              <Message/>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;