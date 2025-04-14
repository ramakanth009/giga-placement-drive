import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import kickstartBackground from '../../../assets/kickstart-background.png';
import kickstartguy from '../../../assets/kickstartguy.png';
import TargetIcon from '@mui/icons-material/TrackChanges';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const useStyles = makeStyles({
  section: {
    height: "75vh",
    position: "relative",
    width: "100%",
    padding: "122px 40px 40px 40px",
    backgroundImage: `url(${kickstartBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    
    "@media (max-width: 960px)": {
      padding: "60px 20px",
    },
    "@media (max-width: 600px)": {
      padding: "40px 15px",
    },
  },
  content: {
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    position: "relative",
    zIndex: 2,
    "@media (max-width: 960px)": {
      flexDirection: "column",
    },
  },
  leftSection: {
    width: "40%",
    position: "relative",
    "@media (max-width: 960px)": {
      width: "100%",
      textAlign: "center",
      marginBottom: "40px",
    },
  },
  rightSection: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 960px)": {
      width: "100%",
      alignItems: "center",
    },
  },
  titleContainer: {
    marginTop:"30px",
    marginBottom: "20px",
    "@media (max-width: 960px)": {
      marginBottom: "30px",
    },
  },
  title: {
    fontSize: "2.5rem !important",
    fontWeight: "700 !important",
    color: "#ffffff !important",
    lineHeight: "1.2 !important",
    "@media (max-width: 1200px)": {
      fontSize: "2.5rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem !important",
    },
  },
  highlightText: {
    color: "#FFC614 !important",
  },
  subtitle: {
    fontSize: "1.2rem !important",
    color: "#ffffff !important",
    marginTop: "15px !important",
    "@media (max-width: 600px)": {
      fontSize: "1rem !important",
    },
  },
  featureBoxesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "20px",
    width: "100%",
    maxWidth: "800px",
  },
  featureRow: {
    display: "flex",
    gap: "20px",
    "@media (max-width: 600px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  featureBox: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    padding: "15px 20px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  iconCircle: {
    width: "45px",
    height: "45px",
    minWidth: "45px",
    borderRadius: "50%",
    backgroundColor: "#FFC614",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "15px",
    "@media (max-width: 600px)": {  // Add this style for icons
      width: "40px",
      height: "40px",
      minWidth: "40px",
      marginRight: "12px",
    },
  },
  boxText: {
    fontSize: "1rem !important",
    color: "#ffffff !important",
    fontWeight: "500 !important",
    "@media (max-width: 600px)": {
      fontSize: "0.9rem !important",
    },
  },
  imageContainer: {
    position: "relative",
    "@media (max-width: 960px)": {
      display: "none",
    },
  },
  personImage: {
    position: "absolute",
    bottom: "-80px",
    left: "0",
    maxHeight: "600px",
    "@media (max-width: 1200px)": {
      maxHeight: "500px",
      bottom: "-60px",
    },
  },
  ctaButton: {
    backgroundColor: "#FFC614 !important",
    color: "#232559 !important",
    fontWeight: "bold !important",
    padding: "12px 25px !important",
    borderRadius: "8px !important",
    fontSize: "1.1rem !important",
    textTransform: "none !important",
    boxShadow: "0 4px 15px rgba(255, 198, 20, 0.3) !important",
    transition: "all 0.3s ease !important",
    "&:hover": {
      backgroundColor: "#FFD23F !important",
      transform: "translateY(-3px)",
    },
    "@media (max-width: 600px)": {
      "&:hover": {
        padding: "10px 20px !important",
        fontSize: "1rem !important",
      },
    },
  },
});

const JobKickstart = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.section}>
      <Box className={classes.content}>
        {/* Left Section with Image */}
        <Box className={classes.leftSection}>
          <img
            src={kickstartguy}
            alt="Professional with laptop"
            className={classes.personImage}
          />
        </Box>

        {/* Right Section with Content */}
        <Box className={classes.rightSection}>
          <Box className={classes.titleContainer}>
            <Typography variant="h2" className={classes.title}>
              Why Struggle With Traditional <span className={classes.highlightText}>Job Hunting WHEN You Can</span>
            </Typography>
          </Box>
          <Box className={classes.featureBoxesContainer}>
            {/* First Row - 2 Features */}
            <Box className={classes.featureRow}>
              <Box className={classes.featureBox}>
                <Box className={classes.iconCircle}>
                  <TargetIcon />
                </Box>
                <Typography className={classes.boxText}>
                  Learn in-demand skills that employers seek
                </Typography>
              </Box>
              <Box className={classes.featureBox}>
                <Box className={classes.iconCircle}>
                  <AssessmentIcon />
                </Box>
                <Typography className={classes.boxText}>
                  Build portfolio projects that prove your expertise
                </Typography>
              </Box>
            </Box>
            {/* Second Row - 2 Features */}
            <Box className={classes.featureRow}>
              <Box className={classes.featureBox}>
                <Box className={classes.iconCircle}>
                  <PeopleAltIcon />
                </Box>
                <Typography className={classes.boxText}>
                  Connect with 100+ hiring partners
                </Typography>
              </Box>
              <Box className={classes.featureBox}>
                <Box className={classes.iconCircle}>
                  <BusinessCenterIcon />
                </Box>
                <Typography className={classes.boxText}>
                  Get hired with packages Starting from 3 LPA-15 LPA
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* <Button 
            variant="contained"
            className={classes.ctaButton}
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate('/register')}
          >
            Apply Now
          </Button> */}
          <Typography variant="subtitle1" className={classes.subtitle}>
              KickStart Your Job In 30 Days
          </Typography>
        </Box>
      </Box>
      {/* Wavy bottom shape */}
      <Box className={classes.wavyBottomShape} />
    </Box>
  );
};

export default JobKickstart;