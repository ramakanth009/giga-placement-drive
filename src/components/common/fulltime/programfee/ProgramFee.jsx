// src/components/common/fulltime/programfee/ProgramFee.jsx
import React from 'react';
import { Box, Typography, Button, Paper, Divider, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CoffeeIcon from '@mui/icons-material/Coffee';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ScholarshipIcon from '@mui/icons-material/CardGiftcard';

const useStyles = makeStyles({
  container: {
    padding: '20px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #f8f9ff 0%, #f0f6ff 100%)',
    '@media (max-width: 960px)': {
      padding: '50px 0',
    },
    '@media (max-width: 600px)': {
      padding: '40px 0',
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
    '@media (max-width: 600px)': {
      padding: '30px 25px',
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
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    opacity: 0.9,
    textAlign: 'center',
    fontWeight: '400 !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  content: {
    padding: '50px',
    position: 'relative',
    zIndex: 1,
    '@media (max-width: 600px)': {
      padding: '40px 25px',
    },
  },
  priceRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    marginBottom: '40px',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gap: '25px',
      marginBottom: '35px',
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
    '@media (max-width: 600px)': {
      padding: '30px 20px',
    },
  },
  priceLabel: {
    fontSize: '1rem !important',
    color: '#666 !important',
    fontWeight: '500 !important',
    marginBottom: '10px !important',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  priceValue: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    fontFamily: '"Poppins", sans-serif !important',
    '@media (max-width: 600px)': {
      fontSize: '2.2rem !important',
    },
  },
  comparisonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '10px',
  },
  comparisonIcon: {
    fontSize: '1.2rem !important',
    color: '#FFC614 !important',
  },
  comparisonText: {
    fontSize: '0.9rem !important',
    color: '#888 !important',
    fontStyle: 'italic',
  },
  divider: {
    margin: '40px 0 !important',
    backgroundColor: 'rgba(42, 43, 106, 0.1) !important',
    '@media (max-width: 600px)': {
      margin: '35px 0 !important',
    },
  },
  tagline: {
    fontSize: '1.3rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '40px !important',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      background: '#FFC614',
      borderRadius: '2px',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
    },
  },
  benefitsContainer: {
    marginBottom: '40px',
  },
  benefitTitle: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '25px !important',
    position: 'relative',
    paddingLeft: '15px',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: '5px',
      height: '25px',
      background: '#FFC614',
      borderRadius: '3px',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
    },
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '25px',
    maxWidth: '1200px',
    margin: '0 auto',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
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
  },
  benefitItemText: {
    fontSize: '0.95rem !important',
    color: '#555 !important',
    lineHeight: '1.5 !important',
  },
  applyButton: {
    background: 'linear-gradient(45deg, #2A2B6A 0%, #4A4C9B 100%) !important',
    color: 'white !important',
    padding: '15px 40px !important',
    borderRadius: '50px !important',
    fontWeight: 'bold !important',
    fontSize: '1.15rem !important',
    display: 'block !important',
    margin: '0 auto !important',
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
    '@media (max-width: 600px)': {
      width: '100%',
      fontSize: '1.1rem !important',
      padding: '12px 30px !important',
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

  // New scholarship section styles
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
    '@media (max-width: 600px)': {
      padding: '20px',
      marginBottom: '25px',
    },
  },
  scholarshipText: {
    fontSize: '1.1rem !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    fontWeight: '500 !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '15px !important',
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
    '@media (max-width: 600px)': {
      width: '100%',
      fontSize: '0.95rem !important',
      padding: '10px 25px !important',
    },
  },
});

const ProgramFee = ({ totalFee, onApplyClick }) => {
  const classes = useStyles();
  
  const monthlyFee = parseInt(totalFee.replace(/,/g, '')) / 24;
  const monthlyFeeFormatted = monthlyFee.toLocaleString('en-IN');
  
  const dailyFee = parseInt(totalFee.replace(/,/g, '')) / 730;
  const dailyFeeFormatted = Math.round(dailyFee).toLocaleString('en-IN');

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

  const handleScholarshipClick = () => {
    // Add scholarship application logic here
    console.log('Scholarship application clicked');
  };

  return (
    <Box className={classes.container}>
      <Paper className={classes.feeCard}>
        <Box className={classes.header}>
          <Typography className={classes.title}>
            Invest in Your Future — <span>Not Just a Course Fee</span>
          </Typography>
          <Typography className={classes.subtitle}>
            A 12-month career investment for real-world skills, AI tools, and job-ready projects.
          </Typography>
        </Box>
        
        <Box className={classes.content}>
          <Box className={classes.priceRow}>
            <Box className={classes.priceBox}>
              <Typography className={classes.priceLabel}>Total Investment</Typography>
              <Typography className={classes.priceValue}>₹{totalFee}</Typography>
              <Box className={classes.comparisonContainer}>
                <ApartmentIcon className={classes.comparisonIcon} />
                <Typography className={classes.comparisonText}>
                  EMI options available
                </Typography>
              </Box>
            </Box>
            
            <Box className={classes.priceBox}>
              <Typography className={classes.priceLabel}>Monthly Investment</Typography>
              <Typography className={classes.priceValue}>₹{monthlyFeeFormatted}/month</Typography>
              <Box className={classes.comparisonContainer}>
                <CoffeeIcon className={classes.comparisonIcon} />
                <Typography className={classes.comparisonText}>
                  Spread over 24 months
                </Typography>
              </Box>
            </Box>

            <Box className={classes.priceBox}>
              <Typography className={classes.priceLabel}>Daily Investment</Typography>
              <Typography className={classes.priceValue}>₹{dailyFeeFormatted}/day</Typography>
              <Box className={classes.comparisonContainer}>
                <CoffeeIcon className={classes.comparisonIcon} />
                <Typography className={classes.comparisonText}>
                  Less than a meal outside
                </Typography>
              </Box>
            </Box>
          </Box>
          
          {/* New Scholarship Section */}
          <Box className={classes.scholarshipSection}>
            <Typography className={classes.scholarshipText}>
              Need financial support? Apply for scholarships with coverage of up to 100% of the program fee.
            </Typography>
            <Button 
              variant="contained" 
              className={classes.scholarshipButton}
              startIcon={<ScholarshipIcon />}
              onClick={handleScholarshipClick}
            >
              Apply for Scholarship
            </Button>
          </Box>
          
          <Divider className={classes.divider} />
          
          <Box className={classes.benefitsContainer}>
            <Typography className={classes.benefitTitle}>What You Get:</Typography>
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
            onClick={onApplyClick}
          >
            Start Your Career Investment
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProgramFee;