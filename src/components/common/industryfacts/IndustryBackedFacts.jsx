// src/components/common/industryfacts/IndustryBackedFacts.jsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '30px 35px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    margin: '20px 0',
    '@media (max-width: 768px)': {
      padding: '25px 20px',
    },
    '@media (max-width: 480px)': {
      padding: '20px 15px',
    }
  },
  title: {
    fontSize: '24px !important',
    fontWeight: '700 !important',
    marginBottom: '20px !important',
    '& .blue': {
      color: '#2A2B6A'
    },
    '& .yellow': {
      color: '#FFC614'
    },
    '@media (max-width: 768px)': {
      fontSize: '22px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '20px !important',
    }
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '0 !important',
    marginBottom: '20px !important',
    '@media (max-width: 768px)': {
      marginBottom: '16px !important',
    }
  },
  bullet: {
    minWidth: '24px',
    color: '#2A2B6A',
    fontWeight: 'bold',
    marginRight: '8px',
    marginTop: '2px'
  },
  factText: {
    fontSize: '16px !important',
    color: '#4A4A4A !important',
    lineHeight: '1.6 !important',
    '@media (max-width: 768px)': {
      fontSize: '15px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '14px !important',
    }
  },
  source: {
    fontSize: '15px !important',
    color: '#666666 !important',
    fontStyle: 'italic',
    marginTop: '5px !important',
    '@media (max-width: 480px)': {
      fontSize: '13px !important',
    }
  },
  readMoreLink: {
    textAlign: 'right',
    marginTop: '10px',
    '& a': {
      color: '#2A2B6A',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '16px',
      '&:hover': {
        textDecoration: 'underline',
      }
    }
  }
});

const IndustryBackedFacts = ({ titleBlue, titleYellow, facts }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>
        <span className="blue">{titleBlue}</span> <span className="yellow">{titleYellow}</span>
      </Typography>
      
      <List>
        {facts.map((fact, index) => (
          <ListItem key={index} className={classes.listItem}>
            <Box component="span" className={classes.bullet}>•</Box>
            <ListItemText 
              primary={
                <Typography className={classes.factText}>
                  {fact.text}
                </Typography>
              }
              secondary={
                fact.source && (
                  <Typography className={classes.source}>
                    (Source: {fact.source})
                  </Typography>
                )
              }
            />
          </ListItem>
        ))}
      </List>
      
      <Box className={classes.readMoreLink}>
        <a href="#">Read More</a>
      </Box>
    </Box>
  );
};

export default IndustryBackedFacts;