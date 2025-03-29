// src/pages/contactus/ContactUs.jsx
// This file should be placed in src/pages/contactus/ContactUs.jsx
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  TextField, 
  Button, 
  Grid, 
  Paper,
  Link,
  InputLabel,
  TextareaAutosize
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Background from '../../components/background/Background';

// Social media icons
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const useStyles = makeStyles({
  heroSection: {
    background: 'linear-gradient(135deg, #0a192f 0%, #284b82 100%)',
    color: 'white',
    padding: '60px 0 60px',
    position: 'relative',
    textAlign: 'center',
  },
  pageTitle: {
    fontSize: '3rem !important',
    fontWeight: 'bold !important',
    marginBottom: '16px !important',
  },
  pageSubtitle: {
    fontSize: '1.2rem !important',
    maxWidth: '700px',
    margin: '0 auto !important',
    lineHeight: '1.6 !important',
  },
  contactSection: {
    padding: '0',
    background: '#f9fafc',
  },
  contactCard: {
    padding: '40px 20px',
    borderRadius: '0 !important',
    boxShadow: 'none !important',
    overflow: 'hidden',
    position: 'relative',
    background: 'white',
    marginTop: '0',
    width: '100%',
    maxWidth: '100%',
  },
  infoTitle: {
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '24px !important',
  },
  infoText: {
    color: '#666 !important',
    fontSize: '1rem !important',
    marginBottom: '15px !important',
  },
  contactInfoItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
  },
  contactIcon: {
    color: '#2A2B6A',
    marginRight: '15px',
    marginTop: '2px',
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
  },
  socialContainer: {
    marginTop: '30px',
  },
  socialTitle: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '16px !important',
  },
  socialIconsWrapper: {
    display: 'flex',
    gap: '15px',
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f3f9',
    color: '#2A2B6A',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#2A2B6A',
      color: 'white',
      transform: 'translateY(-3px)',
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
      width: '40px',
      height: '3px',
      backgroundColor: '#FFC614',
    },
  },
  formField: {
    marginBottom: '20px !important',
  },
  label: {
    color: '#555 !important',
    marginBottom: '8px !important',
    fontWeight: '500 !important',
    fontSize: '0.95rem !important',
    display: 'block !important',
  },
  messageField: {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    fontFamily: 'inherit',
    fontSize: '1rem',
    backgroundColor: '#f9fafc',
    minHeight: '120px',
    resize: 'vertical',
    '&:focus': {
      outline: 'none',
      borderColor: '#2A2B6A',
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
  },
  mapSection: {
    height: '450px',
    width: '100%',
    marginTop: '0',
    borderRadius: '0',
    overflow: 'hidden',
  },
  // Responsive styles
  '@media (max-width: 960px)': {
    contactCard: {
      padding: '30px',
    },
  },
  '@media (max-width: 600px)': {
    pageTitle: {
      fontSize: '2.2rem !important',
    },
    heroSection: {
      padding: '60px 0 40px',
    },
    contactCard: {
      padding: '25px',
      marginTop: '-60px',
    },
  },
});

const ContactUs = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend or an email service
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Background />

      {/* Content with higher z-index */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Navbar />

        {/* Hero Section */}
        <Box className={classes.heroSection}>
            <Typography variant="h1" className={classes.pageTitle}>
              Contact Us
            </Typography>
            <Typography variant="h6" className={classes.pageSubtitle}>
              Whether you're looking to upskill, switch careers, or hire top talent, Gigaversity is here
              to support your journey!
            </Typography>
        </Box>

        {/* Contact Section */}
        <Box className={classes.contactSection}>
            <Paper className={classes.contactCard} elevation={0}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '30px', md: '40px' }, px: { xs: 2, sm: 4, md: 6 } }}>
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
                        <Link href="tel:+919849048999">9849048999</Link>
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
                        The Headquarters, Dwaraka Pride, Hitech City, 500018, Hyderabad, Telangana, India
                      </Typography>
                    </Box>
                  </Box>

                  {/* Social Media */}
                  <Box className={classes.socialContainer}>
                    <Typography variant="h6" className={classes.socialTitle}>
                      Connect with us on Social Media
                    </Typography>
                    <Box className={classes.socialIconsWrapper}>
                      <Link href="#" className={classes.socialIcon}>
                        <FacebookIcon />
                      </Link>
                      <Link href="#" className={classes.socialIcon}>
                        <LinkedInIcon />
                      </Link>
                      <Link href="#" className={classes.socialIcon}>
                        <TwitterIcon />
                      </Link>
                      <Link href="#" className={classes.socialIcon}>
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
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {/* Name Field */}
                      <Box>
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
                            },
                          }}
                        />
                      </Box>

                      {/* Company Field */}
                      <Box>
                        <InputLabel htmlFor="company" className={classes.label}>
                          Company
                        </InputLabel>
                        <TextField
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          variant="outlined"
                          fullWidth
                          placeholder="Your Company"
                          InputProps={{
                            sx: {
                              borderRadius: '8px',
                              backgroundColor: '#f9fafc',
                              height: '50px',
                            },
                          }}
                        />
                      </Box>

                      {/* Phone Field */}
                      <Box>
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
                            },
                          }}
                        />
                      </Box>

                      {/* Email Field */}
                      <Box>
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
                            },
                          }}
                        />
                      </Box>

                      {/* Subject Field */}
                      <Box>
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
                            },
                          }}
                        />
                      </Box>

                      {/* Message Field */}
                      <Box>
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
                          maxRows={4}
                          style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid #e0e0e0',
                            backgroundColor: '#f9fafc',
                            fontSize: '16px',
                            fontFamily: 'inherit',
                            height: 'auto',
                            maxHeight: '120px',
                          }}
                        />
                      </Box>

                      {/* Submit Button */}
                      <Box sx={{ mt: 2 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          className={classes.submitButton}
                          fullWidth
                          sx={{ height: '50px' }}
                        >
                          Send
                        </Button>
                      </Box>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Paper>

            {/* Map Section */}
            <Box className={classes.mapSection}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34203577092!2d78.27304392320808!3d17.41262782538929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1712704582025!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gigaversity Location"
              ></iframe>
            </Box>
        </Box>

        <Footer />
      </Box>
    </Box>
  );
};

export default ContactUs;