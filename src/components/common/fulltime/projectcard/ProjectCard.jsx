// src/components/common/projectcard/ProjectCard.jsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  projectCard: {
    borderRadius: '18px !important',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    backgroundColor: '#ffffff',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    position: 'relative',
    height: '220px', // increased height
    minHeight: '280', // increased min-height
    overflow: 'hidden',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
  },
  iconBox: {
    position: 'absolute',
    top: '0px',
    right: '0px',
    width: '60px',
    height: '60px',
    borderRadius: '30px 2px 30px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    '& svg': {
      color: 'white',
      fontSize: '28px',
    },
  },
  titleBar: {
    position: 'absolute',
    bottom: '10px',
    padding: '6px 10px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '8px',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
  },
  titleText: {
    fontSize: '1.25rem !important', // slightly increased font size
    fontWeight: 'bold !important',
    color: '#2A3B6A !important',
  },
  contentSection: {
    padding: '15px 20px',
    flex: '1',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
  },
  featuresList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '5px',
    minHeight: '30px',
  },
  featureBadge: {
    display: 'flex',
    alignItems: 'center',
    padding: '6px 12px',
    backgroundColor: '#F5F7FF',
    borderRadius: '50px',
    border: '1px solid #E6E9F5',
    '& svg': {
      fontSize: '16px',
      marginRight: '6px',
      color: '#4463D7',
    },
  },
  featureText: {
    fontSize: '0.65rem !important',
    color: '#4463D7 !important',
    fontWeight: '500 !important',
  },
  descriptionText: {
    fontSize: '0.85rem !important',
    color: '#555 !important',
    marginTop: '5px !important',
    lineHeight: '1.5 !important',
  },
  skillsSection: {
    marginTop: 'auto',
    paddingTop: '10px',
    minHeight: '80px',
  },
  skillsTitle: {
    fontSize: '0.9rem !important',
    color: '#666 !important',
    fontWeight: '500 !important',
    marginBottom: '5px !important',
  },
  skillsTagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  skillTag: {
    padding: '4px 12px',
    borderRadius: '50px',
    backgroundColor: '#F2F9FF',
    border: '1px solid #E0F1FF',
    display: 'inline-block',
  },
  skillTagText: {
    fontSize: '0.65rem !important',
    color: '#4080CA !important',
    fontWeight: '500 !important',
  },
});

const ProjectCard = ({ image, icon, title, features, description, skills }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.projectCard} elevation={0}>
      <Box className={classes.imageContainer}>
        <img src={image} alt={title} className={classes.projectImage} />
        <Box className={classes.titleBar}>
          <Typography className={classes.titleText}>{title}</Typography>
        </Box>
        <Box className={classes.iconBox} style={{ background: icon.bgColor || 'linear-gradient(180deg, #8B5CF6 0%, #2A2B6A 100%)' }}>
          {icon.component}
        </Box>
      </Box>

      <Box className={classes.contentSection}>
        <Box className={classes.featuresList}>
          {features.map((feature, index) => (
            <Box key={index} className={classes.featureBadge}>
              {feature.icon}
              <Typography className={classes.featureText}>{feature.text}</Typography>
            </Box>
          ))}
        </Box>

        <Typography className={classes.descriptionText}>
          {description}
        </Typography>

        <Box className={classes.skillsSection}>
          <Typography className={classes.skillsTitle}>Skills gained:</Typography>
          <Box className={classes.skillsTagsContainer}>
            {skills.map((skill, index) => (
              <Box key={index} className={classes.skillTag}>
                <Typography className={classes.skillTagText}>{skill}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProjectCard;