// import React from 'react';
// import { Box, Typography, Paper, Divider, Chip } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import WarningIcon from '@mui/icons-material/Warning';
// import ErrorIcon from '@mui/icons-material/Error';

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
//   resultSummary: {
//     textAlign: 'center',
//     marginBottom: '30px',
//     '@media (max-width: 600px)': {
//       marginBottom: '25px',
//     },
//   },
//   scoreCircle: {
//     width: '120px',
//     height: '120px',
//     borderRadius: '50%',
//     margin: '0 auto 20px auto',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     border: '8px solid',
//     '@media (max-width: 600px)': {
//       width: '100px',
//       height: '100px',
//       border: '6px solid',
//       marginBottom: '15px',
//     },
//   },
//   scoreNumber: {
//     fontSize: '2.5rem !important',
//     fontWeight: 'bold !important',
//     '@media (max-width: 600px)': {
//       fontSize: '2rem !important',
//     },
//   },
//   decisionChip: {
//     fontSize: '1rem !important',
//     fontWeight: '600 !important',
//     padding: '6px 15px !important',
//     margin: '0 auto !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.9rem !important',
//     },
//   },
//   scoreGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
//     gap: '20px',
//     marginBottom: '30px',
//     '@media (max-width: 600px)': {
//       gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
//       gap: '15px',
//       marginBottom: '25px',
//     },
//   },
//   scoreItem: {
//     padding: '15px',
//     borderRadius: '10px',
//     backgroundColor: '#f5f7ff',
//     '@media (max-width: 600px)': {
//       padding: '12px',
//     },
//   },
//   scoreItemTitle: {
//     fontSize: '0.9rem !important',
//     color: '#666 !important',
//     marginBottom: '5px !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.85rem !important',
//     },
//   },
//   scoreItemValue: {
//     fontSize: '1.4rem !important',
//     fontWeight: '600 !important',
//     color: '#2A2B6A !important',
//     '@media (max-width: 600px)': {
//       fontSize: '1.2rem !important',
//     },
//   },
//   flagsList: {
//     marginTop: '20px',
//   },
//   flagItem: {
//     display: 'flex',
//     alignItems: 'flex-start',
//     padding: '10px 15px',
//     marginBottom: '10px',
//     borderRadius: '8px',
//     backgroundColor: '#fff0f0',
//     '@media (max-width: 600px)': {
//       padding: '8px 12px',
//       marginBottom: '8px',
//     },
//   },
//   flagIcon: {
//     color: '#e53935',
//     marginRight: '10px',
//     marginTop: '2px',
//     '@media (max-width: 600px)': {
//       marginRight: '8px',
//     },
//   },
//   flagText: {
//     fontSize: '0.95rem !important',
//     color: '#333 !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.9rem !important',
//     },
//   },
//   noFlagMessage: {
//     fontSize: '0.95rem !important',
//     color: '#2e7d32 !important',
//     display: 'flex',
//     alignItems: 'center',
//     marginTop: '15px',
//     '@media (max-width: 600px)': {
//       fontSize: '0.9rem !important',
//       marginTop: '12px',
//     },
//   },
//   successIcon: {
//     color: '#2e7d32',
//     marginRight: '10px',
//     '@media (max-width: 600px)': {
//       marginRight: '8px',
//     },
//   },
// });

// const ResultsStep = ({ apiResponse }) => {
//   const classes = useStyles();

//   if (!apiResponse) {
//     return (
//       <Box className={classes.section}>
//         <Typography variant="h2" className={classes.sectionTitle}>
//           Results Not Available
//         </Typography>
//         <Typography variant="body1">
//           No results are available. There might have been an issue with the test submission.
//         </Typography>
//       </Box>
//     );
//   }

//   const { candidate_id, evaluation } = apiResponse;
//   const { decision, scores, total_score, red_flags } = evaluation;

//   // Helper to determine status colors
//   const getDecisionColor = () => {
//     switch (decision) {
//       case 'Auto-Advance':
//         return { bg: '#e8f5e9', color: '#2e7d32', border: '#81c784' };
//       case 'Manual Review':
//         return { bg: '#fff8e1', color: '#f57f17', border: '#ffd54f' };
//       case 'Reject':
//         return { bg: '#ffebee', color: '#c62828', border: '#ef9a9a' };
//       default:
//         return { bg: '#e8f5e9', color: '#2e7d32', border: '#81c784' };
//     }
//   };

//   const decisionColors = getDecisionColor();

//   return (
//     <Box className={classes.section}>
//       <Typography variant="h2" className={classes.sectionTitle}>
//         Your Assessment Results
//       </Typography>
      
//       <Box className={classes.resultSummary}>
//         <Box 
//           className={classes.scoreCircle} 
//           sx={{ borderColor: decisionColors.border }}
//         >
//           <Typography 
//             className={classes.scoreNumber}
//             sx={{ color: decisionColors.color }}
//           >
//             {total_score}
//           </Typography>
//         </Box>
        
//         <Chip 
//           label={decision} 
//           className={classes.decisionChip}
//           sx={{ 
//             backgroundColor: decisionColors.bg, 
//             color: decisionColors.color 
//           }}
//         />
//       </Box>
      
//       <Divider sx={{ margin: '20px 0' }} />
      
//       <Typography variant="h6" sx={{ marginBottom: '15px', color: '#2A2B6A' }}>
//         Score Breakdown
//       </Typography>
      
//       <Box className={classes.scoreGrid}>
//         {Object.entries(scores).map(([key, value]) => (
//           <Box key={key} className={classes.scoreItem}>
//             <Typography className={classes.scoreItemTitle}>
//               {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
//             </Typography>
//             <Typography className={classes.scoreItemValue}>
//               {value}/10
//             </Typography>
//           </Box>
//         ))}
//       </Box>
      
//       <Typography variant="h6" sx={{ marginTop: '30px', marginBottom: '15px', color: '#2A2B6A' }}>
//         Areas for Improvement
//       </Typography>
      
//       {red_flags && red_flags.length > 0 ? (
//         <Box className={classes.flagsList}>
//           {red_flags.map((flag, index) => (
//             <Box key={index} className={classes.flagItem}>
//               <WarningIcon className={classes.flagIcon} />
//               <Typography className={classes.flagText}>
//                 {flag}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       ) : (
//         <Typography className={classes.noFlagMessage}>
//           <CheckCircleIcon className={classes.successIcon} />
//           No specific issues identified. Keep up the good work!
//         </Typography>
//       )}
      
//       <Box sx={{ marginTop: '30px', textAlign: 'center' }}>
//         <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#666' }}>
//           Candidate ID: {candidate_id}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default ResultsStep;
import React from 'react';
import { Box, Typography, Chip, Divider, Button, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { DECISION_TYPES, SCORE_RANGES } from './prescreeningAPI';

const useStyles = makeStyles({
  section: {
    marginBottom: '40px',
    '@media (max-width: 600px)': {
      marginBottom: '30px',
    },
  statusBanner: {
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '30px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    '@media (max-width: 600px)': {
      padding: '15px',
      marginBottom: '25px',
      gap: '12px',
    },
  },
  bannerIcon: {
    fontSize: '3rem !important',
    '@media (max-width: 600px)': {
      fontSize: '2.5rem !important',
    },
  },
  bannerTitle: {
    fontSize: '1.5rem !important',
    fontWeight: 'bold !important',
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
    },
  },
  bannerMessage: {
    fontSize: '1rem !important',
    opacity: 0.9,
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    },
  },
  callToActionContainer: {
    marginTop: '25px',
    padding: '20px',
    backgroundColor: '#f8f9fc',
    borderRadius: '12px',
    border: '1px solid #e0e4e7',
    '@media (max-width: 600px)': {
      marginTop: '20px',
      padding: '15px',
    },
  },
  primaryButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '12px 24px !important',
    borderRadius: '8px !important',
    textTransform: 'none !important',
    fontWeight: '600 !important',
    marginRight: '15px !important',
    marginBottom: '10px !important',
    '&:hover': {
      backgroundColor: '#1A1B4A !important',
    },
    '@media (max-width: 600px)': {
      marginRight: '10px !important',
      marginBottom: '8px !important',
      padding: '10px 20px !important',
    },
  },
  secondaryButton: {
    backgroundColor: 'transparent !important',
    color: '#2A2B6A !important',
    border: '2px solid #2A2B6A !important',
    padding: '10px 22px !important',
    borderRadius: '8px !important',
    textTransform: 'none !important',
    fontWeight: '600 !important',
    marginBottom: '10px !important',
    '&:hover': {
      backgroundColor: 'rgba(42, 43, 106, 0.05) !important',
    },
    '@media (max-width: 600px)': {
      marginBottom: '8px !important',
      padding: '8px 18px !important',
    },
  },
  linksList: {
    marginTop: '15px',
    '& a': {
      display: 'inline-block',
      color: '#2A2B6A !important',
      textDecoration: 'none !important',
      padding: '8px 15px',
      borderRadius: '6px',
      backgroundColor: 'rgba(42, 43, 106, 0.1)',
      marginRight: '10px',
      marginBottom: '8px',
      fontSize: '0.9rem !important',
      '&:hover': {
        backgroundColor: 'rgba(42, 43, 106, 0.2)',
      },
    },
  },
  },
  sectionTitle: {
    fontSize: '1.8rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '25px !important',
    textAlign: 'center',
    '@media (max-width: 600px)': {
      fontSize: '1.5rem !important',
      marginBottom: '20px !important',
    },
  },
  resultSummary: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px',
    gap: '20px',
    '@media (max-width: 600px)': {
      marginBottom: '25px',
      gap: '15px',
    },
  },
  scoreCircle: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    border: '4px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    '@media (max-width: 600px)': {
      width: '100px',
      height: '100px',
      border: '3px solid',
    },
  },
  scoreNumber: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
    },
  },
  decisionChip: {
    fontSize: '1rem !important',
    fontWeight: '600 !important',
    padding: '8px 16px !important',
    borderRadius: '20px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      padding: '6px 14px !important',
    },
  },
  scoreGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '25px',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr 1fr',
      gap: '15px',
      marginBottom: '20px',
    },
  },
  scoreItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: '#f8f9fc',
    borderRadius: '8px',
    border: '1px solid #e0e4e7',
    '@media (max-width: 600px)': {
      padding: '12px 15px',
      flexDirection: 'column',
      gap: '5px',
      textAlign: 'center',
    },
  },
  scoreItemTitle: {
    fontSize: '0.9rem !important',
    color: '#666 !important',
    fontWeight: '500 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
    },
  },
  scoreItemValue: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
  },
  flagsList: {
    marginTop: '15px',
    '@media (max-width: 600px)': {
      marginTop: '12px',
    },
  },
  flagItem: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '10px 15px',
    marginBottom: '10px',
    borderRadius: '8px',
    backgroundColor: '#fff0f0',
    '@media (max-width: 600px)': {
      padding: '8px 12px',
      marginBottom: '8px',
    },
  },
  flagIcon: {
    color: '#e53935',
    marginRight: '10px',
    marginTop: '2px',
    '@media (max-width: 600px)': {
      marginRight: '8px',
    },
  },
  flagText: {
    fontSize: '0.95rem !important',
    color: '#333 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  noFlagMessage: {
    fontSize: '0.95rem !important',
    color: '#2e7d32 !important',
    display: 'flex',
    alignItems: 'center',
    marginTop: '15px',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      marginTop: '12px',
    },
  },
  successIcon: {
    color: '#2e7d32',
    marginRight: '10px',
    '@media (max-width: 600px)': {
      marginRight: '8px',
    },
  },
  contentContainer: {
    marginTop: '30px',
    padding: '25px',
    backgroundColor: '#f8f9fc',
    borderRadius: '12px',
    border: '1px solid #e0e4e7',
    '@media (max-width: 600px)': {
      marginTop: '25px',
      padding: '20px 15px',
    },
  },
  contentTitle: {
    fontSize: '1.2rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
      marginBottom: '12px !important',
    },
  },
  contentMessage: {
    fontSize: '1rem !important',
    color: '#333 !important',
    lineHeight: '1.6 !important',
    marginBottom: '20px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
      marginBottom: '15px !important',
    },
  },
  recommendations: {
    marginTop: '20px',
    '& ul': {
      paddingLeft: '20px',
      '& li': {
        fontSize: '0.95rem !important',
        color: '#333 !important',
        marginBottom: '8px',
        lineHeight: '1.5 !important',
        '@media (max-width: 600px)': {
          fontSize: '0.9rem !important',
          marginBottom: '6px',
        },
      },
    },
  },
  nextSteps: {
    marginTop: '25px',
    padding: '20px',
    backgroundColor: '#e8f5e9',
    borderRadius: '8px',
    border: '1px solid #81c784',
    '@media (max-width: 600px)': {
      marginTop: '20px',
      padding: '15px',
    },
  },
  nextStepsTitle: {
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
    color: '#2e7d32 !important',
    marginBottom: '10px !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '8px !important',
    },
  },
  nextStepsText: {
    fontSize: '0.95rem !important',
    color: '#2e7d32 !important',
    lineHeight: '1.5 !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
});

const ResultsStep = ({ apiResponse }) => {
  const classes = useStyles();

  // Debug: Log the actual response
  console.log('API Response:', apiResponse);

  if (!apiResponse) {
    return (
      <Box className={classes.section}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Results Not Available
        </Typography>
        <Typography variant="body1">
          No results are available. There might have been an issue with the test submission.
        </Typography>
      </Box>
    );
  }

  const { candidate_id, status, evaluation, content } = apiResponse;

  // Handle missing evaluation data but show available data
  if (!evaluation) {
    return (
      <Box className={classes.section}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Assessment Submitted Successfully
        </Typography>
        
        {content && (
          <Box className={classes.contentContainer}>
            {content.title && (
              <Typography className={classes.contentTitle}>
                {content.title}
              </Typography>
            )}
            
            {content.message && (
              <Typography className={classes.contentMessage}>
                {content.message}
              </Typography>
            )}
            
            {content.recommendations && content.recommendations.length > 0 && (
              <Box className={classes.recommendations}>
                <Typography variant="h6" sx={{ marginBottom: '10px', color: '#2A2B6A' }}>
                  Recommendations:
                </Typography>
                <ul>
                  {content.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </Box>
            )}
            
            {content.call_to_action && (
              <Box className={classes.callToActionContainer}>
                <Typography variant="h6" sx={{ marginBottom: '15px', color: '#2A2B6A' }}>
                  Next Steps:
                </Typography>
                
                {content.call_to_action.primary && (
                  <Button className={classes.primaryButton}>
                    {content.call_to_action.primary}
                  </Button>
                )}
                
                {content.call_to_action.secondary && (
                  <Button className={classes.secondaryButton}>
                    {content.call_to_action.secondary}
                  </Button>
                )}
                
                {content.call_to_action.links && Object.keys(content.call_to_action.links).length > 0 && (
                  <Box className={classes.linksList}>
                    {Object.entries(content.call_to_action.links).map(([label, url]) => (
                      <Link key={label} href={url} target="_blank" rel="noopener noreferrer">
                        {label}
                      </Link>
                    ))}
                  </Box>
                )}
              </Box>
            )}
            
            {content.next_steps && (
              <Box className={classes.nextSteps}>
                <Typography className={classes.nextStepsTitle}>
                  What's Next:
                </Typography>
                <Typography className={classes.nextStepsText}>
                  {content.next_steps}
                </Typography>
              </Box>
            )}
          </Box>
        )}
        
        {candidate_id && (
          <Box className={classes.section} sx={{ marginTop: '30px' }}>
            <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic', textAlign: 'center' }}>
              Candidate ID: {candidate_id} | Status: {status || 'Submitted'} | Assessment completed successfully
            </Typography>
          </Box>
        )}
        
        {/* Debug info */}
        {/* <Box sx={{ marginTop: '20px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <Typography variant="body2" sx={{ color: '#666' }}>
            Debug Info: {JSON.stringify(apiResponse, null, 2)}
          </Typography>
        </Box> */}
      </Box>
    );
  }

  const { decision, scores, total_score, red_flags } = evaluation;

  // Helper to determine status colors and icons
  const getDecisionConfig = () => {
    switch (decision) {
      case DECISION_TYPES.AUTO_ADVANCE:
        return { 
          bg: '#e8f5e9', 
          color: '#2e7d32', 
          border: '#81c784',
          icon: <CheckCircleIcon className={classes.bannerIcon} />,
          title: '🎉 Congratulations!'
        };
      case DECISION_TYPES.MANUAL_REVIEW:
        return { 
          bg: '#fff8e1', 
          color: '#f57f17', 
          border: '#ffd54f',
          icon: <TrendingUpIcon className={classes.bannerIcon} />,
          title: '⏳ Under Review'
        };
      case DECISION_TYPES.REJECT:
        return { 
          bg: '#ffebee', 
          color: '#c62828', 
          border: '#ef9a9a',
          icon: <ErrorIcon className={classes.bannerIcon} />,
          title: '📚 Keep Learning'
        };
      default:
        return { 
          bg: '#e8f5e9', 
          color: '#2e7d32', 
          border: '#81c784',
          icon: <CheckCircleIcon className={classes.bannerIcon} />,
          title: '✨ Assessment Complete'
        };
    }
  };

  const decisionConfig = getDecisionConfig();

  // Get score category
  const getScoreCategory = (score) => {
    if (score >= SCORE_RANGES.EXCELLENT.min) return 'Excellent';
    if (score >= SCORE_RANGES.GOOD.min) return 'Good';
    return 'Needs Improvement';
  };

  return (
    <Box className={classes.section}>
      <Typography variant="h2" className={classes.sectionTitle}>
        Your Assessment Results
      </Typography>
      
      {/* Status Banner */}
      <Box 
        className={classes.statusBanner}
        sx={{ 
          backgroundColor: decisionConfig.bg,
          color: decisionConfig.color,
          border: `2px solid ${decisionConfig.border}`
        }}
      >
        {decisionConfig.icon}
        <Typography className={classes.bannerTitle}>
          {decisionConfig.title}
        </Typography>
        {content?.message && (
          <Typography className={classes.bannerMessage}>
            {content.message}
          </Typography>
        )}
      </Box>

      {/* Score Summary */}
      <Box className={classes.resultSummary}>
        <Box 
          className={classes.scoreCircle} 
          sx={{ borderColor: decisionConfig.border }}
        >
          <Typography 
            className={classes.scoreNumber}
            sx={{ color: decisionConfig.color }}
          >
            {total_score}
          </Typography>
        </Box>
        
        <Chip 
          label={`${decision} • ${getScoreCategory(total_score)}`}
          className={classes.decisionChip}
          sx={{ 
            backgroundColor: decisionConfig.bg, 
            color: decisionConfig.color 
          }}
        />
      </Box>
      
      <Divider sx={{ margin: '20px 0' }} />
      
      {/* Score Breakdown */}
      <Typography variant="h6" sx={{ marginBottom: '15px', color: '#2A2B6A' }}>
        Score Breakdown
      </Typography>
      
      <Box className={classes.scoreGrid}>
        {Object.entries(scores).map(([key, value]) => (
          <Box key={key} className={classes.scoreItem}>
            <Typography className={classes.scoreItemTitle}>
              {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </Typography>
            <Typography className={classes.scoreItemValue}>
              {value}/10
            </Typography>
          </Box>
        ))}
      </Box>
      
      {/* Areas for Improvement */}
      <Typography variant="h6" sx={{ marginTop: '30px', marginBottom: '15px', color: '#2A2B6A' }}>
        Areas for Improvement
      </Typography>
      
      {red_flags && red_flags.length > 0 ? (
        <Box className={classes.flagsList}>
          {red_flags.map((flag, index) => (
            <Box key={index} className={classes.flagItem}>
              <WarningIcon className={classes.flagIcon} />
              <Typography className={classes.flagText}>
                {flag}
              </Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Typography className={classes.noFlagMessage}>
          <CheckCircleIcon className={classes.successIcon} />
          No specific issues identified. Keep up the good work!
        </Typography>
      )}

      {/* Content Section */}
      {content && (
        <Box className={classes.contentContainer}>
          {content.title && (
            <Typography className={classes.contentTitle}>
              {content.title}
            </Typography>
          )}
          
          {/* Recommendations */}
          {content.recommendations && content.recommendations.length > 0 && (
            <Box className={classes.recommendations}>
              <Typography variant="h6" sx={{ marginBottom: '10px', color: '#2A2B6A' }}>
                Recommendations:
              </Typography>
              <ul>
                {content.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </Box>
          )}
          
          {/* Call to Action */}
          {content.call_to_action && (
            <Box className={classes.callToActionContainer}>
              <Typography variant="h6" sx={{ marginBottom: '15px', color: '#2A2B6A' }}>
                Next Steps:
              </Typography>
              
              {content.call_to_action.primary && (
                <Button className={classes.primaryButton}>
                  {content.call_to_action.primary}
                </Button>
              )}
              
              {content.call_to_action.secondary && (
                <Button className={classes.secondaryButton}>
                  {content.call_to_action.secondary}
                </Button>
              )}
              
              {content.call_to_action.links && Object.keys(content.call_to_action.links).length > 0 && (
                <Box className={classes.linksList}>
                  {Object.entries(content.call_to_action.links).map(([label, url]) => (
                    <Link key={label} href={url} target="_blank" rel="noopener noreferrer">
                      {label}
                    </Link>
                  ))}
                </Box>
              )}
            </Box>
          )}
          
          {/* Next Steps */}
          {content.next_steps && (
            <Box className={classes.nextSteps}>
              <Typography className={classes.nextStepsTitle}>
                What's Next:
              </Typography>
              <Typography className={classes.nextStepsText}>
                {content.next_steps}
              </Typography>
            </Box>
          )}
        </Box>
      )}
      
      {/* Footer */}
      <Box className={classes.section} sx={{ marginTop: '30px' }}>
        <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic', textAlign: 'center' }}>
          Candidate ID: {candidate_id} | Status: {status || 'Complete'} | Assessment completed successfully
        </Typography>
      </Box>
    </Box>
  );
};

export default ResultsStep; 