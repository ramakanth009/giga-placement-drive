import React from 'react';
import { Box, Typography, Paper, Divider, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';

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
  resultSummary: {
    textAlign: 'center',
    marginBottom: '30px',
    '@media (max-width: 600px)': {
      marginBottom: '25px',
    },
  },
  scoreCircle: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    margin: '0 auto 20px auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '8px solid',
    '@media (max-width: 600px)': {
      width: '100px',
      height: '100px',
      border: '6px solid',
      marginBottom: '15px',
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
    padding: '6px 15px !important',
    margin: '0 auto !important',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  scoreGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
    '@media (max-width: 600px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '15px',
      marginBottom: '25px',
    },
  },
  scoreItem: {
    padding: '15px',
    borderRadius: '10px',
    backgroundColor: '#f5f7ff',
    '@media (max-width: 600px)': {
      padding: '12px',
    },
  },
  scoreItemTitle: {
    fontSize: '0.9rem !important',
    color: '#666 !important',
    marginBottom: '5px !important',
    '@media (max-width: 600px)': {
      fontSize: '0.85rem !important',
    },
  },
  scoreItemValue: {
    fontSize: '1.4rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
    },
  },
  flagsList: {
    marginTop: '20px',
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
});

const ResultsStep = ({ apiResponse }) => {
  const classes = useStyles();

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

  const { candidate_id, evaluation } = apiResponse;
  const { decision, scores, total_score, red_flags } = evaluation;

  // Helper to determine status colors
  const getDecisionColor = () => {
    switch (decision) {
      case 'Auto-Advance':
        return { bg: '#e8f5e9', color: '#2e7d32', border: '#81c784' };
      case 'Manual Review':
        return { bg: '#fff8e1', color: '#f57f17', border: '#ffd54f' };
      case 'Reject':
        return { bg: '#ffebee', color: '#c62828', border: '#ef9a9a' };
      default:
        return { bg: '#e8f5e9', color: '#2e7d32', border: '#81c784' };
    }
  };

  const decisionColors = getDecisionColor();

  return (
    <Box className={classes.section}>
      <Typography variant="h2" className={classes.sectionTitle}>
        Your Assessment Results
      </Typography>
      
      <Box className={classes.resultSummary}>
        <Box 
          className={classes.scoreCircle} 
          sx={{ borderColor: decisionColors.border }}
        >
          <Typography 
            className={classes.scoreNumber}
            sx={{ color: decisionColors.color }}
          >
            {total_score}
          </Typography>
        </Box>
        
        <Chip 
          label={decision} 
          className={classes.decisionChip}
          sx={{ 
            backgroundColor: decisionColors.bg, 
            color: decisionColors.color 
          }}
        />
      </Box>
      
      <Divider sx={{ margin: '20px 0' }} />
      
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
      
      <Box sx={{ marginTop: '30px', textAlign: 'center' }}>
        <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#666' }}>
          Candidate ID: {candidate_id}
        </Typography>
      </Box>
    </Box>
  );
};

export default ResultsStep;