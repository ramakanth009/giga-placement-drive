// src/components/common/casestudy/CaseStudyCard.jsx
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
    '@media (max-width: 960px)': {
      flexDirection: 'column',
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
    '@media (max-width: 960px)': {
      width: '100%',
      maxWidth: '100%',
    },
  },
  contentSection: {
    flex: 1,
    padding: '40px',
    backgroundColor: '#FCFCFC',
    '@media (max-width: 960px)': {
      padding: '30px',
    },
    '@media (max-width: 600px)': {
      padding: '25px 20px',
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
  },
  companyIcon: {
    width: '24px',
    height: '24px',
    objectFit: 'contain',
  },
  companyName: {
    fontSize: '16px',
    fontWeight: 500,
    color: '#333333',
  },
  cardTitle: {
    fontSize: '24px !important',
    fontWeight: '600 !important',
    color: '#4264E3 !important',
    marginBottom: '16px !important',
    '@media (max-width: 600px)': {
      fontSize: '20px !important',
    },
  },
  cardDescription: {
    fontSize: '16px !important',
    color: '#333333 !important',
    lineHeight: '1.6 !important',
    marginBottom: '32px !important',
    '@media (max-width: 600px)': {
      fontSize: '15px !important',
      marginBottom: '24px !important',
    },
  },
  metricsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '32px',
    '@media (max-width: 600px)': {
      flexWrap: 'wrap',
      gap: '20px',
      marginBottom: '24px',
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
  },
  metricValue: {
    fontSize: '40px !important',
    fontWeight: '700 !important',
    color: '#4264E3 !important',
    marginBottom: '8px !important',
    '@media (max-width: 600px)': {
      fontSize: '32px !important',
    },
  },
  metricLabel: {
    fontSize: '14px !important',
    color: '#666666 !important',
    textAlign: 'center !important',
    maxWidth: '90%',
    '@media (max-width: 600px)': {
      fontSize: '13px !important',
    },
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },
  tag: {
    backgroundColor: '#F7F8FF',
    color: '#4264E3',
    fontSize: '14px',
    padding: '8px 16px',
    borderRadius: '20px',
    '@media (max-width: 600px)': {
      fontSize: '13px',
      padding: '6px 14px',
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
          <Typography className={classes.companyName}>{companyName}</Typography>
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