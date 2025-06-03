import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Card, CardContent, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import BuildIcon from '@mui/icons-material/Build';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    position: 'relative',
    background: 'linear-gradient(135deg, #f8fafc 0%, #eef4ff 100%)',
    overflow: 'hidden',
    '@media (max-width: 960px)': {
      padding: '60px 0',
    },
    '@media (max-width: 600px)': {
      padding: '50px 0',
    },
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'radial-gradient(rgba(42, 43, 106, 0.05) 2px, transparent 2px)',
    backgroundSize: '50px 50px',
    opacity: 0.5,
    zIndex: 1,
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '60px',
    '@media (max-width: 600px)': {
      marginBottom: '40px',
    },
  },
  mainTitle: {
    fontSize: '2.8rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    lineHeight: '1.2 !important',
    '@media (max-width: 960px)': {
      fontSize: '2.4rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '15px !important',
    },
  },
  highlight: {
    color: '#FFC614 !important',
    position: 'relative',
  },
  questionTitle: {
    fontSize: '1.8rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    '@media (max-width: 960px)': {
      fontSize: '1.6rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.4rem !important',
      marginBottom: '10px !important',
    },
  },
  answerText: {
    fontSize: '1.2rem !important',
    color: '#666 !important',
    marginBottom: '50px !important',
    maxWidth: '700px',
    margin: '0 auto 50px auto !important',
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
      marginBottom: '40px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '30px !important',
      maxWidth: '90%',
    },
  },
  integrationsTitle: {
    fontSize: '2.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '30px !important',
    textAlign: 'center',
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.6rem !important',
      marginBottom: '25px !important',
    },
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    marginBottom: '60px',
    '@media (max-width: 960px)': {
      gridTemplateColumns: '1fr',
      gap: '25px',
      marginBottom: '50px',
    },
    '@media (max-width: 600px)': {
      gap: '20px',
      marginBottom: '40px',
    },
  },
  featureItem: {
    padding: '25px',
    backgroundColor: 'white',
    borderRadius: '15px',
    border: '1px solid rgba(42, 43, 106, 0.1)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 40px rgba(42, 43, 106, 0.15)',
    },
    '@media (max-width: 600px)': {
      padding: '20px',
    },
  },
  featureIcon: {
    color: '#FFC614 !important',
    fontSize: '1.5rem !important',
    marginRight: '12px !important',
  },
  featureTitle: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '10px !important',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
  },
  featureDescription: {
    fontSize: '1rem !important',
    color: '#666 !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    },
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    '@media (max-width: 960px)': {
      gap: '30px',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gap: '25px',
    },
  },
  cardSection: {
    textAlign: 'center',
  },
  sectionLabel: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
      marginBottom: '15px !important',
    },
  },
  labelIcon: {
    color: '#FFC614 !important',
    fontSize: '1.8rem !important',
  },
  toolCard: {
    width: '100%',
    height: '300px',
    perspective: '1000px',
    '@media (max-width: 600px)': {
      height: '280px',
    },
  },
  cardInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transformStyle: 'preserve-3d',
  },
  cardFlipped: {
    transform: 'rotateY(180deg)',
  },
  cardFace: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '20px !important',
    background: 'white',
    border: '1px solid rgba(42, 43, 106, 0.1)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '25px',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '4px',
      background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 100%)',
    },
    '@media (max-width: 600px)': {
      padding: '20px',
    },
  },
  toolName: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '8px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
    },
  },
  toolCategory: {
    fontSize: '0.9rem !important',
    color: '#FFC614 !important',
    marginBottom: '15px !important',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '600 !important',
  },
  toolDescription: {
    fontSize: '1rem !important',
    color: '#666 !important',
    lineHeight: '1.5 !important',
    marginBottom: '15px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    },
  },
  toolFeatures: {
    fontSize: '0.9rem !important',
    color: '#888 !important',
    fontStyle: 'italic',
    lineHeight: '1.4 !important',
  },
  pricingChip: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    fontSize: '0.75rem !important',
    fontWeight: 'bold !important',
    zIndex: 2,
  },
  decorativeBlob: {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0.1,
    zIndex: 1,
  },
  blob1: {
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, #2A2B6A 0%, transparent 70%)',
    top: '-200px',
    right: '-200px',
    animation: '$float 8s ease-in-out infinite',
  },
  blob2: {
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, #FFC614 0%, transparent 70%)',
    bottom: '-150px',
    left: '-150px',
    animation: '$float 8s ease-in-out infinite 4s',
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0) rotate(0deg)',
    },
    '50%': {
      transform: 'translateY(-20px) rotate(10deg)',
    },
  },
});

const AIIntegrationSection = () => {
  const classes = useStyles();
  const [fullstackFlipped, setFullstackFlipped] = useState(false);
  const [dataScienceFlipped, setDataScienceFlipped] = useState(false);
  const [fullstackIndex, setFullstackIndex] = useState(0);
  const [dataScienceIndex, setDataScienceIndex] = useState(0);

  const fullstackTools = [
    {
      name: 'GitHub Copilot',
      category: 'Code Generation',
      description: 'Auto-complete code for frontend and backend development',
      features: 'Context-aware code suggestions for JS, Python, SQL',
      pricing: 'Paid'
    },
    {
      name: 'Vercel v0',
      category: 'Frontend UI Generation', 
      description: 'Generate React/UIs from text prompts',
      features: 'AI-driven UI scaffolding, component customization',
      pricing: 'Freemium'
    },
    {
      name: 'AWS CodeWhisperer',
      category: 'Code Generation',
      description: 'Full-stack code suggestions in your IDE',
      features: 'IDE-integrated completions (JS, Python, Java)',
      pricing: 'Free'
    },
    {
      name: 'DhiWise',
      category: 'Low-Code Dev',
      description: 'Convert Figma designs to React/Flutter code',
      features: 'AI-powered design-to-code conversion',
      pricing: 'Freemium'
    },
    {
      name: 'Tabnine',
      category: 'Code Completion',
      description: 'Predictive code completion for all languages',
      features: 'Local/cloud-based AI models for faster coding',
      pricing: 'Freemium'
    },
    {
      name: 'Postman API GPT',
      category: 'API Development',
      description: 'Generate API documentation and test cases',
      features: 'AI-driven API testing, mock server setup',
      pricing: 'Freemium'
    },
    {
      name: 'Figma AI',
      category: 'Design-to-Code',
      description: 'Generate CSS, React code from designs',
      features: 'Auto-extract design tokens, responsive code',
      pricing: 'Freemium'
    },
    {
      name: 'GPT Engineer',
      category: 'Code Generation',
      description: 'Build apps from natural language prompts',
      features: 'Generates full-stack code (Next.js, FastAPI, etc.)',
      pricing: 'Free'
    },
    {
      name: 'Codium',
      category: 'Code Quality',
      description: 'Auto-write unit tests, detect bugs',
      features: 'AI reviews PRs, suggests fixes',
      pricing: 'Freemium'
    }
  ];

  const dataScienceTools = [
    {
      name: 'Google Colab',
      category: 'Cloud Notebooks',
      description: 'Prototyping with free GPU/TPU access',
      features: 'Free GPU, integrates with Gemini',
      pricing: 'Free'
    },
    {
      name: 'Hugging Face',
      category: 'NLP/LLMs',
      description: 'Model hosting and fine-tuning platform',
      features: 'Massive model library (Transformers, Diffusers)',
      pricing: 'Freemium'
    },
    {
      name: 'LangChain',
      category: 'LLM App Development',
      description: 'Build complex AI workflows and RAG systems',
      features: 'Modular design, tool integrations',
      pricing: 'Free'
    },
    {
      name: 'Streamlit',
      category: 'Visualization/Apps',
      description: 'Turn scripts into interactive web dashboards',
      features: 'Turn scripts into web apps instantly',
      pricing: 'Free'
    },
    {
      name: 'MLflow',
      category: 'MLOps',
      description: 'Complete model lifecycle management',
      features: 'Track experiments, deploy models',
      pricing: 'Free'
    },
    {
      name: 'Groq',
      category: 'LLM Inference',
      description: 'High-speed model API responses',
      features: 'Blazing-fast response times',
      pricing: 'Freemium'
    },
    {
      name: 'Ollama',
      category: 'Local LLMs',
      description: 'Running models offline (Llama, Mistral)',
      features: 'Privacy-focused, lightweight',
      pricing: 'Free'
    },
    {
      name: 'Perplexity AI',
      category: 'AI Search',
      description: 'Research with quick, cited answers',
      features: 'Cited sources, fast results',
      pricing: 'Freemium'
    },
    {
      name: 'DuckDB',
      category: 'Analytics',
      description: 'SQL on local files for data analysis',
      features: 'Faster than pandas for large datasets',
      pricing: 'Free'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Flip fullstack card
      setFullstackFlipped(true);
      setTimeout(() => {
        setFullstackIndex((prev) => (prev + 1) % fullstackTools.length);
        setFullstackFlipped(false);
      }, 400);

      // Flip data science card with slight delay
      setTimeout(() => {
        setDataScienceFlipped(true);
        setTimeout(() => {
          setDataScienceIndex((prev) => (prev + 1) % dataScienceTools.length);
          setDataScienceFlipped(false);
        }, 400);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [fullstackTools.length, dataScienceTools.length]);

  const features = [
    {
      icon: <AutoAwesomeIcon />,
      title: 'AI-First Approach in Every Module',
      description: 'From project planning to coding, students learn how to co-work with AI tools across real-world tasks.'
    },
    {
      icon: <BuildIcon />,
      title: 'Learn to Build & Use AI Tools',
      description: 'Hands-on experience in creating AI-powered features, writing AI-assisted code, and automating tasks smartly.'
    },
    {
      icon: <SmartToyIcon />,
      title: 'Use AI to Solve Problems—Not Avoid Them',
      description: "You'll learn how to prompt, validate, and fine-tune AI outputs for accuracy and real business needs."
    }
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.backgroundPattern} />
      <Box className={`${classes.decorativeBlob} ${classes.blob1}`} />
      <Box className={`${classes.decorativeBlob} ${classes.blob2}`} />
      
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.headerSection}>
          <Typography variant="h2" className={classes.mainTitle}>
            AI is Not the Future—It's <span className={classes.highlight}>Already in Our Classrooms</span>
          </Typography>
          
          <Typography variant="h3" className={classes.questionTitle}>
            Is AI going to replace human jobs?
          </Typography>
          
          <Typography variant="body1" className={classes.answerText}>
            No. But people who leverage AI will replace those who don't
          </Typography>
        </Box>

        <Typography variant="h3" className={classes.integrationsTitle}>
          How We Integrate AI into Learning
        </Typography>

        <Box className={classes.featuresGrid}>
          {features.map((feature, index) => (
            <Box key={index} className={classes.featureItem}>
              <Typography className={classes.featureTitle}>
                {React.cloneElement(feature.icon, { className: classes.featureIcon })}
                {feature.title}
              </Typography>
              <Typography className={classes.featureDescription}>
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box className={classes.cardsContainer}>
          {/* Fullstack Tools Card */}
          <Box className={classes.cardSection}>
            <Typography className={classes.sectionLabel}>
              <CodeIcon className={classes.labelIcon} />
              Full Stack Development AI Tools
            </Typography>
            <Box className={classes.toolCard}>
              <Box className={`${classes.cardInner} ${fullstackFlipped ? classes.cardFlipped : ''}`}>
                <Card className={classes.cardFace}>
                  <Chip 
                    label={fullstackTools[fullstackIndex].pricing}
                    className={classes.pricingChip}
                  />
                  <CardContent>
                    <Typography className={classes.toolName}>
                      {fullstackTools[fullstackIndex].name}
                    </Typography>
                    <Typography className={classes.toolCategory}>
                      {fullstackTools[fullstackIndex].category}
                    </Typography>
                    <Typography className={classes.toolDescription}>
                      {fullstackTools[fullstackIndex].description}
                    </Typography>
                    <Typography className={classes.toolFeatures}>
                      {fullstackTools[fullstackIndex].features}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>

          {/* Data Science Tools Card */}
          <Box className={classes.cardSection}>
            <Typography className={classes.sectionLabel}>
              <DataUsageIcon className={classes.labelIcon} />
              Data Science AI Tools
            </Typography>
            <Box className={classes.toolCard}>
              <Box className={`${classes.cardInner} ${dataScienceFlipped ? classes.cardFlipped : ''}`}>
                <Card className={classes.cardFace}>
                  <Chip 
                    label={dataScienceTools[dataScienceIndex].pricing}
                    className={classes.pricingChip}
                  />
                  <CardContent>
                    <Typography className={classes.toolName}>
                      {dataScienceTools[dataScienceIndex].name}
                    </Typography>
                    <Typography className={classes.toolCategory}>
                      {dataScienceTools[dataScienceIndex].category}
                    </Typography>
                    <Typography className={classes.toolDescription}>
                      {dataScienceTools[dataScienceIndex].description}
                    </Typography>
                    <Typography className={classes.toolFeatures}>
                      {dataScienceTools[dataScienceIndex].features}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AIIntegrationSection;