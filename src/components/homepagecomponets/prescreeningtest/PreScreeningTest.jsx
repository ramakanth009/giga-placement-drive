// import React, { useState, useEffect } from 'react';
// import { Box, Container, Typography, Stepper, Step, StepLabel, Button, Paper, CircularProgress } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import { useNavigate } from 'react-router-dom';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// // Import centralized API
// import { api, handleApiError, STRUCTURES } from '../../../services/api';

// // Import test step components
// import PersonalInfoStep from './PersonalInfoStep';
// import MotivationAcademicStep from './MotivationAcademicStep';
// import AchievementsStep from './AchievementsStep';
// import TechnicalProficiencyStep from './TechnicalProficiencyStep';
// import CommunicationLearningStep from './CommunicationLearningStep';
// import ResultsStep from './ResultsStep';

// const useStyles = makeStyles({
//   root: {
//     position: 'relative',
//     width: '100%',
//     minHeight: '100vh',
//     paddingTop: '40px',
//     paddingBottom: '80px',
//     backgroundColor: '#f8f9fc',
//     '@media (max-width: 600px)': {
//       paddingTop: '20px',
//       paddingBottom: '60px',
//     },
//   },
//   pageTitle: {
//     fontSize: '2.2rem !important',
//     fontWeight: 'bold !important',
//     color: '#2A2B6A !important',
//     marginBottom: '10px !important',
//     textAlign: 'center',
//     '& span': {
//       color: '#FFC614 !important',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '1.8rem !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '1.5rem !important',
//     },
//   },
//   subtitle: {
//     fontSize: '1.1rem !important',
//     color: '#666 !important',
//     textAlign: 'center',
//     maxWidth: '800px',
//     margin: '0 auto 30px auto !important',
//     '@media (max-width: 960px)': {
//       fontSize: '1rem !important',
//       maxWidth: '90%',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '0.9rem !important',
//       marginBottom: '20px !important',
//     },
//   },
//   stepper: {
//     margin: '20px auto 40px auto !important',
//     maxWidth: '800px',
//     '@media (max-width: 600px)': {
//       padding: '0 10px',
//       marginBottom: '30px !important',
//     },
//   },
//   customStepper: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     margin: '20px auto 40px auto !important',
//     maxWidth: '800px',
//     padding: '0 20px',
//     '@media (max-width: 600px)': {
//       padding: '0 10px',
//       marginBottom: '30px !important',
//     },
//   },
//   stepItem: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     flex: 1,
//     position: 'relative',
//   },
//   stepConnection: {
//     display: 'flex',
//     alignItems: 'center',
//     width: '100%',
//     justifyContent: 'center',
//     position: 'relative',
//     marginBottom: '15px',
//   },
//   stepCircle: {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '1rem !important',
//     fontWeight: 'bold !important',
//     color: 'white !important',
//     zIndex: 2,
//     position: 'relative',
//     '@media (max-width: 600px)': {
//       width: '35px',
//       height: '35px',
//       fontSize: '0.9rem !important',
//     },
//   },
//   stepLine: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     right: '-50%',
//     height: '2px',
//     backgroundColor: '#e0e4e7',
//     transform: 'translateY(-50%)',
//     zIndex: 1,
//     '@media (max-width: 600px)': {
//       height: '1px',
//     },
//   },
//   activeStep: {
//     backgroundColor: '#2A2B6A !important',
//   },
//   completedStep: {
//     backgroundColor: '#2A2B6A !important',
//   },
//   inactiveStep: {
//     backgroundColor: '#999 !important',
//   },
//   stepLabel: {
//     fontSize: '0.85rem !important',
//     textAlign: 'center',
//     lineHeight: '1.2 !important',
//     maxWidth: '120px',
//     '@media (max-width: 600px)': {
//       fontSize: '0.75rem !important',
//       maxWidth: '80px',
//     },
//   },
//   activeStepLabel: {
//     color: '#2A2B6A !important',
//     fontWeight: '600 !important',
//   },
//   completedStepLabel: {
//     color: '#2A2B6A !important',
//     fontWeight: '500 !important',
//   },
//   inactiveStepLabel: {
//     color: '#999 !important',
//     fontWeight: '400 !important',
//   },
//   stepContent: {
//     maxWidth: '800px',
//     margin: '0 auto',
//     padding: '30px',
//     '@media (max-width: 600px)': {
//       padding: '20px 15px',
//     },
//   },
//   buttonContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '40px',
//     '@media (max-width: 600px)': {
//       marginTop: '30px',
//     },
//   },
//   button: {
//     padding: '10px 25px !important',
//     textTransform: 'none !important',
//     fontWeight: '600 !important',
//     borderRadius: '8px !important',
//   },
//   backButton: {
//     backgroundColor: '#f5f5f5 !important',
//     color: '#666 !important',
//     '&:hover': {
//       backgroundColor: '#e0e0e0 !important',
//     },
//   },
//   nextButton: {
//     backgroundColor: '#2A2B6A !important',
//     color: 'white !important',
//     '&:hover': {
//       backgroundColor: '#1A1B4A !important',
//     },
//   },
//   submitButton: {
//     backgroundColor: '#FFC614 !important',
//     color: '#2A2B6A !important',
//     '&:hover': {
//       backgroundColor: '#FFD23F !important',
//     },
//   },
//   errorMessage: {
//     color: '#e53935 !important',
//     fontSize: '0.9rem !important',
//     marginTop: '10px !important',
//     textAlign: 'center',
//   },
//   progress: {
//     margin: '0 auto',
//     display: 'block',
//     marginTop: '20px',
//     color: '#2A2B6A !important',
//   },
//   homeButton: {
//     position: 'absolute',
//     top: '20px',
//     left: '20px',
//     backgroundColor: 'transparent !important',
//     color: '#2A2B6A !important',
//     '&:hover': {
//       backgroundColor: 'rgba(42, 43, 106, 0.05) !important',
//     },
//     '@media (max-width: 600px)': {
//       top: '10px',
//       left: '10px',
//     },
//   },
// });

// const steps = [
//   'Personal Information',
//   'Motivation & Academics',
//   'Technical Achievements',
//   'Technical Proficiency',
//   'Communication & Learning',
//   'Results'
// ];

// const PreScreeningTest = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const [activeStep, setActiveStep] = useState(0);
//   const [formData, setFormData] = useState(STRUCTURES.PRESCREENING);
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [apiResponse, setApiResponse] = useState(null);

//   // Scroll to top whenever activeStep changes
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   }, [activeStep]);

//   const handleNext = () => {
//     const isValid = validateStep(activeStep);
//     if (isValid) {
//       if (activeStep === steps.length - 2) {
//         handleSubmit();
//       } else {
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//       }
//     }
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleChange = (field, value) => {
//     setFormData((prevData) => {
//       const updatedData = { ...prevData };
      
//       if (field.includes('.')) {
//         const parts = field.split('.');
//         if (parts.length === 2) {
//           const [parent, child] = parts;
//           updatedData[parent] = {
//             ...updatedData[parent],
//             [child]: value,
//           };
//         } else if (parts.length === 3) {
//           const [parent, child, grandchild] = parts;
//           updatedData[parent] = {
//             ...updatedData[parent],
//             [child]: {
//               ...updatedData[parent][child],
//               [grandchild]: value,
//             }
//           };
//         }
//       } else {
//         updatedData[field] = value;
//       }
      
//       return updatedData;
//     });
    
//     // Clear error when field is updated
//     if (errors[field]) {
//       setErrors((prevErrors) => {
//         const updatedErrors = { ...prevErrors };
//         delete updatedErrors[field];
//         return updatedErrors;
//       });
//     }
//   };

//   const validateStep = (step) => {
//     const newErrors = {};
    
//     switch (step) {
//       case 0: // Personal Information
//         if (!formData.name.trim()) newErrors.name = 'Name is required';
//         if (!formData.email.trim()) {
//           newErrors.email = 'Email is required';
//         } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//           newErrors.email = 'Invalid email format';
//         }
//         break;
      
//       case 1: // Motivation & Academics
//         if (!formData.motivation_narrative.trim() || formData.motivation_narrative.length < 50) {
//           newErrors.motivation_narrative = 'Please provide a detailed motivation narrative (minimum 50 characters)';
//         }
        
//         if (formData.education_gap.has_gap && !formData.education_gap.explanation.trim()) {
//           newErrors['education_gap.explanation'] = 'Please explain your education gap';
//         }
//         break;
      
//       case 2: // Technical Achievements
//         if (formData.achievement_justification.trim() && formData.achievement_justification.length < 50) {
//           newErrors.achievement_justification = 'Please provide more detailed justification (minimum 50 characters)';
//         }
//         break;
      
//       case 3: // Technical Proficiency
//         // No specific validation required for tech proficiency
//         break;
      
//       case 4: // Communication & Learning
//         // Validate all MCQ questions are answered
//         const mcqQuestions = ['question_1', 'question_2', 'question_3', 'question_4', 'question_5'];
//         const unansweredQuestions = mcqQuestions.filter(q => !formData.communication_mcq[q]);
        
//         if (unansweredQuestions.length > 0) {
//           newErrors.communication_mcq = `Please answer all communication questions (${unansweredQuestions.length} remaining)`;
//         }
        
//         if (formData.learning_agility.reflection.trim() && formData.learning_agility.reflection.length < 50) {
//           newErrors['learning_agility.reflection'] = 'Please provide a more detailed reflection (minimum 50 characters)';
//         }
//         break;
      
//       default:
//         break;
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async () => {
//     setIsSubmitting(true);
    
//     try {
//       const result = await api.prescreening.submitTest(formData);
//       setApiResponse(result.data);
//       setActiveStep(steps.length - 1); // Move to results step
      
//     } catch (error) {
//       const errorInfo = handleApiError(error);
      
//       if (error.isClientError()) {
//         setErrors({
//           api: `Validation Error: ${error.message}`
//         });
//       } else if (error.isServerError()) {
//         setErrors({
//           api: 'Server error occurred. Please try again later.'
//         });
//       } else if (error.isNetworkError()) {
//         setErrors({
//           api: 'Network error. Please check your connection and try again.'
//         });
//       } else {
//         setErrors({
//           api: errorInfo.message
//         });
//       }
      
//       console.error('Prescreening test submission error:', errorInfo);
      
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const renderStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return <PersonalInfoStep formData={formData} handleChange={handleChange} errors={errors} />;
//       case 1:
//         return <MotivationAcademicStep formData={formData} handleChange={handleChange} errors={errors} />;
//       case 2:
//         return <AchievementsStep formData={formData} handleChange={handleChange} errors={errors} />;
//       case 3:
//         return <TechnicalProficiencyStep formData={formData} handleChange={handleChange} errors={errors} />;
//       case 4:
//         return <CommunicationLearningStep formData={formData} handleChange={handleChange} errors={errors} />;
//       case 5:
//         return <ResultsStep apiResponse={apiResponse} />;
//       default:
//         return <Typography>Unknown step</Typography>;
//     }
//   };

//   return (
//     <Box className={classes.root}>
//       <Button
//         startIcon={<ArrowBackIcon />}
//         onClick={() => navigate('/')}
//         className={classes.homeButton}
//       >
//         Back to Home
//       </Button>

//       <Container maxWidth="lg">
//         <Typography variant="h1" className={classes.pageTitle}>
//           Pre-screening <span>Assessment</span>
//         </Typography>
//         <Typography variant="subtitle1" className={classes.subtitle}>
//           Complete this comprehensive assessment to evaluate your readiness for our IT program.
//           This will help us understand your background, motivation, and technical proficiency.
//         </Typography>

//         <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
//           <Box className={classes.customStepper}>
//             {steps.map((label, index) => (
//               <Box key={label} className={classes.stepItem}>
//                 <Box className={classes.stepConnection}>
//                   <Box 
//                     className={`${classes.stepCircle} ${
//                       index === activeStep 
//                         ? classes.activeStep 
//                         : index < activeStep 
//                         ? classes.completedStep 
//                         : classes.inactiveStep
//                     }`}
//                   >
//                     {index + 1}
//                   </Box>
//                   {index < steps.length - 1 && (
//                     <Box className={classes.stepLine} />
//                   )}
//                 </Box>
//                 <Typography 
//                   className={`${classes.stepLabel} ${
//                     index === activeStep 
//                       ? classes.activeStepLabel 
//                       : index < activeStep 
//                       ? classes.completedStepLabel 
//                       : classes.inactiveStepLabel
//                   }`}
//                 >
//                   {label}
//                 </Typography>
//               </Box>
//             ))}
//           </Box>

//           <Box className={classes.stepContent}>
//             {renderStepContent(activeStep)}

//             {activeStep < steps.length - 1 && (
//               <Box className={classes.buttonContainer}>
//                 <Button
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   className={`${classes.button} ${classes.backButton}`}
//                 >
//                   Back
//                 </Button>

//                 {isSubmitting ? (
//                   <CircularProgress className={classes.progress} size={24} />
//                 ) : (
//                   <Button
//                     variant="contained"
//                     onClick={handleNext}
//                     className={`${classes.button} ${
//                       activeStep === steps.length - 2 ? classes.submitButton : classes.nextButton
//                     }`}
//                   >
//                     {activeStep === steps.length - 2 ? 'Submit Assessment' : 'Next'}
//                   </Button>
//                 )}
//               </Box>
//             )}

//             {errors.api && (
//               <Typography className={classes.errorMessage}>
//                 {errors.api}
//               </Typography>
//             )}
//           </Box>
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default PreScreeningTest;
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Stepper, Step, StepLabel, Button, Paper, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Import centralized API
import { api, handleApiError, STRUCTURES } from '../../../services/api';

// Import test step components
import PersonalInfoStep from './PersonalInfoStep';
import MotivationAcademicStep from './MotivationAcademicStep';
import AchievementsStep from './AchievementsStep';
import TechnicalProficiencyStep from './TechnicalProficiencyStep';
import CommunicationLearningStep from './CommunicationLearningStep';
import ResultsStep from './ResultsStep';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    paddingTop: '40px',
    paddingBottom: '80px',
    backgroundColor: '#f8f9fc',
    '@media (max-width: 1200px)': {
      paddingTop: '35px',
      paddingBottom: '70px',
    },
    '@media (max-width: 960px)': {
      paddingTop: '30px',
      paddingBottom: '60px',
    },
    '@media (max-width: 600px)': {
      paddingTop: '20px',
      paddingBottom: '50px',
    },
    '@media (max-width: 480px)': {
      paddingTop: '15px',
      paddingBottom: '40px',
    },
    '@media (max-width: 375px)': {
      paddingTop: '10px',
      paddingBottom: '30px',
    },
  },
  pageTitle: {
    fontSize: '2.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '10px !important',
    textAlign: 'center',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2rem !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.6rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.4rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.3rem !important',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#666 !important',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 30px auto !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.05rem !important',
      maxWidth: '750px',
      margin: '0 auto 28px auto !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '90%',
      margin: '0 auto 25px auto !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      marginBottom: '15px !important',
    },
  },
  stepper: {
    margin: '20px auto 40px auto !important',
    maxWidth: '800px',
    '@media (max-width: 1200px)': {
      margin: '18px auto 35px auto !important',
      maxWidth: '750px',
    },
    '@media (max-width: 960px)': {
      margin: '16px auto 30px auto !important',
      maxWidth: '90%',
    },
    '@media (max-width: 600px)': {
      padding: '0 10px',
      margin: '15px auto 25px auto !important',
    },
    '@media (max-width: 480px)': {
      margin: '12px auto 20px auto !important',
    },
    '@media (max-width: 375px)': {
      margin: '10px auto 18px auto !important',
    },
  },
  customStepper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: '20px auto 40px auto !important',
    maxWidth: '800px',
    padding: '0 20px',
    '@media (max-width: 1200px)': {
      margin: '18px auto 35px auto !important',
      maxWidth: '750px',
      padding: '0 18px',
    },
    '@media (max-width: 960px)': {
      margin: '16px auto 30px auto !important',
      maxWidth: '90%',
      padding: '0 15px',
    },
    '@media (max-width: 600px)': {
      padding: '0 10px',
      margin: '15px auto 25px auto !important',
    },
    '@media (max-width: 480px)': {
      display: 'none', // Hide full stepper on mobile
    },
  },
  mobileStepHeader: {
    display: 'none',
    '@media (max-width: 480px)': {
      display: 'block',
      textAlign: 'center',
      margin: '20px auto 30px auto !important',
      padding: '15px 20px',
      backgroundColor: '#f8f9fc',
      borderRadius: '12px',
      border: '1px solid #e0e4e7',
    },
    '@media (max-width: 375px)': {
      margin: '15px auto 25px auto !important',
      padding: '12px 15px',
    },
  },
  mobileStepTitle: {
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    marginBottom: '5px !important',
    '@media (max-width: 375px)': {
      fontSize: '1rem !important',
    },
  },
  mobileStepProgress: {
    fontSize: '0.85rem !important',
    color: '#666 !important',
    '@media (max-width: 375px)': {
      fontSize: '0.8rem !important',
    },
  },
  stepItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
  stepConnection: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: '15px',
    '@media (max-width: 480px)': {
      marginBottom: '12px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '10px',
    },
  },
  stepCircle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    zIndex: 2,
    position: 'relative',
    '@media (max-width: 1200px)': {
      width: '38px',
      height: '38px',
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 960px)': {
      width: '36px',
      height: '36px',
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 600px)': {
      width: '32px',
      height: '32px',
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 480px)': {
      width: '28px',
      height: '28px',
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 375px)': {
      width: '24px',
      height: '24px',
      fontSize: '0.75rem !important',
    },
  },
  stepLine: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: '-50%',
    height: '2px',
    backgroundColor: '#e0e4e7',
    transform: 'translateY(-50%)',
    zIndex: 1,
    '@media (max-width: 480px)': {
      height: '1px',
    },
  },
  activeStep: {
    backgroundColor: '#2A2B6A !important',
  },
  completedStep: {
    backgroundColor: '#2A2B6A !important',
  },
  inactiveStep: {
    backgroundColor: '#999 !important',
  },
  stepLabel: {
    fontSize: '0.85rem !important',
    textAlign: 'center',
    lineHeight: '1.2 !important',
    maxWidth: '120px',
    '@media (max-width: 1200px)': {
      fontSize: '0.83rem !important',
      maxWidth: '110px',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.8rem !important',
      maxWidth: '100px',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.75rem !important',
      maxWidth: '80px',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.7rem !important',
      maxWidth: '65px',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.65rem !important',
      maxWidth: '55px',
    },
  },
  activeStepLabel: {
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
  },
  completedStepLabel: {
    color: '#2A2B6A !important',
    fontWeight: '500 !important',
  },
  inactiveStepLabel: {
    color: '#999 !important',
    fontWeight: '400 !important',
  },
  stepContent: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '30px',
    '@media (max-width: 1200px)': {
      maxWidth: '750px',
      padding: '28px',
    },
    '@media (max-width: 960px)': {
      maxWidth: '90%',
      padding: '25px',
    },
    '@media (max-width: 600px)': {
      padding: '20px 15px',
    },
    '@media (max-width: 480px)': {
      padding: '15px 12px',
    },
    '@media (max-width: 375px)': {
      padding: '12px 10px',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '40px',
    '@media (max-width: 1200px)': {
      marginTop: '35px',
    },
    '@media (max-width: 960px)': {
      marginTop: '30px',
    },
    '@media (max-width: 600px)': {
      marginTop: '25px',
    },
    '@media (max-width: 480px)': {
      marginTop: '20px',
      flexDirection: 'column',
      gap: '10px',
    },
    '@media (max-width: 375px)': {
      marginTop: '15px',
      gap: '8px',
    },
  },
  button: {
    padding: '10px 25px !important',
    textTransform: 'none !important',
    fontWeight: '600 !important',
    borderRadius: '8px !important',
    '@media (max-width: 1200px)': {
      padding: '9px 22px !important',
    },
    '@media (max-width: 960px)': {
      padding: '8px 20px !important',
    },
    '@media (max-width: 600px)': {
      padding: '8px 18px !important',
    },
    '@media (max-width: 480px)': {
      padding: '10px 20px !important',
      width: '100%',
    },
    '@media (max-width: 375px)': {
      padding: '8px 16px !important',
    },
  },
  backButton: {
    backgroundColor: '#f5f5f5 !important',
    color: '#666 !important',
    '&:hover': {
      backgroundColor: '#e0e0e0 !important',
    },
  },
  nextButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    '&:hover': {
      backgroundColor: '#1A1B4A !important',
    },
  },
  submitButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    '&:hover': {
      backgroundColor: '#FFD23F !important',
    },
  },
  errorMessage: {
    color: '#e53935 !important',
    fontSize: '0.9rem !important',
    marginTop: '10px !important',
    textAlign: 'center',
    '@media (max-width: 480px)': {
      fontSize: '0.85rem !important',
      marginTop: '8px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.8rem !important',
      marginTop: '6px !important',
    },
  },
  progress: {
    margin: '0 auto',
    display: 'block',
    marginTop: '20px',
    color: '#2A2B6A !important',
    '@media (max-width: 480px)': {
      marginTop: '15px',
    },
    '@media (max-width: 375px)': {
      marginTop: '10px',
    },
  },
  homeButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: 'transparent !important',
    color: '#2A2B6A !important',
    '&:hover': {
      backgroundColor: 'rgba(42, 43, 106, 0.05) !important',
    },
    '& .MuiButton-startIcon': {
      '@media (max-width: 480px)': {
        marginRight: '4px',
      },
      '@media (max-width: 375px)': {
        marginRight: '2px',
      },
    },
    '@media (max-width: 1200px)': {
      top: '18px',
      left: '18px',
    },
    '@media (max-width: 960px)': {
      top: '15px',
      left: '15px',
    },
    '@media (max-width: 600px)': {
      top: '10px',
      left: '10px',
    },
    '@media (max-width: 480px)': {
      top: '8px',
      left: '8px',
      fontSize: '0.8rem !important',
      padding: '6px 10px !important',
    },
    '@media (max-width: 375px)': {
      top: '5px',
      left: '5px',
      fontSize: '0.75rem !important',
      padding: '4px 8px !important',
    },
  },
});

const steps = [
  'Personal Information',
  'Motivation & Academics',
  'Technical Achievements',
  'Technical Proficiency',
  'Communication & Learning',
  'Results'
];

const PreScreeningTest = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(STRUCTURES.PRESCREENING);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  // Scroll to top whenever activeStep changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activeStep]);

  const handleNext = () => {
    const isValid = validateStep(activeStep);
    if (isValid) {
      if (activeStep === steps.length - 2) {
        handleSubmit();
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (field, value) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData };
      
      if (field.includes('.')) {
        const parts = field.split('.');
        if (parts.length === 2) {
          const [parent, child] = parts;
          updatedData[parent] = {
            ...updatedData[parent],
            [child]: value,
          };
        } else if (parts.length === 3) {
          const [parent, child, grandchild] = parts;
          updatedData[parent] = {
            ...updatedData[parent],
            [child]: {
              ...updatedData[parent][child],
              [grandchild]: value,
            }
          };
        }
      } else {
        updatedData[field] = value;
      }
      
      return updatedData;
    });
    
    // Clear error when field is updated
    if (errors[field]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[field];
        return updatedErrors;
      });
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 0: // Personal Information
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Invalid email format';
        }
        break;
      
      case 1: // Motivation & Academics
        if (!formData.motivation_narrative.trim() || formData.motivation_narrative.length < 50) {
          newErrors.motivation_narrative = 'Please provide a detailed motivation narrative (minimum 50 characters)';
        }
        
        if (formData.education_gap.has_gap && !formData.education_gap.explanation.trim()) {
          newErrors['education_gap.explanation'] = 'Please explain your education gap';
        }
        break;
      
      case 2: // Technical Achievements
        if (formData.achievement_justification.trim() && formData.achievement_justification.length < 50) {
          newErrors.achievement_justification = 'Please provide more detailed justification (minimum 50 characters)';
        }
        break;
      
      case 3: // Technical Proficiency
        // No specific validation required for tech proficiency
        break;
      
      case 4: // Communication & Learning
        // Validate all MCQ questions are answered
        const mcqQuestions = ['question_1', 'question_2', 'question_3', 'question_4', 'question_5'];
        const unansweredQuestions = mcqQuestions.filter(q => !formData.communication_mcq[q]);
        
        if (unansweredQuestions.length > 0) {
          newErrors.communication_mcq = `Please answer all communication questions (${unansweredQuestions.length} remaining)`;
        }
        
        if (formData.learning_agility.reflection.trim() && formData.learning_agility.reflection.length < 50) {
          newErrors['learning_agility.reflection'] = 'Please provide a more detailed reflection (minimum 50 characters)';
        }
        break;
      
      default:
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const result = await api.prescreening.submitTest(formData);
      setApiResponse(result.data);
      setActiveStep(steps.length - 1); // Move to results step
      
    } catch (error) {
      const errorInfo = handleApiError(error);
      
      if (error.isClientError()) {
        setErrors({
          api: `Validation Error: ${error.message}`
        });
      } else if (error.isServerError()) {
        setErrors({
          api: 'Server error occurred. Please try again later.'
        });
      } else if (error.isNetworkError()) {
        setErrors({
          api: 'Network error. Please check your connection and try again.'
        });
      } else {
        setErrors({
          api: errorInfo.message
        });
      }
      
      console.error('Prescreening test submission error:', errorInfo);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfoStep formData={formData} handleChange={handleChange} errors={errors} />;
      case 1:
        return <MotivationAcademicStep formData={formData} handleChange={handleChange} errors={errors} />;
      case 2:
        return <AchievementsStep formData={formData} handleChange={handleChange} errors={errors} />;
      case 3:
        return <TechnicalProficiencyStep formData={formData} handleChange={handleChange} errors={errors} />;
      case 4:
        return <CommunicationLearningStep formData={formData} handleChange={handleChange} errors={errors} />;
      case 5:
        return <ResultsStep apiResponse={apiResponse} />;
      default:
        return <Typography>Unknown step</Typography>;
    }
  };

  return (
    <Box className={classes.root}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        className={classes.homeButton}
      >
        Back to Home
      </Button>

      <Container maxWidth="lg">
        <Typography variant="h1" className={classes.pageTitle}>
          Pre-screening <span>Assessment</span>
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Complete this comprehensive assessment to evaluate your readiness for our IT program.
          This will help us understand your background, motivation, and technical proficiency.
        </Typography>

        <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
          {/* Desktop/Tablet Stepper */}
          <Box className={classes.customStepper}>
            {steps.map((label, index) => (
              <Box key={label} className={classes.stepItem}>
                <Box className={classes.stepConnection}>
                  <Box 
                    className={`${classes.stepCircle} ${
                      index === activeStep 
                        ? classes.activeStep 
                        : index < activeStep 
                        ? classes.completedStep 
                        : classes.inactiveStep
                    }`}
                  >
                    {index + 1}
                  </Box>
                  {index < steps.length - 1 && (
                    <Box className={classes.stepLine} />
                  )}
                </Box>
                <Typography 
                  className={`${classes.stepLabel} ${
                    index === activeStep 
                      ? classes.activeStepLabel 
                      : index < activeStep 
                      ? classes.completedStepLabel 
                      : classes.inactiveStepLabel
                  }`}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Mobile Step Header */}
          <Box className={classes.mobileStepHeader}>
            <Typography className={classes.mobileStepTitle}>
              {steps[activeStep]}
            </Typography>
            <Typography className={classes.mobileStepProgress}>
              Step {activeStep + 1} of {steps.length}
            </Typography>
          </Box>

          <Box className={classes.stepContent}>
            {renderStepContent(activeStep)}

            {activeStep < steps.length - 1 && (
              <Box className={classes.buttonContainer}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={`${classes.button} ${classes.backButton}`}
                >
                  Back
                </Button>

                {isSubmitting ? (
                  <CircularProgress className={classes.progress} size={24} />
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    className={`${classes.button} ${
                      activeStep === steps.length - 2 ? classes.submitButton : classes.nextButton
                    }`}
                  >
                    {activeStep === steps.length - 2 ? 'Submit Assessment' : 'Next'}
                  </Button>
                )}
              </Box>
            )}

            {errors.api && (
              <Typography className={classes.errorMessage}>
                {errors.api}
              </Typography>
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default PreScreeningTest;