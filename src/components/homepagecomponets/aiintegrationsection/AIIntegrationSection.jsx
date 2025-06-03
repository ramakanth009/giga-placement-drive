import React from 'react';
import { Box, Typography, Container, Card, CardContent, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import BuildIcon from '@mui/icons-material/Build';
import SmartToyIcon from '@mui/icons-material/SmartToy';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';
// Import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

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
    marginBottom: '20px',
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
    color: '#4F46E5 !important',  // Changed from #FFC614 to a modern indigo
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
    marginBottom: '20px !important',
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
    color: '#4F46E5 !important',  // Changed from #FFC614
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
  slidersContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    '@media (max-width: 960px)': {
      gap: '40px',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '50px',
    },
  },
  sliderSection: {
    textAlign: 'center',
  },
  sectionLabel: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '30px !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
      marginBottom: '20px !important',
    },
  },
  labelIcon: {
    color: '#FFC614 !important',
    fontSize: '1.8rem !important',
  },
  swiperContainer: {
    width: '100%',
    maxWidth: '400px',
    height: '350px',
    margin: '0 auto',
    '@media (max-width: 600px)': {
      maxWidth: '320px',
      height: '300px',
    },
  },
  toolCard: {
    width: '100%',
    height: '100%',
    borderRadius: '16px !important',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8faff 100%)',
    border: '1px solid rgba(79, 70, 229, 0.1)',
    boxShadow: '0 10px 25px rgba(79, 70, 229, 0.08) !important',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 40px rgba(79, 70, 229, 0.12) !important',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '5px',
      background: 'linear-gradient(90deg, #4F46E5 0%, #818CF8 100%)',
    },
  },
  toolCardContent: {
    padding: '30px !important',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '12px',
    '@media (max-width: 600px)': {
      padding: '25px !important',
    },
  },
  toolName: {
    fontSize: '1.5rem !important',
    fontWeight: '700 !important',
    color: '#2D3748 !important',
    marginBottom: '4px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
    },
  },
  toolCategory: {
    fontSize: '0.875rem !important',
    color: '#4F46E5 !important',
    marginBottom: '12px !important',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    fontWeight: '600 !important',
    background: 'rgba(79, 70, 229, 0.08)',
    padding: '4px 12px',
    borderRadius: '12px',
  },
  toolDescription: {
    fontSize: '1rem !important',
    color: '#4A5568 !important',
    lineHeight: '1.6 !important',
    marginBottom: '12px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    },
  },
  toolFeatures: {
    fontSize: '0.9rem !important',
    color: '#718096 !important',
    fontStyle: 'normal',
    lineHeight: '1.5 !important',
    background: 'rgba(79, 70, 229, 0.04)',
    padding: '8px 16px',
    borderRadius: '8px',
    width: '100%',
  },
  pricingChip: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: 'rgba(79, 70, 229, 0.1) !important',
    color: '#4F46E5 !important',
    fontSize: '0.8rem !important',
    fontWeight: '600 !important',
    padding: '4px 12px !important',
    borderRadius: '20px !important',
    border: '1px solid rgba(79, 70, 229, 0.2)',
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
  // Custom Swiper styles
  '& .swiper': {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  '& .swiper-slide': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px',
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#fff',
    transform: 'scale(0.9)',
    transition: 'transform 0.3s ease-in-out',
  },
  '& .swiper-slide-active': {
    transform: 'scale(1) !important',
  },
  '& .swiper-slide-next, & .swiper-slide-prev': {
    transform: 'scale(0.85) !important',
  },
});

const AIIntegrationSection = () => {
  const classes = useStyles();

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
            AI is Not the Future - It's <span className={classes.highlight}>Already in Our Classrooms</span>
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

        <Box className={classes.slidersContainer}>
          {/* Fullstack Tools Slider */}
          <Box className={classes.sliderSection}>
            <Typography className={classes.sectionLabel}>
              <CodeIcon className={classes.labelIcon} />
              Full Stack Development AI Tools
            </Typography>
            <Box className={classes.swiperContainer}>
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className={classes.swiperContainer}
              >
                {fullstackTools.map((tool, index) => (
                  <SwiperSlide key={index}>
                    <Card className={classes.toolCard}>
                      <Chip 
                        label={tool.pricing}
                        className={classes.pricingChip}
                      />
                      <CardContent className={classes.toolCardContent}>
                        <Typography className={classes.toolName}>
                          {tool.name}
                        </Typography>
                        <Typography className={classes.toolCategory}>
                          {tool.category}
                        </Typography>
                        <Typography className={classes.toolDescription}>
                          {tool.description}
                        </Typography>
                        <Typography className={classes.toolFeatures}>
                          {tool.features}
                        </Typography>
                      </CardContent>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>

          {/* Data Science Tools Slider */}
          <Box className={classes.sliderSection}>
            <Typography className={classes.sectionLabel}>
              <DataUsageIcon className={classes.labelIcon} />
              Data Science AI Tools
            </Typography>
            <Box className={classes.swiperContainer}>
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                loop={true}
                className={classes.swiperContainer}
              >
                {dataScienceTools.map((tool, index) => (
                  <SwiperSlide key={index}>
                    <Card className={classes.toolCard}>
                      <Chip 
                        label={tool.pricing}
                        className={classes.pricingChip}
                      />
                      <CardContent className={classes.toolCardContent}>
                        <Typography className={classes.toolName}>
                          {tool.name}
                        </Typography>
                        <Typography className={classes.toolCategory}>
                          {tool.category}
                        </Typography>
                        <Typography className={classes.toolDescription}>
                          {tool.description}
                        </Typography>
                        <Typography className={classes.toolFeatures}>
                          {tool.features}
                        </Typography>
                      </CardContent>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AIIntegrationSection;