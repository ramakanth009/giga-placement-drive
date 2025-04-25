import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  TouchApp as SelectIcon,
  HowToReg as RegisterIcon,
  Create as BuildIcon,
  Business as ConnectIcon
} from '@mui/icons-material';

const useStyles = makeStyles({
  section: {
    padding: "70px 20px",
    background: "linear-gradient(135deg, #f6f9ff 0%, #edf1fa 100%)",
    position: "relative",
    overflow: "hidden",
    marginTop: "30px",
    marginBottom: "30px",
  },
  container: {
    position: "relative",
    zIndex: 2,
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.8rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    position: "relative",
    display: "inline-block",
    marginBottom: "15px !important",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-10px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100px",
      height: "4px",
      background: "linear-gradient(90deg, #FFC614 0%, #FF9D00 100%)",
      borderRadius: "2px",
    },
    "& span": {
      background: " #FFC614",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
    },
  },
  subtitle: {
    fontSize: "1.4rem !important",
    color: "#555 !important",
    maxWidth: "800px",
    margin: "10px auto 0 !important",
    lineHeight: "1.7 !important",
  },
  stepsContainer: {
    padding: "0 80px",
    margin: "0 auto",
    position: "relative",
    "@media (max-width: 960px)": {
      padding: "0 20px",
    },
  },
  stepsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 2,
    flexWrap: "wrap",
    gap: "40px",
    "@media (max-width: 960px)": {
      justifyContent: "center",
    },
  },
  connectingLines: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: 1,
    pointerEvents: "none"
  },
  stepBox: {
    width: "330px",
    position: "relative",
    "@media (max-width: 960px)": {
      width: "100%",
      maxWidth: "300px",
      margin: "0 auto",
    },
  },
  stepBoxContent: {
    backgroundColor: "white",
    borderRadius: "24px",
    padding: "30px 15px 15px", // Reduced top padding
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
    transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
    border: "1px solid rgba(42, 43, 106, 0.1)",
    marginTop: "30px", // Added margin to make room for the number
    overflow: "hidden",
    "&:before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "5px",
      background: " #FFC614",
      opacity: 0,
      transition: "all 0.3s ease",
    },
    "&:hover": {
      transform: "translateY(-15px)",
      boxShadow: "0 25px 50px rgba(42, 43, 106, 0.15)",
      "&:before": {
        opacity: 1,
      },
      "& $iconWrapper": {
        transform: "scale(1.1) rotate(10deg)",
        // background: "linear-gradient(135deg, #FFC614, #FF9D00)",
        boxShadow: "0 0 20px rgba(255, 198, 20, 0.5)",
        "& svg": {
          // color: "#2A2B6A",
          transform: "rotate(-10deg)",
        },
      }
    },
  },
  stepNumber: {
    position: "absolute",
    top: "-7px", // Positioned higher to sit on top of the card
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px", // Larger size
    height: "60px", // Larger size
    background: "linear-gradient(135deg, #2A2B6A, #3F40A1)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "26px", // Larger font
    boxShadow: "0 8px 20px rgba(42, 43, 106, 0.3)",
    zIndex: 3,
    border: "4px solid #FFC614", // Thicker border
  },
  iconWrapper: {
    width: "90px",
    height: "90px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #2A2B6A, #3F40A1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "25px",
    marginTop: "25px",
    transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    border: "3px solid rgba(255, 198, 20, 0.5)",
    position: "relative",
    animation: "$pulseGlow 3s infinite",
    "&:after": {
      content: '""',
      position: "absolute",
      inset: "-6px",
      borderRadius: "24px",
      border: "1px dashed rgba(255, 198, 20, 0.7)",
    },
    "& svg": {
      color: "#FFC614",
      fontSize: "40px",
      transition: "all 0.3s ease",
    },
  },
  "@keyframes pulseGlow": {
    "0%": {
      boxShadow: "0 0 0 0 rgba(255, 198, 20, 0.5)",
    },
    "70%": {
      boxShadow: "0 0 0 15px rgba(255, 198, 20, 0)",
    },
    "100%": {
      boxShadow: "0 0 0 0 rgba(255, 198, 20, 0)",
    },
  },
  stepTitle: {
    fontSize: "1.4rem !important",
    fontWeight: "700 !important",
    background: "linear-gradient(135deg, #2A2B6A, #3F40A1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "20px !important",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "-8px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "40px",
      height: "2px",
      background: "#FFC614",
    }
  },
  stepDescription: {
    fontSize: "1.1rem !important",
    color: "#555 !important",
    lineHeight: "1.7 !important",
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
    minHeight: "32px", // Decreased min height
    // flex: 1, // Remove or comment this out if you don't want it to stretch
  },
  animatedStep: {
    opacity: 0,
    transform: 'translateY(50px)',
    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
  },
  animatedStepVisible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  backgroundShapes: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    overflow: "hidden",
    zIndex: 1,
    opacity: 0.3,
  },
  circleShape: {
    position: "absolute",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #FFC614, rgba(255, 198, 20, 0.1))",
    opacity: 0.2,
  },
});

const HowItWorks = () => {
  const classes = useStyles();
  const [animatedElements, setAnimatedElements] = useState([]);
  const stepsRef = useRef([]);
  const svgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            if (!isNaN(index) && !animatedElements.includes(index)) {
              setTimeout(() => {
                setAnimatedElements(prev => [...prev, index]);
              }, index * 300);
            }
          }
        });
      },
      { root: null, threshold: 0.2 }
    );

    stepsRef.current.forEach((el, index) => {
      if (el) observer.observe(el);
    });

    return () => {
      stepsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, [animatedElements]);

  const steps = [
    {
      id: 0,
      icon: <SelectIcon />,
      title: "Select Your Domain",
      description: "Choose your career path with expert guidance in Full Stack Development or Data Science.",
    },
    {
      id: 1,
      icon: <RegisterIcon />,
      title: "Complete Registration",
      description: "Quick and easy onboarding to gain immediate access to our learning platform.",
    },
    {
      id: 2,
      icon: <BuildIcon />,
      title: "Build Your Portfolio",
      description: "Work on real-world projects that demonstrate your skills to potential employers.",
    },
    {
      id: 3,
      icon: <ConnectIcon />,
      title: "Connect With Recruiters",
      description: "Get introduced directly to hiring partners through our placement network.",
    },
  ];

  return (
    <Box className={classes.section}>
      {/* Background Shapes */}
      <Box className={classes.backgroundShapes}>
        <Box className={classes.circleShape} sx={{ width: "300px", height: "300px", top: "10%", left: "5%" }} />
        <Box className={classes.circleShape} sx={{ width: "200px", height: "200px", bottom: "15%", right: "10%" }} />
        <Box className={classes.circleShape} sx={{ width: "150px", height: "150px", top: "50%", right: "20%" }} />
      </Box>
      
      <Box className={classes.header}>
        <Typography variant="h2" className={classes.title}>
          How Our <span>Virtual Placement Drive</span> Works
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Your skills matter more than marks - follow these simple steps to get noticed by top recruiters!
        </Typography>
      </Box>

      <Box className={classes.stepsContainer}>
        {/* SVG for connecting lines with increased dash length and visibility */}
        <svg 
          className={classes.connectingLines} 
          width="100%" 
          height="100%" 
          ref={svgRef}
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
        >
          {/* One continuous curved dashed line connecting all cards with increased dash length */}
          <path
            d="M 125,200 C 220,120 280,280 375,200 C 470,120 530,280 625,200 C 720,120 780,280 875,200 C 970,120 1030,280 1125,200"
            fill="none"
            stroke="url(#gradientLine)"
            strokeWidth="4" /* Increased width */
            strokeDasharray="15,10" /* Longer dashes with shorter gaps */
            strokeLinecap="round"
            opacity="0.8" /* Increased opacity */
          />
          <defs>
            <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2A2B6A" />
              <stop offset="50%" stopColor="#FFC614" />
              <stop offset="100%" stopColor="#2A2B6A" />
            </linearGradient>
          </defs>
        </svg>

        <Box className={classes.stepsWrapper}>
          {steps.map((step, index) => (
            <Box
              key={index}
              className={`${classes.stepBox} ${classes.animatedStep} ${animatedElements.includes(index) ? classes.animatedStepVisible : ''}`}
              ref={el => stepsRef.current[index] = el}
              data-index={index}
              sx={{ position: 'relative' }}
            >
              <Box className={classes.stepNumber}>{index + 1}</Box>
              <Box className={classes.stepBoxContent}>
                <Box className={classes.iconWrapper}>
                  {step.icon}
                </Box>
                <Typography className={classes.stepTitle}>
                  {step.title}
                </Typography>
                <Typography className={classes.stepDescription}>
                  {step.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorks;