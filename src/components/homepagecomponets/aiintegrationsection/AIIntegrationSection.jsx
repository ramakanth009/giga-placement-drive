import React, { useState } from 'react';
import { Box, Typography, Container, Card, CardContent, Chip, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import BuildIcon from '@mui/icons-material/Build';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

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
    marginBottom: '40px',
    '@media (max-width: 600px)': {
      marginBottom: '30px',
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
    color: '#4F46E5 !important',
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
    color: '#4F46E5 !important',
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
  toolsSection: {
    marginTop: '60px',
    '@media (max-width: 600px)': {
      marginTop: '40px',
    },
  },
  categoryFilters: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '40px',
    flexWrap: 'wrap',
    '@media (max-width: 600px)': {
      gap: '10px',
      marginBottom: '30px',
    },
  },
  filterButton: {
    padding: '12px 24px !important',
    borderRadius: '30px !important',
    textTransform: 'none !important',
    fontSize: '1rem !important',
    fontWeight: '600 !important',
    transition: 'all 0.3s ease !important',
    display: 'flex !important',
    alignItems: 'center !important',
    gap: '8px !important',
    '@media (max-width: 600px)': {
      padding: '10px 18px !important',
      fontSize: '0.9rem !important',
    },
  },
  activeFilter: {
    backgroundColor: '#4F46E5 !important',
    color: 'white !important',
    '&:hover': {
      backgroundColor: '#3730a3 !important',
    },
  },
  inactiveFilter: {
    backgroundColor: 'white !important',
    color: '#4F46E5 !important',
    border: '2px solid #4F46E5 !important',
    '&:hover': {
      backgroundColor: 'rgba(79, 70, 229, 0.1) !important',
    },
  },
  swiperContainer: {
    padding: '20px 0 40px 0',
    '& .swiper': {
      overflow: 'visible',
      paddingBottom: '20px',
    },
    '& .swiper-slide': {
      height: 'auto',
      display: 'flex',
    },
    '& .swiper-pagination': {
      bottom: '0px !important',
      '& .swiper-pagination-bullet': {
        backgroundColor: 'rgba(79, 70, 229, 0.3) !important',
        opacity: '1 !important',
        '&.swiper-pagination-bullet-active': {
          backgroundColor: '#4F46E5 !important',
        },
      },
    },
    '& .swiper-button-next, & .swiper-button-prev': {
      color: '#4F46E5 !important',
      backgroundColor: 'rgba(255, 255, 255, 0.9) !important',
      borderRadius: '50% !important',
      width: '44px !important',
      height: '44px !important',
      marginTop: '-22px !important',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15) !important',
      '&:after': {
        fontSize: '18px !important',
        fontWeight: 'bold !important',
      },
      '&:hover': {
        backgroundColor: 'white !important',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2) !important',
      },
    },
    '& .swiper-button-prev': {
      left: '-22px !important',
    },
    '& .swiper-button-next': {
      right: '-22px !important',
    },
    '@media (max-width: 960px)': {
      '& .swiper-button-next, & .swiper-button-prev': {
        display: 'none !important',
      },
    },
  },
  toolCard: {
    width: '100%',
    height: '250px',
    borderRadius: '16px !important',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8faff 100%)',
    border: '1px solid rgba(79, 70, 229, 0.1)',
    boxShadow: '0 10px 25px rgba(79, 70, 229, 0.08) !important',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 40px rgba(79, 70, 229, 0.15) !important',
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
    '@media (max-width: 600px)': {
      height: '300px',
    },
  },
  toolCardContent: {
    padding: '25px !important',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left',
    gap: '8px',
    '@media (max-width: 600px)': {
      padding: '20px !important',
    },
  },
  toolName: {
    fontSize: '1.3rem !important',
    fontWeight: '700 !important',
    color: '#2D3748 !important',
    marginBottom: '4px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
    },
  },
  toolCategory: {
    fontSize: '0.75rem !important',
    color: '#4F46E5 !important',
    marginBottom: '8px !important',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    fontWeight: '600 !important',
    background: 'rgba(79, 70, 229, 0.08)',
    padding: '4px 12px',
    borderRadius: '12px',
    alignSelf: 'flex-start',
  },
  toolDescription: {
    fontSize: '0.95rem !important',
    color: '#4A5568 !important',
    lineHeight: '1.5 !important',
    marginBottom: '8px !important',
    flex: 1,
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  toolFeatures: {
    fontSize: '0.85rem !important',
    color: '#718096 !important',
    fontStyle: 'normal',
    lineHeight: '1.4 !important',
    background: 'rgba(79, 70, 229, 0.04)',
    padding: '8px 12px',
    borderRadius: '8px',
    width: '100%',
    marginTop: 'auto',
  },
  pricingChip: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: 'rgba(79, 70, 229, 0.1) !important',
    color: '#4F46E5 !important',
    fontSize: '0.75rem !important',
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
});

const AIIntegrationSection = () => {
  const classes = useStyles();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allTools = [
    // Full Stack Tools
    {
      name: 'GitHub Copilot',
      category: 'fullstack',
      subCategory: 'Code Generation',
      description: 'Auto-complete code for frontend and backend development',
      features: 'Context-aware code suggestions for JS, Python, SQL',
      pricing: 'Paid'
    },
    {
      name: 'Vercel v0',
      category: 'fullstack',
      subCategory: 'Frontend UI Generation', 
      description: 'Generate React/UIs from text prompts',
      features: 'AI-driven UI scaffolding, component customization',
      pricing: 'Freemium'
    },
    {
      name: 'AWS CodeWhisperer',
      category: 'fullstack',
      subCategory: 'Code Generation',
      description: 'Full-stack code suggestions in your IDE',
      features: 'IDE-integrated completions (JS, Python, Java)',
      pricing: 'Free'
    },
    {
      name: 'DhiWise',
      category: 'fullstack',
      subCategory: 'Low-Code Dev',
      description: 'Convert Figma designs to React/Flutter code',
      features: 'AI-powered design-to-code conversion',
      pricing: 'Freemium'
    },
    {
      name: 'Tabnine',
      category: 'fullstack',
      subCategory: 'Code Completion',
      description: 'Predictive code completion for all languages',
      features: 'Local/cloud-based AI models for faster coding',
      pricing: 'Freemium'
    },
    {
      name: 'Postman API GPT',
      category: 'fullstack',
      subCategory: 'API Development',
      description: 'Generate API documentation and test cases',
      features: 'AI-driven API testing, mock server setup',
      pricing: 'Freemium'
    },
    {
      name: 'Figma AI',
      category: 'fullstack',
      subCategory: 'Design-to-Code',
      description: 'Generate CSS, React code from designs',
      features: 'Auto-extract design tokens, responsive code',
      pricing: 'Freemium'
    },
    {
      name: 'GPT Engineer',
      category: 'fullstack',
      subCategory: 'Code Generation',
      description: 'Build apps from natural language prompts',
      features: 'Generates full-stack code (Next.js, FastAPI, etc.)',
      pricing: 'Free'
    },
    {
      name: 'Codium',
      category: 'fullstack',
      subCategory: 'Code Quality',
      description: 'Auto-write unit tests, detect bugs',
      features: 'AI reviews PRs, suggests fixes',
      pricing: 'Freemium'
    },
    // Data Science Tools
    {
      name: 'Google Colab',
      category: 'datascience',
      subCategory: 'Cloud Notebooks',
      description: 'Prototyping with free GPU/TPU access',
      features: 'Free GPU, integrates with Gemini',
      pricing: 'Free'
    },
    {
      name: 'Hugging Face',
      category: 'datascience',
      subCategory: 'NLP/LLMs',
      description: 'Model hosting and fine-tuning platform',
      features: 'Massive model library (Transformers, Diffusers)',
      pricing: 'Freemium'
    },
    {
      name: 'LangChain',
      category: 'datascience',
      subCategory: 'LLM App Development',
      description: 'Build complex AI workflows and RAG systems',
      features: 'Modular design, tool integrations',
      pricing: 'Free'
    },
    {
      name: 'Streamlit',
      category: 'datascience',
      subCategory: 'Visualization/Apps',
      description: 'Turn scripts into interactive web dashboards',
      features: 'Turn scripts into web apps instantly',
      pricing: 'Free'
    },
    {
      name: 'MLflow',
      category: 'datascience',
      subCategory: 'MLOps',
      description: 'Complete model lifecycle management',
      features: 'Track experiments, deploy models',
      pricing: 'Free'
    },
    {
      name: 'Groq',
      category: 'datascience',
      subCategory: 'LLM Inference',
      description: 'High-speed model API responses',
      features: 'Blazing-fast response times',
      pricing: 'Freemium'
    },
    {
      name: 'Ollama',
      category: 'datascience',
      subCategory: 'Local LLMs',
      description: 'Running models offline (Llama, Mistral)',
      features: 'Privacy-focused, lightweight',
      pricing: 'Free'
    },
    {
      name: 'Perplexity AI',
      category: 'datascience',
      subCategory: 'AI Search',
      description: 'Research with quick, cited answers',
      features: 'Cited sources, fast results',
      pricing: 'Freemium'
    },
    {
      name: 'DuckDB',
      category: 'datascience',
      subCategory: 'Analytics',
      description: 'SQL on local files for data analysis',
      features: 'Faster than pandas for large datasets',
      pricing: 'Free'
    }
  ];

  const filteredTools = selectedCategory === 'all' 
    ? allTools 
    : allTools.filter(tool => tool.category === selectedCategory);

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

  const categories = [
    { id: 'all', label: 'All AI Tools', icon: <AllInclusiveIcon /> },
    { id: 'fullstack', label: 'Full Stack Development', icon: <CodeIcon /> },
    { id: 'datascience', label: 'Data Science', icon: <DataUsageIcon /> }
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

        <Box className={classes.toolsSection}>
          {/* <Typography variant="h3" className={classes.integrationsTitle}>
            AI Tools We Use in Our Curriculum
          </Typography> */}

          <Box className={classes.categoryFilters}>
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`${classes.filterButton} ${
                  selectedCategory === category.id ? classes.activeFilter : classes.inactiveFilter
                }`}
                startIcon={category.icon}
              >
                {category.label}
              </Button>
            ))}
          </Box>

          <Box className={classes.swiperContainer}>
            <Swiper
              slidesPerView={2}
              slidesPerGroup={2}
              spaceBetween={30}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Navigation, Pagination, Autoplay]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1.5,
                  slidesPerGroup: 1,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 3,
                  slidesPerGroup: 2,
                  spaceBetween: 30,
                },
              }}
              key={selectedCategory} // Force re-render when category changes
            >
              {filteredTools.map((tool, index) => (
                <SwiperSlide key={`${selectedCategory}-${index}`}>
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
                        {tool.subCategory}
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
      </Container>
    </Box>
  );
};

export default AIIntegrationSection;