// src/components/jobkickstart/JobKickstart.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Jobkick from "../../assets/jobkick.png";

const useStyles = makeStyles({
  section: {
    padding: "60px 0",
    overflow: "hidden",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContainer: {
    position: "relative",
    width: "40%",
    display: "flex",
    justifyContent: "center",
  },
  rightContainer: {
    width: "55%",
    padding: "20px 0 20px 40px",
  },
  imageBox: {
    position: "relative",
    width: "100%",
    maxWidth: "450px",
    zIndex: 2,
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "8px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  },
  backgroundBox: {
    position: "absolute",
    bottom: -15,
    right: -15,
    width: "98%",
    height: "98%",
    backgroundColor: "#e6f2ff",
    borderBottom: "4px solid #2A2B6A",
    borderRight: "4px solid #2A2B6A",
    zIndex: 1,
  },
  sectionTitle: {
    fontSize: "2.2rem !important",
    fontWeight: "bold !important",
    marginBottom: "30px !important",
    color: "#2A2B6A !important",
    lineHeight: "1.3 !important",
  },
  featureList: {
    marginBottom: "30px",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  checkIcon: {
    color: "#FFC614 !important",
    marginRight: "15px",
    fontSize: "24px !important",
  },
  featureText: {
    color: "#4A4A4A !important",
    fontSize: "1.1rem !important",
    fontWeight: "500 !important",
  },
  ctaText: {
    fontWeight: "bold !important",
    fontSize: "1.4rem !important",
    color: "#2A2B6A !important",
    marginTop: "10px !important",
  },
  // Responsive styles
  "@media (max-width: 960px)": {
    contentContainer: {
      flexDirection: "column",
    },
    leftContainer: {
      width: "100%",
      marginBottom: "30px",
    },
    rightContainer: {
      width: "100%",
      padding: "20px 0",
    },
  },
});

const JobKickstart = () => {
  const classes = useStyles();

  // Feature items from the image
  const features = [
    "Learn in-demand skills that employers seek",
    "Build portfolio projects that prove your expertise",
    "Connect with 100+ hiring partners",
    "Get hired with packages starting from 3 LPA-15 LPA",
  ];

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Box className={classes.contentContainer}>
          {/* Left side - Image with background box */}
          <Box className={classes.leftContainer}>
            <Box className={classes.imageBox}>
              <img
                src={Jobkick}
                alt="Students collaborating on a project"
                className={classes.image}
              />
            </Box>
            <Box className={classes.backgroundBox} />
          </Box>

          {/* Right side - Content */}
          <Box className={classes.rightContainer}>
            {/* Title */}
            <Typography variant="h3" className={classes.sectionTitle}>
              Why Struggle With Traditional Job Hunting When You Can
            </Typography>

            {/* Feature list */}
            <Box className={classes.featureList}>
              {features.map((feature, index) => (
                <Box key={index} className={classes.featureItem}>
                  <CheckCircleIcon className={classes.checkIcon} />
                  <Typography className={classes.featureText}>
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* CTA */}
            <Typography variant="h5" className={classes.ctaText}>
              KickStart Your Job In 30 Days
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default JobKickstart;
