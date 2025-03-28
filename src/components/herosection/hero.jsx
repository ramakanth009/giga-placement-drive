import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Heroguy from "../../assets/heroguy.png"; // Adjust the path as necessary

const useStyles = makeStyles({
  heroContainer: {
    position: "relative",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    padding: "20px 0",
    overflow: "hidden",
  },
  contentContainer: {
    position: "relative",
    zIndex: 1,
    padding: "8px 16px",
  },
  titleBox: {
    // border: "1px solid #3498db",
    borderRadius: "4px",
    display: "inline-block",
    // padding: "8px 16px",
    marginBottom: "16px",
  },
  heroHeading: {
    fontWeight: "bold !important",
    marginBottom: "16px !important",
    color: "#0a192f !important",
    "& span": {
      color: "#ffb703 !important",
    },
  },
  subHeading: {
    color: "#4a4a4a !important",
    marginBottom: "24px !important",
    maxWidth: "450px",
  },
  pricingSection: {
    marginTop: "32px",
  },
  regularPrice: {
    textDecoration: "line-through !important",
    color: "#666 !important",
    marginBottom: "8px !important",
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
    backgroundColor: "#0a192f !important",
    color: "white !important",
    padding: "12px 32px !important",
    borderRadius: "4px !important",
    fontWeight: "bold !important",
    marginBottom: "32px !important",
    "&:hover": {
      backgroundColor: "#142640 !important",
    },
  },
  featureCard: {
    backgroundColor: "white",
    padding: "12px 16px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "inline-flex",
    alignItems: "center",
    margin: "8px",
  },
  featureIcon: {
    marginRight: "12px",
  },
  featureText: {
    fontWeight: "600 !important",
  },
  heroImage: {
    maxWidth: "100%",
    height: "auto",
  },
  featureCardTopLeft: {
    position: "absolute",
    top: "80px",
    left: "40px",
    zIndex: 2,
  },
  featureCardTopRight: {
    position: "absolute", 
    top: "140px", 
    right: "60px", 
    zIndex: 2,
  },
  featureCardBottomLeft: {
    position: "absolute", 
    bottom: "140px", 
    left: "20px", 
    zIndex: 2,
  },
  featureCardBottomRight: {
    position: "absolute", 
    bottom: "80px", 
    right: "40px", 
    zIndex: 2,
  },
  imageContainer: {
    position: "relative", 
    textAlign: "center", 
    zIndex: 1,
  }
});

const Hero = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.heroContainer}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} className={classes.contentContainer}>
            {/* Title with highlight */}
            <Box className={classes.titleBox}>
              <Typography variant="h4" className={classes.heroHeading}>
                Gigaversity's <span>Virtual</span><br />
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
                Limited time price - INR <span className={classes.priceHighlight}>199</span> only
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            {/* Feature Cards */}
            <Box className={classes.featureCardTopLeft}>
              <Box className={classes.featureCard}>
                <Box className={classes.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#3498db"/>
                  </svg>
                </Box>
                <Typography className={classes.featureText}>Code with AI</Typography>
              </Box>
            </Box>
            
            <Box className={classes.featureCardTopRight}>
              <Box className={classes.featureCard}>
                <Box className={classes.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#3498db" strokeWidth="2"/>
                    <path d="M16 2V6M8 2V6M3 10H21" stroke="#3498db" strokeWidth="2"/>
                  </svg>
                </Box>
                <Typography className={classes.featureText}>30-Day Intensive Training</Typography>
              </Box>
            </Box>
            
            <Box className={classes.featureCardBottomLeft}>
              <Box className={classes.featureCard}>
                <Box className={classes.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3498db" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="#3498db" strokeWidth="2"/>
                  </svg>
                </Box>
                <Typography className={classes.featureText}>400+ Placement Opportunities</Typography>
              </Box>
            </Box>
            
            <Box className={classes.featureCardBottomRight}>
              <Box className={classes.featureCard}>
                <Box className={classes.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4" stroke="#3498db" strokeWidth="2"/>
                    <path d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16" stroke="#3498db" strokeWidth="2"/>
                  </svg>
                </Box>
                <Typography className={classes.featureText}>Weekly 40+ Opportunities</Typography>
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
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;