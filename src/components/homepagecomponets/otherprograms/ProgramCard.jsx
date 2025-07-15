import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardMedia, 
  Divider 
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LaunchIcon from '@mui/icons-material/Launch';
import EnhancedEngagementSection from './EnhancedEngagementSection';

const useStyles = makeStyles({
  cardWrapper: {
    width: '100%',
    display: 'flex',
    height: '100%',
  },
  card: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.03) !important',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px !important',
    overflow: 'hidden',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2) !important',
    transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.6s !important',
    padding: '0 !important',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 198, 20, 0.1) !important',
      '& $viewButton': {
        opacity: 1,
        transform: 'translateY(0)',
      },
      '& $cardMedia': {
        transform: 'scale(1.05)',
      },
      '& $hoverOverlay': {
        opacity: 1,
      },
    },
    "@media (max-width: 600px)": {
      borderRadius: '14px !important',
    },
  },
  cardMedia: {
    height: '160px',
    transition: 'transform 0.6s',
    objectFit: 'cover',
    objectPosition: 'center',
    "@media (max-width: 600px)": {
      height: '140px',
    },
  },
  hoverOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // background: 'linear-gradient(135deg, rgba(255, 198, 20, 0.9) 0%, rgba(42, 43, 106, 0.9) 100%)',
    opacity: 0,
    transition: 'opacity 0.6s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  },
  viewButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.95) !important',
    color: '#2A2B6A !important',
    borderRadius: '25px !important',
    padding: '8px 20px !important',
    fontWeight: '600 !important',
    fontSize: '0.9rem !important',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important',
    textTransform: 'none !important',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3) !important',
    '&:hover': {
      backgroundColor: '#ffffff !important',
      transform: 'translateY(0) scale(1.05) !important',
      boxShadow: '0 12px 25px rgba(0, 0, 0, 0.4) !important',
    },
    '& svg': {
      marginLeft: '4px',
      fontSize: '1rem',
    },
  },
  cardContent: {
    padding: '15px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 2,
    "@media (max-width: 600px)": {
      padding: '12px',
    },
  },
  programTitle: {
    fontSize: '1.1rem !important',
    fontWeight: '700 !important',
    color: '#ffffff !important',
    marginBottom: '8px !important',
    lineHeight: '1.3 !important',
    "@media (max-width: 600px)": {
      fontSize: '1rem !important',
      marginBottom: '6px !important',
    },
  },
  divider: {
    backgroundColor: 'rgba(255, 255, 255, 0.2) !important',
    margin: '8px 0 !important',
    "@media (max-width: 600px)": {
      margin: '6px 0 !important',
    },
  },
  featuresContainer: {
    marginBottom: '10px',
    flexGrow: 1,
    "@media (max-width: 600px)": {
      marginBottom: '8px',
    },
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '6px',
    "&:last-child": {
      marginBottom: '0',
    },
    "@media (max-width: 600px)": {
      marginBottom: '4px',
    },
  },
  featureText: {
    fontSize: '0.8rem !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    lineHeight: '1.4 !important',
    flexGrow: 1,
    "@media (max-width: 600px)": {
      fontSize: '0.75rem !important',
    },
  },
  engagementContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '8px',
    position: 'relative',
    zIndex: 2,
    "@media (max-width: 600px)": {
      marginTop: '6px',
    },
  },
  enrollButton: {
    background: 'linear-gradient(135deg, #FFC614 0%, #FFB300 100%) !important',
    color: '#2A2B6A !important',
    borderRadius: '20px !important',
    padding: '6px 16px !important',
    fontWeight: '600 !important',
    fontSize: '0.8rem !important',
    textTransform: 'none !important',
    boxShadow: '0 4px 15px rgba(255, 198, 20, 0.3) !important',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important',
    minWidth: 'auto !important',
    '&:hover': {
      background: 'linear-gradient(135deg, #FFB300 0%, #FFA000 100%) !important',
      transform: 'translateY(-2px) scale(1.02)',
      boxShadow: '0 6px 20px rgba(255, 198, 20, 0.4) !important',
    },
    '& .MuiButton-startIcon': {
      marginRight: '4px',
      '& svg': {
        fontSize: '1rem',
      },
    },
    "@media (max-width: 600px)": {
      fontSize: '0.75rem !important',
      padding: '5px 12px !important',
      borderRadius: '16px !important',
    },
  },
  enrollIcon: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#2A2B6A',
    animation: '$pulse 2s infinite',
    "@media (max-width: 600px)": {
      width: '6px',
      height: '6px',
    },
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
      opacity: 1,
    },
    '50%': {
      transform: 'scale(1.2)',
      opacity: 0.7,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1,
    },
  },
});

const ProgramCard = ({ 
  program, 
  onLoveClick, 
  onCommentClick, 
  onViewProgram,
  launchingSoon,
  onCardHover,
  onCardLeave,
  viewButtonTitle = "",
  loveButtonTitle = "",
  commentButtonTitle = ""
}) => {
  const classes = useStyles();

  // Only Master Internship (ids 5 and 6) are "Launching soon"
  const isLaunchingSoon = program.id === 5 || program.id === 6;

  const handleButtonClick = () => {
    if (!isLaunchingSoon) {
      onViewProgram(program.id);
    }
  };

  return (
    <Box 
      className={classes.cardWrapper}
      onMouseEnter={onCardHover}
      onMouseLeave={onCardLeave}
    >
      <Card className={classes.card} elevation={0}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            image={program.image}
            alt={program.title}
            className={classes.cardMedia}
          />
          <Box className={classes.hoverOverlay}>
            <Button 
              variant="contained" 
              className={classes.viewButton}
              endIcon={<LaunchIcon />}
              onClick={handleButtonClick}
              disabled={isLaunchingSoon}
              title={viewButtonTitle}
            >
              {isLaunchingSoon ? 'Launching soon' : 'View Details'}
            </Button>
          </Box>
        </Box>
        
        <Box className={classes.cardContent}>
          <Typography className={classes.programTitle}>
            {program.title}
          </Typography>
          
          <Divider className={classes.divider} />
          
          <Box className={classes.featuresContainer}>
            {program.features.map((feature, index) => (
              <Box key={index} className={classes.featureItem}>
                <Box 
                  component="span" 
                  sx={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    backgroundColor: '#FFC614',
                    display: 'inline-block',
                    marginRight: '12px',
                  }} 
                />
                <Typography className={classes.featureText}>
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>
          
          <EnhancedEngagementSection 
            onLoveClick={() => onLoveClick(program.id)}
            onCommentClick={() => onCommentClick(program.id)}
            loveButtonTitle={loveButtonTitle}
            commentButtonTitle={commentButtonTitle}
          />
          
          <Box className={classes.engagementContainer}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button
                variant="contained"
                className={classes.enrollButton}
                startIcon={<Box className={classes.enrollIcon} />}
                onClick={handleButtonClick}
                disabled={isLaunchingSoon}
                title={viewButtonTitle}
              >
                {isLaunchingSoon ? 'Launching soon' : 'view details'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ProgramCard;