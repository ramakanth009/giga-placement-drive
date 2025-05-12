// 3. IndustryCaseStudies Component
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CaseStudyCard from './CaseStudyCard';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    backgroundColor: '#FFFFFF',
    '@media (max-width: 1200px)': {
      padding: '70px 0',
    },
    '@media (max-width: 960px)': {
      padding: '60px 0',
    },
    '@media (max-width: 600px)': {
      padding: '50px 0 40px',
    },
    '@media (max-width: 480px)': {
      padding: '40px 0 30px',
    },
    '@media (max-width: 375px)': {
      padding: '30px 0 25px',
    },
  },
  title: {
    fontSize: '36px !important',
    fontWeight: '700 !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '16px !important',
    '& span': {
      color: '#FFC614',
    },
    '@media (max-width: 1200px)': {
      fontSize: '34px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '32px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '28px !important',
      marginBottom: '14px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '26px !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '24px !important',
      marginBottom: '10px !important',
    },
  },
  subtitle: {
    fontSize: '18px !important',
    color: '#666666 !important',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 50px auto !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 1200px)': {
      fontSize: '17px !important',
      marginBottom: '45px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '16px !important',
      marginBottom: '40px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '15px !important',
      marginBottom: '35px !important',
      maxWidth: '90%',
    },
    '@media (max-width: 480px)': {
      fontSize: '14px !important',
      marginBottom: '30px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '13px !important',
      marginBottom: '25px !important',
      lineHeight: '1.5 !important',
    },
  },
});

const IndustryCaseStudies = ({ title, subtitle, caseStudies }) => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.title}>
          Industry <span>Case Studies</span>
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          {subtitle}
        </Typography>

        {caseStudies.map((study, index) => (
          <CaseStudyCard
            key={index}
            logoSrc={study.logoSrc}
            companyName={study.companyName}
            monoLogoSrc={study.monoLogoSrc}
            title={study.title}
            description={study.description}
            metrics={study.metrics}
            tags={study.tags}
          />
        ))}
      </Container>
    </Box>
  );
};

export default IndustryCaseStudies;