import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  MenuItem,
  CircularProgress,
  Container,
  Alert,
  Snackbar
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MessageIcon from '@mui/icons-material/Message';
import { api, handleApiError } from '../../../services/api';

const useStyles = makeStyles({
  mainContainer: {
    minHeight: '20vh',
    background: 'linear-gradient(135deg, #f8f9ff 0%, #e8eaff 100%)',
    padding: '20px 0',
    '@media (max-width: 1200px)': {
      padding: '18px 0',
      minHeight: '75vh',
    },
    '@media (max-width: 960px)': {
      padding: '15px 0',
      minHeight: '70vh',
    },
    '@media (max-width: 600px)': {
      padding: '12px 0',
      minHeight: '65vh',
    },
    '@media (max-width: 480px)': {
      padding: '10px 0',
      minHeight: '60vh',
    },
    '@media (max-width: 375px)': {
      padding: '8px 0',
      minHeight: '55vh',
    },
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '15vh',
    flexDirection: 'row',
    '@media (max-width: 1200px)': {
      minHeight: '12vh',
    },
    '@media (max-width: 960px)': {
      minHeight: 'auto',
      flexDirection: 'column',
    },
    '@media (max-width: 600px)': {
      minHeight: 'auto',
    },
    '@media (max-width: 480px)': {
      minHeight: 'auto',
    },
    '@media (max-width: 375px)': {
      minHeight: 'auto',
    },
  },
  sectionsContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    maxWidth: '900px',
    margin: '0 auto',
    '@media (max-width: 1200px)': {
      maxWidth: '800px',
    },
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      maxWidth: '600px',
    },
    '@media (max-width: 600px)': {
      maxWidth: '500px',
    },
    '@media (max-width: 480px)': {
      maxWidth: '400px',
    },
    '@media (max-width: 375px)': {
      maxWidth: '350px',
    },
  },
  leftSection: {
    flex: '1',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '16px 0 0 16px',
    boxShadow: '0 6px 20px rgba(42, 43, 106, 0.08)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 100%)',
    },
    '@media (max-width: 1200px)': {
      padding: '12px',
      borderRadius: '14px 0 0 14px',
    },
    '@media (max-width: 960px)': {
      display: 'none !important',
    },
  },
  rightSection: {
    flex: '1',
    padding: '15px',
    backgroundColor: '#ffffff',
    borderRadius: '0 16px 16px 0',
    boxShadow: '0 6px 20px rgba(42, 43, 106, 0.08)',
    borderLeft: '1px solid rgba(42, 43, 106, 0.1)',
    position: 'relative',
    zIndex: 1,
    '@media (max-width: 1200px)': {
      padding: '12px',
      borderRadius: '0 14px 14px 0',
    },
    '@media (max-width: 960px)': {
      borderRadius: '16px',
      borderLeft: 'none',
      padding: '15px',
    },
    '@media (max-width: 600px)': {
      padding: '12px',
      borderRadius: '12px',
    },
    '@media (max-width: 480px)': {
      padding: '10px',
      borderRadius: '10px',
    },
    '@media (max-width: 375px)': {
      padding: '8px',
      borderRadius: '8px',
    },
  },
  imageContainer: {
    textAlign: 'center',
    marginBottom: '10px',
    position: 'relative',
    '@media (max-width: 1200px)': {
      marginBottom: '8px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '12px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '10px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '8px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '6px',
    },
  },
  heroImage: {
    width: '100%',
    maxWidth: '300px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(42, 43, 106, 0.12)',
    border: '2px solid #FFC614',
    '@media (max-width: 1200px)': {
      height: '180px',
      maxWidth: '280px',
      borderRadius: '10px',
    },
    '@media (max-width: 960px)': {
      height: '160px',
      maxWidth: '250px',
    },
    '@media (max-width: 600px)': {
      height: '140px',
      maxWidth: '220px',
      borderRadius: '8px',
    },
    '@media (max-width: 480px)': {
      height: '120px',
      maxWidth: '180px',
      borderRadius: '6px',
    },
    '@media (max-width: 375px)': {
      height: '100px',
      maxWidth: '150px',
      borderRadius: '4px',
    },
  },
  leftTitle: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '8px !important',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #3A3B7A 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    '& span': {
      color: '#FFC614 !important',
      background: 'none !important',
      WebkitTextFillColor: '#FFC614 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '1.6rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.5rem !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.2rem !important',
      marginBottom: '5px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.1rem !important',
      marginBottom: '4px !important',
    },
  },
  leftSubtitle: {
    fontSize: '1.2rem !important',
    color: '#666666 !important',
    textAlign: 'center',
    marginBottom: '10px !important',
    lineHeight: '1.4',
    '@media (max-width: 1200px)': {
      fontSize: '0.85rem !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.8rem !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.75rem !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.7rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.65rem !important',
      marginBottom: '5px !important',
    },
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '@media (max-width: 480px)': {
      paddingLeft: '2px',
    },
    '@media (max-width: 375px)': {
      paddingLeft: '1px',
    },
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '6px !important',
    fontSize: '0.85rem',
    color: '#333333',
    '@media (max-width: 1200px)': {
      fontSize: '0.8rem',
      marginBottom: '5px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.75rem',
      marginBottom: '4px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.7rem',
      marginBottom: '3px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.65rem',
      marginBottom: '2px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.6rem',
      marginBottom: '2px !important',
    },
  },
  featureIcon: {
    color: '#FFC614 !important',
    marginRight: '8px !important',
    fontSize: '1rem !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.9rem !important',
      marginRight: '6px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.8rem !important',
      marginRight: '5px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.75rem !important',
      marginRight: '4px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.7rem !important',
      marginRight: '3px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.65rem !important',
      marginRight: '2px !important',
    },
  },
  formContainer: {
    padding: '0',
    position: 'relative',
    zIndex: 2,
  },
  fieldContainer: {
    marginBottom: '16px !important',
    position: 'relative',
    zIndex: 'auto',
    '@media (max-width: 1200px)': {
      marginBottom: '14px !important',
    },
    '@media (max-width: 960px)': {
      marginBottom: '12px !important',
    },
    '@media (max-width: 600px)': {
      marginBottom: '10px !important',
    },
    '@media (max-width: 480px)': {
      marginBottom: '8px !important',
    },
    '@media (max-width: 375px)': {
      marginBottom: '6px !important',
    },
  },
  textField: {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      fontSize: '0.9rem',
      backgroundColor: '#fafafa',
      minHeight: 56,
      transition: 'all 0.2s ease',
      '& fieldset': {
        borderColor: 'rgba(42, 43, 106, 0.2)',
        borderWidth: '1px',
      },
      '&:hover': {
        backgroundColor: '#f5f7ff',
      },
      '&:hover fieldset': {
        borderColor: '#2A2B6A',
        borderWidth: '1.5px',
      },
      '&.Mui-focused': {
        backgroundColor: '#ffffff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2A2B6A',
        borderWidth: '2px',
      },
      '&.Mui-error fieldset': {
        borderColor: '#e53935',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#666666',
      fontSize: '0.9rem',
      fontWeight: '500',
      transform: 'translate(14px, 18px) scale(1)',
      '&.MuiInputLabel-shrink': {
        transform: 'translate(14px, -6px) scale(0.75)',
      },
      '&.Mui-focused': {
        color: '#2A2B6A',
      },
      '&.Mui-error': {
        color: '#e53935',
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '16px 14px',
      fontSize: '0.9rem',
      color: '#2A2B6A',
      fontWeight: '500',
      height: 'auto',
      lineHeight: 1.4,
    },
    '& .MuiInputAdornment-root': {
      color: '#2A2B6A',
      marginRight: '8px',
    },
    '& .MuiSelect-select': {
      zIndex: 1,
    },
    '& .MuiPopover-root': {
      zIndex: 9999,
    },
    '@media (max-width: 1200px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.85rem',
        borderRadius: '7px',
        minHeight: 52,
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.85rem',
        transform: 'translate(13px, 16px) scale(1)',
        '&.MuiInputLabel-shrink': {
          transform: 'translate(13px, -6px) scale(0.75)',
        },
      },
      '& .MuiOutlinedInput-input': {
        padding: '15px 13px',
        fontSize: '0.85rem',
      },
    },
    '@media (max-width: 960px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.8rem',
        borderRadius: '6px',
        minHeight: 48,
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.8rem',
        transform: 'translate(12px, 14px) scale(1)',
        '&.MuiInputLabel-shrink': {
          transform: 'translate(12px, -6px) scale(0.75)',
        },
      },
      '& .MuiOutlinedInput-input': {
        padding: '14px 12px',
        fontSize: '0.8rem',
      },
    },
    '@media (max-width: 600px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.75rem',
        borderRadius: '6px',
        minHeight: 44,
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.75rem',
        transform: 'translate(12px, 13px) scale(1)',
        '&.MuiInputLabel-shrink': {
          transform: 'translate(12px, -6px) scale(0.75)',
        },
      },
      '& .MuiOutlinedInput-input': {
        padding: '13px 12px',
        fontSize: '0.75rem',
      },
    },
    '@media (max-width: 480px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.7rem',
        borderRadius: '5px',
        minHeight: 40,
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.7rem',
        transform: 'translate(11px, 12px) scale(1)',
        '&.MuiInputLabel-shrink': {
          transform: 'translate(11px, -6px) scale(0.75)',
        },
      },
      '& .MuiOutlinedInput-input': {
        padding: '12px 11px',
        fontSize: '0.7rem',
      },
    },
    '@media (max-width: 375px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.65rem',
        borderRadius: '4px',
        minHeight: 36,
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.65rem',
        transform: 'translate(10px, 10px) scale(1)',
        '&.MuiInputLabel-shrink': {
          transform: 'translate(10px, -6px) scale(0.75)',
        },
      },
      '& .MuiOutlinedInput-input': {
        padding: '10px 10px',
        fontSize: '0.65rem',
      },
    },
  },
  selectField: {
    width: '100%',
    '& .MuiSelect-root': {
      position: 'relative',
      zIndex: 1,
    },
    '& .MuiMenu-paper': {
      zIndex: 9999,
      maxHeight: '200px',
    },
    '& .MuiMenuItem-root': {
      fontSize: '0.85rem',
      '@media (max-width: 1200px)': {
        fontSize: '0.8rem',
      },
      '@media (max-width: 960px)': {
        fontSize: '0.75rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '0.7rem',
      },
      '@media (max-width: 480px)': {
        fontSize: '0.65rem',
      },
      '@media (max-width: 375px)': {
        fontSize: '0.6rem',
      },
    },
  },
  submitButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '12px 24px !important',
    borderRadius: '8px !important',
    fontSize: '0.9rem !important',
    fontWeight: '600 !important',
    textTransform: 'none !important',
    width: '100%',
    marginTop: '8px !important',
    boxShadow: '0 3px 12px rgba(42, 43, 106, 0.2) !important',
    transition: 'all 0.3s ease !important',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: '#1A1B4A !important',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 16px rgba(42, 43, 106, 0.3) !important',
    },
    '&:disabled': {
      backgroundColor: '#cccccc !important',
      color: '#666666 !important',
      transform: 'none',
      boxShadow: 'none !important',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '25px',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.3)',
      transform: 'skewX(-30deg) translateX(-120px)',
      animation: '$shine 3s infinite',
    },
    '@media (max-width: 1200px)': {
      padding: '10px 20px !important',
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 960px)': {
      padding: '9px 18px !important',
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 600px)': {
      padding: '8px 16px !important',
      fontSize: '0.75rem !important',
      borderRadius: '6px !important',
    },
    '@media (max-width: 480px)': {
      padding: '7px 14px !important',
      fontSize: '0.7rem !important',
      marginTop: '6px !important',
    },
    '@media (max-width: 375px)': {
      padding: '6px 12px !important',
      fontSize: '0.65rem !important',
      borderRadius: '4px !important',
      marginTop: '4px !important',
    },
  },
  errorMessage: {
    color: '#e53935 !important',
    fontSize: '0.75rem !important',
    marginTop: '4px !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.65rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.6rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.55rem !important',
      marginTop: '2px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.5rem !important',
      marginTop: '2px !important',
    },
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    '@media (max-width: 480px)': {
      gap: '6px',
    },
    '@media (max-width: 375px)': {
      gap: '4px',
    },
  },
  '@keyframes shine': {
    '0%': {
      transform: 'skewX(-30deg) translateX(-120px)',
    },
    '100%': {
      transform: 'skewX(-30deg) translateX(280px)',
    },
  },
});

const ContactFormLayout = ({ onSubmit, isSubmitting = false }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    contact_no: '',
    email: '',
    year_of_graduation: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });

  // Generate year options
  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear - 3; year <= currentYear + 2; year++) {
      years.push(year);
    }
    return years;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.contact_no.trim()) {
      newErrors.contact_no = 'Contact number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.contact_no.trim())) {
      newErrors.contact_no = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    
    if (field === 'contact_no') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [field]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Use the new student contact API
      const result = await api.studentContact.submitContact(formData);
      
      setSubmitStatus('success');
      setSnackbar({
        open: true,
        message: 'Thank you! Your contact details have been submitted successfully.',
        severity: 'success'
      });
      
      // Reset form
      setFormData({
        name: '',
        contact_no: '',
        email: '',
        year_of_graduation: '',
        message: '',
      });

      // Call the optional onSubmit prop if provided
      if (onSubmit) {
        onSubmit(result.data);
      }

    } catch (error) {
      const errorInfo = handleApiError(error);
      setSubmitStatus('error');
      setSnackbar({
        open: true,
        message: errorInfo.message || 'Failed to submit contact details. Please try again.',
        severity: 'error'
      });
      console.error('Contact form submission error:', errorInfo);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const yearOptions = generateYearOptions();

  return (
    <Box className={classes.mainContainer}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', marginBottom: '5px' }}>
          <Typography variant="h2" className={classes.leftTitle} style={{ marginBottom: '8px' }}>
            Get In <span>Touch</span>
          </Typography>
          <Typography variant="h3" className={classes.leftSubtitle} style={{ maxWidth: '600px', margin: '0 auto' }}>
            We'd love to hear from you. Connect with us and let's start a conversation.
          </Typography>
        </Box>
        <Box className={classes.contentWrapper}>
          <Box className={classes.sectionsContainer}>
            {/* Left Section - Image and Content */}
            <Box className={classes.leftSection}>
              <Box className={classes.imageContainer}>
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Contact form for connecting with Gigaversity"
                  className={classes.heroImage}
                />
              </Box>
              
              <ul className={classes.featuresList}>
                <li className={classes.featureItem}>
                  <CheckCircleIcon className={classes.featureIcon} />
                  Quick response within 24 hours
                </li>
                <li className={classes.featureItem}>
                  <CheckCircleIcon className={classes.featureIcon} />
                  Personalized consultation
                </li>
                <li className={classes.featureItem}>
                  <CheckCircleIcon className={classes.featureIcon} />
                  Expert guidance and support
                </li>
                <li className={classes.featureItem}>
                  <CheckCircleIcon className={classes.featureIcon} />
                  Secure and confidential
                </li>
              </ul>
            </Box>

            {/* Right Section - Form */}
            <Box className={classes.rightSection}>
              <Paper className={classes.formContainer} elevation={0}>
                <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
                  <Box className={classes.fieldContainer}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange('name')}
                      error={Boolean(errors.name)}
                      helperText={errors.name}
                      className={classes.textField}
                      required
                      disabled={isLoading}
                      InputProps={{
                        startAdornment: (
                          <PersonIcon sx={{ color: '#2A2B6A', fontSize: '1.1rem' }} />
                        ),
                      }}
                    />
                  </Box>

                  <Box className={classes.fieldContainer}>
                    <TextField
                      label="Contact No."
                      variant="outlined"
                      value={formData.contact_no}
                      onChange={handleChange('contact_no')}
                      error={Boolean(errors.contact_no)}
                      helperText={errors.contact_no}
                      className={classes.textField}
                      required
                      disabled={isLoading}
                      inputProps={{
                        maxLength: 10,
                        pattern: '[0-9]*',
                      }}
                      InputProps={{
                        startAdornment: (
                          <PhoneIcon sx={{ color: '#2A2B6A', fontSize: '1.1rem' }} />
                        ),
                      }}
                    />
                  </Box>

                  <Box className={classes.fieldContainer}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      type="email"
                      value={formData.email}
                      onChange={handleChange('email')}
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                      className={classes.textField}
                      required
                      disabled={isLoading}
                      InputProps={{
                        startAdornment: (
                          <EmailIcon sx={{ color: '#2A2B6A', fontSize: '1.1rem' }} />
                        ),
                      }}
                    />
                  </Box>

                  <Box className={classes.fieldContainer}>
                    <TextField
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange('message')}
                      error={Boolean(errors.message)}
                      helperText={errors.message}
                      className={classes.textField}
                      required
                      disabled={isLoading}
                      InputProps={{
                        startAdornment: (
                          <MessageIcon sx={{ 
                            color: '#2A2B6A', 
                            fontSize: '1.1rem',
                            alignSelf: 'flex-start', 
                            marginTop: '14px' 
                          }} />
                        ),
                      }}
                    />
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.submitButton}
                    disabled={isLoading || isSubmitting}
                    title="Fill in your information to connect with the Gigaversity team"
                    endIcon={
                      isLoading ? (
                        <CircularProgress size={18} color="inherit" />
                      ) : (
                        <SendIcon sx={{ fontSize: '1rem' }} />
                      )
                    }
                  >
                    {isLoading ? (
                      <Box className={classes.loadingContainer}>
                        <span>Submitting...</span>
                      </Box>
                    ) : (
                      'Submit Details'
                    )}
                  </Button>
                </form>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
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
    </Box>
  );
};

export default ContactFormLayout;