import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    width: '100%',
    padding: '32px 0',
    overflow: 'hidden',
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
  },
  title: {
    fontSize: '24px !important',
    fontWeight: 'bold !important',
    textAlign: 'center',
    marginBottom: '8px !important',
    color: '#1a237e !important',
    position: 'relative',
    zIndex: '2',
    '& span': {
      color: '#f9c74f !important',
    },
  },
  subtitle: {
    fontSize: '14px !important',
    textAlign: 'center',
    color: '#555 !important',
    marginBottom: '32px !important',
    maxWidth: '90%',
    margin: '0 auto 32px auto !important',
    position: 'relative',
    zIndex: '2',
  },
  weekTitle: {
    fontSize: '14px !important',
    fontWeight: '500 !important',
    marginBottom: '4px !important',
  },
  roleName: {
    fontSize: '15px !important',
    fontWeight: 'bold !important',
    marginBottom: '8px !important',
  },
  description: {
    fontSize: '12px !important',
    color: '#555 !important',
    lineHeight: '1.4 !important',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '16px',
    height: '230px',
    position: 'relative',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    zIndex: '1',
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '32px',
    width: '100%',
    padding: '0 24px',
    gap: '60px',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: '1',
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
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  viewButton: {
    marginTop: '16px !important',
    textTransform: 'none !important',
    backgroundColor: 'rgba(255, 255, 255, 0.8) !important',
    color: '#333 !important',
    border: '1px solid #ddd !important',
    borderRadius: '5px !important',
    padding: '6px 16px !important',
    display: 'block !important',
    margin: '0 auto !important',
    zIndex: '1',
    position: 'relative',
  },
  pinkDot: {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: 'rgba(237, 30, 121, 0.6)',
    zIndex: '0',
  },
  purpleDot: {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: 'rgba(111, 66, 193, 0.5)',
    zIndex: '0',
  },
  weekLabel: {
    textTransform: 'uppercase',
    fontSize: '12px !important',
    marginBottom: '8px !important',
    color: '#555 !important',
  },
  headerContainer: {
    position: 'relative',
    marginBottom: '40px',
    zIndex: '1',
  },
  orangeDot: {
    height: '12px',
    width: '12px',
    backgroundColor: '#f9a826',
    borderRadius: '50%',
    position: 'absolute',
    top: '32px',
    left: '32px',
    zIndex: '2',
  },
  // Protected area where no dots should appear
  titleProtectedArea: {
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    height: '130px',
    zIndex: '1',
  },
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
        size: `${Math.random() * 15 + 8}px`,
        opacity: Math.random() * 0.3 + 0.5,
      });
    }
  });
  
  return dots;
};

const DataScienceTrainingPlan = () => {
  const classes = useStyles();
  
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
          }}
        />
      ))}
      
      {/* Purple dots - using a different color than the Full Stack component */}
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
          }}
        />
      ))}

      <Box className={classes.headerContainer}>
        <Box className={classes.orangeDot}></Box>
        <Typography variant="h4" className={classes.title}>
          1-Month Job-Specific Training Plan <span>In Data Science</span>
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Each students selects one job role and receives both technical training and placement preparation
        </Typography>

        <Typography variant="h6" sx={{ 
          textAlign: 'center', 
          fontSize: '18px', 
          fontWeight: 'bold', 
          color: '#333',
          marginBottom: '24px',
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
                <CalendarMonthIcon sx={{ color: weekData.color }} />
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

      <Button variant="outlined" className={classes.viewButton}>
        View full program details
      </Button>
    </Box>
  );
};

export default DataScienceTrainingPlan;