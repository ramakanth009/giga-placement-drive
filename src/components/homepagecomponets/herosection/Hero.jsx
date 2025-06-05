// import React, { useState, useEffect } from "react";
// import { Box, Typography, Button, IconButton } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { useNavigate } from "react-router-dom";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import EditIcon from "@mui/icons-material/Edit";
// import LightbulbIcon from "@mui/icons-material/Lightbulb";
// import SchoolIcon from "@mui/icons-material/School";
// import CodeIcon from "@mui/icons-material/Code";
// import AssessmentIcon from "@mui/icons-material/Assessment";
// import HandshakeIcon from "@mui/icons-material/Handshake";

// const useStyles = makeStyles({
//   heroContainer: {
//     position: "relative",
//     minHeight: "90vh",
//     display: "flex",
//     alignItems: "center",
//     overflow: "hidden",
//     "@media (max-width: 960px)": {
//       minHeight: "90vh",
//     },
//     "@media (max-width: 600px)": {
//       minHeight: "80vh",
//     },
//   },
//   slideContainer: {
//     position: "relative",
//     width: "100%",
//     height: "100%",
//     zIndex: 2,
//   },
//   slide: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     opacity: 0,
//     visibility: "hidden",
//     transition: "opacity 1s ease, transform 1s ease, visibility 1s",
//     transform: "translateX(30px)",
//   },
//   activeSlide: {
//     opacity: 1,
//     visibility: "visible",
//     transform: "translateX(0)",
//     position: "relative",
//   },
//   slideBackground: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     zIndex: 1,
//   },
//   backgroundOverlay: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     background: "linear-gradient(135deg, rgba(42, 43, 106, 0.92) 0%, rgba(26, 27, 74, 0.95) 100%)",
//     zIndex: 2,
//   },
//   content: {
//     position: "relative",
//     zIndex: 3,
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "0 5%",
//     width: "100%",
//     minHeight: "90vh",
//     "@media (max-width: 960px)": {
//       flexDirection: "column",
//       textAlign: "center",
//       gap: "40px",
//       padding: "60px 5%",
//       minHeight: "90vh",
//     },
//     "@media (max-width: 600px)": {
//       padding: "40px 4%",
//       minHeight: "80vh",
//     },
//   },
//   leftContent: {
//     flex: "1",
//     maxWidth: "650px",
//     "@media (max-width: 960px)": {
//       maxWidth: "100%",
//       order: 2,
//     },
//   },
//   rightContent: {
//     flex: "1",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     "@media (max-width: 960px)": {
//       order: 1,
//       maxWidth: "300px",
//     },
//   },
//   headline: {
//     fontSize: "3.8rem !important",
//     fontWeight: "700 !important",
//     color: "white !important",
//     marginBottom: "32px !important",
//     lineHeight: "1.1 !important",
//     textShadow: "0 4px 24px rgba(0, 0, 0, 0.4)",
//     letterSpacing: "0.5px !important",
//     "& span": {
//       color: "#FFC614 !important",
//       textShadow: "0 4px 24px rgba(255, 198, 20, 0.5)",
//       position: "relative",
//     },
//     "@media (max-width: 1200px)": {
//       fontSize: "3.2rem !important",
//     },
//     "@media (max-width: 960px)": {
//       fontSize: "2.8rem !important",
//       marginBottom: "24px !important",
//       textAlign: "center",
//     },
//     "@media (max-width: 600px)": {
//       fontSize: "2.2rem !important",
//       marginBottom: "20px !important",
//     },
//   },
//   subheadline: {
//     fontSize: "1.4rem !important",
//     color: "rgba(255, 255, 255, 0.95) !important",
//     marginBottom: "40px !important",
//     lineHeight: "1.6 !important",
//     textShadow: "0 2px 12px rgba(0, 0, 0, 0.4)",
//     letterSpacing: "0.3px !important",
//     fontWeight: "500 !important",
//     "@media (max-width: 1200px)": {
//       fontSize: "1.3rem !important",
//     },
//     "@media (max-width: 960px)": {
//       fontSize: "1.2rem !important",
//       marginBottom: "32px !important",
//       textAlign: "center",
//     },
//     "@media (max-width: 600px)": {
//       fontSize: "1.1rem !important",
//       marginBottom: "28px !important",
//     },
//   },
//   ctaButton: {
//     backgroundColor: "#FFC614 !important",
//     color: "#2A2B6A !important",
//     padding: "16px 36px !important",
//     borderRadius: "50px !important",
//     fontSize: "1.2rem !important",
//     fontWeight: "700 !important",
//     textTransform: "none !important",
//     boxShadow: "0 12px 30px rgba(0, 0, 0, 0.4) !important",
//     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important",
//     position: "relative",
//     overflow: "hidden",
//     border: "2px solid transparent",
//     "&:hover": {
//       backgroundColor: "rgba(255, 255, 255, 0.95) !important",
//       transform: "translateY(-4px)",
//       boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5) !important",
//       borderColor: "#FFC614",
//     },
//     "&::before": {
//       content: '""',
//       position: "absolute",
//       top: "0",
//       left: "-100%",
//       width: "100%",
//       height: "100%",
//       background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
//       transition: "left 0.5s",
//     },
//     "&:hover::before": {
//       left: "100%",
//     },
//     "@media (max-width: 960px)": {
//       padding: "14px 30px !important",
//       fontSize: "1.1rem !important",
//     },
//     "@media (max-width: 600px)": {
//       padding: "12px 24px !important",
//       fontSize: "1rem !important",
//     },
//   },
//   navigationControls: {
//     position: "absolute",
//     bottom: "40px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     zIndex: 10,
//     backgroundColor: "rgba(42, 43, 106, 0.4)",
//     border: "1px solid rgba(255, 255, 255, 0.1)",
//     boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
//     borderRadius: "30px",
//     padding: "8px 20px",
//     "@media (max-width: 600px)": {
//       bottom: "30px",
//       padding: "6px 16px",
//     },
//   },
//   dotsContainer: {
//     display: "flex",
//     gap: "12px",
//     alignItems: "center",
//   },
//   dot: {
//     fontSize: "14px !important",
//     color: "rgba(255, 255, 255, 0.5) !important",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//     "&:hover": {
//       transform: "scale(1.3)",
//       color: "rgba(255, 255, 255, 0.8) !important",
//     },
//   },
//   activeDot: {
//     color: "#FFC614 !important",
//     transform: "scale(1.4)",
//   },
//   navButton: {
//     color: "white !important",
//     margin: "0 12px !important",
//     backgroundColor: "rgba(42, 43, 106, 0.6) !important",
//     backdropFilter: "blur(10px)",
//     border: "1px solid rgba(255, 255, 255, 0.15)",
//     "&:hover": {
//       backgroundColor: "rgba(255, 198, 20, 0.2) !important",
//       transform: "scale(1.1)",
//     },
//     "@media (max-width: 600px)": {
//       padding: "6px !important",
//       margin: "0 8px !important",
//     },
//   },
//   iconWrapper: {
//     width: "380px",
//     height: "380px",
//     borderRadius: "50%",
//     background: "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%)",
//     backdropFilter: "blur(20px)",
//     border: "1px solid rgba(255, 255, 255, 0.15)",
//     boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//     overflow: "hidden",
//     "&::before": {
//       content: '""',
//       position: "absolute",
//       top: "-50%",
//       left: "-50%",
//       width: "200%",
//       height: "200%",
//       background: "conic-gradient(from 0deg, transparent, rgba(255, 198, 20, 0.3), transparent)",
//       animation: "$rotate 4s linear infinite",
//     },
//     "&::after": {
//       content: '""',
//       position: "absolute",
//       inset: "4px",
//       borderRadius: "50%",
//       background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
//       backdropFilter: "blur(20px)",
//     },
//     "@media (max-width: 1200px)": {
//       width: "320px",
//       height: "320px",
//     },
//     "@media (max-width: 960px)": {
//       width: "280px",
//       height: "280px",
//     },
//     "@media (max-width: 600px)": {
//       width: "220px",
//       height: "220px",
//     },
//   },
//   icon: {
//     fontSize: "140px !important",
//     color: "#FFC614 !important",
//     zIndex: 1,
//     position: "relative",
//     filter: "drop-shadow(0 4px 24px rgba(0, 0, 0, 0.5))",
//     "@media (max-width: 1200px)": {
//       fontSize: "120px !important",
//     },
//     "@media (max-width: 960px)": {
//       fontSize: "100px !important",
//     },
//     "@media (max-width: 600px)": {
//       fontSize: "80px !important",
//     },
//   },
//   floatingElements: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     zIndex: 1,
//     pointerEvents: "none",
//   },
//   floatingElement: {
//     position: "absolute",
//     width: "20px",
//     height: "20px",
//     backgroundColor: "rgba(255, 198, 20, 0.15)",
//     backdropFilter: "blur(8px)",
//     boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//     borderRadius: "50%",
//     animation: "$float 6s ease-in-out infinite",
//   },
//   element1: {
//     top: "20%",
//     left: "10%",
//     animationDelay: "0s",
//   },
//   element2: {
//     top: "60%",
//     right: "15%",
//     animationDelay: "2s",
//   },
//   element3: {
//     bottom: "30%",
//     left: "20%",
//     animationDelay: "4s",
//   },
//   "@keyframes float": {
//     "0%, 100%": {
//       transform: "translateY(0) scale(1)",
//       opacity: 0.7,
//     },
//     "50%": {
//       transform: "translateY(-30px) scale(1.2)",
//       opacity: 1,
//     },
//   },
//   "@keyframes rotate": {
//     "0%": {
//       transform: "rotate(0deg)",
//     },
//     "100%": {
//       transform: "rotate(360deg)",
//     },
//   },

// });

// const HeroCarousel = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const [activeSlide, setActiveSlide] = useState(0);

//   // Background images for each banner
//   const backgroundImages = [
//     "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80", // Resume/Career - Professional workspace
//     "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Startup/Innovation
//     "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Tech Campus/Learning
//     "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Coding/Development
//     "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Assessment/Testing
//     "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Networking/Collaboration
//   ];

//   // Banner content data
//   const banners = [
//     {
//       headline: "Write your First Career Chapter with Gigaversity",
//       subheadline: "Build a professional ATS-compliant resume that stands out to recruiters in tech, finance, marketing, and other high-growth industries. Get hired faster with our proven resume templates.",
//       ctaText: "Build your free resume now",
//       ctaAction: () => window.open("http://resume.gigaversity.in/", "_blank"),
//       icon: <EditIcon className={classes.icon} />,
//       highlightWord: "Career Chapter",
//     },
//     {
//       headline: "From Idea to Prototype: Build Your Own Startup with Up to ₹1 Lakh Innovation Grant",
//       subheadline: "Transform your startup idea into reality with funding up to ₹1 Lakh, expert mentorship, and comprehensive business development support. Join India's fastest-growing startup incubator.",
//       ctaText: "Apply for funding",
//       ctaAction: () => navigate("/startup-program"),
//       icon: <LightbulbIcon className={classes.icon} />,
//       highlightWord: "₹1 Lakh Innovation Grant",
//     },
//     {
//       headline: "Experience the Learning in Tech Ecosystem like never before",
//       subheadline: "Immerse yourself in India's most advanced tech campus featuring cutting-edge labs, collaborative workspaces, and industry-standard infrastructure designed for next-generation learning.",
//       ctaText: "Visit Campus",
//       ctaAction: () => navigate("/campus"),
//       icon: <SchoolIcon className={classes.icon} />,
//       highlightWord: "Tech Ecosystem",
//     },
//     {
//       headline: "Turn Concepts into Code, Code into careers",
//       subheadline: "Master in-demand programming skills through hands-on projects, real-world applications, and industry-relevant curriculum that guarantees job readiness in today's competitive tech market.",
//       ctaText: "View our courses",
//       ctaAction: () => navigate("/courses"),
//       icon: <CodeIcon className={classes.icon} />,
//       highlightWord: "careers",
//     },
//     {
//       headline: "10 Lakh Students Apply for IT Jobs Every Year — check if IT as a career Suits You?",
//       subheadline: "Stand out from millions of IT job applicants with our comprehensive career assessment. Discover your coding aptitude, technical strengths, and personalized learning path for IT success.",
//       ctaText: "Check if IT suits you",
//       ctaAction: () => navigate("/pre-screening-test"),
//       icon: <AssessmentIcon className={classes.icon} />,
//       highlightWord: "IT Jobs",
//     },
//     {
//       headline: "Meet the Startup Founders Who Began Like You",
//       subheadline: "Learn from successful tech entrepreneurs and startup founders who launched their companies from Gigaversity. Access exclusive networking events, mentorship programs, and collaboration opportunities.",
//       ctaText: "Join collaboration network",
//       ctaAction: () => navigate("/collaboration"),
//       icon: <HandshakeIcon className={classes.icon} />,
//       highlightWord: "Startup Founders",
//     },
//   ];

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
//     }, 7000);

//     return () => clearInterval(interval);
//   }, [banners.length]);

//   // Handle slide navigation
//   const goToSlide = (index) => {
//     setActiveSlide(index);
//   };

//   const goToPrevSlide = () => {
//     setActiveSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
//   };

//   const goToNextSlide = () => {
//     setActiveSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
//   };

//   // Process headline to highlight specific words
//   const renderHighlightedHeadline = (headline, highlightWord) => {
//     if (!highlightWord) return headline;

//     const parts = headline.split(highlightWord);
//     return (
//       <>
//         {parts[0]}
//         <span>{highlightWord}</span>
//         {parts[1]}
//       </>
//     );
//   };

//   return (
//     <Box className={classes.heroContainer}>
//       {/* Floating Elements */}
//       <Box className={classes.floatingElements}>
//         <Box className={`${classes.floatingElement} ${classes.element1}`} />
//         <Box className={`${classes.floatingElement} ${classes.element2}`} />
//         <Box className={`${classes.floatingElement} ${classes.element3}`} />
//       </Box>

//       <Box className={classes.slideContainer}>
//         {banners.map((banner, index) => (
//           <Box
//             key={index}
//             className={`${classes.slide} ${
//               index === activeSlide ? classes.activeSlide : ""
//             }`}
//           >
//             {/* Background Image */}
//             <Box
//               className={classes.slideBackground}
//               sx={{
//                 backgroundImage: `url(${backgroundImages[index]})`,
//               }}
//             />
            
//             {/* Background Overlay */}
//             <Box className={classes.backgroundOverlay} />

//             <Box className={classes.content}>
//               <Box className={classes.leftContent}>
//                 <Typography className={classes.headline}>
//                   {renderHighlightedHeadline(
//                     banner.headline,
//                     banner.highlightWord
//                   )}
//                 </Typography>
//                 <Typography className={classes.subheadline}>
//                   {banner.subheadline}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   className={classes.ctaButton}
//                   onClick={banner.ctaAction}
//                 >
//                   {banner.ctaText}
//                 </Button>
//               </Box>
//               <Box className={classes.rightContent}>
//                 <Box className={classes.iconWrapper}>{banner.icon}</Box>
//               </Box>
//             </Box>
//           </Box>
//         ))}
//       </Box>

//       {/* Navigation controls */}
//       <Box className={classes.navigationControls}>
//         <IconButton
//           className={classes.navButton}
//           onClick={goToPrevSlide}
//           aria-label="Previous slide"
//         >
//           <ArrowBackIosNewIcon fontSize="small" />
//         </IconButton>

//         <Box className={classes.dotsContainer}>
//           {banners.map((_, index) => (
//             <FiberManualRecordIcon
//               key={index}
//               className={`${classes.dot} ${
//                 index === activeSlide ? classes.activeDot : ""
//               }`}
//               onClick={() => goToSlide(index)}
//             />
//           ))}
//         </Box>

//         <IconButton
//           className={classes.navButton}
//           onClick={goToNextSlide}
//           aria-label="Next slide"
//         >
//           <ArrowForwardIosIcon fontSize="small" />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

// export default HeroCarousel;

import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import HeroImage1 from '../../../assets/hero/Banner1.jpg';
import HeroImage2 from '../../../assets/hero/Banner2.jpg';
import HeroImage3 from '../../../assets/hero/Banner3.jpg';
import HeroImage4 from '../../../assets/hero/Banner4.jpg';
import HeroImage5 from '../../../assets/hero/Banner5.jpg';
import HeroImage6 from '../../../assets/hero/Banner6.jpg';
import HeroImage7 from '../../../assets/hero/Banner7.jpg';
import HeroImage8 from '../../../assets/hero/Banner8.jpg';

const useStyles = makeStyles({
  heroSection: {
    width: '100%',
    height: '500px',
    position: 'relative',
  },
  swiperContainer: {
    width: '100%',
    height: '100%',
    '& .swiper-pagination-bullet': {
      background: '#fff',
      opacity: 0.7,
    },
    '& .swiper-pagination-bullet-active': {
      background: '#fff',
      opacity: 1,
    },
    '& .swiper-button-next, & .swiper-button-prev': {
      color: '#fff',
      '&:after': {
        fontSize: '20px',
      },
    },
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  swiperSlide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Hero = () => {
  const classes = useStyles();

  const heroImages = [
    { src: HeroImage1, alt: 'Hero Banner 1' },
    // { src: HeroImage2, alt: 'Hero Banner 2' },
    // { src: HeroImage3, alt: 'Hero Banner 3' },
    { src: HeroImage4, alt: 'Hero Banner 4' },
    { src: HeroImage5, alt: 'Hero Banner 5' },
    { src: HeroImage6, alt: 'Hero Banner 6' },
    { src: HeroImage7, alt: 'Hero Banner 7' },
    { src: HeroImage8, alt: 'Hero Banner 8' },
  ];

  return (
    <div className={classes.heroSection}>
      <Swiper
        className={classes.swiperContainer}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index} className={classes.swiperSlide}>
            <img 
              src={image.src} 
              alt={image.alt} 
              className={classes.heroImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;