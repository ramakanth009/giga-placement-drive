// src/components/common/fulltime/skillsmaster/SkillsMaster.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SkillCategory from "./SkillCategoryHeader";

const useStyles = makeStyles({
  section: {
    padding: "50px 0",
    backgroundColor: "#FFFFFF",
    position: "relative",
    '@media (max-width: 1200px)': {
      padding: "45px 0",
    },
    '@media (max-width: 960px)': {
      padding: "40px 0",
    },
    '@media (max-width: 600px)': {
      padding: "35px 0",
    },
    '@media (max-width: 480px)': {
      padding: "30px 0",
    },
    '@media (max-width: 375px)': {
      padding: "25px 0",
    },
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  titleContainer: {
    textAlign: "center",
    marginBottom: "30px",
    '@media (max-width: 1200px)': {
      marginBottom: "28px",
    },
    '@media (max-width: 960px)': {
      marginBottom: "25px",
    },
    '@media (max-width: 600px)': {
      marginBottom: "22px",
    },
    '@media (max-width: 480px)': {
      marginBottom: "20px",
    },
    '@media (max-width: 375px)': {
      marginBottom: "18px",
    },
  },
  title: {
    fontSize: "2.5rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "15px !important",
    "& span": {
      color: "#FFC614 !important",
    },
    '@media (max-width: 1200px)': {
      fontSize: "2.3rem !important",
      marginBottom: "14px !important",
    },
    '@media (max-width: 960px)': {
      fontSize: "2.1rem !important",
      marginBottom: "13px !important",
    },
    '@media (max-width: 600px)': {
      fontSize: "1.9rem !important",
      marginBottom: "12px !important",
    },
    '@media (max-width: 480px)': {
      fontSize: "1.7rem !important",
      marginBottom: "10px !important",
    },
    '@media (max-width: 375px)': {
      fontSize: "1.5rem !important",
      marginBottom: "8px !important",
    },
  },
  subtitle: {
    fontSize: "1.1rem !important",
    color: "#666666 !important",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto !important",
    lineHeight: "1.6 !important",
    '@media (max-width: 1200px)': {
      fontSize: "1.05rem !important",
      maxWidth: "850px",
    },
    '@media (max-width: 960px)': {
      fontSize: "1rem !important",
      maxWidth: "800px",
      lineHeight: "1.5 !important",
    },
    '@media (max-width: 600px)': {
      fontSize: "0.95rem !important",
      maxWidth: "95%",
    },
    '@media (max-width: 480px)': {
      fontSize: "0.9rem !important",
    },
    '@media (max-width: 375px)': {
      fontSize: "0.85rem !important",
      lineHeight: "1.4 !important",
    },
  },
  skillsContainer: {
    position: "relative",
    width: "100%",
    height: "750px",
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    '@media (max-width: 1200px)': {
      height: "700px",
      marginTop: "18px",
    },
    '@media (max-width: 960px)': {
      height: "650px",
      marginTop: "16px",
    },
    '@media (max-width: 600px)': {
      height: "600px",
      marginTop: "14px",
    },
    '@media (max-width: 480px)': {
      height: "550px",
      marginTop: "12px",
    },
    '@media (max-width: 375px)': {
      height: "500px",
      marginTop: "10px",
    },
  },
  programTitle: {
    fontSize: "1.5rem !important",
    fontWeight: "600 !important",
    color: "#2A2B6A !important",
    textAlign: "center",
    '@media (max-width: 1200px)': {
      fontSize: "1.4rem !important",
    },
    '@media (max-width: 960px)': {
      fontSize: "1.3rem !important",
    },
    '@media (max-width: 600px)': {
      fontSize: "1.2rem !important",
    },
    '@media (max-width: 480px)': {
      fontSize: "1.1rem !important",
    },
    '@media (max-width: 375px)': {
      fontSize: "1rem !important",
    },
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
    '@media (max-width: 1200px)': {
      width: "290px",
      height: "495px",
    },
    '@media (max-width: 960px)': {
      width: "275px",
      height: "470px",
    },
    '@media (max-width: 600px)': {
      width: "240px",
      height: "410px",
    },
    '@media (max-width: 480px)': {
      width: "210px",
      height: "360px",
    },
    '@media (max-width: 375px)': {
      width: "180px",
      height: "310px",
      borderRadius: "130px 130px 130px 130px",
    },
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
    '@media (max-width: 1200px)': {
      width: "309px",
      height: "515px",
    },
    '@media (max-width: 960px)': {
      width: "294px",
      height: "490px",
    },
    '@media (max-width: 600px)': {
      width: "255px",
      height: "425px",
    },
    '@media (max-width: 480px)': {
      width: "225px",
      height: "375px",
    },
    '@media (max-width: 375px)': {
      width: "195px",
      height: "325px",
      borderRadius: "140px 140px 140px 140px",
    },
  },
});

const SkillsMaster = ({ programName, image, skills }) => {
  const classes = useStyles();

  const getPosition = (index, totalSkills) => {
    // Base positions
    const positions = [
      { top: "25%", left: "12%" }, // Python Programming
      { top: "25%", right: "12%" }, // SQL & Databases
      { bottom: "25%", left: "12%" }, // Deep Learning & NLR
      { bottom: "25%", right: "12%" }, // Mathematics
      { bottom: "5%", left: "50%", transform: "translateX(-50%)" }, // Machine Learning
    ];

    // Adjust positions for smaller screens
    const adjustPositions = () => {
      if (window.innerWidth <= 1200) {
        positions[0] = { top: "25%", left: "10%" };
        positions[1] = { top: "25%", right: "10%" };
        positions[2] = { bottom: "25%", left: "10%" };
        positions[3] = { bottom: "25%", right: "10%" };
      }
      if (window.innerWidth <= 960) {
        positions[0] = { top: "25%", left: "8%" };
        positions[1] = { top: "25%", right: "8%" };
        positions[2] = { bottom: "25%", left: "8%" };
        positions[3] = { bottom: "25%", right: "8%" };
      }
      if (window.innerWidth <= 600) {
        positions[0] = { top: "25%", left: "5%" };
        positions[1] = { top: "25%", right: "5%" };
        positions[2] = { bottom: "25%", left: "5%" };
        positions[3] = { bottom: "25%", right: "5%" };
      }
      if (window.innerWidth <= 480) {
        positions[0] = { top: "25%", left: "2%" };
        positions[1] = { top: "25%", right: "2%" };
        positions[2] = { bottom: "25%", left: "2%" };
        positions[3] = { bottom: "25%", right: "2%" };
      }
      if (window.innerWidth <= 375) {
        positions[0] = { top: "20%", left: "0" };
        positions[1] = { top: "20%", right: "0" };
        positions[2] = { bottom: "20%", left: "0" };
        positions[3] = { bottom: "20%", right: "0" };
        positions[4] = { bottom: "3%", left: "50%", transform: "translateX(-50%)" };
      }
    };
    
    adjustPositions();

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