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
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';

const useStyles = makeStyles({
  testimonialSection: {
    padding: '30px 0',
    width: '100%',
    background: 'linear-gradient(135deg, #f8f9ff 0%, #f0f6ff 100%)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 960px)': {
      padding: '40px 0',
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
    '@media (max-width: 960px)': { display: 'none' },
  },

  floatingElement2: {
    top: '60%',
    right: '8%',
    width: '60px',
    height: '60px',
    animationDelay: '2s',
    '@media (max-width: 960px)': { display: 'none' },
  },

  floatingElement3: {
    bottom: '25%',
    left: '10%',
    width: '50px',
    height: '50px',
    animationDelay: '4s',
    '@media (max-width: 960px)': { display: 'none' },
  },

  mainContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  },

  contentBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    minHeight: '70vh',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      gap: '40px',
      textAlign: 'center',
    },
  },

  leftSection: {
    flex: 1,
    padding: '0 20px',
  },

  mainTitle: {
    fontSize: '3.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '30px !important',
    lineHeight: '1.1 !important',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '0',
      width: '80px',
      height: '5px',
      background: 'linear-gradient(90deg, #FFC614, #FFD700)',
      borderRadius: '3px',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.8rem !important',
      textAlign: 'center',
      '&::after': { left: '50%', transform: 'translateX(-50%)' },
    },
    '@media (max-width: 600px)': {
      fontSize: '2.2rem !important',
    },
  },

  descriptionBox: {
    background: 'linear-gradient(135deg, #2A2B6A 0%, #4A4C9B 100%)',
    color: 'white',
    padding: '35px 40px',
    borderRadius: '20px',
    marginBottom: '40px',
    boxShadow: '0 20px 50px rgba(42, 43, 106, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    transform: 'perspective(1000px) rotateY(5deg)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'perspective(1000px) rotateY(0deg) translateY(-5px)',
      boxShadow: '0 25px 60px rgba(42, 43, 106, 0.4)',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '5px',
      background: 'linear-gradient(90deg, #FFC614, #FFD700)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-50px',
      right: '-50px',
      width: '100px',
      height: '100px',
      background: 'radial-gradient(circle, rgba(255, 198, 20, 0.2) 0%, transparent 70%)',
      borderRadius: '50%',
    },
    '@media (max-width: 960px)': {
      transform: 'none',
      '&:hover': { transform: 'translateY(-5px)' },
    },
  },

  descriptionText: {
    fontSize: '1.25rem !important',
    lineHeight: '1.7 !important',
    fontWeight: '500 !important',
    margin: '0 !important',
    position: 'relative',
    zIndex: 1,
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
  },

  statsBox: {
    display: 'flex',
    gap: '25px',
    marginTop: '30px',
    '@media (max-width: 960px)': {
      justifyContent: 'center',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: '15px',
    },
  },

  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '15px 20px',
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '12px',
    border: '1px solid rgba(42, 43, 106, 0.1)',
    boxShadow: '0 8px 25px rgba(42, 43, 106, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 12px 30px rgba(42, 43, 106, 0.15)',
    },
  },

  statIcon: {
    width: '35px',
    height: '35px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 198, 20, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2A2B6A',
  },

  statText: {
    fontSize: '0.95rem !important',
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
    margin: '0 !important',
  },

  rightSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: '0 20px',
  },

  commentFormBox: {
    width: '100%',
    maxWidth: '500px',
  },

  commentCard: {
    padding: '40px !important',
    borderRadius: '24px !important',
    boxShadow: '0 25px 70px rgba(42, 43, 106, 0.2) !important',
    background: 'white !important',
    border: '1px solid rgba(42, 43, 106, 0.1) !important',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 30px 80px rgba(42, 43, 106, 0.25) !important',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '5px',
      background: 'linear-gradient(90deg, #2A2B6A, #4A4C9B, #FFC614)',
    },
    '@media (max-width: 960px)': {
      transform: 'none',
      '&:hover': { transform: 'translateY(-5px)' },
      padding: '30px 25px !important',
    },
  },

  formTitle: {
    fontSize: '1.6rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '10px !important',
    position: 'relative',
  },

  formField: {
    marginBottom: '10px !important',
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
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
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#2A2B6A',
    },
  },

  ratingBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5px',
    background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.03) 0%, rgba(255, 198, 20, 0.03) 100%)',
    borderRadius: '16px',
    border: '1px solid rgba(42, 43, 106, 0.1)',
  },

  ratingLabel: {
    fontSize: '1rem !important',
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
  },

  heartBox: {
    display: 'flex',
    gap: '8px',
  },

  heartButton: {
    padding: '8px !important',
    color: '#ddd !important',
    transition: 'all 0.3s ease !important',
    borderRadius: '50% !important',
    '&:hover': {
      transform: 'scale(1.3) rotate(15deg)',
      color: '#e91e63 !important',
      background: 'rgba(233, 30, 99, 0.1) !important',
    },
  },

  activeHeart: {
    color: '#e91e63 !important',
    background: 'rgba(233, 30, 99, 0.1) !important',
    animation: '$heartBeat 1s ease-in-out infinite',
  },

  submitBox: {
    textAlign: 'center',
    marginTop: '30px',
  },

  submitButton: {
    background: 'linear-gradient(45deg, #2A2B6A 0%, #4A4C9B 100%) !important',
    color: 'white !important',
    padding: '16px 45px !important',
    borderRadius: '50px !important',
    fontWeight: 'bold !important',
    fontSize: '1.1rem !important',
    transition: 'all 0.4s ease !important',
    boxShadow: '0 15px 35px rgba(42, 43, 106, 0.3) !important',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-3px) scale(1.05)',
      boxShadow: '0 20px 45px rgba(42, 43, 106, 0.4) !important',
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
  },

  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
    '50%': { transform: 'translateY(-20px) rotate(180deg)' },
  },

  '@keyframes heartBeat': {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.15)' },
  },
});

const TestimonialComponent = () => {
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
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSnackbar({
        open: true,
        message: 'Thank you! Your heartfelt review has been submitted successfully. ❤️',
        severity: 'success'
      });
      
      setFormData({ name: '', email: '', review: '', rating: 0 });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to submit review. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { icon: <VerifiedIcon />, text: 'Verified Reviews' },
    { icon: <TrendingUpIcon />, text: '94% Success Rate' }
  ];

  return (
    <Box className={classes.testimonialSection}>
      {/* Floating Elements */}
      <Box className={`${classes.floatingElement} ${classes.floatingElement1}`} />
      <Box className={`${classes.floatingElement} ${classes.floatingElement2}`} />
      <Box className={`${classes.floatingElement} ${classes.floatingElement3}`} />

      <Container className={classes.mainContainer}>
        <Box className={classes.contentBox}>
          {/* Left Section - Description */}
          <Box className={classes.leftSection}>
            <Typography variant="h1" className={classes.mainTitle}>
              Be the first to review
            </Typography>

            <Box className={classes.descriptionBox}>
              <Typography className={classes.descriptionText}>
                Unlike other platforms, we don't post fake reviews. Be the first to get featured with your honest feedback. Loved our curriculum? Just drop some ❤️ and share your valuable feedback!
              </Typography>
            </Box>

            <Box className={classes.statsBox}>
              {stats.map((stat, index) => (
                <Box key={index} className={classes.statItem}>
                  <Box className={classes.statIcon}>
                    {stat.icon}
                  </Box>
                  <Typography className={classes.statText}>
                    {stat.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right Section - Form */}
          <Box className={classes.rightSection}>
            <Box className={classes.commentFormBox}>
              <Paper className={classes.commentCard}>
                <Typography variant="h2" className={classes.formTitle}>
                  Share Your Experience
                </Typography>

                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={classes.formField}
                    variant="outlined"
                    required
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
                    rows={4}
                    placeholder="Tell us how our program impacted your career journey..."
                    required
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
                    >
                      {loading ? 'Submitting...' : 'Submit Review'}
                    </Button>
                  </Box>
                </form>
              </Paper>
            </Box>
          </Box>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
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