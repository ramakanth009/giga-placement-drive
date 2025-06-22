// src/components/common/contactform/ContactFormLayout.jsx
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  MenuItem,
  CircularProgress,
  Container
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MessageIcon from '@mui/icons-material/Message';

const useStyles = makeStyles({
  mainContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8f9ff 0%, #e8eaff 100%)',
    padding: '40px 0',
    '@media (max-width: 1200px)': {
      padding: '35px 0',
    },
    '@media (max-width: 960px)': {
      padding: '25px 0',
    },
    '@media (max-width: 600px)': {
      padding: '20px 0',
    },
    '@media (max-width: 480px)': {
      padding: '15px 0',
    },
    '@media (max-width: 375px)': {
      padding: '12px 0',
    },
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '20vh',
    flexDirection: 'row',
    '@media (max-width: 960px)': {
      minHeight: 'auto',
      flexDirection: 'column',
    },
  },
  sectionsContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
    },
  },
  leftSection: {
    flex: '1',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '20px 0 0 20px',
    boxShadow: '0 8px 25px rgba(42, 43, 106, 0.08)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 100%)',
    },
    '@media (max-width: 1200px)': {
      padding: '25px',
    },
    '@media (max-width: 960px)': {
      borderRadius: '20px 20px 0 0',
      padding: '30px',
    },
    '@media (max-width: 600px)': {
      padding: '25px',
      borderRadius: '16px 16px 0 0',
    },
    '@media (max-width: 480px)': {
      padding: '20px',
      borderRadius: '12px 12px 0 0',
    },
    '@media (max-width: 375px)': {
      padding: '15px',
      borderRadius: '10px 10px 0 0',
    },
  },
  rightSection: {
    flex: '1',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '0 20px 20px 0',
    boxShadow: '0 8px 25px rgba(42, 43, 106, 0.08)',
    borderLeft: '1px solid rgba(42, 43, 106, 0.1)',
    '@media (max-width: 1200px)': {
      padding: '25px',
    },
    '@media (max-width: 960px)': {
      borderRadius: '0 0 20px 20px',
      borderLeft: 'none',
      borderTop: '1px solid rgba(42, 43, 106, 0.1)',
      padding: '30px',
    },
    '@media (max-width: 600px)': {
      padding: '25px',
      borderRadius: '0 0 16px 16px',
    },
    '@media (max-width: 480px)': {
      padding: '20px',
      borderRadius: '0 0 12px 12px',
    },
    '@media (max-width: 375px)': {
      padding: '15px',
      borderRadius: '0 0 10px 10px',
    },
  },
  imageContainer: {
    textAlign: 'center',
    marginBottom: '15px',
    position: 'relative',
    '@media (max-width: 1200px)': {
      marginBottom: '20px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '25px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '20px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '15px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '12px',
    },
  },
  heroImage: {
    width: '100%',
    maxWidth: '400px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '16px',
    boxShadow: '0 12px 30px rgba(42, 43, 106, 0.15)',
    border: '3px solid #FFC614',
    '@media (max-width: 1200px)': {
      height: '250px',
      maxWidth: '350px',
    },
    '@media (max-width: 960px)': {
      height: '220px',
      maxWidth: '320px',
    },
    '@media (max-width: 600px)': {
      height: '200px',
      maxWidth: '280px',
      borderRadius: '12px',
      border: '2px solid #FFC614',
    },
    '@media (max-width: 480px)': {
      height: '180px',
      maxWidth: '240px',
      borderRadius: '10px',
    },
    '@media (max-width: 375px)': {
      height: '160px',
      maxWidth: '200px',
      borderRadius: '8px',
    },
  },
  leftTitle: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #3A3B7A 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    '@media (max-width: 1200px)': {
      fontSize: '2.2rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
      marginBottom: '16px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '15px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.4rem !important',
      marginBottom: '10px !important',
    },
  },
  leftSubtitle: {
    fontSize: '1.2rem !important',
    color: '#666666 !important',
    textAlign: 'center',
    marginBottom: '25px !important',
    lineHeight: '1.6',
    '@media (max-width: 1200px)': {
      fontSize: '1.15rem !important',
      marginBottom: '22px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
      marginBottom: '15px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
      marginBottom: '12px !important',
    },
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    '@media (max-width: 480px)': {
      paddingLeft: '5px',
    },
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px !important',
    fontSize: '1rem',
    color: '#333333',
    '@media (max-width: 1200px)': {
      fontSize: '0.95rem',
      marginBottom: '9px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.9rem',
      marginBottom: '8px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.85rem',
      marginBottom: '7px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem',
      marginBottom: '6px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem',
      marginBottom: '5px !important',
    },
  },
  featureIcon: {
    color: '#FFC614 !important',
    marginRight: '12px !important',
    fontSize: '1.2rem !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.15rem !important',
      marginRight: '10px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginRight: '8px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
      marginRight: '6px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
      marginRight: '5px !important',
    },
  },
  formContainer: {
    padding: '0',
  },
  heading: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A',
    marginBottom: '25px !important',
    textAlign: 'center',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      backgroundColor: '#FFC614',
      borderRadius: '2px',
    },
    '@media (max-width: 1200px)': {
      fontSize: '1.7rem !important',
      marginBottom: '22px !important',
      '&::after': {
        width: '55px',
      },
    },
    '@media (max-width: 960px)': {
      fontSize: '1.6rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.4rem !important',
      marginBottom: '18px !important',
      '&::after': {
        width: '50px',
        height: '2px',
      },
    },
    '@media (max-width: 480px)': {
      fontSize: '1.3rem !important',
      marginBottom: '15px !important',
      '&::after': {
        width: '45px',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '1.2rem !important',
      marginBottom: '12px !important',
      '&::after': {
        width: '40px',
      },
    },
  },
  fieldContainer: {
    marginBottom: '20px !important',
    '@media (max-width: 1200px)': {
      marginBottom: '18px !important',
    },
    '@media (max-width: 960px)': {
      marginBottom: '16px !important',
    },
    '@media (max-width: 600px)': {
      marginBottom: '15px !important',
    },
    '@media (max-width: 480px)': {
      marginBottom: '12px !important',
    },
    '@media (max-width: 375px)': {
      marginBottom: '10px !important',
    },
  },
  textField: {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      fontSize: '1rem',
      '& fieldset': {
        borderColor: 'rgba(42, 43, 106, 0.2)',
        borderWidth: '1px',
      },
      '&:hover fieldset': {
        borderColor: '#2A2B6A',
        borderWidth: '2px',
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
      fontSize: '1rem',
      '&.Mui-focused': {
        color: '#2A2B6A',
      },
      '&.Mui-error': {
        color: '#e53935',
      },
    },
    '& .MuiInputAdornment-root': {
      color: '#2A2B6A',
    },
    '@media (max-width: 1200px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.95rem',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.95rem',
      },
    },
    '@media (max-width: 960px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.9rem',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.9rem',
      },
    },
    '@media (max-width: 600px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.85rem',
        borderRadius: '6px',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.85rem',
      },
    },
    '@media (max-width: 480px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.8rem',
        padding: '8px',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.8rem',
      },
    },
    '@media (max-width: 375px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.75rem',
        borderRadius: '4px',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.75rem',
      },
    },
  },
  submitButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '12px 30px !important',
    borderRadius: '8px !important',
    fontSize: '1rem !important',
    fontWeight: '600 !important',
    textTransform: 'none !important',
    width: '100%',
    marginTop: '10px !important',
    boxShadow: '0 4px 15px rgba(42, 43, 106, 0.2) !important',
    transition: 'all 0.3s ease !important',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: '#1A1B4A !important',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(42, 43, 106, 0.3) !important',
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
      width: '30px',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.3)',
      transform: 'skewX(-30deg) translateX(-150px)',
      animation: '$shine 3s infinite',
    },
    '@media (max-width: 1200px)': {
      padding: '11px 28px !important',
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 960px)': {
      padding: '10px 25px !important',
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 600px)': {
      padding: '10px 20px !important',
      fontSize: '0.85rem !important',
      borderRadius: '6px !important',
    },
    '@media (max-width: 480px)': {
      padding: '8px 16px !important',
      fontSize: '0.8rem !important',
      marginTop: '8px !important',
    },
    '@media (max-width: 375px)': {
      padding: '8px 12px !important',
      fontSize: '0.75rem !important',
      borderRadius: '4px !important',
      marginTop: '6px !important',
    },
  },
  errorMessage: {
    color: '#e53935 !important',
    fontSize: '0.85rem !important',
    marginTop: '5px !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.75rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.65rem !important',
      marginTop: '3px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.6rem !important',
      marginTop: '2px !important',
    },
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    '@media (max-width: 480px)': {
      gap: '8px',
    },
    '@media (max-width: 375px)': {
      gap: '6px',
    },
  },
  '@keyframes shine': {
    '0%': {
      transform: 'skewX(-30deg) translateX(-150px)',
    },
    '100%': {
      transform: 'skewX(-30deg) translateX(350px)',
    },
  },
});

const ContactFormLayout = ({ onSubmit, isSubmitting = false }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    email: '',
    yearOfGraduation: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

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

    if (!formData.contactNo.trim()) {
      newErrors.contactNo = 'Contact number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.contactNo.trim())) {
      newErrors.contactNo = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.yearOfGraduation) {
      newErrors.yearOfGraduation = 'Year of graduation is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    
    if (field === 'contactNo') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [field]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(formData);
      } else {
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
      }
    }
  };

  const yearOptions = generateYearOptions();

  return (
    <Box className={classes.mainContainer}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', marginBottom: '10px' }}>
          <Typography variant="h1" className={classes.leftTitle} style={{ marginBottom: '20px' }}>
            Get In <span style={{ color: '#FFC614' }}>Touch</span>
          </Typography>
          <Typography variant="h3" className={classes.leftSubtitle} style={{ maxWidth: '800px', margin: '0 auto' }}>
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
                  alt="Contact Us"
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
                <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
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
                      InputProps={{
                        startAdornment: (
                          <PersonIcon sx={{ color: '#2A2B6A', marginRight: '8px' }} />
                        ),
                      }}
                    />
                  </Box>

                  <Box className={classes.fieldContainer}>
                    <TextField
                      label="Contact No."
                      variant="outlined"
                      value={formData.contactNo}
                      onChange={handleChange('contactNo')}
                      error={Boolean(errors.contactNo)}
                      helperText={errors.contactNo}
                      className={classes.textField}
                      required
                      inputProps={{
                        maxLength: 10,
                        pattern: '[0-9]*',
                      }}
                      InputProps={{
                        startAdornment: (
                          <PhoneIcon sx={{ color: '#2A2B6A', marginRight: '8px' }} />
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
                      InputProps={{
                        startAdornment: (
                          <EmailIcon sx={{ color: '#2A2B6A', marginRight: '8px' }} />
                        ),
                      }}
                    />
                  </Box>

                  <Box className={classes.fieldContainer}>
                    <TextField
                      label="Year of graduation"
                      variant="outlined"
                      select
                      value={formData.yearOfGraduation}
                      onChange={handleChange('yearOfGraduation')}
                      error={Boolean(errors.yearOfGraduation)}
                      helperText={errors.yearOfGraduation}
                      className={classes.textField}
                      required
                      InputProps={{
                        startAdornment: (
                          <SchoolIcon sx={{ color: '#2A2B6A', marginRight: '8px' }} />
                        ),
                      }}
                    >
                      <MenuItem value="">
                        <em>Select your graduation year</em>
                      </MenuItem>
                      {yearOptions.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </TextField>
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
                      InputProps={{
                        startAdornment: (
                          <MessageIcon sx={{ color: '#2A2B6A', marginRight: '8px', alignSelf: 'flex-start', marginTop: '16px' }} />
                        ),
                      }}
                    />
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.submitButton}
                    disabled={isSubmitting}
                    endIcon={
                      isSubmitting ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : (
                        <SendIcon />
                      )
                    }
                  >
                    {isSubmitting ? (
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
    </Box>
  );
};

export default ContactFormLayout;