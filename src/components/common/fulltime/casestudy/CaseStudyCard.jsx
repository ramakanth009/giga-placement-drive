// 2. CaseStudyCard Component
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  cardContainer: {
    display: 'flex',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    margin: '30px 0',
    '@media (max-width: 1200px)': {
      margin: '25px 0',
    },
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      margin: '20px 0',
    },
    '@media (max-width: 600px)': {
      margin: '15px 0',
    },
    '@media (max-width: 480px)': {
      margin: '12px 0',
    },
    '@media (max-width: 375px)': {
      margin: '10px 0',
    },
  },
  imageSection: {
    width: '25%',
    minWidth: '250px',
    maxWidth: '300px',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    '@media (max-width: 1200px)': {
      minWidth: '220px',
      padding: '18px',
    },
    '@media (max-width: 960px)': {
      width: '100%',
      maxWidth: '100%',
      padding: '15px',
    },
    '@media (max-width: 600px)': {
      padding: '12px',
    },
    '@media (max-width: 480px)': {
      padding: '10px',
    },
    '@media (max-width: 375px)': {
      padding: '8px',
    },
  },
  contentSection: {
    flex: '1',
    padding: '40px',
    backgroundColor: '#FCFCFC',
    '@media (max-width: 1200px)': {
      padding: '35px',
    },
    '@media (max-width: 960px)': {
      padding: '30px',
    },
    '@media (max-width: 600px)': {
      padding: '25px 20px',
    },
    '@media (max-width: 480px)': {
      padding: '20px 15px',
    },
    '@media (max-width: 375px)': {
      padding: '15px 12px',
    },
  },
  companyBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#F1F1F1',
    borderRadius: '30px',
    padding: '8px 16px',
    marginBottom: '16px',
    filter: 'grayscale(100%)',
    '@media (max-width: 600px)': {
      padding: '6px 12px',
      marginBottom: '12px',
    },
    '@media (max-width: 480px)': {
      padding: '5px 10px',
      marginBottom: '10px',
      gap: '6px',
    },
    '@media (max-width: 375px)': {
      padding: '4px 8px',
      marginBottom: '8px',
      gap: '4px',
    },
  },
  companyIcon: {
    width: '100px',
    height: '24px',
    objectFit: 'contain',
    filter: 'brightness(0.4)',
    '@media (max-width: 600px)': {
      width: '80px',
      height: '20px',
    },
    '@media (max-width: 480px)': {
      width: '70px',
      height: '18px',
    },
    '@media (max-width: 375px)': {
      width: '60px',
      height: '16px',
    },
  },
  cardTitle: {
    fontSize: '24px !important',
    fontWeight: '600 !important',
    color: '#4264E3 !important',
    marginBottom: '16px !important',
    '@media (max-width: 1200px)': {
      fontSize: '22px !important',
      marginBottom: '14px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '20px !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '18px !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '16px !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '15px !important',
      marginBottom: '7px !important',
    },
  },
  cardDescription: {
    fontSize: '16px !important',
    color: '#333333 !important',
    lineHeight: '1.6 !important',
    marginBottom: '32px !important',
    '@media (max-width: 1200px)': {
      fontSize: '15px !important',
      marginBottom: '28px !important',
    },
    '@media (max-width: 960px)': {
      marginBottom: '24px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '14px !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '13px !important',
      marginBottom: '16px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '12px !important',
      lineHeight: '1.5 !important',
      marginBottom: '14px !important',
    },
  },
  metricsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '32px',
    '@media (max-width: 1200px)': {
      marginBottom: '28px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '24px',
    },
    '@media (max-width: 600px)': {
      flexWrap: 'wrap',
      gap: '20px',
      marginBottom: '20px',
    },
    '@media (max-width: 480px)': {
      gap: '15px',
      marginBottom: '16px',
    },
    '@media (max-width: 375px)': {
      gap: '12px',
      marginBottom: '14px',
    },
  },
  metricItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    '@media (max-width: 600px)': {
      minWidth: '45%',
    },
    '@media (max-width: 375px)': {
      minWidth: '100%',
    },
  },
  metricValue: {
    fontSize: '40px !important',
    fontWeight: '700 !important',
    color: '#4264E3 !important',
    marginBottom: '8px !important',
    '@media (max-width: 1200px)': {
      fontSize: '36px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '32px !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '28px !important',
      marginBottom: '5px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '26px !important',
      marginBottom: '4px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '24px !important',
      marginBottom: '3px !important',
    },
  },
  metricLabel: {
    fontSize: '14px !important',
    color: '#666666 !important',
    textAlign: 'center !important',
    maxWidth: '90%',
    '@media (max-width: 960px)': {
      fontSize: '13px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '12px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '11px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '10px !important',
    },
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    '@media (max-width: 960px)': {
      gap: '10px',
    },
    '@media (max-width: 600px)': {
      gap: '8px',
    },
    '@media (max-width: 480px)': {
      gap: '6px',
    },
    '@media (max-width: 375px)': {
      gap: '5px',
    },
  },
  tag: {
    backgroundColor: '#F7F8FF',
    color: '#4264E3',
    fontSize: '14px',
    padding: '8px 16px',
    borderRadius: '20px',
    '@media (max-width: 960px)': {
      fontSize: '13px',
      padding: '7px 14px',
    },
    '@media (max-width: 600px)': {
      fontSize: '12px',
      padding: '6px 12px',
    },
    '@media (max-width: 480px)': {
      fontSize: '11px',
      padding: '5px 10px',
    },
    '@media (max-width: 375px)': {
      fontSize: '10px',
      padding: '4px 8px',
      borderRadius: '15px',
    },
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
});

const CaseStudyCard = ({ logoSrc, companyName, monoLogoSrc, title, description, metrics, tags }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.cardContainer} elevation={0}>
      <Box className={classes.imageSection}>
        <img src={logoSrc} alt={`${companyName} logo`} className={classes.logo} />
      </Box>
      <Box className={classes.contentSection}>
        <Box className={classes.companyBadge}>
          <img src={monoLogoSrc} alt={`${companyName} logo`} className={classes.companyIcon} />
        </Box>
        <Typography className={classes.cardTitle}>{title}</Typography>
        <Typography className={classes.cardDescription}>{description}</Typography>
        <Box className={classes.metricsContainer}>
          {metrics.map((metric, index) => (
            <Box key={index} className={classes.metricItem}>
              <Typography className={classes.metricValue}>{metric.value}</Typography>
              <Typography className={classes.metricLabel}>{metric.label}</Typography>
            </Box>
          ))}
        </Box>
        <Box className={classes.tagsContainer}>
          {tags.map((tag, index) => (
            <Box key={index} className={classes.tag}>
              {tag}
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default CaseStudyCard;