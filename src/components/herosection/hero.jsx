import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Heroguy from "../../assets/heroguy.png";
import { ReactComponent as AIbook } from "../../assets/ai-book.svg";
import { ReactComponent as Simplecal } from "../../assets/simple-claender.svg";

const useStyles = makeStyles({
  heroContainer: {
    position: "relative",
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    padding: "20px 0 0 0",
    overflow: "hidden",
    marginBottom: 0,
  },
  contentContainer: {
    width: "50%",
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
  featureCounterAnimation: {
    animation: "$countUp 2s forwards",
  },
  "@keyframes countUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
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
  heroImage: {
    maxWidth: "100%",
    height: "auto",
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
  imageCol: {
    width: "40%",
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
  numberCounter: {
    animation: "$numberPulse 2s infinite alternate",
    color: "#2F2E51 !important",
    fontWeight: "bold !important",
  },
  "@keyframes numberPulse": {
    "0%": {
      textShadow: "0 0 5px rgba(255, 198, 20, 0.3)",
    },
    "100%": {
      textShadow: "0 0 15px rgba(255, 198, 20, 0.8)",
    },
  },
});

// Component for animated counter
const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = React.useState(0);
  const classes = useStyles();
  
  React.useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span className={classes.numberCounter}>{prefix}{count}{suffix}</span>;
};

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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;