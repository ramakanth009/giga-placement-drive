// src/components/common/fulltime/learningpath/LearningPathTimeline.jsx
import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Chip, Divider, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import CentralizedPopupForms from '../../popupforms/CentralizedPopupForms';

const useStyles = makeStyles({
  timelineContainer: {
    padding: '40px 20px',
    position: 'relative',
    backgroundColor: '#f8f9fa',
    '@media (max-width: 1200px)': {
      padding: '35px 18px',
    },
    '@media (max-width: 960px)': {
      padding: '30px 15px',
    },
    '@media (max-width: 600px)': {
      padding: '25px 12px',
    },
    '@media (max-width: 480px)': {
      padding: '20px 10px',
    },
    '@media (max-width: 375px)': {
      padding: '15px 8px',
    },
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    position: 'relative',
    '@media (max-width: 1200px)': {
      marginBottom: '35px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '25px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '20px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '18px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '16px !important',
    lineHeight: '1.2 !important',
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
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#555 !important',
    maxWidth: '800px',
    margin: '0 auto !important',
    lineHeight: '1.5 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.15rem !important',
      maxWidth: '700px',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
      maxWidth: '600px',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      maxWidth: '100%',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
    },
  },
  statsBadge: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '8px 16px !important',
    margin: '20px auto 0 !important',
    display: 'inline-block !important',
    borderRadius: '20px !important',
    fontSize: '1rem !important',
    '& span': {
      color: '#FFC614 !important',
      fontWeight: 'bold !important',
    },
    '@media (max-width: 1200px)': {
      padding: '7px 14px !important',
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 960px)': {
      padding: '6px 12px !important',
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 600px)': {
      padding: '5px 10px !important',
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 480px)': {
      padding: '4px 8px !important',
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 375px)': {
      padding: '3px 6px !important',
      fontSize: '0.75rem !important',
    },
  },
  phaseProgressBar: {
    position: 'relative',
    height: '4px',
    backgroundColor: '#e0e0e0',
    borderRadius: '2px',
    marginBottom: '20px',
    overflow: 'hidden',
    '@media (max-width: 600px)': {
      height: '3px',
      marginBottom: '15px',
    },
  },
  phaseProgressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #2A2B6A 25%, #FFC614 50%, #4FC3F7 75%, #FF7043 100%)',
    borderRadius: '2px',
    transition: 'width 0.3s ease',
  },
  phaseNav: {
    display: 'flex',
    overflowX: 'auto',
    marginBottom: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    position: 'relative',
    '&::-webkit-scrollbar': {
      height: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#e0e0e0',
      borderRadius: '6px',
    },
    '@media (max-width: 1200px)': {
      marginBottom: '35px',
      borderRadius: '8px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '25px',
      borderRadius: '6px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '20px',
      '&::-webkit-scrollbar': {
        height: '4px',
      },
    },
    '@media (max-width: 375px)': {
      marginBottom: '15px',
      '&::-webkit-scrollbar': {
        height: '3px',
      },
    },
  },
  phaseButton: {
    flex: '1',
    padding: '20px 15px !important',
    borderRadius: '0 !important',
    minWidth: '180px !important',
    textTransform: 'none !important',
    transition: 'all 0.3s ease !important',
    position: 'relative',
    '&:hover': {
      backgroundColor: 'rgba(42, 43, 106, 0.05) !important',
      transform: 'translateY(-2px)',
    },
    '&.phase-1': {
      '&:hover': {
        backgroundColor: 'rgba(42, 43, 106, 0.05) !important',
      },
    },
    '&.phase-2': {
      '&:hover': {
        backgroundColor: 'rgba(255, 198, 20, 0.05) !important',
      },
    },
    '&.phase-3': {
      '&:hover': {
        backgroundColor: 'rgba(79, 195, 247, 0.05) !important',
      },
    },
    '&.phase-4': {
      '&:hover': {
        backgroundColor: 'rgba(255, 112, 67, 0.05) !important',
      },
    },
    '@media (max-width: 1200px)': {
      padding: '18px 13px !important',
      minWidth: '160px !important',
    },
    '@media (max-width: 960px)': {
      padding: '15px 12px !important',
      minWidth: '140px !important',
    },
    '@media (max-width: 600px)': {
      padding: '12px 8px !important',
      minWidth: '110px !important',
    },
    '@media (max-width: 480px)': {
      padding: '10px 5px !important',
      minWidth: '90px !important',
    },
    '@media (max-width: 375px)': {
      padding: '8px 3px !important',
      minWidth: '75px !important',
    },
  },
  phaseButtonText: {
    textAlign: 'center',
    '& .MuiTypography-body1': {
      fontSize: '0.9rem !important',
      fontWeight: 'medium !important',
      lineHeight: '1.2 !important',
      '@media (max-width: 600px)': {
        fontSize: '0.8rem !important',
      },
      '@media (max-width: 480px)': {
        fontSize: '0.7rem !important',
      },
      '@media (max-width: 375px)': {
        fontSize: '0.65rem !important',
      },
    },
    '& .MuiTypography-caption': {
      fontSize: '0.75rem !important',
      color: '#777 !important',
      lineHeight: '1.1 !important',
      '@media (max-width: 600px)': {
        fontSize: '0.65rem !important',
      },
      '@media (max-width: 480px)': {
        fontSize: '0.6rem !important',
      },
      '@media (max-width: 375px)': {
        fontSize: '0.55rem !important',
      },
    },
  },
  activePhaseButton: {
    transform: 'translateY(-2px)',
    '&.phase-1': {
      borderBottom: '3px solid #2A2B6A !important',
      backgroundColor: 'rgba(42, 43, 106, 0.05) !important',
    },
    '&.phase-2': {
      borderBottom: '3px solid #FFC614 !important',
      backgroundColor: 'rgba(255, 198, 20, 0.05) !important',
    },
    '&.phase-3': {
      borderBottom: '3px solid #4FC3F7 !important',
      backgroundColor: 'rgba(79, 195, 247, 0.05) !important',
    },
    '&.phase-4': {
      borderBottom: '3px solid #FF7043 !important',
      backgroundColor: 'rgba(255, 112, 67, 0.05) !important',
    },
    '@media (max-width: 480px)': {
      '&.phase-1, &.phase-2, &.phase-3, &.phase-4': {
        borderBottom: '2px solid !important',
      },
    },
    '@media (max-width: 375px)': {
      '&.phase-1, &.phase-2, &.phase-3, &.phase-4': {
        borderBottom: '1px solid !important',
      },
    },
  },
  phaseIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginBottom: '10px',
    margin: '0 auto 10px auto',
    transition: 'all 0.3s ease',
    '&.phase-1': {
      backgroundColor: 'rgba(42, 43, 106, 0.1)',
      color: '#2A2B6A',
    },
    '&.phase-2': {
      backgroundColor: 'rgba(255, 198, 20, 0.1)',
      color: '#FFC614',
    },
    '&.phase-3': {
      backgroundColor: 'rgba(79, 195, 247, 0.1)',
      color: '#4FC3F7',
    },
    '&.phase-4': {
      backgroundColor: 'rgba(255, 112, 67, 0.1)',
      color: '#FF7043',
    },
    '@media (max-width: 1200px)': {
      width: '45px',
      height: '45px',
      marginBottom: '8px',
    },
    '@media (max-width: 960px)': {
      width: '40px',
      height: '40px',
    },
    '@media (max-width: 600px)': {
      width: '35px',
      height: '35px',
      marginBottom: '6px',
    },
    '@media (max-width: 480px)': {
      width: '30px',
      height: '30px',
      marginBottom: '5px',
    },
    '@media (max-width: 375px)': {
      width: '25px',
      height: '25px',
      marginBottom: '4px',
    },
  },
  phaseContent: {
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 1200px)': {
      padding: '28px',
      borderRadius: '8px',
    },
    '@media (max-width: 960px)': {
      padding: '25px',
    },
    '@media (max-width: 600px)': {
      padding: '20px',
      borderRadius: '6px',
    },
    '@media (max-width: 480px)': {
      padding: '15px',
    },
    '@media (max-width: 375px)': {
      padding: '12px',
    },
  },
  phaseHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
    '@media (max-width: 1200px)': {
      marginBottom: '25px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '20px',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '15px',
      marginBottom: '18px',
    },
    '@media (max-width: 480px)': {
      gap: '12px',
      marginBottom: '15px',
    },
    '@media (max-width: 375px)': {
      gap: '10px',
      marginBottom: '12px',
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
    transition: 'all 0.3s ease',
    '@media (max-width: 1200px)': {
      width: '65px',
      height: '65px',
      marginRight: '18px',
    },
    '@media (max-width: 960px)': {
      width: '60px',
      height: '60px',
      marginRight: '15px',
    },
    '@media (max-width: 600px)': {
      width: '50px',
      height: '50px',
      marginRight: '0',
      borderRadius: '10px',
    },
    '@media (max-width: 480px)': {
      width: '45px',
      height: '45px',
      borderRadius: '8px',
    },
    '@media (max-width: 375px)': {
      width: '40px',
      height: '40px',
      borderRadius: '6px',
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
    lineHeight: '1.2 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.9rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.5rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.3rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.2rem !important',
    },
  },
  phaseTagline: {
    fontSize: '1.2rem !important',
    color: '#666 !important',
    lineHeight: '1.3 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.15rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
    },
  },
  phaseDescription: {
    fontSize: '1.1rem !important',
    color: '#444 !important',
    marginBottom: '30px !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.05rem !important',
      marginBottom: '28px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      marginBottom: '25px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      marginBottom: '15px !important',
    },
  },
  sectionTitle: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    paddingBottom: '10px',
    borderBottom: '1px solid #e0e0e0',
    '@media (max-width: 1200px)': {
      fontSize: '1.35rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.3rem !important',
      marginBottom: '16px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
      marginBottom: '14px !important',
      paddingBottom: '8px',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem !important',
      marginBottom: '12px !important',
      paddingBottom: '6px',
    },
    '@media (max-width: 375px)': {
      fontSize: '1rem !important',
      marginBottom: '10px !important',
      paddingBottom: '5px',
    },
  },
  activityCard: {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e0e0e0',
    borderLeft: '4px solid #e0e0e0',
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
    },
    '&.activity-0': {
      borderLeft: '4px solid #7B1FA2',
      '&:hover': {
        borderColor: '#7B1FA2',
      },
    },
    '&.activity-1': {
      borderLeft: '4px solid #FFC614',
      '&:hover': {
        borderColor: '#FFC614',
      },
    },
    '&.activity-2': {
      borderLeft: '4px solid #4FC3F7',
      '&:hover': {
        borderColor: '#4FC3F7',
      },
    },
    '&.activity-3': {
      borderLeft: '4px solid #FF7043',
      '&:hover': {
        borderColor: '#FF7043',
      },
    },
    '@media (max-width: 1200px)': {
      padding: '18px',
      borderRadius: '8px',
    },
    '@media (max-width: 960px)': {
      padding: '16px',
    },
    '@media (max-width: 600px)': {
      padding: '14px',
      borderRadius: '6px',
    },
    '@media (max-width: 480px)': {
      padding: '12px',
      '&:hover': {
        transform: 'translateY(-3px)',
      },
    },
    '@media (max-width: 375px)': {
      padding: '10px',
      '&:hover': {
        transform: 'translateY(-2px)',
      },
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
    transition: 'all 0.3s ease',
    '@media (max-width: 1200px)': {
      width: '48px',
      height: '48px',
      marginRight: '14px',
    },
    '@media (max-width: 960px)': {
      width: '45px',
      height: '45px',
      minHeight: '45px',
      marginRight: '12px',
    },
    '@media (max-width: 600px)': {
      width: '40px',
      height: '40px',
      minHeight: '40px',
      marginRight: '10px',
      borderRadius: '8px',
    },
    '@media (max-width: 480px)': {
      width: '35px',
      height: '35px',
      minHeight: '35px',
      marginRight: '8px',
      borderRadius: '6px',
    },
    '@media (max-width: 375px)': {
      width: '30px',
      height: '30px',
      minHeight: '30px',
      marginRight: '6px',
    },
  },
  activityTitle: {
    fontSize: '1.1rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    flex: 1,
    marginBottom: '10px !important',
    lineHeight: '1.3 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.08rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
      marginBottom: '5px !important',
    },
  },
  activityDescription: {
    fontSize: '0.95rem !important',
    minHeight: '90px',
    color: '#555 !important',
    lineHeight: '1.5 !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.93rem !important',
      minHeight: '85px',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.9rem !important',
      minHeight: '80px',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.88rem !important',
      minHeight: '70px',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.85rem !important',
      minHeight: '60px',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.8rem !important',
      minHeight: '50px',
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
      transform: 'translateX(5px)',
    },
    '@media (max-width: 1200px)': {
      padding: '14px',
    },
    '@media (max-width: 960px)': {
      padding: '12px',
      marginBottom: '8px',
    },
    '@media (max-width: 600px)': {
      padding: '10px',
      borderRadius: '6px',
      marginBottom: '6px',
    },
    '@media (max-width: 480px)': {
      padding: '8px',
      marginBottom: '5px',
      '&:hover': {
        transform: 'translateX(3px)',
      },
    },
    '@media (max-width: 375px)': {
      padding: '6px',
      marginBottom: '4px',
      '&:hover': {
        transform: 'translateX(2px)',
      },
    },
  },
  moduleIcon: {
    color: '#2A2B6A',
    marginRight: '10px',
    '@media (max-width: 1200px)': {
      marginRight: '9px',
    },
    '@media (max-width: 960px)': {
      marginRight: '8px',
    },
    '@media (max-width: 600px)': {
      marginRight: '7px',
    },
    '@media (max-width: 480px)': {
      marginRight: '6px',
    },
    '@media (max-width: 375px)': {
      marginRight: '5px',
    },
  },
  moduleText: {
    fontSize: '1rem !important',
    color: '#444 !important',
    lineHeight: '1.4 !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.98rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.8rem !important',
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
      transform: 'translateY(-3px)',
    },
    '@media (max-width: 1200px)': {
      padding: '18px',
      borderRadius: '8px',
    },
    '@media (max-width: 960px)': {
      padding: '16px',
    },
    '@media (max-width: 600px)': {
      padding: '14px',
      borderRadius: '6px',
    },
    '@media (max-width: 480px)': {
      padding: '12px',
      '&:hover': {
        transform: 'translateY(-2px)',
      },
    },
    '@media (max-width: 375px)': {
      padding: '10px',
      '&:hover': {
        transform: 'translateY(-1px)',
      },
    },
  },
  trackHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    '@media (max-width: 1200px)': {
      marginBottom: '18px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '16px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '14px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '12px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '10px',
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
    '@media (max-width: 1200px)': {
      width: '48px',
      height: '48px',
      marginRight: '14px',
    },
    '@media (max-width: 960px)': {
      width: '45px',
      height: '45px',
      marginRight: '12px',
    },
    '@media (max-width: 600px)': {
      width: '40px',
      height: '40px',
      marginRight: '10px',
      borderRadius: '8px',
    },
    '@media (max-width: 480px)': {
      width: '35px',
      height: '35px',
      marginRight: '8px',
      borderRadius: '6px',
    },
    '@media (max-width: 375px)': {
      width: '30px',
      height: '30px',
      marginRight: '6px',
    },
  },
  trackTitle: {
    fontSize: '1.3rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    lineHeight: '1.3 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.25rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.95rem !important',
    },
  },
  milestoneCard: {
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
    border: '2px solid #66BB6A',
    position: 'relative',
    marginTop: '40px',
    backgroundColor: '#E8F5E8',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
      transform: 'translateY(-3px)',
    },
    '@media (max-width: 1200px)': {
      padding: '28px',
      marginTop: '35px',
      borderRadius: '8px',
    },
    '@media (max-width: 960px)': {
      padding: '25px',
      marginTop: '30px',
    },
    '@media (max-width: 600px)': {
      padding: '20px',
      marginTop: '25px',
      borderRadius: '6px',
    },
    '@media (max-width: 480px)': {
      padding: '15px',
      marginTop: '20px',
      '&:hover': {
        transform: 'translateY(-2px)',
      },
    },
    '@media (max-width: 375px)': {
      padding: '12px',
      marginTop: '15px',
      '&:hover': {
        transform: 'translateY(-1px)',
      },
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
    '@media (max-width: 1200px)': {
      width: '48px',
      height: '48px',
      top: '-24px',
    },
    '@media (max-width: 960px)': {
      width: '45px',
      height: '45px',
      top: '-22px',
    },
    '@media (max-width: 600px)': {
      width: '40px',
      height: '40px',
      top: '-20px',
    },
    '@media (max-width: 480px)': {
      width: '35px',
      height: '35px',
      top: '-18px',
    },
    '@media (max-width: 375px)': {
      width: '30px',
      height: '30px',
      top: '-15px',
    },
  },
  milestoneTitle: {
    fontSize: '1.6rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginTop: '15px !important',
    marginBottom: '8px !important',
    lineHeight: '1.2 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.55rem !important',
      marginTop: '14px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.5rem !important',
      marginTop: '12px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
      marginTop: '10px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.2rem !important',
      marginTop: '8px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.1rem !important',
      marginTop: '6px !important',
    },
  },
  milestoneDescription: {
    fontSize: '1.1rem !important',
    color: '#666 !important',
    textAlign: 'center',
    marginBottom: '25px !important',
    lineHeight: '1.5 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.08rem !important',
      marginBottom: '23px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.05rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
      marginBottom: '15px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
      marginBottom: '12px !important',
    },
  },
  milestoneLongDescription: {
    fontSize: '1rem !important',
    color: '#444 !important',
    marginBottom: '25px !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.98rem !important',
      marginBottom: '23px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.95rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.85rem !important',
      marginBottom: '15px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.8rem !important',
      marginBottom: '12px !important',
    },
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '10px',
    '@media (max-width: 1200px)': {
      marginBottom: '9px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '8px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '7px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '6px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '5px',
    },
  },
  featureIcon: {
    color: '#2A2B6A',
    marginRight: '10px',
    marginTop: '3px',
    '@media (max-width: 1200px)': {
      marginRight: '9px',
    },
    '@media (max-width: 960px)': {
      marginRight: '8px',
    },
    '@media (max-width: 600px)': {
      marginRight: '7px',
    },
    '@media (max-width: 480px)': {
      marginRight: '6px',
    },
    '@media (max-width: 375px)': {
      marginRight: '5px',
    },
  },
  featureText: {
    fontSize: '1rem !important',
    color: '#444 !important',
    lineHeight: '1.5 !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.98rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.8rem !important',
    },
  },
  detailsButton: {
    display: 'flex',
    alignItems: 'center',
    color: '#2A2B6A !important',
    fontSize: '1rem !important',
    marginTop: '20px !important',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: '#4A4C9B !important',
      transform: 'translateX(5px)',
    },
    '@media (max-width: 1200px)': {
      fontSize: '0.98rem !important',
      marginTop: '18px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.95rem !important',
      marginTop: '16px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      marginTop: '14px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.85rem !important',
      marginTop: '12px !important',
      '&:hover': {
        transform: 'translateX(3px)',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '0.8rem !important',
      marginTop: '10px !important',
      '&:hover': {
        transform: 'translateX(2px)',
      },
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
    '@media (max-width: 1200px)': {
      padding: '18px',
      borderRadius: '8px',
    },
    '@media (max-width: 960px)': {
      padding: '16px',
    },
    '@media (max-width: 600px)': {
      padding: '14px',
      borderRadius: '6px',
      marginTop: '12px',
    },
    '@media (max-width: 480px)': {
      padding: '12px',
      marginTop: '10px',
    },
    '@media (max-width: 375px)': {
      padding: '10px',
      marginTop: '8px',
    },
  },
  ctaSection: {
    marginTop: '50px',
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: '#2A2B6A',
    color: 'white',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
    '@media (max-width: 1200px)': {
      padding: '28px',
      marginTop: '45px',
      borderRadius: '8px',
    },
    '@media (max-width: 960px)': {
      padding: '25px',
      marginTop: '40px',
    },
    '@media (max-width: 600px)': {
      padding: '20px',
      marginTop: '30px',
      borderRadius: '6px',
    },
    '@media (max-width: 480px)': {
      padding: '18px',
      marginTop: '25px',
    },
    '@media (max-width: 375px)': {
      padding: '15px',
      marginTop: '20px',
    },
  },
  ctaTitle: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px !important',
    lineHeight: '1.3 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.7rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.6rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.4rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.2rem !important',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '5px',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.1rem !important',
    },
  },
  ctaSubtitle: {
    fontSize: '1.1rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    marginBottom: '25px !important',
    lineHeight: '1.5 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.08rem !important',
      marginBottom: '23px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.05rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
      marginBottom: '15px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
      marginBottom: '12px !important',
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
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: '#FFD644 !important',
      boxShadow: '0 5px 15px rgba(255, 198, 20, 0.4) !important',
      transform: 'translateY(-2px)',
    },
    '@media (max-width: 1200px)': {
      fontSize: '1.08rem !important',
      padding: '9px 23px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.05rem !important',
      padding: '8px 20px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      borderRadius: '6px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
      padding: '7px 18px !important',
      '&:hover': {
        transform: 'translateY(-1px)',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
      padding: '6px 15px !important',
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
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
      transform: 'translateY(-2px)',
    },
    '@media (max-width: 1200px)': {
      fontSize: '1.08rem !important',
      padding: '9px 23px !important',
      marginLeft: '14px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.05rem !important',
      padding: '8px 20px !important',
      marginLeft: '12px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      borderRadius: '6px !important',
      marginLeft: '10px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
      padding: '7px 18px !important',
      marginLeft: '8px !important',
      marginTop: '10px !important',
      '&:hover': {
        transform: 'translateY(-1px)',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
      padding: '6px 15px !important',
      marginLeft: '0 !important',
      width: '100%',
    },
  },
});

const LearningPathTimeline = ({ 
  title, 
  subtitle, 
  phases, 
  placementStats,
  onApply, // <-- add this prop
  popupVariant // <-- add this prop
}) => {
  const classes = useStyles();
  const [activePhase, setActivePhase] = useState(1);
  const [showDetails, setShowDetails] = useState(null);

  // Popup state
  const [popupOpen, setPopupOpen] = useState(false);

  const activePhaseData = phases.find(phase => phase.id === activePhase);

  const handleDetailsToggle = (detailType) => {
    if (showDetails === detailType) {
      setShowDetails(null);
    } else {
      setShowDetails(detailType);
    }
  };

  // Handler for Apply Now button
  const handleApplyNow = () => {
    setPopupOpen(true);
    if (onApply) onApply();
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

      {/* Phase Progress Bar */}
      <Box className={classes.phaseProgressBar}>
        <Box 
          className={classes.phaseProgressFill}
          sx={{ width: `${(activePhase / phases.length) * 100}%` }}
        />
      </Box>

      {/* Phase Navigation */}
      <Box className={classes.phaseNav}>
        {phases.map(phase => (
          <Button
            key={phase.id}
            onClick={() => setActivePhase(phase.id)}
            className={`${classes.phaseButton} phase-${phase.id} ${
              activePhase === phase.id ? `${classes.activePhaseButton} phase-${phase.id}` : ''
            }`}
          >
            <Box className={classes.phaseButtonText}>
              <Box className={`${classes.phaseIcon} phase-${phase.id}`}>
                {phase.icon}
              </Box>
              <Box>
                <Typography variant="body1">
                  {phase.title}
                </Typography>
                <Typography variant="caption">
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
            flexWrap: { xs: 'wrap', lg: 'nowrap' },
            justifyContent: 'center',
            gap: { xs: 1, sm: 1.5, md: 2 },
            overflowX: { xs: 'visible', lg: 'auto' },
            pb: 2,
            '&::-webkit-scrollbar': {
              height: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#e0e0e0',
              borderRadius: '6px',
            },
            '& > *': { 
              flex: { 
                xs: '1 1 100%', 
                sm: '1 1 calc(50% - 6px)', 
                md: '1 1 calc(33.333% - 8px)',
                lg: '0 0 330px'
              }
            }
          }}>
            {activePhaseData.highlights.map((highlight, index) => (
              <Paper key={index} className={`${classes.activityCard} activity-${index}`} elevation={0}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '10px', 
                  minHeight: { xs: '50px', sm: '55px', md: '60px' }
                }}>
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
              gap: { xs: 1, sm: 1.5, md: 2 },
              '& > *': { 
                flex: { 
                  xs: '1 1 100%', 
                  sm: '1 1 calc(50% - 6px)', 
                  md: '1 1 calc(33.333% - 8px)',
                  lg: '1 1 calc(33.333% - 11px)'
                }
              }
            }}>
              {activePhaseData.modules.map((module, index) => (
                <Box key={index} className={classes.moduleBox}>
                  <CheckCircleIcon className={classes.moduleIcon} />
                  <Typography variant="h6" className={classes.moduleText}>
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
              gap: { xs: 2, sm: 2.5, md: 3 },
              '& > *': { 
                flex: { 
                  xs: '1 1 100%', 
                  md: '1 1 calc(50% - 12px)',
                  lg: '1 1 calc(50% - 15px)'
                }
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
                p: { xs: 1.5, sm: 2 }, 
                bgcolor: 'rgba(255, 198, 20, 0.1)', 
                borderLeft: '4px solid #FFC614',
                borderRadius: '0 8px 8px 0'
              }}>
                <Typography sx={{ 
                  color: '#444', 
                  fontWeight: 'medium',
                  fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }
                }}>
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
              gap: { xs: 1, sm: 1.5, md: 2 },
              '& > *': { 
                flex: { 
                  xs: '1 1 100%', 
                  sm: '1 1 calc(50% - 6px)',
                  md: '1 1 calc(50% - 8px)'
                }
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
              <Typography variant="h4" sx={{ 
                fontWeight: 'bold', 
                mb: 2, 
                display: 'flex', 
                alignItems: 'center',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
              }}>
                <StarIcon sx={{ mr: 1, color: '#FFC614' }} />
                Key Features
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: { xs: 1, sm: 1.5, md: 2 },
                '& > *': { 
                  flex: { 
                    xs: '1 1 100%', 
                    sm: '1 1 calc(50% - 6px)',
                    md: '1 1 calc(50% - 8px)'
                  }
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
                    <Typography variant="body1" sx={{ 
                      mb: 2,
                      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }
                    }}>
                      {activePhaseData.milestone.extraDetails}
                    </Typography>
                    {activePhaseData.milestone.extraFeatures && (
                      <Box>
                        {activePhaseData.milestone.extraFeatures.map((feature, index) => (
                          <Box key={index} className={classes.featureItem}>
                            <StarIcon sx={{ color: '#FFC614', mr: 1.5, fontSize: '1rem' }} />
                            <Typography sx={{ 
                              fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.95rem' }, 
                              color: '#555' 
                            }}>
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
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', md: 'center' } 
        }}>
          <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <Typography variant="h2" className={classes.ctaTitle}>
              <StarIcon sx={{ mr: 1, color: '#FFC614' }} />
              Begin Your Transformation
            </Typography>
            <Typography className={classes.ctaSubtitle}>
              Join 10,000+ professionals who've accelerated their careers through Gigaversity
            </Typography>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            flexWrap: 'wrap', 
            gap: { xs: 1, sm: 2 },
            width: { xs: '100%', md: 'auto' }
          }}>
            <Button
              variant="contained"
              className={classes.applyButton}
              onClick={handleApplyNow}
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

      {/* CentralizedPopupForms for Apply Now */}
      <CentralizedPopupForms
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        variant={popupVariant}
      />
    </Box>
  );
};

export default LearningPathTimeline;