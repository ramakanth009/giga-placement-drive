import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Card, CardContent, Chip, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import BuildIcon from '@mui/icons-material/Build';

const useStyles = makeStyles({
  section: {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 2,
  },
  
  // Animated background
  backgroundGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    animation: '$gridMove 20s linear infinite',
    zIndex: 1,
  },
  
  // Header section
  headerSection: {
    textAlign: 'center',
    padding: '40px 0 20px',
    position: 'relative',
  },
  
  mainTitle: {
    fontSize: '3.5rem !important',
    fontWeight: '800 !important',
    background: 'linear-gradient(135deg, #ffffff 0%, #64b5f6 50%, #42a5f5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '10px !important',
    letterSpacing: '-0.02em',
    '@media (max-width: 960px)': {
      fontSize: '2.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2.2rem !important',
    },
  },
  
  subtitle: {
    fontSize: '1.2rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    maxWidth: '600px',
    margin: '0 auto !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      maxWidth: '90%',
    },
  },
  
  // Main content area
  contentArea: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
    },
  },
  
  // Left side - Question & Answer
  leftPanel: {
    flex: '0 0 35%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media (max-width: 960px)': {
      flex: 'none',
      padding: '20px 40px',
    },
    '@media (max-width: 600px)': {
      padding: '15px 20px',
    },
  },
  
  questionCard: {
    background: 'rgba(255, 255, 255, 0.05) !important',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px !important',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '30px !important',
    marginBottom: '20px',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    },
    '@media (max-width: 600px)': {
      padding: '20px !important',
    },
  },
  
  questionText: {
    fontSize: '1.8rem !important',
    fontWeight: '600 !important',
    color: '#ff4757 !important',
    marginBottom: '20px !important',
    lineHeight: '1.3 !important',
    '@media (max-width: 960px)': {
      fontSize: '1.5rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
    },
  },
  
  answerText: {
    fontSize: '1.4rem !important',
    fontWeight: '700 !important',
    color: '#2ed573 !important',
    '@media (max-width: 960px)': {
      fontSize: '1.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
  },
  
  // Right side - AI Tools showcase
  rightPanel: {
    flex: 1,
    position: 'relative',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  
  toolsHeader: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  
  toolsTitle: {
    fontSize: '1.5rem !important',
    fontWeight: '600 !important',
    color: 'white !important',
    marginBottom: '10px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
    },
  },
  
  // Floating AI tools grid
  floatingToolsContainer: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
  },
  
  toolCard: {
    position: 'absolute',
    width: '200px',
    background: 'rgba(255, 255, 255, 0.08) !important',
    backdropFilter: 'blur(15px)',
    borderRadius: '15px !important',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '15px !important',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: '$float 6s ease-in-out infinite',
    '&:hover': {
      transform: 'scale(1.05) translateY(-10px) !important',
      background: 'rgba(255, 255, 255, 0.15) !important',
      boxShadow: '0 15px 35px rgba(64, 181, 246, 0.3)',
    },
    '@media (max-width: 960px)': {
      width: '160px',
      padding: '12px !important',
    },
    '@media (max-width: 600px)': {
      width: '140px',
      padding: '10px !important',
    },
  },
  
  // Positioning for floating cards
  tool1: {
    top: '10%',
    left: '5%',
    animationDelay: '0s',
  },
  tool2: {
    top: '25%',
    right: '15%',
    animationDelay: '1s',
  },
  tool3: {
    top: '45%',
    left: '20%',
    animationDelay: '2s',
  },
  tool4: {
    top: '60%',
    right: '5%',
    animationDelay: '3s',
  },
  tool5: {
    bottom: '20%',
    left: '10%',
    animationDelay: '4s',
  },
  tool6: {
    bottom: '5%',
    right: '25%',
    animationDelay: '5s',
  },
  
  toolIcon: {
    width: '40px !important',
    height: '40px !important',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%)',
    display: 'flex !important',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
    '& svg': {
      fontSize: '20px',
      color: 'white',
    },
  },
  
  toolName: {
    fontSize: '0.9rem !important',
    fontWeight: '600 !important',
    color: 'white !important',
    marginBottom: '5px !important',
  },
  
  toolCategory: {
    fontSize: '0.7rem !important',
    color: 'rgba(255, 255, 255, 0.6) !important',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '2px 6px',
    borderRadius: '8px',
    alignSelf: 'flex-start',
  },
  
  // Glowing orbs
  glowOrb: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(40px)',
    animation: '$orbFloat 8s ease-in-out infinite',
    zIndex: 1,
  },
  
  orb1: {
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(100, 181, 246, 0.3) 0%, transparent 70%)',
    top: '10%',
    left: '10%',
    animationDelay: '0s',
  },
  
  orb2: {
    width: '200px',
    height: '200px',
    background: 'radial-gradient(circle, rgba(255, 71, 87, 0.3) 0%, transparent 70%)',
    bottom: '20%',
    right: '15%',
    animationDelay: '4s',
  },
  
  orb3: {
    width: '150px',
    height: '150px',
    background: 'radial-gradient(circle, rgba(46, 213, 115, 0.3) 0%, transparent 70%)',
    top: '60%',
    left: '50%',
    animationDelay: '2s',
  },
  
  // Pulse effect for featured tools
  pulseEffect: {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-2px',
      left: '-2px',
      right: '-2px',
      bottom: '-2px',
      borderRadius: '17px',
      background: 'linear-gradient(45deg, #64b5f6, #42a5f5, #1e88e5, #64b5f6)',
      animation: '$pulse 2s linear infinite',
      zIndex: -1,
    },
  },
  
  // Connection lines
  connectionLine: {
    position: 'absolute',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(100, 181, 246, 0.5), transparent)',
    animation: '$lineGlow 3s ease-in-out infinite',
  },
  
  line1: {
    width: '150px',
    top: '30%',
    left: '25%',
    transform: 'rotate(25deg)',
    animationDelay: '0s',
  },
  
  line2: {
    width: '120px',
    bottom: '35%',
    right: '30%',
    transform: 'rotate(-15deg)',
    animationDelay: '1.5s',
  },
  
  // Animations
  '@keyframes gridMove': {
    '0%': { transform: 'translate(0, 0)' },
    '100%': { transform: 'translate(50px, 50px)' },
  },
  
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
    '33%': { transform: 'translateY(-20px) rotate(2deg)' },
    '66%': { transform: 'translateY(10px) rotate(-1deg)' },
  },
  
  '@keyframes orbFloat': {
    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
    '50%': { transform: 'translate(30px, -30px) scale(1.1)' },
  },
  
  '@keyframes pulse': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' },
    '100%': { transform: 'scale(1)' },
  },
  
  '@keyframes lineGlow': {
    '0%, 100%': { opacity: 0.3 },
    '50%': { opacity: 0.8 },
  },
});

const AIIntegrationInspiration = () => {
  const classes = useStyles();
  const [hoveredTool, setHoveredTool] = useState(null);

  const aiTools = [
    { name: 'Claude', category: 'AI Assistant', icon: <SmartToyIcon />, featured: true },
    { name: 'GitHub Copilot', category: 'Code Gen', icon: <CodeIcon />, featured: false },
    { name: 'Hugging Face', category: 'ML Models', icon: <PsychologyIcon />, featured: true },
    { name: 'LangChain', category: 'LLM Apps', icon: <BuildIcon />, featured: false },
    { name: 'Streamlit', category: 'Data Apps', icon: <DataUsageIcon />, featured: false },
    { name: 'Groq', category: 'Fast AI', icon: <FlashOnIcon />, featured: true },
  ];

  return (
    <Box className={classes.section}>
      {/* Animated background grid */}
      <Box className={classes.backgroundGrid} />
      
      {/* Glowing orbs */}
      <Box className={`${classes.glowOrb} ${classes.orb1}`} />
      <Box className={`${classes.glowOrb} ${classes.orb2}`} />
      <Box className={`${classes.glowOrb} ${classes.orb3}`} />
      
      <Container maxWidth="xl" className={classes.container}>
        {/* Header */}
        <Box className={classes.headerSection}>
          <Typography variant="h2" className={classes.mainTitle}>
            AI is Already in Our Classrooms
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Experience the future of learning with integrated AI tools and technologies
          </Typography>
        </Box>

        {/* Main content area */}
        <Box className={classes.contentArea}>
          {/* Left panel - Question & Answer */}
          <Box className={classes.leftPanel}>
            <Card className={classes.questionCard}>
              <Typography className={classes.questionText}>
                Is AI going to replace human jobs?
              </Typography>
              <Typography className={classes.answerText}>
                No. But people who leverage AI will replace those who don't.
              </Typography>
            </Card>
          </Box>

          {/* Right panel - AI Tools showcase */}
          <Box className={classes.rightPanel}>
            <Box className={classes.toolsHeader}>
              <Typography className={classes.toolsTitle}>
                AI Tools We Use Daily
              </Typography>
            </Box>

            <Box className={classes.floatingToolsContainer}>
              {/* Connection lines */}
              <Box className={`${classes.connectionLine} ${classes.line1}`} />
              <Box className={`${classes.connectionLine} ${classes.line2}`} />
              
              {/* Floating AI tool cards */}
              {aiTools.map((tool, index) => (
                <Card
                  key={tool.name}
                  className={`${classes.toolCard} ${classes[`tool${index + 1}`]} ${
                    tool.featured ? classes.pulseEffect : ''
                  }`}
                  onMouseEnter={() => setHoveredTool(index)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  <CardContent style={{ padding: '0' }}>
                    <Box className={classes.toolIcon}>
                      {tool.icon}
                    </Box>
                    <Typography className={classes.toolName}>
                      {tool.name}
                    </Typography>
                    <Box className={classes.toolCategory}>
                      {tool.category}
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AIIntegrationInspiration;