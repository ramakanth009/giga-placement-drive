import React, { useEffect, useState } from "react";
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
    padding: "30px 0",
    position: "relative",
    background: "radial-gradient(ellipse at center, #0a0a1f 0%, #000000 70%)",
    overflow: "hidden",
    minHeight: "65vh",
  },
  container: {
    position: "relative",
    zIndex: 10,
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  title: {
    fontSize: "2.5rem !important", // Increased from 2rem
    fontWeight: "900 !important",
    background: "linear-gradient(45deg, #00d4ff 0%, #ff0080 50%, #ffeb3b 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "15px !important",
    animation: "$glow 3s ease-in-out infinite alternate",
    "@media (max-width: 960px)": {
      fontSize: "3rem !important", // Increased from 2.5rem
    },
    "@media (max-width: 600px)": {
      fontSize: "2.5rem !important", // Increased from 2rem
    },
  },
  subtitle: {
    fontSize: "1.2rem !important", // Increased from 1rem
    color: "rgba(255, 255, 255, 0.8) !important",
    maxWidth: "1000px",
    margin: "0 auto 60px auto !important",
  },
  solarSystem: {
    position: "relative",
    width: "500px", // Increased from 400px
    height: "500px", // Increased from 400px
    margin: "20px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sun: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "120px", // Increased from 80px
    height: "120px", // Increased from 80px
    borderRadius: "50%",
    background: "conic-gradient(from 0deg, #ffeb3b, #ff9800, #ff5722, #ffeb3b)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // animation: "$sunPulse 4s ease-in-out infinite, $rotate 30s linear infinite",
    boxShadow: "0 0 100px rgba(255, 235, 59, 0.8), inset 0 0 50px rgba(255, 152, 0, 0.6)",
    zIndex: 10,
    "@media (max-width: 700px)": {
      width: "120px", // Increased from 100px
      height: "120px", // Increased from 100px
    },
  },
  sunContent: {
    textAlign: "center",
    zIndex: 2,
    position: "relative",
  },
  sunTitle: {
    fontSize: "1.2rem !important", // Increased from 1rem
    fontWeight: "900 !important",
    color: "white !important",
    textShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
    "@media (max-width: 700px)": {
      fontSize: "1.2rem !important", // Increased from 1rem
    },
  },
  sunSubtitle: {
    fontSize: "0.85rem !important", // Increased from 0.7rem
    color: "rgba(255, 255, 255, 0.9) !important",
    marginTop: "5px !important",
    "@media (max-width: 700px)": {
      fontSize: "0.85rem !important", // Increased from 0.7rem
    },
  },
  orbit: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    border: "2px solid rgba(0, 212, 255, 0.3)",
    animation: "$orbitRotate 20s linear infinite",
  },
  orbit1: {
    width: "250px", // Increased from 160px
    height: "250px", // Increased from 160px
  },
  orbit2: {
    width: "330px", // Increased from 230px
    height: "330px", // Increased from 230px
  },
  orbit3: {
    width: "420px", // Increased from 300px
    height: "420px", // Increased from 300px
  },
  orbit4: {
    width: "500px", // Increased from 370px
    height: "500px", // Increased from 370px
  },
  planet: {
    position: "absolute",
    width: "70px", // Increased from 60px
    height: "70px", // Increased from 60px
    cursor: "pointer",
    zIndex: 5,
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    animation: "$counterRotate 20s linear infinite",
    "&:hover": {
      transform: "scale(1.1)",
      zIndex: 999,
      "& $planetCore": {
        boxShadow: "0 0 80px rgba(0, 212, 255, 0.8), 0 0 120px rgba(255, 0, 128, 0.6)",
      },
      "& $planetContent": {
        opacity: 1,
        visibility: "visible",
        transform: "translate(-50%, -50%) scale(1)",
      },
    },
    "@media (max-width: 700px)": {
      width: "70px", // Increased from 60px
      height: "70px", // Increased from 60px
    },
  },
  planet1: {
    top: "-6%",
    left: "50%",
    transform: "translateX(-50%)",
    animationDuration: "15s",
  },
  planet2: {
    top: "50%",
    right: "1%",
    transform: "translateY(-50%)",
    animationDuration: "25s",
  },
  planet3: {
    bottom: "12%",
    left: "50%",
    transform: "translateX(-50%)",
    animationDuration: "35s",
  },
  planet4: {
    top: "50%",
    left: "20%",
    transform: "translateY(-50%)",
    animationDuration: "45s",
  },
  planetCore: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    background: "conic-gradient(from 0deg, #00d4ff, #ff0080, #ffeb3b, #00d4ff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    transition: "all 0.6s ease",
    // animation: "$planetSpin 10s linear infinite",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: "3px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(10, 10, 31, 0.95) 0%, rgba(0, 0, 0, 0.9) 100%)",
      zIndex: 1,
    },
  },
  planetInner: {
    position: "relative",
    zIndex: 2,
    width: "50px", // Increased from 40px
    height: "50px", // Increased from 40px
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    "@media (max-width: 700px)": {
      width: "50px", // Increased from 40px
      height: "50px", // Increased from 40px
    },
  },
  planetNumber: {
    fontSize: "1.2rem !important", // Increased from 1rem
    fontWeight: "900 !important",
    color: "#00d4ff !important",
    marginBottom: "4px !important",
    "@media (max-width: 700px)": {
      fontSize: "1.2rem !important", // Increased from 1rem
    },
  },
  planetTitle: {
    fontSize: "0.6rem !important", // Increased from 0.5rem
    color: "white !important",
    textAlign: "center !important",
    fontWeight: "600 !important",
    lineHeight: "1.1 !important",
    "@media (max-width: 700px)": {
      fontSize: "0.6rem !important", // Increased from 0.5rem
    },
  },
  planetContent: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0.8)",
    width: "250px", // Increased from 200px
    padding: "15px",
    background: "rgba(0, 0, 0, 0.95)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    border: "1px solid rgba(0, 212, 255, 0.4)",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    zIndex: 999,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.8)",
    pointerEvents: "none",
  },
  contentTitle: {
    fontSize: "1.2rem !important", // Increased from 1rem
    fontWeight: "700 !important",
    color: "#00d4ff !important",
    marginBottom: "8px !important",
  },
  contentMonths: {
    fontSize: "0.9rem !important", // Increased from 0.75rem
    color: "#ff0080 !important",
    fontWeight: "600 !important",
    marginBottom: "12px !important",
  },
  contentDescription: {
    fontSize: "0.9rem !important", // Increased from 0.8rem
    color: "rgba(255, 255, 255, 0.9) !important",
    lineHeight: "1.6 !important",
    marginBottom: "16px !important",
  },
  skillChips: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  skillChip: {
    backgroundColor: "rgba(0, 212, 255, 0.2) !important",
    color: "#00d4ff !important",
    fontSize: "0.85rem !important", // Increased from 0.75rem
    height: "32px !important", // Increased from 28px
    border: "1px solid rgba(0, 212, 255, 0.4)",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(0, 212, 255, 0.3) !important",
      transform: "translateY(-2px)",
    },
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
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 12,
    animation: "$rocketOrbit 20s linear infinite",
  },
  rocket: {
    fontSize: "24px !important",
    color: "#ff0080 !important",
    filter: "drop-shadow(0 0 15px #ff0080)",
    animation: "$rocketFloat 3s ease-in-out infinite",
  },
  "@media (max-width: 768px)": {
    bottom: "20px",
    right: "20px",
    width: "60px !important",
    height: "60px !important",
  },
  "@keyframes glow": {
    "0%": {
      textShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
    },
    "100%": {
      textShadow: "0 0 40px rgba(255, 0, 128, 0.8), 0 0 60px rgba(255, 235, 59, 0.6)",
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
  "@keyframes orbitRotate": {
    "from": {
      transform: "translate(-50%, -50%) rotate(0deg)",
    },
    "to": {
      transform: "translate(-50%, -50%) rotate(360deg)",
    },
  },
  "@keyframes counterRotate": {
    "from": {
      transform: "rotate(0deg)",
    },
    "to": {
      transform: "rotate(-360deg)",
    },
  },
  "@keyframes planetSpin": {
    "from": {
      transform: "rotate(0deg)",
    },
    "to": {
      transform: "rotate(360deg)",
    },
  },
  "@keyframes sunPulse": {
    "0%, 100%": {
      boxShadow: "0 0 100px rgba(255, 235, 59, 0.8), inset 0 0 50px rgba(255, 152, 0, 0.6)",
    },
    "50%": {
      boxShadow: "0 0 150px rgba(255, 235, 59, 1), inset 0 0 80px rgba(255, 152, 0, 0.8)",
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
      transform: "translateY(-15px) rotate(-10deg)",
    },
  },
  "@keyframes rocketOrbit": {
    "0%": {
      transform: "translate(-50%, -50%) rotate(0deg) translateX(180px) rotate(0deg)",
    },
    "100%": {
      transform: "translate(-50%, -50%) rotate(360deg) translateX(180px) rotate(-360deg)",
    },
  },
  "@keyframes statFloat": {
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-10px)",
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
});

const LearningBreakdown = () => {
  const classes = useStyles();
  const [activePhase, setActivePhase] = useState(0);
  const [stars, setStars] = useState([]);

  const phases = [
    {
      number: "01",
      title: "Foundation Launch",
      months: "Months 1-3",
      description: "Master the fundamentals of programming with hands-on coding challenges and collaborative projects that build your confidence.",
      skills: ["Programming Basics", "Problem Solving", "Git & GitHub", "Team Collaboration"],
    },
    {
      number: "02", 
      title: "Skill Specialization",
      months: "Months 4-6",
      description: "Choose your path and dive deep into specialized technologies while building real-world applications.",
      skills: ["Full Stack/Data Science", "Framework Mastery", "Database Design", "API Development"],
    },
    {
      number: "03",
      title: "Product Creation",
      months: "Months 7-9", 
      description: "Transform into a product builder by creating complete applications with cross-functional teams.",
      skills: ["Product Development", "User Experience", "Deployment", "Team Leadership"],
    },
    {
      number: "04",
      title: "Career Ignition",
      months: "Months 10-12",
      description: "Launch your tech career with industry connections, interview preparation, and direct job placement support.",
      skills: ["Job Preparation", "Technical Interviews", "Industry Networking", "Career Growth"],
    },
  ];

  useEffect(() => {
    // Create stars
    const starArray = [];
    for (let i = 0; i < 150; i++) {
      starArray.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        size: Math.random() > 0.8 ? "3px" : "2px",
      });
    }
    setStars(starArray);
  }, []);

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
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            The Solar System of Learning
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Navigate through our structured learning orbits designed to launch your tech career into the cosmos
          </Typography>
        </Box>

        <Box className={classes.solarSystem}>
          {/* Sun - Central Hub */}
          <Box className={classes.sun}>
            <Box className={classes.sunContent}>
              <Typography className={classes.sunTitle}>
                Tech Mastery
              </Typography>
              <Typography className={classes.sunSubtitle}>
                Core Learning Hub
              </Typography>
            </Box>
          </Box>

          {/* Orbital Rings */}
          <Box className={`${classes.orbit} ${classes.orbit1}`} />
          <Box className={`${classes.orbit} ${classes.orbit2}`} />
          <Box className={`${classes.orbit} ${classes.orbit3}`} />
          <Box className={`${classes.orbit} ${classes.orbit4}`} />

          {/* Planets - Learning Phases */}
          {phases.map((phase, index) => (
            <Box
              key={index}
              className={`${classes.planet} ${classes[`planet${index + 1}`]}`}
              onMouseEnter={() => setActivePhase(index)}
              style={{
                animation: `counterRotate ${15 + index * 10}s linear infinite`,
              }}
            >
              <Box className={classes.planetCore}>
                <Box className={classes.planetInner}>
                  <Typography className={classes.planetNumber}>
                    {phase.number}
                  </Typography>
                  <Typography className={classes.planetTitle}>
                    {phase.title}
                  </Typography>
                </Box>
              </Box>

              <Box className={classes.planetContent}>
                <Typography className={classes.contentTitle}>
                  {phase.title}
                </Typography>
                <Typography className={classes.contentMonths}>
                  {phase.months}
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
          <Box className={classes.rocketContainer}>
            <RocketLaunchIcon className={classes.rocket} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LearningBreakdown;