import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  Card, 
  CardMedia, 
  Chip, 
  Tabs,
  Tab,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import SendIcon from '@mui/icons-material/Send';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LaunchIcon from '@mui/icons-material/Launch';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import EnhancedEngagementSection from './EnhancedEngagementSection'; // Import the new component

const useStyles = makeStyles({
  section: {
    padding: '20px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #101138 0%, #1e1c44 100%)',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 
        'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      backgroundSize: '30px 30px',
      zIndex: 1,
    },
    "@media (max-width: 1200px)": {
      padding: '50px 0',
      '&:before': {
        backgroundSize: '25px 25px',
      },
    },
    "@media (max-width: 960px)": {
      padding: '60px 0',
      '&:before': {
        backgroundSize: '20px 20px',
      },
    },
    "@media (max-width: 600px)": {
      padding: '40px 0',
      '&:before': {
        backgroundSize: '15px 15px',
      },
    },
    "@media (max-width: 480px)": {
      padding: '30px 0',
      '&:before': {
        backgroundSize: '12px 12px',
      },
    },
    "@media (max-width: 375px)": {
      padding: '25px 0',
      '&:before': {
        backgroundSize: '10px 10px',
      },
    },
  },
  container: {
    position: 'relative',
    zIndex: 2,
    padding: '0 40px',
    "@media (max-width: 1200px)": {
      padding: '0 30px',
    },
    "@media (max-width: 960px)": {
      padding: '0 25px',
    },
    "@media (max-width: 600px)": {
      padding: '0 20px',
    },
    "@media (max-width: 480px)": {
      padding: '0 15px',
    },
    "@media (max-width: 375px)": {
      padding: '0 12px',
    },
  },
  topBar: {
    background: 'linear-gradient(90deg, rgba(255, 198, 20, 0.1) 0%, rgba(255, 198, 20, 0.3) 50%, rgba(255, 198, 20, 0.1) 100%)',
    height: '4px',
    width: '100px',
    margin: '0 auto 15px auto',
    borderRadius: '2px',
    "@media (max-width: 1200px)": {
      width: '90px',
      margin: '0 auto 14px auto',
    },
    "@media (max-width: 960px)": {
      width: '80px',
      margin: '0 auto 12px auto',
    },
    "@media (max-width: 600px)": {
      width: '70px',
      height: '3px',
      margin: '0 auto 10px auto',
    },
    "@media (max-width: 480px)": {
      width: '60px',
      height: '3px',
      margin: '0 auto 8px auto',
    },
    "@media (max-width: 375px)": {
      width: '50px',
      height: '2px',
      margin: '0 auto 6px auto',
    },
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '50px',
    position: 'relative',
    zIndex: 2,
    "@media (max-width: 1200px)": {
      marginBottom: '45px',
    },
    "@media (max-width: 960px)": {
      marginBottom: '40px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '30px',
    },
    "@media (max-width: 480px)": {
      marginBottom: '25px',
    },
    "@media (max-width: 375px)": {
      marginBottom: '20px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    position: 'relative',
    display: 'inline-block',
    "@media (max-width: 1200px)": {
      fontSize: '2.3rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.1rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.8rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.6rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '1.4rem !important',
    },
  },
  highlight: {
    color: '#FFC614 !important',
    position: 'relative',
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: 'rgba(255, 255, 255, 0.7) !important',
    maxWidth: '700px',
    margin: '20px auto 0 !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.05rem !important',
      maxWidth: '650px',
    },
    "@media (max-width: 960px)": {
      fontSize: '1rem !important',
      maxWidth: '600px',
      margin: '15px auto 0 !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.95rem !important',
      maxWidth: '90%',
      margin: '12px auto 0 !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.9rem !important',
      maxWidth: '95%',
      margin: '10px auto 0 !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.85rem !important',
      maxWidth: '95%',
      margin: '8px auto 0 !important',
    },
  },
  tabsContainer: {
    marginBottom: '40px',
    "@media (max-width: 1200px)": {
      marginBottom: '35px',
    },
    "@media (max-width: 960px)": {
      marginBottom: '30px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '25px',
    },
    "@media (max-width: 480px)": {
      marginBottom: '20px',
    },
    "@media (max-width: 375px)": {
      marginBottom: '15px',
    },
  },
  tabsRoot: {
    minHeight: '60px',
    borderRadius: '30px',
    padding: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    width: 'fit-content',
    margin: '0 auto',
    position: 'relative',
    '& .MuiTabs-indicator': {
      display: 'none',
    },
    "@media (max-width: 1200px)": {
      minHeight: '55px',
      borderRadius: '28px',
    },
    "@media (max-width: 960px)": {
      minHeight: '50px',
      borderRadius: '25px',
    },
    "@media (max-width: 600px)": {
      minHeight: '45px',
      borderRadius: '22px',
      padding: '4px',
      width: '100%',
      maxWidth: '360px',
    },
    "@media (max-width: 480px)": {
      minHeight: '40px',
      borderRadius: '20px',
      padding: '3px',
    },
    "@media (max-width: 375px)": {
      minHeight: '36px',
      borderRadius: '18px',
      padding: '3px',
    },
  },
  tab: {
    color: 'rgba(255, 255, 255, 0.7) !important',
    padding: '0 30px !important',
    minHeight: '50px !important',
    borderRadius: '25px !important',
    textTransform: 'none !important',
    fontSize: '1rem !important',
    fontWeight: '500 !important',
    transition: 'all 0.3s ease !important',
    '&.Mui-selected': {
      color: '#2A2B6A !important',
      background: '#FFC614',
    },
    '& .MuiTab-wrapper': {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    '& svg': {
      marginRight: '10px',
    },
    "@media (max-width: 1200px)": {
      padding: '0 28px !important',
      minHeight: '48px !important',
      fontSize: '0.98rem !important',
      borderRadius: '24px !important',
    },
    "@media (max-width: 960px)": {
      padding: '0 25px !important',
      minHeight: '45px !important',
      fontSize: '0.95rem !important',
      borderRadius: '22px !important',
      '& svg': {
        marginRight: '8px',
        fontSize: '1.3rem',
      },
    },
    "@media (max-width: 600px)": {
      padding: '0 15px !important',
      minHeight: '40px !important',
      fontSize: '0.9rem !important',
      borderRadius: '20px !important',
      flexGrow: 1,
      '& svg': {
        marginRight: '6px',
        fontSize: '1.2rem',
      },
    },
    "@media (max-width: 480px)": {
      padding: '0 12px !important',
      minHeight: '36px !important',
      fontSize: '0.85rem !important',
      borderRadius: '18px !important',
      '& svg': {
        marginRight: '5px',
        fontSize: '1.1rem',
      },
    },
    "@media (max-width: 375px)": {
      padding: '0 8px !important',
      minHeight: '32px !important',
      fontSize: '0.8rem !important',
      borderRadius: '16px !important',
      '& svg': {
        marginRight: '4px',
        fontSize: '1rem',
      },
    },
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    position: 'relative',
    zIndex: 2,
    "@media (max-width: 1200px)": {
      gap: '25px',
    },
    "@media (max-width: 960px)": {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px',
    },
    "@media (max-width: 600px)": {
      gap: '25px',
    },
    "@media (max-width: 480px)": {
      gap: '20px',
    },
    "@media (max-width: 375px)": {
      gap: '15px',
    },
  },
  cardWrapper: {
    flex: '1 1 calc(50% - 15px)',
    maxWidth: 'calc(50% - 15px)',
    display: 'flex',
    "@media (max-width: 1200px)": {
      maxWidth: 'calc(50% - 12.5px)',
    },
    "@media (max-width: 960px)": {
      flex: '1 1 100%',
      maxWidth: '500px',
    },
    "@media (max-width: 600px)": {
      maxWidth: '450px',
    },
    "@media (max-width: 480px)": {
      maxWidth: '400px',
    },
    "@media (max-width: 375px)": {
      maxWidth: '320px',
    },
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
    "@media (max-width: 1200px)": {
      borderRadius: '18px !important',
    },
    "@media (max-width: 960px)": {
      borderRadius: '16px !important',
    },
    "@media (max-width: 600px)": {
      borderRadius: '14px !important',
    },
    "@media (max-width: 480px)": {
      borderRadius: '12px !important',
    },
    "@media (max-width: 375px)": {
      borderRadius: '10px !important',
    },
  },
  cardMedia: {
    height: '200px',
    transition: 'transform 0.6s',
    objectFit: 'cover',
    objectPosition: 'center',
    "@media (max-width: 1200px)": {
      height: '190px',
    },
    "@media (max-width: 960px)": {
      height: '180px',
    },
    "@media (max-width: 600px)": {
      height: '170px',
    },
    "@media (max-width: 480px)": {
      height: '160px',
    },
    "@media (max-width: 375px)": {
      height: '150px',
    },
  },
  hoverOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '200px',
    background: 'linear-gradient(0deg, rgba(42, 43, 106, 0.1) 0%, rgba(255, 255, 255, 0) 50%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    zIndex: 2,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: '0 0 20px 0',
    "@media (max-width: 1200px)": {
      height: '190px',
      padding: '0 0 18px 0',
    },
    "@media (max-width: 960px)": {
      height: '180px',
      padding: '0 0 16px 0',
    },
    "@media (max-width: 600px)": {
      height: '170px',
      padding: '0 0 15px 0',
    },
    "@media (max-width: 480px)": {
      height: '160px',
      padding: '0 0 14px 0',
    },
    "@media (max-width: 375px)": {
      height: '150px',
      padding: '0 0 12px 0',
    },
  },
  viewButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    padding: '10px 24px !important',
    borderRadius: '30px !important', 
    fontWeight: '600 !important',
    textTransform: 'none !important',
    fontSize: '0.95rem !important',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.4s ease !important',
    '&:hover': {
      backgroundColor: 'white !important',
    },
    "@media (max-width: 1200px)": {
      padding: '9px 22px !important',
      fontSize: '0.93rem !important',
    },
    "@media (max-width: 960px)": {
      padding: '9px 20px !important',
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 600px)": {
      padding: '8px 18px !important',
      fontSize: '0.85rem !important',
      borderRadius: '25px !important', 
    },
    "@media (max-width: 480px)": {
      padding: '7px 16px !important',
      fontSize: '0.8rem !important',
      borderRadius: '20px !important', 
    },
    "@media (max-width: 375px)": {
      padding: '6px 14px !important',
      fontSize: '0.75rem !important',
      borderRadius: '18px !important', 
    },
  },
  cardContent: {
    padding: '25px !important',
    color: 'white',
    "@media (max-width: 1200px)": {
      padding: '22px !important',
    },
    "@media (max-width: 960px)": {
      padding: '20px !important',
    },
    "@media (max-width: 600px)": {
      padding: '18px !important',
    },
    "@media (max-width: 480px)": {
      padding: '15px !important',
    },
    "@media (max-width: 375px)": {
      padding: '12px !important',
    },
  },
  programTag: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    zIndex: 3,
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    fontWeight: 'bold !important',
    padding: '5px 12px !important',
    borderRadius: '20px !important',
    fontSize: '0.75rem !important',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15) !important',
    "@media (max-width: 1200px)": {
      top: '14px',
      left: '14px',
      padding: '5px 11px !important',
      fontSize: '0.73rem !important',
    },
    "@media (max-width: 960px)": {
      top: '13px',
      left: '13px',
      padding: '4px 10px !important',
      fontSize: '0.7rem !important',
    },
    "@media (max-width: 600px)": {
      top: '12px',
      left: '12px',
      padding: '4px 9px !important',
      fontSize: '0.68rem !important',
      borderRadius: '18px !important',
    },
    "@media (max-width: 480px)": {
      top: '10px',
      left: '10px',
      padding: '3px 8px !important',
      fontSize: '0.65rem !important',
      borderRadius: '16px !important',
    },
    "@media (max-width: 375px)": {
      top: '8px',
      left: '8px',
      padding: '3px 7px !important',
      fontSize: '0.6rem !important',
      borderRadius: '14px !important',
    },
  },
  durationTag: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    zIndex: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.9) !important',
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
    padding: '5px 12px !important',
    borderRadius: '20px !important',
    fontSize: '0.75rem !important',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15) !important',
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginRight: '4px',
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 1200px)": {
      top: '14px',
      right: '14px',
      padding: '5px 11px !important',
      fontSize: '0.73rem !important',
    },
    "@media (max-width: 960px)": {
      top: '13px',
      right: '13px',
      padding: '4px 10px !important',
      fontSize: '0.7rem !important',
    },
    "@media (max-width: 600px)": {
      top: '12px',
      right: '12px',
      padding: '4px 9px !important',
      fontSize: '0.68rem !important',
      borderRadius: '18px !important',
    },
    "@media (max-width: 480px)": {
      top: '10px',
      right: '10px',
      padding: '3px 8px !important',
      fontSize: '0.65rem !important',
      borderRadius: '16px !important',
      '& svg': {
        marginRight: '3px',
        fontSize: '0.8rem !important',
      },
    },
    "@media (max-width: 375px)": {
      top: '8px',
      right: '8px',
      padding: '3px 7px !important',
      fontSize: '0.6rem !important',
      borderRadius: '14px !important',
      '& svg': {
        marginRight: '2px',
        fontSize: '0.7rem !important',
      },
    },
  },
  programTitle: {
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    marginBottom: '15px !important',
    lineHeight: '1.3 !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.4rem !important',
      marginBottom: '14px !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.35rem !important',
      marginBottom: '13px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.3rem !important',
      marginBottom: '12px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.2rem !important',
      marginBottom: '10px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '1.1rem !important',
      marginBottom: '8px !important',
    },
  },
  divider: {
    backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
    margin: '15px 0 20px !important',
    "@media (max-width: 1200px)": {
      margin: '14px 0 18px !important',
    },
    "@media (max-width: 960px)": {
      margin: '13px 0 17px !important',
    },
    "@media (max-width: 600px)": {
      margin: '12px 0 16px !important',
    },
    "@media (max-width: 480px)": {
      margin: '10px 0 14px !important',
    },
    "@media (max-width: 375px)": {
      margin: '8px 0 12px !important',
    },
  },
  featuresContainer: {
    marginBottom: '20px',
    "@media (max-width: 1200px)": {
      marginBottom: '18px',
    },
    "@media (max-width: 960px)": {
      marginBottom: '16px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '14px',
    },
    "@media (max-width: 480px)": {
      marginBottom: '12px',
    },
    "@media (max-width: 375px)": {
      marginBottom: '10px',
    },
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    '&:last-child': {
      marginBottom: 0
    },
    "@media (max-width: 1200px)": {
      marginBottom: '11px',
    },
    "@media (max-width: 960px)": {
      marginBottom: '10px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '9px',
    },
    "@media (max-width: 480px)": {
      marginBottom: '8px',
    },
    "@media (max-width: 375px)": {
      marginBottom: '7px',
    },
  },
  featureIcon: {
    color: '#FFC614',
    marginRight: '10px',
    marginTop: '3px',
    "@media (max-width: 1200px)": {
      marginRight: '9px',
      fontSize: '0.95rem !important',
    },
    "@media (max-width: 960px)": {
      marginRight: '8px',
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 600px)": {
      marginRight: '7px',
      fontSize: '0.85rem !important',
    },
    "@media (max-width: 480px)": {
      marginRight: '6px',
      fontSize: '0.8rem !important',
    },
    "@media (max-width: 375px)": {
      marginRight: '5px',
      fontSize: '0.75rem !important',
    },
  },
  featureText: {
    fontSize: '0.95rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    "@media (max-width: 1200px)": {
      fontSize: '0.93rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.85rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.8rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.75rem !important',
    },
  },
  // Removed the original engagementText and engagementContainer classes since we're using the new component
  studentCount: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: 'rgba(255, 255, 255, 0.8) !important',
    fontSize: '0.9rem !important',
    "@media (max-width: 600px)": {
      fontSize: '0.85rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.8rem !important',
    },
  },
  pulseDot: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#2ecc71',
    marginRight: '8px',
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'inherit',
      opacity: 0.7,
      animation: '$pulse 1.5s infinite',
    },
    "@media (max-width: 1200px)": {
      width: '9px',
      height: '9px',
      marginRight: '7px',
    },
    "@media (max-width: 960px)": {
      width: '8px',
      height: '8px',
      marginRight: '6px',
    },
    "@media (max-width: 600px)": {
      width: '7px',
      height: '7px',
      marginRight: '5px',
    },
    "@media (max-width: 480px)": {
      width: '6px',
      height: '6px',
      marginRight: '4px',
    },
    "@media (max-width: 375px)": {
      width: '5px',
      height: '5px',
      marginRight: '3px',
    },
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
      opacity: 0.7,
    },
    '70%': {
      transform: 'scale(2)',
      opacity: 0,
    },
    '100%': {
      transform: 'scale(2.5)',
      opacity: 0,
    },
  },
  moreButton: {
    marginTop: '60px !important',
    backgroundColor: 'transparent !important',
    color: 'white !important',
    border: '2px solid rgba(255, 198, 20, 0.5) !important',
    padding: '12px 30px !important',
    borderRadius: '30px !important',
    fontWeight: '600 !important',
    fontSize: '1rem !important',
    transition: 'all 0.3s ease !important',
    display: 'flex !important',
    margin: '0 auto !important',
    '&:hover': {
      backgroundColor: 'rgba(255, 198, 20, 0.1) !important',
      borderColor: '#FFC614 !important',
    },
    "@media (max-width: 1200px)": {
      marginTop: '55px !important',
      padding: '11px 28px !important',
      fontSize: '0.98rem !important',
    },
    "@media (max-width: 960px)": {
      marginTop: '50px !important',
      padding: '10px 25px !important',
      fontSize: '0.95rem !important',
    },
    "@media (max-width: 600px)": {
      marginTop: '40px !important',
      padding: '9px 22px !important',
      fontSize: '0.9rem !important',
      borderRadius: '25px !important',
    },
    "@media (max-width: 480px)": {
      marginTop: '35px !important',
      padding: '8px 20px !important',
      fontSize: '0.85rem !important',
      borderRadius: '20px !important',
    },
    "@media (max-width: 375px)": {
      marginTop: '30px !important',
      padding: '7px 18px !important',
      fontSize: '0.8rem !important',
      borderRadius: '18px !important',
      border: '1.5px solid rgba(255, 198, 20, 0.5) !important',
    },
  },
  glowEffect: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    zIndex: 1,
    opacity: 0.3,
    filter: 'blur(150px)',
    "@media (max-width: 1200px)": {
      width: '450px',
      height: '450px',
      filter: 'blur(140px)',
    },
    "@media (max-width: 960px)": {
      width: '400px',
      height: '400px',
      filter: 'blur(130px)',
    },
    "@media (max-width: 600px)": {
      width: '350px',
      height: '350px',
      filter: 'blur(120px)',
    },
    "@media (max-width: 480px)": {
      width: '300px',
      height: '300px',
      filter: 'blur(100px)',
    },
    "@media (max-width: 375px)": {
      width: '250px',
      height: '250px',
      filter: 'blur(80px)',
    },
  },
  purpleGlow: {
    background: '#8a5cf7',
    top: '-200px',
    right: '-100px',
    "@media (max-width: 1200px)": {
      top: '-180px',
      right: '-90px',
    },
    "@media (max-width: 960px)": {
      top: '-160px',
      right: '-80px',
    },
    "@media (max-width: 600px)": {
      top: '-140px',
      right: '-70px',
    },
    "@media (max-width: 480px)": {
      top: '-120px',
      right: '-60px',
    },
    "@media (max-width: 375px)": {
      top: '-100px',
      right: '-50px',
    },
  },
  // Comment Dialog Styles
  commentDialog: {
    '& .MuiDialog-paper': {
      borderRadius: '15px !important',
      minWidth: '400px',
      "@media (max-width: 600px)": {
        minWidth: '90%',
        margin: '20px',
      },
    },
  },
  commentDialogTitle: {
    color: '#2A2B6A !important',
    fontWeight: 'bold !important',
    borderBottom: '1px solid #eee',
    paddingBottom: '10px !important',
  },
  commentField: {
    marginTop: '15px !important',
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#2A2B6A',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2A2B6A',
      },
    },
  },
  submitCommentButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    '&:hover': {
      backgroundColor: '#1A1B4A !important',
    },
  },
});

const OtherPrograms = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const [lovedPrograms, setLovedPrograms] = useState({});
  const [commentDialog, setCommentDialog] = useState({ open: false, programId: null });
  const [comment, setComment] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleLove = (programId) => {
    setLovedPrograms(prev => ({
      ...prev,
      [programId]: !prev[programId]
    }));
  };

  const handleCommentOpen = (programId) => {
    setCommentDialog({ open: true, programId });
  };

  const handleCommentClose = () => {
    setCommentDialog({ open: false, programId: null });
    setComment('');
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      // Here you would typically send the comment to your backend
      console.log('Comment submitted for program:', commentDialog.programId, 'Comment:', comment);
      handleCommentClose();
    }
  };

  // Using Unsplash images that represent student opportunity in respective fields
  const programs = [
    {
      id: 1,
      title: 'Master Internship In Full Stack',
      duration: '3 Months',
      features: [
        'Build Real Products with Industry Standards',
        'Ecommerce & Marketplace Development',
        'API Integration & Backend Architecture',
        'Performance Optimization Techniques'
      ],
      students: 2854,
      tag: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      level: 'Intermediate',
      category: 'development'
    },
    {
      id: 2,
      title: 'Master Internship In Data Science',
      duration: '3 Months',
      features: [
        'Build Production-Ready ML Models',
        'Advanced Data Visualization & Analysis',
        'AI Chatbot & Recommendation Systems',
        'Predictive Analytics Implementation'
      ],
      students: 2960,
      tag: 'Data Science',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      level: 'Advanced',
      category: 'datascience'
    }
  ];

  return (
    <Box className={classes.section}>
      {/* Glow effect - only top purple glow */}
      <Box className={`${classes.glowEffect} ${classes.purpleGlow}`} />
      
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            Explore Our <span className={classes.highlight}>Programs</span>
          <Box className={classes.topBar}></Box>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Immersive learning experiences designed to transform beginners into industry-ready professionals
          </Typography>
        </Box>

        <Box className={classes.tabsContainer}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            classes={{ root: classes.tabsRoot }}
            centered
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab 
              label="All Programs" 
              className={classes.tab}
              icon={<SchoolIcon />}
            />
            <Tab 
              label="Development" 
              className={classes.tab} 
              icon={<CodeIcon />}
            />
            <Tab 
              label="Data Science" 
              className={classes.tab}
              icon={<DataUsageIcon />}
            />
          </Tabs>
        </Box>

        <Box className={classes.cardsContainer}>
          {programs
            .filter(program => {
              if (tabValue === 0) return true;
              if (tabValue === 1) return program.category === 'development';
              if (tabValue === 2) return program.category === 'datascience';
              return true;
            })
            .map((program) => (
              <Box key={program.id} className={classes.cardWrapper}>
                <Card key={program.id} className={classes.card} sx={{ height: '100%' }}>
                  {/* Tags */}
                  <Chip label={program.tag} className={classes.programTag} />
                  <Chip 
                    icon={<AccessTimeIcon />} 
                    label={program.duration}
                    className={classes.durationTag} 
                  />
                  
                  {/* Media */}
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      className={classes.cardMedia}
                      image={program.image}
                      alt={program.title}
                    />
                    
                    {/* Hover overlay with button */}
                    <Box className={classes.hoverOverlay}>
                      <Button 
                        variant="contained" 
                        className={classes.viewButton}
                        endIcon={<LaunchIcon />}
                      >
                        Launching soon
                      </Button>
                    </Box>
                  </Box>
                  
                  {/* Content */}
                  <Box className={classes.cardContent}>
                    <Typography className={classes.programTitle}>
                      {program.title}
                    </Typography>
                    
                    <Divider className={classes.divider} />
                    
                    {/* Features list */}
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
                    
                    {/* Enhanced Engagement Section - Using the new component */}
                    <EnhancedEngagementSection 
                      onLoveClick={() => handleLove(program.id)}
                      onCommentClick={() => handleCommentOpen(program.id)}
                    />
                    
                    <Box className={classes.engagementContainer}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '15px' }}>
                        <Box className={classes.pulseDot} />
                        <Typography sx={{ 
                          fontSize: { xs: '0.8rem', sm: '0.85rem' }, 
                          fontWeight: 500, 
                          color: '#2ecc71' 
                        }}>
                          Enrolling Now
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
        </Box>
        
        <Button variant="outlined" className={classes.moreButton}>
          View All Programs
        </Button>
      </Container>

      {/* Comment Dialog */}
      <Dialog 
        open={commentDialog.open} 
        onClose={handleCommentClose}
        className={classes.commentDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle className={classes.commentDialogTitle}>
          Share Your Thoughts
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: '#666', marginBottom: '10px' }}>
            What excites you most about this program? Your feedback helps us improve!
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            label="Your comment"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="e.g. I love the hands-on approach and real-world projects..."
            className={classes.commentField}
          />
        </DialogContent>
        <DialogActions sx={{ padding: '16px 24px' }}>
          <Button onClick={handleCommentClose} sx={{ color: '#666' }}>
            Cancel
          </Button>
          <Button 
            onClick={handleCommentSubmit}
            className={classes.submitCommentButton}
            variant="contained"
            startIcon={<SendIcon />}
            disabled={!comment.trim()}
          >
            Share
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OtherPrograms;