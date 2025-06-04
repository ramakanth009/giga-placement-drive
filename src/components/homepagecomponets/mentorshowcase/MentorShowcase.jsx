// // src/components/homepagecomponets/mentorshowcase/MentorShowcase.jsx
// import React from 'react';
// import { Box, Typography, Card, CardContent, Container } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// // Import required modules
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// // Import trainer images - Update with your correct path structure if needed
// import hemanthImg from '../../../assets/trainers/Hemanth_sairsm.jpg';
// import jaiImg from '../../../assets/trainers/Jai_shankar_reddy.jpg';
// import laxmanImg from '../../../assets/trainers/Laxman_eadala.jpg';
// import vinodImg from '../../../assets/trainers/Vinod_kumar.jpg';

// const useStyles = makeStyles({
//   section: {
//     padding: '60px 0',
//     borderRadius: '12px',
//     margin: '40px 0',
//   },
//   title: {
//     fontSize: '2.5rem !important',
//     fontWeight: '700 !important',
//     color: '#2A2B6A !important',
//     textAlign: 'center',
//     marginBottom: '16px !important',
//     '@media (max-width: 600px)': {
//       fontSize: '1.8rem !important',
//     },
//   },
//   subtitle: {
//     fontSize: '1.1rem !important',
//     color: '#666 !important',
//     textAlign: 'center',
//     maxWidth: '700px',
//     margin: '0 auto 40px auto !important',
//     '@media (max-width: 600px)': {
//       fontSize: '1rem !important',
//       maxWidth: '90%',
//       marginBottom: '30px !important',
//     },
//   },
//   card: {
//     borderRadius: '12px !important',
//     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1) !important',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     overflow: 'hidden',
//     '&:hover': {
//       transform: 'translateY(-8px)',
//       boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15) !important',
//     },
//   },
//   mediaContainer: {
//     position: 'relative',
//     paddingTop: '100%', // 1:1 Aspect ratio
//     overflow: 'hidden',
//     backgroundColor: '#f5f5f5',
//   },
//   media: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     transition: 'transform 0.5s ease',
//     '&:hover': {
//       transform: 'scale(1.05)',
//     },
//   },
//   cardContent: {
//     padding: '20px !important',
//     flexGrow: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     backgroundColor: '#fff',
//   },
//   mentorName: {
//     fontSize: '1.2rem !important',
//     fontWeight: 'bold !important',
//     color: '#333 !important',
//     marginBottom: '6px !important',
//   },
//   mentorTitle: {
//     fontSize: '0.9rem !important',
//     color: '#666 !important',
//     lineHeight: '1.4 !important',
//   },
//   swiperContainer: {
//     padding: '20px 50px !important',
//     '& .swiper-pagination': {
//       bottom: '-5px !important',
//     },
//     '& .swiper-pagination-bullet': {
//       backgroundColor: '#2A2B6A !important',
//       opacity: '0.5 !important',
//       '&.swiper-pagination-bullet-active': {
//         opacity: '1 !important',
//       },
//     },
//     '& .swiper-button-next, & .swiper-button-prev': {
//       color: '#2A2B6A !important',
//       '&:after': {
//         fontSize: '24px !important',
//         fontWeight: 'bold !important',
//       },
//     },
//     '@media (max-width: 600px)': {
//       padding: '20px 30px !important',
//     },
//   },
// });

// const MentorShowcase = () => {
//   const classes = useStyles();

//   // Trainers data with imported images
//   const trainers = [
//     {
//       id: 1,
//       name: 'Hemanth Sairsm',
//       title: 'Lead Instructor, Full Stack Development',
//       image: hemanthImg,
//     },
//     {
//       id: 2,
//       name: 'Jai Shankar Reddy',
//       title: 'Senior Technical Mentor, Backend Development',
//       image: jaiImg,
//     },
//     {
//       id: 4,
//       name: 'Laxman Eadala',
//       title: 'DevOps & Cloud Infrastructure Expert',
//       image: laxmanImg,
//     },
//     {
//       id: 5,
//       name: 'Vinod Kumar',
//       title: 'Industry Relations & Career Development Coach',
//       image: vinodImg,
//     },
//   ];

//   return (
//     <Box className={classes.section}>
//       <Container maxWidth="lg">
//         <Typography variant="h2" className={classes.title}>
//           Learn from Industry Experts and Startup Leaders
//         </Typography>
//         <Typography variant="body1" className={classes.subtitle}>
//           Get mentored by professionals who have built and scaled successful tech ventures.
//         </Typography>

//         <Box className={classes.swiperContainer}>
//           <Swiper
//             slidesPerView={1}
//             spaceBetween={30}
//             pagination={{
//               clickable: true,
//             }}
//             navigation={true}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 30,
//               },
//               1280: {
//                 slidesPerView: 4,
//                 spaceBetween: 40,
//               },
//             }}
//             modules={[Pagination, Navigation, Autoplay]}
//           >
//             {trainers.map((trainer) => (
//               <SwiperSlide key={trainer.id}>
//                 <Card className={classes.card}>
//                   <Box className={classes.mediaContainer}>
//                     <img
//                       src={trainer.image}
//                       alt={`Trainer ${trainer.name}`}
//                       className={classes.media}
//                     />
//                   </Box>
//                   <CardContent className={classes.cardContent}>
//                     <Typography className={classes.mentorName}>
//                       {trainer.name}
//                     </Typography>
//                     <Typography className={classes.mentorTitle}>
//                       {trainer.title}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default MentorShowcase;
// src/components/homepagecomponets/mentorshowcase/MentorShowcase.jsx
import React from 'react';
import { Box, Typography, Card, CardContent, Container, Chip, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
// Import required modules
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import trainer images
import hemanthImg from '../../../assets/trainers/Hemanth_sairsm.jpg';
import jaiImg from '../../../assets/trainers/Jai_shankar_reddy.jpg';
import laxmanImg from '../../../assets/trainers/Laxman_eadala.jpg';
import vinodImg from '../../../assets/trainers/Vinod_kumar.jpg';

const useStyles = makeStyles({
  section: {
    padding: '40px 0',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
      pointerEvents: 'none',
    },
  },
  container: {
    position: 'relative',
    zIndex: 1,
  },
  title: {
    fontSize: '3rem !important',
    fontWeight: '800 !important',
    color: '#ffffff !important',
    textAlign: 'center',
    // marginBottom: '16px !important',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    '@media (max-width: 600px)': {
      fontSize: '2.2rem !important',
    },
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: 'rgba(255,255,255,0.9) !important',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 20px auto !important',
    textShadow: '0 1px 2px rgba(0,0,0,0.2)',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
      maxWidth: '90%',
      marginBottom: '40px !important',
    },
  },
  card: {
    borderRadius: '20px !important',
    background: 'rgba(255, 255, 255, 0.95) !important',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15) !important',
    height: '420px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    overflow: 'hidden',
    position: 'relative',
    '&:hover': {
      transform: 'translateY(-15px) scale(1.02)',
      boxShadow: '0 35px 70px rgba(0, 0, 0, 0.25) !important',
      '& $profileImage': {
        transform: 'scale(1.1)',
      },
      '& $socialLinks': {
        opacity: 1,
        transform: 'translateY(0)',
      },
      '& $gradientOverlay': {
        opacity: 0.8,
      },
    },
  },
  profileSection: {
    position: 'relative',
    height: '240px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  profileImage: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid rgba(255, 255, 255, 0.9)',
    transition: 'transform 0.4s ease',
    zIndex: 2,
    position: 'relative',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%)',
    opacity: 0.6,
    transition: 'opacity 0.3s ease',
    zIndex: 1,
  },
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
    color: '#667eea !important',
    width: '32px !important',
    height: '32px !important',
    '&:hover': {
      backgroundColor: '#fff !important',
      transform: 'scale(1.1)',
    },
  },
  cardContent: {
    padding: '24px !important',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.95)',
  },
  mentorName: {
    fontSize: '1.4rem !important',
    fontWeight: '700 !important',
    color: '#2d3748 !important',
    marginBottom: '8px !important',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  mentorTitle: {
    fontSize: '0.95rem !important',
    color: '#718096 !important',
    lineHeight: '1.5 !important',
    marginBottom: '12px !important',
  },
  expertiseChip: {
    backgroundColor: 'rgba(102, 126, 234, 0.1) !important',
    color: '#667eea !important',
    fontSize: '0.8rem !important',
    height: '24px !important',
    borderRadius: '12px !important',
    border: '1px solid rgba(102, 126, 234, 0.2) !important',
  },
  swiperContainer: {
    padding: '20px 60px 10px 60px !important',
    '& .swiper': {
      paddingBottom: '50px !important',
    },
    '& .swiper-pagination': {
      bottom: '0 !important',
    },
    '& .swiper-pagination-bullet': {
      backgroundColor: 'rgba(255,255,255,0.5) !important',
      width: '12px !important',
      height: '12px !important',
      opacity: '1 !important',
      transition: 'all 0.3s ease !important',
      '&.swiper-pagination-bullet-active': {
        backgroundColor: '#ffffff !important',
        transform: 'scale(1.2)',
      },
    },
    '& .swiper-button-next, & .swiper-button-prev': {
      color: 'rgba(255,255,255,0.8) !important',
      backgroundColor: 'rgba(255,255,255,0.1) !important',
      width: '50px !important',
      height: '50px !important',
      borderRadius: '50% !important',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2) !important',
      transition: 'all 0.3s ease !important',
      '&:after': {
        fontSize: '20px !important',
        fontWeight: 'bold !important',
      },
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.2) !important',
        color: '#ffffff !important',
        transform: 'scale(1.1)',
      },
    },
    '@media (max-width: 600px)': {
      padding: '20px 30px 50px 30px !important',
    },
  },
});

const MentorShowcase = () => {
  const classes = useStyles();

  // Enhanced trainers data with expertise tags
  const trainers = [
    {
      id: 1,
      name: 'Hemanth Sairsm',
      title: 'Lead Instructor & Full Stack Architect',
      expertise: 'React & Node.js',
      image: hemanthImg,
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 2,
      name: 'Jai Shankar Reddy',
      title: 'Senior Technical Mentor & Backend Specialist',
      expertise: 'System Design',
      image: jaiImg,
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 3,
      name: 'Laxman Eadala',
      title: 'DevOps & Cloud Infrastructure Expert',
      expertise: 'AWS & Docker',
      image: laxmanImg,
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 4,
      name: 'Vinod Kumar',
      title: 'Career Development & Industry Relations Coach',
      expertise: 'Leadership',
      image: vinodImg,
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
  ];

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          Meet Your Mentors
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Learn from industry veterans who have shaped the tech landscape and built successful ventures from the ground up.
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
                effect: 'slide',
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
                effect: 'slide',
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                effect: 'coverflow',
              },
            }}
            modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          >
            {trainers.map((trainer) => (
              <SwiperSlide key={trainer.id} style={{ width: '320px' }}>
                <Card className={classes.card}>
                  <Box className={classes.profileSection}>
                    <Box className={classes.gradientOverlay} />
                    <img
                      src={trainer.image}
                      alt={`Mentor ${trainer.name}`}
                      className={classes.profileImage}
                    />
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