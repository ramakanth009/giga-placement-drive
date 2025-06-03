// src/components/common/contactform/ContactDetailsForm.jsx
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  MenuItem,
  CircularProgress 
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles({
  formContainer: {
    margin: '0 auto',  // Add this line to center horizontally
    padding: '30px',
    maxWidth: '700px',
    borderRadius: '16px !important',
    boxShadow: '0 8px 25px rgba(42, 43, 106, 0.08) !important',
    backgroundColor: '#ffffff !important',
    border: '1px solid rgba(42, 43, 106, 0.1)',
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
      padding: '22px',
    },
    '@media (max-width: 600px)': {
      padding: '20px',
      borderRadius: '12px !important',
    },
    '@media (max-width: 480px)': {
      padding: '18px',
    },
    '@media (max-width: 375px)': {
      padding: '15px',
      borderRadius: '10px !important',
    },
  },
  heading: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
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
      marginBottom: '16px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.2rem !important',
      marginBottom: '15px !important',
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
      marginBottom: '14px !important',
    },
    '@media (max-width: 375px)': {
      marginBottom: '12px !important',
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
    '@media (max-width: 600px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.95rem',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.95rem',
      },
    },
    '@media (max-width: 480px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.9rem',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.9rem',
      },
    },
    '@media (max-width: 375px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.85rem',
        borderRadius: '6px',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.85rem',
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
      fontSize: '0.98rem !important',
    },
    '@media (max-width: 960px)': {
      padding: '10px 25px !important',
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 600px)': {
      padding: '10px 22px !important',
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 480px)': {
      padding: '9px 20px !important',
      fontSize: '0.9rem !important',
      borderRadius: '6px !important',
    },
    '@media (max-width: 375px)': {
      padding: '8px 18px !important',
      fontSize: '0.85rem !important',
    },
  },
  errorMessage: {
    color: '#e53935 !important',
    fontSize: '0.85rem !important',
    marginTop: '5px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem !important',
    },
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
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

const ContactDetailsForm = ({ onSubmit, isSubmitting = false, showYearOptions = true }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    email: '',
    yearOfGraduation: '',
  });
  const [errors, setErrors] = useState({});

  // Generate year options (current year + 3 years back and 2 years forward)
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

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Contact number validation
    if (!formData.contactNo.trim()) {
      newErrors.contactNo = 'Contact number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.contactNo.trim())) {
      newErrors.contactNo = 'Please enter a valid 10-digit mobile number';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Year of graduation validation
    if (!formData.yearOfGraduation) {
      newErrors.yearOfGraduation = 'Year of graduation is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    
    // For contact number, only allow digits and limit to 10 characters
    if (field === 'contactNo') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [field]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }

    // Clear error when user starts typing
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
        // Default action - you can customize this
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
      }
    }
  };

  const yearOptions = generateYearOptions();

  return (
    <Paper className={classes.formContainer} elevation={0}>
      <Typography variant="h2" className={classes.heading}>
        Enter your details
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box className={classes.fieldContainer}>
          <TextField
            label="Name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange('name')}
            error={Boolean(errors.name)}
            helperText={errors.name}
            className={classes.textField}
            placeholder="e.g. John Smith"
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
            placeholder="e.g. 9876543210"
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
            placeholder="e.g. john.smith@example.com"
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
  );
};

export default ContactDetailsForm;