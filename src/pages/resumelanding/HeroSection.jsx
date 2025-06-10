import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';

const HeroSection = ({ handleCTAClick }) => {
  const styles = {
    heroContainer: {
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #101138 0%, #1e1c44 50%, #2A2B6A 100%)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: '60px 0',
      overflow: 'hidden',
    },
    
    // Background decorative elements
    backgroundElements: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
    },
    
    floatingCircle: {
      position: 'absolute',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, rgba(255, 198, 20, 0.1) 0%, rgba(255, 198, 20, 0.05) 100%)',
      animation: 'float 8s ease-in-out infinite',
    },
    
    circle1: {
      width: '300px',
      height: '300px',
      top: '10%',
      left: '5%',
      animationDelay: '0s',
    },
    
    circle2: {
      width: '200px',
      height: '200px',
      top: '60%',
      right: '8%',
      animationDelay: '2s',
    },
    
    circle3: {
      width: '150px',
      height: '150px',
      bottom: '20%',
      left: '15%',
      animationDelay: '4s',
    },

    // Decorative icons
    decorativeIcon: {
      position: 'absolute',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #FFC614 0%, #FFB000 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
      boxShadow: '0 8px 32px rgba(255, 198, 20, 0.3)',
    },
    
    icon1: {
      top: '20%',
      right: '15%',
      animation: 'bounce 3s ease-in-out infinite',
    },
    
    icon2: {
      bottom: '25%',
      right: '25%',
      animation: 'bounce 3s ease-in-out infinite 1s',
    },
    
    icon3: {
      top: '50%',
      left: '8%',
      animation: 'bounce 3s ease-in-out infinite 2s',
    },
    
    icon4: {
      bottom: '15%',
      right: '45%',
      animation: 'bounce 3s ease-in-out infinite 0.5s',
    },

    // Content styles
    contentContainer: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
    },

    leftContent: {
      flex: 1,
      paddingRight: '40px',
    },

    mainHeading: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      color: '#ffffff',
      lineHeight: '1.1',
      marginBottom: '24px',
      fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    },

    highlightText: {
      color: '#FFC614',
      position: 'relative',
    },

    description: {
      fontSize: '1.125rem',
      color: '#E2E8F0',
      lineHeight: '1.6',
      marginBottom: '32px',
      maxWidth: '600px',
    },

    secondaryDescription: {
      fontSize: '1rem',
      color: '#CBD5E0',
      lineHeight: '1.6',
      marginBottom: '40px',
      maxWidth: '600px',
    },

    ctaButton: {
      background: 'linear-gradient(135deg, #FFC614 0%, #FFB000 100%)',
      color: '#1A202C',
      fontWeight: 'bold',
      fontSize: '1.125rem',
      padding: '16px 40px',
      borderRadius: '50px',
      textTransform: 'none',
      boxShadow: '0 8px 32px rgba(255, 198, 20, 0.4)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: 'none',
      cursor: 'pointer',
      marginBottom: '60px',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 12px 40px rgba(255, 198, 20, 0.5)',
        background: 'linear-gradient(135deg, #FFD700 0%, #FFC614 100%)',
      },
    },

    statsContainer: {
      display: 'flex',
      gap: '48px',
      marginTop: '20px',
    },

    statItem: {
      textAlign: 'left',
    },

    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#FFC614',
      lineHeight: '1',
      marginBottom: '8px',
      fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    },

    statLabel: {
      fontSize: '0.875rem',
      color: '#A0AEC0',
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },

    // Right side resume mockup
    rightContent: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },

    resumeMockup: {
      width: '400px',
      height: '500px',
      background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
      borderRadius: '24px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      padding: '32px',
      transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
      transition: 'all 0.3s ease',
    },

    resumeHeader: {
      borderBottom: '2px solid #E2E8F0',
      paddingBottom: '16px',
      marginBottom: '24px',
    },

    resumeSection: {
      marginBottom: '20px',
    },

    resumeSectionTitle: {
      fontSize: '0.875rem',
      fontWeight: 'bold',
      color: '#4A5568',
      marginBottom: '8px',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },

    resumeLine: {
      height: '8px',
      borderRadius: '4px',
      marginBottom: '6px',
    },

    resumeLineLong: {
      background: 'linear-gradient(90deg, #667EEA 0%, #764BA2 100%)',
      width: '100%',
    },

    resumeLineMedium: {
      background: 'linear-gradient(90deg, #FFC614 0%, #FFB000 100%)',
      width: '80%',
    },

    resumeLineShort: {
      background: 'linear-gradient(90deg, #48BB78 0%, #38A169 100%)',
      width: '60%',
    },

    // Mobile responsiveness
    '@media (max-width: 768px)': {
      heroContainer: {
        padding: '40px 0',
      },
      mainHeading: {
        fontSize: '2.5rem',
      },
      contentContainer: {
        flexDirection: 'column',
        textAlign: 'center',
      },
      leftContent: {
        paddingRight: '0',
        marginBottom: '40px',
      },
      statsContainer: {
        justifyContent: 'center',
        gap: '32px',
      },
      resumeMockup: {
        width: '300px',
        height: '400px',
        transform: 'none',
      },
      circle1: {
        width: '150px',
        height: '150px',
      },
      circle2: {
        width: '100px',
        height: '100px',
      },
      circle3: {
        width: '80px',
        height: '80px',
      },
    },
  };

  // CSS animations as a style tag
  const animations = `
    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.6;
      }
      50% {
        transform: translateY(-30px) rotate(180deg);
        opacity: 1;
      }
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }
  `;

  return (
    <>
      <style>{animations}</style>
      <Box sx={styles.heroContainer}>
        {/* Background Elements */}
        <Box sx={styles.backgroundElements}>
          <Box sx={{...styles.floatingCircle, ...styles.circle1}} />
          <Box sx={{...styles.floatingCircle, ...styles.circle2}} />
          <Box sx={{...styles.floatingCircle, ...styles.circle3}} />
        </Box>

        {/* Decorative Icons */}
        <Box sx={{...styles.decorativeIcon, ...styles.icon1}}>
          <span style={{fontSize: '24px'}}>🎯</span>
        </Box>
        <Box sx={{...styles.decorativeIcon, ...styles.icon2}}>
          <span style={{fontSize: '24px'}}>✨</span>
        </Box>
        <Box sx={{...styles.decorativeIcon, ...styles.icon3}}>
          <span style={{fontSize: '24px'}}>🚀</span>
        </Box>
        <Box sx={{...styles.decorativeIcon, ...styles.icon4}}>
          <span style={{fontSize: '24px'}}>💼</span>
        </Box>

        {/* Main Content */}
        <Box sx={styles.contentContainer}>
          <Box sx={{display: 'flex', alignItems: 'center', minHeight: '80vh'}}>
            {/* Left Content */}
            <Box sx={styles.leftContent}>
              <Typography sx={styles.mainHeading}>
                Create Resume That Gets You
                <br />
                Noticed <span style={styles.highlightText}>AI Assi</span>
              </Typography>

              <Typography sx={styles.description}>
                Whether you're a fresher looking for your first IT job or a professional aiming for a career switch,
                Gigaversity's Resume Builder helps you build a resume that reflects your skills, projects, and growth
                in a recruiter-approved, ATS-friendly format.
              </Typography>

              <Typography sx={styles.secondaryDescription}>
                Choose from a variety of resume templates that adapt to your career stage, helping you present
                your achievements, skills, and projects clearly and professionally — so recruiters notice what truly
                matters.
              </Typography>

              <Button
                sx={styles.ctaButton}
                onClick={handleCTAClick}
                size="large"
              >
                ▶ Create Resume Now
              </Button>

              {/* Statistics */}
              <Box sx={styles.statsContainer}>
                <Box sx={styles.statItem}>
                  <Typography sx={styles.statNumber}>10K+</Typography>
                  <Typography sx={styles.statLabel}>Resumes Created</Typography>
                </Box>
                <Box sx={styles.statItem}>
                  <Typography sx={styles.statNumber}>95%</Typography>
                  <Typography sx={styles.statLabel}>Success Rate</Typography>
                </Box>
                <Box sx={styles.statItem}>
                  <Typography sx={styles.statNumber}>24/7</Typography>
                  <Typography sx={styles.statLabel}>Available</Typography>
                </Box>
              </Box>
            </Box>

            {/* Right Content - Resume Mockup */}
            <Box sx={styles.rightContent}>
              <Box sx={styles.resumeMockup}>
                <Box sx={styles.resumeHeader}>
                  <Box sx={{...styles.resumeLine, ...styles.resumeLineLong, marginBottom: '12px'}} />
                  <Box sx={{...styles.resumeLine, ...styles.resumeLineMedium}} />
                </Box>

                <Box sx={styles.resumeSection}>
                  <Typography sx={styles.resumeSectionTitle}>📋 Personal Info</Typography>
                  <Box sx={{height: '2px', background: '#FFC614', width: '100%', marginBottom: '16px'}} />
                </Box>

                <Box sx={styles.resumeSection}>
                  <Typography sx={styles.resumeSectionTitle}>🎓 Education</Typography>
                  <Box sx={{...styles.resumeLine, ...styles.resumeLineLong}} />
                  <Box sx={{...styles.resumeLine, ...styles.resumeLineMedium}} />
                </Box>

                <Box sx={styles.resumeSection}>
                  <Typography sx={styles.resumeSectionTitle}>🔧 Skills</Typography>
                  <Box sx={{...styles.resumeLine, ...styles.resumeLineShort}} />
                  <Box sx={{...styles.resumeLine, ...styles.resumeLineMedium}} />
                  <Box sx={{...styles.resumeLine, ...styles.resumeLineLong}} />
                </Box>

                <Box sx={styles.resumeSection}>
                  <Typography sx={styles.resumeSectionTitle}>💼 Experience</Typography>
                  <Box sx={{...styles.resumeLine, ...styles.resumeLineLong}} />
                  <Box sx={{...styles.resumeLine, ...styles.resumeLineShort}} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;