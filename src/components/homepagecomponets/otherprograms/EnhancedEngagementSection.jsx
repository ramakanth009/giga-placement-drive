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
    marginTop: '15px',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 600px)': {
      marginTop: '10px',
    },
  },
  highlightedText: {
    fontSize: '0.9rem !important',
    color: '#FFC614 !important',
    fontWeight: '600 !important',
    textAlign: 'center',
    padding: '8px 15px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 198, 20, 0.15)',
    border: '1px solid rgba(255, 198, 20, 0.3)',
    marginBottom: '10px !important',
    maxWidth: '90%',
    position: 'relative',
    animation: '$glow 2.5s infinite alternate',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
      padding: '6px 12px',
      marginBottom: '8px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem !important',
      padding: '5px 10px',
      marginBottom: '6px !important',
    },
  },
  decorativeStars: {
    position: 'absolute',
    top: '-6px',
    right: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
  },
  starIcon: {
    color: '#FFC614',
    fontSize: '14px !important',
    animation: '$spin 8s linear infinite',
    '@media (max-width: 600px)': {
      fontSize: '12px !important',
    },
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '5px',
    flexWrap: 'wrap',
    '@media (max-width: 600px)': {
      gap: '15px',
    },
  },
  engagementActions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    '@media (max-width: 600px)': {
      gap: '12px',
    },
  },
  actionButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      transform: 'translateY(-3px)',
    },
  },
  actionIcon: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '20px !important',
    transition: 'all 0.2s ease',
    '@media (max-width: 600px)': {
      fontSize: '18px !important',
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
    fontSize: '0.75rem !important',
    color: 'rgba(255, 255, 255, 0.7) !important',
    '@media (max-width: 480px)': {
      fontSize: '0.7rem !important',
    },
  },
  interestedCount: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'rgba(255, 198, 20, 0.15)',
    padding: '6px 12px',
    borderRadius: '15px',
  },
  countIcon: {
    color: '#FFC614',
    fontSize: '16px !important',
  },
  countText: {
    color: '#FFC614 !important',
    fontSize: '0.8rem !important',
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