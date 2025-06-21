import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  heroSection: {
    position: 'relative',
    width: '100%',
    minHeight: '90vh',
    overflow: 'hidden',
    backgroundImage: 'linear-gradient(to right, #2a2b6a, #32337e)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '40px',
    paddingBottom: '140px',
    '@media (max-width: 1200px)': {
      paddingTop: '35px',
      paddingBottom: '120px',
      minHeight: '85vh',
    },
    '@media (max-width: 960px)': {
      paddingTop: '30px',
      paddingBottom: '100px',
      minHeight: '80vh',
    },
    '@media (max-width: 600px)': {
      paddingTop: '25px',
      paddingBottom: '90px',
      minHeight: '75vh',
    },
    '@media (max-width: 480px)': {
      paddingTop: '20px',
      paddingBottom: '80px',
      minHeight: '70vh',
    },
    '@media (max-width: 375px)': {
      paddingTop: '15px',
      paddingBottom: '70px',
      minHeight: '65vh',
    },
  },
  networkCanvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  shapeDivider: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '170px',
    background: 'white',
    transform: 'skewY(-4deg)',
    transformOrigin: 'bottom',
    marginBottom: '-70px',
    zIndex: 2,
    '@media (max-width: 960px)': {
      height: '140px',
      marginBottom: '-60px',
    },
    '@media (max-width: 600px)': {
      height: '120px',
      marginBottom: '-50px',
    },
    '@media (max-width: 480px)': {
      height: '100px',
      marginBottom: '-40px',
    },
    '@media (max-width: 375px)': {
      height: '80px',
      marginBottom: '-30px',
    },
  },
  contentContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'space-between',
    padding: '0 40px',
    position: 'relative',
    zIndex: 3,
    height: 'auto',
    '@media (max-width: 1200px)': {
      maxWidth: '1000px',
      padding: '0 35px',
    },
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      textAlign: 'center',
      gap: '35px',
      padding: '0 30px',
      maxWidth: '800px',
    },
    '@media (max-width: 600px)': {
      gap: '30px',
      padding: '0 25px',
      maxWidth: '100%',
    },
    '@media (max-width: 480px)': {
      gap: '25px',
      padding: '0 20px',
    },
    '@media (max-width: 375px)': {
      gap: '20px',
      padding: '0 15px',
    },
  },
  leftSection: {
    flex: '1',
    maxWidth: '600px',
    paddingRight: '20px',
    '@media (max-width: 1200px)': {
      maxWidth: '500px',
      paddingRight: '15px',
    },
    '@media (max-width: 960px)': {
      paddingRight: 0,
      maxWidth: '100%',
    },
  },
  rightSection: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: 'auto',
    '@media (max-width: 1200px)': {
      flex: '0.8',
    },
    '@media (max-width: 960px)': {
      width: '100%',
      maxWidth: '450px',
      flex: 'none',
    },
    '@media (max-width: 600px)': {
      maxWidth: '350px',
    },
    '@media (max-width: 480px)': {
      maxWidth: '280px',
    },
    '@media (max-width: 375px)': {
      maxWidth: '250px',
    },
  },
  title: {
    fontSize: '3.2rem !important',
    fontWeight: '700 !important',
    color: 'white !important',
    marginBottom: '10px !important',
    lineHeight: '1.2 !important',
    '@media (max-width: 1200px)': {
      fontSize: '2.8rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.5rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.9rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.7rem !important',
    },
  },
  highlighted: {
    color: '#FFC614 !important',
    display: 'block',
  },
  subtitle: {
    fontSize: '1.5rem !important',
    fontWeight: '500 !important',
    color: '#FFC614 !important',
    marginBottom: '40px !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.4rem !important',
      marginBottom: '35px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.3rem !important',
      marginBottom: '30px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
      marginBottom: '25px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1rem !important',
      marginBottom: '18px !important',
    },
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    '@media (max-width: 1200px)': {
      gap: '18px',
    },
    '@media (max-width: 960px)': {
      justifyContent: 'center',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
    },
    '@media (max-width: 480px)': {
      gap: '12px',
    },
    '@media (max-width: 375px)': {
      gap: '10px',
    },
  },
  applyButton: {
    backgroundColor: 'white !important',
    color: '#2a2b6a !important',
    padding: '12px 30px !important',
    borderRadius: '50px !important',
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
    textTransform: 'none !important',
    minWidth: '140px',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: '#f0f0f0 !important',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
    },
    '@media (max-width: 1200px)': {
      padding: '11px 28px !important',
      fontSize: '1.05rem !important',
      minWidth: '130px',
    },
    '@media (max-width: 600px)': {
      padding: '10px 25px !important',
      fontSize: '1rem !important',
      minWidth: '120px',
    },
    '@media (max-width: 480px)': {
      padding: '9px 22px !important',
      fontSize: '0.95rem !important',
      minWidth: '110px',
    },
    '@media (max-width: 375px)': {
      padding: '8px 20px !important',
      fontSize: '0.9rem !important',
      minWidth: '100px',
    },
  },
  brochureButton: {
    borderColor: 'white !important',
    color: 'white !important',
    padding: '12px 30px !important',
    borderRadius: '50px !important',
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
    textTransform: 'none !important',
    minWidth: '140px',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      borderColor: '#f0f0f0 !important',
      backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
    },
    '@media (max-width: 1200px)': {
      padding: '11px 28px !important',
      fontSize: '1.05rem !important',
      minWidth: '130px',
    },
    '@media (max-width: 600px)': {
      padding: '10px 25px !important',
      fontSize: '1rem !important',
      minWidth: '120px',
    },
    '@media (max-width: 480px)': {
      padding: '9px 22px !important',
      fontSize: '0.95rem !important',
      minWidth: '110px',
    },
    '@media (max-width: 375px)': {
      padding: '8px 20px !important',
      fontSize: '0.9rem !important',
      minWidth: '100px',
    },
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '550px',
    height: 'auto',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
    },
    '@media (max-width: 1200px)': {
      maxWidth: '450px',
    },
    '@media (max-width: 960px)': {
      maxWidth: '400px',
    },
    '@media (max-width: 600px)': {
      maxWidth: '320px',
      borderRadius: '8px',
    },
    '@media (max-width: 480px)': {
      maxWidth: '260px',
      borderRadius: '6px',
    },
    '@media (max-width: 375px)': {
      maxWidth: '230px',
      borderRadius: '5px',
    },
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    display: 'block',
    maxHeight: '400px',
    '@media (max-width: 1200px)': {
      maxHeight: '350px',
    },
    '@media (max-width: 960px)': {
      maxHeight: '320px',
    },
    '@media (max-width: 600px)': {
      maxHeight: '280px',
    },
    '@media (max-width: 480px)': {
      maxHeight: '240px',
    },
    '@media (max-width: 375px)': {
      maxHeight: '200px',
    },
  },
  decorElement: {
    position: 'absolute',
    zIndex: 2,
    '@media (max-width: 960px)': {
      display: 'none', // Hide decorative elements on smaller screens to prevent overflow
    },
  }
});

const HeroSection = ({ 
  titleFirstLine, 
  highlightedText, 
  titleSecondLine, 
  subtitle,
  heroImage,
  applyButtonText = "Apply Now",
  brochureButtonText = "Book A Demo",
  onApplyClick,
  onBrochureClick,
  decorElements = []
}) => {
  const classes = useStyles();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    // Create particles (dots) - adjust count based on screen size
    const particles = [];
    const particleCount = Math.min(width * 0.08, width < 768 ? 60 : 120); 
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 2.5,
        opacity: Math.random() * 0.9 + 0.2,
        fadeY: 1 - (Math.random() * 0.5)
      });
    }

    const maxDist = width < 768 ? 200 : 250;
    
    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      ctx.lineWidth = 0.8;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < maxDist) {
            const fadeY = Math.min(particles[i].fadeY, particles[j].fadeY);
            const opacity = (1 - dist / maxDist) * 0.25 * fadeY;
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const yPosition = p.y / height;
        
        const fadeFactor = p.fadeY * (1 - Math.pow(yPosition, 2));
        const finalOpacity = p.opacity * fadeFactor;
        
        if (finalOpacity > 0.01) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(155, 155, 155, ${finalOpacity})`;
          ctx.fill();
        }
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box className={classes.heroSection}>
      <canvas ref={canvasRef} className={classes.networkCanvas} />
      <Box className={classes.shapeDivider} />
      
      <Box className={classes.contentContainer}>
        <Box className={classes.leftSection}>
          <Typography variant="h1" className={classes.title}>
            {titleFirstLine} {titleSecondLine && titleSecondLine}
            <span className={classes.highlighted}>{highlightedText}</span>
          </Typography>
          <Typography variant="h2" className={classes.subtitle}>
            {subtitle}
          </Typography>
          <Box className={classes.buttonContainer}>
            <Button 
              variant="contained" 
              className={classes.applyButton}
              onClick={onApplyClick}
            >
              {applyButtonText}
            </Button>
            <Button 
              variant="outlined" 
              className={classes.brochureButton}
              onClick={onBrochureClick}
            >
              {brochureButtonText}
            </Button>
          </Box>
        </Box>

        <Box className={classes.rightSection}>
          {/* Render decorative elements - hidden on mobile to prevent overflow */}
          {decorElements.map((elem, index) => (
            <Box 
              key={index}
              className={classes.decorElement}
              style={elem.style}
            >
              {elem.content}
            </Box>
          ))}
          
          <Box className={classes.imageContainer}>
            <img
              src={heroImage}
              alt="Program visualization"
              className={classes.heroImage}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;