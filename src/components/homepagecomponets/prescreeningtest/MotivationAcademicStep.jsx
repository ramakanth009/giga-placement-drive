// import React from 'react';
// import { 
//   Box, 
//   Typography, 
//   TextField, 
//   Slider, 
//   FormControlLabel, 
//   Checkbox, 
//   Collapse 
// } from '@mui/material';
// import { makeStyles } from '@mui/styles';

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
//   textField: {
//     marginBottom: '25px !important',
//     '& .MuiOutlinedInput-root': {
//       '&:hover fieldset': {
//         borderColor: '#2A2B6A',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: '#2A2B6A',
//       },
//     },
//     '& .MuiInputLabel-root': {
//       '&.Mui-focused': {
//         color: '#2A2B6A',
//       },
//     },
//     '@media (max-width: 600px)': {
//       marginBottom: '20px !important',
//     },
//   },
//   requiredField: {
//     '& .MuiInputLabel-root': {
//       '&::after': {
//         content: '" *"',
//         color: '#e53935',
//       },
//     },
//   },
//   sliderContainer: {
//     padding: '20px',
//     backgroundColor: '#f8f9fc',
//     borderRadius: '12px',
//     marginBottom: '25px',
//     '@media (max-width: 600px)': {
//       padding: '15px',
//       marginBottom: '20px',
//     },
//   },
//   sliderLabel: {
//     fontSize: '1rem !important',
//     fontWeight: '500 !important',
//     color: '#333 !important',
//     marginBottom: '15px !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.95rem !important',
//       marginBottom: '12px !important',
//     },
//   },
//   sliderValue: {
//     fontSize: '1.2rem !important',
//     fontWeight: 'bold !important',
//     color: '#2A2B6A !important',
//     textAlign: 'center',
//     marginTop: '10px !important',
//   },
//   slider: {
//     color: '#2A2B6A !important',
//     '& .MuiSlider-thumb': {
//       backgroundColor: '#2A2B6A',
//       '&:hover': {
//         boxShadow: '0px 4px 8px rgba(42, 43, 106, 0.16)',
//       },
//     },
//     '& .MuiSlider-track': {
//       backgroundColor: '#2A2B6A',
//     },
//     '& .MuiSlider-rail': {
//       backgroundColor: '#e0e4e7',
//     },
//   },
//   checkboxContainer: {
//     marginBottom: '20px',
//     '& .MuiCheckbox-root': {
//       color: '#2A2B6A',
//       '&.Mui-checked': {
//         color: '#2A2B6A',
//       },
//     },
//   },
//   gapExplanation: {
//     marginTop: '15px',
//     padding: '20px',
//     backgroundColor: '#fff8e1',
//     borderRadius: '8px',
//     border: '1px solid #ffd54f',
//     '@media (max-width: 600px)': {
//       padding: '15px',
//       marginTop: '12px',
//     },
//   },
// });

// const MotivationAcademicStep = ({ formData, handleChange, errors }) => {
//   const classes = useStyles();

//   const handleSliderChange = (event, newValue) => {
//     handleChange('academic_performance', newValue);
//   };

//   const handleGapChange = (event) => {
//     const hasGap = event.target.checked;
//     handleChange('education_gap.has_gap', hasGap);
//     if (!hasGap) {
//       handleChange('education_gap.explanation', '');
//     }
//   };

//   return (
//     <Box>
//       <Box className={classes.section}>
//         <Typography variant="h2" className={classes.sectionTitle}>
//           Motivation & Academic Background
//         </Typography>
//         <Typography variant="body1" className={classes.infoText}>
//           Help us understand your motivation for pursuing a career in IT and your academic background.
//         </Typography>
        
//         <TextField
//           label="Why do you want to pursue a career in IT?"
//           variant="outlined"
//           fullWidth
//           multiline
//           rows={6}
//           value={formData.motivation_narrative}
//           onChange={(e) => handleChange('motivation_narrative', e.target.value)}
//           error={Boolean(errors.motivation_narrative)}
//           helperText={errors.motivation_narrative || "Share your passion, goals, and what drives you towards technology (minimum 50 characters)"}
//           className={`${classes.textField} ${classes.requiredField}`}
//           placeholder="e.g. I've always been fascinated by how technology can solve real-world problems..."
//         />
        
//         <Box className={classes.subsectionTitle}>
//           <Typography variant="h3" className={classes.subsectionTitle}>
//             Academic Performance
//           </Typography>
//         </Box>
        
//         <Box className={classes.sliderContainer}>
//           <Typography className={classes.sliderLabel}>
//             Overall Academic Performance (Percentage)
//           </Typography>
//           <Slider
//             value={formData.academic_performance}
//             onChange={handleSliderChange}
//             valueLabelDisplay="auto"
//             step={1}
//             marks
//             min={0}
//             max={100}
//             className={classes.slider}
//           />
//           <Typography className={classes.sliderValue}>
//             {formData.academic_performance}%
//           </Typography>
//         </Box>
        
//         <Box className={classes.checkboxContainer}>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={formData.education_gap.has_gap}
//                 onChange={handleGapChange}
//               />
//             }
//             label="I have a gap in my education (gap year, break from studies, etc.)"
//           />
//         </Box>
        
//         <Collapse in={formData.education_gap.has_gap}>
//           <Box className={classes.gapExplanation}>
//             <TextField
//               label="Please explain your education gap"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={4}
//               value={formData.education_gap.explanation}
//               onChange={(e) => handleChange('education_gap.explanation', e.target.value)}
//               error={Boolean(errors['education_gap.explanation'])}
//               helperText={errors['education_gap.explanation'] || "Briefly explain the reason for the gap and what you did during this time"}
//               className={classes.textField}
//               placeholder="e.g. I took a gap year to gain work experience and better understand my career goals..."
//             />
//           </Box>
//         </Collapse>
//       </Box>
      
//       <Box className={classes.section}>
//         <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
//           Step 2 of 5: Share your motivation and academic background.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default MotivationAcademicStep;
import React from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Slider, 
  FormControlLabel, 
  Checkbox, 
  Collapse 
} from '@mui/material';
import { makeStyles } from '@mui/styles';

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
  textField: {
    marginBottom: '25px !important',
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#2A2B6A',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2A2B6A',
      },
    },
    '& .MuiInputLabel-root': {
      '&.Mui-focused': {
        color: '#2A2B6A',
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
    '@media (max-width: 1200px)': {
      marginBottom: '23px !important',
    },
    '@media (max-width: 960px)': {
      marginBottom: '22px !important',
    },
    '@media (max-width: 600px)': {
      marginBottom: '20px !important',
    },
    '@media (max-width: 480px)': {
      marginBottom: '18px !important',
    },
    '@media (max-width: 375px)': {
      marginBottom: '15px !important',
    },
  },
  requiredField: {
    '& .MuiInputLabel-root': {
      '&::after': {
        content: '" *"',
        color: '#e53935',
      },
    },
  },
  sliderContainer: {
    padding: '20px',
    backgroundColor: '#f8f9fc',
    borderRadius: '12px',
    marginBottom: '25px',
    '@media (max-width: 1200px)': {
      padding: '18px',
      marginBottom: '23px',
    },
    '@media (max-width: 960px)': {
      padding: '16px',
      marginBottom: '22px',
    },
    '@media (max-width: 600px)': {
      padding: '15px',
      marginBottom: '20px',
    },
    '@media (max-width: 480px)': {
      padding: '12px',
      marginBottom: '18px',
      borderRadius: '10px',
    },
    '@media (max-width: 375px)': {
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '8px',
    },
  },
  sliderLabel: {
    fontSize: '1rem !important',
    fontWeight: '500 !important',
    color: '#333 !important',
    marginBottom: '15px !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.98rem !important',
      marginBottom: '14px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.95rem !important',
      marginBottom: '13px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.92rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      marginBottom: '8px !important',
    },
  },
  sliderValue: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginTop: '10px !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.15rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.05rem !important',
      marginTop: '8px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1rem !important',
      marginTop: '6px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.95rem !important',
      marginTop: '5px !important',
    },
  },
  slider: {
    color: '#2A2B6A !important',
    '& .MuiSlider-thumb': {
      backgroundColor: '#2A2B6A',
      '&:hover': {
        boxShadow: '0px 4px 8px rgba(42, 43, 106, 0.16)',
      },
      '@media (max-width: 480px)': {
        width: '18px',
        height: '18px',
      },
      '@media (max-width: 375px)': {
        width: '16px',
        height: '16px',
      },
    },
    '& .MuiSlider-track': {
      backgroundColor: '#2A2B6A',
    },
    '& .MuiSlider-rail': {
      backgroundColor: '#e0e4e7',
    },
    '& .MuiSlider-mark': {
      '@media (max-width: 480px)': {
        height: '4px',
      },
      '@media (max-width: 375px)': {
        height: '3px',
      },
    },
    '& .MuiSlider-markLabel': {
      '@media (max-width: 480px)': {
        fontSize: '0.7rem !important',
      },
      '@media (max-width: 375px)': {
        fontSize: '0.65rem !important',
      },
    },
  },
  checkboxContainer: {
    marginBottom: '20px',
    '& .MuiCheckbox-root': {
      color: '#2A2B6A',
      '&.Mui-checked': {
        color: '#2A2B6A',
      },
      '@media (max-width: 480px)': {
        padding: '6px',
      },
      '@media (max-width: 375px)': {
        padding: '4px',
      },
    },
    '& .MuiFormControlLabel-label': {
      '@media (max-width: 480px)': {
        fontSize: '0.9rem !important',
      },
      '@media (max-width: 375px)': {
        fontSize: '0.85rem !important',
      },
    },
    '@media (max-width: 1200px)': {
      marginBottom: '18px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '16px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '15px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '12px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '10px',
    },
  },
  gapExplanation: {
    marginTop: '15px',
    padding: '20px',
    backgroundColor: '#fff8e1',
    borderRadius: '8px',
    border: '1px solid #ffd54f',
    '@media (max-width: 1200px)': {
      marginTop: '14px',
      padding: '18px',
    },
    '@media (max-width: 960px)': {
      marginTop: '13px',
      padding: '16px',
    },
    '@media (max-width: 600px)': {
      marginTop: '12px',
      padding: '15px',
    },
    '@media (max-width: 480px)': {
      marginTop: '10px',
      padding: '12px',
    },
    '@media (max-width: 375px)': {
      marginTop: '8px',
      padding: '10px',
    },
  },
});

const MotivationAcademicStep = ({ formData, handleChange, errors }) => {
  const classes = useStyles();

  const handleSliderChange = (event, newValue) => {
    handleChange('academic_performance', newValue);
  };

  const handleGapChange = (event) => {
    const hasGap = event.target.checked;
    handleChange('education_gap.has_gap', hasGap);
    if (!hasGap) {
      handleChange('education_gap.explanation', '');
    }
  };

  return (
    <Box>
      <Box className={classes.section}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Motivation & Academic Background
        </Typography>
        <Typography variant="body1" className={classes.infoText}>
          Help us understand your motivation for pursuing a career in IT and your academic background.
        </Typography>
        
        <TextField
          label="Why do you want to pursue a career in IT?"
          variant="outlined"
          fullWidth
          multiline
          rows={6}
          value={formData.motivation_narrative}
          onChange={(e) => handleChange('motivation_narrative', e.target.value)}
          error={Boolean(errors.motivation_narrative)}
          helperText={errors.motivation_narrative || "Share your passion, goals, and what drives you towards technology (minimum 50 characters)"}
          className={`${classes.textField} ${classes.requiredField}`}
          placeholder="e.g. I've always been fascinated by how technology can solve real-world problems..."
        />
        
        <Box className={classes.subsectionTitle}>
          <Typography variant="h3" className={classes.subsectionTitle}>
            Academic Performance
          </Typography>
        </Box>
        
        <Box className={classes.sliderContainer}>
          <Typography className={classes.sliderLabel}>
            Overall Academic Performance (Percentage)
          </Typography>
          <Slider
            value={formData.academic_performance}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={100}
            className={classes.slider}
          />
          <Typography className={classes.sliderValue}>
            {formData.academic_performance}%
          </Typography>
        </Box>
        
        <Box className={classes.checkboxContainer}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.education_gap.has_gap}
                onChange={handleGapChange}
              />
            }
            label="I have a gap in my education (gap year, break from studies, etc.)"
          />
        </Box>
        
        <Collapse in={formData.education_gap.has_gap}>
          <Box className={classes.gapExplanation}>
            <TextField
              label="Please explain your education gap"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.education_gap.explanation}
              onChange={(e) => handleChange('education_gap.explanation', e.target.value)}
              error={Boolean(errors['education_gap.explanation'])}
              helperText={errors['education_gap.explanation'] || "Briefly explain the reason for the gap and what you did during this time"}
              className={classes.textField}
              placeholder="e.g. I took a gap year to gain work experience and better understand my career goals..."
            />
          </Box>
        </Collapse>
      </Box>
      
      <Box className={classes.section}>
        <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
          Step 2 of 5: Share your motivation and academic background.
        </Typography>
      </Box>
    </Box>
  );
};

export default MotivationAcademicStep;