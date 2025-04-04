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
  Grid
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navbar from "../../components/common/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import Background from '../../components/homepagecomponets/background/Background';

// Social media icons
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language'
const useStyles = makeStyles({
  heroSection: {
    position: 'relative',
    background: 'url(/path/to/your/image.jpg) no-repeat center center',
    color: 'white',
    padding: '80px 30px 400px',
    textAlign: 'center',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: '#2A2B6A',
      clipPath: 'polygon(0 0, 100% 0, 100% 66%, 0 100%)',
      zIndex: -1,
      height: '598px',
      width: '100%',
    },
  },
  pageTitle: {
    color: 'white !important',
    fontSize: '3rem !important',
    fontWeight: 'bold !important',
    marginBottom: '1rem !important',
  },
  pageSubtitle: {
    color: 'white !important',
    fontSize: '1.2rem !important',
    maxWidth: '800px',
    margin: '0 auto !important',
  },
  contactSection: {
    padding: '0 30px 60px',
    background: 'transparent',
    minHeight: '600px',
    marginTop: '-300px', // Adjusted to blend with hero section
    position: 'relative',
    zIndex: 1,
  },
  contactCard: {
    padding: '50px 40px',
    borderRadius: '20px !important',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15) !important', // Slightly increased shadow
    overflow: 'hidden',
    position: 'relative',
    background: 'white',
    maxWidth: '1280px',
    margin: '0 auto',
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
      width: '45px',
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
    minHeight: '30px !important',
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
    height: '500px',
    width: '100%',
    marginTop: '50px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '1280px',
    margin: '0 auto',
  },
  mapContainer: {
    height: '100%',
    width: '100%',
  },
  // Responsive styles
  '@media (max-width: 960px)': {
    contactCard: {
      padding: '40px 30px',
    },
  },
  '@media (max-width: 600px)': {
    heroSection: {
      padding: '60px 20px 300px', // Adjusted for mobile while maintaining shape
    },
    pageTitle: {
      fontSize: '2.2rem !important',
    },
    contactCard: {
      padding: '30px 20px',
      marginTop: '-120px', // Adjusted margin for mobile
    },
    contactSection: {
      padding: '0 20px 60px',
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
                  <Box sx={{ display: 'flex', flexDirection: 'row', mb: 3 }}>
                    {/* Name field */}
                    <Box sx={{ flex: 1, mr: 2 }}>
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
                    
                    {/* Company field */}
                    <Box sx={{ flex: 1 }}>
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
                  </Box>

                  {/* Phone and Email row */}
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
                          },
                        }}
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
                          },
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Subject in its own row */}
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
                        },
                      }}
                    />
                  </Box>

                  {/* Message in its own row */}
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
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #e0e0e0',
                        backgroundColor: '#f9fafc',
                        fontSize: '14px',
                        fontFamily: 'inherit',
                        height: '10px',
                        boxSizing: 'border-box', // This ensures padding is included in width calculation
                      }} 
                    />
                  </Box>

                  {/* Submit Button in its own row */}
                  <Box sx={{ mt: 4 }}>
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
                </form>
              </Box>
            </Box>
          </Paper>

          {/* Map Section */}
          <Box className={classes.mapSection}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.309174296064!2d78.3854539!3d17.4449101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e182b67081%3A0x5a8c3fca53ad932b!2sDwaraka%20Pride%20-The%20Headquarters%20Coworking%20Space%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1743279092017!5m2!1sen!2sin"
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