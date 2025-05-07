// src/components/common/projectssection/ProjectsSection.jsx
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ProjectCard from '../projectcard/ProjectCard';

const useStyles = makeStyles({
  section: {
    position: 'relative',
    padding: '30px 0',
    backgroundColor: '#2A2B6A',
    backgroundImage: 'linear-gradient(to bottom right, #2A2B6A, #3C3E8D)',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url("/path-to-network-pattern.png")',
      backgroundSize: 'cover',
      opacity: 0.2,
      zIndex: 1,
    },
    '@media (max-width: 960px)': {
      padding: '60px 0',
    },
    '@media (max-width: 600px)': {
      padding: '40px 0',
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
  content: {
    position: 'relative',
    zIndex: 3,  // increased z-index to appear above canvas
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '10px',
    '@media (max-width: 960px)': {
      marginBottom: '10px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '10px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    marginBottom: '5px !important',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#ffffff !important',
    maxWidth: '800px',
    margin: '0px auto !important',
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '95%',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  projectsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    justifyContent: 'center',
    marginTop: '40px',
    '@media (max-width: 960px)': {
      gap: '20px',
    },
  },
  projectBox: {
    width: '400px', // increased from 360px
    flexShrink: 0,
    '@media (max-width: 1200px)': {
      width: 'calc(50% - 15px)',
    },
    '@media (max-width: 768px)': {
      width: '100%',
    },
  }
});

const ProjectsSection = ({ projects, subtitle }) => {
  const classes = useStyles();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Get section height instead of window height
    const container = canvas.parentElement;
    const width = canvas.width = container.offsetWidth;
    const height = canvas.height = container.offsetHeight;

    const particles = [];
    // Reduce divisor to increase particle count
    const particleCount = Math.floor((width * height) / 12000);
    
    // Create static particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1.5,
        opacity: Math.random() * 0.4 + 0.3
      });
    }

    // Shorter connection distance for denser network
    const maxDist = 150;
    
    // Draw the static network once
    ctx.clearRect(0, 0, width, height);
    
    // Draw connections
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
    
    // Draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      ctx.fill();
    }

    // Handle resize
    const handleResize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      // Redraw everything on resize
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Recalculate and redraw particles and connections
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 1.5,
          opacity: Math.random() * 0.4 + 0.3
        });
      }
      
      // Draw connections
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
      
      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box className={classes.section}>
      <canvas ref={canvasRef} className={classes.networkCanvas} />
      <Container maxWidth="xl" className={classes.content}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            Hands-On <span>Projects</span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            {subtitle}
          </Typography>
        </Box>

        <Box className={classes.projectsContainer}>
          {projects.map((project, index) => (
            <Box key={index} className={classes.projectBox}>
              <ProjectCard
                image={project.image}
                icon={project.icon}
                title={project.title}
                features={project.features}
                description={project.description}
                skills={project.skills}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;