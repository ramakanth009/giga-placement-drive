// src/components/common/programfee/ProgramFee.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '20px 0',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    margin: '30px 0',
    overflow: 'hidden',
  },
  title: {
    fontSize: '26px !important',
    fontWeight: '700 !important',
    marginBottom: '20px !important',
    padding: '0 30px',
    '& .blue': {
      color: '#2A2B6A'
    },
    '& .yellow': {
      color: '#FFC614'
    },
    '@media (max-width: 768px)': {
      fontSize: '24px !important',
      padding: '0 20px',
    },
    '@media (max-width: 480px)': {
      fontSize: '22px !important',
      padding: '0 15px',
    }
  },
  sectionWrapper: {
    marginBottom: '15px',
  },
  sectionLabel: {
    display: 'inline-block',
    backgroundColor: '#FFC614',
    color: '#FFFFFF',
    fontWeight: '600',
    padding: '10px 25px',
    borderRadius: '0 30px 30px 0',
    fontSize: '18px !important',
    marginBottom: '15px !important',
    '@media (max-width: 768px)': {
      fontSize: '16px !important',
      padding: '8px 20px',
    }
  },
  sectionContent: {
    padding: '0 30px 15px',
    '@media (max-width: 768px)': {
      padding: '0 20px 12px',
    },
    '@media (max-width: 480px)': {
      padding: '0 15px 10px',
    }
  },
  pricingText: {
    textAlign: 'center',
    fontSize: '18px !important',
    color: '#2A2B6A !important',
    '@media (max-width: 768px)': {
      fontSize: '16px !important',
    }
  },
  highlightedAmount: {
    fontWeight: '700 !important',
    fontSize: '22px !important',
    '@media (max-width: 768px)': {
      fontSize: '20px !important',
    }
  },
  supportText: {
    textAlign: 'center',
    color: '#4A4A4A !important',
    marginTop: '10px !important',
    marginBottom: '5px !important',
    fontSize: '16px !important',
    '@media (max-width: 768px)': {
      fontSize: '15px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '14px !important',
    }
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    marginBottom: '10px',
  },
  enrollButton: {
    backgroundColor: '#001131 !important',
    color: 'white !important',
    padding: '12px 40px !important',
    fontSize: '18px !important',
    fontWeight: '600 !important',
    borderRadius: '8px !important',
    textTransform: 'none !important',
    '&:hover': {
      backgroundColor: '#0a1e40 !important',
    },
    '@media (max-width: 768px)': {
      fontSize: '16px !important',
      padding: '10px 30px !important',
    }
  }
});

const ProgramFee = ({ 
  programName, 
  monthlyFee, 
  maxMonths, 
  scholarshipText, 
  supportText,
  onEnrollClick
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>
        <span className="blue">{programName}</span> <span className="yellow">Program Fee</span>
      </Typography>
      
      {/* Pricing Section */}
      <Box className={classes.sectionWrapper}>
        <Typography className={classes.sectionLabel}>
          Pricing
        </Typography>
        <Box className={classes.sectionContent}>
          <Typography className={classes.pricingText}>
            Starting from <span className={classes.highlightedAmount}>INR {monthlyFee} / month</span>
          </Typography>
          <Typography className={classes.supportText}>
            Flexible EMI options available for up to <span style={{ fontWeight: 'bold' }}>{maxMonths} months</span>.
          </Typography>
        </Box>
      </Box>
      
      {/* Scholarship Section */}
      <Box className={classes.sectionWrapper}>
        <Typography className={classes.sectionLabel}>
          Scholarship Opportunity
        </Typography>
        <Box className={classes.sectionContent}>
          <Typography className={classes.supportText}>
            {scholarshipText}
          </Typography>
        </Box>
      </Box>
      
      {/* Support Section */}
      <Box className={classes.sectionWrapper}>
        <Typography className={classes.sectionLabel}>
          Support for Physically Challenged Individuals
        </Typography>
        <Box className={classes.sectionContent}>
          <Typography className={classes.supportText}>
            {supportText}
          </Typography>
        </Box>
      </Box>
      
      {/* Enroll Button */}
      <Box className={classes.buttonContainer}>
        <Button 
          variant="contained" 
          className={classes.enrollButton}
          onClick={onEnrollClick}
        >
          Enroll Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProgramFee;