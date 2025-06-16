// import React from 'react';
// import { Box, Typography, Rating } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import CodeIcon from '@mui/icons-material/Code';
// import StorageIcon from '@mui/icons-material/Storage';
// import LanguageIcon from '@mui/icons-material/Language';
// import BuildIcon from '@mui/icons-material/Build';
// import SchoolIcon from '@mui/icons-material/School';
// import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

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
//     marginBottom: '30px !important',
//     fontSize: '0.95rem !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.9rem !important',
//       marginBottom: '20px !important',
//     },
//   },
//   ratingItem: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '30px',
//     padding: '15px',
//     borderRadius: '10px',
//     backgroundColor: '#f5f7ff',
//     '@media (max-width: 600px)': {
//       padding: '12px',
//       marginBottom: '20px',
//     },
//   },
//   iconContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '45px',
//     height: '45px',
//     borderRadius: '50%',
//     backgroundColor: '#2A2B6A',
//     color: 'white',
//     marginRight: '15px',
//     flexShrink: 0,
//     '@media (max-width: 600px)': {
//       width: '40px',
//       height: '40px',
//       marginRight: '12px',
//     },
//   },
//   icon: {
//     fontSize: '22px !important',
//     '@media (max-width: 600px)': {
//       fontSize: '20px !important',
//     },
//   },
//   ratingContent: {
//     flex: 1,
//   },
//   ratingLabel: {
//     fontSize: '1.1rem !important',
//     fontWeight: '600 !important',
//     color: '#2A2B6A !important',
//     marginBottom: '5px !important',
//     '@media (max-width: 600px)': {
//       fontSize: '1rem !important',
//     },
//   },
//   ratingDescription: {
//     fontSize: '0.9rem !important',
//     color: '#666 !important',
//     marginBottom: '10px !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.85rem !important',
//       marginBottom: '8px !important',
//     },
//   },
//   rating: {
//     '& .MuiRating-iconFilled': {
//       color: '#2A2B6A',
//     },
//     '& .MuiRating-iconHover': {
//       color: '#3c3e8f',
//     },
//   },
//   ratingLegend: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '5px',
//     '@media (max-width: 600px)': {
//       marginTop: '4px',
//     },
//   },
//   ratingLegendItem: {
//     fontSize: '0.75rem !important',
//     color: '#666 !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.7rem !important',
//     },
//   },
//   toolsTip: {
//     fontSize: '0.9rem !important',
//     color: '#555 !important',
//     fontStyle: 'italic !important',
//     marginTop: '10px !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.85rem !important',
//     },
//   },
// });

// const TechnicalProficiencyStep = ({ formData, handleChange }) => {
//   const classes = useStyles();

//   const techTools = [
//     {
//       name: 'LMS',
//       label: 'Learning Management System',
//       description: 'Experience with learning platforms like Moodle, Canvas, or Blackboard',
//       icon: <SchoolIcon className={classes.icon} />,
//     },
//     {
//       name: 'Git',
//       label: 'Git Version Control',
//       description: 'Knowledge of Git commands, repositories, branching, and collaboration',
//       icon: <BuildIcon className={classes.icon} />,
//     },
//     {
//       name: 'Docker',
//       label: 'Docker',
//       description: 'Experience with containerization, Docker files, and deployment',
//       icon: <StorageIcon className={classes.icon} />,
//     },
//     {
//       name: 'React',
//       label: 'React.js',
//       description: 'Frontend development with React components, hooks, and state management',
//       icon: <CodeIcon className={classes.icon} />,
//     },
//     {
//       name: 'Node.js',
//       label: 'Node.js',
//       description: 'Server-side JavaScript development with Node.js',
//       icon: <LanguageIcon className={classes.icon} />,
//     },
//     {
//       name: 'Python',
//       label: 'Python',
//       description: 'Python programming for scripting, data analysis, or backend development',
//       icon: <IntegrationInstructionsIcon className={classes.icon} />,
//     },
//   ];

//   return (
//     <Box>
//       <Box className={classes.section}>
//         <Typography variant="h2" className={classes.sectionTitle}>
//           Technical Proficiency
//         </Typography>
//         <Typography variant="body1" className={classes.infoText}>
//           Rate your proficiency with the following technologies and tools on a scale from 0 (No Experience) to 5 (Expert).
//         </Typography>
        
//         {techTools.map((tool) => (
//           <Box key={tool.name} className={classes.ratingItem}>
//             <Box className={classes.iconContainer}>
//               {tool.icon}
//             </Box>
//             <Box className={classes.ratingContent}>
//               <Typography className={classes.ratingLabel}>
//                 {tool.label}
//               </Typography>
//               <Typography className={classes.ratingDescription}>
//                 {tool.description}
//               </Typography>
//               <Rating
//                 name={`tech-${tool.name}`}
//                 value={formData.tech_proficiency[tool.name]}
//                 onChange={(event, newValue) => {
//                   handleChange(`tech_proficiency.${tool.name}`, newValue);
//                 }}
//                 max={5}
//                 size="large"
//                 className={classes.rating}
//               />
//               <Box className={classes.ratingLegend}>
//                 <Typography className={classes.ratingLegendItem}>
//                   No Experience
//                 </Typography>
//                 <Typography className={classes.ratingLegendItem}>
//                   Beginner
//                 </Typography>
//                 <Typography className={classes.ratingLegendItem}>
//                   Intermediate
//                 </Typography>
//                 <Typography className={classes.ratingLegendItem}>
//                   Advanced
//                 </Typography>
//                 <Typography className={classes.ratingLegendItem}>
//                   Expert
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         ))}
        
//         <Typography className={classes.toolsTip}>
//           Note: LMS (Learning Management System) and Git are considered essential tools for our program.
//         </Typography>
//       </Box>
      
//       <Box className={classes.section}>
//         <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
//           Step 4 of 5: Rate your technical proficiency with key technologies.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default TechnicalProficiencyStep;
import React from 'react';
import { Box, Typography, Rating } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import PsychologyIcon from '@mui/icons-material/Psychology';

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
  ratingItem: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '25px',
    marginBottom: '20px',
    backgroundColor: '#f8f9fc',
    borderRadius: '12px',
    border: '1px solid #e0e4e7',
    gap: '20px',
    '@media (max-width: 600px)': {
      padding: '20px 15px',
      marginBottom: '15px',
      gap: '15px',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    backgroundColor: '#2A2B6A',
    color: 'white',
    flexShrink: 0,
    '@media (max-width: 600px)': {
      width: '45px',
      height: '45px',
    },
  },
  ratingContent: {
    flex: 1,
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
  ratingLabel: {
    fontSize: '1.2rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    marginBottom: '5px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
  },
  ratingDescription: {
    fontSize: '0.9rem !important',
    color: '#666 !important',
    marginBottom: '15px !important',
    lineHeight: '1.4 !important',
    '@media (max-width: 600px)': {
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
    name: 'Docker',
    label: 'Docker Containerization',
    description: 'Understanding of containers, images, and deployment processes',
    icon: <StorageIcon />
  },
  {
    name: 'React',
    label: 'React.js Framework',
    description: 'Experience with React components, hooks, and state management',
    icon: <CodeIcon />
  },
  {
    name: 'NodeJS',
    label: 'Node.js Runtime',
    description: 'Backend development with Node.js and Express.js',
    icon: <LanguageIcon />
  },
  {
    name: 'Python',
    label: 'Python Programming',
    description: 'Python development for web, automation, or data science',
    icon: <PsychologyIcon />
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