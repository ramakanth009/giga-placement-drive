// src/components/cart/PaymentComplete.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, CircularProgress, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkPaymentStatus } from '../../services/paymentService';

const useStyles = makeStyles({
  pageContainer: {
    minHeight: '100vh',
    backgroundColor: '#f9fafc',
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
  },
  statusContainer: {
    padding: '40px 20px',
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
    borderRadius: '16px !important',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1) !important',
    backgroundColor: 'white',
    position: 'relative',
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
    color: '#2A2B6A !important',
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
    padding: '12px 24px !important',
    borderRadius: '8px !important',
    '&:hover': {
      backgroundColor: '#1a1b43 !important',
    },
  },
  tryAgainButton: {
    borderColor: '#2A2B6A !important',
    color: '#2A2B6A !important',
    padding: '12px 24px !important',
    borderRadius: '8px !important',
    '&:hover': {
      backgroundColor: 'rgba(42, 43, 106, 0.04) !important',
    },
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 10,
    borderRadius: '16px',
  },
  pollingIndicator: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    fontSize: '0.75rem',
    color: '#999',
  }
});

const PaymentComplete = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [pollingCount, setPollingCount] = useState(0);
  const [isPolling, setIsPolling] = useState(false);
  const MAX_POLLS = 10; // Maximum number of polling attempts

  // Extract parameters from URL
  const getUrlParams = () => {
    const searchParams = new URLSearchParams(location.search);
    const hashParams = new URLSearchParams(location.hash.split('?')[1] || '');
    
    return {
      transactionId: searchParams.get('txnId') || hashParams.get('txnId'),
      merchantOrderId: searchParams.get('merchantOrderId') || hashParams.get('merchantOrderId')
    };
  };

  // Map API status to display status
  const mapStatus = (status) => {
    if (!status) return 'ERROR';
    
    const statusUpper = status.toUpperCase();
    
    if (['COMPLETED', 'SUCCESS', 'PAID', 'AUTHORIZED', 'CAPTURED'].includes(statusUpper)) {
      return 'COMPLETED';
    }
    
    if (['PENDING', 'PROCESSING', 'INITIATED', 'IN_PROGRESS'].includes(statusUpper)) {
      return 'PENDING';
    }
    
    return 'ERROR';
  };

  // Check payment status
  const checkStatus = async () => {
    try {
      setIsPolling(true);
      const { merchantOrderId, transactionId } = getUrlParams();
      
      if (!merchantOrderId) {
        setPaymentStatus('ERROR');
        setLoading(false);
        setIsPolling(false);
        return;
      }

      const statusData = await checkPaymentStatus(merchantOrderId);
      
      if (statusData.success) {
        const mappedStatus = mapStatus(statusData.status);
        setPaymentStatus(mappedStatus);
        setPaymentDetails({
          merchant_order_id: statusData.merchant_order_id,
          transaction_id: transactionId || statusData.transaction_id,
          amount: statusData.amount,
          order_details: statusData.order_details
        });

        if (mappedStatus === 'PENDING' && pollingCount < MAX_POLLS) {
          // Continue polling for pending status
          setPollingCount(prev => prev + 1);
          setTimeout(() => checkStatus(), 5000); // Poll every 5 seconds
        } else {
          setIsPolling(false);
        }
      } else {
        setPaymentStatus('ERROR');
        setIsPolling(false);
      }
    } catch (error) {
      console.error('Error checking payment status:', error);
      setPaymentStatus('ERROR');
      setIsPolling(false);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch on component mount
  useEffect(() => {
    checkStatus();
  }, []);

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
            <HourglassEmptyIcon className={`${classes.icon} ${classes.pendingIcon}`} />
            <Typography className={classes.title}>Payment Processing</Typography>
            <Typography className={classes.message}>
              Your payment is being processed. This might take a moment.
              {pollingCount > 0 && ` We've checked ${pollingCount} times.`}
            </Typography>
            
            {paymentDetails?.merchant_order_id && (
              <Box sx={{ mt: 3 }}>
                <Typography variant="body2" color="textSecondary">
                  Order ID: {paymentDetails.merchant_order_id}
                </Typography>
              </Box>
            )}
          </>
        );
      
      default: // ERROR case
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
    <Box className={classes.pageContainer}>
      <Box className={classes.mainContent}>
        <Paper className={classes.statusContainer} elevation={0}>
          {renderStatusContent()}
          
          {isPolling && (
            <Box className={classes.loadingOverlay}>
              <CircularProgress size={40} />
            </Box>
          )}
          
          {pollingCount > 0 && !isPolling && (
            <Typography className={classes.pollingIndicator}>
              Status checked {pollingCount} time{pollingCount !== 1 ? 's' : ''}
            </Typography>
          )}
          
          <Box className={classes.buttonsContainer}>
            <Button 
              variant="contained" 
              className={classes.homeButton}
              onClick={() => navigate('/')}
              disabled={isPolling}
            >
              Return to Home
            </Button>
            
            {paymentStatus === 'ERROR' && (
              <Button 
                variant="outlined"
                className={classes.tryAgainButton}
                onClick={() => navigate('/cart')}
                disabled={isPolling}
              >
                Try Again
              </Button>
            )}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default PaymentComplete;