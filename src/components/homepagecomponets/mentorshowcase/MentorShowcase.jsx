// src/components/homepagecomponets/mentorshowcase/MentorShowcase.jsx
import React from 'react';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import trainer images - Update with your correct path structure if needed
import hemanthImg from '../../../assets/trainers/Hemanth_sairsm.jpg';
import jaiImg from '../../../assets/trainers/Jai_shankar_reddy.jpg';
import laxmanImg from '../../../assets/trainers/Laxman_eadala.jpg';
import pavanImg from '../../../assets/trainers/Pavan_Kumar.jpg';
import vinodImg from '../../../assets/trainers/Vinod_kumar.jpg';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    borderRadius: '12px',
    margin: '40px 0',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: '700 !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '16px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#666 !important',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 40px auto !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      maxWidth: '90%',
      marginBottom: '30px !important',
    },
  },
  card: {
    borderRadius: '12px !important',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1) !important',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15) !important',
    },
  },
  mediaContainer: {
    position: 'relative',
    paddingTop: '100%', // 1:1 Aspect ratio
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  media: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  cardContent: {
    padding: '20px !important',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  mentorName: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#333 !important',
    marginBottom: '6px !important',
  },
  mentorTitle: {
    fontSize: '0.9rem !important',
    color: '#666 !important',
    lineHeight: '1.4 !important',
  },
  swiperContainer: {
    padding: '20px 50px !important',
    '& .swiper-pagination': {
      bottom: '-5px !important',
    },
    '& .swiper-pagination-bullet': {
      backgroundColor: '#2A2B6A !important',
      opacity: '0.5 !important',
      '&.swiper-pagination-bullet-active': {
        opacity: '1 !important',
      },
    },
    '& .swiper-button-next, & .swiper-button-prev': {
      color: '#2A2B6A !important',
      '&:after': {
        fontSize: '24px !important',
        fontWeight: 'bold !important',
      },
    },
    '@media (max-width: 600px)': {
      padding: '20px 30px !important',
    },
  },
});

const MentorShowcase = () => {
  const classes = useStyles();

  // Trainers data with imported images
  const trainers = [
    {
      id: 1,
      name: 'Hemanth Sairsm',
      title: 'Lead Instructor, Full Stack Development',
      image: hemanthImg,
    },
    {
      id: 2,
      name: 'Jai Shankar Reddy',
      title: 'Senior Technical Mentor, Backend Development',
      image: jaiImg,
    },
    {
      id: 4,
      name: 'Laxman Eadala',
      title: 'DevOps & Cloud Infrastructure Expert',
      image: laxmanImg,
    },
    {
      id: 5,
      name: 'Pavan Kumar',
      title: 'Frontend Technologies & UI/UX Mentor',
      image: pavanImg,
    },
    {
      id: 6,
      name: 'Vinod Kumar',
      title: 'Industry Relations & Career Development Coach',
      image: vinodImg,
    },
  ];

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.title}>
          Learn from Industry Experts and Startup Leaders
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Get mentored by professionals who have built and scaled successful tech ventures.
        </Typography>

        <Box className={classes.swiperContainer}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {trainers.map((trainer) => (
              <SwiperSlide key={trainer.id}>
                <Card className={classes.card}>
                  <Box className={classes.mediaContainer}>
                    <img
                      src={trainer.image}
                      alt={`Trainer ${trainer.name}`}
                      className={classes.media}
                    />
                  </Box>
                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.mentorName}>
                      {trainer.name}
                    </Typography>
                    <Typography className={classes.mentorTitle}>
                      {trainer.title}
                    </Typography>
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