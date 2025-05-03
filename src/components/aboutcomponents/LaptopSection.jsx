// src/components/aboutcomponents/laptopsection/LaptopSection.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles({
  aboutSection: {
    padding: "60px 0 80px",
    position: "relative",
    zIndex: 1,
    "@media (max-width: 1200px)": {
      padding: "50px 0 70px",
    },
    "@media (max-width: 960px)": {
      padding: "40px 0 60px",
    },
    "@media (max-width: 600px)": {
      padding: "30px 0 50px",
    },
    "@media (max-width: 480px)": {
      padding: "25px 0 40px",
    },
    "@media (max-width: 375px)": {
      padding: "20px 0 30px",
    },
  },
  laptopContainer: {
    width: "95%",
    maxWidth: "1400px",
    margin: "-120px auto 0",
    position: "relative",
    perspective: "2000px",
    "@media (max-width: 1200px)": {
      margin: "-110px auto 0",
    },
    "@media (max-width: 960px)": {
      margin: "-100px auto 0",
    },
    "@media (max-width: 600px)": {
      width: "95%",
      margin: "-80px auto 0",
    },
    "@media (max-width: 480px)": {
      margin: "-70px auto 0",
    },
    "@media (max-width: 375px)": {
      margin: "-60px auto 0",
    },
  },
  laptop: {
    position: "relative",
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    transformStyle: "preserve-3d",
  },
  laptopScreen: {
    position: "relative",
    width: "100%",
    padding: "50px 70px 70px",
    backgroundColor: "white",
    borderRadius: "12px 12px 0 0",
    boxSizing: "border-box",
    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1) inset",
    border: "12px solid #E2E8F0",
    borderBottom: "24px solid #E2E8F0",
    "@media (max-width: 1200px)": {
      padding: "45px 60px 65px",
      border: "10px solid #E2E8F0",
      borderBottom: "20px solid #E2E8F0",
    },
    "@media (max-width: 960px)": {
      padding: "40px 50px 60px",
    },
    "@media (max-width: 768px)": {
      padding: "35px 45px 55px",
    },
    "@media (max-width: 600px)": {
      padding: "25px 30px 45px",
      borderWidth: "8px",
      borderBottom: "16px solid #E2E8F0",
    },
    "@media (max-width: 480px)": {
      padding: "20px 25px 35px",
      borderWidth: "6px",
      borderBottom: "12px solid #E2E8F0",
    },
    "@media (max-width: 375px)": {
      padding: "15px 20px 25px",
      borderWidth: "5px",
      borderBottom: "10px solid #E2E8F0",
    },
  },
  screenContent: {
    position: "relative",
    zIndex: 2,
  },
  laptopTopBezel: {
    position: "absolute",
    top: "-2px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "120px",
    height: "6px",
    backgroundColor: "#E2E8F0",
    borderRadius: "0 0 4px 4px",
    zIndex: 3,
    "&:before": {
      content: "''",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      width: "8px",
      height: "8px",
      backgroundColor: "#000000",
      borderRadius: "50%",
    },
    "@media (max-width: 960px)": {
      width: "100px",
      height: "5px",
      "&:before": {
        width: "7px",
        height: "7px",
      },
    },
    "@media (max-width: 600px)": {
      width: "80px",
      height: "4px",
      "&:before": {
        width: "6px",
        height: "6px",
      },
    },
    "@media (max-width: 480px)": {
      width: "70px",
      height: "3px",
      "&:before": {
        width: "5px",
        height: "5px",
      },
    },
    "@media (max-width: 375px)": {
      width: "60px",
      height: "3px",
      "&:before": {
        width: "4px",
        height: "4px",
      },
    },
  },
  laptopBase: {
    position: "relative",
    width: "105%",
    height: "20px",
    marginLeft: "-2.5%",
    backgroundColor: "#e0e5ec",
    borderRadius: "0 0 8px 8px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    "&:before": {
      content: "''",
      position: "absolute",
      bottom: "8px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "120px",
      height: "4px",
      backgroundColor: "#c4c8cc",
      borderRadius: "4px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1) inset",
    },
    "&:after": {
      content: "''",
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      height: "8px",
      backgroundColor: "#d0d5dc",
      borderRadius: "0 0 8px 8px",
    },
    "@media (max-width: 960px)": {
      height: "18px",
      "&:before": {
        width: "100px",
        height: "3px",
        bottom: "7px",
      },
      "&:after": {
        height: "7px",
      },
    },
    "@media (max-width: 600px)": {
      height: "15px",
      "&:before": {
        width: "80px",
        height: "3px",
        bottom: "6px",
      },
      "&:after": {
        height: "6px",
      },
    },
    "@media (max-width: 480px)": {
      height: "12px",
      "&:before": {
        width: "70px",
        height: "2px",
        bottom: "5px",
      },
      "&:after": {
        height: "5px",
      },
    },
    "@media (max-width: 375px)": {
      height: "10px",
      "&:before": {
        width: "60px",
        height: "2px",
        bottom: "4px",
      },
      "&:after": {
        height: "4px",
      },
    },
  },
  laptopHinge: {
    position: "absolute",
    top: "-2px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "150px",
    height: "4px",
    backgroundColor: "#999",
    borderRadius: "2px 2px 0 0",
    zIndex: -1,
    "@media (max-width: 960px)": {
      width: "130px",
      height: "3px",
    },
    "@media (max-width: 600px)": {
      width: "100px",
      height: "3px",
    },
    "@media (max-width: 480px)": {
      width: "80px",
      height: "2px",
    },
    "@media (max-width: 375px)": {
      width: "70px",
      height: "2px",
    },
  },
  aboutTitle: {
    fontSize: "3.2rem !important",
    color: "#2A2B6A !important",
    fontWeight: "bold !important",
    marginBottom: "15px !important",
    "@media (max-width: 1200px)": {
      fontSize: "3rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "2.5rem !important",
    },
    "@media (max-width: 768px)": {
      fontSize: "2.3rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem !important",
      marginBottom: "12px !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.5rem !important",
      marginBottom: "10px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "1.3rem !important",
      marginBottom: "8px !important",
    },
  },
  gigaversityText: {
    color: "#FFC614 !important",
    display: "block",
  },
  aboutDescription: {
    fontSize: "1.3rem !important",
    color: "#555 !important",
    lineHeight: "1.8 !important",
    marginBottom: "25px !important",
    "@media (max-width: 1200px)": {
      fontSize: "1.2rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "1.15rem !important",
      lineHeight: "1.7 !important",
    },
    "@media (max-width: 768px)": {
      fontSize: "1rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.95rem !important",
      lineHeight: "1.6 !important",
      marginBottom: "20px !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.9rem !important",
      lineHeight: "1.5 !important",
      marginBottom: "15px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.85rem !important",
      lineHeight: "1.4 !important",
      marginBottom: "12px !important",
    },
  },
  highlight: {
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
  },
  talkButton: {
    backgroundColor: "#2A2B6A !important",
    color: "white !important",
    padding: "10px 24px !important",
    borderRadius: "5px !important",
    fontWeight: "bold !important",
    textTransform: "none !important",
    fontSize: "1rem !important",
    transition: "all 0.3s ease !important",
    marginTop: "20px !important",
    "&:hover": {
      backgroundColor: "#1A1B4A !important",
      transform: "translateY(-3px)",
      boxShadow: "0 5px 15px rgba(42, 43, 106, 0.3) !important",
    },
    "@media (max-width: 960px)": {
      padding: "8px 20px !important",
      fontSize: "0.95rem !important",
      marginTop: "15px !important",
    },
    "@media (max-width: 600px)": {
      padding: "7px 18px !important",
      fontSize: "0.9rem !important",
      marginTop: "12px !important",
    },
    "@media (max-width: 480px)": {
      padding: "6px 16px !important",
      fontSize: "0.85rem !important",
      marginTop: "10px !important",
    },
    "@media (max-width: 375px)": {
      padding: "5px 14px !important",
      fontSize: "0.8rem !important",
      marginTop: "8px !important",
    },
  },
});

const LaptopSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.aboutSection}>
      <Box className={classes.laptopContainer}>
        <Box className={classes.laptop}>
          {/* Laptop Screen */}
          <Box className={classes.laptopScreen}>
            <Box className={classes.laptopTopBezel} />
            <Box className={classes.screenContent}>
              <Typography variant="h2" className={classes.aboutTitle}>
                About
                <span className={classes.gigaversityText}>Gigaversity</span>
              </Typography>

              <Typography variant="body1" className={classes.aboutDescription}>
                Gigaversity is <span className={classes.highlight}>India's first product-based learning platform</span>, designed to equip students with practical skills, industry experience, and direct job opportunities. Unlike traditional online courses, we focus on <span className={classes.highlight}>real-world project building, job-specific training, and hands-on mentorship</span>, ensuring that learners graduate with an impressive portfolio that makes them stand out to recruiters.
              </Typography>

              <Button 
                variant="contained" 
                className={classes.talkButton}
                endIcon={<ArrowForwardIcon />}
              >
                Talk To Our Expert
              </Button>
            </Box>
          </Box>
          
          {/* Laptop Base */}
          <Box className={classes.laptopHinge} />
          <Box className={classes.laptopBase} />
        </Box>
      </Box>
    </Box>
  );
};

export default LaptopSection;