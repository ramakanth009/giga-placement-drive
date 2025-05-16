import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, CircularProgress, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { useNavigate, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  statusContainer: {
    padding: '40px 20px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '40px auto',
    borderRadius: '16px !important',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1) !important',
  },
  icon: {
    fontSize: '64px !important',
    marginBottom: '20px !important',
  },
  successIcon: {
    color: '#4caf50 !important',
  },
  pendingIcon: {
    color: '#ff9800 !important',
  },
  errorIcon: {
    color: '#f44336 !important',
  },
  title: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    marginBottom: '15px !important',
  },
  message: {
    fontSize: '1.1rem !important',
    color: '#666 !important',
    marginBottom: '30px !important',
  },
  detailItem: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #eee',
    padding: '12px 0',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  detailLabel: {
    fontWeight: 'bold !important',
    color: '#333 !important',
  },
  detailValue: {
    color: '#666 !important',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '30px',
  },
  homeButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
  },
});

const PaymentStatus = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      const queryParams = new URLSearchParams(location.search);
      const transactionId = queryParams.get('transactionId');
      const merchantOrderId = queryParams.get('merchantOrderId') || localStorage.getItem('current_order_id');
      
      if (!merchantOrderId && !transactionId) {
        setPaymentStatus('ERROR');
        setLoading(false);
        return;
      }

      try {
        // Include transactionId in the status check URL if available
        const statusUrl = transactionId 
          ? `https://gigaversity.in/pay/check-status/${merchantOrderId}?transactionId=${transactionId}`
          : `https://gigaversity.in/pay/check-status/${merchantOrderId}`;

        const response = await fetch(statusUrl);
        const data = await response.json();
        
        if (data.success) {
          setPaymentStatus(data.status);
          setPaymentDetails({
            merchant_order_id: data.merchant_order_id,
            transaction_id: transactionId || data.transaction_id, // Use provided transactionId if available
            amount: data.amount,
            order_details: data.order_details
          });

          if (data.status === 'COMPLETED') {
            localStorage.removeItem('current_order_id');
          }
        } else {
          setPaymentStatus('ERROR');
          console.error('Payment verification failed:', data.error);
        }
      } catch (error) {
        console.error('Error checking payment status:', error);
        setPaymentStatus('ERROR');
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentStatus();
  }, [location]);

  const renderStatusContent = () => {
    if (loading) {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CircularProgress size={50} sx={{ mb: 3 }} />
          <Typography className={classes.title}>Verifying Payment</Typography>
          <Typography className={classes.message}>
            Please wait while we verify your transaction...
          </Typography>
        </Box>
      );
    }

    switch (paymentStatus) {
      case 'COMPLETED':
        return (
          <>
            <CheckCircleIcon className={`${classes.icon} ${classes.successIcon}`} />
            <Typography className={classes.title}>Payment Successful!</Typography>
            <Typography className={classes.message}>
              Thank you! Your payment has been processed successfully.
            </Typography>
            
            <Box sx={{ mt: 4, mb: 3 }}>
              <Box className={classes.detailItem}>
                <Typography className={classes.detailLabel}>Order ID:</Typography>
                <Typography className={classes.detailValue}>
                  {paymentDetails?.merchant_order_id || 'N/A'}
                </Typography>
              </Box>
              <Box className={classes.detailItem}>
                <Typography className={classes.detailLabel}>Transaction ID:</Typography>
                <Typography className={classes.detailValue}>
                  {paymentDetails?.transaction_id || 'N/A'}
                </Typography>
              </Box>
              <Box className={classes.detailItem}>
                <Typography className={classes.detailLabel}>Amount:</Typography>
                <Typography className={classes.detailValue}>
                  ₹{paymentDetails?.amount?.toFixed(2) || '0.00'}
                </Typography>
              </Box>
            </Box>
          </>
        );
      
      case 'PENDING':
        return (
          <>
            <CircularProgress size={50} sx={{ mb: 3 }} className={classes.pendingIcon} />
            <Typography className={classes.title}>Payment Processing</Typography>
            <Typography className={classes.message}>
              Your payment is being processed. This might take a moment.
            </Typography>
            
            <Box sx={{ mt: 3 }}>
              <Typography variant="body2" color="textSecondary">
                Order ID: {paymentDetails?.merchant_order_id || 'N/A'}
              </Typography>
            </Box>
          </>
        );
      
      default:
        return (
          <>
            <ErrorIcon className={`${classes.icon} ${classes.errorIcon}`} />
            <Typography className={classes.title}>Payment Failed</Typography>
            <Typography className={classes.message}>
              We couldn't process your payment. Please try again or contact support.
            </Typography>
          </>
        );
    }
  };

  return (
    <Paper className={classes.statusContainer} elevation={0}>
      {renderStatusContent()}
      
      <Box className={classes.buttonsContainer}>
        <Button 
          variant="contained" 
          className={classes.homeButton}
          onClick={() => navigate('/')}
        >
          Return to Home
        </Button>
        
        {paymentStatus === 'ERROR' && (
          <Button 
            variant="outlined"
            onClick={() => navigate('/cart')}
          >
            Try Again
          </Button>
        )}
      </Box>
    </Paper>
  );
};

export default PaymentStatus;