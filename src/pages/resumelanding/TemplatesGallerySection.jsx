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
    padding: '3rem 1.5rem',
    background: 'linear-gradient(135deg, #0f0f3a 0%, #1a1a4a 100%)',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 1200px)': {
      padding: '2.5rem 1.2rem',
    },
    '@media (max-width: 960px)': {
      padding: '2rem 1rem',
    },
    '@media (max-width: 600px)': {
      padding: '1.8rem 0.8rem',
    },
    '@media (max-width: 480px)': {
      padding: '1.5rem 0.5rem',
    },
    '@media (max-width: 375px)': {
      padding: '1.2rem 0.3rem',
    },
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      maxWidth: '100%',
    },
  },
  titleSection: {
    textAlign: 'center',
    marginBottom: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 1200px)': {
      marginBottom: '1.8rem',
    },
    '@media (max-width: 960px)': {
      marginBottom: '1.5rem',
    },
    '@media (max-width: 600px)': {
      marginBottom: '1.2rem',
    },
    '@media (max-width: 480px)': {
      marginBottom: '1rem',
    },
    '@media (max-width: 375px)': {
      marginBottom: '0.8rem',
    },
  },
  title: {
    fontSize: '2.2rem !important',
    fontWeight: 'bold !important',
    color: '#ffffff',
    marginBottom: '1rem !important',
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
      fontSize: '2rem !important',
      marginBottom: '0.8rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
      marginBottom: '0.7rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.6rem !important',
      marginBottom: '0.6rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.4rem !important',
      marginBottom: '0.5rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.2rem !important',
      marginBottom: '0.4rem !important',
    },
  },
  subtitle: {
    fontSize: '1rem !important',
    color: '#a0a0a0 !important',
    textAlign: 'center !important',
    maxWidth: '800px',
    lineHeight: '1.6 !important',
    margin: '0 !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.95rem !important',
      maxWidth: '700px',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.9rem !important',
      maxWidth: '90%',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
      maxWidth: '100%',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem !important',
      lineHeight: '1.5 !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem !important',
      lineHeight: '1.4 !important',
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
    '@media (max-width: 960px)': {
      padding: '15px 0',
    },
    '@media (max-width: 600px)': {
      padding: '12px 0',
    },
    '@media (max-width: 480px)': {
      padding: '10px 0',
    },
    '@media (max-width: 375px)': {
      padding: '8px 0',
    },
  },
  slider: {
    display: 'flex',
    gap: '25px',
    animation: '$slide 30s linear infinite',
    '&:hover': {
      animationPlayState: 'paused',
    },
    '@media (max-width: 1200px)': {
      gap: '20px',
    },
    '@media (max-width: 960px)': {
      gap: '18px',
    },
    '@media (max-width: 600px)': {
      gap: '15px',
    },
    '@media (max-width: 480px)': {
      gap: '12px',
    },
    '@media (max-width: 375px)': {
      gap: '10px',
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
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    flexShrink: 0,
    width: '250px',
    height: '320px',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    },
    '@media (max-width: 1200px)': {
      width: '230px',
      height: '290px',
    },
    '@media (max-width: 960px)': {
      width: '210px',
      height: '270px',
    },
    '@media (max-width: 600px)': {
      width: '190px',
      height: '240px',
    },
    '@media (max-width: 480px)': {
      width: '170px',
      height: '220px',
    },
    '@media (max-width: 375px)': {
      width: '150px',
      height: '200px',
    },
  },
  templateImage: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
    borderRadius: '16px',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    transition: 'border-color 0.3s ease',
    '@media (max-width: 600px)': {
      borderRadius: '12px',
    },
    '@media (max-width: 480px)': {
      borderRadius: '10px',
    },
    '@media (max-width: 375px)': {
      borderRadius: '8px',
    },
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