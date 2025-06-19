import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

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
    position: 'relative',
  },
  swiperContainer: {
    width: '100%',
  },
  heroImage: {
    borderRadius:"40px",
    width: '100vw',
    objectFit: 'fill',
    display: 'block',
  },
  swiperSlide: {
    padding:"5px 60px",
    display: 'flex',
    flexDirection: 'column', // Add this to stack image and dots vertically
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '18px',
    width: '100%',
    position: 'static',
    zIndex: 10,
  },
  '@global': {
    '.swiper-pagination': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '18px',
      position: 'static !important', // Ensure not overlaying image
    },
    '.swiper-pagination-bullet': {
      background: '#fff',
      opacity: 0.7,
      margin: '0 6px',
      width: '22px !important',         // Increased size
      height: '22px !important',        // Increased size
      borderRadius: '50%',
      transition: 'background 0.3s, opacity 0.3s',
    },
    '.swiper-pagination-bullet-active': {
      background: '#FFC614 !important', // Active color
      opacity: 1,
      width: '22px !important',         // Optionally make active dot even bigger
      height: '22px !important',
    },
  },
});

const Banner = () => {
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
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
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
            {/* Pagination dots will be rendered by Swiper below all slides */}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Remove custom pagination wrapper */}
    </div>
  );
};
export default Banner;