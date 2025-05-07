// // src/components/common/industryfacts/IndustryBackedFacts.jsx
// import React from 'react';
// import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   container: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: '12px',
//     padding: '30px 35px',
//     boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
//     margin: '20px 0',
//     '@media (max-width: 768px)': {
//       padding: '25px 20px',
//     },
//     '@media (max-width: 480px)': {
//       padding: '20px 15px',
//     }
//   },
//   title: {
//     fontSize: '24px !important',
//     fontWeight: '700 !important',
//     marginBottom: '20px !important',
//     '& .blue': {
//       color: '#2A2B6A'
//     },
//     '& .yellow': {
//       color: '#FFC614'
//     },
//     '@media (max-width: 768px)': {
//       fontSize: '22px !important',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '20px !important',
//     }
//   },
//   listItem: {
//     display: 'flex',
//     alignItems: 'flex-start',
//     padding: '0 !important',
//     marginBottom: '20px !important',
//     '@media (max-width: 768px)': {
//       marginBottom: '16px !important',
//     }
//   },
//   bullet: {
//     minWidth: '24px',
//     color: '#2A2B6A',
//     fontWeight: 'bold',
//     marginRight: '8px',
//     marginTop: '2px'
//   },
//   factText: {
//     fontSize: '16px !important',
//     color: '#4A4A4A !important',
//     lineHeight: '1.6 !important',
//     '@media (max-width: 768px)': {
//       fontSize: '15px !important',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '14px !important',
//     }
//   },
//   source: {
//     fontSize: '15px !important',
//     color: '#666666 !important',
//     fontStyle: 'italic',
//     marginTop: '5px !important',
//     '@media (max-width: 480px)': {
//       fontSize: '13px !important',
//     }
//   },
//   readMoreLink: {
//     textAlign: 'right',
//     marginTop: '10px',
//     '& a': {
//       color: '#2A2B6A',
//       textDecoration: 'none',
//       fontWeight: '600',
//       fontSize: '16px',
//       '&:hover': {
//         textDecoration: 'underline',
//       }
//     }
//   }
// });

// const IndustryBackedFacts = ({ titleBlue, titleYellow, facts }) => {
//   const classes = useStyles();

//   return (
//     <Box className={classes.container}>
//       <Typography className={classes.title}>
//         <span className="blue">{titleBlue}</span> <span className="yellow">{titleYellow}</span>
//       </Typography>
      
//       <List>
//         {facts.map((fact, index) => (
//           <ListItem key={index} className={classes.listItem}>
//             <Box component="span" className={classes.bullet}>•</Box>
//             <ListItemText 
//               primary={
//                 <Typography className={classes.factText}>
//                   {fact.text}
//                 </Typography>
//               }
//               secondary={
//                 fact.source && (
//                   <Typography className={classes.source}>
//                     (Source: {fact.source})
//                   </Typography>
//                 )
//               }
//             />
//           </ListItem>
//         ))}
//       </List>
      
//       <Box className={classes.readMoreLink}>
//         <a href="#">Read More</a>
//       </Box>
//     </Box>
//   );
// };

// export default IndustryBackedFacts;
// src/components/common/industryfacts/IndustryBackedFacts.jsx
import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const useStyles = makeStyles({
  section: {
    padding: '80px 0',
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 960px)': {
      padding: '60px 0',
    },
    '@media (max-width: 600px)': {
      padding: '40px 0',
    },
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '50px',
    '@media (max-width: 960px)': {
      marginBottom: '40px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '30px',
    },
  },
  titleBlue: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '10px !important',
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
  },
  titleYellow: {
    fontSize: '1.8rem !important',
    color: '#FFC614 !important',
    maxWidth: '800px',
    margin: '0 auto !important',
    '@media (max-width: 960px)': {
      fontSize: '1.5rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
    },
  },
  factsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    '@media (max-width: 960px)': {
      gap: '25px',
    },
    '@media (max-width: 600px)': {
      gap: '20px',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  factCard: {
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
    backgroundColor: '#ffffff',
    maxWidth: '500px',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
    },
    '@media (max-width: 960px)': {
      padding: '25px',
    },
    '@media (max-width: 600px)': {
      padding: '20px',
      maxWidth: '100%',
    },
  },
  quoteIcon: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'rgba(42, 43, 106, 0.1)',
    fontSize: '60px !important',
    '@media (max-width: 600px)': {
      fontSize: '50px !important',
      top: '15px',
      right: '15px',
    },
  },
  factText: {
    fontSize: '1.1rem !important',
    lineHeight: '1.6 !important',
    color: '#333333 !important',
    marginBottom: '20px !important',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      marginBottom: '15px !important',
    },
  },
  sourceText: {
    fontSize: '0.9rem !important',
    color: '#666666 !important',
    fontStyle: 'italic',
    '@media (max-width: 600px)': {
      fontSize: '0.8rem !important',
    },
  },
  decorCircle: {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: 'rgba(42, 43, 106, 0.03)',
    zIndex: 1,
  },
  circle1: {
    width: '200px',
    height: '200px',
    top: '-100px',
    right: '-50px',
  },
  circle2: {
    width: '300px',
    height: '300px',
    bottom: '-150px',
    left: '-100px',
  },
});

const IndustryBackedFacts = ({ titleBlue, titleYellow, facts = [] }) => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.titleBlue}>
            {titleBlue}
          </Typography>
          <Typography variant="h3" className={classes.titleYellow}>
            {titleYellow}
          </Typography>
        </Box>

        <Box className={classes.factsContainer}>
          {facts && facts.map((fact, index) => (
            <Paper key={index} className={classes.factCard} elevation={0}>
              <FormatQuoteIcon className={classes.quoteIcon} />
              <Box className={`${classes.decorCircle} ${classes.circle1}`}></Box>
              <Box className={`${classes.decorCircle} ${classes.circle2}`}></Box>
              <Typography className={classes.factText}>
                {fact.text}
              </Typography>
              <Typography className={classes.sourceText}>
                Source: {fact.source}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default IndustryBackedFacts;