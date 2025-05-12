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
    paddingTop: '30px',
    paddingBottom: '90px',
    '&::after': {
      content: '""',
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
    }
  },
  networkCanvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
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
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      textAlign: 'center',
      gap: '40px',
      padding: '0 20px',
    }
  },
  leftSection: {
    flex: '1',
    maxWidth: '600px',
    paddingRight: '20px',
    '@media (max-width: 900px)': {
      paddingRight: 0,
    }
  },
  rightSection: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    '@media (max-width: 900px)': {
      width: '100%',
      maxWidth: '450px',
    }
  },
  title: {
    fontSize: '3.2rem !important',
    fontWeight: '700 !important',
    color: 'white !important',
    marginBottom: '10px !important',
    lineHeight: '1.2 !important',
    '@media (max-width: 900px)': {
      fontSize: '2.5rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
    }
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
    '@media (max-width: 900px)': {
      fontSize: '1.3rem !important',
      marginBottom: '30px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    }
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    '@media (max-width: 900px)': {
      justifyContent: 'center',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'center',
    }
  },
  applyButton: {
    backgroundColor: 'white !important',
    color: '#2a2b6a !important',
    padding: '12px 30px !important',
    borderRadius: '50px !important',
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
    textTransform: 'none !important',
    '&:hover': {
      backgroundColor: '#f0f0f0 !important',
    }
  },
  brochureButton: {
    borderColor: 'white !important',
    color: 'white !important',
    padding: '12px 30px !important',
    borderRadius: '50px !important',
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
    textTransform: 'none !important',
    '&:hover': {
      borderColor: '#f0f0f0 !important',
      backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
    }
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '550px',
    height: 'auto',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    '@media (max-width: 1100px)': {
      maxWidth: '450px',
    },
    '@media (max-width: 600px)': {
      maxWidth: '300px',
    }
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  decorElement: {
    position: 'absolute',
    zIndex: 2,
  }
});

const HeroSection = ({ 
  titleFirstLine, 
  highlightedText, 
  titleSecondLine, 
  subtitle,
  heroImage,
  applyButtonText = "Apply Now",
  brochureButtonText = "Download brochure",
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

    // Create particles (dots)
    const particles = [];
    const particleCount = Math.min(width * 0.08, 120); 
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 2.5,
        opacity: Math.random() * 0.9 + 0.2,
        fadeY: 1 - (Math.random() * 0.5)
      });
    }

    const maxDist = 250;
    
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
          {/* Render decorative elements */}
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