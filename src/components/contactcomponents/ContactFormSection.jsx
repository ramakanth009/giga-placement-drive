import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  Link,
  InputLabel,
  TextareaAutosize,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import { makeStyles } from '@mui/styles';

// Social media icons
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const useStyles = makeStyles({
  contactSection: {
    padding: '0 30px 60px',
    background: 'transparent',
    minHeight: '600px',
    marginTop: '-300px',
    position: 'relative',
    zIndex: 1,
    "@media (max-width: 1200px)": {
      padding: '0 25px 55px',
      marginTop: '-280px',
    },
    "@media (max-width: 960px)": {
      padding: '0 20px 50px',
      marginTop: '-260px',
    },
    "@media (max-width: 600px)": {
      padding: '0 15px 45px',
      marginTop: '-240px',
      minHeight: '550px',
    },
    "@media (max-width: 480px)": {
      padding: '0 12px 40px',
      marginTop: '-220px',
      minHeight: '500px',
    },
    "@media (max-width: 375px)": {
      padding: '0 10px 35px',
      marginTop: '-200px',
      minHeight: '450px',
    },
  },
  contactCard: {
    padding: '50px 40px',
    borderRadius: '20px !important',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15) !important',
    overflow: 'hidden',
    position: 'relative',
    background: 'white',
    maxWidth: '1280px',
    margin: '0 auto',
    "@media (max-width: 1200px)": {
      padding: '45px 35px',
    },
    "@media (max-width: 960px)": {
      padding: '40px 30px',
    },
    "@media (max-width: 600px)": {
      padding: '35px 25px',
      borderRadius: '15px !important',
    },
    "@media (max-width: 480px)": {
      padding: '30px 20px',
    },
    "@media (max-width: 375px)": {
      padding: '25px 15px',
      borderRadius: '12px !important',
    },
  },
  infoTitle: {
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '24px !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.4rem !important',
      marginBottom: '22px !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.3rem !important',
      marginBottom: '20px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.2rem !important',
      marginBottom: '18px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.1rem !important',
      marginBottom: '16px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '1rem !important',
      marginBottom: '14px !important',
    },
  },
  infoText: {
    color: '#666 !important',
    fontSize: '1rem !important',
    marginBottom: '15px !important',
    "@media (max-width: 1200px)": {
      fontSize: '0.95rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.85rem !important',
      marginBottom: '12px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.8rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.75rem !important',
      marginBottom: '10px !important',
    },
  },
  contactInfoItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
    "@media (max-width: 1200px)": {
      marginBottom: '18px',
    },
    "@media (max-width: 960px)": {
      marginBottom: '16px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '14px',
    },
    "@media (max-width: 480px)": {
      marginBottom: '12px',
    },
    "@media (max-width: 375px)": {
      marginBottom: '10px',
    },
  },
  contactIcon: {
    color: '#2A2B6A',
    marginRight: '15px',
    marginTop: '2px',
    "@media (max-width: 1200px)": {
      marginRight: '14px',
    },
    "@media (max-width: 960px)": {
      marginRight: '12px',
    },
    "@media (max-width: 600px)": {
      marginRight: '10px',
      fontSize: '1.2rem !important',
    },
    "@media (max-width: 480px)": {
      marginRight: '8px',
      fontSize: '1.1rem !important',
    },
    "@media (max-width: 375px)": {
      marginRight: '6px',
      fontSize: '1rem !important',
    },
  },
  contactText: {
    color: '#4A4A4A',
    fontSize: '1rem !important',
    '& a': {
      color: '#4A4A4A',
      textDecoration: 'none',
      transition: 'color 0.3s',
      '&:hover': {
        color: '#2A2B6A',
      },
    },
    "@media (max-width: 1200px)": {
      fontSize: '0.95rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.85rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.8rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.75rem !important',
    },
  },
  socialContainer: {
    marginTop: '30px',
    "@media (max-width: 1200px)": {
      marginTop: '28px',
    },
    "@media (max-width: 960px)": {
      marginTop: '25px',
    },
    "@media (max-width: 600px)": {
      marginTop: '22px',
    },
    "@media (max-width: 480px)": {
      marginTop: '20px',
    },
    "@media (max-width: 375px)": {
      marginTop: '18px',
    },
  },
  socialTitle: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '16px !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.15rem !important',
      marginBottom: '15px !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.1rem !important',
      marginBottom: '14px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.05rem !important',
      marginBottom: '12px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1rem !important',
      marginBottom: '10px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.95rem !important',
      marginBottom: '8px !important',
    },
  },
  socialIconsWrapper: {
    display: 'flex',
    gap: '15px',
    "@media (max-width: 1200px)": {
      gap: '14px',
    },
    "@media (max-width: 960px)": {
      gap: '12px',
    },
    "@media (max-width: 600px)": {
      gap: '10px',
    },
    "@media (max-width: 480px)": {
      gap: '8px',
    },
    "@media (max-width: 375px)": {
      gap: '6px',
    },
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(90, 48, 255, 0.05)',
    color: '#2A2B6A',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#2A2B6A',
      color: 'white',
      transform: 'translateY(-3px)',
    },
    "@media (max-width: 1200px)": {
      width: '38px',
      height: '38px',
    },
    "@media (max-width: 960px)": {
      width: '36px',
      height: '36px',
    },
    "@media (max-width: 600px)": {
      width: '34px',
      height: '34px',
    },
    "@media (max-width: 480px)": {
      width: '32px',
      height: '32px',
    },
    "@media (max-width: 375px)": {
      width: '30px',
      height: '30px',
    },
  },
  formTitle: {
    fontSize: '1.7rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '28px !important',
    position: 'relative',
    paddingBottom: '12px',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: '0',
      bottom: '0',
      width: '45px',
      height: '3px',
      backgroundColor: '#FFC614',
    },
    "@media (max-width: 1200px)": {
      fontSize: '1.6rem !important',
      marginBottom: '26px !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.5rem !important',
      marginBottom: '24px !important',
      paddingBottom: '10px',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.4rem !important',
      marginBottom: '22px !important',
      paddingBottom: '9px',
      '&:after': {
        width: '40px',
        height: '2.5px',
      },
    },
    "@media (max-width: 480px)": {
      fontSize: '1.3rem !important',
      marginBottom: '20px !important',
      paddingBottom: '8px',
      '&:after': {
        width: '35px',
        height: '2px',
      },
    },
    "@media (max-width: 375px)": {
      fontSize: '1.2rem !important',
      marginBottom: '18px !important',
      paddingBottom: '7px',
      '&:after': {
        width: '30px',
      },
    },
  },
  label: {
    color: '#555 !important',
    marginBottom: '8px !important',
    fontWeight: '500 !important',
    fontSize: '0.95rem !important',
    display: 'block !important',
    "@media (max-width: 1200px)": {
      fontSize: '0.93rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '0.9rem !important',
      marginBottom: '7px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.85rem !important',
      marginBottom: '6px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.8rem !important',
      marginBottom: '5px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.75rem !important',
      marginBottom: '4px !important',
    },
  },
  messageField: {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    fontFamily: 'inherit',
    fontSize: '1rem',
    backgroundColor: '#f9fafc',
    minHeight: '100px !important',
    resize: 'vertical',
    '&:focus': {
      outline: 'none',
      borderColor: '#2A2B6A',
    },
    "@media (max-width: 1200px)": {
      padding: '11px 14px',
      fontSize: '0.95rem',
      minHeight: '90px !important',
    },
    "@media (max-width: 960px)": {
      padding: '10px 12px',
      fontSize: '0.9rem',
      minHeight: '80px !important',
    },
    "@media (max-width: 600px)": {
      padding: '9px 10px',
      fontSize: '0.85rem',
      minHeight: '70px !important',
    },
    "@media (max-width: 480px)": {
      padding: '8px 10px',
      fontSize: '0.8rem',
      minHeight: '60px !important',
    },
    "@media (max-width: 375px)": {
      padding: '7px 8px',
      fontSize: '0.75rem',
      minHeight: '50px !important',
    },
  },
  submitButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '14px 30px !important',
    borderRadius: '10px !important',
    fontWeight: 'bold !important',
    fontSize: '1.1rem !important',
    transition: 'all 0.3s ease !important',
    marginTop: '15px !important',
    boxShadow: '0 4px 10px rgba(42, 43, 106, 0.2) !important',
    '&:hover': {
      backgroundColor: '#1a1b4f !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 20px rgba(42, 43, 106, 0.4) !important',
    },
    '&.Mui-disabled': {
      backgroundColor: 'rgba(42, 43, 106, 0.7) !important',
      color: 'rgba(255, 255, 255, 0.8) !important',
    },
    "@media (max-width: 1200px)": {
      padding: '13px 28px !important',
      fontSize: '1.05rem !important',
    },
    "@media (max-width: 960px)": {
      padding: '12px 25px !important',
      fontSize: '1rem !important',
    },
    "@media (max-width: 600px)": {
      padding: '10px 20px !important',
      fontSize: '0.95rem !important',
      borderRadius: '8px !important',
    },
    "@media (max-width: 480px)": {
      padding: '8px 18px !important',
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 375px)": {
      padding: '7px 15px !important',
      fontSize: '0.85rem !important',
      borderRadius: '6px !important',
    },
  },
  buttonProgress: {
    color: 'white !important',
    marginRight: '10px !important',
    "@media (max-width: 600px)": {
      marginRight: '8px !important',
    },
    "@media (max-width: 375px)": {
      marginRight: '6px !important',
    },
  },
});

const ContactFormSection = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  
  // New states for API integration
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    type: 'success',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('https://airesume.gigaversity.in/submit_contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.status === 'success') {
        // Handle success
        setNotification({
          open: true,
          type: 'success',
          message: data.message
        });
        
        // Reset form on success
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        // Handle error
        setNotification({
          open: true,
          type: 'error',
          message: data.message
        });
      }
    } catch (error) {
      // Handle network or other errors
      setNotification({
        open: true,
        type: 'error',
        message: 'An error occurred. Please try again later.'
      });
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotification({...notification, open: false});
  };

  return (
    <Box className={classes.contactSection}>
      <Paper className={classes.contactCard} elevation={3}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '40px', md: '60px' } }}>
          {/* Left Side - Contact Information */}
          <Box sx={{ flex: '1' }}>
            <Typography variant="h5" className={classes.infoTitle}>
              Get in touch
            </Typography>
            <Typography variant="body1" className={classes.infoText}>
              Reach out to our team for any questions about our programs, partnerships, or career opportunities.
            </Typography>

            {/* Contact Details */}
            <Box sx={{ mt: 4 }}>
              <Box className={classes.contactInfoItem}>
                <PhoneIcon className={classes.contactIcon} />
                <Typography className={classes.contactText}>
                  <Link href="tel:+919849048999">8062179357</Link>
                </Typography>
              </Box>

              <Box className={classes.contactInfoItem}>
                <EmailIcon className={classes.contactIcon} />
                <Typography className={classes.contactText}>
                  <Link href="mailto:Info@gigaversity.in">Info@gigaversity.in</Link>
                </Typography>
              </Box>

              <Box className={classes.contactInfoItem}>
                <LanguageIcon className={classes.contactIcon} />
                <Typography className={classes.contactText}>
                  <Link href="https://www.gigaversity.in" target="_blank">
                    www.gigaversity.in
                  </Link>
                </Typography>
              </Box>

              <Box className={classes.contactInfoItem}>
                <LocationOnIcon className={classes.contactIcon} />
                <Typography className={classes.contactText}>
                  Dwaraka Pride - The headquarters, Madhapur, Hyderabad, Telangana
                </Typography>
              </Box>
            </Box>

            {/* Social Media */}
            <Box className={classes.socialContainer}>
              <Typography variant="h6" className={classes.socialTitle}>
                Connect with us on Social Media
              </Typography>
              <Box className={classes.socialIconsWrapper}>
                <Link 
                  href="https://www.facebook.com/share/1BCGVFefmp/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.socialIcon}
                >
                  <FacebookIcon />
                </Link>
                <Link 
                  href="https://www.linkedin.com/company/gigaversity/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className={classes.socialIcon}
                >
                  <LinkedInIcon />
                </Link>
                {/* <Link 
                  href="https://www.youtube.com/channel/gigaversity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.socialIcon}
                >
                  <YouTubeIcon />
                </Link> */}
                <Link 
                  href="https://www.instagram.com/gigaversity.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.socialIcon}
                >
                  <InstagramIcon />
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Right Side - Contact Form */}
          <Box sx={{ flex: '1' }}>
            <Typography variant="h5" className={classes.formTitle}>
              Send us a message
            </Typography>

            <form onSubmit={handleSubmit}>
              <Box sx={{ mb: 3 }}>
                <InputLabel htmlFor="name" className={classes.label}>
                  Name
                </InputLabel>
                <TextField
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  placeholder="Your Name"
                  InputProps={{
                    sx: {
                      borderRadius: '8px',
                      backgroundColor: '#f9fafc',
                      height: '50px',
                      '@media (max-width: 600px)': {
                        height: '45px',
                      },
                      '@media (max-width: 375px)': {
                        height: '40px',
                      },
                    },
                  }}
                  disabled={loading}
                />
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'row', mb: 3 }}>
                {/* Phone field */}
                <Box sx={{ flex: 1, mr: 2 }}>
                  <InputLabel htmlFor="phone" className={classes.label}>
                    Phone
                  </InputLabel>
                  <TextField
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    placeholder="Your Phone Number"
                    InputProps={{
                      sx: {
                        borderRadius: '8px',
                        backgroundColor: '#f9fafc',
                        height: '50px',
                        '@media (max-width: 600px)': {
                          height: '45px',
                        },
                        '@media (max-width: 375px)': {
                          height: '40px',
                        },
                      },
                    }}
                    disabled={loading}
                  />
                </Box>
                
                {/* Email field */}
                <Box sx={{ flex: 1 }}>
                  <InputLabel htmlFor="email" className={classes.label}>
                    E-mail
                  </InputLabel>
                  <TextField
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    placeholder="Your Email Address"
                    InputProps={{
                      sx: {
                        borderRadius: '8px',
                        backgroundColor: '#f9fafc',
                        height: '50px',
                        '@media (max-width: 600px)': {
                          height: '45px',
                        },
                        '@media (max-width: 375px)': {
                          height: '40px',
                        },
                      },
                    }}
                    disabled={loading}
                  />
                </Box>
              </Box>

              {/* Subject field */}
              <Box sx={{ mb: 3 }}>
                <InputLabel htmlFor="subject" className={classes.label}>
                  Subject
                </InputLabel>
                <TextField
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  placeholder="What is this regarding?"
                  InputProps={{
                    sx: {
                      borderRadius: '8px',
                      backgroundColor: '#f9fafc',
                      height: '50px',
                      '@media (max-width: 600px)': {
                        height: '45px',
                      },
                      '@media (max-width: 375px)': {
                        height: '40px',
                      },
                    },
                  }}
                  disabled={loading}
                />
              </Box>

              {/* Message field */}
              <Box sx={{ mt: 3 }}>
                <InputLabel htmlFor="message" className={classes.label}>
                  Message
                </InputLabel>
                <TextareaAutosize 
                  id="message"
                  name="message"
                  value={formData.message} 
                  onChange={handleChange} 
                  className={classes.messageField}  
                  placeholder="How can we help you?"
                  minRows={3}
                  maxRows={6}
                  disabled={loading}
                />
              </Box>

              {/* Submit Button */}
              <Box sx={{ mt: 4 }}>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.submitButton}
                  fullWidth
                  sx={{ height: { xs: '45px', sm: '50px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  disabled={loading}
                >
                  {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                  {loading ? 'Sending...' : 'Send'}
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Paper>

      {/* Snackbar for notifications */}
      <Snackbar 
        open={notification.open} 
        autoHideDuration={6000} 
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.type} 
          sx={{ width: '100%', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactFormSection;