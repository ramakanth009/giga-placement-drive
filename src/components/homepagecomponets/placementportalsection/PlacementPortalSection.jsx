import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, A11y, EffectFade } from 'swiper/modules';
import { Box, Typography, Container, Button, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WorkIcon from '@mui/icons-material/Work';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AssignmentIcon from '@mui/icons-material/Assignment';
import VideocamIcon from '@mui/icons-material/Videocam';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TimelineIcon from '@mui/icons-material/Timeline';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import image1 from "../../../assets/Job-Portal-website/1000+curated-Opportunities.png"
import image2 from "../../../assets/Job-Portal-website/Job-Announcement.png"
import image3 from "../../../assets/Job-Portal-website/Skill-Based-Assessments.png"
import image4 from "../../../assets/Job-Portal-website/Mock-Interview-Coach.png"
import image5 from "../../../assets/Job-Portal-website/Proctored-Testing-Employer-Access.png"
import image6 from "../../../assets/Job-Portal-website/Detailed-Feedback-and-insights-report.png"

const useStyles = makeStyles({
  swiperContainer: {
    width: '80%',
    height: '80vh', // Reduced from 100vh
    position: 'relative',
    margin: '0 auto',
  },
  slide: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
    display: 'block',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%)',
    zIndex: 1,
  },
  contentSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    padding: '20px 0 10px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
    color: 'white',
    '@media (max-width: 768px)': {
      padding: '30px 0 40px',
    },
  },
  contentContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    textAlign: 'center',
  },
  slideTitle: {
    fontSize: '2rem !important', // Reduced from 2.5rem
    fontWeight: 'bold !important',
    marginBottom: '10px !important',
    color: 'white !important',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
    '@media (max-width: 968px)': {
      fontSize: '1.7rem !important', // Reduced from 2rem
    },
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important', // Reduced from 1.5rem
      marginBottom: '15px !important',
    },
  },
  slideDescription: {
    fontSize: '1rem !important', // Reduced from 1.1rem
    lineHeight: '1.6 !important',
    marginBottom: '10px !important',
    maxWidth: '800px',
    margin: '0 auto 30px !important',
    color: 'rgba(255,255,255,0.9) !important',
    textShadow: '0 1px 2px rgba(0,0,0,0.5)',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important', // Reduced from 1rem
      marginBottom: '25px !important',
    },
  },
  ctaButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    padding: '12px 40px !important',
    fontSize: '1rem !important',
    fontWeight: '600 !important',
    borderRadius: '25px !important',
    textTransform: 'none !important',
    boxShadow: '0 4px 15px rgba(255, 198, 20, 0.3) !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: '#FFD700 !important',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(255, 198, 20, 0.4) !important',
    },
    '@media (max-width: 600px)': {
      padding: '10px 30px !important',
      fontSize: '0.9rem !important',
    },
  },
  iconContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 25px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(42, 43, 106, 0.2)',
    '@media (max-width: 600px)': {
      width: '60px',
      height: '60px',
      marginBottom: '20px',
    },
  },
  icon: {
    fontSize: '35px !important',
    color: '#2A2B6A !important',
    '@media (max-width: 600px)': {
      fontSize: '28px !important',
    },
  },
  navigationButton: {
    position: 'absolute !important',
    top: '60% !important', // Changed from 50% to move below the slider
    transform: 'translateY(-150%) !important', // Adjusted transform
    zIndex: 10,
    backgroundColor: 'rgba(42, 43, 106, 0.8) !important', // Changed for better visibility
    backdropFilter: 'blur(10px) !important',
    color: 'white !important',
    width: '50px !important',
    height: '50px !important',
    borderRadius: '50% !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: 'rgba(42, 43, 106, 1) !important',
      transform: 'translateY(-150%) scale(1.1) !important',
    },
    '@media (max-width: 768px)': {
      width: '40px !important',
      height: '40px !important',
      display: 'block !important', // Changed from none to make visible on mobile
      transform: 'translateY(-120%) !important',
    },
  },
  prevButton: {
    left: '-60px !important', // Adjusted position
  },
  nextButton: {
    right: '-60px !important', // Adjusted position
  },
  pagination: {
    '& .swiper-pagination-bullet': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      opacity: 1,
      width: '12px',
      height: '12px',
      margin: '0 6px',
      transition: 'all 0.3s ease',
    },
    '& .swiper-pagination-bullet-active': {
      backgroundColor: '#FFC614',
      transform: 'scale(1.2)',
    },
  },
  mainHeading: {
    // backgroundColor: '#2A2B6A',
    padding: '2rem 1rem',
    textAlign: 'center',
    color: 'white',
    '& h1': {
      fontSize: '2.5rem !important', // Reduced from 3rem
      fontWeight: 'bold !important',
      '@media (max-width: 768px)': {
        fontSize: '1.8rem !important', // Reduced from 2rem
      },
    }
  },
});

const PlacementPortalSection = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "1000+ Curated Opportunities",
      description: "Access a wide range of verified roles from top startups and leading tech companies actively hiring fresh talent like you.",
      icon: <WorkIcon className={classes.icon} />,
      image: image1,
      cta: "Explore Opportunities"
    },
    {
      title: "Custom Job Announcements",
      description: "Get personalized job alerts based on your skills, interests, and career goals—sourced from India's top job platforms, all in one place.",
      icon: <NotificationsActiveIcon className={classes.icon} />,
      image: image2,
      cta: "Set Up Alerts"
    },
    {
      title: "Skill-Based Assessments",
      description: "Demonstrate your expertise with real-time coding tasks and domain-specific evaluations designed to match industry expectations.",
      icon: <AssignmentIcon className={classes.icon} />,
      image: image3,
      cta: "Take Assessment"
    },
    {
      title: "Mock Interview Coach",
      description: "Prepare with AI-powered and expert-led mock interviews. Receive actionable insights and performance analysis to build interview confidence.",
      icon: <VideocamIcon className={classes.icon} />,
      image: image4,
      cta: "Start Practice"
    },
    {
      title: "Proctored Testing & Employer Access",
      description: "Provides you with secure, monitored tests based on the job role, skills, or resume that validate and provides you complete insight.",
      icon: <VerifiedUserIcon className={classes.icon} />,
      image: image5,
      cta: "Verify Skills"
    },
    {
      title: "Detailed Feedback and Insights Report",
      description: "Delivers detailed feedback on body language, tone of voice, and answer quality — including concept-level insights and how to improve each response.",
      icon: <TimelineIcon className={classes.icon} />,
      image: image6,
      cta: "View Insights"
    },
  ];

  return (
    <>
      <Box className={classes.mainHeading}>
        <Typography variant="h1">
          Unlock Career Opportunities with <span style={{ color: '#FFC614' }}>Gigaversity Smart Job Portal</span>
        </Typography>
      </Box>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box className={classes.swiperContainer}>
          <Swiper
            modules={[Navigation, Keyboard, A11y, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            a11y={{
              prevSlideMessage: 'Previous slide',
              nextSlideMessage: 'Next slide',
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            speed={600}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            style={{ height: '100%' }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className={classes.slide}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={classes.slideImage}
                  loading={index <= 1 ? 'eager' : 'lazy'}
                />
                <Box className={classes.imageOverlay} />
                
                <Box className={classes.contentSection}>
                  <Container className={classes.contentContainer}>
                    <Box className={classes.iconContainer}>
                      {slide.icon}
                    </Box>
                    <Typography variant="h2" className={classes.slideTitle}>
                      {slide.title}
                    </Typography>
                    <Typography variant="body1" className={classes.slideDescription}>
                      {slide.description}
                    </Typography>
                    <Button 
                      className={classes.ctaButton}
                      aria-label={`${slide.cta} - ${slide.title}`}
                    >
                      {slide.cta}
                    </Button>
                  </Container>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          <IconButton
            className={`${classes.navigationButton} ${classes.prevButton} swiper-button-prev-custom`}
            aria-label="Previous slide"
          >
            <ArrowBackIosIcon />
          </IconButton>

          <IconButton
            className={`${classes.navigationButton} ${classes.nextButton} swiper-button-next-custom`}
            aria-label="Next slide"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default PlacementPortalSection;