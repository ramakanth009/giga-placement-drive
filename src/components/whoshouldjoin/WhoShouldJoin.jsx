// src/components/whoshouldjoin/WhoShouldJoin.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactComponent as WorkIcon} from '../../assets/WorkIcon.svg';
import { ReactComponent as SchoolIcon} from '../../assets/SchoolIcon.svg';
import { ReactComponent as SwitchAccountIcon} from '../../assets/SwitchAccountIcon.svg';
import { ReactComponent as BusinessCenterIcon} from '../../assets/BusinessCenterIcon.svg';

const useStyles = makeStyles({
  section: {
    padding: '80px 40px',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  contentContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '60px',
    width: '100%',
  },
  title: {
    fontSize: '2.8rem !important',
    fontWeight: 'bold !important',
    color: '#0a192f !important',
    '& span': {
      color: '#FFC614 !important',
    },
  },
  boxesContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  categoryBox: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '10px',
    position: 'relative',
  },
  iconContainer: {
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    '& svg': {
      width: '60px',
      height: '60px',
      color: '#2A2B6A',
    },
  },
  categoryTitle: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '16px !important',
    minHeight: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryDescription: {
    fontSize: '0.95rem !important',
    color: '#4A4A4A !important',
    lineHeight: '1.6 !important',
    minHeight: '100px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  divider: {
    position: 'absolute',
    top: '40px',
    right: '0',
    width: '2.5px',
    height: '80%',
    background: 'repeating-linear-gradient(to bottom, #0B103F 0%, #0B103F 2%, transparent 2%, transparent 4%)',
  }
});

const WhoShouldJoin = () => {
  const classes = useStyles();

  const categories = [
    {
      icon: <SchoolIcon />,
      title: 'Final-Year Students',
      description: 'Bridge The Gap Between Academics And Industry With Job-Specific Skills That Employers Actually Want.',
    },
    {
      icon: <WorkIcon />,
      title: 'Recent Graduates',
      description: 'Stand Out From Thousands Of Other Job Seekers With Portfolio Projects And Direct Employer Connections.',
    },
    {
      icon: <SwitchAccountIcon />,
      title: 'Career Switchers',
      description: 'Transition Into Tech With A Focused 30-Day Program That Builds Employable Skills Fast.',
    },
    {
      icon: <BusinessCenterIcon />,
      title: 'Freelancers & Contractors',
      description: 'Enhance Your Service Offerings With In-Demand Skills And Connect With Potential Long-Term Clients.',
    },
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.contentContainer}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            Who Should <span>Join This Program</span>
          </Typography>
        </Box>

        <Box className={classes.boxesContainer}>
          {categories.map((category, index) => (
            <Box key={index} className={classes.categoryBox}>
              <Box className={classes.iconContainer}>
                {category.icon}
              </Box>
              <Typography variant="h5" className={classes.categoryTitle}>
                {category.title}
              </Typography>
              <Typography variant="body1" className={classes.categoryDescription}>
                {category.description}
              </Typography>
              
              {/* Vertical divider between boxes (except for the last one) */}
              {index < categories.length - 1 && (
                <Box className={classes.divider} />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WhoShouldJoin;