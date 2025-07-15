import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  TextField, 
  Button,
  Paper,
  Snackbar,
  Alert,
  IconButton
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';

// Import the API
import { api, handleApiError } from '../../../services/api';

const useStyles = makeStyles({
  testimonialSection: {
    padding: '50px 0',
    width: '100%',
    background: 'linear-gradient(135deg, #f8f9ff 0%, #f0f6ff 100%)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    minHeight: '70vh',
    '@media (max-width: 1200px)': {
      padding: '40px 0',
      minHeight: '65vh',
    },
    '@media (max-width: 960px)': {
      padding: '35px 0',
      minHeight: '60vh',
    },
    '@media (max-width: 600px)': {
      padding: '30px 0',
      minHeight: '55vh',
    },
    '@media (max-width: 480px)': {
      padding: '25px 0',
      minHeight: '50vh',
    },
    '@media (max-width: 375px)': {
      padding: '20px 0',
      minHeight: '45vh',
    },
  },

  floatingElement: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.1) 0%, rgba(255, 198, 20, 0.1) 100%)',
    animation: '$float 6s ease-in-out infinite',
    zIndex: 1,
  },

  floatingElement1: {
    top: '15%',
    left: '5%',
    width: '80px',
    height: '80px',
    animationDelay: '0s',
    '@media (max-width: 1200px)': {
      width: '70px',
      height: '70px',
    },
    '@media (max-width: 960px)': { 
      display: 'none' 
    },
  },

  floatingElement2: {
    top: '60%',
    right: '8%',
    width: '60px',
    height: '60px',
    animationDelay: '2s',
    '@media (max-width: 1200px)': {
      width: '50px',
      height: '50px',
    },
    '@media (max-width: 960px)': { 
      display: 'none' 
    },
  },

  floatingElement3: {
    bottom: '25%',
    left: '10%',
    width: '50px',
    height: '50px',
    animationDelay: '4s',
    '@media (max-width: 1200px)': {
      width: '40px',
      height: '40px',
    },
    '@media (max-width: 960px)': { 
      display: 'none' 
    },
  },

  mainContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      maxWidth: '1000px',
      padding: '0 20px',
    },
    '@media (max-width: 960px)': {
      maxWidth: '800px',
      padding: '0 15px',
    },
    '@media (max-width: 600px)': {
      padding: '0 10px',
    },
    '@media (max-width: 480px)': {
      padding: '0 8px',
    },
    '@media (max-width: 375px)': {
      padding: '0 5px',
    },
  },

  contentBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '50px',
    '@media (max-width: 1200px)': {
      gap: '40px',
    },
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      gap: '30px',
      textAlign: 'center',
    },
    '@media (max-width: 600px)': {
      gap: '25px',
    },
    '@media (max-width: 480px)': {
      gap: '20px',
    },
    '@media (max-width: 375px)': {
      gap: '15px',
    },
  },

  leftSection: {
    flex: 1,
    padding: '40px 15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '420px',
    '@media (max-width: 1200px)': {
      padding: '35px 10px',
      minHeight: '380px',
    },
    '@media (max-width: 960px)': {
      padding: '30px 0',
      minHeight: '340px',
    },
    '@media (max-width: 600px)': {
      padding: '25px 0',
      minHeight: '300px',
    },
    '@media (max-width: 480px)': {
      padding: '20px 0',
      minHeight: '260px',
    },
  },

  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '35px',
    justifyContent: 'center',
    width: '100%',
    '@media (max-width: 1200px)': {
      marginBottom: '30px',
      gap: '12px',
    },
    '@media (max-width: 960px)': {
      justifyContent: 'center',
      marginBottom: '25px',
      gap: '10px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '20px',
      gap: '8px',
      flexDirection: 'column',
    },
    '@media (max-width: 480px)': {
      marginBottom: '15px',
      gap: '6px',
    },
  },

  mainTitle: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    lineHeight: '1.1 !important',
    position: 'relative',
    margin: '0 !important',
    '@media (max-width: 1200px)': {
      fontSize: '2.5rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
      '&::after': { 
        left: '50%', 
        transform: 'translateX(-50%)',
        width: '50px',
      },
    },
    '@media (max-width: 600px)': {
      fontSize: '1.9rem !important',
      '&::after': { 
        left: '50%', 
        transform: 'translateX(-50%)',
      },
    },
    '@media (max-width: 480px)': {
      fontSize: '1.7rem !important',
      '&::after': { 
        width: '40px',
        height: '3px',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '1.5rem !important',
    },
  },

  bigLoveIcon: {
    color: '#e91e63',
    fontSize: '4rem !important',
    animation: '$heartBeat 2s ease-in-out infinite',
    filter: 'drop-shadow(0 8px 20px rgba(233, 30, 99, 0.3))',
    '@media (max-width: 1200px)': {
      fontSize: '3.5rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '3rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2.5rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '2rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.8rem !important',
    },
  },

  descriptionBox: {
    background: 'linear-gradient(135deg, #2A2B6A 0%, #4A4C9B 100%)',
    color: 'white',
    padding: '45px 40px',
    borderRadius: '16px',
    marginBottom: '35px',
    boxShadow: '0 15px 40px rgba(42, 43, 106, 0.25)',
    position: 'relative',
    overflow: 'hidden',
    transform: 'perspective(1000px) rotateY(3deg)',
    transition: 'all 0.3s ease',
    minHeight: '220px',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      transform: 'perspective(1000px) rotateY(0deg) translateY(-3px)',
      boxShadow: '0 18px 45px rgba(42, 43, 106, 0.3)',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '4px',
      background: 'linear-gradient(90deg, #FFC614, #FFD700)',
    },
    '@media (max-width: 1200px)': {
      padding: '40px 35px',
      marginBottom: '30px',
      minHeight: '200px',
    },
    '@media (max-width: 960px)': {
      transform: 'none',
      padding: '35px 30px',
      marginBottom: '25px',
      minHeight: '180px',
      '&:hover': { transform: 'translateY(-3px)' },
    },
    '@media (max-width: 600px)': {
      padding: '30px 25px',
      marginBottom: '20px',
      borderRadius: '12px',
      minHeight: '160px',
    },
    '@media (max-width: 480px)': {
      padding: '25px 20px',
      marginBottom: '18px',
      minHeight: '140px',
    },
    '@media (max-width: 375px)': {
      padding: '20px 18px',
      marginBottom: '15px',
      minHeight: '120px',
    },
  },

  descriptionText: {
    fontSize: '1.25rem !important',
    lineHeight: '1.7 !important',
    fontWeight: '500 !important',
    margin: '0 !important',
    position: 'relative',
    zIndex: 1,
    '@media (max-width: 1200px)': {
      fontSize: '1.2rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.15rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
      lineHeight: '1.6 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.95rem !important',
    },
  },

  statsBox: {
    display: 'flex',
    gap: '30px',
    marginTop: '30px',
    '@media (max-width: 1200px)': {
      gap: '25px',
      marginTop: '25px',
    },
    '@media (max-width: 960px)': {
      justifyContent: 'center',
      gap: '20px',
      marginTop: '20px',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: '18px',
      marginTop: '18px',
    },
    '@media (max-width: 480px)': {
      gap: '15px',
      marginTop: '15px',
    },
    '@media (max-width: 375px)': {
      gap: '12px',
      marginTop: '12px',
    },
  },

  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '18px 24px',
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '12px',
    border: '1px solid rgba(42, 43, 106, 0.1)',
    boxShadow: '0 8px 25px rgba(42, 43, 106, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 12px 30px rgba(42, 43, 106, 0.15)',
    },
    '@media (max-width: 1200px)': {
      padding: '15px 20px',
      gap: '10px',
    },
    '@media (max-width: 600px)': {
      padding: '12px 18px',
      gap: '8px',
    },
    '@media (max-width: 480px)': {
      padding: '10px 15px',
      gap: '7px',
    },
    '@media (max-width: 375px)': {
      padding: '8px 12px',
      gap: '6px',
    },
  },

  statIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 198, 20, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2A2B6A',
    '@media (max-width: 1200px)': {
      width: '35px',
      height: '35px',
    },
    '@media (max-width: 600px)': {
      width: '30px',
      height: '30px',
    },
    '@media (max-width: 480px)': {
      width: '28px',
      height: '28px',
    },
    '@media (max-width: 375px)': {
      width: '25px',
      height: '25px',
    },
  },

  statText: {
    fontSize: '1.05rem !important',
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
    margin: '0 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
    },
  },

  rightSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: '0 15px',
    '@media (max-width: 1200px)': {
      padding: '0 10px',
    },
    '@media (max-width: 960px)': {
      padding: '0',
    },
  },

  commentFormBox: {
    width: '100%',
    maxWidth: '380px',
    '@media (max-width: 1200px)': {
      maxWidth: '350px',
    },
    '@media (max-width: 600px)': {
      maxWidth: '100%',
    },
  },

  commentCard: {
    padding: '20px !important',
    borderRadius: '16px !important',
    boxShadow: '0 15px 45px rgba(42, 43, 106, 0.12) !important',
    background: 'white !important',
    border: '1px solid rgba(42, 43, 106, 0.1) !important',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 18px 50px rgba(42, 43, 106, 0.15) !important',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '3px',
      background: 'linear-gradient(90deg, #2A2B6A, #4A4C9B, #FFC614)',
    },
    '@media (max-width: 1200px)': {
      padding: '18px !important',
    },
    '@media (max-width: 960px)': {
      transform: 'none',
      '&:hover': { transform: 'translateY(-2px)' },
      padding: '16px !important',
    },
    '@media (max-width: 600px)': {
      padding: '14px !important',
      borderRadius: '12px !important',
    },
    '@media (max-width: 480px)': {
      padding: '12px !important',
    },
    '@media (max-width: 375px)': {
      padding: '10px !important',
    },
  },

  formTitle: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '15px !important',
    position: 'relative',
    '@media (max-width: 1200px)': {
      fontSize: '1.1rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
      marginBottom: '6px !important',
    },
  },

  formField: {
    marginBottom: '12px !important',
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      fontSize: '0.85rem',
      transition: 'all 0.3s ease',
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#4A4C9B',
        boxShadow: '0 0 0 1px rgba(74, 76, 155, 0.1)',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#2A2B6A',
        borderWidth: '2px',
        boxShadow: '0 0 0 3px rgba(42, 43, 106, 0.1)',
      },
    },
    '& .MuiInputLabel-root': {
      fontSize: '0.85rem',
      '&.Mui-focused': {
        color: '#2A2B6A',
      },
    },
    '@media (max-width: 1200px)': {
      marginBottom: '10px !important',
    },
    '@media (max-width: 600px)': {
      marginBottom: '8px !important',
      '& .MuiOutlinedInput-root': {
        fontSize: '0.8rem',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.8rem',
      },
    },
    '@media (max-width: 480px)': {
      marginBottom: '6px !important',
      '& .MuiOutlinedInput-root': {
        fontSize: '0.75rem',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.75rem',
      },
    },
    '@media (max-width: 375px)': {
      marginBottom: '5px !important',
      '& .MuiOutlinedInput-root': {
        fontSize: '0.7rem',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.7rem',
      },
    },
  },

  ratingBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px',
    background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.03) 0%, rgba(255, 198, 20, 0.03) 100%)',
    borderRadius: '8px',
    border: '1px solid rgba(42, 43, 106, 0.1)',
    marginBottom: '15px',
    '@media (max-width: 1200px)': {
      padding: '6px',
      marginBottom: '12px',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: '6px',
      padding: '5px',
      marginBottom: '10px',
    },
    '@media (max-width: 480px)': {
      padding: '4px',
      marginBottom: '8px',
    },
    '@media (max-width: 375px)': {
      padding: '3px',
      marginBottom: '6px',
    },
  },

  ratingLabel: {
    fontSize: '0.8rem !important',
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.75rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.65rem !important',
    },
  },

  heartBox: {
    display: 'flex',
    gap: '4px',
    '@media (max-width: 480px)': {
      gap: '3px',
    },
    '@media (max-width: 375px)': {
      gap: '2px',
    },
  },

  heartButton: {
    padding: '4px !important',
    color: '#ddd !important',
    transition: 'all 0.3s ease !important',
    borderRadius: '50% !important',
    '&:hover': {
      transform: 'scale(1.15) rotate(8deg)',
      color: '#e91e63 !important',
      background: 'rgba(233, 30, 99, 0.1) !important',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '1rem',
    },
    '@media (max-width: 600px)': {
      padding: '3px !important',
      '& .MuiSvgIcon-root': {
        fontSize: '0.9rem',
      },
    },
    '@media (max-width: 480px)': {
      padding: '2px !important',
      '& .MuiSvgIcon-root': {
        fontSize: '0.8rem',
      },
    },
    '@media (max-width: 375px)': {
      padding: '1px !important',
      '& .MuiSvgIcon-root': {
        fontSize: '0.7rem',
      },
    },
  },

  activeHeart: {
    color: '#e91e63 !important',
    background: 'rgba(233, 30, 99, 0.1) !important',
    animation: '$heartBeat 1s ease-in-out infinite',
  },

  submitBox: {
    textAlign: 'center',
    marginTop: '12px',
    '@media (max-width: 1200px)': {
      marginTop: '10px',
    },
    '@media (max-width: 600px)': {
      marginTop: '8px',
    },
    '@media (max-width: 480px)': {
      marginTop: '6px',
    },
    '@media (max-width: 375px)': {
      marginTop: '5px',
    },
  },

  submitButton: {
    background: 'linear-gradient(45deg, #2A2B6A 0%, #4A4C9B 100%) !important',
    color: 'white !important',
    padding: '8px 25px !important',
    borderRadius: '20px !important',
    fontWeight: 'bold !important',
    fontSize: '0.8rem !important',
    transition: 'all 0.4s ease !important',
    boxShadow: '0 8px 20px rgba(42, 43, 106, 0.2) !important',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-1px) scale(1.02)',
      boxShadow: '0 10px 25px rgba(42, 43, 106, 0.25) !important',
    },
    '&:disabled': {
      opacity: '0.7 !important',
      transform: 'none !important',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
      transition: 'left 0.5s ease',
    },
    '&:hover::before': {
      left: '100%',
    },
    '@media (max-width: 1200px)': {
      padding: '6px 20px !important',
      fontSize: '0.75rem !important',
    },
    '@media (max-width: 600px)': {
      padding: '5px 18px !important',
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 480px)': {
      padding: '4px 15px !important',
      fontSize: '0.65rem !important',
    },
    '@media (max-width: 375px)': {
      padding: '3px 12px !important',
      fontSize: '0.6rem !important',
    },
  },

  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
    '50%': { transform: 'translateY(-15px) rotate(180deg)' },
  },

  '@keyframes heartBeat': {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
  },
});

const TestimonialComponent = ({ submitButtonTitle = "" }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
    rating: 0
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleHeartClick = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.review || formData.rating === 0) {
      setSnackbar({
        open: true,
        message: 'Please fill in all fields and show your love with a rating ❤️',
        severity: 'error'
      });
      return;
    }

    setLoading(true);
    
    try {
      // Map form data to API structure
      const reviewData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        feedback: formData.review.trim(),
        love_rating: formData.rating
      };

      const result = await api.reviews.submitReview(reviewData);
      
      setSnackbar({
        open: true,
        message: result.data.message || 'Thank you! Your heartfelt review has been submitted successfully. ❤️',
        severity: 'success'
      });
      
      // Reset form
      setFormData({ name: '', email: '', review: '', rating: 0 });
    } catch (error) {
      const errorInfo = handleApiError(error);
      setSnackbar({
        open: true,
        message: errorInfo.message || 'Failed to submit review. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box className={classes.testimonialSection}>
      {/* Floating Elements */}
      <Box className={`${classes.floatingElement} ${classes.floatingElement1}`} />
      <Box className={`${classes.floatingElement} ${classes.floatingElement2}`} />
      <Box className={`${classes.floatingElement} ${classes.floatingElement3}`} />

      <Container className={classes.mainContainer}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.mainTitle}>
            Be the first to review
          </Typography>
          <FavoriteIcon className={classes.bigLoveIcon} />
        </Box>

        <Box className={classes.contentBox}>
          {/* Left Section - Description */}
          <Box className={classes.leftSection}>
            <Box className={classes.descriptionBox}>
              <Typography className={classes.descriptionText}>
                Unlike other platforms, we don't post fake reviews. Be the first to get featured with your honest feedback. Loved our curriculum? Just drop some ❤️ and share your valuable feedback!
              </Typography>
            </Box>
          </Box>

          {/* Right Section - Form */}
          <Box className={classes.rightSection}>
            <Box className={classes.commentFormBox}>
              <Paper className={classes.commentCard}>
                <Typography variant="h2" className={classes.formTitle}>
                  Share Your Experience
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={classes.formField}
                    variant="outlined"
                    required
                    inputProps={{ maxLength: 128 }}
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={classes.formField}
                    variant="outlined"
                    required
                  />
                  
                  <TextField
                    fullWidth
                    label="Your Honest Feedback"
                    name="review"
                    value={formData.review}
                    onChange={handleInputChange}
                    className={classes.formField}
                    variant="outlined"
                    multiline
                    rows={2}
                    placeholder="Tell us how our program impacted your career journey..."
                    required
                    inputProps={{ minLength: 10 }}
                  />
                  
                  <Box className={classes.ratingBox}>
                    <Typography className={classes.ratingLabel}>
                      Show Your Love
                    </Typography>
                    <Box className={classes.heartBox}>
                      {[1, 2, 3, 4, 5].map((heart) => (
                        <IconButton
                          key={heart}
                          onClick={() => handleHeartClick(heart)}
                          className={`${classes.heartButton} ${
                            heart <= formData.rating ? classes.activeHeart : ''
                          }`}
                          disableRipple
                          size="small"
                        >
                          {heart <= formData.rating ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                      ))}
                    </Box>
                  </Box>

                  <Box className={classes.submitBox}>
                    <Button
                      type="submit"
                      className={classes.submitButton}
                      disabled={loading}
                      startIcon={<SendIcon />}
                      title={submitButtonTitle}
                    >
                      {loading ? 'Submitting...' : 'Submit Review'}
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            variant="filled"
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default TestimonialComponent;