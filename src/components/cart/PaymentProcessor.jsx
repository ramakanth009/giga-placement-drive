import React, { useState } from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
    width: '100% !important',
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
    fontSize: '0.9rem !important',
  }
});

const PaymentProcessor = ({ 
  amount = "1.00", 
  email = "", 
  mobile = "", 
  onPaymentInitiated 
}) => {
  const classes = useStyles();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const initiatePayment = async () => {
    // Validate inputs
    if (!email.trim() || !mobile.trim()) {
      setError("Please provide both email and phone number");
      return;
    }
    
    setIsProcessing(true);
    setError(null);
    
    try {
      // Create payload with correct data
      const payload = {
        amount: amount,
        email: email,
        mobile: mobile
      };

      // Make the API call to initiate payment
      const response = await fetch('https://gigaversity.in/pay/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Store order ID for retrieval later
        localStorage.setItem('current_order_id', data.merchant_order_id);
        
        // Notify parent component if callback is provided
        if (onPaymentInitiated) {
          onPaymentInitiated(data.merchant_order_id);
        }
        
        // Redirect to the payment gateway URL
        window.location.href = data.payment_url;
      } else {
        // Handle API error response
        setError(data.error || data.message || 'Payment initialization failed');
        setIsProcessing(false);
      }
    } catch (error) {
      // Handle network or other errors
      setError('Unable to connect to payment service. Please try again.');
      setIsProcessing(false);
      console.error('Payment initialization error:', error);
    }
  };

  return (
    <Box sx={{ mt: 3, textAlign: 'center' }}>
      <Button
        variant="contained"
        className={classes.paymentButton}
        onClick={initiatePayment}
        disabled={isProcessing}
        startIcon={isProcessing ? <CircularProgress size={20} color="inherit" /> : <ShoppingCartIcon />}
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