// src/components/whydifferent/WhyDifferent.jsx
import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ReactComponent as Briefcase } from '../../assets/briefcase.svg';
import { ReactComponent as Calender } from '../../assets/calender.svg';
import { ReactComponent as Sheet } from '../../assets/sheet.svg';
import { ReactComponent as Graph } from '../../assets/graph.svg';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    background: 'linear-gradient(to bottom, #ffffff, #f0f8ff)',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    '& span': {
      color: '#FFC614 !important',
    },
  },
  boxesContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    gap: '20px',
    marginTop: '20px',
  },
  featureBox: {
    width: '25%',
    backgroundColor: '#ffffff',
    borderRadius: '12',
    padding: '30px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    height: '280px',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    justifyContent: 'flex-start',
    '& svg path': {
      fill: '#2A2B6A',
      transition: 'fill 0.3s ease',
    },
    
  },
  activeFeatureBox: {
    backgroundColor: '#2A2B6A',
    '& $featureTitle': {
      color: '#ffffff !important',
    },
    '& $featureDescription': {
      color: '#ffffff !important',
    },
    '& $arrowIcon': {
      color: '#ffffff !important',
    },
    '& svg path': {
      fill: '#ffffff',
    }
  },
  icon: {
    fontSize: '50px !important',
    marginBottom: '20px',
    transition: 'all 0.3s ease',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  featureTitle: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    transition: 'all 0.3s ease',
    // minHeight: '48px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  featureDescription: {
    fontSize: '0.95rem !important',
    color: '#6A6B6C !important',
    lineHeight: '1.6 !important',
    transition: 'all 0.3s ease',
    padding: '0 10px',
    minHeight: '120px',
    display:"none",
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlign: 'center',
    '&:hover': {
      display: 'flex',

    }
  },
  arrowContainer: {
    position: 'absolute',
    bottom: '20px',
    left: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  arrowIcon: {
    color: '#2A2B6A',
    fontSize: '18px !important',
    transition: 'all 0.3s ease',
  }
});

const WhyDifferent = () => {
  const classes = useStyles();
  const [activeBox, setActiveBox] = useState(1); // Default second box active

  const features = [
    {
      id: 0,
      icon: <Briefcase className={classes.icon} />,
      title: "Job-First Approach",
      description: "Our curriculum is built on real-world job requirements, teaching exactly what employers need."
    },
    {
      id: 1,
      icon: <Calender className={classes.icon} />,
      title: "Weekly Role Rotation",
      description: "Explore different domain specializations weekly to expand your job opportunities."
    },
    {
      id: 2,
      icon: <Sheet className={classes.icon} />,
      title: "Instant Coding Setup ",
      description: "AI-powered coding environments let you start instantly—no setup required."
    },
    {
      id: 3,
      icon: <Graph className={classes.icon} />,
      title: "Hands-On Projects",
      description: "Build a strong portfolio with 10+ real-world projects that impress employers."
    }
  ];

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Box className={classes.titleContainer}>
          <Typography variant="h3" className={classes.title}>
            Why Gigaversity <span>Is Different</span>
          </Typography>
        </Box>

        <Box className={classes.boxesContainer}>
          {features.map((feature) => (
            <Box
              key={feature.id}
              className={`${classes.featureBox} ${activeBox === feature.id ? classes.activeFeatureBox : ''}`}
              onMouseEnter={() => setActiveBox(feature.id)}
            >
              {feature.icon}
              <Typography className={classes.featureTitle}>
                {feature.title}
              </Typography>
              <Typography className={classes.featureDescription}>
                {feature.description}
              </Typography>
              <Box className={classes.arrowContainer}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <ArrowForwardIosIcon className={classes.arrowIcon} />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyDifferent;