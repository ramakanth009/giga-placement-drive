import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Heroguy from "../../assets/heroguy.png";
import { ReactComponent as AIbook } from "../../assets/ai-book.svg";
import { ReactComponent as Simplecal } from "../../assets/simple-claender.svg";
import AnimatedCounter from "./AnimatedCounter";
import CodeIcon from '@mui/icons-material/Code';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';

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
    padding: "4px 14px",
    borderRadius: "8px",
    boxShadow: "0px 4px 60.4px 0px #2A2B6A0F",
    display: "inline-flex",
    alignItems: "center",
    margin: "4px",
    maxWidth: "90%",
    transition: "all 0.5s ease",
    "@media (max-width: 600px)": {
      display: "none", // Hide original cards on mobile
    },
  },
  featureCardAnimated: {
    animation: "$pulse 2s infinite alternate",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "8px",
      boxShadow: "0 0 8px 3px rgba(255, 198, 20, 0.2)",
      opacity: 0,
      animation: "$glow 2s infinite alternate",
    },
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(1)",
    },
    "100%": {
      transform: "scale(1.05)",
    },
  },
  "@keyframes glow": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 0.7,
    },
  },
  featureIcon1: {
    marginRight: "12px",
  },
  featureIcon2: {
    backgroundColor: "#000000",
    background: "linear-gradient(180deg, #FAFAFA 0%, #D6EBFF 100%)",
    padding: "15px",
    fontWeight: "bold !important",
    fontSize: "1rem !important",
    borderRadius: "50%",
    position: "absolute",
    bottom: "70px",
    left: "55px",
    zIndex: 2,
    animation: "$bounce 3s infinite",
    "@media (max-width: 960px)": {
      bottom: "50px",
      left: "40px",
      padding: "12px",
    },
    "@media (max-width: 600px)": {
      display: "none", // Hide on mobile
    },
  },
  "@keyframes bounce": {
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-10px)",
    },
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
    animation: "$fadeIn 1s ease",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  featureCardTopLeft: {
    position: "absolute",
    top: "115px",
    left: "11px",
    zIndex: 2,
    animation: "$slideInLeft 1s ease",
    "@media (max-width: 960px)": {
      top: "85px",
      left: "5px",
    },
  },
  "@keyframes slideInLeft": {
    "0%": {
      opacity: 0,
      transform: "translateX(-50px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  featureCardTopRight: {
    position: "absolute",
    top: "175px",
    right: "-105px",
    zIndex: 2,
    animation: "$slideInRight 1s ease 0.3s",
    animationFillMode: "backwards",
    "@media (max-width: 1200px)": {
      right: "-80px",
    },
    "@media (max-width: 960px)": {
      top: "145px",
      right: "-60px",
    },
  },
  "@keyframes slideInRight": {
    "0%": {
      opacity: 0,
      transform: "translateX(50px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  featureCardBottomLeft: {
    width: "40%",
    position: "absolute",
    bottom: "90px",
    left: "0",
    zIndex: 2,
    animation: "$slideInBottom 1s ease 0.6s",
    animationFillMode: "backwards",
    "@media (max-width: 960px)": {
      bottom: "70px",
      width: "45%",
    },
  },
  "@keyframes slideInBottom": {
    "0%": {
      opacity: 0,
      transform: "translateY(50px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  featureCardBottomRight: {
    width: "40%",
    position: "absolute",
    bottom: "60px",
    right: "-68px",
    zIndex: 2,
    animation: "$slideInBottom 1s ease 0.9s",
    animationFillMode: "backwards",
    "@media (max-width: 1200px)": {
      right: "-50px",
    },
    "@media (max-width: 960px)": {
      bottom: "40px",
      right: "-40px",
      width: "45%",
    },
  },
  imageContainer: {
    position: "relative",
    textAlign: "center",
    zIndex: 1,
    maxWidth: "100%",
    height: "auto",
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
      width: "100vw",
      position: "relative",
      zIndex: 5,
    }
  },
  mobileFeatureGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    width: "100%",
    margin: "0 auto",
    maxWidth: "320px",
  },
  featureGridItem: {
    opacity: 0,
    transform: "translateY(20px)",
  },
  mobileFeatureCard: {
    backgroundColor: "white !important",
    borderRadius: "12px !important",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.07) !important",
    height: "100%",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1) !important",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "4px",
      background: "linear-gradient(90deg, #FFC614, #2A2B6A)",
      transformOrigin: "left",
      transform: "scaleX(0)",
      transition: "transform 0.3s ease",
    },
    "&:hover::after": {
      transform: "scaleX(1)",
    },
  },
  cardBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    background: "#2A2B6A",
    color: "white",
    fontSize: "0.6rem !important",
    padding: "2px 8px",
    borderRadius: "0 8px 0 8px",
    zIndex: 1,
  },
  iconCircle: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "8px",
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
  },
  featureValue: {
    fontSize: "1.4rem !important",
    fontWeight: "bold !important",
    color: "#FFC614 !important",
    lineHeight: "1.1 !important",
  },
  mobileDecoration: {
    position: "absolute",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    filter: "blur(40px)",
    zIndex: -1,
    opacity: 0.07,
  },
  topRightGlow: {
    top: "-30px",
    right: "-30px",
    background: "#FFC614",
  },
  bottomLeftGlow: {
    bottom: "-20px",
    left: "-30px",
    background: "#2A2B6A",
  }
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
      delay: 0.1,
      badge: "NEW"
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
      delay: 0.5,
      badge: "HOT"
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
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box className={classes.imageCol}>
      {/* Feature Cards - Desktop */}
      <Box className={classes.featureCardTopLeft}>
        <Box className={`${classes.featureCard} ${classes.featureCardAnimated}`}>
          <Box className={classes.featureIcon1}>
            <AIbook />
          </Box>
          <Typography className={classes.featureText}>
            Code with AI
          </Typography>
        </Box>
      </Box>

      <Box className={classes.featureCardTopRight}>
        <Box className={`${classes.featureCard} ${classes.featureCardAnimated}`}>
          <Box className={classes.featureIcon1}>
            <Simplecal />
          </Box>
          <Typography className={classes.featureText}>
            30-Day Intensive Training
          </Typography>
        </Box>
      </Box>

      <Box className={classes.featureCardBottomLeft}>
        <Box className={`${classes.featureCard} ${classes.featureCardAnimated}`}>
          <Box className={classes.featureIcon2}>
            <AnimatedCounter end={400} suffix="+" />
          </Box>
          <Typography className={classes.featureText} sx={{ mt: 2 }}>
            Placement Opportunities
          </Typography>
        </Box>
      </Box>

      <Box className={classes.featureCardBottomRight}>
        <Box className={`${classes.featureCard} ${classes.featureCardAnimated}`}>
          <Typography className={classes.featureText}>
            Weekly <AnimatedCounter end={40} suffix="+" /> Opportunities
          </Typography>
        </Box>
      </Box>

      {/* Student image - Only visible on desktop */}
      <Box className={classes.imageContainer}>
        <img
          src={Heroguy}
          alt="Student with laptop"
          className={classes.heroImage}
        />
      </Box>
      
      {/* Mobile view specific content - Shows in grid layout */}
      <Box className={classes.mobileContainer}>
        {/* Decorative elements */}
        <Box className={`${classes.mobileDecoration} ${classes.topRightGlow}`} />
        <Box className={`${classes.mobileDecoration} ${classes.bottomLeftGlow}`} />
        
        {/* Grid of feature cards */}
        <Box className={classes.mobileFeatureGrid}>
          {features.map((feature, index) => (
            <Box 
              key={index}
              className={classes.featureGridItem}
              sx={{
                animation: visibleItems.includes(index) ? 
                  `fadeIn 0.5s ease forwards, slideUp 0.7s ease forwards` : 'none',
                animationDelay: `${feature.delay}s`,
                '@keyframes slideUp': {
                  '0%': { transform: 'translateY(20px)', opacity: 0 },
                  '100%': { transform: 'translateY(0)', opacity: 1 }
                }
              }}
            >
              <Card className={classes.mobileFeatureCard}>
                {feature.badge && (
                  <Typography className={classes.cardBadge}>
                    {feature.badge}
                  </Typography>
                )}
                <CardContent sx={{ p: 2 }}>
                  <Box className={classes.iconCircle}>
                    {feature.icon}
                  </Box>
                  <Typography className={classes.featureTitle}>
                    {feature.title}
                  </Typography>
                  <Typography className={classes.featureValue}>
                    {feature.value}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default HeroRightSection;