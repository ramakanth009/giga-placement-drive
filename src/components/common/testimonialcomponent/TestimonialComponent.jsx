import React, { useState } from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import Review from "../../../assets/review-girl.png"

const useStyles = makeStyles({
  testimonialSection: {
    backgroundColor: '#241555',
    padding: '40px 0 60px',
    width: '100%',
    overflow: 'hidden',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: '2rem !important',
    fontWeight: 'bold !important',
    marginBottom: '30px !important',
    '& span': {
      color: '#FFC614',
    },
  },
  carouselContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  testimonialContainer: {
    display: 'flex',
    maxWidth: '900px',
    margin: '0 auto',
    gap: '20px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
  },
  imageCard: {
    backgroundColor: '#F8F8F8',
    // padding: '25px 30px',
    borderRadius: '16px',
    width: '250px',
    height: '250px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 768px)': {
      width: '180px',
      height: '180px',
    },
  },
  testimonialImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  avatarGroup: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  smallAvatar: {
    width: '28px !important',
    height: '28px !important',
    border: '2px solid white',
    marginLeft: '-10px',
  },
  testimonialText: {
    borderRadius: '16px',
    padding: '25px 30px',
    backgroundColor: '#7865FF',
    color: 'white',
    position: 'relative',
    flex: 1,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    '@media (max-width: 768px)': {
      padding: '20px 25px',
    },
  },
  quoteIcon: {
    color: 'white',
    fontSize: '2.5rem !important',
    opacity: 0.7,
    marginBottom: '10px',
  },
  testimonialContent: {
    fontSize: '1rem !important',
    lineHeight: '1.6 !important',
    marginBottom: '20px !important',
  },
  testimonialAuthor: {
    display: 'flex',
    alignItems: 'center',
  },
  authorAvatar: {
    width: '40px !important',
    height: '40px !important',
    marginRight: '12px !important',
  },
  authorInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  authorName: {
    fontWeight: 'bold !important',
    fontSize: '1.1rem !important',
  },
  authorTitle: {
    fontSize: '0.9rem !important',
    opacity: 0.9,
  },
  ratingContainer: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '30px',
    padding: '5px 10px',
    display: 'flex',
    alignItems: 'center',
  },
  starIcon: {
    color: 'white',
    fontSize: '1rem !important',
  },
  paginationDots: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    margin: '0 5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  activeDot: {
    backgroundColor: 'white',
    width: '24px',
    borderRadius: '4px',
  },
  watermarkContainer:{
    backgroundColor: '#ffffff !important',
    position: 'absolute',
    bottom: '-20px',
    left: '10px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,

  },
  watermark: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    fontSize: '0.7rem !important',
    color: 'rgba(0, 0, 0, 0.3)',
  },
});

const TestimonialComponent = () => {
  const classes = useStyles();
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: '/path/to/testimonial-woman.jpg', // Replace with actual image path
      quote: 'This Program Helped Me Transition From A Non-Technical Background To A Data Analyst Role. The Project-Based Approach And Direct Employer Connections Made All The Difference',
      name: 'Riya Roy',
      title: 'Member of Data Science Group',
      avatar: '/path/to/avatar.jpg', // Replace with actual avatar path
      rating: 5,
    },
    // Add more testimonials as needed
  ];

  // For the demo, I'll use a placeholder image

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
                src={Review} 
                alt="Successful Graduate" 
                className={classes.testimonialImage} 
              />
              
            </Box>
            <Box className={classes.watermarkContainer}>

              <Typography className={classes.watermark}>
                ShutterstockImage
              </Typography>
              <Box className={classes.avatarGroup}>
                <Avatar className={classes.smallAvatar} src="/path/to/avatar1.jpg" />
                <Avatar className={classes.smallAvatar} src="/path/to/avatar2.jpg" />
                <Avatar className={classes.smallAvatar} src="/path/to/avatar3.jpg" />
              </Box>
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
                  src={Review}
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
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className={classes.starIcon} />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        
        {/* Pagination Dots */}
        <Box className={classes.paginationDots}>
          {[0, 1, 2].map((_, index) => (
            <Box 
              key={index}
              className={`${classes.dot} ${activeSlide === index ? classes.activeDot : ''}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialComponent;