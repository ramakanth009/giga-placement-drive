// 1. AIToolkit Component
import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Code, Storage, Language, Cloud, Security, Build, BugReport, DataUsage } from '@mui/icons-material';

const useStyles = makeStyles({
  section: {
    position: 'relative',
    padding: '60px 0',
    backgroundColor: '#2A2B6A',
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
      padding: '40px 0',
    },
    '@media (max-width: 600px)': {
      padding: '30px 0',
    },
    '@media (max-width: 480px)': {
      padding: '25px 0',
    },
    '@media (max-width: 375px)': {
      padding: '20px 0',
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
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    '@media (max-width: 960px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '25px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '20px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.4rem !important',
    },
  },
  toolsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
    '@media (max-width: 960px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '15px',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: '12px',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '10px',
    },
  },
  toolCard: {
    background: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    },
    '@media (max-width: 600px)': {
      padding: '15px',
    },
    '@media (max-width: 480px)': {
      padding: '12px',
    },
  },
  selectedToolCard: {
    border: '3px solid',
  },
  premiumBadge: {
    display: 'inline-block',
    backgroundColor: '#8B5CF6',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.7rem',
    fontWeight: '600',
    position: 'absolute',
    top: '10px',
    right: '5px',
    '@media (max-width: 480px)': {
      fontSize: '0.7rem',
      padding: '3px 10px',
    },
  },
  toolHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    '@media (max-width: 480px)': {
      marginBottom: '10px',
    },
  },
  toolName: {
    fontWeight: '700 !important',
    fontSize: '1.1rem !important',
    color: '#333 !important',
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
    },
  },
  toolDetails: {
    background: 'white',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '40px',
    '@media (max-width: 960px)': {
      padding: '25px',
    },
    '@media (max-width: 600px)': {
      padding: '20px',
      marginBottom: '30px',
    },
    '@media (max-width: 480px)': {
      padding: '15px',
      marginBottom: '25px',
    },
  },
  toolDetailsHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    '@media (max-width: 480px)': {
      marginBottom: '15px',
    },
  },
  toolDetailsName: {
    fontSize: '1.5rem !important',
    fontWeight: '700 !important',
    marginLeft: '15px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
      marginLeft: '10px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem !important',
      marginLeft: '8px !important',
    },
  },
  

  twoColumn: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '30px',
    '@media (max-width: 960px)': {
      gap: '20px',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '25px',
    },
    '@media (max-width: 480px)': {
      gap: '15px',
    },
  },
  useCases: {
    marginTop: '20px',
    '@media (max-width: 480px)': {
      marginTop: '15px',
    },
  },
  useCaseItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    '@media (max-width: 480px)': {
      marginBottom: '6px',
    },
  },
  arrowRight: {
    marginRight: '10px',
    color: '#666',
    '@media (max-width: 480px)': {
      marginRight: '6px',
    },
  },
  capabilitiesSection: {
    marginTop: '30px',
    '@media (max-width: 480px)': {
      marginTop: '20px',
    },
  },
  capabilityChart: {
    marginTop: '20px',
    '@media (max-width: 480px)': {
      marginTop: '15px',
    },
  },
  capabilityBar: {
    height: '25px',
    background: '#e9ecef',
    borderRadius: '4px',
    marginBottom: '15px',
    position: 'relative',
    '@media (max-width: 480px)': {
      height: '20px',
      marginBottom: '10px',
    },
  },
  capabilityBarFill: {
    height: '100%',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    justifyContent: 'space-between',
    color: 'white',
    fontSize: '0.85rem',
    fontWeight: '600',
    '@media (max-width: 480px)': {
      fontSize: '0.7rem',
      padding: '0 8px',
    },
  },
});

// Map tool names or IDs to Material-UI icons (add more as needed)
const toolIcons = {
  'code': <Code />, // Example mapping
  'database': <Storage />,
  'web': <Language />,
  'cloud': <Cloud />,
  'security': <Security />,
  'devops': <Build />,
  'debug': <BugReport />,
  'data': <DataUsage />,
  // Add more mappings as needed
};

const AIToolkit = ({ tools, programName }) => {
  const classes = useStyles();
  const [selectedToolId, setSelectedToolId] = useState(tools[0]?.id);
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

  const selectedTool = tools.find(tool => tool.id === selectedToolId);

  const handleToolSelect = (toolId) => {
    setSelectedToolId(toolId);
  };

  return (
    <Box className={classes.section}>
      <canvas ref={canvasRef} className={classes.networkCanvas} />
      <Container maxWidth="lg" className={classes.content}>
        <Box className={classes.header}>
          <Typography className={classes.title}>
            Learn Full Stack Development with<span> Built-In AI Tools</span>
          </Typography>
        </Box>

        {/* Tool Cards Grid */}
        <Box className={classes.toolsGrid}>
          {tools.map((tool) => (
            <Paper 
              key={tool.id} 
              className={`${classes.toolCard} ${selectedToolId === tool.id ? classes.selectedToolCard : ''}`}
              style={{ borderColor: selectedToolId === tool.id ? tool.color : 'transparent' }}
              onClick={() => handleToolSelect(tool.id)}
              elevation={0}
            >
              {tool.isPaid && <span className={classes.premiumBadge}>Premium</span>}
              {/* Icon in its own row, centered */}
              
              <Box className={classes.toolHeader} style={{ justifyContent: 'center' }}>
                <Typography className={classes.toolName}>
                  {tool.name}
                </Typography>
              </Box>
              <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
                <Box className={classes.toolIcon} style={{ color: tool.iconColor, fontSize: 40 }}>
                  {/* Use open source icon instead of iconHtml */}
                  {toolIcons[tool.id] || <Code />}
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Selected Tool Details */}
        {selectedTool && (
          <Paper className={classes.toolDetails} elevation={0}>
            <Box className={classes.twoColumn}>
              <Box>
                <Box className={classes.toolDetailsHeader}>
                  <Typography className={classes.toolDetailsName}>
                    {selectedTool.name}
                  </Typography>
                </Box>
                
                
                
                <Typography>
                  {selectedTool.description}
                </Typography>
                
                <Box className={classes.useCases}>
                  <Typography variant="h6">Key Use Cases:</Typography>
                  {selectedTool.useCases.map((useCase, index) => (
                    <Box key={index} className={classes.useCaseItem}>
                      <span className={classes.arrowRight}>→</span>
                      <Typography>{useCase}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
              
              <Box className={classes.capabilitiesSection}>
                <Typography variant="h6">Capability Breakdown:</Typography>
                <Box className={classes.capabilityChart}>
                  {selectedTool.capabilities.map((capability, index) => (
                    <Box key={index} className={classes.capabilityBar}>
                      <Box 
                        className={classes.capabilityBarFill} 
                        style={{ 
                          width: `${capability.value}%`, 
                          backgroundColor: selectedTool.color 
                        }}
                      >
                        <span>{capability.name}</span>
                        <span>{capability.value}/100</span>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default AIToolkit;