// src/components/common/fulltime/programfee/WhatYouGet.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CentralizedPopupForms from '../../popupforms/CentralizedPopupForms';

const useStyles = makeStyles({
  container: {
    padding: '20px 0',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 1200px)': {
      padding: '18px 0',
    },
    '@media (max-width: 960px)': {
      padding: '16px 0',
    },
    '@media (max-width: 600px)': {
      padding: '15px 0',
    },
    '@media (max-width: 480px)': {
      padding: '12px 0',
    },
    '@media (max-width: 375px)': {
      padding: '10px 0',
    },
  },
  benefitsContainer: {
    marginBottom: '40px',
    '@media (max-width: 1200px)': {
      marginBottom: '38px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '36px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '25px',
    },
  },
  benefitTitle: {
    fontSize: '2.5rem !important',
    fontWeight: '700 !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '12px !important',
    '& span': {
      color: '#FFC614',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2.25rem !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.75rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.5rem !important',
      marginBottom: '5px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.375rem !important',
      marginBottom: '4px !important',
    },
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '25px',
    maxWidth: '1200px',
    margin: '0 auto',
    justifyContent: 'center',
    '@media (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '22px',
    },
    '@media (max-width: 960px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: '20px',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
    '@media (max-width: 480px)': {
      gap: '18px',
    },
    '@media (max-width: 375px)': {
      gap: '15px',
    },
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    padding: '25px',
    borderRadius: '16px',
    border: '1px solid rgba(74, 99, 231, 0.1)',
    background: 'white',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
      borderColor: 'rgba(74, 99, 231, 0.2)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '5px',
      background: 'linear-gradient(90deg, #2A2B6A, #4A4C9B)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '&:hover::after': {
      opacity: 1,
    },
    '@media (max-width: 1200px)': {
      padding: '22px',
      gap: '13px',
      borderRadius: '14px',
    },
    '@media (max-width: 960px)': {
      padding: '20px',
      gap: '12px',
    },
    '@media (max-width: 480px)': {
      padding: '18px',
      gap: '10px',
      borderRadius: '12px',
    },
    '@media (max-width: 375px)': {
      padding: '15px',
      gap: '8px',
      borderRadius: '10px',
    },
  },
  benefitIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    backgroundColor: 'rgba(42, 43, 106, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2A2B6A',
    boxShadow: '0 8px 15px rgba(42, 43, 106, 0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'rotate(10deg)',
      backgroundColor: '#2A2B6A',
      color: '#fff',
    },
    '@media (max-width: 1200px)': {
      width: '45px',
      height: '45px',
      borderRadius: '10px',
    },
    '@media (max-width: 960px)': {
      width: '42px',
      height: '42px',
    },
    '@media (max-width: 480px)': {
      width: '40px',
      height: '40px',
      borderRadius: '8px',
    },
    '@media (max-width: 375px)': {
      width: '35px',
      height: '35px',
      borderRadius: '6px',
    },
  },
  benefitContent: {
    flex: '1',
  },
  benefitItemTitle: {
    fontSize: '1.15rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '8px !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.12rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.05rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1rem !important',
      marginBottom: '5px !important',
    },
  },
  benefitItemText: {
    fontSize: '0.95rem !important',
    color: '#555 !important',
    lineHeight: '1.5 !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.92rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.88rem !important',
      lineHeight: '1.4 !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      lineHeight: '1.3 !important',
    },
  },
  applyButton: {
    background: 'linear-gradient(45deg, #2A2B6A 0%, #4A4C9B 100%) !important',
    color: 'white !important',
    padding: '15px 40px !important',
    borderRadius: '50px !important',
    fontWeight: 'bold !important',
    fontSize: '1.15rem !important',
    display: 'block !important',
    margin: '30px auto 0 auto !important',
    transition: 'all 0.3s ease !important',
    boxShadow: '0 10px 25px rgba(42, 43, 106, 0.25) !important',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 35px rgba(42, 43, 106, 0.35) !important',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%)',
      transform: 'rotate(30deg)',
      animation: '$shine 3s infinite',
    },
    '@media (max-width: 1200px)': {
      padding: '14px 35px !important',
      fontSize: '1.12rem !important',
    },
    '@media (max-width: 960px)': {
      padding: '13px 32px !important',
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      fontSize: '1.1rem !important',
      padding: '12px 30px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.05rem !important',
      padding: '11px 25px !important',
      borderRadius: '40px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1rem !important',
      padding: '10px 20px !important',
      borderRadius: '35px !important',
    },
  },
  '@keyframes shine': {
    '0%': {
      left: '-50%',
    },
    '100%': {
      left: '150%',
    },
  },
});

const WhatYouGet = ({ investmentButtonTitle = "" }) => {
  const classes = useStyles();

  // Popup state for "Start Your Career Investment"
  const [popupOpen, setPopupOpen] = React.useState(false);

  const handleCareerInvestmentClick = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const benefits = [
    { 
      icon: <SchoolIcon />,
      title: "12 Months of Guided Learning",
      description: "AI-enhanced tools and personalized mentorship"
    },
    {
      icon: <CodeIcon />,
      title: "Real-World Projects",
      description: "Inspired by startup products and industry needs"
    },
    {
      icon: <GroupsIcon />,
      title: "Peer Reviews",
      description: "Team-based learning with industry-standard workflows"
    },
    {
      icon: <WorkIcon />,
      title: "Career-Focused Training",
      description: "Specialized preparation for undefined roles"
    },
    {
      icon: <ApartmentIcon />,
      title: "Access to Product Simulations",
      description: "Real experience with incubation startup products"
    },
    {
      icon: <SchoolIcon />,
      title: "Portfolio + Certification",
      description: "Industry-recognized certification with project portfolio"
    }
  ];

  return (
    <Box className={classes.container}>
      <Box className={classes.benefitsContainer}>
        <Typography className={classes.benefitTitle}>What You <span>Get</span></Typography>
        <Box className={classes.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <Box key={index} className={classes.benefitItem}>
              <Box className={classes.benefitIcon}>
                {benefit.icon}
              </Box>
              <Box className={classes.benefitContent}>
                <Typography className={classes.benefitItemTitle}>
                  {benefit.title}
                </Typography>
                <Typography className={classes.benefitItemText}>
                  {benefit.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      
      <Button 
        variant="contained" 
        className={classes.applyButton}
        onClick={handleCareerInvestmentClick}
        title={investmentButtonTitle}
      >
        Start Your Career Investment
      </Button>
      
      {/* Centralized Popup for "Start Your Career Investment" */}
      <CentralizedPopupForms
        open={popupOpen}
        onClose={handlePopupClose}
        variant="dropdown"
      />
    </Box>
  );
};

export default WhatYouGet;