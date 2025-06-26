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
//     borderRadius: "18px !important",
//     overflow: 'visible !important',
//     maxWidth: "500px !important",
//     width: '100%',
//     margin: '12px',
//     backgroundColor: '#ffffff !important',
//     position: 'relative',
//     boxShadow: '0 12px 48px 0 rgba(42, 43, 106, 0.18), 0 1.5px 6px 0 rgba(42, 43, 106, 0.10) !important',
//     opacity: '1 !important',
//     zIndex: '1300 !important',
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
//     background: 'linear-gradient(120deg, #f8faff 0%, #fffbe6 100%) !important',
//     margin: 0,
//     boxShadow: 'none',
//     borderRadius: '18px !important',
//     overflow: 'visible !important',
//     '@media (max-width: 600px)': {
//       padding: '12px 16px 8px 16px',
//     }
//   },
//   headerSection: {
//     background: 'linear-gradient(135deg, #2A2B6A 0%, #1a1b43 100%)',
//     padding: '20px 20px 16px 20px',
//     borderRadius: '18px 18px 10px 10px !important',
//     color: 'white',
//     position: 'relative',
//     overflow: 'hidden',
//     '&::after': {
//       content: '""',
//       position: 'absolute',
//       left: 0,
//       top: 0,
//       width: '100%',
//       height: '100%',
//       background: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'40\' height=\'40\' fill=\'%23FFC614\' fill-opacity=\'0.03\'/%3E%3C/svg%3E") repeat',
//       zIndex: 1,
//       pointerEvents: 'none',
//     },
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
//     letterSpacing: 0.5,
//     textShadow: '0 2px 8px rgba(42,43,106,0.12)',
//     position: 'relative',
//     zIndex: 2,
//     '@media (max-width: 600px)': {
//       fontSize: '1.1rem',
//       marginBottom: '2px',
//     }
//   },
//   subtitle: {
//     fontSize: '0.9rem',
//     color: '#292B6A !important',
//     textAlign: 'center',
//     fontWeight: "600 !important",
//     marginBottom: 8,
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
//       backgroundColor: 'rgba(244, 67, 54, 0.95)',
//       borderColor: 'rgba(244, 67, 54, 1)',
//       color: '#fff',
//       transform: 'scale(1.12) rotate(8deg)',
//       boxShadow: '0 6px 18px rgba(244, 67, 54, 0.25)',
//     }
//   },
//   iconContainer: {
//     fontSize:"20px !important",
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '12px',
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
//       boxShadow: '0 1.5px 6px rgba(42, 43, 106, 0.07)',
//       '& fieldset': {
//         borderColor: '#e0e0e0',
//         borderWidth: 1,
//       },
//       '&:hover': {
//         backgroundColor: '#f5f7ff',
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
//       boxShadow: '0 1.5px 6px rgba(42, 43, 106, 0.07)',
//       '& fieldset': {
//         borderColor: '#e0e0e0',
//         borderWidth: 1,
//       },
//       '&:hover': {
//         backgroundColor: '#f5f7ff',
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
//     borderRadius: '100px !important',
//     padding: '10px 24px !important',
//     fontWeight: 600,
//     fontSize: '0.9rem',
//     textTransform: 'none',
//     background: 'linear-gradient(135deg, #2A2B6A 0%, #1a1b43 100%)',
//     color: '#fff !important',
//     minWidth: 120,
//     boxShadow: '0 6px 18px rgba(42, 43, 106, 0.18)',
//     transition: 'all 0.3s cubic-bezier(.68,-0.55,.27,1.55)',
//     position: 'relative',
//     overflow: 'hidden',
//     '&:hover': {
//       background: 'linear-gradient(135deg, #1a1b43 0%, #0f1025 100%)',
//       boxShadow: '0 10px 32px rgba(42, 43, 106, 0.25)',
//       transform: 'translateY(-2px) scale(1.04)',
//       filter: 'brightness(1.08)',
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
//     borderRadius: '100px !important',
//     padding: '10px 20px !important',
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
//       color: '#2A2B6A !important',
//       transform: 'scale(1.04)',
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
//       // Map display values to backend expected values
//       const getBackendFieldValue = () => {
//         switch (variant) {
//           case 'dropdown':
//             return '';
//           case 'fullstack':
//           case 'fullstackdemo':
//             return 'fullstack';
//           case 'datascience': 
//           case 'datasciencedemo':
//             return 'datascience';
//           case 'jobportal':
//             return 'Book a demo';
//           default:
//             return 'Book a demo';
//         }
//       };

//       setFormData({
//         full_name: '',
//         email: '',
//         chosen_field: getBackendFieldValue(),
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
//       case 'fullstackdemo':
//         return 'Full Stack Demo';
//       case 'datasciencedemo':
//         return 'Data Science Demo';
//       case 'jobportal':
//         return 'Job Portal Demo';
//       case 'fullstack':
//         return 'Full Stack Development';
//       case 'datascience':
//         return 'Data Science';
//       case 'demo':
//         return 'Book a demo';
//       default:
//         return '';
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
    
//     let mappedValue = value;
    
//     // Map dropdown display values to backend values
//     if (name === 'chosen_field') {
//       switch (value) {
//         case 'Full Stack Development':
//           mappedValue = 'fullstack';
//           break;
//         case 'Data Science':
//           mappedValue = 'datascience';
//           break;
//         default:
//           mappedValue = value;
//       }
//     }
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: mappedValue
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
//           zIndex: 1300
//         }
//       }}
//       BackdropProps={{
//         style: {
//           backgroundColor: 'rgba(0, 0, 0, 0.6)',
//           backdropFilter: 'blur(4px)',
//           zIndex: 1299
//         }
//       }}
//       style={{ zIndex: 1300 }}
//       maxWidth="sm"
//       fullWidth
//       disableEnforceFocus
//       disableAutoFocus
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
//             <Typography className={classes.subtitle}>
//               {getSubtitle()}
//             </Typography>

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
//                 <InputLabel id="chosen-field-label">Choose Your Field</InputLabel>
//                 <Select
//                   labelId="chosen-field-label"
//                   id="chosen-field-select"
//                   name="chosen_field"
//                   value={formData.chosen_field}
//                   onChange={handleInputChange}
//                   label="Choose Your Field"
//                   disabled={loading}
//                   MenuProps={{
//                     anchorOrigin: {
//                       vertical: 'bottom',
//                       horizontal: 'left',
//                     },
//                     transformOrigin: {
//                       vertical: 'top',
//                       horizontal: 'left',
//                     },
//                     PaperProps: {
//                       style: {
//                         borderRadius: 12,
//                         boxShadow: '0 6px 24px rgba(42,43,106,0.12)',
//                         marginTop: 8,
//                         zIndex: 9999,
//                         maxHeight: 200,
//                       }
//                     },
//                     disablePortal: false,
//                     container: document.body,
//                   }}
//                 >
//                   <MenuItem value="fullstack">Full Stack</MenuItem>
//                   <MenuItem value="datascience">Data Science</MenuItem>
//                 </Select>
//               </FormControl>
//             ) : (
//               <TextField
//                 name="chosen_field"
//                 label="Demo"
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
  IconButton
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CelebrationIcon from '@mui/icons-material/Celebration';

import { api, handleApiError } from '../../../services/api.js';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  dialogPaper: {
    borderRadius: "18px !important",
    overflow: 'visible !important',
    maxWidth: "500px !important",
    width: '100%',
    margin: '12px',
    backgroundColor: '#ffffff !important',
    position: 'relative',
    boxShadow: '0 12px 48px 0 rgba(42, 43, 106, 0.18), 0 1.5px 6px 0 rgba(42, 43, 106, 0.10) !important',
    opacity: '1 !important',
    zIndex: '1300 !important',
    '@media (max-width: 1200px)': {
      maxWidth: '480px',
      margin: '10px',
      borderRadius: 16,
      boxShadow: '0 10px 42px 0 rgba(42, 43, 106, 0.16), 0 1px 5px 0 rgba(42, 43, 106, 0.08) !important',
    },
    '@media (max-width: 960px)': {
      maxWidth: '460px',
      margin: '8px',
      borderRadius: 14,
      boxShadow: '0 8px 36px 0 rgba(42, 43, 106, 0.14), 0 1px 4px 0 rgba(42, 43, 106, 0.06) !important',
    },
    '@media (max-width: 600px)': {
      maxWidth: '90vw',
      margin: '6px',
      borderRadius: 12,
      boxShadow: '0 6px 30px 0 rgba(42, 43, 106, 0.12), 0 1px 3px 0 rgba(42, 43, 106, 0.04) !important',
    },
    '@media (max-width: 480px)': {
      maxWidth: '95vw',
      margin: '4px',
      borderRadius: 10,
      boxShadow: '0 4px 24px 0 rgba(42, 43, 106, 0.10), 0 1px 2px 0 rgba(42, 43, 106, 0.04) !important',
    },
    '@media (max-width: 375px)': {
      maxWidth: '98vw',
      margin: '2px',
      borderRadius: 8,
      boxShadow: '0 2px 18px 0 rgba(42, 43, 106, 0.08), 0 1px 2px 0 rgba(42, 43, 106, 0.02) !important',
    }
  },
  dialogContent: {
    position: 'relative',
    zIndex: 2,
    padding: '16px 20px 12px 20px',
    background: 'linear-gradient(120deg, #f8faff 0%, #fffbe6 100%) !important',
    margin: 0,
    boxShadow: 'none',
    borderRadius: '18px !important',
    overflow: 'visible !important',
    '@media (max-width: 1200px)': {
      padding: '14px 18px 10px 18px',
      borderRadius: '16px !important',
    },
    '@media (max-width: 960px)': {
      padding: '12px 16px 8px 16px',
      borderRadius: '14px !important',
    },
    '@media (max-width: 600px)': {
      padding: '12px 16px 8px 16px',
      borderRadius: '12px !important',
    },
    '@media (max-width: 480px)': {
      padding: '10px 14px 6px 14px',
      borderRadius: '10px !important',
    },
    '@media (max-width: 375px)': {
      padding: '8px 12px 4px 12px',
      borderRadius: '8px !important',
    }
  },
  headerSection: {
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1a1b43 100%)',
    padding: '20px 20px 16px 20px',
    borderRadius: '18px 18px 10px 10px !important',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'40\' height=\'40\' fill=\'%23FFC614\' fill-opacity=\'0.03\'/%3E%3C/svg%3E") repeat',
      zIndex: 1,
      pointerEvents: 'none',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      right: '-20%',
      width: '100px',
      height: '100px',
      background: 'rgba(255, 198, 20, 0.1)',
      borderRadius: '50%',
      transform: 'scale(2)',
    },
    '@media (max-width: 1200px)': {
      padding: '18px 18px 14px 18px',
      borderRadius: '16px 16px 8px 8px !important',
      '&::before': {
        width: '90px',
        height: '90px',
      },
    },
    '@media (max-width: 960px)': {
      padding: '16px 16px 12px 16px',
      borderRadius: '14px 14px 7px 7px !important',
      '&::before': {
        width: '80px',
        height: '80px',
      },
    },
    '@media (max-width: 600px)': {
      padding: '16px 16px 12px 16px',
      borderRadius: '12px 12px 6px 6px !important',
      '&::before': {
        width: '70px',
        height: '70px',
      },
    },
    '@media (max-width: 480px)': {
      padding: '14px 14px 10px 14px',
      borderRadius: '10px 10px 5px 5px !important',
      '&::before': {
        width: '60px',
        height: '60px',
      },
    },
    '@media (max-width: 375px)': {
      padding: '12px 12px 8px 12px',
      borderRadius: '8px 8px 4px 4px !important',
      '&::before': {
        width: '50px',
        height: '50px',
      },
    }
  },
  formHeading: {
    fontSize: '1.3rem !important',
    fontWeight: "bold !important",
    color: 'white',
    marginBottom: '4px',
    textAlign: 'center',
    letterSpacing: 0.5,
    textShadow: '0 2px 8px rgba(42,43,106,0.12)',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      fontSize: '1.25rem !important',
      marginBottom: '3px',
      letterSpacing: 0.4,
    },
    '@media (max-width: 960px)': {
      fontSize: '1.2rem !important',
      marginBottom: '3px',
      letterSpacing: 0.3,
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
      marginBottom: '2px',
      letterSpacing: 0.2,
    },
    '@media (max-width: 480px)': {
      fontSize: '1rem !important',
      marginBottom: '2px',
      letterSpacing: 0.1,
    },
    '@media (max-width: 375px)': {
      fontSize: '0.95rem !important',
      marginBottom: '1px',
      letterSpacing: 0,
    }
  },
  subtitle: {
    fontSize: '0.9rem',
    color: '#292B6A !important',
    textAlign: 'center',
    fontWeight: "600 !important",
    marginBottom: 8,
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      fontSize: '0.88rem',
      marginBottom: 7,
    },
    '@media (max-width: 960px)': {
      fontSize: '0.85rem',
      marginBottom: 6,
    },
    '@media (max-width: 600px)': {
      fontSize: '0.8rem',
      marginBottom: 6,
    },
    '@media (max-width: 480px)': {
      fontSize: '0.75rem',
      marginBottom: 5,
    },
    '@media (max-width: 375px)': {
      fontSize: '0.7rem',
      marginBottom: 4,
    }
  },
  closeButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    zIndex: 3,
    color: '#ffffff !important',
    backgroundColor: 'rgba(0, 0, 0, 0.25) !important',
    border: '0.5px solid rgba(255, 255, 255, 0.3) !important',
    borderRadius: '50%',
    width: 32,
    height: 32,
    backdropFilter: 'blur(10px)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15) !important',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(244, 67, 54, 0.95)',
      borderColor: 'rgba(244, 67, 54, 1)',
      color: '#fff',
      transform: 'scale(1.12) rotate(8deg)',
      boxShadow: '0 6px 18px rgba(244, 67, 54, 0.25)',
    },
    '@media (max-width: 1200px)': {
      right: 7,
      top: 7,
      width: 30,
      height: 30,
      '&:hover': {
        transform: 'scale(1.1) rotate(6deg)',
      },
    },
    '@media (max-width: 960px)': {
      right: 6,
      top: 6,
      width: 28,
      height: 28,
      '&:hover': {
        transform: 'scale(1.08) rotate(5deg)',
      },
    },
    '@media (max-width: 600px)': {
      right: 6,
      top: 6,
      width: 28,
      height: 28,
      '&:hover': {
        transform: 'scale(1.06) rotate(4deg)',
      },
    },
    '@media (max-width: 480px)': {
      right: 5,
      top: 5,
      width: 26,
      height: 26,
      '&:hover': {
        transform: 'scale(1.04) rotate(3deg)',
      },
    },
    '@media (max-width: 375px)': {
      right: 4,
      top: 4,
      width: 24,
      height: 24,
      '&:hover': {
        transform: 'scale(1.02) rotate(2deg)',
      },
    }
  },
  iconContainer: {
    fontSize:"20px !important",
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '12px',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      fontSize:"18px !important",
      marginBottom: '10px',
    },
    '@media (max-width: 960px)': {
      fontSize:"16px !important",
      marginBottom: '8px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '6px',
      fontSize:"14px !important",
    },
    '@media (max-width: 480px)': {
      marginBottom: '5px',
      fontSize:"12px !important",
    },
    '@media (max-width: 375px)': {
      marginBottom: '4px',
      fontSize:"10px !important",
    }
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 8,
      backgroundColor: '#fafafa',
      transition: 'all 0.2s ease',
      fontSize: '0.9rem',
      boxShadow: '0 1.5px 6px rgba(42, 43, 106, 0.07)',
      '& fieldset': {
        borderColor: '#e0e0e0',
        borderWidth: 1,
      },
      '&:hover': {
        backgroundColor: '#f5f7ff',
      },
      '&:hover fieldset': {
        borderColor: '#2A2B6A',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2A2B6A',
        borderWidth: 2,
      },
      '&.Mui-focused': {
        backgroundColor: '#ffffff',
      }
    },
    '& .MuiInputLabel-root': {
      fontSize: '0.9rem',
      fontWeight: 500,
      color: '#666666',
      '&.Mui-focused': {
        color: '#2A2B6A',
      }
    },
    '& .MuiOutlinedInput-input': {
      padding: '10px 12px',
      fontSize: '0.9rem',
      color: '#2A2B6A',
      fontWeight: 500,
      lineHeight: 1.2,
      display: 'flex',
      alignItems: 'center',
    },
    '@media (max-width: 1200px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.88rem',
        borderRadius: 7,
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.88rem',
      },
      '& .MuiOutlinedInput-input': {
        padding: '9px 11px',
        fontSize: '0.88rem',
      }
    },
    '@media (max-width: 960px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.85rem',
        borderRadius: 6,
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.85rem',
      },
      '& .MuiOutlinedInput-input': {
        padding: '8px 10px',
        fontSize: '0.85rem',
      }
    },
    '@media (max-width: 600px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.8rem',
        borderRadius: 6,
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.8rem',
      },
      '& .MuiOutlinedInput-input': {
        padding: '8px 10px',
        fontSize: '0.8rem',
      }
    },
    '@media (max-width: 480px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.75rem',
        borderRadius: 5,
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.75rem',
      },
      '& .MuiOutlinedInput-input': {
        padding: '7px 9px',
        fontSize: '0.75rem',
      }
    },
    '@media (max-width: 375px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.7rem',
        borderRadius: 4,
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.7rem',
      },
      '& .MuiOutlinedInput-input': {
        padding: '6px 8px',
        fontSize: '0.7rem',
      }
    }
  },
  selectField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 8,
      backgroundColor: '#fafafa',
      transition: 'all 0.2s ease',
      fontSize: '0.9rem',
      boxShadow: '0 1.5px 6px rgba(42, 43, 106, 0.07)',
      '& fieldset': {
        borderColor: '#e0e0e0',
        borderWidth: 1,
      },
      '&:hover': {
        backgroundColor: '#f5f7ff',
      },
      '&:hover fieldset': {
        borderColor: '#2A2B6A',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2A2B6A',
        borderWidth: 2,
      },
      '&.Mui-focused': {
        backgroundColor: '#ffffff',
      }
    },
    '& .MuiSelect-select': {
      padding: '10px 12px',
      fontSize: '0.9rem',
      color: '#2A2B6A',
      fontWeight: 500,
    },
    '& .MuiInputLabel-root': {
      fontSize: '0.9rem',
      fontWeight: 500,
      color: '#666666',
      '&.Mui-focused': {
        color: '#2A2B6A',
      }
    },
    '@media (max-width: 1200px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.88rem',
        borderRadius: 7,
      },
      '& .MuiSelect-select': {
        padding: '9px 11px',
        fontSize: '0.88rem',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.88rem',
      }
    },
    '@media (max-width: 960px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.85rem',
        borderRadius: 6,
      },
      '& .MuiSelect-select': {
        padding: '8px 10px',
        fontSize: '0.85rem',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.85rem',
      }
    },
    '@media (max-width: 600px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.8rem',
        borderRadius: 6,
      },
      '& .MuiSelect-select': {
        padding: '8px 10px',
        fontSize: '0.8rem',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.8rem',
      }
    },
    '@media (max-width: 480px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.75rem',
        borderRadius: 5,
      },
      '& .MuiSelect-select': {
        padding: '7px 9px',
        fontSize: '0.75rem',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.75rem',
      }
    },
    '@media (max-width: 375px)': {
      '& .MuiOutlinedInput-root': {
        fontSize: '0.7rem',
        borderRadius: 4,
      },
      '& .MuiSelect-select': {
        padding: '6px 8px',
        fontSize: '0.7rem',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.7rem',
      }
    }
  },
  submitButton: {
    borderRadius: '100px !important',
    padding: '10px 24px !important',
    fontWeight: 600,
    fontSize: '0.9rem',
    textTransform: 'none',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1a1b43 100%)',
    color: '#fff !important',
    minWidth: 120,
    boxShadow: '0 6px 18px rgba(42, 43, 106, 0.18)',
    transition: 'all 0.3s cubic-bezier(.68,-0.55,.27,1.55)',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      background: 'linear-gradient(135deg, #1a1b43 0%, #0f1025 100%)',
      boxShadow: '0 10px 32px rgba(42, 43, 106, 0.25)',
      transform: 'translateY(-2px) scale(1.04)',
      filter: 'brightness(1.08)',
    },
    '&:disabled': {
      backgroundColor: '#cccccc',
      color: '#666666',
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
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
      transition: 'left 0.6s',
    },
    '&:hover::before': {
      left: '100%',
    },
    '@media (max-width: 1200px)': {
      padding: '9px 22px !important',
      fontSize: '0.88rem',
      minWidth: 110,
      boxShadow: '0 5px 16px rgba(42, 43, 106, 0.16)',
      '&:hover': {
        boxShadow: '0 8px 28px rgba(42, 43, 106, 0.22)',
        transform: 'translateY(-1.5px) scale(1.03)',
      },
    },
    '@media (max-width: 960px)': {
      padding: '8px 20px !important',
      fontSize: '0.85rem',
      minWidth: 100,
      boxShadow: '0 4px 14px rgba(42, 43, 106, 0.14)',
      '&:hover': {
        boxShadow: '0 6px 24px rgba(42, 43, 106, 0.18)',
        transform: 'translateY(-1px) scale(1.02)',
      },
    },
    '@media (max-width: 600px)': {
      padding: '8px 20px !important',
      fontSize: '0.8rem',
      minWidth: 100,
      boxShadow: '0 3px 12px rgba(42, 43, 106, 0.12)',
      '&:hover': {
        boxShadow: '0 5px 20px rgba(42, 43, 106, 0.15)',
        transform: 'translateY(-0.5px) scale(1.01)',
      },
    },
    '@media (max-width: 480px)': {
      padding: '7px 18px !important',
      fontSize: '0.75rem',
      minWidth: 90,
      boxShadow: '0 2px 10px rgba(42, 43, 106, 0.10)',
      '&:hover': {
        boxShadow: '0 4px 16px rgba(42, 43, 106, 0.12)',
        transform: 'translateY(-0.5px) scale(1.01)',
      },
    },
    '@media (max-width: 375px)': {
      padding: '6px 16px !important',
      fontSize: '0.7rem',
      minWidth: 80,
      boxShadow: '0 1px 8px rgba(42, 43, 106, 0.08)',
      '&:hover': {
        boxShadow: '0 3px 12px rgba(42, 43, 106, 0.10)',
        transform: 'translateY(-0.5px) scale(1.005)',
      },
    }
  },
  cancelButton: {
    borderRadius: '100px !important',
    padding: '10px 20px !important',
    fontWeight: 500,
    fontSize: '0.9rem',
    textTransform: 'none',
    color: '#666666 !important',
    backgroundColor: 'transparent',
    border: '1px solid #e0e0e0',
    minWidth: 100,
    transition: 'all 0.2s ease',
    boxShadow: '0 10px 50px rgba(42, 43, 106, 0.35) !important',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      color: '#2A2B6A !important',
      transform: 'scale(1.04)',
    },
    '@media (max-width: 1200px)': {
      padding: '9px 18px !important',
      fontSize: '0.88rem',
      minWidth: 90,
      '&:hover': {
        transform: 'scale(1.03)',
      },
    },
    '@media (max-width: 960px)': {
      padding: '8px 16px !important',
      fontSize: '0.85rem',
      minWidth: 80,
      '&:hover': {
        transform: 'scale(1.02)',
      },
    },
    '@media (max-width: 600px)': {
      padding: '8px 16px !important',
      fontSize: '0.8rem',
      minWidth: 80,
      '&:hover': {
        transform: 'scale(1.01)',
      },
    },
    '@media (max-width: 480px)': {
      padding: '7px 14px !important',
      fontSize: '0.75rem',
      minWidth: 70,
      '&:hover': {
        transform: 'scale(1.01)',
      },
    },
    '@media (max-width: 375px)': {
      padding: '6px 12px !important',
      fontSize: '0.7rem',
      minWidth: 60,
      '&:hover': {
        transform: 'scale(1.005)',
      },
    }
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginTop: 4,
    '@media (max-width: 1200px)': {
      gap: 11,
      marginTop: 3,
    },
    '@media (max-width: 960px)': {
      gap: 10,
      marginTop: 3,
    },
    '@media (max-width: 600px)': {
      gap: 10,
      marginTop: 2,
    },
    '@media (max-width: 480px)': {
      gap: 8,
      marginTop: 2,
    },
    '@media (max-width: 375px)': {
      gap: 6,
      marginTop: 1,
    }
  },
  readOnlyField: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#f8f9ff',
      '& fieldset': {
        borderColor: '#FFC614',
        borderWidth: 2,
      }
    },
    '& .MuiInputBase-input': {
      color: '#2A2B6A',
      fontWeight: 600
    },
    '@media (max-width: 1200px)': {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderWidth: 1.8,
        }
      }
    },
    '@media (max-width: 960px)': {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderWidth: 1.6,
        }
      }
    },
    '@media (max-width: 600px)': {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderWidth: 1.4,
        }
      }
    },
    '@media (max-width: 480px)': {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderWidth: 1.2,
        }
      }
    },
    '@media (max-width: 375px)': {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderWidth: 1,
        }
      }
    }
  },
  successContainer: {
    textAlign: 'center',
    padding: '20px 0',
    '@media (max-width: 1200px)': {
      padding: '18px 0',
    },
    '@media (max-width: 960px)': {
      padding: '16px 0',
    },
    '@media (max-width: 600px)': {
      padding: '16px 0',
    },
    '@media (max-width: 480px)': {
      padding: '14px 0',
    },
    '@media (max-width: 375px)': {
      padding: '12px 0',
    }
  },
  successMessage: {
    borderRadius: 12,
    backgroundColor: '#f8fff8',
    color: '#2A2B6A',
    fontWeight: 500,
    border: '2px solid #4caf50',
    boxShadow: '0 4px 20px rgba(76, 175, 80, 0.15)',
    padding: '16px',
    margin: '12px 0',
    '@media (max-width: 1200px)': {
      borderRadius: 11,
      padding: '14px',
      margin: '10px 0',
      boxShadow: '0 3px 18px rgba(76, 175, 80, 0.13)',
    },
    '@media (max-width: 960px)': {
      borderRadius: 10,
      padding: '12px',
      margin: '8px 0',
      boxShadow: '0 2px 16px rgba(76, 175, 80, 0.11)',
    },
    '@media (max-width: 600px)': {
      padding: '12px',
      margin: '8px 0',
      boxShadow: '0 2px 14px rgba(76, 175, 80, 0.09)',
    },
    '@media (max-width: 480px)': {
      borderRadius: 8,
      padding: '10px',
      margin: '6px 0',
      boxShadow: '0 1px 12px rgba(76, 175, 80, 0.07)',
    },
    '@media (max-width: 375px)': {
      borderRadius: 6,
      padding: '8px',
      margin: '4px 0',
      boxShadow: '0 1px 10px rgba(76, 175, 80, 0.05)',
    }
  },
  successIconContainer: {
    marginBottom: 8,
    position: 'relative',
    '@media (max-width: 1200px)': {
      marginBottom: 7,
    },
    '@media (max-width: 960px)': {
      marginBottom: 6,
    },
    '@media (max-width: 600px)': {
      marginBottom: 6,
    },
    '@media (max-width: 480px)': {
      marginBottom: 5,
    },
    '@media (max-width: 375px)': {
      marginBottom: 4,
    }
  },
  successIcon: {
    fontSize: 48,
    color: '#4caf50',
    animation: '$bounceIn 0.6s cubic-bezier(.68,-0.55,.27,1.55)',
    filter: 'drop-shadow(0 2px 8px rgba(76, 175, 80, 0.3))',
    '@media (max-width: 1200px)': {
      fontSize: 44,
      filter: 'drop-shadow(0 2px 7px rgba(76, 175, 80, 0.28))',
    },
    '@media (max-width: 960px)': {
      fontSize: 40,
      filter: 'drop-shadow(0 1px 6px rgba(76, 175, 80, 0.26))',
    },
    '@media (max-width: 600px)': {
      fontSize: 36,
      filter: 'drop-shadow(0 1px 5px rgba(76, 175, 80, 0.24))',
    },
    '@media (max-width: 480px)': {
      fontSize: 32,
      filter: 'drop-shadow(0 1px 4px rgba(76, 175, 80, 0.22))',
    },
    '@media (max-width: 375px)': {
      fontSize: 28,
      filter: 'drop-shadow(0 1px 3px rgba(76, 175, 80, 0.20))',
    }
  },
  celebrationIcon: {
    fontSize: 36,
    color: '#FFC614',
    marginLeft: 6,
    animation: '$bounceIn 0.8s cubic-bezier(.68,-0.55,.27,1.55)',
    animationDelay: '0.2s',
    animationFillMode: 'both',
    '@media (max-width: 1200px)': {
      fontSize: 32,
      marginLeft: 5,
    },
    '@media (max-width: 960px)': {
      fontSize: 28,
      marginLeft: 4,
    },
    '@media (max-width: 600px)': {
      fontSize: 26,
      marginLeft: 4,
    },
    '@media (max-width: 480px)': {
      fontSize: 24,
      marginLeft: 3,
    },
    '@media (max-width: 375px)': {
      fontSize: 20,
      marginLeft: 2,
    }
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
  errorMessage: {
    borderRadius: 8,
    backgroundColor: '#fff5f5',
    color: '#d32f2f',
    fontWeight: 500,
    border: '1px solid rgba(211, 47, 47, 0.3)',
    fontSize: '0.85rem',
    '& .MuiAlert-message': {
      padding: 0,
    },
    '@media (max-width: 1200px)': {
      fontSize: '0.82rem',
      borderRadius: 7,
    },
    '@media (max-width: 960px)': {
      fontSize: '0.8rem',
      borderRadius: 6,
    },
    '@media (max-width: 600px)': {
      fontSize: '0.78rem',
      borderRadius: 6,
    },
    '@media (max-width: 480px)': {
      fontSize: '0.75rem',
      borderRadius: 5,
    },
    '@media (max-width: 375px)': {
      fontSize: '0.7rem',
      borderRadius: 4,
    }
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: 'inherit',
    fontSize: '0.9rem',
    '@media (max-width: 1200px)': {
      gap: 7,
      fontSize: '0.88rem',
    },
    '@media (max-width: 960px)': {
      gap: 6,
      fontSize: '0.85rem',
    },
    '@media (max-width: 600px)': {
      gap: 6,
      fontSize: '0.8rem',
    },
    '@media (max-width: 480px)': {
      gap: 5,
      fontSize: '0.75rem',
    },
    '@media (max-width: 375px)': {
      gap: 4,
      fontSize: '0.7rem',
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
      // Map display values to backend expected values
      const getBackendFieldValue = () => {
        switch (variant) {
          case 'dropdown':
            return '';
          case 'fullstack':
          case 'fullstackdemo':
            return 'fullstack';
          case 'datascience': 
          case 'datasciencedemo':
            return 'datascience';
          case 'jobportal':
            return 'Book a demo';
          default:
            return 'Book a demo';
        }
      };

      setFormData({
        full_name: '',
        email: '',
        chosen_field: getBackendFieldValue(),
        phone_number: ''
      });
      setSuccess(false);
      setError('');
    }
  }, [open, variant]);

  const getTitle = () => {
    switch (variant) {
      case 'dropdown':
        return 'Join Our Program';
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
        return 'Choose your path to success';
      case 'fullstackdemo':
      case 'datasciencedemo':
      case 'jobportal':
        return 'Book a personalized demo';
      case 'fullstack':
        return 'Start your coding journey';
      case 'datascience':
        return 'Dive into data science';
      default:
        return "Let's connect and grow together";
    }
  };

  const getIcon = () => {
    const iconProps = { 
      sx: { 
        fontSize: {
          xs: 20,
          sm: 24,
          md: 26,
          lg: 28,
          xl: 28
        }, 
        color: '#FFC614', 
        filter: 'drop-shadow(0 2px 4px rgba(255, 198, 20, 0.3))' 
      } 
    };
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
      case 'fullstackdemo':
        return 'Full Stack Demo';
      case 'datasciencedemo':
        return 'Data Science Demo';
      case 'jobportal':
        return 'Job Portal Demo';
      case 'fullstack':
        return 'Full Stack Development';
      case 'datascience':
        return 'Data Science';
      case 'demo':
        return 'Book a demo';
      default:
        return '';
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    let mappedValue = value;
    
    // Map dropdown display values to backend values
    if (name === 'chosen_field') {
      switch (value) {
        case 'Full Stack Development':
          mappedValue = 'fullstack';
          break;
        case 'Data Science':
          mappedValue = 'datascience';
          break;
        default:
          mappedValue = value;
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: mappedValue
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
      }, 2200);
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
          backgroundColor: '#ffffff',
          opacity: 1,
          zIndex: 1300
        }
      }}
      BackdropProps={{
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(4px)',
          zIndex: 1299
        }
      }}
      style={{ zIndex: 1300 }}
      maxWidth="sm"
      fullWidth
      disableEnforceFocus
      disableAutoFocus
    >
      {/* Header Section */}
      <Box className={classes.headerSection}>
        <IconButton
          className={classes.closeButton}
          onClick={onClose}
          disabled={loading}
          aria-label="Close"
        >
          <CloseIcon sx={{ 
            fontSize: {
              xs: 14,
              sm: 16,
              md: 16,
              lg: 18,
              xl: 18
            }
          }} />
        </IconButton>

        <Box className={classes.iconContainer}>
          {getIcon()}
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
            </Box>
            <Alert severity="success" className={classes.successMessage} icon={false}>
              <Typography variant="h6" gutterBottom sx={{ 
                fontWeight: 600, 
                color: '#2A2B6A', 
                fontSize: {
                  xs: '0.85rem',
                  sm: '0.9rem',
                  md: '1rem',
                  lg: '1.1rem',
                  xl: '1.1rem'
                },
                marginBottom: '4px'
              }}>
                Thank you for your submission!
              </Typography>
              <Typography sx={{ 
                fontSize: {
                  xs: '0.7rem',
                  sm: '0.75rem',
                  md: '0.85rem',
                  lg: '0.9rem',
                  xl: '0.9rem'
                }, 
                color: '#2A2B6A', 
                fontWeight: 400,
                lineHeight: 1.4
              }}>
                We'll be in touch soon.{' '}
                <span style={{ color: '#4caf50', fontWeight: 600 }}>
                  Stay tuned for updates!
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
                <InputLabel id="chosen-field-label">Choose Your Field</InputLabel>
                <Select
                  labelId="chosen-field-label"
                  id="chosen-field-select"
                  name="chosen_field"
                  value={formData.chosen_field}
                  onChange={handleInputChange}
                  label="Choose Your Field"
                  disabled={loading}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'left',
                    },
                    transformOrigin: {
                      vertical: 'top',
                      horizontal: 'left',
                    },
                    PaperProps: {
                      style: {
                        borderRadius: 12,
                        boxShadow: '0 6px 24px rgba(42,43,106,0.12)',
                        marginTop: 8,
                        zIndex: 9999,
                        maxHeight: 200,
                      }
                    },
                    disablePortal: false,
                    container: document.body,
                  }}
                >
                  <MenuItem value="fullstack">Full Stack</MenuItem>
                  <MenuItem value="datascience">Data Science</MenuItem>
                </Select>
              </FormControl>
            ) : (
              <TextField
                name="chosen_field"
                label="Demo"
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
              padding: {
                xs: '8px 0 0',
                sm: '10px 0 0',
                md: '12px 0 0',
                lg: '16px 0 0',
                xl: '16px 0 0'
              },
              gap: {
                xs: '6px',
                sm: '8px',
                md: '10px',
                lg: '12px',
                xl: '12px'
              },
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
                    <CircularProgress 
                      size={{
                        xs: 12,
                        sm: 14,
                        md: 15,
                        lg: 16,
                        xl: 16
                      }} 
                      color="inherit" 
                    />
                    Submitting...
                  </Box>
                ) : (
                  'Submit'
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