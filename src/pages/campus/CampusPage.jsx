// src/pages/campus/CampusPage.jsx
import React from 'react';
import { Box, Typography, Container, Button, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { scrollToTop } from '../../utils/scrollUtils';

// Demo data for campus features
const campusFeatures = [
  {
    id: 1,
    title: "Collaborative Seating",
    description: "Our campus features ergonomically designed seating areas that foster collaboration and idea-sharing. These spaces are strategically placed throughout the campus to encourage spontaneous discussions and team brainstorming sessions.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    alt: "Collaborative Seating Areas"
  },
  {
    id: 2,
    title: "Modern Workstations",
    description: "Equipped with the latest technology, our workstations provide students with everything they need to excel in their projects. Each station includes high-performance computers, adjustable desks, and industry-standard software to ensure students are prepared for real-world challenges.",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094",
    alt: "Modern Workstations"
  },
  {
    id: 3,
    title: "High-tech Classrooms",
    description: "Our classrooms are designed for dynamic learning experiences with interactive smartboards, surround sound systems, and flexible seating arrangements. These spaces adapt to various teaching methodologies and learning styles to maximize student engagement and knowledge retention.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    alt: "High-tech Classrooms"
  },
  {
    id: 4,
    title: "Advanced Projectors",
    description: "Our 4K ultra-HD projectors deliver crystal-clear visuals that enhance the learning experience. With smart connectivity features, instructors can seamlessly share content from various devices, making presentations more engaging and effective.",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17",
    alt: "Advanced Projectors"
  },
  {
    id: 5,
    title: "Expert Faculty",
    description: "Our instructors come from diverse industry backgrounds, bringing real-world experience and insights to the classroom. With a perfect blend of academic excellence and practical knowledge, they mentor students to develop both theoretical understanding and applied skills.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
    alt: "Expert Faculty"
  },
  {
    id: 6,
    title: "Engaging Learning Activities",
    description: "Beyond traditional lectures, our curriculum includes hands-on workshops, hackathons, industry projects, and peer learning sessions. These activities help students apply theoretical knowledge to solve real problems while developing crucial soft skills like teamwork and communication.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    alt: "Learning Activities"
  },
  {
    id: 7,
    title: "Project-Based Learning Approach",
    description: "Our unique learning methodology emphasizes learning by doing. Students work on real industry projects from day one, receiving guidance from mentors and feedback from peers. This approach ensures that theory is immediately applied to practice, resulting in deeper understanding and skill mastery.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    alt: "Learning Approach"
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
    fontSize: '3.5rem !important',
    fontWeight: '700 !important',
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
    fontSize: '1.5rem !important',
    marginBottom: '30px !important',
    fontWeight: '300 !important',
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
    padding: '80px 0',
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
    marginBottom: '120px',
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
  learnMoreLink: {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      color: '#FFC614 !important',
    },
  },
  arrowIcon: {
    marginLeft: '8px',
    transition: 'all 0.3s ease',
  },
  arrowIconHover: {
    transform: 'translateX(5px)',
  },
  statsSection: {
    backgroundColor: '#2A2B6A',
    padding: '80px 0',
    color: 'white',
    textAlign: 'center',
    '@media (max-width: 960px)': {
      padding: '60px 0',
    },
    '@media (max-width: 600px)': {
      padding: '40px 0',
    },
  },
  statContainer: {
    padding: '20px',
    '@media (max-width: 600px)': {
      padding: '10px',
    },
  },
  statNumber: {
    fontSize: '3.5rem !important',
    fontWeight: 'bold !important',
    color: '#FFC614 !important',
    marginBottom: '10px !important',
    '@media (max-width: 960px)': {
      fontSize: '3rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2.5rem !important',
    },
  },
  statLabel: {
    fontSize: '1.2rem !important',
    opacity: '0.9',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  callToActionSection: {
    padding: '100px 0',
    textAlign: 'center',
    background: 'linear-gradient(rgba(42, 43, 106, 0.03), rgba(42, 43, 106, 0.07))',
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
  testimonialSection: {
    padding: '80px 0',
    backgroundColor: '#fff',
    '@media (max-width: 960px)': {
      padding: '60px 0',
    },
    '@media (max-width: 600px)': {
      padding: '40px 0',
    },
  },
  testimonialCard: {
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    height: '100%',
    position: 'relative',
    '@media (max-width: 600px)': {
      padding: '20px',
    },
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    },
    '&::before': {
      content: '"""',
      position: 'absolute',
      top: '20px',
      left: '20px',
      fontSize: '5rem',
      color: 'rgba(42, 43, 106, 0.1)',
      fontFamily: 'serif',
      lineHeight: '1',
    },
  },
  testimonialText: {
    fontSize: '1.1rem !important',
    fontStyle: 'italic',
    color: '#555 !important',
    marginBottom: '20px !important',
    position: 'relative',
    zIndex: 1,
    paddingTop: '20px',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  testimonialAuthor: {
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
  },
  testimonialRole: {
    color: '#777 !important',
    fontSize: '0.9rem !important',
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
        <Typography 
          className={classes.learnMoreLink}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Learn more 
          <ArrowForwardIcon 
            className={`${classes.arrowIcon} ${hovered ? classes.arrowIconHover : ''}`} 
          />
        </Typography>
      </Box>
    </Box>
  );
};

// Component for stats
const StatsSection = () => {
  const classes = useStyles();
  
  const stats = [
    { number: "500+", label: "Students Enrolled" },
    { number: "50+", label: "Expert Faculty" },
    { number: "98%", label: "Placement Rate" },
    { number: "150+", label: "Industry Partners" }
  ];
  
  return (
    <Box className={classes.statsSection}>
      <Container>
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box className={classes.statContainer}>
                <Typography variant="h3" className={classes.statNumber}>
                  {stat.number}
                </Typography>
                <Typography variant="body1" className={classes.statLabel}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Component for testimonials
const TestimonialSection = () => {
  const classes = useStyles();
  
  const testimonials = [
    {
      text: "The campus environment at Gigaversity is unlike any other. The collaborative spaces and advanced technology truly enable me to excel in my studies and projects.",
      author: "Riya Sharma",
      role: "Full Stack Development Student"
    },
    {
      text: "What sets this campus apart is the combination of industry-leading facilities and expert faculty who are always available to help. The project-based learning approach has given me real-world skills.",
      author: "Ajay Kumar",
      role: "Data Science Student"
    },
    {
      text: "I transferred here from another university, and the difference is night and day. The high-tech classrooms and hands-on learning activities have made learning more engaging and effective.",
      author: "Priya Patel",
      role: "Web Development Student"
    }
  ];
  
  return (
    <Box className={classes.testimonialSection}>
      <Container>
        <Typography variant="h2" className={classes.sectionTitle}>
          What Our Students Say
        </Typography>
        
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper className={classes.testimonialCard} elevation={0}>
                <Typography variant="body1" className={classes.testimonialText}>
                  {testimonial.text}
                </Typography>
                <Typography variant="h6" className={classes.testimonialAuthor}>
                  {testimonial.author}
                </Typography>
                <Typography variant="body2" className={classes.testimonialRole}>
                  {testimonial.role}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
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
            Welcome to our <span className={classes.heroTitleHighlight}>State-of-the-Art Campus</span>
          </Typography>
          <Typography variant="h6" className={classes.heroSubtitle}>
            Experience the ultimate learning environment designed for innovation, collaboration, and success
          </Typography>
          <Button variant="contained" className={classes.bookTourBtn} onClick={scrollToTop}>
            Book a Campus Tour <ArrowForwardIcon />
          </Button>
        </Box>
      </Box>
      
      {/* Campus Features Section */}
      <Box className={classes.featureSectionContainer}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Explore Our Campus Features
        </Typography>
        
        {campusFeatures.map((feature, index) => (
          <FeatureItem key={feature.id} feature={feature} index={index} />
        ))}
      </Box>
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Testimonial Section */}
      <TestimonialSection />
      
      {/* Call to Action Section */}
      <Box className={classes.callToActionSection}>
        <Container>
          <Typography variant="h2" className={classes.ctaTitle}>
            Ready to Experience Our Campus?
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