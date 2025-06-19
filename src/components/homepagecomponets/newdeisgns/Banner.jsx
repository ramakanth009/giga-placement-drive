import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import HeroImage1 from '../../../assets/hero/Banner1.png';
import HeroImage2 from '../../../assets/hero/Banner2.png';
import HeroImage3 from '../../../assets/hero/Banner3.png';
// import HeroImage4 from '../../../assets/hero/Banner4.jpg';
// import HeroImage5 from '../../../assets/hero/Banner5.jpg';
// import HeroImage6 from '../../../assets/hero/Banner6.jpg';
// import HeroImage7 from '../../../assets/hero/Banner7.jpg';
// import HeroImage8 from '../../../assets/hero/Banner8.jpg';

const useStyles = makeStyles({
  heroSection: {
    width: '100vw',
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
    borderRadius:"40px",
    width: '100vw',
    // height: '100%',
    objectFit: 'fill',
    display: 'block',
},
swiperSlide: {
      padding:"5px 60px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Hero = () => {
  const classes = useStyles();

  const heroImages = [
    { src: HeroImage1, alt: 'Hero Banner 1' },
    { src: HeroImage2, alt: 'Hero Banner 2' },
    { src: HeroImage3, alt: 'Hero Banner 3' },
    // { src: HeroImage4, alt: 'Hero Banner 4' },
    // { src: HeroImage5, alt: 'Hero Banner 5' },
    // { src: HeroImage6, alt: 'Hero Banner 6' },
    // { src: HeroImage7, alt: 'Hero Banner 7' },
    // { src: HeroImage8, alt: 'Hero Banner 8' },
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