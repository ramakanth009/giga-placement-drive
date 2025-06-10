import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Template1 from "../../assets/templates/ramakanth_kannuri_page-0001.jpg"
import Template2 from "../../assets/templates/ramakanth_kannuri_page-0002.jpg"
import Template3 from "../../assets/templates/ramakanth_kannuri_page-0003.jpg"
import Template4 from "../../assets/templates/ramakanth_kannuri_page-0004.jpg"
import Template5 from "../../assets/templates/ramakanth_kannuri_page-0005.jpg"

const useStyles = makeStyles({
  root: {
    padding: '40px 32px',
    background: 'linear-gradient(135deg, #0f0f3a 0%, #1a1a4a 100%)',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 1200px)': {
      padding: '60px 28px',
    },
    '@media (max-width: 960px)': {
      padding: '80px 24px',
    },
    '@media (max-width: 600px)': {
      padding: '60px 16px',
    },
    '@media (max-width: 480px)': {
      padding: '50px 12px',
    },
    '@media (max-width: 375px)': {
      padding: '40px 8px',
    },
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  },
  titleSection: {
    textAlign: 'center',
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 1200px)': {
      marginBottom: '40px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '50px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '50px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '40px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '30px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#ffffff',
    marginBottom: '10px !important',
    letterSpacing: '-0.02em',
    textAlign: 'center',
    borderRadius: '18px',
    display: 'inline-block',
    position: 'relative',
    zIndex: 2,
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.8rem !important',
      marginBottom: '30px !important',
      padding: '14px 20px',
    },
    '@media (max-width: 600px)': {
      fontSize: '2.2rem !important',
      padding: '10px 8px',
      borderRadius: '12px',
    },
    '@media (max-width: 480px)': {
      fontSize: '2rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.8rem !important',
    },
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#a0a0a0 !important',
    textAlign: 'center !important',
    maxWidth: '800px',
    lineHeight: '1.6 !important',
    margin: '0 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '90%',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
    },
  },
  templatesGrid: {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    width: '100vw',
    margin: '0 auto',
    padding: '20px 0',
    marginLeft: 'calc(-50vw + 50%)',
    marginRight: 'calc(-50vw + 50%)',
  },
  slider: {
    display: 'flex',
    gap: '30px',
    animation: '$slide 30s linear infinite',
    '&:hover': {
      animationPlayState: 'paused',
    },
  },
  '@keyframes slide': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(-50%)',
    },
  },
  templateSlide: {
    flex: '0 0 280px',
    height: '350px',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    },
    '@media (max-width: 1200px)': {
      flex: '0 0 260px',
      height: '320px',
    },
    '@media (max-width: 960px)': {
      flex: '0 0 240px',
      height: '300px',
    },
    '@media (max-width: 600px)': {
      flex: '0 0 220px',
      height: '280px',
    },
    '@media (max-width: 480px)': {
      flex: '0 0 200px',
      height: '260px',
    },
    '@media (max-width: 375px)': {
      flex: '0 0 180px',
      height: '240px',
    },
  },
  templateImage: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
    borderRadius: '16px',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    transition: 'border-color 0.3s ease',
  },
  templateSlideHover: {
    '&:hover $templateImage': {
      borderColor: 'rgba(255, 198, 20, 0.6)',
    },
  },
});

const TemplatesGallerySection = () => {
  const classes = useStyles();

  // Mock template data - replace with actual template images
  const templatesData = [
    {
      id: 'template1',
      image: Template1,
      name: 'Professional Template'
    },
    {
      id: 'template2',
      image: Template2,
      name: 'Creative Template'
    },
    {
      id: 'template3',
      image: Template3,
      name: 'Modern Template'
    },
    {
      id: 'template4',
      image: Template4,
      name: 'Executive Template'
    },
    {
      id: 'template5',
      image: Template5,
      name: 'Minimalist Template'
    },
    // {
    //   id: 'template6',
    //   image: 'https://via.placeholder.com/280x320/38a169/ffffff?text=Template+6',
    //   name: 'Tech Template'
    // },
    // {
    //   id: 'template7',
    //   image: 'https://via.placeholder.com/280x320/d69e2e/ffffff?text=Template+7',
    //   name: 'Design Template'
    // },
    // {
    //   id: 'template8',
    //   image: 'https://via.placeholder.com/280x320/e53e3e/ffffff?text=Template+8',
    //   name: 'Sales Template'
    // },
  ];

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.titleSection}>
          <Typography variant="h2" className={classes.title}>
            Explore Our Collection of <span>Professional Templates</span>
          </Typography>
          <Typography className={classes.subtitle}>
            A wide range of professionally designed, ATS-compatible templates tailored for different roles, industries, and experience levels.
          </Typography>
        </Box>

        <Box className={classes.templatesGrid}>
          <Box className={classes.slider}>
            {[...templatesData, ...templatesData].map((template, index) => (
              <Box
                key={`${template.id}-${index}`}
                className={`${classes.templateSlide} ${classes.templateSlideHover}`}
              >
                <img 
                  src={template.image}
                  alt={template.name}
                  className={classes.templateImage}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TemplatesGallerySection;