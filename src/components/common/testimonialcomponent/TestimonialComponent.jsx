// import React, { useState, useEffect, useRef } from "react";
// import { Box, Typography, Container, Avatar } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
// import StarIcon from "@mui/icons-material/Star";
// import StarHalfIcon from "@mui/icons-material/StarHalf";
// import Review from "../../../assets/review-girl.png";

// const useStyles = makeStyles({
//   testimonialSection: {
//     backgroundColor: "#241555",
//     padding: "40px 0 60px",
//     width: "100%",
//     overflow: "hidden",
//     "@media (max-width: 1200px)": {
//       padding: "35px 0 55px",
//     },
//     "@media (max-width: 960px)": {
//       padding: "30px 0 50px",
//     },
//     "@media (max-width: 600px)": {
//       padding: "25px 0 45px",
//     },
//     "@media (max-width: 480px)": {
//       padding: "20px 0 40px",
//     },
//     "@media (max-width: 375px)": {
//       padding: "15px 0 35px",
//     },
//   },
//   title: {
//     color: "white",
//     textAlign: "center",
//     fontSize: "2rem !important",
//     fontWeight: "bold !important",
//     marginBottom: "30px !important",
//     "& span": {
//       color: "#FFC614",
//     },
//     "@media (max-width: 1200px)": {
//       fontSize: "1.9rem !important",
//       marginBottom: "28px !important",
//     },
//     "@media (max-width: 960px)": {
//       fontSize: "1.8rem !important",
//       marginBottom: "25px !important",
//     },
//     "@media (max-width: 600px)": {
//       fontSize: "1.6rem !important",
//       marginBottom: "22px !important",
//     },
//     "@media (max-width: 480px)": {
//       fontSize: "1.4rem !important",
//       marginBottom: "20px !important",
//     },
//     "@media (max-width: 375px)": {
//       fontSize: "1.3rem !important",
//       marginBottom: "18px !important",
//     },
//   },
//   carouselContainer: {
//     display: "flex",
//     justifyContent: "center",
//     position: "relative",
//   },
//   testimonialContainer: {
//     display: "flex",
//     maxWidth: "900px",
//     margin: "0 auto",
//     gap: "20px",
//     "@media (max-width: 1200px)": {
//       maxWidth: "850px",
//       gap: "18px",
//     },
//     "@media (max-width: 960px)": {
//       maxWidth: "750px",
//       gap: "16px",
//     },
//     "@media (max-width: 768px)": {
//       flexDirection: "column",
//       alignItems: "center",
//       gap: "10px",
//     },
//     "@media (max-width: 600px)": {
//       maxWidth: "500px",
//     },
//     "@media (max-width: 480px)": {
//       maxWidth: "400px",
//       gap: "8px",
//     },
//     "@media (max-width: 375px)": {
//       maxWidth: "320px",
//       gap: "6px",
//     },
//   },
//   imageCard: {
//     backgroundColor: "#F8F8F8",
//     borderRadius: "16px",
//     width: "250px",
//     height: "250px",
//     overflow: "hidden",
//     position: "relative",
//     boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//     "@media (max-width: 1200px)": {
//       width: "230px",
//       height: "230px",
//       borderRadius: "14px",
//     },
//     "@media (max-width: 960px)": {
//       width: "200px",
//       height: "200px",
//       borderRadius: "12px",
//     },
//     "@media (max-width: 768px)": {
//       width: "180px",
//       height: "180px",
//     },
//     "@media (max-width: 600px)": {
//       width: "160px",
//       height: "160px",
//       borderRadius: "10px",
//     },
//     "@media (max-width: 480px)": {
//       width: "140px",
//       height: "140px",
//     },
//     "@media (max-width: 375px)": {
//       width: "120px",
//       height: "120px",
//       borderRadius: "8px",
//     },
//   },
//   testimonialImage: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   },
//   avatarGroup: {
//     position: "absolute",
//     bottom: "10px",
//     right: "10px",
//     display: "flex",
//     alignItems: "center",
//     "@media (max-width: 600px)": {
//       bottom: "8px",
//       right: "8px",
//     },
//     "@media (max-width: 375px)": {
//       bottom: "6px",
//       right: "6px",
//     },
//   },
//   smallAvatar: {
//     width: "28px !important",
//     height: "28px !important",
//     border: "2px solid white",
//     marginLeft: "-10px",
//     "@media (max-width: 1200px)": {
//       width: "26px !important",
//       height: "26px !important",
//       marginLeft: "-9px",
//     },
//     "@media (max-width: 960px)": {
//       width: "24px !important",
//       height: "24px !important",
//       marginLeft: "-8px",
//     },
//     "@media (max-width: 600px)": {
//       width: "22px !important",
//       height: "22px !important",
//       marginLeft: "-7px",
//     },
//     "@media (max-width: 480px)": {
//       width: "20px !important",
//       height: "20px !important",
//       marginLeft: "-6px",
//     },
//     "@media (max-width: 375px)": {
//       width: "18px !important",
//       height: "18px !important",
//       marginLeft: "-5px",
//     },
//   },
//   testimonialText: {
//     borderRadius: "16px",
//     padding: "25px 30px",
//     backgroundColor: "#7865FF",
//     color: "white",
//     position: "relative",
//     flex: 1,
//     boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
//     "@media (max-width: 1200px)": {
//       padding: "23px 28px",
//       borderRadius: "14px",
//     },
//     "@media (max-width: 960px)": {
//       padding: "20px 25px",
//       borderRadius: "12px",
//     },
//     "@media (max-width: 768px)": {
//       padding: "20px 25px",
//     },
//     "@media (max-width: 600px)": {
//       padding: "18px 20px",
//       borderRadius: "10px",
//     },
//     "@media (max-width: 480px)": {
//       padding: "15px 18px",
//     },
//     "@media (max-width: 375px)": {
//       padding: "12px 15px",
//       borderRadius: "8px",
//     },
//   },
//   quoteIcon: {
//     color: "white",
//     fontSize: "2.5rem !important",
//     opacity: 0.7,
//     marginBottom: "10px",
//     "@media (max-width: 1200px)": {
//       fontSize: "2.3rem !important",
//       marginBottom: "9px",
//     },
//     "@media (max-width: 960px)": {
//       fontSize: "2.1rem !important",
//       marginBottom: "8px",
//     },
//     "@media (max-width: 600px)": {
//       fontSize: "1.9rem !important",
//       marginBottom: "7px",
//     },
//     "@media (max-width: 480px)": {
//       fontSize: "1.7rem !important",
//       marginBottom: "6px",
//     },
//     "@media (max-width: 375px)": {
//       fontSize: "1.5rem !important",
//       marginBottom: "5px",
//     },
//   },
//   testimonialContent: {
//     fontSize: "1rem !important",
//     lineHeight: "1.6 !important",
//     marginBottom: "20px !important",
//     "@media (max-width: 1200px)": {
//       fontSize: "0.98rem !important",
//       marginBottom: "18px !important",
//     },
//     "@media (max-width: 960px)": {
//       fontSize: "0.95rem !important",
//       marginBottom: "16px !important",
//     },
//     "@media (max-width: 600px)": {
//       fontSize: "0.9rem !important",
//       lineHeight: "1.5 !important",
//       marginBottom: "14px !important",
//     },
//     "@media (max-width: 480px)": {
//       fontSize: "0.85rem !important",
//       lineHeight: "1.4 !important",
//       marginBottom: "12px !important",
//     },
//     "@media (max-width: 375px)": {
//       fontSize: "0.8rem !important",
//       lineHeight: "1.3 !important",
//       marginBottom: "10px !important",
//     },
//   },
//   testimonialAuthor: {
//     display: "flex",
//     alignItems: "center",
//   },
//   authorAvatar: {
//     width: "40px !important",
//     height: "40px !important",
//     marginRight: "12px !important",
//     "@media (max-width: 1200px)": {
//       width: "38px !important",
//       height: "38px !important",
//       marginRight: "11px !important",
//     },
//     "@media (max-width: 960px)": {
//       width: "36px !important",
//       height: "36px !important",
//       marginRight: "10px !important",
//     },
//     "@media (max-width: 600px)": {
//       width: "34px !important",
//       height: "34px !important",
//       marginRight: "9px !important",
//     },
//     "@media (max-width: 480px)": {
//       width: "32px !important",
//       height: "32px !important",
//       marginRight: "8px !important",
//     },
//     "@media (max-width: 375px)": {
//       width: "30px !important",
//       height: "30px !important",
//       marginRight: "7px !important",
//     },
//   },
//   authorInfo: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   authorName: {
//     fontWeight: "bold !important",
//     fontSize: "1.1rem !important",
//     "@media (max-width: 1200px)": {
//       fontSize: "1.08rem !important",
//     },
//     "@media (max-width: 960px)": {
//       fontSize: "1.05rem !important",
//     },
//     "@media (max-width: 600px)": {
//       fontSize: "1rem !important",
//     },
//     "@media (max-width: 480px)": {
//       fontSize: "0.95rem !important",
//     },
//     "@media (max-width: 375px)": {
//       fontSize: "0.9rem !important",
//     },
//   },
//   authorTitle: {
//     fontSize: "0.9rem !important",
//     opacity: 0.9,
//     "@media (max-width: 1200px)": {
//       fontSize: "0.88rem !important",
//     },
//     "@media (max-width: 960px)": {
//       fontSize: "0.85rem !important",
//     },
//     "@media (max-width: 600px)": {
//       fontSize: "0.82rem !important",
//     },
//     "@media (max-width: 480px)": {
//       fontSize: "0.8rem !important",
//     },
//     "@media (max-width: 375px)": {
//       fontSize: "0.78rem !important",
//     },
//   },
//   ratingContainer: {
//     position: "absolute",
//     top: "15px",
//     right: "15px",
//     backgroundColor: "rgba(255, 255, 255, 0.3)",
//     borderRadius: "30px",
//     padding: "5px 10px",
//     display: "flex",
//     alignItems: "center",
//     "@media (max-width: 1200px)": {
//       top: "14px",
//       right: "14px",
//       padding: "5px 9px",
//       borderRadius: "28px",
//     },
//     "@media (max-width: 960px)": {
//       top: "13px",
//       right: "13px",
//       padding: "4px 8px",
//       borderRadius: "26px",
//     },
//     "@media (max-width: 600px)": {
//       top: "12px",
//       right: "12px",
//       padding: "3px 7px",
//       borderRadius: "24px",
//     },
//     "@media (max-width: 480px)": {
//       top: "10px",
//       right: "10px",
//       padding: "3px 6px",
//       borderRadius: "20px",
//     },
//     "@media (max-width: 375px)": {
//       top: "8px",
//       right: "8px",
//       padding: "2px 5px",
//       borderRadius: "16px",
//     },
//   },
//   starIcon: {
//     color: "#FFC614 !important", // Change to yellow
//     fontSize: "1rem !important",
//     "@media (max-width: 1200px)": {
//       fontSize: "0.98rem !important",
//     },
//     "@media (max-width: 960px)": {
//       fontSize: "0.95rem !important",
//     },
//     "@media (max-width: 600px)": {
//       fontSize: "0.9rem !important",
//     },
//     "@media (max-width: 480px)": {
//       fontSize: "0.85rem !important",
//     },
//     "@media (max-width: 375px)": {
//       fontSize: "0.8rem !important",
//     },
//   },
//   paginationDots: {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "30px",
//     "@media (max-width: 1200px)": {
//       marginTop: "28px",
//     },
//     "@media (max-width: 960px)": {
//       marginTop: "25px",
//     },
//     "@media (max-width: 600px)": {
//       marginTop: "22px",
//     },
//     "@media (max-width: 480px)": {
//       marginTop: "20px",
//     },
//     "@media (max-width: 375px)": {
//       marginTop: "18px",
//     },
//   },
//   dot: {
//     width: "8px",
//     height: "8px",
//     borderRadius: "50%",
//     backgroundColor: "rgba(255, 255, 255, 0.3)",
//     margin: "0 5px",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//     "@media (max-width: 1200px)": {
//       width: "7.5px",
//       height: "7.5px",
//       margin: "0 4.5px",
//     },
//     "@media (max-width: 960px)": {
//       width: "7px",
//       height: "7px",
//       margin: "0 4px",
//     },
//     "@media (max-width: 600px)": {
//       width: "6.5px",
//       height: "6.5px",
//       margin: "0 3.5px",
//     },
//     "@media (max-width: 480px)": {
//       width: "6px",
//       height: "6px",
//       margin: "0 3px",
//     },
//     "@media (max-width: 375px)": {
//       width: "5px",
//       height: "5px",
//       margin: "0 2.5px",
//     },
//   },
//   activeDot: {
//     backgroundColor: "white",
//     width: "24px",
//     borderRadius: "4px",
//     "@media (max-width: 1200px)": {
//       width: "22px",
//     },
//     "@media (max-width: 960px)": {
//       width: "20px",
//     },
//     "@media (max-width: 600px)": {
//       width: "18px",
//       borderRadius: "3.5px",
//     },
//     "@media (max-width: 480px)": {
//       width: "16px",
//       borderRadius: "3px",
//     },
//     "@media (max-width: 375px)": {
//       width: "14px",
//       borderRadius: "2.5px",
//     },
//   },
//   slideTransition: {
//     transition: "opacity 0.8s ease", // Increased transition time for smoother auto-sliding
//     opacity: 1,
//   },
//   hiddenSlide: {
//     opacity: 0,
//     position: "absolute",
//   },
// });

// const TestimonialComponent = () => {
//   const classes = useStyles();
//   const [activeSlide, setActiveSlide] = useState(0);

//   // Add automatic sliding
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prevSlide) => 
//         prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
//       );
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const testimonials = [
//     {
//       id: 1,
//       image: Review, // Using the imported image
//       quote:
//         "This Program Helped Me Transition From A Non-Technical Background To A Data Analyst Role. The Project-Based Approach And Direct Employer Connections Made All The Difference",
//       name: "Riya Roy",
//       title: "Member of Data Science Group",
//       avatar: Review, // Using the same image as avatar
//       rating: 4.5,
//     },
//     {
//       id: 2,
//       image: Review, // Using the imported image
//       quote:
//         "The hands-on projects were invaluable! I went from zero coding knowledge to landing a junior developer position in just 6 months. The mentorship and career support were exceptional.",
//       name: "Arjun Kumar",
//       title: "Software Developer at TechSolutions",
//       avatar: Review, // Using the same image as avatar
//       rating: 5.0,
//     },
//     {
//       id: 3,
//       image: Review, // Using the imported image
//       quote:
//         "As someone who was looking to pivot my career, this program provided exactly what I needed - practical skills, industry insights, and networking opportunities that ultimately led to my new role.",
//       name: "Priya Sharma",
//       title: "Business Intelligence Analyst",
//       avatar: Review, // Using the same image as avatar
//       rating: 4.0,
//     },
//   ];

//   // Function to render star ratings (including half stars)
//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     // Add full stars
//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<StarIcon key={`star-${i}`} className={classes.starIcon} />);
//     }

//     // Add half star if needed
//     if (hasHalfStar) {
//       stars.push(<StarHalfIcon key="half-star" className={classes.starIcon} />);
//     }

//     return stars;
//   };

//   return (
//     <Box className={classes.testimonialSection}>
//       <Container maxWidth="lg">
//         <Typography variant="h3" className={classes.title}>
//           Hear From Our <span>Successful Graduates</span>
//         </Typography>

//         <Box className={classes.carouselContainer}>
//           <Box className={classes.testimonialContainer}>
//             {/* Image Card */}
//             <Box className={classes.imageCard}>
//               <img
//                 src={testimonials[activeSlide].image}
//                 alt="Successful Graduate"
//                 className={classes.testimonialImage}
//               />
//             </Box>
            
//             {/* Testimonial Card */}
//             <Box className={classes.testimonialText}>
//               <FormatQuoteIcon className={classes.quoteIcon} />

//               <Typography className={classes.testimonialContent}>
//                 {testimonials[activeSlide].quote}
//               </Typography>

//               <Box className={classes.testimonialAuthor}>
//                 <Avatar
//                   className={classes.authorAvatar}
//                   src={testimonials[activeSlide].avatar}
//                   alt={testimonials[activeSlide].name}
//                 />
//                 <Box className={classes.authorInfo}>
//                   <Typography className={classes.authorName}>
//                     {testimonials[activeSlide].name}
//                   </Typography>
//                   <Typography className={classes.authorTitle}>
//                     {testimonials[activeSlide].title}
//                   </Typography>
//                 </Box>
//               </Box>

//               <Box className={classes.ratingContainer}>
//                 {renderStars(testimonials[activeSlide].rating)}
//               </Box>
//             </Box>
//           </Box>
//         </Box>

//         {/* Pagination Dots */}
//         <Box className={classes.paginationDots}>
//           {testimonials.map((_, index) => (
//             <Box
//               key={index}
//               className={`${classes.dot} ${
//                 activeSlide === index ? classes.activeDot : ""
//               }`}
//               onClick={() => setActiveSlide(index)}
//               aria-label={`Go to testimonial ${index + 1}`}
//               role="button"
//               tabIndex={0}
//             />
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default TestimonialComponent;
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  TextField, 
  Button,
  Paper,
  Snackbar,
  Alert,
  IconButton
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';

const useStyles = makeStyles({
  testimonialSection: {
    padding: '60px 0',
    width: '100%',
    background: 'linear-gradient(135deg, #f8f9ff 0%, #f0f6ff 100%)',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 960px)': {
      padding: '40px 0',
    },
  },

  floatingElement: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.1) 0%, rgba(255, 198, 20, 0.1) 100%)',
    animation: '$float 6s ease-in-out infinite',
    zIndex: 1,
  },

  floatingElement1: {
    top: '15%',
    left: '5%',
    width: '80px',
    height: '80px',
    animationDelay: '0s',
    '@media (max-width: 960px)': { display: 'none' },
  },

  floatingElement2: {
    top: '60%',
    right: '8%',
    width: '60px',
    height: '60px',
    animationDelay: '2s',
    '@media (max-width: 960px)': { display: 'none' },
  },

  floatingElement3: {
    bottom: '25%',
    left: '10%',
    width: '50px',
    height: '50px',
    animationDelay: '4s',
    '@media (max-width: 960px)': { display: 'none' },
  },

  mainContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  },

  contentBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    minHeight: '70vh',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      gap: '40px',
      textAlign: 'center',
    },
  },

  leftSection: {
    flex: 1,
    padding: '0 20px',
  },

  mainTitle: {
    fontSize: '3.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '30px !important',
    lineHeight: '1.1 !important',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '0',
      width: '80px',
      height: '5px',
      background: 'linear-gradient(90deg, #FFC614, #FFD700)',
      borderRadius: '3px',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.8rem !important',
      textAlign: 'center',
      '&::after': { left: '50%', transform: 'translateX(-50%)' },
    },
    '@media (max-width: 600px)': {
      fontSize: '2.2rem !important',
    },
  },

  descriptionBox: {
    background: 'linear-gradient(135deg, #2A2B6A 0%, #4A4C9B 100%)',
    color: 'white',
    padding: '35px 40px',
    borderRadius: '20px',
    marginBottom: '40px',
    boxShadow: '0 20px 50px rgba(42, 43, 106, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    transform: 'perspective(1000px) rotateY(-5deg)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'perspective(1000px) rotateY(0deg) translateY(-5px)',
      boxShadow: '0 25px 60px rgba(42, 43, 106, 0.4)',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '5px',
      background: 'linear-gradient(90deg, #FFC614, #FFD700)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-50px',
      right: '-50px',
      width: '100px',
      height: '100px',
      background: 'radial-gradient(circle, rgba(255, 198, 20, 0.2) 0%, transparent 70%)',
      borderRadius: '50%',
    },
    '@media (max-width: 960px)': {
      transform: 'none',
      '&:hover': { transform: 'translateY(-5px)' },
    },
  },

  descriptionText: {
    fontSize: '1.25rem !important',
    lineHeight: '1.7 !important',
    fontWeight: '500 !important',
    margin: '0 !important',
    position: 'relative',
    zIndex: 1,
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
  },

  statsBox: {
    display: 'flex',
    gap: '25px',
    marginTop: '30px',
    '@media (max-width: 960px)': {
      justifyContent: 'center',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: '15px',
    },
  },

  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '15px 20px',
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '12px',
    border: '1px solid rgba(42, 43, 106, 0.1)',
    boxShadow: '0 8px 25px rgba(42, 43, 106, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 12px 30px rgba(42, 43, 106, 0.15)',
    },
  },

  statIcon: {
    width: '35px',
    height: '35px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 198, 20, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2A2B6A',
  },

  statText: {
    fontSize: '0.95rem !important',
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
    margin: '0 !important',
  },

  rightSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: '0 20px',
  },

  commentFormBox: {
    width: '100%',
    maxWidth: '500px',
  },

  commentCard: {
    padding: '40px !important',
    borderRadius: '24px !important',
    boxShadow: '0 25px 70px rgba(42, 43, 106, 0.2) !important',
    background: 'white !important',
    border: '1px solid rgba(42, 43, 106, 0.1) !important',
    position: 'relative',
    overflow: 'hidden',
    transform: 'perspective(1000px) rotateY(5deg)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'perspective(1000px) rotateY(0deg) translateY(-5px)',
      boxShadow: '0 30px 80px rgba(42, 43, 106, 0.25) !important',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '5px',
      background: 'linear-gradient(90deg, #2A2B6A, #4A4C9B, #FFC614)',
    },
    '@media (max-width: 960px)': {
      transform: 'none',
      '&:hover': { transform: 'translateY(-5px)' },
      padding: '30px 25px !important',
    },
  },

  formTitle: {
    fontSize: '1.6rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '25px !important',
    position: 'relative',
    '&::after': {
      content: '"✨"',
      position: 'absolute',
      right: '-30px',
      top: '0',
      fontSize: '1.2rem',
    },
  },

  formField: {
    marginBottom: '20px !important',
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#4A4C9B',
        boxShadow: '0 0 0 1px rgba(74, 76, 155, 0.1)',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#2A2B6A',
        borderWidth: '2px',
        boxShadow: '0 0 0 3px rgba(42, 43, 106, 0.1)',
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#2A2B6A',
    },
  },

  ratingBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '25px',
    padding: '25px',
    background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.03) 0%, rgba(255, 198, 20, 0.03) 100%)',
    borderRadius: '16px',
    border: '1px solid rgba(42, 43, 106, 0.1)',
  },

  ratingLabel: {
    fontSize: '1.1rem !important',
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
    marginBottom: '15px !important',
  },

  starBox: {
    display: 'flex',
    gap: '8px',
  },

  starButton: {
    padding: '8px !important',
    color: '#ddd !important',
    transition: 'all 0.3s ease !important',
    borderRadius: '50% !important',
    '&:hover': {
      transform: 'scale(1.3) rotate(15deg)',
      color: '#FFC614 !important',
      background: 'rgba(255, 198, 20, 0.1) !important',
    },
  },

  activeStar: {
    color: '#FFC614 !important',
    background: 'rgba(255, 198, 20, 0.1) !important',
  },

  submitBox: {
    textAlign: 'center',
    marginTop: '30px',
  },

  submitButton: {
    background: 'linear-gradient(45deg, #2A2B6A 0%, #4A4C9B 100%) !important',
    color: 'white !important',
    padding: '16px 45px !important',
    borderRadius: '50px !important',
    fontWeight: 'bold !important',
    fontSize: '1.1rem !important',
    transition: 'all 0.4s ease !important',
    boxShadow: '0 15px 35px rgba(42, 43, 106, 0.3) !important',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-3px) scale(1.05)',
      boxShadow: '0 20px 45px rgba(42, 43, 106, 0.4) !important',
    },
    '&:disabled': {
      opacity: '0.7 !important',
      transform: 'none !important',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
      transition: 'left 0.5s ease',
    },
    '&:hover::before': {
      left: '100%',
    },
  },

  heartIcon: {
    color: '#FFC614 !important',
    animation: '$heartBeat 2s infinite',
  },

  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
    '50%': { transform: 'translateY(-20px) rotate(180deg)' },
  },

  '@keyframes heartBeat': {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.2)' },
  },
});

const TestimonialComponent = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
    rating: 0
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStarClick = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.review || formData.rating === 0) {
      setSnackbar({
        open: true,
        message: 'Please fill in all fields and provide a rating',
        severity: 'error'
      });
      return;
    }

    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSnackbar({
        open: true,
        message: 'Thank you! Your honest review has been submitted successfully. ❤️',
        severity: 'success'
      });
      
      setFormData({ name: '', email: '', review: '', rating: 0 });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to submit review. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { icon: <VerifiedIcon />, text: 'Verified Reviews' },
    { icon: <TrendingUpIcon />, text: '94% Success Rate' }
  ];

  return (
    <Box className={classes.testimonialSection}>
      {/* Floating Elements */}
      <Box className={`${classes.floatingElement} ${classes.floatingElement1}`} />
      <Box className={`${classes.floatingElement} ${classes.floatingElement2}`} />
      <Box className={`${classes.floatingElement} ${classes.floatingElement3}`} />

      <Container className={classes.mainContainer}>
        <Box className={classes.contentBox}>
          {/* Left Section - Description */}
          <Box className={classes.leftSection}>
            <Typography variant="h1" className={classes.mainTitle}>
              Hear From Our Successful Graduates
            </Typography>

            <Box className={classes.descriptionBox}>
              <Typography className={classes.descriptionText}>
                Unlike other edtech platforms, we don't post fake reviews. Be the first to get featured with your honest feedback. Liked our curriculum? Just drop a ❤️ and share your valuable feedback!
              </Typography>
            </Box>

            <Box className={classes.statsBox}>
              {stats.map((stat, index) => (
                <Box key={index} className={classes.statItem}>
                  <Box className={classes.statIcon}>
                    {stat.icon}
                  </Box>
                  <Typography className={classes.statText}>
                    {stat.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right Section - Form */}
          <Box className={classes.rightSection}>
            <Box className={classes.commentFormBox}>
              <Paper className={classes.commentCard}>
                <Typography variant="h2" className={classes.formTitle}>
                  Share Your Experience
                </Typography>

                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={classes.formField}
                    variant="outlined"
                    required
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={classes.formField}
                    variant="outlined"
                    required
                  />

                  <Box className={classes.ratingBox}>
                    <Typography className={classes.ratingLabel}>
                      Rate Your Experience
                    </Typography>
                    <Box className={classes.starBox}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <IconButton
                          key={star}
                          onClick={() => handleStarClick(star)}
                          className={`${classes.starButton} ${
                            star <= formData.rating ? classes.activeStar : ''
                          }`}
                          disableRipple
                          size="small"
                        >
                          {star <= formData.rating ? <StarIcon /> : <StarBorderIcon />}
                        </IconButton>
                      ))}
                    </Box>
                  </Box>

                  <TextField
                    fullWidth
                    label="Your Honest Feedback"
                    name="review"
                    value={formData.review}
                    onChange={handleInputChange}
                    className={classes.formField}
                    variant="outlined"
                    multiline
                    rows={4}
                    placeholder="Tell us how our program impacted your career journey..."
                    required
                  />

                  <Box className={classes.submitBox}>
                    <Button
                      type="submit"
                      className={classes.submitButton}
                      disabled={loading}
                      startIcon={<SendIcon />}
                      endIcon={<FavoriteIcon className={classes.heartIcon} />}
                    >
                      {loading ? 'Submitting...' : 'Submit Review'}
                    </Button>
                  </Box>
                </form>
              </Paper>
            </Box>
          </Box>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
            severity={snackbar.severity}
            variant="filled"
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default TestimonialComponent;