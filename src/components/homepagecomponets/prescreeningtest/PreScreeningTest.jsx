import React, { useState } from 'react';
import { Box, Container, Typography, Stepper, Step, StepLabel, Button, Paper, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
    '@media (max-width: 600px)': {
      paddingTop: '20px',
      paddingBottom: '60px',
    },
  },
  pageTitle: {
    fontSize: '2.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '10px !important',
    textAlign: 'center',
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.5rem !important',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#666 !important',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 30px auto !important',
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '90%',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      marginBottom: '20px !important',
    },
  },
  stepper: {
    margin: '20px auto 40px auto !important',
    maxWidth: '800px',
    '@media (max-width: 600px)': {
      padding: '0 10px',
      marginBottom: '30px !important',
    },
  },
  stepContent: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '30px',
    '@media (max-width: 600px)': {
      padding: '20px 15px',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '40px',
    '@media (max-width: 600px)': {
      marginTop: '30px',
    },
  },
  button: {
    padding: '10px 25px !important',
    textTransform: 'none !important',
    fontWeight: '600 !important',
    borderRadius: '8px !important',
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
  },
  progress: {
    margin: '0 auto',
    display: 'block',
    marginTop: '20px',
    color: '#2A2B6A !important',
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
    '@media (max-width: 600px)': {
      top: '10px',
      left: '10px',
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

const initialFormData = {
  name: '',
  email: '',
  motivation_narrative: '',
  academic_performance: 70,
  education_gap: {
    has_gap: false,
    explanation: '',
  },
  achievements: {
    hackathons: 0,
    competitions: 0,
    certifications: 0,
    oss_contributions: 0,
  },
  achievement_justification: '',
  tech_proficiency: {
    LMS: 0,
    Git: 0,
    Docker: 0,
    React: 0,
    'Node.js': 0,
    Python: 0,
  },
  communication_mcq: '',
  learning_agility: {
    urls: [''],
    reflection: '',
  },
};

const PreScreeningTest = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

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
        const [parent, child] = field.split('.');
        updatedData[parent] = {
          ...updatedData[parent],
          [child]: value,
        };
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
        if (!formData.communication_mcq) {
          newErrors.communication_mcq = 'Please select an answer';
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
      // API endpoint for submission
      const response = await fetch('https://gigaversity.in/prescreening_test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      setApiResponse(data);
      setActiveStep(steps.length - 1); // Move to results step
    } catch (error) {
      console.error('Error submitting pre-screening test:', error);
      setErrors({
        api: 'There was an error submitting your test. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const goToHome = () => {
    navigate('/');
  };

  // Render current step content
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PersonalInfoStep 
            formData={formData} 
            handleChange={handleChange} 
            errors={errors} 
          />
        );
      case 1:
        return (
          <MotivationAcademicStep 
            formData={formData} 
            handleChange={handleChange} 
            errors={errors} 
          />
        );
      case 2:
        return (
          <AchievementsStep 
            formData={formData} 
            handleChange={handleChange} 
            errors={errors} 
          />
        );
      case 3:
        return (
          <TechnicalProficiencyStep 
            formData={formData} 
            handleChange={handleChange} 
            errors={errors} 
          />
        );
      case 4:
        return (
          <CommunicationLearningStep 
            formData={formData} 
            handleChange={handleChange} 
            errors={errors} 
          />
        );
      case 5:
        return (
          <ResultsStep 
            apiResponse={apiResponse} 
          />
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box className={classes.root}>
      <Button 
        className={classes.homeButton}
        startIcon={<ArrowBackIcon />}
        onClick={goToHome}
      >
        Back to Home
      </Button>
      
      <Container maxWidth="lg">
        <Typography variant="h1" className={classes.pageTitle}>
          IT Talent Pre-Screening Test
        </Typography>
        
        <Typography variant="body1" className={classes.subtitle}>
          This assessment helps evaluate your IT readiness and provides personalized feedback on your strengths and areas for improvement.
        </Typography>
        
        <Stepper activeStep={activeStep} className={classes.stepper} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        <Paper elevation={3} className={classes.stepContent}>
          {getStepContent(activeStep)}
          
          {errors.api && (
            <Typography className={classes.errorMessage}>
              {errors.api}
            </Typography>
          )}
          
          {isSubmitting ? (
            <CircularProgress size={40} className={classes.progress} />
          ) : (
            <Box className={classes.buttonContainer}>
              <Button
                disabled={activeStep === 0 || activeStep === steps.length - 1}
                onClick={handleBack}
                className={`${classes.button} ${classes.backButton}`}
              >
                Back
              </Button>
              
              {activeStep === steps.length - 1 ? (
                <Button
                  onClick={goToHome}
                  className={`${classes.button} ${classes.nextButton}`}
                >
                  Return Home
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  className={`${classes.button} ${activeStep === steps.length - 2 ? classes.submitButton : classes.nextButton}`}
                >
                  {activeStep === steps.length - 2 ? 'Submit' : 'Next'}
                </Button>
              )}
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default PreScreeningTest;