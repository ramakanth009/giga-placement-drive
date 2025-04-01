// src/components/limitedtimeoffer/LimitedTimeOffer.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    background: '#FFFFFF',
    "@media (max-width: 960px)": {
      padding: '60px 0',
    },
    "@media (max-width: 600px)": {
      padding: '40px 0',
    },
  },
  offerContainer: {
    background: '#F8F9FA',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'row',
    "@media (max-width: 960px)": {
      flexDirection: 'column',
      padding: '30px',
    },
    "@media (max-width: 600px)": {
      padding: '25px 20px',
      borderRadius: '12px',
    },
  },
  title: {
    fontSize: '3rem !important',
    fontWeight: 'bold !important',
    marginBottom: '40px !important',
    color: '#0A192F !important',
    '& span': {
      color: '#FFC614 !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.5rem !important',
      marginBottom: '30px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '2rem !important',
      marginBottom: '25px !important',
    },
  },
  leftColumn: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingRight: '20px',
    "@media (max-width: 960px)": {
      width: '100%',
      paddingRight: '0',
      marginBottom: '30px',
    },
  },
  rightColumn: {
    width: '50%',
    paddingLeft: '20px',
    "@media (max-width: 960px)": {
      width: '100%',
      paddingLeft: '0',
    },
  },
  priceBox: {
    background: '#F2F3F5',
    borderRadius: '12px',
    padding: '30px',
    marginBottom: '30px',
    "@media (max-width: 600px)": {
      padding: '20px 15px',
      borderRadius: '10px',
      marginBottom: '25px',
    },
  },
  regularPrice: {
    fontSize: '1.3rem !important',
    fontWeight: '500 !important',
    color: '#6A6B6C !important',
    textDecoration: 'line-through !important',
    marginBottom: '10px !important',
    "@media (max-width: 600px)": {
      fontSize: '1.1rem !important',
    },
  },
  limitedPrice: {
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    color: '#0A192F !important',
    marginBottom: '0 !important',
    "@media (max-width: 600px)": {
      fontSize: '1.3rem !important',
    },
  },
  priceHighlight: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#0A192F !important',
    "@media (max-width: 600px)": {
      fontSize: '2rem !important',
    },
  },
  applyButton: {
    backgroundColor: "#232459 !important",
    color: "white !important",
    padding: "12px 40px !important",
    borderRadius: "4px !important",
    fontWeight: "bold !important",
    fontSize: "1.2rem !important",
    textTransform: "none !important",
    "&:hover": {
      backgroundColor: "#1a1b43 !important", // Slightly darker shade for hover
    },
    "@media (max-width: 600px)": {
      padding: "10px 30px !important",
      fontSize: "1rem !important",
    },
  },
  includedTitle: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    color: '#0A192F !important',
    marginBottom: '25px !important',
    "@media (max-width: 600px)": {
      fontSize: '1.5rem !important',
      marginBottom: '20px !important',
    },
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
    "@media (max-width: 600px)": {
      marginBottom: '15px',
    },
  },
  checkIcon: {
    color: '#FFC614 !important',
    marginRight: '15px',
    marginTop: '2px',
    "@media (max-width: 600px)": {
      marginRight: '10px',
      fontSize: '1.2rem !important',
    },
  },
  featureText: {
    fontSize: '1.1rem !important',
    color: '#4A4A4A !important',
    fontWeight: '500 !important',
    "@media (max-width: 600px)": {
      fontSize: '1rem !important',
    },
  },
});

const LimitedTimeOffer = () => {
  const classes = useStyles();

  // Features list
  const features = [
    'Access to all learning materials',
    'Access to 400+ job opportunities',
    '40+ Roles specific jobs every week',
    'ATS-friendly resume building and Communication skills development',
  ];

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.title}>
          Limited <span>Time Offer</span>
        </Typography>

        <Box className={classes.offerContainer}>
          {/* Left Column - Price Information */}
          <Box className={classes.leftColumn}>
            <Box className={classes.priceBox}>
              <Typography className={classes.regularPrice}>
                Regular Price: ₹499
              </Typography>
              <Typography className={classes.limitedPrice}>
                Limited Time Price - INR <span className={classes.priceHighlight}>199</span> Only
              </Typography>
            </Box>
            
            <Button variant="contained" className={classes.applyButton}>
              Apply Now
            </Button>
          </Box>

          {/* Right Column - Features */}
          <Box className={classes.rightColumn}>
            <Typography variant="h4" className={classes.includedTitle}>
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
      </Container>
    </Box>
  );
};

export default LimitedTimeOffer;