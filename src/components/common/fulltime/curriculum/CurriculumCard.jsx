// Updated CurriculumCard Component with all topics and brand colors
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const useStyles = makeStyles({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px !important',
    boxShadow: '0px 2px 12px rgba(42, 43, 106, 0.06) !important',
    padding: '15px',
    width: '280px',
    minHeight: '320px',
    height: 'auto',
    position: 'relative',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    marginRight: '15px',
    flex: '0 0 auto',
    overflow: 'hidden',
    cursor: 'pointer',
    marginTop: '15px',
    border: '1px solid transparent',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0px 8px 24px rgba(42, 43, 106, 0.12) !important',
      borderColor: 'rgba(42, 43, 106, 0.1)',
    },
    '@media (max-width: 1200px)': {
      width: '260px',
      padding: '14px',
      marginRight: '14px',
    },
    '@media (max-width: 960px)': {
      width: '240px',
      padding: '12px',
      marginRight: '12px',
    },
    '@media (max-width: 600px)': {
      width: '220px',
      padding: '10px',
      marginRight: '10px',
    },
    '@media (max-width: 480px)': {
      width: '200px',
      padding: '8px',
      marginRight: '8px',
    },
  },
  cardScaled: {
    transform: 'scale(1.05)',
    zIndex: 2,
    boxShadow: '0px 15px 40px rgba(42, 43, 106, 0.2) !important',
    borderColor: 'rgba(255, 198, 20, 0.3)',
    '@media (max-width: 960px)': {
      transform: 'scale(1.03)',
    },
  },
  cardActive: {
    borderColor: '#2A2B6A',
    boxShadow: '0px 10px 30px rgba(42, 43, 106, 0.2) !important',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 100%)',
      borderTopLeftRadius: '16px',
      borderTopRightRadius: '16px',
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
    opacity: 0.03,
    zIndex: 1,
    transform: 'rotate(-2deg) scale(1.1) translateY(15px)',
    backgroundSize: '18px 18px',
    backgroundImage: 'radial-gradient(#2A2B6A 1px, transparent 1px)',
  },
  numberCircle: {
    position: 'absolute',
    top: '-18px',
    left: '15px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #4A4C9B 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    boxShadow: '0px 4px 10px rgba(42, 43, 106, 0.2)',
    transition: 'all 0.3s ease',
    marginBottom: '10px !important',
    '&:hover': {
      transform: 'rotate(8deg) scale(1.05)',
    },
    '@media (max-width: 1200px)': {
      width: '38px',
      height: '38px',
      fontSize: '17px',
      top: '-16px',
    },
    '@media (max-width: 960px)': {
      width: '36px',
      height: '36px',
      fontSize: '16px',
      top: '-15px',
    },
    '@media (max-width: 600px)': {
      width: '34px',
      height: '34px',
      fontSize: '15px',
      top: '-14px',
      left: '12px',
    },
  },
  topicIcon: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontSize: '24px',
    color: '#2A2B6A',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'rotate(12deg) scale(1.08)',
      color: '#FFC614',
    },
    '@media (max-width: 1200px)': {
      fontSize: '22px',
    },
    '@media (max-width: 960px)': {
      fontSize: '20px',
      top: '8px',
      right: '12px',
    },
    '@media (max-width: 600px)': {
      fontSize: '18px',
      top: '6px',
      right: '10px',
    },
  },
  title: {
    fontSize: '16px !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginTop: '20px !important',
    marginBottom: '12px !important',
    transition: 'all 0.3s ease-in-out',
    display: 'block',
    position: 'relative',
    lineHeight: '1.2',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '-3px',
      left: '0',
      backgroundColor: '#FFC614',
      transition: 'width 0.3s ease',
    },
    '@media (max-width: 1200px)': {
      fontSize: '15px !important',
      marginTop: '18px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '14px !important',
      marginTop: '16px !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '13px !important',
      marginTop: '14px !important',
      marginBottom: '8px !important',
    },
  },
  titleHover: {
    '&:after': {
      width: '100%',
    },
  },
  titleScaled: {
    fontSize: '17px !important',
    color: '#2A2B6A !important',
    '@media (max-width: 1200px)': {
      fontSize: '16px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '15px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '14px !important',
    },
  },
  topicsContainer: {
    flex: 1,
    overflow: 'hidden',
    marginBottom: '45px',
  },
  bulletList: {
    padding: 0,
    listStyleType: 'none',
    margin: 0,
  },
  bulletItem: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '2px 0 !important',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(42, 43, 106, 0.02)',
      borderRadius: '4px',
      paddingLeft: '2px !important',
    },
    '@media (max-width: 480px)': {
      padding: '1px 0 !important',
    },
  },
  bulletIcon: {
    minWidth: '16px',
    color: '#2A2B6A',
    marginTop: '1px',
    marginRight: '6px',
    fontSize: '12px !important',
    transition: 'all 0.3s ease',
    '@media (max-width: 960px)': {
      fontSize: '11px !important',
      marginRight: '5px',
      minWidth: '14px',
    },
    '@media (max-width: 600px)': {
      fontSize: '10px !important',
      marginRight: '4px',
      minWidth: '12px',
    },
  },
  bulletText: {
    fontSize: '11px !important',
    color: '#555555 !important',
    transition: 'all 0.3s ease-in-out',
    margin: '0 !important',
    lineHeight: '1.3',
    '@media (max-width: 1200px)': {
      fontSize: '10.5px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '10px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '9px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '8.5px !important',
    },
  },
  bulletTextScaled: {
    fontSize: '12px !important',
    color: '#333333 !important',
    fontWeight: '500 !important',
    '@media (max-width: 1200px)': {
      fontSize: '11.5px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '11px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '10px !important',
    },
  },
  footer: {
    position: 'absolute',
    bottom: '10px',
    left: '15px',
    right: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    borderTop: '1px solid rgba(42, 43, 106, 0.1)',
    backgroundColor: 'rgba(248, 249, 255, 0.8)',
    borderRadius: '6px',
    backdropFilter: 'blur(5px)',
    '@media (max-width: 960px)': {
      bottom: '8px',
      left: '12px',
      right: '12px',
      padding: '6px 0',
    },
    '@media (max-width: 600px)': {
      bottom: '6px',
      left: '10px',
      right: '10px',
      padding: '5px 0',
    },
  },
  difficultyContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  difficultyLabel: {
    fontSize: '12px !important',
    color: '#666666 !important',
    marginRight: '8px !important',
    fontWeight: '500 !important',
    '@media (max-width: 960px)': {
      fontSize: '11px !important',
      marginRight: '6px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '10px !important',
      marginRight: '5px !important',
    },
  },
  difficultyDots: {
    display: 'flex',
    gap: '4px',
    '@media (max-width: 600px)': {
      gap: '3px',
    },
  },
  difficultyDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#E0E0E0',
    transition: 'all 0.3s ease',
    '@media (max-width: 600px)': {
      width: '7px',
      height: '7px',
    },
  },
  difficultyDotActive: {
    backgroundColor: '#2A2B6A',
    boxShadow: '0 0 0 1px rgba(42, 43, 106, 0.2)',
    transform: 'scale(1.1)',
  },
  duration: {
    display: 'flex',
    alignItems: 'center',
    color: '#666666',
    fontSize: '12px',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#2A2B6A',
    },
    '@media (max-width: 960px)': {
      fontSize: '11px',
    },
    '@media (max-width: 600px)': {
      fontSize: '10px',
    },
  },
  durationIcon: {
    fontSize: '14px !important',
    marginRight: '4px',
    transition: 'transform 0.3s ease',
    color: '#FFC614',
    '@media (max-width: 960px)': {
      fontSize: '13px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '12px !important',
      marginRight: '3px',
    },
  },
  hoverEffect: {
    '& $durationIcon': {
      transform: 'rotate(10deg)',
    },
    '& $bulletIcon': {
      transform: 'scale(1.1)',
      color: '#FFC614',
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

  // Display ALL topics instead of limiting to 4
  const displayTopics = topics;

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
        
        <Box className={classes.topicsContainer}>
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
        </Box>
        
        <Box className={classes.footer}>
          <Box className={classes.difficultyContainer}>
            <Typography className={classes.difficultyLabel}>Level:</Typography>
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