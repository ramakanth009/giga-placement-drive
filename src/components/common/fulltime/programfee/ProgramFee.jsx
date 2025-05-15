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
    marginBottom: '6px !important',
    letterSpacing: '-0.5px !important',
    textAlign: 'center',
    '@media (max-width: 960px)': {
      fontSize: '1.9rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.6rem !important',
    },
  },
  highlight: {
    color: '#FFC614 !important',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '5px',
      left: '0',
      width: '100%',
      height: '8px',
      background: 'rgba(255, 198, 20, 0.2)',
      zIndex: -1,
      borderRadius: '4px',
    }
  },
  subtitle: {
    fontSize: '1.1rem !important',
    opacity: '0.9',
    // maxWidth: '800px',
    textAlign: 'center',
    lineHeight: '1.5 !important',
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  content: {
    position: 'relative',
    zIndex: 1,
    padding: '30px',
    '@media (max-width: 600px)': {
      padding: '30px 20px',
    },
  },
  priceRow: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: '25px',
    flexWrap: 'wrap',
    marginBottom: '20px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    },
  },
  priceBox: {
    flex: '1',
    padding: '30px',
    borderRadius: '20px',
    background: 'white',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '5px',
      background: 'linear-gradient(90deg, #2A2B6A, #4A4C9B)',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
    },
    '@media (max-width: 768px)': {
      width: '100%',
      maxWidth: '350px',
    },
    '@media (max-width: 600px)': {
      padding: '25px 20px',
      maxWidth: '100%',
    },
  },
  priceLabel: {
    fontSize: '1.1rem !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    fontWeight: '700 !important',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  priceValue: {
    fontSize: '2.8rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '10px !important',
    position: 'relative',
    display: 'inline-block',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-5px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '40%',
      height: '4px',
      background: 'rgba(74, 99, 231, 0.2)',
      borderRadius: '2px',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.4rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
    },
  },
  comparisonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15px',
    background: 'rgba(42, 43, 106, 0.05)',
    padding: '10px 15px',
    borderRadius: '50px',
  },
  comparisonIcon: {
    color: '#FFC614',
    marginRight: '10px',
  },
  comparisonText: {
    fontSize: '0.95rem !important',
    color: '#555 !important',
    fontWeight: '500 !important',
  },
  divider: {
    margin: '10px 0 !important',
    height: '2px !important',
    background: 'linear-gradient(90deg, rgba(74, 99, 231, 0.1), rgba(74, 99, 231, 0.3), rgba(74, 99, 231, 0.1)) !important',
  },
  tagline: {
    fontSize: '1.3rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '20px !important',
    position: 'relative',
    display: 'inline-block',
    left: '50%',
    transform: 'translateX(-50%)',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '0',
      width: '100%',
      height: '3px',
      background: 'linear-gradient(90deg, transparent, #FFC614, transparent)',
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
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  chip: {
    background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.05) 0%, rgba(42, 43, 106, 0.1) 100%) !important',
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
    padding: '8px 15px !important',
    borderRadius: '50px !important',
    border: '1px solid rgba(42, 43, 106, 0.1) !important',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05) !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08) !important',
      background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.08) 0%, rgba(42, 43, 106, 0.15) 100%) !important',
    },
  },
});

const ProgramFee = ({ programName, totalFee, onApplyClick }) => {
  const classes = useStyles();
  
  // Remove commas and convert to number
  const totalFeeNum = Number(totalFee.replace(/,/g, ''));
  const monthlyFee = Math.round(totalFeeNum / 12);
  const dailyFee = Math.round(monthlyFee / 24);

  // Format numbers with commas
  const monthlyFeeFormatted = monthlyFee.toLocaleString('en-IN');
  const dailyFeeFormatted = dailyFee.toLocaleString('en-IN');

  const benefits = [
    {
      icon: <SchoolIcon />,
      title: '12 Months of Guided Learning',
      description: 'AI-enhanced tools and personalized mentorship'
    },
    {
      icon: <CodeIcon />,
      title: 'Real-World Projects',
      description: 'Inspired by startup products and industry needs'
    },
    {
      icon: <GroupsIcon />,
      title: 'Peer Reviews',
      description: 'Team-based learning with industry-standard workflows'
    },
    {
      icon: <WorkIcon />,
      title: 'Career-Focused Training',
      description: `Specialized preparation for ${programName} roles`
    },
    {
      icon: <ApartmentIcon />,
      title: 'Access to Product Simulations',
      description: 'Real experience with incubation startup products'
    },
    {
      icon: <SchoolIcon />,
      title: 'Portfolio + Certification',
      description: 'Industry-recognized certification with project portfolio'
    }
  ];

  return (
    <Box className={classes.container}>
      <Paper className={classes.feeCard} elevation={0}>
        <Box className={classes.header}>
          <Typography className={classes.title}>
            Invest in Your Future — <span className={classes.highlight}>Not Just a Course Fee</span>
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
                  Spread over 12 months
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
          
          <Box className={classes.chipContainer}>
            <Chip label="One-Time Investment" className={classes.chip} />
            <Chip label="Lifetime Return" className={classes.chip} />
            <Chip label="Cost of Skill > Cost of Degree" className={classes.chip} />
          </Box>
          
          <Divider className={classes.divider} />
          
          <Typography className={classes.tagline}>
            Invest in your Skills that pay dividends for life
          </Typography>
          
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