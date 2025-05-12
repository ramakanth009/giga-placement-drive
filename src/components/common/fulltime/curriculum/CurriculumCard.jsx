// src/components/common/fulltime/curriculum/CurriculumCard.jsx
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
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1) !important',
    },
  },
  cardScaled: {
    transform: 'scale(1.08)',
    zIndex: 2,
    boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.15) !important',
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
  },
  titleHover: {
    '&:after': {
      width: '100%',
    },
  },
  titleScaled: {
    fontSize: '26px !important',
    color: '#4A63E7 !important',
  },
  bulletList: {
    padding: 0,
    listStyleType: 'none',
    overflow: 'hidden',
    maxHeight: '295px',
  },
  bulletItem: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '4px 0 !important',
  },
  bulletIcon: {
    minWidth: '24px',
    color: '#4A63E7',
    marginTop: '3px',
    marginRight: '8px',
    fontSize: '18px !important',
    transition: 'transform 0.3s ease',
  },
  bulletText: {
    fontSize: '16px !important',
    color: '#666666 !important',
    transition: 'all 0.3s ease-in-out',
    margin: '0 !important',
  },
  bulletTextScaled: {
    fontSize: '18px !important',
    color: '#4A4A4A !important',
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
  },
  difficultyContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  difficultyLabel: {
    fontSize: '14px !important',
    color: '#999999 !important',
    marginRight: '10px !important',
  },
  difficultyDots: {
    display: 'flex',
    gap: '5px',
  },
  difficultyDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#E0E0E0',
    transition: 'all 0.3s ease',
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
  },
  durationIcon: {
    fontSize: '16px !important',
    marginRight: '5px',
    transition: 'transform 0.3s ease',
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