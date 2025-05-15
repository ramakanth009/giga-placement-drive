// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   container: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: '12px',
//     padding: '40px 0',
//     margin: '30px 0',
//     overflow: 'hidden',
//     '@media (max-width: 1200px)': {
//       padding: '35px 0',
//     },
//     '@media (max-width: 960px)': {
//       padding: '30px 0',
//       margin: '25px 0',
//     },
//     '@media (max-width: 600px)': {
//       padding: '25px 0',
//       margin: '20px 0',
//     },
//     '@media (max-width: 480px)': {
//       padding: '20px 0',
//       margin: '15px 0',
//     },
//     '@media (max-width: 375px)': {
//       padding: '18px 0',
//       margin: '12px 0',
//     },
//   },
//   title: {
//     fontSize: '26px !important',
//     fontWeight: '700 !important',
//     marginBottom: '20px !important',
//     padding: '0 30px',
//     '& .blue': {
//       color: '#2A2B6A'
//     },
//     '& .yellow': {
//       color: '#FFC614'
//     },
//     '@media (max-width: 1200px)': {
//       fontSize: '24px !important',
//       marginBottom: '18px !important',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '22px !important',
//       padding: '0 25px',
//       marginBottom: '16px !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '20px !important',
//       padding: '0 20px',
//       marginBottom: '15px !important',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '18px !important',
//       padding: '0 15px',
//       marginBottom: '12px !important',
//     },
//     '@media (max-width: 375px)': {
//       fontSize: '17px !important',
//       padding: '0 12px',
//       marginBottom: '10px !important',
//     }
//   },
//   sectionWrapper: {
//     marginBottom: '15px',
//     boxShadow: '0px 0px 44.63px 0px rgba(202, 199, 199, 0.32)',
//     borderRadius: '8px !important',
//     padding: '0 0 5px 0',
//     marginLeft: '150px',
//     marginRight: '150px',
//     '@media (max-width: 1200px)': {
//       marginLeft: '120px',
//       marginRight: '120px',
//     },
//     '@media (max-width: 960px)': {
//       marginLeft: '80px',
//       marginRight: '80px',
//       marginBottom: '12px',
//     },
//     '@media (max-width: 600px)': {
//       marginLeft: '40px',
//       marginRight: '40px',
//       marginBottom: '10px',
//     },
//     '@media (max-width: 480px)': {
//       marginLeft: '20px',
//       marginRight: '20px',
//       marginBottom: '8px',
//     },
//     '@media (max-width: 375px)': {
//       marginLeft: '15px',
//       marginRight: '15px',
//       marginBottom: '7px',
//     },
//   },
//   sectionLabel: {
//     display: 'inline-block',
//     backgroundColor: '#FFC614',
//     color: '#FFFFFF',
//     fontWeight: '600 !important',
//     padding: '10px 25px',
//     borderRadius: '0 30px 30px 15px',
//     fontSize: '18px !important',
//     marginBottom: '15px !important',
//     '@media (max-width: 1200px)': {
//       fontSize: '17px !important',
//       padding: '9px 22px',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '16px !important',
//       padding: '8px 20px',
//       marginBottom: '12px !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '15px !important',
//       padding: '7px 18px',
//       marginBottom: '10px !important',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '14px !important',
//       padding: '6px 15px',
//       marginBottom: '8px !important',
//     },
//     '@media (max-width: 375px)': {
//       fontSize: '13px !important',
//       padding: '5px 12px',
//       marginBottom: '7px !important',
//       borderRadius: '0 20px 20px 10px',
//     },
//   },
//   sectionContent: {
//     padding: '0 30px 15px',
//     '@media (max-width: 960px)': {
//       padding: '0 25px 12px',
//     },
//     '@media (max-width: 600px)': {
//       padding: '0 20px 10px',
//     },
//     '@media (max-width: 480px)': {
//       padding: '0 15px 8px',
//     },
//     '@media (max-width: 375px)': {
//       padding: '0 12px 7px',
//     },
//   },
//   pricingText: {
//     textAlign: 'center',
//     fontSize: '1.3rem !important',
//     color: '#2A2B6A !important',
//     '@media (max-width: 1200px)': {
//       fontSize: '1.25rem !important',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '1.2rem !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '1.15rem !important',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '1.1rem !important',
//     },
//     '@media (max-width: 375px)': {
//       fontSize: '1.05rem !important',
//     },
//   },
//   highlightedAmount: {
//     fontWeight: '700 !important',
//     fontSize: '1.3rem !important',
//     '@media (max-width: 1200px)': {
//       fontSize: '1.25rem !important',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '1.2rem !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '1.15rem !important',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '1.1rem !important',
//     },
//     '@media (max-width: 375px)': {
//       fontSize: '1.05rem !important',
//     },
//   },
//   supportText: {
//     textAlign: 'center',
//     color: '#2A2B6A !important',
//     fontWeight: '500 !important',
//     marginTop: '10px !important',
//     marginBottom: '5px !important',
//     fontSize: '1.1rem !important',
//     '@media (max-width: 1200px)': {
//       fontSize: '1.05rem !important',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '1rem !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '0.95rem !important',
//       marginTop: '8px !important',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '0.9rem !important',
//       marginTop: '7px !important',
//     },
//     '@media (max-width: 375px)': {
//       fontSize: '0.85rem !important',
//       marginTop: '6px !important',
//     },
//   },
//   buttonContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: '30px',
//     marginBottom: '10px',
//     '@media (max-width: 960px)': {
//       marginTop: '25px',
//     },
//     '@media (max-width: 600px)': {
//       marginTop: '20px',
//     },
//     '@media (max-width: 480px)': {
//       marginTop: '18px',
//     },
//     '@media (max-width: 375px)': {
//       marginTop: '15px',
//     },
//   },
//   enrollButton: {
//     backgroundColor: '#002746 !important',
//     color: 'white !important',
//     padding: '12px 40px !important',
//     fontSize: '18px !important',
//     fontWeight: '600 !important',
//     borderRadius: '8px !important',
//     textTransform: 'none !important',
//     '&:hover': {
//       backgroundColor: '#0a1e40 !important',
//     },
//     '@media (max-width: 1200px)': {
//       padding: '11px 35px !important',
//       fontSize: '17px !important',
//     },
//     '@media (max-width: 960px)': {
//       padding: '10px 30px !important',
//       fontSize: '16px !important',
//     },
//     '@media (max-width: 600px)': {
//       padding: '9px 25px !important',
//       fontSize: '15px !important',
//     },
//     '@media (max-width: 480px)': {
//       padding: '8px 20px !important',
//       fontSize: '14px !important',
//     },
//     '@media (max-width: 375px)': {
//       padding: '7px 18px !important',
//       fontSize: '13px !important',
//     },
//   }
// });

// const ProgramFee = ({ 
//   programName, 
//   monthlyFee, 
//   maxMonths, 
//   scholarshipText, 
//   supportText,
//   onEnrollClick
// }) => {
//   const classes = useStyles();

//   return (
//     <Box className={classes.container}>
//       <Typography className={classes.title}>
//         <span className="blue">{programName}</span> <span className="yellow">Program Fee</span>
//       </Typography>
      
//       {/* Pricing Section */}
//       <Box className={classes.sectionWrapper}>
//         <Typography className={classes.sectionLabel}>
//           Pricing
//         </Typography>
//         <Box className={classes.sectionContent}>
//           <Typography className={classes.pricingText}>
//             Starting from <span className={classes.highlightedAmount}>INR {monthlyFee} / month</span>
//           </Typography>
//           <Typography className={classes.supportText}>
//             Flexible EMI options available for up to <span style={{ fontWeight: 'bold' }}>{maxMonths}</span>.
//           </Typography>
//         </Box>
//       </Box>
      
//       {/* Scholarship Section */}
//       <Box className={classes.sectionWrapper}>
//         <Typography className={classes.sectionLabel}>
//           Scholarship Opportunity
//         </Typography>
//         <Box className={classes.sectionContent}>
//           <Typography className={classes.supportText}>
//             {scholarshipText}
//           </Typography>
//         </Box>
//       </Box>
      
//       {/* Support Section */}
//       <Box className={classes.sectionWrapper}>
//         <Typography className={classes.sectionLabel}>
//           Support for Physically Challenged Individuals
//         </Typography>
//         <Box className={classes.sectionContent}>
//           <Typography className={classes.supportText}>
//             {supportText}
//           </Typography>
//         </Box>
//       </Box>
      
//       {/* Enroll Button */}
//       <Box className={classes.buttonContainer}>
//         <Button 
//           variant="contained" 
//           className={classes.enrollButton} 
//           onClick={onEnrollClick}
//         >
//           Enroll Now
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default ProgramFee;

// src/components/common/fulltime/programfee/ProgramFeeNew.jsx
import React from 'react';
import { Box, Typography, Button, Paper, Divider, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CoffeeIcon from '@mui/icons-material/Coffee';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import ApartmentIcon from '@mui/icons-material/Apartment';

const useStyles = makeStyles({
  container: {
    padding: '50px 0',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 960px)': {
      padding: '40px 0',
    },
    '@media (max-width: 600px)': {
      padding: '30px 0',
    },
  },
  feeCard: {
    maxWidth: '1000px',
    margin: '0 auto',
    borderRadius: '16px !important',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08) !important',
    overflow: 'hidden',
    background: 'white',
  },
  header: {
    padding: '30px 40px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #4A4C9B 100%)',
    color: 'white',
    '@media (max-width: 600px)': {
      padding: '25px 20px',
    },
  },
  title: {
    fontSize: '2.2rem !important',
    fontWeight: 'bold !important',
    marginBottom: '8px !important',
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.5rem !important',
    },
  },
  highlight: {
    color: '#FFC614 !important',
  },
  subtitle: {
    fontSize: '1.1rem !important',
    opacity: '0.9',
    maxWidth: '800px',
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
  },
  content: {
    padding: '40px',
    '@media (max-width: 600px)': {
      padding: '25px 20px',
    },
  },
  priceRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '30px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '20px',
    },
  },
  priceBox: {
    padding: '25px',
    borderRadius: '12px',
    background: 'rgba(42, 43, 106, 0.05)',
    border: '1px solid rgba(42, 43, 106, 0.1)',
    '@media (max-width: 600px)': {
      padding: '20px',
      width: '100%',
    },
  },
  priceLabel: {
    fontSize: '1rem !important',
    color: '#666 !important',
    marginBottom: '10px !important',
    fontWeight: '500 !important',
  },
  priceValue: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '5px !important',
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
  },
  comparisonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  comparisonIcon: {
    color: '#FFC614',
    marginRight: '8px',
  },
  comparisonText: {
    fontSize: '0.9rem !important',
    color: '#666 !important',
  },
  divider: {
    margin: '30px 0 !important',
  },
  tagline: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '30px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem !important',
    },
  },
  benefitsContainer: {
    marginBottom: '30px',
  },
  benefitTitle: {
    fontSize: '1.3rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
    },
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    background: 'white',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    },
  },
  benefitIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: 'rgba(42, 43, 106, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2A2B6A',
  },
  benefitContent: {
    flex: '1',
  },
  benefitItemTitle: {
    fontSize: '1.1rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '5px !important',
  },
  benefitItemText: {
    fontSize: '0.9rem !important',
    color: '#666 !important',
  },
  applyButton: {
    background: 'linear-gradient(135deg, #2A2B6A 0%, #4A4C9B 100%) !important',
    color: 'white !important',
    padding: '12px 30px !important',
    borderRadius: '8px !important',
    fontWeight: 'bold !important',
    fontSize: '1.1rem !important',
    display: 'block !important',
    margin: '0 auto !important',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease !important',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 25px rgba(42, 43, 106, 0.3) !important',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      fontSize: '1rem !important',
    },
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  chip: {
    background: 'rgba(42, 43, 106, 0.1) !important',
    color: '#2A2B6A !important',
    fontWeight: '500 !important',
    padding: '6px 12px !important',
    '&:hover': {
      background: 'rgba(42, 43, 106, 0.2) !important',
    },
  },
});

const ProgramFee = ({ programName, monthlyFee, totalFee, onApplyClick }) => {
  const classes = useStyles();

  const benefits = [
    {
      icon: <SchoolIcon />,
      title: '12 Months of Guided Learning',
      description: 'AI-enhanced tools and personalized mentorship'
    },
    {
      icon: <CodeIcon />,
      title: 'Real-World Projects',
      description: 'Inspired by startup products and industry needs'
    },
    {
      icon: <GroupsIcon />,
      title: 'Peer Reviews',
      description: 'Team-based learning with industry-standard workflows'
    },
    {
      icon: <WorkIcon />,
      title: 'Career-Focused Training',
      description: `Specialized preparation for ${programName} roles`
    }
  ];

  return (
    <Box className={classes.container}>
      <Paper className={classes.feeCard} elevation={0}>
        <Box className={classes.header}>
          <Typography className={classes.title}>
            Invest in Your Future — <span className={classes.highlight}>Not Just a Course Fee</span>
          </Typography>
          <Typography className={classes.subtitle}>
            A 12-month career investment for real-world skills, AI tools, and job-ready projects.
          </Typography>
        </Box>
        
        <Box className={classes.content}>
          <Box className={classes.priceRow}>
            <Box className={classes.priceBox}>
              <Typography className={classes.priceLabel}>Total Investment</Typography>
              <Typography className={classes.priceValue}>₹{totalFee}</Typography>
              <Box className={classes.comparisonContainer}>
                <ApartmentIcon className={classes.comparisonIcon} />
                <Typography className={classes.comparisonText}>
                  EMI options available
                </Typography>
              </Box>
            </Box>
            
            <Box className={classes.priceBox}>
              <Typography className={classes.priceLabel}>Monthly Investment</Typography>
              <Typography className={classes.priceValue}>₹{monthlyFee}/month</Typography>
              <Box className={classes.comparisonContainer}>
                <CoffeeIcon className={classes.comparisonIcon} />
                <Typography className={classes.comparisonText}>
                  Less than your daily coffee
                </Typography>
              </Box>
            </Box>
          </Box>
          
          <Box className={classes.chipContainer}>
            <Chip label="One-Time Investment" className={classes.chip} />
            <Chip label="Lifetime Return" className={classes.chip} />
            <Chip label="Cost of Skill > Cost of Degree" className={classes.chip} />
          </Box>
          
          <Divider className={classes.divider} />
          
          <Typography className={classes.tagline}>
            Not expense, but investment — Skills that pay dividends for life
          </Typography>
          
          <Box className={classes.benefitsContainer}>
            <Typography className={classes.benefitTitle}>What You Get:</Typography>
            <Box className={classes.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <Box key={index} className={classes.benefitItem}>
                  <Box className={classes.benefitIcon}>
                    {benefit.icon}
                  </Box>
                  <Box className={classes.benefitContent}>
                    <Typography className={classes.benefitItemTitle}>
                      {benefit.title}
                    </Typography>
                    <Typography className={classes.benefitItemText}>
                      {benefit.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          
          <Button 
            variant="contained" 
            className={classes.applyButton}
            onClick={onApplyClick}
          >
            Start Your Career Investment
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProgramFee;