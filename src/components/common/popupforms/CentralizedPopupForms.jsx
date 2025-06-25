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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CelebrationIcon from '@mui/icons-material/Celebration';

import { api, handleApiError } from '../../../services/api.js';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  dialogPaper: {
    borderRadius: 20,
    overflow: 'hidden',
    maxWidth: 480,
    width: '100%',
    margin: '16px',
    background: 'linear-gradient(135deg, #f8f9ff 0%, #e8eaff 100%)',
    color: '#2A2B6A',
    position: 'relative',
    boxShadow: '0 8px 40px 0 rgba(42,43,106,0.15)',
    border: 'none',
    '@media (max-width: 600px)': {
      maxWidth: '95vw',
      margin: '8px',
      borderRadius: 14,
    }
  },
  dialogContent: {
    position: 'relative',
    zIndex: 2,
    padding: '28px 24px 20px 24px',
    background: 'transparent',
    color: '#2A2B6A',
    borderRadius: 16,
    margin: 0,
    boxShadow: 'none',
    '@media (max-width: 600px)': {
      padding: '18px 6px 12px 6px',
      borderRadius: 10,
    }
  },
  formHeading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2A2B6A',
    marginBottom: '10px',
    textAlign: 'center',
    letterSpacing: 0.5,
    position: 'relative',
    paddingBottom: '8px',
    '&:after': {
      content: '""',
      display: 'block',
      margin: '8px auto 0 auto',
      width: '40px',
      height: '3px',
      backgroundColor: '#FFC614',
      borderRadius: '2px'
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem',
      paddingBottom: '6px',
      '&:after': {
        width: '28px',
        height: '2px'
      }
    }
  },
  closeButton: {
    position: 'absolute',
    right: 12,
    top: 12,
    zIndex: 3,
    color: '#f44336', // red for wrong/close
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '50%',
    width: 38,
    height: 38,
    boxShadow: 'none',
    transition: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#f44336',
      transform: 'none'
    }
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    color: '#2A2B6A',
    fontWeight: 700,
    fontSize: '1.1rem',
    marginBottom: 0,
    background: 'none',
    padding: 0,
    minHeight: 0
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 8,
      backgroundColor: '#f4f6fa',
      color: '#2A2B6A',
      transition: 'all 0.3s',
      fontWeight: 500,
      '&:hover': {
        backgroundColor: '#e6e9f8',
        boxShadow: '0 2px 12px rgba(42,43,106,0.08)'
      },
      '&.Mui-focused': {
        backgroundColor: '#fff',
        boxShadow: '0 4px 16px rgba(42,43,106,0.15)'
      }
    },
    '& .MuiInputLabel-root': {
      fontWeight: 600,
      color: '#2A2B6A'
    }
  },
  selectField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 8,
      backgroundColor: '#f4f6fa',
      color: '#2A2B6A',
      transition: 'all 0.3s',
      fontWeight: 500,
      '&:hover': {
        backgroundColor: '#e6e9f8',
        boxShadow: '0 2px 12px rgba(42,43,106,0.08)'
      },
      '&.Mui-focused': {
        backgroundColor: '#fff',
        boxShadow: '0 4px 16px rgba(42,43,106,0.15)'
      }
    }
  },
  submitButton: {
    borderRadius: 8,
    padding: '12px 0',
    fontWeight: 700,
    fontSize: '1rem',
    textTransform: 'none',
    backgroundColor: '#292B6B',
    color: '#fff',
    width: 160,
    boxShadow: 'none',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: '#1a1b43',
      color: '#fff',
      boxShadow: 'none'
    },
    '&:disabled': {
      backgroundColor: '#cccccc',
      color: '#666666'
    }
  },
  cancelButton: {
    borderRadius: 8,
    padding: '12px 0',
    fontWeight: 600,
    fontSize: '1rem',
    textTransform: 'none',
    color: '#292B6B',
    backgroundColor: '#e0e0e0',
    border: 'none',
    width: 120,
    boxShadow: 'none',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: '#bdbdbd',
      color: '#292B6B'
    }
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    marginTop: 10,
    '@media (max-width: 600px)': {
      gap: 10,
    }
  },
  readOnlyField: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#e6e9f8',
      '& fieldset': {
        borderColor: '#FFC614'
      }
    },
    '& .MuiInputBase-input': {
      color: '#2A2B6A',
      fontWeight: 600
    }
  },
  successMessage: {
    borderRadius: 14,
    background: 'linear-gradient(90deg, #e8eaff 0%, #f8f9ff 100%)',
    color: '#2A2B6A',
    fontWeight: 600,
    border: '2px solid #FFC614',
    boxShadow: '0 2px 12px rgba(42,43,106,0.10)',
    padding: '24px 0',
    margin: '0 auto',
    maxWidth: 340,
    '@media (max-width: 600px)': {
      padding: '16px 0',
      maxWidth: 260,
    }
  },
  successIcon: {
    fontSize: 54,
    color: '#FFC614',
    marginBottom: 8,
    animation: '$pop 0.7s cubic-bezier(.68,-0.55,.27,1.55)'
  },
  celebrationIcon: {
    fontSize: 44,
    color: '#2A2B6A',
    marginLeft: 8,
    animation: '$pop 0.7s cubic-bezier(.68,-0.55,.27,1.55)'
  },
  '@keyframes pop': {
    '0%': { transform: 'scale(0.7)' },
    '60%': { transform: 'scale(1.15)' },
    '100%': { transform: 'scale(1)' }
  },
  errorMessage: {
    borderRadius: 10,
    backgroundColor: 'rgba(244, 67, 54, 0.08)',
    color: '#f44336',
    fontWeight: 500,
    border: '1.5px solid rgba(244, 67, 54, 0.22)'
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    color: '#2A2B6A'
  }
});

const CentralizedPopupForms = ({
  open,
  onClose,
  variant = 'dropdown',
  onSubmitSuccess
}) => {
  const isMobile = window.innerWidth <= 600;
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

  useEffect(() => {
    if (open) {
      setFormData({
        full_name: '',
        email: '',
        chosen_field: variant === 'dropdown' ? '' : 
                      variant === 'fullstack' ? 'Full Stack Development' :
                      variant === 'datascience' ? 'Data Science' :
                      'Book a demo',
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
      case 'fullstackdemo':
        return 'Schedule a Demo for Full Stack';
      case 'datasciencedemo':
        return 'Schedule a Demo for Data Science';
      case 'jobportal':
        return 'Schedule a Demo for Job Portal';
      case 'fullstack':
        return 'Apply for Full Stack Development';
      case 'datascience':
        return 'Apply for Data Science';
      default:
        return 'Contact Us';
    }
  };

  const getIcon = () => {
    switch (variant) {
      case 'dropdown':
        return <SchoolIcon sx={{ fontSize: 32, color: '#FFC614' }} />;
      case 'demo':
        return <CalendarTodayIcon sx={{ fontSize: 32, color: '#FFC614' }} />;
      case 'jobportal':
        return <WorkIcon sx={{ fontSize: 32, color: '#FFC614' }} />;
      case 'fullstack':
        return <SchoolIcon sx={{ fontSize: 32, color: '#FFC614' }} />;
      case 'datascience':
        return <SchoolIcon sx={{ fontSize: 32, color: '#FFC614' }} />;
      default:
        return <SchoolIcon sx={{ fontSize: 32, color: '#FFC614' }} />;
    }
  };

  const getChosenFieldDisplay = () => {
    switch (variant) {
      case 'demo':
        return 'Schedule A Demo';
      case 'jobportal':
        return 'Schedule A Demo for Job Portal';
      case 'fullstack':
        return 'Full Stack Development';
      case 'datascience':
        return 'Data Science';
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
    if (error) setError('');
  };

  const validateForm = () => {
    const { full_name, email, chosen_field, phone_number } = formData;
    if (!full_name.trim()) return 'Full name is required';
    if (!email.trim()) return 'Email is required';
    if (!chosen_field.trim()) return 'Please select a field';
    if (!phone_number.trim()) return 'Phone number is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
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
      const result = await api.popupContact.submitContact(formData);
      setSuccess(true);
      setTimeout(() => {
        onClose();
        if (onSubmitSuccess) {
          onSubmitSuccess(result.data);
        }
      }, 2200);
    } catch (err) {
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
      {/* Close button at right top corner, always visible, no hover effect */}
      <IconButton
        className={classes.closeButton}
        onClick={onClose}
        disabled={loading}
        aria-label="Close"
        style={{ position: 'absolute', right: 12, top: 12 }}
      >
        <CloseIcon />
      </IconButton>

      {/* Form Heading */}
      <Box className={classes.formHeading}>
        {getTitle()}
      </Box>

      {/* Icon and subtitle below heading */}
      <DialogTitle className={classes.title}>
        {getIcon()}
        <span>
          {variant === 'dropdown'
            ? 'Apply for a program'
            : variant === 'fullstack'
              ? 'Apply for Full Stack Development'
              : variant === 'datascience'
                ? 'Apply for Data Science'
                : "Let's connect!"}
        </span>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        {success ? (
          <Box textAlign="center" py={isMobile ? 2 : 4}>
            <Box>
              <CheckCircleIcon className={classes.successIcon} />
              <CelebrationIcon className={classes.celebrationIcon} />
            </Box>
            <Alert severity="success" className={classes.successMessage} icon={false}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#2A2B6A', letterSpacing: 0.5 }}>
                Thank you for your submission!
              </Typography>
              <Typography sx={{ fontSize: isMobile ? '1rem' : '1.1rem', color: '#2A2B6A', fontWeight: 500 }}>
                We'll be in touch soon.<br />
                <span style={{ color: '#FFC614', fontWeight: 700 }}>Stay tuned for exciting updates!</span>
              </Typography>
            </Alert>
          </Box>
        ) : (
          <form onSubmit={handleSubmit} className={classes.formContainer} autoComplete="off">
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
              autoFocus
              inputProps={{ maxLength: 40 }}
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
              inputProps={{ maxLength: 40 }}
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
              inputProps={{ maxLength: 15 }}
            />

            <DialogActions sx={{
              padding: isMobile ? '12px 0 0' : '20px 0 0',
              gap: isMobile ? '8px' : '18px',
              justifyContent: 'center'
            }}>
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