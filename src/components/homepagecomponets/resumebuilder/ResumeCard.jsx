// src/components/homepagecomponets/resumebuilder/ResumeCard.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Chip, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AssignmentIcon from "@mui/icons-material/Assignment";
import WorkIcon from "@mui/icons-material/Work";
import SummarizeIcon from "@mui/icons-material/Summarize";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import SchoolIcon from "@mui/icons-material/School";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PersonIcon from "@mui/icons-material/Person";

const useStyles = makeStyles({
  resumeWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '650px',
    margin: '0 auto',
    perspective: '2000px',
    height: '750px',
    '@media (max-width: 1200px)': {
      maxWidth: '550px',
      height: '700px',
    },
    '@media (max-width: 960px)': {
      maxWidth: '500px',
      height: '650px',
    },
    '@media (max-width: 600px)': {
      height: '550px',
    },
    '@media (max-width: 480px)': {
      height: '500px',
      perspective: '1500px',
    },
    '@media (max-width: 375px)': {
      height: '450px',
    },
  },
  resumeCard: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  resumeSheet: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    padding: '25px 20px',
    backfaceVisibility: 'hidden',
    overflow: 'auto',
    '@media (max-width: 1200px)': {
      padding: '22px 18px',
    },
    '@media (max-width: 960px)': {
      padding: '20px 15px',
    },
    '@media (max-width: 600px)': {
      padding: '15px 12px',
      borderRadius: '12px',
    },
    '@media (max-width: 480px)': {
      padding: '12px 10px',
    },
    '@media (max-width: 375px)': {
      padding: '10px 8px',
    },
    // Improve scrollbar styling for mobile
    '&::-webkit-scrollbar': {
      width: '6px',
      '@media (max-width: 480px)': {
        width: '4px',
      },
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#c1c1c1',
      borderRadius: '10px',
    },
  },
  resumeSheetBack: {
    transform: 'rotateY(180deg)',
  },
  resumeHeader: {
    borderBottom: '1px solid #eee',
    paddingBottom: '15px',
    marginBottom: '15px',
    '@media (max-width: 600px)': {
      paddingBottom: '12px',
      marginBottom: '12px',
    },
    '@media (max-width: 480px)': {
      paddingBottom: '10px',
      marginBottom: '10px',
    },
  },
  resumeName: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '3px !important',
    '@media (max-width: 960px)': {
      fontSize: '1.3rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1rem !important',
      marginBottom: '2px !important',
    },
  },
  resumeTitle: {
    fontSize: '0.9rem !important',
    color: '#555 !important',
    marginBottom: '8px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem !important',
      marginBottom: '5px !important',
    },
  },
  contactInfo: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    '@media (max-width: 480px)': {
      gap: '5px',
    },
  },
  contactChip: {
    backgroundColor: '#f5f5f5 !important',
    fontSize: '0.7rem !important',
    height: '24px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.65rem !important',
      height: '22px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.6rem !important',
      height: '20px !important',
      '& .MuiChip-label': {
        padding: '0 8px !important',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '0.55rem !important',
      height: '18px !important',
      '& .MuiChip-label': {
        padding: '0 6px !important',
      },
    },
  },
  sectionTitle: {
    fontSize: '1rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '8px !important',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.8rem !important',
      marginBottom: '5px !important',
    },
  },
  sectionIcon: {
    fontSize: '1.1rem !important',
    marginRight: '8px',
    color: '#FFC614',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginRight: '6px',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      marginRight: '5px',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      marginRight: '4px',
    },
  },
  experienceItem: {
    marginBottom: '12px',
    paddingBottom: '12px',
    borderBottom: '1px dashed #eee',
    '&:last-child': {
      marginBottom: '0',
      paddingBottom: '0',
      borderBottom: 'none',
    },
    '@media (max-width: 480px)': {
      marginBottom: '10px',
      paddingBottom: '10px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '8px',
      paddingBottom: '8px',
    },
  },
  expCompany: {
    fontSize: '0.9rem !important',
    fontWeight: 'bold !important',
    color: '#333 !important',
    marginBottom: '2px !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem !important',
    },
  },
  expRole: {
    fontSize: '0.8rem !important',
    color: '#555 !important',
    marginBottom: '3px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.75rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.7rem !important',
      marginBottom: '2px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.65rem !important',
    },
  },
  expDate: {
    fontSize: '0.7rem !important',
    color: '#777 !important',
    fontStyle: 'italic !important',
    '@media (max-width: 480px)': {
      fontSize: '0.65rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.6rem !important',
    },
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginTop: '8px',
    '@media (max-width: 480px)': {
      gap: '4px',
      marginTop: '6px',
    },
    '@media (max-width: 375px)': {
      gap: '3px',
      marginTop: '5px',
    },
  },
  skillChip: {
    backgroundColor: 'rgba(42, 43, 106, 0.1) !important',
    color: '#2A2B6A !important',
    fontSize: '0.7rem !important',
    height: '24px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.65rem !important',
      height: '22px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.6rem !important',
      height: '20px !important',
      '& .MuiChip-label': {
        padding: '0 8px !important',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '0.55rem !important',
      height: '18px !important',
      '& .MuiChip-label': {
        padding: '0 6px !important',
      },
    },
  },
  projectsContainer: {
    marginTop: '8px',
    '@media (max-width: 480px)': {
      marginTop: '6px',
    },
    '@media (max-width: 375px)': {
      marginTop: '5px',
    },
  },
  resumeVisualContainer: {
    position: 'absolute',
    top: '-40px',
    left: '-40px',
    zIndex: 3,
    '@media (max-width: 960px)': {
      top: '-30px',
      left: '-30px',
    },
    '@media (max-width: 600px)': {
      top: '-25px',
      left: '-25px',
    },
    '@media (max-width: 480px)': {
      top: '-20px',
      left: '-20px',
    },
    '@media (max-width: 375px)': {
      top: '-15px',
      left: '-15px',
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
    '@media (max-width: 960px)': {
      width: '70px',
      height: '70px',
    },
    '@media (max-width: 600px)': {
      width: '60px',
      height: '60px',
    },
    '@media (max-width: 480px)': {
      width: '50px',
      height: '50px',
    },
    '@media (max-width: 375px)': {
      width: '40px',
      height: '40px',
      boxShadow: '0 5px 15px rgba(255, 198, 20, 0.4)',
    },
  },
  resumeIcon: {
    fontSize: '40px !important',
    color: '#2A2B6A',
    '@media (max-width: 960px)': {
      fontSize: '35px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '30px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '25px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '20px !important',
    },
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
      right: '-20px',
      gap: '12px',
    },
    '@media (max-width: 960px)': {
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
    '@media (max-width: 480px)': {
      bottom: '-12px',
      right: '15px',
      gap: '8px',
    },
    '@media (max-width: 375px)': {
      bottom: '-10px',
      right: '10px',
      gap: '6px',
    },
  },
  tag: {
    backgroundColor: '#FFC614 !important',
    padding: '5px 10px !important',
    borderRadius: '20px !important',
    color: '#2A2B6A !important',
    fontWeight: 'bold !important',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1) !important',
    fontSize: '0.75rem !important',
    whiteSpace: 'nowrap !important',
    '@media (max-width: 960px)': {
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 600px)': {
      padding: '4px 8px !important',
      fontSize: '0.65rem !important',
    },
    '@media (max-width: 480px)': {
      padding: '3px 6px !important',
      fontSize: '0.6rem !important',
      borderRadius: '15px !important',
    },
    '@media (max-width: 375px)': {
      padding: '2px 5px !important',
      fontSize: '0.55rem !important',
      borderRadius: '12px !important',
      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1) !important',
    },
  },
  flipIndicator: {
    position: 'absolute',
    bottom: '-40px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255, 255, 255, 0.8)',
    gap: '5px',
    fontSize: '0.9rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '5px 15px',
    borderRadius: '30px',
    cursor: 'pointer',
    zIndex: 10,
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    '@media (max-width: 960px)': {
      bottom: '-35px',
      fontSize: '0.85rem',
      padding: '4px 12px',
    },
    '@media (max-width: 600px)': {
      bottom: '-30px',
      fontSize: '0.8rem',
      padding: '4px 10px',
    },
    '@media (max-width: 480px)': {
      bottom: '-25px',
      fontSize: '0.75rem',
      padding: '3px 8px',
      borderRadius: '20px',
    },
    '@media (max-width: 375px)': {
      bottom: '-22px',
      fontSize: '0.7rem',
      padding: '3px 6px',
      borderRadius: '15px',
    },
  },
  eduItem: {
    marginBottom: '12px',
    '&:last-child': {
      marginBottom: '0',
    },
    '@media (max-width: 480px)': {
      marginBottom: '10px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '8px',
    },
  },
  eduTitle: {
    fontSize: '0.9rem !important',
    fontWeight: 'bold !important',
    color: '#333 !important',
    marginBottom: '2px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem !important',
    },
  },
  eduInstitution: {
    fontSize: '0.8rem !important',
    color: '#555 !important',
    marginBottom: '2px !important',
    fontStyle: 'italic !important',
    '@media (max-width: 600px)': {
      fontSize: '0.75rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.65rem !important',
    },
  },
  eduYear: {
    fontSize: '0.7rem !important',
    color: '#777 !important',
    '@media (max-width: 480px)': {
      fontSize: '0.65rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.6rem !important',
    },
  },
  nonTechChip: {
    backgroundColor: 'rgba(42, 43, 106, 0.1) !important',
    color: '#2A2B6A !important',
    fontSize: '0.7rem !important',
    height: '24px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.65rem !important',
      height: '22px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.6rem !important',
      height: '20px !important',
      '& .MuiChip-label': {
        padding: '0 8px !important',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '0.55rem !important',
      height: '18px !important',
      '& .MuiChip-label': {
        padding: '0 6px !important',
      },
    },
  },
  nonTechSection: {
    marginBottom: '12px',
    '@media (max-width: 480px)': {
      marginBottom: '10px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '8px',
    },
  },
  projectTitle: {
    fontSize: '0.8rem !important',
    fontWeight: 'bold !important',
    color: '#444 !important',
    marginBottom: '3px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.75rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.7rem !important', 
      marginBottom: '2px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.65rem !important',
    },
  },
  projectTech: {
    fontSize: '0.75rem !important',
    color: '#555 !important',
    marginBottom: '6px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.7rem !important',
      marginBottom: '5px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.65rem !important',
      marginBottom: '4px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.6rem !important',
      marginBottom: '3px !important',
    },
  },
  projectPoints: {
    paddingLeft: '16px',
    '@media (max-width: 600px)': {
      paddingLeft: '12px',
    },
    '@media (max-width: 480px)': {
      paddingLeft: '10px',
    },
    '@media (max-width: 375px)': {
      paddingLeft: '8px',
    },
  },
  projectPoint: {
    fontSize: '0.75rem !important',
    color: '#555 !important',
    marginBottom: '4px !important',
    lineHeight: '1.4 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.7rem !important',
      marginBottom: '3px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.65rem !important',
      marginBottom: '2px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.6rem !important',
      lineHeight: '1.3 !important',
    },
  },
});

const ResumeCard = ({ animated }) => {
  const classes = useStyles();
  const [flipped, setFlipped] = useState(false);

  // Tech skills for the IT Resume
  const techSkills = ['React.js', 'JavaScript', 'Node.js', 'MongoDB', 'REST APIs'];
  
  // Management skills for the non-IT Resume
  const managementSkills = ['Project Management', 'Team Leadership', 'Strategic Planning', 'Client Relations', 'Stakeholder Management'];
  
  // Language skills for the non-IT Resume
  const languages = ['English (Native)', 'Spanish (Professional)', 'French (Basic)'];

  // Toggle flip animation
  const handleFlip = () => {
    setFlipped(!flipped);
  };

  // Auto-flip every 10 seconds
  useEffect(() => {
    const flipInterval = setInterval(() => {
      setFlipped(prev => !prev);
    }, 10000);
    
    return () => clearInterval(flipInterval);
  }, []);

  return (
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
      
      {/* Flip indicator */}
      <Box className={classes.flipIndicator} onClick={handleFlip}>
        <AutoAwesomeIcon sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }} />
        <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' } }}>
          Click to flip
        </Typography>
      </Box>
      
      {/* Resume Card with Front and Back */}
      <Box 
        className={classes.resumeCard}
        sx={{
          opacity: animated ? 1 : 0,
          transform: flipped 
            ? 'rotateY(180deg)' 
            : 'rotateY(0deg)',
          transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.6s ease',
        }}
      >
        {/* FRONT: IT Resume */}
        <Box className={classes.resumeSheet}>
          <Box className={classes.resumeHeader}>
            <Typography className={classes.resumeName}>Alex Johnson</Typography>
            <Typography className={classes.resumeTitle}>Senior Full Stack Developer</Typography>
            <Box className={classes.contactInfo}>
              <Chip label="alex.j@email.com" size="small" className={classes.contactChip} />
              <Chip label="+91 9876543210" size="small" className={classes.contactChip} />
              <Chip label="github.com/alexj" size="small" className={classes.contactChip} />
            </Box>
          </Box>
          
          <Box mb={2}>
            <Typography className={classes.sectionTitle}>
              <SummarizeIcon className={classes.sectionIcon} />
              Professional Summary
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.8rem' }, color: '#555' }}>
              Innovative Full Stack Developer with 5+ years of experience building responsive and scalable web applications. Expertise in React.js, Node.js, and MongoDB. Passionate about delivering clean, efficient code and exceptional user experiences.
            </Typography>
          </Box>
          
          <Box mb={2}>
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
          
          <Box className={classes.projectsContainer}>
            <Typography className={classes.sectionTitle}>
              <BuildIcon className={classes.sectionIcon} />
              Projects
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography className={classes.projectTitle}>
                E-Commerce Platform Redesign
              </Typography>
              <Typography className={classes.projectTech}>
                React, Node.js, MongoDB, GraphQL
              </Typography>
              <Box className={classes.projectPoints}>
                <Typography className={classes.projectPoint}>
                  • Led frontend development using React, resulting in 40% improvement in user engagement
                </Typography>
                <Typography className={classes.projectPoint}>
                  • Implemented GraphQL API, reducing data fetching time by 60%
                </Typography>
                <Typography className={classes.projectPoint}>
                  • Optimized MongoDB queries leading to 30% faster page load times
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        
        {/* BACK: Non-IT Resume */}
        <Box className={`${classes.resumeSheet} ${classes.resumeSheetBack}`}>
          <Box className={classes.resumeHeader}>
            <Typography className={classes.resumeName}>Alex Johnson</Typography>
            <Typography className={classes.resumeTitle}>Operations Manager</Typography>
            <Box className={classes.contactInfo}>
              <Chip label="alex.j@email.com" size="small" className={classes.contactChip} />
              <Chip label="+91 9876543210" size="small" className={classes.contactChip} />
              <Chip label="linkedin.com/in/alexj" size="small" className={classes.contactChip} />
            </Box>
          </Box>
          
          <Box mb={2}>
            <Typography className={classes.sectionTitle}>
              <PersonIcon className={classes.sectionIcon} />
              Professional Profile
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.8rem' }, color: '#555' }}>
              Results-driven Operations Manager with 6+ years of experience optimizing business processes and leading cross-functional teams. Strong track record of improving efficiency and driving operational excellence across diverse industries.
            </Typography>
          </Box>
          
          <Box mb={2}>
            <Typography className={classes.sectionTitle}>
              <WorkIcon className={classes.sectionIcon} />
              Work Experience
            </Typography>
            
            <Box className={classes.experienceItem}>
              <Typography className={classes.expCompany}>
                Global Solutions Inc.
                <Typography className={classes.expDate}>2019 - Present</Typography>
              </Typography>
              <Typography className={classes.expRole}>Operations Manager</Typography>
            </Box>
            
            <Box className={classes.experienceItem}>
              <Typography className={classes.expCompany}>
                Innovative Enterprises
                <Typography className={classes.expDate}>2017 - 2019</Typography>
              </Typography>
              <Typography className={classes.expRole}>Assistant Operations Manager</Typography>
            </Box>
          </Box>
          
          <Box mb={2}>
            <Typography className={classes.sectionTitle}>
              <SchoolIcon className={classes.sectionIcon} />
              Education
            </Typography>
            <Box className={classes.eduItem}>
              <Typography className={classes.eduTitle}>MBA in Operations Management</Typography>
              <Typography className={classes.eduInstitution}>University of Business Studies</Typography>
              <Typography className={classes.eduYear}>2015 - 2017</Typography>
            </Box>
          </Box>
          
          <Box mb={2} className={classes.nonTechSection}>
            <Typography className={classes.sectionTitle}>
              <SettingsIcon className={classes.sectionIcon} />
              Key Skills
            </Typography>
            <Box className={classes.skillsContainer}>
              {managementSkills.map((skill, index) => (
                <Chip 
                  key={index} 
                  label={skill} 
                  size="small" 
                  className={classes.nonTechChip} 
                />
              ))}
            </Box>
          </Box>
          
          <Box className={classes.nonTechSection}>
            <Typography className={classes.sectionTitle}>
              <LanguageIcon className={classes.sectionIcon} />
              Languages
            </Typography>
            <Box className={classes.skillsContainer}>
              {languages.map((language, index) => (
                <Chip 
                  key={index} 
                  label={language} 
                  size="small" 
                  className={classes.nonTechChip} 
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResumeCard;