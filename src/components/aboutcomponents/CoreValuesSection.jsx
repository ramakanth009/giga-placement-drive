// src/components/aboutcomponents/corevaluessection/CoreValuesSection.jsx
import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const useStyles = makeStyles({
  valuesSection: {
    padding: "80px 20px",
    backgroundColor: "#f0f7ff",
    position: "relative",
    overflow: "hidden",
    "@media (max-width: 1200px)": {
      padding: "70px 20px",
    },
    "@media (max-width: 960px)": {
      padding: "60px 20px",
    },
    "@media (max-width: 600px)": {
      padding: "50px 15px",
    },
    "@media (max-width: 480px)": {
      padding: "40px 15px",
    },
    "@media (max-width: 375px)": {
      padding: "30px 10px",
    },
  },
  valuesContentContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    "@media (max-width: 1200px)": {
      maxWidth: "1000px",
    },
    "@media (max-width: 960px)": {
      maxWidth: "90%",
    },
  },
  valuesTitleContainer: {
    textAlign: "center",
    marginBottom: "60px",
    position: "relative",
    "@media (max-width: 1200px)": {
      marginBottom: "55px",
    },
    "@media (max-width: 960px)": {
      marginBottom: "50px",
    },
    "@media (max-width: 600px)": {
      marginBottom: "40px",
    },
    "@media (max-width: 480px)": {
      marginBottom: "35px",
    },
    "@media (max-width: 375px)": {
      marginBottom: "30px",
    },
  },
  valuesTitle: {
    fontSize: "2.5rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "20px !important",
    "&:after": {
      content: '""',
      display: "block",
      width: "80px",
      height: "4px",
      backgroundColor: "#FFC614",
      margin: "15px auto 0",
      borderRadius: "2px",
    },
    "@media (max-width: 1200px)": {
      fontSize: "2.3rem !important",
      "&:after": {
        width: "75px",
      },
    },
    "@media (max-width: 960px)": {
      fontSize: "2.2rem !important",
      "&:after": {
        width: "70px",
        height: "3px",
        margin: "12px auto 0",
      },
    },
    "@media (max-width: 768px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem !important",
      marginBottom: "15px !important",
      "&:after": {
        width: "60px",
        height: "3px",
        margin: "10px auto 0",
      },
    },
    "@media (max-width: 480px)": {
      fontSize: "1.6rem !important",
      "&:after": {
        width: "50px",
        margin: "8px auto 0",
      },
    },
    "@media (max-width: 375px)": {
      fontSize: "1.4rem !important",
      marginBottom: "12px !important",
      "&:after": {
        width: "40px",
        height: "2px",
        margin: "6px auto 0",
      },
    },
  },
  valuesHighlight: {
    color: "#FFC614 !important",
  },
  cardContainer: {
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05) !important",
    height: "100%",
    backgroundColor: "white",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1) !important",
    },
    "@media (max-width: 1200px)": {
      padding: "28px",
      borderRadius: "18px",
    },
    "@media (max-width: 960px)": {
      padding: "25px",
      borderRadius: "16px",
    },
    "@media (max-width: 600px)": {
      padding: "20px",
      borderRadius: "15px",
      marginBottom: "20px",
      "&:hover": {
        transform: "translateY(-7px)",
      }
    },
    "@media (max-width: 480px)": {
      padding: "18px",
      borderRadius: "12px",
      marginBottom: "15px",
      "&:hover": {
        transform: "translateY(-5px)",
      }
    },
    "@media (max-width: 375px)": {
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "12px",
      "&:hover": {
        transform: "translateY(-3px)",
      }
    },
  },
  iconCircle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    "& svg": {
      fontSize: "40px",
      color: "white",
    },
    "@media (max-width: 1200px)": {
      width: "75px",
      height: "75px",
      "& svg": {
        fontSize: "38px",
      },
    },
    "@media (max-width: 960px)": {
      width: "70px",
      height: "70px",
      marginBottom: "18px",
      "& svg": {
        fontSize: "35px",
      },
    },
    "@media (max-width: 600px)": {
      width: "65px",
      height: "65px",
      marginBottom: "15px",
      "& svg": {
        fontSize: "32px",
      },
    },
    "@media (max-width: 480px)": {
      width: "60px",
      height: "60px",
      marginBottom: "12px",
      "& svg": {
        fontSize: "30px",
      },
    },
    "@media (max-width: 375px)": {
      width: "50px",
      height: "50px",
      marginBottom: "10px",
      "& svg": {
        fontSize: "25px",
      },
    },
  },
  visionIcon: {
    background: "linear-gradient(135deg, #3a7bd5, #00d2ff)",
  },
  missionIcon: {
    background: "linear-gradient(135deg, #3494E6, #EC6EAD)",
  },
  cardTitle: {
    fontSize: "2rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "15px !important",
    "@media (max-width: 1200px)": {
      fontSize: "1.9rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "1.8rem !important",
      marginBottom: "12px !important",
    },
    "@media (max-width: 768px)": {
      fontSize: "1.8rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.5rem !important",
      marginBottom: "10px !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.3rem !important",
      marginBottom: "8px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "1.2rem !important",
      marginBottom: "6px !important",
    },
  },
  cardDescription: {
    color: "#555 !important",
    fontSize: "1rem !important",
    lineHeight: "1.7 !important",
    "@media (max-width: 1200px)": {
      fontSize: "0.98rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "0.95rem !important",
      lineHeight: "1.6 !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.9rem !important",
      lineHeight: "1.5 !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.85rem !important",
      lineHeight: "1.5 !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.8rem !important",
      lineHeight: "1.4 !important",
    },
  },
});

const CoreValuesSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.valuesSection}>
      <Box className={classes.valuesContentContainer}>
        <Box className={classes.valuesTitleContainer}>
          <Typography variant="h2" className={classes.valuesTitle}>
            Core Values & <span className={classes.valuesHighlight}>Objectives</span>
          </Typography>
        </Box>

        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={5}>
          <Box flex={1} width={{ xs: '100%', md: '50%' }}>
            <Paper className={classes.cardContainer} elevation={0}>
              <Box className={`${classes.iconCircle} ${classes.visionIcon}`}>
                <VisibilityIcon />
              </Box>
              <Typography variant="h3" className={classes.cardTitle}>
                Vision
              </Typography>
              <Typography variant="body1" className={classes.cardDescription}>
                At Gigaversity, we envision a future where education is not just about acquiring knowledge but about building real-world expertise. Our goal is to create a product-based learning ecosystem where students don't just learn concepts but develop industry-grade projects, making them job-ready from day one. We aspire to bridge the gap between academic learning and real-world job demands, ensuring every learner gets hands-on experience, professional mentorship, and direct career opportunities in top companies.
              </Typography>
            </Paper>
          </Box>

          <Box flex={1} width={{ xs: '100%', md: '50%' }}>
            <Paper className={classes.cardContainer} elevation={0}>
              <Box className={`${classes.iconCircle} ${classes.missionIcon}`}>
                <TrackChangesIcon />
              </Box>
              <Typography variant="h3" className={classes.cardTitle}>
                Mission
              </Typography>
              <Typography variant="body1" className={classes.cardDescription}>
                Our mission at Gigaversity is to revolutionize education with job-specific training that blends theory and hands-on application. We focus on real-world projects, helping students build portfolio-worthy work. Through our Virtual Placement Drive and Internship Programs, we connect skilled candidates with top recruiters. Committed to accessible career transformation, we offer flexible, affordable learning for graduates, professionals, and freelancers. At Gigaversity, we don't just train—we equip students with skills and experience to secure high-paying careers.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CoreValuesSection;