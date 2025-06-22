import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    '@media (max-width: 1200px)': {
      padding: '55px 0',
    },
    '@media (max-width: 960px)': {
      padding: '50px 0',
    },
    '@media (max-width: 600px)': {
      padding: '40px 0',
    },
    '@media (max-width: 480px)': {
      padding: '35px 0',
    },
    '@media (max-width: 375px)': {
      padding: '30px 0',
    }
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '40px',
    '@media (max-width: 1200px)': {
      marginBottom: '38px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '35px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '28px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '25px',
    }
  },
  titleBlue: {
    fontSize: '2.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '10px !important',
    '@media (max-width: 1200px)': {
      fontSize: '2.1rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.4rem !important',
    }
  },
  titleYellow: {
    fontSize: '1.6rem !important',
    color: '#FFC614 !important',
    maxWidth: '800px',
    margin: '0 auto !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.5rem !important',
      maxWidth: '750px',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.4rem !important',
      maxWidth: '700px',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.3rem !important',
      maxWidth: '90%',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.2rem !important',
      maxWidth: '95%',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.1rem !important',
      maxWidth: '100%',
    }
  },
  factsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '25px',
    '@media (max-width: 1200px)': {
      gap: '23px',
    },
    '@media (max-width: 960px)': {
      gap: '22px',
    },
    '@media (max-width: 600px)': {
      gap: '20px',
      flexDirection: 'column',
      alignItems: 'center',
    },
    '@media (max-width: 480px)': {
      gap: '18px',
    },
    '@media (max-width: 375px)': {
      gap: '15px',
    }
  },
  factCard: {
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
    maxWidth: '500px',
    width: '100%',
    position: 'relative',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
    '@media (max-width: 1200px)': {
      padding: '23px',
      maxWidth: '480px',
    },
    '@media (max-width: 960px)': {
      padding: '22px',
      maxWidth: '450px',
    },
    '@media (max-width: 600px)': {
      padding: '20px',
      maxWidth: '100%',
    },
    '@media (max-width: 480px)': {
      padding: '18px',
    },
    '@media (max-width: 375px)': {
      padding: '16px',
    }
  },
  quoteIcon: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    color: 'rgba(42, 43, 106, 0.1)',
    fontSize: '50px !important',
    '@media (max-width: 1200px)': {
      fontSize: '48px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '45px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '42px !important',
      top: '12px',
      right: '12px',
    },
    '@media (max-width: 480px)': {
      fontSize: '38px !important',
      top: '10px',
      right: '10px',
    },
    '@media (max-width: 375px)': {
      fontSize: '35px !important',
      top: '8px',
      right: '8px',
    }
  },
  factText: {
    fontSize: '1rem !important',
    lineHeight: '1.5 !important',
    color: '#333 !important',
    marginBottom: '15px !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.98rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.95rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.92rem !important',
      marginBottom: '12px !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.88rem !important',
      marginBottom: '8px !important',
    }
  },
  sourceText: {
    fontSize: '0.85rem !important',
    color: '#666 !important',
    fontStyle: 'italic',
    '@media (max-width: 1200px)': {
      fontSize: '0.83rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.78rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.75rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.72rem !important',
    }
  }
});

const IndustryBackedFacts = ({ titleBlue, titleYellow, facts = [] }) => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.titleBlue}>{titleBlue}</Typography>
          <Typography variant="h3" className={classes.titleYellow}>{titleYellow}</Typography>
        </Box>

        <Box className={classes.factsContainer}>
          {facts && facts.map((fact, index) => (
            <Paper key={index} className={classes.factCard} elevation={0}>
              <FormatQuoteIcon className={classes.quoteIcon} />
              <Typography className={classes.factText}>{fact.text}</Typography>
              <Typography className={classes.sourceText}>Source: {fact.source}</Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default IndustryBackedFacts;

// import React from 'react';
// import { Box, Typography, Container, Paper } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// const useStyles = makeStyles({
//   section: {
//     padding: '80px 0',
//     backgroundColor: '#ffffff',
//     position: 'relative',
//     overflow: 'hidden',
//     '@media (max-width: 1200px)': {
//       padding: '70px 0',
//     },
//     '@media (max-width: 960px)': {
//       padding: '60px 0',
//     },
//     '@media (max-width: 600px)': {
//       padding: '50px 0',
//     },
//     '@media (max-width: 480px)': {
//       padding: '40px 0',
//     },
//     '@media (max-width: 375px)': {
//       padding: '30px 0',
//     },
//   },
//   container: {
//     position: 'relative',
//     zIndex: 2,
//   },
//   titleContainer: {
//     textAlign: 'center',
//     marginBottom: '50px',
//     '@media (max-width: 1200px)': {
//       marginBottom: '45px',
//       padding: '28px',
//     },
//     '@media (max-width: 960px)': {
//       marginBottom: '40px',
//       padding: '25px',
//     },
//     '@media (max-width: 600px)': {
//       marginBottom: '35px',
//       padding: '20px',
//     },
//     '@media (max-width: 480px)': {
//       marginBottom: '30px',
//       padding: '18px',
//     },
//     '@media (max-width: 375px)': {
//       marginBottom: '25px',
//       padding: '15px',
//     },
//   },
//   titleBlue: {
//     fontSize: '2.5rem !important',
//     fontWeight: 'bold !important',
//     color: '#2A2B6A !important',
//     marginBottom: '10px !important',
//     '@media (max-width: 1200px)': {
//       fontSize: '2.3rem !important',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '2.1rem !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '1.9rem !important',
//       marginBottom: '8px !important',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '1.7rem !important',
//       marginBottom: '7px !important',
//     },
//     '@media (max-width: 375px)': {
//       fontSize: '1.5rem !important',
//       marginBottom: '6px !important',
//     },
//   },
//   titleYellow: {
//     fontSize: '1.8rem !important',
//     color: '#FFC614 !important',
//     maxWidth: '800px',
//     margin: '0 auto !important',
//     '@media (max-width: 1200px)': {
//       fontSize: '1.7rem !important',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '1.6rem !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '1.4rem !important',
//       maxWidth: '90%',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '1.3rem !important',
//     },
//     '@media (max-width: 375px)': {
//       fontSize: '1.2rem !important',
//     },
//   },
//   factsContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     gap: '30px',
//     '@media (max-width: 1200px)': {
//       gap: '28px',
//     },
//     '@media (max-width: 960px)': {
//       gap: '25px',
//     },
//     '@media (max-width: 600px)': {
//       gap: '20px',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     '@media (max-width: 480px)': {
//       gap: '18px',
//     },
//     '@media (max-width: 375px)': {
//       gap: '15px',
//     },
//   },
//   factCard: {
//     padding: '35px',
//     borderRadius: '18px',
//     backgroundColor: '#ffffff',
//     boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
//     maxWidth: '500px',
//     width: '100%',
//     position: 'relative',
//     overflow: 'hidden',
//     transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//     border: '2px solid transparent',
//     '&:hover': {
//       transform: 'translateY(-8px) scale(1.02)',
//       boxShadow: '0 20px 45px rgba(0, 0, 0, 0.15)',
//     },
//     // Pattern: Color 1, Color 2, Color 1, Color 2, Color 2, Color 1 (repeat)
//     '&:nth-child(6n+1), &:nth-child(6n+3), &:nth-child(6n+6)': {
//       backgroundColor: '#f0f4ff',
//       borderLeft: '6px solid #2A2B6A',
//       borderTop: '2px solid rgba(42, 43, 106, 0.1)',
//       '&:hover': {
//         backgroundColor: '#e8f1ff',
//         borderColor: '#2A2B6A',
//         boxShadow: '0 20px 45px rgba(42, 43, 106, 0.2)',
//       },
//     },
//     '&:nth-child(6n+2), &:nth-child(6n+4), &:nth-child(6n+5)': {
//       backgroundColor: '#fffbf0',
//       borderLeft: '6px solid #FFC614',
//       borderTop: '2px solid rgba(255, 198, 20, 0.1)',
//       '&:hover': {
//         backgroundColor: '#fff8e6',
//         borderColor: '#FFC614',
//         boxShadow: '0 20px 45px rgba(255, 198, 20, 0.2)',
//       },
//     },
//     '@media (max-width: 1200px)': {
//       padding: '28px',
//       maxWidth: '480px',
//     },
//     '@media (max-width: 960px)': {
//       padding: '25px',
//       maxWidth: '450px',
//     },
//     '@media (max-width: 600px)': {
//       padding: '20px',
//       maxWidth: '100%',
//     },
//     '@media (max-width: 480px)': {
//       padding: '18px',
//     },
//     '@media (max-width: 375px)': {
//       padding: '15px',
//     },
//   },
//   quoteIcon: {
//     position: 'absolute',
//     top: '20px',
//     right: '20px',
//     color: 'rgba(42, 43, 106, 0.2)',
//     fontSize: '55px !important',
//     transition: 'all 0.3s ease',
//     filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
//     '@media (max-width: 1200px)': {
//       fontSize: '55px !important',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '50px !important',
//       top: '18px',
//       right: '18px',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '45px !important',
//       top: '15px',
//       right: '15px',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '40px !important',
//       top: '12px',
//       right: '12px',
//     },
//     '@media (max-width: 375px)': {
//       fontSize: '35px !important',
//       top: '10px',
//       right: '10px',
//     },
//   },
//   factText: {
//     fontSize: '1.15rem !important',
//     lineHeight: '1.7 !important',
//     color: '#1a1a1a !important',
//     fontWeight: '600 !important',
//     marginBottom: '25px !important',
//     position: 'relative',
//     zIndex: 2,
//     textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
//     letterSpacing: '0.2px',
//     '@media (max-width: 1200px)': {
//       fontSize: '1.05rem !important',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '1rem !important',
//       marginBottom: '18px !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '0.95rem !important',
//       marginBottom: '15px !important',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '0.9rem !important',
//       marginBottom: '12px !important',
//     },
//     '@media (max-width: 375px)': {
//       fontSize: '0.85rem !important',
//       marginBottom: '10px !important',
//     },
//   },
//   sourceText: {
//     fontSize: '0.95rem !important',
//     color: '#555555 !important',
//     fontStyle: 'italic',
//     fontWeight: '500 !important',
//     background: 'linear-gradient(135deg, #666666 0%, #888888 100%)',
//     backgroundClip: 'text',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     textTransform: 'uppercase',
//     letterSpacing: '0.5px',
//     marginTop: '15px !important',
//     '@media (max-width: 960px)': {
//       fontSize: '0.85rem !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '0.8rem !important',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '0.75rem !important',
//     },
//     '@media (max-width: 375px)': {
//       fontSize: '0.7rem !important',
//     },
//   },
//   decorCircle: {
//     position: 'absolute',
//     borderRadius: '50%',
//     zIndex: 1,
//   },
//   circle1: {
//     width: '200px',
//     height: '200px',
//     top: '-100px',
//     right: '-50px',
//     backgroundColor: 'rgba(42, 43, 106, 0.06)',
//     '@media (max-width: 960px)': {
//       width: '180px',
//       height: '180px',
//       top: '-90px',
//       right: '-45px',
//     },
//     '@media (max-width: 600px)': {
//       width: '150px',
//       height: '150px',
//       top: '-75px',
//       right: '-35px',
//     },
//     '@media (max-width: 480px)': {
//       width: '120px',
//       height: '120px',
//       top: '-60px',
//       right: '-30px',
//     },
//     '@media (max-width: 375px)': {
//       width: '100px',
//       height: '100px',
//       top: '-50px',
//       right: '-25px',
//     },
//   },
//   circle2: {
//     width: '300px',
//     height: '300px',
//     bottom: '-150px',
//     left: '-100px',
//     backgroundColor: 'rgba(255, 198, 20, 0.05)',
//     '@media (max-width: 960px)': {
//       width: '250px',
//       height: '250px',
//       bottom: '-125px',
//       left: '-80px',
//     },
//     '@media (max-width: 600px)': {
//       width: '200px',
//       height: '200px',
//       bottom: '-100px',
//       left: '-70px',
//     },
//     '@media (max-width: 480px)': {
//       width: '160px',
//       height: '160px',
//       bottom: '-80px',
//       left: '-60px',
//     },
//     '@media (max-width: 375px)': {
//       width: '140px',
//       height: '140px',
//       bottom: '-70px',
//       left: '-50px',
//     },
//   },
// });

// const IndustryBackedFacts = ({ titleBlue, titleYellow, facts = [] }) => {
//   const classes = useStyles();

//   return (
//     <Box className={classes.section}>
//       <Container maxWidth="lg" className={classes.container}>
//         <Box className={classes.titleContainer}>
//           <Typography variant="h2" className={classes.titleBlue}>
//             {titleBlue}
//           </Typography>
//           <Typography variant="h3" className={classes.titleYellow}>
//             {titleYellow}
//           </Typography>
//         </Box>

//         <Box className={classes.factsContainer}>
//           {facts && facts.map((fact, index) => (
//             <Paper key={index} className={classes.factCard} elevation={0}>
//               <FormatQuoteIcon className={classes.quoteIcon} />
//               <Box className={`${classes.decorCircle} ${classes.circle1}`}></Box>
//               <Box className={`${classes.decorCircle} ${classes.circle2}`}></Box>
//               <Typography className={classes.factText}>
//                 {fact.text}
//               </Typography>
//               <Typography className={classes.sourceText}>
//                 Source: {fact.source}
//               </Typography>
//             </Paper>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default IndustryBackedFacts;