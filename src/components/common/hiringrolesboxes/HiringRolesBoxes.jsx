// src/components/common/hiringrolesboxes/HiringRolesBoxes.jsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const useStyles = makeStyles({
  section: {
    padding: '20px 40px',
    background: props => props.backgroundGradient || 'linear-gradient(to bottom, #f6f9fd, #ffffff)',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 768px)': {
      padding: '60px 20px',
    },
  },
  decorativeShape: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: props => props.decorativeShapeGradient || 'radial-gradient(circle, rgba(42, 43, 106, 0.05) 0%, rgba(42, 43, 106, 0) 70%)',
    zIndex: 1,
  },
  decorativeShapeTop: {
    top: '-200px',
    right: '-100px',
  },
  decorativeShapeBottom: {
    bottom: '-200px',
    left: '-100px',
    background: props => props.decorativeShapeBottomGradient || 'radial-gradient(circle, rgba(255, 198, 20, 0.05) 0%, rgba(255, 198, 20, 0) 70%)',
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1360px',
    margin: '0 auto',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '50px',
    position: 'relative',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '16px !important',
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
  },
  highlightText: {
    color: '#FFC614 !important',
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#666666 !important',
    maxWidth: '850px',
    margin: '0 auto !important',
    lineHeight: '1.8 !important',
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '95%',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    },
  },
  highlight: {
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
  },
  rolesWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    width: '100%',
    '@media (max-width: 1200px)': {
      gap: '20px',
    },
    '@media (max-width: 600px)': {
      gap: '15px',
    },
  },
  roleBox: {
    width: 'calc(25% - 23px)', // 4 cards per row with gap compensation
    minHeight: '320px',
    borderRadius: '20px !important',
    background: 'white',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 25px',
    transform: 'translateY(0)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    border: '2px solid rgba(0, 0, 0, 0.05)',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 1200px)': {
      width: 'calc(25% - 15px)', // Adjusted for smaller gap
      padding: '25px 20px',
    },
    '@media (max-width: 960px)': {
      width: 'calc(25% - 12px)', // Further adjusted for even smaller gap
      padding: '20px 15px',
    },
    '@media (max-width: 600px)': {
      width: 'calc(25% - 12px)',
      padding: '15px 10px',
      '& $roleTitle': {
        fontSize: '0.9rem !important',
      },
      '& $pointText': {
        fontSize: '0.8rem !important',
      },
    },
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
      '& $iconContainer': {
        transform: 'scale(1.05)',
      },
      '& $pointsContainer': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  },
  iconContainer: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: props => props.iconContainerBgColor || '#2A2B6A',
    background: props => props.iconContainerGradient || undefined,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    transition: 'all 0.4s ease',
    boxShadow: '0 5px 15px rgba(42, 43, 106, 0.3)',
    position: 'relative',
    alignSelf: 'center',
    '& svg': {
      color: 'white !important',
      fontSize: '28px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '@media (max-width: 600px)': {
      width: '50px',
      height: '50px',
      marginBottom: '15px',
      '& svg': {
        fontSize: '24px',
      },
    },
  },
  roleTitle: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#333 !important',
    textAlign: 'center !important',
    lineHeight: '1.3 !important',
    transition: 'color 0.3s ease',
    marginBottom: '20px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
  },
  pointsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: '10px',
    opacity: 0.9,
    transform: 'translateY(5px)',
    transition: 'opacity 0.4s ease, transform 0.4s ease',
  },
  pointItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    textAlign: 'left',
  },
  pointIcon: {
    color: '#2A2B6A',
    fontSize: '16px !important',
    marginTop: '3px',
  },
  pointText: {
    fontSize: '0.9rem !important',
    lineHeight: '1.4 !important',
    color: '#4A4A4A !important',
    textAlign: 'left !important',
  },
  decorativeDots: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    backgroundImage: 'radial-gradient(#2A2B6A 2px, transparent 2px)',
    backgroundSize: '20px 20px',
    opacity: 0.1,
    zIndex: 1,
  },
  dotsTopRight: {
    top: '10%',
    right: '5%',
  },
  dotsBottomLeft: {
    bottom: '10%',
    left: '5%',
  },
  fadeIn: {
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const HiringRolesBoxes = ({
  title,
  subtitle,
  highlightedText,
  roles,
  backgroundGradient,
  decorativeShapeGradient,
  decorativeShapeBottomGradient,
  iconContainerBgColor,
  iconContainerGradient
}) => {
  const styleProps = { 
    backgroundGradient, 
    decorativeShapeGradient, 
    decorativeShapeBottomGradient,
    iconContainerBgColor,
    iconContainerGradient
  };
  const classes = useStyles(styleProps);

  return (
    <Box className={classes.section}>
      {/* Decorative elements */}
      <Box className={`${classes.decorativeShape} ${classes.decorativeShapeTop}`} />
      <Box className={`${classes.decorativeShape} ${classes.decorativeShapeBottom}`} />
      <Box className={`${classes.decorativeDots} ${classes.dotsTopRight}`} />
      <Box className={`${classes.decorativeDots} ${classes.dotsBottomLeft}`} />

      <Box className={classes.contentWrapper}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            {title} <span className={classes.highlightText}>{highlightedText}</span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            In Just 30 Days, Launch Your Career In One Of Today's Most {subtitle} Fields. Our {subtitle} 
            Program Connects You Directly With Hiring Partners Looking For Fresh Talent – All For 
            Less Than <span className={classes.highlight}>Your Monthly Data Pack</span>.
          </Typography>
        </Box>

        <Box className={classes.rolesWrapper}>
          {roles.map((role, index) => (
            <Paper 
              key={index}
              className={classes.roleBox}
              elevation={0}
              sx={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Box className={classes.iconContainer}>
                {role.icon}
              </Box>
              <Typography className={classes.roleTitle}>
                {role.title}
              </Typography>
              
              {/* Check if role has points and render them */}
              {role.points && (
                <Box className={classes.pointsContainer}>
                  {role.points.map((point, idx) => (
                    <Box key={idx} className={classes.pointItem}>
                      <TaskAltIcon className={classes.pointIcon} />
                      <Typography className={classes.pointText}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HiringRolesBoxes;