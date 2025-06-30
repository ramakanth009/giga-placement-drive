import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  section: {
    padding: '32px 0',
    backgroundColor: '#FFFFFF',
    '@media (max-width: 1200px)': {
      padding: '28px 0',
    },
    '@media (max-width: 960px)': {
      padding: '24px 0',
    },
    '@media (max-width: 600px)': {
      padding: '20px 0',
    },
    '@media (max-width: 480px)': {
      padding: '16px 0',
    },
    '@media (max-width: 375px)': {
      padding: '12px 0',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: '700 !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '12px !important',
    '& span': {
      color: '#FFC614',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2.25rem !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
      marginBottom: '8px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.75rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.5rem !important',
      marginBottom: '5px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.375rem !important',
      marginBottom: '4px !important',
    },
  },
  subtitle: {
    fontSize: '18px !important',
    color: '#666666 !important',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 24px auto !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 1200px)': {
      fontSize: '17px !important',
      marginBottom: '20px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '16px !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '15px !important',
      marginBottom: '16px !important',
      maxWidth: '95%',
    },
    '@media (max-width: 480px)': {
      fontSize: '14px !important',
      marginBottom: '14px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '13px !important',
      marginBottom: '12px !important',
      lineHeight: '1.5 !important',
    },
  },
  cardContainer: {
    display: 'flex',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    margin: '16px 0',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    // '&:hover': {
    //   transform: 'translateY(-2px)',
    //   boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
    // },
    '@media (max-width: 1200px)': {
      margin: '14px 0',
    },
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      margin: '12px 0',
    },
    '@media (max-width: 600px)': {
      margin: '10px 0',
      borderRadius: '12px',
    },
    '@media (max-width: 480px)': {
      margin: '8px 0',
    },
    '@media (max-width: 375px)': {
      margin: '6px 0',
      borderRadius: '8px',
    },
  },
  imageSection: {
    width: '25%',
    minWidth: '200px',
    maxWidth: '225px',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    '@media (max-width: 1200px)': {
      minWidth: '180px',
      padding: '14px',
    },
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  contentSection: {
    flex: '1',
    padding: '24px',
    backgroundColor: '#FCFCFC',
    '@media (max-width: 1200px)': {
      padding: '20px',
    },
    '@media (max-width: 960px)': {
      padding: '18px',
    },
    '@media (max-width: 600px)': {
      padding: '16px',
    },
    '@media (max-width: 480px)': {
      padding: '14px',
    },
    '@media (max-width: 375px)': {
      padding: '12px',
    },
  },
  mobileLogoContainer: {
    display: 'none',
    '@media (max-width: 960px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '12px',
      padding: '10px',
      backgroundColor: '#F1F1F1',
      borderRadius: '24px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '10px',
      padding: '8px',
      borderRadius: '20px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '8px',
      padding: '6px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '6px',
      padding: '4px',
      borderRadius: '16px',
    },
  },
  companyBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#F1F1F1',
    borderRadius: '24px',
    padding: '6px 12px',
    marginBottom: '12px',
    filter: 'grayscale(100%)',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  companyIcon: {
    width: '80px',
    height: '20px',
    objectFit: 'contain',
    filter: 'brightness(0.4)',
    '@media (max-width: 1200px)': {
      width: '75px',
      height: '18px',
    },
  },
  mobileCompanyLogo: {
    width: '100px',
    height: '24px',
    objectFit: 'contain',
    filter: 'brightness(0.4)',
    '@media (max-width: 600px)': {
      width: '90px',
      height: '22px',
    },
    '@media (max-width: 480px)': {
      width: '80px',
      height: '20px',
    },
    '@media (max-width: 375px)': {
      width: '70px',
      height: '18px',
    },
  },
  cardTitle: {
    fontSize: '24px !important',
    fontWeight: '600 !important',
    color: '#4264E3 !important',
    marginBottom: '12px !important',
    '@media (max-width: 1200px)': {
      fontSize: '22px !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '20px !important',
      textAlign: 'center',
      marginBottom: '8px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '18px !important',
      marginBottom: '7px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '16px !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '15px !important',
      marginBottom: '5px !important',
    },
  },
  cardDescription: {
    fontSize: '16px !important',
    color: '#333333 !important',
    lineHeight: '1.6 !important',
    marginBottom: '20px !important',
    '@media (max-width: 1200px)': {
      fontSize: '15px !important',
      marginBottom: '18px !important',
    },
    '@media (max-width: 960px)': {
      marginBottom: '16px !important',
      textAlign: 'center',
    },
    '@media (max-width: 600px)': {
      fontSize: '14px !important',
      marginBottom: '14px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '13px !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '12px !important',
      lineHeight: '1.5 !important',
      marginBottom: '10px !important',
    },
  },
  metricsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    gap: '8px',
    '@media (max-width: 1200px)': {
      marginBottom: '18px',
      gap: '6px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '12px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '14px',
      gap: '10px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '12px',
      gap: '8px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '10px',
      gap: '6px',
    },
  },
  metricItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    minWidth: '0',
    '@media (max-width: 960px)': {
      minWidth: '100px',
      flex: 'none',
    },
    '@media (max-width: 600px)': {
      minWidth: '45%',
    },
    '@media (max-width: 375px)': {
      minWidth: '48%',
    },
  },
  metricValue: {
    fontSize: '32px !important',
    fontWeight: '700 !important',
    color: '#4264E3 !important',
    marginBottom: '4px !important',
    '@media (max-width: 1200px)': {
      fontSize: '28px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '26px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '24px !important',
      marginBottom: '3px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '22px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '20px !important',
      marginBottom: '2px !important',
    },
  },
  metricLabel: {
    fontSize: '12px !important',
    color: '#666666 !important',
    textAlign: 'center !important',
    maxWidth: '100%',
    lineHeight: '1.3 !important',
    '@media (max-width: 1200px)': {
      fontSize: '11px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '10px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '10px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '9px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '8px !important',
      lineHeight: '1.2 !important',
    },
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    '@media (max-width: 960px)': {
      gap: '6px',
      justifyContent: 'center',
    },
    '@media (max-width: 600px)': {
      gap: '5px',
    },
    '@media (max-width: 480px)': {
      gap: '4px',
    },
    '@media (max-width: 375px)': {
      gap: '3px',
    },
  },
  tag: {
    backgroundColor: '#F7F8FF',
    color: '#4264E3',
    fontSize: '11px',
    padding: '6px 12px',
    borderRadius: '16px',
    fontWeight: '500',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#EEEEFF',
    },
    '@media (max-width: 1200px)': {
      fontSize: '10px',
      padding: '5px 10px',
    },
    '@media (max-width: 960px)': {
      fontSize: '9px',
      padding: '4px 8px',
      borderRadius: '14px',
    },
    '@media (max-width: 600px)': {
      fontSize: '8px',
      padding: '3px 6px',
      borderRadius: '12px',
    },
    '@media (max-width: 480px)': {
      fontSize: '7px',
      padding: '2px 5px',
    },
    '@media (max-width: 375px)': {
      fontSize: '6px',
      padding: '2px 4px',
      borderRadius: '10px',
    },
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
});

const IndustryCaseStudies = ({ title = "Industry Case Studies", subtitle = "Discover how leading companies achieve remarkable results with our solutions", caseStudies = [] }) => {
  const classes = useStyles();

  // Default case studies data for demonstration
  const defaultCaseStudies = [
    {
      logoSrc: "https://via.placeholder.com/200x80/4264E3/FFFFFF?text=Company+Logo",
      monoLogoSrc: "https://via.placeholder.com/100x24/333333/FFFFFF?text=Company",
      companyName: "TechCorp Solutions",
      logoAltText: "TechCorp Solutions company logo showcasing their technology solutions and corporate branding",
      monoLogoAltText: "TechCorp Solutions monochrome logo for case study presentation",
      title: "Streamlined Operations with 40% Efficiency Boost",
      description: "Learn how TechCorp Solutions transformed their workflow processes, reduced operational costs, and improved team productivity through strategic implementation of our comprehensive platform.",
      metrics: [
        { value: "40%", label: "Efficiency Increase" },
        { value: "60%", label: "Cost Reduction" },
        { value: "2.5x", label: "Speed Improvement" }
      ],
      tags: ["Enterprise", "Automation", "Analytics", "Performance"]
    },
    {
      logoSrc: "https://via.placeholder.com/200x80/FF6B6B/FFFFFF?text=Innovation+Labs",
      monoLogoSrc: "https://via.placeholder.com/100x24/333333/FFFFFF?text=Innovation",
      companyName: "Innovation Labs",
      logoAltText: "Innovation Labs company logo representing their research and development focus in technology innovation",
      monoLogoAltText: "Innovation Labs monochrome logo for case study presentation",
      title: "Accelerated Development Cycles by 65%",
      description: "Discover how Innovation Labs leveraged our platform to accelerate their product development lifecycle, enhance collaboration, and deliver cutting-edge solutions faster than ever before.",
      metrics: [
        { value: "65%", label: "Faster Development" },
        { value: "85%", label: "Quality Improvement" },
        { value: "3x", label: "Team Productivity" }
      ],
      tags: ["Development", "Collaboration", "Quality", "Innovation"]
    }
  ];

  const studies = caseStudies.length > 0 ? caseStudies : defaultCaseStudies;

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.title}>
          {title.includes('Industry') ? (
            <>Industry <span>Case Studies</span></>
          ) : (
            title
          )}
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          {subtitle}
        </Typography>

        {studies.map((study, index) => (
          <Paper key={index} className={classes.cardContainer} elevation={0}>
            <Box className={classes.imageSection}>
              <img 
                src={study.logoSrc} 
                alt={study.logoAltText || `${study.companyName} logo`} 
                className={classes.logo} 
              />
            </Box>
            
            <Box className={classes.contentSection}>
              <Box className={classes.mobileLogoContainer}>
                <img 
                  src={study.monoLogoSrc} 
                  alt={study.monoLogoAltText || `${study.companyName} logo`} 
                  className={classes.mobileCompanyLogo} 
                />
              </Box>

              <Box className={classes.companyBadge}>
                <img 
                  src={study.monoLogoSrc} 
                  alt={study.monoLogoAltText || `${study.companyName} logo`} 
                  className={classes.companyIcon} 
                />
              </Box>

              <Typography variant="h3" className={classes.cardTitle}>
                {study.title} 
              </Typography>
              
              <Typography className={classes.cardDescription}>
                {study.description}
              </Typography>
              
              <Box className={classes.metricsContainer}>
                {study.metrics.map((metric, metricIndex) => (
                  <Box key={metricIndex} className={classes.metricItem}>
                    <Typography className={classes.metricValue}>
                      {metric.value}
                    </Typography>
                    <Typography className={classes.metricLabel}>
                      {metric.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
              
              <Box className={classes.tagsContainer}>
                {study.tags.map((tag, tagIndex) => (
                  <Box key={tagIndex} className={classes.tag}>
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>
        ))}
      </Container>
    </Box>
  );
};

export default IndustryCaseStudies;