import React from 'react';
import { 
  Box, 
  Typography, 
  Rating
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import PsychologyIcon from '@mui/icons-material/Psychology';

const useStyles = makeStyles({
  section: {
    marginBottom: '40px !important',
    '@media (max-width: 768px)': {
      marginBottom: '30px !important',
    },
  },
  sectionTitle: {
    fontSize: '2rem !important',
    fontWeight: 'bold !important',
    marginBottom: '20px !important',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #4A4C9B 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    '@media (max-width: 768px)': {
      fontSize: '1.75rem !important',
      marginBottom: '15px !important',
    },
  },
  infoText: {
    fontSize: '1.1rem !important',
    color: '#555 !important',
    marginBottom: '30px !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 768px)': {
      fontSize: '1rem !important',
      marginBottom: '25px !important',
    },
  },
  ratingItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '35px !important',
    padding: '25px',
    backgroundColor: '#fafafa',
    borderRadius: '12px',
    border: '1px solid #e0e0e0',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      borderColor: '#2A2B6A',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 20px rgba(42, 43, 106, 0.15)',
    },
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: '25px !important',
      padding: '20px',
    },
  },
  iconContainer: {
    minWidth: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #4A4C9B 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
    boxShadow: '0 4px 15px rgba(42, 43, 106, 0.25)',
    '& .MuiSvgIcon-root': {
      color: 'white',
      fontSize: '1.8rem',
    },
    '@media (max-width: 768px)': {
      marginRight: '0',
      marginBottom: '15px',
      minWidth: '50px',
      height: '50px',
      '& .MuiSvgIcon-root': {
        fontSize: '1.5rem',
      },
    },
  },
  ratingContent: {
    flex: 1,
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  ratingLabel: {
    fontSize: '1.25rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '8px !important',
    '@media (max-width: 768px)': {
      fontSize: '1.1rem !important',
      marginBottom: '8px !important',
    },
  },
  ratingDescription: {
    fontSize: '0.95rem !important',
    color: '#666 !important',
    marginBottom: '15px !important',
    lineHeight: '1.5 !important',
    '@media (max-width: 768px)': {
      fontSize: '0.9rem !important',
      marginBottom: '12px !important',
    },
  },
  rating: {
    color: '#FFC614 !important',
    fontSize: '2rem !important',
    '& .MuiRating-icon': {
      fontSize: 'inherit',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
  },
  ratingLegend: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
    fontSize: '0.75rem !important',
    color: '#999 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.7rem !important',
      flexWrap: 'wrap',
      gap: '5px',
    },
  },
  ratingLegendItem: {
    fontSize: '0.75rem !important',
    color: '#999 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.7rem !important',
    },
  },
  toolsTip: {
    fontSize: '0.9rem !important',
    color: '#2e7d32 !important',
    fontWeight: '500 !important',
    textAlign: 'center',
    marginTop: '25px',
    padding: '15px',
    backgroundColor: '#e8f5e9',
    borderRadius: '8px',
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
      marginTop: '20px',
      padding: '12px',
    },
  },
});

// Tech tools with exact field names matching REQUEST_STRUCTURE
const techTools = [
  {
    name: 'LMS',
    label: 'Learning Management System',
    description: 'Experience with online learning platforms (Moodle, Canvas, etc.)',
    icon: <SchoolIcon />
  },
  {
    name: 'Git',
    label: 'Git Version Control',
    description: 'Knowledge of Git commands, branching, and collaboration workflows',
    icon: <GitHubIcon />
  },
  {
    name: 'JavaScript',
    label: 'JavaScript Programming',
    description: 'Core JavaScript language and ES6+ features',
    icon: <CodeIcon />
  },
  {
    name: 'Python',
    label: 'Python Programming',
    description: 'Python development for web, automation, or data science',
    icon: <PsychologyIcon />
  },
  {
    name: 'React',
    label: 'React.js Framework',
    description: 'Experience with React components, hooks, and state management',
    icon: <CodeIcon />
  },
  {
    name: 'Node.js',
    label: 'Node.js Runtime',
    description: 'Backend development with Node.js and Express.js',
    icon: <LanguageIcon />
  },
  {
    name: 'MongoDB',
    label: 'MongoDB Database',
    description: 'NoSQL database design and operations',
    icon: <StorageIcon />
  },
  {
    name: 'AWS',
    label: 'Amazon Web Services',
    description: 'Cloud infrastructure and services',
    icon: <StorageIcon />
  },
  {
    name: 'Docker',
    label: 'Docker Containerization',
    description: 'Understanding of containers, images, and deployment processes',
    icon: <StorageIcon />
  },
  {
    name: 'Kubernetes',
    label: 'Kubernetes Orchestration',
    description: 'Container orchestration and cluster management',
    icon: <StorageIcon />
  },
  {
    name: 'TensorFlow',
    label: 'TensorFlow ML Framework',
    description: 'Machine learning and AI model development',
    icon: <PsychologyIcon />
  },
  {
    name: 'GraphQL',
    label: 'GraphQL API',
    description: 'Query language for APIs and data fetching',
    icon: <LanguageIcon />
  }
];

const TechnicalProficiencyStep = ({ formData, handleChange, errors }) => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.section}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Technical Proficiency
        </Typography>
        <Typography variant="body1" className={classes.infoText}>
          Rate your proficiency level with key technologies and tools. Be honest about your current skill level - we'll help you grow from where you are.
        </Typography>
        
        {techTools.map((tool) => (
          <Box key={tool.name} className={classes.ratingItem}>
            <Box className={classes.iconContainer}>
              {tool.icon}
            </Box>
            <Box className={classes.ratingContent}>
              <Typography className={classes.ratingLabel}>
                {tool.label}
              </Typography>
              <Typography className={classes.ratingDescription}>
                {tool.description}
              </Typography>
              <Rating
                name={`tech-${tool.name}`}
                value={formData.tech_proficiency[tool.name] || 0}
                onChange={(event, newValue) => {
                  handleChange(`tech_proficiency.${tool.name}`, newValue || 0);
                }}
                max={5}
                size="large"
                className={classes.rating}
              />
              <Box className={classes.ratingLegend}>
                <Typography className={classes.ratingLegendItem}>
                  No Experience
                </Typography>
                <Typography className={classes.ratingLegendItem}>
                  Beginner
                </Typography>
                <Typography className={classes.ratingLegendItem}>
                  Intermediate
                </Typography>
                <Typography className={classes.ratingLegendItem}>
                  Advanced
                </Typography>
                <Typography className={classes.ratingLegendItem}>
                  Expert
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
        
        <Typography className={classes.toolsTip}>
          Note: LMS (Learning Management System) and Git are considered essential tools for our program.
        </Typography>
      </Box>
      
      <Box className={classes.section}>
        <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
          Step 4 of 5: Rate your technical proficiency with key technologies.
        </Typography>
      </Box>
    </Box>
  );
};

export default TechnicalProficiencyStep;