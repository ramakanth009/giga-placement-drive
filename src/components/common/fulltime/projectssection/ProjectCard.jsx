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
    '@media (max-width: 1200px)': {
      borderRadius: '16px !important',
    },
    '@media (max-width: 960px)': {
      borderRadius: '14px !important',
    },
    '@media (max-width: 600px)': {
      borderRadius: '12px !important',
    },
    '@media (max-width: 480px)': {
      borderRadius: '10px !important',
    },
    '@media (max-width: 375px)': {
      borderRadius: '8px !important',
    },
  },
  imageContainer: {
    position: 'relative',
    height: '220px',
    minHeight: '220px',
    overflow: 'hidden',
    '@media (max-width: 1200px)': {
      height: '210px',
      minHeight: '210px',
    },
    '@media (max-width: 960px)': {
      height: '200px',
      minHeight: '200px',
    },
    '@media (max-width: 600px)': {
      height: '190px',
      minHeight: '190px',
    },
    '@media (max-width: 480px)': {
      height: '180px',
      minHeight: '180px',
    },
    '@media (max-width: 375px)': {
      height: '170px',
      minHeight: '170px',
    },
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
    '@media (max-width: 1200px)': {
      width: '55px',
      height: '55px',
      '& svg': {
        fontSize: '26px',
      },
    },
    '@media (max-width: 960px)': {
      width: '50px',
      height: '50px',
      '& svg': {
        fontSize: '24px',
      },
    },
    '@media (max-width: 600px)': {
      width: '45px',
      height: '45px',
      '& svg': {
        fontSize: '22px',
      },
    },
    '@media (max-width: 480px)': {
      width: '40px',
      height: '40px',
      '& svg': {
        fontSize: '20px',
      },
    },
    '@media (max-width: 375px)': {
      width: '35px',
      height: '35px',
      '& svg': {
        fontSize: '18px',
      },
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
    '@media (max-width: 1200px)': {
      bottom: '9px',
      padding: '5px 9px',
      borderRadius: '7px',
    },
    '@media (max-width: 960px)': {
      bottom: '8px',
      padding: '5px 8px',
      borderRadius: '6px',
    },
    '@media (max-width: 600px)': {
      bottom: '7px',
      padding: '4px 7px',
      borderRadius: '5px',
    },
    '@media (max-width: 480px)': {
      bottom: '6px',
      padding: '4px 6px',
      borderRadius: '4px',
    },
    '@media (max-width: 375px)': {
      bottom: '5px',
      padding: '3px 5px',
      borderRadius: '3px',
    },
  },
  titleText: {
    fontSize: '1.25rem !important',
    fontWeight: 'bold !important',
    color: '#2A3B6A !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.2rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.15rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1rem !important',
    },
  },
  contentSection: {
    padding: '15px 20px',
    flex: '1',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 1200px)': {
      padding: '14px 18px',
      minHeight: '190px',
    },
    '@media (max-width: 960px)': {
      padding: '13px 16px',
      minHeight: '180px',
    },
    '@media (max-width: 600px)': {
      padding: '12px 15px',
      minHeight: '170px',
    },
    '@media (max-width: 480px)': {
      padding: '10px 12px',
      minHeight: '160px',
    },
    '@media (max-width: 375px)': {
      padding: '8px 10px',
      minHeight: '150px',
    },
  },
  featuresList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '5px',
    minHeight: '30px',
    '@media (max-width: 1200px)': {
      gap: '9px',
      marginBottom: '4px',
    },
    '@media (max-width: 960px)': {
      gap: '8px',
      marginBottom: '4px',
    },
    '@media (max-width: 600px)': {
      gap: '7px',
      marginBottom: '3px',
    },
    '@media (max-width: 480px)': {
      gap: '6px',
      marginBottom: '3px',
    },
    '@media (max-width: 375px)': {
      gap: '5px',
      marginBottom: '2px',
    },
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
    '@media (max-width: 1200px)': {
      padding: '5px 10px',
      '& svg': {
        fontSize: '15px',
        marginRight: '5px',
      },
    },
    '@media (max-width: 960px)': {
      padding: '5px 9px',
      '& svg': {
        fontSize: '14px',
        marginRight: '4px',
      },
    },
    '@media (max-width: 600px)': {
      padding: '4px 8px',
      '& svg': {
        fontSize: '13px',
        marginRight: '4px',
      },
    },
    '@media (max-width: 480px)': {
      padding: '3px 7px',
      '& svg': {
        fontSize: '12px',
        marginRight: '3px',
      },
    },
    '@media (max-width: 375px)': {
      padding: '3px 6px',
      '& svg': {
        fontSize: '11px',
        marginRight: '3px',
      },
    },
  },
  featureText: {
    fontSize: '0.65rem !important',
    color: '#4463D7 !important',
    fontWeight: '500 !important',
    '@media (max-width: 960px)': {
      fontSize: '0.6rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.55rem !important',
    },
  },
  descriptionText: {
    fontSize: '0.85rem !important',
    color: '#555 !important',
    marginTop: '5px !important',
    lineHeight: '1.5 !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.75rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.65rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.6rem !important',
    },
  },
  skillsSection: {
    marginTop: 'auto',
    paddingTop: '10px',
    minHeight: '80px',
    '@media (max-width: 1200px)': {
      paddingTop: '9px',
      minHeight: '75px',
    },
    '@media (max-width: 960px)': {
      paddingTop: '8px',
      minHeight: '70px',
    },
    '@media (max-width: 600px)': {
      paddingTop: '7px',
      minHeight: '65px',
    },
    '@media (max-width: 480px)': {
      paddingTop: '6px',
      minHeight: '60px',
    },
    '@media (max-width: 375px)': {
      paddingTop: '5px',
      minHeight: '55px',
    },
  },
  skillsTitle: {
    fontSize: '0.9rem !important',
    color: '#666 !important',
    fontWeight: '500 !important',
    marginBottom: '5px !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.8rem !important',
      marginBottom: '4px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.75rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.7rem !important',
      marginBottom: '3px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.65rem !important',
    },
  },
  skillsTagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    '@media (max-width: 1200px)': {
      gap: '7px',
    },
    '@media (max-width: 960px)': {
      gap: '6px',
    },
    '@media (max-width: 600px)': {
      gap: '5px',
    },
    '@media (max-width: 480px)': {
      gap: '4px',
    },
    '@media (max-width: 375px)': {
      gap: '3px',
    },
  },
  skillTag: {
    padding: '4px 12px',
    borderRadius: '50px',
    backgroundColor: '#F2F9FF',
    border: '1px solid #E0F1FF',
    display: 'inline-block',
    '@media (max-width: 1200px)': {
      padding: '4px 10px',
    },
    '@media (max-width: 960px)': {
      padding: '3px 9px',
    },
    '@media (max-width: 600px)': {
      padding: '3px 8px',
    },
    '@media (max-width: 480px)': {
      padding: '2px 7px',
    },
    '@media (max-width: 375px)': {
      padding: '2px 6px',
    },
  },
  skillTagText: {
    fontSize: '0.65rem !important',
    color: '#4080CA !important',
    fontWeight: '500 !important',
    '@media (max-width: 960px)': {
      fontSize: '0.6rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.55rem !important',
    },
  },
});

const ProjectCard = ({ image, icon, title, features, description, skills }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.projectCard} elevation={0}>
      <Box className={classes.imageContainer}>
        <img src={image} alt={title} className={classes.projectImage} />
        <Box className={classes.titleBar}>
          <Typography variant="h3" className={classes.titleText}>{title}</Typography>
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