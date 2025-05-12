import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import certificateImage from '../../../../assets/certificatefullstack.png'; // Assuming this is where your certificate image is stored


const useStyles = makeStyles({
  section: {
    position: 'relative',
    width: '100%',
    minHeight: '500px',
    overflow: 'hidden',
    background: "#2A2B6A",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    padding: '60px 0',
    '@media (max-width: 1200px)': {
      padding: '55px 0',
      minHeight: '480px',
    },
    '@media (max-width: 960px)': {
      padding: '50px 0',
      minHeight: '460px',
    },
    '@media (max-width: 600px)': {
      padding: '40px 0',
      minHeight: 'auto',
    },
    '@media (max-width: 480px)': {
      padding: '35px 0',
    },
    '@media (max-width: 375px)': {
      padding: '30px 0',
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
    '@media (max-width: 1200px)': {
      padding: '0 35px',
    },
    '@media (max-width: 960px)': {
      padding: '0 30px',
    },
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      textAlign: 'center',
      gap: '40px',
      padding: '0 20px',
    },
    '@media (max-width: 480px)': {
      gap: '30px',
    },
    '@media (max-width: 375px)': {
      gap: '25px',
    },
  },
  leftSection: {
    flex: '1',
    maxWidth: '600px',
    paddingRight: '20px',
    '@media (max-width: 1200px)': {
      maxWidth: '550px',
      paddingRight: '15px',
    },
    '@media (max-width: 960px)': {
      maxWidth: '500px',
      paddingRight: '10px',
    },
    '@media (max-width: 900px)': {
      paddingRight: 0,
      maxWidth: '100%',
    },
  },
  rightSection: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 900px)': {
      width: '100%',
      maxWidth: '450px',
    },
    '@media (max-width: 600px)': {
      maxWidth: '400px',
    },
    '@media (max-width: 480px)': {
      maxWidth: '350px',
    },
    '@media (max-width: 375px)': {
      maxWidth: '300px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: '700 !important',
    color: 'white !important',
    marginBottom: '30px !important',
    lineHeight: '1.2 !important',
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
      marginBottom: '25px !important',
    },
    '@media (max-width: 900px)': {
      fontSize: '2.2rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem !important',
      marginBottom: '15px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.4rem !important',
      marginBottom: '12px !important',
    },
  },
  highlighted: {
    color: '#FFC614 !important',
    display: 'inline',
  },
  bulletPoint: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    '@media (max-width: 1200px)': {
      marginBottom: '18px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '16px',
    },
    '@media (max-width: 900px)': {
      justifyContent: 'center',
      marginBottom: '15px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '12px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '10px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '8px',
    },
  },
  star: {
    color: '#FFC614',
    fontSize: '1.5rem',
    marginRight: '15px',
    '@media (max-width: 960px)': {
      fontSize: '1.4rem',
      marginRight: '12px',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.3rem',
      marginRight: '10px',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.2rem',
      marginRight: '8px',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.1rem',
      marginRight: '7px',
    },
  },
  bulletText: {
    fontSize: '1.25rem !important',
    fontWeight: '500 !important',
    color: 'white !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.2rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.15rem !important',
    },
    '@media (max-width: 900px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
    },
  },
  certificateImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    '@media (max-width: 600px)': {
      maxWidth: '90%',
    },
  },
  bottomLeftArc: {
    position: 'absolute',
    bottom: '-150px',
    left: '-117px',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF12',
    zIndex: 1,
    '@media (max-width: 960px)': {
      width: '250px',
      height: '250px',
      bottom: '-120px',
      left: '-100px',
    },
    '@media (max-width: 600px)': {
      width: '200px',
      height: '200px',
      bottom: '-80px',
      left: '-60px',
    },
    '@media (max-width: 480px)': {
      width: '150px',
      height: '150px',
      bottom: '-60px',
      left: '-30px',
    },
    '@media (max-width: 375px)': {
      width: '120px',
      height: '120px',
      bottom: '-50px',
      left: '-25px',
    },
  },
});

const FulltimeCertificates = () => {
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
    <Box className={classes.section}>
      <canvas ref={canvasRef} className={classes.networkCanvas} />
      <Box className={classes.bottomLeftArc}></Box>
      <Box className={classes.contentContainer}>
        <Box className={classes.leftSection}>
          <Typography variant="h2" className={classes.title}>
            Be in the spotlight <span className={classes.highlighted}>by getting Certified</span>
          </Typography>
          
          <Box className={classes.bulletPoint}>
            <span className={classes.star}>★</span>
            <Typography className={classes.bulletText}>
              Validate Your Skills with Industry-Endorsed Credentials
            </Typography>
          </Box>
          
          <Box className={classes.bulletPoint}>
            <span className={classes.star}>★</span>
            <Typography className={classes.bulletText}>
              Gain a Competitive Edge with Verified Expertise
            </Typography>
          </Box>
          
          <Box className={classes.bulletPoint}>
            <span className={classes.star}>★</span>
            <Typography className={classes.bulletText}>
              Open Doors to Global Opportunities
            </Typography>
          </Box>
        </Box>

        <Box className={classes.rightSection}>
          <img 
            src={certificateImage} 
            alt="Program Certificate" 
            className={classes.certificateImage}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FulltimeCertificates;
