import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TargetIcon from '@mui/icons-material/TrackChanges';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  section: {
    position: "relative",
    padding: "40px 0",
    backgroundColor: "transparent",
    overflow: "hidden",
    "@media (max-width: 1200px)": {
      padding: "40px 0",
    },
    "@media (max-width: 960px)": {
      padding: "60px 0 40px 0",
    },
    "@media (max-width: 600px)": {
      padding: "40px 0 30px 0",
    },
    "@media (max-width: 480px)": {
      padding: "30px 0 20px 0",
    },
    "@media (max-width: 375px)": {
      padding: "20px 0 15px 0",
    },
  },
  container: {
    height: "auto",
    margin: "0 auto",
    padding: "0px 140px",
    position: "relative",
    zIndex: "2",
    "@media (max-width: 1200px)": {
      padding: "0px 100px",
    },
    "@media (max-width: 960px)": {
      padding: "0 40px",
    },
    "@media (max-width: 600px)": {
      padding: "0 20px",
    },
    "@media (max-width: 480px)": {
      padding: "0 15px",
    },
    "@media (max-width: 375px)": {
      padding: "0 10px",
    },
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    "@media (max-width: 1200px)": {
      minHeight: "auto",
    },
    "@media (max-width: 960px)": {
      flexDirection: "column",
      alignItems: "center",
      gap: "40px",
    },
    "@media (max-width: 600px)": {
      gap: "30px",
    },
    "@media (max-width: 480px)": {
      gap: "25px",
    },
    "@media (max-width: 375px)": {
      gap: "20px",
    },
  },
  leftContent: {
    width: "48%",
    "@media (max-width: 1200px)": {
      width: "48%",
    },
    "@media (max-width: 960px)": {
      width: "100%",
      textAlign: "center",
      order: 1,
    },
    "@media (max-width: 600px)": {
      width: "100%",
    },
    "@media (max-width: 480px)": {
      width: "100%",
    },
    "@media (max-width: 375px)": {
      width: "100%",
    },
  },
  title: {
    fontSize: "2.5rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "30px !important",
    lineHeight: "1.2 !important",
    position: "relative",
    "@media (max-width: 1200px)": {
      fontSize: "2.2rem !important",
      marginBottom: "25px !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "2rem !important",
      textAlign: "center",
      marginBottom: "25px !important",
      maxWidth: "600px",
      margin: "0 auto 25px auto !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.7rem !important",
      marginBottom: "20px !important",
      maxWidth: "500px",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.5rem !important",
      marginBottom: "18px !important",
      maxWidth: "400px",
    },
    "@media (max-width: 375px)": {
      fontSize: "1.3rem !important",
      marginBottom: "15px !important",
      maxWidth: "300px",
      lineHeight: "1.3 !important",
    },
  },
  highlightText: {
    color: "#FFC614 !important",
    position: "relative",
    display: "inline-block",
  },
  featuresList: {
    marginBottom: "30px",
    "@media (max-width: 1200px)": {
      marginBottom: "25px",
    },
    "@media (max-width: 960px)": {
      marginBottom: "25px",
      display: "none", // Hide on mobile since they appear in the pathway visualization
    },
  },
  taglineButton: {
    backgroundColor: "#2A2B6A !important",
    color: "white !important",
    fontWeight: "bold !important",
    fontSize: "1.5rem !important",
    borderRadius: "8px !important",
    padding: "15px 30px !important",
    position: "relative",
    boxShadow: "0 10px 25px rgba(42, 43, 106, 0.3) !important",
    display: "inline-block !important",
    cursor: "pointer",
    transition: "all 0.3s ease !important",
    "&:hover": {
      backgroundColor: "#1a1b43 !important",
      transform: "translateY(-3px)",
      boxShadow: "0 15px 30px rgba(42, 43, 106, 0.4) !important",
    },
    "@media (max-width: 1200px)": {
      fontSize: "1.3rem !important",
      padding: "13px 26px !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "1.2rem !important",
      padding: "12px 24px !important",
      margin: "0 auto !important",
      display: "block !important",
      width: "auto",
      minWidth: "250px",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.1rem !important",
      padding: "10px 20px !important",
      width: "90%",
      maxWidth: "300px",
      textAlign: "center",
    },
    "@media (max-width: 480px)": {
      fontSize: "1rem !important",
      padding: "8px 16px !important",
      maxWidth: "250px",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.9rem !important",
      padding: "7px 14px !important",
      maxWidth: "220px",
    },
  },
  rightContent: {
    width: "48%",
    position: "relative",
    maxWidth: "48%",
    padding: "25px 20px",
    borderRadius: "16px",
    "@media (max-width: 1200px)": {
      width: "48%",
      maxWidth: "48%",
      padding: "22px 18px",
    },
    "@media (max-width: 960px)": {
      width: "100%",
      maxWidth: "450px",
      padding: "20px 15px",
      order: 2,
    },
    "@media (max-width: 600px)": {
      padding: "15px 10px",
      maxWidth: "90%",
    },
    "@media (max-width: 480px)": {
      padding: "12px 8px",
      maxWidth: "90%",
    },
    "@media (max-width: 375px)": {
      padding: "8px 5px",
      maxWidth: "95%",
    },
  },
  pathwayContainer: {
    position: "relative",
    minHeight: "320px",
    display: "flex",
    justifyContent: "center",
    "&:before": {
      content: '""',
      position: "absolute",
      left: "50%",
      top: "5%",
      bottom: "52px",
      width: "4px",
      backgroundColor: "rgba(42, 43, 106, 0.1)",
      borderRadius: "2px",
      transform: "translateX(-50%)",
    },
    "@media (max-width: 1200px)": {
      minHeight: "300px",
    },
    "@media (max-width: 960px)": {
      minHeight: "300px",
      width: "100%",
      scale: "0.95",
    },
    "@media (max-width: 600px)": {
      minHeight: "300px",
      scale: "0.9",
    },
    "@media (max-width: 480px)": {
      minHeight: "280px",
      scale: "0.85",
    },
    "@media (max-width: 375px)": {
      minHeight: "260px",
      scale: "0.78",
    },
  },
  pathwayProgress: {
    position: "absolute",
    left: "50%",
    top: "4%",
    width: "4px",
    height: "78%",
    backgroundColor: "#FFC614",
    borderRadius: "2px",
    transform: "translateX(-50%)",
  },
  pathNode: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  node1: {
    top: "8%",
    "@media (max-width: 480px)": {
      top: "7%",
    },
    "@media (max-width: 375px)": {
      top: "6%",
    },
  },
  node2: {
    top: "28%",
    "@media (max-width: 480px)": {
      top: "26%",
    },
    "@media (max-width: 375px)": {
      top: "24%",
    },
  },
  node3: {
    top: "56%",
    "@media (max-width: 480px)": {
      top: "52%",
    },
    "@media (max-width: 375px)": {
      top: "50%",
    },
  },
  node4: {
    top: "85%",
    transform: "translateY(-100%)",
    "@media (max-width: 480px)": {
      top: "80%",
    },
    "@media (max-width: 375px)": {
      top: "78%",
    },
  },
  nodeCircle: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: "white",
    border: "3px solid rgba(42, 43, 106, 0.3)",
    position: "absolute",
    zIndex: "2",
    left: "50%",
    transform: "translateX(-50%)",
    "@media (max-width: 480px)": {
      width: "20px",
      height: "20px",
    },
    "@media (max-width: 375px)": {
      width: "18px",
      height: "18px",
      border: "2px solid rgba(42, 43, 106, 0.3)",
    },
  },
  activeNode: {
    backgroundColor: "#FFC614",
    border: "3px solid #2A2B6A",
    boxShadow: "0 0 0 5px rgba(255, 198, 20, 0.3)",
    "@media (max-width: 375px)": {
      border: "2px solid #2A2B6A",
      boxShadow: "0 0 0 3px rgba(255, 198, 20, 0.3)",
    },
  },
  nodeLine: {
    position: "absolute",
    height: "3px",
    backgroundColor: "#FFC614",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: "1",
    "@media (max-width: 480px)": {
      height: "2px",
    },
  },
  leftLine: {
    right: "calc(50% + 12px)",
    width: "25px",
    "@media (max-width: 480px)": {
      width: "20px",
      right: "calc(50% + 10px)",
    },
    "@media (max-width: 375px)": {
      width: "15px",
      right: "calc(50% + 9px)",
    },
  },
  rightLine: {
    left: "calc(50% + 12px)",
    width: "25px",
    "@media (max-width: 480px)": {
      width: "20px",
      left: "calc(50% + 10px)",
    },
    "@media (max-width: 375px)": {
      width: "15px",
      left: "calc(50% + 9px)",
    },
  },
  nodeCard: {
    padding: "14px 16px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 6px 20px rgba(42, 43, 106, 0.1), 0 2px 5px rgba(0, 0, 0, 0.05)",
    opacity: "1",
    transform: "scale(1)",
    width: "215px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    position: "absolute",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 10px 25px rgba(42, 43, 106, 0.15), 0 3px 8px rgba(0, 0, 0, 0.06)",
    },
    "@media (max-width: 1200px)": {
      width: "190px",
      padding: "12px 14px",
    },
    "@media (max-width: 960px)": {
      width: "180px",
      padding: "12px 14px",
    },
    "@media (max-width: 600px)": {
      width: "170px",
      padding: "10px 12px",
      gap: "8px",
    },
    "@media (max-width: 480px)": {
      width: "160px",
      padding: "8px 10px",
      gap: "6px",
    },
    "@media (max-width: 375px)": {
      width: "130px",
      padding: "6px 8px",
      gap: "5px",
      boxShadow: "0 4px 15px rgba(42, 43, 106, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)",
    },
  },
  leftCard: {
    right: "calc(50% + 37px)",
    "@media (max-width: 480px)": {
      right: "calc(50% + 30px)",
    },
    "@media (max-width: 375px)": {
      right: "calc(50% + 24px)",
    },
  },
  rightCard: {
    left: "calc(50% + 37px)",
    "@media (max-width: 480px)": {
      left: "calc(50% + 30px)",
    },
    "@media (max-width: 375px)": {
      left: "calc(50% + 24px)",
    },
  },
  activeCard: {
    boxShadow: "0 10px 30px rgba(42, 43, 106, 0.15), 0 4px 8px rgba(0, 0, 0, 0.08)",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderLeft: "3px solid #FFC614",
  },
  featureIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    backgroundColor: "rgba(42, 43, 106, 0.04)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    color: "#2A2B6A",
    "& svg": {
      fontSize: "18px !important",
    },
    "@media (max-width: 600px)": {
      width: "32px",
      height: "32px",
      "& svg": {
        fontSize: "16px !important",
      },
    },
    "@media (max-width: 480px)": {
      width: "28px",
      height: "28px",
      "& svg": {
        fontSize: "14px !important",
      },
    },
    "@media (max-width: 375px)": {
      width: "24px",
      height: "24px",
      "& svg": {
        fontSize: "12px !important",
      },
    },
  },
  activeFeatureIcon: {
    backgroundColor: "#2A2B6A",
    color: "#FFC614",
    boxShadow: "0 5px 15px rgba(42, 43, 106, 0.25)",
  },
  featureText: {
    fontSize: "0.85rem !important",
    fontWeight: "500 !important",
    color: "#2A2B6A !important",
    lineHeight: "1.3 !important",
    "@media (max-width: 600px)": {
      fontSize: "0.8rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.75rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.7rem !important",
    },
  },
});

const JobKickstart = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  // Feature data
  const features = [
    {
      icon: <TargetIcon />,
      text: "Learn in-demand skills that employers seek",
    },
    {
      icon: <AssessmentIcon />,
      text: "Build portfolio projects that prove your expertise",
    },
    {
      icon: <PeopleAltIcon />,
      text: "Connect with 100+ hiring partners",
    },
    {
      icon: <BusinessCenterIcon />,
      text: "Get hired with packages Starting from 3 LPA-15 LPA",
    },
  ];

  const handleTaglineClick = () => {
    navigate('/cart');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box className={classes.section}>
      <Box className={classes.container}>
        <Box className={classes.contentWrapper}>
          {/* Left Content */}
          <Box className={classes.leftContent}>
            <Typography variant="h2" className={classes.title}>
              Why Struggle With Traditional <span className={classes.highlightText}>Job Hunting WHEN You Can</span>
            </Typography>
            
            <Box className={classes.featuresList}>
              {/* Features will be displayed in the pathway visualization */}
            </Box>
            
            <Button 
              variant="contained" 
              className={classes.taglineButton}
              onClick={handleTaglineClick}
            >
              KickStart Your Job In 30 Days
            </Button>
          </Box>
          
          {/* Right Content - Pathway Visualization */}
          <Box className={classes.rightContent}>
            <Box className={classes.pathwayContainer}>
              {/* Vertical progress line - now fully shown by default */}
              <Box className={classes.pathwayProgress} />
              
              {/* Node 1 - Left side */}
              <Box className={`${classes.pathNode} ${classes.node1}`}>
                <Box className={`${classes.nodeCircle} ${classes.activeNode}`} />
                {/* Add connecting line */}
                <Box className={`${classes.nodeLine} ${classes.leftLine}`} />
                <Box className={`${classes.nodeCard} ${classes.leftCard} ${classes.activeCard}`}>
                  <Box className={`${classes.featureIcon} ${classes.activeFeatureIcon}`}>
                    {features[0].icon}
                  </Box>
                  <Typography className={classes.featureText}>
                    {features[0].text}
                  </Typography>
                </Box>
              </Box>
              
              {/* Node 2 - Right side */}
              <Box className={`${classes.pathNode} ${classes.node2}`}>
                <Box className={`${classes.nodeCircle} ${classes.activeNode}`} />
                {/* Add connecting line */}
                <Box className={`${classes.nodeLine} ${classes.rightLine}`} />
                <Box className={`${classes.nodeCard} ${classes.rightCard} ${classes.activeCard}`}>
                  <Box className={`${classes.featureIcon} ${classes.activeFeatureIcon}`}>
                    {features[1].icon}
                  </Box>
                  <Typography className={classes.featureText}>
                    {features[1].text}
                  </Typography>
                </Box>
              </Box>
              
              {/* Node 3 - Left side */}
              <Box className={`${classes.pathNode} ${classes.node3}`}>
                <Box className={`${classes.nodeCircle} ${classes.activeNode}`} />
                {/* Add connecting line */}
                <Box className={`${classes.nodeLine} ${classes.leftLine}`} />
                <Box className={`${classes.nodeCard} ${classes.leftCard} ${classes.activeCard}`}>
                  <Box className={`${classes.featureIcon} ${classes.activeFeatureIcon}`}>
                    {features[2].icon}
                  </Box>
                  <Typography className={classes.featureText}>
                    {features[2].text}
                  </Typography>
                </Box>
              </Box>
              
              {/* Node 4 - Right side */}
              <Box className={`${classes.pathNode} ${classes.node4}`}>
                <Box className={`${classes.nodeCircle} ${classes.activeNode}`} />
                {/* Add connecting line */}
                <Box className={`${classes.nodeLine} ${classes.rightLine}`} />
                <Box className={`${classes.nodeCard} ${classes.rightCard} ${classes.activeCard}`}>
                  <Box className={`${classes.featureIcon} ${classes.activeFeatureIcon}`}>
                    {features[3].icon}
                  </Box>
                  <Typography className={classes.featureText}>
                    {features[3].text}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JobKickstart;