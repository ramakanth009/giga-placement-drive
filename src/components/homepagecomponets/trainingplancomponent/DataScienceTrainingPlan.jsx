import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    width: '100%',
    padding: '40px 0',
    overflow: 'hidden',
    "@media (max-width: 960px)": {
      padding: '30px 0',
    },
  },
  // Custom background element
  backgroundGradient: {
    position: 'absolute',
    width: '767px',
    height: '566px',
    top: '-100px',
    left: '-150px',
    background: '#FFE4F0',
    borderRadius: '50%',
    opacity: '0.3',
    filter: 'blur(100px)',
    zIndex: '-1',
    "@media (max-width: 768px)": {
      width: '500px',
      height: '400px',
      top: '-50px',
      left: '-100px',
    },
  },
  title: {
    fontSize: "2.8rem !important",
    fontWeight: 'bold !important',
    textAlign: 'center',
    marginBottom: '12px !important',
    color: "#2A2B6A !important",
    position: 'relative',
    zIndex: '2',
    '& span': {
      color: '#f9c74f !important',
    },
    "@media (max-width: 960px)": {
      fontSize: "2.4rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "2rem !important",
    },
  },
  subtitle: {
    fontSize: '1.4rem !important',
    textAlign: 'center',
    color: '#555 !important',
    marginBottom: '36px !important',
    maxWidth: '90%',
    margin: '0 auto 36px auto !important',
    position: 'relative',
    zIndex: '2',
    "@media (max-width: 960px)": {
      fontSize: '1.2rem !important',
      marginBottom: '30px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.1rem !important',
      marginBottom: '24px !important',
      maxWidth: '95%',
    },
  },
  weekTitle: {
    fontSize: '1.1rem !important',
    fontWeight: '500 !important',
    marginBottom: '6px !important',
    minHeight: '20px !important',
    transition: 'all 0.3s ease',
    "@media (max-width: 600px)": {
      fontSize: '1rem !important',
    },
  },
  roleName: {
    fontSize: '18px !important',
    fontWeight: 'bold !important',
    marginBottom: '10px !important',
    minHeight: '44px !important',
    transition: 'all 0.3s ease',
    "@media (max-width: 600px)": {
      fontSize: '16px !important',
      minHeight: '40px !important',
    },
  },
  description: {
    fontSize: '14px !important',
    color: '#555 !important',
    lineHeight: '1.5 !important',
    minHeight: '84px !important',
    transition: 'all 0.3s ease',
    "@media (max-width: 600px)": {
      fontSize: '13px !important',
      minHeight: '78px !important',
    },
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '24px 20px',
    height: '340px',
    position: 'relative',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    zIndex: '1',
    transform: 'translateY(0)',  // Add this line
    transition: 'all 0.3s ease-out',  // Change this line
    '&:hover': {
      transform: 'translateY(-8px)',  // Reduce the movement
      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
      '& $iconContainer': {
        transform: 'scale(1.05)',  // Reduce the scale amount
      }
    },
    "@media (max-width: 960px)": {
      height: '290px',
      padding: '20px 16px',
    },
    "@media (max-width: 600px)": {
      height: '280px',
      padding: '18px 14px',
    },
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '40px',
    width: '100%',
    padding: '0 24px',
    gap: '60px',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: '1',
    "@media (max-width: 1200px)": {
      gap: '40px',
    },
    "@media (max-width: 960px)": {
      gap: '30px',
      padding: '0 15px',
    },
    "@media (max-width: 600px)": {
      gap: '25px',
      padding: '0 10px',
    },
  },
  cardWrapper: {
    width: '18%',
    '@media (max-width: 1200px)': {
      width: '20%',
    },
    '@media (max-width: 900px)': {
      width: '40%',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      maxWidth: '350px',
    }
  },
  iconContainer: {
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '18px',
    transition: 'transform 0.4s ease',
    "@media (max-width: 600px)": {
      width: '45px',
      height: '45px',
      marginBottom: '14px',
    },
  },
  viewButton: {
    marginTop: '24px !important',
    textTransform: 'none !important',
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    border: 'none !important',
    borderRadius: '8px !important',
    padding: '10px 24px !important',
    fontSize: '1rem !important',
    display: 'block !important',
    margin: '0 auto !important',
    zIndex: '1',
    position: 'relative',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: '#1A1B4A !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 12px rgba(42, 43, 106, 0.2) !important',
    },
    "@media (max-width: 600px)": {
      marginTop: '20px !important',
      padding: '8px 20px !important',
      fontSize: '0.95rem !important',
    },
  },
  pinkDot: {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: 'rgba(237, 30, 121, 0.6)',
    zIndex: '0',
    transition: 'transform 0.8s ease, opacity 0.8s ease',
  },
  purpleDot: {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: 'rgba(111, 66, 193, 0.5)',
    zIndex: '0',
    transition: 'transform 0.8s ease, opacity 0.8s ease',
  },
  weekLabel: {
    textTransform: 'uppercase',
    fontSize: '13px !important',
    marginBottom: '8px !important',
    color: '#555 !important',
    "@media (max-width: 600px)": {
      fontSize: '12px !important',
      marginBottom: '6px !important',
    },
  },
  headerContainer: {
    position: 'relative',
    marginBottom: '50px',
    zIndex: '1',
    "@media (max-width: 960px)": {
      marginBottom: '40px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '30px',
    },
  },
  orangeDot: {
    height: '15px',
    width: '15px',
    backgroundColor: '#f9a826',
    borderRadius: '50%',
    position: 'absolute',
    top: '32px',
    left: '32px',
    zIndex: '2',
    "@media (max-width: 960px)": {
      top: '25px',
      left: '25px',
      height: '12px',
      width: '12px',
    },
    "@media (max-width: 600px)": {
      top: '20px',
      left: '20px',
      height: '10px',
      width: '10px',
    },
  },
  // Protected area where no dots should appear
  titleProtectedArea: {
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    height: '150px',
    zIndex: '1',
    "@media (max-width: 960px)": {
      height: '130px',
    },
    "@media (max-width: 600px)": {
      height: '110px',
      width: '90%',
    },
  },
  activeDot: {
    transform: 'scale(1.3) translateY(-10px)',
    opacity: 0.9,
  }
});

// Function to generate positioned dots with different regions to prevent overlap
const generateSectionedDots = (count, type, avoidTop = false) => {
  const dots = [];
  
  // Divide the container into regions
  const regions = {
    topLeft: { startX: 0, endX: 0.33, startY: 0.3, endY: 0.5 },
    topRight: { startX: 0.67, endX: 1, startY: 0.3, endY: 0.5 },
    middleLeft: { startX: 0, endX: 0.25, startY: 0.5, endY: 0.75 },
    middleRight: { startX: 0.75, endX: 1, startY: 0.5, endY: 0.75 },
    bottomLeft: { startX: 0.1, endX: 0.4, startY: 0.75, endY: 1 },
    bottomRight: { startX: 0.6, endX: 0.9, startY: 0.75, endY: 1 },
    middle: { startX: 0.3, endX: 0.7, startY: 0.6, endY: 0.9 },
  };
  
  // Allocate dots to regions
  const dotsPerRegion = Math.ceil(count / Object.keys(regions).length);
  
  Object.values(regions).forEach(region => {
    for (let i = 0; i < dotsPerRegion && dots.length < count; i++) {
      const x = region.startX + Math.random() * (region.endX - region.startX);
      const y = region.startY + Math.random() * (region.endY - region.startY);
      
      dots.push({
        top: `${y * 100}%`,
        left: `${x * 100}%`,
        size: `${Math.random() * 20 + 10}px`,
        opacity: Math.random() * 0.3 + 0.5,
      });
    }
  });
  
  return dots;
};

const DataScienceTrainingPlan = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  
  // Generate dots with a sectioned approach to avoid overlaps
  const pinkDots = generateSectionedDots(12, 'pink', true);
  const purpleDots = generateSectionedDots(10, 'purple', true);

  const weeks = [
    {
      week: 'Week 1',
      role: 'Data Analyst',
      description: 'Learn data cleaning, visualization, and analysis using Excel, SQL and Python, along with exploratory data analysis (EDA) and communication skills through GUI training.',
      color: '#8a5cf7',
    },
    {
      week: 'Week 2',
      role: 'Business Intelligence (BI) Analyst',
      description: 'Gain hands-on experience with Power BI, Tableau, and SQL queries to create dashboards and reports for data-driven decision-making.',
      color: '#4376eb',
    },
    {
      week: 'Week 3',
      role: 'Data Engineer',
      description: 'Understand ETL pipelines, database management (SQL & NoSQL), and cloud storage, along with data warehousing and workflow automation.',
      color: '#f07c3e',
    },
    {
      week: 'Week 4',
      role: 'Data Science Associate',
      description: 'Develop skills in statistics, feature engineering, and Python libraries (NumPy, Pandas, TensorFlow, and Seaborn) with a focus on technical interviews and real-world problem-solving.',
      color: '#e8518d',
    },
  ];

  return (
    <Box className={classes.wrapper}>
      {/* Custom background gradient on left side */}
      <Box className={classes.backgroundGradient} />
      
      {/* Protected area for title where no dots should appear */}
      <Box className={classes.titleProtectedArea} />
      
      {/* Pink dots */}
      {pinkDots.map((dot, index) => (
        <Box 
          key={`pink-${index}`}
          className={classes.pinkDot}
          sx={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
            display: { xs: index % 2 === 0 ? 'none' : 'block', md: 'block' },
            '&:hover': {
              transform: 'scale(1.3) translateY(-10px)',
              opacity: '0.9',
            },
          }}
        />
      ))}
      
      {/* Purple dots - using a different color than the full stack component */}
      {purpleDots.map((dot, index) => (
        <Box 
          key={`purple-${index}`}
          className={classes.purpleDot}
          sx={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
            display: { xs: index % 2 === 0 ? 'none' : 'block', md: 'block' },
            '&:hover': {
              transform: 'scale(1.3) translateY(-10px)',
              opacity: '0.9',
            },
          }}
        />
      ))}

      <Box className={classes.headerContainer}>
        <Box className={classes.orangeDot}></Box>
        <Typography variant="h4" className={classes.title}>
          1-Month Job-Specific Training Plan <span>In Data Science</span>
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Each student selects one job role and receives both technical training and placement preparation
        </Typography>

        <Typography variant="h6" sx={{ 
          textAlign: 'center', 
          fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }, 
          fontWeight: 'bold', 
          color: '#333',
          marginBottom: { xs: '24px', sm: '28px', md: '32px' },
          position: 'relative',
          zIndex: 1,
        }}>
          Weekly Job Role Training Breakdown
        </Typography>
      </Box>

      <Box className={classes.cardsContainer}>
        {weeks.map((weekData, index) => (
          <Box className={classes.cardWrapper} key={index}>
            <Box className={classes.card}>
              <Box 
                className={classes.iconContainer} 
                sx={{ backgroundColor: `${weekData.color}20` }}
              >
                <CalendarMonthIcon sx={{ color: weekData.color, fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2rem' } }} />
              </Box>
              <Typography className={classes.weekLabel}>
                {weekData.week}
              </Typography>
              <Typography className={classes.roleName} sx={{ color: weekData.color }}>
                {weekData.role}
              </Typography>
              <Typography className={classes.description}>
                {weekData.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Button 
        variant="contained" 
        className={classes.viewButton}
        onClick={() => navigate('/datascience')}
      >
        View full program details
      </Button>
    </Box>
  );
};

export default DataScienceTrainingPlan;