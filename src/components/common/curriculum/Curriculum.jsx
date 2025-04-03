// src/components/common/curriculum/Curriculum.jsx
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  curriculumSection: {
    padding: '50px 0',
    width: '100%',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '8px !important',
    '& span': {
      color: '#FFC614 !important',
    },
  },
  weekItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateX(5px)',
    },
  },
  weekBox: {
    backgroundColor: '#06183D',
    color: 'white',
    borderRadius: '6px',
    padding: '14px 20px',
    fontWeight: 'bold',
    fontSize: '1rem',
    width: '100%',
    marginBottom: '8px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#1b2d57',
    },
  },
  activeWeekBox: {
    backgroundColor: '#06183D',
  },
  inactiveWeekBox: {
    backgroundColor: 'white',
    color: '#555',
    border: '1px solid #ddd',
  },
  skillItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  skillIcon: {
    color: '#FFC614',
    marginRight: '16px',
    fontSize: '16px',
  },
  skillText: {
    fontSize: '1rem',
    color: '#555',
    fontWeight: '500',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
    },
  },
  weeksColumn: {
    flex: '0 0 35%',
    '@media (max-width: 960px)': {
      flex: '0 0 100%',
      marginBottom: '30px',
    },
  },
  skillsColumn: {
    flex: '0 0 65%',
    paddingLeft: '40px',
    '@media (max-width: 960px)': {
      flex: '0 0 100%',
      paddingLeft: '0',
    },
  },
});

const Curriculum = ({ title, weeks, skills }) => {
  const classes = useStyles();
  const [activeWeek, setActiveWeek] = React.useState(0);

  const handleWeekClick = (index) => {
    setActiveWeek(index);
  };

  return (
    <Box className={classes.curriculumSection}>
      <Container maxWidth="lg">
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            {title}
          </Typography>
        </Box>

        <Box className={classes.contentContainer}>
          {/* Weeks Column */}
          <Box className={classes.weeksColumn}>
            {weeks.map((week, index) => (
              <Box 
                key={index} 
                className={classes.weekItem} 
                onClick={() => handleWeekClick(index)}
              >
                <Box 
                  className={`${classes.weekBox} ${activeWeek === index ? classes.activeWeekBox : classes.inactiveWeekBox}`}
                >
                  {week}
                </Box>
              </Box>
            ))}
          </Box>

          {/* Skills Column */}
          <Box className={classes.skillsColumn}>
            {skills[activeWeek].map((skill, index) => (
              <Box key={index} className={classes.skillItem}>
                <Typography variant="body1" className={classes.skillText} sx={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ 
                    color: '#FFC614', 
                    marginRight: '16px', 
                    fontSize: '24px',
                    lineHeight: 1 
                  }}>✦</span>
                  {skill}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Curriculum;