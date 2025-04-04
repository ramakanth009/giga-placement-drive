import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Container, 
  Paper, 
  FormControl, 
  FormControlLabel, 
  RadioGroup, 
  Radio, 
  MenuItem, 
  Select, 
  InputLabel, 
  Divider, 
  Checkbox, 
  FormHelperText 
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/common/navbar/Navbar';
import Footer from '../../components/common/footer/Footer';

const useStyles = makeStyles({
  formContainer: {
    padding: '40px 0',
    minHeight: '100vh',
  },
  paper: {
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto',
    '@media (max-width: 600px)': {
      padding: '25px 20px',
    },
  },
  pageTitle: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '2.3rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '20px',
    },
  },
  sectionTitle: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    marginTop: '30px !important',
    position: 'relative',
    paddingBottom: '10px',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '50px',
      height: '3px',
      backgroundColor: '#FFC614',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
      marginTop: '20px !important',
      marginBottom: '15px !important',
    },
  },
  formRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    marginBottom: '20px',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: '15px',
    },
  },
  formColumn: {
    flex: 1,
    minWidth: '45%',
  },
  fullWidthField: {
    width: '100%',
    marginBottom: '20px',
  },
  radioGroup: {
    flexDirection: 'row !important',
  },
  submitButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '12px 25px !important',
    fontSize: '1.1rem !important',
    fontWeight: 'bold !important',
    borderRadius: '8px !important',
    marginTop: '20px !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: '#1A1B4A !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 15px rgba(42, 43, 106, 0.3) !important',
    },
    '@media (max-width: 600px)': {
      padding: '10px 20px !important',
      fontSize: '1rem !important',
    },
  },
  divider: {
    margin: '30px 0 !important',
    '@media (max-width: 600px)': {
      margin: '20px 0 !important',
    },
  },
  declaration: {
    fontSize: '0.95rem !important',
    color: '#555 !important',
    marginTop: '20px !important',
    marginBottom: '5px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
    },
  },
  checkboxLabel: {
    fontSize: '0.95rem !important',
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
    },
  },
  note: {
    fontSize: '0.9rem !important',
    color: '#666 !important',
    fontStyle: 'italic !important',
    marginTop: '8px !important',
  },
  fieldLabel: {
    marginBottom: '8px !important',
    display: 'block !important',
    color: '#555 !important',
    fontWeight: '500 !important',
  },
});

const RegistrationForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    alternateNumber: '',
    dateOfBirth: '',
    gender: '',
    universityName: '',
    degreeProgram: '',
    graduationYear: '',
    cgpa: '',
    hasBacklogs: '',
    completedMandatoryCourses: '',
    previouslyApplied: '',
    previousApplicationDetails: '',
    domain: '',
    preferredJobRole: '',
    otherJobRole: '',
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState({});
  const [jobRoles, setJobRoles] = useState([]);
  
  // Update job roles when domain changes
  useEffect(() => {
    if (formData.domain === 'Full Stack') {
      setJobRoles([
        'UI/UX Developer',
        'Frontend Developer',
        'Backend Developer',
        'Database Engineer',
        'Others'
      ]);
    } else if (formData.domain === 'Data Science') {
      setJobRoles([
        'Data Analyst',
        'Data Scientist',
        'Data Engineer',
        'Machine Learning Engineer',
        'Others'
      ]);
    } else {
      setJobRoles([]);
    }
    
    // Reset job role when domain changes
    setFormData(prev => ({
      ...prev,
      preferredJobRole: '',
      otherJobRole: ''
    }));
  }, [formData.domain]);
  
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Validate required fields
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Contact number should be 10 digits';
    }
    
    // Validate alternate number if provided
    if (formData.alternateNumber.trim() && !/^\d{10}$/.test(formData.alternateNumber)) {
      newErrors.alternateNumber = 'Alternate number should be 10 digits';
    }
    
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.universityName.trim()) newErrors.universityName = 'University/College name is required';
    if (!formData.degreeProgram.trim()) newErrors.degreeProgram = 'Degree program is required';
    if (!formData.graduationYear) newErrors.graduationYear = 'Graduation year is required';
    if (!formData.cgpa.trim()) newErrors.cgpa = 'CGPA/Percentage is required';
    if (!formData.hasBacklogs) newErrors.hasBacklogs = 'Please specify if you have backlogs';
    if (!formData.completedMandatoryCourses) newErrors.completedMandatoryCourses = 'Please specify if you completed mandatory courses';
    if (!formData.previouslyApplied) newErrors.previouslyApplied = 'Please specify if you previously applied';
    
    // Validate conditional fields
    if (formData.previouslyApplied === 'Yes' && !formData.previousApplicationDetails.trim()) {
      newErrors.previousApplicationDetails = 'Please provide details of previous application';
    }
    
    // Validate domain and job role fields
    if (!formData.domain) newErrors.domain = 'Domain is required';
    
    if (!formData.preferredJobRole) {
      newErrors.preferredJobRole = 'Preferred job role is required';
    } else if (formData.preferredJobRole === 'Others' && !formData.otherJobRole.trim()) {
      newErrors.otherJobRole = 'Please specify the other job role';
    }
    
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the declaration';
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to the first error
      const firstErrorField = document.querySelector(`[name="${Object.keys(validationErrors)[0]}"]`);
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    // Handle form submission
    console.log('Form submitted:', formData);
    
    // Simulate successful submission
    alert('Registration successful! You will receive a confirmation email shortly.');
    
    // Redirect to PaymentUnderConstruction page
    navigate('/payment-under-construction');
  };
  
  // Generate graduation year options (5 years back to 5 years ahead)
  const graduationYears = [];
  for (let year = currentYear - 5; year <= currentYear + 5; year++) {
    graduationYears.push(year);
  }
  
  // Domain options
  const domains = ['Full Stack', 'Data Science'];
  
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" className={classes.formContainer}>
        <Paper elevation={0} className={classes.paper}>
          <Typography variant="h1" className={classes.pageTitle}>
            Virtual Placement Drive Registration
          </Typography>
          
          <form onSubmit={handleSubmit}>
            {/* Personal Information Section */}
            <Typography variant="h5" className={classes.sectionTitle}>
              Personal Information
            </Typography>
            
            <Box className={classes.fullWidthField}>
              <TextField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                error={!!errors.fullName}
                helperText={errors.fullName}
              />
            </Box>
            
            <Box className={classes.formRow}>
              <Box className={classes.formColumn}>
                <TextField
                  label="Email ID"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Box>
              
              <Box className={classes.formColumn}>
                <TextField
                  label="Contact Number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                  error={!!errors.contactNumber}
                  helperText={errors.contactNumber}
                />
              </Box>
            </Box>
            
            <Box className={classes.formRow}>
              <Box className={classes.formColumn}>
                <TextField
                  label="Alternate Contact Number (Optional)"
                  name="alternateNumber"
                  value={formData.alternateNumber}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  error={!!errors.alternateNumber}
                  helperText={errors.alternateNumber}
                />
              </Box>
              
              <Box className={classes.formColumn}>
                <TextField
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                  error={!!errors.dateOfBirth}
                  helperText={errors.dateOfBirth}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    max: new Date().toISOString().split('T')[0]  // Prevent future dates
                  }}
                />
              </Box>
            </Box>
            
            <Box className={classes.formRow}>
              <Box className={classes.formColumn}>
                <FormControl 
                  component="fieldset" 
                  fullWidth
                  error={!!errors.gender}
                >
                  <Typography className={classes.fieldLabel}>
                    Gender *
                  </Typography>
                  <RadioGroup
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={classes.radioGroup}
                  >
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                  </RadioGroup>
                  {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
                </FormControl>
              </Box>
              
              <Box className={classes.formColumn}>
                <TextField
                  label="University/College Name"
                  name="universityName"
                  value={formData.universityName}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                  error={!!errors.universityName}
                  helperText={errors.universityName}
                />
              </Box>
            </Box>
            
            <Box className={classes.formRow}>
              <Box className={classes.formColumn}>
                <TextField
                  label="Degree Program"
                  name="degreeProgram"
                  value={formData.degreeProgram}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                  error={!!errors.degreeProgram}
                  helperText={errors.degreeProgram}
                />
              </Box>
              
              <Box className={classes.formColumn}>
                <FormControl 
                  fullWidth 
                  variant="outlined" 
                  error={!!errors.graduationYear}
                >
                  <InputLabel id="graduation-year-label">Year of Graduation *</InputLabel>
                  <Select
                    labelId="graduation-year-label"
                    id="graduation-year"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    label="Year of Graduation"
                    required
                  >
                    {graduationYears.map(year => (
                      <MenuItem key={year} value={year}>{year}</MenuItem>
                    ))}
                  </Select>
                  {errors.graduationYear && <FormHelperText>{errors.graduationYear}</FormHelperText>}
                </FormControl>
              </Box>
            </Box>
            
            <Divider className={classes.divider} />
            
            {/* Academic Details Section */}
            <Typography variant="h5" className={classes.sectionTitle}>
              Academic Details
            </Typography>
            
            <Box className={classes.formRow}>
              <Box className={classes.formColumn}>
                <TextField
                  label="Current CGPA/Percentage"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                  error={!!errors.cgpa}
                  helperText={errors.cgpa}
                />
              </Box>
              
              <Box className={classes.formColumn}>
                <FormControl 
                  fullWidth 
                  variant="outlined" 
                  error={!!errors.hasBacklogs}
                >
                  <InputLabel id="backlogs-label">Any Active Backlogs? *</InputLabel>
                  <Select
                    labelId="backlogs-label"
                    id="hasBacklogs"
                    name="hasBacklogs"
                    value={formData.hasBacklogs}
                    onChange={handleChange}
                    label="Any Active Backlogs?"
                    required
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                  {errors.hasBacklogs && <FormHelperText>{errors.hasBacklogs}</FormHelperText>}
                </FormControl>
              </Box>
            </Box>
            
            <Box className={classes.fullWidthField}>
              <FormControl 
                fullWidth 
                variant="outlined" 
                error={!!errors.completedMandatoryCourses}
              >
                <InputLabel id="mandatory-courses-label">Have you completed all mandatory courses for placement eligibility? *</InputLabel>
                <Select
                  labelId="mandatory-courses-label"
                  id="completedMandatoryCourses"
                  name="completedMandatoryCourses"
                  value={formData.completedMandatoryCourses}
                  onChange={handleChange}
                  label="Have you completed all mandatory courses for placement eligibility?"
                  required
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
                {errors.completedMandatoryCourses && <FormHelperText>{errors.completedMandatoryCourses}</FormHelperText>}
              </FormControl>
            </Box>
            
            <Divider className={classes.divider} />
            
            {/* Technical & Placement Details Section */}
            <Typography variant="h5" className={classes.sectionTitle}>
              Technical & Placement Details
            </Typography>
            
            <Box className={classes.formRow}>
              <Box className={classes.formColumn}>
                <FormControl 
                  fullWidth 
                  variant="outlined" 
                  error={!!errors.previouslyApplied}
                >
                  <InputLabel id="previously-applied-label">Have you previously applied for placement with this company? *</InputLabel>
                  <Select
                    labelId="previously-applied-label"
                    id="previouslyApplied"
                    name="previouslyApplied"
                    value={formData.previouslyApplied}
                    onChange={handleChange}
                    label="Have you previously applied for placement with this company?"
                    required
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                  {errors.previouslyApplied && <FormHelperText>{errors.previouslyApplied}</FormHelperText>}
                </FormControl>
              </Box>
              
              {formData.previouslyApplied === 'Yes' && (
                <Box className={classes.formColumn}>
                  <TextField
                    label="Specify the year and outcome"
                    name="previousApplicationDetails"
                    value={formData.previousApplicationDetails}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                    error={!!errors.previousApplicationDetails}
                    helperText={errors.previousApplicationDetails}
                  />
                </Box>
              )}
            </Box>
            
            {/* Domain Selection */}
            <Box className={classes.formRow}>
              <Box className={classes.formColumn}>
                <FormControl 
                  fullWidth 
                  variant="outlined" 
                  error={!!errors.domain}
                >
                  <InputLabel id="domain-label">Domain *</InputLabel>
                  <Select
                    labelId="domain-label"
                    id="domain"
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    label="Domain"
                    required
                  >
                    {domains.map(domain => (
                      <MenuItem key={domain} value={domain}>{domain}</MenuItem>
                    ))}
                  </Select>
                  {errors.domain && <FormHelperText>{errors.domain}</FormHelperText>}
                </FormControl>
              </Box>
              
              <Box className={classes.formColumn}>
                <FormControl 
                  fullWidth 
                  variant="outlined" 
                  error={!!errors.preferredJobRole}
                  disabled={!formData.domain}
                >
                  <InputLabel id="job-role-label">Preferred Job Role *</InputLabel>
                  <Select
                    labelId="job-role-label"
                    id="preferredJobRole"
                    name="preferredJobRole"
                    value={formData.preferredJobRole}
                    onChange={handleChange}
                    label="Preferred Job Role"
                    required
                  >
                    {jobRoles.map(role => (
                      <MenuItem key={role} value={role}>{role}</MenuItem>
                    ))}
                  </Select>
                  {errors.preferredJobRole && <FormHelperText>{errors.preferredJobRole}</FormHelperText>}
                </FormControl>
              </Box>
            </Box>
            
            {/* Other Job Role field - only shown when "Others" is selected */}
            {formData.preferredJobRole === 'Others' && (
              <Box className={classes.fullWidthField}>
                <TextField
                  label="Specify Other Job Role"
                  name="otherJobRole"
                  value={formData.otherJobRole}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                  error={!!errors.otherJobRole}
                  helperText={errors.otherJobRole}
                />
              </Box>
            )}
            
            <Divider className={classes.divider} />
            
            {/* Declaration Section */}
            <Typography variant="h5" className={classes.sectionTitle}>
              Declaration
            </Typography>
            
            <Typography className={classes.declaration}>
              I hereby declare that the information provided above is true to the best of my knowledge. 
              I understand that any false information may lead to disqualification from the placement process.
            </Typography>
            
            <FormControlLabel
              control={
                <Checkbox
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label={
                <Typography className={classes.checkboxLabel}>
                  I agree to the declaration above
                </Typography>
              }
            />
            {errors.agreeToTerms && (
              <FormHelperText error>{errors.agreeToTerms}</FormHelperText>
            )}
            
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button 
                type="submit" 
                variant="contained" 
                className={classes.submitButton}
              >
                Next
              </Button>
            </Box>
            
            <Typography className={classes.note}>
              Note: You will receive a confirmation email after your registration is processed.
            </Typography>
          </form>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default RegistrationForm;