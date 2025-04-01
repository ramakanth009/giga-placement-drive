import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
    fontSize: "2.9rem !important",
    fontWeight: "bold !important",
    marginBottom: "16px !important",
    color: "#2A2B6A !important",
    "& span": {
      color: "#FFC614 !important",
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
    fontWeight: "bold",
    "@media (max-width: 960px)": {
      margin: "0 auto 20px auto !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1rem !important",
    },
  },
  pricingSection: {
    marginTop: "32px",
    "@media (max-width: 600px)": {
      marginTop: "24px",
    },
  },
  regularPrice: {
    textDecoration: "line-through !important",
    color: "#666 !important",
    marginBottom: "8px !important",
    fontStyle: "italic !important",
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
    color: "#0a192f !important",
    "@media (max-width: 600px)": {
      fontSize: "1.7rem !important",
    },
  },
  joinButton: {
    backgroundColor: "#232459 !important",
    color: "white !important",
    padding: "12px 32px !important",
    borderRadius: "4px !important",
    fontWeight: "bold !important",
    marginBottom: "12px !important",
    "&:hover": {
      backgroundColor: "#1a1b43 !important",
    },
    "@media (max-width: 600px)": {
      padding: "10px 24px !important",
      fontSize: "0.9rem !important",
    },
  },
});

const HeroLeftSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.contentContainer}>
      {/* Title with highlight */}
      <Box className={classes.titleBox}>
        <Typography variant="h4" className={classes.heroHeading}>
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
      <Button variant="contained" className={classes.joinButton}>
        Join Us Now
      </Button>

      {/* Pricing Section */}
      <Box className={classes.pricingSection}>
        <Typography variant="body1" className={classes.regularPrice}>
          Regular price: ₹499
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