// src/pages/campus/CampusPage.jsx
import React from 'react';
import { Box, Typography, Container, Button, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { scrollToTop } from '../../utils/scrollUtils';

// Import images
import foundationHallImg from '../../assets/mentor-room/Foundation-hall.png';
import productRoomImg from '../../assets/mentor-room/Product-room.jpg';
import startupRoomImg from '../../assets/mentor-room/Startup-room.png';
import mentorRoomImg from '../../assets/mentor-room/mentor-room .png';
import ventureHallImg from '../../assets/mentor-room/venture-hall.jpg';
import caffe from '../../assets/mentor-room/cafe.jpg';
import sportsarena from '../../assets/mentor-room/sports-arena.jpg';
import startupimg from '../../assets/mentor-room/coming-soon-with-colorful-cut-out-foil-ribbon-confetti-background.jpg'

// Demo data for campus features
const campusFeatures = [
  {
    id: 1,
    title: "The Foundation Hall",
    description: "A dynamic and inclusive space where students from all backgrounds come together for the first time. Through collaborative learning, high-energy sessions, peer-to-peer interactions, and hands-on problem solving, this is where confidence begins to build. Students tackle challenges they never imagined they could, setting the stage for a strong learning journey ahead.",
    image: foundationHallImg,
    alt: "The Foundation Hall"
  },
  {
    id: 2,
    title: "The Product Chamber",
    description: "The Product Chamber is where real tech products are envisioned, developed, and brought to life by collaborative student teams. Designed to simulate a real-world tech environment, this space encourages creativity, technical excellence, and teamwork. Students gain end-to-end product experience—from ideation to final execution—making them truly product-ready.",
    image: productRoomImg,
    alt: "The Product Chamber"
  },
  {
    id: 3,
    title: "The Startup Studio",
    description: "Fuel innovative ideas with hands-on support, personalized mentorship, and direct guidance from successful founders. The Startup Studio empowers students to build, launch, and scale their own products from the ground up. Selected creators can secure up to ₹1 lakh in funding—not as a reward, but as real backing to bring startup ideas to life with confidence.",
    image: startupRoomImg,
    alt: "The Startup Studio"
  },
  {
    id: 4,
    title: "Campus Café",
    description: "Students gather at the Campus Café—a space built for thinkers, makers, and innovators to connect and recharge. Designed for conversation and collaboration, it’s where ideas flow freely and bonds are built over brews. After all, some of the world’s most successful startups began with a simple coffee chat—and we’re not leaving that to chance.",
    image: caffe, // Placeholder for missing image
    alt: "Campus Café"
  },
  {
    id: 5,
    title: "The Mentor Hub",
    description: "Connect with experienced industry professionals and expert mentors who offer personalized support tailored to individual learning paths. The Mentor Hub facilitates 1:1 sessions, expert reviews, and career advice that accelerates both technical and professional growth. It's the space where doubts are cleared, confidence is nurtured, and ambitions are shaped into reality.",
    image: mentorRoomImg,
    alt: "The Mentor Hub"
  },
  {
    id: 6,
    title: "The Play Arena",
    description: "A space to step away from screens and into real play. From cricket to badminton, chess to table tennis—The Play Arena is where confidence grows, teams bond, and leadership begins to form—on the field and beyond. With regular matches, recreational sessions, and team activities, it brings balance to high-performance learning while energizing both mind and body.",
    image: sportsarena, // Placeholder for missing image
    alt: "The Play Arena"
  },
  {
    id: 7,
    title: "The Venture Hall",
    description: "Venture Hall is where the entrepreneurial spirit of Gigaversity comes alive. This space hosts exclusive startup events, bringing together founders, investors, VCs, and industry leaders. Students pitch their startup ideas, receive expert feedback, and showcase live demos—getting real exposure, valuable insights, and potential investor attention to take their vision forward.",
    image: ventureHallImg,
    alt: "The Venture Hall"
  },
  {
    id: 8,
    title: "Innovation Connect → Investor Connect",
    description: "A vibrant monthly gathering where students, startup founders, co-founders, tech innovators, and industry professionals come together to network, pitch, and collaborate. Innovation Connect goes beyond traditional meetups—it's a launchpad for new ideas, early product demos, strategic partnerships, and community-driven innovation. Whether showcasing a new product, seeking co-founders, or discovering breakthrough technologies, this event fuels meaningful connections and inspires entrepreneurial growth across all levels of experience.",
    image: startupimg,
    alt: "Innovation Connect → Investor Connect"
  }
];

const useStyles = makeStyles({
  pageContainer: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#f8f9fc",
  },
  heroSection: {
    position: 'relative',
    height: '90vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(42, 43, 106)',
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(42, 43, 106, 0.75), rgba(42, 43, 106, 0.75))',
    zIndex: 1,
  },
  videoIframe: {
    minWidth: '100%',
    minHeight: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    objectFit: 'cover',
    border: 'none',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: 'white',
    padding: '0 20px',
    maxWidth: '800px',
  },
  heroTitle: {
    color: '#FFFFFF !important',
    fontSize: '4rem !important',
    fontWeight: '800 !important',
    marginBottom: '20px !important',
    lineHeight: '1.2 !important',
    '@media (max-width: 960px)': {
      fontSize: '2.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2.2rem !important',
    },
  },
  heroTitleHighlight: {
    color: '#FFC614 !important',
  },
  heroSubtitle: {
    color: '#FFFFFF !important',
    fontWeight: 'bold !important',
    fontSize: '1.5rem !important',
    marginBottom: '30px !important',
    '@media (max-width: 960px)': {
      fontSize: '1.3rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
  },
  bookTourBtn: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    padding: '12px 25px !important',
    borderRadius: '50px !important',
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: '#FFD44D !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1) !important',
    },
    '@media (max-width: 600px)': {
      padding: '10px 20px !important',
      fontSize: '1rem !important',
    },
  },
  featureSectionContainer: {
    padding: '80px 0 0px 0',
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    '@media (max-width: 960px)': {
      padding: '60px 0',
    },
    '@media (max-width: 600px)': {
      padding: '40px 0',
    },
  },
  sectionTitle: {
    fontSize: '2.5rem !important',
    fontWeight: '700 !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '60px !important',
    position: 'relative',
    '& span': {
      color: '#FFC614 !important',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: '#FFC614',
      borderRadius: '2px',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
      marginBottom: '50px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '40px !important',
    },
  },
  featureContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '40px',
    padding: '0 20px',
    '@media (max-width: 960px)': {
      marginBottom: '80px',
      flexDirection: 'column-reverse !important',
      gap: '30px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '60px',
    },
  },
  featureImage: {
    flex: 1,
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    },
  },
  featureImageInner: {
    width: '100%',
    height: 'auto',
    display: 'block',
    transition: 'all 0.5s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  featureContent: {
    flex: 1,
    padding: '0 40px',
    '@media (max-width: 960px)': {
      padding: '0 20px',
    },
  },
  featureTitle: {
    fontSize: '2rem !important',
    fontWeight: '700 !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.5rem !important',
      marginBottom: '15px !important',
    },
  },
  featureDescription: {
    fontSize: '1.1rem !important',
    color: '#666 !important',
    lineHeight: '1.7 !important',
    marginBottom: '25px !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '20px !important',
    },
  },
  learnMoreBtn: {
    backgroundColor: '#2A2B6A !important',
    color: '#FFFFFF !important',
    padding: '8px 20px !important',
    borderRadius: '50px !important',
    fontSize: '1rem !important',
    fontWeight: '600 !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: '#FFC614 !important',
      color: '#2A2B6A !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1) !important',
    },
  },
  callToActionSection: {
    padding: '0px 0 40px 0',
    textAlign: 'center',
    // background: 'linear-gradient(rgba(42, 43, 106, 0.03), rgba(42, 43, 106, 0.07))',
    '@media (max-width: 960px)': {
      padding: '80px 0',
    },
    '@media (max-width: 600px)': {
      padding: '60px 0',
    },
  },
  ctaTitle: {
    fontSize: '2.8rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    '@media (max-width: 960px)': {
      fontSize: '2.4rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
    },
  },
  ctaSubtitle: {
    fontSize: '1.3rem !important',
    color: '#555 !important',
    maxWidth: '800px',
    margin: '0 auto 40px auto !important',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
      margin: '0 auto 30px auto !important',
    },
  },
});

// Component for individual feature
const FeatureItem = ({ feature, index }) => {
  const classes = useStyles();
  const [hovered, setHovered] = React.useState(false);

  return (
    <Box 
      className={classes.featureContainer} 
      sx={{ 
        flexDirection: index % 2 === 0 ? 'row-reverse' : 'row',
      }}
    >
      <Box className={classes.featureImage}>
        <img 
          src={feature.image} 
          alt={feature.alt} 
          className={classes.featureImageInner}
        />
      </Box>
      <Box className={classes.featureContent}>
        <Typography variant="h3" className={classes.featureTitle}>
          {feature.title}
        </Typography>
        <Typography variant="body1" className={classes.featureDescription}>
          {feature.description}
        </Typography>
        <Button 
          variant="contained"
          className={classes.learnMoreBtn}
          endIcon={<ArrowForwardIcon />}
        >
          Learn more
        </Button>
      </Box>
    </Box>
  );
};

const CampusPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.pageContainer}>
      
      {/* Hero Section */}
      <Box className={classes.heroSection}>
        <Box className={classes.videoOverlay}></Box>
        <iframe 
          className={classes.videoIframe}
          src="https://www.youtube.com/embed/IxRVa1DbSAg?si=eZ7wKjpvpVlOlrVU&autoplay=1&mute=1&loop=1&controls=0&playlist=IxRVa1DbSAg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          frameBorder="0"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
        
        <Box className={classes.heroContent}>
          <Typography variant="h1" className={classes.heroTitle}>
            Welcome to our <span className={classes.heroTitleHighlight}>State of the Art Campus</span>
          </Typography>
          <Typography variant="h6" className={classes.heroSubtitle}>
            Experience the ultimate learning environment designed for innovation, collaboration, and success
          </Typography>
          <Button variant="contained" className={classes.bookTourBtn} onClick={scrollToTop}>
            Book a call with us today <ArrowForwardIcon />
          </Button>
        </Box>
      </Box>
      
      {/* Campus Features Section */}
      <Box className={classes.featureSectionContainer}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Explore Our <span>Campus</span> Features
        </Typography>
        
        {campusFeatures.map((feature, index) => (
          <FeatureItem key={feature.id} feature={feature} index={index} />
        ))}
      </Box>
      
      {/* Call to Action Section */}
      <Box className={classes.callToActionSection}>
        <Container>
          <Typography variant="h2" className={classes.ctaTitle}>
            Ready to Experience <span className={classes.heroTitleHighlight}>Our Campus?</span>
          </Typography>
          <Typography variant="h6" className={classes.ctaSubtitle}>
            Join us for a personalized campus tour and discover the perfect environment for your educational journey
          </Typography>
          <Button variant="contained" className={classes.bookTourBtn} onClick={scrollToTop}>
            Schedule Your Visit Today <ArrowForwardIcon />
          </Button>
        </Container>
      </Box>
      
    </Box>
  );
};

export default CampusPage;