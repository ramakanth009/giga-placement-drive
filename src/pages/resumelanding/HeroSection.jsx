// src/components/landing/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button
} from '@mui/material';
import { 
  PlayArrowRounded,
  WorkOutline,
  SchoolOutlined,
  CodeOutlined,
  TrendingUpOutlined,
  CheckCircleOutline,
  PersonOutline,
  BuildOutlined
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import makeStylesWithTheme from '../../styles/makeStylesAdapter';
import { display } from '@mui/system';

const useStyles = makeStylesWithTheme((theme) => ({
  heroContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '3rem 5rem',
    background: 'linear-gradient(135deg, #101138 0%, #2A2B6A 100%) !important',
    minHeight: '100vh',
    '@media (max-width: 1200px)': {
      padding: '2.5rem 3rem',
      minHeight: '90vh',
    },
    '@media (max-width: 960px)': {
      padding: '2rem 2.5rem',
      minHeight: 'auto',
      paddingTop: '3rem',
      paddingBottom: '3rem',
    },
    '@media (max-width: 600px)': {
      padding: '1.5rem 1.5rem',
      paddingTop: '2rem',
      paddingBottom: '2rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem 1rem',
      paddingTop: '1.5rem',
      paddingBottom: '1.5rem',
    },
    '@media (max-width: 375px)': {
      padding: '0.8rem 0.8rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
    },
  },
  heroContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
    position: 'relative',
    zIndex: 2,
    width: '100%',
    '@media (max-width: 1200px)': {
      gap: '3rem',
    },
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      gap: '2.5rem',
    },
    '@media (max-width: 600px)': {
      gap: '2rem',
    },
    '@media (max-width: 480px)': {
      gap: '1.5rem',
    },
    '@media (max-width: 375px)': {
      gap: '1.2rem',
    },
  },

  // ===== LEFT SECTION STYLES =====
  leftSection: {
    width: '55%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingRight: '2rem',
    position: 'relative',
    '@media (max-width: 1200px)': {
      paddingRight: '1.5rem',
    },
    '@media (max-width: 960px)': {
      alignItems: 'center',
      textAlign: 'center',
      paddingRight: 0,
      order: 1,
      width: '100%',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '90%',
      left: '60%',
      width: '300px',
      height: '300px',
      background: 'rgba(255, 198, 21, 0.1)',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: -1,
      '@media (max-width: 1200px)': {
        width: '280px',
        height: '280px',
      },
      '@media (max-width: 960px)': {
        width: '250px',
        height: '250px',
        top: '80%',
        left: '50%',
      },
      '@media (max-width: 600px)': {
        width: '200px',
        height: '200px',
        top: '70%',
      },
      '@media (max-width: 480px)': {
        width: '150px',
        height: '150px',
        top: '60%',
      },
      '@media (max-width: 375px)': {
        width: '120px',
        height: '120px',
        top: '50%',
      },
    },
  },
  mainHeadline: {
    fontSize: '2.2rem !important',
    fontWeight: "bold !important",
    lineHeight: "1.1 !important",
    marginBottom: '1.5rem !important',
    color: '#ffffff',
    opacity: 0,
    animation: '$slideInLeft 1s ease-out 0.2s forwards',
    '@media (max-width: 1200px)': {
      fontSize: '1.8rem !important',
      marginBottom: '1.2rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.5rem !important',
      marginBottom: '1rem !important',
      maxWidth: '100%',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
      marginBottom: '0.8rem !important',
      lineHeight: '1.2 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.8rem !important',
      marginBottom: '0.7rem !important',
      lineHeight: '1.3 !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.6rem !important',
      marginBottom: '0.6rem !important',
      lineHeight: '1.3 !important',
    },
  },
  typewriterText: {
    color: '#ffc615',
    display: 'inline-block',
    borderRight: '3px solid #ffc615',
    paddingRight: '5px',
    animation: '$blink 1s infinite',
    '@media (max-width: 600px)': {
      borderRight: '2px solid #ffc615',
      paddingRight: '3px',
    },
    '@media (max-width: 480px)': {
      borderRight: '2px solid #ffc615',
      paddingRight: '2px',
    },
    '@media (max-width: 375px)': {
      borderRight: '1px solid #ffc615',
      paddingRight: '2px',
    },
  },
  '@keyframes blink': {
    '0%, 50%': { borderColor: 'transparent' },
    '51%, 100%': { borderColor: '#ffc615' },
  },
  '@keyframes slideInLeft': {
    'from': {
      opacity: 0,
      transform: 'translateX(-60px)',
    },
    'to': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    marginBottom: '1rem !important',
    lineHeight: 1.6,
    maxWidth: '900px !important',
    opacity: 0,
    animation: '$fadeInUp 1s ease-out 0.4s forwards',
    '@media (max-width: 1200px)': {
      fontSize: '1rem !important',
      maxWidth: '800px !important',
      marginBottom: '0.8rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '600px !important',
      marginBottom: '0.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      maxWidth: '100% !important',
      marginBottom: '0.7rem !important',
      lineHeight: 1.5,
    },
    '@media (max-width: 480px)': {
      fontSize: '0.85rem !important',
      marginBottom: '0.6rem !important',
      lineHeight: 1.4,
    },
    '@media (max-width: 375px)': {
      fontSize: '0.8rem !important',
      marginBottom: '0.5rem !important',
      lineHeight: 1.4,
    },
  },
  '@keyframes fadeInUp': {
    'from': {
      opacity: 0,
      transform: 'translateY(30px)',
    },
    'to': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  ctaContainer: {
    display: 'flex',
    gap: '1.5rem !important',
    marginBottom: '2rem !important',
    opacity: 0,
    animation: '$scaleIn 0.8s ease-out 0.6s forwards',
    '@media (max-width: 1200px)': {
      gap: '1.2rem !important',
      marginBottom: '1.8rem !important',
    },
    '@media (max-width: 960px)': {
      gap: '1rem !important',
      marginBottom: '1.5rem !important',
      justifyContent: 'center',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: '0.8rem !important',
      width: '100%',
      marginBottom: '1.2rem !important',
    },
    '@media (max-width: 480px)': {
      gap: '0.7rem !important',
      marginBottom: '1rem !important',
    },
    '@media (max-width: 375px)': {
      gap: '0.6rem !important',
      marginBottom: '0.8rem !important',
    },
  },
  '@keyframes scaleIn': {
    'from': {
      opacity: 0,
      transform: 'scale(0.8)',
    },
    'to': {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
  primaryCTA: {
    background: 'linear-gradient(135deg, #ffc615 0%, #ffb700 100%) !important',
    color: '#1a1b4b !important',
    padding: '1rem 2.5rem !important',
    fontSize: '1.3rem !important',
    fontWeight: 'Bold !important',
    borderRadius: '50px !important',
    textTransform: 'none',
    boxShadow: '0 8px 32px rgba(255, 198, 21, 0.4)',
    transition: 'all 0.15s cubic-bezier(0.4, 0, 0.1, 1) !important',
    transform: 'translateY(0) scale(1)',
    '&:hover': {
      transform: 'translateY(-2px) scale(1.01) !important',
      boxShadow: '0 12px 40px rgba(255, 198, 21, 0.6) !important',
      background: 'linear-gradient(135deg, #ffb700 0%, #ffa000 100%) !important',
    },
    '&:active': {
      transform: 'translateY(0) scale(0.98) !important',
      transition: 'all 0.08s cubic-bezier(0.4, 0, 0.1, 1) !important',
    },
    '@media (max-width: 1200px)': {
      padding: '0.9rem 2.2rem !important',
      fontSize: '1.2rem !important',
    },
    '@media (max-width: 960px)': {
      padding: '0.8rem 2rem !important',
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      padding: '1rem 2rem !important',
      fontSize: '1rem !important',
    },
    '@media (max-width: 480px)': {
      padding: '0.9rem 1.8rem !important',
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 375px)': {
      padding: '0.8rem 1.5rem !important',
      fontSize: '0.9rem !important',
    },
  },
  secondaryCTA: {
    color: '#ffffff',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    padding: '1rem 2rem',
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: '50px',
    textTransform: 'none',
    backdropFilter: 'blur(10px)',
    background: 'rgba(255, 255, 255, 0.1)',
    transition: 'all 0.12s cubic-bezier(0.4, 0, 0.1, 1) !important',
    transform: 'translateY(0)',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.2) !important',
      borderColor: 'rgba(255, 255, 255, 0.5) !important',
      transform: 'translateY(-1px) !important',
      backdropFilter: 'blur(15px) !important',
    },
    '&:active': {
      transform: 'translateY(0) !important',
      transition: 'all 0.06s cubic-bezier(0.4, 0, 0.1, 1) !important',
    },
    '@media (max-width: 1200px)': {
      padding: '0.9rem 1.8rem',
      fontSize: '0.95rem',
    },
    '@media (max-width: 960px)': {
      padding: '0.8rem 1.6rem',
      fontSize: '0.9rem',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      padding: '1rem 2rem',
      fontSize: '0.9rem',
    },
    '@media (max-width: 480px)': {
      padding: '0.9rem 1.8rem',
      fontSize: '0.85rem',
    },
    '@media (max-width: 375px)': {
      padding: '0.8rem 1.5rem',
      fontSize: '0.8rem',
    },
  },
  statsContainer: {
    display: 'flex',
    gap: '2rem !important',
    opacity: 0,
    animation: '$slideInStagger 1s ease-out 0.8s forwards',
    '@media (max-width: 1200px)': {
      gap: '1.8rem !important',
    },
    '@media (max-width: 960px)': {
      justifyContent: 'center',
      gap: '1.5rem !important',
    },
    '@media (max-width: 600px)': {
      gap: '1.2rem !important',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    '@media (max-width: 480px)': {
      gap: '1rem !important',
    },
    '@media (max-width: 375px)': {
      gap: '0.5rem !important',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  '@keyframes slideInStagger': {
    'from': {
      opacity: 0,
      transform: 'translateX(-40px)',
    },
    'to': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  statItem: {
    textAlign: 'left',
    animation: '$bounceIn 0.6s ease-out forwards',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.1, 1)',
    '&:nth-child(1)': { animationDelay: '1s' },
    '&:nth-child(2)': { animationDelay: '1.2s' },
    '&:nth-child(3)': { animationDelay: '1.4s' },
    '&:hover': {
      transform: 'translateY(-3px) scale(1.05)',
      '& $statNumber': {
        color: '#ffb700 !important',
      },
    },
    '@media (max-width: 960px)': {
      textAlign: 'center',
    },
    '@media (max-width: 375px)': {
      textAlign: 'center',
      width: '100%',
    },
  },
  '@keyframes bounceIn': {
    '0%': {
      opacity: 0,
      transform: 'scale(0.3)',
    },
    '50%': {
      opacity: 1,
      transform: 'scale(1.1)',
    },
    '100%': {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
  statNumber: {
    fontSize: '2.5rem !important',
    fontWeight: "800 !important",
    color: '#ffc615 !important',
    lineHeight: 1,
    transition: 'color 0.15s cubic-bezier(0.4, 0, 0.1, 1)',
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.6rem !important',
    },
  },
  statLabel: {
    fontSize: '0.9rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    fontWeight: 500,
    '@media (max-width: 1200px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.75rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.65rem !important',
    },
  },

  // ===== RIGHT SECTION STYLES =====
  rightSection: {
    width: '45%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingLeft: '2rem',
    '@media (max-width: 1200px)': {
      paddingLeft: '1.5rem',
    },
    '@media (max-width: 960px)': {
      paddingLeft: 0,
      order: 0,
      width: '100%',
      justifyContent: 'center',
    },
    '@media (max-width: 600px)': {display: 'none'},
    '@media (max-width: 480px)': {display: 'none'},
    '@media (max-width: 375px)': {display: 'none'},
  },
  resumePreviewContainer: {
    position: 'relative',
    perspective: '1000px',
    animation: '$floatIn 1.2s ease-out 0.5s forwards',
    opacity: 0,
    '@media (max-width: 960px)': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  '@keyframes floatIn': {
    'from': {
      opacity: 0,
      transform: 'translateY(60px) rotateX(20deg)',
    },
    'to': {
      opacity: 1,
      transform: 'translateY(0) rotateX(0deg)',
    },
  },
  resumeCard: {
    width: '350px',
    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transform: 'perspective(1000px) rotateY(-8deg) rotateX(3deg) scale(1) translateZ(0)',
    transformOrigin: 'center center',
    transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s cubic-bezier(0.23, 1, 0.32, 1), backdrop-filter 0.6s ease-out, border-color 0.6s ease-out, background 0.6s ease-out',
    animation: '$morphCard 4s ease-in-out infinite',
    willChange: 'transform',
    '&:hover': {
      // transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05) translateZ(50px)',
      boxShadow: '0 40px 100px rgba(0, 0, 0, 0.5), 0 0 50px rgba(255, 198, 21, 0.3)',
      animation: 'none',
      backdropFilter: 'blur(30px)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 100%)',
    },
    '@media (max-width: 1200px)': {
      width: '320px',
      padding: '1.8rem',
    },
    '@media (max-width: 960px)': {
      width: '300px',
      padding: '1.5rem',
      transform: 'rotateY(0deg) rotateX(0deg)',
    },
    '@media (max-width: 600px)': {
      width: '280px',
      padding: '1.2rem',
      borderRadius: '15px',
    },
    '@media (max-width: 480px)': {
      width: '260px',
      padding: '1rem',
      borderRadius: '12px',
    },
    '@media (max-width: 375px)': {
      width: '240px',
      padding: '0.8rem',
      borderRadius: '10px',
    },
  },
  '@keyframes morphCard': {
    '0%, 100%': {
      transform: 'rotateY(-8deg) rotateX(3deg)',
    },
    '50%': {
      transform: 'rotateY(-5deg) rotateX(5deg)',
    },
  },
  resumeSection: {
    marginBottom: '1.5rem',
    opacity: 0,
    animation: '$buildSection 0.8s ease-out forwards',
    transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
    transformOrigin: 'left center',
    willChange: 'transform',
    '&:nth-child(1)': { animationDelay: '1.5s' },
    '&:nth-child(2)': { animationDelay: '1.8s' },
    '&:nth-child(3)': { animationDelay: '2.1s' },
    '&:nth-child(4)': { animationDelay: '2.4s' },
    '$resumeCard:hover &': {
      transform: 'translateX(8px)',
    },
    '@media (max-width: 1200px)': {
      marginBottom: '1.3rem',
    },
    '@media (max-width: 960px)': {
      marginBottom: '1.2rem',
    },
    '@media (max-width: 600px)': {
      marginBottom: '1rem',
    },
    '@media (max-width: 480px)': {
      marginBottom: '0.8rem',
    },
    '@media (max-width: 375px)': {
      marginBottom: '0.7rem',
    },
  },
  '@keyframes buildSection': {
    'from': {
      opacity: 0,
      transform: 'translateX(20px) scale(0.8)',
    },
    'to': {
      opacity: 1,
      transform: 'translateX(0) scale(1)',
    },
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
    color: '#27286c',
    fontWeight: 600,
    fontSize: '0.9rem',
    animation: '$iconSpin 2s ease-in-out infinite',
    transition: 'color 0.6s cubic-bezier(0.23, 1, 0.32, 1), transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
    transformOrigin: 'left center',
    willChange: 'transform, color',
    '$resumeCard:hover &': {
      color: '#1a1b4b',
      transform: 'scale(1.02)',
    },
    '@media (max-width: 1200px)': {
      fontSize: '0.85rem',
      gap: '0.4rem',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.8rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.75rem',
      gap: '0.3rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.7rem',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.65rem',
      gap: '0.2rem',
    },
  },
  '@keyframes iconSpin': {
    '0%, 90%, 100%': {
      transform: 'rotate(0deg)',
    },
    '45%': {
      transform: 'rotate(5deg)',
    },
  },
  sectionContent: {
    height: '8px',
    background: 'linear-gradient(90deg, #27286c 0%, #ffc615 100%)',
    borderRadius: '4px',
    position: 'relative',
    overflow: 'hidden',
    animation: '$pulseGlow 3s ease-in-out infinite',
    transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
    willChange: 'transform, box-shadow',
    '$resumeCard:hover &': {
      transform: 'scaleX(1.03)',
      boxShadow: '0 0 25px rgba(255, 198, 21, 0.8)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
      animation: '$shimmer 2.5s infinite',
    },
    '@media (max-width: 1200px)': {
      height: '7px',
    },
    '@media (max-width: 960px)': {
      height: '6px',
    },
    '@media (max-width: 600px)': {
      height: '5px',
      borderRadius: '3px',
    },
    '@media (max-width: 480px)': {
      height: '4px',
      borderRadius: '2px',
    },
    '@media (max-width: 375px)': {
      height: '3px',
      borderRadius: '2px',
    },
  },
  '@keyframes pulseGlow': {
    '0%, 100%': {
      boxShadow: '0 0 5px rgba(255, 198, 21, 0.3)',
    },
    '50%': {
      boxShadow: '0 0 20px rgba(255, 198, 21, 0.8)',
    },
  },
  '@keyframes shimmer': {
    '0%': { left: '-100%' },
    '100%': { left: '100%' },
  },
  progressBars: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '1rem',
    animation: '$slideUpProgress 1s ease-out 2.7s forwards',
    opacity: 0,
    '@media (max-width: 1200px)': {
      gap: '0.4rem',
      marginTop: '0.8rem',
    },
    '@media (max-width: 960px)': {
      gap: '0.3rem',
      marginTop: '0.7rem',
    },
    '@media (max-width: 600px)': {
      gap: '0.3rem',
      marginTop: '0.6rem',
    },
    '@media (max-width: 480px)': {
      gap: '0.2rem',
      marginTop: '0.5rem',
    },
    '@media (max-width: 375px)': {
      gap: '0.2rem',
      marginTop: '0.4rem',
    },
  },
  '@keyframes slideUpProgress': {
    'from': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    'to': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  progressBar: {
    height: '4px',
    background: 'rgba(39, 40, 108, 0.2)',
    borderRadius: '2px',
    overflow: 'hidden',
    '@media (max-width: 600px)': {
      height: '3px',
    },
    '@media (max-width: 480px)': {
      height: '2px',
    },
    '@media (max-width: 375px)': {
      height: '2px',
    },
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #27286c, #ffc615)',
    borderRadius: '2px',
    animation: '$fillProgress 3s ease-out infinite',
    transition: 'animation-duration 0.15s cubic-bezier(0.4, 0, 0.1, 1)',
  },
  '@keyframes fillProgress': {
    '0%': { 
      width: '0%',
      transform: 'scaleX(0)',
    },
    '50%': { 
      width: '85%',
      transform: 'scaleX(1)',
    },
    '100%': { 
      width: '0%',
      transform: 'scaleX(0)',
    },
  },
  floatingElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  floatingIcon: {
    position: 'absolute',
    padding: '12px',
    borderRadius: '50%',
    background: 'rgba(255, 198, 21, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 198, 21, 0.3)',
    color: '#ffc615',
    animation: '$floatAround 8s ease-in-out infinite',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.1, 1)',
    '&:hover': {
      transform: 'scale(1.2) !important',
      background: 'rgba(255, 198, 21, 0.2) !important',
      border: '1px solid rgba(255, 198, 21, 0.5) !important',
      backdropFilter: 'blur(15px) !important',
    },
    '@media (max-width: 1200px)': {
      width: '42px',
      height: '42px',
      padding: '10px',
    },
  },
  '@keyframes floatAround': {
    '0%, 100%': {
      transform: 'translateY(0) rotate(0deg) scale(1)',
    },
    '25%': {
      transform: 'translateY(-15px) rotate(90deg) scale(1.1)',
    },
    '50%': {
      transform: 'translateY(0) rotate(180deg) scale(0.9)',
    },
    '75%': {
      transform: 'translateY(15px) rotate(270deg) scale(1.1)',
    },
  },
  floatingIcon1: {
    top: '10%',
    left: '10%',
    animationDelay: '0s',
  },
  floatingIcon2: {
    top: '20%',
    right: '7%',
    animationDelay: '2s',
  },
  floatingIcon3: {
    bottom: '30%',
    left: '5%',
    animationDelay: '4s',
  },
  floatingIcon4: {
    bottom: '15%',
    right: '10%',
    animationDelay: '6s',
  },
}));

const HeroSection = ({ handleCTAClick }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [typewriterText, setTypewriterText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typewriterWords = [
    'Free Resume Builder',
    'AI Assistance ',
    'Smart Suggestion',
  ];

  useEffect(() => {
    const currentWord = typewriterWords[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText.length < currentWord.length) {
          setTypewriterText(currentWord.substring(0, typewriterText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(typewriterText.substring(0, typewriterText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typewriterWords.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, currentTextIndex, typewriterWords]);

  const stats = [
    { number: '10K+', label: 'Resumes Created' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Available' }
  ];

  const resumeSections = [
    { icon: PersonOutline, title: 'Personal Info' },
    { icon: SchoolOutlined, title: 'Education' },
    { icon: CodeOutlined, title: 'Skills' },
    { icon: WorkOutline, title: 'Experience' }
  ];

  return (
    <Box className={classes.heroContainer}>
      <Box className={classes.heroContent}>
        {/* LEFT SECTION - Content */}
        <Box className={classes.leftSection}>
          <Typography variant="h1" className={classes.mainHeadline}>
            Giga resume builder <br/> create resume in just a click
            <br />
            <span className={classes.typewriterText}>
              {typewriterText}
            </span>
          </Typography>

          <Typography variant="h2" className={classes.subtitle}>
            Whether you're a fresher looking for your first IT job or a professional aiming for a career switch, Gigaversity's Resume Builder helps you build a resume that reflects your skills, projects, and growth in a recruiter-approved, ATS-friendly format.
          </Typography>
          <Typography variant="h2" className={classes.subtitle}>
            Choose from a variety of resume templates that adapt to your career stage, helping you present your achievements, skills, and projects clearly and professionally so recruiters notice what truly matters.
          </Typography>

          <Box className={classes.ctaContainer}>
            <Button
              className={classes.primaryCTA}
              onClick={() => window.location.href = 'https://resume.gigaversity.in/'}
              startIcon={<PlayArrowRounded />}
            >
              Create Resume Now
            </Button>
          </Box>

          <Box className={classes.statsContainer}>
            {stats.map((stat, index) => (
              <Box key={index} className={classes.statItem}>
                <Typography className={classes.statNumber}>
                  {stat.number}
                </Typography>
                <Typography className={classes.statLabel}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* RIGHT SECTION - Interactive Resume Preview */}
        <Box className={classes.rightSection}>
          {/* Floating Background Elements */}
          <Box className={classes.floatingElements}>
            <Box className={`${classes.floatingIcon} ${classes.floatingIcon1}`}>
              <TrendingUpOutlined />
            </Box>
            <Box className={`${classes.floatingIcon} ${classes.floatingIcon2}`}>
              <CheckCircleOutline />
            </Box>
            <Box className={`${classes.floatingIcon} ${classes.floatingIcon3}`}>
              <BuildOutlined />
            </Box>
            <Box className={`${classes.floatingIcon} ${classes.floatingIcon4}`}>
              <WorkOutline />
            </Box>
          </Box>

          <Box className={classes.resumePreviewContainer}>
            <Box className={classes.resumeCard}>
              {resumeSections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <Box key={index} className={classes.resumeSection}>
                    <Box className={classes.sectionHeader}>
                      <IconComponent fontSize="small" />
                      <Typography variant="body2">{section.title}</Typography>
                    </Box>
                    <Box className={classes.sectionContent} />
                  </Box>
                );
              })}
              
              <Box className={classes.progressBars}>
                {[1, 2, 3].map((_, index) => (
                  <Box key={index} className={classes.progressBar}>
                    <Box 
                      className={classes.progressFill} 
                      style={{ animationDelay: `${index * 0.8}s` }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;