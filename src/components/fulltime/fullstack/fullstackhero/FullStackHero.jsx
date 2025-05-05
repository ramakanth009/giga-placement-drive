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
  hexagonContainer: {
    position: 'relative',
    width: '400px',
    height: '400px',
    '@media (max-width: 1100px)': {
      width: '350px',
      height: '350px',
    },
    '@media (max-width: 600px)': {
      width: '300px',
      height: '300px',
    }
  },
  hexagon: {
    position: 'relative',
    width: '100%',
    height: '100%',
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  },
  hexImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  decorCircle1: {
    position: 'absolute',
    top: '-40px',
    right: '-20px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: '6px solid #FFC614',
    zIndex: 2,
    '@media (max-width: 600px)': {
      width: '40px',
      height: '40px',
      top: '-20px',
      right: '20px',
    }
  },
  decorX: {
    position: 'absolute',
    right: '-30px',
    bottom: '100px',
    color: '#FFC614',
    fontSize: '30px',
    fontWeight: 'bold',
    transform: 'rotate(15deg)',
    '@media (max-width: 600px)': {
      fontSize: '20px',
      right: '-10px',
    }
  },
  purpleBlobTop: {
    position: 'absolute',
    top: '-120px',
    right: '-80px',
    width: '300px',
    height: '300px',
    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
    backgroundColor: 'rgba(162, 155, 254, 0.3)',
    zIndex: -1,
    '@media (max-width: 600px)': {
      width: '200px',
      height: '200px',
      top: '-80px',
      right: '-40px',
    }
  },
  purpleBlobBottom: {
    position: 'absolute',
    bottom: '-100px',
    left: '-60px',
    width: '250px',
    height: '250px',
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    backgroundColor: 'rgba(162, 155, 254, 0.3)',
    zIndex: -1,
    '@media (max-width: 600px)': {
      width: '150px',
      height: '150px',
      bottom: '-60px',
      left: '-30px',
    }
  },
  decorCircle2: {
    position: 'absolute',
    bottom: '60px',
    right: '100px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#FFC614',
    zIndex: 2,
    '@media (max-width: 600px)': {
      width: '30px',
      height: '30px',
      bottom: '40px',
      right: '70px',
    }
  }
});

const FullStackHero = () => {
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
    // Reduce the number of particles for better visibility of each
    const particleCount = Math.min(width * 0.08, 120); 
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Increase particle radius - 2.5-5 instead of 0.5-2
        radius: Math.random() * 2.5 + 2.5,
        // Increase opacity for better visibility
        opacity: Math.random() * 0.9 + 0.2,
        // Reduce particle density toward bottom of canvas
        fadeY: 1 - (Math.random() * 0.5) // Higher values = more visible
      });
    }

    // Increase maximum connection distance
    const maxDist = 250; // Increased from 150
    
    // Animation function
    function animate() {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Draw connections first (lines behind dots)
      // Increase line thickness
      ctx.lineWidth = 0.8; // Increased from 0.3
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < maxDist) {
            // Calculate opacity based on distance and particle position
            const fadeY = Math.min(particles[i].fadeY, particles[j].fadeY);
            // Increase line opacity
            const opacity = (1 - dist / maxDist) * 0.25 * fadeY; // Increased from 0.15
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
      
      // Draw particles (dots on top of lines)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const yPosition = p.y / height;
        
        // Make particles fade out toward bottom of canvas
        const fadeFactor = p.fadeY * (1 - Math.pow(yPosition, 2));
        const finalOpacity = p.opacity * fadeFactor;
        
        // Only draw visible particles
        if (finalOpacity > 0.01) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          // Brighter dot color for better visibility
          ctx.fillStyle = `rgba(155, 155, 155, ${finalOpacity})`;
          ctx.fill();
        }
      }
      
      requestAnimationFrame(animate);
    }
    
    // Initial render
    animate();
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
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
            Comprehensive <span className={classes.highlighted}>Full Stack</span>
            <span className={classes.highlighted}>Development Program</span>
          </Typography>
          <Typography variant="h2" className={classes.subtitle}>
            Build Dynamic Apps. Architect Robust Systems.
          </Typography>
          <Box className={classes.buttonContainer}>
            <Button variant="contained" className={classes.applyButton}>
              Apply Now
            </Button>
            <Button variant="outlined" className={classes.brochureButton}>
              Download brochure
            </Button>
          </Box>
        </Box>

        <Box className={classes.rightSection}>
          <Box className={classes.purpleBlobTop}></Box>
          <Box className={classes.purpleBlobBottom}></Box>
          <Box className={classes.hexagonContainer}>
            <Box className={classes.hexagon}>
              <img 
                src="/api/placeholder/600/600" 
                alt="Developers working together" 
                className={classes.hexImage}
              />
            </Box>
          </Box>
          <Box className={classes.decorCircle1}></Box>
          <Box className={classes.decorCircle2}></Box>
          <Box className={classes.decorX}>✕</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FullStackHero;