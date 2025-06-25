// import React from 'react';
// import { Box, Typography, TextField } from '@mui/material';
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
//   infoText: {
//     fontSize: '1rem !important',
//     color: '#666 !important',
//     lineHeight: '1.6 !important',
//     marginBottom: '30px !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.9rem !important',
//       marginBottom: '25px !important',
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
//           Let's start with some basic information about you. This helps us personalize your learning experience.
//         </Typography>
        
//         <TextField
//           label="Full Name"
//           variant="outlined"
//           fullWidth
//           value={formData.name}
//           onChange={(e) => handleChange('name', e.target.value)}
//           error={Boolean(errors.name)}
//           helperText={errors.name}
//           className={`${classes.textField} ${classes.requiredField}`}
//           placeholder="Enter your full name"
//         />
        
//         <TextField
//           label="Email Address"
//           variant="outlined"
//           fullWidth
//           type="email"
//           value={formData.email}
//           onChange={(e) => handleChange('email', e.target.value)}
//           error={Boolean(errors.email)}
//           helperText={errors.email || "We'll use this to send you important updates about your application"}
//           className={`${classes.textField} ${classes.requiredField}`}
//           placeholder="Enter your email address"
//         />
//       </Box>
      
//       <Box className={classes.section}>
//         <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
//           Step 1 of 5: Please provide your basic contact information.
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
  infoText: {
    fontSize: '1rem !important',
    color: '#666 !important',
    lineHeight: '1.6 !important',
    marginBottom: '30px !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.98rem !important',
      marginBottom: '28px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.95rem !important',
      marginBottom: '25px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.88rem !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem !important',
      marginBottom: '15px !important',
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
      '@media (max-width: 480px)': {
        fontSize: '0.9rem !important',
      },
      '@media (max-width: 375px)': {
        fontSize: '0.85rem !important',
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
    '& .MuiFormHelperText-root': {
      '@media (max-width: 480px)': {
        fontSize: '0.8rem !important',
      },
      '@media (max-width: 375px)': {
        fontSize: '0.75rem !important',
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
        <Typography variant="body2" sx={{ 
          color: '#666', 
          fontStyle: 'italic',
          '@media (max-width: 480px)': {
            fontSize: '0.8rem !important',
          },
          '@media (max-width: 375px)': {
            fontSize: '0.75rem !important',
          },
        }}>
          Step 1 of 5: Please provide your basic contact information.
        </Typography>
      </Box>
    </Box>
  );
};

export default PersonalInfoStep;