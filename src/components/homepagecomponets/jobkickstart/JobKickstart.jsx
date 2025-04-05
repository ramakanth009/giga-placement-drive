// src/components/jobkickstart/JobKickstart.jsx
import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import Jobkick from "../../../assets/jobkick.png";

const useStyles = makeStyles({
  section: {
    padding: "30px 0",
    overflow: "hidden",
    position: "relative",
    background: "linear-gradient(180deg, #ffffff 0%, #f5f8ff 100%)",
    "@media (max-width: 960px)": {
      padding: "50px 0",
    },
    "@media (max-width: 600px)": {
      padding: "40px 0",
    },
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    "@media (max-width: 960px)": {
      flexDirection: "column",
      gap: "30px",
    },
  },
  leftContainer: {
    position: "relative",
    width: "40%",
    height: "415px",
    display: "flex",
    justifyContent: "flex-end",
    "@media (max-width: 1200px)": {
      width: "45%",
    },
    "@media (max-width: 960px)": {
      width: "80%",
      height: "350px",
      justifyContent: "center",
      marginBottom: "20px",
    },
    "@media (max-width: 600px)": {
      width: "90%",
      height: "300px",
    },
  },
  rightContainer: {
    width: "55%",
    padding: "20px 0",
    "@media (max-width: 1200px)": {
      width: "50%",
    },
    "@media (max-width: 960px)": {
      width: "100%",
      padding: "0",
    },
  },
  imageBox: {
    position: "relative",
    width: "90%",
    maxWidth: "450px",
    zIndex: 2,
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
    "@media (max-width: 960px)": {
      width: "100%",
    },
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
    transition: "transform 0.5s ease",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  backgroundBox: {
    right: "-10px",
    width: "90%",
    bottom: "-11px",
    height: "100%",
    position: "absolute",
    backgroundColor: "#e6f2ff",
    borderBottom: "4px solid #2A2B6A",
    borderRight: "4px solid #2A2B6A",
    zIndex: 1,
    borderRadius: "12px",
    "@media (max-width: 960px)": {
      right: "-5px",
      bottom: "-5px",
      borderWidth: "3px",
    },
  },
  highlightDot: {
    position: "absolute",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "rgba(255, 198, 20, 0.15)",
    filter: "blur(25px)",
    zIndex: 0,
    "@media (max-width: 600px)": {
      width: "80px",
      height: "80px",
    },
  },
  topLeftDot: {
    top: "10%",
    left: "10%",
  },
  bottomRightDot: {
    bottom: "15%",
    right: "5%",
  },
  sectionTitle: {
    fontSize: "2.5rem !important",
    fontWeight: "bold !important",
    marginBottom: "30px !important",
    color: "#2A2B6A !important",
    lineHeight: "1.3 !important",
    position: "relative",
    "&:after": {
      content: "''",
      position: "absolute",
      bottom: "-12px",
      left: "0",
      width: "60px",
      height: "3px",
      backgroundColor: "#FFC614",
    },
    "@media (max-width: 960px)": {
      fontSize: "2.2rem !important",
      marginBottom: "25px !important",
      textAlign: "center",
      "&:after": {
        left: "50%",
        transform: "translateX(-50%)",
      },
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem !important",
      marginBottom: "20px !important",
    },
  },
  featureList: {
    marginBottom: "30px",
    width: "100%",
    "@media (max-width: 960px)": {
      marginBottom: "20px",
    },
  },
  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "22px",
    transform: "translateX(-10px)",
    opacity: 0,
    transition: "transform 0.5s ease, opacity 0.5s ease",
    width: "100%",
    "@media (max-width: 960px)": {
      marginBottom: "18px",
      justifyContent: "center",
    },
    "@media (max-width: 600px)": {
      marginBottom: "15px",
      alignItems: "center",
    },
  },
  featureItemVisible: {
    transform: "translateX(0)",
    opacity: 1,
  },
  checkIcon: {
    color: "#FFC614 !important",
    marginRight: "15px",
    fontSize: "24px !important",
    flexShrink: 0,
    "@media (max-width: 600px)": {
      fontSize: "20px !important",
      marginRight: "10px",
    },
  },
  featureText: {
    color: "#4A4A4A !important",
    fontSize: "1.15rem !important",
    fontWeight: "500 !important",
    lineHeight: "1.5 !important",
    "@media (max-width: 960px)": {
      textAlign: "center",
      maxWidth: "80%",
    },
    "@media (max-width: 600px)": {
      fontSize: "1rem !important",
      lineHeight: "1.4 !important",
      maxWidth: "100%",
    },
  },

  actionButton: {
    backgroundColor: "#2A2B6A !important",
    color: "white !important",
    padding: "12px 24px !important",
    borderRadius: "8px !important",
    fontWeight: "bold !important",
    fontSize: "1rem !important",
    textTransform: "none !important",
    transition: "all 0.3s ease !important",
    marginTop: "30px !important",
    marginBottom: "15px !important",
    boxShadow: "0 4px 10px rgba(42, 43, 106, 0.2) !important",
    "&:hover": {
      backgroundColor: "#212255 !important",
      transform: "translateY(-3px)",
      boxShadow: "0 6px 15px rgba(42, 43, 106, 0.3) !important",
    },
    "@media (max-width: 960px)": {
      display: "block",
      margin: "25px auto 15px auto !important",
    },
    "@media (max-width: 600px)": {
      padding: "10px 20px !important",
      fontSize: "0.9rem !important",
    },
  },

  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(0deg, rgba(42, 43, 106, 0.1) 0%, rgba(255, 255, 255, 0) 50%)",
    zIndex: 2,
  },
  badge: {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "#FFC614",
    color: "#2A2B6A",
    padding: "5px 10px",
    borderRadius: "20px",
    fontWeight: "bold",
    fontSize: "0.8rem",
    zIndex: 3,
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
    "@media (max-width: 600px)": {
      fontSize: "0.7rem",
      padding: "4px 8px",
    },
  },
});

const JobKickstart = () => {
  const classes = useStyles();
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  const navigate = useNavigate();

  // Feature items from the image
  const features = [
    "Learn in-demand skills that employers seek for top-tier positions",
    "Build portfolio projects that prove your expertise and stand out from other candidates",
    "Connect with 100+ hiring partners for direct interview opportunities",
    "Get hired with packages starting from 3 LPA-15 LPA",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleFeatures(features.map((_, i) => i));
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box className={classes.section}>
      <Box className={`${classes.highlightDot} ${classes.topLeftDot}`}></Box>
      <Box className={`${classes.highlightDot} ${classes.bottomRightDot}`}></Box>
      
      <Container maxWidth="lg" sx={{ overflow: "hidden" }}>
        <Box className={classes.contentContainer}>
          {/* Left side - Image with background box */}
          <Box className={classes.leftContainer}>
            <Box className={classes.imageBox}>
              <span className={classes.badge}>Featured</span>
              <img
                src={Jobkick}
                alt="Students collaborating on a project"
                className={classes.image}
              />
              <Box className={classes.imageOverlay}></Box>
            </Box>
            <Box className={classes.backgroundBox} />
          </Box>

          {/* Right side - Content */}
          <Box className={classes.rightContainer}>
            {/* Title */}
            <Typography variant="h3" className={classes.sectionTitle}>
              Why Struggle With Traditional Job Hunting When You Can
            </Typography>

            {/* Feature list */}
            <Box className={classes.featureList}>
              {features.map((feature, index) => (
                <Box 
                  key={index} 
                  className={`${classes.featureItem} ${visibleFeatures.includes(index) ? classes.featureItemVisible : ''}`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <CheckCircleIcon className={classes.checkIcon} />
                  <Typography className={classes.featureText}>
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button 
              variant="contained" 
              className={classes.actionButton}
              endIcon={<ArrowForwardIcon />}
              onClick={() => {
                navigate('/register');
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Ensure scroll to top
              }}
            >
              Apply Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default JobKickstart;