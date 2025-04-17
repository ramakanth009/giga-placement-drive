import React, { useEffect, useState, useRef } from "react";
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
    // maxWidth: "1200px",
    margin: "0 auto",
    padding: "0px 140px",
    position: "relative",
    zIndex: "2",
    "@media (max-width: 600px)": {
      padding: "0 20px",
    },
  },
  contentWrapper: {
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
    "@media (max-width: 960px)": {
      width: "100%",
      maxWidth: "450px",
    },
  },
  pathwayContainer: {
    position: "relative",
    minHeight: "400px",
    "&:before": {
      content: '""',
      position: "absolute",
      left: "50%",
      top: "0",
      bottom: "0",
      width: "4px",
      backgroundColor: "rgba(42, 43, 106, 0.1)",
      borderRadius: "2px",
      transform: "translateX(-50%)",
    },
    "@media (max-width: 600px)": {
      minHeight: "360px",
    },
  },
  pathwayProgress: {
    position: "absolute",
    left: "50%",
    top: "0",
    width: "4px",
    backgroundColor: "#FFC614",
    borderRadius: "2px",
    transform: "translateX(-50%)",
    transition: "height 0.4s cubic-bezier(0.65, 0, 0.35, 1)", // Reduced from 0.8s to 0.4s
  },
  pathNode: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
  },
  node1: {
    top: "0%",
    left: "0",
  },
  node2: {
    top: "25%",
    right: "0",
  },
  node3: {
    top: "52%",
    left: "0",
  },
  node4: {
    top: "100%",
    right: "0",
    transform: "translateY(-100%)",
  },
  nodeCircle: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: "white",
    border: "3px solid rgba(42, 43, 106, 0.3)",
    position: "relative",
    zIndex: "1",
    transition: "all 0.2s ease", // Reduced from 0.4s to 0.2s
  },
  activeNode: {
    backgroundColor: "#FFC614",
    border: "3px solid #2A2B6A",
    transform: "scale(1.2)",
    boxShadow: "0 0 0 5px rgba(255, 198, 20, 0.3)",
  },
  nodeLine: {
    width: "40px",
    height: "3px",
    backgroundColor: "rgba(42, 43, 106, 0.2)",
    transition: "all 0.2s ease", // Reduced from 0.4s to 0.2s
    "@media (max-width: 600px)": {
      width: "30px",
    },
  },
  activeNodeLine: {
    backgroundColor: "#FFC614",
  },
  nodeCard: {
    padding: "16px 20px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
    transition: "all 0.2s ease", // Reduced from 0.4s to 0.2s
    opacity: "0.6",
    transform: "scale(0.95)",
    width: "200px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    "&:hover": {
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
    },
    "@media (max-width: 600px)": {
      padding: "12px 16px",
      width: "180px",
    },
  },
  activeCard: {
    opacity: "1",
    transform: "scale(1)",
    boxShadow: "0 10px 30px rgba(42, 43, 106, 0.15)",
  },
  featureIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    backgroundColor: "rgba(42, 43, 106, 0.04)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    color: "#2A2B6A",
    "& svg": {
      fontSize: "20px !important",
    },
    "@media (max-width: 600px)": {
      width: "36px",
      height: "36px",
      "& svg": {
        fontSize: "18px !important",
      },
    },
  },
  featureText: {
    fontSize: "0.85rem !important",
    fontWeight: "500 !important",
    color: "#2A2B6A !important",
    lineHeight: "1.4 !important",
    "@media (max-width: 600px)": {
      fontSize: "0.75rem !important",
    },
  },
  activeFeatureIcon: {
    backgroundColor: "#2A2B6A",
    color: "#FFC614",
    boxShadow: "0 5px 15px rgba(42, 43, 106, 0.25)",
  },
  // Remove control buttons completely
  controlButtons: {
    display: "none",
  },
  controlButton: {
    display: "none",
  },
  controlButtonIcon: {
    fontSize: "20px !important",
    color: "#2A2B6A !important",
    transition: "all 0.3s ease !important",
    "@media (max-width: 600px)": {
      fontSize: "18px !important",
    },
  },
  disabledButton: {
    opacity: "0.5 !important",
    cursor: "not-allowed !important",
    "&:hover": {
      transform: "translateY(0) !important",
    },
  },
  decorElement: {
    display: "none",
  },
  decorElement1: {
    display: "none",
  },
  decorElement2: {
    display: "none",
  },
  slideIn: {
    opacity: "0",
    transform: "translateY(30px)",
    transition: "opacity 0.3s ease, transform 0.3s ease", // Reduced from 0.6s to 0.3s
  },
  slideInActive: {
    opacity: "1",
    transform: "translateY(0)",
  },
});

const JobKickstart = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

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

  // Progress animation
  useEffect(() => {
    const timer = setTimeout(() => {
      const maxHeight = Math.min(33 * (activeStep + 1), 100);
      setProgressHeight(`${maxHeight}%`);
    }, 25); // Reduced from 50 to 25

    return () => clearTimeout(timer);
  }, [activeStep]);

  // Intersection Observer to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setInView(true);
            
            const timeout = setTimeout(() => {
              setActiveStep(1);
              
              const interval = setInterval(() => {
                setActiveStep((prev) => {
                  if (prev >= 3) {
                    clearInterval(interval);
                    return 3;
                  }
                  return prev + 1;
                });
              }, 800); // Reduced from 1500 to 800
              
              return () => clearInterval(interval);
            }, 200); // Reduced from 500 to 200
            
            return () => clearTimeout(timeout);
          }, 150); // Reduced from 300 to 150
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handle step change
  const handleStepChange = (step) => {
    if (step >= 0 && step <= 3) {
      setActiveStep(step);
    }
  };

  return (
    <Box className={classes.section} ref={sectionRef}>
      <Box className={classes.decorElement1} />
      <Box className={classes.decorElement2} />
      
      <Box className={classes.container}>
        <Box className={classes.contentWrapper}>
          {/* Left Content */}
          <Box className={`${classes.leftContent} ${classes.slideIn} ${inView ? classes.slideInActive : ''}`}>
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
          <Box className={`${classes.rightContent} ${classes.slideIn} ${inView ? classes.slideInActive : ''}`} style={{ transitionDelay: '0.3s' }}>
            <Box className={classes.pathwayContainer}>
              {/* Vertical progress line */}
              <Box 
                className={classes.pathwayProgress}
                sx={{ height: progressHeight }}
              />
              
              {/* Node 1 */}
              <Box className={`${classes.pathNode} ${classes.node1}`}>
                <Box className={`${classes.nodeCircle} ${activeStep >= 0 ? classes.activeNode : ''}`} />
                <Box className={`${classes.nodeLine} ${activeStep >= 0 ? classes.activeNodeLine : ''}`} />
                <Box className={`${classes.nodeCard} ${activeStep >= 0 ? classes.activeCard : ''}`}>
                  <Box className={`${classes.featureIcon} ${activeStep >= 0 ? classes.activeFeatureIcon : ''}`}>
                    {features[0].icon}
                  </Box>
                  <Typography className={classes.featureText}>
                    {features[0].text}
                  </Typography>
                </Box>
              </Box>
              
              {/* Node 2 */}
              <Box className={`${classes.pathNode} ${classes.node2}`}>
                <Box className={`${classes.nodeCard} ${activeStep >= 1 ? classes.activeCard : ''}`}>
                  <Box className={`${classes.featureIcon} ${activeStep >= 1 ? classes.activeFeatureIcon : ''}`}>
                    {features[1].icon}
                  </Box>
                  <Typography className={classes.featureText}>
                    {features[1].text}
                  </Typography>
                </Box>
                <Box className={`${classes.nodeLine} ${activeStep >= 1 ? classes.activeNodeLine : ''}`} />
                <Box className={`${classes.nodeCircle} ${activeStep >= 1 ? classes.activeNode : ''}`} />
              </Box>
              
              {/* Node 3 */}
              <Box className={`${classes.pathNode} ${classes.node3}`}>
                <Box className={`${classes.nodeCircle} ${activeStep >= 2 ? classes.activeNode : ''}`} />
                <Box className={`${classes.nodeLine} ${activeStep >= 2 ? classes.activeNodeLine : ''}`} />
                <Box className={`${classes.nodeCard} ${activeStep >= 2 ? classes.activeCard : ''}`}>
                  <Box className={`${classes.featureIcon} ${activeStep >= 2 ? classes.activeFeatureIcon : ''}`}>
                    {features[2].icon}
                  </Box>
                  <Typography className={classes.featureText}>
                    {features[2].text}
                  </Typography>
                </Box>
              </Box>
              
              {/* Node 4 */}
              <Box className={`${classes.pathNode} ${classes.node4}`}>
                <Box className={`${classes.nodeCard} ${activeStep >= 3 ? classes.activeCard : ''}`}>
                  <Box className={`${classes.featureIcon} ${activeStep >= 3 ? classes.activeFeatureIcon : ''}`}>
                    {features[3].icon}
                  </Box>
                  <Typography className={classes.featureText}>
                    {features[3].text}
                  </Typography>
                </Box>
                <Box className={`${classes.nodeLine} ${activeStep >= 3 ? classes.activeNodeLine : ''}`} />
                <Box className={`${classes.nodeCircle} ${activeStep >= 3 ? classes.activeNode : ''}`} />
              </Box>
              
          {/* Remove control buttons section */}
          </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JobKickstart;