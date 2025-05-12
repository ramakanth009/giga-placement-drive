// src/components/common/fulltime/skillsmaster/SkillsMaster.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SkillCategory from "./SkillCategory";

const useStyles = makeStyles({
  section: {
    padding: "80px 0",
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  titleContainer: {
    textAlign: "center",
    marginBottom: "10px",
  },
  title: {
    fontSize: "2.5rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "15px !important",
    "& span": {
      color: "#FFC614 !important",
    },
  },
  subtitle: {
    fontSize: "1.1rem !important",
    color: "#666666 !important",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto !important",
    lineHeight: "1.6 !important",
  },
  skillsContainer: {
    position: "relative",
    width: "100%",
    height: "750px",
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  programTitle: {
    fontSize: "1.5rem !important",
    fontWeight: "600 !important",
    color: "#2A2B6A !important",
    // marginBottom: "5px !important",
    textAlign: "center",
  },
  centerImageContainer: {
    position: "relative",
    width: "305px",
    height: "520px",
    borderRadius: "155px 155px 155px 155px",
    overflow: "hidden",
    border: "2px solid #475AD7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  centerImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  circleOutline: {
    position: "absolute",
    width: "324px",
    height: "540px",
    borderRadius: "160px 160px 160px 160px",
    border: "2px solid #475AD7",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  },
});

const SkillsMaster = ({ programName, image, skills }) => {
  const classes = useStyles();

  const getPosition = (index, totalSkills) => {
    // This function calculates positions for skill categories around the circle
    const positions = [
      { top: "25%", left: "12%" }, // Python Programming
      { top: "25%", right: "12%" }, // SQL & Databases
      { bottom: "25%", left: "12%" }, // Deep Learning & NLR
      { bottom: "25%", right: "12%" }, // Mathematics
      { bottom: "5%", left: "50%", transform: "translateX(-50%)" }, // Machine Learning
    ];

    // Return appropriate position based on index
    if (index < positions.length) {
      return positions[index];
    }

    // Fallback for any additional skills
    return { top: "50%", left: "50%" };
  };

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Box className={classes.container}>
          <Box className={classes.titleContainer}>
            <Typography className={classes.title}>
              Skills <span>You'll Master</span>
            </Typography>
            <Typography className={classes.subtitle}>
              Our curriculum focuses on the most-in-demand technical skills in
              the data science industry, giving you a competitive edge in the
              job market.
            </Typography>
          </Box>

          <Typography className={classes.programTitle}>
            {programName}
          </Typography>

          <Box className={classes.skillsContainer}>
            <Box className={classes.circleOutline}></Box>
            <Box className={classes.centerImageContainer}>
              <img
                src={image}
                alt="Student with books"
                className={classes.centerImage}
              />
            </Box>

            {skills.map((skill, index) => (
              <SkillCategory
                key={index}
                title={skill}
                position={getPosition(index, skills.length)}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsMaster;
