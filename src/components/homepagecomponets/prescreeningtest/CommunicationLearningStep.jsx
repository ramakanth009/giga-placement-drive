// import React from 'react';
// import { 
//   Box, 
//   Typography, 
//   TextField, 
//   IconButton, 
//   RadioGroup, 
//   FormControlLabel, 
//   Radio, 
//   FormControl, 
//   FormLabel, 
//   FormHelperText 
// } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';

// const useStyles = makeStyles({
//   section: {
//     marginBottom: '40px',
//     '@media (max-width: 600px)': {
//       marginBottom: '30px',
//     },
//   },
//   sectionTitle: {
//     fontSize: '1.8rem !important',
//     fontWeight: 'bold !important',
//     color: '#2A2B6A !important',
//     marginBottom: '15px !important',
//     '@media (max-width: 600px)': {
//       fontSize: '1.5rem !important',
//       marginBottom: '12px !important',
//     },
//   },
//   subsectionTitle: {
//     fontSize: '1.3rem !important',
//     fontWeight: '600 !important',
//     color: '#2A2B6A !important',
//     marginBottom: '15px !important',
//     marginTop: '30px !important',
//     '@media (max-width: 600px)': {
//       fontSize: '1.2rem !important',
//       marginBottom: '12px !important',
//       marginTop: '25px !important',
//     },
//   },
//   infoText: {
//     fontSize: '1rem !important',
//     color: '#666 !important',
//     lineHeight: '1.6 !important',
//     marginBottom: '20px !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.9rem !important',
//       marginBottom: '15px !important',
//     },
//   },
//   mcqContainer: {
//     marginBottom: '35px',
//     padding: '25px',
//     backgroundColor: '#f8f9fc',
//     borderRadius: '12px',
//     border: '1px solid #e0e4e7',
//     '@media (max-width: 600px)': {
//       marginBottom: '25px',
//       padding: '20px 15px',
//     },
//   },
//   questionNumber: {
//     fontSize: '1.1rem !important',
//     fontWeight: 'bold !important',
//     color: '#2A2B6A !important',
//     marginBottom: '10px !important',
//   },
//   questionText: {
//     fontSize: '1rem !important',
//     fontWeight: '500 !important',
//     color: '#333 !important',
//     marginBottom: '20px !important',
//     lineHeight: '1.5 !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.95rem !important',
//       marginBottom: '15px !important',
//     },
//   },
//   radioGroup: {
//     '& .MuiFormGroup-root': {
//       gap: '12px',
//     },
//   },
//   radioAnswer: {
//     marginBottom: '8px',
//     '& .MuiFormControlLabel-root': {
//       alignItems: 'flex-start',
//       margin: '0',
//     },
//     '& .MuiRadio-root': {
//       paddingTop: '4px',
//       color: '#2A2B6A',
//     },
//     '& .MuiFormControlLabel-label': {
//       fontSize: '0.95rem !important',
//       lineHeight: '1.4 !important',
//       color: '#333 !important',
//       paddingLeft: '8px',
//       '@media (max-width: 600px)': {
//         fontSize: '0.9rem !important',
//       },
//     },
//   },
//   urlContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '15px',
//     gap: '10px',
//     '@media (max-width: 600px)': {
//       marginBottom: '12px',
//       gap: '8px',
//     },
//   },
//   urlField: {
//     flex: 1,
//     '& .MuiOutlinedInput-root': {
//       '&:hover fieldset': {
//         borderColor: '#2A2B6A',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: '#2A2B6A',
//       },
//     },
//   },
//   textField: {
//     '& .MuiOutlinedInput-root': {
//       '&:hover fieldset': {
//         borderColor: '#2A2B6A',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: '#2A2B6A',
//       },
//     },
//   },
//   addUrlButton: {
//     backgroundColor: '#2A2B6A !important',
//     color: 'white !important',
//     marginTop: '10px',
//     '&:hover': {
//       backgroundColor: '#1A1B4A !important',
//     },
//   },
//   deleteButton: {
//     color: '#e53935 !important',
//   },
//   errorHelper: {
//     color: '#e53935 !important',
//     fontSize: '0.9rem !important',
//     marginTop: '8px !important',
//   },
// });

// // Communication MCQ Questions Reference
// const communicationQuestions = [
//   {
//     id: 'question_1',
//     question: 'When communicating complex technical concepts to non-technical stakeholders, what is the most effective approach?',
//     options: [
//       { value: 'A', label: 'Use detailed technical jargon to demonstrate expertise' },
//       { value: 'B', label: 'Use analogies and simple language while focusing on business impact' },
//       { value: 'C', label: 'Provide extensive documentation for them to read later' },
//       { value: 'D', label: 'Skip technical details entirely and only discuss timelines' }
//     ]
//   },
//   {
//     id: 'question_2',
//     question: 'During a team meeting, a colleague presents an idea you disagree with. What is the best response?',
//     options: [
//       { value: 'A', label: 'Immediately point out why their idea won\'t work' },
//       { value: 'B', label: 'Stay silent to avoid conflict' },
//       { value: 'C', label: 'Ask clarifying questions and present alternative solutions respectfully' },
//       { value: 'D', label: 'Agree publicly but voice concerns privately to your manager' }
//     ]
//   },
//   {
//     id: 'question_3',
//     question: 'When you don\'t understand a requirement given by your manager, what should you do?',
//     options: [
//       { value: 'A', label: 'Make your best guess and proceed with the work' },
//       { value: 'B', label: 'Ask specific questions to clarify the requirements immediately' },
//       { value: 'C', label: 'Research online first and then ask questions if still unclear' },
//       { value: 'D', label: 'Wait for the next team meeting to bring it up' }
//     ]
//   },
//   {
//     id: 'question_4',
//     question: 'How should you handle giving constructive feedback to a team member?',
//     options: [
//       { value: 'A', label: 'Focus on specific behaviors and provide actionable suggestions' },
//       { value: 'B', label: 'Point out personality flaws that need improvement' },
//       { value: 'C', label: 'Only give positive feedback to maintain team harmony' },
//       { value: 'D', label: 'Give feedback publicly so others can learn too' }
//     ]
//   },
//   {
//     id: 'question_5',
//     question: 'What is the most important aspect of written communication in a professional setting?',
//     options: [
//       { value: 'A', label: 'Using impressive vocabulary and complex sentences' },
//       { value: 'B', label: 'Being clear, concise, and actionable' },
//       { value: 'C', label: 'Including as much detail as possible' },
//       { value: 'D', label: 'Following a formal, rigid structure always' }
//     ]
//   }
// ];

// const CommunicationLearningStep = ({ formData, handleChange, errors }) => {
//   const classes = useStyles();

//   const addUrlField = () => {
//     const updatedUrls = [...formData.learning_agility.urls, ''];
//     handleChange('learning_agility.urls', updatedUrls);
//   };

//   const removeUrlField = (index) => {
//     const updatedUrls = formData.learning_agility.urls.filter((_, i) => i !== index);
//     handleChange('learning_agility.urls', updatedUrls);
//   };

//   const updateUrl = (index, value) => {
//     const updatedUrls = [...formData.learning_agility.urls];
//     updatedUrls[index] = value;
//     handleChange('learning_agility.urls', updatedUrls);
//   };

//   const handleMCQChange = (questionId, value) => {
//     handleChange(`communication_mcq.${questionId}`, value);
//   };

//   return (
//     <Box>
//       <Box className={classes.section}>
//         <Typography variant="h2" className={classes.sectionTitle}>
//           Communication & Continuous Learning
//         </Typography>
//         <Typography variant="body1" className={classes.infoText}>
//           Effective communication and continuous learning are essential skills in the IT industry.
//         </Typography>
        
//         <Box className={classes.section}>
//           <Typography variant="h3" className={classes.subsectionTitle}>
//             Communication Skills Assessment
//           </Typography>
//           <Typography variant="body1" className={classes.infoText}>
//             Please answer the following questions to assess your communication skills in professional settings.
//           </Typography>
          
//           {communicationQuestions.map((mcq, index) => (
//             <Box key={mcq.id} className={classes.mcqContainer}>
//               <Typography className={classes.questionNumber}>
//                 Question {index + 1} of {communicationQuestions.length}
//               </Typography>
              
//               <Typography className={classes.questionText}>
//                 {mcq.question}
//               </Typography>
              
//               <FormControl 
//                 component="fieldset" 
//                 error={Boolean(errors.communication_mcq)}
//                 className={classes.radioGroup}
//                 fullWidth
//               >
//                 <RadioGroup
//                   aria-label={`communication-question-${index + 1}`}
//                   name={`communication-question-${index + 1}`}
//                   value={formData.communication_mcq[mcq.id] || ''}
//                   onChange={(e) => handleMCQChange(mcq.id, e.target.value)}
//                 >
//                   {mcq.options.map((option) => (
//                     <Box key={option.value} className={classes.radioAnswer}>
//                       <FormControlLabel
//                         value={option.value}
//                         control={<Radio color="primary" />}
//                         label={`${option.value}. ${option.label}`}
//                       />
//                     </Box>
//                   ))}
//                 </RadioGroup>
//               </FormControl>
//             </Box>
//           ))}
          
//           {errors.communication_mcq && (
//             <Typography className={classes.errorHelper}>
//               {errors.communication_mcq}
//             </Typography>
//           )}
//         </Box>
        
//         <Box className={classes.section}>
//           <Typography variant="h3" className={classes.subsectionTitle}>
//             Learning Agility
//           </Typography>
//           <Typography variant="body1" className={classes.infoText}>
//             Share evidence of your commitment to continuous learning and how you've applied what you've learned.
//           </Typography>
          
//           <Typography variant="subtitle1" sx={{ fontWeight: '500', marginBottom: '10px', color: '#333' }}>
//             URLs to Certificates or Learning Portfolios (Optional)
//           </Typography>
          
//           {formData.learning_agility.urls.map((url, index) => (
//             <Box key={index} className={classes.urlContainer}>
//               <TextField
//                 label={`URL ${index + 1}`}
//                 variant="outlined"
//                 fullWidth
//                 value={url}
//                 onChange={(e) => updateUrl(index, e.target.value)}
//                 placeholder="https://www.example.com/certificate"
//                 className={classes.urlField}
//               />
//               <IconButton 
//                 className={classes.deleteButton}
//                 onClick={() => removeUrlField(index)}
//                 disabled={formData.learning_agility.urls.length === 1 && index === 0}
//               >
//                 <DeleteIcon />
//               </IconButton>
//             </Box>
//           ))}
          
//           <IconButton 
//             onClick={addUrlField}
//             className={classes.addUrlButton}
//             size="small"
//           >
//             <AddIcon />
//           </IconButton>
          
//           <TextField
//             label="Learning Reflection (Optional)"
//             variant="outlined"
//             fullWidth
//             multiline
//             rows={6}
//             value={formData.learning_agility.reflection}
//             onChange={(e) => handleChange('learning_agility.reflection', e.target.value)}
//             error={Boolean(errors['learning_agility.reflection'])}
//             helperText={errors['learning_agility.reflection'] || "Describe how you've applied what you've learned to real-world problems (minimum 50 characters if filled)"}
//             className={classes.textField}
//             placeholder="e.g. The AWS Solutions Architect course challenged me to design scalable systems..."
//             sx={{ marginTop: '20px' }}
//           />
//         </Box>
//       </Box>
      
//       <Box className={classes.section}>
//         <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
//           Step 5 of 5: Complete the assessment by sharing your communication skills and learning approach.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default CommunicationLearningStep;
import React from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  IconButton, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  FormControl, 
  FormLabel, 
  FormHelperText 
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles({
  section: {
    marginBottom: '40px',
    '@media (max-width: 1200px)': {
      marginBottom: '38px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '35px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '25px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '20px',
    },
  },
  sectionTitle: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.7rem !important',
      marginBottom: '14px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.6rem !important',
      marginBottom: '13px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.5rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.3rem !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.2rem !important',
      marginBottom: '8px !important',
    },
  },
  subsectionTitle: {
    fontSize: '1.3rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    marginTop: '30px !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.25rem !important',
      marginBottom: '14px !important',
      marginTop: '28px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.2rem !important',
      marginBottom: '13px !important',
      marginTop: '25px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.15rem !important',
      marginBottom: '12px !important',
      marginTop: '22px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem !important',
      marginBottom: '10px !important',
      marginTop: '20px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.05rem !important',
      marginBottom: '8px !important',
      marginTop: '18px !important',
    },
  },
  infoText: {
    fontSize: '1rem !important',
    color: '#666 !important',
    lineHeight: '1.6 !important',
    marginBottom: '20px !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.98rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.95rem !important',
      marginBottom: '16px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      marginBottom: '15px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.88rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      marginBottom: '10px !important',
    },
  },
  mcqContainer: {
    marginBottom: '35px',
    padding: '25px',
    backgroundColor: '#f8f9fc',
    borderRadius: '12px',
    border: '1px solid #e0e4e7',
    '@media (max-width: 1200px)': {
      marginBottom: '32px',
      padding: '22px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '30px',
      padding: '20px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '25px',
      padding: '18px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '20px',
      padding: '15px',
      borderRadius: '10px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '18px',
      padding: '12px',
      borderRadius: '8px',
    },
  },
  questionNumber: {
    fontSize: '1.1rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '10px !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.08rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.05rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.98rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.95rem !important',
      marginBottom: '5px !important',
    },
  },
  questionText: {
    fontSize: '1rem !important',
    fontWeight: '500 !important',
    color: '#333 !important',
    marginBottom: '20px !important',
    lineHeight: '1.5 !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.98rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.95rem !important',
      marginBottom: '16px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.92rem !important',
      marginBottom: '15px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.88rem !important',
      marginBottom: '10px !important',
    },
  },
  radioGroup: {
    '& .MuiFormGroup-root': {
      gap: '12px',
      '@media (max-width: 480px)': {
        gap: '10px',
      },
      '@media (max-width: 375px)': {
        gap: '8px',
      },
    },
  },
  radioAnswer: {
    marginBottom: '8px',
    '& .MuiFormControlLabel-root': {
      alignItems: 'flex-start',
      margin: '0',
    },
    '& .MuiRadio-root': {
      paddingTop: '4px',
      color: '#2A2B6A',
      '@media (max-width: 480px)': {
        paddingTop: '2px',
      },
      '@media (max-width: 375px)': {
        paddingTop: '1px',
      },
    },
    '& .MuiFormControlLabel-label': {
      fontSize: '0.95rem !important',
      lineHeight: '1.4 !important',
      color: '#333 !important',
      paddingLeft: '8px',
      '@media (max-width: 1200px)': {
        fontSize: '0.92rem !important',
        paddingLeft: '7px',
      },
      '@media (max-width: 960px)': {
        fontSize: '0.9rem !important',
        paddingLeft: '6px',
      },
      '@media (max-width: 600px)': {
        fontSize: '0.88rem !important',
        paddingLeft: '5px',
      },
      '@media (max-width: 480px)': {
        fontSize: '0.85rem !important',
        paddingLeft: '4px',
      },
      '@media (max-width: 375px)': {
        fontSize: '0.82rem !important',
        paddingLeft: '3px',
      },
    },
    '@media (max-width: 480px)': {
      marginBottom: '6px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '4px',
    },
  },
  urlContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    gap: '10px',
    '@media (max-width: 1200px)': {
      marginBottom: '14px',
      gap: '9px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '13px',
      gap: '8px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '12px',
      gap: '7px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '10px',
      gap: '6px',
      flexDirection: 'column',
      alignItems: 'stretch',
    },
    '@media (max-width: 375px)': {
      marginBottom: '8px',
      gap: '5px',
    },
  },
  urlField: {
    flex: 1,
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#2A2B6A',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2A2B6A',
      },
    },
    '& .MuiInputBase-input': {
      '@media (max-width: 480px)': {
        fontSize: '0.9rem !important',
      },
      '@media (max-width: 375px)': {
        fontSize: '0.85rem !important',
      },
    },
    '& .MuiInputLabel-root': {
      '@media (max-width: 480px)': {
        fontSize: '0.9rem !important',
      },
      '@media (max-width: 375px)': {
        fontSize: '0.85rem !important',
      },
    },
    '@media (max-width: 480px)': {
      flex: 'none',
    },
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#2A2B6A',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2A2B6A',
      },
    },
    '& .MuiInputBase-input': {
      '@media (max-width: 480px)': {
        fontSize: '0.9rem !important',
      },
      '@media (max-width: 375px)': {
        fontSize: '0.85rem !important',
      },
    },
    '& .MuiInputLabel-root': {
      '@media (max-width: 480px)': {
        fontSize: '0.9rem !important',
      },
      '@media (max-width: 375px)': {
        fontSize: '0.85rem !important',
      },
    },
  },
  addUrlButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: '#1A1B4A !important',
    },
    '@media (max-width: 480px)': {
      marginTop: '8px',
      width: '100%',
      justifyContent: 'center',
    },
    '@media (max-width: 375px)': {
      marginTop: '6px',
    },
  },
  deleteButton: {
    color: '#e53935 !important',
    '@media (max-width: 480px)': {
      alignSelf: 'center',
      marginTop: '5px',
    },
  },
  errorHelper: {
    color: '#e53935 !important',
    fontSize: '0.9rem !important',
    marginTop: '8px !important',
    '@media (max-width: 480px)': {
      fontSize: '0.85rem !important',
      marginTop: '6px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.8rem !important',
      marginTop: '4px !important',
    },
  },
});

// Communication MCQ Questions Reference
const communicationQuestions = [
  {
    id: 'question_1',
    question: 'When communicating complex technical concepts to non-technical stakeholders, what is the most effective approach?',
    options: [
      { value: 'A', label: 'Use detailed technical jargon to demonstrate expertise' },
      { value: 'B', label: 'Use analogies and simple language while focusing on business impact' },
      { value: 'C', label: 'Provide extensive documentation for them to read later' },
      { value: 'D', label: 'Skip technical details entirely and only discuss timelines' }
    ]
  },
  {
    id: 'question_2',
    question: 'During a team meeting, a colleague presents an idea you disagree with. What is the best response?',
    options: [
      { value: 'A', label: 'Immediately point out why their idea won\'t work' },
      { value: 'B', label: 'Stay silent to avoid conflict' },
      { value: 'C', label: 'Ask clarifying questions and present alternative solutions respectfully' },
      { value: 'D', label: 'Agree publicly but voice concerns privately to your manager' }
    ]
  },
  {
    id: 'question_3',
    question: 'When you don\'t understand a requirement given by your manager, what should you do?',
    options: [
      { value: 'A', label: 'Make your best guess and proceed with the work' },
      { value: 'B', label: 'Ask specific questions to clarify the requirements immediately' },
      { value: 'C', label: 'Research online first and then ask questions if still unclear' },
      { value: 'D', label: 'Wait for the next team meeting to bring it up' }
    ]
  },
  {
    id: 'question_4',
    question: 'How should you handle giving constructive feedback to a team member?',
    options: [
      { value: 'A', label: 'Focus on specific behaviors and provide actionable suggestions' },
      { value: 'B', label: 'Point out personality flaws that need improvement' },
      { value: 'C', label: 'Only give positive feedback to maintain team harmony' },
      { value: 'D', label: 'Give feedback publicly so others can learn too' }
    ]
  },
  {
    id: 'question_5',
    question: 'What is the most important aspect of written communication in a professional setting?',
    options: [
      { value: 'A', label: 'Using impressive vocabulary and complex sentences' },
      { value: 'B', label: 'Being clear, concise, and actionable' },
      { value: 'C', label: 'Including as much detail as possible' },
      { value: 'D', label: 'Following a formal, rigid structure always' }
    ]
  }
];

const CommunicationLearningStep = ({ formData, handleChange, errors }) => {
  const classes = useStyles();

  const addUrlField = () => {
    const updatedUrls = [...formData.learning_agility.urls, ''];
    handleChange('learning_agility.urls', updatedUrls);
  };

  const removeUrlField = (index) => {
    const updatedUrls = formData.learning_agility.urls.filter((_, i) => i !== index);
    handleChange('learning_agility.urls', updatedUrls);
  };

  const updateUrl = (index, value) => {
    const updatedUrls = [...formData.learning_agility.urls];
    updatedUrls[index] = value;
    handleChange('learning_agility.urls', updatedUrls);
  };

  const handleMCQChange = (questionId, value) => {
    handleChange(`communication_mcq.${questionId}`, value);
  };

  return (
    <Box>
      <Box className={classes.section}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Communication & Continuous Learning
        </Typography>
        <Typography variant="body1" className={classes.infoText}>
          Effective communication and continuous learning are essential skills in the IT industry.
        </Typography>
        
        <Box className={classes.section}>
          <Typography variant="h3" className={classes.subsectionTitle}>
            Communication Skills Assessment
          </Typography>
          <Typography variant="body1" className={classes.infoText}>
            Please answer the following questions to assess your communication skills in professional settings.
          </Typography>
          
          {communicationQuestions.map((mcq, index) => (
            <Box key={mcq.id} className={classes.mcqContainer}>
              <Typography className={classes.questionNumber}>
                Question {index + 1} of {communicationQuestions.length}
              </Typography>
              
              <Typography className={classes.questionText}>
                {mcq.question}
              </Typography>
              
              <FormControl 
                component="fieldset" 
                error={Boolean(errors.communication_mcq)}
                className={classes.radioGroup}
                fullWidth
              >
                <RadioGroup
                  aria-label={`communication-question-${index + 1}`}
                  name={`communication-question-${index + 1}`}
                  value={formData.communication_mcq[mcq.id] || ''}
                  onChange={(e) => handleMCQChange(mcq.id, e.target.value)}
                >
                  {mcq.options.map((option) => (
                    <Box key={option.value} className={classes.radioAnswer}>
                      <FormControlLabel
                        value={option.value}
                        control={<Radio color="primary" />}
                        label={`${option.value}. ${option.label}`}
                      />
                    </Box>
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
          ))}
          
          {errors.communication_mcq && (
            <Typography className={classes.errorHelper}>
              {errors.communication_mcq}
            </Typography>
          )}
        </Box>
        
        <Box className={classes.section}>
          <Typography variant="h3" className={classes.subsectionTitle}>
            Learning Agility
          </Typography>
          <Typography variant="body1" className={classes.infoText}>
            Share evidence of your commitment to continuous learning and how you've applied what you've learned.
          </Typography>
          
          <Typography variant="subtitle1" sx={{ fontWeight: '500', marginBottom: '10px', color: '#333' }}>
            URLs to Certificates or Learning Portfolios (Optional)
          </Typography>
          
          {formData.learning_agility.urls.map((url, index) => (
            <Box key={index} className={classes.urlContainer}>
              <TextField
                label={`URL ${index + 1}`}
                variant="outlined"
                fullWidth
                value={url}
                onChange={(e) => updateUrl(index, e.target.value)}
                placeholder="https://www.example.com/certificate"
                className={classes.urlField}
              />
              <IconButton 
                className={classes.deleteButton}
                onClick={() => removeUrlField(index)}
                disabled={formData.learning_agility.urls.length === 1 && index === 0}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
          
          <IconButton 
            onClick={addUrlField}
            className={classes.addUrlButton}
            size="small"
          >
            <AddIcon />
          </IconButton>
          
          <TextField
            label="Learning Reflection (Optional)"
            variant="outlined"
            fullWidth
            multiline
            rows={6}
            value={formData.learning_agility.reflection}
            onChange={(e) => handleChange('learning_agility.reflection', e.target.value)}
            error={Boolean(errors['learning_agility.reflection'])}
            helperText={errors['learning_agility.reflection'] || "Describe how you've applied what you've learned to real-world problems (minimum 50 characters if filled)"}
            className={classes.textField}
            placeholder="e.g. The AWS Solutions Architect course challenged me to design scalable systems..."
            sx={{ marginTop: '20px' }}
          />
        </Box>
      </Box>
      
      <Box className={classes.section}>
        <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
          Step 5 of 5: Complete the assessment by sharing your communication skills and learning approach.
        </Typography>
      </Box>
    </Box>
  );
};

export default CommunicationLearningStep;