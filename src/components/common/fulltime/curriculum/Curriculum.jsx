// Enhanced Curriculum Component with brand colors and improved sizing
import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Container, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CurriculumCard from './CurriculumCard';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)',
    '@media (max-width: 1200px)': {
      padding: '50px 0',
    },
    '@media (max-width: 960px)': {
      padding: '40px 0',
    },
    '@media (max-width: 600px)': {
      padding: '35px 0',
    },
    '@media (max-width: 480px)': {
      padding: '30px 0',
    },
  },
  bgDecoration: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(42, 43, 106, 0.05) 0%, rgba(42, 43, 106, 0.01) 70%)',
    zIndex: 1,
  },
  bgDecorationTop: {
    width: '500px',
    height: '500px',
    top: '-150px',
    right: '-75px',
    '@media (max-width: 960px)': {
      width: '350px',
      height: '350px',
      top: '-125px',
      right: '-60px',
    },
    '@media (max-width: 600px)': {
      width: '250px',
      height: '250px',
      top: '-75px',
      right: '-40px',
    },
  },
  bgDecorationBottom: {
    width: '600px',
    height: '600px',
    bottom: '-200px',
    left: '-150px',
    background: 'radial-gradient(circle, rgba(255, 198, 20, 0.05) 0%, rgba(255, 198, 20, 0.01) 70%)',
    '@media (max-width: 960px)': {
      width: '450px',
      height: '450px',
      bottom: '-150px',
      left: '-120px',
    },
    '@media (max-width: 600px)': {
      width: '300px',
      height: '300px',
      bottom: '-100px',
      left: '-80px',
    },
  },
  container: {
    position: 'relative',
    zIndex: 2,
    padding: '0 15px',
  },
  titleContainer: {
    marginBottom: '35px',
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    '@media (max-width: 960px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '25px',
    },
  },
  sectionTitle: {
    fontSize: '2.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '12px !important',
    position: 'relative',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-12px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 100%)',
      borderRadius: '2px',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
      '&::after': {
        width: '50px',
        bottom: '-10px',
      },
    },
    '@media (max-width: 600px)': {
      fontSize: '1.6rem !important',
      '&::after': {
        width: '45px',
        bottom: '-8px',
      },
    },
    '@media (max-width: 480px)': {
      fontSize: '1.4rem !important',
      '&::after': {
        width: '40px',
        height: '2px',
      },
    },
  },
  highlightText: {
    color: '#FFC614 !important',
    fontWeight: 'bold !important',
    position: 'relative',
  },
  sectionSubtitle: {
    fontSize: '1rem !important',
    color: '#666666 !important',
    textAlign: 'center',
    // maxWidth: '600px',
    margin: '25px auto 0 !important',
    '@media (max-width: 960px)': {
      fontSize: '0.95rem !important',
      maxWidth: '550px',
      margin: '20px auto 0 !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      maxWidth: '90%',
      margin: '18px auto 0 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.85rem !important',
      margin: '15px auto 0 !important',
    },
  },
  roadmapLine: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '150px',
    bottom: '80px',
    width: '3px',
    background: 'linear-gradient(180deg, #2A2B6A 0%, #4A4C9B 100%)',
    zIndex: 1,
    borderRadius: '2px',
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#2A2B6A',
    },
    '&::before': {
      top: '-6px',
    },
    '&::after': {
      bottom: '-6px',
      backgroundColor: '#FFC614',
    },
    '@media (max-width: 960px)': {
      width: '2px',
      '&::before, &::after': {
        width: '10px',
        height: '10px',
      },
    },
  },
  sliderContainer: {
    position: 'relative',
    paddingTop: '30px',
    paddingBottom: '20px',
    '@media (max-width: 960px)': {
      paddingTop: '25px',
      paddingBottom: '15px',
    },
  },
  sliderTrack: {
    display: 'flex',
    transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '15px 0',
  },
  sliderWrapper: {
    position: 'relative',
    overflow: 'hidden',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 'calc(100% - 80px)',
    '@media (max-width: 960px)': {
      maxWidth: 'calc(100% - 60px)',
    },
    '@media (max-width: 600px)': {
      maxWidth: 'calc(100% - 40px)',
    },
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '25px',
    gap: '8px',
    '@media (max-width: 960px)': {
      marginTop: '20px',
      gap: '7px',
    },
    '@media (max-width: 600px)': {
      marginTop: '18px',
      gap: '6px',
    },
  },
  progressDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#e0e0e0',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '@media (max-width: 600px)': {
      width: '8px',
      height: '8px',
    },
  },
  progressDotActive: {
    backgroundColor: '#2A2B6A',
    transform: 'scale(1.2)',
    boxShadow: '0 0 0 2px rgba(42, 43, 106, 0.2)',
  },
  skillChip: {
    marginTop: '15px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '8px',
    padding: '0 10px',
    '@media (max-width: 960px)': {
      gap: '6px',
    },
    '@media (max-width: 600px)': {
      gap: '5px',
    },
  },
  chip: {
    fontSize: '0.8rem !important',
    fontWeight: '500 !important',
    borderRadius: '25px !important',
    padding: '6px 12px !important',
    transition: 'all 0.3s ease !important',
    whiteSpace: 'nowrap !important',
    maxWidth: '200px !important',
    overflow: 'hidden !important',
    textOverflow: 'ellipsis !important',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.75rem !important',
      padding: '5px 10px !important',
      maxWidth: '180px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.7rem !important',
      padding: '4px 8px !important',
      maxWidth: '160px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.65rem !important',
      padding: '3px 6px !important',
      maxWidth: '140px !important',
    },
  },
  chipActive: {
    background: 'linear-gradient(90deg, #2A2B6A 0%, #4A4C9B 100%) !important',
    color: 'white !important',
    boxShadow: '0 4px 10px rgba(42, 43, 106, 0.3) !important',
  },
  programTitle: {
    fontSize: '1.6rem !important',
    fontWeight: 'bold !important',
    color: '#4A4A4A !important',
    marginBottom: '25px !important',
    textAlign: 'center',
    position: 'relative',
    whiteSpace: 'nowrap',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '40px',
      height: '2px',
      background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 100%)',
      borderRadius: '1px',
    },
    '@media (max-width: 1200px)': {
      fontSize: '1.5rem !important',
      marginBottom: '22px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.4rem !important',
      marginBottom: '20px !important',
      '&::after': {
        width: '35px',
      },
    },
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
      marginBottom: '18px !important',
      '&::after': {
        width: '30px',
      },
    },
    '@media (max-width: 480px)': {
      fontSize: '1.2rem !important',
      marginBottom: '15px !important',
      '&::after': {
        width: '25px',
      },
    },
  },
});

const Curriculum = ({ 
  title, 
  subtitle,
  programName,
  curriculumData,
  icons = {}
}) => {
  const classes = useStyles();
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [visibleCategoryId, setVisibleCategoryId] = useState(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  // Extract cards data from curriculum data
  const [cardsData, setCardsData] = useState([]);
  
  // Process the curriculum data into cards
  useEffect(() => {
    if (curriculumData) {
      const cards = [];
      let cardIndex = 1;
      const categoryIds = Object.keys(curriculumData);
      
      Object.entries(curriculumData).forEach(([key, section]) => {
        cards.push({
          id: key,
          number: cardIndex,
          title: section.title,
          topics: section.topics, // Pass all topics to the card
          icon: icons[key],
          difficulty: Math.floor(Math.random() * 3) + 1,
          duration: `${Math.floor(Math.random() * 3) + 2} weeks`,
        });
        cardIndex++;
      });
      
      setCardsData(cards);
      setTotalItems(cards.length);
      if (categoryIds.length > 0) {
        setVisibleCategoryId(categoryIds[0]);
      }
    }
  }, [curriculumData, icons]);

  // Auto-scroll functionality
  useEffect(() => {
    let interval;
    if (autoPlay && !isHovered && totalItems > 1) {
      interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % totalItems;
        setCurrentIndex(nextIndex);
        
        const newVisibleId = cardsData[nextIndex]?.id;
        if (newVisibleId) {
          setVisibleCategoryId(newVisibleId);
        }
      }, 4000); // Increased interval for better UX
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, currentIndex, totalItems, isHovered, cardsData]);

  // Determine if a card should be scaled
  const isCardInCoreSkills = (index) => {
    return index === Math.floor(totalItems / 2);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    const newVisibleId = cardsData[index]?.id;
    if (newVisibleId) {
      setVisibleCategoryId(newVisibleId);
    }
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 6000);
  };

  const handleChipClick = (id) => {
    const index = cardsData.findIndex(card => card.id === id);
    if (index !== -1) {
      setCurrentIndex(index);
      setVisibleCategoryId(id);
      setAutoPlay(false);
      setTimeout(() => setAutoPlay(true), 6000);
    }
  };

  // Calculate transform for slider
  const getSliderStyle = () => {
    if (!sliderRef.current) return {};
    
    const cardWidth = 350 + 20; // Reduced card width + margin
    const offset = -currentIndex * cardWidth;
    
    const containerWidth = sliderRef.current.parentElement.offsetWidth;
    const centerOffset = (containerWidth - cardWidth) / 2;
    
    return {
      transform: `translateX(${offset + centerOffset}px)`,
    };
  };

  return (
    <Box className={classes.section}>
      <Box className={classes.bgDecoration + ' ' + classes.bgDecorationTop}></Box>
      <Box className={classes.bgDecoration + ' ' + classes.bgDecorationBottom}></Box>
      
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.sectionTitle}>
            {title} <span className={classes.highlightText}>Curriculum</span>
          </Typography>
          <Typography className={classes.sectionSubtitle}>
            {subtitle}
          </Typography>
        </Box>
        
        <Box className={classes.skillChip}>
          {cardsData.map((card) => (
            <Chip
              key={card.id}
              label={card.title}
              className={`${classes.chip} ${visibleCategoryId === card.id ? classes.chipActive : ''}`}
              onClick={() => handleChipClick(card.id)}
            />
          ))}
        </Box>

        <Box className={classes.sliderContainer}>
          <Box 
            className={classes.sliderWrapper}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Box 
              ref={sliderRef}
              className={classes.sliderTrack} 
              style={getSliderStyle()}
            >
              {cardsData.map((card, index) => (
                <CurriculumCard 
                  key={card.id}
                  number={card.number}
                  title={card.title}
                  topics={card.topics} // All topics will be passed
                  difficulty={card.difficulty}
                  duration={card.duration}
                  icon={card.icon}
                  isScaled={isCardInCoreSkills(index)}
                  isActive={visibleCategoryId === card.id}
                  onClick={() => handleChipClick(card.id)}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Box className={classes.progressContainer}>
          {cardsData.map((_, index) => (
            <Box
              key={index}
              className={`${classes.progressDot} ${index === currentIndex ? classes.progressDotActive : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Curriculum;