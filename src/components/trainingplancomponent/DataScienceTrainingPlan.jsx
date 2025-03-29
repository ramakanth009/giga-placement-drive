import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    width: '100%',
    padding: '32px 0 60px 0',
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
  titleSection: {
    position: 'relative',
    backgroundColor: 'transparent',
    padding: '20px',
    maxWidth: '90%',
    margin: '0 auto 30px auto',
    zIndex: '2',
  },
  title: {
    fontSize: '24px !important',
    fontWeight: 'bold !important',
    textAlign: 'center',
    marginBottom: '8px !important',
    color: '#1a237e !important',
    '& span': {
      color: '#f9c74f !important',
    },
  },
  subtitle: {
    fontSize: '14px !important',
    textAlign: 'center',
    color: '#555 !important',
    maxWidth: '90%',
    margin: '0 auto !important',
  },
  sectionTitle: {
    textAlign: 'center', 
    fontSize: '18px !important', 
    fontWeight: 'bold !important', 
    color: '#333 !important',
    marginBottom: '32px !important',
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'transparent',
    padding: '10px 20px',
    width: 'fit-content',
    margin: '0 auto 32px auto !important',
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
  orangeDot: {
    height: '12px',
    width: '12px',
    backgroundColor: '#f9a826',
    borderRadius: '50%',
    position: 'absolute',
    top: '20px',
    left: '20px',
  },
  pinkDot: {
    position: 'absolute',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: 'rgba(237, 30, 121, 0.7)',
    zIndex: '0',
  },
  tealDot: {
    position: 'absolute',
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 186, 188, 0.5)',
    zIndex: '0',
  },
  weekLabel: {
    textTransform: 'uppercase',
    fontSize: '12px !important',
    marginBottom: '8px !important',
    color: '#555 !important',
  },
  dotsContainer: {
    position: 'absolute',
    top: '120px',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    pointerEvents: 'none',
  }
});

const DataScienceTrainingPlan = () => {
  const classes = useStyles();

  // Fixed position decorative dots with different positions than the Full Stack component
  const pinkDots = [
    { top: '20%', left: '15%', size: '15px', opacity: 0.7 },
    { top: '45%', left: '8%', size: '22px', opacity: 0.6 },
    { top: '75%', left: '12%', size: '18px', opacity: 0.8 },
    { top: '60%', left: '22%', size: '12px', opacity: 0.7 },
    { top: '35%', left: '78%', size: '22px', opacity: 0.6 },
    { top: '55%', left: '88%', size: '16px', opacity: 0.7 },
    { top: '85%', left: '92%', size: '14px', opacity: 0.8 },
    { top: '50%', left: '72%', size: '18px', opacity: 0.6 },
  ];
  
  const tealDots = [
    { top: '25%', left: '88%', size: '24px', opacity: 0.5 },
    { top: '30%', left: '25%', size: '20px', opacity: 0.6 },
    { top: '65%', left: '60%', size: '22px', opacity: 0.5 },
    { top: '80%', left: '40%', size: '26px', opacity: 0.4 },
    { top: '20%', left: '50%', size: '18px', opacity: 0.6 },
    { top: '55%', left: '45%', size: '16px', opacity: 0.5 },
  ];

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
      
      {/* Title and subtitle in a protected white box */}
      <Box className={classes.titleSection}>
        <Box className={classes.orangeDot}></Box>
        <Typography variant="h4" className={classes.title}>
          1-Month Job-Specific Training Plan <span>In Data Science</span>
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Each students selects one job role and receives both technical training and placement preparation
        </Typography>
      </Box>

      <Typography variant="h6" className={classes.sectionTitle}>
        Weekly Job Role Training Breakdown
      </Typography>

      {/* Dots container with fixed positions - different from Full Stack */}
      <Box className={classes.dotsContainer}>
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
        
        {/* Teal dots - using a different color than Full Stack */}
        {tealDots.map((dot, index) => (
          <Box 
            key={`teal-${index}`}
            className={classes.tealDot}
            sx={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              opacity: dot.opacity,
            }}
          />
        ))}
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