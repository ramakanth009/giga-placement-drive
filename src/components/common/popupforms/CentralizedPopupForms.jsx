// import React, { useState, useEffect } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Button,
//   FormControl,
//   InputLabel, 
//   Select,
//   MenuItem,
//   Typography,
//   Box,
//   CircularProgress,
//   Alert,
//   Slide,
//   IconButton
// } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import CloseIcon from '@mui/icons-material/Close';
// import SchoolIcon from '@mui/icons-material/School';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import WorkIcon from '@mui/icons-material/Work';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CelebrationIcon from '@mui/icons-material/Celebration';

// import { api, handleApiError } from '../../../services/api.js';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// const useStyles = makeStyles({
//   dialogPaper: {
//     borderRadius: "3% !important",
//     overflow: 'hidden',
//     maxWidth: "500px !important",
//     width: '100%',
//     margin: '12px',
//     backgroundColor: '#ffffff !important',
//     position: 'relative',
//     boxShadow: '0 10px 50px rgba(42, 43, 106, 0.15) !important',
//     border: 'none',
//     opacity: '1 !important',
//     // zIndex: 9999,
//     '@media (max-width: 600px)': {
//       maxWidth: '90vw',
//       margin: '6px',
//       borderRadius: 12,
//     }
//   },
//   dialogContent: {
//     position: 'relative',
//     zIndex: 2,
//     padding: '16px 20px 12px 20px',
//     backgroundColor: '#ffffff !important',
//     margin: 0,
//     boxShadow: 'none',
//     '@media (max-width: 600px)': {
//       padding: '12px 16px 8px 16px',
//     }
//   },
//   headerSection: {
//     background: 'linear-gradient(135deg, #2A2B6A 0%, #1a1b43 100%)',
//     padding: '20px 20px 16px 20px',
//     color: 'white',
//     position: 'relative',
//     overflow: 'hidden',
//     '@media (max-width: 600px)': {
//       padding: '16px 16px 12px 16px',
//     },
//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       top: '-50%',
//       right: '-20%',
//       width: '100px',
//       height: '100px',
//       background: 'rgba(255, 198, 20, 0.1)',
//       borderRadius: '50%',
//       transform: 'scale(2)',
//     }
//   },
//   formHeading: {
//     fontSize: '1.3rem !important',
//     fontWeight: "bold !important",
//     color: 'white',
//     marginBottom: '4px',
//     textAlign: 'center',
//     letterSpacing: 0.3,
//     position: 'relative',
//     zIndex: 2,
//     '@media (max-width: 600px)': {
//       fontSize: '1.1rem',
//       marginBottom: '2px',
//     }
//   },
//   subtitle: {
//     fontSize: '0.9rem',
//     color: '#292B6B !important',
//     textAlign: 'center',
//     fontWeight: "600 !important",
//     position: 'relative',
//     zIndex: 2,
//     '@media (max-width: 600px)': {
//       fontSize: '0.8rem',
//     }
//   },
//   closeButton: {
//     position: 'absolute',
//     right: 8,
//     top: 8,
//     zIndex: 3,
//     color: '#ffffff !important',
//     backgroundColor: 'rgba(0, 0, 0, 0.25) !important',
//     border: '0.5px solid rgba(255, 255, 255, 0.3) !important',
//     borderRadius: '50%',
//     width: 32,
//     height: 32,
//     backdropFilter: 'blur(10px)',
//     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15) !important',
//     transition: 'all 0.2s ease',
//     '&:hover': {
//       backgroundColor: 'rgba(244, 67, 54, 0.9)',
//       borderColor: 'rgba(244, 67, 54, 1)',
//       color: 'white',
//       transform: 'scale(1.05)',
//       boxShadow: '0 4px 12px rgba(244, 67, 54, 0.3)',
//     }
//   },
//   iconContainer: {
//     fontSize:"20px !important",
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '8px',
//     position: 'relative',
//     zIndex: 2,
//     '@media (max-width: 600px)': {
//       marginBottom: '6px',
//     }
//   },
//   textField: {
//     '& .MuiOutlinedInput-root': {
//       borderRadius: 8,
//       backgroundColor: '#fafafa',
//       transition: 'all 0.2s ease',
//       fontSize: '0.9rem',
//       '& fieldset': {
//         borderColor: '#e0e0e0',
//         borderWidth: 1,
//       },
//       '&:hover fieldset': {
//         borderColor: '#2A2B6A',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: '#2A2B6A',
//         borderWidth: 2,
//       },
//       '&.Mui-focused': {
//         backgroundColor: '#ffffff',
//       }
//     },
//     '& .MuiInputLabel-root': {
//       fontSize: '0.9rem',
//       fontWeight: 500,
//       color: '#666666',
//       '&.Mui-focused': {
//         color: '#2A2B6A',
//       }
//     },
//     '& .MuiOutlinedInput-input': {
//       padding: '10px 12px',
//       fontSize: '0.9rem',
//       color: '#2A2B6A',
//       fontWeight: 500,
//     }
//   },
//   selectField: {
//     '& .MuiOutlinedInput-root': {
//       borderRadius: 8,
//       backgroundColor: '#fafafa',
//       transition: 'all 0.2s ease',
//       fontSize: '0.9rem',
//       '& fieldset': {
//         borderColor: '#e0e0e0',
//         borderWidth: 1,
//       },
//       '&:hover fieldset': {
//         borderColor: '#2A2B6A',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: '#2A2B6A',
//         borderWidth: 2,
//       },
//       '&.Mui-focused': {
//         backgroundColor: '#ffffff',
//       }
//     },
//     '& .MuiSelect-select': {
//       padding: '10px 12px',
//       fontSize: '0.9rem',
//       color: '#2A2B6A',
//       fontWeight: 500,
//     },
//     '& .MuiInputLabel-root': {
//       fontSize: '0.9rem',
//       fontWeight: 500,
//       color: '#666666',
//       '&.Mui-focused': {
//         color: '#2A2B6A',
//       }
//     }
//   },
//   submitButton: {
//     borderRadius: 8,
//     padding: '10px 24px',
//     fontWeight: 600,
//     fontSize: '0.9rem',
//     textTransform: 'none',
//     background: 'linear-gradient(135deg, #2A2B6A 0%, #1a1b43 100%)',
//     color: '#fff !important',
//     minWidth: 120,
//     boxShadow: '0 4px 15px rgba(42, 43, 106, 0.3)',
//     transition: 'all 0.3s ease',
//     position: 'relative',
//     overflow: 'hidden',
//     '&:hover': {
//       background: 'linear-gradient(135deg, #1a1b43 0%, #0f1025 100%)',
//       boxShadow: '0 6px 20px rgba(42, 43, 106, 0.4)',
//       transform: 'translateY(-1px)',
//     },
//     '&:disabled': {
//       backgroundColor: '#cccccc',
//       color: '#666666',
//       boxShadow: 'none',
//       transform: 'none',
//     },
//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       left: '-100%',
//       width: '100%',
//       height: '100%',
//       background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
//       transition: 'left 0.6s',
//     },
//     '&:hover::before': {
//       left: '100%',
//     }
//   },
//   cancelButton: {
//     borderRadius: 8,
//     padding: '10px 20px',
//     fontWeight: 500,
//     fontSize: '0.9rem',
//     textTransform: 'none',
//     color: '#666666 !important',
//     backgroundColor: 'transparent',
//     border: '1px solid #e0e0e0',
//     minWidth: 100,
//     transition: 'all 0.2s ease',
//     boxShadow: '0 10px 50px rgba(42, 43, 106, 0.35) !important',
//     '&:hover': {
//       backgroundColor: '#f5f5f5',
//       borderColor: '#2A2B6A !important',
//       color: '#2A2B6A',
//     }
//   },
//   formContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: 12,
//     marginTop: 4,
//     '@media (max-width: 600px)': {
//       gap: 10,
//     }
//   },
//   readOnlyField: {
//     '& .MuiOutlinedInput-root': {
//       backgroundColor: '#f8f9ff',
//       '& fieldset': {
//         borderColor: '#FFC614',
//         borderWidth: 2,
//       }
//     },
//     '& .MuiInputBase-input': {
//       color: '#2A2B6A',
//       fontWeight: 600
//     }
//   },
//   successContainer: {
//     textAlign: 'center',
//     padding: '20px 0',
//     '@media (max-width: 600px)': {
//       padding: '16px 0',
//     }
//   },
//   successMessage: {
//     borderRadius: 12,
//     backgroundColor: '#f8fff8',
//     color: '#2A2B6A',
//     fontWeight: 500,
//     border: '2px solid #4caf50',
//     boxShadow: '0 4px 20px rgba(76, 175, 80, 0.15)',
//     padding: '16px',
//     margin: '12px 0',
//     '@media (max-width: 600px)': {
//       padding: '12px',
//       margin: '8px 0',
//     }
//   },
//   successIconContainer: {
//     marginBottom: 8,
//     position: 'relative',
//   },
//   successIcon: {
//     fontSize: 48,
//     color: '#4caf50',
//     animation: '$bounceIn 0.6s cubic-bezier(.68,-0.55,.27,1.55)',
//     filter: 'drop-shadow(0 2px 8px rgba(76, 175, 80, 0.3))',
//   },
//   celebrationIcon: {
//     fontSize: 36,
//     color: '#FFC614',
//     marginLeft: 6,
//     animation: '$bounceIn 0.8s cubic-bezier(.68,-0.55,.27,1.55)',
//     animationDelay: '0.2s',
//     animationFillMode: 'both',
//   },
//   '@keyframes bounceIn': {
//     '0%': { 
//       transform: 'scale(0.3) rotate(-10deg)',
//       opacity: 0,
//     },
//     '50%': { 
//       transform: 'scale(1.1) rotate(5deg)',
//       opacity: 0.8,
//     },
//     '100%': { 
//       transform: 'scale(1) rotate(0deg)',
//       opacity: 1,
//     }
//   },
//   errorMessage: {
//     borderRadius: 8,
//     backgroundColor: '#fff5f5',
//     color: '#d32f2f',
//     fontWeight: 500,
//     border: '1px solid rgba(211, 47, 47, 0.3)',
//     fontSize: '0.85rem',
//     '& .MuiAlert-message': {
//       padding: 0,
//     }
//   },
//   loadingContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: 8,
//     color: 'inherit',
//     fontSize: '0.9rem',
//   }
// });

// const CentralizedPopupForms = ({
//   open,
//   onClose,
//   variant = 'dropdown',
//   onSubmitSuccess
// }) => {
//   const isMobile = window.innerWidth <= 600;
//   const classes = useStyles();
//   const [formData, setFormData] = useState({
//     full_name: '',
//     email: '',
//     chosen_field: '',
//     phone_number: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (open) {
//       setFormData({
//         full_name: '',
//         email: '',
//         chosen_field: variant === 'dropdown' ? '' : 
//                       variant === 'fullstack' ? 'Full Stack Development' :
//                       variant === 'datascience' ? 'Data Science' :
//                       'Book a demo',
//         phone_number: ''
//       });
//       setSuccess(false);
//       setError('');
//     }
//   }, [open, variant]);

//   const getTitle = () => {
//     switch (variant) {
//       case 'dropdown':
//         return 'Join Our Program';
//       case 'fullstackdemo':
//         return 'Schedule Full Stack Demo';
//       case 'datasciencedemo':
//         return 'Schedule Data Science Demo';
//       case 'jobportal':
//         return 'Schedule Job Portal Demo';
//       case 'fullstack':
//         return 'Apply for Full Stack';
//       case 'datascience':
//         return 'Apply for Data Science';
//       default:
//         return 'Get In Touch';
//     }
//   };

//   const getSubtitle = () => {
//     switch (variant) {
//       case 'dropdown':
//         return 'Choose your path to success';
//       case 'fullstackdemo':
//       case 'datasciencedemo':
//       case 'jobportal':
//         return 'Book a personalized demo';
//       case 'fullstack':
//         return 'Start your coding journey';
//       case 'datascience':
//         return 'Dive into data science';
//       default:
//         return "Let's connect and grow together";
//     }
//   };

//   const getIcon = () => {
//     const iconProps = { sx: { fontSize: 28, color: '#FFC614', filter: 'drop-shadow(0 2px 4px rgba(255, 198, 20, 0.3))' } };
//     switch (variant) {
//       case 'dropdown':
//       case 'fullstack':
//       case 'datascience':
//         return <SchoolIcon {...iconProps} />;
//       case 'fullstackdemo':
//       case 'datasciencedemo':
//         return <CalendarTodayIcon {...iconProps} />;
//       case 'jobportal':
//         return <WorkIcon {...iconProps} />;
//       default:
//         return <SchoolIcon {...iconProps} />;
//     }
//   };

//   const getChosenFieldDisplay = () => {
//     switch (variant) {
//       case 'demo':
//         return 'Schedule A Demo';
//       case 'jobportal':
//         return 'Job Portal Demo';
//       case 'fullstack':
//         return 'Full Stack Development';
//       case 'datascience':
//         return 'Data Science';
//       default:
//         return '';
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     if (error) setError('');
//   };

//   const validateForm = () => {
//     const { full_name, email, chosen_field, phone_number } = formData;
//     if (!full_name.trim()) return 'Full name is required';
//     if (!email.trim()) return 'Email is required';
//     if (!chosen_field.trim()) return 'Please select a field';
//     if (!phone_number.trim()) return 'Phone number is required';
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) return 'Please enter a valid email address';
//     const phoneRegex = /^[\d\s\-\+\(\)]+$/;
//     if (!phoneRegex.test(phone_number)) return 'Please enter a valid phone number';
//     return null;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const validationError = validateForm();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }
//     setLoading(true);
//     setError('');
//     try {
//       const result = await api.popupContact.submitContact(formData);
//       setSuccess(true);
//       setTimeout(() => {
//         onClose();
//         if (onSubmitSuccess) {
//           onSubmitSuccess(result.data);
//         }
//       }, 2200);
//     } catch (err) {
//       const errorInfo = handleApiError(err);
//       setError(errorInfo.message || 'An error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       TransitionComponent={Transition}
//       PaperProps={{
//         className: classes.dialogPaper,
//         style: {
//           backgroundColor: '#ffffff',
//           opacity: 1,
//           zIndex: 9999
//         }
//       }}
//       BackdropProps={{
//         style: {
//           backgroundColor: 'rgba(0, 0, 0, 0.6)',
//           backdropFilter: 'blur(4px)',
//           zIndex: 9998
//         }
//       }}
//       style={{ zIndex: 9999 }}
//       maxWidth="sm"
//       fullWidth
//     >
//       {/* Header Section */}
//       <Box className={classes.headerSection}>
//         <IconButton
//           className={classes.closeButton}
//           onClick={onClose}
//           disabled={loading}
//           aria-label="Close"
//         >
//           <CloseIcon sx={{ fontSize: 18 }} />
//         </IconButton>

//         <Box className={classes.iconContainer}>
//           {getIcon()}
//         </Box>

//         <Typography className={classes.formHeading}>
//           {getTitle()}
//         </Typography>
        
       
//       </Box>

//       <DialogContent className={classes.dialogContent}>
//         {success ? (
//           <Box className={classes.successContainer}>
//             <Box className={classes.successIconContainer}>
//               <CheckCircleIcon className={classes.successIcon} />
//               <CelebrationIcon className={classes.celebrationIcon} />
//             </Box>
//             <Alert severity="success" className={classes.successMessage} icon={false}>
//               <Typography variant="h6" gutterBottom sx={{ 
//                 fontWeight: 600, 
//                 color: '#2A2B6A', 
//                 fontSize: isMobile ? '1rem' : '1.1rem',
//                 marginBottom: '4px'
//               }}>
//                 Thank you for your submission!
//               </Typography>
//               <Typography sx={{ 
//                 fontSize: isMobile ? '0.85rem' : '0.9rem', 
//                 color: '#2A2B6A', 
//                 fontWeight: 400,
//                 lineHeight: 1.4
//               }}>
//                 We'll be in touch soon.{' '}
//                 <span style={{ color: '#4caf50', fontWeight: 600 }}>
//                   Stay tuned for updates!
//                 </span>
//               </Typography>
//             </Alert>
//           </Box>
          
//         ) : (
//           <form onSubmit={handleSubmit} className={classes.formContainer} autoComplete="off">
//             {error && (
//               <Alert severity="error" className={classes.errorMessage}>
//                 {error}
//               </Alert>
//             )}
//              <Typography className={classes.subtitle}>
//           {getSubtitle()}
//         </Typography>

//             <TextField
//               name="full_name"
//               label="Full Name"
//               value={formData.full_name}
//               onChange={handleInputChange}
//               fullWidth
//               required
//               className={classes.textField}
//               disabled={loading}
//               autoFocus
//               inputProps={{ maxLength: 40 }}
//             />

//             <TextField
//               name="email"
//               label="Email Address"
//               type="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               fullWidth
//               required
//               className={classes.textField}
//               disabled={loading}
//               inputProps={{ maxLength: 40 }}
//             />

//             {variant === 'dropdown' ? (
//               <FormControl fullWidth required className={classes.selectField}>
//                 <InputLabel>Choose Your Field</InputLabel>
//                 <Select
//                   name="chosen_field"
//                   value={formData.chosen_field}
//                   onChange={handleInputChange}
//                   label="Choose Your Field"
//                   disabled={loading}
//                 >
//                   <MenuItem value="fullstack">Full Stack Development</MenuItem>
//                   <MenuItem value="datascience">Data Science</MenuItem>
//                 </Select>
//               </FormControl>
//             ) : (
//               <TextField
//                 name="chosen_field"
//                 label="Service"
//                 value={getChosenFieldDisplay()}
//                 fullWidth
//                 disabled
//                 className={`${classes.textField} ${classes.readOnlyField}`}
//               />
//             )}

//             <TextField
//               name="phone_number"
//               label="Phone Number"
//               value={formData.phone_number}
//               onChange={handleInputChange}
//               fullWidth
//               required
//               className={classes.textField}
//               disabled={loading}
//               placeholder="+1234567890"
//               inputProps={{ maxLength: 15 }}
//             />

//             <DialogActions sx={{
//               padding: isMobile ? '12px 0 0' : '16px 0 0',
//               gap: isMobile ? '8px' : '12px',
//               justifyContent: 'center'
//             }}>
//               <Button
//                 onClick={onClose}
//                 className={classes.cancelButton}
//                 disabled={loading}
//               >
//                 Cancel
//               </Button>
//               <Button
//                 type="submit"
//                 className={classes.submitButton}
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <Box className={classes.loadingContainer}>
//                     <CircularProgress size={16} color="inherit" />
//                     Submitting...
//                   </Box>
//                 ) : (
//                   'Submit'
//                 )}
//               </Button>
//             </DialogActions>
//           </form>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default CentralizedPopupForms;
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel, 
  Select,
  MenuItem,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Slide,
  IconButton,
  Chip,
  Divider
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CelebrationIcon from '@mui/icons-material/Celebration';
import StarIcon from '@mui/icons-material/Star';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import { api, handleApiError } from '../../../services/api.js';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  '@keyframes floatingAnimation': {
    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
    '50%': { transform: 'translateY(-10px) rotate(2deg)' }
  },
  '@keyframes pulseGlow': {
    '0%, 100%': { boxShadow: '0 0 20px rgba(255, 198, 20, 0.3)' },
    '50%': { boxShadow: '0 0 30px rgba(255, 198, 20, 0.6)' }
  },
  '@keyframes shimmer': {
    '0%': { backgroundPosition: '-200% 0' },
    '100%': { backgroundPosition: '200% 0' }
  },
  '@keyframes particleFloat': {
    '0%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)', opacity: 0 },
    '10%': { opacity: 1 },
    '90%': { opacity: 1 },
    '100%': { transform: 'translateY(-100px) translateX(20px) rotate(360deg)', opacity: 0 }
  },
  '@keyframes bounceIn': {
    '0%': { 
      transform: 'scale(0.3) rotate(-10deg)',
      opacity: 0,
    },
    '50%': { 
      transform: 'scale(1.1) rotate(5deg)',
      opacity: 0.8,
    },
    '100%': { 
      transform: 'scale(1) rotate(0deg)',
      opacity: 1,
    }
  },
  dialogPaper: {
    borderRadius: "20px !important",
    overflow: 'hidden',
    maxWidth: "520px !important",
    width: '100%',
    margin: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.98) !important',
    position: 'relative',
    boxShadow: '0 25px 80px rgba(42, 43, 106, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2) !important',
    border: 'none',
    opacity: '1 !important',
    backdropFilter: 'blur(20px)',
    '@media (max-width: 600px)': {
      maxWidth: '90vw',
      margin: '6px',
      borderRadius: 16,
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      pointerEvents: 'none',
      zIndex: 1,
    }
  },
  dialogContent: {
    position: 'relative',
    zIndex: 2,
    padding: '20px 24px 16px 24px',
    backgroundColor: 'transparent !important',
    margin: 0,
    boxShadow: 'none',
    '@media (max-width: 600px)': {
      padding: '16px 20px 12px 20px',
    }
  },
  headerSection: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #2A2B6A 100%)',
    padding: '24px 24px 20px 24px',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 600px)': {
      padding: '20px 20px 16px 20px',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      right: '-30%',
      width: '120px',
      height: '120px',
      background: 'radial-gradient(circle, rgba(255, 198, 20, 0.2) 0%, transparent 70%)',
      borderRadius: '50%',
      animation: 'floatingAnimation 6s ease-in-out infinite',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '70%',
      left: '-10%',
      width: '80px',
      height: '80px',
      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
      borderRadius: '50%',
      animation: 'floatingAnimation 8s ease-in-out infinite reverse',
    }
  },
  formHeading: {
    fontSize: '1.4rem !important',
    fontWeight: "700 !important",
    color: 'white',
    marginBottom: '6px',
    textAlign: 'center',
    letterSpacing: '0.5px',
    position: 'relative',
    zIndex: 2,
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    '@media (max-width: 600px)': {
      fontSize: '1.2rem',
      marginBottom: '4px',
    }
  },
  subtitle: {
    fontSize: '0.95rem',
    color: 'rgba(42, 43, 107, 0.8) !important',
    textAlign: 'center',
    fontWeight: "500 !important",
    position: 'relative',
    zIndex: 2,
    marginBottom: '4px',
    '@media (max-width: 600px)': {
      fontSize: '0.85rem',
    }
  },
  closeButton: {
    position: 'absolute',
    right: 12,
    top: 12,
    zIndex: 3,
    color: '#ffffff !important',
    backgroundColor: 'rgba(255, 255, 255, 0.15) !important',
    border: '1px solid rgba(255, 255, 255, 0.2) !important',
    borderRadius: '50%',
    width: 36,
    height: 36,
    backdropFilter: 'blur(20px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15) !important',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      backgroundColor: 'rgba(244, 67, 54, 0.9)',
      borderColor: 'rgba(244, 67, 54, 1)',
      color: 'white',
      transform: 'scale(1.1) rotate(90deg)',
      boxShadow: '0 6px 20px rgba(244, 67, 54, 0.4)',
    }
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '12px',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 600px)': {
      marginBottom: '8px',
    }
  },
  mainIcon: {
    fontSize: '32px !important',
    color: '#FFC614',
    filter: 'drop-shadow(0 4px 8px rgba(255, 198, 20, 0.4))',
    animation: 'pulseGlow 3s ease-in-out infinite',
    position: 'relative',
    zIndex: 2,
  },
  decorativeIcons: {
    position: 'absolute',
    '& .star1': {
      position: 'absolute',
      top: '-8px',
      right: '-12px',
      fontSize: '16px',
      color: '#FFE082',
      animation: 'floatingAnimation 4s ease-in-out infinite',
      opacity: 0.8,
    },
    '& .star2': {
      position: 'absolute',
      bottom: '-6px',
      left: '-10px',
      fontSize: '12px',
      color: '#FFE082',
      animation: 'floatingAnimation 5s ease-in-out infinite reverse',
      opacity: 0.6,
    }
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 12,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      fontSize: '0.95rem',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      '& fieldset': {
        borderColor: 'rgba(42, 43, 106, 0.2)',
        borderWidth: 1,
      },
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        transform: 'translateY(-1px)',
        boxShadow: '0 8px 25px rgba(42, 43, 106, 0.12)',
        '& fieldset': {
          borderColor: '#667eea',
        }
      },
      '&.Mui-focused': {
        backgroundColor: '#ffffff',
        transform: 'translateY(-2px)',
        boxShadow: '0 12px 35px rgba(42, 43, 106, 0.15)',
        '& fieldset': {
          borderColor: '#667eea',
          borderWidth: 2,
        }
      }
    },
    '& .MuiInputLabel-root': {
      fontSize: '0.95rem',
      fontWeight: 500,
      color: 'rgba(42, 43, 106, 0.7)',
      '&.Mui-focused': {
        color: '#667eea',
      }
    },
    '& .MuiOutlinedInput-input': {
      padding: '12px 14px',
      fontSize: '0.95rem',
      color: '#2A2B6A',
      fontWeight: 500,
    }
  },
  selectField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 12,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      fontSize: '0.95rem',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      '& fieldset': {
        borderColor: 'rgba(42, 43, 106, 0.2)',
        borderWidth: 1,
      },
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        transform: 'translateY(-1px)',
        boxShadow: '0 8px 25px rgba(42, 43, 106, 0.12)',
        '& fieldset': {
          borderColor: '#667eea',
        }
      },
      '&.Mui-focused': {
        backgroundColor: '#ffffff',
        transform: 'translateY(-2px)',
        boxShadow: '0 12px 35px rgba(42, 43, 106, 0.15)',
        '& fieldset': {
          borderColor: '#667eea',
          borderWidth: 2,
        }
      }
    },
    '& .MuiSelect-select': {
      padding: '12px 14px',
      fontSize: '0.95rem',
      color: '#2A2B6A',
      fontWeight: 500,
    },
    '& .MuiInputLabel-root': {
      fontSize: '0.95rem',
      fontWeight: 500,
      color: 'rgba(42, 43, 106, 0.7)',
      '&.Mui-focused': {
        color: '#667eea',
      }
    }
  },
  submitButton: {
    borderRadius: 12,
    padding: '12px 28px',
    fontWeight: 600,
    fontSize: '0.95rem',
    textTransform: 'none',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff !important',
    minWidth: 130,
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.35)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    border: 'none',
    '&:hover': {
      background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
      boxShadow: '0 12px 35px rgba(102, 126, 234, 0.45)',
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'translateY(0px)',
    },
    '&:disabled': {
      backgroundColor: '#e0e0e0',
      color: '#a0a0a0',
      boxShadow: 'none',
      transform: 'none',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)`,
      transition: 'left 0.7s',
    },
    '&:hover::before': {
      left: '100%',
    }
  },
  cancelButton: {
    borderRadius: 12,
    padding: '12px 24px',
    fontWeight: 500,
    fontSize: '0.95rem',
    textTransform: 'none',
    color: 'rgba(42, 43, 106, 0.7) !important',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid rgba(42, 43, 106, 0.2)',
    minWidth: 110,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(10px)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: 'rgba(42, 43, 106, 0.4)',
      color: '#2A2B6A',
      transform: 'translateY(-1px)',
      boxShadow: '0 6px 20px rgba(42, 43, 106, 0.1)',
    }
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    marginTop: 8,
    '@media (max-width: 600px)': {
      gap: 14,
    }
  },
  readOnlyField: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(255, 198, 20, 0.1)',
      border: '2px solid rgba(255, 198, 20, 0.3)',
      '& fieldset': {
        borderColor: 'transparent',
      }
    },
    '& .MuiInputBase-input': {
      color: '#2A2B6A',
      fontWeight: 600
    }
  },
  successContainer: {
    textAlign: 'center',
    padding: '24px 0',
    '@media (max-width: 600px)': {
      padding: '20px 0',
    }
  },
  successMessage: {
    borderRadius: 16,
    backgroundColor: 'rgba(248, 255, 248, 0.9)',
    color: '#2A2B6A',
    fontWeight: 500,
    border: '2px solid rgba(76, 175, 80, 0.3)',
    boxShadow: '0 8px 32px rgba(76, 175, 80, 0.2)',
    padding: '20px',
    margin: '16px 0',
    backdropFilter: 'blur(10px)',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 600px)': {
      padding: '16px',
      margin: '12px 0',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #4caf50, #81c784, #4caf50)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 2s linear infinite',
    }
  },
  successIconContainer: {
    marginBottom: 12,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successIcon: {
    fontSize: 52,
    color: '#4caf50',
    animation: 'bounceIn 0.8s cubic-bezier(.68,-0.55,.27,1.55)',
    filter: 'drop-shadow(0 4px 12px rgba(76, 175, 80, 0.3))',
    position: 'relative',
    zIndex: 2,
  },
  celebrationIcon: {
    fontSize: 38,
    color: '#FFC614',
    marginLeft: 8,
    animation: 'bounceIn 1s cubic-bezier(.68,-0.55,.27,1.55)',
    animationDelay: '0.3s',
    animationFillMode: 'both',
    filter: 'drop-shadow(0 2px 8px rgba(255, 198, 20, 0.3))',
  },
  rocketIcon: {
    position: 'absolute',
    top: '-10px',
    right: '-20px',
    fontSize: 24,
    color: '#FF6B6B',
    animation: 'bounceIn 1.2s cubic-bezier(.68,-0.55,.27,1.55)',
    animationDelay: '0.6s',
    animationFillMode: 'both',
    transform: 'rotate(45deg)',
  },
  particleEffect: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    overflow: 'hidden',
    '& .particle': {
      position: 'absolute',
      width: '4px',
      height: '4px',
      backgroundColor: '#FFE082',
      borderRadius: '50%',
      animation: 'particleFloat 3s linear infinite',
      '&:nth-child(1)': { left: '20%', animationDelay: '0s' },
      '&:nth-child(2)': { left: '40%', animationDelay: '0.5s' },
      '&:nth-child(3)': { left: '60%', animationDelay: '1s' },
      '&:nth-child(4)': { left: '80%', animationDelay: '1.5s' },
    }
  },
  errorMessage: {
    borderRadius: 12,
    backgroundColor: 'rgba(255, 245, 245, 0.9)',
    color: '#d32f2f',
    fontWeight: 500,
    border: '1px solid rgba(211, 47, 47, 0.3)',
    fontSize: '0.9rem',
    backdropFilter: 'blur(10px)',
    '& .MuiAlert-message': {
      padding: 0,
    }
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    color: 'inherit',
    fontSize: '0.95rem',
  },
  premiumBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 3,
    background: 'linear-gradient(135deg, #FFD700 0%, #FFA000 100%)',
    color: '#1a1a1a',
    fontSize: '0.7rem',
    fontWeight: 700,
    padding: '4px 8px',
    borderRadius: 12,
    boxShadow: '0 2px 8px rgba(255, 215, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    animation: 'pulseGlow 3s ease-in-out infinite',
  },
  dividerSection: {
    margin: '8px 0',
    position: 'relative',
    '& .MuiDivider-root': {
      borderColor: 'rgba(42, 43, 106, 0.1)',
      '&::before, &::after': {
        borderColor: 'rgba(42, 43, 106, 0.1)',
      }
    }
  }
});

const CentralizedPopupForms = ({
  open,
  onClose,
  variant = 'dropdown',
  onSubmitSuccess
}) => {
  const isMobile = window.innerWidth <= 600;
  const classes = useStyles();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    chosen_field: '',
    phone_number: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (open) {
      setFormData({
        full_name: '',
        email: '',
        chosen_field: variant === 'dropdown' ? '' : 
                      variant === 'fullstack' ? 'Full Stack Development' :
                      variant === 'datascience' ? 'Data Science' :
                      'Book a demo',
        phone_number: ''
      });
      setSuccess(false);
      setError('');
    }
  }, [open, variant]);

  const getTitle = () => {
    switch (variant) {
      case 'dropdown':
        return 'Join Our Premium Program';
      case 'fullstackdemo':
        return 'Schedule Full Stack Demo';
      case 'datasciencedemo':
        return 'Schedule Data Science Demo';
      case 'jobportal':
        return 'Schedule Job Portal Demo';
      case 'fullstack':
        return 'Apply for Full Stack';
      case 'datascience':
        return 'Apply for Data Science';
      default:
        return 'Get In Touch';
    }
  };

  const getSubtitle = () => {
    switch (variant) {
      case 'dropdown':
        return 'Choose your path to success and unlock your potential';
      case 'fullstackdemo':
      case 'datasciencedemo':
      case 'jobportal':
        return 'Book a personalized demo session';
      case 'fullstack':
        return 'Start your coding journey today';
      case 'datascience':
        return 'Dive into the world of data science';
      default:
        return "Let's connect and grow together";
    }
  };

  const getIcon = () => {
    const iconProps = { className: classes.mainIcon };
    switch (variant) {
      case 'dropdown':
      case 'fullstack':
      case 'datascience':
        return <SchoolIcon {...iconProps} />;
      case 'fullstackdemo':
      case 'datasciencedemo':
        return <CalendarTodayIcon {...iconProps} />;
      case 'jobportal':
        return <WorkIcon {...iconProps} />;
      default:
        return <SchoolIcon {...iconProps} />;
    }
  };

  const getChosenFieldDisplay = () => {
    switch (variant) {
      case 'demo':
        return 'Schedule A Demo';
      case 'jobportal':
        return 'Job Portal Demo';
      case 'fullstack':
        return 'Full Stack Development';
      case 'datascience':
        return 'Data Science';
      default:
        return '';
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const validateForm = () => {
    const { full_name, email, chosen_field, phone_number } = formData;
    if (!full_name.trim()) return 'Full name is required';
    if (!email.trim()) return 'Email is required';
    if (!chosen_field.trim()) return 'Please select a field';
    if (!phone_number.trim()) return 'Phone number is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone_number)) return 'Please enter a valid phone number';
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    setError('');
    try {
      const result = await api.popupContact.submitContact(formData);
      setSuccess(true);
      setTimeout(() => {
        onClose();
        if (onSubmitSuccess) {
          onSubmitSuccess(result.data);
        }
      }, 3000);
    } catch (err) {
      const errorInfo = handleApiError(err);
      setError(errorInfo.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      PaperProps={{
        className: classes.dialogPaper,
        style: {
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          opacity: 1,
          zIndex: 9999
        }
      }}
      BackdropProps={{
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)',
          zIndex: 9998
        }
      }}
      style={{ zIndex: 9999 }}
      maxWidth="sm"
      fullWidth
    >
      {/* Particle Effect Background */}
      <Box className={classes.particleEffect}>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </Box>

      {/* Premium Badge */}
      <Chip 
        icon={<AutoAwesomeIcon sx={{ fontSize: 12 }} />}
        label="PREMIUM"
        className={classes.premiumBadge}
        size="small"
      />

      {/* Header Section */}
      <Box className={classes.headerSection}>
        <IconButton
          className={classes.closeButton}
          onClick={onClose}
          disabled={loading}
          aria-label="Close"
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </IconButton>

        <Box className={classes.iconContainer}>
          {getIcon()}
          <Box className={classes.decorativeIcons}>
            <StarIcon className="star1" />
            <StarIcon className="star2" />
          </Box>
        </Box>

        <Typography className={classes.formHeading}>
          {getTitle()}
        </Typography>
      </Box>

      <DialogContent className={classes.dialogContent}>
        {success ? (
          <Box className={classes.successContainer}>
            <Box className={classes.successIconContainer}>
              <CheckCircleIcon className={classes.successIcon} />
              <CelebrationIcon className={classes.celebrationIcon} />
              <RocketLaunchIcon className={classes.rocketIcon} />
            </Box>
            <Alert severity="success" className={classes.successMessage} icon={false}>
              <Typography variant="h6" gutterBottom sx={{ 
                fontWeight: 700, 
                color: '#2A2B6A', 
                fontSize: isMobile ? '1.1rem' : '1.2rem',
                marginBottom: '8px'
              }}>
                🎉 Submission Successful!
              </Typography>
              <Typography sx={{ 
                fontSize: isMobile ? '0.9rem' : '0.95rem', 
                color: '#2A2B6A', 
                fontWeight: 400,
                lineHeight: 1.5
              }}>
                Thank you for choosing us! We'll be in touch within 24 hours.{' '}
                <span style={{ color: '#4caf50', fontWeight: 600 }}>
                  Get ready for an amazing journey! 🚀
                </span>
              </Typography>
            </Alert>
          </Box>
        ) : (
          <form onSubmit={handleSubmit} className={classes.formContainer} autoComplete="off">
            {error && (
              <Alert severity="error" className={classes.errorMessage}>
                {error}
              </Alert>
            )}
            
            <Typography className={classes.subtitle}>
              {getSubtitle()}
            </Typography>

            <Box className={classes.dividerSection}>
              <Divider>
                <Chip 
                  label="Fill Details" 
                  size="small" 
                  sx={{ 
                    fontSize: '0.75rem', 
                    color: 'rgba(42, 43, 106, 0.7)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)'
                  }} 
                />
              </Divider>
            </Box>

            <TextField
              name="full_name"
              label="Full Name"
              value={formData.full_name}
              onChange={handleInputChange}
              fullWidth
              required
              className={classes.textField}
              disabled={loading}
              autoFocus
              inputProps={{ maxLength: 40 }}
            />

            <TextField
              name="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              required
              className={classes.textField}
              disabled={loading}
              inputProps={{ maxLength: 40 }}
            />

            {variant === 'dropdown' ? (
              <FormControl fullWidth required className={classes.selectField}>
                <InputLabel>Choose Your Field</InputLabel>
                <Select
                  name="chosen_field"
                  value={formData.chosen_field}
                  onChange={handleInputChange}
                  label="Choose Your Field"
                  disabled={loading}
                >
                  <MenuItem value="fullstack">🖥️ Full Stack Development</MenuItem>
                  <MenuItem value="datascience">📊 Data Science</MenuItem>
                </Select>
              </FormControl>
            ) : (
              <TextField
                name="chosen_field"
                label="Service"
                value={getChosenFieldDisplay()}
                fullWidth
                disabled
                className={`${classes.textField} ${classes.readOnlyField}`}
              />
            )}

            <TextField
              name="phone_number"
              label="Phone Number"
              value={formData.phone_number}
              onChange={handleInputChange}
              fullWidth
              required
              className={classes.textField}
              disabled={loading}
              placeholder="+1234567890"
              inputProps={{ maxLength: 15 }}
            />

            <DialogActions sx={{
              padding: isMobile ? '16px 0 0' : '20px 0 0',
              gap: isMobile ? '12px' : '16px',
              justifyContent: 'center'
            }}>
              <Button
                onClick={onClose}
                className={classes.cancelButton}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className={classes.submitButton}
                disabled={loading}
              >
                {loading ? (
                  <Box className={classes.loadingContainer}>
                    <CircularProgress size={18} color="inherit" />
                    Submitting...
                  </Box>
                ) : (
                  <>Submit Application</>
                )}
              </Button>
            </DialogActions>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CentralizedPopupForms;