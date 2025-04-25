import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Heroguy from "../../../assets/heroguy.png";
import { ReactComponent as AIbook } from "../../../assets/ai-book.svg";
import { ReactComponent as Simplecal } from "../../../assets/simple-claender.svg";
import AnimatedCounter from "./AnimatedCounter";
import CodeIcon from '@mui/icons-material/Code';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const useStyles = makeStyles({
  imageCol: {
    width: "100%",
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    position: "relative",
    minHeight: "500px",
    "@media (max-width: 960px)": {
      width: "100%",
      justifyContent: "center",
      minHeight: "400px",
    },
    "@media (max-width: 600px)": {
      minHeight: "400px",
      alignItems: "flex-start",
      padding: "30px 0",
    },
  },
  featureCard: {
    backgroundColor: "#FFFFFFB3",
    padding: "12px 18px",
    borderRadius: "12px",
    boxShadow: "0px 10px 30px rgba(42, 43, 106, 0.15)",
    backdropFilter: "blur(10px)",
    display: "inline-flex",
    alignItems: "center",
    margin: "4px",
    maxWidth: "90%",
    position: "absolute",
    zIndex: 10,
    transform: "scale(0)",
    opacity: 0,
    transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    "&:hover": {
      transform: "scale(1.05) !important",
      boxShadow: "0px 15px 30px rgba(42, 43, 106, 0.25)",
    },
    "@media (max-width: 600px)": {
      display: "none", // Hide original cards on mobile
    },
  },
  topLeftCard: {
    top: "152px",
    left: "7px",
    animation: "$cardPopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s forwards",
  },
  topRightCard: {
    top: "235px",
    right: "-157px",
    animation: "$cardPopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 1s forwards",
  },
  bottomLeftCard: {
    bottom: "124px",
    left: "-76px",
    animation: "$cardPopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s forwards",
  },
  bottomRightCard: {
    right: "-68px",
    bottom: "56px",
    animation: "$cardPopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 1.4s forwards",
  },
  featureIcon1: {
    marginRight: "12px",
  },
  featureIcon2: {
    fontWeight: "bold !important",
    fontSize: "1rem !important",
    borderRadius: "50%",
    marginRight: "12px",
  },
  featureText: {
    color: "#2F2E51",
    opacity: "100%",
    fontWeight: "bold !important",
    fontSize: "1.1rem !important",
    "&.MuiTypography-root": {
      fontFamily: "Montserrat, sans-serif",
      textAlign: "center",
    },
    "@media (max-width: 1200px)": {
      fontSize: "0.95rem !important",
    },
  },
  imageContainer: {
    position: "relative",
    textAlign: "center",
    zIndex: 1,
    maxWidth: "100%",
    height: "auto",
    animation: "$float 6s ease-in-out infinite",
    filter: "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.15))",
    "@media (max-width: 960px)": {
      marginTop: "60px",
    },
  },
  heroImage: {
    maxWidth: "100%",
    height: "auto",
    "@media (max-width: 600px)": {
      display: "none"
    },
  },
  // Mobile view specific styles
  mobileContainer: {
    display: "none",
    "@media (max-width: 600px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      position: "relative",
      zIndex: 5,
    }
  },
  mobileFeatureBoxes: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
    width: "100%",
    maxWidth: "340px",
    margin: "0 auto",
  },
  featureBox: {
    width: "calc(50% - 15px)", // 2 boxes per row with gap
    opacity: 0,
    transform: "translateY(20px)",
  },
  mobileFeatureCard: {
    backgroundColor: "white !important",
    borderRadius: "12px !important",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.07) !important",
    height: "100%",
    width: "100%",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1) !important",
    },
  },
  iconCircle: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
    background: "#F2F6FF",
    color: "#2A2B6A",
    "& svg": {
      fontSize: "1.2rem",
    },
  },
  featureTitle: {
    fontSize: "0.95rem !important",
    fontWeight: "600 !important",
    color: "#2A2B6A !important",
    marginBottom: "4px !important",
    textAlign: "center",
  },
  featureValue: {
    fontSize: "1.4rem !important",
    fontWeight: "bold !important",
    color: "#FFC614 !important",
    lineHeight: "1.1 !important",
    textAlign: "center",
  },
  "@keyframes float": {
    "0%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-15px)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
  "@keyframes cardPopIn": {
    "0%": {
      opacity: 0,
      transform: "scale(0)",
    },
    "70%": {
      opacity: 1,
      transform: "scale(1.1)",
    },
    "100%": {
      opacity: 1,
      transform: "scale(1)",
    },
  },
  "@keyframes fadeInUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});

const HeroRightSection = () => {
  const classes = useStyles();
  const [visibleItems, setVisibleItems] = useState([]);

  // Features for mobile display
  const features = [
    { 
      title: "Code with AI", 
      value: "Simplified", 
      icon: <CodeIcon />,
      delay: 0.1
    },
    { 
      title: "Training Program", 
      value: "30 Days", 
      icon: <CalendarMonthIcon />,
      delay: 0.3
    },
    { 
      title: "Placement Options", 
      value: "400+", 
      icon: <BusinessCenterIcon />,
      delay: 0.5
    },
    { 
      title: "Weekly Jobs", 
      value: "40+", 
      icon: <AccessTimeIcon />,
      delay: 0.7
    }
  ];

  // Animation for mobile cards
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems([0, 1, 2, 3]);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box className={classes.imageCol}>
      {/* Feature Cards - Desktop */}
      <Box className={`${classes.featureCard} ${classes.topLeftCard}`}>
        <Box className={classes.featureIcon1}>
          <AIbook />
        </Box>
        <Typography className={classes.featureText}>
          Code with AI
        </Typography>
      </Box>

      <Box className={`${classes.featureCard} ${classes.topRightCard}`}>
        <Box className={classes.featureIcon1}>
          <Simplecal />
        </Box>
        <Typography className={classes.featureText}>
          30-Day Intensive Training
        </Typography>
      </Box>

      <Box className={`${classes.featureCard} ${classes.bottomLeftCard}`}>
        <Box className={classes.featureIcon2}>
          <AnimatedCounter end={400} suffix="+" />
        </Box>
        <Typography className={classes.featureText}>
          Placement Opportunities
        </Typography>
      </Box>

      <Box className={`${classes.featureCard} ${classes.bottomRightCard}`}>
        <Typography className={classes.featureText}>
          Weekly <AnimatedCounter end={40} suffix="+" /> Opportunities
        </Typography>
      </Box>

      {/* Student image */}
      <Box className={classes.imageContainer}>
        <img
          src={Heroguy}
          alt="Student with laptop"
          className={classes.heroImage}
        />
      </Box>
      
      {/* Mobile view - using boxes instead of grid */}
      <Box className={classes.mobileContainer}>
        <Box className={classes.mobileFeatureBoxes}>
          {features.map((feature, index) => (
            <Box 
              key={index}
              className={classes.featureBox}
              sx={{
                opacity: visibleItems.includes(index) ? 1 : 0,
                transform: visibleItems.includes(index) ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                transitionDelay: `${feature.delay}s`,
              }}
            >
              <Box className={classes.mobileFeatureCard}>
                <Box className={classes.iconCircle}>
                  {feature.icon}
                </Box>
                <Typography className={classes.featureTitle}>
                  {feature.title}
                </Typography>
                <Typography className={classes.featureValue}>
                  {feature.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroRightSection;