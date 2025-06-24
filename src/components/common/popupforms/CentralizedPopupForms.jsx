
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Slide,
  IconButton
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WorkIcon from '@mui/icons-material/Work';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  dialogPaper: {
    borderRadius: '16px',
    overflow: 'hidden',
    maxWidth: '500px',
    width: '100%',
    margin: '16px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      zIndex: 1
    }
  },
  dialogContent: {
    position: 'relative',
    zIndex: 2,
    padding: '24px',
    background: 'rgba(255, 255, 255, 0.95)',
    color: '#333',
    borderRadius: '12px',
    margin: '16px',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
  },
  title: {
    position: 'relative',
    zIndex: 2,
    padding: '20px 24px 8px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: 'white',
    fontWeight: 700,
    fontSize: '1.5rem'
  },
  closeButton: {
    position: 'absolute',
    right: '16px',
    top: '16px',
    zIndex: 3,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      transform: 'scale(1.1)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
    }
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: 'white',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      },
      '&.Mui-focused': {
        backgroundColor: 'white',
        boxShadow: '0 6px 20px rgba(102, 126, 234, 0.3)'
      }
    },
    '& .MuiInputLabel-root': {
      fontWeight: 500
    }
  },
  selectField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: 'white',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      },
      '&.Mui-focused': {
        backgroundColor: 'white',
        boxShadow: '0 6px 20px rgba(102, 126, 234, 0.3)'
      }
    }
  },
  submitButton: {
    borderRadius: '25px',
    padding: '12px 32px',
    fontWeight: 600,
    fontSize: '1rem',
    textTransform: 'none',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)'
    },
    '&:disabled': {
      background: 'rgba(0, 0, 0, 0.12)',
      color: 'rgba(0, 0, 0, 0.26)'
    }
  },
  cancelButton: {
    borderRadius: '25px',
    padding: '12px 24px',
    fontWeight: 500,
    fontSize: '1rem',
    textTransform: 'none',
    color: '#666',
    border: '2px solid #e0e0e0',
    transition: 'all 0.3s ease',
    '&:hover': {
      borderColor: '#667eea',
      color: '#667eea',
      backgroundColor: 'rgba(102, 126, 234, 0.05)'
    }
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  readOnlyField: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(102, 126, 234, 0.1)',
      '& fieldset': {
        borderColor: 'rgba(102, 126, 234, 0.3)'
      }
    },
    '& .MuiInputBase-input': {
      color: '#667eea',
      fontWeight: 500
    }
  },
  successMessage: {
    borderRadius: '12px',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    color: '#4caf50',
    fontWeight: 500,
    border: '1px solid rgba(76, 175, 80, 0.3)'
  },
  errorMessage: {
    borderRadius: '12px',
    backgroundColor: 'rgba(244, 67, 54, 0.1)',
    color: '#f44336',
    fontWeight: 500,
    border: '1px solid rgba(244, 67, 54, 0.3)'
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#667eea'
  }
});

const CentralizedPopupForms = ({ 
  open, 
  onClose, 
  variant = 'dropdown', // 'dropdown', 'demo', 'jobportal'
  onSubmitSuccess 
}) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    chosen_field: '',
    phone_number: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Reset form when variant changes or modal opens
  useEffect(() => {
    if (open) {
      setFormData({
        full_name: '',
        email: '',
        chosen_field: variant === 'dropdown' ? '' : 'Book a demo',
        phone_number: ''
      });
      setSuccess(false);
      setError('');
    }
  }, [open, variant]);

  const getTitle = () => {
    switch (variant) {
      case 'dropdown':
        return 'Join Our Program';
      case 'demo':
        return 'Schedule a Demo';
      case 'jobportal':
        return 'Schedule a Demo for Job Portal';
      default:
        return 'Contact Us';
    }
  };

  const getIcon = () => {
    switch (variant) {
      case 'dropdown':
        return <SchoolIcon />;
      case 'demo':
        return <CalendarTodayIcon />;
      case 'jobportal':
        return <WorkIcon />;
      default:
        return <SchoolIcon />;
    }
  };

  const getChosenFieldDisplay = () => {
    switch (variant) {
      case 'demo':
        return 'Schedule a demo';
      case 'jobportal':
        return 'Schedule a demo for jobportal';
      default:
        return '';
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateForm = () => {
    const { full_name, email, chosen_field, phone_number } = formData;
    
    if (!full_name.trim()) return 'Full name is required';
    if (!email.trim()) return 'Email is required';
    if (!chosen_field.trim()) return 'Please select a field';
    if (!phone_number.trim()) return 'Phone number is required';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    
    // Phone validation
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone_number)) return 'Please enter a valid phone number';
    
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Import the API dynamically to avoid import issues
      const { api, handleApiError } = await import('../services/api.js');
      
      const result = await api.virtualDriveContact.submitContact(formData);
      
      setSuccess(true);
      setTimeout(() => {
        onClose();
        if (onSubmitSuccess) {
          onSubmitSuccess(result.data);
        }
      }, 2000);
      
    } catch (err) {
      const { api, handleApiError } = await import('../services/api.js');
      const errorInfo = handleApiError(err);
      setError(errorInfo.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      PaperProps={{
        className: classes.dialogPaper
      }}
      maxWidth="sm"
      fullWidth
    >
      <IconButton
        className={classes.closeButton}
        onClick={onClose}
        disabled={loading}
      >
        <CloseIcon />
      </IconButton>

      <DialogTitle className={classes.title}>
        {getIcon()}
        {getTitle()}
      </DialogTitle>

      <DialogContent className={classes.dialogContent}>
        {success ? (
          <Box textAlign="center" py={3}>
            <Alert severity="success" className={classes.successMessage}>
              <Typography variant="h6" gutterBottom>
                Thank you for your submission!
              </Typography>
              <Typography>
                We'll be in touch soon.
              </Typography>
            </Alert>
          </Box>
        ) : (
          <form onSubmit={handleSubmit} className={classes.formContainer}>
            {error && (
              <Alert severity="error" className={classes.errorMessage}>
                {error}
              </Alert>
            )}

            <TextField
              name="full_name"
              label="Full Name"
              value={formData.full_name}
              onChange={handleInputChange}
              fullWidth
              required
              className={classes.textField}
              disabled={loading}
            />

            <TextField
              name="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              required
              className={classes.textField}
              disabled={loading}
            />

            {variant === 'dropdown' ? (
              <FormControl fullWidth required className={classes.selectField}>
                <InputLabel>Choose Your Field</InputLabel>
                <Select
                  name="chosen_field"
                  value={formData.chosen_field}
                  onChange={handleInputChange}
                  label="Choose Your Field"
                  disabled={loading}
                >
                  <MenuItem value="fullstack">Full Stack Development</MenuItem>
                  <MenuItem value="datascience">Data Science</MenuItem>
                </Select>
              </FormControl>
            ) : (
              <TextField
                name="chosen_field"
                label="Service"
                value={getChosenFieldDisplay()}
                fullWidth
                disabled
                className={`${classes.textField} ${classes.readOnlyField}`}
              />
            )}

            <TextField
              name="phone_number"
              label="Phone Number"
              value={formData.phone_number}
              onChange={handleInputChange}
              fullWidth
              required
              className={classes.textField}
              disabled={loading}
              placeholder="+1234567890"
            />

            <DialogActions sx={{ padding: '20px 0 0', gap: '12px' }}>
              <Button
                onClick={onClose}
                className={classes.cancelButton}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className={classes.submitButton}
                disabled={loading}
              >
                {loading ? (
                  <Box className={classes.loadingContainer}>
                    <CircularProgress size={20} color="inherit" />
                    Submitting...
                  </Box>
                ) : (
                  'Submit'
                )}
              </Button>
            </DialogActions>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CentralizedPopupForms;