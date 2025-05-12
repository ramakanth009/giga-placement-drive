import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '40px 0',
    margin: '30px 0',
    overflow: 'hidden',
    '@media (max-width: 1200px)': {
      padding: '35px 0',
    },
    '@media (max-width: 960px)': {
      padding: '30px 0',
      margin: '25px 0',
    },
    '@media (max-width: 600px)': {
      padding: '25px 0',
      margin: '20px 0',
    },
    '@media (max-width: 480px)': {
      padding: '20px 0',
      margin: '15px 0',
    },
    '@media (max-width: 375px)': {
      padding: '18px 0',
      margin: '12px 0',
    },
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
    '@media (max-width: 1200px)': {
      fontSize: '24px !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '22px !important',
      padding: '0 25px',
      marginBottom: '16px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '20px !important',
      padding: '0 20px',
      marginBottom: '15px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '18px !important',
      padding: '0 15px',
      marginBottom: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '17px !important',
      padding: '0 12px',
      marginBottom: '10px !important',
    }
  },
  sectionWrapper: {
    marginBottom: '15px',
    boxShadow: '0px 0px 44.63px 0px rgba(202, 199, 199, 0.32)',
    borderRadius: '8px !important',
    padding: '0 0 5px 0',
    marginLeft: '150px',
    marginRight: '150px',
    '@media (max-width: 1200px)': {
      marginLeft: '120px',
      marginRight: '120px',
    },
    '@media (max-width: 960px)': {
      marginLeft: '80px',
      marginRight: '80px',
      marginBottom: '12px',
    },
    '@media (max-width: 600px)': {
      marginLeft: '40px',
      marginRight: '40px',
      marginBottom: '10px',
    },
    '@media (max-width: 480px)': {
      marginLeft: '20px',
      marginRight: '20px',
      marginBottom: '8px',
    },
    '@media (max-width: 375px)': {
      marginLeft: '15px',
      marginRight: '15px',
      marginBottom: '7px',
    },
  },
  sectionLabel: {
    display: 'inline-block',
    backgroundColor: '#FFC614',
    color: '#FFFFFF',
    fontWeight: '600 !important',
    padding: '10px 25px',
    borderRadius: '0 30px 30px 15px',
    fontSize: '18px !important',
    marginBottom: '15px !important',
    '@media (max-width: 1200px)': {
      fontSize: '17px !important',
      padding: '9px 22px',
    },
    '@media (max-width: 960px)': {
      fontSize: '16px !important',
      padding: '8px 20px',
      marginBottom: '12px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '15px !important',
      padding: '7px 18px',
      marginBottom: '10px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '14px !important',
      padding: '6px 15px',
      marginBottom: '8px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '13px !important',
      padding: '5px 12px',
      marginBottom: '7px !important',
      borderRadius: '0 20px 20px 10px',
    },
  },
  sectionContent: {
    padding: '0 30px 15px',
    '@media (max-width: 960px)': {
      padding: '0 25px 12px',
    },
    '@media (max-width: 600px)': {
      padding: '0 20px 10px',
    },
    '@media (max-width: 480px)': {
      padding: '0 15px 8px',
    },
    '@media (max-width: 375px)': {
      padding: '0 12px 7px',
    },
  },
  pricingText: {
    textAlign: 'center',
    fontSize: '1.3rem !important',
    color: '#2A2B6A !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.25rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.15rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.05rem !important',
    },
  },
  highlightedAmount: {
    fontWeight: '700 !important',
    fontSize: '1.3rem !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.25rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.15rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.05rem !important',
    },
  },
  supportText: {
    textAlign: 'center',
    color: '#2A2B6A !important',
    fontWeight: '500 !important',
    marginTop: '10px !important',
    marginBottom: '5px !important',
    fontSize: '1.1rem !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
      marginTop: '8px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      marginTop: '7px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      marginTop: '6px !important',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    marginBottom: '10px',
    '@media (max-width: 960px)': {
      marginTop: '25px',
    },
    '@media (max-width: 600px)': {
      marginTop: '20px',
    },
    '@media (max-width: 480px)': {
      marginTop: '18px',
    },
    '@media (max-width: 375px)': {
      marginTop: '15px',
    },
  },
  enrollButton: {
    backgroundColor: '#002746 !important',
    color: 'white !important',
    padding: '12px 40px !important',
    fontSize: '18px !important',
    fontWeight: '600 !important',
    borderRadius: '8px !important',
    textTransform: 'none !important',
    '&:hover': {
      backgroundColor: '#0a1e40 !important',
    },
    '@media (max-width: 1200px)': {
      padding: '11px 35px !important',
      fontSize: '17px !important',
    },
    '@media (max-width: 960px)': {
      padding: '10px 30px !important',
      fontSize: '16px !important',
    },
    '@media (max-width: 600px)': {
      padding: '9px 25px !important',
      fontSize: '15px !important',
    },
    '@media (max-width: 480px)': {
      padding: '8px 20px !important',
      fontSize: '14px !important',
    },
    '@media (max-width: 375px)': {
      padding: '7px 18px !important',
      fontSize: '13px !important',
    },
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
            Flexible EMI options available for up to <span style={{ fontWeight: 'bold' }}>{maxMonths}</span>.
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
