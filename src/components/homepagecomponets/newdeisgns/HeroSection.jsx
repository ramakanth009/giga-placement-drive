import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Heroguy from '../../../assets/heroguy3.png'; 
import { ReactComponent as Stack } from '../../../assets/stack.svg';
import { ReactComponent as Tick } from '../../../assets/tick.svg';
import { ReactComponent as Message } from '../../../assets/message.svg';

const useStyles = makeStyles({
  heroSection: {
    backgroundColor: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 600px)': {
      padding: '16px 0',
    },
    '@media (max-width: 480px)': {
      padding: '12px 0',
    }
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    '@media (max-width: 1200px)': {
      padding: '0 16px',
    },
    '@media (max-width: 600px)': {
      padding: '0 12px',
    },
    '@media (max-width: 480px)': {
      padding: '0 8px',
    }
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '96px',
    '@media (max-width: 1200px)': {
      gap: '64px',
    },
    '@media (max-width: 960px)': {
      gap: '48px',
    },
    '@media (max-width: 780px)': {
      flexDirection: 'column',
      gap: '0px',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: '0px',
    }
  },
  leftBox: {
    flex: 1,
    paddingRight: '40px',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      paddingRight: '24px',
    },
    '@media (max-width: 960px)': {
      paddingRight: '16px',
    },
    '@media (max-width: 780px)': {
      paddingRight: 0,
      textAlign: 'center',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    '@media (max-width: 600px)': {
      paddingRight: 0,
      textAlign: 'center',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
  },
  mainTitle: {
    fontSize: '3.5rem !important', // base
    fontWeight: 'bold !important',
    color: '#292B6B',
    lineHeight: '1.1 !important',
    marginBottom: '20px !important',
    fontFamily: 'Montserrat !important',
    '@media (max-width: 1200px)': {
      fontSize: '3rem !important', // was 4rem, now 3rem
    },
    '@media (max-width: 960px)': {
      fontSize: '2.5rem !important', // was 3.5rem, now 2.5rem
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important', // was 2.8rem, now 2rem
      marginBottom: '16px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem !important', // was 2.4rem, now 1.6rem
      marginBottom: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.3rem !important', // was 2rem, now 1.3rem
      lineHeight: '1.2 !important',
    }
  },
  yellowUnderline: {
    width: '580px',
    height: '8px',
    backgroundColor: '#FFC614',
    borderRadius: '4px',
    marginBottom: '30px',
    '@media (max-width: 1200px)': {
      width: '480px',
    },
    '@media (max-width: 960px)': {
      width: '400px',
    },
    '@media (max-width: 900px)': {
      margin: '0 auto 30px auto',
    },
    '@media (max-width: 600px)': {
      width: '300px',
      height: '6px',
      marginBottom: '20px',
    },
    '@media (max-width: 480px)': {
      width: '250px',
      marginBottom: '16px',
    },
    '@media (max-width: 375px)': {
      width: '200px',
      height: '4px',
    }
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#000 !important',
    lineHeight: '1.6 !important',
    marginBottom: '20px !important',
    maxWidth: '480px !important',
    fontFamily: 'Montserrat !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.1rem !important',
      maxWidth: '420px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '380px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
      maxWidth: '320px !important',
      marginBottom: '16px !important',
      margin: '0 auto 16px auto !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      maxWidth: '280px !important',
      marginBottom: '12px !important',
      margin: '0 auto 12px auto !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      maxWidth: '250px !important',
      margin: '0 auto 12px auto !important',
    }
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
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: '#34495e !important',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2) !important',
      transform: 'translateY(-2px)'
    },
    '@media (max-width: 1200px)': {
      padding: '14px 32px !important',
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 960px)': {
      padding: '12px 28px !important',
      fontSize: '1rem !important',
    },
    '@media (max-width: 600px)': {
      padding: '12px 24px !important',
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 480px)': {
      padding: '10px 20px !important',
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 375px)': {
      padding: '8px 16px !important',
      fontSize: '0.85rem !important',
    }
  },
  rightBox: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '620px',
    '@media (max-width: 1200px)': {
      height: '560px',
    },
    '@media (max-width: 960px)': {
      height: '500px',
    },
    '@media (max-width: 780px)': {
      display: 'none',
    },
    '@media (max-width: 600px)': {
      display: 'none',
    },
    '@media (max-width: 375px)': {
      display: 'none',
    }
  },
  yellowCircle: {
    width: '450px',
    height: '450px',
    backgroundColor: '#FFC614',
    borderRadius: '50%',
    position: 'absolute',
    zIndex: 1,
    '@media (max-width: 1200px)': {
      width: '400px',
      height: '400px',
    },
    '@media (max-width: 960px)': {
      width: '360px',
      height: '360px',
    },
    '@media (max-width: 900px)': {
      width: '320px',
      height: '320px',
    },
    '@media (max-width: 600px)': {
      width: '280px',
      height: '280px',
    },
    '@media (max-width: 480px)': {
      width: '240px',
      height: '240px',
    },
    '@media (max-width: 375px)': {
      width: '220px',
      height: '220px',
    }
  },
  heroImage: {
    width: '350px',
    height: 'auto',
    zIndex: 2,
    position: 'relative',
    bottom: '67px',
    '@media (max-width: 1200px)': {
      width: '320px',
      bottom: '60px',
    },
    '@media (max-width: 960px)': {
      width: '290px',
      bottom: '55px',
    },
    '@media (max-width: 900px)': {
      width: '260px',
      bottom: '50px',
    },
    '@media (max-width: 600px)': {
      width: '230px',
      bottom: '45px',
    },
    '@media (max-width: 480px)': {
      width: '200px',
      bottom: '40px',
    },
    '@media (max-width: 375px)': {
      width: '180px',
      bottom: '35px',
    }
  },
  floatingIcon: {
    position: 'absolute',
    zIndex: 3,
    borderRadius: '12px',
    padding: '12px',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1) rotate(5deg)',
    },
    '@media (max-width: 600px)': {
      padding: '8px',
    },
    '@media (max-width: 480px)': {
      padding: '6px',
    }
  },
  icon1: {
    top: '98px',
    right: '88px',
    width: '50px',
    height: '50px',
    '@media (max-width: 1200px)': {
      top: '90px',
      right: '75px',
      width: '45px',
      height: '45px',
    },
    '@media (max-width: 960px)': {
      top: '80px',
      right: '65px',
      width: '42px',
      height: '42px',
    },
    '@media (max-width: 900px)': {
      top: '70px',
      right: '55px',
      width: '40px',
      height: '40px',
    },
    '@media (max-width: 600px)': {
      top: '60px',
      right: '45px',
      width: '36px',
      height: '36px',
    },
    '@media (max-width: 480px)': {
      top: '50px',
      right: '35px',
      width: '32px',
      height: '32px',
    },
    '@media (max-width: 375px)': {
      top: '45px',
      right: '30px',
      width: '28px',
      height: '28px',
    }
  },
  icon2: {
    bottom: '210px',
    left: '7px',
    width: '45px',
    height: '45px',
    '@media (max-width: 1200px)': {
      bottom: '190px',
      left: '15px',
      width: '42px',
      height: '42px',
    },
    '@media (max-width: 960px)': {
      bottom: '170px',
      left: '20px',
      width: '40px',
      height: '40px',
    },
    '@media (max-width: 900px)': {
      bottom: '150px',
      left: '25px',
      width: '38px',
      height: '38px',
    },
    '@media (max-width: 600px)': {
      bottom: '130px',
      left: '30px',
      width: '34px',
      height: '34px',
    },
    '@media (max-width: 480px)': {
      bottom: '110px',
      left: '25px',
      width: '30px',
      height: '30px',
    },
    '@media (max-width: 375px)': {
      bottom: '100px',
      left: '20px',
      width: '26px',
      height: '26px',
    }
  },
  icon3: {
    bottom: '170px',
    right: '67px',
    width: '40px',
    height: '40px',
    '@media (max-width: 1200px)': {
      bottom: '155px',
      right: '60px',
      width: '38px',
      height: '38px',
    },
    '@media (max-width: 960px)': {
      bottom: '140px',
      right: '50px',
      width: '36px',
      height: '36px',
    },
    '@media (max-width: 900px)': {
      bottom: '125px',
      right: '45px',
      width: '34px',
      height: '34px',
    },
    '@media (max-width: 600px)': {
      bottom: '110px',
      right: '40px',
      width: '30px',
      height: '30px',
    },
    '@media (max-width: 480px)': {
      bottom: '95px',
      right: '30px',
      width: '28px',
      height: '28px',
    },
    '@media (max-width: 375px)': {
      bottom: '85px',
      right: '25px',
      width: '24px',
      height: '24px',
    }
  },
  iconSvg: {
    // Additional icon styling if needed
  },
  curveIcon: {
    width: '487px',
    height: 'auto',
    marginBottom: '30px',
    '& svg': {
      width: '100%',
      height: 'auto',
    },
    '@media (max-width: 1200px)': {
      width: '400px',
    },
    '@media (max-width: 960px)': {
      width: '350px',
    },
    '@media (max-width: 780px)': {
      width: '320px',
      marginBottom: '25px',
      display: 'flex',
      justifyContent: 'center',
    },
    '@media (max-width: 600px)': {
      width: '280px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'center',
    },
    '@media (max-width: 480px)': {
      width: '240px',
      marginBottom: '16px',
      display: 'flex',
      justifyContent: 'center',
    },
    '@media (max-width: 375px)': {
      width: '200px',
      marginBottom: '12px',
      display: 'flex',
      justifyContent: 'center',
    }
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
              India’s first  <br />
              product-based<br />
              learning Platform
            </Typography>
            <Box className={classes.curveIcon}>
              <svg width="487" height="34" viewBox="0 0 487 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#FFC614" strokeWidth="8" strokeLinecap="round"/>
              </svg>
            </Box>
            <Typography className={classes.subtitle}>
              Develop a real-time product before graduation and get a chance to build an MVP with access to up to ₹1,00,000 in startup grants.
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