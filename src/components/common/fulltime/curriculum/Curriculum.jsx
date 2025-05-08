// src/components/common/fulltime/curriculum/Curriculum.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, IconButton, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CurriculumCard from './CurriculumCard';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    position: 'relative',
  },
  titleContainer: {
    marginBottom: '80px',
    position: 'relative',
    zIndex: 2,
  },
  sectionTitle: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '15px !important',
  },
  highlightText: {
    color: '#FFC614 !important',
  },
  sectionSubtitle: {
    fontSize: '1.1rem !important',
    color: '#666666 !important',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto !important',
  },
  sliderContainer: {
    position: 'relative',
    paddingTop: '40px',  // Extra padding for the number circles
  },
  sliderTrack: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    padding: '10px 0',
  },
  sliderWrapper: {
    position: 'relative',
    overflow: 'hidden',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 'calc(100% - 120px)',  // Make room for nav buttons
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    background: 'white !important',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1) !important',
    width: '44px !important',
    height: '44px !important',
    '&:hover': {
      background: 'white !important',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15) !important',
    },
    '&.Mui-disabled': {
      background: '#f5f5f5 !important',
      color: '#ccc !important',
    },
  },
  leftButton: {
    left: '20px',
  },
  rightButton: {
    right: '20px',
  },
  coreSkillsLabel: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(90deg, #6A5AF9 0%, #9E8DFC 100%)',
    color: 'white',
    padding: '15px 40px',
    borderRadius: '50px',
    fontSize: '20px',
    fontWeight: 'bold',
    zIndex: 5,
    whiteSpace: 'nowrap',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: '-300px',
      top: '50%',
      width: '300px',
      height: '2px',
      background: '#6A5AF9',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      right: '-300px',
      top: '50%',
      width: '300px',
      height: '2px',
      background: '#6A5AF9',
    },
  },
  programTitle: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    color: '#4A4A4A !important',
    marginBottom: '30px !important',
    marginLeft: '60px !important',
  },
});

const Curriculum = ({ 
  title, 
  subtitle,
  programName,
  curriculumData,
  icons = {} // Map of section keys to icon components
}) => {
  const classes = useStyles();
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  
  // Extract cards data from curriculum data
  const [cardsData, setCardsData] = useState([]);
  
  // Process the curriculum data into cards
  useEffect(() => {
    if (curriculumData) {
      const cards = [];
      let cardIndex = 1;
      
      Object.entries(curriculumData).forEach(([key, section]) => {
        cards.push({
          id: key,
          number: cardIndex,
          title: section.title,
          topics: section.topics,
          icon: icons[key],
          difficulty: Math.floor(Math.random() * 3) + 1, // Random difficulty for demo
          duration: `${Math.floor(Math.random() * 3) + 2} weeks`, // Random duration for demo
        });
        cardIndex++;
      });
      
      setCardsData(cards);
      setTotalItems(cards.length);
    }
  }, [curriculumData, icons]);

  // Determine if a card should be scaled (Core Skills section - assuming it's the middle card)
  const isCardInCoreSkills = (index) => {
    return index === Math.floor(totalItems / 2);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Calculate transform for slider
  const getSliderStyle = () => {
    if (!sliderRef.current) return {};
    
    const cardWidth = 400 + 24; // card width + margin
    const offset = -currentIndex * cardWidth;
    
    // Calculate center offset to position the current card in the center
    const containerWidth = sliderRef.current.parentElement.offsetWidth;
    const centerOffset = (containerWidth - cardWidth) / 2;
    
    return {
      transform: `translateX(${offset + centerOffset}px)`,
    };
  };

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.sectionTitle}>
            {title} <span className={classes.highlightText}>Curriculum</span>
          </Typography>
          <Typography className={classes.sectionSubtitle}>
            {subtitle}
          </Typography>
        </Box>
        
        <Typography className={classes.programTitle}>
          {programName}
        </Typography>

        <Box className={classes.sliderContainer}>
          <Box className={classes.coreSkillsLabel}>
            Core Skills
          </Box>
          
          <IconButton 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            className={`${classes.navButton} ${classes.leftButton}`}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          
          <Box className={classes.sliderWrapper}>
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
                  topics={card.topics}
                  difficulty={card.difficulty}
                  duration={card.duration}
                  icon={card.icon}
                  isScaled={isCardInCoreSkills(index)}
                />
              ))}
            </Box>
          </Box>
          
          <IconButton 
            onClick={handleNext} 
            disabled={currentIndex === totalItems - 1}
            className={`${classes.navButton} ${classes.rightButton}`}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Curriculum;