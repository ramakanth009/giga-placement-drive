// src/components/resumebuilder/ResumeBuilderSection.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import SpeedIcon from '@mui/icons-material/Speed';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

// Define styles using makeStyles
const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fc 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: '2.8rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '16px !important',
    lineHeight: '1.2 !important',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: '#FFC614',
      borderRadius: '2px',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.4rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
    },
  },
  highlightText: {
    color: '#FFC614 !important',
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#555 !important',
    marginTop: '25px !important',
    maxWidth: '700px',
    margin: '25px auto 0 !important',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      gap: '40px',
    },
  },
  benefitsColumn: {
    width: '50%',
    padding: '0 30px',
    '@media (max-width: 960px)': {
      width: '100%',
      padding: '0',
    },
  },
  resumePreviewColumn: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 960px)': {
      width: '100%',
      maxWidth: '500px',
    },
  },
  benefitCard: {
    display: 'flex',
    alignItems: 'flex-start',
    background: 'white',
    padding: '20px 25px',
    marginBottom: '20px',
    borderRadius: '16px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
      '& $benefitIcon': {
        transform: 'rotateY(180deg)',
      },
    },
    '@media (max-width: 600px)': {
      padding: '16px 20px',
      marginBottom: '15px',
    },
  },
  benefitIconContainer: {
    minWidth: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
    background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.1) 0%, rgba(255, 198, 20, 0.1) 100%)',
    '@media (max-width: 600px)': {
      minWidth: '50px',
      height: '50px',
      marginRight: '15px',
    },
  },
  benefitIcon: {
    color: '#2A2B6A',
    fontSize: '28px !important',
    transition: 'transform 0.5s ease',
    '@media (max-width: 600px)': {
      fontSize: '24px !important',
    },
  },
  benefitTitle: {
    fontSize: '1.2rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    marginBottom: '5px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
  },
  benefitText: {
    fontSize: '0.95rem !important',
    color: '#555 !important',
    lineHeight: '1.5 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  resumePreview: {
    width: '100%',
    maxWidth: '400px',
    height: '550px',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)',
    overflow: 'hidden',
    '@media (max-width: 600px)': {
      height: '480px',
    },
  },
  resumeHeader: {
    height: '80px',
    background: '#2A2B6A',
    padding: '20px',
    position: 'relative',
  },
  profileCircle: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    position: 'absolute',
    top: '40px',
    left: '20px',
  },
  headerLine: {
    height: '10px',
    width: '60%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  headerSubLine: {
    height: '6px',
    width: '40%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '3px',
  },
  resumeBody: {
    padding: '50px 20px 20px',
  },
  resumeSection: {
    marginBottom: '20px',
  },
  sectionTitle: {
    height: '16px',
    width: '40%',
    backgroundColor: '#2A2B6A',
    opacity: 0.7,
    borderRadius: '8px',
    marginBottom: '15px',
  },
  sectionContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  contentLine: {
    height: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
  },
  buildButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
    position: 'relative',
  },
  buildButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '15px 30px !important', // Larger padding for prominence
    borderRadius: '50px !important',
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    textTransform: 'none !important',
    transition: 'all 0.3s ease !important',
    boxShadow: '0 10px 25px rgba(42, 43, 106, 0.2) !important',
    '&:hover': {
      backgroundColor: '#373881 !important',
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 35px rgba(42, 43, 106, 0.3) !important',
    },
    '@media (max-width: 600px)': {
      padding: '14px 30px !important',
      fontSize: '1.1rem !important',
    },
  },
  buildButtonIcon: {
    fontSize: '1.4rem !important',
    marginRight: '10px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
    },
  },
  freeBadge: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    backgroundColor: '#FFC614',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
  gradientCircle: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(80px)',
    zIndex: 0,
  },
  blueCircle: {
    width: '500px',
    height: '500px',
    bottom: '-250px',
    left: '-150px',
    background: 'radial-gradient(circle, rgba(42, 43, 106, 0.1) 0%, rgba(42, 43, 106, 0) 70%)',
  },
  yellowCircle: {
    width: '400px',
    height: '400px',
    top: '-150px',
    right: '-100px',
    background: 'radial-gradient(circle, rgba(255, 198, 20, 0.08) 0%, rgba(255, 198, 20, 0) 70%)',
  },
});

// Main component
const ResumeBuilderSection = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [animated, setAnimated] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setAnimated(true);
  }, []);

  // Navigate to resume builder page on button click
  const handleBuildClick = () => {
    navigate('/resume-builder');
  };

  // List of benefits
  const benefits = [
    {
      icon: <SpeedIcon className={classes.benefitIcon} />,
      title: "ATS-Optimized Templates",
      text: "Beat applicant tracking systems with templates designed to pass automated screening.",
    },
    {
      icon: <StarIcon className={classes.benefitIcon} />,
      title: "Industry-Specific Keywords",
      text: "Improve your match rate with job descriptions by using relevant technical keywords.",
    },
    {
      icon: <VisibilityIcon className={classes.benefitIcon} />,
      title: "Portfolio Showcase",
      text: "Highlight your projects and technical achievements that make you stand out.",
    },
    {
      icon: <RocketLaunchIcon className={classes.benefitIcon} />,
      title: "Quick & User-Friendly",
      text: "Create a professional tech resume in under 10 minutes with our guided builder.",
    },
  ];

  return (
    <Box className={classes.section}>
      {/* Background gradient circles */}
      <Box className={`${classes.gradientCircle} ${classes.blueCircle}`} />
      <Box className={`${classes.gradientCircle} ${classes.yellowCircle}`} />

      <Container maxWidth="lg" className={classes.container}>
        {/* Header */}
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            Craft Your <span className={classes.highlightText}>Free</span> Tech Resume
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Build your resume for free with our AI-powered tool designed to impress technical recruiters.
          </Typography>
        </Box>

        {/* Main Content */}
        <Box className={classes.mainContent}>
          {/* Benefits Column */}
          <Box className={classes.benefitsColumn}>
            {benefits.map((benefit, index) => (
              <Box
                key={index}
                className={classes.benefitCard}
                sx={{
                  opacity: animated ? 1 : 0,
                  transform: animated ? 'translateX(0)' : 'translateX(-30px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  transitionDelay: `${index * 0.15}s`,
                }}
              >
                <Box className={classes.benefitIconContainer}>{benefit.icon}</Box>
                <Box>
                  <Typography className={classes.benefitTitle}>{benefit.title}</Typography>
                  <Typography className={classes.benefitText}>{benefit.text}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Resume Preview Column */}
          <Box
            className={classes.resumePreviewColumn}
            sx={{
              opacity: animated ? 1 : 0,
              transform: animated ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
              transitionDelay: '0.4s',
            }}
          >
            <Box className={classes.resumePreview}>
              <Box className={classes.resumeHeader}>
                <Box className={classes.headerLine} />
                <Box className={classes.headerSubLine} />
                <Box className={classes.profileCircle} />
              </Box>
              <Box className={classes.resumeBody}>
                {/* Experience Section */}
                <Box className={classes.resumeSection}>
                  <Box className={classes.sectionTitle} />
                  <Box className={classes.sectionContent}>
                    <Box className={classes.contentLine} sx={{ width: '100%' }} />
                    <Box className={classes.contentLine} sx={{ width: '95%' }} />
                    <Box className={classes.contentLine} sx={{ width: '90%' }} />
                    <Box className={classes.contentLine} sx={{ width: '85%' }} />
                  </Box>
                </Box>
                {/* Education Section */}
                <Box className={classes.resumeSection}>
                  <Box className={classes.sectionTitle} />
                  <Box className={classes.sectionContent}>
                    <Box className={classes.contentLine} sx={{ width: '100%' }} />
                    <Box className={classes.contentLine} sx={{ width: '80%' }} />
                    <Box className={classes.contentLine} sx={{ width: '90%' }} />
                  </Box>
                </Box>
                {/* Skills Section */}
                <Box className={classes.resumeSection}>
                  <Box className={classes.sectionTitle} />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {[...Array(8)].map((_, i) => (
                      <Box
                        key={i}
                        sx={{
                          height: '30px',
                          width: `${Math.floor(Math.random() * 30) + 60}px`,
                          backgroundColor: i % 3 === 0 ? 'rgba(255, 198, 20, 0.2)' : '#f0f0f0',
                          borderRadius: '15px',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                {/* Projects Section */}
                <Box className={classes.resumeSection}>
                  <Box className={classes.sectionTitle} />
                  <Box className={classes.sectionContent}>
                    <Box className={classes.contentLine} sx={{ width: '100%' }} />
                    <Box className={classes.contentLine} sx={{ width: '95%' }} />
                    <Box className={classes.contentLine} sx={{ width: '90%' }} />
                    <Box className={classes.contentLine} sx={{ width: '80%' }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Call-to-Action Button */}
        <Box className={classes.buildButtonContainer}>
          <Button
            variant="contained"
            className={classes.buildButton}
            onClick={handleBuildClick}
            startIcon={<DocumentScannerIcon className={classes.buildButtonIcon} />}
            sx={{
              opacity: animated ? 1 : 0,
              transform: animated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
              transitionDelay: '0.7s',
            }}
          >
            Build Your Resume Now
          </Button>
          <span className={classes.freeBadge}>Free</span>
        </Box>
      </Container>
    </Box>
  );
};

export default ResumeBuilderSection;