import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Code, Storage, Language, Cloud, Security, Build, BugReport, DataUsage } from '@mui/icons-material';

const useStyles = makeStyles({
  section: {
    position: 'relative',
    padding: '30px 0',
    backgroundColor: '#2A2B6A',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url("/path-to-network-pattern.png")',
      backgroundSize: 'cover',
      opacity: 0.2,
      zIndex: 1,
    },
    '@media (max-width: 1200px)': {
      padding: '55px 0',
    },
    '@media (max-width: 960px)': {
      padding: '40px 0',
    },
    '@media (max-width: 600px)': {
      padding: '30px 0',
    },
    '@media (max-width: 480px)': {
      padding: '25px 0',
    },
    '@media (max-width: 375px)': {
      padding: '20px 0',
    },
  },
  networkCanvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 3,
    '@media (max-width: 1200px)': {
      padding: '0 20px',
    },
    '@media (max-width: 960px)': {
      padding: '0 16px',
    },
    '@media (max-width: 600px)': {
      padding: '0 12px',
    },
    '@media (max-width: 480px)': {
      padding: '0 10px',
    },
    '@media (max-width: 375px)': {
      padding: '0 8px',
    },
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
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
    color: 'white !important',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.4rem !important',
    },
  },
  toolsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '24px',
    marginBottom: '40px',
    '@media (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '22px',
      marginBottom: '35px',
    },
    '@media (max-width: 960px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: '20px',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '8px',
      marginBottom: '30px',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '6px',
      marginBottom: '25px',
    },
    '@media (max-width: 375px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '4px',
      marginBottom: '20px',
    },
  },
  toolCard: {
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    borderRadius: '16px',
    padding: '24px 20px',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
    border: '2px solid transparent',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.9) 100%)',
      zIndex: 1,
      transition: 'opacity 0.3s ease',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
      opacity: 0,
      transition: 'opacity 0.4s ease',
      zIndex: 2,
      transform: 'scale(0)',
    },
    '&:hover': {
      transform: 'translateY(-8px) scale(1.02)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)',
      '&::after': {
        opacity: 1,
        transform: 'scale(1)',
      },
    },
    '@media (max-width: 1200px)': {
      padding: '22px 18px',
      borderRadius: '14px',
    },
    '@media (max-width: 960px)': {
      padding: '20px 16px',
    },
    '@media (max-width: 600px)': {
      padding: '12px 8px',
      borderRadius: '8px',
    },
    '@media (max-width: 480px)': {
      padding: '10px 6px',
      borderRadius: '6px',
    },
    '@media (max-width: 375px)': {
      padding: '8px 4px',
      borderRadius: '6px',
    },
  },
  selectedToolCard: {
    transform: 'translateY(-4px)',
    boxShadow: '0 16px 32px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
    '&::before': {
      opacity: 0.95,
    },
  },
  premiumBadge: {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
    color: 'white',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
    position: 'absolute',
    top: '12px',
    right: '12px',
    zIndex: 3,
    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
    transition: 'all 0.3s ease',
    '@media (max-width: 1200px)': {
      fontSize: '0.73rem',
      padding: '5px 12px',
      top: '10px',
      right: '10px',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.72rem',
      padding: '5px 11px',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.7rem',
      padding: '4px 10px',
      top: '8px',
      right: '8px',
      borderRadius: '16px',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.65rem',
      padding: '3px 8px',
      top: '6px',
      right: '6px',
      borderRadius: '14px',
    },
  },
  toolIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '16px',
    position: 'relative',
    zIndex: 3,
    '@media (max-width: 1200px)': {
      marginBottom: '14px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '12px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '8px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '6px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '4px',
    },
  },
  toolIconWrapper: {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: '0',
      borderRadius: '16px',
      padding: '2px',
      background: 'linear-gradient(135deg, currentColor, transparent)',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'exclude',
      maskComposite: 'exclude',
      opacity: 0.6,
      transition: 'opacity 0.3s ease',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: '2px',
      borderRadius: '14px',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248,249,250,0.8))',
      zIndex: 1,
    },
    '$toolCard:hover &': {
      transform: 'scale(1.1) rotate(5deg)',
      '&::before': {
        opacity: 1,
      },
    },
    '@media (max-width: 1200px)': {
      width: '60px',
      height: '60px',
      borderRadius: '14px',
      '&::before': {
        borderRadius: '14px',
      },
      '&::after': {
        borderRadius: '12px',
      },
    },
    '@media (max-width: 960px)': {
      width: '56px',
      height: '56px',
      borderRadius: '12px',
      '&::before': {
        borderRadius: '12px',
      },
      '&::after': {
        borderRadius: '10px',
      },
    },
    '@media (max-width: 600px)': {
      width: '36px',
      height: '36px',
      borderRadius: '6px',
      '&::before': {
        borderRadius: '6px',
      },
      '&::after': {
        borderRadius: '4px',
      },
    },
    '@media (max-width: 480px)': {
      width: '32px',
      height: '32px',
      borderRadius: '5px',
      '&::before': {
        borderRadius: '5px',
      },
      '&::after': {
        borderRadius: '3px',
      },
    },
    '@media (max-width: 375px)': {
      width: '28px',
      height: '28px',
      borderRadius: '4px',
      '&::before': {
        borderRadius: '4px',
      },
      '&::after': {
        borderRadius: '2px',
      },
    },
  },
  toolIcon: {
    fontSize: '32px !important',
    position: 'relative',
    zIndex: 2,
    transition: 'all 0.3s ease',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
    '$toolCard:hover &': {
      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
    },
    '@media (max-width: 1200px)': {
      fontSize: '30px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '28px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '18px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '16px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '14px !important',
    },
  },
  toolHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '8px',
    position: 'relative',
    zIndex: 3,
    '@media (max-width: 1200px)': {
      marginBottom: '7px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '6px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '5px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '4px',
    },
  },
  toolName: {
    fontWeight: '700 !important',
    fontSize: '1.2rem !important',
    color: '#1a1a1a !important',
    textAlign: 'center',
    lineHeight: '1.3 !important',
    marginBottom: '0 !important',
    transition: 'color 0.3s ease',
    '$toolCard:hover &': {
      color: '#000 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '1.15rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.12rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.75rem !important',
      lineHeight: '1.1 !important',
    },
  },
  priceText: {
    fontSize: '0.8rem !important',
    color: '#666 !important',
    fontWeight: '500 !important',
    marginTop: '4px',
    opacity: 0.8,
    transition: 'opacity 0.3s ease',
    '$toolCard:hover &': {
      opacity: 1,
    },
    '@media (max-width: 1200px)': {
      fontSize: '0.78rem !important',
      marginTop: '3px',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.76rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.65rem !important',
      marginTop: '1px',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.6rem !important',
      marginTop: '1px',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.55rem !important',
    },
  },
  toolDetails: {
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)',
    marginTop: '24px',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, transparent, currentColor, transparent)',
      opacity: 0.8,
    },
    '@media (max-width: 1200px)': {
      padding: '28px',
      borderRadius: '18px',
      marginTop: '22px',
    },
    '@media (max-width: 960px)': {
      padding: '26px',
      marginTop: '20px',
    },
    '@media (max-width: 600px)': {
      padding: '24px',
      borderRadius: '16px',
      marginTop: '18px',
    },
    '@media (max-width: 480px)': {
      padding: '20px',
      borderRadius: '14px',
      marginTop: '16px',
    },
    '@media (max-width: 375px)': {
      padding: '16px',
      borderRadius: '12px',
      marginTop: '14px',
    },
  },
  twoColumn: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '32px',
    '@media (max-width: 1200px)': {
      gap: '28px',
    },
    '@media (max-width: 960px)': {
      gap: '26px',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '24px',
    },
    '@media (max-width: 600px)': {
      gap: '20px',
    },
    '@media (max-width: 480px)': {
      gap: '18px',
    },
    '@media (max-width: 375px)': {
      gap: '16px',
    },
  },
  toolDetailsHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    paddingBottom: '16px',
    borderBottom: '2px solid rgba(0, 0, 0, 0.05)',
    '@media (max-width: 1200px)': {
      marginBottom: '18px',
      paddingBottom: '14px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '16px',
      paddingBottom: '12px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '14px',
      paddingBottom: '10px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '12px',
      paddingBottom: '8px',
    },
  },
  toolDetailsName: {
    fontSize: '1.8rem !important',
    fontWeight: '700 !important',
    color: '#1a1a1a !important',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: 0,
      width: '60px',
      height: '3px',
      background: 'currentColor',
      borderRadius: '2px',
    },
    '@media (max-width: 1200px)': {
      fontSize: '1.7rem !important',
      '&::after': {
        width: '55px',
        bottom: '-7px',
      },
    },
    '@media (max-width: 960px)': {
      fontSize: '1.6rem !important',
      '&::after': {
        width: '50px',
        bottom: '-6px',
      },
    },
    '@media (max-width: 600px)': {
      fontSize: '1.55rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.5rem !important',
      '&::after': {
        width: '45px',
        height: '2px',
        bottom: '-5px',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '1.4rem !important',
      '&::after': {
        width: '40px',
        bottom: '-4px',
      },
    },
  },
  toolDescription: {
    fontSize: '1rem !important',
    lineHeight: '1.6 !important',
    color: '#4a5568 !important',
    marginBottom: '24px !important',
    fontWeight:"bold !important",
    '@media (max-width: 1200px)': {
      fontSize: '0.98rem !important',
      marginBottom: '22px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.96rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.94rem !important',
      lineHeight: '1.5 !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      marginBottom: '16px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      lineHeight: '1.4 !important',
      marginBottom: '14px !important',
    },
  },
  useCases: {
    marginTop: '24px',
    '& > h6': {
      fontSize: '1.2rem !important',
      fontWeight: '600 !important',
      color: '#2d3748 !important',
      marginBottom: '16px !important',
    },
    '@media (max-width: 1200px)': {
      marginTop: '22px',
      '& > h6': {
        fontSize: '1.18rem !important',
        marginBottom: '14px !important',
      },
    },
    '@media (max-width: 960px)': {
      marginTop: '20px',
      '& > h6': {
        fontSize: '1.16rem !important',
        marginBottom: '12px !important',
      },
    },
    '@media (max-width: 480px)': {
      marginTop: '18px',
      '& > h6': {
        fontSize: '1.1rem !important',
        marginBottom: '10px !important',
      },
    },
    '@media (max-width: 375px)': {
      marginTop: '16px',
      '& > h6': {
        fontSize: '1.05rem !important',
        marginBottom: '8px !important',
      },
    },
  },
  useCaseItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    padding: '2px 0',
    color: '#2d3748 !important',
    '& span': {
      fontSize: '1rem !important',
      color: '#4a5568 !important',
      lineHeight: '1.5 !important',
    },
    '@media (max-width: 1200px)': {
      marginBottom: '10px',
      '& span': {
        fontSize: '0.98rem !important',
      },
    },
    '@media (max-width: 960px)': {
      marginBottom: '9px',
      '& span': {
        fontSize: '0.96rem !important',
      },
    },
    '@media (max-width: 480px)': {
      marginBottom: '8px',
      '& span': {
        fontSize: '0.9rem !important',
        lineHeight: '1.4 !important',
      },
    },
    '@media (max-width: 375px)': {
      marginBottom: '6px',
      '& span': {
        fontSize: '0.85rem !important',
        lineHeight: '1.3 !important',
      },
    },
  },
  arrowRight: {
    color: 'currentColor !important',
    marginRight: '12px !important',
    fontWeight: 'bold !important',
    fontSize: '1.1rem !important',
    '@media (max-width: 1200px)': {
      marginRight: '10px !important',
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 960px)': {
      marginRight: '9px !important',
      fontSize: '1rem !important',
    },
    '@media (max-width: 480px)': {
      marginRight: '8px !important',
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 375px)': {
      marginRight: '6px !important',
      fontSize: '0.9rem !important',
    },
  },
  capabilitiesSection: {
    marginTop: '32px',
    '& > h6': {
      fontSize: '1.2rem !important',
      fontWeight: '600 !important',
      color: '#2d3748 !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 1200px)': {
      marginTop: '28px',
      '& > h6': {
        fontSize: '1.18rem !important',
        marginBottom: '18px !important',
      },
    },
    '@media (max-width: 960px)': {
      marginTop: '26px',
      '& > h6': {
        fontSize: '1.16rem !important',
        marginBottom: '16px !important',
      },
    },
    '@media (max-width: 480px)': {
      marginTop: '22px',
      '& > h6': {
        fontSize: '1.1rem !important',
        marginBottom: '14px !important',
      },
    },
    '@media (max-width: 375px)': {
      marginTop: '18px',
      '& > h6': {
        fontSize: '1.05rem !important',
        marginBottom: '12px !important',
      },
    },
  },
  capabilityChart: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    '@media (max-width: 1200px)': {
      gap: '10px',
    },
    '@media (max-width: 960px)': {
      gap: '9px',
    },
    '@media (max-width: 480px)': {
      gap: '8px',
    },
    '@media (max-width: 375px)': {
      gap: '6px',
    },
  },
  capabilityBar: {
    position: 'relative',
    height: '48px',
    backgroundColor: '#f7fafc',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid #e2e8f0',
    '@media (max-width: 1200px)': {
      height: '44px',
      borderRadius: '7px',
    },
    '@media (max-width: 960px)': {
      height: '42px',
      borderRadius: '6px',
    },
    '@media (max-width: 480px)': {
      height: '38px',
      borderRadius: '5px',
    },
    '@media (max-width: 375px)': {
      height: '34px',
      borderRadius: '4px',
    },
  },
  capabilityBarFill: {
    height: '100%',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    position: 'relative',
    transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
    background: 'linear-gradient(135deg, currentColor 0%, currentColor 100%)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%)',
      backgroundSize: '20px 20px',
      animation: '$move 2s linear infinite',
    },
    '& span': {
      color: 'white !important',
      fontWeight: '600 !important',
      fontSize: '0.9rem !important',
      textShadow: '0 1px 2px rgba(0,0,0,0.2)',
      zIndex: 1,
      position: 'relative',
      '&:first-child': {
        fontSize: '0.95rem !important',
      },
      '&:last-child': {
        fontSize: '0.85rem !important',
        opacity: 0.9,
      },
    },
    '@media (max-width: 1200px)': {
      padding: '0 14px',
      borderRadius: '5px',
      '& span': {
        fontSize: '0.88rem !important',
        '&:first-child': {
          fontSize: '0.92rem !important',
        },
        '&:last-child': {
          fontSize: '0.82rem !important',
        },
      },
    },
    '@media (max-width: 960px)': {
      padding: '0 12px',
      '& span': {
        fontSize: '0.86rem !important',
        '&:first-child': {
          fontSize: '0.9rem !important',
        },
        '&:last-child': {
          fontSize: '0.8rem !important',
        },
      },
    },
    '@media (max-width: 480px)': {
      padding: '0 10px',
      borderRadius: '4px',
      '& span': {
        fontSize: '0.8rem !important',
        '&:first-child': {
          fontSize: '0.85rem !important',
        },
        '&:last-child': {
          fontSize: '0.75rem !important',
        },
      },
    },
    '@media (max-width: 375px)': {
      padding: '0 8px',
      borderRadius: '3px',
      '& span': {
        fontSize: '0.75rem !important',
        '&:first-child': {
          fontSize: '0.8rem !important',
        },
        '&:last-child': {
          fontSize: '0.7rem !important',
        },
      },
    },
  },
  '@keyframes move': {
    '0%': {
      transform: 'translateX(-20px)',
    },
    '100%': {
      transform: 'translateX(20px)',
    },
  },
});

const defaultIcons = {
  'github-copilot': Code,
  'chatgpt': Language,
  'claude': Language,
  'tabnine': Code,
  'gemini': DataUsage,
  'llama': Build,
  'perplexity': BugReport,
};

const AIToolkit = ({ tools = [], capabilities = [], programName = "Development" }) => {
  const classes = useStyles();
  const canvasRef = useRef(null);
  const [selectedToolId, setSelectedToolId] = useState(tools.length > 0 ? tools[0].id : null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    const particles = [];
    const particleCount = 50;
    const maxDist = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1.5,
        opacity: Math.random() * 0.4 + 0.3
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.2;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      }
    };

    const animationId = setInterval(animate, 100);

    const handleResize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1.5,
          opacity: Math.random() * 0.4 + 0.3
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(animationId);
    };
  }, []);

  const selectedTool = tools.find(tool => tool.id === selectedToolId);

  const handleToolSelect = (toolId) => {
    setSelectedToolId(toolId);
  };

  const getIconComponent = (toolId) => {
    const IconComponent = defaultIcons[toolId] || Code;
    return <IconComponent />;
  };

  const renderIcon = (tool) => {
    if (tool.iconHtml) {
      return (
        <div 
          dangerouslySetInnerHTML={{ __html: tool.iconHtml }}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: tool.iconColor || tool.color,
            '& svg': {
              width: '32px',
              height: '32px'
            }
          }}
        />
      );
    }
    return getIconComponent(tool.id);
  };

  if (!tools.length) {
    return null;
  }

  return (
    <Box className={classes.section}>
      <canvas ref={canvasRef} className={classes.networkCanvas} />
      <Container maxWidth="lg" className={classes.content}>
        <Box className={classes.header}>
          <Typography className={classes.title}>
            Learn {programName} with<span> Built-In AI Tools</span>
          </Typography>
        </Box>

        {/* Tool Cards Grid */}
        <Box className={classes.toolsGrid}>
          {tools.map((tool) => (
            <Paper 
              key={tool.id} 
              className={`${classes.toolCard} ${selectedToolId === tool.id ? classes.selectedToolCard : ''}`}
              style={{ 
                borderColor: selectedToolId === tool.id ? tool.color : 'transparent',
                color: tool.color 
              }}
              onClick={() => handleToolSelect(tool.id)}
              elevation={0}
            >
              <Box className={classes.toolIconContainer}>
                <Box className={classes.toolIconWrapper} style={{ color: tool.iconColor || tool.color }}>
                  <Box className={classes.toolIcon} style={{ color: tool.iconColor || tool.color }}>
                    {renderIcon(tool)}
                  </Box>
                </Box>
              </Box>
              
              <Box className={classes.toolHeader}>
                <Typography className={classes.toolName}>
                  {tool.name}
                </Typography>
                {tool.price && (
                  <Typography className={classes.priceText}>
                    {tool.price}
                  </Typography>
                )}
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Selected Tool Details */}
        {selectedTool && (
          <Paper className={classes.toolDetails} style={{ color: selectedTool.color }} elevation={0}>
            <Box className={classes.twoColumn}>
              <Box>
                <Box className={classes.toolDetailsHeader}>
                  {selectedTool.isPaid && <span className={classes.premiumBadge}>Premium</span>}
                  <Typography className={classes.toolDetailsName} style={{ color: selectedTool.color }}>
                    {selectedTool.name}
                  </Typography>
                </Box>
                
                <Typography className={classes.toolDescription}>
                  {selectedTool.description}
                </Typography>
                
                <Box className={classes.useCases}>
                  <Typography variant="h6">Key Use Cases:</Typography>
                  {selectedTool.useCases?.map((useCase, index) => (
                    <Box key={index} className={classes.useCaseItem}>
                      <span className={classes.arrowRight} style={{ color: selectedTool.color }}>→</span>
                      <Typography>{useCase}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
              
              {selectedTool.capabilities && (
                <Box className={classes.capabilitiesSection}>
                  <Typography variant="h6">Capability Breakdown:</Typography>
                  <Box className={classes.capabilityChart}>
                    {selectedTool.capabilities.map((capability, index) => (
                      <Box key={index} className={classes.capabilityBar}>
                        <Box 
                          className={classes.capabilityBarFill} 
                          style={{ 
                            width: `${capability.value}%`, 
                            color: selectedTool.color 
                          }}
                        >
                          <span>{capability.name}</span>
                          <span>{capability.value}/100</span>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default AIToolkit;