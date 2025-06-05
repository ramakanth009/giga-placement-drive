// src/components/common/faq/Faq.jsx
import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles({
  faqContainer: {
    padding: '40px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f0f4ff 100%)',
    '@media (max-width: 1200px)': {
      padding: '35px 0',
    },
    '@media (max-width: 960px)': {
      padding: '30px 0',
    },
    '@media (max-width: 600px)': {
      padding: '25px 0',
    },
  },
  
  // Animated background elements
  backgroundElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 0,
  },
  floatingCircle: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.08) 0%, rgba(255, 198, 20, 0.08) 100%)',
    animation: '$float 8s ease-in-out infinite',
  },
  circle1: {
    width: '200px',
    height: '200px',
    top: '10%',
    left: '5%',
    animationDelay: '0s',
  },
  circle2: {
    width: '150px',
    height: '150px',
    top: '60%',
    right: '8%',
    animationDelay: '2s',
  },
  circle3: {
    width: '120px',
    height: '120px',
    bottom: '20%',
    left: '15%',
    animationDelay: '4s',
  },
  
  contentWrapper: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    width: '100%',
    '@media (max-width: 600px)': {
      padding: '0 16px',
    },
  },
  
  headerSection: {
    textAlign: 'center',
    marginBottom: '30px',
    position: 'relative',
    '@media (max-width: 600px)': {
      marginBottom: '20px',
    },
  },
  
  title: {
    fontSize: '3.5rem !important',
    fontWeight: '800 !important',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1a1b4a 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '20px !important',
    position: 'relative',
    lineHeight: '1.2 !important',
    letterSpacing: '-0.02em',
    '& span': {
      background: 'linear-gradient(135deg, #FFC614 0%, #ffb700 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    '@media (max-width: 1200px)': {
      fontSize: '3rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.5rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
      marginBottom: '15px !important',
    },
  },
  
  subtitle: {
    fontSize: '1.3rem !important',
    color: '#666',
    maxWidth: '800px',
    margin: '0 auto !important',
    lineHeight: '1.6 !important',
    fontWeight: '400',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
      maxWidth: '90%',
    },
  },
  
  searchContainer: {
    maxWidth: '500px',
    margin: '20px auto 0',
    position: 'relative',
    '@media (max-width: 600px)': {
      maxWidth: '100%',
      margin: '15px auto 0',
    },
  },
  
  searchBox: {
    width: '100%',
    padding: '15px 50px 15px 20px',
    borderRadius: '50px',
    border: '2px solid rgba(42, 43, 106, 0.1)',
    fontSize: '1rem',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 5px 20px rgba(42, 43, 106, 0.1)',
    transition: 'all 0.3s ease',
    '&:focus': {
      borderColor: '#2A2B6A',
      boxShadow: '0 5px 25px rgba(42, 43, 106, 0.2)',
      transform: 'translateY(-2px)',
    },
    '&::placeholder': {
      color: '#999',
    },
  },
  
  searchIcon: {
    position: 'absolute',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#2A2B6A',
    fontSize: '20px !important',
    pointerEvents: 'none',
  },
  
  accordionContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '10px',
    '@media (max-width: 1100px)': {
      gridTemplateColumns: '1fr',
      gap: '15px',
    },
    '@media (max-width: 600px)': {
      gap: '12px',
    },
  },
  
  accordion: {
    background: 'rgba(255, 255, 255, 0.7) !important',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px !important',
    border: '1px solid rgba(42, 43, 106, 0.08) !important',
    boxShadow: '0 8px 32px rgba(42, 43, 106, 0.08) !important',
    marginBottom: '5px !important',
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important',
    '&:before': {
      display: 'none',
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 40px rgba(42, 43, 106, 0.15) !important',
      '& $questionNumber': {
        background: 'linear-gradient(135deg, #FFC614 0%, #ffb700 100%)',
        transform: 'scale(1.1)',
      },
    },
    '&.Mui-expanded': {
      margin: '0 0 16px 0 !important',
      transform: 'translateY(-2px)',
      boxShadow: '0 15px 45px rgba(42, 43, 106, 0.2) !important',
      background: 'rgba(255, 255, 255, 0.95) !important',
      '& $questionNumber': {
        background: 'linear-gradient(135deg, #2A2B6A 0%, #1a1b4a 100%)',
        color: 'white',
        transform: 'scale(1.1)',
      },
      '& $expandIcon': {
        color: '#2A2B6A',
        transform: 'rotate(180deg) scale(1.1)',
      },
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 100%)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '&.Mui-expanded::after': {
      opacity: 1,
    },
    '@media (max-width: 600px)': {
      borderRadius: '16px !important',
      marginBottom: '8px !important',
    },
  },
  
  accordionSummary: {
    padding: '20px 25px !important',
    minHeight: '70px !important',
    alignItems: 'center',
    position: 'relative',
    '&.Mui-expanded': {
      minHeight: '70px !important',
      borderBottom: '1px solid rgba(42, 43, 106, 0.1)',
    },
    '@media (max-width: 600px)': {
      padding: '15px 20px !important',
      minHeight: '60px !important',
    },
  },
  
  summaryContent: {
    margin: '0 !important',
    display: 'flex !important',
    alignItems: 'center !important',
    width: '100%',
    '&.Mui-expanded': {
      margin: '0 !important',
    },
  },
  
  questionNumber: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.1) 0%, rgba(255, 198, 20, 0.1) 100%)',
    color: '#2A2B6A',
    fontWeight: 'bold !important',
    fontSize: '1rem !important',
    marginRight: '20px !important',
    flexShrink: 0,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid rgba(42, 43, 106, 0.1)',
    '@media (max-width: 600px)': {
      width: '35px',
      height: '35px',
      fontSize: '0.9rem !important',
      marginRight: '15px !important',
    },
  },
  
  question: {
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    flex: 1,
    lineHeight: '1.5 !important',
    transition: 'color 0.3s ease',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  
  expandIcon: {
    color: '#2A2B6A !important',
    fontSize: '24px !important',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important',
    marginLeft: '15px !important',
    flexShrink: 0,
    '@media (max-width: 600px)': {
      fontSize: '20px !important',
      marginLeft: '10px !important',
    },
  },
  
  accordionDetails: {
    padding: '0 25px 25px !important',
    backgroundColor: 'rgba(248, 249, 250, 0.5)',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '30px',
      right: '30px',
      height: '1px',
      background: 'linear-gradient(90deg, transparent 0%, rgba(42, 43, 106, 0.1) 50%, transparent 100%)',
    },
    '@media (max-width: 600px)': {
      padding: '0 20px 20px !important',
      '&::before': {
        left: '20px',
        right: '20px',
      },
    },
  },
  
  answer: {
    color: '#4A4A4A !important',
    fontSize: '1rem !important',
    lineHeight: '1.7 !important',
    whiteSpace: 'pre-line !important',
    fontWeight: '400',
    letterSpacing: '0.01em',
    animation: '$fadeInUp 0.5s ease-out',
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
      lineHeight: '1.6 !important',
    },
  },
  
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0) rotate(0deg)',
      opacity: 0.6,
    },
    '50%': {
      transform: 'translateY(-20px) rotate(180deg)',
      opacity: 0.8,
    },
  },
  
  '@keyframes pulse': {
    '0%, 100%': {
      transform: 'scale(1)',
      boxShadow: '0 10px 30px rgba(42, 43, 106, 0.3)',
    },
    '50%': {
      transform: 'scale(1.05)',
      boxShadow: '0 15px 40px rgba(42, 43, 106, 0.4)',
    },
  },
  
  '@keyframes fadeInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
});

const Faq = ({ faqData, title, subtitle }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filter FAQs based on search term
  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm) ||
    faq.answer.toLowerCase().includes(searchTerm)
  );

  return (
    <Box className={classes.faqContainer}>
      {/* Animated background elements */}
      <Box className={classes.backgroundElements}>
        <Box className={`${classes.floatingCircle} ${classes.circle1}`} />
        <Box className={`${classes.floatingCircle} ${classes.circle2}`} />
        <Box className={`${classes.floatingCircle} ${classes.circle3}`} />
      </Box>

      <Box className={classes.contentWrapper}>
        <Box className={classes.headerSection}>            
          <Typography variant="h2" className={classes.title}>
            {typeof title === 'object' ? title : <>Frequently Asked <span>Questions</span></>}
          </Typography>
          
          {subtitle && (
            <Typography variant="body1" className={classes.subtitle}>
              {subtitle}
            </Typography>
          )}
          
          <Box className={classes.searchContainer}>
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              className={classes.searchBox}
              onChange={handleSearch}
              value={searchTerm}
            />
            <SearchIcon className={classes.searchIcon} />
          </Box>
        </Box>

        <Box className={classes.accordionContainer}>
          {filteredFaqs.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
              className={classes.accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                className={classes.accordionSummary}
                classes={{
                  content: classes.summaryContent,
                }}
                aria-controls={`${faq.id}-content`}
                id={`${faq.id}-header`}
              >
                <Box className={classes.questionNumber}>
                  {faq.number}
                </Box>
                <Typography className={classes.question}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              
              <AccordionDetails className={classes.accordionDetails}>
                <Typography className={classes.answer}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {searchTerm && filteredFaqs.length === 0 && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h6" sx={{ color: '#666', mb: 1 }}>
              No questions found
            </Typography>
            <Typography variant="body2" sx={{ color: '#999' }}>
              Try adjusting your search terms or browse all questions above
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Faq;