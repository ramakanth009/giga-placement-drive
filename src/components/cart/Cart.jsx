// src/components/cart/Cart.jsx
import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  Button, 
  Paper, 
  Divider,
  Container,
  Card,
  CardContent,
  CircularProgress,
  TextField
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Footer from '../common/footer/Footer';
import Navbar from '../common/navbar/Navbar';
import PaymentProcessor from './PaymentProcessor';

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
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '16px !important',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
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
  cartContainer: {
    width: '100%',
    maxWidth: '900px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    '@media (max-width: 960px)': {
      gap: '25px',
    },
    '@media (max-width: 600px)': {
      gap: '20px',
    }
  },
  card: {
    borderRadius: '15px !important',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06) !important',
    overflow: 'visible !important',
    position: 'relative',
    backgroundColor: '#ffffff !important',
  },
  cardTitle: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '0',
      width: '60px',
      height: '3px',
      backgroundColor: '#FFC614',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
      marginBottom: '16px !important',
    }
  },
  programSelectionSection: {
    width: '100%',
    marginBottom: '30px',
    '@media (max-width: 600px)': {
      marginBottom: '25px',
    }
  },
  optionCard: {
    border: '2px solid #e0e0e0',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    transform: 'translateX(0)',
    '&:hover': {
      borderColor: '#FFC614',
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
    },
    '@media (max-width: 600px)': {
      padding: '15px',
    }
  },
  selectedOption: {
    borderColor: '#FFC614',
    backgroundColor: 'rgba(255, 198, 20, 0.05)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '0',
      top: '0',
      bottom: '0',
      width: '4px',
      backgroundColor: '#FFC614',
    }
  },
  optionDetails: {
    marginLeft: '10px',
    flex: 1,
  },
  optionTitle: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    }
  },
  optionDescription: {
    fontSize: '0.9rem !important',
    color: '#666666 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
    }
  },
  courseIcon: {
    backgroundColor: 'rgba(42, 43, 106, 0.1)',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2A2B6A',
    marginRight: '15px',
    '@media (max-width: 600px)': {
      width: '40px',
      height: '40px',
      marginRight: '10px',
    }
  },
  iconSize: {
    fontSize: '24px !important',
    '@media (max-width: 600px)': {
      fontSize: '20px !important',
    }
  },
  formSection: {
    marginTop: '30px',
    width: '100%',
  },
  formTitle: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '0',
      width: '60px',
      height: '3px',
      backgroundColor: '#FFC614',
    },
  },
  formField: {
    marginBottom: '20px !important',
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#2A2B6A',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2A2B6A',
      }
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#2A2B6A',
    }
  },
  programDetailsCard: {
    width: '100%',
  },
  summaryCard: {
    padding: '25px !important',
    '@media (max-width: 600px)': {
      padding: '20px !important',
    }
  },
  summaryCourseName: {
    fontSize: '1.3rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '5px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
    }
  },
  summaryDuration: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.95rem !important',
    color: '#666666 !important',
    marginBottom: '20px !important',
    '& svg': {
      marginRight: '5px',
      color: '#FFC614',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      marginBottom: '15px !important',
    }
  },
  divider: {
    margin: '15px 0 !important',
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5px',
  },
  priceLabel: {
    fontSize: '1rem !important',
    color: '#666666 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    }
  },
  priceValue: {
    fontSize: '1rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    }
  },
  discountLabel: {
    fontSize: '1rem !important',
    color: '#4caf50 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    }
  },
  discountValue: {
    fontSize: '1rem !important',
    fontWeight: 'bold !important',
    color: '#4caf50 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    }
  },
  totalContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px',
    marginBottom: '25px',
  },
  totalLabel: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    }
  },
  totalValue: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    '@media (max-width: 600px)': {
      fontSize: '1.6rem !important',
    }
  },
  buyButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '15px !important',
    borderRadius: '10px !important',
    fontWeight: 'bold !important',
    fontSize: '1.1rem !important',
    width: '100% !important',
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
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '30px',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.3)',
      transform: 'skewX(-30deg) translateX(-150px)',
      animation: '$shine 3s infinite',
    },
    '&:disabled': {
      backgroundColor: '#cccccc !important',
      cursor: 'not-allowed',
      '&:hover': {
        transform: 'none',
        boxShadow: 'none !important',
      },
    },
    '@media (max-width: 600px)': {
      padding: '12px !important',
      fontSize: '1rem !important',
    }
  },
  '@keyframes shine': {
    '0%': {
      transform: 'skewX(-30deg) translateX(-150px)',
    },
    '100%': {
      transform: 'skewX(-30deg) translateX(350px)',
    }
  },
  featuresContainer: {
    marginTop: '20px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '10px',
    '&:last-child': {
      marginBottom: 0
    },
    '@media (max-width: 600px)': {
      marginBottom: '8px',
    }
  },
  featureIcon: {
    color: '#4caf50',
    marginRight: '10px',
    marginTop: '3px',
    '@media (max-width: 600px)': {
      marginRight: '8px',
    }
  },
  featureText: {
    fontSize: '0.95rem !important',
    color: '#555555 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    }
  },
  originalPrice: {
    textDecoration: 'line-through',
    color: '#999999 !important',
    marginRight: '10px',
    fontSize: '0.9rem !important',
  },
  errorText: {
    color: '#f44336 !important',
    fontSize: '0.75rem !important',
    marginTop: '4px !important',
  }
});

const Cart = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCourse, setSelectedCourse] = useState('fullstack');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Add form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  
  // Add error state
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Invalid phone number (10 digits required)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handlePaymentInitiated = (merchantOrderId) => {
    // console.log('Payment initiated with order ID:', merchantOrderId);
    setIsProcessing(true);
  };

  const courses = {
    fullstack: {
      title: 'Full Stack Development',
      description: 'Learn frontend, backend, databases and more',
      icon: <CodeIcon className={classes.iconSize} />,
      price: 499,
      discountedPrice: 1,
      duration: '30 Days',
      features: [
        'Daily 1-hour live coding sessions',
        'Hands-on projects with expert feedback',
        'Access to 400+ job opportunities',
        'Portfolio development and resume building',
        'Interview preparation and mock interviews'
      ]
    },
    datascience: {
      title: 'Data Science',
      description: 'Master data analysis, visualization and ML',
      icon: <DataObjectIcon className={classes.iconSize} />,
      price: 499,
      discountedPrice: 1,
      duration: '30 Days',
      features: [
        'Live project sessions with industry experts',
        'Real-world datasets and analysis challenges',
        'Access to 400+ analytics job opportunities',
        'AI and machine learning fundamentals',
        'Data visualization and insight reporting'
      ]
    }
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const selectedCourseData = courses[selectedCourse];
  const discount = selectedCourseData.price - selectedCourseData.discountedPrice;
  const discountPercentage = Math.round((discount / selectedCourseData.price) * 100);

  return (
    <Box className={classes.pageContainer}>
      <Navbar />
      <Container maxWidth="lg">
        <Box className={classes.mainContent}>
          <Typography variant="h1" className={classes.pageTitle}>
            Your <span>Cart</span>
          </Typography>
          <Typography variant="body1" className={classes.pageSubtitle}>
            You're just one step away from starting your tech journey with our Virtual Placement Drive
          </Typography>

          <Box className={classes.cartContainer}>
            {/* Program Selection Section (Top) */}
            <Box className={classes.programSelectionSection}>
              <Paper className={classes.card} elevation={0}>
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                  <Typography className={classes.cardTitle}>
                    Choose Your Program
                  </Typography>

                  <RadioGroup
                    value={selectedCourse}
                    onChange={handleCourseChange}
                  >
                    {Object.entries(courses).map(([courseId, course]) => (
                      <Box 
                        key={courseId}
                        className={`${classes.optionCard} ${selectedCourse === courseId ? classes.selectedOption : ''}`}
                        onClick={() => setSelectedCourse(courseId)}
                      >
                        <FormControlLabel
                          value={courseId}
                          control={<Radio />}
                          label=""
                          sx={{ margin: 0 }}
                        />
                        <Box className={classes.courseIcon}>
                          {course.icon}
                        </Box>
                        <Box className={classes.optionDetails}>
                          <Typography className={classes.optionTitle}>
                            {course.title}
                          </Typography>
                          <Typography className={classes.optionDescription}>
                            {course.description}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </RadioGroup>

                  <Box className={classes.formSection}>
                    <Typography className={classes.formTitle}>
                      Contact Information
                    </Typography>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={classes.formField}
                      error={!!errors.fullName}
                      helperText={errors.fullName}
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={classes.formField}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={classes.formField}
                      error={!!errors.phone}
                      helperText={errors.phone}
                      inputProps={{ maxLength: 10 }}
                    />
                  </Box>
                </CardContent>
              </Paper>
            </Box>

            {/* Program Details Card (Bottom) */}
            <Box className={classes.programDetailsCard}>
              <Paper className={classes.card} elevation={0}>
                <CardContent className={classes.summaryCard}>
                  <Typography className={classes.cardTitle}>
                    Order Summary
                  </Typography>

                  <Typography className={classes.summaryCourseName}>
                    {selectedCourseData.title}
                  </Typography>
                  <Typography className={classes.summaryDuration}>
                    <CalendarMonthIcon fontSize="small" />
                    {selectedCourseData.duration} Intensive Training
                  </Typography>

                  <Box className={classes.featuresContainer}>
                    {selectedCourseData.features.map((feature, index) => (
                      <Box key={index} className={classes.featureItem}>
                        <CheckCircleIcon className={classes.featureIcon} fontSize="small" />
                        <Typography className={classes.featureText}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Divider className={classes.divider} />

                  <Box className={classes.priceContainer}>
                    <Typography className={classes.priceLabel}>
                      Regular Price
                    </Typography>
                    <Typography className={classes.priceValue}>
                      <span className={classes.originalPrice}>₹{selectedCourseData.price}</span>
                    </Typography>
                  </Box>

                  <Box className={classes.priceContainer}>
                    <Typography className={classes.discountLabel}>
                      Discount ({discountPercentage}% Off)
                    </Typography>
                    <Typography className={classes.discountValue}>
                      -₹{discount}
                    </Typography>
                  </Box>

                  <Divider className={classes.divider} />

                  <Box className={classes.totalContainer}>
                    <Typography className={classes.totalLabel}>
                      Total
                    </Typography>
                    <Typography className={classes.totalValue}>
                      ₹{selectedCourseData.discountedPrice}
                    </Typography>
                  </Box>

                  <PaymentProcessor 
                    amount={selectedCourseData.discountedPrice.toFixed(2)}
                    email={formData.email}
                    mobile={formData.phone}
                    onPaymentInitiated={handlePaymentInitiated}
                  />
                </CardContent>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Cart;

// import React, { useState, useEffect } from 'react';
// import { 
//   Box, 
//   Typography, 
//   Radio, 
//   RadioGroup, 
//   FormControlLabel, 
//   Button, 
//   Paper, 
//   Divider,
//   Container,
//   Card,
//   CardContent,
//   CircularProgress,
//   TextField,
//   Alert,
//   Snackbar
// } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import { useNavigate, useLocation } from 'react-router-dom';
// import CodeIcon from '@mui/icons-material/Code';
// import DataObjectIcon from '@mui/icons-material/DataObject';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Footer from '../common/footer/Footer';
// import Navbar from '../common/navbar/Navbar';
// import PaymentProcessor from './PaymentProcessor';

// const useStyles = makeStyles({
//   pageContainer: {
//     minHeight: '100vh',
//     backgroundColor: '#f9fafc',
//     paddingBottom: '60px',
//   },
//   mainContent: {
//     padding: '40px 0',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     '@media (max-width: 960px)': {
//       padding: '30px 0',
//     },
//     '@media (max-width: 600px)': {
//       padding: '20px 0',
//     }
//   },
//   pageTitle: {
//     fontSize: '2.5rem !important',
//     fontWeight: 'bold !important',
//     color: '#2A2B6A !important',
//     textAlign: 'center',
//     marginBottom: '16px !important',
//     '& span': {
//       color: '#FFC614 !important',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '2.2rem !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '1.8rem !important',
//     }
//   },
//   pageSubtitle: {
//     fontSize: '1.1rem !important',
//     color: '#666666 !important',
//     textAlign: 'center',
//     marginBottom: '40px !important',
//     maxWidth: '700px',
//     '@media (max-width: 600px)': {
//       fontSize: '1rem !important',
//       marginBottom: '30px !important',
//     }
//   },
//   cartContainer: {
//     width: '100%',
//     maxWidth: '900px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '30px',
//     '@media (max-width: 960px)': {
//       gap: '25px',
//     },
//     '@media (max-width: 600px)': {
//       gap: '20px',
//     }
//   },
//   card: {
//     borderRadius: '15px !important',
//     boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06) !important',
//     overflow: 'visible !important',
//     position: 'relative',
//     backgroundColor: '#ffffff !important',
//   },
//   cardTitle: {
//     fontSize: '1.4rem !important',
//     fontWeight: 'bold !important',
//     color: '#2A2B6A !important',
//     marginBottom: '20px !important',
//     position: 'relative',
//     '&:after': {
//       content: '""',
//       position: 'absolute',
//       bottom: '-8px',
//       left: '0',
//       width: '60px',
//       height: '3px',
//       backgroundColor: '#FFC614',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '1.2rem !important',
//       marginBottom: '16px !important',
//     }
//   },
//   programSelectionSection: {
//     width: '100%',
//     marginBottom: '30px',
//     '@media (max-width: 600px)': {
//       marginBottom: '25px',
//     }
//   },
//   optionCard: {
//     border: '2px solid #e0e0e0',
//     borderRadius: '12px',
//     padding: '20px',
//     marginBottom: '15px',
//     display: 'flex',
//     alignItems: 'center',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     position: 'relative',
//     overflow: 'hidden',
//     transform: 'translateX(0)',
//     '&:hover': {
//       borderColor: '#FFC614',
//       transform: 'translateY(-3px)',
//       boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
//     },
//     '@media (max-width: 600px)': {
//       padding: '15px',
//     }
//   },
//   selectedOption: {
//     borderColor: '#FFC614',
//     backgroundColor: 'rgba(255, 198, 20, 0.05)',
//     boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
//     '&:before': {
//       content: '""',
//       position: 'absolute',
//       left: '0',
//       top: '0',
//       bottom: '0',
//       width: '4px',
//       backgroundColor: '#FFC614',
//     }
//   },
//   optionDetails: {
//     marginLeft: '10px',
//     flex: 1,
//   },
//   optionTitle: {
//     fontSize: '1.2rem !important',
//     fontWeight: 'bold !important',
//     color: '#2A2B6A !important',
//     '@media (max-width: 600px)': {
//       fontSize: '1.1rem !important',
//     }
//   },
//   optionDescription: {
//     fontSize: '0.9rem !important',
//     color: '#666666 !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.85rem !important',
//     }
//   },
//   courseIcon: {
//     backgroundColor: 'rgba(42, 43, 106, 0.1)',
//     width: '50px',
//     height: '50px',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: '#2A2B6A',
//     marginRight: '15px',
//     '@media (max-width: 600px)': {
//       width: '40px',
//       height: '40px',
//       marginRight: '10px',
//     }
//   },
//   iconSize: {
//     fontSize: '24px !important',
//     '@media (max-width: 600px)': {
//       fontSize: '20px !important',
//     }
//   },
//   formSection: {
//     marginTop: '30px',
//     width: '100%',
//   },
//   formTitle: {
//     fontSize: '1.4rem !important',
//     fontWeight: 'bold !important',
//     color: '#2A2B6A !important',
//     marginBottom: '20px !important',
//     position: 'relative',
//     '&:after': {
//       content: '""',
//       position: 'absolute',
//       bottom: '-8px',
//       left: '0',
//       width: '60px',
//       height: '3px',
//       backgroundColor: '#FFC614',
//     },
//   },
//   formField: {
//     marginBottom: '20px !important',
//     '& .MuiOutlinedInput-root': {
//       '&:hover fieldset': {
//         borderColor: '#2A2B6A',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: '#2A2B6A',
//       }
//     },
//     '& .MuiFormLabel-root.Mui-focused': {
//       color: '#2A2B6A',
//     }
//   },
//   programDetailsCard: {
//     width: '100%',
//   },
//   summaryCard: {
//     padding: '25px !important',
//     '@media (max-width: 600px)': {
//       padding: '20px !important',
//     }
//   },
//   summaryCourseName: {
//     fontSize: '1.3rem !important',
//     fontWeight: 'bold !important',
//     color: '#2A2B6A !important',
//     marginBottom: '5px !important',
//     '@media (max-width: 600px)': {
//       fontSize: '1.2rem !important',
//     }
//   },
//   summaryDuration: {
//     display: 'flex',
//     alignItems: 'center',
//     fontSize: '0.95rem !important',
//     color: '#666666 !important',
//     marginBottom: '20px !important',
//     '& svg': {
//       marginRight: '5px',
//       color: '#FFC614',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '0.9rem !important',
//       marginBottom: '15px !important',
//     }
//   },
//   divider: {
//     margin: '15px 0 !important',
//   },
//   priceContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '5px',
//   },
//   priceLabel: {
//     fontSize: '1rem !important',
//     color: '#666666 !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.95rem !important',
//     }
//   },
//   priceValue: {
//     fontSize: '1rem !important',
//     fontWeight: 'bold !important',
//     color: '#2A2B6A !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.95rem !important',
//     }
//   },
//   discountLabel: {
//     fontSize: '1rem !important',
//     color: '#4caf50 !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.95rem !important',
//     }
//   },
//   discountValue: {
//     fontSize: '1rem !important',
//     fontWeight: 'bold !important',
//     color: '#4caf50 !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.95rem !important',
//     }
//   },
//   totalContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: '15px',
//     marginBottom: '25px',
//   },
//   totalLabel: {
//     fontSize: '1.2rem !important',
//     fontWeight: 'bold !important',
//     color: '#2A2B6A !important',
//     '@media (max-width: 600px)': {
//       fontSize: '1.1rem !important',
//     }
//   },
//   totalValue: {
//     fontSize: '1.8rem !important',
//     fontWeight: 'bold !important',
//     color: '#2A2B6A !important',
//     '@media (max-width: 600px)': {
//       fontSize: '1.6rem !important',
//     }
//   },
//   featuresContainer: {
//     marginTop: '20px',
//   },
//   featureItem: {
//     display: 'flex',
//     alignItems: 'flex-start',
//     marginBottom: '10px',
//     '&:last-child': {
//       marginBottom: 0
//     },
//     '@media (max-width: 600px)': {
//       marginBottom: '8px',
//     }
//   },
//   featureIcon: {
//     color: '#4caf50',
//     marginRight: '10px',
//     marginTop: '3px',
//     '@media (max-width: 600px)': {
//       marginRight: '8px',
//     }
//   },
//   featureText: {
//     fontSize: '0.95rem !important',
//     color: '#555555 !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.9rem !important',
//     }
//   },
//   originalPrice: {
//     textDecoration: 'line-through',
//     color: '#999999 !important',
//     marginRight: '10px',
//     fontSize: '0.9rem !important',
//   },
//   errorText: {
//     color: '#f44336 !important',
//     fontSize: '0.75rem !important',
//     marginTop: '4px !important',
//   }
// });

// const Cart = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCourse, setSelectedCourse] = useState('fullstack');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [notification, setNotification] = useState({ open: false, message: '', severity: 'info' });
  
//   // Add form state
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: ''
//   });
  
//   // Add error state
//   const [errors, setErrors] = useState({});

//   // Check for any stored order ID and clear it
//   useEffect(() => {
//     const storedOrderId = localStorage.getItem('current_order_id');
//     if (storedOrderId) {
//       console.log('Found pending order ID:', storedOrderId);
//       setNotification({
//         open: true,
//         message: 'Your previous payment session was cleared. You can start a new payment.',
//         severity: 'info'
//       });
//       localStorage.removeItem('current_order_id');
//     }
//   }, []);

//   // Form validation
//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Invalid email address';
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!/^\d{10}$/.test(formData.phone.trim())) {
//       newErrors.phone = 'Invalid phone number (10 digits required)';
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Clear error when user types
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const handleCloseNotification = () => {
//     setNotification({ ...notification, open: false });
//   };

//   const handlePaymentInitiated = (merchantOrderId) => {
//     console.log('Payment initiated with order ID:', merchantOrderId);
//     setIsProcessing(true);
//     setNotification({
//       open: true,
//       message: 'Payment initiated! You will be redirected to the payment gateway.',
//       severity: 'success'
//     });
//   };

//   const courses = {
//     fullstack: {
//       title: 'Full Stack Development',
//       description: 'Learn frontend, backend, databases and more',
//       icon: <CodeIcon className={classes.iconSize} />,
//       price: 499,
//       discountedPrice: 1,
//       duration: '30 Days',
//       features: [
//         'Daily 1-hour live coding sessions',
//         'Hands-on projects with expert feedback',
//         'Access to 400+ job opportunities',
//         'Portfolio development and resume building',
//         'Interview preparation and mock interviews'
//       ]
//     },
//     datascience: {
//       title: 'Data Science',
//       description: 'Master data analysis, visualization and ML',
//       icon: <DataObjectIcon className={classes.iconSize} />,
//       price: 499,
//       discountedPrice: 1,
//       duration: '30 Days',
//       features: [
//         'Live project sessions with industry experts',
//         'Real-world datasets and analysis challenges',
//         'Access to 400+ analytics job opportunities',
//         'AI and machine learning fundamentals',
//         'Data visualization and insight reporting'
//       ]
//     }
//   };

//   const handleCourseChange = (event) => {
//     setSelectedCourse(event.target.value);
//   };

//   const selectedCourseData = courses[selectedCourse];
//   const discount = selectedCourseData.price - selectedCourseData.discountedPrice;
//   const discountPercentage = Math.round((discount / selectedCourseData.price) * 100);

//   return (
//     <Box className={classes.pageContainer}>
//       <Navbar />
//       <Container maxWidth="lg">
//         <Box className={classes.mainContent}>
//           <Typography variant="h1" className={classes.pageTitle}>
//             Your <span>Cart</span>
//           </Typography>
//           <Typography variant="body1" className={classes.pageSubtitle}>
//             You're just one step away from starting your tech journey with our Virtual Placement Drive
//           </Typography>

//           <Box className={classes.cartContainer}>
//             {/* Program Selection Section (Top) */}
//             <Box className={classes.programSelectionSection}>
//               <Paper className={classes.card} elevation={0}>
//                 <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
//                   <Typography className={classes.cardTitle}>
//                     Choose Your Program
//                   </Typography>

//                   <RadioGroup
//                     value={selectedCourse}
//                     onChange={handleCourseChange}
//                   >
//                     {Object.entries(courses).map(([courseId, course]) => (
//                       <Box 
//                         key={courseId}
//                         className={`${classes.optionCard} ${selectedCourse === courseId ? classes.selectedOption : ''}`}
//                         onClick={() => setSelectedCourse(courseId)}
//                       >
//                         <FormControlLabel
//                           value={courseId}
//                           control={<Radio />}
//                           label=""
//                           sx={{ margin: 0 }}
//                         />
//                         <Box className={classes.courseIcon}>
//                           {course.icon}
//                         </Box>
//                         <Box className={classes.optionDetails}>
//                           <Typography className={classes.optionTitle}>
//                             {course.title}
//                           </Typography>
//                           <Typography className={classes.optionDescription}>
//                             {course.description}
//                           </Typography>
//                         </Box>
//                       </Box>
//                     ))}
//                   </RadioGroup>

//                   <Box className={classes.formSection}>
//                     <Typography className={classes.formTitle}>
//                       Contact Information
//                     </Typography>
//                     <TextField
//                       fullWidth
//                       label="Full Name"
//                       name="fullName"
//                       value={formData.fullName}
//                       onChange={handleInputChange}
//                       className={classes.formField}
//                       error={!!errors.fullName}
//                       helperText={errors.fullName}
//                       disabled={isProcessing}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className={classes.formField}
//                       error={!!errors.email}
//                       helperText={errors.email}
//                       disabled={isProcessing}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Phone Number"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className={classes.formField}
//                       error={!!errors.phone}
//                       helperText={errors.phone}
//                       inputProps={{ maxLength: 10 }}
//                       disabled={isProcessing}
//                     />
//                   </Box>
//                 </CardContent>
//               </Paper>
//             </Box>

//             {/* Program Details Card (Bottom) */}
//             <Box className={classes.programDetailsCard}>
//               <Paper className={classes.card} elevation={0}>
//                 <CardContent className={classes.summaryCard}>
//                   <Typography className={classes.cardTitle}>
//                     Order Summary
//                   </Typography>

//                   <Typography className={classes.summaryCourseName}>
//                     {selectedCourseData.title}
//                   </Typography>
//                   <Typography className={classes.summaryDuration}>
//                     <CalendarMonthIcon fontSize="small" />
//                     {selectedCourseData.duration} Intensive Training
//                   </Typography>

//                   <Box className={classes.featuresContainer}>
//                     {selectedCourseData.features.map((feature, index) => (
//                       <Box key={index} className={classes.featureItem}>
//                         <CheckCircleIcon className={classes.featureIcon} fontSize="small" />
//                         <Typography className={classes.featureText}>
//                           {feature}
//                         </Typography>
//                       </Box>
//                     ))}
//                   </Box>

//                   <Divider className={classes.divider} />

//                   <Box className={classes.priceContainer}>
//                     <Typography className={classes.priceLabel}>
//                       Regular Price
//                     </Typography>
//                     <Typography className={classes.priceValue}>
//                       <span className={classes.originalPrice}>₹{selectedCourseData.price}</span>
//                     </Typography>
//                   </Box>

//                   <Box className={classes.priceContainer}>
//                     <Typography className={classes.discountLabel}>
//                       Discount ({discountPercentage}% Off)
//                     </Typography>
//                     <Typography className={classes.discountValue}>
//                       -₹{discount}
//                     </Typography>
//                   </Box>

//                   <Divider className={classes.divider} />

//                   <Box className={classes.totalContainer}>
//                     <Typography className={classes.totalLabel}>
//                       Total
//                     </Typography>
//                     <Typography className={classes.totalValue}>
//                       ₹{selectedCourseData.discountedPrice}
//                     </Typography>
//                   </Box>

//                   <PaymentProcessor 
//                     amount={selectedCourseData.discountedPrice.toFixed(2)}
//                     email={formData.email}
//                     mobile={formData.phone}
//                     onPaymentInitiated={handlePaymentInitiated}
//                   />
//                 </CardContent>
//               </Paper>
//             </Box>
//           </Box>
//         </Box>
//       </Container>
      
//       <Snackbar
//         open={notification.open}
//         autoHideDuration={6000}
//         onClose={handleCloseNotification}
//         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//       >
//         <Alert 
//           onClose={handleCloseNotification} 
//           severity={notification.severity}
//           sx={{ width: '100%' }}
//         >
//           {notification.message}
//         </Alert>
//       </Snackbar>
      
//       <Footer />
//     </Box>
//   );
// };

// export default Cart;