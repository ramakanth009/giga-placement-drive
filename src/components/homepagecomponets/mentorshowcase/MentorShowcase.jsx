// src/components/homepagecomponets/mentorshowcase/MentorShowcase.jsx
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  Chip,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { LinkedIn, Twitter, GitHub } from "@mui/icons-material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
// Import required modules
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

// Import trainer images
import hemanthImg from "../../../assets/trainers/Hemanth_sairsm.jpg";
import jaiImg from "../../../assets/trainers/Jai_shankar_reddy.jpg";
import laxmanImg from "../../../assets/trainers/Laxman_eadala.jpeg";
import vinodImg from "../../../assets/trainers/Vinod_kumar.jpg";
import jaideepImg from "../../../assets/trainers/jaideep.png";
import akhilImg from "../../../assets/trainers/akhil-lanka.png";
import abhishekImg from "../../../assets/trainers/Abhishek-G.jpeg";
import uttamImg from "../../../assets/trainers/Uttam-Grade.jpeg";

const useStyles = makeStyles({
  section: {
    padding: "40px 0",
    background: "linear-gradient(180deg, #101138 0%, #1e1c44 100%)",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage:
        'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      backgroundSize: "30px 30px",
      zIndex: 1,
    },
  },
  container: {
    position: "relative",
    zIndex: 1,
  },
  title: {
    fontSize: "3rem !important",
    fontWeight: "800 !important",
    color: "#ffffff !important",
    textAlign: "center",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    "@media (max-width: 600px)": {
      fontSize: "2.2rem !important",
    },
  },
  titleYellow: {
    color: "#FFC614 !important",
  },
  subtitle: {
    fontSize: "1.2rem !important",
    color: "rgba(255,255,255,0.9) !important",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto 20px auto !important",
    textShadow: "0 1px 2px rgba(0,0,0,0.2)",
    "@media (max-width: 600px)": {
      fontSize: "1.1rem !important",
      maxWidth: "90%",
      marginBottom: "40px !important",
    },
  },
  card: {
    borderRadius: "20px !important",
    background: "rgba(255, 255, 255, 0.03) !important",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2) !important",
    height: "480px",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    overflow: "hidden",
    position: "relative",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow:
        "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 198, 20, 0.1) !important",
      "& $profileImage": {
        transform: "scale(1.05)",
      },
      "& $gradientOverlay": {
        opacity: 0.8,
      },
    },
  },
  profileSection: {
    position: "relative",
    height: "280px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, #101138 0%, #1e1c44 100%)",
  },
  profileImage: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid rgba(255, 255, 255, 0.9)",
    transition: "transform 0.4s ease",
    zIndex: 2,
    position: "relative",
  },
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, #233f94 0.7), #27286c 100%)`,
    opacity: 0.6,
    transition: "opacity 0.3s ease",
    zIndex: 1,
  },
  /* Commented out social styles
  socialLinks: {
    position: 'absolute',
    bottom: '15px',
    left: '50%',
    transform: 'translateX(-50%) translateY(10px)',
    display: 'flex',
    gap: '8px',
    opacity: 0,
    transition: 'all 0.3s ease',
    zIndex: 3,
  },
  socialIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.9) !important',
    color: '#233f94 !important',
    width: '32px !important',
    height: '32px !important',
    '&:hover': {
      backgroundColor: '#fff !important',
      transform: 'scale(1.1)',
    },
  },
  */

  cardContent: {
    padding: "24px !important",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(10px)",
  },
  mentorName: {
    fontSize: "1.4rem !important",
    fontWeight: "700 !important",
    color: "white !important",
    marginBottom: "8px !important",
  },
  mentorTitle: {
    fontSize: "0.95rem !important",
    color: "rgba(255, 255, 255, 0.8) !important",
    lineHeight: "1.5 !important",
    marginBottom: "12px !important",
  },
  expertiseChip: {
    backgroundColor: "rgba(255, 198, 20, 0.15) !important",
    color: "#FFC614 !important",
    fontSize: "0.8rem !important",
    height: "24px !important",
    borderRadius: "12px !important",
    border: "1px solid rgba(255, 198, 20, 0.3) !important",
  },
  swiperContainer: {
    padding: "20px 60px 10px 60px !important",
    "& .swiper": {
      paddingBottom: "50px !important",
    },
    "& .swiper-pagination": {
      bottom: "0 !important",
    },
    "& .swiper-pagination-bullet": {
      backgroundColor: "rgba(255, 255, 255, 0.5) !important",
      width: "12px !important",
      height: "12px !important",
      opacity: "1 !important",
      transition: "all 0.3s ease !important",
      "&.swiper-pagination-bullet-active": {
        backgroundColor: "#FFC614 !important",
        transform: "scale(1.2)",
      },
    },
    "& .swiper-button-next, & .swiper-button-prev": {
      color: "#FFC614 !important",
      backgroundColor: "rgba(255, 255, 255, 0.03) !important",
      width: "50px !important",
      height: "50px !important",
      borderRadius: "50% !important",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.1) !important",
      transition: "all 0.3s ease !important",
      "&:after": {
        fontSize: "20px !important",
        fontWeight: "bold !important",
      },
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.08) !important",
        color: "#FFC614 !important",
        transform: "scale(1.1)",
      },
    },
    "@media (max-width: 600px)": {
      padding: "20px 30px 50px 30px !important",
    },
  },

});

const MentorShowcase = () => {
  const classes = useStyles();

  // Enhanced trainers data with expertise tags
  const trainers = [
    {
      id: 1,
      name: "Akhil Lanka",
      title: "Product specialist",
      expertise: "security",
      image: akhilImg,
    },
    {
      id: 2,
      name: "Hemanth Sai Ram",
      title: "Senior Software Engineer & Tech Lead (5+ Years)",
      expertise: "Full Stack",
      image: hemanthImg,
    },
    {
      id: 3,
      name: "Jay Shankar Reddy",
      title: "Full Stack Developer at Virtusa (5+ Years)",
      expertise: "Full Stack",
      image: jaiImg,
    },
    {
      id: 4,
      name: "Laxman Eadala",
      title: "Full Stack Developer at Reliance (6+ Years)",
      expertise: "Full Stack",
      image: laxmanImg,
    },
    {
      id: 5,
      name: "Vinod Kumar",
      title: "Engineer II at Masimo & TA at NYIT Vancouver",
      expertise: "Full Stack",
      image: vinodImg,
    },
    {
      id: 6,
      name: "Jaideep",
      title: "Career Development & Industry Relations Coach",
      expertise: "Leadership",
      image: jaideepImg,
    },
    {
      id: 7,
      name: "Abhishek G",
      title: "Senior Software Engineer (5+ Years)",
      expertise: "Full Stack",
      image: abhishekImg,
    },
    {
      id: 8,
      name: "Uttam Grade",
      title: "Data science trainer",
      expertise: "Data Science",
      image: uttamImg,
    },
  ];

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg" className={classes.container}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
          <Typography variant="h2" className={classes.title}>
            Meet Our
          </Typography>
          <Typography variant="h2" className={`${classes.title} ${classes.titleYellow}`}>
            Giga Crew
          </Typography>
        </Box>
        
        <Typography variant="body1" className={classes.subtitle}>
          Mentorship & Training Team
        </Typography>

        <Box className={classes.swiperContainer}>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
                effect: "slide",
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
                effect: "slide",
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                effect: "coverflow",
              },
            }}
            modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          >
            {trainers.map((trainer) => (
              <SwiperSlide key={trainer.id} style={{ width: "320px" }}>
                <Card className={classes.card}>
                  <Box className={classes.profileSection}>
                    <Box className={classes.gradientOverlay} />
                    <img
                      src={trainer.image}
                      alt={`Mentor ${trainer.name}`}
                      className={classes.profileImage}
                    />
                    {/* Commented out social links section
                    <Box className={classes.socialLinks}>
                      <IconButton className={classes.socialIcon} size="small">
                        <LinkedIn fontSize="small" />
                      </IconButton>
                      <IconButton className={classes.socialIcon} size="small">
                        <Twitter fontSize="small" />
                      </IconButton>
                      <IconButton className={classes.socialIcon} size="small">
                        <GitHub fontSize="small" />
                      </IconButton>
                    </Box>
                    */}
                  </Box>
                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.mentorName}>
                      {trainer.name}
                    </Typography>
                    <Typography className={classes.mentorTitle}>
                      {trainer.title}
                    </Typography>
                    <Chip
                      label={trainer.expertise}
                      className={classes.expertiseChip}
                      size="small"
                    />
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default MentorShowcase;
