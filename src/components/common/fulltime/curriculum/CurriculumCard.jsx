// src/components/common/fulltime/curriculum/CurriculumCard.jsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const useStyles = makeStyles({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    padding: '20px',
    width: '400px',
    height: '350px',
    position: 'relative',
    transition: 'all 0.3s ease-in-out',
    marginRight: '24px',
    flex: '0 0 auto',
  },
  cardScaled: {
    transform: 'scale(1.08)',
    zIndex: 2,
    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
  },
  numberCircle: {
    position: 'absolute',
    top: '-30px',
    left: '20px',
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #8B5CF6 0%, #4A3B81 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '48px',
  },
  topicIcon: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '32px',
    color: '#4A63E7',
  },
  title: {
    fontSize: '24px !important',
    fontWeight: 'bold !important',
    color: '#4A4A4A !important',
    marginTop: '35px !important',
    marginBottom: '20px !important',
    transition: 'all 0.3s ease-in-out',
  },
  titleScaled: {
    fontSize: '26px !important',
  },
  bulletList: {
    padding: 0,
    listStyleType: 'disc',
    marginLeft: '20px',
  },
  bulletItem: {
    display: 'list-item',
    padding: '4px 0 !important',
    fontSize: '16px',
  },
  bulletText: {
    fontSize: '16px !important',
    color: '#666666 !important',
    transition: 'all 0.3s ease-in-out',
    margin: '0 !important',
  },
  bulletTextScaled: {
    fontSize: '18px !important',
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
  },
  difficultyDotActive: {
    backgroundColor: '#4A63E7',
  },
  duration: {
    display: 'flex',
    alignItems: 'center',
    color: '#999999',
    fontSize: '14px',
  },
  durationIcon: {
    fontSize: '16px !important',
    marginRight: '5px',
  },
});

const CurriculumCard = ({ 
  number, 
  title, 
  topics = [], 
  difficulty = 1, 
  duration = "2 weeks", 
  icon,
  isScaled = false 
}) => {
  const classes = useStyles();

  // Show only first 4 topics
  const displayTopics = topics.slice(0, 4);

  return (
    <Box className={`${classes.card} ${isScaled ? classes.cardScaled : ''}`}>
      <Box className={classes.numberCircle}>{number}</Box>
      <Box className={classes.topicIcon}>{icon}</Box>
      
      <Typography className={`${classes.title} ${isScaled ? classes.titleScaled : ''}`}>
        {title}
      </Typography>
      
      <List className={classes.bulletList}>
        {displayTopics.map((topic, index) => (
          <ListItem key={index} className={classes.bulletItem}>
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
  );
};

export default CurriculumCard;