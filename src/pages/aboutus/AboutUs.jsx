// src/pages/aboutus/AboutUs.jsx
import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "../../components/common/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';

const useStyles = makeStyles({
  pageContainer: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    isolation: "isolate",
  },
  // Hero Section Styles
  heroSection: {
    position: 'relative',
    color: 'white',
    padding: '80px 30px 40px',
    textAlign: 'center',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: '#2A2B6A',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 66%)', // Changed this line to flip the diagonal
      zIndex: -1,
      height: '598px',
      width: '100%',
      borderRadius: "0 0 30% 64%" // Changed this line to flip the border radius
    },
  },
  herocontent:{
    minHeight: '30vh',
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
  // About Gigaversity Section Styles with Enhanced Laptop Layout
  aboutSection: {
    padding: "60px 0 80px",
    position: "relative",
    zIndex: 1,
  },
  laptopContainer: {
    width: "95%",
    maxWidth: "1400px", // Increased from 1200px
    margin: "-120px auto 0", // Adjusted margin for larger size
    position: "relative",
    perspective: "2000px",
    "@media (max-width: 600px)": {
      width: "95%",
      margin: "-80px auto 0",
    },
  },
  laptop: {
    position: "relative",
    width: "100%",
    maxWidth: "1000px", // Increased from 800px
    margin: "0 auto",
    transformStyle: "preserve-3d",
  },
  laptopScreen: {
    position: "relative",
    width: "100%",
    padding: "50px 70px 70px", // Added more bottom padding
    backgroundColor: "white",
    borderRadius: "12px 12px 0 0",
    boxSizing: "border-box",
    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1) inset",
    border: "12px solid #E2E8F0",
    borderBottom: "24px solid #E2E8F0", // Increased bottom border height
    "@media (max-width: 768px)": {
      padding: "35px 45px 55px", // Adjusted responsive padding
    },
    "@media (max-width: 600px)": {
      padding: "25px 30px 45px", // Adjusted responsive padding
      borderWidth: "8px",
    },
  },
  screenContent: {
    position: "relative",
    zIndex: 2,
  },
  laptopTopBezel: {
    position: "absolute",
    top: "-2px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "120px",
    height: "6px",
    backgroundColor: "#E2E8F0", // Changed from #ffffff to #E2E8F0
    borderRadius: "0 0 4px 4px",
    zIndex: 3,
    "&:before": {
      content: "''",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      width: "8px",
      height: "8px",
      backgroundColor: "#000000", // Changed to black
      borderRadius: "50%",
    }
  },
  laptopBase: {
    position: "relative",
    width: "105%",
    height: "20px",
    marginLeft: "-2.5%",
    backgroundColor: "#e0e5ec",
    borderRadius: "0 0 8px 8px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    "&:before": {
      content: "''",
      position: "absolute",
      bottom: "8px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "120px",
      height: "4px",
      backgroundColor: "#c4c8cc",
      borderRadius: "4px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1) inset",
    },
    "&:after": {
      content: "''",
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      height: "8px",
      backgroundColor: "#d0d5dc",
      borderRadius: "0 0 8px 8px",
    }
  },
  laptopHinge: {
    position: "absolute",
    top: "-2px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "150px",
    height: "4px",
    backgroundColor: "#999",
    borderRadius: "2px 2px 0 0",
    zIndex: -1,
  },
  aboutTitle: {
    fontSize: "3.2rem !important", // Increased from 2.8rem
    color: "#2A2B6A !important",
    fontWeight: "bold !important",
    marginBottom: "15px !important",
    "@media (max-width: 768px)": {
      fontSize: "2.3rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem !important",
    },
  },
  gigaversityText: {
    color: "#FFC614 !important",
    display: "block",
  },
  aboutDescription: {
    fontSize: "1.3rem !important", // Increased from 1.1rem
    color: "#555 !important",
    lineHeight: "1.8 !important",
    marginBottom: "25px !important",
    "@media (max-width: 768px)": {
      fontSize: "1rem !important",
    },
  },
  highlight: {
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
  },
  talkButton: {
    backgroundColor: "#2A2B6A !important",
    color: "white !important",
    padding: "10px 24px !important",
    borderRadius: "5px !important",
    fontWeight: "bold !important",
    textTransform: "none !important",
    fontSize: "1rem !important",
    transition: "all 0.3s ease !important",
    marginTop: "20px !important",
    "&:hover": {
      backgroundColor: "#1A1B4A !important",
      transform: "translateY(-3px)",
      boxShadow: "0 5px 15px rgba(42, 43, 106, 0.3) !important",
    },
  },
  // Why Gigaversity Section Styles
  whySection: {
    padding: "80px 20px",
    backgroundImage: "radial-gradient(circle at 90% 10%, #323370 0%, #2A2B6A 50%, #1A1B4A 100%)",
    color: "white",
    position: "relative",
    overflow: "hidden",
    borderRadius: "70px 0 70px 0",
    margin: "0 0 40px 0",
    "@media (max-width: 768px)": {
      padding: "60px 20px",
      borderRadius: "40px 0 40px 0",
    },
  },
  whyContentContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  whyTitle: {
    fontSize: "2.5rem !important",
    fontWeight: "bold !important",
    marginBottom: "20px !important",
    textAlign: "center",
    color: "white !important",
    "& span": {
      color: "#FFC614 !important",
      display: "inline-block",
      position: "relative",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: "5px",
        left: 0,
        width: "100%",
        height: "5px",
        background: "rgba(255, 198, 20, 0.3)",
        zIndex: -1,
      },
    },
    "@media (max-width: 768px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem !important",
    },
  },
  whyText: {
    color: "rgba(255, 255, 255, 0.85) !important",
    fontSize: "1.1rem !important",
    lineHeight: "1.8 !important",
    maxWidth: "950px",
    margin: "0 auto 20px !important",
    "@media (max-width: 768px)": {
      fontSize: "1rem !important",
    },
  },
  // Core Values & Objectives Section Styles
  valuesSection: {
    padding: "80px 20px",
    backgroundColor: "#f0f7ff",
    position: "relative",
    overflow: "hidden",
  },
  valuesContentContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  valuesTitleContainer: {
    textAlign: "center",
    marginBottom: "60px",
    position: "relative",
  },
  valuesTitle: {
    fontSize: "2.5rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "20px !important",
    "&:after": {
      content: '""',
      display: "block",
      width: "80px",
      height: "4px",
      backgroundColor: "#FFC614",
      margin: "15px auto 0",
      borderRadius: "2px",
    },
    "@media (max-width: 768px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem !important",
    },
  },
  valuesHighlight: {
    color: "#FFC614 !important",
  },
  cardContainer: {
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    height: "100%",
    backgroundColor: "white",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
    },
  },
  iconCircle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    "& svg": {
      fontSize: "40px",
      color: "white",
    },
  },
  visionIcon: {
    background: "linear-gradient(135deg, #3a7bd5, #00d2ff)",
  },
  missionIcon: {
    background: "linear-gradient(135deg, #3494E6, #EC6EAD)",
  },
  cardTitle: {
    fontSize: "2rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "15px !important",
    "@media (max-width: 768px)": {
      fontSize: "1.8rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.5rem !important",
    },
  },
  cardDescription: {
    color: "#555 !important",
    fontSize: "1rem !important",
    lineHeight: "1.7 !important",
  },
  // Programs Section Styles
  programsSection: {
    padding: "80px 20px 100px",
    position: "relative",
    background: "linear-gradient(to bottom, #f8f9ff, #ffffff)",
  },
  programsContentContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  programsTitle: {
    fontSize: "2.2rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "20px !important",
    textAlign: "center",
    "&:after": {
      content: '""',
      display: "block",
      width: "60px",
      height: "3px",
      backgroundColor: "#FFC614",
      margin: "15px auto 0",
    },
    "@media (max-width: 768px)": {
      fontSize: "2rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.7rem !important",
    },
  },
  programCard: {
    padding: "30px 25px",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.06)",
    height: "100%",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    border: "1px solid #f0f0f0",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 1100px)": {
      padding: "25px 20px",
    },
    "@media (max-width: 768px)": {
      padding: "25px 20px",
    },
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
    },
  },
  programIcon: {
    width: "60px",
    height: "60px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
    transition: "all 0.3s ease",
    "& svg": {
      fontSize: "30px",
      color: "white",
    },
  },
  programTitle: {
    fontSize: "1.3rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "12px !important",
  },
  programDesc: {
    fontSize: "0.95rem !important",
    color: "#666 !important",
    lineHeight: "1.5 !important",
  },
  colorBar: {
    height: "4px",
    width: "50px",
    borderRadius: "2px",
    marginBottom: "15px",
  },
  decorCircle: {
    position: "absolute",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(42, 43, 106, 0.05) 0%, rgba(42, 43, 106, 0) 70%)",
    zIndex: 0,
  },
  circle1: {
    width: "300px",
    height: "300px",
    top: "10%",
    right: "5%",
  },
  circle2: {
    width: "250px",
    height: "250px",
    bottom: "5%",
    left: "10%",
    background: "radial-gradient(circle, rgba(255, 198, 20, 0.05) 0%, rgba(255, 198, 20, 0) 70%)",
  },
});

const AboutUs = () => {
  const classes = useStyles();

  // Programs data
  const programs = [
    {
      icon: <SchoolIcon />,
      title: "Virtual Placement Drive",
      description: "A 30-day hiring & learning program with 100+ job opportunities, tailored training, and AI-powered learning.",
      color: "#8a5cf7"
    },
    {
      icon: <WorkIcon />,
      title: "Master Internship Program",
      description: "A 3-month intensive internship where students develop one full-fledged product and receive guaranteed interview opportunities.",
      color: "#4376eb"
    },
    {
      icon: <BuildIcon />,
      title: "Advanced Full-Stack & Data Science Program",
      description: "A 9-month deep-dive training with major projects and numerous job opportunities for each student.",
      color: "#f07c3e"
    },
    {
      icon: <PeopleIcon />,
      title: "Corporate Training",
      description: "Customized upskilling programs for companies looking to enhance their team's technical capabilities.",
      color: "#e8518d"
    }
  ];

  return (
    <Box className={classes.pageContainer}>
      <Navbar />

      {/* Hero Section */}
      <Box className={classes.heroSection}>
        <Box className={classes.herocontent}>
          <Typography variant="h1" className={classes.pageTitle}>
            About <span style={{ color: "#FFC614", position: "relative", display: "inline-block" }}>Us</span>
          </Typography>
          <Typography variant="h6" className={classes.pageSubtitle}>
            India's first product-based learning platform designed to transform students into industry-ready professionals
          </Typography>
        </Box>
      </Box>

      {/* About Gigaversity Section with Enhanced Laptop Layout */}
      <Box className={classes.aboutSection}>
        <Box className={classes.laptopContainer}>
          <Box className={classes.laptop}>
            {/* Laptop Screen */}
            <Box className={classes.laptopScreen}>
              <Box className={classes.laptopTopBezel} />
              <Box className={classes.screenContent}>
                <Typography variant="h2" className={classes.aboutTitle}>
                  About
                  <span className={classes.gigaversityText}>Gigaversity</span>
                </Typography>

                <Typography variant="body1" className={classes.aboutDescription}>
                  Gigaversity is <span className={classes.highlight}>India's first product-based learning platform</span>, designed to equip students with practical skills, industry experience, and direct job opportunities. Unlike traditional online courses, we focus on <span className={classes.highlight}>real-world project building, job-specific training, and hands-on mentorship</span>, ensuring that learners graduate with an impressive portfolio that makes them stand out to recruiters.
                </Typography>

                <Button 
                  variant="contained" 
                  className={classes.talkButton}
                  endIcon={<ArrowForwardIcon />}
                >
                  Talk To Our Expert
                </Button>
              </Box>
            </Box>
            
            {/* Laptop Base */}
            <Box className={classes.laptopHinge} />
            <Box className={classes.laptopBase} />
          </Box>
        </Box>
      </Box>

      {/* Why Did We Start Gigaversity Section */}
      <Box className={classes.whySection}>
        <Box className={classes.whyContentContainer}>
          <Typography variant="h2" className={classes.whyTitle}>
            Why Did We <span>Start Gigaversity?</span>
          </Typography>
          
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography className={classes.whyText}>
              Every year, millions of students graduate, but a huge number of them struggle to land a job. Not because they lack potential, but because they lack the real-world skills that companies actually need.
            </Typography>
            
            <Typography className={classes.whyText}>
              We spoke to recruiters, hiring managers, and industry experts, and the message was clear: Degrees don't get jobs—skills do.
            </Typography>
            
            <Typography className={classes.whyText}>
              Yet, most education systems still focus on theory over practice, leaving students unprepared for real job roles. Even edtech platforms focus on generic courses but fail to bridge the learning-to-hiring gap.
            </Typography>
            
            <Typography className={classes.whyText}>
              That's where Gigaversity comes in. At Gigaversity, we believe you shouldn't just learn—you should get hired. And that's exactly what we help you do.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Core Values & Objectives Section */}
      <Box className={classes.valuesSection}>
        <Box className={classes.valuesContentContainer}>
          <Box className={classes.valuesTitleContainer}>
            <Typography variant="h2" className={classes.valuesTitle}>
              Core Values & <span className={classes.valuesHighlight}>Objectives</span>
            </Typography>
          </Box>

          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={5}>
            <Box flex={1} width={{ xs: '100%', md: '50%' }}>
              <Paper className={classes.cardContainer} elevation={0}>
                <Box className={`${classes.iconCircle} ${classes.visionIcon}`}>
                  <VisibilityIcon />
                </Box>
                <Typography variant="h3" className={classes.cardTitle}>
                  Vision
                </Typography>
                <Typography variant="body1" className={classes.cardDescription}>
                  At Gigaversity, we envision a future where education is not just about acquiring knowledge but about building real-world expertise. Our goal is to create a product-based learning ecosystem where students don't just learn concepts but develop industry-grade projects, making them job-ready from day one. We aspire to bridge the gap between academic learning and real-world job demands, ensuring every learner gets hands-on experience, professional mentorship, and direct career opportunities in top companies.
                </Typography>
              </Paper>
            </Box>

            <Box flex={1} width={{ xs: '100%', md: '50%' }}>
              <Paper className={classes.cardContainer} elevation={0}>
                <Box className={`${classes.iconCircle} ${classes.missionIcon}`}>
                  <TrackChangesIcon />
                </Box>
                <Typography variant="h3" className={classes.cardTitle}>
                  Mission
                </Typography>
                <Typography variant="body1" className={classes.cardDescription}>
                  Our mission at Gigaversity is to revolutionize education with job-specific training that blends theory and hands-on application. We focus on real-world projects, helping students build portfolio-worthy work. Through our Virtual Placement Drive and Internship Programs, we connect skilled candidates with top recruiters. Committed to accessible career transformation, we offer flexible, affordable learning for graduates, professionals, and freelancers. At Gigaversity, we don't just train—we equip students with skills and experience to secure high-paying careers.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* What Sets Us Apart - Programs Section */}
      <Box className={classes.programsSection}>
        <Box className={classes.decorCircle} sx={{ top: '10%', right: '5%', width: '300px', height: '300px' }} />
        <Box className={classes.decorCircle} sx={{ bottom: '5%', left: '10%', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(255, 198, 20, 0.05) 0%, rgba(255, 198, 20, 0) 70%)' }} />
        
        <Box className={classes.programsContentContainer}>
          <Typography variant="h2" className={classes.programsTitle}>
            What Sets Us Apart
          </Typography>

          <Box 
            display="flex" 
            flexWrap="wrap"
            gap={4} 
            sx={{ mt: 3 }}
            justifyContent="center"
          >
            {programs.map((program, index) => (
              <Box 
                key={index} 
                sx={{
                  flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' },
                  minWidth: { xs: '100%', sm: '45%', md: '22%' }
                }}
              >
                <Box className={classes.programCard}>
                  <Box 
                    className={classes.programIcon} 
                    sx={{ backgroundColor: program.color }}
                  >
                    {program.icon}
                  </Box>
                  <Box 
                    className={classes.colorBar}
                    sx={{ backgroundColor: program.color }}
                  />
                  <Typography className={classes.programTitle}>
                    {program.title}
                  </Typography>
                  <Typography className={classes.programDesc}>
                    {program.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutUs;