import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Heroguy from "../../assets/heroguy.png";
import { ReactComponent as AIbook } from "../../assets/ai-book.svg";
import { ReactComponent as Simplecal } from "../../assets/simple-claender.svg";
import AnimatedCounter from "./AnimatedCounter";

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
      minHeight: "300px",
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
      padding: "3px 10px",
      margin: "3px",
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
    "@media (max-width: 600px)": {
      marginRight: "8px",
      "& svg": {
        width: "20px",
        height: "20px",
      },
    },
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
      bottom: "30px",
      left: "20px",
      padding: "8px",
      fontSize: "0.8rem !important",
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
    "@media (max-width: 600px)": {
      fontSize: "0.9rem !important",
    },
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
    "@media (max-width: 600px)": {
      top: "60px",
      left: "0",
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
    "@media (max-width: 600px)": {
      top: "120px",
      right: "-50px",
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
    "@media (max-width: 600px)": {
      bottom: "50px",
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
    "@media (max-width: 600px)": {
      bottom: "20px",
      right: "-30px",
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
});

const HeroRightSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.imageCol}>
      {/* Feature Cards */}
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

      {/* Student image */}
      <Box className={classes.imageContainer}>
        <img
          src={Heroguy}
          alt="Student with laptop"
          className={classes.heroImage}
        />
      </Box>
    </Box>
  );
};

export default HeroRightSection;