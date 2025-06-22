// 15. ProjectsSection Component
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ProjectCard from './ProjectCard';

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
    '@media (max-width: 1200px)': {
      padding: '55px 0',
    },
    '@media (max-width: 960px)': {
      padding: '50px 0',
    },
    '@media (max-width: 600px)': {
      padding: '40px 0',
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
  content: {
    position: 'relative',
    zIndex: 3,
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '20px !important',
    '@media (max-width: 1200px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '25px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '20px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '15px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    marginBottom: '10px !important',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.9rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.7rem !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.5rem !important',
      marginBottom: '8px !important',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#ffffff !important',
    maxWidth: '800px',
    margin: '0 auto !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '95%',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
    },
  },
  projectsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
    marginTop: '40px',
    '@media (max-width: 1200px)': {
      gap: '25px',
      marginTop: '35px',
    },
    '@media (max-width: 960px)': {
      gap: '20px',
      marginTop: '30px',
    },
    '@media (max-width: 600px)': {
      gap: '20px',
      marginTop: '25px',
    },
    '@media (max-width: 480px)': {
      gap: '15px',
      marginTop: '20px',
    },
    '@media (max-width: 375px)': {
      gap: '12px',
      marginTop: '15px',
    },
  },
  projectBox: {
    width: '400px',
    flexShrink: 0,
    '@media (max-width: 1200px)': {
      width: '380px',
    },
    '@media (max-width: 960px)': {
      width: '350px',
    },
    '@media (max-width: 768px)': {
      width: '100%',
      maxWidth: '450px',
    },
    '@media (max-width: 480px)': {
      maxWidth: '350px',
    },
    '@media (max-width: 375px)': {
      maxWidth: '300px',
    },
  }
});

const ProjectsSection = ({ projects, subtitle, title }) => {
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
      <Container maxWidth="xl" className={classes.content}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            {title}
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
