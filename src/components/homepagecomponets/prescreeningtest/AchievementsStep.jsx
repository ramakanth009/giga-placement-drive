import React from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const useStyles = makeStyles({
  section: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '1.5rem !important',
    fontWeight: '600 !important',
    marginBottom: '15px !important',
    color: '#2A2B6A !important',
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
      marginBottom: '12px !important',
    },
  },
  infoText: {
    color: '#666 !important',
    marginBottom: '20px !important',
    fontSize: '0.95rem !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      marginBottom: '15px !important',
    },
  },
  textField: {
    marginBottom: '20px !important',
    marginTop: '20px !important',
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#2A2B6A',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2A2B6A',
      },
    },
  },
  errorText: {
    color: '#e53935 !important',
    fontSize: '0.8rem !important',
    marginTop: '4px !important',
  },
  counterContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    '@media (max-width: 600px)': {
      marginBottom: '12px',
    },
  },
  counterLabel: {
    flex: 1,
    fontSize: '1rem !important',
    fontWeight: '500 !important',
    color: '#333 !important',
  },
  counterValue: {
    margin: '0 15px !important',
    minWidth: '30px',
    textAlign: 'center',
    fontSize: '1.2rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
  },
  counterButton: {
    color: '#2A2B6A !important',
    backgroundColor: 'rgba(42, 43, 106, 0.05) !important',
    '&:hover': {
      backgroundColor: 'rgba(42, 43, 106, 0.1) !important',
    },
    '&.Mui-disabled': {
      color: 'rgba(0, 0, 0, 0.26) !important',
    },
  },
  achievementsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginTop: '20px',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gap: '15px',
    },
  },
});

const AchievementsStep = ({ formData, handleChange, errors }) => {
  const classes = useStyles();

  const incrementCounter = (field) => {
    const currentValue = formData.achievements[field];
    handleChange(`achievements.${field}`, currentValue + 1);
  };

  const decrementCounter = (field) => {
    const currentValue = formData.achievements[field];
    if (currentValue > 0) {
      handleChange(`achievements.${field}`, currentValue - 1);
    }
  };

  const counterFields = [
    { field: 'hackathons', label: 'Hackathons Participated' },
    { field: 'competitions', label: 'Tech Competitions' },
    { field: 'certifications', label: 'IT Certifications Obtained' },
    { field: 'oss_contributions', label: 'Open Source Contributions' },
  ];

  return (
    <Box>
      <Box className={classes.section}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Technical Achievements
        </Typography>
        <Typography variant="body1" className={classes.infoText}>
          Please tell us about your technical achievements and experiences. These help demonstrate your practical skills and commitment to IT.
        </Typography>
        
        <Box className={classes.achievementsGrid}>
          {counterFields.map((item) => (
            <Box key={item.field} className={classes.counterContainer}>
              <Typography className={classes.counterLabel}>
                {item.label}
              </Typography>
              <IconButton 
                className={classes.counterButton}
                onClick={() => decrementCounter(item.field)}
                disabled={formData.achievements[item.field] <= 0}
                size="small"
              >
                <RemoveIcon />
              </IconButton>
              <Typography className={classes.counterValue}>
                {formData.achievements[item.field]}
              </Typography>
              <IconButton 
                className={classes.counterButton}
                onClick={() => incrementCounter(item.field)}
                size="small"
              >
                <AddIcon />
              </IconButton>
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
          helperText={errors.achievement_justification || 'Provide details about your most significant technical achievements (minimum 50 characters if filled)'}
          className={classes.textField}
          placeholder="e.g. During the regional hackathon last year, I led a team that developed an AI-powered accessibility app..."
        />
      </Box>
      
      <Box className={classes.section}>
        <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
          Step 3 of 5: Share your technical achievements and experiences.
        </Typography>
      </Box>
    </Box>
  );
};

export default AchievementsStep;