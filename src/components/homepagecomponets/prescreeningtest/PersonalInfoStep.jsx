// import React from 'react';
// import { Box, Typography, TextField } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   section: {
//     marginBottom: '30px',
//   },
//   sectionTitle: {
//     fontSize: '1.5rem !important',
//     fontWeight: '600 !important',
//     marginBottom: '15px !important',
//     color: '#2A2B6A !important',
//     '@media (max-width: 600px)': {
//       fontSize: '1.3rem !important',
//       marginBottom: '12px !important',
//     },
//   },
//   infoText: {
//     color: '#666 !important',
//     marginBottom: '20px !important',
//     fontSize: '0.95rem !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.9rem !important',
//       marginBottom: '15px !important',
//     },
//   },
//   errorText: {
//     color: '#e53935 !important',
//     fontSize: '0.8rem !important',
//     marginTop: '4px !important',
//   },
//   textField: {
//     marginBottom: '20px !important',
//     '& .MuiOutlinedInput-root': {
//       '&:hover fieldset': {
//         borderColor: '#2A2B6A',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: '#2A2B6A',
//       },
//     },
//   },
// });

// const PersonalInfoStep = ({ formData, handleChange, errors }) => {
//   const classes = useStyles();

//   return (
//     <Box>
//       <Box className={classes.section}>
//         <Typography variant="h2" className={classes.sectionTitle}>
//           Personal Information
//         </Typography>
//         <Typography variant="body1" className={classes.infoText}>
//           Please provide your basic personal details to get started.
//         </Typography>
        
//         <TextField
//           label="Full Name"
//           variant="outlined"
//           fullWidth
//           value={formData.name}
//           onChange={(e) => handleChange('name', e.target.value)}
//           error={Boolean(errors.name)}
//           helperText={errors.name || ''}
//           className={classes.textField}
//           placeholder="e.g. John Smith"
//           required
//         />
        
//         <TextField
//           label="Email Address"
//           variant="outlined"
//           fullWidth
//           type="email"
//           value={formData.email}
//           onChange={(e) => handleChange('email', e.target.value)}
//           error={Boolean(errors.email)}
//           helperText={errors.email || ''}
//           className={classes.textField}
//           placeholder="e.g. john.smith@example.com"
//           required
//         />
//       </Box>
      
//       <Box className={classes.section}>
//         <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
//           Step 1 of 5: Complete your personal information to continue with the assessment.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default PersonalInfoStep;
import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  section: {
    marginBottom: '40px',
    '@media (max-width: 600px)': {
      marginBottom: '30px',
    },
  },
  sectionTitle: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.5rem !important',
      marginBottom: '12px !important',
    },
  },
  infoText: {
    fontSize: '1rem !important',
    color: '#666 !important',
    lineHeight: '1.6 !important',
    marginBottom: '30px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      marginBottom: '25px !important',
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
    '@media (max-width: 600px)': {
      marginBottom: '20px !important',
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
});

const PersonalInfoStep = ({ formData, handleChange, errors }) => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.section}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Personal Information
        </Typography>
        <Typography variant="body1" className={classes.infoText}>
          Let's start with some basic information about you. This helps us personalize your learning experience.
        </Typography>
        
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={Boolean(errors.name)}
          helperText={errors.name}
          className={`${classes.textField} ${classes.requiredField}`}
          placeholder="Enter your full name"
        />
        
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email || "We'll use this to send you important updates about your application"}
          className={`${classes.textField} ${classes.requiredField}`}
          placeholder="Enter your email address"
        />
      </Box>
      
      <Box className={classes.section}>
        <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
          Step 1 of 5: Please provide your basic contact information.
        </Typography>
      </Box>
    </Box>
  );
};

export default PersonalInfoStep;