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
    '@media (max-width: 1200px)': {
      padding: '70px 0',
    },
    '@media (max-width: 960px)': {
      padding: '60px 0',
    },
    '@media (max-width: 600px)': {
      padding: '50px 0',
    },
    '@media (max-width: 480px)': {
      padding: '40px 0',
    },
    '@media (max-width: 375px)': {
      padding: '30px 0',
    }
  },
  container: {
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      maxWidth: '90%',
    },
    '@media (max-width: 480px)': {
      maxWidth: '95%',
    }
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: '700 !important',
    color: '#ffffff !important',
    textAlign: 'center',
    marginBottom: '24px !important',
    position: 'relative',
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
      marginBottom: '22px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.1rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem !important',
      marginBottom: '16px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.4rem !important',
      marginBottom: '14px !important',
    }
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 60px !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.05rem !important',
      maxWidth: '650px',
      margin: '0 auto 50px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '600px',
      margin: '0 auto 45px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
      maxWidth: '100%',
      margin: '0 auto 40px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      lineHeight: '1.5 !important',
      margin: '0 auto 35px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      lineHeight: '1.4 !important',
      margin: '0 auto 30px !important',
    }
  },
  highlight: {
    color: '#FFC614 !important',
    position: 'relative',
    display: 'inline-block',
    '@media (max-width: 480px)': {
      display: 'inline',
    }
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    '@media (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '25px',
      maxWidth: '950px',
    },
    '@media (max-width: 960px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      maxWidth: '700px',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gap: '20px',
      maxWidth: '400px',
    },
    '@media (max-width: 480px)': {
      gap: '18px',
      maxWidth: '350px',
    },
    '@media (max-width: 375px)': {
      gap: '15px',
      maxWidth: '300px',
    }
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
      }
    },
    '@media (max-width: 1200px)': {
      padding: '28px 18px',
      borderRadius: '14px',
    },
    '@media (max-width: 960px)': {
      padding: '25px 16px',
      borderRadius: '12px',
    },
    '@media (max-width: 600px)': {
      padding: '22px 15px',
      borderRadius: '12px',
    },
    '@media (max-width: 480px)': {
      padding: '20px 12px',
      borderRadius: '10px',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
      }
    },
    '@media (max-width: 375px)': {
      padding: '18px 10px',
      borderRadius: '8px',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
      }
    }
  },
  cardVisible: {
    opacity: 1,
    transform: 'translateY(0)',
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
    },
    '@media (max-width: 1200px)': {
      width: '75px',
      height: '75px',
      marginBottom: '18px',
    },
    '@media (max-width: 960px)': {
      width: '70px',
      height: '70px',
      marginBottom: '16px',
    },
    '@media (max-width: 600px)': {
      width: '65px',
      height: '65px',
      marginBottom: '15px',
    },
    '@media (max-width: 480px)': {
      width: '60px',
      height: '60px',
      marginBottom: '14px',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    },
    '@media (max-width: 375px)': {
      width: '55px',
      height: '55px',
      marginBottom: '12px',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
    }
  },
  cardIcon: {
    fontSize: '2.2rem !important',
    color: 'currentColor',
    '@media (max-width: 1200px)': {
      fontSize: '2.1rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.9rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.7rem !important',
    }
  },
  cardTitle: {
    fontSize: '1.2rem !important',
    fontWeight: '600 !important',
    color: '#ffffff !important',
    marginBottom: '12px !important',
    position: 'relative',
    zIndex: 1,
    '@media (max-width: 1200px)': {
      fontSize: '1.15rem !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.05rem !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.95rem !important',
      marginBottom: '7px !important',
    }
  },
  cardDescription: {
    fontSize: '0.9rem !important',
    color: 'rgba(255, 255, 255, 0.7) !important',
    lineHeight: '1.5 !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.88rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
      lineHeight: '1.4 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem !important',
      lineHeight: '1.35 !important',
    }
  },
  backgroundGlow: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    filter: 'blur(150px)',
    opacity: 0.15,
    zIndex: 0,
    '@media (max-width: 1200px)': {
      width: '550px',
      height: '550px',
      filter: 'blur(130px)',
    },
    '@media (max-width: 960px)': {
      width: '500px',
      height: '500px',
      filter: 'blur(110px)',
    },
    '@media (max-width: 600px)': {
      width: '450px',
      height: '450px',
      filter: 'blur(100px)',
    },
    '@media (max-width: 480px)': {
      width: '350px',
      height: '350px',
      filter: 'blur(80px)',
    },
    '@media (max-width: 375px)': {
      width: '300px',
      height: '300px',
      filter: 'blur(70px)',
    }
  },
  topRightGlow: {
    background: '#FFC614',
    top: '-200px',
    right: '-200px',
    '@media (max-width: 1200px)': {
      top: '-180px',
      right: '-180px',
    },
    '@media (max-width: 960px)': {
      top: '-160px',
      right: '-160px',
    },
    '@media (max-width: 600px)': {
      top: '-140px',
      right: '-140px',
    },
    '@media (max-width: 480px)': {
      top: '-120px',
      right: '-120px',
    },
    '@media (max-width: 375px)': {
      top: '-100px',
      right: '-100px',
    }
  },
  bottomLeftGlow: {
    background: '#7039e5',
    bottom: '-300px',
    left: '-200px',
    '@media (max-width: 1200px)': {
      bottom: '-280px',
      left: '-180px',
    },
    '@media (max-width: 960px)': {
      bottom: '-260px',
      left: '-160px',
    },
    '@media (max-width: 600px)': {
      bottom: '-230px',
      left: '-140px',
    },
    '@media (max-width: 480px)': {
      bottom: '-200px',
      left: '-120px',
    },
    '@media (max-width: 375px)': {
      bottom: '-180px',
      left: '-100px',
    }
  },
  decorativeElement: {
    position: 'absolute',
    zIndex: 1,
    opacity: 0.05,
    '@media (max-width: 480px)': {
      opacity: 0.04,
    },
    '@media (max-width: 375px)': {
      opacity: 0.03,
    }
  },
  circleElement: {
    borderRadius: '50%',
    border: '2px solid #FFC614',
    '@media (max-width: 480px)': {
      border: '1.5px solid #FFC614',
    },
    '@media (max-width: 375px)': {
      border: '1px solid #FFC614',
    }
  },
  squareElement: {
    width: '40px',
    height: '40px',
    border: '2px solid white',
    transform: 'rotate(45deg)',
    '@media (max-width: 1200px)': {
      width: '38px',
      height: '38px',
    },
    '@media (max-width: 960px)': {
      width: '35px',
      height: '35px',
    },
    '@media (max-width: 600px)': {
      width: '30px',
      height: '30px',
    },
    '@media (max-width: 480px)': {
      width: '25px',
      height: '25px',
      border: '1.5px solid white',
    },
    '@media (max-width: 375px)': {
      width: '20px',
      height: '20px',
      border: '1px solid white',
    }
  },
  floatingAnimation: {
    animation: '$floating 8s infinite ease-in-out',
    '@media (max-width: 480px)': {
      animation: '$floating 9s infinite ease-in-out',
    },
    '@media (max-width: 375px)': {
      animation: '$floating 10s infinite ease-in-out',
    }
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
    '@media (max-width: 1200px)': {
      width: '180px',
      height: '180px',
      backgroundSize: '18px 18px',
    },
    '@media (max-width: 960px)': {
      width: '160px',
      height: '160px',
      backgroundSize: '16px 16px',
    },
    '@media (max-width: 600px)': {
      width: '140px',
      height: '140px',
      backgroundSize: '14px 14px',
    },
    '@media (max-width: 480px)': {
      width: '120px',
      height: '120px',
      backgroundSize: '12px 12px',
      opacity: 0.08,
    },
    '@media (max-width: 375px)': {
      width: '100px',
      height: '100px',
      backgroundSize: '10px 10px',
      opacity: 0.07,
    }
  },
  dotsTopRight: {
    top: '10%',
    right: '5%',
    '@media (max-width: 600px)': {
      top: '8%',
      right: '4%',
    },
    '@media (max-width: 375px)': {
      top: '6%',
      right: '3%',
    }
  },
  dotsBottomLeft: {
    bottom: '10%',
    left: '5%',
    '@media (max-width: 600px)': {
      bottom: '8%',
      left: '4%',
    },
    '@media (max-width: 375px)': {
      bottom: '6%',
      left: '3%',
    }
  },
  pulse: {
    animation: '$pulse 1.5s infinite',
    '@media (max-width: 480px)': {
      animation: '$pulse 2s infinite',
    }
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.05)',
    },
    '100%': {
      transform: 'scale(1)',
    },
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
      {/* <Box className={`${classes.backgroundGlow} ${classes.topRightGlow}`} /> */}
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