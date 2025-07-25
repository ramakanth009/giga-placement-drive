// CurriculumCard Component with comprehensive responsiveness
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const useStyles = makeStyles({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '24px !important',
    boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.06) !important',
    padding: '24px',
    width: '430px',
    height: '560px',
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    marginRight: '24px',
    flex: '0 0 auto',
    overflow: 'hidden',
    cursor: 'pointer',
    marginTop: '25px',
    border: '1px solid rgba(74, 99, 231, 0.08)',
    '&:hover': {
      // transform: 'translateY(-6px)',
      boxShadow: '0px 12px 35px rgba(0, 0, 0, 0.12) !important',
      borderColor: 'rgba(74, 99, 231, 0.2)',
    },
    '@media (max-width: 1200px)': {
      borderRadius: '22px !important',
      padding: '22px',
      width: '380px',
      height: '560px',
      marginRight: '22px',
      marginTop: '23px',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1) !important',
      },
    },
    '@media (max-width: 960px)': {
      borderRadius: '20px !important',
      padding: '20px',
      width: '350px',
      height: '480px',
      marginRight: '20px',
      marginTop: '20px',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.08) !important',
      },
    },
    '@media (max-width: 600px)': {
      borderRadius: '18px !important',
      padding: '18px',
      width: '300px',
      height: '450px',
      marginRight: '18px',
      marginTop: '18px',
    },
    '@media (max-width: 480px)': {
      borderRadius: '16px !important',
      padding: '16px',
      width: '270px',
      height: '420px',
      marginRight: '16px',
      marginTop: '15px',
    },
    '@media (max-width: 375px)': {
      borderRadius: '14px !important',
      padding: '14px',
      width: '240px',
      height: '400px',
      marginRight: '14px',
      marginTop: '12px',
    },
  },
  cardScaled: {
    transform: 'scale(1.1)',
    zIndex: 3,
    boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.18) !important',
    borderColor: 'rgba(74, 99, 231, 0.3) !important',
    '&:hover': {
      transform: 'scale(1.1) translateY(-3px)',
      boxShadow: '0px 18px 45px rgba(0, 0, 0, 0.2) !important',
    },
    '@media (max-width: 1200px)': {
      transform: 'scale(1.08)',
      '&:hover': {
        transform: 'scale(1.08) translateY(-3px)',
      },
    },
    '@media (max-width: 960px)': {
      transform: 'scale(1.06)',
      '&:hover': {
        transform: 'scale(1.06) translateY(-2px)',
      },
    },
    '@media (max-width: 600px)': {
      transform: 'scale(1.04)',
      '&:hover': {
        transform: 'scale(1.04) translateY(-2px)',
      },
    },
    '@media (max-width: 480px)': {
      transform: 'scale(1.03)',
      '&:hover': {
        transform: 'scale(1.03) translateY(-1px)',
      },
    },
    '@media (max-width: 375px)': {
      transform: 'scale(1.02)',
      '&:hover': {
        transform: 'scale(1.02) translateY(-1px)',
      },
    },
  },
  cardInactive: {
    transform: 'scale(0.85)',
    opacity: 0.7,
    filter: 'blur(0.5px)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1,
    // Responsive width for inactive cards
    width: '320px !important',
    '@media (max-width: 1200px)': {
      width: '290px !important',
      transform: 'scale(0.83)',
    },
    '@media (max-width: 960px)': {
      width: '260px !important',
      transform: 'scale(0.81)',
    },
    '@media (max-width: 600px)': {
      width: '220px !important',
      transform: 'scale(0.79)',
    },
    '@media (max-width: 480px)': {
      width: '200px !important',
      transform: 'scale(0.77)',
    },
    '@media (max-width: 375px)': {
      width: '180px !important',
      transform: 'scale(0.75)',
    },
  },
  cardActive: {
    borderTop: '5px solid #4A63E7',
    boxShadow: '0px 10px 30px rgba(74, 99, 231, 0.18) !important',
    borderColor: 'rgba(74, 99, 231, 0.3) !important',
    backgroundColor: '#fafbff !important',
    '& $durationIcon': {
      transform: 'rotate(20deg)',
      color: '#4A63E7 !important',
    },
    '& $bulletIcon': {
      transform: 'scale(1.25)',
      color: '#4A63E7 !important',
    },
    '& $title:after': {
      width: '100%',
    },
    '@media (max-width: 1200px)': {
      borderTop: '4px solid #4A63E7',
      '& $durationIcon': {
        transform: 'rotate(18deg)',
      },
      '& $bulletIcon': {
        transform: 'scale(1.2)',
      },
    },
    '@media (max-width: 960px)': {
      borderTop: '3px solid #4A63E7',
      '& $durationIcon': {
        transform: 'rotate(15deg)',
      },
      '& $bulletIcon': {
        transform: 'scale(1.15)',
      },
    },
    '@media (max-width: 600px)': {
      '& $durationIcon': {
        transform: 'rotate(12deg)',
      },
      '& $bulletIcon': {
        transform: 'scale(1.1)',
      },
    },
    '@media (max-width: 480px)': {
      borderTop: '2px solid #4A63E7',
      '& $durationIcon': {
        transform: 'rotate(10deg)',
      },
    },
    '@media (max-width: 375px)': {
      '& $durationIcon': {
        transform: 'rotate(8deg)',
      },
    },
  },
  cardContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 2,
  },
  cardBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.06,
    zIndex: 1,
    transform: 'rotate(-2deg) scale(1.15) translateY(15px)',
    backgroundSize: '25px 25px',
    backgroundImage: 'radial-gradient(#4A63E7 1.5px, transparent 1.5px)',
    '@media (max-width: 1200px)': {
      backgroundSize: '23px 23px',
      transform: 'rotate(-2deg) scale(1.12) translateY(12px)',
    },
    '@media (max-width: 960px)': {
      backgroundSize: '20px 20px',
      transform: 'rotate(-1deg) scale(1.1) translateY(10px)',
    },
    '@media (max-width: 600px)': {
      backgroundSize: '18px 18px',
      transform: 'rotate(-1deg) scale(1.08) translateY(8px)',
    },
    '@media (max-width: 480px)': {
      backgroundSize: '16px 16px',
      transform: 'rotate(-1deg) scale(1.05) translateY(6px)',
    },
    '@media (max-width: 375px)': {
      backgroundSize: '14px 14px',
      transform: 'rotate(-1deg) scale(1.03) translateY(5px)',
    },
  },
  numberCircle: {
    position: 'absolute',
    top: '-35px',
    left: '24px',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4A63E7 0%, #8B5CF6 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '54px',
    boxShadow: '0px 8px 20px rgba(74, 99, 231, 0.3)',
    transition: 'all 0.4s ease',
    marginBottom: '25px !important',
    border: '3px solid #ffffff',
    '&:hover': {
      transform: 'rotate(15deg) scale(1.08)',
      boxShadow: '0px 10px 25px rgba(74, 99, 231, 0.4)',
    },
    '@media (max-width: 1200px)': {
      top: '-32px',
      left: '22px',
      width: '75px',
      height: '75px',
      fontSize: '50px',
      marginBottom: '23px !important',
      '&:hover': {
        transform: 'rotate(12deg) scale(1.06)',
      },
    },
    '@media (max-width: 960px)': {
      top: '-30px',
      left: '20px',
      width: '70px',
      height: '70px',
      fontSize: '46px',
      marginBottom: '20px !important',
      border: '2px solid #ffffff',
      '&:hover': {
        transform: 'rotate(10deg) scale(1.05)',
      },
    },
    '@media (max-width: 600px)': {
      top: '-27px',
      left: '18px',
      width: '65px',
      height: '65px',
      fontSize: '42px',
      marginBottom: '18px !important',
    },
    '@media (max-width: 480px)': {
      top: '-25px',
      left: '16px',
      width: '60px',
      height: '60px',
      fontSize: '38px',
      marginBottom: '15px !important',
      '&:hover': {
        transform: 'rotate(8deg) scale(1.03)',
      },
    },
    '@media (max-width: 375px)': {
      top: '-22px',
      left: '14px',
      width: '55px',
      height: '55px',
      fontSize: '34px',
      marginBottom: '12px !important',
      '&:hover': {
        transform: 'rotate(5deg) scale(1.02)',
      },
    },
  },
  topicIcon: {
    position: 'absolute',
    top: '24px',
    right: '24px',
    fontSize: '44px',
    color: '#4A63E7',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'rotate(20deg) scale(1.15)',
      color: '#8B5CF6',
    },
    '@media (max-width: 1200px)': {
      fontSize: '42px',
      top: '22px',
      right: '22px',
      '&:hover': {
        transform: 'rotate(18deg) scale(1.12)',
      },
    },
    '@media (max-width: 960px)': {
      fontSize: '40px',
      top: '20px',
      right: '20px',
      '&:hover': {
        transform: 'rotate(15deg) scale(1.1)',
      },
    },
    '@media (max-width: 600px)': {
      fontSize: '38px',
      top: '18px',
      right: '18px',
      '&:hover': {
        transform: 'rotate(12deg) scale(1.08)',
      },
    },
    '@media (max-width: 480px)': {
      fontSize: '36px',
      top: '16px',
      right: '16px',
      '&:hover': {
        transform: 'rotate(10deg) scale(1.05)',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '34px',
      top: '14px',
      right: '14px',
      '&:hover': {
        transform: 'rotate(8deg) scale(1.03)',
      },
    },
  },
  title: {
    fontSize: '28px !important',
    fontWeight: 'bold !important',
    color: '#4A4A4A !important',
    marginTop: '40px !important',
    // marginBottom: '25px !important',
    transition: 'all 0.3s ease-in-out',
    display: 'inline-block',
    position: 'relative',
    lineHeight: '1.3 !important',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '0',
      height: '3px',
      bottom: '-8px',
      left: '0',
      backgroundColor: '#4A63E7',
      transition: 'width 0.3s ease',
      borderRadius: '2px',
    },
    '@media (max-width: 1200px)': {
      fontSize: '26px !important',
      marginTop: '38px !important',
      // marginBottom: '23px !important',
      '&:after': {
        bottom: '-7px',
      },
    },
    '@media (max-width: 960px)': {
      fontSize: '24px !important',
      marginTop: '35px !important',
      // marginBottom: '20px !important',
      '&:after': {
        height: '2px',
        bottom: '-6px',
      },
    },
    '@media (max-width: 600px)': {
      fontSize: '22px !important',
      marginTop: '32px !important',
      // marginBottom: '18px !important',
      '&:after': {
        bottom: '-5px',
      },
    },
    '@media (max-width: 480px)': {
      fontSize: '20px !important',
      marginTop: '30px !important',
      // marginBottom: '16px !important',
      '&:after': {
        bottom: '-4px',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '18px !important',
      marginTop: '28px !important',
      // marginBottom: '14px !important',
      '&:after': {
        height: '1px',
        bottom: '-3px',
      },
    },
  },
  titleHover: {
    '&:after': {
      width: '100%',
    },
  },
  titleScaled: {
    fontSize: '30px !important',
    color: '#4A63E7 !important',
    '&:after': {
      backgroundColor: '#8B5CF6',
    },
    '@media (max-width: 1200px)': {
      fontSize: '28px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '26px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '24px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '22px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '20px !important',
    },
  },
bulletList: {
  padding: 0,
  listStyleType: 'none',
  overflow: 'hidden',
  maxHeight: '400px',
  '@media (max-width: 1200px)': {
    maxHeight: '380px',
  },
  '@media (max-width: 960px)': {
    maxHeight: '360px',
  },
  '@media (max-width: 600px)': {
    maxHeight: '340px',
  },
  '@media (max-width: 480px)': {
    maxHeight: '320px',
  },
  '@media (max-width: 375px)': {
    maxHeight: '300px',
  },
},
  bulletItem: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '6px 0 !important',
    '&:last-child': {
      paddingBottom: '0 !important',
    },
    '@media (max-width: 1200px)': {
      padding: '5px 0 !important',
    },
    '@media (max-width: 960px)': {
      padding: '4px 0 !important',
    },
    '@media (max-width: 600px)': {
      padding: '3px 0 !important',
    },
    '@media (max-width: 480px)': {
      padding: '2px 0 !important',
    },
    '@media (max-width: 375px)': {
      padding: '1px 0 !important',
    },
  },
  bulletIcon: {
    minWidth: '28px',
    color: '#4A63E7',
    // marginTop: '4px',
    marginRight: '10px',
    fontSize: '20px !important',
    transition: 'transform 0.3s ease',
    '@media (max-width: 1200px)': {
      fontSize: '19px !important',
      minWidth: '26px',
      // marginRight: '9px',
      // marginTop: '3px',
    },
    '@media (max-width: 960px)': {
      fontSize: '18px !important',
      // minWidth: '24px',
      // marginRight: '8px',
    },
    '@media (max-width: 600px)': {
      fontSize: '17px !important',
      minWidth: '22px',
      // marginRight: '7px',
      // marginTop: '2px',
    },
    '@media (max-width: 480px)': {
      fontSize: '16px !important',
      minWidth: '20px',
      // marginRight: '6px',
    },
    '@media (max-width: 375px)': {
      fontSize: '15px !important',
      minWidth: '18px',
      // marginRight: '5px',
      // marginTop: '1px',
    },
  },
bulletText: {
  fontSize: '16px !important', // Start larger on desktop
  color: '#666666',
  transition: 'all 0.3s ease-in-out',
  margin: '0',
  lineHeight: '1.4',
  '@media (max-width: 1200px)': {
    fontSize: '15px !important',
  },
  '@media (max-width: 960px)': {
    fontSize: '14px !important',
    lineHeight: '1.3',
  },
  '@media (max-width: 600px)': {
    fontSize: '13px !important',
  },
  '@media (max-width: 480px)': {
    fontSize: '12px !important',
    lineHeight: '1.2',
  },
  '@media (max-width: 375px)': {
    fontSize: '11px !important', // Still readable on smallest screens
  },
},
bulletTextScaled: {
  fontSize: '18px !important', // Larger scaled text for desktop
  color: '#4A4A4A',
  fontWeight: '500',
  '@media (max-width: 1200px)': {
    fontSize: '17px !important',
  },
  '@media (max-width: 960px)': {
    fontSize: '16px !important',
  },
  '@media (max-width: 600px)': {
    fontSize: '15px !important',
  },
  '@media (max-width: 480px)': {
    fontSize: '14px !important',
  },
  '@media (max-width: 375px)': {
    fontSize: '13px !important',
  },
},

// Also consider fixing other text elements if needed:
difficultyLabel: {
  fontSize: '16px !important', // Increased from 15px
  color: '#999999 !important',
  marginRight: '12px !important',
  fontWeight: '500 !important',
  '@media (max-width: 1200px)': {
    fontSize: '15px !important',
  },
  '@media (max-width: 960px)': {
    fontSize: '14px !important',
  },
  '@media (max-width: 600px)': {
    fontSize: '13px !important',
  },
  '@media (max-width: 480px)': {
    fontSize: '12px !important',
  },
  '@media (max-width: 375px)': {
    fontSize: '11px !important',
  },
},
duration: {
  display: 'flex',
  alignItems: 'center',
  color: '#999999',
  fontSize: '16px', // Increased from 15px
  fontWeight: '500',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#4A63E7',
  },
  '@media (max-width: 1200px)': {
    fontSize: '15px',
  },
  '@media (max-width: 960px)': {
    fontSize: '14px',
  },
  '@media (max-width: 600px)': {
    fontSize: '13px',
  },
  '@media (max-width: 480px)': {
    fontSize: '12px',
  },
  '@media (max-width: 375px)': {
    fontSize: '11px',
  },
},

  footer: {
    position: 'absolute',
    bottom: '24px',
    left: '24px',
    right: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    borderTop: '2px solid #F5F5F5',
    marginTop: 'auto',
    '@media (max-width: 1200px)': {
      bottom: '22px',
      left: '22px',
      right: '22px',
      padding: '11px 0',
    },
    '@media (max-width: 960px)': {
      bottom: '20px',
      left: '20px',
      right: '20px',
      padding: '10px 0',
      borderTop: '1px solid #F0F0F0',
    },
    '@media (max-width: 600px)': {
      bottom: '18px',
      left: '18px',
      right: '18px',
      padding: '9px 0',
    },
    '@media (max-width: 480px)': {
      bottom: '16px',
      left: '16px',
      right: '16px',
      padding: '8px 0',
    },
    '@media (max-width: 375px)': {
      bottom: '14px',
      left: '14px',
      right: '14px',
      padding: '7px 0',
    },
  },
  difficultyContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  difficultyLabel: {
    fontSize: '15px !important',
    color: '#999999 !important',
    marginRight: '12px !important',
    fontWeight: '500 !important',
    '@media (max-width: 1200px)': {
      fontSize: '14px !important',
      marginRight: '11px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '13px !important',
      marginRight: '10px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '12px !important',
      marginRight: '9px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '11px !important',
      marginRight: '8px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '10px !important',
      marginRight: '7px !important',
    },
  },
  difficultyDots: {
    display: 'flex',
    gap: '6px',
    '@media (max-width: 1200px)': {
      gap: '5px',
    },
    '@media (max-width: 960px)': {
      gap: '4px',
    },
    '@media (max-width: 600px)': {
      gap: '3px',
    },
    '@media (max-width: 480px)': {
      gap: '2px',
    },
    '@media (max-width: 375px)': {
      gap: '2px',
    },
  },
  difficultyDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#E0E0E0',
    transition: 'all 0.3s ease',
    border: '1px solid transparent',
    '@media (max-width: 1200px)': {
      width: '11px',
      height: '11px',
    },
    '@media (max-width: 960px)': {
      width: '10px',
      height: '10px',
    },
    '@media (max-width: 600px)': {
      width: '9px',
      height: '9px',
    },
    '@media (max-width: 480px)': {
      width: '8px',
      height: '8px',
    },
    '@media (max-width: 375px)': {
      width: '7px',
      height: '7px',
    },
  },
  difficultyDotActive: {
    backgroundColor: '#4A63E7',
    boxShadow: '0 0 0 2px rgba(74, 99, 231, 0.2)',
    borderColor: '#ffffff',
    transform: 'scale(1.1)',
    '@media (max-width: 600px)': {
      boxShadow: '0 0 0 1px rgba(74, 99, 231, 0.2)',
    },
    '@media (max-width: 480px)': {
      transform: 'scale(1.05)',
    },
    '@media (max-width: 375px)': {
      transform: 'scale(1.02)',
    },
  },
  duration: {
    display: 'flex',
    alignItems: 'center',
    color: '#999999',
    fontSize: '15px',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#4A63E7',
    },
    '@media (max-width: 1200px)': {
      fontSize: '14px',
    },
    '@media (max-width: 960px)': {
      fontSize: '13px',
    },
    '@media (max-width: 600px)': {
      fontSize: '12px',
    },
    '@media (max-width: 480px)': {
      fontSize: '11px',
    },
    '@media (max-width: 375px)': {
      fontSize: '10px',
    },
  },
  durationIcon: {
    fontSize: '18px !important',
    marginRight: '6px',
    transition: 'transform 0.3s ease',
    '@media (max-width: 1200px)': {
      fontSize: '17px !important',
      marginRight: '5px',
    },
    '@media (max-width: 960px)': {
      fontSize: '16px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '15px !important',
      marginRight: '4px',
    },
    '@media (max-width: 480px)': {
      fontSize: '14px !important',
      marginRight: '3px',
    },
    '@media (max-width: 375px)': {
      fontSize: '13px !important',
      marginRight: '2px',
    },
  },
});

const CurriculumCard = ({ 
  number, 
  title, 
  topics = [], 
  difficulty = 1, 
  duration = "2 weeks", 
  icon,
  isScaled = false,
  isActive = false,
  isInactive = false,
  onClick
}) => {
  const classes = useStyles();

  const displayTopics = topics;

  return (
    <Paper 
      className={
        `${classes.card} ` +
        (isScaled ? classes.cardScaled + ' ' : '') +
        (isActive ? classes.cardActive + ' ' : '') +
        (isInactive ? classes.cardInactive : '')
      }
      elevation={0}
      onClick={onClick}
    >
      <Box className={classes.cardBackground}></Box>
      <Box className={classes.cardContent}>
        <Box className={classes.numberCircle}>{number}</Box>
        <Box className={classes.topicIcon}>{icon}</Box>

        <Typography variant="h3" className={
          `${classes.title} ${isScaled ? classes.titleScaled : ''}`
        }>
          {title}
        </Typography>
        
        <List className={classes.bulletList}>
          {displayTopics.map((topic, index) => (
            <ListItem key={index} className={classes.bulletItem}>
              <CheckCircleOutlineIcon className={classes.bulletIcon} />
              <ListItemText 
                primary={
                  <Typography 
                    className={`${classes.bulletText} ${isScaled ? classes.bulletTextScaled : ''}`}
                  >
                    {topic}
                  </Typography>
                } 
              />
            </ListItem>
          ))}
        </List>
        
        <Box className={classes.footer}>
          <Box className={classes.difficultyContainer}>
            <Typography className={classes.difficultyLabel}>Difficulty:</Typography>
            <Box className={classes.difficultyDots}>
              <Box className={`${classes.difficultyDot} ${difficulty >= 1 ? classes.difficultyDotActive : ''}`} />
              <Box className={`${classes.difficultyDot} ${difficulty >= 2 ? classes.difficultyDotActive : ''}`} />
              <Box className={`${classes.difficultyDot} ${difficulty >= 3 ? classes.difficultyDotActive : ''}`} />
            </Box>
          </Box>
          <Box className={classes.duration}>
            <AccessTimeIcon className={classes.durationIcon} />
            {duration}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default CurriculumCard;