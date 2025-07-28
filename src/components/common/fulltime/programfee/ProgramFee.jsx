// src/components/common/fulltime/programfee/ProgramFee.jsx
import React from 'react';
import { Box, Typography, Button, Paper, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ScholarshipIcon from '@mui/icons-material/CardGiftcard';
import CentralizedPopupForms from '../../popupforms/CentralizedPopupForms';

const useStyles = makeStyles({
  container: {
    padding: '20px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #f8f9ff 0%, #f0f6ff 100%)',
    '@media (max-width: 1200px)': {
      padding: '60px 0',
    },
    '@media (max-width: 960px)': {
      padding: '50px 0',
    },
    '@media (max-width: 600px)': {
      padding: '40px 0',
    },
    '@media (max-width: 480px)': {
      padding: '30px 0',
    },
    '@media (max-width: 375px)': {
      padding: '25px 0',
    },
  },
  feeCard: {
    padding: '0 20px',
    margin: '0 auto',
    borderRadius: '24px !important',
    boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1) !important',
    overflow: 'hidden',
    background: 'white',
    position: 'relative',
    '@media (max-width: 1200px)': {
      padding: '0 15px',
      borderRadius: '20px !important',
    },
    '@media (max-width: 960px)': {
      padding: '0 12px',
      borderRadius: '18px !important',
    },
    '@media (max-width: 600px)': {
      padding: '0 10px',
      borderRadius: '16px !important',
    },
    '@media (max-width: 480px)': {
      padding: '0 8px',
      borderRadius: '14px !important',
    },
    '@media (max-width: 375px)': {
      padding: '0 5px',
      borderRadius: '12px !important',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-50px',
      right: '-50px',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(74, 99, 231, 0.1) 0%, rgba(74, 99, 231, 0) 70%)',
      zIndex: 0,
      '@media (max-width: 600px)': {
        width: '150px',
        height: '150px',
        top: '-30px',
        right: '-30px',
      },
      '@media (max-width: 375px)': {
        width: '100px',
        height: '100px',
        top: '-20px',
        right: '-20px',
      },
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-70px',
      left: '-70px',
      width: '250px',
      height: '250px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255, 198, 20, 0.1) 0%, rgba(255, 198, 20, 0) 70%)',
      zIndex: 0,
      '@media (max-width: 600px)': {
        width: '180px',
        height: '180px',
        bottom: '-50px',
        left: '-50px',
      },
      '@media (max-width: 375px)': {
        width: '120px',
        height: '120px',
        bottom: '-30px',
        left: '-30px',
      },
    }
  },
  header: {
    position: 'relative',
    padding: '20px 50px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #3a3e8f 100%)',
    color: 'white',
    borderTopLeftRadius: '24px',
    borderTopRightRadius: '24px',
    '@media (max-width: 1200px)': {
      padding: '35px 40px',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
    },
    '@media (max-width: 960px)': {
      padding: '32px 35px',
      borderTopLeftRadius: '18px',
      borderTopRightRadius: '18px',
    },
    '@media (max-width: 600px)': {
      padding: '30px 25px',
      borderTopLeftRadius: '16px',
      borderTopRightRadius: '16px',
    },
    '@media (max-width: 480px)': {
      padding: '25px 20px',
      borderTopLeftRadius: '14px',
      borderTopRightRadius: '14px',
    },
    '@media (max-width: 375px)': {
      padding: '20px 15px',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
    },
  },
  title: {
    fontSize: '2.4rem !important',
    fontWeight: 'bold !important',
    marginBottom: '10px !important',
    textAlign: 'center',
    background: 'linear-gradient(45deg, #ffffff 30%, #f0f8ff 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    position: 'relative',
    '& span': {
      background: 'linear-gradient(135deg, #FFC614 0%, #FFD700 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontWeight: 'bold',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.1rem !important',
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
  subtitle: {
    fontSize: '1.1rem !important',
    opacity: 0.9,
    textAlign: 'center',
    fontWeight: '400 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.02rem !important',
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
  content: {
    padding: '50px',
    position: 'relative',
    zIndex: 1,
    '@media (max-width: 1200px)': {
      padding: '45px',
    },
    '@media (max-width: 960px)': {
      padding: '40px',
    },
    '@media (max-width: 600px)': {
      padding: '40px 25px',
    },
    '@media (max-width: 480px)': {
      padding: '30px 20px',
    },
    '@media (max-width: 375px)': {
      padding: '25px 15px',
    },
  },
  priceRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    marginBottom: '40px',
    '@media (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '25px',
    },
    '@media (max-width: 960px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '20px',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gap: '25px',
      marginBottom: '35px',
    },
    '@media (max-width: 480px)': {
      gap: '20px',
      marginBottom: '30px',
    },
    '@media (max-width: 375px)': {
      gap: '15px',
      marginBottom: '25px',
    },
  },
  priceBox: {
    textAlign: 'center',
    padding: '35px 25px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.02) 0%, rgba(42, 43, 106, 0.05) 100%)',
    border: '1px solid rgba(42, 43, 106, 0.08)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    '&:hover': {
      transform: 'translateY(-8px) scale(1.02)',
      boxShadow: '0 20px 40px rgba(42, 43, 106, 0.15)',
      borderColor: 'rgba(42, 43, 106, 0.2)',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '4px',
      background: 'linear-gradient(90deg, #2A2B6A, #4A4C9B, #FFC614)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '&:hover::before': {
      opacity: 1,
    },
    '@media (max-width: 1200px)': {
      padding: '32px 22px',
      borderRadius: '18px',
    },
    '@media (max-width: 960px)': {
      padding: '30px 20px',
      borderRadius: '16px',
    },
    '@media (max-width: 600px)': {
      padding: '30px 20px',
    },
    '@media (max-width: 480px)': {
      padding: '25px 18px',
      borderRadius: '14px',
    },
    '@media (max-width: 375px)': {
      padding: '20px 15px',
      borderRadius: '12px',
    },
  },
  priceLabel: {
    fontSize: '1rem !important',
    color: '#666 !important',
    fontWeight: '500 !important',
    marginBottom: '10px !important',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    '@media (max-width: 1200px)': {
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.92rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      marginBottom: '6px !important',
    },
  },
  priceValue: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    fontFamily: '"Poppins", sans-serif !important',
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '2rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.8rem !important',
      marginBottom: '10px !important',
    },
  },
  comparisonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '10px',
    '@media (max-width: 480px)': {
      gap: '6px',
      marginTop: '8px',
    },
    '@media (max-width: 375px)': {
      gap: '4px',
      marginTop: '6px',
    },
  },
  comparisonIcon: {
    fontSize: '1.2rem !important',
    color: '#FFC614 !important',
    '@media (max-width: 480px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1rem !important',
    },
  },
  comparisonText: {
    fontSize: '0.9rem !important',
    color: '#888 !important',
    fontStyle: 'italic',
    '@media (max-width: 480px)': {
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.8rem !important',
    },
  },
  divider: {
    margin: '40px 0 !important',
    backgroundColor: 'rgba(42, 43, 106, 0.1) !important',
    '@media (max-width: 1200px)': {
      margin: '38px 0 !important',
    },
    '@media (max-width: 960px)': {
      margin: '36px 0 !important',
    },
    '@media (max-width: 600px)': {
      margin: '35px 0 !important',
    },
    '@media (max-width: 480px)': {
      margin: '30px 0 !important',
    },
    '@media (max-width: 375px)': {
      margin: '25px 0 !important',
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
  scholarshipSection: {
    background: 'linear-gradient(135deg, rgba(255, 198, 20, 0.05) 0%, rgba(255, 198, 20, 0.1) 100%)',
    borderRadius: '16px',
    padding: '25px',
    marginBottom: '30px',
    border: '1px solid rgba(255, 198, 20, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '3px',
      background: 'linear-gradient(90deg, #FFC614, #FFD700)',
    },
    '@media (max-width: 1200px)': {
      padding: '22px',
      marginBottom: '28px',
      borderRadius: '14px',
    },
    '@media (max-width: 960px)': {
      padding: '20px',
      marginBottom: '26px',
    },
    '@media (max-width: 600px)': {
      padding: '20px',
      marginBottom: '25px',
    },
    '@media (max-width: 480px)': {
      padding: '18px',
      marginBottom: '22px',
      borderRadius: '12px',
    },
    '@media (max-width: 375px)': {
      padding: '15px',
      marginBottom: '20px',
      borderRadius: '10px',
    },
  },
  scholarshipText: {
    fontSize: '1.1rem !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    fontWeight: '500 !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.05rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.02rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '15px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
      marginBottom: '12px !important',
      lineHeight: '1.5 !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
      marginBottom: '10px !important',
      lineHeight: '1.4 !important',
    },
  },
  scholarshipButton: {
    background: 'linear-gradient(45deg, #FFC614 0%, #FFD700 100%) !important',
    color: '#2A2B6A !important',
    padding: '12px 30px !important',
    borderRadius: '50px !important',
    fontWeight: 'bold !important',
    fontSize: '1rem !important',
    transition: 'all 0.3s ease !important',
    boxShadow: '0 8px 20px rgba(255, 198, 20, 0.3) !important',
    position: 'relative',
    overflow: 'hidden',
    marginRight:"10px !important",
    marginBottom:"10px !important",
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 12px 25px rgba(255, 198, 20, 0.4) !important',
      background: 'linear-gradient(45deg, #FFD700 0%, #FFC614 100%) !important',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%)',
      transform: 'rotate(30deg)',
      animation: '$shine 3s infinite',
    },
    '@media (max-width: 1200px)': {
      padding: '11px 28px !important',
      fontSize: '0.98rem !important',
      marginRight: '8px !important',
    },
    '@media (max-width: 960px)': {
      padding: '10px 25px !important',
      fontSize: '0.96rem !important',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      fontSize: '0.95rem !important',
      padding: '10px 25px !important',
      marginBottom: '10px !important',
      marginRight: '0 !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      padding: '9px 20px !important',
      borderRadius: '40px !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      padding: '8px 18px !important',
      borderRadius: '35px !important',
      marginBottom: '6px !important',
    },
  },
});

const ProgramFee = ({ 
  totalFee, 
  onApplyClick,
  scholarshipButtonTitle = "",
  expertButtonTitle = "" }) => {
  const classes = useStyles();
  
  const monthlyFee = Math.round(parseInt(totalFee.replace(/,/g, '')) / 24);
  const monthlyFeeFormatted = monthlyFee.toLocaleString('en-IN');
  
  const dailyFee = parseInt(totalFee.replace(/,/g, '')) / 730;
  const dailyFeeFormatted = Math.round(dailyFee).toLocaleString('en-IN');

  // Popup state for "Talk to our expert today"
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [popupVariant, setPopupVariant] = React.useState('demo');

  const handleScholarshipClick = () => {
    window.location.href = '/pre-screening-test';
  };

  const handleExpertClick = () => {
    setPopupVariant('demo');
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  return (
    <Box className={classes.container}>
      <Paper className={classes.feeCard}>
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            Invest in Your Future — <span>Not Just a Course Fee</span>
          </Typography>
          <Typography className={classes.subtitle}>
            A 12-month career investment for real-world skills, AI tools, and job-ready projects.
          </Typography>
        </Box>
        
        <Box className={classes.content}>
          <Box className={classes.priceRow}>
            <Box className={classes.priceBox}>
              <Typography variant="h3" className={classes.priceLabel}>Total Investment</Typography>
              <Typography variant="h4" className={classes.priceValue}>₹{totalFee}</Typography>
              <Box className={classes.comparisonContainer}>
                <ApartmentIcon className={classes.comparisonIcon} />
                <Typography className={classes.comparisonText}>
                  EMI & Scholarship Available
                </Typography>
              </Box>
            </Box>
            
            <Box className={classes.priceBox}>
              <Typography variant="h3" className={classes.priceLabel}>Monthly Investment</Typography>
              <Typography variant="h4" className={classes.priceValue}>₹{monthlyFeeFormatted}/month</Typography>
              <Box className={classes.comparisonContainer}>
                <CoffeeIcon className={classes.comparisonIcon} />
                <Typography className={classes.comparisonText}>
                  Spread over 24 months
                </Typography>
              </Box>
            </Box>

            <Box className={classes.priceBox}>
              <Typography variant="h3" className={classes.priceLabel}>Daily Investment</Typography>
              <Typography variant="h4" className={classes.priceValue}>₹{dailyFeeFormatted}/day</Typography>
              <Box className={classes.comparisonContainer}>
                <CoffeeIcon className={classes.comparisonIcon} />
                <Typography className={classes.comparisonText}>
                  Less than a meal outside
                </Typography>
              </Box>
            </Box>
          </Box>
          
          {/* Scholarship Section */}
          <Box className={classes.scholarshipSection}>
            <Typography className={classes.scholarshipText}>
              Need financial support? Apply for scholarships with coverage of up to 100% of the program fee.
            </Typography>
            <Button 
              variant="contained" 
              className={classes.scholarshipButton}
              startIcon={<ScholarshipIcon />}
              onClick={handleScholarshipClick}
              title={scholarshipButtonTitle}
            >
              Apply for Scholarship
            </Button>
            <Button 
              variant="contained" 
              className={classes.scholarshipButton}
              startIcon={<ScholarshipIcon />}
              onClick={handleExpertClick}
              title={expertButtonTitle}
            >
              Talk to our expert today
            </Button>
          </Box>
          

        </Box>
      </Paper>
      {/* Centralized Popup for "Talk to our expert today" and "Start Your Career Investment" */}
      <CentralizedPopupForms
        open={popupOpen}
        onClose={handlePopupClose}
        variant={popupVariant}
      />
    </Box>
  );
};

export default ProgramFee;



// // import React, { useState } from 'react';
// // import { 
// //   Box, 
// //   Typography, 
// //   Button, 
// //   Card, 
// //   CardContent,
// //   Container,
// //   Grid,
// //   Chip,
// //   Stack,
// //   Divider,
// //   useTheme,
// //   useMediaQuery
// // } from '@mui/material';
// // import { styled } from '@mui/material/styles';
// // import {
// //   Coffee as CoffeeIcon,
// //   Apartment as ApartmentIcon,
// //   CardGiftcard as ScholarshipIcon,
// //   TrendingUp as InvestmentIcon,
// //   Star as StarIcon,
// //   Phone as PhoneIcon
// // } from '@mui/icons-material';
// // import CentralizedPopupForms from '../../popupforms/CentralizedPopupForms';

// // // Styled Components
// // const StyledContainer = styled(Box)(({ theme }) => ({
// //   background: 'linear-gradient(135deg, #f8faff 0%, #e8f4fd 100%)',
// //   padding: theme.spacing(8, 0),
// //   position: 'relative',
// //   overflow: 'hidden',
// //   '&::before': {
// //     content: '""',
// //     position: 'absolute',
// //     top: '-50%',
// //     right: '-10%',
// //     width: '40%',
// //     height: '200%',
// //     background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
// //     transform: 'rotate(-15deg)',
// //     zIndex: 0,
// //   },
// //   [theme.breakpoints.down('md')]: {
// //     padding: theme.spacing(6, 0),
// //   },
// //   [theme.breakpoints.down('sm')]: {
// //     padding: theme.spacing(4, 0),
// //   },
// // }));

// // const MainCard = styled(Card)(({ theme }) => ({
// //   borderRadius: 24,
// //   boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
// //   background: 'white',
// //   position: 'relative',
// //   zIndex: 1,
// //   overflow: 'visible',
// //   border: '1px solid rgba(255, 255, 255, 0.2)',
// //   backdropFilter: 'blur(10px)',
// // }));

// // const HeaderSection = styled(Box)(({ theme }) => ({
// //   background: 'linear-gradient(135deg, #2A2B6A 0%, #3a3e8f 100%)',
// //   color: 'white',
// //   padding: theme.spacing(5),
// //   borderRadius: '24px 24px 0 0',
// //   textAlign: 'center',
// //   position: 'relative',
// //   '&::after': {
// //     content: '""',
// //     position: 'absolute',
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     height: '4px',
// //     background: 'linear-gradient(90deg, #2A2B6A, #4A4C9B, #FFC614)',
// //   },
// //   [theme.breakpoints.down('md')]: {
// //     padding: theme.spacing(4),
// //   },
// //   [theme.breakpoints.down('sm')]: {
// //     padding: theme.spacing(3),
// //   },
// // }));

// // const PriceCard = styled(Card)(({ theme }) => ({
// //   height: '100%',
// //   borderRadius: 16,
// //   border: '1px solid rgba(0, 0, 0, 0.08)',
// //   transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
// //   position: 'relative',
// //   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
// //   '&:hover': {
// //     transform: 'translateY(-8px)',
// //     boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
// //     borderColor: theme.palette.primary.main,
// //   },
// //   '&::before': {
// //     content: '""',
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     height: '3px',
// //     background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
// //     borderRadius: '16px 16px 0 0',
// //     opacity: 0,
// //     transition: 'opacity 0.3s ease',
// //   },
// //   '&:hover::before': {
// //     opacity: 1,
// //   },
// // }));

// // const ScholarshipSection = styled(Box)(({ theme }) => ({
// //   background: 'linear-gradient(135deg, rgba(255, 198, 20, 0.1) 0%, rgba(255, 198, 20, 0.15) 100%)',
// //   borderRadius: 20,
// //   padding: theme.spacing(4),
// //   border: '2px solid rgba(255, 198, 20, 0.2)',
// //   position: 'relative',
// //   overflow: 'hidden',
// //   '&::before': {
// //     content: '""',
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     height: '4px',
// //     background: 'linear-gradient(90deg, #FFC614, #FFD700)',
// //   },
// //   [theme.breakpoints.down('sm')]: {
// //     padding: theme.spacing(3),
// //   },
// // }));

// // const ActionButton = styled(Button)(({ theme }) => ({
// //   borderRadius: 50,
// //   padding: theme.spacing(1.5, 4),
// //   fontSize: '1rem',
// //   fontWeight: 600,
// //   textTransform: 'none',
// //   transition: 'all 0.3s ease',
// //   boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
// //   '&:hover': {
// //     transform: 'translateY(-2px)',
// //     boxShadow: '0 12px 35px rgba(0, 0, 0, 0.2)',
// //   },
// //   [theme.breakpoints.down('sm')]: {
// //     width: '100%',
// //     marginBottom: theme.spacing(1),
// //   },
// // }));

// // const PrimaryButton = styled(ActionButton)(({ theme }) => ({
// //   background: 'linear-gradient(45deg, #FFC614 0%, #FFD700 100%)',
// //   color: '#2A2B6A',
// //   '&:hover': {
// //     background: 'linear-gradient(45deg, #FFD700 0%, #FFC614 100%)',
// //   },
// // }));

// // const SecondaryButton = styled(ActionButton)(({ theme }) => ({
// //   background: 'linear-gradient(45deg, #2A2B6A 0%, #4A4C9B 100%)',
// //   color: theme.palette.common.white,
// //   '&:hover': {
// //     background: 'linear-gradient(45deg, #1f2050 0%, #3a3e8f 100%)',
// //   },
// // }));

// // const ProgramFee = ({ 
// //   totalFee, 
// //   onApplyClick,
// //   scholarshipButtonTitle = "Apply for up to 100% scholarship",
// //   expertButtonTitle = "Get personalized guidance" 
// // }) => {
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
// //   const [popupOpen, setPopupOpen] = useState(false);
// //   const [popupVariant, setPopupVariant] = useState('demo');

// //   // Calculate fees
// //   const totalAmount = parseInt(totalFee.replace(/,/g, ''));
// //   const monthlyFee = Math.round(totalAmount / 24);
// //   const dailyFee = Math.round(totalAmount / 730);

// //   const priceData = [
// //     {
// //       label: 'Monthly Investment',
// //       value: `₹${monthlyFee.toLocaleString('en-IN')}`,
// //       subtitle: 'Per Month',
// //       icon: <ApartmentIcon />,
// //       description: 'Flexible 24-month EMI',
// //       highlight: true,
// //     },
// //     {
// //       label: 'Daily Investment',
// //       value: `₹${dailyFee.toLocaleString('en-IN')}`,
// //       subtitle: 'Per Day',
// //       icon: <CoffeeIcon />,
// //       description: 'Cost of a simple meal',
// //     },
// //   ];

// //   const handleScholarshipClick = () => {
// //     window.location.href = '/pre-screening-test';
// //   };

// //   const handleExpertClick = () => {
// //     setPopupVariant('demo');
// //     setPopupOpen(true);
// //   };

// //   const handlePopupClose = () => {
// //     setPopupOpen(false);
// //   };

// //   return (
// //     <StyledContainer>
// //       <Container maxWidth="lg">
// //         <MainCard>
// //           {/* Header Section */}
// //           <HeaderSection>
// //             <Stack spacing={2} alignItems="center">
// //               <Chip 
// //                 icon={<StarIcon />}
// //                 label="Limited Time Offer"
// //                 sx={{ 
// //                   background: 'linear-gradient(45deg, #f59e0b, #fbbf24)',
// //                   color: 'white',
// //                   fontWeight: 600 
// //                 }}
// //               />
// //               <Typography 
// //                 variant="h3" 
// //                 component="h2"
// //                 sx={{ 
// //                   fontWeight: 700,
// //                   background: 'linear-gradient(45deg, #ffffff 30%, #e2e8f0 90%)',
// //                   backgroundClip: 'text',
// //                   WebkitBackgroundClip: 'text',
// //                   WebkitTextFillColor: 'transparent',
// //                   fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
// //                 }}
// //               >
// //                 Invest in Your Future
// //               </Typography>
// //               <Typography 
// //                 variant="h6"
// //                 sx={{ 
// //                   opacity: 0.9,
// //                   maxWidth: 600,
// //                   fontSize: { xs: '1rem', sm: '1.1rem' }
// //                 }}
// //               >
// //                 Transform your career with industry-relevant skills, AI tools, and hands-on projects
// //               </Typography>
// //             </Stack>
// //           </HeaderSection>

// //           <CardContent sx={{ p: { xs: 3, sm: 4, md: 6 } }}>
// //             {/* Price Cards */}
// //             <Box sx={{ 
// //               display: 'flex', 
// //               justifyContent: 'center', 
// //               gap: { xs: 3, md: 4 },
// //               mb: 5,
// //               flexWrap: 'wrap'
// //             }}>
// //               {priceData.map((item, index) => (
// //                 <Box 
// //                   key={index}
// //                   sx={{ 
// //                     width: { xs: '100%', sm: '280px', md: '320px' },
// //                     maxWidth: '350px'
// //                   }}
// //                 >
// //                   <PriceCard>
// //                     <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center', height: '260px' }}>
// //                       <Stack spacing={3} alignItems="center" sx={{ height: '100%' }}>
// //                         <Box
// //                           sx={{
// //                             width: 64,
// //                             height: 64,
// //                             borderRadius: '50%',
// //                             display: 'flex',
// //                             alignItems: 'center',
// //                             justifyContent: 'center',
// //                             background: item.highlight 
// //                               ? 'linear-gradient(45deg, #2A2B6A, #4A4C9B)'
// //                               : 'linear-gradient(45deg, #e2e8f0, #cbd5e1)',
// //                             color: item.highlight ? 'white' : '#64748b',
// //                             fontSize: '24px'
// //                           }}
// //                         >
// //                           {item.icon}
// //                         </Box>
                        
// //                         <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
// //                           <Typography 
// //                             variant="body2" 
// //                             color="text.secondary"
// //                             sx={{ 
// //                               fontWeight: 600, 
// //                               textTransform: 'uppercase', 
// //                               letterSpacing: 1,
// //                               mb: 1,
// //                               fontSize: '0.85rem'
// //                             }}
// //                           >
// //                             {item.label}
// //                           </Typography>
// //                           <Typography 
// //                             variant="h3" 
// //                             sx={{ 
// //                               fontWeight: 700,
// //                               color: '#2A2B6A',
// //                               fontSize: { xs: '2.2rem', md: '2.5rem' },
// //                               mb: 0.5,
// //                               lineHeight: 1.1
// //                             }}
// //                           >
// //                             {item.value}
// //                           </Typography>
// //                           <Typography 
// //                             variant="body2" 
// //                             color="text.secondary"
// //                             sx={{ mb: 2, fontSize: '0.9rem' }}
// //                           >
// //                             {item.subtitle}
// //                           </Typography>
// //                         </Box>
                        
// //                         <Typography 
// //                           variant="body2" 
// //                           color="text.secondary"
// //                           sx={{ 
// //                             fontStyle: 'italic',
// //                             fontSize: '0.85rem',
// //                             textAlign: 'center',
// //                             lineHeight: 1.3
// //                           }}
// //                         >
// //                           {item.description}
// //                         </Typography>
// //                       </Stack>
// //                     </CardContent>
// //                   </PriceCard>
// //                 </Box>
// //               ))}
// //             </Box>

// //             <Divider sx={{ my: 4 }} />

// //             {/* Scholarship Section */}
// //             <ScholarshipSection>
// //               <Stack spacing={3} alignItems="center" textAlign="center">
// //                 <Box>
// //                   <Typography 
// //                     variant="h5" 
// //                     sx={{ 
// //                       fontWeight: 700,
// //                       color: '#2A2B6A',
// //                       mb: 2,
// //                       fontSize: { xs: '1.3rem', sm: '1.5rem' }
// //                     }}
// //                   >
// //                     🎓 Financial Support Available
// //                   </Typography>
// //                   <Typography 
// //                     variant="body1" 
// //                     sx={{ 
// //                       color: '#2A2B6A',
// //                       maxWidth: 600,
// //                       mx: 'auto',
// //                       lineHeight: 1.6
// //                     }}
// //                   >
// //                     Don't let finances hold you back. Apply for scholarships covering up to 100% 
// //                     of the program fee, or speak with our experts about flexible payment options.
// //                   </Typography>
// //                 </Box>

// //                 <Stack 
// //                   direction={{ xs: 'column', sm: 'row' }} 
// //                   spacing={2} 
// //                   sx={{ width: { xs: '100%', sm: 'auto' } }}
// //                 >
// //                   <PrimaryButton
// //                     startIcon={<ScholarshipIcon />}
// //                     onClick={handleScholarshipClick}
// //                     title={scholarshipButtonTitle}
// //                   >
// //                     Apply for Scholarship
// //                   </PrimaryButton>
                  
// //                   <SecondaryButton
// //                     startIcon={<PhoneIcon />}
// //                     onClick={handleExpertClick}
// //                     title={expertButtonTitle}
// //                   >
// //                     Talk to Expert
// //                   </SecondaryButton>
// //                 </Stack>

// //                 <Typography 
// //                   variant="caption" 
// //                   sx={{ 
// //                     color: '#78716c',
// //                     fontStyle: 'italic',
// //                     opacity: 0.8
// //                   }}
// //                 >
// //                   💡 Free consultation • No hidden fees • Instant approval process
// //                 </Typography>
// //               </Stack>
// //             </ScholarshipSection>
// //           </CardContent>
// //         </MainCard>
// //       </Container>

// //       {/* Popup */}
// //       <CentralizedPopupForms
// //         open={popupOpen}
// //         onClose={handlePopupClose}
// //         variant={popupVariant}
// //       />
// //     </StyledContainer>
// //   );
// // };

// // export default ProgramFee;


// import React, { useState } from 'react';
// import { 
//   Box, 
//   Typography, 
//   Button, 
//   Card, 
//   CardContent,
//   Container,
//   Grid,
//   Chip,
//   Stack,
//   Divider,
//   useTheme,
//   useMediaQuery
// } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import {
//   Coffee as CoffeeIcon,
//   Apartment as ApartmentIcon,
//   CardGiftcard as ScholarshipIcon,
//   TrendingUp as InvestmentIcon,
//   Star as StarIcon,
//   Phone as PhoneIcon
// } from '@mui/icons-material';
// import CentralizedPopupForms from '../../popupforms/CentralizedPopupForms';

// const useStyles = makeStyles({
//   styledContainer: {
//     background: 'linear-gradient(135deg, #f8faff 0%, #e8f4fd 100%)',
//     padding: '64px 0',
//     position: 'relative',
//     overflow: 'hidden',
//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       top: '-50%',
//       right: '-10%',
//       width: '40%',
//       height: '200%',
//       background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
//       transform: 'rotate(-15deg)',
//       zIndex: 0,
//     },
//     '@media (max-width: 960px)': {
//       padding: '48px 0',
//     },
//     '@media (max-width: 600px)': {
//       padding: '32px 0',
//     },
//   },
  
//   mainCard: {
//     borderRadius: '24px !important',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1) !important',
//     background: 'white !important',
//     position: 'relative',
//     zIndex: 1,
//     overflow: 'visible !important',
//     border: '1px solid rgba(255, 255, 255, 0.2) !important',
//     backdropFilter: 'blur(10px)',
//   },
  
//   headerSection: {
//     background: 'linear-gradient(135deg, #2A2B6A 0%, #3a3e8f 100%)',
//     color: 'white',
//     padding: '40px',
//     borderRadius: '24px 24px 0 0',
//     textAlign: 'center',
//     position: 'relative',
//     '&::after': {
//       content: '""',
//       position: 'absolute',
//       bottom: 0,
//       left: 0,
//       right: 0,
//       height: '4px',
//       background: 'linear-gradient(90deg, #2A2B6A, #4A4C9B, #FFC614)',
//     },
//     '@media (max-width: 960px)': {
//       padding: '32px',
//     },
//     '@media (max-width: 600px)': {
//       padding: '24px',
//     },
//   },
  
//   headerStack: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '16px',
//   },
  
//   limitedTimeChip: {
//     background: 'linear-gradient(45deg, #f59e0b, #fbbf24) !important',
//     color: 'white !important',
//     fontWeight: '600 !important',
//     '& .MuiChip-icon': {
//       color: 'white !important',
//     },
//   },
  
//   headerTitle: {
//     fontWeight: '700 !important',
//     background: 'linear-gradient(45deg, #ffffff 30%, #e2e8f0 90%)',
//     backgroundClip: 'text !important',
//     WebkitBackgroundClip: 'text !important',
//     WebkitTextFillColor: 'transparent !important',
//     fontSize: '2.5rem !important',
//     '@media (max-width: 960px)': {
//       fontSize: '2.2rem !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '1.8rem !important',
//     },
//   },
  
//   headerSubtitle: {
//     opacity: 0.9,
//     maxWidth: '600px',
//     fontSize: '1.1rem !important',
//     '@media (max-width: 600px)': {
//       fontSize: '1rem !important',
//     },
//   },
  
//   cardContent: {
//     padding: '48px !important',
//     '@media (max-width: 960px)': {
//       padding: '32px !important',
//     },
//     '@media (max-width: 600px)': {
//       padding: '24px !important',
//     },
//   },
  
//   priceCardsContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '32px',
//     marginBottom: '40px',
//     flexWrap: 'wrap',
//     '@media (max-width: 960px)': {
//       gap: '24px',
//     },
//     '@media (max-width: 600px)': {
//       gap: '24px',
//     },
//   },
  
//   priceCardWrapper: {
//     width: '320px',
//     maxWidth: '350px',
//     '@media (max-width: 960px)': {
//       width: '280px',
//     },
//     '@media (max-width: 600px)': {
//       width: '100%',
//     },
//   },
  
//   priceCard: {
//     height: '100%',
//     borderRadius: '16px !important',
//     border: '1px solid rgba(0, 0, 0, 0.08) !important',
//     transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important',
//     position: 'relative',
//     background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%) !important',
//     '&:hover': {
//       transform: 'translateY(-8px)',
//       boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12) !important',
//       borderColor: '#2A2B6A !important',
//     },
//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       height: '3px',
//       background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
//       borderRadius: '16px 16px 0 0',
//       opacity: 0,
//       transition: 'opacity 0.3s ease',
//     },
//     '&:hover::before': {
//       opacity: 1,
//     },
//   },
  
//   priceCardContent: {
//     padding: '32px !important',
//     textAlign: 'center',
//     height: '260px',
//     '@media (max-width: 600px)': {
//       padding: '24px !important',
//     },
//   },
  
//   priceCardStack: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '24px',
//     height: '100%',
//   },
  
//   priceIconBox: {
//     width: '64px',
//     height: '64px',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '24px',
//   },
  
//   priceIconBoxHighlight: {
//     background: 'linear-gradient(45deg, #2A2B6A, #4A4C9B)',
//     color: 'white',
//   },
  
//   priceIconBoxNormal: {
//     background: 'linear-gradient(45deg, #e2e8f0, #cbd5e1)',
//     color: '#64748b',
//   },
  
//   priceContentBox: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
  
//   priceLabel: {
//     fontWeight: '600 !important',
//     textTransform: 'uppercase',
//     letterSpacing: '1px',
//     marginBottom: '8px !important',
//     fontSize: '0.85rem !important',
//     color: 'rgba(0, 0, 0, 0.6) !important',
//   },
  
//   priceValue: {
//     fontWeight: '700 !important',
//     color: '#2A2B6A !important',
//     fontSize: '2.5rem !important',
//     marginBottom: '4px !important',
//     lineHeight: '1.1 !important',
//     '@media (max-width: 600px)': {
//       fontSize: '2.2rem !important',
//     },
//   },
  
//   priceSubtitle: {
//     marginBottom: '16px !important',
//     fontSize: '0.9rem !important',
//     color: 'rgba(0, 0, 0, 0.6) !important',
//   },
  
//   priceDescription: {
//     fontStyle: 'italic',
//     fontSize: '0.85rem !important',
//     textAlign: 'center',
//     lineHeight: '1.3 !important',
//     color: 'rgba(0, 0, 0, 0.6) !important',
//   },
  
//   divider: {
//     margin: '32px 0 !important',
//   },
  
//   scholarshipSection: {
//     background: 'linear-gradient(135deg, rgba(255, 198, 20, 0.1) 0%, rgba(255, 198, 20, 0.15) 100%)',
//     borderRadius: '20px',
//     padding: '32px',
//     border: '2px solid rgba(255, 198, 20, 0.2)',
//     position: 'relative',
//     overflow: 'hidden',
//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       height: '4px',
//       background: 'linear-gradient(90deg, #FFC614, #FFD700)',
//     },
//     '@media (max-width: 600px)': {
//       padding: '24px',
//     },
//   },
  
//   scholarshipStack: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center',
//     gap: '24px',
//   },
  
//   scholarshipTitle: {
//     fontWeight: '700 !important',
//     color: '#2A2B6A !important',
//     marginBottom: '16px !important',
//     fontSize: '1.5rem !important',
//     '@media (max-width: 600px)': {
//       fontSize: '1.3rem !important',
//     },
//   },
  
//   scholarshipDescription: {
//     color: '#2A2B6A !important',
//     maxWidth: '600px',
//     margin: '0 auto',
//     lineHeight: '1.6 !important',
//   },
  
//   buttonStack: {
//     display: 'flex',
//     gap: '16px',
//     '@media (max-width: 600px)': {
//       flexDirection: 'column',
//       width: '100%',
//     },
//   },
  
//   actionButton: {
//     borderRadius: '50px !important',
//     padding: '12px 32px !important',
//     fontSize: '1rem !important',
//     fontWeight: '600 !important',
//     textTransform: 'none !important',
//     transition: 'all 0.3s ease !important',
//     boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15) !important',
//     '&:hover': {
//       transform: 'translateY(-2px)',
//       boxShadow: '0 12px 35px rgba(0, 0, 0, 0.2) !important',
//     },
//     '@media (max-width: 600px)': {
//       width: '100%',
//       marginBottom: '8px',
//     },
//   },
  
//   primaryButton: {
//     background: 'linear-gradient(45deg, #FFC614 0%, #FFD700 100%) !important',
//     color: '#2A2B6A !important',
//     '&:hover': {
//       background: 'linear-gradient(45deg, #FFD700 0%, #FFC614 100%) !important',
//     },
//   },
  
//   secondaryButton: {
//     background: 'linear-gradient(45deg, #2A2B6A 0%, #4A4C9B 100%) !important',
//     color: 'white !important',
//     '&:hover': {
//       background: 'linear-gradient(45deg, #1f2050 0%, #3a3e8f 100%) !important',
//     },
//   },
  
//   disclaimerText: {
//     color: '#78716c !important',
//     fontStyle: 'italic',
//     opacity: 0.8,
//     fontSize: '0.75rem !important',
//   },
// });

// const ProgramFee = ({ 
//   totalFee, 
//   onApplyClick,
//   scholarshipButtonTitle = "Apply for up to 100% scholarship",
//   expertButtonTitle = "Get personalized guidance" 
// }) => {
//   const classes = useStyles();
//   const [popupOpen, setPopupOpen] = useState(false);
//   const [popupVariant, setPopupVariant] = useState('demo');

//   // Calculate fees
//   const totalAmount = parseInt(totalFee.replace(/,/g, ''));
//   const monthlyFee = Math.round(totalAmount / 24);
//   const dailyFee = Math.round(totalAmount / 730);

//   const priceData = [
//     {
//       label: 'Monthly Investment',
//       value: `₹${monthlyFee.toLocaleString('en-IN')}`,
//       subtitle: 'Per Month',
//       icon: <ApartmentIcon />,
//       description: 'Flexible 24-month EMI',
//       highlight: true,
//     },
//     {
//       label: 'Daily Investment',
//       value: `₹${dailyFee.toLocaleString('en-IN')}`,
//       subtitle: 'Per Day',
//       icon: <CoffeeIcon />,
//       description: 'Cost of a simple meal',
//     },
//   ];

//   const handleScholarshipClick = () => {
//     window.location.href = '/pre-screening-test';
//   };

//   const handleExpertClick = () => {
//     setPopupVariant('demo');
//     setPopupOpen(true);
//   };

//   const handlePopupClose = () => {
//     setPopupOpen(false);
//   };

//   return (
//     <Box className={classes.styledContainer}>
//       <Container maxWidth="lg">
//         <Card className={classes.mainCard}>
//           {/* Header Section */}
//           <Box className={classes.headerSection}>
//             <Box className={classes.headerStack}>
//               <Chip 
//                 icon={<StarIcon />}
//                 label="Limited Time Offer"
//                 className={classes.limitedTimeChip}
//               />
//               <Typography 
//                 variant="h3" 
//                 component="h2"
//                 className={classes.headerTitle}
//               >
//                 Invest in Your Future
//               </Typography>
//               <Typography 
//                 variant="h6"
//                 className={classes.headerSubtitle}
//               >
//                 Transform your career with industry-relevant skills, AI tools, and hands-on projects
//               </Typography>
//             </Box>
//           </Box>

//           <CardContent className={classes.cardContent}>
//             {/* Price Cards */}
//             <Box className={classes.priceCardsContainer}>
//               {priceData.map((item, index) => (
//                 <Box 
//                   key={index}
//                   className={classes.priceCardWrapper}
//                 >
//                   <Card className={classes.priceCard}>
//                     <CardContent className={classes.priceCardContent}>
//                       <Box className={classes.priceCardStack}>
//                         <Box
//                           className={`${classes.priceIconBox} ${
//                             item.highlight 
//                               ? classes.priceIconBoxHighlight 
//                               : classes.priceIconBoxNormal
//                           }`}
//                         >
//                           {item.icon}
//                         </Box>
                        
//                         <Box className={classes.priceContentBox}>
//                           <Typography 
//                             variant="body2" 
//                             className={classes.priceLabel}
//                           >
//                             {item.label}
//                           </Typography>
//                           <Typography 
//                             variant="h3" 
//                             className={classes.priceValue}
//                           >
//                             {item.value}
//                           </Typography>
//                           <Typography 
//                             variant="body2" 
//                             className={classes.priceSubtitle}
//                           >
//                             {item.subtitle}
//                           </Typography>
//                         </Box>
                        
//                         <Typography 
//                           variant="body2" 
//                           className={classes.priceDescription}
//                         >
//                           {item.description}
//                         </Typography>
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 </Box>
//               ))}
//             </Box>

//             <Divider className={classes.divider} />

//             {/* Scholarship Section */}
//             <Box className={classes.scholarshipSection}>
//               <Box className={classes.scholarshipStack}>
//                 <Box>
//                   <Typography 
//                     variant="h5" 
//                     className={classes.scholarshipTitle}
//                   >
//                     🎓 Financial Support Available
//                   </Typography>
//                   <Typography 
//                     variant="body1" 
//                     className={classes.scholarshipDescription}
//                   >
//                     Don't let finances hold you back. Apply for scholarships covering up to 100% 
//                     of the program fee, or speak with our experts about flexible payment options.
//                   </Typography>
//                 </Box>

//                 <Box className={classes.buttonStack}>
//                   <Button
//                     startIcon={<ScholarshipIcon />}
//                     onClick={handleScholarshipClick}
//                     title={scholarshipButtonTitle}
//                     className={`${classes.actionButton} ${classes.primaryButton}`}
//                   >
//                     Apply for Scholarship
//                   </Button>
                  
//                   <Button
//                     startIcon={<PhoneIcon />}
//                     onClick={handleExpertClick}
//                     title={expertButtonTitle}
//                     className={`${classes.actionButton} ${classes.secondaryButton}`}
//                   >
//                     Talk to Expert
//                   </Button>
//                 </Box>

//                 <Typography 
//                   variant="caption" 
//                   className={classes.disclaimerText}
//                 >
//                   💡 Free consultation • No hidden fees • Instant approval process
//                 </Typography>
//               </Box>
//             </Box>
//           </CardContent>
//         </Card>
//       </Container>

//       {/* Popup */}
//       <CentralizedPopupForms
//         open={popupOpen}
//         onClose={handlePopupClose}
//         variant={popupVariant}
//       />
//     </Box>
//   );
// };

// export default ProgramFee;