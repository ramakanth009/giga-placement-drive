import React from 'react';
import { Box, Typography, TextField, Slider, FormControlLabel, Switch, 
    // FormHelperText 
} from '@mui/material';
import { makeStyles } from '@mui/styles';

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
  subsectionTitle: {
    fontSize: '1.2rem !important',
    fontWeight: '600 !important',
    marginBottom: '10px !important',
    marginTop: '25px !important',
    color: '#2A2B6A !important',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
      marginTop: '20px !important',
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
  sliderBox: {
    padding: '20px 10px',
    marginBottom: '20px',
  },
  sliderLabel: {
    fontSize: '1rem !important',
    fontWeight: '500 !important',
    marginBottom: '10px !important',
    display: 'block',
    color: '#333 !important',
  },
  sliderValue: {
    fontSize: '0.9rem !important',
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
    marginTop: '10px !important',
    textAlign: 'center',
  },
  slider: {
    color: '#2A2B6A !important',
    '& .MuiSlider-valueLabel': {
      backgroundColor: '#2A2B6A !important',
    },
    '& .MuiSlider-markLabel': {
      color: '#666 !important',
    },
  },
  switchLabel: {
    marginBottom: '15px !important',
    '& .MuiFormControlLabel-label': {
      fontSize: '1rem',
      fontWeight: '500',
      color: '#333',
    },
  },
  marks: {
    color: '#2A2B6A !important',
    fontWeight: '500 !important',
  },
});

const MotivationAcademicStep = ({ formData, handleChange, errors }) => {
  const classes = useStyles();

  const academicMarks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 25,
      label: '25%',
    },
    {
      value: 50,
      label: '50%',
    },
    {
      value: 75,
      label: '75%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];

  return (
    <Box>
      <Box className={classes.section}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Motivation & Academic Background
        </Typography>
        
        <Box className={classes.section}>
          <Typography variant="h3" className={classes.subsectionTitle}>
            Your Motivation for IT
          </Typography>
          <Typography variant="body1" className={classes.infoText}>
            Please explain why you're interested in pursuing a career in IT. Include your background, experiences, and specific areas of interest.
          </Typography>
          
          <TextField
            label="Motivation Narrative"
            variant="outlined"
            fullWidth
            multiline
            rows={6}
            value={formData.motivation_narrative}
            onChange={(e) => handleChange('motivation_narrative', e.target.value)}
            error={Boolean(errors.motivation_narrative)}
            helperText={errors.motivation_narrative || 'Minimum 50 characters required'}
            className={classes.textField}
            placeholder="e.g. I've been fascinated with technology since I was young when I first programmed a simple calculator..."
            required
          />
        </Box>
        
        <Box className={classes.section}>
          <Typography variant="h3" className={classes.subsectionTitle}>
            Academic Performance
          </Typography>
          <Typography variant="body1" className={classes.infoText}>
            Rate your academic performance on a scale of 0-100%, where 0% is the lowest and 100% is the highest possible performance.
          </Typography>
          
          <Box className={classes.sliderBox}>
            <Typography variant="body1" className={classes.sliderLabel}>
              Academic Performance Score
            </Typography>
            
            <Slider
              value={formData.academic_performance}
              onChange={(e, newValue) => handleChange('academic_performance', newValue)}
              aria-labelledby="academic-performance-slider"
              valueLabelDisplay="auto"
              step={5}
              marks={academicMarks}
              min={0}
              max={100}
              className={classes.slider}
            />
            
            <Typography variant="body2" className={classes.sliderValue}>
              Current Score: {formData.academic_performance}%
            </Typography>
          </Box>
        </Box>
        
        <Box className={classes.section}>
          <Typography variant="h3" className={classes.subsectionTitle}>
            Education Gap
          </Typography>
          <Typography variant="body1" className={classes.infoText}>
            Do you have any gaps in your educational journey? This could include taking time off between degrees, switching fields, etc.
          </Typography>
          
          <FormControlLabel
            control={
              <Switch
                checked={formData.education_gap.has_gap}
                onChange={(e) => handleChange('education_gap.has_gap', e.target.checked)}
                color="primary"
              />
            }
            label="I have a gap in my education"
            className={classes.switchLabel}
          />
          
          {formData.education_gap.has_gap && (
            <TextField
              label="Gap Explanation"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.education_gap.explanation}
              onChange={(e) => handleChange('education_gap.explanation', e.target.value)}
              error={Boolean(errors['education_gap.explanation'])}
              helperText={errors['education_gap.explanation'] || 'Please explain your education gap'}
              className={classes.textField}
              placeholder="e.g. I took a year off between my bachelor's and master's to gain industry experience..."
            />
          )}
        </Box>
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