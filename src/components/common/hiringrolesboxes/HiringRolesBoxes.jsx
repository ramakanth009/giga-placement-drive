// src/components/common/hiringrolesboxes/HiringRolesBoxes.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const useStyles = makeStyles({
  section: {
    padding: '80px 40px',
    background: props => props.backgroundGradient || 'linear-gradient(to bottom, #f6f9fd, #ffffff)',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 1200px)': {
      padding: '70px 35px',
    },
    '@media (max-width: 960px)': {
      padding: '60px 30px',
    },
    '@media (max-width: 600px)': {
      padding: '50px 20px',
    },
    '@media (max-width: 480px)': {
      padding: '40px 15px',
    },
    '@media (max-width: 375px)': {
      padding: '30px 10px',
    },
  },
  decorativeShape: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: props => props.decorativeShapeGradient || 'radial-gradient(circle, rgba(42, 43, 106, 0.05) 0%, rgba(42, 43, 106, 0) 70%)',
    zIndex: 1,
    '@media (max-width: 1200px)': {
      width: '350px',
      height: '350px',
    },
    '@media (max-width: 960px)': {
      width: '300px',
      height: '300px',
    },
    '@media (max-width: 600px)': {
      width: '250px',
      height: '250px',
    },
    '@media (max-width: 480px)': {
      width: '200px',
      height: '200px',
    },
    '@media (max-width: 375px)': {
      width: '150px',
      height: '150px',
    },
  },
  decorativeShapeTop: {
    top: '-200px',
    right: '-100px',
    '@media (max-width: 960px)': {
      top: '-150px',
      right: '-80px',
    },
    '@media (max-width: 600px)': {
      top: '-120px',
      right: '-60px',
    },
    '@media (max-width: 480px)': {
      top: '-100px',
      right: '-50px',
    },
    '@media (max-width: 375px)': {
      top: '-75px',
      right: '-40px',
    },
  },
  decorativeShapeBottom: {
    bottom: '-200px',
    left: '-100px',
    background: props => props.decorativeShapeBottomGradient || 'radial-gradient(circle, rgba(255, 198, 20, 0.05) 0%, rgba(255, 198, 20, 0) 70%)',
    '@media (max-width: 960px)': {
      bottom: '-150px',
      left: '-80px',
    },
    '@media (max-width: 600px)': {
      bottom: '-120px',
      left: '-60px',
    },
    '@media (max-width: 480px)': {
      bottom: '-100px',
      left: '-50px',
    },
    '@media (max-width: 375px)': {
      bottom: '-75px',
      left: '-40px',
    },
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
    '@media (max-width: 1200px)': {
      marginBottom: '45px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '40px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '35px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '25px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '16px !important',
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
      marginBottom: '14px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.1rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.4rem !important',
      marginBottom: '6px !important',
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
    '@media (max-width: 1200px)': {
      fontSize: '1.05rem !important',
      maxWidth: '800px',
      lineHeight: '1.7 !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '750px',
      lineHeight: '1.6 !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
      maxWidth: '90%',
      lineHeight: '1.5 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      lineHeight: '1.4 !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      lineHeight: '1.3 !important',
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
      gap: '25px',
    },
    '@media (max-width: 960px)': {
      gap: '20px',
    },
    '@media (max-width: 600px)': {
      gap: '15px',
    },
    '@media (max-width: 480px)': {
      gap: '12px',
    },
    '@media (max-width: 375px)': {
      gap: '10px',
    },
  },
  roleBox: {
    width: 'calc(25% - 23px)',
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
      width: 'calc(33.33% - 17px)',
      minHeight: '300px',
      padding: '25px 20px',
      borderRadius: '18px !important',
    },
    '@media (max-width: 960px)': {
      width: 'calc(50% - 10px)',
      minHeight: '280px',
      padding: '22px 18px',
      borderRadius: '16px !important',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      minHeight: 'auto',
      padding: '20px 15px',
      borderRadius: '14px !important',
    },
    '@media (max-width: 480px)': {
      padding: '18px 12px',
      borderRadius: '12px !important',
    },
    '@media (max-width: 375px)': {
      padding: '15px 10px',
      borderRadius: '10px !important',
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
    '@media (max-width: 1200px)': {
      width: '55px',
      height: '55px',
      marginBottom: '18px',
      '& svg': {
        fontSize: '26px',
      },
    },
    '@media (max-width: 960px)': {
      width: '50px',
      height: '50px',
      marginBottom: '16px',
      boxShadow: '0 4px 12px rgba(42, 43, 106, 0.3)',
      '& svg': {
        fontSize: '24px',
      },
    },
    '@media (max-width: 600px)': {
      width: '45px',
      height: '45px',
      marginBottom: '14px',
      boxShadow: '0 3px 10px rgba(42, 43, 106, 0.3)',
      '& svg': {
        fontSize: '22px',
      },
    },
    '@media (max-width: 480px)': {
      width: '40px',
      height: '40px',
      marginBottom: '12px',
      boxShadow: '0 3px 8px rgba(42, 43, 106, 0.3)',
      '& svg': {
        fontSize: '20px',
      },
    },
    '@media (max-width: 375px)': {
      width: '35px',
      height: '35px',
      marginBottom: '10px',
      boxShadow: '0 2px 6px rgba(42, 43, 106, 0.3)',
      '& svg': {
        fontSize: '18px',
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
    '@media (max-width: 1200px)': {
      fontSize: '1.15rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
      marginBottom: '16px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.05rem !important',
      marginBottom: '14px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.95rem !important',
      marginBottom: '10px !important',
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
    '@media (max-width: 1200px)': {
      gap: '7px',
      marginTop: '9px',
    },
    '@media (max-width: 960px)': {
      gap: '6px',
      marginTop: '8px',
    },
    '@media (max-width: 600px)': {
      gap: '5px',
      marginTop: '7px',
      opacity: 1,
      transform: 'none',
    },
    '@media (max-width: 480px)': {
      gap: '4px',
      marginTop: '6px',
    },
    '@media (max-width: 375px)': {
      gap: '3px',
      marginTop: '5px',
    },
  },
  pointItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    textAlign: 'left',
    '@media (max-width: 1200px)': {
      gap: '9px',
    },
    '@media (max-width: 960px)': {
      gap: '8px',
    },
    '@media (max-width: 600px)': {
      gap: '7px',
    },
    '@media (max-width: 480px)': {
      gap: '6px',
    },
    '@media (max-width: 375px)': {
      gap: '5px',
    },
  },
  pointIcon: {
    color: '#2A2B6A',
    fontSize: '16px !important',
    marginTop: '3px',
    '@media (max-width: 1200px)': {
      fontSize: '15px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '14px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '13px !important',
      marginTop: '2px',
    },
    '@media (max-width: 480px)': {
      fontSize: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '11px !important',
      marginTop: '1px',
    },
  },
  pointText: {
    fontSize: '0.9rem !important',
    lineHeight: '1.4 !important',
    color: '#4A4A4A !important',
    textAlign: 'left !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.88rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.83rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem !important',
      lineHeight: '1.3 !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem !important',
      lineHeight: '1.2 !important',
    },
  },
  decorativeDots: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    backgroundImage: 'radial-gradient(#2A2B6A 2px, transparent 2px)',
    backgroundSize: '20px 20px',
    opacity: 0.1,
    zIndex: 1,
    '@media (max-width: 1200px)': {
      width: '180px',
      height: '180px',
      backgroundSize: '18px 18px',
    },
    '@media (max-width: 960px)': {
      width: '160px',
      height: '160px',
      backgroundSize: '16px 16px',
    },
    '@media (max-width: 600px)': {
      width: '140px',
      height: '140px',
      backgroundSize: '14px 14px',
    },
    '@media (max-width: 480px)': {
      width: '120px',
      height: '120px',
      backgroundSize: '12px 12px',
    },
    '@media (max-width: 375px)': {
      width: '100px',
      height: '100px',
      backgroundSize: '10px 10px',
    },
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
  const [visibleRoles, setVisibleRoles] = useState([]);

  // Add scroll animation for roles
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleRoles(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const roleElements = document.querySelectorAll(`.${classes.roleBox}`);
    roleElements.forEach((el, index) => {
      el.dataset.index = index;
      observer.observe(el);
    });

    return () => {
      roleElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, [classes.roleBox]);

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
              className={`${classes.roleBox} ${classes.fadeIn} ${visibleRoles.includes(index) ? classes.visible : ''}`}
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