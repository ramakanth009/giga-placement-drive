import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';

const useStyles = makeStyles({
  engagementContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'linear-gradient(135deg, #5C63AB 0%, #4A4E96 50%, #3A3D7A 100%)',
    borderRadius: '20px',
    padding: '16px 20px',
    margin: '15px 0',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(92, 99, 171, 0.3)',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      borderRadius: '20px',
    },
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '12px',
      padding: '14px 16px',
      borderRadius: '16px',
    },
    '@media (max-width: 480px)': {
      padding: '12px 14px',
      borderRadius: '14px',
      margin: '12px 0',
    },
  },
  textContent: {
    flex: 1,
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  engagementText: {
    fontSize: '0.9rem !important',
    color: '#ffffff !important',
    fontWeight: '500 !important',
    lineHeight: '1.4 !important',
    margin: 0,
    '@media (max-width: 960px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 768px)': {
      fontSize: '0.8rem !important',
      lineHeight: '1.3 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.75rem !important',
    },
  },
  actionsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 768px)': {
      width: '100%',
      justifyContent: 'flex-end',
    },
    '@media (max-width: 480px)': {
      gap: '8px',
    },
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    borderRadius: '25px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    minWidth: 'auto',
    fontWeight: '500 !important',
    fontSize: '0.8rem !important',
    textTransform: 'none !important',
    color: '#ffffff !important',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
    '@media (max-width: 960px)': {
      padding: '7px 14px',
      fontSize: '0.75rem !important',
      gap: '5px',
    },
    '@media (max-width: 768px)': {
      padding: '6px 12px',
      fontSize: '0.7rem !important',
      borderRadius: '20px',
    },
    '@media (max-width: 480px)': {
      padding: '5px 10px',
      fontSize: '0.65rem !important',
      gap: '4px',
    },
  },
  actionIcon: {
    fontSize: '16px !important',
    transition: 'all 0.3s ease',
    '@media (max-width: 960px)': {
      fontSize: '15px !important',
    },
    '@media (max-width: 768px)': {
      fontSize: '14px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '13px !important',
    },
  },
  loveButton: {
    '&:hover': {
      backgroundColor: 'rgba(255, 71, 87, 0.2)',
      border: '1px solid rgba(255, 71, 87, 0.4)',
      '& $actionIcon': {
        color: '#ff4757',
      },
    },
  },
  commentButton: {
    '&:hover': {
      backgroundColor: 'rgba(255, 198, 20, 0.2)',
      border: '1px solid rgba(255, 198, 20, 0.4)',
      '& $actionIcon': {
        color: '#FFC614',
      },
    },
  },
  loved: {
    backgroundColor: 'rgba(255, 71, 87, 0.2) !important',
    border: '1px solid rgba(255, 71, 87, 0.4) !important',
    '& $actionIcon': {
      color: '#ff4757 !important',
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
      <Box className={classes.textContent}>
        <Typography className={classes.engagementText}>
          If you love our curriculum, just drop a love and share what you find exciting
        </Typography>
      </Box>
      
      <Box className={classes.actionsContainer}>
        <Button
          className={`${classes.actionButton} ${classes.loveButton} ${loved ? classes.loved : ''}`}
          onClick={handleLoveClick}
          disableRipple
        >
          {loved ? (
            <FavoriteIcon className={classes.actionIcon} />
          ) : (
            <FavoriteBorderIcon className={classes.actionIcon} />
          )}
          Like
        </Button>
        
        <Button
          className={`${classes.actionButton} ${classes.commentButton}`}
          onClick={onCommentClick}
          disableRipple
        >
          <CommentIcon className={classes.actionIcon} />
          Comment
        </Button>
      </Box>
    </Box>
  );
};

export default EnhancedEngagementSection;