// src/components/homepagecomponets/indemandroles/InDemandRoles.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CodeIcon from '@mui/icons-material/Code';
import DataIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import BarChartIcon from '@mui/icons-material/BarChart';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import LayersIcon from '@mui/icons-material/Layers';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import DataObjectIcon from '@mui/icons-material/DataObject';
import MemoryIcon from '@mui/icons-material/Memory';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SchoolIcon from '@mui/icons-material/School';

const useStyles = makeStyles({
  section: {
    padding: '50px 50px',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1A1B4A 100%)',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 1200px)': {
      padding: '45px 40px',
    },
    '@media (max-width: 960px)': {
      padding: '40px 30px',
    },
    '@media (max-width: 600px)': {
      padding: '35px 20px',
    },
    '@media (max-width: 480px)': {
      padding: '30px 15px',
    },
    '@media (max-width: 375px)': {
      padding: '25px 10px',
    },
  },
  backgroundGlow: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    filter: 'blur(150px)',
    opacity: 0.15,
    zIndex: 0,
    '@media (max-width: 960px)': {
      width: '500px',
      height: '500px',
    },
    '@media (max-width: 600px)': {
      width: '400px',
      height: '400px',
      filter: 'blur(100px)',
    },
    '@media (max-width: 480px)': {
      width: '300px',
      height: '300px',
      filter: 'blur(80px)',
    },
  },
  bottomLeftGlow: {
    background: '#4376eb',
    bottom: '-300px',
    left: '-200px',
    '@media (max-width: 600px)': {
      bottom: '-200px',
      left: '-150px',
    },
    '@media (max-width: 480px)': {
      bottom: '-150px',
      left: '-100px',
    },
  },
  topRightGlow: {
    background: '#7039e5',
    top: '-200px',
    right: '-200px',
    '@media (max-width: 600px)': {
      top: '-150px',
      right: '-150px',
    },
    '@media (max-width: 480px)': {
      top: '-100px',
      right: '-100px',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  titleContainer: {
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
      marginBottom: '15px',
    },
  },
  mainTitle: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    marginBottom: '16px !important',
    position: 'relative',
    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      background: 'linear-gradient(90deg, rgba(255,198,20,0.7) 0%, #FFC614 50%, rgba(255,198,20,0.7) 100%)',
      borderRadius: '2px',
    },
    '& span': {
      color: '#FFC614 !important',
      position: 'relative',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
      marginBottom: '14px !important',
      '&:after': {
        width: '55px',
        bottom: '-12px',
      },
    },
    '@media (max-width: 960px)': {
      fontSize: '2.1rem !important',
      marginBottom: '12px !important',
      '&:after': {
        width: '50px',
        bottom: '-10px',
      },
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '10px !important',
      '&:after': {
        width: '45px',
        height: '2.5px',
        bottom: '-8px',
      },
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem !important',
      marginBottom: '8px !important',
      '&:after': {
        width: '40px',
        height: '2px',
        bottom: '-7px',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '1.4rem !important',
      marginBottom: '7px !important',
      '&:after': {
        width: '35px',
        height: '2px',
        bottom: '-6px',
      },
    },
  },
  subtitle: {
    fontSize: '1.5rem !important',
    fontWeight: '500 !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    marginTop: '20px !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.4rem !important',
      marginTop: '18px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.3rem !important',
      marginTop: '16px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
      marginTop: '14px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem !important',
      marginTop: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1rem !important',
      marginTop: '10px !important',
    },
  },
  categoriesContainer: {
    display: 'flex',
    flexDirection: 'column', 
    gap: '50px',
    margin: '10px 0 10px',
    width: '100%',
    '@media (max-width: 1200px)': {
      gap: '45px',
    },
    '@media (max-width: 960px)': {
      gap: '40px',
    },
    '@media (max-width: 600px)': {
      gap: '35px',
    },
    '@media (max-width: 480px)': {
      gap: '30px',
    },
    '@media (max-width: 375px)': {
      gap: '25px',
    },
  },
  categoryHeader: {
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    borderRadius: '16px',
    padding: '18px 25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '25px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    borderLeft: '5px solid #FFC614',
    transition: 'all 0.3s ease',
    "&:before": {
      content: '""',
      position: 'absolute',
      right: '0',
      top: '0',
      width: '40%',
      height: '100%',
      background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 100%)',
    },
    "&:after": {
      content: '""',
      position: 'absolute',
      top: '-100%',
      left: '-100%',
      width: '100%',
      height: '300%',
      background: 'linear-gradient(60deg, rgba(255,255,255,0.1) 5%, rgba(255,255,255,0) 50%)',
      transform: 'rotate(20deg)',
      pointerEvents: 'none',
    },
    "&:hover": {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transform: 'translateY(-3px)',
    },
    '@media (max-width: 1200px)': {
      padding: '16px 22px',
      marginBottom: '22px',
      borderRadius: '14px',
      borderLeft: '4px solid #FFC614',
    },
    '@media (max-width: 960px)': {
      padding: '18px 20px',
      marginBottom: '20px',
      borderRadius: '12px',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
    },
    '@media (max-width: 600px)': {
      padding: '16px 18px',
      marginBottom: '18px',
      borderRadius: '10px',
      borderLeft: '3px solid #FFC614',
    },
    '@media (max-width: 480px)': {
      padding: '14px 15px',
      marginBottom: '15px',
      borderRadius: '8px',
    },
    '@media (max-width: 375px)': {
      padding: '12px 12px',
      marginBottom: '12px',
      borderRadius: '6px',
      borderLeft: '2px solid #FFC614',
    },
  },
  categoryTitleGroup: {
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
    '@media (max-width: 960px)': {
      justifyContent: 'center',
      width: '100%',
      marginBottom: '3px',
    },
    '@media (max-width: 480px)': {
      gap: '5px',
    },
  },
  categoryTitle: {
    fontSize: '1.25rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    marginLeft: '15px !important',
    zIndex: 1,
    '@media (max-width: 1200px)': {
      fontSize: '1.2rem !important',
      marginLeft: '12px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.15rem !important',
      marginLeft: '10px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
      marginLeft: '8px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1rem !important',
      marginLeft: '6px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
      marginLeft: '5px !important',
    },
  },
  categoryIcon: {
    color: '#FFC614',
    fontSize: '26px !important',
    zIndex: 1,
    filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.2))',
    '@media (max-width: 1200px)': {
      fontSize: '24px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '22px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '20px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '18px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '16px !important',
    },
  },
  categoryRightContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    '@media (max-width: 1200px)': {
      gap: '12px',
    },
    '@media (max-width: 960px)': {
      gap: '10px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '100%',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '12px',
    },
    '@media (max-width: 600px)': {
      gap: '8px',
      paddingTop: '10px',
    },
    '@media (max-width: 480px)': {
      gap: '6px',
      paddingTop: '8px',
    },
    '@media (max-width: 375px)': {
      gap: '5px',
      paddingTop: '6px',
    },
  },
  statChip: {
    borderRadius: '20px !important',
    fontSize: '0.85rem !important',
    fontWeight: '500 !important',
    padding: '2px 8px !important',
    height: '28px !important',
    zIndex: '1 !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.8rem !important',
      height: '26px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.75rem !important',
      height: '24px !important',
      padding: '2px 6px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.7rem !important',
      height: '22px !important',
      padding: '1px 6px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.65rem !important',
      height: '20px !important',
      padding: '1px 5px !important',
      '& .MuiChip-icon': {
        fontSize: '0.8rem',
      },
    },
    '@media (max-width: 375px)': {
      fontSize: '0.6rem !important',
      height: '18px !important',
      padding: '1px 4px !important',
      '& .MuiChip-icon': {
        fontSize: '0.7rem',
        marginRight: '2px !important',
      },
    },
  },
  demandChip: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    '& .MuiChip-icon': {
      color: '#2A2B6A !important',
    },
  },
  growthChip: {
    backgroundColor: '#4cd964 !important',
    color: '#333 !important',
    '& .MuiChip-icon': {
      color: '#333 !important',
    },
  },
  verifiedChip: {
    backgroundColor: '#00a0fc !important',
    color: 'white !important',
    '@media (max-width: 480px)': {
      display: 'none',
    },
  },
  rolesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '15px',
    width: '100%',
    justifyContent: 'center',
    '@media (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '12px',
    },
    '@media (max-width: 960px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '10px',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '8px',
    },
    '@media (max-width: 375px)': {
      gridTemplateColumns: '1fr',
      gap: '8px',
      justifyItems: 'center',
      '& $roleCard': {
        width: '90%',
        maxWidth: '280px',
      },
    },
  },
  roleCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    overflow: 'hidden',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '&:hover': {
      backgroundColor: '#ffffff',
      transform: 'translateY(-8px)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
      borderColor: 'rgba(255, 198, 20, 0.3)',
      '&:before': {
        opacity: 1,
      },
      '& $roleIcon': {
        transform: 'scale(1.1)',
        color: '#2A2B6A',
      },
      '& $roleText': {
        color: '#2A2B6A !important',
      },
      '& $detailText': {
        color: '#2A2B6A !important',
      },
      '& $skillChip': {
        backgroundColor: 'rgba(42, 43, 106, 0.1) !important',
        color: '#2A2B6A !important',
      },
      '& $detailIcon': {
        color: '#2A2B6A',
      },
    },
    '@media (max-width: 1200px)': {
      padding: '14px',
      borderRadius: '10px',
    },
    '@media (max-width: 960px)': {
      padding: '12px',
      borderRadius: '8px',
    },
    '@media (max-width: 600px)': {
      padding: '10px',
      borderRadius: '8px',
    },
    '@media (max-width: 480px)': {
      padding: '8px',
      borderRadius: '6px',
    },
    '@media (max-width: 375px)': {
      padding: '8px',
      borderRadius: '6px',
    },
  },
  roleHeaderContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    '@media (max-width: 1200px)': {
      marginBottom: '10px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '10px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '8px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '6px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '5px',
    },
  },
  roleIcon: {
    color: 'rgba(255, 198, 20, 0.8)',
    fontSize: '24px !important',
    marginRight: '12px',
    transition: 'all 0.3s ease',
    filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.2))',
    '@media (max-width: 1200px)': {
      fontSize: '22px !important',
      marginRight: '10px',
    },
    '@media (max-width: 960px)': {
      fontSize: '20px !important',
      marginRight: '8px',
    },
    '@media (max-width: 600px)': {
      fontSize: '18px !important',
      marginRight: '6px',
    },
    '@media (max-width: 480px)': {
      fontSize: '16px !important',
      marginRight: '6px',
    },
    '@media (max-width: 375px)': {
      fontSize: '16px !important',
      marginRight: '5px',
    },
  },
  roleText: {
    color: '#ffffff',
    fontWeight: '700 !important',
    fontSize: '1.05rem !important',
    transition: 'color 0.3s ease !important',
    '@media (max-width: 1200px)': {
      fontSize: '1rem !important',
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
  roleDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '5px',
    '@media (max-width: 1200px)': {
      gap: '10px',
    },
    '@media (max-width: 960px)': {
      gap: '8px',
    },
    '@media (max-width: 600px)': {
      gap: '6px',
    },
    '@media (max-width: 480px)': {
      gap: '4px',
    },
    '@media (max-width: 375px)': {
      gap: '4px',
    },
  },
  detailRow: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      color: "#2A2B6A"
    }
  },
  detailIcon: {
    color: 'rgba(255, 198, 20, 0.9)',
    marginRight: '8px',
    fontSize: '18px !important',
    '$roleCard:hover &': {
      color: '#2A2B6A',
    },
    '@media (max-width: 1200px)': {
      fontSize: '17px !important',
      marginRight: '7px',
    },
    '@media (max-width: 960px)': {
      fontSize: '16px !important',
      marginRight: '6px',
    },
    '@media (max-width: 600px)': {
      fontSize: '15px !important',
      marginRight: '5px',
    },
    '@media (max-width: 480px)': {
      fontSize: '14px !important',
      marginRight: '4px',
    },
    '@media (max-width: 375px)': {
      fontSize: '13px !important',
      marginRight: '4px',
    },
  },
  detailText: {
    color: 'rgba(255, 255, 255, 0.9) !important',
    fontSize: '0.9rem !important',
    fontWeight: 'bold !important',
    transition: 'color 0.3s ease !important',
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
  actionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '50px',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      marginTop: '45px',
      gap: '18px',
    },
    '@media (max-width: 960px)': {
      marginTop: '40px',
      gap: '15px',
    },
    '@media (max-width: 600px)': {
      marginTop: '35px',
      gap: '12px',
      flexDirection: 'column',
      alignItems: 'center',
    },
    '@media (max-width: 480px)': {
      marginTop: '30px',
      gap: '10px',
    },
    '@media (max-width: 375px)': {
      marginTop: '25px',
      gap: '8px',
    },
  },
  button: {
    padding: '12px 24px !important',
    borderRadius: '8px !important',
    fontWeight: 'bold !important',
    fontSize: '1rem !important',
    textTransform: 'none !important',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15) !important',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    "&:before": {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
      zIndex: -1,
    },
    '@media (max-width: 1200px)': {
      padding: '11px 22px !important',
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 960px)': {
      padding: '10px 20px !important',
      fontSize: '0.9rem !important',
      borderRadius: '7px !important',
    },
    '@media (max-width: 600px)': {
      padding: '10px 20px !important',
      fontSize: '0.85rem !important',
      borderRadius: '6px !important',
      width: '80%',
      maxWidth: '300px',
    },
    '@media (max-width: 480px)': {
      padding: '8px 16px !important',
      fontSize: '0.8rem !important',
      borderRadius: '5px !important',
    },
    '@media (max-width: 375px)': {
      padding: '7px 14px !important',
      fontSize: '0.75rem !important',
      borderRadius: '4px !important',
    },
  },
  checkButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    border: 'none !important',
    '&:hover': {
      backgroundColor: '#FFD647 !important',
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2) !important',
    },
  },
  decorativeDot: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '50%',
    '@media (max-width: 1200px)': {
      width: '7px',
      height: '7px',
    },
    '@media (max-width: 960px)': {
      width: '6px',
      height: '6px',
    },
    '@media (max-width: 600px)': {
      width: '5px',
      height: '5px',
    },
    '@media (max-width: 480px)': {
      width: '4px',
      height: '4px',
    },
  },
  hiddenMd: {
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  hiddenSm: {
    '@media (max-width: 600px)': {
      display: 'none',
    },
  },
  categoryContainer: {
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  },
  visibleCategory: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const InDemandRoles = () => {
  const classes = useStyles();
  const [visibleCategories, setVisibleCategories] = useState([]);

  // Animation effect for categories
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Extract index from the data attribute
            const index = parseInt(entry.target.dataset.index);
            if (!isNaN(index) && !visibleCategories.includes(index)) {
              setTimeout(() => {
                setVisibleCategories(prev => [...prev, index]);
              }, index * 300); // Staggered animation
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    // Observe category containers
    const elements = document.querySelectorAll('[data-category]');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, [visibleCategories]);

  // Categories and their roles with additional metadata
  const categories = [
    {
      id: 'fullstack',
      title: "Full Stack Development Roles",
      icon: <CodeIcon className={classes.categoryIcon} />,
      demandLevel: "High Demand",
      growthRate: "+13% (by 2030)",
      verified: true,
      roles: [
        { 
          id: 'uiux', 
          title: 'UI/UX Developer', 
          icon: <ComputerIcon className={classes.roleIcon} />,
          salary: "4-12 LPA",
        },
        { 
          id: 'frontend', 
          title: 'Frontend Developer', 
          icon: <CodeIcon className={classes.roleIcon} />,
          salary: "5-14 LPA",
        },
        { 
          id: 'backend', 
          title: 'Backend Engineer', 
          icon: <StorageIcon className={classes.roleIcon} />,
          salary: "6-16 LPA",
        },
        { 
          id: 'mern', 
          title: 'MERN Stack', 
          icon: <DeveloperModeIcon className={classes.roleIcon} />,
          salary: "7-18 LPA",
        },
        { 
          id: 'fullstack', 
          title: 'Full Stack Developer', 
          icon: <LayersIcon className={classes.roleIcon} />,
          salary: "8-20 LPA",
        }
      ]
    },
    {
      id: 'datascience',
      title: "Data Science Roles",
      icon: <DataIcon className={classes.categoryIcon} />,
      demandLevel: "Very High Demand",
      growthRate: "+36% (by 2030)",
      verified: true,
      roles: [
        { 
          id: 'dataanalyst', 
          title: 'Data Analyst', 
          icon: <BarChartIcon className={classes.roleIcon} />,
          salary: "5-12 LPA",
        },
        { 
          id: 'datascientist', 
          title: 'Data Scientist', 
          icon: <DataObjectIcon className={classes.roleIcon} />,
          salary: "8-22 LPA",
        },
        { 
          id: 'mleng', 
          title: 'ML Engineer', 
          icon: <MemoryIcon className={classes.roleIcon} />,
          salary: "10-25 LPA",
        },
        { 
          id: 'dataeng', 
          title: 'Data Engineer', 
          icon: <StorageIcon className={classes.roleIcon} />,
          salary: "7-20 LPA",
        },
        { 
          id: 'aispecialist', 
          title: 'AI Specialist', 
          icon: <BubbleChartIcon className={classes.roleIcon} />,
          salary: "12-30 LPA",
        }
      ]
    }
  ];

  // Create decorative dots positions
  const decorativeDots = [
    { top: '15%', left: '7%' },
    { top: '25%', left: '12%' },
    { top: '35%', left: '5%' },
    { top: '75%', left: '9%' },
    { top: '80%', left: '15%' },
    { top: '20%', right: '8%' },
    { top: '30%', right: '15%' },
    { top: '65%', right: '10%' },
    { top: '85%', right: '12%' },
  ];

  return (
    <Box className={classes.section}>
      {/* Background glows */}
      <Box className={`${classes.backgroundGlow} ${classes.bottomLeftGlow}`} />
      <Box className={`${classes.backgroundGlow} ${classes.topRightGlow}`} />
      
      {/* Decorative dots */}
      {decorativeDots.map((dot, index) => (
        <Box 
          key={`dot-${index}`}
          className={`${classes.decorativeDot} ${index % 2 === 0 ? classes.hiddenMd : ''} ${index % 3 === 0 ? classes.hiddenSm : ''}`}
          sx={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            animation: `pulse ${(2 + Math.random() * 2)}s infinite alternate`,
            '@keyframes pulse': {
              '0%': { opacity: 0.3, transform: 'scale(1)' },
              '100%': { opacity: 0.8, transform: 'scale(1.5)' }
            }
          }}
        />
      ))}

      {/* Title Section */}
      <Box className={classes.titleContainer}>
        <Typography variant="h2" className={classes.mainTitle}>
          Explore In-Demand <span>Full Stack</span> and <span>Data Science</span> Jobs 
        </Typography>
        <Typography variant="h4" className={classes.subtitle}>
          New Opportunities Added Every Week
        </Typography>
      </Box>

      {/* Categories and Roles */}
      <Box className={classes.categoriesContainer}>
        {categories.map((category, categoryIndex) => (
          <Box 
            key={categoryIndex} 
            className={`${classes.categoryContainer} ${visibleCategories.includes(categoryIndex) ? classes.visibleCategory : ''}`}
            data-category
            data-index={categoryIndex}
            sx={{ transitionDelay: `${categoryIndex * 0.2}s` }}
          >
            <Box className={classes.categoryHeader}>
              <Box className={classes.categoryTitleGroup}>
                {category.icon}
                <Typography className={classes.categoryTitle} variant='h3'>
                  {category.title}
                </Typography>
              </Box>
              
              <Box className={classes.categoryRightContent}>
                <Chip 
                  icon={<WorkIcon />}
                  label={category.demandLevel}
                  className={`${classes.statChip} ${classes.demandChip}`}
                  size="small"
                />
                <Chip 
                  icon={<TrendingUpIcon />}
                  label={category.growthRate}
                  className={`${classes.statChip} ${classes.growthChip}`}
                  size="small"
                />
                {category.verified && (
                  <Chip 
                    icon={<VerifiedIcon />}
                    label="Verified Sources"
                    className={`${classes.statChip} ${classes.verifiedChip}`}
                    size="small"
                  />
                )}
              </Box>
            </Box>
            
            <Box className={classes.rolesGrid}>
              {category.roles.map((role, roleIndex) => (
                <Box 
                  key={roleIndex} 
                  className={classes.roleCard}
                >
                  {/* Role Title with Icon */}
                  <Box className={classes.roleHeaderContainer}>
                    {role.icon}
                    <Typography className={classes.roleText}>
                      {role.title}
                    </Typography>
                  </Box>
                  
                  {/* Salary Detail */}
                  <Box className={classes.detailRow}>
                    <CurrencyRupeeIcon className={classes.detailIcon} />
                    <Typography className={classes.detailText}>
                      Avg Salary: {role.salary}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Action Buttons */}
      <Box className={classes.actionsContainer}>
        <Button
          variant="contained"
          className={`${classes.button} ${classes.checkButton}`}
        >
          Check Your Eligibility
        </Button>
      </Box>
    </Box>
  );
};

export default InDemandRoles;