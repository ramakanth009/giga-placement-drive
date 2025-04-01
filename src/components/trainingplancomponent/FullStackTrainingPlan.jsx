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
    "@media (max-width: 960px)": {
      padding: '25px 0',
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
    fontSize: "2.5rem !important",
    fontWeight: 'bold !important',
    textAlign: 'center',
    marginBottom: '8px !important',
    color: "#2A2B6A !important",
    position: 'relative',
    zIndex: '2',
    '& span': {
      color: '#f9c74f !important',
    },
    "@media (max-width: 960px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem !important",
    },
  },
  subtitle: {
    fontSize: '1.2rem !important',
    textAlign: 'center',
    color: '#555 !important',
    marginBottom: '32px !important',
    maxWidth: '90%',
    margin: '0 auto 32px auto !important',
    position: 'relative',
    zIndex: '2',
    "@media (max-width: 960px)": {
      fontSize: '1.1rem !important',
      marginBottom: '25px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1rem !important',
      marginBottom: '20px !important',
      maxWidth: '95%',
    },
  },
  weekTitle: {
    fontSize: '1rem !important',
    fontWeight: '500 !important',
    marginBottom: '4px !important',
  },
  roleName: {
    fontSize: '15px !important',
    fontWeight: 'bold !important',
    marginBottom: '8px !important',
    "@media (max-width: 600px)": {
      fontSize: '14px !important',
    },
  },
  description: {
    fontSize: '12px !important',
    color: '#555 !important',
    lineHeight: '1.4 !important',
    "@media (max-width: 600px)": {
      fontSize: '11px !important',
    },
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
    "@media (max-width: 960px)": {
      height: '220px',
      padding: '14px',
    },
    "@media (max-width: 600px)": {
      height: '210px',
      padding: '12px',
    },
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
    "@media (max-width: 1200px)": {
      gap: '40px',
    },
    "@media (max-width: 960px)": {
      gap: '30px',
      padding: '0 15px',
    },
    "@media (max-width: 600px)": {
      gap: '20px',
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
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    "@media (max-width: 600px)": {
      width: '35px',
      height: '35px',
      marginBottom: '12px',
    },
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
    "@media (max-width: 600px)": {
      marginTop: '12px !important',
      padding: '5px 14px !important',
      fontSize: '0.9rem !important',
    },
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
    "@media (max-width: 600px)": {
      fontSize: '11px !important',
      marginBottom: '6px !important',
    },
  },
  headerContainer: {
    position: 'relative',
    marginBottom: '40px',
    zIndex: '1',
    "@media (max-width: 960px)": {
      marginBottom: '30px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '25px',
    },
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
    "@media (max-width: 960px)": {
      top: '25px',
      left: '25px',
      height: '10px',
      width: '10px',
    },
    "@media (max-width: 600px)": {
      top: '20px',
      left: '20px',
      height: '8px',
      width: '8px',
    },
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
    "@media (max-width: 960px)": {
      height: '110px',
    },
    "@media (max-width: 600px)": {
      height: '90px',
      width: '90%',
    },
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

const FullStackTrainingPlan = () => {
  const classes = useStyles();
  
  // Generate dots with a sectioned approach to avoid overlaps
  const pinkDots = generateSectionedDots(12, 'pink', true);
  const purpleDots = generateSectionedDots(10, 'purple', true);

  const weeks = [
    {
      week: 'Week 1',
      role: 'Frontend Developer',
      description: 'Learn the basics of HTML, CSS, and JavaScript, explore UI/UX tools, and enhance communication with CRT training.',
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
            display: { xs: index % 2 === 0 ? 'none' : 'block', md: 'block' },
          }}
        />
      ))}

      <Box className={classes.headerContainer}>
        <Box className={classes.orangeDot}></Box>
        <Typography variant="h4" className={classes.title}>
          1-Month Job-Specific Training Plan <span>In Full Stack</span>
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Each student selects one job role and receives both technical training and placement preparation
        </Typography>

        <Typography variant="h6" sx={{ 
          textAlign: 'center', 
          fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' }, 
          fontWeight: 'bold', 
          color: '#333',
          marginBottom: { xs: '20px', sm: '22px', md: '24px' },
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
                <CalendarMonthIcon sx={{ color: weekData.color, fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' } }} />
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

export default FullStackTrainingPlan;