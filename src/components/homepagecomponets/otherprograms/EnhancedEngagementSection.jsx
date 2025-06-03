import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';

const useStyles = makeStyles({
  engagementContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '25px',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 600px)': {
      marginTop: '20px',
    },
  },
  highlightedText: {
    fontSize: '1rem !important',
    color: '#FFC614 !important',
    fontWeight: '600 !important',
    textAlign: 'center',
    padding: '10px 20px',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 198, 20, 0.15)',
    border: '1px solid rgba(255, 198, 20, 0.3)',
    marginBottom: '15px !important',
    maxWidth: '85%',
    position: 'relative',
    animation: '$glow 2.5s infinite alternate',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      padding: '8px 15px',
      marginBottom: '12px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.85rem !important',
      padding: '7px 12px',
      marginBottom: '10px !important',
    },
  },
  decorativeStars: {
    position: 'absolute',
    top: '-8px',
    right: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    '@media (max-width: 600px)': {
      top: '-7px',
      right: '12px',
    },
  },
  starIcon: {
    color: '#FFC614',
    fontSize: '16px !important',
    animation: '$spin 8s linear infinite',
    '@media (max-width: 600px)': {
      fontSize: '14px !important',
    },
  },
  engagementActions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '5px',
    '@media (max-width: 600px)': {
      gap: '15px',
      flexWrap: 'wrap',
    },
    '@media (max-width: 480px)': {
      gap: '12px',
    },
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    marginTop: '5px',
    flexWrap: 'wrap',
    '@media (max-width: 600px)': {
      gap: '20px',
    },
  },
  actionButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  actionIcon: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '24px !important',
    transition: 'all 0.3s ease',
    '@media (max-width: 600px)': {
      fontSize: '22px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '20px !important',
    },
  },
  loveIcon: {
    '&:hover': {
      color: '#ff4757',
    },
  },
  commentIcon: {
    '&:hover': {
      color: '#FFC614',
    },
  },
  actionText: {
    fontSize: '0.8rem !important',
    color: 'rgba(255, 255, 255, 0.7) !important',
    transition: 'color 0.3s ease',
    '@media (max-width: 480px)': {
      fontSize: '0.75rem !important',
    },
  },
  interestedCount: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(255, 198, 20, 0.15)',
    padding: '8px 15px',
    borderRadius: '20px',
  },
  countIcon: {
    color: '#FFC614',
    fontSize: '20px !important',
  },
  countText: {
    color: '#FFC614 !important',
    fontSize: '0.9rem !important',
    fontWeight: '600 !important',
  },
  '@keyframes glow': {
    '0%': {
      boxShadow: '0 0 5px rgba(255, 198, 20, 0.3)',
    },
    '100%': {
      boxShadow: '0 0 20px rgba(255, 198, 20, 0.6)',
    },
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
});

const EnhancedEngagementSection = ({ onLoveClick, onCommentClick }) => {
  const classes = useStyles();
  const [loved, setLoved] = React.useState(false);

  const handleLoveClick = () => {
    setLoved(!loved);
    if (onLoveClick) onLoveClick();
  };

  return (
    <Box className={classes.engagementContainer}>
      <Typography className={classes.highlightedText}>
        If you love our curriculum, just drop a love and share what you find exciting
        <Box className={classes.decorativeStars}>
          <StarIcon className={classes.starIcon} style={{ animationDelay: '0s' }} />
          <StarIcon className={classes.starIcon} style={{ animationDelay: '0.2s' }} />
          <StarIcon className={classes.starIcon} style={{ animationDelay: '0.4s' }} />
        </Box>
      </Typography>
      
      <Box className={classes.actionsContainer}>
        <Box className={classes.engagementActions}>
          <Box className={classes.actionButton} onClick={handleLoveClick}>
            {loved ? (
              <FavoriteIcon className={`${classes.actionIcon} ${classes.loveIcon}`} style={{ color: '#ff4757' }} />
            ) : (
              <FavoriteBorderIcon className={`${classes.actionIcon} ${classes.loveIcon}`} />
            )}
            <Typography className={classes.actionText}>Love</Typography>
          </Box>
          
          <Box className={classes.actionButton} onClick={onCommentClick}>
            <CommentIcon className={`${classes.actionIcon} ${classes.commentIcon}`} />
            <Typography className={classes.actionText}>Comment</Typography>
          </Box>
        </Box>

        <Box className={classes.interestedCount}>
          <PeopleIcon className={classes.countIcon} />
          <Typography className={classes.countText}>
            Interested Students - 2584
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EnhancedEngagementSection;