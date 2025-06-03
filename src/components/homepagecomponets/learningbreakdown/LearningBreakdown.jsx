import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Chip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const useStyles = makeStyles({
  section: {
    padding: "120px 0",
    position: "relative",
    background: "radial-gradient(ellipse at center, #0a0a1f 0%, #000000 70%)",
    overflow: "hidden",
    minHeight: "100vh",
  },
  container: {
    position: "relative",
    zIndex: 10,
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
  },
  title: {
    fontSize: "4rem !important",
    fontWeight: "900 !important",
    background: "linear-gradient(45deg, #00d4ff 0%, #ff0080 50%, #ffeb3b 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "20px !important",
    animation: "$glow 3s ease-in-out infinite alternate",
    "@media (max-width: 960px)": {
      fontSize: "3rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "2.5rem !important",
    },
  },
  subtitle: {
    fontSize: "1.4rem !important",
    color: "rgba(255, 255, 255, 0.8) !important",
    maxWidth: "800px",
    margin: "0 auto !important",
  },
  journeyContainer: {
    position: "relative",
    height: "800px",
    margin: "80px auto",
    maxWidth: "1000px",
    "@media (max-width: 768px)": {
      height: "1200px",
    },
  },
  pathSvg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  journeyPath: {
    fill: "none",
    stroke: "url(#pathGradient)",
    strokeWidth: "4",
    strokeDasharray: "2000",
    strokeDashoffset: "2000",
    animation: "$drawPath 4s ease-in-out forwards",
  },
  phaseNode: {
    position: "absolute",
    width: "180px",
    height: "180px",
    cursor: "pointer",
    zIndex: 5,
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "scale(1.2)",
      zIndex: 10,
      "& $nodeCore": {
        boxShadow: "0 0 80px rgba(0, 212, 255, 0.8), 0 0 120px rgba(255, 0, 128, 0.6)",
        transform: "scale(1.1)",
      },
      "& $nodeContent": {
        opacity: 1,
        visibility: "visible",
      },
    },
  },
  nodeCore: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    background: "conic-gradient(from 0deg, #00d4ff, #ff0080, #ffeb3b, #00d4ff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    transition: "all 0.6s ease",
    animation: "$rotate 20s linear infinite",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: "3px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(10, 10, 31, 0.95) 0%, rgba(0, 0, 0, 0.9) 100%)",
      zIndex: 1,
    },
  },
  nodeInner: {
    position: "relative",
    zIndex: 2,
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  nodeNumber: {
    fontSize: "2rem !important",
    fontWeight: "900 !important",
    color: "#00d4ff !important",
    marginBottom: "8px !important",
  },
  nodeTitle: {
    fontSize: "0.8rem !important",
    color: "white !important",
    textAlign: "center !important",
    fontWeight: "600 !important",
    lineHeight: "1.2 !important",
  },
  nodeContent: {
    position: "absolute",
    top: "200px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "300px",
    padding: "20px",
    background: "rgba(0, 0, 0, 0.9)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    border: "1px solid rgba(0, 212, 255, 0.3)",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.4s ease",
    zIndex: 20,
    "@media (max-width: 768px)": {
      width: "280px",
      top: "190px",
    },
  },
  contentTitle: {
    fontSize: "1.2rem !important",
    fontWeight: "700 !important",
    color: "#00d4ff !important",
    marginBottom: "12px !important",
  },
  contentDescription: {
    fontSize: "0.9rem !important",
    color: "rgba(255, 255, 255, 0.9) !important",
    lineHeight: "1.5 !important",
    marginBottom: "16px !important",
  },
  skillChips: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  },
  skillChip: {
    backgroundColor: "rgba(0, 212, 255, 0.2) !important",
    color: "#00d4ff !important",
    fontSize: "0.75rem !important",
    height: "24px !important",
    border: "1px solid rgba(0, 212, 255, 0.4)",
  },
  stars: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  star: {
    position: "absolute",
    width: "2px",
    height: "2px",
    background: "white",
    borderRadius: "50%",
    animation: "$twinkle 3s ease-in-out infinite",
  },
  rocketContainer: {
    position: "absolute",
    zIndex: 8,
    transition: "all 2s ease-in-out",
  },
  rocket: {
    fontSize: "30px !important",
    color: "#ff0080 !important",
    filter: "drop-shadow(0 0 10px #ff0080)",
    animation: "$rocketFloat 3s ease-in-out infinite",
  },
  launchButton: {
    position: "fixed",
    bottom: "40px",
    right: "40px",
    width: "80px !important",
    height: "80px !important",
    borderRadius: "50% !important",
    background: "conic-gradient(from 0deg, #00d4ff, #ff0080, #ffeb3b, #00d4ff) !important",
    border: "none !important",
    zIndex: 100,
    animation: "$pulse 2s infinite",
    "&:hover": {
      transform: "scale(1.1)",
    },
    "@media (max-width: 768px)": {
      bottom: "20px",
      right: "20px",
      width: "60px !important",
      height: "60px !important",
    },
  },
  launchIcon: {
    color: "white !important",
    fontSize: "2rem !important",
  },
  statsOrbit: {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "400px",
    height: "200px",
    "@media (max-width: 768px)": {
      width: "300px",
    },
  },
  statPlanet: {
    position: "absolute",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255, 235, 59, 0.8) 0%, rgba(255, 152, 0, 0.4) 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    animation: "$orbit 15s linear infinite",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255, 235, 59, 0.5)",
    "@media (max-width: 768px)": {
      width: "60px",
      height: "60px",
    },
  },
  statNumber: {
    fontSize: "1.2rem !important",
    fontWeight: "900 !important",
    color: "white !important",
    "@media (max-width: 768px)": {
      fontSize: "1rem !important",
    },
  },
  statLabel: {
    fontSize: "0.6rem !important",
    color: "white !important",
    textAlign: "center !important",
    "@media (max-width: 768px)": {
      fontSize: "0.5rem !important",
    },
  },
  "@keyframes glow": {
    "0%": {
      textShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
    },
    "100%": {
      textShadow: "0 0 40px rgba(255, 0, 128, 0.8), 0 0 60px rgba(255, 235, 59, 0.6)",
    },
  },
  "@keyframes drawPath": {
    "to": {
      strokeDashoffset: "0",
    },
  },
  "@keyframes rotate": {
    "from": {
      transform: "rotate(0deg)",
    },
    "to": {
      transform: "rotate(360deg)",
    },
  },
  "@keyframes twinkle": {
    "0%, 100%": {
      opacity: 0.3,
      transform: "scale(1)",
    },
    "50%": {
      opacity: 1,
      transform: "scale(1.5)",
    },
  },
  "@keyframes rocketFloat": {
    "0%, 100%": {
      transform: "translateY(0) rotate(-15deg)",
    },
    "50%": {
      transform: "translateY(-20px) rotate(-10deg)",
    },
  },
  "@keyframes pulse": {
    "0%": {
      boxShadow: "0 0 0 0 rgba(0, 212, 255, 0.7)",
    },
    "70%": {
      boxShadow: "0 0 0 30px rgba(0, 212, 255, 0)",
    },
    "100%": {
      boxShadow: "0 0 0 0 rgba(0, 212, 255, 0)",
    },
  },
  "@keyframes orbit": {
    "0%": {
      transform: "rotate(0deg) translateX(150px) rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(150px) rotate(-360deg)",
    },
  },
});

const LearningBreakdown = () => {
  const classes = useStyles();
  const [activePhase, setActivePhase] = useState(0);
  const [rocketPosition, setRocketPosition] = useState({ x: 50, y: 50 });
  const rocketRef = useRef(null);

  const phases = [
    {
      number: "01",
      title: "Foundation Launch",
      months: "Months 1-3",
      description: "Master the fundamentals of programming with hands-on coding challenges and collaborative projects that build your confidence.",
      skills: ["Programming Basics", "Problem Solving", "Git & GitHub", "Team Collaboration"],
      position: { top: "10%", left: "15%" },
    },
    {
      number: "02", 
      title: "Skill Specialization",
      months: "Months 4-6",
      description: "Choose your path and dive deep into specialized technologies while building real-world applications.",
      skills: ["Full Stack/Data Science", "Framework Mastery", "Database Design", "API Development"],
      position: { top: "30%", right: "10%" },
    },
    {
      number: "03",
      title: "Product Creation",
      months: "Months 7-9", 
      description: "Transform into a product builder by creating complete applications with cross-functional teams.",
      skills: ["Product Development", "User Experience", "Deployment", "Team Leadership"],
      position: { bottom: "35%", right: "20%" },
    },
    {
      number: "04",
      title: "Career Ignition",
      months: "Months 10-12",
      description: "Launch your tech career with industry connections, interview preparation, and direct job placement support.",
      skills: ["Job Preparation", "Technical Interviews", "Industry Networking", "Career Growth"],
      position: { bottom: "10%", left: "25%" },
    },
  ];

  const stats = [
    { number: "12", label: "Months", delay: "0s" },
    { number: "90%", label: "Placement", delay: "5s" },
    { number: "500+", label: "Alumni", delay: "10s" },
  ];

  useEffect(() => {
    // Create stars
    const stars = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
      });
    }
    setStars(stars);

    // Animate rocket along path
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const [stars, setStars] = useState([]);

  const handleLaunchJourney = () => {
    // Smooth scroll to top or navigate to enrollment
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box className={classes.section}>
      {/* Animated Stars Background */}
      <Box className={classes.stars}>
        {stars.map((star) => (
          <Box
            key={star.id}
            className={classes.star}
            sx={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            The Journey to Tech Mastery
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Navigate through four transformative phases designed to launch your tech career into orbit
          </Typography>
        </Box>

        <Box className={classes.journeyContainer}>
          {/* Animated Path SVG */}
          <svg className={classes.pathSvg} viewBox="0 0 1000 800">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="33%" stopColor="#ff0080" />
                <stop offset="66%" stopColor="#ffeb3b" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
            </defs>
            <path
              className={classes.journeyPath}
              d="M150,100 Q400,50 650,200 T800,350 Q900,500 700,650 T250,700"
            />
          </svg>

          {/* Phase Nodes */}
          {phases.map((phase, index) => (
            <Box
              key={index}
              className={classes.phaseNode}
              sx={{
                ...phase.position,
                animationDelay: `${index * 0.5}s`,
              }}
              onMouseEnter={() => setActivePhase(index)}
            >
              <Box className={classes.nodeCore}>
                <Box className={classes.nodeInner}>
                  <Typography className={classes.nodeNumber}>
                    {phase.number}
                  </Typography>
                  <Typography className={classes.nodeTitle}>
                    {phase.title}
                  </Typography>
                </Box>
              </Box>

              <Box className={classes.nodeContent}>
                <Typography className={classes.contentTitle}>
                  {phase.title} • {phase.months}
                </Typography>
                <Typography className={classes.contentDescription}>
                  {phase.description}
                </Typography>
                <Box className={classes.skillChips}>
                  {phase.skills.map((skill, idx) => (
                    <Chip
                      key={idx}
                      label={skill}
                      className={classes.skillChip}
                      size="small"
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          ))}

          {/* Animated Rocket */}
          <Box
            ref={rocketRef}
            className={classes.rocketContainer}
            sx={{
              left: `${phases[activePhase]?.position.left || phases[activePhase]?.position.right}`,
              top: phases[activePhase]?.position.top || 'auto',
              bottom: phases[activePhase]?.position.bottom || 'auto',
              right: phases[activePhase]?.position.right ? '0' : 'auto',
            }}
          >
            <RocketLaunchIcon className={classes.rocket} />
          </Box>

          {/* Orbiting Stats */}
          <Box className={classes.statsOrbit}>
            {stats.map((stat, index) => (
              <Box
                key={index}
                className={classes.statPlanet}
                sx={{
                  animationDelay: stat.delay,
                  animationDuration: `${15 + index * 2}s`,
                }}
              >
                <Typography className={classes.statNumber}>
                  {stat.number}
                </Typography>
                <Typography className={classes.statLabel}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Launch Button */}
        <Button
          className={classes.launchButton}
          onClick={handleLaunchJourney}
          aria-label="Launch Your Journey"
        >
          <AutoAwesomeIcon className={classes.launchIcon} />
        </Button>
      </Container>
    </Box>
  );
};

export default LearningBreakdown;