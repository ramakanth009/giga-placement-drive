import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Card, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Import icons
import CodeIcon from '@mui/icons-material/Code';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import BuildIcon from '@mui/icons-material/Build';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LaptopIcon from '@mui/icons-material/Laptop';

const useStyles = makeStyles({
  section: {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #101138 0%, #1e1c44 100%)',
    display: 'flex',
    flexDirection: 'column',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 
        'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      backgroundSize: '30px 30px',
      zIndex: 1,
    },
    "@media (max-width: 1200px)": {
      padding: '50px 0',
      '&:before': {
        backgroundSize: '25px 25px',
      },
    },
    "@media (max-width: 960px)": {
      padding: '60px 0',
      '&:before': {
        backgroundSize: '20px 20px',
      },
    },
    "@media (max-width: 600px)": {
      padding: '40px 0',
      '&:before': {
        backgroundSize: '15px 15px',
      },
    },
  },
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 2,
    padding: '0 40px',
    "@media (max-width: 1200px)": {
      padding: '0 30px',
    },
    "@media (max-width: 960px)": {
      padding: '0 25px',
    },
    "@media (max-width: 600px)": {
      padding: '0 20px',
    },
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 2,
    "@media (max-width: 600px)": {
      marginBottom: '30px',
    },
  },
  mainTitle: {
    fontSize: '3.5rem !important',
    fontWeight: '800 !important',
    marginBottom: '10px !important',
    letterSpacing: '-0.02em',
    color: 'white !important',
    position: 'relative',
    '@media (max-width: 960px)': {
      fontSize: '2.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2.2rem !important',
    },
  },
  highlight: {
    color: '#FFC614 !important',
    position: 'relative',
  },
  subtitle: {
    fontSize: '1rem !important',
    color: 'rgba(255, 255, 255, 0.7) !important',
    maxWidth: '900px',
    margin: '5px auto 0 !important',
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
      maxWidth: '90%',
      margin: '8px auto 0 !important',
    },
  },
  
  // Enhanced main content area
  contentArea: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
    },
  },
  
  // Enhanced left panel with interaction animations
  leftPanel: {
    flex: '0 0 35%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    opacity: 0,
    transform: 'translateX(-50px)',
    animation: '$slideInLeft 1s ease-out 0.6s forwards',
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
    transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      background: 'conic-gradient(from 0deg, transparent, rgba(100, 181, 246, 0.1), transparent)',
      opacity: 0,
      animation: '$rotate 4s linear infinite',
      transition: 'opacity 0.3s ease',
    },
    '&:hover': {
      transform: 'translateY(-10px) scale(1.02)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 40px rgba(255, 198, 20, 0.2)',
      borderColor: 'rgba(255, 198, 20, 0.3)',
      '&::before': {
        opacity: 1,
      },
      '& $questionText': {
        color: '#FFC614 !important',
        textShadow: '0 0 20px rgba(255, 198, 20, 0.5)',
      },
      '& $answerText': {
        color: '#2ecc71 !important',
        textShadow: '0 0 20px rgba(46, 204, 113, 0.5)',
      },
    },
    '&:active': {
      transform: 'translateY(-5px) scale(0.98)',
    },
    '@media (max-width: 600px)': {
      padding: '20px !important',
    },
  },
  
  questionText: {
    fontSize: '1.8rem !important',
    fontWeight: '600 !important',
    color: '#fdb347 !important',
    marginBottom: '20px !important',
    lineHeight: '1.3 !important',
    transition: 'all 0.4s ease',
    position: 'relative',
    zIndex: 2,
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
    color: '#2ecc71 !important',
    transition: 'all 0.4s ease',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 960px)': {
      fontSize: '1.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
  },
  
  // Enhanced right panel
  rightPanel: {
    flex: 1,
    position: 'relative',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    opacity: 0,
    transform: 'translateX(50px)',
    animation: '$slideInRight 1s ease-out 0.8s forwards',
  },
  
  toolsHeader: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  
  toolsTitle: {
    fontSize: '1.5rem !important',
    fontWeight: '600 !important',
    color: 'white !important',
    marginBottom: '10px !important',
    position: 'relative',
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
    },
  },
  
  // Enhanced card stacks container
  cardStacksContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    height: '100%',
    gap: '40px',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      gap: '50px',
      alignItems: 'center',
    },
  },
  
  // Enhanced category label
  categoryLabel: {
    fontSize: '1.2rem !important',
    color: 'white !important',
    marginBottom: '20px !important',
    textAlign: 'center',
    position: 'relative',
    display: 'inline-block',
    alignItems: 'center',
    opacity: 0,
    transform: 'translateY(20px)',
    animation: '$fadeInUp 0.8s ease-out 1.4s forwards',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '0',
      width: '0',
      height: '2px',
      background: 'linear-gradient(90deg, transparent, rgba(255, 198, 20, 0.8), transparent)',
      animation: '$expandLine 1s ease-out 1.6s forwards',
    },
  },
  
  // Enhanced stack container with perspective
  stackContainer: {
    position: 'relative',
    width: '380px',    // Increased from 320px
    height: '500px',   // Increased from 400px
    perspective: '1200px',
    transformStyle: 'preserve-3d',
    '@media (max-width: 600px)': {
      width: '320px',  // Increased from 280px
      height: '450px', // Increased from 350px
    },
  },
  
  // Enhanced navigation buttons
  navigationButtons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    gap: '10px',
    opacity: 0,
    animation: '$fadeIn 0.8s ease-out 1.8s forwards',
  },
  
  navButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
    color: 'white !important',
    border: '1px solid rgba(255, 255, 255, 0.2) !important',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '0',
      height: '0',
      borderRadius: '50%',
      background: 'rgba(100, 181, 246, 0.3)',
      transition: 'all 0.3s ease',
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 198, 20, 0.2) !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
      '&::before': {
        width: '100%',
        height: '100%',
      },
    },
    '&:active': {
      transform: 'translateY(-1px) scale(0.95)',
    },
  },
  
  // Enhanced stack card with advanced animations
  stackCard: {
    position: 'absolute',
    width: '100%',
    height: '75%',     // Increased from 60%
    borderRadius: '20px !important',
    backfaceVisibility: 'hidden',
    transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transformStyle: 'preserve-3d',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    cursor: 'pointer',
    willChange: 'transform, opacity',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    },
  },
  
  cardFront: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, rgba(16, 17, 56, 0.9) 0%, rgba(30, 28, 68, 0.95) 100%)',
    backdropFilter: 'blur(20px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
      transition: 'left 0.6s',
    },
    '$stackCard:hover &::before': {
      left: '100%',
    },
  },
  
  // Enhanced tool icon with glow effect
  toolIconWrapper: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #9370DB 0%, #483D8B 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(147, 112, 219, 0.5)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: '-3px',
      borderRadius: '50%',
      background: 'conic-gradient(from 0deg, #9370DB, #483D8B, #9370DB)',
      opacity: 0,
      transition: 'opacity 0.4s ease',
      animation: '$rotate 3s linear infinite',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: '0',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #9370DB 0%, #483D8B 100%)',
    },
    '$stackCard:hover &': {
      transform: 'scale(1.1)',
      '&::before': {
        opacity: 1,
      },
    },
    '& svg': {
      fontSize: '30px',
      color: 'white',
      position: 'relative',
      zIndex: 2,
      transition: 'all 0.3s ease',
    },
  },
  
  toolName: {
    fontSize: '1.3rem !important',
    fontWeight: '700 !important',
    color: 'white !important',
    marginBottom: '15px !important',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
  },
  
  toolCategory: {
    fontSize: '0.85rem !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    padding: '6px 14px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    marginBottom: '20px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    '$stackCard:hover &': {
      background: 'rgba(147, 112, 219, 0.2)',
      borderColor: 'rgba(147, 112, 219, 0.4)',
    },
  },
  
  toolFeatures: {
    width: '100%',
    marginTop: 'auto',
  },
  
  featureItem: {
  fontSize: '0.9rem !important',
  color: '#ffffff !important', // Pure white for better contrast
  margin: '8px 0 !important',
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.3s ease',
  textAlign: 'left !important',
  '&:before': {
    content: '"◆"',
    color: '#FFC614', // Changed to yellow for better contrast
    fontWeight: 'bold',
    marginRight: '10px',
    transition: 'all 0.3s ease',
    flexShrink: 0,
  },
  '$stackCard:hover &': {
    color: '#ffffff !important',
    textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)', // Add shadow for better readability
    '&:before': {
      color: '#FFD23F', // Brighter yellow on hover
      transform: 'scale(1.2)',
    },
  },
},
  
  // Enhanced glowing orbs with interaction
  glowOrb: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(40px)',
    animation: '$orbFloat 8s ease-in-out infinite',
    zIndex: 1,
    transition: 'all 0.5s ease',
    width: '200px',
    height: '200px',
    '&.orb1': {
      background: 'radial-gradient(circle, rgba(255, 198, 20, 0.3) 0%, transparent 70%)',
      top: '10%',
      left: '5%',
      animationDelay: '0s',
    },
    '&.orb2': {
      background: 'radial-gradient(circle, rgba(46, 204, 113, 0.3) 0%, transparent 70%)',
      top: '60%',
      right: '8%',
      animationDelay: '2s',
    },
    '&.orb3': {
      background: 'radial-gradient(circle, rgba(42, 43, 106, 0.3) 0%, transparent 70%)',
      bottom: '20%',
      left: '15%',
      animationDelay: '4s',
    },
  },
  
  // Enhanced animations
  '@keyframes gridMove': {
    '0%': { transform: 'translate(0, 0)' },
    '100%': { transform: 'translate(50px, 50px)' },
  },
  
  '@keyframes orbFloat': {
    '0%, 100%': { 
      transform: 'translate(0, 0) scale(1)',
      opacity: 0.3,
    },
    '50%': { 
      transform: 'translate(30px, -30px) scale(1.1)',
      opacity: 0.6,
    },
  },
  
  '@keyframes fadeInUp': {
    'to': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  
  '@keyframes fadeIn': {
    'to': {
      opacity: 1,
    },
  },
  
  '@keyframes slideInLeft': {
    'to': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  
  '@keyframes slideInRight': {
    'to': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  
  '@keyframes expandLine': {
    'to': {
      width: '60px',
    },
  },
  
  '@keyframes rotate': {
    'from': { transform: 'rotate(0deg)' },
    'to': { transform: 'rotate(360deg)' },
  },
  
  // Touch gesture animations for mobile
  '@media (max-width: 768px)': {
    stackCard: {
      '&:active': {
        transform: 'scale(0.95)',
        transition: 'transform 0.1s ease',
      },
    },
  },
});

const AIIntegrationSection = () => {
  const classes = useStyles();
  
  // State for current card indices
  const [fullstackIndex, setFullstackIndex] = useState(0);
  const [dataScienceIndex, setDataScienceIndex] = useState(0);
  
  // Refs for intersection observer
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Full Stack development tools
  const fullstackTools = [
    {
      name: 'GitHub Copilot',
      category: 'Code Generation',
      icon: <CodeIcon />,
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
      features: [
        'Low-latency inference',
        'High throughput APIs',
        'Easy integration',
        'Various model support'
      ]
    }
  ];

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFullstackIndex((prev) => (prev + 1) % fullstackTools.length);
      setTimeout(() => {
        setDataScienceIndex((prev) => (prev + 1) % dataScienceTools.length);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [fullstackTools.length, dataScienceTools.length]);

  // Navigation handlers with haptic feedback simulation
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

  // Enhanced card style calculation with smoother transitions
  const getCardStyle = (index, activeIndex, totalCards) => {
    const position = (index - activeIndex + totalCards) % totalCards;
    
    let zIndex = totalCards - position;
    let translateY = position * 12;
    let translateZ = -position * 20;
    let scale = 1 - position * 0.05;
    let opacity = 1 - position * 0.15;
    let rotateX = position * 2;
    
    if (position > 2) {
      return { display: 'none' };
    }
    
    return {
      zIndex,
      transform: `translateY(${translateY}px) translateZ(${translateZ}px) scale(${scale}) rotateX(${rotateX}deg)`,
      opacity: opacity > 0 ? opacity : 0,
      transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    };
  };

  // Handle card click with ripple effect
  const handleCardClick = (e, toolName) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(100, 181, 246, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.marginLeft = '-10px';
    ripple.style.marginTop = '-10px';
    ripple.style.pointerEvents = 'none';
    
    e.currentTarget.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);

    console.log(`Clicked on ${toolName}`);
  };

  return (
    <Box className={classes.section} ref={sectionRef}>
      {/* Enhanced animated background grid */}
      <Box className={classes.backgroundGrid} />
      
      {/* Enhanced glowing orbs */}
      <Box className={`${classes.glowOrb} orb1`} />
      <Box className={`${classes.glowOrb} orb2`} />
      <Box className={`${classes.glowOrb} orb3`} />
      
      <Container maxWidth="xl" className={classes.container}>
        {/* Enhanced header */}
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.mainTitle}>
            AI is Already in Our <span className={classes.highlight}>Classrooms</span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Experience the future of learning with integrated AI tools and technologies
          </Typography>
        </Box>

        {/* Enhanced main content area */}
        <Box className={classes.contentArea}>
          {/* Enhanced left panel */}
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

          {/* Enhanced right panel */}
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
                      onClick={(e) => handleCardClick(e, tool.name)}
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
                      onClick={(e) => handleCardClick(e, tool.name)}
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
      
      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </Box>
  );
};

export default AIIntegrationSection;