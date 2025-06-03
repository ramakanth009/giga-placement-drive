import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditIcon from "@mui/icons-material/Edit";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HandshakeIcon from "@mui/icons-material/Handshake";

const useStyles = makeStyles({
  heroContainer: {
    position: "relative",
    minHeight: "85vh",
    display: "flex",
    alignItems: "center",
    padding: "20px 0",
    overflow: "hidden",
    background: "linear-gradient(135deg, #f6f9ff 0%, #edf5ff 100%)",
    "@media (max-width: 960px)": {
      minHeight: "80vh",
    },
    "@media (max-width: 600px)": {
      minHeight: "70vh",
      padding: "40px 0",
    },
  },
  slideContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    zIndex: 2,
  },
  slide: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    visibility: "hidden",
    transition: "opacity 0.8s ease, transform 0.8s ease, visibility 0.8s",
    transform: "translateX(50px)",
  },
  activeSlide: {
    opacity: 1,
    visibility: "visible",
    transform: "translateX(0)",
    position: "relative",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    "@media (max-width: 960px)": {
      flexDirection: "column",
      textAlign: "center",
      gap: "40px",
    },
  },
  leftContent: {
    flex: "1",
    maxWidth: "650px",
    zIndex: 5,
    "@media (max-width: 960px)": {
      maxWidth: "100%",
      order: 2,
    },
  },
  rightContent: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 960px)": {
      order: 1,
      maxWidth: "400px",
    },
    "@media (max-width: 600px)": {
      maxWidth: "300px",
    },
  },
  headline: {
    fontSize: "3.5rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "24px !important",
    lineHeight: "1.2 !important",
    "& span": {
      color: "#FFC614 !important",
    },
    "@media (max-width: 1200px)": {
      fontSize: "3rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "2.5rem !important",
      marginBottom: "20px !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "2rem !important",
      marginBottom: "16px !important",
    },
  },
  subheadline: {
    fontSize: "1.3rem !important",
    color: "#555 !important",
    marginBottom: "40px !important",
    lineHeight: "1.6 !important",
    "@media (max-width: 1200px)": {
      fontSize: "1.2rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "1.1rem !important",
      marginBottom: "30px !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1rem !important",
      marginBottom: "24px !important",
    },
  },
  ctaButton: {
    backgroundColor: "#2A2B6A !important",
    color: "white !important",
    padding: "14px 30px !important",
    borderRadius: "50px !important",
    fontSize: "1.1rem !important",
    fontWeight: "600 !important",
    textTransform: "none !important",
    boxShadow: "0 10px 25px rgba(42, 43, 106, 0.2) !important",
    transition: "all 0.3s ease !important",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      backgroundColor: "#1A1B4A !important",
      transform: "translateY(-5px)",
      boxShadow: "0 15px 35px rgba(42, 43, 106, 0.3) !important",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "100%",
      background: "rgba(255, 255, 255, 0.3)",
      transform: "skewX(-30deg) translateX(-150px)",
      animation: "$shine 3s infinite",
    },
    "@media (max-width: 960px)": {
      padding: "12px 25px !important",
      fontSize: "1rem !important",
    },
    "@media (max-width: 600px)": {
      padding: "10px 20px !important",
      fontSize: "0.9rem !important",
    },
  },
  navigationControls: {
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    "@media (max-width: 600px)": {
      bottom: "20px",
    },
  },
  dotsContainer: {
    display: "flex",
    gap: "8px",
  },
  dot: {
    fontSize: "12px !important",
    color: "rgba(42, 43, 106, 0.3) !important",
    cursor: "pointer",
    transition: "transform 0.3s ease, color 0.3s ease",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  activeDot: {
    color: "#2A2B6A !important",
    transform: "scale(1.2)",
  },
  navButton: {
    color: "#2A2B6A !important",
    margin: "0 10px !important",
    backgroundColor: "rgba(255, 255, 255, 0.8) !important",
    "&:hover": {
      backgroundColor: "white !important",
    },
    "@media (max-width: 600px)": {
      padding: "8px !important",
    },
  },
  backgroundElement: {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(80px)",
    zIndex: 1,
  },
  backgroundElement1: {
    width: "500px",
    height: "500px",
    top: "-100px",
    right: "-100px",
    background: "rgba(42, 43, 106, 0.05)",
    animation: "$float 15s infinite alternate",
  },
  backgroundElement2: {
    width: "400px",
    height: "400px",
    bottom: "-100px",
    left: "-100px",
    background: "rgba(255, 198, 20, 0.05)",
    animation: "$float 18s infinite alternate-reverse",
  },
  iconWrapper: {
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: "''",
      position: "absolute",
      top: "-20%",
      left: "-20%",
      width: "140%",
      height: "140%",
      background:
        "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",
      transform: "rotate(45deg)",
      animation: "$shimmer 3s infinite",
    },
    "@media (max-width: 1200px)": {
      width: "300px",
      height: "300px",
    },
    "@media (max-width: 960px)": {
      width: "250px",
      height: "250px",
    },
    "@media (max-width: 600px)": {
      width: "200px",
      height: "200px",
    },
  },
  icon: {
    fontSize: "120px !important",
    color: "#2A2B6A !important",
    "@media (max-width: 1200px)": {
      fontSize: "100px !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "90px !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "80px !important",
    },
  },
  slideIndicator: {
    position: "absolute",
    top: "20px",
    right: "20px",
    display: "flex",
    alignItems: "center",
    padding: "8px 16px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "50px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    "& p": {
      margin: "0 !important",
      fontSize: "0.9rem !important",
      fontWeight: "600 !important",
      color: "#2A2B6A !important",
    },
    "@media (max-width: 600px)": {
      top: "10px",
      right: "10px",
      padding: "6px 12px",
      "& p": {
        fontSize: "0.8rem !important",
      },
    },
  },
  "@keyframes float": {
    "0%": {
      transform: "translateY(0) rotate(0deg)",
    },
    "50%": {
      transform: "translateY(-20px) rotate(5deg)",
    },
    "100%": {
      transform: "translateY(0) rotate(0deg)",
    },
  },
  "@keyframes shine": {
    "0%": {
      transform: "skewX(-30deg) translateX(-150px)",
    },
    "100%": {
      transform: "skewX(-30deg) translateX(350px)",
    },
  },
  "@keyframes shimmer": {
    "0%": {
      transform: "rotate(45deg) translateY(-100%)",
    },
    "100%": {
      transform: "rotate(45deg) translateY(100%)",
    },
  },
});

const HeroCarousel = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  // Banner content data
  const banners = [
    {
      headline: "Write your First Career Chapter with Gigaversity",
      subheadline:
        "Build a professional ATS-compliant resume that stands out to recruiters in tech, finance, marketing, and other high-growth industries. Get hired faster with our proven resume templates.",
      ctaText: "Build your free resume now",
      ctaAction: () => window.open("http://resume.gigaversity.in/", "_blank"),
      icon: <EditIcon className={classes.icon} />,
      highlightWord: "Career Chapter",
    },
    {
      headline:
        "From Idea to Prototype: Build Your Own Startup with Up to ₹1 Lakh Innovation Grant",
      subheadline:
        "Transform your startup idea into reality with funding up to ₹1 Lakh, expert mentorship, and comprehensive business development support. Join India's fastest-growing startup incubator.",
      ctaText: "Apply for funding",
      ctaAction: () => navigate("/startup-program"),
      icon: <LightbulbIcon className={classes.icon} />,
      highlightWord: "₹1 Lakh Innovation Grant",
    },
    {
      headline: "Experience the Learning in Tech Ecosystem like never before",
      subheadline:
        "Immerse yourself in India's most advanced tech campus featuring cutting-edge labs, collaborative workspaces, and industry-standard infrastructure designed for next-generation learning.",
      ctaText: "Visit Campus",
      ctaAction: () => navigate("/campus"),
      icon: <SchoolIcon className={classes.icon} />,
      highlightWord: "Tech Ecosystem",
    },
    {
      headline: "Turn Concepts into Code, Code into careers",
      subheadline:
        "Master in-demand programming skills through hands-on projects, real-world applications, and industry-relevant curriculum that guarantees job readiness in today's competitive tech market.",
      ctaText: "View our courses",
      ctaAction: () => navigate("/courses"),
      icon: <CodeIcon className={classes.icon} />,
      highlightWord: "careers",
    },
    {
      headline:
        "10 Lakh Students Apply for IT Jobs Every Year — check if IT as a career Suits You?",
      subheadline:
        "Stand out from millions of IT job applicants with our comprehensive career assessment. Discover your coding aptitude, technical strengths, and personalized learning path for IT success.",
      ctaText: "Check if IT suits you",
      ctaAction: () => navigate("/pre-screening-test"),
      icon: <AssessmentIcon className={classes.icon} />,
      highlightWord: "IT Jobs",
    },
    {
      headline: "Meet the Startup Founders Who Began Like You",
      subheadline:
        "Learn from successful tech entrepreneurs and startup founders who launched their companies from Gigaversity. Access exclusive networking events, mentorship programs, and collaboration opportunities.",
      ctaText: "Join collaboration network",
      ctaAction: () => navigate("/collaboration"),
      icon: <HandshakeIcon className={classes.icon} />,
      highlightWord: "Startup Founders",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  // Handle slide navigation
  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  // Process headline to highlight specific words
  const renderHighlightedHeadline = (headline, highlightWord) => {
    if (!highlightWord) return headline;

    const parts = headline.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span>{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <Box className={classes.heroContainer}>
      {/* Background elements */}
      <Box
        className={`${classes.backgroundElement} ${classes.backgroundElement1}`}
      />
      <Box
        className={`${classes.backgroundElement} ${classes.backgroundElement2}`}
      />

      {/* Slide indicator */}
      <Box className={classes.slideIndicator}>
        <Typography>{`${activeSlide + 1}/${banners.length}`}</Typography>
      </Box>

      <Container maxWidth="xl">
        <Box className={classes.slideContainer}>
          {banners.map((banner, index) => (
            <Box
              key={index}
              className={`${classes.slide} ${
                index === activeSlide ? classes.activeSlide : ""
              }`}
            >
              <Box className={classes.content}>
                <Box className={classes.leftContent}>
                  <Typography className={classes.headline}>
                    {renderHighlightedHeadline(
                      banner.headline,
                      banner.highlightWord
                    )}
                  </Typography>
                  <Typography className={classes.subheadline}>
                    {banner.subheadline}
                  </Typography>
                  <Button
                    variant="contained"
                    className={classes.ctaButton}
                    onClick={banner.ctaAction}
                  >
                    {banner.ctaText}
                  </Button>
                </Box>
                <Box className={classes.rightContent}>
                  <Box className={classes.iconWrapper}>{banner.icon}</Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Navigation controls */}
        <Box className={classes.navigationControls}>
          <IconButton
            className={classes.navButton}
            onClick={goToPrevSlide}
            aria-label="Previous slide"
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <Box className={classes.dotsContainer}>
            {banners.map((_, index) => (
              <FiberManualRecordIcon
                key={index}
                className={`${classes.dot} ${
                  index === activeSlide ? classes.activeDot : ""
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </Box>

          <IconButton
            className={classes.navButton}
            onClick={goToNextSlide}
            aria-label="Next slide"
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroCarousel;
