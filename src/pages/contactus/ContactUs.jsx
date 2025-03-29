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
    padding: '80px 0 50px',
    position: 'relative',
    textAlign: 'center',
  },
  waveShape: {
    position: 'absolute',
    bottom: '-1px',
    left: 0,
    width: '100%',
    overflow: 'hidden',
    lineHeight: 0,
    '& svg': {
      position: 'relative',
      display: 'block',
      width: 'calc(100% + 1.3px)',
      height: '70px',
    },
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
    padding: '60px 0',
    background: '#f9fafc',
  },
  contactCard: {
    padding: '40px',
    borderRadius: '20px !important',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1) !important',
    overflow: 'hidden',
    position: 'relative',
    background: 'white',
    marginTop: '-80px',
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
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '24px !important',
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
    padding: '12px 30px !important',
    borderRadius: '8px !important',
    fontWeight: 'bold !important',
    fontSize: '1rem !important',
    transition: 'all 0.3s ease !important',
    marginTop: '10px !important',
    '&:hover': {
      backgroundColor: '#1a1b4f !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 5px 15px rgba(42, 43, 106, 0.3) !important',
    },
  },
  mapSection: {
    height: '500px',
    width: '100%',
    marginTop: '50px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
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
          <Container maxWidth="lg">
            <Typography variant="h1" className={classes.pageTitle}>
              Contact Us
            </Typography>
            <Typography variant="h6" className={classes.pageSubtitle}>
              Whether you're looking to upskill, switch careers, or hire top talent, Gigaversity is here
              to support your journey!
            </Typography>
          </Container>

          {/* Wave Shape */}
          <Box className={classes.waveShape}>
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                fill="#ffffff"
              />
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                fill="#ffffff"
              />
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                fill="#ffffff"
              />
            </svg>
          </Box>
        </Box>

        {/* Contact Section */}
        <Box className={classes.contactSection}>
          <Container maxWidth="lg">
            <Paper className={classes.contactCard} elevation={3}>
              <Grid container spacing={4}>
                {/* Left Side - Contact Information */}
                <Grid item xs={12} md={5}>
                  <Typography variant="h5" className={classes.infoTitle}>
                    Get in touch
                  </Typography>
                  <Typography variant="body1" className={classes.infoText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                </Grid>

                {/* Right Side - Contact Form */}
                <Grid item xs={12} md={7}>
                  <Typography variant="h5" className={classes.formTitle}>
                    Send us a message
                  </Typography>

                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
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
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
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
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
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
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
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
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12}>
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
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12}>
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
                          minRows={5}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          className={classes.submitButton}
                          fullWidth
                        >
                          Send
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
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
          </Container>
        </Box>

        <Footer />
      </Box>
    </Box>
  );
};

export default ContactUs;