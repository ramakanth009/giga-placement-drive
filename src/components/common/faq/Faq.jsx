// src/components/common/faq/Faq.jsx
import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '0 20px',
    width: '100%',
    '@media (max-width: 600px)': {
      padding: '0 16px',
    },
  },
  
  headerSection: {
    textAlign: 'center',
    marginBottom: '60px',
    position: 'relative',
    '@media (max-width: 600px)': {
      marginBottom: '40px',
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
    margin: '0 auto 40px !important',
    lineHeight: '1.6 !important',
    fontWeight: '400',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
      maxWidth: '90%',
      margin: '0 auto 30px !important',
    },
  },
  
  searchContainer: {
    maxWidth: '500px',
    margin: '0 auto',
    position: 'relative',
    '@media (max-width: 600px)': {
      maxWidth: '100%',
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
  
  carouselContainer: {
    position: 'relative',
    overflow: 'hidden',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    minHeight: '340px', // Ensures enough height for vertical centering
    width: '1110px', // 3 * 350px card + 2 * 30px gap
    maxWidth: '100%',
    '@media (max-width: 1200px)': {
      width: '990px', // 3 * 320px + 2 * 15px gap
    },
    '@media (max-width: 960px)': {
      width: '870px', // 3 * 280px + 2 * 15px gap
    },
    '@media (max-width: 900px)': {
      width: '100%',
      minWidth: 0,
    },
    '@media (max-width: 600px)': {
      width: '100%',
      minWidth: 0,
      minHeight: '260px',
    },
  },
  
  carouselWrapper: {
    display: 'flex',
    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    gap: '30px',
    padding: '20px 0',
    width: '100%',
    // Ensures the wrapper grows to fill available space between buttons
    flex: 1,
    '@media (max-width: 960px)': {
      gap: '20px',
    },
    '@media (max-width: 600px)': {
      gap: '15px',
      padding: '20px 16px',
    },
  },
  
  faqCard: {
    minWidth: '350px',
    maxWidth: '350px',
    background: 'rgba(255, 255, 255, 0.9) !important',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px !important',
    border: '1px solid rgba(42, 43, 106, 0.08) !important',
    boxShadow: '0 8px 32px rgba(42, 43, 106, 0.1) !important',
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important',
    minHeight: '280px',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 16px 48px rgba(42, 43, 106, 0.2) !important',
      '& $questionNumber': {
        background: 'linear-gradient(135deg, #FFC614 0%, #ffb700 100%)',
        transform: 'scale(1.1)',
      },
      '& $readMore': {
        color: '#2A2B6A',
        transform: 'translateX(5px)',
      },
    },
    '&.expanded': {
      minHeight: 'auto',
    },
    '@media (max-width: 960px)': {
      minWidth: '320px',
      maxWidth: '320px',
      minHeight: '260px',
    },
    '@media (max-width: 600px)': {
      minWidth: '280px',
      maxWidth: '280px',
      minHeight: '240px',
    },
  },
  
  cardContent: {
    padding: '25px !important',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    '@media (max-width: 600px)': {
      padding: '20px !important',
    },
  },
  
  questionNumber: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.1) 0%, rgba(255, 198, 20, 0.1) 100%)',
    color: '#2A2B6A',
    fontWeight: 'bold !important',
    fontSize: '1.2rem !important',
    marginBottom: '20px !important',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid rgba(42, 43, 106, 0.1)',
    '@media (max-width: 600px)': {
      width: '40px',
      height: '40px',
      fontSize: '1rem !important',
      marginBottom: '15px !important',
    },
  },
  
  question: {
    fontSize: '1.25rem !important',
    fontWeight: '700 !important',
    color: '#2A2B6A !important',
    lineHeight: '1.4 !important',
    marginBottom: '15px !important',
    flex: 0,
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
      marginBottom: '12px !important',
    },
  },
  
  answer: {
    color: '#666 !important',
    fontSize: '0.95rem !important',
    lineHeight: '1.6 !important',
    marginBottom: 'auto !important',
    flex: 1,
    overflow: 'hidden',
    '&.truncated': {
      display: '-webkit-box',
      WebkitLineClamp: 4,
      WebkitBoxOrient: 'vertical',
    },
    '&.expanded': {
      display: 'block',
      WebkitLineClamp: 'none',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      '&.truncated': {
        WebkitLineClamp: 3,
      },
    },
  },
  
  readMore: {
    color: '#666 !important',
    fontSize: '0.9rem !important',
    fontWeight: '600 !important',
    textDecoration: 'none',
    marginTop: '15px !important',
    transition: 'all 0.3s ease',
    alignSelf: 'flex-start',
    '&:hover': {
      textDecoration: 'none',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
      marginTop: '12px !important',
    },
  },
  
  navigationButton: {
    position: 'relative',
    top: 'unset',
    transform: 'none',
    alignSelf: 'center',
    background: 'linear-gradient(135deg, #FFC614 0%, #ffb700 100%) !important',
    color: '#2A2B6A !important',
    // Remove transform and top/alignSelf since buttons are outside now
    '&:hover': {
      background: 'linear-gradient(135deg, #FFD84A 0%, #FFC614 100%) !important',
      color: '#1a1b4a !important',
    },
  },
  
  prevButton: {
    marginRight: '20px',
    left: 'unset',
    '@media (max-width: 960px)': {
      marginRight: '10px',
    },
    '@media (max-width: 600px)': {
      marginRight: '5px',
    },
  },
  
  nextButton: {
    marginLeft: '20px',
    right: 'unset',
    '@media (max-width: 960px)': {
      marginLeft: '10px',
    },
    '@media (max-width: 600px)': {
      marginLeft: '5px',
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentIndex(0);
    setExpandedCardId(null); // Reset expanded card when searching
  };

  const handleReadMore = (faqId) => {
    setExpandedCardId(prevId => prevId === faqId ? null : faqId);
  };

  // Filter FAQs based on search term
  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm) ||
    faq.answer.toLowerCase().includes(searchTerm)
  );

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, filteredFaqs.length - 3);
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const translateX = -currentIndex * (350 + 30); // card width + gap

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
            {typeof title === 'object' ? title : <>FAQs</>}
          </Typography>
          
          <Typography variant="body1" className={classes.subtitle}>
            {subtitle || 'Commonly asked questions about our Virtual Placement Drive Program'}
          </Typography>
          
          <Box className={classes.searchContainer}>
            <input
              type="text"
              placeholder="Search for questions..."
              className={classes.searchBox}
              onChange={handleSearch}
              value={searchTerm}
            />
            <SearchIcon className={classes.searchIcon} />
          </Box>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center">
          <IconButton
            className={`${classes.navigationButton} ${classes.prevButton}`}
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Box className={classes.carouselContainer}>
            <Box 
              className={classes.carouselWrapper}
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {filteredFaqs.map((faq) => {
                const isExpanded = expandedCardId === faq.id;
                return (
                  <Card 
                    key={faq.id} 
                    className={`${classes.faqCard} ${isExpanded ? 'expanded' : ''}`}
                  >
                    <CardContent className={classes.cardContent}>
                      <Box className={classes.questionNumber}>
                        {faq.number}
                      </Box>
                      <Typography className={classes.question}>
                        {faq.question}
                      </Typography>
                      <Typography 
                        className={`${classes.answer} ${isExpanded ? 'expanded' : 'truncated'}`}
                      >
                        {faq.answer}
                      </Typography>
                      <Typography 
                        className={classes.readMore}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReadMore(faq.id);
                        }}
                      >
                        {isExpanded ? 'Read Less <' : 'Read More >'}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Box>
          <IconButton
            className={`${classes.navigationButton} ${classes.nextButton}`}
            onClick={handleNext}
            disabled={currentIndex >= Math.max(0, filteredFaqs.length - 3)}
          >
            <ArrowForwardIosIcon />
          </IconButton>
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