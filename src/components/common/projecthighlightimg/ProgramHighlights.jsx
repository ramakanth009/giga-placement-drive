import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { 
  Work as JobIcon,
  School as CertIcon,
  Assignment as ResumeIcon,
  Code as CodeIcon,
  Folder as ProjectIcon,
  TrendingUp as GrowthIcon
} from '@mui/icons-material';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    position: 'relative',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1A1B4A 100%)',
    overflow: 'hidden',
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: '700 !important',
    color: '#ffffff !important',
    textAlign: 'center',
    marginBottom: '24px !important',
    position: 'relative',
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 60px !important',
  },
  highlight: {
    color: '#FFC614 !important',
    position: 'relative',
    display: 'inline-block',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '5px',
      left: '0',
      width: '100%',
      height: '30%',
      background: 'rgba(255, 198, 20, 0.2)',
      zIndex: -1,
      borderRadius: '2px',
    }
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    '@media (max-width: 960px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '25px',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gap: '20px',
    },
  },
  card: {
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '30px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    opacity: 0,
    transform: 'translateY(30px)',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
      '& $cardIconCircle': {
        transform: 'scale(1.15)',
      },
      '& $cardShine': {
        opacity: 1,
        transform: 'translateX(200px) translateY(-100px)',
      }
    },
  },
  cardVisible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  cardShine: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50px',
    height: '100%',
    background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
    transform: 'translateX(-100px) translateY(0)',
    transition: 'all 0.5s ease',
    opacity: 0,
    pointerEvents: 'none',
    zIndex: 2,
  },
  cardIconCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%)',
    marginBottom: '20px',
    transition: 'all 0.4s ease',
    position: 'relative',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    '&:before': {
      content: '""',
      position: 'absolute',
      inset: '0',
      borderRadius: '50%',
      padding: '2px',
      background: 'linear-gradient(135deg, rgba(255, 198, 20, 0.8) 0%, rgba(42, 43, 106, 0.8) 100%)',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
    }
  },
  cardIcon: {
    fontSize: '2.2rem !important',
    color: 'currentColor',
  },
  cardTitle: {
    fontSize: '1.2rem !important',
    fontWeight: '600 !important',
    color: '#ffffff !important',
    marginBottom: '12px !important',
    position: 'relative',
    zIndex: 1,
  },
  cardDescription: {
    fontSize: '0.9rem !important',
    color: 'rgba(255, 255, 255, 0.7) !important',
    lineHeight: '1.5 !important',
  },
  backgroundGlow: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    filter: 'blur(150px)',
    opacity: 0.15,
    zIndex: 0,
  },
  topRightGlow: {
    background: '#FFC614',
    top: '-200px',
    right: '-200px',
  },
  bottomLeftGlow: {
    background: '#7039e5',
    bottom: '-300px',
    left: '-200px',
  },
  decorativeElement: {
    position: 'absolute',
    zIndex: 1,
    opacity: 0.05,
  },
  circleElement: {
    borderRadius: '50%',
    border: '2px solid #FFC614',
  },
  squareElement: {
    width: '40px',
    height: '40px',
    border: '2px solid white',
    transform: 'rotate(45deg)',
  },
  floatingAnimation: {
    animation: '$floating 8s infinite ease-in-out',
  },
  '@keyframes floating': {
    '0%': {
      transform: 'translateY(0px) rotate(0deg)',
    },
    '50%': {
      transform: 'translateY(-20px) rotate(5deg)',
    },
    '100%': {
      transform: 'translateY(0px) rotate(0deg)',
    },
  },
  dotsPattern: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    backgroundImage: 'radial-gradient(circle, #FFC614 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    opacity: 0.1,
    zIndex: 1,
  },
  dotsTopRight: {
    top: '10%',
    right: '5%',
  },
  dotsBottomLeft: {
    bottom: '10%',
    left: '5%',
  },
});

// Enhanced card data with descriptions
const cardData = [
  { 
    icon: <JobIcon className="cardIcon" />, 
    title: '400+ Job Opportunities', 
    color: '#64ffda',
    description: 'Direct connections to our network of hiring partners actively seeking fresh talent'
  },
  { 
    icon: <CertIcon className="cardIcon" />, 
    title: 'Industry-Recognized Certification', 
    color: '#ff647f',
    description: 'Validate your skills with certificates valued by employers in the tech industry'
  },
  { 
    icon: <ResumeIcon className="cardIcon" />, 
    title: 'Resume & Interview Prep', 
    color: '#ffbd4a',
    description: 'Expert guidance on crafting standout resumes and mastering technical interviews'
  },
  { 
    icon: <CodeIcon className="cardIcon" />, 
    title: 'Cutting-Edge Web Tech', 
    color: '#57cbff',
    description: 'Learn the latest tools and technologies that employers are actively seeking'
  },
  { 
    icon: <ProjectIcon className="cardIcon" />, 
    title: '10+ Portfolio Projects', 
    color: '#7c4dff',
    description: 'Build impressive projects that showcase your skills to potential employers'
  },
  { 
    icon: <GrowthIcon className="cardIcon" />, 
    title: '30 Days Job Training', 
    color: '#4caf50',
    description: 'Intensive, focused training designed to get you job-ready in just one month'
  },
];

// Create decorative elements for background
const decorativeElements = [
  { type: 'circle', size: '80px', top: '15%', right: '10%', className: 'floatingAnimation' },
  { type: 'circle', size: '40px', top: '25%', left: '8%' },
  { type: 'circle', size: '60px', bottom: '20%', right: '15%' },
  { type: 'square', top: '40%', right: '20%' },
  { type: 'square', bottom: '30%', left: '12%', className: 'floatingAnimation' },
];

const ProgramHighlights = () => {
  const classes = useStyles();
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' 
      }
    );

    cardsRef.current.forEach((card, index) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <Box className={classes.section}>
      {/* Background glows */}
      <Box className={`${classes.backgroundGlow} ${classes.topRightGlow}`} />
      <Box className={`${classes.backgroundGlow} ${classes.bottomLeftGlow}`} />
      
      {/* Decorative dot patterns */}
      <Box className={`${classes.dotsPattern} ${classes.dotsTopRight}`} />
      <Box className={`${classes.dotsPattern} ${classes.dotsBottomLeft}`} />
      
      {/* Decorative geometry elements */}
      {decorativeElements.map((elem, i) => (
        <Box
          key={i}
          className={`${classes.decorativeElement} ${elem.type === 'circle' ? classes.circleElement : classes.squareElement} ${elem.className ? classes[elem.className] : ''}`}
          sx={{
            width: elem.size,
            height: elem.size,
            top: elem.top,
            left: elem.left,
            right: elem.right,
            bottom: elem.bottom,
          }}
        />
      ))}

      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          Program <span className={classes.highlight}>Highlights</span>
        </Typography>
        
        <Typography variant="body1" className={classes.subtitle}>
          Join our exclusive program that combines intensive training with direct job connections
          to launch your tech career in just 30 days
        </Typography>

        <Box className={classes.cardsContainer}>
          {cardData.map((card, index) => (
            <Box
              key={index}
              ref={el => cardsRef.current[index] = el}
              data-index={index}
              className={`${classes.card} ${visibleCards.includes(index) ? classes.cardVisible : ''}`}
              sx={{
                transitionDelay: `${index * 150}ms`,
                borderTop: `3px solid ${card.color}`,
              }}
            >
              <Box className={classes.cardShine} />
              
              <Box 
                className={classes.cardIconCircle}
                sx={{ color: card.color }}
              >
                {React.cloneElement(card.icon, { className: classes.cardIcon })}
              </Box>
              
              <Typography className={classes.cardTitle}>
                {card.title}
              </Typography>
              
              <Typography className={classes.cardDescription}>
                {card.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProgramHighlights;