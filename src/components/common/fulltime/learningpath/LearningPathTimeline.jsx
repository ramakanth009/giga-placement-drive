// src/components/common/fulltime/learningpath/LearningPathTimeline.jsx
import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Chip, Divider, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';

const useStyles = makeStyles({
  timelineContainer: {
    padding: '40px 20px',
    position: 'relative',
    '@media (max-width: 960px)': {
      padding: '30px 15px',
    },
    '@media (max-width: 600px)': {
      padding: '20px 10px',
    },
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    position: 'relative',
    '@media (max-width: 600px)': {
      marginBottom: '30px',
    },
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
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#555 !important',
    maxWidth: '800px',
    margin: '0 auto !important',
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  statsBadge: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '8px 16px !important',
    margin: '20px auto 0 !important',
    display: 'inline-block !important',
    borderRadius: '20px !important',
    '& span': {
      color: '#FFC614 !important',
      fontWeight: 'bold !important',
    },
  },
  phaseNav: {
    display: 'flex',
    overflowX: 'auto',
    marginBottom: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    '&::-webkit-scrollbar': {
      height: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#e0e0e0',
      borderRadius: '6px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '30px',
    },
  },
  phaseButton: {
    flex: '1',
    padding: '20px 15px !important',
    borderRadius: '0 !important',
    minWidth: '180px !important',
    textTransform: 'none !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: 'rgba(42, 43, 106, 0.05) !important',
    },
    '@media (max-width: 960px)': {
      padding: '15px 12px !important',
      minWidth: '150px !important',
    },
    '@media (max-width: 600px)': {
      padding: '12px 10px !important',
      minWidth: '130px !important',
    },
  },
  activePhaseButton: {
    borderBottom: '3px solid #2A2B6A !important',
    backgroundColor: 'rgba(42, 43, 106, 0.05) !important',
  },
  phaseIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginBottom: '10px',
    backgroundColor: 'rgba(42, 43, 106, 0.1)',
    margin: '0 auto 10px auto',
    '@media (max-width: 960px)': {
      width: '40px',
      height: '40px',
    },
    '@media (max-width: 600px)': {
      width: '36px',
      height: '36px',
    },
  },
  phaseContent: {
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 960px)': {
      padding: '25px',
    },
    '@media (max-width: 600px)': {
      padding: '20px',
    },
  },
  phaseHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '15px',
    },
  },
  phaseIconLarge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70px',
    height: '70px',
    borderRadius: '14px',
    marginRight: '20px',
    backgroundColor: '#2A2B6A',
    color: 'white',
    '@media (max-width: 960px)': {
      width: '60px',
      height: '60px',
      marginRight: '15px',
    },
    '@media (max-width: 600px)': {
      width: '50px',
      height: '50px',
      marginRight: '0',
    },
  },
  phaseTitleWrapper: {
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
  phaseTitle: {
    fontSize: '2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '5px !important',
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.5rem !important',
    },
  },
  phaseTagline: {
    fontSize: '1.2rem !important',
    color: '#666 !important',
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  phaseDescription: {
    fontSize: '1.1rem !important',
    color: '#444 !important',
    marginBottom: '30px !important',
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
      marginBottom: '25px !important',
    },
  },
  sectionTitle: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    paddingBottom: '10px',
    borderBottom: '1px solid #e0e0e0',
    '@media (max-width: 960px)': {
      fontSize: '1.3rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
      marginBottom: '16px !important',
    },
  },
  activityCard: {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e0e0e0',
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
      borderColor: '#2A2B6A',
    },
    '@media (max-width: 960px)': {
      padding: '18px',
    },
    '@media (max-width: 600px)': {
      padding: '15px',
    },
  },
  activityIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    backgroundColor: 'rgba(42, 43, 106, 0.1)',
    color: '#2A2B6A',
    marginRight: '15px',
    marginBottom: '0',
    '@media (max-width: 960px)': {
      width: '45px',
      height: '45px',
      minHeight: '45px',
    },
    '@media (max-width: 600px)': {
      width: '40px',
      height: '40px',
      minHeight: '40px',
    },
  },
  activityTitle: {
    fontSize: '1.1rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    flex: 1,
    marginBottom: '10px !important',
    '@media (max-width: 960px)': {
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  activityDescription: {
    fontSize: '0.95rem !important',
    minHeight: '90px',
    color: '#555 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  moduleBox: {
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: 'rgba(42, 43, 106, 0.05)',
    border: '1px solid rgba(42, 43, 106, 0.1)',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(42, 43, 106, 0.1)',
      borderColor: 'rgba(42, 43, 106, 0.2)',
    },
    '@media (max-width: 960px)': {
      padding: '12px',
    },
    '@media (max-width: 600px)': {
      padding: '10px',
    },
  },
  moduleIcon: {
    color: '#2A2B6A',
    marginRight: '10px',
    '@media (max-width: 600px)': {
      marginRight: '8px',
    },
  },
  moduleText: {
    fontSize: '1rem !important',
    color: '#444 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  trackBox: {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'white',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e0e0e0',
    height: '100%',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
      borderColor: '#2A2B6A',
    },
    '@media (max-width: 960px)': {
      padding: '18px',
    },
    '@media (max-width: 600px)': {
      padding: '15px',
    },
  },
  trackHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    '@media (max-width: 600px)': {
      marginBottom: '15px',
    },
  },
  trackIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    backgroundColor: 'rgba(42, 43, 106, 0.1)',
    color: '#2A2B6A',
    marginRight: '15px',
    '@media (max-width: 960px)': {
      width: '45px',
      height: '45px',
      marginRight: '12px',
    },
    '@media (max-width: 600px)': {
      width: '40px',
      height: '40px',
      marginRight: '10px',
    },
  },
  trackTitle: {
    fontSize: '1.3rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    '@media (max-width: 960px)': {
      fontSize: '1.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
  },
  milestoneCard: {
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
    border: '2px solid #2A2B6A',
    position: 'relative',
    marginTop: '40px',
    backgroundColor: 'white',
    '@media (max-width: 960px)': {
      padding: '25px',
    },
    '@media (max-width: 600px)': {
      padding: '20px',
    },
  },
  milestoneBadge: {
    position: 'absolute',
    top: '-25px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    '@media (max-width: 600px)': {
      width: '45px',
      height: '45px',
      top: '-22px',
    },
  },
  milestoneTitle: {
    fontSize: '1.6rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginTop: '15px !important',
    marginBottom: '8px !important',
    '@media (max-width: 960px)': {
      fontSize: '1.5rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
    },
  },
  milestoneDescription: {
    fontSize: '1.1rem !important',
    color: '#666 !important',
    textAlign: 'center',
    marginBottom: '25px !important',
    '@media (max-width: 960px)': {
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '20px !important',
    },
  },
  milestoneLongDescription: {
    fontSize: '1rem !important',
    color: '#444 !important',
    marginBottom: '25px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
      marginBottom: '20px !important',
    },
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '10px',
    '@media (max-width: 600px)': {
      marginBottom: '8px',
    },
  },
  featureIcon: {
    color: '#2A2B6A',
    marginRight: '10px',
    marginTop: '3px',
    '@media (max-width: 600px)': {
      marginRight: '8px',
    },
  },
  featureText: {
    fontSize: '1rem !important',
    color: '#444 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  detailsButton: {
    display: 'flex',
    alignItems: 'center',
    color: '#2A2B6A !important',
    fontSize: '1rem !important',
    marginTop: '20px !important',
    cursor: 'pointer',
    '&:hover': {
      color: '#4A4C9B !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  detailsArrow: {
    transition: 'transform 0.3s ease',
  },
  detailsArrowExpanded: {
    transform: 'rotate(90deg)',
  },
  detailsContent: {
    padding: '20px',
    backgroundColor: 'rgba(42, 43, 106, 0.05)',
    borderRadius: '10px',
    marginTop: '15px',
    '@media (max-width: 600px)': {
      padding: '15px',
    },
  },
  ctaSection: {
    marginTop: '50px',
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: '#2A2B6A',
    color: 'white',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
    '@media (max-width: 960px)': {
      padding: '25px',
      marginTop: '40px',
    },
    '@media (max-width: 600px)': {
      padding: '20px',
      marginTop: '30px',
    },
  },
  ctaTitle: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px !important',
    '@media (max-width: 960px)': {
      fontSize: '1.6rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.4rem !important',
    },
  },
  ctaSubtitle: {
    fontSize: '1.1rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    marginBottom: '25px !important',
    '@media (max-width: 960px)': {
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '20px !important',
    },
  },
  applyButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    padding: '10px 25px !important',
    borderRadius: '8px !important',
    fontWeight: 'bold !important',
    fontSize: '1.1rem !important',
    textTransform: 'none !important',
    '&:hover': {
      backgroundColor: '#FFD644 !important',
      boxShadow: '0 5px 15px rgba(255, 198, 20, 0.4) !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      padding: '8px 20px !important',
    },
  },
  curriculumButton: {
    borderColor: 'white !important',
    color: 'white !important',
    padding: '10px 25px !important',
    borderRadius: '8px !important',
    fontWeight: 'bold !important',
    fontSize: '1.1rem !important',
    textTransform: 'none !important',
    marginLeft: '15px !important',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.05rem !important',
      marginLeft: '12px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      padding: '8px 20px !important',
      marginLeft: '10px !important',
    },
  },
});

const LearningPathTimeline = ({ 
  title, 
  subtitle, 
  phases, 
  placementStats 
}) => {
  const classes = useStyles();
  const [activePhase, setActivePhase] = useState(1);
  const [showDetails, setShowDetails] = useState(null);

  const activePhaseData = phases.find(phase => phase.id === activePhase);

  const handleDetailsToggle = (detailType) => {
    if (showDetails === detailType) {
      setShowDetails(null);
    } else {
      setShowDetails(detailType);
    }
  };

  return (
    <Box className={classes.timelineContainer}>
      {/* Header Section */}
      <Box className={classes.header}>
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="h6" className={classes.subtitle}>
          {subtitle}
        </Typography>
        
        {placementStats && (
          <Typography variant="body1" className={classes.statsBadge}>
            <span>{placementStats.percentage}</span> {placementStats.text}
          </Typography>
        )}
      </Box>

      {/* Phase Navigation */}
      <Box className={classes.phaseNav}>
        {phases.map(phase => (
          <Button
            key={phase.id}
            onClick={() => setActivePhase(phase.id)}
            className={`${classes.phaseButton} ${
              activePhase === phase.id ? classes.activePhaseButton : ''
            }`}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Box className={classes.phaseIcon}>
                {phase.icon}
              </Box>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                  {phase.title}
                </Typography>
                <Typography variant="caption" sx={{ color: '#777' }}>
                  {phase.subtitle}
                </Typography>
              </Box>
            </Box>
          </Button>
        ))}
      </Box>

      {/* Active Phase Content */}
      <Box className={classes.phaseContent}>
        {/* Phase Header */}
        <Box className={classes.phaseHeader}>
          <Box className={classes.phaseIconLarge}>
            {activePhaseData.icon}
          </Box>
          <Box className={classes.phaseTitleWrapper}>
            <Typography variant="h3" className={classes.phaseTitle}>
              {activePhaseData.title}
            </Typography>
            <Typography variant="h6" className={classes.phaseTagline}>
              {activePhaseData.tagline}
            </Typography>
          </Box>
        </Box>

        <Typography variant="body1" className={classes.phaseDescription}>
          {activePhaseData.description}
        </Typography>

        {/* Key Activities Section */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h4" className={classes.sectionTitle}>
            Key Activities
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'nowrap', 
            justifyContent: 'center',
            gap: 2,
            overflowX: 'auto',
            pb: 2,
            '&::-webkit-scrollbar': {
              height: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#e0e0e0',
              borderRadius: '6px',
            },
            '& > *': { 
              flex: '0 0 330px'
            }
          }}>
            {activePhaseData.highlights.map((highlight, index) => (
              <Paper key={index} className={classes.activityCard} elevation={0}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px', minHeight:"60px" }}>
                  <Box className={classes.activityIcon}>
                    {highlight.icon}
                  </Box>
                  <Typography className={classes.activityTitle}>
                    {highlight.title}
                  </Typography>
                </Box>
                <Typography className={classes.activityDescription}>
                  {highlight.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>

        {/* Modules Section if available */}
        {activePhaseData.modules && (
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" className={classes.sectionTitle}>
              Core Modules
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 2,
              '& > *': { 
                flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)', md: '1 1 calc(33.333% - 11px)' }
              }
            }}>
              {activePhaseData.modules.map((module, index) => (
                <Box key={index} className={classes.moduleBox}>
                  <CheckCircleIcon className={classes.moduleIcon} />
                  <Typography className={classes.moduleText}>
                    {module}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Specialization Tracks if available */}
        {activePhaseData.tracks && (
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" className={classes.sectionTitle}>
              Specialization Tracks
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 3,
              '& > *': { 
                flex: { xs: '1 1 100%', md: '1 1 calc(50% - 12px)' }
              }
            }}>
              {activePhaseData.tracks.map((track, index) => (
                <Box key={index} className={classes.trackBox}>
                  <Box className={classes.trackHeader}>
                    <Box className={classes.trackIcon}>
                      {track.icon}
                    </Box>
                    <Typography className={classes.trackTitle}>
                      {track.name}
                    </Typography>
                  </Box>
                  <Box>
                    {track.modules.map((module, mIndex) => (
                      <Box className={classes.moduleBox} key={mIndex}>
                        <CheckCircleIcon className={classes.moduleIcon} />
                        <Typography className={classes.moduleText}>
                          {module}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
            {activePhaseData.note && (
              <Box sx={{ 
                mt: 3, 
                p: 2, 
                bgcolor: 'rgba(255, 198, 20, 0.1)', 
                borderLeft: '4px solid #FFC614',
                borderRadius: '0 8px 8px 0'
              }}>
                <Typography sx={{ color: '#444', fontWeight: 'medium' }}>
                  {activePhaseData.note}
                </Typography>
              </Box>
            )}
          </Box>
        )}

        {/* Perks Section if available */}
        {activePhaseData.perks && (
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" className={classes.sectionTitle}>
              Program Perks
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 2,
              '& > *': { 
                flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)' }
              }
            }}>
              {activePhaseData.perks.map((perk, index) => (
                <Box key={index} className={classes.moduleBox} sx={{ 
                  backgroundColor: 'rgba(255, 198, 20, 0.05)', 
                  borderColor: 'rgba(255, 198, 20, 0.1)' 
                }}>
                  <CheckCircleIcon className={classes.moduleIcon} sx={{ color: '#FFC614' }} />
                  <Typography className={classes.moduleText}>
                    {perk}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Milestone Card if available */}
        {activePhaseData.milestone && (
          <Box className={classes.milestoneCard}>
            <Box className={classes.milestoneBadge}>
              {activePhaseData.milestone.icon}
            </Box>
            <Typography variant="h3" className={classes.milestoneTitle}>
              {activePhaseData.milestone.name}
            </Typography>
            <Typography variant="subtitle1" className={classes.milestoneDescription}>
              {activePhaseData.milestone.description}
            </Typography>
            <Typography variant="body1" className={classes.milestoneLongDescription}>
              {activePhaseData.milestone.details}
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center' }}>
                <StarIcon sx={{ mr: 1, color: '#FFC614' }} />
                Key Features
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 2,
                '& > *': { 
                  flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)' }
                }
              }}>
                {activePhaseData.milestone.features.map((feature, index) => (
                  <Box key={index} className={classes.featureItem}>
                    <ChevronRightIcon className={classes.featureIcon} />
                    <Typography className={classes.featureText}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            
            {/* Toggle for additional details */}
            {activePhaseData.milestone.extraDetails && (
              <>
                <Box 
                  className={classes.detailsButton}
                  onClick={() => handleDetailsToggle('milestone')}
                >
                  <Typography>
                    {showDetails === 'milestone' ? 'Hide details' : 'Learn more'}
                  </Typography>
                  <ChevronRightIcon 
                    className={`${classes.detailsArrow} ${
                      showDetails === 'milestone' ? classes.detailsArrowExpanded : ''
                    }`}
                  />
                </Box>
                
                {showDetails === 'milestone' && (
                  <Box className={classes.detailsContent}>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {activePhaseData.milestone.extraDetails}
                    </Typography>
                    {activePhaseData.milestone.extraFeatures && (
                      <Box>
                        {activePhaseData.milestone.extraFeatures.map((feature, index) => (
                          <Box key={index} className={classes.featureItem}>
                            <StarIcon sx={{ color: '#FFC614', mr: 1.5, fontSize: '1rem' }} />
                            <Typography sx={{ fontSize: '0.95rem', color: '#555' }}>
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>
                )}
              </>
            )}
          </Box>
        )}
      </Box>

      {/* Call to Action Section */}
      <Box className={classes.ctaSection}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' } }}>
          <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <Typography className={classes.ctaTitle}>
              <StarIcon sx={{ mr: 1, color: '#FFC614' }} />
              Begin Your Transformation
            </Typography>
            <Typography className={classes.ctaSubtitle}>
              Join 10,000+ professionals who've accelerated their careers through Gigaversity
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Button
              variant="contained"
              className={classes.applyButton}
            >
              Apply Now
            </Button>
            <Button
              variant="outlined"
              className={classes.curriculumButton}
            >
              Download Curriculum
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LearningPathTimeline;