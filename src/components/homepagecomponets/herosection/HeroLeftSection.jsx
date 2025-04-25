import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  contentContainer: {
    width: "100%",
    position: "relative",
    zIndex: 1,
    padding: "8px 16px",
    "@media (max-width: 960px)": {
      width: "100%",
      padding: "8px 24px",
      textAlign: "center",
    },
  },
  titleBox: {
    borderRadius: "4px",
    display: "inline-block",
    marginBottom: "16px",
    "@media (max-width: 960px)": {
      marginBottom: "12px",
    },
  },
  heroHeading: {
    fontSize: "3.2rem !important",
    fontWeight: "bold !important",
    marginBottom: "16px !important",
    color: "#2A2B6A !important",
    position: "relative",
    animation: "$fadeInUp 0.8s ease",
    "& span": {
      color: "#FFC614 !important",
      position: "relative",
      display: "inline-block",
    },
    "@media (max-width: 960px)": {
      fontSize: "2.5rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "2rem !important",
      marginBottom: "12px !important",
    },
  },
  subHeading: {
    color: "#6A6B6C !important",
    marginBottom: "24px !important",
    maxWidth: "90%",
    fontWeight: "500 !important",
    fontSize: "1.3rem !important",
    position: "relative",
    animation: "$fadeInUp 0.8s ease 0.2s both",
    "@media (max-width: 960px)": {
      margin: "0 auto 20px auto !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1rem !important",
    },
  },
  pricingSection: {
    marginTop: "32px",
    opacity: 0,
    animation: "$fadeIn 0.8s ease 0.6s forwards",
    "@media (max-width: 600px)": {
      marginTop: "24px",
    },
  },
  regularPrice: {
    color: "#666 !important",
    marginBottom: "8px !important",
    fontStyle: "italic !important",
    position: "relative",
    "& span": {
      textDecoration: "line-through !important",
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "2px",
        background: "#e74c3c",
        top: "50%",
        left: "0",
        transform: "rotate(-5deg)",
      },
    },
  },
  specialPrice: {
    fontWeight: "bold !important",
    fontSize: "1.5rem !important",
    marginBottom: "32px !important",
    "@media (max-width: 600px)": {
      fontSize: "1.3rem !important",
      marginBottom: "24px !important",
    },
  },
  priceHighlight: {
    fontSize: "2rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    position: "relative",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.7rem !important",
    },
  },
  joinButton: {
    backgroundColor: "#232459 !important",
    color: "white !important",
    padding: "14px 32px !important",
    borderRadius: "8px !important",
    fontWeight: "bold !important",
    marginBottom: "12px !important",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 10px 20px rgba(35, 36, 89, 0.3) !important",
    animation: "$fadeInUp 0.8s ease 0.4s both",
    "&:hover": {
      backgroundColor: "#1a1b43 !important",
      transform: "translateY(-5px)",
      boxShadow: "0 15px 25px rgba(35, 36, 89, 0.4) !important",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: "30px",
      height: "100%",
      background: "rgba(255, 255, 255, 0.3)",
      transform: "skewX(-30deg) translateX(-150px)",
      animation: "$shine 3s infinite",
    },
    "@media (max-width: 600px)": {
      padding: "10px 24px !important",
      fontSize: "0.9rem !important",
    },
  },
  "@keyframes fadeInUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(30px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
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
  "@keyframes shine": {
    "0%": {
      transform: "skewX(-30deg) translateX(-150px)",
    },
    "100%": {
      transform: "skewX(-30deg) translateX(350px)",
    },
  },
});

const HeroLeftSection = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/cart");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box className={classes.contentContainer}>
      {/* Title with highlight */}
      <Box className={classes.titleBox}>
        <Typography variant="h1" className={classes.heroHeading}>
          Gigaversity's <span>Virtual</span>
          <br />
          <span>Placement Drive</span>
        </Typography>
      </Box>

      {/* Subheading */}
      <Typography variant="h6" className={classes.subHeading}>
        India's Biggest Virtual Hiring & Learning Experience
      </Typography>

      {/* Join Now Button */}
      <Button
        variant="contained"
        className={classes.joinButton}
        onClick={handleJoinClick}
      >
        Join Us Now
      </Button>

      {/* Pricing Section */}
      <Box className={classes.pricingSection}>
        <Typography variant="body1" className={classes.regularPrice}>
          Regular price: <span>₹499</span>
        </Typography>
        <Typography variant="h6" className={classes.specialPrice}>
          Limited time price - INR{" "}
          <span className={classes.priceHighlight}>199</span> only
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroLeftSection;