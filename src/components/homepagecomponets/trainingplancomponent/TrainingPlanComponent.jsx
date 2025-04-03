import React, { useState } from 'react';
import { Box, Typography, Button, Tabs, Tab } from '@mui/material';
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
    background: '#BCE1FF',
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
    '& span': {
      color: '#f9c74f !important',
    },
  },
  subtitle: {
    fontSize: '14px !important',
    textAlign: 'center',
    color: '#555 !important',
    marginBottom: '24px !important',
    maxWidth: '90%',
    margin: '0 auto 24px auto !important',
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
    top: '32px',
    left: '32px',
  },
  pinkDot: {
    height: '12px',
    width: '12px',
    backgroundColor: '#e8518d',
    borderRadius: '50%',
    position: 'absolute',
    top: '32px',
    right: '32px',
  },
  weekLabel: {
    textTransform: 'uppercase',
    fontSize: '12px !important',
    marginBottom: '8px !important',
    color: '#555 !important',
  },
  pinkDotBg: {
    position: 'absolute',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: 'rgba(237, 30, 121, 0.7)',
    zIndex: '0',
  },
  blueDotBg: {
    position: 'absolute',
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 114, 255, 0.5)',
    zIndex: '0',
  },
  headerContainer: {
    position: 'relative',
    marginBottom: '30px',
    zIndex: '2',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 80%, rgba(255,255,255,0) 100%)',
    padding: '20px 15px 30px 15px',
    borderRadius: '16px',
  },
  tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  tab: {
    minWidth: '180px !important',
    textTransform: 'none !important',
    fontWeight: 'bold !important',
    fontSize: '16px !important',
    padding: '12px 24px !important',
  },
  tabsRoot: {
    backgroundColor: 'rgba(255, 255, 255, 0.5) !important',
    borderRadius: '30px !important',
    padding: '4px !important',
    '& .MuiTabs-indicator': {
      backgroundColor: '#2A2B6A !important',
      height: '100% !important',
      borderRadius: '30px !important',
      zIndex: '0 !important',
    },
  },
  selectedTab: {
    color: 'white !important',
    zIndex: '1 !important',
  },
  tabPanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  }
});

// Function to generate random dots with position constraints
const generateDots = (count, avoidZone = null) => {
  const dots = [];
  const positions = new Set(); // To track existing positions
  
  // Define the region to avoid (header area)
  const avoidTop = avoidZone?.top || "0%";
  const avoidBottom = avoidZone?.bottom || "25%";
  const avoidLeft = avoidZone?.left || "15%";
  const avoidRight = avoidZone?.right || "85%";
  
  const topPixels = parseInt(avoidTop);
  const bottomPixels = parseInt(avoidBottom);
  const leftPixels = parseInt(avoidLeft);
  const rightPixels = parseInt(avoidRight);
  
  // Function to check if position is valid (not overlapping)
  const isValidPosition = (top, left, size) => {
    // Convert to numbers for comparison
    const topNum = parseInt(top);
    const leftNum = parseInt(left);
    const sizeNum = parseInt(size);
    
    // Check if it's in the avoid zone (header area)
    if (avoidZone && 
        topNum >= topPixels && 
        topNum <= bottomPixels && 
        leftNum >= leftPixels && 
        leftNum <= rightPixels) {
      return false;
    }
    
    // Check against existing positions
    for (const pos of positions) {
      const [existingTop, existingLeft, existingSize] = pos.split('|').map(p => parseInt(p));
      const minDistance = (sizeNum + parseInt(existingSize)) / 1.5;
      
      // Calculate distance between dots
      const distance = Math.sqrt(
        Math.pow(topNum - existingTop, 2) + 
        Math.pow(leftNum - existingLeft, 2)
      );
      
      // If dots are too close, reject this position
      if (distance < minDistance) {
        return false;
      }
    }
    
    return true;
  };
  
  for (let i = 0; i < count * 2; i++) { // Try more attempts to ensure we get enough dots
    if (dots.length >= count) break;
    
    const size = Math.random() * 18 + 10;
    const top = Math.random() * 95; // Keep within bounds
    const left = Math.random() * 95;
    
    if (isValidPosition(top, left, size)) {
      const position = `${top}|${left}|${size}`;
      positions.add(position);
      
      dots.push({
        top: `${top}%`,
        left: `${left}%`,
        size: `${size}px`,
        opacity: Math.random() * 0.2 + 0.5,
      });
    }
  }
  
  return dots;
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`plan-tabpanel-${index}`}
      aria-labelledby={`plan-tab-${index}`}
      className={classes.tabPanel}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

const TrainingPlanComponent = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  
  const pinkDots = generateDots(12, { top: "0%", bottom: "220px", left: "0%", right: "100%" });
  const blueDots = generateDots(10, { top: "0%", bottom: "220px", left: "0%", right: "100%" });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const fullstackWeeks = [
    {
      week: 'Week 1',
      role: 'Frontend Developer',
      description: 'Learn the basics of HTML, CSS, and JavaScript, explore UI/UX tools, and enhance communication with API training.',
      color: '#8a5cf7',
    },
    {
      week: 'Week 2',
      role: 'Backend Developer',
      description: 'Understand API development, databases, and server-side logic while gaining hands-on experience with industry tools.',
      color: '#4376eb',
    },
    {
      week: 'Week 3',
      role: 'Database Engineer & DevOps',
      description: 'Get familiar with SQL, MongoDB, cloud technologies, and CI/CD workflows, along with analytical skill-building.',
      color: '#f07c3e',
    },
    {
      week: 'Week 4',
      role: 'API Developer',
      description: 'Explore RESTful & GraphQL APIs using Postman and Swagger, with a focus on tool proficiency and technical interview preparation.',
      color: '#e8518d',
    },
  ];

  const dataScienceWeeks = [
    {
      week: 'Week 1',
      role: 'Data Analyst',
      description: 'Learn data cleaning, visualization, and analysis using Excel, SQL and Python, along with exploratory data analysis (EDA) and communication skills through GAI training.',
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
      
      {/* Random pink dots */}
      {pinkDots.map((dot, index) => (
        <Box 
          key={`pink-${index}`}
          className={classes.pinkDotBg}
          sx={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
          }}
        />
      ))}
      
      {/* Random blue dots */}
      {blueDots.map((dot, index) => (
        <Box 
          key={`blue-${index}`}
          className={classes.blueDotBg}
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
        <Box className={classes.pinkDot}></Box>
        <Typography variant="h4" className={classes.title}>
          1-Month Job-Specific Training Plan <span>{activeTab === 0 ? 'In Full Stack Development' : 'In Data Science'}</span>
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Each students selects one job role and receives both technical training and placement preparation
        </Typography>

        <Box className={classes.tabsContainer}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            className={classes.tabsRoot}
            variant="fullWidth"
          >
            <Tab 
              label="Full Stack Development" 
              className={classes.tab} 
              classes={{ selected: classes.selectedTab }}
            />
            <Tab 
              label="Data Science" 
              className={classes.tab} 
              classes={{ selected: classes.selectedTab }}
            />
          </Tabs>
        </Box>

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

      <TabPanel value={activeTab} index={0}>
        <Box className={classes.cardsContainer}>
          {fullstackWeeks.map((weekData, index) => (
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
      </TabPanel>

      <TabPanel value={activeTab} index={1}>
        <Box className={classes.cardsContainer}>
          {dataScienceWeeks.map((weekData, index) => (
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
      </TabPanel>

      <Button variant="outlined" className={classes.viewButton}>
        View full program details
      </Button>
    </Box>
  );
};

export default TrainingPlanComponent;