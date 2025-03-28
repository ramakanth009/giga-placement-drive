import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Heroguy from "../../assets/heroguy.png";
import { ReactComponent as AIbook } from "../../assets/ai-book.svg";
import { ReactComponent as Simplecal } from "../../assets/simple-claender.svg";
import { textAlign } from "@mui/system";
import HiringPartners from "../hiringpartners/HiringPartners";

const useStyles = makeStyles({
  heroContainer: {
    position: "relative",
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    padding: "20px 0",
    overflow: "hidden",
  },
  contentContainer: {
    width: "50%",
    position: "relative",
    zIndex: 1,
    // padding: "0 20px 0 0",
    padding: "8px 16px",
  },
  titleBox: {
    // border: "1px solid #3498db",
    borderRadius: "4px",
    display: "inline-block",
    marginBottom: "16px",
  },
  heroHeading: {
    fontSize: "2.9rem !important",
    fontWeight: "bold !important",
    marginBottom: "16px !important",
    color: "#2A2B6A !important",
    "& span": {
      color: "#FFC614 !important",
    },
  },
  subHeading: {
    color: "#6A6B6C !important",
    marginBottom: "24px !important",
    maxWidth: "90%",
    fontWeight: "bold",
  },
  pricingSection: {
    marginTop: "32px",
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
  },
  priceHighlight: {
    fontSize: "2rem !important",
    fontWeight: "bold !important",
    color: "#0a192f !important",
  },
  joinButton: {
    backgroundColor: "#001021 !important",
    color: "white !important",
    padding: "12px 32px !important",
    borderRadius: "4px !important",
    fontWeight: "bold !important",
    marginBottom: "12px !important",
    "&:hover": {
      backgroundColor: "#142640 !important",
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
    maxWidth: "90%" /* Ensure card doesn't overflow container */,
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
  },
  featureText: {
    // fontFamily:"Montserrat', sans-serif !important",
    color: "#2F2E51",
    opacity: "100%",
    fontWeight: "bold !important",
    fontSize: "1.1rem !important",
    "&.MuiTypography-root": {
      fontFamily: "Montserrat, sans-serif",
      textAlign: "center",
    },
  },
  heroImage: {
    maxWidth: "100%",
    height: "auto",
  },
  featureCardTopLeft: {
    position: "absolute",
    top: "115px",
    left: "11px",
    zIndex: 2,
  },
  featureCardTopRight: {
    position: "absolute",
    top: "175px",
    right: "-105px",
    zIndex: 2,
  },
  featureCardBottomLeft: {
    width: "40%",
    position: "absolute",
    bottom: "90px",
    left: "0",
    zIndex: 2,
  },
  featureCardBottomRight: {
    width: "40%",
    position: "absolute",
    bottom: "60px",
    right: "-68px",
    zIndex: 2,
  },
  imageContainer: {
    position: "relative",
    textAlign: "center",
    zIndex: 1,
    maxWidth: "100%",
    height: "auto",
  },
  imageCol: {
    width: "40%",
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    position: "relative" /* Added to establish positioning context */,
    minHeight: "500px" /* Added minimum height to ensure proper card display */,
  },
});

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroContainer}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7} lg={8} className={classes.contentContainer}>
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
          </Grid>

          <Grid item xs={12} md={5} lg={4} className={classes.imageCol}>
            {/* Feature Cards */}
            <Box className={classes.featureCardTopLeft}>
              <Box className={classes.featureCard}>
                <Box className={classes.featureIcon1}>
                  <AIbook />
                </Box>
                <Typography className={classes.featureText}>
                  Code with AI
                </Typography>
              </Box>
            </Box>

            <Box className={classes.featureCardTopRight}>
              <Box className={classes.featureCard}>
                <Box className={classes.featureIcon1}>
                  <Simplecal />
                </Box>
                <Typography className={classes.featureText}>
                  30-Day Intensive Training
                </Typography>
              </Box>
            </Box>

            <Box className={classes.featureCardBottomLeft}>
              <Box className={classes.featureCard}>
                <Box className={classes.featureIcon2}>400+ </Box>
                <Typography className={classes.featureText} sx={{ mt: 2 }}>
                  Placement Opportunities
                </Typography>
              </Box>
            </Box>

            <Box className={classes.featureCardBottomRight}>
              <Box className={classes.featureCard}>
                <Typography className={classes.featureText}>
                  Weekly 40+ Opportunities
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
          </Grid>
        <HiringPartners />
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
