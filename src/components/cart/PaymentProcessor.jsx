// src/components/cart/PaymentProcessor.jsx - Fix the redirect URL
import React, { useState } from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  paymentButton: {
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
    '&:disabled': {
      backgroundColor: '#cccccc !important',
      cursor: 'not-allowed',
      '&:hover': {
        transform: 'none',
        boxShadow: 'none !important',
      },
    },
  },
  errorMessage: {
    color: '#f44336 !important',
    textAlign: 'center',
    marginTop: '10px !important',
  }
});

const PaymentProcessor = ({ amount = "199.00", onPaymentInitiated }) => {
  const classes = useStyles();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const initiatePayment = async () => {
    setIsProcessing(true);
    setError(null);
    
    try {
      // Update redirectUrl to match your React router path using the hash format
      const response = await fetch('https://gigaversity.in/pay/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount,
          redirectUrl: 'https://gigaversity.in/#/payment-status' // Updated to payment status route
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        localStorage.setItem('current_order_id', data.merchant_order_id);
        if (onPaymentInitiated) {
          onPaymentInitiated(data.merchant_order_id);
        }
        window.location.href = data.payment_url;
      } else {
        setError(data.error || data.message || 'Payment initialization failed');
        setIsProcessing(false);
      }
    } catch (error) {
      setError('Unable to connect to payment service. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <Box sx={{ mt: 3, textAlign: 'center' }}>
      <Button
        variant="contained"
        className={classes.paymentButton}
        onClick={initiatePayment}
        disabled={isProcessing}
        startIcon={isProcessing ? <CircularProgress size={20} color="inherit" /> : null}
      >
        {isProcessing ? 'Processing...' : `Pay ₹${amount} Now`}
      </Button>
      
      {error && (
        <Typography className={classes.errorMessage}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default PaymentProcessor;