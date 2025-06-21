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
import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Container, 
  TextField, 
  Button,
  Paper,
  Snackbar,
  Alert,
  IconButton,
  Chip,
  Grid
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const useStyles = makeStyles({
  testimonialSection: {
    padding: "40px 0",
    width: "100%",
    background: "linear-gradient(135deg, #f8f9ff 0%, #f0f6ff 100%)",
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 960px)": {
      padding: "30px 0",
    },
    "@media (max-width: 600px)": {
      padding: "20px 0",
    },
  },

  mainContainer: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  contentGrid: {
    alignItems: "center",
    minHeight: "80vh",
  },

  // Left Section
  leftSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 40px",
    "@media (max-width: 960px)": {
      padding: "0 20px",
      marginBottom: "30px",
    },
  },

  // Highlighted Banner
  highlightBanner: {
    background: "linear-gradient(135deg, #2A2B6A 0%, #4A4C9B 100%)",
    color: "white",
    padding: "15px 25px",
    borderRadius: "25px",
    marginBottom: "25px",
    position: "relative",
    textAlign: "left",
    boxShadow: "0 8px 25px rgba(42, 43, 106, 0.3)",
    border: "2px solid #FFC614",
    transform: "rotate(-1deg)",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "-3px",
      left: "-3px",
      right: "-3px",
      bottom: "-3px",
      background: "linear-gradient(45deg, #FFC614, #FFB000, #FFC614)",
      borderRadius: "25px",
      zIndex: -1,
      animation: "$borderGlow 2s linear infinite",
    },
    "@media (max-width: 960px)": {
      textAlign: "center",
      transform: "rotate(0deg)",
    },
  },

  bannerText: {
    fontSize: "0.95rem !important",
    fontWeight: "600 !important",
    lineHeight: "1.4",
    "& .highlight": {
      color: "#FFC614",
      fontWeight: "bold",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.85rem !important",
    },
  },

  verifiedChip: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    backgroundColor: "#FFC614 !important",
    color: "#2A2B6A !important",
    fontWeight: "bold !important",
    fontSize: "0.7rem !important",
    transform: "rotate(12deg)",
  },

  // Main Title
  title: {
    color: "#2A2B6A",
    fontSize: "3rem !important",
    fontWeight: "bold !important",
    marginBottom: "20px !important",
    lineHeight: "1.1",
    "& span": {
      background: "linear-gradient(135deg, #FFC614 0%, #FFB000 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    "@media (max-width: 1200px)": {
      fontSize: "2.5rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "2.2rem !important",
      textAlign: "center",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem !important",
    },
  },

  subtitle: {
    color: "rgba(42, 43, 106, 0.7)",
    fontSize: "1.1rem !important",
    lineHeight: "1.5",
    "@media (max-width: 960px)": {
      textAlign: "center",
      fontSize: "1rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.9rem !important",
    },
  },

  // Right Section - Form
  rightSection: {
    display: "flex",
    justifyContent: "center",
    padding: "0 40px",
    "@media (max-width: 960px)": {
      padding: "0 20px",
    },
  },

  formContainer: {
    width: "100%",
    maxWidth: "400px",
  },

  formPaper: {
    backgroundColor: "white !important",
    padding: "25px !important",
    borderRadius: "16px !important",
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1) !important",
    border: "1px solid rgba(74, 99, 231, 0.1)",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "3px",
      background: "linear-gradient(90deg, #2A2B6A, #FFC614, #2A2B6A)",
    },
    "@media (max-width: 600px)": {
      padding: "20px !important",
    },
  },

  formTitle: {
    color: "#2A2B6A",
    textAlign: "center",
    fontSize: "1.3rem !important",
    fontWeight: "bold !important",
    marginBottom: "20px !important",
    "& span": {
      color: "#FFC614",
    },
  },

  formField: {
    marginBottom: "15px !important",
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(248, 249, 255, 0.7)",
      borderRadius: "10px",
      "& fieldset": {
        borderColor: "rgba(42, 43, 106, 0.2)",
      },
      "&:hover fieldset": {
        borderColor: "#2A2B6A",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#2A2B6A",
        borderWidth: "2px",
      },
    },
    "& .MuiInputLabel-root": {
      color: "rgba(42, 43, 106, 0.7)",
      "&.Mui-focused": {
        color: "#2A2B6A",
      },
    },
  },

  ratingSection: {
    marginBottom: "15px",
    textAlign: "center",
    padding: "12px",
    background: "rgba(74, 99, 231, 0.03)",
    borderRadius: "10px",
  },

  ratingLabel: {
    color: "#2A2B6A !important",
    fontSize: "0.9rem !important",
    fontWeight: "600 !important",
    marginBottom: "8px !important",
    display: "block",
  },

  starsContainer: {
    display: "flex",
    gap: "3px",
    justifyContent: "center",
  },

  interactiveStar: {
    fontSize: "1.8rem !important",
    cursor: "pointer",
    transition: "all 0.2s ease",
    color: "rgba(42, 43, 106, 0.2)",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  activeInteractiveStar: {
    color: "#FFC614 !important",
  },

  submitContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },

  submitButton: {
    background: "linear-gradient(135deg, #2A2B6A 0%, #4A4C9B 100%) !important",
    color: "white !important",
    fontWeight: "bold !important",
    padding: "10px 25px !important",
    borderRadius: "20px !important",
    fontSize: "0.95rem !important",
    textTransform: "none !important",
    boxShadow: "0 6px 20px rgba(42, 43, 106, 0.3) !important",
    transition: "all 0.3s ease !important",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 10px 25px rgba(42, 43, 106, 0.4) !important",
    },
    "&:disabled": {
      background: "#ccc !important",
      color: "#666 !important",
      transform: "none",
      boxShadow: "none !important",
    },
  },

  heartIcon: {
    color: "#FFC614 !important",
    fontSize: "1.1rem !important",
    marginLeft: "6px !important",
  },

  // Floating Elements
  floatingElement: {
    position: "absolute",
    background: "rgba(255, 255, 255, 0.8)",
    borderRadius: "50%",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(74, 99, 231, 0.1)",
    animation: "$float 6s ease-in-out infinite",
    zIndex: 0,
  },

  floatingElement1: {
    top: "15%",
    left: "8%",
    width: "50px",
    height: "50px",
    animationDelay: "0s",
    "@media (max-width: 960px)": {
      display: "none",
    },
  },

  floatingElement2: {
    top: "25%",
    right: "10%",
    width: "60px",
    height: "60px",
    animationDelay: "2s",
    "@media (max-width: 960px)": {
      display: "none",
    },
  },

  floatingElement3: {
    bottom: "20%",
    left: "12%",
    width: "40px",
    height: "40px",
    animationDelay: "4s",
    "@media (max-width: 960px)": {
      display: "none",
    },
  },

  // Animations
  "@keyframes float": {
    "0%, 100%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-15px)" },
  },

  "@keyframes borderGlow": {
    "0%, 100%": { opacity: 0.7 },
    "50%": { opacity: 1 },
  },
});

const TestimonialComponent = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
    rating: 0
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
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
        message: "Please fill in all fields and provide a rating",
        severity: "error"
      });
      return;
    }

    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSnackbar({
        open: true,
        message: "Thank you! Your review has been submitted successfully.",
        severity: "success"
      });
      
      setFormData({ name: "", email: "", review: "", rating: 0 });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to submit review. Please try again.",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className={classes.testimonialSection}>
      <Container maxWidth="lg" className={classes.mainContainer}>
        {/* Floating Elements */}
        <Box className={`${classes.floatingElement} ${classes.floatingElement1}`}>
          <StarIcon style={{ color: "#FFC614", fontSize: "1.8rem", margin: "auto", display: "block", paddingTop: "12px" }} />
        </Box>
        <Box className={`${classes.floatingElement} ${classes.floatingElement2}`}>
          <TrendingUpIcon style={{ color: "#2A2B6A", fontSize: "2rem", margin: "auto", display: "block", paddingTop: "16px" }} />
        </Box>
        <Box className={`${classes.floatingElement} ${classes.floatingElement3}`}>
          <VerifiedIcon style={{ color: "#FFC614", fontSize: "1.5rem", margin: "auto", display: "block", paddingTop: "8px" }} />
        </Box>

        <Grid container spacing={4} className={classes.contentGrid}>
          {/* Left Section - Title & Banner */}
          <Grid item xs={12} md={7}>
            <Box className={classes.leftSection}>
              {/* Highlighted Banner */}
              <Box className={classes.highlightBanner}>
                <Chip 
                  label="100% AUTHENTIC" 
                  icon={<VerifiedIcon />} 
                  className={classes.verifiedChip}
                  size="small"
                />
                <Typography className={classes.bannerText}>
                  <span className="highlight">Unlike other edtech platforms</span>, we don't post fake reviews. 
                  <span className="highlight"> Be the first to get featured</span> with your honest feedback.
                </Typography>
              </Box>

              {/* Main Title */}
              <Typography variant="h2" className={classes.title}>
                Share Your <span>Success Story</span>
              </Typography>

              <Typography className={classes.subtitle}>
                Your authentic feedback helps future students make informed decisions. 
                Join our community of successful graduates and inspire others with your journey.
              </Typography>
            </Box>
          </Grid>

          {/* Right Section - Form */}
          <Grid item xs={12} md={5}>
            <Box className={classes.rightSection}>
              <Box className={classes.formContainer}>
                <Paper className={classes.formPaper}>
                  <Typography variant="h4" className={classes.formTitle}>
                    Drop a <span>❤️</span> & Your Feedback!
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
                      size="small"
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
                      size="small"
                      required
                    />

                    <Box className={classes.ratingSection}>
                      <Typography className={classes.ratingLabel}>
                        Rate Your Experience
                      </Typography>
                      <Box className={classes.starsContainer}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <IconButton
                            key={star}
                            onClick={() => handleStarClick(star)}
                            className={`${classes.interactiveStar} ${
                              star <= formData.rating ? classes.activeInteractiveStar : ""
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
                      label="Share Your Experience"
                      name="review"
                      value={formData.review}
                      onChange={handleInputChange}
                      className={classes.formField}
                      variant="outlined"
                      multiline
                      rows={3}
                      placeholder="Tell us how our program helped your career..."
                      required
                    />

                    <Box className={classes.submitContainer}>
                      <Button
                        type="submit"
                        className={classes.submitButton}
                        disabled={loading}
                        startIcon={<SendIcon />}
                        endIcon={<FavoriteIcon className={classes.heartIcon} />}
                      >
                        {loading ? "Submitting..." : "Submit Review"}
                      </Button>
                    </Box>
                  </form>
                </Paper>
              </Box>
            </Box>
          </Grid>
        </Grid>

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