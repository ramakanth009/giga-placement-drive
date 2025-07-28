import React, { useState } from 'react';
import { Box, Typography, Button, Container, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Heroguy from '../../../assets/heroguy3.png'; 
import { ReactComponent as Stack } from '../../../assets/stack.svg';
import { ReactComponent as Tick } from '../../../assets/tick.svg';
import { ReactComponent as Message } from '../../../assets/message.svg';
import CentralizedPopupForms from '../../common/popupforms/CentralizedPopupForms';

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
      backgroundColor: '#1a1b43 !important', // match Navbar.jsx
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
  const [popupOpen, setPopupOpen] = useState(false);

  const handleApplyClick = (e) => {
    e.preventDefault();
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <Box className={classes.heroSection}>
        <Container className={classes.container}>
          <Box className={classes.flexRow}>
            <Box className={classes.leftBox}>
              <Typography variant="h1" className={classes.mainTitle}>
                India’s first  <br />
                product-based<br />
                learning Platform Gigaversity
              </Typography>
              <Box className={classes.curveIcon}>
                <svg width="487" height="34" viewBox="0 0 487 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#FFC614" strokeWidth="8" strokeLinecap="round"/>
                </svg>
              </Box>
              <Typography className={classes.subtitle}>
                Develop a real-time product before graduation and get a chance to build an MVP with access to up to ₹1,00,000 in startup grants.
              </Typography>
              <Button 
                className={classes.applyButton}
                onClick={handleApplyClick}
                title="Share your details to start your learning journey with Gigaversity"
              >
                Apply Now
              </Button>
            </Box>
            <Box className={classes.rightBox}>
              <Box className={classes.yellowCircle}></Box>
              <img 
                src={Heroguy} 
                alt="Gigaversity—India’s first product-based learning" 
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
      <CentralizedPopupForms
        open={popupOpen}
        onClose={handlePopupClose}
        variant="demo"
      />
    </>
  );
};

export default HeroSection;



// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Button, Container } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';

// import Heroguy from '../../../assets/heroguy3.png'; 
// import { ReactComponent as Stack } from '../../../assets/stack.svg';
// import { ReactComponent as Tick } from '../../../assets/tick.svg';
// import { ReactComponent as Message } from '../../../assets/message.svg';
// import CentralizedPopupForms from '../../common/popupforms/CentralizedPopupForms';

// // Import banner images for background
// import HeroImage1 from '../../../assets/banners2/Banner1.png';
// import HeroImage2 from '../../../assets/banners2/Banner2.png';
// import HeroImage3 from '../../../assets/banners2/Banner3.png';
// import HeroImage4 from '../../../assets/banners2/Banner4.png';

// const useStyles = makeStyles({
//   heroSection: {
//     position: 'relative',
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     overflow: 'hidden',
//     '@media (max-width: 600px)': {
//       minHeight: '90vh',
//     },
//     '@media (max-width: 480px)': {
//       minHeight: '85vh',
//     }
//   },
//   swiperContainer: {
//     width: '100%',
//     height: '100%',
//     '& .swiper-pagination': {
//       bottom: '30px !important',
//       display: 'flex',
//       justifyContent: 'center',
//       zIndex: 10,
//       '@media (max-width: 600px)': {
//         bottom: '20px !important',
//       },
//     },
//     '& .swiper-pagination-bullet': {
//       background: 'rgba(255, 255, 255, 0.7)',
//       opacity: 1,
//       margin: '0 8px',
//       width: '14px !important',
//       height: '14px !important',
//       borderRadius: '50%',
//       transition: 'all 0.3s ease',
//       cursor: 'pointer',
//       '&:hover': {
//         transform: 'scale(1.2)',
//         background: 'rgba(255, 198, 20, 0.8)',
//       },
//       '@media (max-width: 600px)': {
//         width: '12px !important',
//         height: '12px !important',
//         margin: '0 6px',
//       },
//     },
//     '& .swiper-pagination-bullet-active': {
//       background: '#FFC614 !important',
//       transform: 'scale(1.3)',
//       boxShadow: '0 0 15px rgba(255, 198, 20, 0.6)',
//     },
//     '& .swiper-button-next, & .swiper-button-prev': {
//       color: '#292B6B !important',
//       background: 'rgba(255, 255, 255, 0.9)',
//       backdropFilter: 'blur(10px)',
//       borderRadius: '50%',
//       width: '50px !important',
//       height: '50px !important',
//       marginTop: '-25px',
//       boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//       transition: 'all 0.3s ease',
//       '&:after': {
//         fontSize: '18px !important',
//         fontWeight: 'bold',
//       },
//       '&:hover': {
//         background: 'rgba(255, 198, 20, 0.9)',
//         color: '#292B6B !important',
//         transform: 'scale(1.1)',
//         boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)',
//       },
//       '@media (max-width: 768px)': {
//         width: '40px !important',
//         height: '40px !important',
//         marginTop: '-20px',
//         '&:after': {
//           fontSize: '14px !important',
//         },
//       },
//     },
//     '& .swiper-button-next': {
//       right: '20px',
//       '@media (max-width: 768px)': {
//         right: '10px',
//       },
//     },
//     '& .swiper-button-prev': {
//       left: '20px',
//       '@media (max-width: 768px)': {
//         left: '10px',
//       },
//     },
//   },
//   slide: {
//     position: 'relative',
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     background: '#f8f9fa',
//     '@media (max-width: 600px)': {
//       minHeight: '90vh',
//     },
//   },
//   backgroundOverlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: 'linear-gradient(135deg, rgba(248, 249, 250, 0.95) 0%, rgba(248, 249, 250, 0.85) 100%)',
//     zIndex: 1,
//   },
//   backgroundImage: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     opacity: 0.1,
//     zIndex: 0,
//   },
//   container: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '0 20px',
//     position: 'relative',
//     zIndex: 2,
//     '@media (max-width: 1200px)': {
//       padding: '0 16px',
//     },
//     '@media (max-width: 600px)': {
//       padding: '0 12px',
//     },
//   },
//   flexRow: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: '96px',
//     '@media (max-width: 1200px)': {
//       gap: '64px',
//     },
//     '@media (max-width: 960px)': {
//       gap: '48px',
//     },
//     '@media (max-width: 780px)': {
//       flexDirection: 'column',
//       gap: '0px',
//     },
//   },
//   leftBox: {
//     flex: 1,
//     paddingRight: '40px',
//     zIndex: 3,
//     '@media (max-width: 1200px)': {
//       paddingRight: '24px',
//     },
//     '@media (max-width: 780px)': {
//       paddingRight: 0,
//       textAlign: 'center',
//       width: '100%',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//   },
//   mainTitle: {
//     fontSize: '3.5rem !important',
//     fontWeight: 'bold !important',
//     color: '#292B6B',
//     lineHeight: '1.1 !important',
//     marginBottom: '20px !important',
//     fontFamily: 'Montserrat !important',
//     opacity: 0,
//     transform: 'translateY(30px)',
//     animation: '$slideInUp 0.8s ease-out 0.2s forwards',
//     '@media (max-width: 1200px)': {
//       fontSize: '3rem !important',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '2.5rem !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '2rem !important',
//       marginBottom: '16px !important',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '1.6rem !important',
//     },
//   },
//   highlightText: {
//     color: '#FFC614',
//     position: 'relative',
//     '&::after': {
//       content: '""',
//       position: 'absolute',
//       bottom: '2px',
//       left: 0,
//       right: 0,
//       height: '3px',
//       background: '#FFC614',
//       borderRadius: '2px',
//     },
//   },
//   yellowUnderline: {
//     width: '580px',
//     height: '8px',
//     backgroundColor: '#FFC614',
//     borderRadius: '4px',
//     marginBottom: '30px',
//     opacity: 0,
//     animation: '$expandWidth 0.8s ease-out 0.6s forwards',
//     '@media (max-width: 1200px)': {
//       width: '480px',
//     },
//     '@media (max-width: 780px)': {
//       margin: '0 auto 30px auto',
//     },
//     '@media (max-width: 600px)': {
//       width: '300px',
//       height: '6px',
//       marginBottom: '20px',
//     },
//   },
//   curveIcon: {
//     width: '487px',
//     height: 'auto',
//     marginBottom: '30px',
//     opacity: 0,
//     animation: '$slideInLeft 0.8s ease-out 0.4s forwards',
//     '& svg': {
//       width: '100%',
//       height: 'auto',
//     },
//     '@media (max-width: 780px)': {
//       display: 'flex',
//       justifyContent: 'center',
//     },
//     '@media (max-width: 600px)': {
//       width: '280px',
//       marginBottom: '20px',
//     },
//   },
//   subtitle: {
//     fontSize: '1.2rem !important',
//     color: '#000 !important',
//     lineHeight: '1.6 !important',
//     marginBottom: '20px !important',
//     maxWidth: '480px !important',
//     fontFamily: 'Montserrat !important',
//     opacity: 0,
//     animation: '$slideInUp 0.8s ease-out 0.4s forwards',
//     '@media (max-width: 780px)': {
//       margin: '0 auto 16px auto !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '0.95rem !important',
//       maxWidth: '320px !important',
//     },
//   },
//   applyButton: {
//     backgroundColor: '#292B6B !important',
//     color: 'white !important',
//     padding: '15px 35px !important',
//     fontSize: '1.1rem !important',
//     fontWeight: 'bold !important',
//     textTransform: 'none !important',
//     borderRadius: '8px !important',
//     boxShadow: 'none !important',
//     transition: 'all 0.3s ease !important',
//     opacity: 0,
//     animation: '$slideInUp 0.8s ease-out 0.6s forwards',
//     '&:hover': {
//       backgroundColor: '#1a1b43 !important',
//       boxShadow: '0 8px 25px rgba(41, 43, 107, 0.3) !important',
//       transform: 'translateY(-3px)',
//     },
//     '@media (max-width: 600px)': {
//       padding: '12px 24px !important',
//       fontSize: '0.95rem !important',
//     },
//   },
//   rightBox: {
//     flex: 1,
//     position: 'relative',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '620px',
//     '@media (max-width: 780px)': {
//       display: 'none',
//     },
//   },
//   yellowCircle: {
//     width: '450px',
//     height: '450px',
//     backgroundColor: '#FFC614',
//     borderRadius: '50%',
//     position: 'absolute',
//     zIndex: 1,
//     opacity: 0,
//     transform: 'scale(0.8)',
//     animation: '$scaleIn 1s ease-out 0.3s forwards',
//     '@media (max-width: 1200px)': {
//       width: '400px',
//       height: '400px',
//     },
//     '@media (max-width: 960px)': {
//       width: '360px',
//       height: '360px',
//     },
//   },
//   heroImage: {
//     width: '350px',
//     height: 'auto',
//     zIndex: 2,
//     position: 'relative',
//     bottom: '67px',
//     opacity: 0,
//     transform: 'translateY(20px)',
//     animation: '$slideInUp 1s ease-out 0.5s forwards',
//     '@media (max-width: 1200px)': {
//       width: '320px',
//       bottom: '60px',
//     },
//     '@media (max-width: 960px)': {
//       width: '290px',
//       bottom: '55px',
//     },
//   },
//   floatingIcon: {
//     position: 'absolute',
//     zIndex: 3,
//     borderRadius: '12px',
//     padding: '12px',
//     background: 'rgba(255, 255, 255, 0.9)',
//     backdropFilter: 'blur(10px)',
//     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//     transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//     opacity: 0,
//     '&:hover': {
//       transform: 'scale(1.15) rotate(8deg)',
//       boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
//     },
//   },
//   icon1: {
//     top: '98px',
//     right: '88px',
//     width: '50px',
//     height: '50px',
//     animation: '$floatIn 1s ease-out 0.8s forwards, $float 3s ease-in-out 1.8s infinite',
//     '@media (max-width: 1200px)': {
//       top: '90px',
//       right: '75px',
//       width: '45px',
//       height: '45px',
//     },
//   },
//   icon2: {
//     bottom: '210px',
//     left: '7px',
//     width: '45px',
//     height: '45px',
//     animation: '$floatIn 1s ease-out 1s forwards, $float 3s ease-in-out 2s infinite',
//     '@media (max-width: 1200px)': {
//       bottom: '190px',
//       left: '15px',
//       width: '42px',
//       height: '42px',
//     },
//   },
//   icon3: {
//     bottom: '170px',
//     right: '67px',
//     width: '40px',
//     height: '40px',
//     animation: '$floatIn 1s ease-out 1.2s forwards, $float 3s ease-in-out 2.2s infinite',
//     '@media (max-width: 1200px)': {
//       bottom: '155px',
//       right: '60px',
//       width: '38px',
//       height: '38px',
//     },
//   },
//   slideIndicator: {
//     position: 'absolute',
//     top: '30px',
//     right: '30px',
//     background: 'rgba(41, 43, 107, 0.1)',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '20px',
//     padding: '8px 16px',
//     color: '#292B6B',
//     fontSize: '0.9rem',
//     fontWeight: 'bold',
//     zIndex: 4,
//     '@media (max-width: 600px)': {
//       top: '20px',
//       right: '20px',
//       fontSize: '0.8rem',
//       padding: '6px 12px',
//     },
//   },
//   '@keyframes slideInUp': {
//     from: {
//       opacity: 0,
//       transform: 'translateY(30px)',
//     },
//     to: {
//       opacity: 1,
//       transform: 'translateY(0)',
//     },
//   },
//   '@keyframes slideInLeft': {
//     from: {
//       opacity: 0,
//       transform: 'translateX(-30px)',
//     },
//     to: {
//       opacity: 1,
//       transform: 'translateX(0)',
//     },
//   },
//   '@keyframes expandWidth': {
//     from: {
//       opacity: 0,
//       width: 0,
//     },
//     to: {
//       opacity: 1,
//       width: '580px',
//     },
//   },
//   '@keyframes scaleIn': {
//     from: {
//       opacity: 0,
//       transform: 'scale(0.8)',
//     },
//     to: {
//       opacity: 1,
//       transform: 'scale(1)',
//     },
//   },
//   '@keyframes floatIn': {
//     from: {
//       opacity: 0,
//       transform: 'translateY(20px) scale(0.8)',
//     },
//     to: {
//       opacity: 1,
//       transform: 'translateY(0) scale(1)',
//     },
//   },
//   '@keyframes float': {
//     '0%, 100%': {
//       transform: 'translateY(0px)',
//     },
//     '50%': {
//       transform: 'translateY(-10px)',
//     },
//   },
// });

// const DynamicHeroCarousel = () => {
//   const classes = useStyles();
//   const [popupOpen, setPopupOpen] = useState(false);
//   const [activeSlide, setActiveSlide] = useState(0);

//   const handleApplyClick = (e) => {
//     e.preventDefault();
//     setPopupOpen(true);
//   };

//   const handlePopupClose = () => {
//     setPopupOpen(false);
//   };

//   const slideContent = [
//     {
//       title: "India's first product-based learning Platform",
//       // highlight: "Gigaversity",
//       subtitle: "Develop a real-time product before graduation and get a chance to build an MVP with access to up to ₹1,00,000 in startup grants.",
//       backgroundImage: null, // Original hero with no background banner
//       slideNumber: "01",
//       isHero: true,
//       buttonText: "Apply Now"
//     },
//     {
//       title: "Write your First Career Chapter with Gigaversity",
//       // highlight: "Gigaversity",
//       subtitle: "Increase your chances of shortlisting with project recommendations and ATS friendly Templates Build Your Free Resume Now",
//       backgroundImage: HeroImage1,
//       slideNumber: "02",
//       isHero: false,
//       buttonText: "Build Your Free Resume Now"
//     },
//     {
//       title: "Build Your Own Startup with Up to ₹1 Lakh Innovation Grant",
//       // highlight: "₹1 Lakh Innovation Grant",
//       subtitle: "From Idea to Prototype, get funding, mentorship, and resources to launch your startup idea.",
//       backgroundImage: HeroImage2,
//       slideNumber: "03",
//       isHero: false,
//       buttonText: "Know more"
//     },
//     {
//       title: "Experience the Learning in Tech Ecosystem like never before ",
//       // highlight: "like never before",
//       subtitle: "Explore live labs, coding pods, tech demos, and startup culture.",
//       backgroundImage: HeroImage3,
//       slideNumber: "04",
//       isHero: false,
//       buttonText: "Schedule Your Campus Visit"
//     },
//     {
//       title: "Turn Concept into Code, Code into Careers",
//       // highlight: "Code into Careers",
//       subtitle: "Master full stack, data science, AI, and career-ready tech skills.",
//       backgroundImage: HeroImage4,
//       slideNumber: "05",
//       isHero: false,
//       buttonText: "Explore all Programs"
//     }
//   ];

//   const renderTitle = (title, highlight) => {
//     const parts = title.split(highlight);
//     if (parts.length === 2) {
//       return (
//         <>
//           {parts[0]}
//           <span className={classes.highlightText}>{highlight}</span>
//           {parts[1]}
//         </>
//       );
//     }
//     return title;
//   };

//   return (
//     <>
//       <Box className={classes.heroSection}>
//         <Swiper
//           className={classes.swiperContainer}
//           modules={[Pagination, Autoplay, EffectFade, Navigation]}
//           spaceBetween={0}
//           slidesPerView={1}
//           effect="fade"
//           fadeEffect={{
//             crossFade: true
//           }}
//           navigation={true}
//           pagination={{
//             clickable: true,
//             renderBullet: (index, className) => {
//               return `<span class="${className}" aria-label="Go to slide ${index + 1}"></span>`;
//             },
//           }}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           loop={true}
//           onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
//           speed={1000}
//         >
//           {slideContent.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <Box className={classes.slide}>
//                 {slide.backgroundImage && (
//                   <Box 
//                     className={classes.backgroundImage}
//                     style={{ backgroundImage: `url(${slide.backgroundImage})` }}
//                   />
//                 )}
//                 {slide.backgroundImage && <Box className={classes.backgroundOverlay} />}
                
//                 <Box className={classes.slideIndicator}>
//                   {slide.slideNumber} / 05
//                 </Box>

//                 <Container className={classes.container}>
//                   <Box className={classes.flexRow}>
//                     <Box className={classes.leftBox}>
//                       <Typography variant="h1" className={classes.mainTitle}>
//                         {renderTitle(slide.title, slide.highlight)}
//                       </Typography>
                      
//                       <Box className={classes.curveIcon}>
//                         <svg width="487" height="34" viewBox="0 0 487 34" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#FFC614" strokeWidth="8" strokeLinecap="round"/>
//                         </svg>
//                       </Box>
                      
//                       <Typography className={classes.subtitle}>
//                         {slide.subtitle}
//                       </Typography>
                      
//                       <Button 
//                         className={classes.applyButton}
//                         onClick={handleApplyClick}
//                         title="Share your details to start your learning journey with Gigaversity"
//                       >
//                         {slide.buttonText}
//                       </Button>
//                     </Box>
                    
//                     <Box className={classes.rightBox}>
//                       <Box className={classes.yellowCircle}></Box>
//                       <img 
//                         src={Heroguy} 
//                         alt={`Gigaversity - ${slide.title}`}
//                         className={classes.heroImage}
//                       />
                      
//                       {/* Floating Icons */}
//                       <Box className={`${classes.floatingIcon} ${classes.icon1}`}>
//                         <Stack/>
//                       </Box>
//                       <Box className={`${classes.floatingIcon} ${classes.icon2}`}>
//                         <Tick/>
//                       </Box>
//                       <Box className={`${classes.floatingIcon} ${classes.icon3}`}>
//                         <Message/>
//                       </Box>
//                     </Box>
//                   </Box>
//                 </Container>
//               </Box>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Box>
      
//       <CentralizedPopupForms
//         open={popupOpen}
//         onClose={handlePopupClose}
//         variant="demo"
//       />
//     </>
//   );
// };

// export default DynamicHeroCarousel;