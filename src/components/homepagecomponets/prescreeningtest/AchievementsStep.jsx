// import React from 'react';
// import { Box, Typography, TextField, IconButton } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

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
//   textField: {
//     marginBottom: '20px !important',
//     marginTop: '20px !important',
//     '& .MuiOutlinedInput-root': {
//       '&:hover fieldset': {
//         borderColor: '#2A2B6A',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: '#2A2B6A',
//       },
//     },
//   },
//   errorText: {
//     color: '#e53935 !important',
//     fontSize: '0.8rem !important',
//     marginTop: '4px !important',
//   },
//   counterContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '15px',
//     '@media (max-width: 600px)': {
//       marginBottom: '12px',
//     },
//   },
//   counterLabel: {
//     flex: 1,
//     fontSize: '1rem !important',
//     fontWeight: '500 !important',
//     color: '#333 !important',
//   },
//   counterValue: {
//     margin: '0 15px !important',
//     minWidth: '30px',
//     textAlign: 'center',
//     fontSize: '1.2rem !important',
//     fontWeight: '600 !important',
//     color: '#2A2B6A !important',
//   },
//   counterButton: {
//     color: '#2A2B6A !important',
//     backgroundColor: 'rgba(42, 43, 106, 0.05) !important',
//     '&:hover': {
//       backgroundColor: 'rgba(42, 43, 106, 0.1) !important',
//     },
//     '&.Mui-disabled': {
//       color: 'rgba(0, 0, 0, 0.26) !important',
//     },
//   },
//   achievementsGrid: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '20px',
//     marginTop: '20px',
//     '@media (max-width: 600px)': {
//       gridTemplateColumns: '1fr',
//       gap: '15px',
//     },
//   },
// });

// const AchievementsStep = ({ formData, handleChange, errors }) => {
//   const classes = useStyles();

//   const incrementCounter = (field) => {
//     const currentValue = formData.achievements[field];
//     handleChange(`achievements.${field}`, currentValue + 1);
//   };

//   const decrementCounter = (field) => {
//     const currentValue = formData.achievements[field];
//     if (currentValue > 0) {
//       handleChange(`achievements.${field}`, currentValue - 1);
//     }
//   };

//   const counterFields = [
//     { field: 'hackathons', label: 'Hackathons Participated' },
//     { field: 'competitions', label: 'Tech Competitions' },
//     { field: 'certifications', label: 'IT Certifications Obtained' },
//     { field: 'oss_contributions', label: 'Open Source Contributions' },
//   ];

//   return (
//     <Box>
//       <Box className={classes.section}>
//         <Typography variant="h2" className={classes.sectionTitle}>
//           Technical Achievements
//         </Typography>
//         <Typography variant="body1" className={classes.infoText}>
//           Please tell us about your technical achievements and experiences. These help demonstrate your practical skills and commitment to IT.
//         </Typography>
        
//         <Box className={classes.achievementsGrid}>
//           {counterFields.map((item) => (
//             <Box key={item.field} className={classes.counterContainer}>
//               <Typography className={classes.counterLabel}>
//                 {item.label}
//               </Typography>
//               <IconButton 
//                 className={classes.counterButton}
//                 onClick={() => decrementCounter(item.field)}
//                 disabled={formData.achievements[item.field] <= 0}
//                 size="small"
//               >
//                 <RemoveIcon />
//               </IconButton>
//               <Typography className={classes.counterValue}>
//                 {formData.achievements[item.field]}
//               </Typography>
//               <IconButton 
//                 className={classes.counterButton}
//                 onClick={() => incrementCounter(item.field)}
//                 size="small"
//               >
//                 <AddIcon />
//               </IconButton>
//             </Box>
//           ))}
//         </Box>
        
//         <TextField
//           label="Achievement Justification (Optional)"
//           variant="outlined"
//           fullWidth
//           multiline
//           rows={6}
//           value={formData.achievement_justification}
//           onChange={(e) => handleChange('achievement_justification', e.target.value)}
//           error={Boolean(errors.achievement_justification)}
//           helperText={errors.achievement_justification || 'Provide details about your most significant technical achievements (minimum 50 characters if filled)'}
//           className={classes.textField}
//           placeholder="e.g. During the regional hackathon last year, I led a team that developed an AI-powered accessibility app..."
//         />
//       </Box>
      
//       <Box className={classes.section}>
//         <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
//           Step 3 of 5: Share your technical achievements and experiences.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default AchievementsStep;
import React from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
  achievementGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
    marginBottom: '35px',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gap: '20px',
      marginBottom: '30px',
    },
  },
  achievementCard: {
    padding: '25px',
    backgroundColor: '#f8f9fc',
    borderRadius: '12px',
    border: '1px solid #e0e4e7',
    '@media (max-width: 600px)': {
      padding: '20px',
    },
  },
  achievementTitle: {
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    marginBottom: '10px !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
  },
  achievementDescription: {
    fontSize: '0.9rem !important',
    color: '#666 !important',
    marginBottom: '15px !important',
    lineHeight: '1.4 !important',
  },
  counterContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    '@media (max-width: 600px)': {
      gap: '12px',
    },
  },
  counterButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    width: '36px !important',
    height: '36px !important',
    '&:hover': {
      backgroundColor: '#1A1B4A !important',
    },
    '&:disabled': {
      backgroundColor: '#e0e4e7 !important',
      color: '#999 !important',
    },
    '@media (max-width: 600px)': {
      width: '32px !important',
      height: '32px !important',
    },
  },
  counterValue: {
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    minWidth: '40px',
    textAlign: 'center',
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
      minWidth: '35px',
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
    '& .MuiInputLabel-root': {
      '&.Mui-focused': {
        color: '#2A2B6A',
      },
    },
  },
  noteText: {
    fontSize: '0.9rem !important',
    color: '#666 !important',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#e8f5e9',
    borderRadius: '8px',
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
      padding: '12px',
      marginTop: '15px',
    },
  },
});

const achievementTypes = [
  {
    key: 'hackathons',
    title: 'Hackathons',
    description: 'Number of hackathons participated in'
  },
  {
    key: 'competitions',
    title: 'Technical Competitions',
    description: 'Coding contests, challenges, etc.'
  },
  {
    key: 'certifications',
    title: 'Certifications',
    description: 'Technical certifications obtained'
  },
  {
    key: 'oss_contributions',
    title: 'Open Source Contributions',
    description: 'GitHub contributions, projects, etc.'
  }
];

const AchievementsStep = ({ formData, handleChange, errors }) => {
  const classes = useStyles();

  const updateAchievement = (key, increment) => {
    const currentValue = formData.achievements[key];
    const newValue = Math.max(0, currentValue + increment);
    handleChange(`achievements.${key}`, newValue);
  };

  return (
    <Box>
      <Box className={classes.section}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Technical Achievements
        </Typography>
        <Typography variant="body1" className={classes.infoText}>
          Share your technical achievements and extracurricular activities. These help us understand your practical experience and passion for technology.
        </Typography>
        
        <Box className={classes.achievementGrid}>
          {achievementTypes.map((achievement) => (
            <Box key={achievement.key} className={classes.achievementCard}>
              <Typography className={classes.achievementTitle}>
                {achievement.title}
              </Typography>
              <Typography className={classes.achievementDescription}>
                {achievement.description}
              </Typography>
              
              <Box className={classes.counterContainer}>
                <IconButton
                  className={classes.counterButton}
                  onClick={() => updateAchievement(achievement.key, -1)}
                  disabled={formData.achievements[achievement.key] === 0}
                  size="small"
                >
                  <RemoveIcon />
                </IconButton>
                
                <Typography className={classes.counterValue}>
                  {formData.achievements[achievement.key]}
                </Typography>
                
                <IconButton
                  className={classes.counterButton}
                  onClick={() => updateAchievement(achievement.key, 1)}
                  size="small"
                >
                  <AddIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
        
        <TextField
          label="Achievement Justification (Optional)"
          variant="outlined"
          fullWidth
          multiline
          rows={6}
          value={formData.achievement_justification}
          onChange={(e) => handleChange('achievement_justification', e.target.value)}
          error={Boolean(errors.achievement_justification)}
          helperText={errors.achievement_justification || "Provide details about your achievements, impact, and learning outcomes (minimum 50 characters if filled)"}
          className={classes.textField}
          placeholder="e.g. Led a team of 4 developers in a 48-hour hackathon to create a healthcare app that won 2nd place..."
        />
        
        <Typography className={classes.noteText}>
          💡 Don't worry if you don't have many achievements yet. We value potential and passion as much as experience!
        </Typography>
      </Box>
      
      <Box className={classes.section}>
        <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
          Step 3 of 5: Share your technical achievements and extracurricular activities.
        </Typography>
      </Box>
    </Box>
  );
};

export default AchievementsStep;