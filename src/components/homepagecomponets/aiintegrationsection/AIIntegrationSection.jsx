import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Card, CardContent, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Import icons
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BuildIcon from '@mui/icons-material/Build';
import LanguageIcon from '@mui/icons-material/Language';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AssessmentIcon from '@mui/icons-material/Assessment';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LaptopIcon from '@mui/icons-material/Laptop';
import FunctionsIcon from '@mui/icons-material/Functions';

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
    marginBottom: '30px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
    },
  },
  
  // Card stacks container
  cardStacksContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    height: '100%',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      gap: '50px',
      alignItems: 'center',
    },
  },
  
  // Category label
  categoryLabel: {
    fontSize: '1.2rem !important',
    color: 'white !important',
    marginBottom: '20px !important',
    textAlign: 'center',
    position: 'relative',
    display: 'inline-block',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '0',
      width: '100%',
      height: '2px',
      background: 'linear-gradient(90deg, transparent, rgba(100, 181, 246, 0.8), transparent)',
    },
  },
  
  // Card stack
  stackContainer: {
    position: 'relative',
    width: '320px',
    height: '400px',
    perspective: '1000px',
    '@media (max-width: 600px)': {
      width: '280px',
      height: '350px',
    },
  },
  
  // Navigation buttons
  navigationButtons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    gap: '10px',
  },
  
  navButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
    color: 'white !important',
    border: '1px solid rgba(255, 255, 255, 0.2) !important',
    '&:hover': {
      backgroundColor: 'rgba(100, 181, 246, 0.2) !important',
    },
  },
  
  // Stack card
  stackCard: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    borderRadius: '20px !important',
    backfaceVisibility: 'hidden',
    transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transformStyle: 'preserve-3d',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    '&:hover': {
      transform: 'rotateY(180deg)',
    },
  },
  
  cardFront: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, rgba(66, 165, 245, 0.2) 0%, rgba(21, 101, 192, 0.3) 100%)',
    backdropFilter: 'blur(20px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    textAlign: 'center',
  },
  
  cardBack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, rgba(66, 165, 245, 0.3) 0%, rgba(21, 101, 192, 0.4) 100%)',
    backdropFilter: 'blur(20px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    textAlign: 'center',
    transform: 'rotateY(180deg)',
  },
  
  toolIconWrapper: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(100, 181, 246, 0.8) 0%, rgba(30, 136, 229, 0.8) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    '& svg': {
      fontSize: '40px',
      color: 'white',
    },
  },
  
  toolName: {
    fontSize: '1.5rem !important',
    fontWeight: '700 !important',
    color: 'white !important',
    marginBottom: '15px !important',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  },
  
  toolCategory: {
    fontSize: '0.9rem !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    padding: '5px 12px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    marginBottom: '30px', // Increased margin to compensate for removed description
  },
  
  toolFeatures: {
    width: '100%',
    marginTop: 'auto',
  },
  
  featureItem: {
    fontSize: '0.8rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    margin: '5px 0 !important',
    display: 'flex',
    alignItems: 'center',
    '&:before': {
      content: '"•"',
      color: '#64b5f6',
      fontWeight: 'bold',
      marginRight: '8px',
    },
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
  
  // Animations
  '@keyframes gridMove': {
    '0%': { transform: 'translate(0, 0)' },
    '100%': { transform: 'translate(50px, 50px)' },
  },
  
  '@keyframes orbFloat': {
    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
    '50%': { transform: 'translate(30px, -30px) scale(1.1)' },
  },
});

const AIIntegrationCardSliders = () => {
  const classes = useStyles();
  
  // State for current card indices
  const [fullstackIndex, setFullstackIndex] = useState(0);
  const [dataScienceIndex, setDataScienceIndex] = useState(0);

  // Full Stack development tools
  const fullstackTools = [
    {
      name: 'GitHub Copilot',
      category: 'Code Generation',
      icon: <CodeIcon />,
      description: 'AI pair programmer that helps you write code faster with smart completions and suggestions.',
      features: [
        'Context-aware code suggestions',
        'Supports multiple languages',
        'Integrated in your IDE',
        'Learns from your coding style'
      ]
    },
    {
      name: 'Vercel v0',
      category: 'UI Generation',
      icon: <LaptopIcon />,
      description: 'AI-powered interface that turns natural language into production-ready frontend code.',
      features: [
        'Text to React components',
        'Responsive design generation',
        'Real-time preview',
        'Tailwind CSS integration'
      ]
    },
    {
      name: 'AWS CodeWhisperer',
      category: 'Code Suggestions',
      icon: <IntegrationInstructionsIcon />,
      description: "Amazon's AI coding companion that generates code suggestions based on your comments and code.",
      features: [
        'Security scanning',
        'Reference tracking',
        'Multiple IDE support',
        'AWS service integration'
      ]
    },
    {
      name: 'Tabnine',
      category: 'Code Completion',
      icon: <AutoFixHighIcon />,
      description: 'AI assistant that predicts and suggests code completions based on context and patterns.',
      features: [
        'Whole-line completions',
        'Local & cloud models',
        'Team learning capabilities',
        'Privacy-focused options'
      ]
    },
    {
      name: 'Postman API GPT',
      category: 'API Development',
      icon: <ApiIcon />,
      description: 'AI-powered assistant for API development that helps with testing, documentation, and debugging.',
      features: [
        'Test case generation',
        'Documentation writing',
        'API request recommendations',
        'Troubleshooting assistance'
      ]
    },
    {
      name: 'GPT Engineer',
      category: 'App Generation',
      icon: <RocketLaunchIcon />,
      description: 'Open-source project that allows you to specify what you want to build, and an AI agent builds it for you.',
      features: [
        'Full app generation',
        'Natural language instructions',
        'Project structure creation',
        'Iterative refinement'
      ]
    }
  ];
  
  // Data Science tools
  const dataScienceTools = [
    {
      name: 'Claude',
      category: 'AI Assistant',
      icon: <SmartToyIcon />,
      description: 'Advanced AI assistant that can help with data analysis, research, and code generation.',
      features: [
        'Data analysis assistance',
        'Research summarization',
        'Code explanation',
        'Context understanding'
      ]
    },
    {
      name: 'Hugging Face',
      category: 'ML Models',
      icon: <PsychologyIcon />,
      description: 'Platform that provides access to thousands of pre-trained models for various ML tasks.',
      features: [
        'Model hosting & sharing',
        'Fine-tuning capabilities',
        'Inference API',
        'Dataset hosting'
      ]
    },
    {
      name: 'LangChain',
      category: 'LLM App Development',
      icon: <BuildIcon />,
      description: 'Framework for developing applications powered by language models through composability.',
      features: [
        'Document loading & processing',
        'Retrieval augmented generation',
        'Agent frameworks',
        'Memory management'
      ]
    },
    {
      name: 'Streamlit',
      category: 'Data Visualization',
      icon: <ShowChartIcon />,
      description: 'Framework that turns data scripts into shareable web apps in minutes, no front-end experience required.',
      features: [
        'Interactive visualizations',
        'Quick prototyping',
        'Simple deployment',
        'Widget support'
      ]
    },
    {
      name: 'MLflow',
      category: 'MLOps',
      icon: <StorageIcon />,
      description: 'Open-source platform for managing the end-to-end machine learning lifecycle.',
      features: [
        'Experiment tracking',
        'Model registry',
        'Model deployment',
        'Project packaging'
      ]
    },
    {
      name: 'Groq',
      category: 'Fast AI Inference',
      icon: <FlashOnIcon />,
      description: 'Ultra-fast language processing with unprecedented inference speeds for LLM applications.',
      features: [
        'Low-latency inference',
        'High throughput APIs',
        'Easy integration',
        'Various model support'
      ]
    }
  ];

  // Navigation handlers
  const handleFullstackPrev = () => {
    setFullstackIndex((prev) => (prev === 0 ? fullstackTools.length - 1 : prev - 1));
  };

  const handleFullstackNext = () => {
    setFullstackIndex((prev) => (prev === fullstackTools.length - 1 ? 0 : prev + 1));
  };

  const handleDataSciencePrev = () => {
    setDataScienceIndex((prev) => (prev === 0 ? dataScienceTools.length - 1 : prev - 1));
  };

  const handleDataScienceNext = () => {
    setDataScienceIndex((prev) => (prev === dataScienceTools.length - 1 ? 0 : prev + 1));
  };

  // Calculate stack positions and styles
  const getCardStyle = (index, activeIndex, totalCards) => {
    // Calculate relative position in stack
    const position = (index - activeIndex + totalCards) % totalCards;
    
    // Define z-index and transform based on position
    let zIndex = totalCards - position;
    let translateY = position * 15;
    let scale = 1 - position * 0.07;
    let opacity = 1 - position * 0.2;
    
    // Only show top 3 cards
    if (position > 2) {
      return { display: 'none' };
    }
    
    return {
      zIndex,
      transform: `translateY(${translateY}px) scale(${scale})`,
      opacity: opacity > 0 ? opacity : 0
    };
  };

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

          {/* Right panel - Card stacks */}
          <Box className={classes.rightPanel}>
            <Box className={classes.toolsHeader}>
              <Typography className={classes.toolsTitle}>
                AI Tools We Use Daily
              </Typography>
            </Box>

            <Box className={classes.cardStacksContainer}>
              {/* Fullstack Development Tools Stack */}
              <Box>
                <Typography className={classes.categoryLabel}>
                  Full Stack Development
                </Typography>
                
                <Box className={classes.stackContainer}>
                  {fullstackTools.map((tool, index) => (
                    <Card 
                      key={`fullstack-${index}`} 
                      className={classes.stackCard}
                      style={getCardStyle(index, fullstackIndex, fullstackTools.length)}
                    >
                      <Box className={classes.cardFront}>
                        <Box className={classes.toolIconWrapper}>
                          {tool.icon}
                        </Box>
                        <Typography className={classes.toolName}>
                          {tool.name}
                        </Typography>
                        <Typography className={classes.toolCategory}>
                          {tool.category}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                          (Hover to see features)
                        </Typography>
                      </Box>
                      
                      <Box className={classes.cardBack}>
                        <Typography className={classes.toolName}>
                          {tool.name} Features
                        </Typography>
                        <Box className={classes.toolFeatures}>
                          {tool.features.map((feature, idx) => (
                            <Typography key={idx} className={classes.featureItem}>
                              {feature}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    </Card>
                  ))}
                </Box>
                
                <Box className={classes.navigationButtons}>
                  <IconButton 
                    className={classes.navButton}
                    onClick={handleFullstackPrev}
                  >
                    <KeyboardArrowUpIcon />
                  </IconButton>
                  <IconButton 
                    className={classes.navButton}
                    onClick={handleFullstackNext}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </Box>
              </Box>
              
              {/* Data Science Tools Stack */}
              <Box>
                <Typography className={classes.categoryLabel}>
                  Data Science
                </Typography>
                
                <Box className={classes.stackContainer}>
                  {dataScienceTools.map((tool, index) => (
                    <Card 
                      key={`datascience-${index}`} 
                      className={classes.stackCard}
                      style={getCardStyle(index, dataScienceIndex, dataScienceTools.length)}
                    >
                      <Box className={classes.cardFront}>
                        <Box className={classes.toolIconWrapper}>
                          {tool.icon}
                        </Box>
                        <Typography className={classes.toolName}>
                          {tool.name}
                        </Typography>
                        <Typography className={classes.toolCategory}>
                          {tool.category}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                          (Hover to see features)
                        </Typography>
                      </Box>
                      
                      <Box className={classes.cardBack}>
                        <Typography className={classes.toolName}>
                          {tool.name} Features
                        </Typography>
                        <Box className={classes.toolFeatures}>
                          {tool.features.map((feature, idx) => (
                            <Typography key={idx} className={classes.featureItem}>
                              {feature}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    </Card>
                  ))}
                </Box>
                
                <Box className={classes.navigationButtons}>
                  <IconButton 
                    className={classes.navButton}
                    onClick={handleDataSciencePrev}
                  >
                    <KeyboardArrowUpIcon />
                  </IconButton>
                  <IconButton 
                    className={classes.navButton}
                    onClick={handleDataScienceNext}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AIIntegrationCardSliders;