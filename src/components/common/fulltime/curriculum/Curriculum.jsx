// Enhanced Curriculum Component with comprehensive responsiveness
import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Container, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CurriculumCard from './CurriculumCard';

const useStyles = makeStyles({
  section: {
    padding: '100px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)',
    '@media (max-width: 1200px)': {
      padding: '90px 0',
    },
    '@media (max-width: 960px)': {
      padding: '80px 0',
    },
    '@media (max-width: 600px)': {
      padding: '70px 0',
    },
    '@media (max-width: 480px)': {
      padding: '60px 0',
    },
    '@media (max-width: 375px)': {
      padding: '50px 0',
    },
  },
  bgDecoration: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(74, 99, 231, 0.05) 0%, rgba(74, 99, 231, 0.01) 70%)',
    zIndex: 1,
  },
  bgDecorationTop: {
    width: '700px',
    height: '700px',
    top: '-250px',
    right: '-150px',
    '@media (max-width: 1200px)': {
      width: '600px',
      height: '600px',
      top: '-200px',
      right: '-120px',
    },
    '@media (max-width: 960px)': {
      width: '500px',
      height: '500px',
      top: '-180px',
      right: '-100px',
    },
    '@media (max-width: 600px)': {
      width: '400px',
      height: '400px',
      top: '-150px',
      right: '-80px',
    },
    '@media (max-width: 480px)': {
      width: '350px',
      height: '350px',
      top: '-120px',
      right: '-70px',
    },
    '@media (max-width: 375px)': {
      width: '300px',
      height: '300px',
      top: '-100px',
      right: '-60px',
    },
  },
  bgDecorationBottom: {
    width: '900px',
    height: '900px',
    bottom: '-350px',
    left: '-250px',
    '@media (max-width: 1200px)': {
      width: '800px',
      height: '800px',
      bottom: '-300px',
      left: '-200px',
    },
    '@media (max-width: 960px)': {
      width: '700px',
      height: '700px',
      bottom: '-250px',
      left: '-180px',
    },
    '@media (max-width: 600px)': {
      width: '600px',
      height: '600px',
      bottom: '-200px',
      left: '-150px',
    },
    '@media (max-width: 480px)': {
      width: '500px',
      height: '500px',
      bottom: '-180px',
      left: '-120px',
    },
    '@media (max-width: 375px)': {
      width: '400px',
      height: '400px',
      bottom: '-150px',
      left: '-100px',
    },
  },
  container: {
    position: 'relative',
    zIndex: 2,
    padding: '0 24px',
    '@media (max-width: 1200px)': {
      padding: '0 20px',
    },
    '@media (max-width: 960px)': {
      padding: '0 18px',
    },
    '@media (max-width: 600px)': {
      padding: '0 16px',
    },
    '@media (max-width: 480px)': {
      padding: '0 14px',
    },
    '@media (max-width: 375px)': {
      padding: '0 12px',
    },
  },
  titleContainer: {
    marginBottom: '60px',
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    '@media (max-width: 1200px)': {
      marginBottom: '55px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '50px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '45px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '40px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '35px',
    },
  },
  sectionTitle: {
    fontSize: '3rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '20px !important',
    position: 'relative',
    display: 'inline-block',
    lineHeight: '1.2 !important',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-18px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100px',
      height: '5px',
      background: 'linear-gradient(90deg, #4A63E7 0%, #8B5CF6 100%)',
      borderRadius: '3px',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2.7rem !important',
      marginBottom: '18px !important',
      '&::after': {
        width: '90px',
        height: '4px',
        bottom: '-16px',
      },
    },
    '@media (max-width: 960px)': {
      fontSize: '2.4rem !important',
      marginBottom: '16px !important',
      '&::after': {
        width: '80px',
        bottom: '-14px',
      },
    },
    '@media (max-width: 600px)': {
      fontSize: '2.1rem !important',
      marginBottom: '14px !important',
      '&::after': {
        width: '70px',
        height: '3px',
        bottom: '-12px',
      },
    },
    '@media (max-width: 480px)': {
      fontSize: '1.8rem !important',
      marginBottom: '12px !important',
      '&::after': {
        width: '60px',
        bottom: '-10px',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '1.6rem !important',
      marginBottom: '10px !important',
      '&::after': {
        width: '50px',
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
    fontSize: '1.25rem !important',
    color: '#666666 !important',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '35px auto 0 !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.2rem !important',
      maxWidth: '750px',
      margin: '32px auto 0 !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.15rem !important',
      maxWidth: '700px',
      margin: '30px auto 0 !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
      maxWidth: '95%',
      margin: '28px auto 0 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.05rem !important',
      margin: '25px auto 0 !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1rem !important',
      margin: '22px auto 0 !important',
    },
  },
  roadmapLine: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '220px',
    bottom: '120px',
    width: '5px',
    background: 'linear-gradient(180deg, #4A63E7 0%, #8B5CF6 100%)',
    zIndex: 1,
    borderRadius: '3px',
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#4A63E7',
    },
    '&::before': {
      top: '-10px',
    },
    '&::after': {
      bottom: '-10px',
      backgroundColor: '#8B5CF6',
    },
    '@media (max-width: 1200px)': {
      width: '4px',
      top: '200px',
      bottom: '110px',
      '&::before, &::after': {
        width: '18px',
        height: '18px',
      },
      '&::before': {
        top: '-9px',
      },
      '&::after': {
        bottom: '-9px',
      },
    },
    '@media (max-width: 960px)': {
      width: '3px',
      top: '180px',
      bottom: '100px',
      '&::before, &::after': {
        width: '16px',
        height: '16px',
      },
      '&::before': {
        top: '-8px',
      },
      '&::after': {
        bottom: '-8px',
      },
    },
    '@media (max-width: 600px)': {
      top: '160px',
      bottom: '90px',
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
    '@media (max-width: 480px)': {
      width: '2px',
      top: '140px',
      bottom: '80px',
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
    '@media (max-width: 375px)': {
      top: '120px',
      bottom: '70px',
      '&::before, &::after': {
        width: '10px',
        height: '10px',
      },
      '&::before': {
        top: '-5px',
      },
      '&::after': {
        bottom: '-5px',
      },
    },
  },
  sliderContainer: {
    position: 'relative',
    // paddingTop: '50px',
    // paddingBottom: '40px',
    '@media (max-width: 1200px)': {
      // paddingTop: '45px',
      // paddingBottom: '35px',
    },
    '@media (max-width: 960px)': {
      // paddingTop: '40px',
      // paddingBottom: '30px',
    },
    '@media (max-width: 600px)': {
      // paddingTop: '35px',
      // paddingBottom: '25px',
    },
    '@media (max-width: 480px)': {
      // paddingTop: '30px',
      // paddingBottom: '20px',
    },
    '@media (max-width: 375px)': {
      // paddingTop: '25px',
      // paddingBottom: '15px',
    },
  },
  sliderTrack: {
    display: 'flex',
    transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '30px 0',
    '@media (max-width: 1200px)': {
      padding: '25px 0',
    },
    '@media (max-width: 960px)': {
      padding: '20px 0',
    },
    '@media (max-width: 600px)': {
      padding: '18px 0',
    },
    '@media (max-width: 480px)': {
      padding: '15px 0',
    },
    '@media (max-width: 375px)': {
      padding: '12px 0',
    },
  },
  sliderWrapper: {
    position: 'relative',
    overflow: 'hidden',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 'calc(100% - 140px)',
    '@media (max-width: 1200px)': {
      maxWidth: 'calc(100% - 120px)',
    },
    '@media (max-width: 960px)': {
      maxWidth: 'calc(100% - 100px)',
    },
    '@media (max-width: 600px)': {
      maxWidth: 'calc(100% - 80px)',
    },
    '@media (max-width: 480px)': {
      maxWidth: 'calc(100% - 60px)',
    },
    '@media (max-width: 375px)': {
      maxWidth: 'calc(100% - 40px)',
    },
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '45px',
    gap: '12px',
    '@media (max-width: 1200px)': {
      marginTop: '40px',
      gap: '11px',
    },
    '@media (max-width: 960px)': {
      marginTop: '35px',
      gap: '10px',
    },
    '@media (max-width: 600px)': {
      marginTop: '30px',
      gap: '9px',
    },
    '@media (max-width: 480px)': {
      marginTop: '25px',
      gap: '8px',
    },
    '@media (max-width: 375px)': {
      marginTop: '20px',
      gap: '7px',
    },
  },
  progressDot: {
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: '#e0e0e0',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: '2px solid transparent',
    '&:hover': {
      backgroundColor: '#d0d0d0',
      transform: 'scale(1.1)',
    },
    '@media (max-width: 1200px)': {
      width: '13px',
      height: '13px',
    },
    '@media (max-width: 960px)': {
      width: '12px',
      height: '12px',
    },
    '@media (max-width: 600px)': {
      width: '11px',
      height: '11px',
    },
    '@media (max-width: 480px)': {
      width: '10px',
      height: '10px',
    },
    '@media (max-width: 375px)': {
      width: '9px',
      height: '9px',
    },
  },
  progressDotActive: {
    backgroundColor: '#4A63E7',
    transform: 'scale(1.4)',
    boxShadow: '0 0 0 3px rgba(74, 99, 231, 0.2)',
    borderColor: '#ffffff',
    '@media (max-width: 1200px)': {
      transform: 'scale(1.35)',
      boxShadow: '0 0 0 2px rgba(74, 99, 231, 0.2)',
    },
    '@media (max-width: 960px)': {
      transform: 'scale(1.3)',
    },
    '@media (max-width: 600px)': {
      transform: 'scale(1.25)',
    },
    '@media (max-width: 480px)': {
      transform: 'scale(1.2)',
    },
    '@media (max-width: 375px)': {
      transform: 'scale(1.15)',
    },
  },
  skillChip: {
    marginTop: '30px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px',
    padding: '0 15px',
    '@media (max-width: 1200px)': {
      marginTop: '25px',
      gap: '11px',
      padding: '0 12px',
    },
    '@media (max-width: 960px)': {
      marginTop: '22px',
      gap: '10px',
      padding: '0 10px',
    },
    '@media (max-width: 600px)': {
      marginTop: '20px',
      gap: '9px',
      padding: '0 8px',
    },
    '@media (max-width: 480px)': {
      marginTop: '18px',
      gap: '8px',
      padding: '0 6px',
    },
    '@media (max-width: 375px)': {
      marginTop: '15px',
      gap: '7px',
      padding: '0 5px',
    },
  },
  chip: {
    fontSize: '0.95rem !important',
    fontWeight: '500 !important',
    borderRadius: '50px !important',
    padding: '10px 18px !important',
    transition: 'all 0.3s ease !important',
    border: '2px solid transparent !important',
    backgroundColor: '#f8f9ff !important',
    color: '#666666 !important',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f0f2ff !important',
      borderColor: '#4A63E7 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '0.9rem !important',
      padding: '9px 16px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.85rem !important',
      padding: '8px 14px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.8rem !important',
      padding: '7px 12px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.75rem !important',
      padding: '6px 10px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.7rem !important',
      padding: '5px 8px !important',
    },
  },
  chipActive: {
    background: 'linear-gradient(90deg, #4A63E7 0%, #8B5CF6 100%) !important',
    color: 'white !important',
    boxShadow: '0 6px 15px rgba(74, 99, 231, 0.3) !important',
    borderColor: 'transparent !important',
    transform: 'translateY(-3px) !important',
    '&:hover': {
      boxShadow: '0 8px 20px rgba(74, 99, 231, 0.4) !important',
      transform: 'translateY(-4px) !important',
    },
  },
  programTitle: {
    fontSize: '2rem !important',
    fontWeight: 'bold !important',
    color: '#4A4A4A !important',
    marginBottom: '35px !important',
    textAlign: 'center',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-12px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '4px',
      background: 'linear-gradient(90deg, #4A63E7 0%, #8B5CF6 100%)',
      borderRadius: '2px',
    },
    '@media (max-width: 1200px)': {
      fontSize: '1.8rem !important',
      marginBottom: '32px !important',
      '&::after': {
        width: '55px',
      },
    },
    '@media (max-width: 960px)': {
      fontSize: '1.7rem !important',
      marginBottom: '30px !important',
      '&::after': {
        width: '50px',
        height: '3px',
      },
    },
    '@media (max-width: 600px)': {
      fontSize: '1.6rem !important',
      marginBottom: '28px !important',
      '&::after': {
        width: '45px',
      },
    },
    '@media (max-width: 480px)': {
      fontSize: '1.5rem !important',
      marginBottom: '25px !important',
      '&::after': {
        width: '40px',
        height: '2px',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '1.4rem !important',
      marginBottom: '22px !important',
      '&::after': {
        width: '35px',
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
      }, 4000); // Change slide every 4 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, currentIndex, totalItems, isHovered, cardsData]);

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
    // Pause autoplay briefly when user interacts
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 6000);
  };

  const handleChipClick = (id) => {
    const index = cardsData.findIndex(card => card.id === id);
    if (index !== -1) {
      setCurrentIndex(index);
      setVisibleCategoryId(id);
      // Pause autoplay briefly when user interacts
      setAutoPlay(false);
      setTimeout(() => setAutoPlay(true), 6000);
    }
  };

  // Calculate transform for slider
  const getSliderStyle = () => {
    if (!sliderRef.current) return {};

    // Responsive card width calculation
    const getWidths = () => {
      const screenWidth = window.innerWidth;
      // [activeCardWidth, inactiveCardWidth, margin]
      if (screenWidth <= 375) return [240, 180, 14];
      if (screenWidth <= 480) return [270, 200, 16];
      if (screenWidth <= 600) return [300, 220, 18];
      if (screenWidth <= 960) return [350, 260, 20];
      if (screenWidth <= 1200) return [380, 290, 22];
      return [400, 320, 24];
    };

    const [activeCardWidth, inactiveCardWidth, margin] = getWidths();
    const totalCards = cardsData.length;

    // Calculate total width up to the current card
    let offset = 0;
    for (let i = 0; i < currentIndex; i++) {
      offset += inactiveCardWidth + margin;
    }
    // Add half of the active card width to center it
    offset += (activeCardWidth + margin) / 2;

    // Calculate total width of the slider
    const totalSliderWidth =
      (activeCardWidth + margin) +
      (totalCards - 1) * (inactiveCardWidth + margin);

    // Container width
    const containerWidth = sliderRef.current.parentElement.offsetWidth;

    // Center the active card
    const centerOffset = containerWidth / 2;

    // Final transform
    return {
      transform: `translateX(${centerOffset - offset}px)`,
    };
  };

  return (
    <Box className={classes.section}>
      <Box className={classes.bgDecoration + ' ' + classes.bgDecorationTop}></Box>
      <Box className={classes.bgDecoration + ' ' + classes.bgDecorationBottom}></Box>
      
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.sectionTitle}>
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
                  topics={card.topics}
                  difficulty={card.difficulty}
                  duration={card.duration}
                  icon={card.icon}
                  isScaled={isCardInCoreSkills(index)}
                  isActive={visibleCategoryId === card.id}
                  isInactive={visibleCategoryId !== card.id}
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