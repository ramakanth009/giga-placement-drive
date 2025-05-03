// src/components/aboutcomponents/whystartsection/WhyStartSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  whySection: {
    padding: "80px 20px",
    backgroundImage: "radial-gradient(circle at 90% 10%, #323370 0%, #2A2B6A 50%, #1A1B4A 100%)",
    color: "white",
    position: "relative",
    overflow: "hidden",
    borderRadius: "70px 0 70px 0",
    margin: "0 0 40px 0",
    "@media (max-width: 1200px)": {
      padding: "70px 20px",
      borderRadius: "60px 0 60px 0",
    },
    "@media (max-width: 960px)": {
      padding: "60px 20px",
      borderRadius: "50px 0 50px 0",
    },
    "@media (max-width: 768px)": {
      padding: "60px 20px",
      borderRadius: "40px 0 40px 0",
    },
    "@media (max-width: 600px)": {
      padding: "50px 15px",
      borderRadius: "30px 0 30px 0",
      margin: "0 0 30px 0",
    },
    "@media (max-width: 480px)": {
      padding: "40px 15px",
      borderRadius: "25px 0 25px 0",
      margin: "0 0 25px 0",
    },
    "@media (max-width: 375px)": {
      padding: "30px 10px",
      borderRadius: "20px 0 20px 0",
      margin: "0 0 20px 0",
    },
  },
  whyContentContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    "@media (max-width: 1200px)": {
      maxWidth: "1000px",
    },
    "@media (max-width: 960px)": {
      maxWidth: "90%",
    },
  },
  whyTitle: {
    fontSize: "2.5rem !important",
    fontWeight: "bold !important",
    marginBottom: "20px !important",
    textAlign: "center",
    color: "white !important",
    "& span": {
      color: "#FFC614 !important",
      display: "inline-block",
      position: "relative",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: "5px",
        left: 0,
        width: "100%",
        height: "5px",
        background: "rgba(255, 198, 20, 0.3)",
        zIndex: -1,
      },
    },
    "@media (max-width: 1200px)": {
      fontSize: "2.3rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width: 768px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem !important",
      marginBottom: "15px !important",
      "& span:after": {
        height: "4px",
        bottom: "4px",
      },
    },
    "@media (max-width: 480px)": {
      fontSize: "1.6rem !important",
      "& span:after": {
        height: "3px",
        bottom: "3px",
      },
    },
    "@media (max-width: 375px)": {
      fontSize: "1.4rem !important",
      marginBottom: "12px !important",
      "& span:after": {
        height: "2px",
        bottom: "2px",
      },
    },
  },
  whyText: {
    color: "rgba(255, 255, 255, 0.85) !important",
    fontSize: "1.1rem !important",
    lineHeight: "1.8 !important",
    maxWidth: "950px",
    margin: "0 auto 20px !important",
    "@media (max-width: 1200px)": {
      fontSize: "1.05rem !important",
      maxWidth: "900px",
    },
    "@media (max-width: 960px)": {
      fontSize: "1rem !important",
      maxWidth: "850px",
      margin: "0 auto 18px !important",
    },
    "@media (max-width: 768px)": {
      fontSize: "1rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.95rem !important",
      lineHeight: "1.7 !important",
      margin: "0 auto 15px !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.9rem !important",
      lineHeight: "1.6 !important",
      margin: "0 auto 12px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.85rem !important",
      lineHeight: "1.5 !important",
      margin: "0 auto 10px !important",
    },
  },
});

const WhyStartSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.whySection}>
      <Box className={classes.whyContentContainer}>
        <Typography variant="h2" className={classes.whyTitle}>
          Why Did We <span>Start Gigaversity?</span>
        </Typography>
        
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography className={classes.whyText}>
            Every year, millions of students graduate, but a huge number of them struggle to land a job. Not because they lack potential, but because they lack the real-world skills that companies actually need.
          </Typography>
          
          <Typography className={classes.whyText}>
            We spoke to recruiters, hiring managers, and industry experts, and the message was clear: Degrees don't get jobs—skills do.
          </Typography>
          
          <Typography className={classes.whyText}>
            Yet, most education systems still focus on theory over practice, leaving students unprepared for real job roles. Even edtech platforms focus on generic courses but fail to bridge the learning-to-hiring gap.
          </Typography>
          
          <Typography className={classes.whyText}>
            That's where Gigaversity comes in. At Gigaversity, we believe you shouldn't just learn—you should get hired. And that's exactly what we help you do.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyStartSection;