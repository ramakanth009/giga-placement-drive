// src/components/resumebuilder/ResumeBuilderSection.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid, Paper, Chip, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import AssignmentIcon from "@mui/icons-material/Assignment";
import WorkIcon from "@mui/icons-material/Work";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import DoneIcon from "@mui/icons-material/Done";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import PersonIcon from "@mui/icons-material/Person";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const useStyles = makeStyles({
  section: {
    marginTop: '30px',
    marginBottom: '70px',
    position: 'relative',
    overflow: 'visible',
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  outerBox: {
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1A1B4A 100%)',
    boxShadow: '0 25px 60px rgba(42, 43, 106, 0.15)',
    position: 'relative',
  },
  contentWrapper: {
    padding: '60px 40px',
    display: 'flex',
    gap: '30px',
    justifyContent: 'space-between',
    position: 'relative',
    '@media (max-width: 1100px)': {
      flexDirection: 'column',
      padding: '50px 30px',
      gap: '40px',
    },
    '@media (max-width: 600px)': {
      padding: '40px 20px',
      gap: '30px',
    },
  },
  leftContent: {
    flex: '1',
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    lineHeight: '1.2 !important',
    marginBottom: '20px !important',
    '@media (max-width: 1200px)': {
      fontSize: '2.5rem !important',
    },
    '@media (max-width: 900px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '15px !important',
    },
  },
  highlightText: {
    color: '#FFC614 !important',
    position: 'relative',
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    marginBottom: '30px !important',
    maxWidth: '700px',
    textAlign: 'center', 
    margin: '0 auto 30px !important',
    '@media (max-width: 900px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '20px !important',
    },
  },
  featuresContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '30px',
    maxWidth: '700px',
    margin: '0 auto 30px',
    // alignItems: 'center',
    // textAlign: 'left !i',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  },
  featureIcon: {
    fontSize: '1rem !important',
    marginRight: '10px',
    color: '#FFC614',
  },
  featureText: {
    fontSize: '1rem !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    fontWeight: '500 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  statsContainer: {
    display: 'flex',
    gap: '20px',
    marginBottom: '30px',
    justifyContent: 'center',
    maxWidth: '700px',
    margin: '0 auto 30px',
    '@media (max-width: 600px)': {
      gap: '15px',
      flexWrap: 'wrap',
    },
  },
  statItem: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: '15px 20px',
    minWidth: '120px',
    textAlign: 'center',
    '@media (max-width: 900px)': {
      padding: '12px 15px',
      minWidth: '100px',
    },
    '@media (max-width: 600px)': {
      padding: '10px',
      flex: '1',
      minWidth: '80px',
    },
  },
  statNumber: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    color: '#FFC614 !important',
    marginBottom: '5px !important',
    '@media (max-width: 900px)': {
      fontSize: '1.6rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.4rem !important',
      marginBottom: '3px !important',
    },
  },
  statLabel: {
    fontSize: '0.85rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    '@media (max-width: 600px)': {
      fontSize: '0.75rem !important',
    },
  },
  buildButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    padding: '14px 30px !important',
    borderRadius: '50px !important',
    fontSize: '1.1rem !important',
    fontWeight: 'bold !important',
    textTransform: 'none !important',
    boxShadow: '0 10px 25px rgba(255, 198, 20, 0.3) !important',
    transition: 'all 0.3s ease !important',
    maxWidth: 'fit-content',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: '#FFD23F !important',
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 35px rgba(255, 198, 20, 0.4) !important',
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
    '@media (max-width: 600px)': {
      padding: '12px 25px !important',
      fontSize: '1rem !important',
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
  freeText: {
    display: 'inline-block',
    transform: 'rotate(-5deg)',
    color: '#2A2B6A',
    fontWeight: 'bold',
    marginRight: '5px',
  },
  rightContent: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },
  resumeWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '550px',
    margin: '0 auto',
    perspective: '1000px',
  },
  resumeSheet: {
    position: 'relative',
    width: '100%',
    minHeight: '400px', // Decreased from 450px
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    padding: '30px 25px',
    transition: 'transform 0.6s ease',
    transformStyle: 'preserve-3d',
    transform: 'rotateY(0deg)',
    '@media (max-width: 900px)': {
      minHeight: '350px', // Decreased from 400px
    },
    '@media (max-width: 600px)': {
      minHeight: '320px', // Decreased from 350px
      padding: '25px 20px',
    },
  },
  resumeHeader: {
    borderBottom: '1px solid #eee',
    paddingBottom: '20px',
    marginBottom: '20px',
  },
  resumeName: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '5px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.5rem !important',
    },
  },
  resumeTitle: {
    fontSize: '1.1rem !important',
    color: '#555 !important',
    marginBottom: '10px !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  contactInfo: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  contactChip: {
    backgroundColor: '#f5f5f5 !important',
    fontSize: '0.8rem !important',
    height: '26px !important',
  },
  sectionTitle: {
    fontSize: '1.15rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '10px !important',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  sectionIcon: {
    fontSize: '1.2rem !important',
    marginRight: '8px',
    color: '#FFC614',
  },
  experienceItem: {
    marginBottom: '15px',
    paddingBottom: '15px',
    borderBottom: '1px dashed #eee',
    '&:last-child': {
      marginBottom: '0',
      paddingBottom: '0',
      borderBottom: 'none',
    },
  },
  expCompany: {
    fontSize: '1rem !important',
    fontWeight: 'bold !important',
    color: '#333 !important',
    marginBottom: '3px !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  expRole: {
    fontSize: '0.9rem !important',
    color: '#555 !important',
    marginBottom: '5px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
    },
  },
  expDate: {
    fontSize: '0.8rem !important',
    color: '#777 !important',
    fontStyle: 'italic !important',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '10px',
  },
  skillChip: {
    backgroundColor: 'rgba(42, 43, 106, 0.1) !important',
    color: '#2A2B6A !important',
    fontSize: '0.8rem !important',
    height: '26px !important',
  },
  projectsContainer: {
    marginTop: '10px',
  },
  decorativeElement: {
    position: 'absolute',
    zIndex: 1,
  },
  circleElement: {
    borderRadius: '50%',
  },
  floatingTags: {
    position: 'absolute',
    top: '25%',
    right: '-30px',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    zIndex: 2,
    '@media (max-width: 1100px)': {
      top: 'auto',
      bottom: '-20px',
      right: '30px',
      flexDirection: 'row',
    },
    '@media (max-width: 600px)': {
      bottom: '-15px',
      right: '20px',
      gap: '10px',
    },
  },
  tag: {
    backgroundColor: '#FFC614 !important',
    padding: '5px 10px !important',
    borderRadius: '20px !important',
    color: '#2A2B6A !important',
    fontWeight: 'bold !important',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1) !important',
    fontSize: '0.8rem !important',
    '@media (max-width: 600px)': {
      padding: '4px 8px !important',
      fontSize: '0.7rem !important',
    },
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px)`,
    backgroundSize: '30px 30px',
    opacity: 0.3,
    zIndex: 1,
  },
  floatingIcons: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  floatingIcon: {
    position: 'absolute',
    color: 'rgba(255, 255, 255, 0.05)',
    animation: '$float 8s infinite ease-in-out',
  },
  '@keyframes float': {
    '0%': {
      transform: 'translateY(0) rotate(0deg)',
    },
    '50%': {
      transform: 'translateY(-20px) rotate(10deg)',
    },
    '100%': {
      transform: 'translateY(0) rotate(0deg)',
    },
  },
  resumeVisualContainer: {
    position: 'absolute',
    top: '-40px',
    left: '-40px',
    zIndex: 3,
    '@media (max-width: 900px)': {
      top: '-30px',
      left: '-30px',
    },
    '@media (max-width: 600px)': {
      top: '-20px',
      left: '-20px',
    },
  },
  resumeVisual: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#FFC614',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 25px rgba(255, 198, 20, 0.4)',
    '@media (max-width: 900px)': {
      width: '70px',
      height: '70px',
    },
    '@media (max-width: 600px)': {
      width: '60px',
      height: '60px',
    },
  },
  resumeIcon: {
    fontSize: '40px !important',
    color: '#2A2B6A',
    '@media (max-width: 900px)': {
      fontSize: '35px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '30px !important',
    },
  },
});

const ResumeBuilderSection = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [animated, setAnimated] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setAnimated(true);
    
    // Add a timer to flip the resume occasionally
    const flipInterval = setInterval(() => {
      setFlipped(prev => !prev);
      setTimeout(() => setFlipped(prev => !prev), 2000);
    }, 10000);
    
    return () => clearInterval(flipInterval);
  }, []);

  const handleBuildClick = () => {
    navigate('/resume-builder');
  };

  // Tech skills for the resume preview
  const techSkills = ['React.js', 'JavaScript', 'Python', 'MongoDB', 'Git'];
  
  // Floating icons for background effect
  const floatingIcons = [
    { icon: <CodeIcon />, top: '15%', left: '10%', size: '40px', delay: '0s' },
    { icon: <SchoolIcon />, top: '25%', right: '15%', size: '35px', delay: '1s' },
    { icon: <PsychologyIcon />, bottom: '20%', left: '20%', size: '45px', delay: '2s' },
    { icon: <SettingsIcon />, top: '70%', right: '25%', size: '30px', delay: '3s' },
    { icon: <DesignServicesIcon />, top: '40%', left: '25%', size: '35px', delay: '4s' },
  ];
  
  return (
    <Box className={classes.section}>
        <Box className={classes.outerBox}>
          <Box className={classes.backgroundPattern} />
          
          {/* Floating icons in the background */}
          <Box className={classes.floatingIcons}>
            {floatingIcons.map((icon, index) => (
              <Box
                key={index}
                className={classes.floatingIcon}
                sx={{
                  top: icon.top,
                  left: icon.left,
                  right: icon.right,
                  bottom: icon.bottom,
                  fontSize: icon.size,
                  animationDelay: icon.delay,
                }}
              >
                {icon.icon}
              </Box>
            ))}
          </Box>
          
          <Box className={classes.contentWrapper}>
            <Box 
              className={classes.leftContent}
              sx={{
                opacity: animated ? 1 : 0,
                transform: animated ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
              }}
            >
              <Typography variant="h1" className={classes.title}>
                Build Your <span className={classes.highlightText}>ATS-Optimized</span>Resume
              </Typography>
              
              <Typography variant="body1" className={classes.subtitle}>
                Create a standout technical resume in minutes that passes through Applicant Tracking Systems and impresses hiring managers.
              </Typography>
              
              <Box className={classes.featuresContainer}>
                {[
                  "Industry-specific templates designed for tech roles",
                  "AI-powered content suggestions for each section",
                  "Keyword optimization for job description matching",
                  "Showcase your projects and technical skills effectively",
                  // "Export to PDF, DOCX, or share via custom link"
                ].map((feature, index) => (
                  <Box 
                    key={index} 
                    className={classes.featureItem}
                    sx={{
                      opacity: animated ? 1 : 0,
                      transform: animated ? 'translateX(0)' : 'translateX(-20px)',
                      transition: 'opacity 0.6s ease, transform 0.6s ease',
                      transitionDelay: `${0.2 + (index * 0.1)}s`,
                    }}
                  >
                    <DoneIcon className={classes.featureIcon} />
                    <Typography className={classes.featureText}>{feature}</Typography>
                  </Box>
                ))}
              </Box>
              
              <Box 
                className={classes.statsContainer}
                sx={{
                  opacity: animated ? 1 : 0,
                  transform: animated ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.7s ease, transform 0.7s ease',
                  transitionDelay: '0.7s',
                }}
              >
                <Box className={classes.statItem}>
                  <Typography className={classes.statNumber}>3x</Typography>
                  <Typography className={classes.statLabel}>More Interviews</Typography>
                </Box>
                <Box className={classes.statItem}>
                  <Typography className={classes.statNumber}>5min</Typography>
                  <Typography className={classes.statLabel}>To Create</Typography>
                </Box>
                <Box className={classes.statItem}>
                  <Typography className={classes.statNumber}>95%</Typography>
                  <Typography className={classes.statLabel}>ATS Pass Rate</Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Button 
                  variant="contained" 
                  className={classes.buildButton}
                  onClick={handleBuildClick}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    opacity: animated ? 1 : 0,
                    transform: animated ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease, transform 0.8s ease',
                    transitionDelay: '0.9s',
                  }}
                >
                  Build Your <span className={classes.freeText}>Free</span> Resume Now
                </Button>
              </Box>
            </Box>
            
            <Box 
              className={classes.rightContent}
              sx={{
                opacity: animated ? 1 : 0,
                transform: animated ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.9s ease, transform 0.9s ease',
                transitionDelay: '0.5s',
              }}
            >
              <Box className={classes.resumeWrapper}>
                {/* Resume Visual Icon */}
                <Box className={classes.resumeVisualContainer}>
                  <Box className={classes.resumeVisual}>
                    <AssignmentIcon className={classes.resumeIcon} />
                  </Box>
                </Box>
                
                {/* Floating Tags */}
                <Box className={classes.floatingTags}>
                  <Box className={classes.tag}>ATS-Friendly</Box>
                  <Box className={classes.tag}>Customizable</Box>
                </Box>
                
                {/* Resume Preview */}
                <Box 
                  className={classes.resumeSheet}
                  sx={{
                    transform: flipped ? 'rotateY(8deg)' : 'rotateY(0deg)',
                  }}
                >
                  <Box className={classes.resumeHeader}>
                    <Typography className={classes.resumeName}>Alex Johnson</Typography>
                    <Typography className={classes.resumeTitle}>Senior Full Stack Developer</Typography>
                    <Box className={classes.contactInfo}>
                      <Chip label="alex.j@email.com" size="small" className={classes.contactChip} />
                      <Chip label="+91XXXXXXXXXX" size="small" className={classes.contactChip} />
                      <Chip label="linkedin.com/in/alexj" size="small" className={classes.contactChip} />
                    </Box>
                  </Box>
                  
                  <Box mb={2.5}>
                    <Typography className={classes.sectionTitle}>
                      <SummarizeIcon className={classes.sectionIcon} />
                      Summary
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.88rem', color: '#555' }}>
                      Full Stack Developer with 5+ years of experience building scalable web applications using React.js and Node.js. Passionate about writing clean, efficient code.
                    </Typography>
                  </Box>
                  
                  <Box mb={2.5}>
                    <Typography className={classes.sectionTitle}>
                      <WorkIcon className={classes.sectionIcon} />
                      Experience
                    </Typography>
                    
                    <Box className={classes.experienceItem}>
                      <Typography className={classes.expCompany}>
                        TechCorp Solutions
                        <Typography className={classes.expDate}>2020 - Present</Typography>
                      </Typography>
                      <Typography className={classes.expRole}>Senior Full Stack Developer</Typography>
                    </Box>
                    
                    <Box className={classes.experienceItem}>
                      <Typography className={classes.expCompany}>
                        WebDev Innovations
                        <Typography className={classes.expDate}>2018 - 2020</Typography>
                      </Typography>
                      <Typography className={classes.expRole}>Frontend Developer</Typography>
                    </Box>
                  </Box>
                  
                  <Box mb={2}>
                    <Typography className={classes.sectionTitle}>
                      <CodeIcon className={classes.sectionIcon} />
                      Technical Skills
                    </Typography>
                    <Box className={classes.skillsContainer}>
                      {techSkills.map((skill, index) => (
                        <Chip 
                          key={index} 
                          label={skill} 
                          size="small" 
                          className={classes.skillChip} 
                        />
                      ))}
                    </Box>
                  </Box>
                  
                  <Box>
                    <Typography className={classes.sectionTitle}>
                      <BuildIcon className={classes.sectionIcon} />
                      Projects
                    </Typography>
                    <Box className={classes.projectsContainer}>
                      <Typography variant="body2" sx={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#444', mb: 0.5 }}>
                        E-Commerce Platform Redesign
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.85rem', color: '#555' }}>
                        React, Node.js, MongoDB, GraphQL
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
    </Box>
  );
};

export default ResumeBuilderSection;