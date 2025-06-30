import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import HeroImage1 from '../../../assets/banners2/Banner1.png';
import HeroImage2 from '../../../assets/banners2/Banner2.png';
import HeroImage3 from '../../../assets/banners2/Banner3.png';
import HeroImage4 from '../../../assets/banners2/Banner4.png';

const useStyles = makeStyles({
  heroSection: {
    width: '100vw',
    position: 'relative',
    '@media (max-width: 600px)': {
      width: '100%',
      overflow: 'hidden',
    },
  },
  swiperContainer: {
    width: '100%',
  },
  heroImage: {
    borderRadius: "40px",
    width: '100vw',
    objectFit: 'fill',
    display: 'block',
    '@media (max-width: 1200px)': {
      borderRadius: "32px",
    },
    '@media (max-width: 960px)': {
      borderRadius: "24px",
    },
    '@media (max-width: 600px)': {
      borderRadius: "16px",
      width: '100%',
      objectFit: 'cover',
    },
    '@media (max-width: 480px)': {
      borderRadius: "12px",
    },
    '@media (max-width: 375px)': {
      borderRadius: "8px",
    },
  },
  swiperSlide: {
    padding: "5px 60px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 1200px)': {
      padding: "5px 48px",
    },
    '@media (max-width: 960px)': {
      padding: "5px 32px",
    },
    '@media (max-width: 600px)': {
      padding: "5px 20px",
    },
    '@media (max-width: 480px)': {
      padding: "5px 16px",
    },
    '@media (max-width: 375px)': {
      padding: "5px 12px",
    },
  },
  paginationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '18px',
    width: '100%',
    position: 'static',
    zIndex: 10,
    '@media (max-width: 600px)': {
      marginTop: '14px',
    },
    '@media (max-width: 480px)': {
      marginTop: '12px',
    },
  },
  '@global': {
    '.swiper-pagination': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '18px',
      position: 'static !important',
      '@media (max-width: 600px)': {
        marginTop: '14px',
      },
      '@media (max-width: 480px)': {
        marginTop: '12px',
      },
    },
    '.swiper-pagination-bullet': {
      background: '#fff',
      opacity: 0.7,
      margin: '0 6px',
      width: '22px !important',
      height: '22px !important',
      borderRadius: '50%',
      transition: 'background 0.3s, opacity 0.3s',
      '@media (max-width: 960px)': {
        width: '20px !important',
        height: '20px !important',
        margin: '0 5px',
      },
      '@media (max-width: 600px)': {
        width: '18px !important',
        height: '18px !important',
        margin: '0 4px',
      },
      '@media (max-width: 480px)': {
        width: '14px !important',
        height: '14px !important',
        margin: '0 3px',
      },
      '@media (max-width: 375px)': {
        width: '10px !important',
        height: '10px !important',
        margin: '0 2px',
      },
    },
    '.swiper-pagination-bullet-active': {
      background: '#FFC614 !important',
      opacity: 1,
      width: '22px !important',
      height: '22px !important',
      '@media (max-width: 960px)': {
        width: '20px !important',
        height: '20px !important',
      },
      '@media (max-width: 600px)': {
        width: '18px !important',
        height: '18px !important',
      },
      '@media (max-width: 480px)': {
        width: '14px !important',
        height: '14px !important',
      },
      '@media (max-width: 375px)': {
        width: '10px !important',
        height: '10px !important',
      },
    },
  },
});

const Banner = () => {
  const classes = useStyles();

  const heroImages = [
    { src: HeroImage1, alt: 'Giga Resume Builder - Build your Free Resume' },
    { src: HeroImage2, alt: 'Build your startup in Gigaversity' },
    { src: HeroImage3, alt: 'In-Campus Learning in Hyderabad' },
    { src: HeroImage4, alt: 'Learn Data Science and Full Stack development' },
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;