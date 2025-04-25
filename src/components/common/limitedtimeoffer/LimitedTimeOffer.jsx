// src/components/common/limitedtimeoffer/LimitedTimeOffer.jsx
import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Paper, 
  Chip
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TimerIcon from '@mui/icons-material/Timer';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #f6f9fc 0%, #edf1f7 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    "@media (max-width: 1200px)": {
      padding: '70px 0',
    },
    "@media (max-width: 960px)": {
      padding: '60px 0',
    },
    "@media (max-width: 600px)": {
      padding: '50px 0',
    },
    "@media (max-width: 480px)": {
      padding: '40px 0',
    },
    "@media (max-width: 375px)": {
      padding: '30px 0',
    },
  },
  decorativeBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'radial-gradient(circle at 20% 20%, rgba(42, 43, 106, 0.05) 0%, transparent 20%), radial-gradient(circle at 80% 80%, rgba(255, 198, 20, 0.07) 0%, transparent 20%)',
    zIndex: 0,
  },
  decorativeCircle: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.1) 0%, rgba(255, 198, 20, 0.08) 100%)',
    filter: 'blur(40px)',
    zIndex: 0,
    "@media (max-width: 600px)": {
      filter: 'blur(30px)',
    },
    "@media (max-width: 375px)": {
      filter: 'blur(20px)',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    marginBottom: '16px !important',
    color: '#0a192f !important',
    position: 'relative',
    textAlign: 'center',
    '& span': {
      display: 'inline-block',
      color: '#FFC614 !important',
      position: 'relative',
      zIndex: 1,
    },
    "@media (max-width: 1200px)": {
      fontSize: '2.3rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.1rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.8rem !important',
      lineHeight: '1.3 !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.6rem !important',
      marginBottom: '12px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '1.4rem !important',
      marginBottom: '10px !important',
    },
  },
  subtitle: {
    fontSize: '1.25rem !important',
    color: '#4A4A4A !important',
    textAlign: 'center',
    marginBottom: '40px !important',
    maxWidth: '800px',
    margin: '0 auto 40px auto !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.2rem !important',
      maxWidth: '750px',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.15rem !important',
      maxWidth: '700px',
      marginBottom: '35px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1rem !important',
      maxWidth: '90%',
      marginBottom: '30px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.9rem !important',
      marginBottom: '25px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.85rem !important',
      marginBottom: '20px !important',
    },
  },
  offerCard: {
    width: "60vw !important",
    position: 'relative',
    background: 'white',
    borderRadius: '20px !important',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1) !important',
    padding: '0 !important',
    zIndex: 1,
    "@media (max-width: 1200px)": {
      width: "70vw !important",
    },
    "@media (max-width: 960px)": {
      width: "80vw !important",
    },
    "@media (max-width: 600px)": {
      width: "90vw !important",
      borderRadius: '15px !important',
    },
    "@media (max-width: 480px)": {
      width: "95vw !important",
    },
    "@media (max-width: 375px)": {
      borderRadius: '12px !important',
    },
  },
  cardHeader: {
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1a1b43 100%)',
    padding: '20px 30px',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center', 
    "@media (max-width: 1200px)": {
      padding: '18px 25px',
    },
    "@media (max-width: 960px)": {
      padding: '16px 20px',
    },
    "@media (max-width: 600px)": {
      padding: '15px 15px',
    },
    "@media (max-width: 480px)": {
      padding: '12px 12px',
    },
    "@media (max-width: 375px)": {
      padding: '10px 10px',
    },
  },
  limitedBadge: {
    position: 'absolute !important',
    top: '-15px',
    right: '30px',
    padding: '8px 15px !important',
    borderRadius: '30px !important',
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    fontWeight: 'bold !important',
    boxShadow: '0 5px 15px rgba(255, 198, 20, 0.3) !important',
    fontSize: '0.9rem !important',
    animation: '$pulse 2s infinite',
    zIndex: 2,
    "@media (max-width: 1200px)": {
      padding: '7px 14px !important',
      fontSize: '0.85rem !important',
    },
    "@media (max-width: 960px)": {
      padding: '6px 12px !important',
      fontSize: '0.8rem !important',
      right: '25px',
    },
    "@media (max-width: 600px)": {
      padding: '5px 10px !important',
      fontSize: '0.75rem !important',
      right: '20px',
      top: '-12px',
    },
    "@media (max-width: 480px)": {
      padding: '4px 8px !important',
      fontSize: '0.7rem !important',
      right: '15px',
      top: '-10px',
    },
    "@media (max-width: 375px)": {
      padding: '3px 6px !important',
      fontSize: '0.65rem !important',
      right: '10px',
      top: '-8px',
    },
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
      boxShadow: '0 5px 15px rgba(255, 198, 20, 0.3)',
    },
    '50%': {
      transform: 'scale(1.05)',
      boxShadow: '0 5px 20px rgba(255, 198, 20, 0.5)',
    },
    '100%': {
      transform: 'scale(1)',
      boxShadow: '0 5px 15px rgba(255, 198, 20, 0.3)',
    },
  },
  offerTitle: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    marginBottom: '6px !important',
    position: 'relative',
    zIndex: 2,
    color: 'white !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.7rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.6rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.4rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.2rem !important',
      marginBottom: '4px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '1.1rem !important',
    },
  },
  offerSubtitle: {
    fontSize: '1.1rem !important',
    opacity: 0.9,
    marginBottom: '0 !important',
    position: 'relative',
    zIndex: 2,
    color: 'white !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.05rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.85rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.8rem !important',
    },
  },
  cardContent: {
    padding: '30px !important',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: "40px",
    "@media (max-width: 1200px)": {
      padding: '25px !important',
      gap: "35px",
    },
    "@media (max-width: 960px)": {
      padding: '20px !important',
      gap: "30px",
    },
    "@media (max-width: 600px)": {
      padding: '18px !important',
      flexDirection: 'column',
      gap: "25px",
    },
    "@media (max-width: 480px)": {
      padding: '15px !important',
      gap: "20px",
    },
    "@media (max-width: 375px)": {
      padding: '12px !important',
      gap: "15px",
    },
  },
  regularPrice: {
    color: '#6d7c90 !important',
    marginBottom: '12px !important',
    display: 'inline-block !important',
    position: 'relative',
    fontSize: '1.3rem !important',
    fontWeight: '500 !important',
    '& span': {
      textDecoration: 'line-through !important',
      position: 'relative',
      '&::after': {
        content: '"-"',
        position: 'absolute',
        right: '-15px',
        transform: 'rotate(-45deg)',
        fontSize: '1.8rem',
        color: '#e74c3c',
        top: '-6px',
      },
    },
    "@media (max-width: 1200px)": {
      fontSize: '1.25rem !important',
      marginBottom: '10px !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.2rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.15rem !important',
      marginBottom: '8px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.1rem !important',
      '& span::after': {
        fontSize: '1.6rem',
        right: '-12px',
      },
    },
    "@media (max-width: 375px)": {
      fontSize: '1rem !important',
      marginBottom: '6px !important',
      '& span::after': {
        fontSize: '1.4rem',
        right: '-10px',
        top: '-5px',
      },
    },
  },
  discountChip: {
    backgroundColor: '#ff5722 !important',
    color: 'white !important',
    fontWeight: 'bold !important',
    fontSize: '0.8rem !important',
    marginLeft: '15px !important',
    boxShadow: '0 3px 6px rgba(255, 87, 34, 0.3) !important',
    height: '26px !important',
    "@media (max-width: 1200px)": {
      fontSize: '0.75rem !important',
      height: '24px !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '0.7rem !important',
      height: '22px !important',
      marginLeft: '12px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.65rem !important',
      height: '20px !important',
      marginLeft: '10px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.6rem !important',
      height: '18px !important',
      marginLeft: '8px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.55rem !important',
      height: '16px !important',
      marginLeft: '6px !important',
      boxShadow: '0 2px 4px rgba(255, 87, 34, 0.3) !important',
    },
  },
  priceBox: {
    background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)',
    borderRadius: '15px',
    padding: '25px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    position: 'relative',
    overflow: 'hidden',
    "@media (max-width: 1200px)": {
      padding: '22px',
    },
    "@media (max-width: 960px)": {
      padding: '20px',
    },
    "@media (max-width: 600px)": {
      padding: '18px',
      marginBottom: '0',
      width: '100%',
    },
    "@media (max-width: 480px)": {
      padding: '15px',
      borderRadius: '12px',
    },
    "@media (max-width: 375px)": {
      padding: '12px',
      borderRadius: '10px',
    },
  },
  priceBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    background: '#2A2B6A',
    color: 'white',
    padding: '5px 12px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    borderRadius: '0 0 0 12px',
    "@media (max-width: 960px)": {
      padding: '4px 10px',
      fontSize: '0.75rem',
    },
    "@media (max-width: 600px)": {
      padding: '3px 8px',
      fontSize: '0.7rem',
    },
    "@media (max-width: 480px)": {
      padding: '3px 6px',
      fontSize: '0.65rem',
    },
    "@media (max-width: 375px)": {
      padding: '2px 5px',
      fontSize: '0.6rem',
      borderRadius: '0 0 0 8px',
    },
  },
  limitedPrice: {
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    color: '#0a192f !important',
    marginBottom: '8px !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.4rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.3rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.2rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.1rem !important',
      marginBottom: '6px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '1rem !important',
      marginBottom: '5px !important',
    },
  },
  priceHighlight: {
    fontSize: '3.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    display: 'inline-block',
    position: 'relative',
    margin: '0 5px',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '5px',
      left: '0',
      width: '100%',
      height: '30%',
      background: 'rgba(255, 198, 20, 0.2)',
      zIndex: -1,
      borderRadius: '2px',
    },
    "@media (max-width: 1200px)": {
      fontSize: '3rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.8rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '2.5rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '2.2rem !important',
      '&::after': {
        bottom: '4px',
        height: '25%',
      },
    },
    "@media (max-width: 375px)": {
      fontSize: '2rem !important',
      '&::after': {
        bottom: '3px',
        height: '20%',
      },
    },
  },
  timerContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px',
  },
  timerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 8px',
    width: '55px',
    "@media (max-width: 1200px)": {
      width: '50px',
      margin: '0 7px',
    },
    "@media (max-width: 960px)": {
      width: '45px',
      margin: '0 6px',
    },
    "@media (max-width: 600px)": {
      width: '40px',
      margin: '0 5px',
    },
    "@media (max-width: 480px)": {
      width: '35px',
      margin: '0 4px',
    },
    "@media (max-width: 375px)": {
      width: '30px',
      margin: '0 3px',
    },
  },
  timerValue: {
    background: '#2A2B6A',
    color: 'white',
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    width: '100%',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    boxShadow: '0 5px 15px rgba(42, 43, 106, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '50%',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px 8px 0 0',
    },
    "@media (max-width: 1200px)": {
      fontSize: '1.4rem !important',
      height: '33px',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.3rem !important',
      height: '32px',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.2rem !important',
      height: '30px',
      borderRadius: '6px',
      '&::after': {
        borderRadius: '6px 6px 0 0',
      },
    },
    "@media (max-width: 480px)": {
      fontSize: '1.1rem !important',
      height: '28px',
      boxShadow: '0 4px 10px rgba(42, 43, 106, 0.2)',
    },
    "@media (max-width: 375px)": {
      fontSize: '1rem !important',
      height: '25px',
      borderRadius: '5px',
      boxShadow: '0 3px 8px rgba(42, 43, 106, 0.2)',
      '&::after': {
        borderRadius: '5px 5px 0 0',
      },
    },
  },
  timerLabel: {
    fontSize: '0.8rem !important',
    color: '#4A4A4A !important',
    marginTop: '5px !important',
    fontWeight: '500 !important',
    "@media (max-width: 1200px)": {
      fontSize: '0.75rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '0.7rem !important',
      marginTop: '4px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.65rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.6rem !important',
      marginTop: '3px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.55rem !important',
    },
  },
  timerText: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.95rem !important',
    color: '#2A2B6A !important',
    fontWeight: 'bold !important',
    marginBottom: '10px !important',
    '& svg': {
      marginRight: '8px',
      color: '#FFC614',
    },
    "@media (max-width: 1200px)": {
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '0.85rem !important',
      '& svg': {
        marginRight: '7px',
        fontSize: '1.1rem',
      },
    },
    "@media (max-width: 600px)": {
      fontSize: '0.8rem !important',
      '& svg': {
        marginRight: '6px',
        fontSize: '1rem',
      },
    },
    "@media (max-width: 480px)": {
      fontSize: '0.75rem !important',
      marginBottom: '8px !important',
      '& svg': {
        marginRight: '5px',
        fontSize: '0.9rem',
      },
    },
    "@media (max-width: 375px)": {
      fontSize: '0.7rem !important',
      marginBottom: '6px !important',
      '& svg': {
        marginRight: '4px',
        fontSize: '0.8rem',
      },
    },
  },
  socialProof: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0 !important',
    padding: '10px 15px',
    borderRadius: '8px',
    backgroundColor: 'rgba(42, 43, 106, 0.03)',
    border: '1px solid rgba(42, 43, 106, 0.1)',
    "@media (max-width: 1200px)": {
      margin: '18px 0 !important',
      padding: '9px 14px',
    },
    "@media (max-width: 960px)": {
      margin: '16px 0 !important',
      padding: '8px 12px',
    },
    "@media (max-width: 600px)": {
      margin: '15px 0 !important',
      padding: '7px 10px',
      borderRadius: '6px',
    },
    "@media (max-width: 480px)": {
      margin: '12px 0 !important',
      padding: '6px 8px',
    },
    "@media (max-width: 375px)": {
      margin: '10px 0 !important',
      padding: '5px 7px',
      borderRadius: '5px',
    },
  },
  socialProofIcon: {
    color: '#FFC614 !important',
    marginRight: '10px !important',
    fontSize: '1.5rem !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.4rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.3rem !important',
      marginRight: '8px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.2rem !important',
      marginRight: '7px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.1rem !important',
      marginRight: '6px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '1rem !important',
      marginRight: '5px !important',
    },
  },
  socialProofText: {
    fontSize: '0.95rem !important',
    color: '#4A4A4A !important',
    fontWeight: '500 !important',
    '& strong': {
      color: '#2A2B6A',
    },
    "@media (max-width: 1200px)": {
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '0.85rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.8rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.75rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.7rem !important',
    },
  },
  applyButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '14px !important',
    borderRadius: '50px !important',
    fontWeight: 'bold !important',
    fontSize: '1.2rem !important',
    width: '50% !important',
    textAlign: 'center !important',
    marginTop: '10px !important',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease !important',
    boxShadow: '0 5px 20px rgba(42, 43, 106, 0.3) !important',
    display: 'block !important',
    margin: '10px auto !important',
    '&:hover': {
      backgroundColor: '#1a1b43 !important',
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(42, 43, 106, 0.4) !important',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '30px',
      height: '600px',
      background: 'rgba(255, 255, 255, 0.2)',
      transform: 'rotate(30deg) translateY(-300px)',
      animation: '$shine 3s infinite',
    },
    "@media (max-width: 1200px)": {
      fontSize: '1.15rem !important',
      padding: '13px !important',
      width: '55% !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.1rem !important',
      padding: '12px !important',
      width: '60% !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1rem !important',
      padding: '10px !important',
      width: '70% !important',
      borderRadius: '40px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.9rem !important',
      padding: '9px !important',
      width: '80% !important',
      boxShadow: '0 4px 15px rgba(42, 43, 106, 0.3) !important',
      '&:hover': {
        boxShadow: '0 8px 20px rgba(42, 43, 106, 0.4) !important',
      },
    },
    "@media (max-width: 375px)": {
      fontSize: '0.85rem !important',
      padding: '8px !important',
      width: '90% !important',
      borderRadius: '30px !important',
      boxShadow: '0 3px 12px rgba(42, 43, 106, 0.3) !important',
      '&:hover': {
        boxShadow: '0 6px 15px rgba(42, 43, 106, 0.4) !important',
      },
    },
  },
  '@keyframes shine': {
    '0%': {
      transform: 'rotate(30deg) translateY(-300px) translateX(-300px)',
    },
    '100%': {
      transform: 'rotate(30deg) translateY(-300px) translateX(300px)',
    },
  },
  featuresTitle: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '25px !important',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '60px',
      height: '3px',
      bottom: '-8px',
      left: '0',
      background: '#FFC614',
    },
    "@media (max-width: 1200px)": {
      fontSize: '1.7rem !important',
      marginBottom: '22px !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.6rem !important',
      marginBottom: '20px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.5rem !important',
      marginBottom: '18px !important',
      textAlign: 'center',
      '&::after': {
        left: '50%',
        transform: 'translateX(-50%)',
        width: '50px',
      },
    },
    "@media (max-width: 480px)": {
      fontSize: '1.3rem !important',
      marginBottom: '16px !important',
      '&::after': {
        width: '40px',
        height: '2.5px',
      },
    },
    "@media (max-width: 375px)": {
      fontSize: '1.2rem !important',
      marginBottom: '14px !important',
      '&::after': {
        width: '35px',
        height: '2px',
        bottom: '-6px',
      },
    },
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
    position: 'relative',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateX(5px)',
    },
    "@media (max-width: 1200px)": {
      marginBottom: '18px',
    },
    "@media (max-width: 960px)": {
      marginBottom: '16px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '14px',
      justifyContent: 'center',
      '&:hover': {
        transform: 'none',
      },
    },
    "@media (max-width: 480px)": {
      marginBottom: '12px',
    },
    "@media (max-width: 375px)": {
      marginBottom: '10px',
    },
  },
  checkIcon: {
    color: '#FFC614 !important',
    marginRight: '15px !important',
    marginTop: '2px !important',
    backgroundColor: 'rgba(255, 198, 20, 0.1)',
    borderRadius: '50%',
    padding: '2px',
    "@media (max-width: 1200px)": {
      marginRight: '14px !important',
    },
    "@media (max-width: 960px)": {
      marginRight: '12px !important',
      fontSize: '20px !important',
    },
    "@media (max-width: 600px)": {
      marginRight: '10px !important',
      fontSize: '18px !important',
    },
    "@media (max-width: 480px)": {
      marginRight: '8px !important',
      fontSize: '16px !important',
      padding: '1px',
    },
    "@media (max-width: 375px)": {
      marginRight: '7px !important',
      fontSize: '14px !important',
    },
  },
  featureText: {
    fontSize: '1.1rem !important',
    color: '#4A4A4A !important',
    fontWeight: '500 !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.05rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.95rem !important',
      textAlign: 'center',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.85rem !important',
    },
  },
  guaranteeBox: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    marginTop: '20px',
    borderRadius: '10px',
    border: '1px dashed rgba(42, 43, 106, 0.3)',
    backgroundColor: 'rgba(42, 43, 106, 0.03)',
    "@media (max-width: 1200px)": {
      padding: '14px',
      marginTop: '18px',
    },
    "@media (max-width: 960px)": {
      padding: '12px',
      marginTop: '16px',
    },
    "@media (max-width: 600px)": {
      padding: '10px',
      marginTop: '15px',
      borderRadius: '8px',
    },
    "@media (max-width: 480px)": {
      padding: '8px',
      marginTop: '12px',
    },
    "@media (max-width: 375px)": {
      padding: '7px',
      marginTop: '10px',
      borderRadius: '6px',
    },
  },
  guaranteeIcon: {
    color: '#2A2B6A !important',
    fontSize: '2rem !important',
    marginRight: '15px !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.9rem !important',
      marginRight: '14px !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.8rem !important',
      marginRight: '12px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.7rem !important',
      marginRight: '10px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.6rem !important',
      marginRight: '8px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '1.5rem !important',
      marginRight: '7px !important',
    },
  },
  guaranteeText: {
    fontSize: '0.95rem !important',
    color: '#4A4A4A !important',
    fontWeight: '500 !important',
    '& strong': {
      color: '#2A2B6A',
    },
    "@media (max-width: 1200px)": {
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '0.85rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.8rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.75rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.7rem !important',
    },
  },
  leftColumn: {
    flex: 1,
    "@media (max-width: 600px)": {
      width: '100%',
    },
  },
  rightColumn: {
    flex: 1,
    "@media (max-width: 600px)": {
      width: '100%',
    },
  },
});

const CountdownTimer = () => {
  const classes = useStyles();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Initialize with all zeros as requested
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              
              if (days > 0) {
                days -= 1;
              } else {
                // Timer completed - reset to zeros as requested
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <Box>
      <Typography className={classes.timerText}>
        <TimerIcon /> Limited time offer expires in:
      </Typography>
      <Box className={classes.timerContainer}>
        <Box className={classes.timerBox}>
          <Typography className={classes.timerValue}>{formatNumber(timeLeft.days)}</Typography>
          <Typography className={classes.timerLabel}>Days</Typography>
        </Box>
        <Box className={classes.timerBox}>
          <Typography className={classes.timerValue}>{formatNumber(timeLeft.hours)}</Typography>
          <Typography className={classes.timerLabel}>Hours</Typography>
        </Box>
        <Box className={classes.timerBox}>
          <Typography className={classes.timerValue}>{formatNumber(timeLeft.minutes)}</Typography>
          <Typography className={classes.timerLabel}>Minutes</Typography>
        </Box>
        <Box className={classes.timerBox}>
          <Typography className={classes.timerValue}>{formatNumber(timeLeft.seconds)}</Typography>
          <Typography className={classes.timerLabel}>Seconds</Typography>
        </Box>
      </Box>
    </Box>
  );
};

const LimitedTimeOffer = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  // Features list
  const features = [
    'Access to all learning materials',
    'Access to 400+ job opportunities',
    '40+ Role specific jobs every week',
    'ATS-friendly resume building',
    'Live coding & mock interviews',
    'Communication skills development',
  ];

  return (
    <Box className={classes.section}>
      {/* Decorative background elements */}
      <Box className={classes.decorativeBg} />
      <Box 
        className={classes.decorativeCircle} 
        sx={{ width: '500px', height: '500px', top: '-250px', right: '-100px' }}
      />
      <Box 
        className={classes.decorativeCircle} 
        sx={{ width: '400px', height: '400px', bottom: '-150px', left: '-100px' }}
      />
      
        <Typography variant="h2" className={classes.title}>
        Limited-Time Offer - Join the <span>Virtual Placement Drive</span> Now
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Grab this exclusive opportunity before it expires and kickstart your tech career journey
        </Typography>

        <Paper className={classes.offerCard} elevation={0}>
          <Box className={classes.cardHeader}>
            <Typography variant="h3" className={classes.offerTitle}>
              Virtual Placement Drive - April 2025
            </Typography>
            <Typography variant="subtitle1" className={classes.offerSubtitle}>
              Fast-track your career with our most popular program
            </Typography>
          </Box>
          
          <Box className={classes.cardContent}>
            {/* Left Column - Price Information */}
            <Box className={classes.leftColumn}>
              <Box className={classes.priceBox}>
                <Box className={classes.priceBadge}>Special Offer</Box>
                <Typography className={classes.regularPrice}>
                  Regular Price: <span>₹499</span>
                </Typography>
                <Chip 
                  label="Save ₹300" 
                  size="small" 
                  className={classes.discountChip}
                />
                
                <Typography className={classes.limitedPrice}>
                  Limited Time Price - INR <span className={classes.priceHighlight}>199</span>
                </Typography>
                
                <CountdownTimer />
              </Box>
              
              <Box className={classes.socialProof}>
                <PeopleIcon className={classes.socialProofIcon} />
                <Typography className={classes.socialProofText}>
                  <strong>253+ students</strong> enrolled in the last week
                </Typography>
              </Box>
            </Box>

            {/* Right Column - Features */}
            <Box className={classes.rightColumn}>
              <Typography variant="h4" className={classes.featuresTitle}>
                What's Included
              </Typography>

              {features.map((feature, index) => (
                <Box key={index} className={classes.featureItem}>
                  <CheckCircleIcon className={classes.checkIcon} />
                  <Typography className={classes.featureText}>
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          
          <Box sx={{ padding: '0 30px 30px' }}>
            <Button 
              variant="contained" 
              className={classes.applyButton}
              onClick={() => {
                navigate('/cart');
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Ensure scroll to top
              }}
            >
              Apply Now
            </Button>
          </Box>
        </Paper>
    </Box>
  );
};

export default LimitedTimeOffer;