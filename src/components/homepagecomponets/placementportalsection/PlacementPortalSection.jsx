import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button, IconButton, Modal } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WorkIcon from '@mui/icons-material/Work';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AssignmentIcon from '@mui/icons-material/Assignment';
import VideocamIcon from '@mui/icons-material/Videocam';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TimelineIcon from '@mui/icons-material/Timeline';

import image1 from "../../../assets/Job-Portal-website/1000+curated-Opportunities.png";
import image2 from "../../../assets/Job-Portal-website/Job-Announcement.png";
import image3 from "../../../assets/Job-Portal-website/Skill-Based-Assessments.png";
import image4 from "../../../assets/Job-Portal-website/Mock-Interview-Coach.png";
import image5 from "../../../assets/Job-Portal-website/Proctored-Testing-Employer-Access.png";
import image6 from "../../../assets/Job-Portal-website/Detailed-Feedback-and-insights-report.png";
import CentralizedPopupForms from "../../common/popupforms/CentralizedPopupForms";

const useStyles = makeStyles({
  section: {
    padding: "40px 0",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 1200px)": {
      padding: "35px 0",
      height: "95vh",
    },
  imageModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(10px)",
    padding: "20px",
  },
  modalImage: {
    maxWidth: "95vw",
    maxHeight: "95vh",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    borderRadius: "15px",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
    outline: "none",
    display: "block",
    margin: "auto",
  },
  imageContainer: {
    position: "relative",
    cursor: "pointer",
    transition: "all 0.3s ease",
    minHeight: "400px",
    border: "2px solid rgba(42, 43, 106, 0.1)",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    "&:hover": {
      transform: "scale(1.02)",
      borderColor: "rgba(42, 43, 106, 0.3)",
    },
    "&:hover .imageOverlay": {
      opacity: 1,
    },
    "@media (max-width: 1200px)": {
      minHeight: "380px",
      borderRadius: "14px",
    },
    "@media (max-width: 960px)": {
      minHeight: "350px",
      borderRadius: "13px",
    },
    "@media (max-width: 600px)": {
      minHeight: "320px",
      borderRadius: "12px",
    },
    "@media (max-width: 480px)": {
      minHeight: "300px",
      borderRadius: "11px",
    },
    "@media (max-width: 375px)": {
      minHeight: "280px",
      borderRadius: "10px",
    },
  },
  imageOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "all 0.3s ease",
    borderRadius: "15px",
    "@media (max-width: 1200px)": {
      borderRadius: "14px",
    },
    "@media (max-width: 960px)": {
      borderRadius: "13px",
    },
    "@media (max-width: 600px)": {
      borderRadius: "12px",
    },
    "@media (max-width: 480px)": {
      borderRadius: "11px",
    },
    "@media (max-width: 375px)": {
      borderRadius: "10px",
    },
  },
  overlayText: {
    color: "white",
    fontSize: "1.2rem !important",
    fontWeight: "600 !important",
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "1.1rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "1rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.9rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.8rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.7rem !important",
    },
  },
    "@media (max-width: 960px)": {
      padding: "30px 0",
      height: "auto",
      minHeight: "100vh",
    },
    "@media (max-width: 600px)": {
      padding: "25px 0",
      minHeight: "95vh",
    },
    "@media (max-width: 480px)": {
      padding: "20px 0",
      minHeight: "90vh",
    },
    "@media (max-width: 375px)": {
      padding: "15px 0",
      minHeight: "85vh",
    },
  },
  container: {
    position: "relative",
    zIndex: 2,
  },
  titleContainer: {
    textAlign: "center",
    marginBottom: "30px",
    "@media (max-width: 1200px)": {
      marginBottom: "28px",
    },
    "@media (max-width: 960px)": {
      marginBottom: "25px",
    },
    "@media (max-width: 600px)": {
      marginBottom: "22px",
    },
    "@media (max-width: 480px)": {
      marginBottom: "20px",
    },
    "@media (max-width: 375px)": {
      marginBottom: "18px",
    },
  },
  mainTitle: {
    marginTop:"30px !important",
    fontSize: "2.5rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "10px !important",
    lineHeight: "1.2 !important",
    "@media (max-width: 1200px)": {
      fontSize: "2.3rem !important",
      marginBottom: "9px !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "2.1rem !important",
      marginBottom: "8px !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem !important",
      marginBottom: "7px !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.5rem !important",
      marginBottom: "6px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "1.3rem !important",
      marginBottom: "5px !important",
    },
  },
  highlight: {
    color: "#FFC614",
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    height: "calc(100vh - 200px)",
    "@media (max-width: 1200px)": {
      gap: "28px",
      height: "calc(95vh - 180px)",
    },
    "@media (max-width: 960px)": {
      flexDirection: "column",
      gap: "25px",
      height: "auto",
    },
    "@media (max-width: 600px)": {
      gap: "20px",
    },
    "@media (max-width: 480px)": {
      gap: "18px",
    },
    "@media (max-width: 375px)": {
      gap: "15px",
    },
  },
  contentBox: {
    flex: "0.8",
    color: "#2A2B6A",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: "20px",
    height: "100%",
    minHeight: "400px",
    "@media (max-width: 1200px)": {
      paddingRight: "18px",
      minHeight: "380px",
    },
    "@media (max-width: 960px)": {
      textAlign: "center",
      paddingRight: "0",
      order: 2,
      height: "auto",
      flex: "1",
      minHeight: "350px",
    },
    "@media (max-width: 600px)": {
      paddingLeft: "10px",
      paddingRight: "10px",
      minHeight: "320px",
    },
    "@media (max-width: 480px)": {
      paddingLeft: "8px",
      paddingRight: "8px",
      minHeight: "300px",
    },
    "@media (max-width: 375px)": {
      paddingLeft: "5px",
      paddingRight: "5px",
      minHeight: "280px",
    },
  },
  iconContainer: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
    backgroundColor: "rgba(255, 198, 20, 0.1)",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255, 198, 20, 0.3)",
    transition: "all 0.3s ease",
    "@media (max-width: 1200px)": {
      width: "65px",
      height: "65px",
      marginBottom: "14px",
    },
    "@media (max-width: 960px)": {
      margin: "0 auto 13px",
      width: "60px",
      height: "60px",
    },
    "@media (max-width: 600px)": {
      width: "55px",
      height: "55px",
      marginBottom: "12px",
    },
    "@media (max-width: 480px)": {
      width: "50px",
      height: "50px",
      marginBottom: "10px",
    },
    "@media (max-width: 375px)": {
      width: "45px",
      height: "45px",
      marginBottom: "8px",
    },
  },
  icon: {
    fontSize: "30px !important",
    color: "#FFC614 !important",
    "@media (max-width: 1200px)": {
      fontSize: "28px !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "26px !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "24px !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "22px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "20px !important",
    },
  },
  slideTitle: {
    fontSize: "1.8rem !important",
    fontWeight: "bold !important",
    marginBottom: "12px !important",
    lineHeight: "1.3 !important",
    color: "#2A2B6A !important",
    transition: "all 0.3s ease",
    "@media (max-width: 1200px)": {
      fontSize: "1.7rem !important",
      marginBottom: "11px !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "1.6rem !important",
      marginBottom: "10px !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.4rem !important",
      marginBottom: "9px !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.2rem !important",
      marginBottom: "8px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "1rem !important",
      marginBottom: "7px !important",
    },
  },
  slideDescription: {
    fontSize: "0.95rem !important",
    lineHeight: "1.5 !important",
    marginBottom: "20px !important",
    color: "rgba(42, 43, 106, 0.8) !important",
    maxWidth: "380px",
    transition: "all 0.3s ease",
    "@media (max-width: 1200px)": {
      fontSize: "0.93rem !important",
      marginBottom: "18px !important",
      maxWidth: "360px",
    },
    "@media (max-width: 960px)": {
      maxWidth: "480px",
      margin: "0 auto 16px !important",
      fontSize: "0.91rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.88rem !important",
      marginBottom: "15px !important",
      maxWidth: "420px",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.85rem !important",
      marginBottom: "14px !important",
      maxWidth: "380px",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.82rem !important",
      marginBottom: "12px !important",
      maxWidth: "330px",
    },
  },
  ctaText: {
    fontSize: "1rem !important",
    lineHeight: "1.5 !important",
    marginBottom: "20px !important",
    color: "#2A2B6A !important",
    fontWeight: "600 !important",
    textAlign: "left",
    "@media (max-width: 1200px)": {
      fontSize: "0.98rem !important",
      marginBottom: "18px !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "0.96rem !important",
      marginBottom: "16px !important",
      textAlign: "center",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.9rem !important",
      marginBottom: "15px !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.88rem !important",
      marginBottom: "14px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.85rem !important",
      marginBottom: "12px !important",
    },
  },
  scheduleButton: {
    backgroundColor: "#FFC614 !important",
    color: "#2A2B6A !important",
    padding: "12px 35px !important",
    fontSize: "1rem !important",
    fontWeight: "600 !important",
    borderRadius: "50px !important",
    textTransform: "none !important",
    boxShadow: "0 6px 20px rgba(255, 198, 20, 0.3) !important",
    transition: "all 0.3s ease !important",
    alignSelf: "flex-start",
    "&:hover": {
      backgroundColor: "#2A2B6A !important",
      color: "white !important",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(42, 43, 106, 0.4) !important",
    },
    "@media (max-width: 1200px)": {
      padding: "11px 32px !important",
      fontSize: "0.98rem !important",
    },
    "@media (max-width: 960px)": {
      alignSelf: "center",
      padding: "10px 30px !important",
      fontSize: "0.96rem !important",
    },
    "@media (max-width: 600px)": {
      padding: "9px 28px !important",
      fontSize: "0.9rem !important",
    },
    "@media (max-width: 480px)": {
      padding: "8px 25px !important",
      fontSize: "0.88rem !important",
    },
    "@media (max-width: 375px)": {
      padding: "7px 22px !important",
      fontSize: "0.85rem !important",
    },
  },
  imageBox: {
    flex: "1.8",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    minHeight: "400px",
    "@media (max-width: 1200px)": {
      flex: "1.7",
      minHeight: "380px",
    },
    "@media (max-width: 960px)": {
      order: 1,
      width: "100%",
      maxWidth: "600px",
      margin: "0 auto",
      height: "auto",
      flex: "1",
      minHeight: "350px",
    },
    "@media (max-width: 600px)": {
      maxWidth: "550px",
      minHeight: "320px",
    },
    "@media (max-width: 480px)": {
      maxWidth: "450px",
      minHeight: "300px",
    },
    "@media (max-width: 375px)": {
      maxWidth: "350px",
      minHeight: "280px",
    },
  },
  slideImage: {
    width: "100%",
    height: "100%",
    maxHeight: "450px",
    objectFit: "contain",
    borderRadius: "15px",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
    transition: "all 0.5s ease",
    border: "1px solid rgba(42, 43, 106, 0.1)",
    "@media (max-width: 1200px)": {
      maxHeight: "420px",
      borderRadius: "14px",
    },
    "@media (max-width: 960px)": {
      maxHeight: "380px",
      maxWidth: "100%",
      borderRadius: "13px",
    },
    "@media (max-width: 600px)": {
      maxHeight: "280px",
      borderRadius: "12px",
    },
    "@media (max-width: 480px)": {
      maxHeight: "220px",
      borderRadius: "11px",
    },
    "@media (max-width: 375px)": {
      maxHeight: "180px",
      borderRadius: "10px",
    },
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    marginTop: "20px",
    "@media (max-width: 1200px)": {
      gap: "14px",
      marginTop: "18px",
    },
    "@media (max-width: 960px)": {
      order: 3,
      marginTop: "16px",
      gap: "13px",
    },
    "@media (max-width: 600px)": {
      gap: "12px",
      marginTop: "14px",
    },
    "@media (max-width: 480px)": {
      gap: "11px",
      marginTop: "12px",
    },
    "@media (max-width: 375px)": {
      gap: "10px",
      marginTop: "10px",
    },
  },
  navigationButton: {
    backgroundColor: "rgba(42, 43, 106, 0.1) !important",
    backdropFilter: "blur(10px) !important",
    color: "#2A2B6A !important",
    width: "45px !important",
    height: "45px !important",
    borderRadius: "50% !important",
    border: "2px solid rgba(42, 43, 106, 0.2) !important",
    transition: "all 0.3s ease !important",
    "&:hover": {
      backgroundColor: "#2A2B6A !important",
      color: "white !important",
      transform: "scale(1.05)",
      border: "2px solid #2A2B6A !important",
    },
    "&:disabled": {
      opacity: "0.5 !important",
      cursor: "not-allowed !important",
    },
    "@media (max-width: 1200px)": {
      width: "43px !important",
      height: "43px !important",
    },
    "@media (max-width: 960px)": {
      width: "42px !important",
      height: "42px !important",
    },
    "@media (max-width: 600px)": {
      width: "40px !important",
      height: "40px !important",
    },
    "@media (max-width: 480px)": {
      width: "38px !important",
      height: "38px !important",
    },
    "@media (max-width: 375px)": {
      width: "36px !important",
      height: "36px !important",
    },
  },
  slideIndicator: {
    color: "#2A2B6A !important",
    fontSize: "1rem !important",
    fontWeight: "600 !important",
    minWidth: "80px",
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "0.98rem !important",
      minWidth: "78px",
    },
    "@media (max-width: 960px)": {
      fontSize: "0.96rem !important",
      minWidth: "76px",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.9rem !important",
      minWidth: "70px",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.88rem !important",
      minWidth: "68px",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.85rem !important",
      minWidth: "65px",
    },
  },
  glowEffect: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    zIndex: 0,
    opacity: 0.05,
    filter: "blur(150px)",
    background: "radial-gradient(circle, #FFC614 0%, #2A2B6A 70%)",
    top: "50%",
    right: "-100px",
    transform: "translateY(-50%)",
    "@media (max-width: 1200px)": {
      width: "380px",
      height: "380px",
      right: "-90px",
    },
    "@media (max-width: 960px)": {
      width: "320px",
      height: "320px",
      right: "50%",
      transform: "translateX(50%) translateY(-50%)",
    },
    "@media (max-width: 600px)": {
      width: "280px",
      height: "280px",
    },
    "@media (max-width: 480px)": {
      width: "240px",
      height: "240px",
    },
    "@media (max-width: 375px)": {
      width: "200px",
      height: "200px",
    },
  },
  contentTransition: {
    opacity: 1,
    transform: "translateX(0)",
    transition: "all 0.5s ease",
    "&.entering": {
      opacity: 0,
      transform: "translateX(-30px)",
    },
    "&.exiting": {
      opacity: 0,
      transform: "translateX(30px)",
    },
  },
});

const PlacementPortalSection = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const slides = [
    {
      title: "1000+ Curated Opportunities",
      description: "Access a wide range of verified roles from top startups and leading tech companies actively hiring fresh talent like you.",
      icon: <WorkIcon className={classes.icon} />,
      image: image1,
      cta: "Explore Opportunities"
    },
    {
      title: "Custom Job Announcements",
      description: "Get personalized job alerts based on your skills, interests, and career goals—sourced from India's top job platforms, all in one place.",
      icon: <NotificationsActiveIcon className={classes.icon} />,
      image: image2,
      cta: "Set Up Alerts"
    },
    {
      title: "Skill-Based Assessments",
      description: "Demonstrate your expertise with real-time coding tasks and domain-specific evaluations designed to match industry expectations.",
      icon: <AssignmentIcon className={classes.icon} />,
      image: image3,
      cta: "Take Assessment"
    },
    {
      title: "Mock Interview Coach",
      description: "Prepare with AI-powered and expert-led mock interviews. Receive actionable insights and performance analysis to build interview confidence.",
      icon: <VideocamIcon className={classes.icon} />,
      image: image4,
      cta: "Start Practice"
    },
    {
      title: "Proctored Testing & Employer Access",
      description: "Provides you with secure, monitored tests based on the job role, skills, or resume that validate and provides you complete insight.",
      icon: <VerifiedUserIcon className={classes.icon} />,
      image: image5,
      cta: "Verify Skills"
    },
    {
      title: "Detailed Feedback and Insights Report",
      description: "Delivers detailed feedback on body language, tone of voice, and answer quality — including concept-level insights and how to improve each response.",
      icon: <TimelineIcon className={classes.icon} />,
      image: image6,
      cta: "View Insights"
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    let interval;
    if (!isPaused && !isModalOpen) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => 
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change slide every 3 seconds
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPaused, isModalOpen, slides.length]);

  const handleSlideChange = (newIndex) => {
    if (newIndex === activeIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsTransitioning(false);
    }, 150);
  };

  const goToPrevious = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : slides.length - 1;
    handleSlideChange(newIndex);
  };

  const goToNext = () => {
    const newIndex = activeIndex < slides.length - 1 ? activeIndex + 1 : 0;
    handleSlideChange(newIndex);
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleImageHover = () => {
    setIsPaused(true);
  };

  const handleImageLeave = () => {
    setIsPaused(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const currentSlide = slides[activeIndex];

  return (
    <Box className={classes.section}>
      <Box className={classes.glowEffect} />
      
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography variant="h1" className={classes.mainTitle}>
            Unlock Career Opportunities with{" "}
            <span className={classes.highlight}>Gigaversity Smart Job Portal</span>
          </Typography>
        </Box>

        <Box className={classes.contentWrapper}>
          {/* Content Side - Left */}
          <Box 
            className={`${classes.contentBox} ${classes.contentTransition} ${isTransitioning ? 'entering' : ''}`}
          >
            <Box className={classes.iconContainer}>
              {currentSlide.icon}
            </Box>
            
            <Typography variant="h2" className={classes.slideTitle}>
              {currentSlide.title}
            </Typography>
            
            <Typography variant="body1" className={classes.slideDescription}>
              {currentSlide.description}
            </Typography>
            
            <Typography className={classes.ctaText}>
              Book a demo to access the Gigaversity Job Portal—connect with hiring partners and apply for jobs now
            </Typography>
            
            <Button 
              className={classes.scheduleButton}
              aria-label="Schedule Demo"
              onClick={() => setIsPopupOpen(true)}
            >
              Schedule now
            </Button>
          </Box>

          {/* Image Side - Right */}
          <Box className={classes.imageBox}>
            <Box 
              className={classes.imageContainer}
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
              onClick={handleImageClick}
            >
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className={classes.slideImage}
                loading={activeIndex <= 1 ? 'eager' : 'lazy'}
              />
              <Box className={`${classes.imageOverlay} imageOverlay`}>
                <Typography className={classes.overlayText}>
                  Click to view
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Navigation Controls */}
        <Box className={classes.navigationContainer}>
          <IconButton
            className={classes.navigationButton}
            onClick={goToPrevious}
            disabled={isTransitioning}
            aria-label="Previous feature"
          >
            <ArrowBackIosIcon />
          </IconButton>

          <Typography className={classes.slideIndicator}>
            {activeIndex + 1} / {slides.length}
          </Typography>

          <IconButton
            className={classes.navigationButton}
            onClick={goToNext}
            disabled={isTransitioning}
            aria-label="Next feature"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Container>

      {/* Image Modal */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        className={classes.imageModal}
        closeAfterTransition
      >
        <Box 
          sx={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
          onClick={handleCloseModal}
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className={classes.modalImage}
            onClick={(e) => e.stopPropagation()}
          />
        </Box>
      </Modal>

      {/* Popup for Schedule a Demo for Job Portal */}
      <CentralizedPopupForms
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        variant="jobportal"
      />
    </Box>
  );
};

export default PlacementPortalSection;