// src/components/payment/PaymentProcess.jsx
import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  Paper,
  CircularProgress,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../common/navbar/Navbar';
import Footer from '../common/footer/Footer';
import VerifiedIcon from '@mui/icons-material/Verified';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import DoneIcon from '@mui/icons-material/Done';
import TimerIcon from '@mui/icons-material/Timer';
import PhonePeIcon from '../payment/PhonePeIcon';

const useStyles = makeStyles({
  pageContainer: {
    minHeight: '100vh',
    backgroundColor: '#f9fafc',
    paddingBottom: '60px',
  },
  mainContent: {
    padding: '40px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 960px)': {
      padding: '30px 0',
    },
    '@media (max-width: 600px)': {
      padding: '20px 0',
    }
  },
  pageTitle: {
    fontSize: '2.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '16px !important',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.6rem !important',
    }
  },
  pageSubtitle: {
    fontSize: '1.1rem !important',
    color: '#666666 !important',
    textAlign: 'center',
    marginBottom: '40px !important',
    maxWidth: '700px',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '30px !important',
    }
  },
  paymentContainer: {
    width: '100%',
    maxWidth: '800px',
  },
  card: {
    borderRadius: '15px !important',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06) !important',
    padding: '30px !important',
    position: 'relative',
    backgroundColor: '#ffffff !important',
    marginBottom: '30px',
    '@media (max-width: 600px)': {
      padding: '20px !important',
    }
  },
  stepper: {
    marginBottom: '40px',
    '@media (max-width: 600px)': {
      marginBottom: '30px',
    }
  },
  phonePeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
    margin: '20px 0',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    backgroundColor: '#f7f7f7',
    position: 'relative',
    '@media (max-width: 600px)': {
      padding: '20px',
    }
  },
  phonePeLogoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    position: 'relative',
  },
  phonePeLogo: {
    width: '120px',
    height: '120px',
    '@media (max-width: 600px)': {
      width: '100px',
      height: '100px',
    }
  },
  paymentAmount: {
    fontSize: '2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '30px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '20px !important',
    }
  },
  paymentDetails: {
    fontSize: '1.1rem !important',
    color: '#555555 !important',
    marginBottom: '10px !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    }
  },
  processingMessage: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginTop: '20px !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    }
  },
  continueButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '15px 30px !important',
    borderRadius: '10px !important',
    fontWeight: 'bold !important',
    fontSize: '1.1rem !important',
    marginTop: '20px !important',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease !important',
    boxShadow: '0 8px 20px rgba(42, 43, 106, 0.3) !important',
    '&:hover': {
      backgroundColor: '#1a1b43 !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 15px 30px rgba(42, 43, 106, 0.4) !important',
    },
    '@media (max-width: 600px)': {
      padding: '12px 25px !important',
      fontSize: '1rem !important',
    }
  },
  successIcon: {
    fontSize: '80px !important',
    color: '#4caf50',
    marginBottom: '20px',
    '@media (max-width: 600px)': {
      fontSize: '70px !important',
    }
  },
  successTitle: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.6rem !important',
    }
  },
  successMessage: {
    fontSize: '1.1rem !important',
    color: '#555555 !important',
    textAlign: 'center',
    marginBottom: '30px !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    }
  },
  orderDetails: {
    backgroundColor: 'rgba(42, 43, 106, 0.05)',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '30px',
    '@media (max-width: 600px)': {
      padding: '15px',
    }
  },
  orderDetail: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    '&:last-child': {
      marginBottom: 0
    }
  },
  orderLabel: {
    fontSize: '1rem !important',
    color: '#666666 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    }
  },
  orderValue: {
    fontSize: '1rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    }
  },
  backHomeButton: {
    backgroundColor: '#4caf50 !important',
    color: 'white !important',
    padding: '15px 30px !important',
    borderRadius: '10px !important',
    fontWeight: 'bold !important',
    fontSize: '1.1rem !important',
    marginTop: '10px !important',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease !important',
    boxShadow: '0 8px 20px rgba(76, 175, 80, 0.3) !important',
    '&:hover': {
      backgroundColor: '#3d9140 !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 15px 30px rgba(76, 175, 80, 0.4) !important',
    },
    '@media (max-width: 600px)': {
      padding: '12px 25px !important',
      fontSize: '1rem !important',
    }
  },
  courseDetailsButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    padding: '15px 30px !important',
    borderRadius: '10px !important',
    fontWeight: 'bold !important',
    fontSize: '1.1rem !important',
    marginTop: '20px !important',
    marginLeft: '15px !important',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease !important',
    boxShadow: '0 8px 20px rgba(255, 198, 20, 0.3) !important',
    '&:hover': {
      backgroundColor: '#ffd647 !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 15px 30px rgba(255, 198, 20, 0.4) !important',
    },
    '@media (max-width: 600px)': {
      padding: '12px 25px !important',
      fontSize: '1rem !important',
      marginLeft: '0 !important',
      marginTop: '15px !important',
    }
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'center',
    }
  },
  courseId: {
    backgroundColor: '#2A2B6A',
    color: 'white',
    padding: '3px 10px',
    borderRadius: '4px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  pulse: {
    animation: '$pulse 1.5s infinite',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.05)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
});

const PaymentProcess = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const courseData = location.state || {
    course: 'fullstack',
    price: 199,
    title: 'Full Stack Development'
  };

  useEffect(() => {
    // Start the payment simulation process
    const timer1 = setTimeout(() => {
      setActiveStep(1);
    }, 2000);

    const timer2 = setTimeout(() => {
      setActiveStep(2);
    }, 4000);

    const timer3 = setTimeout(() => {
      setPaymentComplete(true);
      setOrderNumber('GVS' + Math.floor(100000 + Math.random() * 900000));
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleContinue = () => {
    // For demo purposes, we'll just redirect to the course page
    if (courseData.course === 'fullstack') {
      navigate('/fullstack');
    } else {
      navigate('/datascience');
    }
  };

  const handleBackHome = () => {
    navigate('/');
  };

  // Payment processing steps
  const steps = [
    'Initiating Payment',
    'Processing',
    'Verification'
  ];

  const renderPaymentProcessing = () => (
    <Paper className={classes.card} elevation={0}>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box className={classes.phonePeContainer}>
        <Box className={classes.phonePeLogoContainer}>
          <PhonePeIcon className={classes.phonePeLogo} />
        </Box>
        
        <Typography className={classes.paymentAmount}>
          ₹{courseData.price}
        </Typography>
        
        <Typography className={classes.paymentDetails}>
          Course: {courseData.title}
        </Typography>
        
        <Typography className={classes.paymentDetails}>
          Duration: 30 Days
        </Typography>
        
        <Typography className={classes.processingMessage}>
          {activeStep === 0 && (
            <>
              <PhoneAndroidIcon /> Connecting to PhonePe...
            </>
          )}
          {activeStep === 1 && (
            <>
              <LocalAtmIcon /> Processing payment...
            </>
          )}
          {activeStep === 2 && (
            <>
              <VerifiedIcon /> Verifying transaction...
            </>
          )}
        </Typography>
        
        <CircularProgress 
          sx={{ mt: 3, color: '#2A2B6A' }} 
          className={activeStep === 2 ? classes.pulse : ''}
        />
      </Box>
    </Paper>
  );

  const renderPaymentSuccess = () => (
    <Paper className={classes.card} elevation={0}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <DoneIcon className={classes.successIcon} />
        
        <Typography className={classes.successTitle}>
          Payment Successful!
        </Typography>
        
        <Typography className={classes.successMessage}>
          Thank you for registering for our Virtual Placement Drive. Your course access has been activated.
        </Typography>
        
        <Box className={classes.orderDetails}>
          <Box className={classes.orderDetail}>
            <Typography className={classes.orderLabel}>Order ID:</Typography>
            <Typography className={classes.orderValue}>{orderNumber}</Typography>
          </Box>
          
          <Box className={classes.orderDetail}>
            <Typography className={classes.orderLabel}>Amount Paid:</Typography>
            <Typography className={classes.orderValue}>₹{courseData.price}</Typography>
          </Box>
          
          <Box className={classes.orderDetail}>
            <Typography className={classes.orderLabel}>Course:</Typography>
            <Typography className={classes.orderValue}>{courseData.title}</Typography>
          </Box>
          
          <Box className={classes.orderDetail}>
            <Typography className={classes.orderLabel}>Status:</Typography>
            <Typography className={classes.orderValue} sx={{ color: '#4caf50 !important' }}>
              Confirmed
            </Typography>
          </Box>
        </Box>
        
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 2 }}>
          We've sent the course details and receipt to your email. You can start your learning journey right away!
        </Typography>
        
        <Box className={classes.buttonsContainer}>
          <Button
            variant="contained"
            className={classes.backHomeButton}
            onClick={handleBackHome}
          >
            Back to Home
          </Button>
          
          <Button
            variant="contained"
            className={classes.courseDetailsButton}
            onClick={handleContinue}
          >
            Go to Course
          </Button>
        </Box>
      </Box>
    </Paper>
  );

  return (
    <Box className={classes.pageContainer}>
      <Navbar />
      <Container maxWidth="lg">
        <Box className={classes.mainContent}>
          <Typography variant="h1" className={classes.pageTitle}>
            {paymentComplete ? (
              <>Payment <span>Successful</span></>
            ) : (
              <>Processing <span>Payment</span></>
            )}
          </Typography>
          
          <Typography variant="body1" className={classes.pageSubtitle}>
            {paymentComplete ? (
              'Your transaction has been completed successfully!'
            ) : (
              'Please wait while we process your payment via PhonePe...'
            )}
          </Typography>

          <Box className={classes.paymentContainer}>
            {paymentComplete ? renderPaymentSuccess() : renderPaymentProcessing()}
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default PaymentProcess;