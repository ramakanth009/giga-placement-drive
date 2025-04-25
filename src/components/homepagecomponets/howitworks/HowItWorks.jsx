import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay, Navigation } from 'swiper/modules';
import {
  TouchApp as SelectIcon,
  HowToReg as RegisterIcon,
  Create as BuildIcon,
  Business as ConnectIcon
} from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
    marginBottom: "40px",
    "@media (max-width: 960px)": {
      marginBottom: "30px",
    },
    "@media (max-width: 600px)": {
      marginBottom: "25px",
    },
    "@media (max-width: 480px)": {
      marginBottom: "20px",
    }
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
    "@media (max-width: 960px)": {
      fontSize: "2.5rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "2.2rem !important",
      "&::after": {
        width: "80px",
        height: "3px",
      },
    },
    "@media (max-width: 480px)": {
      fontSize: "1.8rem !important",
      "&::after": {
        width: "60px",
      },
    },
    "@media (max-width: 375px)": {
      fontSize: "1.6rem !important",
    }
  },
  subtitle: {
    fontSize: "1.4rem !important",
    color: "#555 !important",
    maxWidth: "800px",
    margin: "25px auto 0 !important",
    lineHeight: "1.7 !important",
    "@media (max-width: 960px)": {
      fontSize: "1.3rem !important",
      maxWidth: "700px",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.1rem !important",
      maxWidth: "450px",
      lineHeight: "1.5 !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "1rem !important",
      maxWidth: "350px",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.9rem !important",
      lineHeight: "1.4 !important",
    }
  },
  stepsContainer: {
    padding: "0 80px",
    margin: "0 auto",
    position: "relative",
    "@media (max-width: 1200px)": {
      padding: "0 40px",
    },
    "@media (max-width: 960px)": {
      padding: "0 20px",
    },
    "@media (max-width: 600px)": {
      padding: "0 10px",
    }
  },
  stepsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 2,
    "@media (max-width: 1200px)": {
      gap: "20px",
    },
    "@media (max-width: 960px)": {
      flexWrap: "wrap",
      gap: "40px",
      justifyContent: "center",
    },
    "@media (max-width: 600px)": {
      gap: "30px",
    },
    "@media (max-width: 480px)": {
      display: "none", // Hide on mobile - will show Swiper instead
    }
  },
  connectingLines: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: 1,
    pointerEvents: "none",
    "@media (max-width: 960px)": {
      display: "none", // Hide default lines on tablet - will show grid lines
    },
    "@media (max-width: 480px)": {
      display: "none", // Hide on mobile
    }
  },
  gridLines: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: 1,
    pointerEvents: "none",
    display: "none", // Hidden by default, shown on tablet
    "@media (max-width: 960px)": {
      display: "block",
    },
    "@media (max-width: 480px)": {
      display: "none", // Hide on mobile
    }
  },
  stepBox: {
    width: "300px",
    position: "relative",
    "@media (max-width: 1200px)": {
      width: "250px",
    },
    "@media (max-width: 960px)": {
      width: "42%",
    },
    "@media (max-width: 600px)": {
      width: "45%",
    }
  },
  stepBoxContent: {
    backgroundColor: "white",
    borderRadius: "24px",
    padding: "25px 15px 15px",
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
    marginTop: "40px",
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
        boxShadow: "0 0 20px rgba(255, 198, 20, 0.5)",
        "& svg": {
          transform: "rotate(-10deg)",
        },
      }
    },
    "@media (max-width: 1200px)": {
      height: "330px",
      padding: "25px 12px 12px",
    },
    "@media (max-width: 960px)": {
      height: "280px",
      marginTop: "35px",
    },
    "@media (max-width: 600px)": {
      height: "260px",
      padding: "25px 10px 10px",
      marginTop: "30px",
    }
  },
  stepNumber: {
    position: "absolute",
    top: "-25px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "60px",
    background: "linear-gradient(135deg, #2A2B6A, #3F40A1)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "26px",
    boxShadow: "0 8px 20px rgba(42, 43, 106, 0.3)",
    zIndex: 3,
    border: "4px solid #FFC614",
    "@media (max-width: 1200px)": {
      width: "55px",
      height: "55px",
      fontSize: "24px",
    },
    "@media (max-width: 960px)": {
      width: "50px",
      height: "50px",
      fontSize: "22px",
      top: "-23px",
    },
    "@media (max-width: 600px)": {
      width: "45px",
      height: "45px",
      fontSize: "20px",
      top: "-20px",
      border: "3px solid #FFC614",
    }
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
    marginTop: "15px",
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
    "@media (max-width: 1200px)": {
      width: "80px",
      height: "80px",
      "& svg": {
        fontSize: "35px",
      }
    },
    "@media (max-width: 960px)": {
      width: "75px",
      height: "75px",
      marginBottom: "20px",
      "& svg": {
        fontSize: "32px",
      }
    },
    "@media (max-width: 600px)": {
      width: "65px",
      height: "65px",
      borderRadius: "15px",
      marginBottom: "15px",
      "& svg": {
        fontSize: "28px",
      },
      "&:after": {
        inset: "-4px",
      }
    }
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
    padding: "0 10px",
    textAlign: "center",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "-8px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "40px",
      height: "2px",
      background: "#FFC614",
    },
    "@media (max-width: 1200px)": {
      fontSize: "1.3rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "1.2rem !important",
      marginBottom: "15px !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.1rem !important",
      marginBottom: "12px !important",
      "&:after": {
        width: "35px",
      }
    }
  },
  stepDescription: {
    fontSize: "1.1rem !important",
    color: "#555 !important",
    lineHeight: "1.6 !important",
    padding: "0 15px",
    textAlign: "center",
    overflowWrap: "break-word",
    "@media (max-width: 1200px)": {
      fontSize: "1rem !important",
      lineHeight: "1.5 !important",
      padding: "0 10px",
    },
    "@media (max-width: 960px)": {
      fontSize: "0.95rem !important",
      padding: "0 5px",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.9rem !important",
    }
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
  
  // Swiper styles
  swiperContainer: {
    display: "none", // Hidden by default, shown on mobile
    width: "280px",
    height: "280px",
    position: "relative",
    margin: "30px auto 0",
    padding: "0 10px",
    "@media (max-width: 480px)": {
      display: "block",
    },
    "@media (max-width: 375px)": {
      width: "250px",
      height: "250px",
    }
  },
  
  // Navigation buttons styling
  navigationContainer: {
    display: "none", // Hidden by default, shown on mobile
    justifyContent: "center",
    alignItems: "center",
    margin: "30px auto 0",
    gap: "30px",
    width: "280px",
    "@media (max-width: 480px)": {
      display: "flex",
    }
  },
  navButton: {
    backgroundColor: "#2A2B6A !important",
    color: "white !important",
    boxShadow: "0 4px 10px rgba(42, 43, 106, 0.3) !important",
    transition: "all 0.3s ease !important",
    "&:hover": {
      backgroundColor: "#1a1b43 !important",
      transform: "translateY(-2px) !important",
      boxShadow: "0 6px 15px rgba(42, 43, 106, 0.4) !important",
    }
  },
  
  // Mobile slide styling
  mobileSlide: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: "20px",
    boxSizing: "border-box",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(42, 43, 106, 0.1)",
    "@media (max-width: 375px)": {
      padding: "15px",
    }
  },
  mobileStepNumber: {
    width: "50px",
    height: "50px",
    background: "linear-gradient(135deg, #2A2B6A, #3F40A1)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "22px",
    boxShadow: "0 8px 20px rgba(42, 43, 106, 0.3)",
    border: "3px solid #FFC614",
    marginBottom: "15px",
    "@media (max-width: 375px)": {
      width: "45px",
      height: "45px",
      fontSize: "20px",
    }
  },
  mobileIconWrapper: {
    width: "70px",
    height: "70px",
    borderRadius: "15px",
    background: "linear-gradient(135deg, #2A2B6A, #3F40A1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
    border: "2px solid rgba(255, 198, 20, 0.5)",
    boxShadow: "0 8px 20px rgba(42, 43, 106, 0.2)",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      inset: "-4px",
      borderRadius: "18px",
      border: "1px dashed rgba(255, 198, 20, 0.7)",
    },
    "& svg": {
      color: "#FFC614",
      fontSize: "32px",
    },
    "@media (max-width: 375px)": {
      width: "60px",
      height: "60px",
      "& svg": {
        fontSize: "28px",
      }
    }
  },
  mobileStepTitle: {
    fontSize: "1.2rem !important",
    fontWeight: "700 !important",
    background: "linear-gradient(135deg, #2A2B6A, #3F40A1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "15px !important",
    position: "relative",
    paddingBottom: "12px",
    textAlign: "center",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      width: "35px",
      height: "2px",
      background: "#FFC614",
    },
    "@media (max-width: 375px)": {
      fontSize: "1.1rem !important",
      marginBottom: "12px !important",
    }
  },
  mobileStepDescription: {
    fontSize: "0.95rem !important",
    color: "#555 !important",
    lineHeight: "1.5 !important",
    textAlign: "center",
    "@media (max-width: 375px)": {
      fontSize: "0.9rem !important",
      lineHeight: "1.4 !important",
    }
  },
  
  // Custom pagination
  customPagination: {
    position: "absolute",
    bottom: "-30px !important",
    "& .swiper-pagination-bullet": {
      width: "10px !important",
      height: "10px !important",
      background: "rgba(42, 43, 106, 0.3) !important",
      opacity: "1 !important",
      transition: "all 0.3s ease !important",
    },
    "& .swiper-pagination-bullet-active": {
      width: "12px !important",
      height: "12px !important",
      background: "#2A2B6A !important",
    }
  }
});

const HowItWorks = () => {
  const classes = useStyles();
  const [animatedElements, setAnimatedElements] = useState([]);
  const stepsRef = useRef([]);
  const svgRef = useRef(null);
  const gridSvgRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Animation on scroll for desktop/tablet
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
        {/* Desktop/Tablet View - Connected line SVG */}
        <svg 
          className={classes.connectingLines} 
          width="100%" 
          height="100%" 
          ref={svgRef}
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
        >
          {/* One continuous curved dashed line with animated dashes */}
          <path
            d="M 125,200 C 220,120 280,280 375,200 C 470,120 530,280 625,200 C 720,120 780,280 875,200 C 970,120 1030,280 1125,200"
            fill="none"
            stroke="url(#gradientLine)"
            strokeWidth="4"
            strokeDasharray="15,10"
            strokeLinecap="round"
            opacity="0.8"
          >
            <animate 
              attributeName="stroke-dashoffset" 
              from="500" 
              to="0" 
              dur="20s" 
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2A2B6A" />
              <stop offset="50%" stopColor="#FFC614" />
              <stop offset="100%" stopColor="#2A2B6A" />
            </linearGradient>
          </defs>
        </svg>

        {/* Tablet View - 2x2 Grid lines */}
        <svg
          className={classes.gridLines}
          width="100%"
          height="100%"
          ref={gridSvgRef}
          viewBox="0 0 600 600"
          preserveAspectRatio="none"
        >
          {/* Vertical center line */}
          <line
            x1="300" y1="50" x2="300" y2="300"
            stroke="#FFC614"
            strokeWidth="3"
            strokeDasharray="10,5"
            opacity="0.7"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="100"
              to="0"
              dur="15s"
              repeatCount="indefinite"
            />
          </line>

          {/* Horizontal center line */}
          <line
            x1="100" y1="300" x2="500" y2="300"
            stroke="#FFC614"
            strokeWidth="3"
            strokeDasharray="10,5"
            opacity="0.7"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="100"
              to="0"
              dur="15s"
              repeatCount="indefinite"
            />
          </line>

          {/* Corner connectors with animations */}
          <path
            d="M 150,150 Q 200,150 200,200 L 200,250"
            fill="none"
            stroke="#2A2B6A"
            strokeWidth="3"
            strokeDasharray="8,4"
            opacity="0.6"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="100"
              to="0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M 450,150 Q 400,150 400,200 L 400,250"
            fill="none"
            stroke="#2A2B6A"
            strokeWidth="3"
            strokeDasharray="8,4"
            opacity="0.6"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="100"
              to="0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M 150,450 Q 200,450 200,400 L 200,350"
            fill="none"
            stroke="#2A2B6A"
            strokeWidth="3"
            strokeDasharray="8,4"
            opacity="0.6"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="100"
              to="0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M 450,450 Q 400,450 400,400 L 400,350"
            fill="none"
            stroke="#2A2B6A"
            strokeWidth="3"
            strokeDasharray="8,4"
            opacity="0.6"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="100"
              to="0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        {/* Desktop & Tablet View */}
        <Box className={classes.stepsWrapper}>
          {steps.map((step, index) => (
            <Box
              key={index}
              className={`${classes.stepBox} ${classes.animatedStep} ${animatedElements.includes(index) ? classes.animatedStepVisible : ''}`}
              ref={el => stepsRef.current[index] = el}
              data-index={index}
              sx={{ 
                position: 'relative',
                transitionDelay: `${index * 0.15}s`,
              }}
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

        {/* Mobile View with Swiper */}
        <Box className={classes.swiperContainer}>
          <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCube, Autoplay]}
            loop={true}
          >
            {steps.map((step, index) => (
              <SwiperSlide key={index}>
                <Box className={classes.mobileSlide}>
                  <Box className={classes.mobileStepNumber}>{index + 1}</Box>
                  <Box className={classes.mobileIconWrapper}>
                    {step.icon}
                  </Box>
                  <Typography className={classes.mobileStepTitle}>
                    {step.title}
                  </Typography>
                  <Typography className={classes.mobileStepDescription}>
                    {step.description}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorks;