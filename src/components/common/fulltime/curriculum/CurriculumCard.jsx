// 5. CurriculumCard Component
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const useStyles = makeStyles({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '20px !important',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05) !important',
    padding: '20px',
    width: '400px',
    height: '500px',
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    marginRight: '24px',
    flex: '0 0 auto',
    overflow: 'hidden',
    cursor: 'pointer',
    marginTop:"20px",
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1) !important',
    },
    '@media (max-width: 1200px)': {
      width: '380px',
      height: '480px',
      padding: '18px',
    },
    '@media (max-width: 960px)': {
      width: '350px',
      height: '450px',
      padding: '16px',
    },
    '@media (max-width: 600px)': {
      width: '300px',
      height: '420px',
      padding: '15px',
    },
    '@media (max-width: 480px)': {
      width: '270px',
      height: '400px',
      padding: '12px',
    },
    '@media (max-width: 375px)': {
      width: '240px',
      height: '380px',
      padding: '10px',
    },
  },
  cardScaled: {
    transform: 'scale(1.08)',
    zIndex: 2,
    boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.15) !important',
    '@media (max-width: 960px)': {
      transform: 'scale(1.05)',
    },
    '@media (max-width: 600px)': {
      transform: 'scale(1.03)',
    },
  },
  cardActive: {
    borderTop: '4px solid #4A63E7',
    boxShadow: '0px 8px 25px rgba(74, 99, 231, 0.15) !important',
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
    opacity: 0.05,
    zIndex: 1,
    transform: 'rotate(-3deg) scale(1.2) translateY(20px)',
    backgroundSize: '20px 20px',
    backgroundImage: 'radial-gradient(#4A63E7 1px, transparent 1px)',
  },
  numberCircle: {
    position: 'absolute',
    top: '-30px',
    left: '20px',
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4A63E7 0%, #8B5CF6 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '48px',
    boxShadow: '0px 6px 15px rgba(74, 99, 231, 0.25)',
    transition: 'all 0.4s ease',
    marginBottom: '20px !important',
    '&:hover': {
      transform: 'rotate(10deg) scale(1.05)',
    },
    '@media (max-width: 1200px)': {
      width: '65px',
      height: '65px',
      fontSize: '44px',
    },
    '@media (max-width: 960px)': {
      width: '60px',
      height: '60px',
      fontSize: '40px',
      top: '-25px',
    },
    '@media (max-width: 600px)': {
      width: '55px',
      height: '55px',
      fontSize: '36px',
      top: '-22px',
      left: '15px',
    },
    '@media (max-width: 480px)': {
      width: '50px',
      height: '50px',
      fontSize: '32px',
      top: '-20px',
      left: '12px',
    },
    '@media (max-width: 375px)': {
      width: '45px',
      height: '45px',
      fontSize: '28px',
      top: '-18px',
      left: '10px',
    },
  },
  topicIcon: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '38px',
    color: '#4A63E7',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'rotate(15deg) scale(1.1)',
    },
    '@media (max-width: 1200px)': {
      fontSize: '36px',
    },
    '@media (max-width: 960px)': {
      fontSize: '34px',
      top: '18px',
      right: '18px',
    },
    '@media (max-width: 600px)': {
      fontSize: '32px',
      top: '15px',
      right: '15px',
    },
    '@media (max-width: 480px)': {
      fontSize: '30px',
      top: '12px',
      right: '12px',
    },
    '@media (max-width: 375px)': {
      fontSize: '28px',
      top: '10px',
      right: '10px',
    },
  },
  title: {
    fontSize: '24px !important',
    fontWeight: 'bold !important',
    color: '#4A4A4A !important',
    marginTop: '35px !important',
    marginBottom: '20px !important',
    transition: 'all 0.3s ease-in-out',
    display: 'inline-block',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '-5px',
      left: '0',
      backgroundColor: '#4A63E7',
      transition: 'width 0.3s ease',
    },
    '@media (max-width: 1200px)': {
      fontSize: '22px !important',
      marginTop: '32px !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '20px !important',
      marginTop: '30px !important',
      marginBottom: '16px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '18px !important',
      marginTop: '28px !important',
      marginBottom: '14px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '16px !important',
      marginTop: '25px !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '15px !important',
      marginTop: '22px !important',
      marginBottom: '10px !important',
    },
  },
  titleHover: {
    '&:after': {
      width: '100%',
    },
  },
  titleScaled: {
    fontSize: '26px !important',
    color: '#4A63E7 !important',
    '@media (max-width: 1200px)': {
      fontSize: '24px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '22px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '20px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '18px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '16px !important',
    },
  },
  bulletList: {
    padding: 0,
    listStyleType: 'none',
    overflow: 'hidden',
    maxHeight: '295px',
    '@media (max-width: 960px)': {
      maxHeight: '275px',
    },
    '@media (max-width: 600px)': {
      maxHeight: '255px',
    },
    '@media (max-width: 480px)': {
      maxHeight: '235px',
    },
    '@media (max-width: 375px)': {
      maxHeight: '215px',
    },
  },
  bulletItem: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '4px 0 !important',
    '@media (max-width: 480px)': {
      padding: '3px 0 !important',
    },
  },
  bulletIcon: {
    minWidth: '24px',
    color: '#4A63E7',
    marginTop: '3px',
    marginRight: '8px',
    fontSize: '18px !important',
    transition: 'transform 0.3s ease',
    '@media (max-width: 960px)': {
      fontSize: '17px !important',
      marginRight: '7px',
    },
    '@media (max-width: 600px)': {
      fontSize: '16px !important',
      marginRight: '6px',
    },
    '@media (max-width: 480px)': {
      fontSize: '15px !important',
      marginRight: '5px',
      marginTop: '2px',
    },
    '@media (max-width: 375px)': {
      fontSize: '14px !important',
      marginRight: '4px',
      minWidth: '20px',
    },
  },
  bulletText: {
    fontSize: '16px !important',
    color: '#666666 !important',
    transition: 'all 0.3s ease-in-out',
    margin: '0 !important',
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
  bulletTextScaled: {
    fontSize: '18px !important',
    color: '#4A4A4A !important',
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
  footer: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    right: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderTop: '1px solid #F0F0F0',
    '@media (max-width: 960px)': {
      bottom: '15px',
      left: '15px',
      right: '15px',
      padding: '8px 0',
    },
    '@media (max-width: 600px)': {
      bottom: '12px',
      left: '12px',
      right: '12px',
      padding: '7px 0',
    },
    '@media (max-width: 480px)': {
      bottom: '10px',
      left: '10px',
      right: '10px',
      padding: '6px 0',
    },
    '@media (max-width: 375px)': {
      bottom: '8px',
      left: '8px',
      right: '8px',
      padding: '5px 0',
    },
  },
  difficultyContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  difficultyLabel: {
    fontSize: '14px !important',
    color: '#999999 !important',
    marginRight: '10px !important',
    '@media (max-width: 960px)': {
      fontSize: '13px !important',
      marginRight: '8px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '12px !important',
      marginRight: '7px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '11px !important',
      marginRight: '6px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '10px !important',
      marginRight: '5px !important',
    },
  },
  difficultyDots: {
    display: 'flex',
    gap: '5px',
    '@media (max-width: 600px)': {
      gap: '4px',
    },
    '@media (max-width: 480px)': {
      gap: '3px',
    },
  },
  difficultyDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#E0E0E0',
    transition: 'all 0.3s ease',
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
  },
  duration: {
    display: 'flex',
    alignItems: 'center',
    color: '#999999',
    fontSize: '14px',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#4A63E7',
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
    fontSize: '16px !important',
    marginRight: '5px',
    transition: 'transform 0.3s ease',
    '@media (max-width: 960px)': {
      fontSize: '15px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '14px !important',
      marginRight: '4px',
    },
    '@media (max-width: 480px)': {
      fontSize: '13px !important',
      marginRight: '3px',
    },
    '@media (max-width: 375px)': {
      fontSize: '12px !important',
      marginRight: '2px',
    },
  },
  hoverEffect: {
    '& $durationIcon': {
      transform: 'rotate(15deg)',
    },
    '& $bulletIcon': {
      transform: 'scale(1.2)',
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
  onClick
}) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = React.useState(false);

  // Show only first 4 topics
  const displayTopics = topics.slice(0, 4);

  return (
    <Paper 
      className={`${classes.card} ${isScaled ? classes.cardScaled : ''} ${isActive ? classes.cardActive : ''} ${isHovered ? classes.hoverEffect : ''}`} 
      elevation={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <Box className={classes.cardBackground}></Box>
      <Box className={classes.cardContent}>
        <Box className={classes.numberCircle}>{number}</Box>
        <Box className={classes.topicIcon}>{icon}</Box>
        
        <Typography className={`${classes.title} ${isScaled ? classes.titleScaled : ''} ${isHovered ? classes.titleHover : ''}`}>
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
