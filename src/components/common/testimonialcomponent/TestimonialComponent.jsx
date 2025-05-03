import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Container, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Review from "../../../assets/review-girl.png";

const useStyles = makeStyles({
  testimonialSection: {
    backgroundColor: "#241555",
    padding: "40px 0 60px",
    width: "100%",
    overflow: "hidden",
    "@media (max-width: 1200px)": {
      padding: "35px 0 55px",
    },
    "@media (max-width: 960px)": {
      padding: "30px 0 50px",
    },
    "@media (max-width: 600px)": {
      padding: "25px 0 45px",
    },
    "@media (max-width: 480px)": {
      padding: "20px 0 40px",
    },
    "@media (max-width: 375px)": {
      padding: "15px 0 35px",
    },
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: "2rem !important",
    fontWeight: "bold !important",
    marginBottom: "30px !important",
    "& span": {
      color: "#FFC614",
    },
    "@media (max-width: 1200px)": {
      fontSize: "1.9rem !important",
      marginBottom: "28px !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "1.8rem !important",
      marginBottom: "25px !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.6rem !important",
      marginBottom: "22px !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.4rem !important",
      marginBottom: "20px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "1.3rem !important",
      marginBottom: "18px !important",
    },
  },
  carouselContainer: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  testimonialContainer: {
    display: "flex",
    maxWidth: "900px",
    margin: "0 auto",
    gap: "20px",
    "@media (max-width: 1200px)": {
      maxWidth: "850px",
      gap: "18px",
    },
    "@media (max-width: 960px)": {
      maxWidth: "750px",
      gap: "16px",
    },
    "@media (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
    },
    "@media (max-width: 600px)": {
      maxWidth: "500px",
    },
    "@media (max-width: 480px)": {
      maxWidth: "400px",
      gap: "8px",
    },
    "@media (max-width: 375px)": {
      maxWidth: "320px",
      gap: "6px",
    },
  },
  imageCard: {
    backgroundColor: "#F8F8F8",
    borderRadius: "16px",
    width: "250px",
    height: "250px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    "@media (max-width: 1200px)": {
      width: "230px",
      height: "230px",
      borderRadius: "14px",
    },
    "@media (max-width: 960px)": {
      width: "200px",
      height: "200px",
      borderRadius: "12px",
    },
    "@media (max-width: 768px)": {
      width: "180px",
      height: "180px",
    },
    "@media (max-width: 600px)": {
      width: "160px",
      height: "160px",
      borderRadius: "10px",
    },
    "@media (max-width: 480px)": {
      width: "140px",
      height: "140px",
    },
    "@media (max-width: 375px)": {
      width: "120px",
      height: "120px",
      borderRadius: "8px",
    },
  },
  testimonialImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  avatarGroup: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 600px)": {
      bottom: "8px",
      right: "8px",
    },
    "@media (max-width: 375px)": {
      bottom: "6px",
      right: "6px",
    },
  },
  smallAvatar: {
    width: "28px !important",
    height: "28px !important",
    border: "2px solid white",
    marginLeft: "-10px",
    "@media (max-width: 1200px)": {
      width: "26px !important",
      height: "26px !important",
      marginLeft: "-9px",
    },
    "@media (max-width: 960px)": {
      width: "24px !important",
      height: "24px !important",
      marginLeft: "-8px",
    },
    "@media (max-width: 600px)": {
      width: "22px !important",
      height: "22px !important",
      marginLeft: "-7px",
    },
    "@media (max-width: 480px)": {
      width: "20px !important",
      height: "20px !important",
      marginLeft: "-6px",
    },
    "@media (max-width: 375px)": {
      width: "18px !important",
      height: "18px !important",
      marginLeft: "-5px",
    },
  },
  testimonialText: {
    borderRadius: "16px",
    padding: "25px 30px",
    backgroundColor: "#7865FF",
    color: "white",
    position: "relative",
    flex: 1,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    "@media (max-width: 1200px)": {
      padding: "23px 28px",
      borderRadius: "14px",
    },
    "@media (max-width: 960px)": {
      padding: "20px 25px",
      borderRadius: "12px",
    },
    "@media (max-width: 768px)": {
      padding: "20px 25px",
    },
    "@media (max-width: 600px)": {
      padding: "18px 20px",
      borderRadius: "10px",
    },
    "@media (max-width: 480px)": {
      padding: "15px 18px",
    },
    "@media (max-width: 375px)": {
      padding: "12px 15px",
      borderRadius: "8px",
    },
  },
  quoteIcon: {
    color: "white",
    fontSize: "2.5rem !important",
    opacity: 0.7,
    marginBottom: "10px",
    "@media (max-width: 1200px)": {
      fontSize: "2.3rem !important",
      marginBottom: "9px",
    },
    "@media (max-width: 960px)": {
      fontSize: "2.1rem !important",
      marginBottom: "8px",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.9rem !important",
      marginBottom: "7px",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.7rem !important",
      marginBottom: "6px",
    },
    "@media (max-width: 375px)": {
      fontSize: "1.5rem !important",
      marginBottom: "5px",
    },
  },
  testimonialContent: {
    fontSize: "1rem !important",
    lineHeight: "1.6 !important",
    marginBottom: "20px !important",
    "@media (max-width: 1200px)": {
      fontSize: "0.98rem !important",
      marginBottom: "18px !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "0.95rem !important",
      marginBottom: "16px !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.9rem !important",
      lineHeight: "1.5 !important",
      marginBottom: "14px !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.85rem !important",
      lineHeight: "1.4 !important",
      marginBottom: "12px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.8rem !important",
      lineHeight: "1.3 !important",
      marginBottom: "10px !important",
    },
  },
  testimonialAuthor: {
    display: "flex",
    alignItems: "center",
  },
  authorAvatar: {
    width: "40px !important",
    height: "40px !important",
    marginRight: "12px !important",
    "@media (max-width: 1200px)": {
      width: "38px !important",
      height: "38px !important",
      marginRight: "11px !important",
    },
    "@media (max-width: 960px)": {
      width: "36px !important",
      height: "36px !important",
      marginRight: "10px !important",
    },
    "@media (max-width: 600px)": {
      width: "34px !important",
      height: "34px !important",
      marginRight: "9px !important",
    },
    "@media (max-width: 480px)": {
      width: "32px !important",
      height: "32px !important",
      marginRight: "8px !important",
    },
    "@media (max-width: 375px)": {
      width: "30px !important",
      height: "30px !important",
      marginRight: "7px !important",
    },
  },
  authorInfo: {
    display: "flex",
    flexDirection: "column",
  },
  authorName: {
    fontWeight: "bold !important",
    fontSize: "1.1rem !important",
    "@media (max-width: 1200px)": {
      fontSize: "1.08rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "1.05rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.95rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.9rem !important",
    },
  },
  authorTitle: {
    fontSize: "0.9rem !important",
    opacity: 0.9,
    "@media (max-width: 1200px)": {
      fontSize: "0.88rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "0.85rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.82rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.8rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.78rem !important",
    },
  },
  ratingContainer: {
    position: "absolute",
    top: "15px",
    right: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "30px",
    padding: "5px 10px",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 1200px)": {
      top: "14px",
      right: "14px",
      padding: "5px 9px",
      borderRadius: "28px",
    },
    "@media (max-width: 960px)": {
      top: "13px",
      right: "13px",
      padding: "4px 8px",
      borderRadius: "26px",
    },
    "@media (max-width: 600px)": {
      top: "12px",
      right: "12px",
      padding: "3px 7px",
      borderRadius: "24px",
    },
    "@media (max-width: 480px)": {
      top: "10px",
      right: "10px",
      padding: "3px 6px",
      borderRadius: "20px",
    },
    "@media (max-width: 375px)": {
      top: "8px",
      right: "8px",
      padding: "2px 5px",
      borderRadius: "16px",
    },
  },
  starIcon: {
    color: "#FFC614 !important", // Change to yellow
    fontSize: "1rem !important",
    "@media (max-width: 1200px)": {
      fontSize: "0.98rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "0.95rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.9rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.85rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.8rem !important",
    },
  },
  paginationDots: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
    "@media (max-width: 1200px)": {
      marginTop: "28px",
    },
    "@media (max-width: 960px)": {
      marginTop: "25px",
    },
    "@media (max-width: 600px)": {
      marginTop: "22px",
    },
    "@media (max-width: 480px)": {
      marginTop: "20px",
    },
    "@media (max-width: 375px)": {
      marginTop: "18px",
    },
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    margin: "0 5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "@media (max-width: 1200px)": {
      width: "7.5px",
      height: "7.5px",
      margin: "0 4.5px",
    },
    "@media (max-width: 960px)": {
      width: "7px",
      height: "7px",
      margin: "0 4px",
    },
    "@media (max-width: 600px)": {
      width: "6.5px",
      height: "6.5px",
      margin: "0 3.5px",
    },
    "@media (max-width: 480px)": {
      width: "6px",
      height: "6px",
      margin: "0 3px",
    },
    "@media (max-width: 375px)": {
      width: "5px",
      height: "5px",
      margin: "0 2.5px",
    },
  },
  activeDot: {
    backgroundColor: "white",
    width: "24px",
    borderRadius: "4px",
    "@media (max-width: 1200px)": {
      width: "22px",
    },
    "@media (max-width: 960px)": {
      width: "20px",
    },
    "@media (max-width: 600px)": {
      width: "18px",
      borderRadius: "3.5px",
    },
    "@media (max-width: 480px)": {
      width: "16px",
      borderRadius: "3px",
    },
    "@media (max-width: 375px)": {
      width: "14px",
      borderRadius: "2.5px",
    },
  },
  slideTransition: {
    transition: "opacity 0.8s ease", // Increased transition time for smoother auto-sliding
    opacity: 1,
  },
  hiddenSlide: {
    opacity: 0,
    position: "absolute",
  },
});

const TestimonialComponent = () => {
  const classes = useStyles();
  const [activeSlide, setActiveSlide] = useState(0);

  // Add automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => 
        prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      image: Review, // Using the imported image
      quote:
        "This Program Helped Me Transition From A Non-Technical Background To A Data Analyst Role. The Project-Based Approach And Direct Employer Connections Made All The Difference",
      name: "Riya Roy",
      title: "Member of Data Science Group",
      avatar: Review, // Using the same image as avatar
      rating: 4.5,
    },
    {
      id: 2,
      image: Review, // Using the imported image
      quote:
        "The hands-on projects were invaluable! I went from zero coding knowledge to landing a junior developer position in just 6 months. The mentorship and career support were exceptional.",
      name: "Arjun Kumar",
      title: "Software Developer at TechSolutions",
      avatar: Review, // Using the same image as avatar
      rating: 5.0,
    },
    {
      id: 3,
      image: Review, // Using the imported image
      quote:
        "As someone who was looking to pivot my career, this program provided exactly what I needed - practical skills, industry insights, and networking opportunities that ultimately led to my new role.",
      name: "Priya Sharma",
      title: "Business Intelligence Analyst",
      avatar: Review, // Using the same image as avatar
      rating: 4.0,
    },
  ];

  // Function to render star ratings (including half stars)
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={`star-${i}`} className={classes.starIcon} />);
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalfIcon key="half-star" className={classes.starIcon} />);
    }

    return stars;
  };

  return (
    <Box className={classes.testimonialSection}>
      <Container maxWidth="lg">
        <Typography variant="h3" className={classes.title}>
          Hear From Our <span>Successful Graduates</span>
        </Typography>

        <Box className={classes.carouselContainer}>
          <Box className={classes.testimonialContainer}>
            {/* Image Card */}
            <Box className={classes.imageCard}>
              <img
                src={testimonials[activeSlide].image}
                alt="Successful Graduate"
                className={classes.testimonialImage}
              />
            </Box>
            
            {/* Testimonial Card */}
            <Box className={classes.testimonialText}>
              <FormatQuoteIcon className={classes.quoteIcon} />

              <Typography className={classes.testimonialContent}>
                {testimonials[activeSlide].quote}
              </Typography>

              <Box className={classes.testimonialAuthor}>
                <Avatar
                  className={classes.authorAvatar}
                  src={testimonials[activeSlide].avatar}
                  alt={testimonials[activeSlide].name}
                />
                <Box className={classes.authorInfo}>
                  <Typography className={classes.authorName}>
                    {testimonials[activeSlide].name}
                  </Typography>
                  <Typography className={classes.authorTitle}>
                    {testimonials[activeSlide].title}
                  </Typography>
                </Box>
              </Box>

              <Box className={classes.ratingContainer}>
                {renderStars(testimonials[activeSlide].rating)}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Pagination Dots */}
        <Box className={classes.paginationDots}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              className={`${classes.dot} ${
                activeSlide === index ? classes.activeDot : ""
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              role="button"
              tabIndex={0}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialComponent;