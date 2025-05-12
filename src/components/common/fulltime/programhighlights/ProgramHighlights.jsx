
import React, { useRef, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HighlightCard from './HighlightCard';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    backgroundColor: '#2A2B6A',
    position: 'relative',
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
  container: {
    position: 'relative',
    zIndex: 3,
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '50px',
    '@media (max-width: 1200px)': {
      marginBottom: '45px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '40px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '35px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '25px',
    },
  },
  title: {
    fontSize: '2.8rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2.6rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.4rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '2rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.8rem !important',
    },
  },
  highlightsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    '@media (max-width: 1200px)': {
      gap: '28px',
    },
    '@media (max-width: 960px)': {
      gap: '25px',
    },
    '@media (max-width: 600px)': {
      gap: '20px',
    },
    '@media (max-width: 480px)': {
      gap: '18px',
    },
    '@media (max-width: 375px)': {
      gap: '15px',
    },
  },
  highlightsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    '@media (max-width: 1200px)': {
      gap: '28px',
    },
    '@media (max-width: 960px)': {
      gap: '25px',
    },
    '@media (max-width: 600px)': {
      gap: '20px',
    },
    '@media (max-width: 480px)': {
      gap: '18px',
    },
    '@media (max-width: 375px)': {
      gap: '15px',
    },
  },
});

const ProgramHighlights = ({ highlights }) => {
  const classes = useStyles();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const container = canvas.parentElement;
    const width = canvas.width = container.offsetWidth;
    const height = canvas.height = container.offsetHeight;

    const particles = [];
    const particleCount = Math.floor((width * height) / 12000);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1.5,
        opacity: Math.random() * 0.4 + 0.3
      });
    }

    const maxDist = 150;
    
    ctx.clearRect(0, 0, width, height);
    
    ctx.lineWidth = 0.6;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.2;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      ctx.fill();
    }

    const handleResize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Recalculate particles
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1.5,
          opacity: Math.random() * 0.4 + 0.3
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box className={classes.section}>
      <canvas ref={canvasRef} className={classes.networkCanvas} />
      <Container maxWidth="xl" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.title}>
            Highlights of the <span>Program</span>
          </Typography>
        </Box>
        
        <Box className={classes.highlightsContainer}>
          {/* First row - 4 boxes */}
          <Box className={classes.highlightsRow}>
            {highlights.slice(0, 4).map((highlight, index) => (
              <HighlightCard
                key={index}
                icon={highlight.icon}
                title={highlight.title}
              />
            ))}
          </Box>
          
          {/* Second row - remaining boxes */}
          {highlights.length > 4 && (
            <Box className={classes.highlightsRow}>
              {highlights.slice(4).map((highlight, index) => (
                <HighlightCard
                  key={index + 4}
                  icon={highlight.icon}
                  title={highlight.title}
                />
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ProgramHighlights;
