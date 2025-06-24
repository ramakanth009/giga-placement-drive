import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar, Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import { api, handleApiError } from '../../../services/api';

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
    transition: 'background 0.35s cubic-bezier(0.4, 0, 0.2, 1), border 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    minWidth: 'auto',
    fontWeight: '500 !important',
    fontSize: '0.8rem !important',
    textTransform: 'none !important',
    color: '#ffffff !important',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      transform: 'translateY(-2px) scale(1.04)',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.18)',
      border: '1.5px solid rgba(255, 255, 255, 0.3)',
      transition: 'background 0.35s cubic-bezier(0.4, 0, 0.2, 1), border 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '&:active': {
      transform: 'translateY(0) scale(1)',
      transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
      transform: 'none',
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
    transition: 'background 0.35s cubic-bezier(0.4, 0, 0.2, 1), border 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      backgroundColor: 'rgba(255, 71, 87, 0.2)',
      border: '1.5px solid rgba(255, 71, 87, 0.4)',
      '& $actionIcon': {
        color: '#ff4757',
        transition: 'color 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transition: 'background 0.35s cubic-bezier(0.4, 0, 0.2, 1), border 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  commentButton: {
    transition: 'background 0.35s cubic-bezier(0.4, 0, 0.2, 1), border 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      backgroundColor: 'rgba(255, 198, 20, 0.2)',
      border: '1.5px solid rgba(255, 198, 20, 0.4)',
      '& $actionIcon': {
        color: '#FFC614',
        transition: 'color 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transition: 'background 0.35s cubic-bezier(0.4, 0, 0.2, 1), border 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  loved: {
    backgroundColor: 'rgba(255, 71, 87, 0.2) !important',
    border: '1px solid rgba(255, 71, 87, 0.4) !important',
    '& $actionIcon': {
      color: '#ff4757 !important',
    },
  },
  commentDialog: {
    '& .MuiDialog-paper': {
      borderRadius: '16px',
      minWidth: '400px',
      '@media (max-width: 600px)': {
        minWidth: '90vw',
        margin: '20px',
      },
    },
  },
  commentTextField: {
    marginTop: '16px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      '&:hover fieldset': {
        borderColor: '#5C63AB',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5C63AB',
      },
    },
  },
  dialogActions: {
    padding: '16px 24px',
    gap: '8px',
  },
  cancelButton: {
    color: '#666666 !important',
    borderColor: '#cccccc !important',
    '&:hover': {
      borderColor: '#999999 !important',
      backgroundColor: 'rgba(102, 102, 102, 0.04) !important',
    },
  },
  submitCommentButton: {
    backgroundColor: '#5C63AB !important',
    color: 'white !important',
    '&:hover': {
      backgroundColor: '#4A4E96 !important',
    },
    '&:disabled': {
      backgroundColor: '#cccccc !important',
    },
  },
});

const EnhancedEngagementSection = ({ 
  programId = 'fullstack', // Default to fullstack, can be 'fullstack', 'datascience', or 'placement'
  onLoveClick, 
  onCommentClick 
}) => {
  const classes = useStyles();
  const [loved, setLoved] = useState(false);
  const [commentDialogOpen, setCommentDialogOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [isSubmittingLike, setIsSubmittingLike] = useState(false);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });

  const handleLoveClick = async () => {
    if (isSubmittingLike) return;

    setIsSubmittingLike(true);
    try {
      const result = await api.program.likeProgram(programId);
      setLoved(!loved);
      setSnackbar({
        open: true,
        message: loved ? 'Like removed!' : `Thanks for loving our ${programId} program! ❤️`,
        severity: 'success'
      });

      // Call optional callback
      if (onLoveClick) {
        onLoveClick(result.data);
      }
    } catch (error) {
      const errorInfo = handleApiError(error);
      setSnackbar({
        open: true,
        message: errorInfo.message || 'Failed to update like. Please try again.',
        severity: 'error'
      });
      console.error('Like error:', errorInfo);
    } finally {
      setIsSubmittingLike(false);
    }
  };

  const handleCommentClick = () => {
    setCommentDialogOpen(true);
    
    // Call optional callback
    if (onCommentClick) {
      onCommentClick();
    }
  };

  const handleCommentSubmit = async () => {
    if (!comment.trim() || isSubmittingComment) return;

    setIsSubmittingComment(true);
    try {
      const result = await api.program.submitComment(programId, comment.trim());
      setSnackbar({
        open: true,
        message: 'Thank you for sharing your thoughts! Your comment has been submitted.',
        severity: 'success'
      });
      setCommentDialogOpen(false);
      setComment('');
    } catch (error) {
      const errorInfo = handleApiError(error);
      setSnackbar({
        open: true,
        message: errorInfo.message || 'Failed to submit comment. Please try again.',
        severity: 'error'
      });
      console.error('Comment error:', errorInfo);
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const handleCommentCancel = () => {
    setCommentDialogOpen(false);
    setComment('');
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const getProgramDisplayName = (id) => {
    const names = {
      fullstack: 'Full-Stack Development',
      datascience: 'Data Science',
      placement: 'Placement Program'
    };
    return names[id] || 'Program';
  };

  return (
    <>
      <Box className={classes.engagementContainer}>
        <Box className={classes.textContent}>
          <Typography className={classes.engagementText}>
            If you love our {getProgramDisplayName(programId).toLowerCase()} curriculum, just drop a love and share what you find exciting
          </Typography>
        </Box>
        
        <Box className={classes.actionsContainer}>
          <Button
            className={`${classes.actionButton} ${classes.loveButton} ${loved ? classes.loved : ''}`}
            onClick={handleLoveClick}
            disabled={isSubmittingLike}
            disableRipple
          >
            {loved ? (
              <FavoriteIcon className={classes.actionIcon} />
            ) : (
              <FavoriteBorderIcon className={classes.actionIcon} />
            )}
            {isSubmittingLike ? '...' : 'Like'}
          </Button>
          
          <Button
            className={`${classes.actionButton} ${classes.commentButton}`}
            onClick={handleCommentClick}
            disableRipple
          >
            <CommentIcon className={classes.actionIcon} />
            Comment
          </Button>
        </Box>
      </Box>

      {/* Comment Dialog */}
      <Dialog
        open={commentDialogOpen}
        onClose={handleCommentCancel}
        className={classes.commentDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Share Your Thoughts on {getProgramDisplayName(programId)}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Tell us what excites you about our curriculum! Your feedback helps us improve and helps other students make informed decisions.
          </Typography>
          <TextField
            className={classes.commentTextField}
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="What aspects of the curriculum do you find most interesting? Any specific technologies or projects that caught your attention?"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            disabled={isSubmittingComment}
            inputProps={{ maxLength: 500 }}
            helperText={`${comment.length}/500 characters`}
          />
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            onClick={handleCommentCancel}
            variant="outlined"
            className={classes.cancelButton}
            disabled={isSubmittingComment}
          >
            Cancel
          </Button>
          <Button
            onClick={handleCommentSubmit}
            variant="contained"
            className={classes.submitCommentButton}
            disabled={!comment.trim() || isSubmittingComment}
            startIcon={<SendIcon />}
          >
            {isSubmittingComment ? 'Submitting...' : 'Submit Comment'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default EnhancedEngagementSection;