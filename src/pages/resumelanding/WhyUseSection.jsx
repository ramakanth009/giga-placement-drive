// src/components/landing/WhyUseSection.jsx
import React, { useState } from 'react';
import { Box, Typography, Container, Card, CardContent, Chip, IconButton } from '@mui/material';
import { AutoAwesome, Code, Visibility, ZoomIn } from '@mui/icons-material';
import makeStylesWithTheme from '../../styles/makeStylesAdapter';

const useStyles = makeStylesWithTheme((theme) => ({
  featuresSection: {
    background: '#ffffff',
    padding: '2rem 1rem',
    position: 'relative',
    overflow: 'hidden',
    // minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      background: `url("data:image/svg+xml,%3Csvg width='800' height='600' viewBox='0 0 800 600' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L100 80L200 40L300 120L400 60L500 140L600 100L700 180L800 120' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M0 200L100 120L200 180L300 100L400 160L500 80L600 140L700 60L800 100' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M0 400L100 320L200 380L300 300L400 360L500 280L600 340L700 260L800 300' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M0 600L100 520L200 580L300 500L400 560L500 480L600 540L700 460L800 500' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M0 0L0 200L0 400L0 600' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M100 80L100 120L100 320L100 520' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M200 40L200 180L200 380L200 580' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M300 120L300 100L300 300L300 500' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M400 60L400 160L400 360L400 560' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M500 140L500 80L500 280L500 480' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M600 100L600 140L600 340L600 540' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M700 180L700 60L700 260L700 460' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M800 120L800 100L800 300L800 500' stroke='%23F3F3F3' stroke-width='1'/%3E%3C/svg%3E") repeat`,
      backgroundSize: 'cover',
      pointerEvents: 'none',
    },
    '@media (max-width: 1200px)': {
      padding: '2.5rem 1.2rem',
    },
    '@media (max-width: 960px)': {
      padding: '2rem 1rem',
      minHeight: 'auto',
    },
    '@media (max-width: 600px)': {
      padding: '1.8rem 0.8rem',
    },
    '@media (max-width: 480px)': {
      padding: '1.5rem 0.5rem',
    },
    '@media (max-width: 375px)': {
      padding: '1.2rem 0.3rem',
    },
  },
  sectionTitle: {
    fontSize: '2.8rem !important',
    fontWeight: '800 !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '1.5rem !important',
    background: '#fff',
    borderRadius: '18px',
    display: 'inline-block',
    padding: '16px 32px',
    position: 'relative',
    zIndex: 2,
    // boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    // border: '1px solid #f0f0f0',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2rem !important',
      marginBottom: '2rem !important',
      padding: '14px 28px',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
      marginBottom: '1.8rem !important',
      padding: '12px 24px',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.6rem !important',
      marginBottom: '1.5rem !important',
      padding: '10px 20px',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.4rem !important',
      marginBottom: '1.2rem !important',
      padding: '8px 16px',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.2rem !important',
      marginBottom: '1rem !important',
      padding: '6px 12px',
    },
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    '@media (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1.8rem',
    },
    '@media (max-width: 960px)': {
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
    },
    '@media (max-width: 600px)': {
      gap: '1.2rem',
    },
    '@media (max-width: 480px)': {
      gap: '1rem',
    },
    '@media (max-width: 375px)': {
      gap: '0.8rem',
    },
  },
  featureCard: {
    background: '#ffffff !important',
    borderRadius: '20px !important',
    padding: '0 !important',
    position: 'relative !important',
    overflow: 'hidden !important',
    cursor: 'pointer !important',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important',
    border: '2px solid #f0f2ff !important',
    boxShadow: '0 8px 30px rgba(42, 43, 106, 0.08) !important',
    height: '420px !important',
    display: 'flex !important',
    flexDirection: 'column !important',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #FFC614, #2A2B6A)',
      backgroundSize: '200% 100%',
      animation: '$gradientShift 2s ease infinite',
    },
    '&:hover': {
      transform: 'translateY(-8px) scale(1.02) !important',
      boxShadow: '0 20px 50px rgba(42, 43, 106, 0.15) !important',
      border: '2px solid #FFC614 !important',
      '& $cardImage': {
        transform: 'scale(1.05) !important',
      },
      '& $iconContainer': {
        transform: 'rotate(360deg) scale(1.1) !important',
        background: 'linear-gradient(135deg, #FFC614, #2A2B6A) !important',
      },
    },
    '&.expanded': {
      height: 'auto !important',
      zIndex: 10,
      boxShadow: '0 24px 60px rgba(42, 43, 106, 0.22) !important',
    },
    '@media (max-width: 1200px)': {
      height: '380px !important',
      borderRadius: '18px !important',
    },
    '@media (max-width: 960px)': {
      height: '350px !important',
      borderRadius: '15px !important',
    },
    '@media (max-width: 600px)': {
      height: '320px !important',
      borderRadius: '12px !important',
    },
    '@media (max-width: 480px)': {
      height: '290px !important',
      borderRadius: '10px !important',
    },
    '@media (max-width: 375px)': {
      height: '270px !important',
      borderRadius: '8px !important',
    },
  },
  cardImageContainer: {
    height: '170px',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '18px 18px 0 0',
    flexShrink: 0,
    '@media (max-width: 1200px)': {
      height: '150px',
    },
    '@media (max-width: 960px)': {
      height: '140px',
    },
    '@media (max-width: 600px)': {
      height: '120px',
    },
    '@media (max-width: 480px)': {
      height: '110px',
    },
    '@media (max-width: 375px)': {
      height: '100px',
    },
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.4s ease',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(42, 43, 106, 0.8), rgba(255, 198, 20, 0.6))',
    opacity: 0,
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2A2B6A',
    fontSize: '1.2rem',
    opacity: 0,
    transform: 'scale(0.5)',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
    '@media (max-width: 600px)': {
      width: '35px',
      height: '35px',
      fontSize: '1rem',
    },
    '@media (max-width: 480px)': {
      width: '30px',
      height: '30px',
      fontSize: '0.9rem',
    },
    '@media (max-width: 375px)': {
      width: '25px',
      height: '25px',
      fontSize: '0.8rem',
    },
  },
  cardContent: {
    padding: '1.5rem !important',
    display: 'flex !important',
    flexDirection: 'column !important',
    flex: 1,
    minHeight: 0,
    '@media (max-width: 1200px)': {
      padding: '1.3rem !important',
    },
    '@media (max-width: 960px)': {
      padding: '1.2rem !important',
    },
    '@media (max-width: 600px)': {
      padding: '1rem !important',
    },
    '@media (max-width: 480px)': {
      padding: '0.8rem !important',
    },
    '@media (max-width: 375px)': {
      padding: '0.6rem !important',
    },
  },
  numberBadge: {
    position: 'absolute !important',
    top: '-12px !important',
    right: '15px !important',
    width: '30px !important',
    height: '30px !important',
    borderRadius: '50% !important',
    background: 'linear-gradient(135deg, #FFC614, #2A2B6A) !important',
    color: '#fff !important',
    fontWeight: '800 !important',
    fontSize: '0.9rem !important',
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
    boxShadow: '0 6px 20px rgba(255, 198, 20, 0.3) !important',
    zIndex: 2,
    '@media (max-width: 600px)': {
      width: '25px !important',
      height: '25px !important',
      fontSize: '0.8rem !important',
      top: '-10px !important',
      right: '12px !important',
    },
    '@media (max-width: 480px)': {
      width: '22px !important',
      height: '22px !important',
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 375px)': {
      width: '20px !important',
      height: '20px !important',
      fontSize: '0.65rem !important',
    },
  },
  iconContainer: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #2A2B6A, #4a4d9e)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '1.2rem',
    marginBottom: '0.8rem',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    boxShadow: '0 8px 25px rgba(42, 43, 106, 0.2)',
    flexShrink: 0,
    '@media (max-width: 1200px)': {
      width: '35px',
      height: '35px',
      fontSize: '1.1rem',
    },
    '@media (max-width: 960px)': {
      width: '32px',
      height: '32px',
      fontSize: '1rem',
    },
    '@media (max-width: 600px)': {
      width: '28px',
      height: '28px',
      fontSize: '0.9rem',
      marginBottom: '0.6rem',
    },
    '@media (max-width: 480px)': {
      width: '25px',
      height: '25px',
      fontSize: '0.8rem',
      marginBottom: '0.5rem',
    },
    '@media (max-width: 375px)': {
      width: '22px',
      height: '22px',
      fontSize: '0.7rem',
      marginBottom: '0.4rem',
    },
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.8rem',
    marginBottom: '0.8rem',
    '@media (max-width: 600px)': {
      gap: '0.6rem',
      marginBottom: '0.6rem',
    },
    '@media (max-width: 480px)': {
      gap: '0.5rem',
      marginBottom: '0.5rem',
    },
    '@media (max-width: 375px)': {
      gap: '0.4rem',
      marginBottom: '0.4rem',
    },
  },
  cardTitle: {
    fontSize: '1.1rem !important',
    fontWeight: '700 !important',
    color: '#2A2B6A !important',
    lineHeight: '1.3 !important',
    margin: '0 !important',
    flex: 1,
    '@media (max-width: 1200px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.8rem !important',
    },
  },
  contentArea: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: 0,
  },
  cardDescription: {
    fontSize: '0.85rem !important',
    color: '#666 !important',
    lineHeight: '1.5 !important',
    marginBottom: '0.8rem !important',
    display: '-webkit-box !important',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    transition: 'all 0.3s',
    '&.expanded': {
      display: 'block !important',
      WebkitLineClamp: 'unset',
      overflow: 'visible',
      textOverflow: 'unset',
      whiteSpace: 'normal',
    },
    '@media (max-width: 1200px)': {
      fontSize: '0.8rem !important',
      marginBottom: '0.7rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.75rem !important',
      marginBottom: '0.6rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.7rem !important',
      marginBottom: '0.5rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.65rem !important',
      marginBottom: '0.4rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.6rem !important',
      marginBottom: '0.3rem !important',
    },
  },
  expandButton: {
    color: '#2A2B6A',
    fontWeight: 600,
    fontSize: '0.75rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    marginBottom: '0.8rem',
    alignSelf: 'flex-start',
    flexShrink: 0,
    '&:hover': {
      textDecoration: 'underline',
      color: '#FFC614',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.7rem',
      marginBottom: '0.6rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.65rem',
      marginBottom: '0.5rem',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.6rem',
      marginBottom: '0.4rem',
    },
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
    paddingTop: '0.2rem',
    flexShrink: 0,
    '@media (max-width: 600px)': {
      gap: '0.3rem',
    },
    '@media (max-width: 480px)': {
      gap: '0.25rem',
    },
    '@media (max-width: 375px)': {
      gap: '0.2rem',
    },
  },
  tag: {
    background: 'rgba(42, 43, 106, 0.08) !important',
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
    borderRadius: '10px !important',
    fontSize: '0.65rem !important',
    height: '20px !important',
    transition: 'all 0.2s ease !important',
    '&:hover': {
      background: 'linear-gradient(45deg, #2A2B6A, #FFC614) !important',
      color: '#fff !important',
      transform: 'translateY(-1px) !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '0.6rem !important',
      height: '18px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.55rem !important',
      height: '16px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.5rem !important',
      height: '14px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.45rem !important',
      height: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.4rem !important',
      height: '10px !important',
    },
  },
  floatingElement: {
    position: 'absolute',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'rgba(255, 198, 20, 0.05)',
    animation: '$float 8s ease-in-out infinite',
    '&:nth-child(1)': {
      top: '15%',
      left: '5%',
      animationDelay: '0s',
    },
    '&:nth-child(2)': {
      top: '70%',
      right: '8%',
      animationDelay: '3s',
    },
    '&:nth-child(3)': {
      bottom: '20%',
      left: '15%',
      animationDelay: '6s',
    },
    '@media (max-width: 600px)': {
      width: '40px',
      height: '40px',
    },
    '@media (max-width: 480px)': {
      width: '30px',
      height: '30px',
    },
    '@media (max-width: 375px)': {
      width: '25px',
      height: '25px',
    },
  },
  '@keyframes gradientShift': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: 0.3 },
    '50%': { transform: 'translateY(-20px) rotate(180deg)', opacity: 0.6 },
  },
}));

const WhyUseSection = () => {
  const classes = useStyles();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const features = [
    {
      title: "Gen AI Skill Suggestions With Real-World Use Cases",
      description: "Our resume builder analyzes your job role and recommends relevant Gen AI tools like ChatGPT, Midjourney, Figma AI, Bard, and more. Based on your profile, it automatically generates context on how these tools are commonly used—like automating workflows, enhancing design, or improving productivity so you can showcase practical, real-world impact without writing it from scratch.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // AI/Chatbot interface
      icon: <AutoAwesome />,
      tags: ["AI Tools", "Real-world", "Automation", "Productivity"]
    },
    {
      title: "Build Projects Straight From Your Resume", 
      description: "Gigaversity's resume builder recommends job-specific projects aligned with your target role such as full stack development, data science, UI/UX, or product management. You get direct access to GitHub repositories containing real-time projects with step-by-step instructions and code. This allows you to build relevant projects and showcase practical skills directly from your resume, enhancing your credibility with employers.",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // GitHub/Code repository
      icon: <Code />,
      tags: ["GitHub", "Projects", "Skills", "Portfolio"]
    },
    {
      title: "Smart Resume Content That Writes Itself",
      description: "Easily create a standout resume with AI-powered suggestions tailored to your job role. Get pre-written summaries, impactful bullet points, internship descriptions, and relevant keywords—all optimized for ATS systems. Especially helpful for freshers, the content is structured to highlight your strengths and match recruiter expectations, ensuring better visibility and higher chances of selection.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Resume/Document editing
      icon: <Visibility />,
      tags: ["ATS Ready", "Keywords", "AI Content", "Job Match"]
    }
  ];

  return (
    <Box className={classes.featuresSection}>
      <Box className={classes.floatingElement} />
      <Box className={classes.floatingElement} />
      <Box className={classes.floatingElement} />
      
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" mb={4}>
          <Typography variant="h2" className={classes.sectionTitle}>
            Why Use <span>Giga Resume Builder?</span>
          </Typography>
        </Box>
        <Box className={classes.cardsContainer}>
          {features.map((feature, index) => {
            const isExpanded = expandedCard === index;
            return (
              <Card
                key={index}
                className={`${classes.featureCard}${isExpanded ? ' expanded' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
                style={{ cursor: 'pointer' }}
              >
                <Box className={classes.cardImageContainer}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={classes.cardImage}
                  />
                  <Box className={classes.imageOverlay}>
                    <IconButton className={classes.playButton}>
                      <ZoomIn />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent className={classes.cardContent}>
                  <Box className={classes.titleContainer}>
                    <Box className={classes.iconContainer}>
                      {feature.icon}
                    </Box>
                    <Typography variant='h3' className={classes.cardTitle}>
                      {feature.title}
                    </Typography>
                  </Box>
                  
                  <Box className={classes.contentArea}>
                    <Typography
                      className={`${classes.cardDescription}${isExpanded ? ' expanded' : ''}`}
                    >
                      {feature.description}
                    </Typography>
                    
                    <button
                      className={classes.expandButton}
                      tabIndex={-1}
                      type="button"
                      onClick={e => {
                        e.stopPropagation();
                        setExpandedCard(isExpanded ? null : index);
                      }}
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                    
                    <Box className={classes.tagContainer}>
                      {feature.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          className={classes.tag}
                          size="small"
                        />
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyUseSection;