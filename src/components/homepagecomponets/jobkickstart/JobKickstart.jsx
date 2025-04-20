import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TargetIcon from '@mui/icons-material/TrackChanges';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const useStyles = makeStyles({
  section: {
    position: "relative",
    padding: "20px 0",
    backgroundColor: "transparent",
    overflow: "hidden",
    "@media (max-width: 960px)": {
      padding: "60px 0",
    },
    "@media (max-width: 600px)": {
      padding: "50px 0",
    },
  },
  container: {
    height: "auto",
    margin: "0 auto",
    padding: "0px 140px",
    position: "relative",
    zIndex: "2",
    "@media (max-width: 960px)": {
      padding: "0 20px",
    },
    "@media (max-width: 600px)": {
      padding: "0 20px",
    },
  },
  contentWrapper: {
    minHeight: "520px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width: 960px)": {
      flexDirection: "column",
      gap: "40px",
    },
  },
  leftContent: {
    
    width: "48%",
    "@media (max-width: 960px)": {
      width: "100%",
      textAlign: "center",
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
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem !important",
      marginBottom: "25px !important",
    },
  },
  highlightText: {
    color: "#FFC614 !important",
    position: "relative",
    display: "inline-block",
  },
  featuresList: {
    marginBottom: "30px",
    "@media (max-width: 600px)": {
      marginBottom: "20px",
    },
  },
  taglineButton: {
    padding: "15px 30px",
    background: "#2A2B6A",
    color: "white !important",
    fontWeight: "bold !important",
    fontSize: "1.5rem !important",
    borderRadius: "8px",
    position: "relative",
    boxShadow: "0 10px 25px rgba(42, 43, 106, 0.3)",
    display: "inline-block",
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      width: "50px",
      height: "3px",
      backgroundColor: "#FFC614",
      top: "50%",
      transform: "translateY(-50%)",
    },
    "&:before": {
      left: "-70px",
    },
    "&:after": {
      right: "-70px",
    },
    "@media (max-width: 960px)": {
      fontSize: "1.3rem !important",
      padding: "12px 25px",
      margin: "0 auto",
      display: "table",
      "&:before, &:after": {
        width: "30px",
      },
      "&:before": {
        left: "-40px",
      },
      "&:after": {
        right: "-40px",
      },
    },
    "@media (max-width: 600px)": {
      fontSize: "1.1rem !important",
      padding: "10px 20px",
      "&:before, &:after": {
        display: "none",
      },
    },
  },
  rightContent: {
    width: "48%",
    position: "relative",
    // Added max-width to ensure content stays within boundaries
    maxWidth: "48%",
    "@media (max-width: 960px)": {
      width: "100%",
      maxWidth: "450px",
    },
  },
  pathwayContainer: {
    position: "relative",
    // Reduced minimum height for a tighter layout
    minHeight: "320px",
    display: "flex",
    justifyContent: "center",
    "&:before": {
      content: '""',
      position: "absolute",
      left: "50%",
      top: "0",
      bottom: "34px",
      width: "4px",
      backgroundColor: "rgba(42, 43, 106, 0.1)",
      borderRadius: "2px",
      transform: "translateX(-50%)",
    },
    "@media (max-width: 600px)": {
      minHeight: "300px",
    },
  },
  pathwayProgress: {
    position: "absolute",
    left: "50%",
    top: "0",
    width: "4px",
    height: "88%",
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
  // Adjusted node positions for tighter spacing
  node1: {
    top: "0%",
  },
  node2: {
    // Reduced gap between nodes
    top: "28%",
  },
  node3: {
    // Reduced gap between nodes
    top: "56%",
  },
  node4: {
    top: "85%",
    transform: "translateY(-100%)",
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
  },
  activeNode: {
    backgroundColor: "#FFC614",
    border: "3px solid #2A2B6A",
    boxShadow: "0 0 0 5px rgba(255, 198, 20, 0.3)",
  },
  nodeLine: {
    position: "absolute",
    height: "3px",
    backgroundColor: "#FFC614",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: "1",
  },
  leftLine: {
    right: "calc(50% + 12px)",
    width: "25px",
  },
  rightLine: {
    left: "calc(50% + 12px)",
    width: "25px",
  },
  nodeCard: {
    padding: "14px 16px", // Reduced padding
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
    opacity: "1",
    transform: "scale(1)",
    // Reduced width to prevent overflow
    width: "215px",
    display: "flex",
    alignItems: "center",
    gap: "10px", // Reduced gap
    position: "absolute",
    "&:hover": {
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
    },
    "@media (max-width: 600px)": {
      padding: "12px 14px",
      width: "160px",
    },
  },
  leftCard: {
    // Adjusted position to ensure it stays within bounds
    right: "calc(50% + 37px)",
  },
  rightCard: {
    // Adjusted position to ensure it stays within bounds
    left: "calc(50% + 37px)",
  },
  activeCard: {
    boxShadow: "0 10px 30px rgba(42, 43, 106, 0.15)",
  },
  featureIcon: {
    width: "36px", // Reduced size
    height: "36px", // Reduced size
    borderRadius: "8px",
    backgroundColor: "rgba(42, 43, 106, 0.04)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    color: "#2A2B6A",
    "& svg": {
      fontSize: "18px !important", // Reduced icon size
    },
    "@media (max-width: 600px)": {
      width: "32px",
      height: "32px",
      "& svg": {
        fontSize: "16px !important",
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
    lineHeight: "1.3 !important", // Tightened line height
    "@media (max-width: 600px)": {
      fontSize: "0.75rem !important",
    },
  },
});

const JobKickstart = () => {
  const classes = useStyles();

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
            
            <Typography className={classes.taglineButton}>
              KickStart Your Job In 30 Days
            </Typography>
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