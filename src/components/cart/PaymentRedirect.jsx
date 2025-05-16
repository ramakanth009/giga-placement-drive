import React, { useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  redirectContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f8f9fc'
  },
  message: {
    marginTop: '20px',
    color: '#2A2B6A',
    fontSize: '1.2rem'
  }
});

const PaymentRedirect = () => {
  const classes = useStyles();
  
  useEffect(() => {
    // Extract query parameters to preserve them in the redirect
    const queryParams = window.location.search;
    // Redirect to the hash-based route
    window.location.replace(`/#/payment-complete${queryParams}`);
  }, []);

  return (
    <Box className={classes.redirectContainer}>
      <CircularProgress size={60} />
      <Typography className={classes.message}>
        Processing your payment, please wait...
      </Typography>
    </Box>
  );
};

export default PaymentRedirect;