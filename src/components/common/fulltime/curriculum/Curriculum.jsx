// 4. Curriculum Component
import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Container, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CurriculumCard from './CurriculumCard';

const useStyles = makeStyles({
  section: {
    padding: '70px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)',
    '@media (max-width: 1200px)': {
      padding: '60px 0',
    },
    '@media (max-width: 960px)': {
      padding: '50px 0',
    },
    '@media (max-width: 600px)': {
      padding: '40px 0',
    },
    '@media (max-width: 480px)': {
      padding: '35px 0',
    },
    '@media (max-width: 375px)': {
      padding: '30px 0',
    },
  },
  bgDecoration: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(74, 99, 231, 0.05) 0%, rgba(74, 99, 231, 0.01) 70%)',
    zIndex: 1,
  },
  bgDecorationTop: {
    width: '600px',
    height: '600px',
    top: '-200px',
    right: '-100px',
    '@media (max-width: 960px)': {
      width: '400px',
      height: '400px',
      top: '-150px',
      right: '-75px',
    },
    '@media (max-width: 600px)': {
      width: '300px',
      height: '300px',
      top: '-100px',
      right: '-50px',
    },
  },
  bgDecorationBottom: {
    width: '800px',
    height: '800px',
    bottom: '-300px',
    left: '-200px',
    '@media (max-width: 960px)': {
      width: '600px',
      height: '600px',
      bottom: '-200px',
      left: '-150px',
    },
    '@media (max-width: 600px)': {
      width: '400px',
      height: '400px',
      bottom: '-150px',
      left: '-100px',
    },
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  titleContainer: {
    marginBottom: '40px',
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    '@media (max-width: 960px)': {
      marginBottom: '35px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '25px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '20px',
    },
  },
  sectionTitle: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '15px !important',
    position: 'relative',
    display: 'inline-block',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #4A63E7 0%, #8B5CF6 100%)',
      borderRadius: '2px',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.1rem !important',
      '&::after': {
        width: '70px',
        height: '3px',
        bottom: '-12px',
      },
    },
    '@media (max-width: 600px)': {
      fontSize: '1.9rem !important',
      '&::after': {
        width: '60px',
        bottom: '-10px',
      },
    },
    '@media (max-width: 480px)': {
      fontSize: '1.7rem !important',
      '&::after': {
        width: '50px',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '1.5rem !important',
      '&::after': {
        width: '40px',
        height: '2px',
        bottom: '-8px',
      },
    },
  },
  highlightText: {
    color: '#4A63E7 !important',
    fontWeight: 'bold !important',
    position: 'relative',
  },
  sectionSubtitle: {
    fontSize: '1.1rem !important',
    color: '#666666 !important',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '25px auto 0 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '650px',
      margin: '22px auto 0 !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
      maxWidth: '90%',
      margin: '20px auto 0 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      margin: '18px auto 0 !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      margin: '15px auto 0 !important',
    },
  },
  roadmapLine: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '200px',
    bottom: '100px',
    width: '4px',
    background: 'linear-gradient(180deg, #4A63E7 0%, #8B5CF6 100%)',
    zIndex: 1,
    borderRadius: '2px',
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#4A63E7',
    },
    '&::before': {
      top: '-8px',
    },
    '&::after': {
      bottom: '-8px',
      backgroundColor: '#8B5CF6',
    },
    '@media (max-width: 960px)': {
      width: '3px',
      '&::before, &::after': {
        width: '14px',
        height: '14px',
      },
      '&::before': {
        top: '-7px',
      },
      '&::after': {
        bottom: '-7px',
      },
    },
    '@media (max-width: 600px)': {
      '&::before, &::after': {
        width: '12px',
        height: '12px',
      },
      '&::before': {
        top: '-6px',
      },
      '&::after': {
        bottom: '-6px',
      },
    },
  },
  sliderContainer: {
    position: 'relative',
    paddingTop: '40px',
    '@media (max-width: 960px)': {
      paddingTop: '35px',
    },
    '@media (max-width: 600px)': {
      paddingTop: '30px',
    },
  },
  coreSkillsLabel: {
    position: 'absolute',
    top: '-5px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 5,
    padding: '12px 30px',
    fontWeight: 'bold',
    fontSize: '18px',
    color: 'white',
    whiteSpace: 'nowrap',
    background: 'linear-gradient(90deg, #6A5AF9 0%, #9E8DFC 100%)',
    boxShadow: '0 4px 15px rgba(106, 90, 249, 0.3)',
    borderRadius: '50px',
    '@media (max-width: 960px)': {
      padding: '10px 25px',
      fontSize: '16px',
    },
    '@media (max-width: 600px)': {
      padding: '8px 20px',
      fontSize: '15px',
    },
    '@media (max-width: 480px)': {
      padding: '7px 18px',
      fontSize: '14px',
    },
    '@media (max-width: 375px)': {
      padding: '6px 15px',
      fontSize: '13px',
    },
  },
  sliderTrack: {
    display: 'flex',
    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '10px 0',
  },
  sliderWrapper: {
    position: 'relative',
    overflow: 'hidden',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 'calc(100% - 120px)',
    '@media (max-width: 960px)': {
      maxWidth: 'calc(100% - 100px)',
    },
    '@media (max-width: 600px)': {
      maxWidth: 'calc(100% - 80px)',
    },
    '@media (max-width: 480px)': {
      maxWidth: 'calc(100% - 60px)',
    },
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    gap: '8px',
    '@media (max-width: 960px)': {
      marginTop: '25px',
    },
    '@media (max-width: 600px)': {
      marginTop: '20px',
      gap: '7px',
    },
    '@media (max-width: 480px)': {
      marginTop: '15px',
      gap: '6px',
    },
    '@media (max-width: 375px)': {
      gap: '5px',
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
      width: '9px',
      height: '9px',
    },
    '@media (max-width: 480px)': {
      width: '8px',
      height: '8px',
    },
    '@media (max-width: 375px)': {
      width: '7px',
      height: '7px',
    },
  },
  progressDotActive: {
    backgroundColor: '#4A63E7',
    transform: 'scale(1.2)',
    boxShadow: '0 0 0 2px rgba(74, 99, 231, 0.2)',
  },
  skillChip: {
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '8px',
    '@media (max-width: 960px)': {
      gap: '7px',
    },
    '@media (max-width: 600px)': {
      gap: '6px',
    },
    '@media (max-width: 480px)': {
      gap: '5px',
    },
    '@media (max-width: 375px)': {
      gap: '4px',
    },
  },
  chip: {
    fontSize: '0.85rem !important',
    fontWeight: '500 !important',
    borderRadius: '50px !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.75rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.65rem !important',
    },
  },
  chipActive: {
    background: 'linear-gradient(90deg, #4A63E7 0%, #8B5CF6 100%) !important',
    color: 'white !important',
    boxShadow: '0 4px 10px rgba(74, 99, 231, 0.2) !important',
  },
  programTitle: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    color: '#4A4A4A !important',
    marginBottom: '30px !important',
    textAlign: 'center',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '50px',
      height: '3px',
      background: 'linear-gradient(90deg, #4A63E7 0%, #8B5CF6 100%)',
      borderRadius: '1.5px',
    },
    '@media (max-width: 1200px)': {
      fontSize: '1.7rem !important',
      marginBottom: '27px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.6rem !important',
      marginBottom: '25px !important',
      '&::after': {
        width: '45px',
      },
    },
    '@media (max-width: 600px)': {
      fontSize: '1.5rem !important',
      marginBottom: '22px !important',
      '&::after': {
        width: '40px',
        height: '2.5px',
      },
    },
    '@media (max-width: 480px)': {
      fontSize: '1.4rem !important',
      marginBottom: '20px !important',
      '&::after': {
        width: '35px',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '1.3rem !important',
      marginBottom: '18px !important',
      '&::after': {
        width: '30px',
        height: '2px',
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
          topics: section.topics,
          icon: icons[key],
          difficulty: Math.floor(Math.random() * 3) + 1, // Random difficulty for demo
          duration: `${Math.floor(Math.random() * 3) + 2} weeks`, // Random duration for demo
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

  // Determine if a card should be scaled (Core Skills section - assuming it's the middle card)
  const isCardInCoreSkills = (index) => {
    return index === Math.floor(totalItems / 2);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    const newVisibleId = cardsData[index]?.id;
    if (newVisibleId) {
      setVisibleCategoryId(newVisibleId);
    }
  };

  const handleChipClick = (id) => {
    const index = cardsData.findIndex(card => card.id === id);
    if (index !== -1) {
      setCurrentIndex(index);
      setVisibleCategoryId(id);
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
          <Box className={classes.coreSkillsLabel}>
            Core Skills
          </Box>
          
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

export default Curriculum   