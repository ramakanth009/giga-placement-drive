import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, CircularProgress, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../common/navbar/Navbar';
import Footer from '../common/footer/Footer';

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
});

const PaymentComplete = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      // Extract parameters from hash portion of URL (works with HashRouter)
      const hashParams = new URLSearchParams(location.hash.split('?')[1] || '');
      const transactionId = hashParams.get('txnId');
      const merchantOrderId = hashParams.get('merchantOrderId') || localStorage.getItem('current_order_id');
      
      console.log("Hash URL:", location.hash);
      console.log("Transaction ID:", transactionId);
      console.log("Merchant Order ID:", merchantOrderId);

      // If we don't have an order ID but have tried less than 3 times, try again
      if (!merchantOrderId && retryCount < 3) {
        setRetryCount(prevCount => prevCount + 1);
        setTimeout(() => fetchPaymentStatus(), 1000); // Retry after 1 second
        return;
      }
      
      // Special case - if we just came from a payment process and have no parameters
      if (!merchantOrderId && !transactionId) {
        const orderIdFromStorage = localStorage.getItem('current_order_id');
        if (orderIdFromStorage) {
          try {
            const statusUrl = `https://gigaversity.in/pay/check-status/${orderIdFromStorage}`;
            const response = await fetch(statusUrl);
            const data = await response.json();
            
            if (data.success) {
              setPaymentStatus(data.status);
              setPaymentDetails({
                merchant_order_id: data.merchant_order_id,
                transaction_id: data.transaction_id,
                amount: data.amount,
                order_details: data.order_details
              });
              
              if (data.status === 'COMPLETED') {
                localStorage.removeItem('current_order_id');
              }
              setLoading(false);
              return;
            }
          } catch (err) {
            console.error("Error checking stored order ID:", err);
          }
        }
        
        setPaymentStatus('ERROR');
        setLoading(false);
        return;
      }

      try {
        const statusUrl = transactionId 
          ? `https://gigaversity.in/pay/check-status/${merchantOrderId}?transactionId=${transactionId}`
          : `https://gigaversity.in/pay/check-status/${merchantOrderId}`;

        console.log("Checking payment status at:", statusUrl);
        
        const response = await fetch(statusUrl);
        const data = await response.json();
        console.log("Status response:", data);
        
        if (data.success) {
          setPaymentStatus(data.status);
          setPaymentDetails({
            merchant_order_id: data.merchant_order_id,
            transaction_id: transactionId || data.transaction_id,
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
  }, [location, retryCount]);

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
    <Box className={classes.pageContainer}>
      <Navbar />
      <Box className={classes.mainContent}>
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
                className={classes.tryAgainButton}
                onClick={() => navigate('/cart')}
              >
                Try Again
              </Button>
            )}
          </Box>
        </Paper>
      </Box>
      <Footer />
    </Box>
  );
};

export default PaymentComplete;

// import React, { useEffect, useState } from 'react';
// import { Box, Typography, Paper, CircularProgress, Button } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import ErrorIcon from '@mui/icons-material/Error';
// import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Navbar from '../common/navbar/Navbar';
// import Footer from '../common/footer/Footer';

// const useStyles = makeStyles({
//   pageContainer: {
//     minHeight: '100vh',
//     backgroundColor: '#f9fafc',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   mainContent: {
//     flex: 1,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '60px 20px',
//   },
//   statusContainer: {
//     padding: '40px 20px',
//     textAlign: 'center',
//     maxWidth: '600px',
//     width: '100%',
//     borderRadius: '16px !important',
//     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1) !important',
//     backgroundColor: 'white',
//     position: 'relative',
//   },
//   icon: {
//     fontSize: '64px !important',
//     marginBottom: '20px !important',
//   },
//   successIcon: {
//     color: '#4caf50 !important',
//   },
//   pendingIcon: {
//     color: '#ff9800 !important',
//   },
//   errorIcon: {
//     color: '#f44336 !important',
//   },
//   title: {
//     fontSize: '1.8rem !important',
//     fontWeight: 'bold !important',
//     marginBottom: '15px !important',
//     color: '#2A2B6A !important',
//   },
//   message: {
//     fontSize: '1.1rem !important',
//     color: '#666 !important',
//     marginBottom: '30px !important',
//   },
//   detailItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     borderBottom: '1px solid #eee',
//     padding: '12px 0',
//     '&:last-child': {
//       borderBottom: 'none',
//     },
//   },
//   detailLabel: {
//     fontWeight: 'bold !important',
//     color: '#333 !important',
//   },
//   detailValue: {
//     color: '#666 !important',
//   },
//   buttonsContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '15px',
//     marginTop: '30px',
//   },
//   homeButton: {
//     backgroundColor: '#2A2B6A !important',
//     color: 'white !important',
//     padding: '12px 24px !important',
//     borderRadius: '8px !important',
//     '&:hover': {
//       backgroundColor: '#1a1b43 !important',
//     },
//   },
//   tryAgainButton: {
//     borderColor: '#2A2B6A !important',
//     color: '#2A2B6A !important',
//     padding: '12px 24px !important',
//     borderRadius: '8px !important',
//     '&:hover': {
//       backgroundColor: 'rgba(42, 43, 106, 0.04) !important',
//     },
//   },
//   loadingOverlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     zIndex: 10,
//     borderRadius: '16px',
//   },
//   pollingIndicator: {
//     position: 'absolute',
//     bottom: '10px',
//     right: '10px',
//     fontSize: '0.75rem',
//     color: '#999',
//   }
// });

// const PaymentComplete = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [loading, setLoading] = useState(true);
//   const [paymentStatus, setPaymentStatus] = useState(null);
//   const [paymentDetails, setPaymentDetails] = useState(null);
//   const [retryCount, setRetryCount] = useState(0);
//   const [pollingCount, setPollingCount] = useState(0);
//   const [isPolling, setIsPolling] = useState(false);
//   const [debugInfo, setDebugInfo] = useState({});

//   const MAX_POLLS = 12; // Poll for up to 1 minute (12 * 5s)
  
//   // Map PhonePe statuses to our internal statuses
//   const mapPaymentStatus = (rawStatus) => {
//     if (!rawStatus) return 'ERROR';
    
//     // Convert to uppercase for case-insensitive comparison
//     const status = typeof rawStatus === 'string' ? rawStatus.toUpperCase() : String(rawStatus).toUpperCase();
    
//     // Log the status being mapped
//     console.log(`Mapping raw status: "${rawStatus}" (${typeof rawStatus})`);
    
//     // Map various success states
//     if (['COMPLETED', 'SUCCESS', 'PAID', 'AUTHORIZED', 'CAPTURED', 'PAYMENT_SUCCESS', 'CHARGED'].includes(status)) {
//       return 'COMPLETED';
//     }
    
//     // Map various pending states
//     if (['PENDING', 'PROCESSING', 'INITIATED', 'IN_PROGRESS', 'PAYMENT_PENDING', 'PAYMENT_PROCESSING'].includes(status)) {
//       return 'PENDING';
//     }
    
//     // Everything else is treated as error
//     return 'ERROR';
//   };

//   // Extract parameters from URL and various possible sources
//   const getParams = () => {
//     // Try query string in hash first
//     const hashParams = new URLSearchParams(location.hash.split('?')[1] || '');
    
//     // Try regular query string as fallback
//     const queryParams = new URLSearchParams(location.search);
    
//     // Try URL path segments as another fallback (if /success/txnId/merchantOrderId pattern)
//     const pathSegments = location.pathname.split('/').filter(Boolean);
//     const pathTransactionId = pathSegments.length > 1 ? pathSegments[pathSegments.length - 2] : null;
//     const pathMerchantOrderId = pathSegments.length > 2 ? pathSegments[pathSegments.length - 1] : null;
    
//     // Try hash as direct value
//     const hashValue = location.hash.replace(/^#/, '');
    
//     const result = {
//       transactionId: hashParams.get('txnId') || 
//                     queryParams.get('txnId') || 
//                     hashParams.get('transactionId') || 
//                     queryParams.get('transactionId') ||
//                     pathTransactionId,
      
//       merchantOrderId: hashParams.get('merchantOrderId') || 
//                       queryParams.get('merchantOrderId') || 
//                       pathMerchantOrderId ||
//                       localStorage.getItem('current_order_id')
//     };
    
//     console.log('Extracted parameters:', result);
//     return result;
//   };

//   const fetchPaymentStatus = async () => {
//     try {
//       setIsPolling(true);
//       const { transactionId, merchantOrderId } = getParams();
      
//       console.log(`Checking payment status (attempt ${pollingCount + 1}):`);
//       console.log(`- Transaction ID: ${transactionId || 'N/A'}`);
//       console.log(`- Merchant Order ID: ${merchantOrderId || 'N/A'}`);
      
//       // If we don't have any merchant order ID to check
//       if (!merchantOrderId) {
//         if (retryCount < 3) {
//           setRetryCount(prev => prev + 1);
//           setTimeout(() => fetchPaymentStatus(), 1000); // Retry after 1 second
//           return;
//         }
        
//         setPaymentStatus('ERROR');
//         setLoading(false);
//         setIsPolling(false);
//         return;
//       }

//       let statusUrl = `https://gigaversity.in/pay/check-status/${merchantOrderId}`;
//       if (transactionId) {
//         statusUrl += `?transactionId=${transactionId}`;
//       }

//       console.log(`Querying status URL: ${statusUrl}`);
      
//       const response = await fetch(statusUrl);
//       const data = await response.json();
      
//       console.log('Raw API response:', data);
      
//       if (data.success) {
//         // Store raw response for debugging
//         setDebugInfo(prev => ({
//           ...prev,
//           rawStatus: data.status,
//           mappedStatus: mapPaymentStatus(data.status),
//           rawResponse: data
//         }));
        
//         const mappedStatus = mapPaymentStatus(data.status);
//         console.log(`PhonePe status: "${data.status}" → Mapped to: "${mappedStatus}"`);
        
//         setPaymentStatus(mappedStatus);
//         setPaymentDetails({
//           merchant_order_id: data.merchant_order_id,
//           transaction_id: transactionId || data.transaction_id,
//           amount: data.amount,
//           order_details: data.order_details
//         });

//         if (mappedStatus === 'COMPLETED') {
//           localStorage.removeItem('current_order_id');
//           setIsPolling(false);
//         } else if (mappedStatus === 'PENDING' && pollingCount < MAX_POLLS) {
//           // Continue polling for pending status
//           setPollingCount(prev => prev + 1);
//           setTimeout(() => fetchPaymentStatus(), 5000); // Check again in 5 seconds
//         } else {
//           setIsPolling(false);
//         }
//       } else {
//         console.error('Payment verification failed:', data.error);
//         setPaymentStatus('ERROR');
//         setDebugInfo(prev => ({
//           ...prev,
//           apiError: data.error || 'Unknown error',
//           rawResponse: data
//         }));
//         setIsPolling(false);
//       }
//     } catch (error) {
//       console.error('Error checking payment status:', error);
//       setPaymentStatus('ERROR');
//       setDebugInfo(prev => ({
//         ...prev,
//         fetchError: error.message
//       }));
//       setIsPolling(false);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Initial status check
//   useEffect(() => {
//     console.log('PaymentComplete component mounted');
//     console.log('Current URL:', window.location.href);
//     fetchPaymentStatus();
//   }, []);
  
//   // Polling effect for pending payments
//   useEffect(() => {
//     if (paymentStatus === 'PENDING' && pollingCount < MAX_POLLS && !isPolling) {
//       console.log(`Payment pending, scheduling poll #${pollingCount + 1}`);
//       const timer = setTimeout(() => {
//         fetchPaymentStatus();
//       }, 5000); // Poll every 5 seconds
      
//       return () => clearTimeout(timer);
//     }
//   }, [paymentStatus, pollingCount, isPolling]);

//   const renderStatusContent = () => {
//     if (loading) {
//       return (
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <CircularProgress size={50} sx={{ mb: 3 }} />
//           <Typography className={classes.title}>Verifying Payment</Typography>
//           <Typography className={classes.message}>
//             Please wait while we verify your transaction...
//           </Typography>
//         </Box>
//       );
//     }

//     switch (paymentStatus) {
//       case 'COMPLETED':
//         return (
//           <>
//             <CheckCircleIcon className={`${classes.icon} ${classes.successIcon}`} />
//             <Typography className={classes.title}>Payment Successful!</Typography>
//             <Typography className={classes.message}>
//               Thank you! Your payment has been processed successfully.
//             </Typography>
            
//             <Box sx={{ mt: 4, mb: 3 }}>
//               <Box className={classes.detailItem}>
//                 <Typography className={classes.detailLabel}>Order ID:</Typography>
//                 <Typography className={classes.detailValue}>
//                   {paymentDetails?.merchant_order_id || 'N/A'}
//                 </Typography>
//               </Box>
//               <Box className={classes.detailItem}>
//                 <Typography className={classes.detailLabel}>Transaction ID:</Typography>
//                 <Typography className={classes.detailValue}>
//                   {paymentDetails?.transaction_id || 'N/A'}
//                 </Typography>
//               </Box>
//               <Box className={classes.detailItem}>
//                 <Typography className={classes.detailLabel}>Amount:</Typography>
//                 <Typography className={classes.detailValue}>
//                   ₹{paymentDetails?.amount?.toFixed(2) || '0.00'}
//                 </Typography>
//               </Box>
//             </Box>
//           </>
//         );
      
//       case 'PENDING':
//         return (
//           <>
//             <HourglassEmptyIcon className={`${classes.icon} ${classes.pendingIcon}`} />
//             <Typography className={classes.title}>Payment Processing</Typography>
//             <Typography className={classes.message}>
//               Your payment is being processed. This might take a moment. 
//               {pollingCount > 0 && ` We've checked ${pollingCount} times.`}
//             </Typography>
            
//             {paymentDetails?.merchant_order_id && (
//               <Box sx={{ mt: 3 }}>
//                 <Typography variant="body2" color="textSecondary">
//                   Order ID: {paymentDetails.merchant_order_id}
//                 </Typography>
//               </Box>
//             )}
//           </>
//         );
      
//       default: // ERROR case
//         return (
//           <>
//             <ErrorIcon className={`${classes.icon} ${classes.errorIcon}`} />
//             <Typography className={classes.title}>Payment Failed</Typography>
//             <Typography className={classes.message}>
//               We couldn't process your payment. Please try again or contact support.
//             </Typography>
            
//             {/* Only show this in development */}
//             {process.env.NODE_ENV === 'development' && Object.keys(debugInfo).length > 0 && (
//               <Box sx={{ mt: 2, textAlign: 'left', p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
//                 <Typography variant="caption" sx={{ fontWeight: 'bold' }}>Debug Info:</Typography>
//                 <pre style={{ fontSize: '0.7rem', overflow: 'auto', maxHeight: '150px' }}>
//                   {JSON.stringify(debugInfo, null, 2)}
//                 </pre>
//               </Box>
//             )}
//           </>
//         );
//     }
//   };

//   return (
//     <Box className={classes.pageContainer}>
//       <Navbar />
//       <Box className={classes.mainContent}>
//         <Paper className={classes.statusContainer} elevation={0}>
//           {renderStatusContent()}
          
//           {isPolling && (
//             <Box className={classes.loadingOverlay}>
//               <CircularProgress size={40} />
//             </Box>
//           )}
          
//           {pollingCount > 0 && !isPolling && (
//             <Typography className={classes.pollingIndicator}>
//               Status checked {pollingCount} time{pollingCount !== 1 ? 's' : ''}
//             </Typography>
//           )}
          
//           <Box className={classes.buttonsContainer}>
//             <Button 
//               variant="contained" 
//               className={classes.homeButton}
//               onClick={() => navigate('/')}
//               disabled={isPolling}
//             >
//               Return to Home
//             </Button>
            
//             {paymentStatus === 'ERROR' && (
//               <Button 
//                 variant="outlined"
//                 className={classes.tryAgainButton}
//                 onClick={() => navigate('/cart')}
//                 disabled={isPolling}
//               >
//                 Try Again
//               </Button>
//             )}
//           </Box>
//         </Paper>
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// export default PaymentComplete;