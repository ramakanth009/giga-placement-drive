import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const useStyles = makeStyles({
  section: {
    padding: "80px 0",
    position: "relative",
    background: "linear-gradient(135deg, #f8fafc 0%, #eef4ff 100%)",
    overflow: "hidden",
    "@media (max-width: 960px)": {
      padding: "60px 0",
    },
    "@media (max-width: 600px)": {
      padding: "40px 0",
    },
  },
  container: {
    position: "relative",
    zIndex: 3,
  },
  header: {
    textAlign: "center",
    marginBottom: "80px",
    "@media (max-width: 600px)": {
      marginBottom: "50px",
    },
  },
  title: {
    fontSize: "3rem !important",
    fontWeight: "700 !important",
    color: "#1e293b !important",
    marginBottom: "20px !important",
    background: "linear-gradient(135deg, #2A2B6A 0%, #4338ca 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    "@media (max-width: 960px)": {
      fontSize: "2.5rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "2rem !important",
    },
  },
  subtitle: {
    fontSize: "1.2rem !important",
    color: "#64748b !important",
    maxWidth: "600px",
    margin: "0 auto !important",
    "@media (max-width: 600px)": {
      fontSize: "1rem !important",
      maxWidth: "90%",
    },
  },
  timelineContainer: {
    position: "relative",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  timelineLine: {
    position: "absolute",
    left: "50%",
    top: "0",
    bottom: "0",
    width: "4px",
    background:
      "linear-gradient(180deg, #2A2B6A 0%, #4338ca 50%, #FFC614 100%)",
    borderRadius: "2px",
    transform: "translateX(-50%)",
    "@media (max-width: 768px)": {
      left: "30px",
      transform: "none",
    },
  },
  timelineItem: {
    position: "relative",
    marginBottom: "60px",
    "&:last-child": {
      marginBottom: "0",
    },
    "@media (max-width: 768px)": {
      marginBottom: "40px",
    },
  },
  timelineItemLeft: {
    paddingRight: "60px",
    textAlign: "right",
    "@media (max-width: 768px)": {
      paddingRight: "0",
      paddingLeft: "80px",
      textAlign: "left",
    },
  },
  timelineItemRight: {
    paddingLeft: "60px",
    textAlign: "left",
    "@media (max-width: 768px)": {
      paddingLeft: "80px",
    },
  },
  phaseCard: {
    padding: "30px",
    borderRadius: "20px !important",
    backgroundColor: "white !important",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08) !important",
    border: "1px solid rgba(148, 163, 184, 0.1)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      transform: "translateY(-8px) scale(1.02)",
      boxShadow: "0 25px 50px rgba(42, 43, 106, 0.15) !important",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      height: "4px",
      background: "linear-gradient(90deg, #2A2B6A 0%, #FFC614 100%)",
    },
    "@media (max-width: 768px)": {
      padding: "24px",
      borderRadius: "16px !important",
    },
  },
  phaseNumber: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2A2B6A 0%, #4338ca 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2rem",
    boxShadow: "0 8px 20px rgba(42, 43, 106, 0.3)",
    border: "4px solid white",
    zIndex: 2,
    "@media (max-width: 768px)": {
      left: "5px",
      width: "40px",
      height: "40px",
      fontSize: "1rem",
    },
  },
  phaseNumberLeft: {
    right: "-85px",
    "@media (max-width: 768px)": {
      right: "auto",
      left: "5px",
    },
  },
  phaseNumberRight: {
    left: "-85px",
    "@media (max-width: 768px)": {
      left: "5px",
    },
  },
  phaseHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    "@media (max-width: 768px)": {
      marginBottom: "16px",
    },
  },
  phaseHeaderLeft: {
    justifyContent: "flex-end",
    "@media (max-width: 768px)": {
      justifyContent: "flex-start",
    },
  },
  phaseHeaderRight: {
    justifyContent: "flex-start",
  },
  iconContainer: {
    width: "60px",
    height: "60px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "20px",
    transition: "all 0.3s ease",
    "@media (max-width: 768px)": {
      width: "50px",
      height: "50px",
      marginRight: "16px",
    },
  },
  iconContainerLeft: {
    order: 2,
    marginRight: "0",
    marginLeft: "20px",
    "@media (max-width: 768px)": {
      order: 0,
      marginLeft: "0",
      marginRight: "16px",
    },
  },
  phaseIcon: {
    fontSize: "28px !important",
    color: "white",
    "@media (max-width: 768px)": {
      fontSize: "24px !important",
    },
  },
  phaseHeaderText: {
    flex: 1,
  },
  phaseHeaderTextLeft: {
    order: 1,
    textAlign: "right",
    "@media (max-width: 768px)": {
      order: 1,
      textAlign: "left",
    },
  },
  phaseTitle: {
    fontSize: "1.5rem !important",
    fontWeight: "700 !important",
    color: "#1e293b !important",
    marginBottom: "8px !important",
    "@media (max-width: 768px)": {
      fontSize: "1.3rem !important",
    },
  },
  phaseMonths: {
    fontSize: "1rem !important",
    fontWeight: "600 !important",
    color: "#2A2B6A !important",
    "@media (max-width: 768px)": {
      fontSize: "0.9rem !important",
    },
  },
  phaseDescription: {
    fontSize: "1rem !important",
    color: "#64748b !important",
    lineHeight: "1.7 !important",
    "@media (max-width: 768px)": {
      fontSize: "0.95rem !important",
      lineHeight: "1.6 !important",
    },
  },
  decorativeBlob: {
    position: "absolute",
    borderRadius: "50%",
    opacity: 0.1,
    zIndex: 1,
  },
  blob1: {
    width: "300px",
    height: "300px",
    background: "linear-gradient(135deg, #2A2B6A 0%, #4338ca 100%)",
    top: "100px",
    right: "-150px",
    animation: "$float 8s ease-in-out infinite",
  },
  blob2: {
    width: "250px",
    height: "250px",
    background: "linear-gradient(135deg, #FFC614 0%, #f59e0b 100%)",
    bottom: "100px",
    left: "-125px",
    animation: "$float 8s ease-in-out infinite 4s",
  },
  "@keyframes float": {
    "0%, 100%": {
      transform: "translateY(0) rotate(0deg)",
    },
    "50%": {
      transform: "translateY(-20px) rotate(10deg)",
    },
  },
  phaseIconColors: {
    0: {
      bg: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    },
    1: {
      bg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    },
    2: {
      bg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    },
    3: {
      bg: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    },
  },
});

const LearningBreakdown = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:768px)");
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll("[data-timeline-item]");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const phases = [
    {
      number: 1,
      title: "Foundation Phase",
      months: "Months 1–3",
      description:
        "Develop essential core skills through practical tasks and focused coding exercises. This phase is designed to build a strong technical foundation. Upon completion, you will undertake an L1 assessment to determine the most suitable technology specialization aligned with your strengths and interests.",
      icon: <SchoolIcon className={classes.phaseIcon} />,
    },
    {
      number: 2,
      title: "Specialization Phase",
      months: "Months 4–6",
      description:
        "Focus on learning more about the chosen area by working on real product features and specific tasks. This phase helps build practical skills and starts creating a professional portfolio. It also includes preparation for the L2 assessment to move forward.",
      icon: <BuildIcon className={classes.phaseIcon} />,
    },
    {
      number: 3,
      title: "Product Building Phase",
      months: "Month 7–9",
      description:
        "Collaborate in teams to develop complete tech products, working through all stages—from MVP to deployment. Gain practical experience by building real-world solutions and explore opportunities to pitch and scale startup ideas with funding support.",
      icon: <CodeIcon className={classes.phaseIcon} />,
    },
    {
      number: 4,
      title: "Career Launch Phase",
      months: "Months 10–12",
      description:
        "Gigaversity hosts monthly networking events where founders, professors, investors, and learners connect to pitch ideas, launch products, and share inspiring journeys and innovations.",
      icon: <RocketLaunchIcon className={classes.phaseIcon} />,
    },
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.decorativeBlob} sx={classes.blob1} />
      <Box className={classes.decorativeBlob} sx={classes.blob2} />

      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            Explore the Gigaversity Learning Journey
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            A thoughtfully structured journey that transforms you from a
            beginner to an industry-ready professional.
          </Typography>
        </Box>

        <Box className={classes.timelineContainer}>
          <Box className={classes.timelineLine} />

          {phases.map((phase, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visibleItems.includes(index);

            return (
              <Box
                key={index}
                className={`${classes.timelineItem} ${
                  isLeft ? classes.timelineItemLeft : classes.timelineItemRight
                }`}
                data-timeline-item
                data-index={index}
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateX(0)"
                    : `translateX(${isLeft && !isMobile ? "-50px" : "50px"})`,
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDelay: `${index * 0.2}s`,
                }}
              >
                <Paper className={classes.phaseCard} elevation={0}>
                  <Box
                    className={`${classes.phaseNumber} ${
                      isLeft
                        ? classes.phaseNumberLeft
                        : classes.phaseNumberRight
                    }`}
                  >
                    {phase.number}
                  </Box>

                  <Box
                    className={`${classes.phaseHeader} ${
                      isLeft
                        ? classes.phaseHeaderLeft
                        : classes.phaseHeaderRight
                    }`}
                  >
                    <Box
                      className={`${classes.iconContainer} ${
                        isLeft ? classes.iconContainerLeft : ""
                      }`}
                      sx={{
                        background: classes.phaseIconColors[index].bg,
                      }}
                    >
                      {phase.icon}
                    </Box>

                    <Box
                      className={`${classes.phaseHeaderText} ${
                        isLeft ? classes.phaseHeaderTextLeft : ""
                      }`}
                    >
                      <Typography className={classes.phaseTitle}>
                        {phase.title}
                      </Typography>
                      <Typography className={classes.phaseMonths}>
                        {phase.months}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography className={classes.phaseDescription}>
                    {phase.description}
                  </Typography>
                </Paper>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default LearningBreakdown;

// import React, { useEffect, useState, useRef } from "react";
// import {
//   Box,
//   Typography,
//   Container,
//   Button,
//   Chip,
// } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

// const useStyles = makeStyles({
//   section: {
//     padding: "120px 0",
//     position: "relative",
//     background: "radial-gradient(ellipse at center, #0a0a1f 0%, #000000 70%)",
//     overflow: "hidden",
//     minHeight: "100vh",
//   },
//   container: {
//     position: "relative",
//     zIndex: 10,
//   },
//   header: {
//     textAlign: "center",
//     marginBottom: "60px",
//   },
//   title: {
//     fontSize: "4rem !important",
//     fontWeight: "900 !important",
//     background: "linear-gradient(45deg, #00d4ff 0%, #ff0080 50%, #ffeb3b 100%)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     backgroundClip: "text",
//     marginBottom: "20px !important",
//     animation: "$glow 3s ease-in-out infinite alternate",
//     "@media (max-width: 960px)": {
//       fontSize: "3rem !important",
//     },
//     "@media (max-width: 600px)": {
//       fontSize: "2.5rem !important",
//     },
//   },
//   subtitle: {
//     fontSize: "1.4rem !important",
//     color: "rgba(255, 255, 255, 0.8) !important",
//     maxWidth: "800px",
//     margin: "0 auto !important",
//   },
//   journeyContainer: {
//     position: "relative",
//     height: "800px",
//     margin: "80px auto",
//     maxWidth: "1000px",
//     "@media (max-width: 768px)": {
//       height: "1200px",
//     },
//   },
//   pathSvg: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     zIndex: 1,
//   },
//   journeyPath: {
//     fill: "none",
//     stroke: "url(#pathGradient)",
//     strokeWidth: "4",
//     strokeDasharray: "2000",
//     strokeDashoffset: "2000",
//     animation: "$drawPath 4s ease-in-out forwards",
//   },
//   phaseNode: {
//     position: "absolute",
//     width: "180px",
//     height: "180px",
//     cursor: "pointer",
//     zIndex: 5,
//     transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
//     "&:hover": {
//       transform: "scale(1.2)",
//       zIndex: 10,
//       "& $nodeCore": {
//         boxShadow: "0 0 80px rgba(0, 212, 255, 0.8), 0 0 120px rgba(255, 0, 128, 0.6)",
//         transform: "scale(1.1)",
//       },
//       "& $nodeContent": {
//         opacity: 1,
//         visibility: "visible",
//       },
//     },
//   },
//   nodeCore: {
//     width: "100%",
//     height: "100%",
//     borderRadius: "50%",
//     background: "conic-gradient(from 0deg, #00d4ff, #ff0080, #ffeb3b, #00d4ff)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//     transition: "all 0.6s ease",
//     animation: "$rotate 20s linear infinite",
//     "&::before": {
//       content: '""',
//       position: "absolute",
//       inset: "3px",
//       borderRadius: "50%",
//       background: "radial-gradient(circle, rgba(10, 10, 31, 0.95) 0%, rgba(0, 0, 0, 0.9) 100%)",
//       zIndex: 1,
//     },
//   },
//   nodeInner: {
//     position: "relative",
//     zIndex: 2,
//     width: "120px",
//     height: "120px",
//     borderRadius: "50%",
//     background: "rgba(255, 255, 255, 0.05)",
//     backdropFilter: "blur(20px)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     border: "1px solid rgba(255, 255, 255, 0.2)",
//   },
//   nodeNumber: {
//     fontSize: "2rem !important",
//     fontWeight: "900 !important",
//     color: "#00d4ff !important",
//     marginBottom: "8px !important",
//   },
//   nodeTitle: {
//     fontSize: "0.8rem !important",
//     color: "white !important",
//     textAlign: "center !important",
//     fontWeight: "600 !important",
//     lineHeight: "1.2 !important",
//   },
//   nodeContent: {
//     position: "absolute",
//     top: "200px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     width: "300px",
//     padding: "20px",
//     background: "rgba(0, 0, 0, 0.9)",
//     backdropFilter: "blur(20px)",
//     borderRadius: "20px",
//     border: "1px solid rgba(0, 212, 255, 0.3)",
//     opacity: 0,
//     visibility: "hidden",
//     transition: "all 0.4s ease",
//     zIndex: 20,
//     "@media (max-width: 768px)": {
//       width: "280px",
//       top: "190px",
//     },
//   },
//   contentTitle: {
//     fontSize: "1.2rem !important",
//     fontWeight: "700 !important",
//     color: "#00d4ff !important",
//     marginBottom: "12px !important",
//   },
//   contentDescription: {
//     fontSize: "0.9rem !important",
//     color: "rgba(255, 255, 255, 0.9) !important",
//     lineHeight: "1.5 !important",
//     marginBottom: "16px !important",
//   },
//   skillChips: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "6px",
//   },
//   skillChip: {
//     backgroundColor: "rgba(0, 212, 255, 0.2) !important",
//     color: "#00d4ff !important",
//     fontSize: "0.75rem !important",
//     height: "24px !important",
//     border: "1px solid rgba(0, 212, 255, 0.4)",
//   },
//   stars: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     top: 0,
//     left: 0,
//     zIndex: 0,
//   },
//   star: {
//     position: "absolute",
//     width: "2px",
//     height: "2px",
//     background: "white",
//     borderRadius: "50%",
//     animation: "$twinkle 3s ease-in-out infinite",
//   },
//   rocketContainer: {
//     position: "absolute",
//     zIndex: 8,
//     transition: "all 2s ease-in-out",
//   },
//   rocket: {
//     fontSize: "30px !important",
//     color: "#ff0080 !important",
//     filter: "drop-shadow(0 0 10px #ff0080)",
//     animation: "$rocketFloat 3s ease-in-out infinite",
//   },
//   launchButton: {
//     position: "fixed",
//     bottom: "40px",
//     right: "40px",
//     width: "80px !important",
//     height: "80px !important",
//     borderRadius: "50% !important",
//     background: "conic-gradient(from 0deg, #00d4ff, #ff0080, #ffeb3b, #00d4ff) !important",
//     border: "none !important",
//     zIndex: 100,
//     animation: "$pulse 2s infinite",
//     "&:hover": {
//       transform: "scale(1.1)",
//     },
//     "@media (max-width: 768px)": {
//       bottom: "20px",
//       right: "20px",
//       width: "60px !important",
//       height: "60px !important",
//     },
//   },
//   launchIcon: {
//     color: "white !important",
//     fontSize: "2rem !important",
//   },
//   statsOrbit: {
//     position: "absolute",
//     bottom: "0",
//     left: "50%",
//     transform: "translateX(-50%)",
//     width: "400px",
//     height: "200px",
//     "@media (max-width: 768px)": {
//       width: "300px",
//     },
//   },
//   statPlanet: {
//     position: "absolute",
//     width: "80px",
//     height: "80px",
//     borderRadius: "50%",
//     background: "radial-gradient(circle, rgba(255, 235, 59, 0.8) 0%, rgba(255, 152, 0, 0.4) 100%)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     animation: "$orbit 15s linear infinite",
//     backdropFilter: "blur(10px)",
//     border: "2px solid rgba(255, 235, 59, 0.5)",
//     "@media (max-width: 768px)": {
//       width: "60px",
//       height: "60px",
//     },
//   },
//   statNumber: {
//     fontSize: "1.2rem !important",
//     fontWeight: "900 !important",
//     color: "white !important",
//     "@media (max-width: 768px)": {
//       fontSize: "1rem !important",
//     },
//   },
//   statLabel: {
//     fontSize: "0.6rem !important",
//     color: "white !important",
//     textAlign: "center !important",
//     "@media (max-width: 768px)": {
//       fontSize: "0.5rem !important",
//     },
//   },
//   "@keyframes glow": {
//     "0%": {
//       textShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
//     },
//     "100%": {
//       textShadow: "0 0 40px rgba(255, 0, 128, 0.8), 0 0 60px rgba(255, 235, 59, 0.6)",
//     },
//   },
//   "@keyframes drawPath": {
//     "to": {
//       strokeDashoffset: "0",
//     },
//   },
//   "@keyframes rotate": {
//     "from": {
//       transform: "rotate(0deg)",
//     },
//     "to": {
//       transform: "rotate(360deg)",
//     },
//   },
//   "@keyframes twinkle": {
//     "0%, 100%": {
//       opacity: 0.3,
//       transform: "scale(1)",
//     },
//     "50%": {
//       opacity: 1,
//       transform: "scale(1.5)",
//     },
//   },
//   "@keyframes rocketFloat": {
//     "0%, 100%": {
//       transform: "translateY(0) rotate(-15deg)",
//     },
//     "50%": {
//       transform: "translateY(-20px) rotate(-10deg)",
//     },
//   },
//   "@keyframes pulse": {
//     "0%": {
//       boxShadow: "0 0 0 0 rgba(0, 212, 255, 0.7)",
//     },
//     "70%": {
//       boxShadow: "0 0 0 30px rgba(0, 212, 255, 0)",
//     },
//     "100%": {
//       boxShadow: "0 0 0 0 rgba(0, 212, 255, 0)",
//     },
//   },
//   "@keyframes orbit": {
//     "0%": {
//       transform: "rotate(0deg) translateX(150px) rotate(0deg)",
//     },
//     "100%": {
//       transform: "rotate(360deg) translateX(150px) rotate(-360deg)",
//     },
//   },
// });

// const LearningBreakdown = () => {
//   const classes = useStyles();
//   const [activePhase, setActivePhase] = useState(0);
//   const [rocketPosition, setRocketPosition] = useState({ x: 50, y: 50 });
//   const rocketRef = useRef(null);

//   const phases = [
//     {
//       number: "01",
//       title: "Foundation Launch",
//       months: "Months 1-3",
//       description: "Master the fundamentals of programming with hands-on coding challenges and collaborative projects that build your confidence.",
//       skills: ["Programming Basics", "Problem Solving", "Git & GitHub", "Team Collaboration"],
//       position: { top: "10%", left: "15%" },
//     },
//     {
//       number: "02", 
//       title: "Skill Specialization",
//       months: "Months 4-6",
//       description: "Choose your path and dive deep into specialized technologies while building real-world applications.",
//       skills: ["Full Stack/Data Science", "Framework Mastery", "Database Design", "API Development"],
//       position: { top: "30%", right: "10%" },
//     },
//     {
//       number: "03",
//       title: "Product Creation",
//       months: "Months 7-9", 
//       description: "Transform into a product builder by creating complete applications with cross-functional teams.",
//       skills: ["Product Development", "User Experience", "Deployment", "Team Leadership"],
//       position: { bottom: "35%", right: "20%" },
//     },
//     {
//       number: "04",
//       title: "Career Ignition",
//       months: "Months 10-12",
//       description: "Launch your tech career with industry connections, interview preparation, and direct job placement support.",
//       skills: ["Job Preparation", "Technical Interviews", "Industry Networking", "Career Growth"],
//       position: { bottom: "10%", left: "25%" },
//     },
//   ];

//   const stats = [
//     { number: "12", label: "Months", delay: "0s" },
//     { number: "90%", label: "Placement", delay: "5s" },
//     { number: "500+", label: "Alumni", delay: "10s" },
//   ];

//   useEffect(() => {
//     // Create stars
//     const stars = [];
//     for (let i = 0; i < 100; i++) {
//       stars.push({
//         id: i,
//         left: `${Math.random() * 100}%`,
//         top: `${Math.random() * 100}%`,
//         delay: `${Math.random() * 3}s`,
//       });
//     }
//     setStars(stars);

//     // Animate rocket along path
//     const interval = setInterval(() => {
//       setActivePhase((prev) => (prev + 1) % phases.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const [stars, setStars] = useState([]);

//   const handleLaunchJourney = () => {
//     // Smooth scroll to top or navigate to enrollment
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <Box className={classes.section}>
//       {/* Animated Stars Background */}
//       <Box className={classes.stars}>
//         {stars.map((star) => (
//           <Box
//             key={star.id}
//             className={classes.star}
//             sx={{
//               left: star.left,
//               top: star.top,
//               animationDelay: star.delay,
//             }}
//           />
//         ))}
//       </Box>

//       <Container maxWidth="lg" className={classes.container}>
//         <Box className={classes.header}>
//           <Typography variant="h2" className={classes.title}>
//             The Journey to Tech Mastery
//           </Typography>
//           <Typography variant="body1" className={classes.subtitle}>
//             Navigate through four transformative phases designed to launch your tech career into orbit
//           </Typography>
//         </Box>

//         <Box className={classes.journeyContainer}>
//           {/* Animated Path SVG */}
//           <svg className={classes.pathSvg} viewBox="0 0 1000 800">
//             <defs>
//               <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#00d4ff" />
//                 <stop offset="33%" stopColor="#ff0080" />
//                 <stop offset="66%" stopColor="#ffeb3b" />
//                 <stop offset="100%" stopColor="#00d4ff" />
//               </linearGradient>
//             </defs>
//             <path
//               className={classes.journeyPath}
//               d="M150,100 Q400,50 650,200 T800,350 Q900,500 700,650 T250,700"
//             />
//           </svg>

//           {/* Phase Nodes */}
//           {phases.map((phase, index) => (
//             <Box
//               key={index}
//               className={classes.phaseNode}
//               sx={{
//                 ...phase.position,
//                 animationDelay: `${index * 0.5}s`,
//               }}
//               onMouseEnter={() => setActivePhase(index)}
//             >
//               <Box className={classes.nodeCore}>
//                 <Box className={classes.nodeInner}>
//                   <Typography className={classes.nodeNumber}>
//                     {phase.number}
//                   </Typography>
//                   <Typography className={classes.nodeTitle}>
//                     {phase.title}
//                   </Typography>
//                 </Box>
//               </Box>

//               <Box className={classes.nodeContent}>
//                 <Typography className={classes.contentTitle}>
//                   {phase.title} • {phase.months}
//                 </Typography>
//                 <Typography className={classes.contentDescription}>
//                   {phase.description}
//                 </Typography>
//                 <Box className={classes.skillChips}>
//                   {phase.skills.map((skill, idx) => (
//                     <Chip
//                       key={idx}
//                       label={skill}
//                       className={classes.skillChip}
//                       size="small"
//                     />
//                   ))}
//                 </Box>
//               </Box>
//             </Box>
//           ))}

//           {/* Animated Rocket */}
//           <Box
//             ref={rocketRef}
//             className={classes.rocketContainer}
//             sx={{
//               left: `${phases[activePhase]?.position.left || phases[activePhase]?.position.right}`,
//               top: phases[activePhase]?.position.top || 'auto',
//               bottom: phases[activePhase]?.position.bottom || 'auto',
//               right: phases[activePhase]?.position.right ? '0' : 'auto',
//             }}
//           >
//             <RocketLaunchIcon className={classes.rocket} />
//           </Box>

//           {/* Orbiting Stats */}
//           <Box className={classes.statsOrbit}>
//             {stats.map((stat, index) => (
//               <Box
//                 key={index}
//                 className={classes.statPlanet}
//                 sx={{
//                   animationDelay: stat.delay,
//                   animationDuration: `${15 + index * 2}s`,
//                 }}
//               >
//                 <Typography className={classes.statNumber}>
//                   {stat.number}
//                 </Typography>
//                 <Typography className={classes.statLabel}>
//                   {stat.label}
//                 </Typography>
//               </Box>
//             ))}
//           </Box>
//         </Box>

//         {/* Launch Button */}
//         <Button
//           className={classes.launchButton}
//           onClick={handleLaunchJourney}
//           aria-label="Launch Your Journey"
//         >
//           <AutoAwesomeIcon className={classes.launchIcon} />
//         </Button>
//       </Container>
//     </Box>
//   );
// };

// export default LearningBreakdown;