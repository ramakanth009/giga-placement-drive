// src/components/cart/PaymentProcessor.jsx
import React, { useState } from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { initiatePayment } from '../../services/paymentService';

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

/**
 * Payment processor component that initiates payment
 * @param {Object} props
 * @param {string} props.amount - Payment amount
 * @param {string} props.email - Customer email
 * @param {string} props.phone - Customer phone number
 * @param {Function} props.onPaymentInitiated - Callback when payment is initiated
 */
const PaymentProcessor = ({ 
  amount, 
  email, 
  phone, 
  onPaymentInitiated 
}) => {
  const classes = useStyles();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    // Input validation
    if (!email || !phone) {
      setError("Please provide both email and phone number");
      return;
    }
    
    setIsProcessing(true);
    setError(null);
    
    try {
      const paymentData = {
        amount: amount,
        email: email,
        mobile: phone
      };

      const response = await initiatePayment(paymentData);
      
      if (response.success) {
        // Notify parent component about successful payment initiation
        if (onPaymentInitiated) {
          onPaymentInitiated(response.merchant_order_id);
        }
        
        // Redirect to the payment gateway URL
        window.location.href = response.payment_url;
      } else {
        setError(response.error || 'Payment initialization failed');
      }
    } catch (error) {
      setError(error.message || 'Unable to connect to payment service. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Box sx={{ mt: 3, textAlign: 'center' }}>
      <Button
        variant="contained"
        className={classes.paymentButton}
        onClick={handlePayment}
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