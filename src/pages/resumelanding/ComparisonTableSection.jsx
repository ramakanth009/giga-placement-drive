import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, } from '@mui/material';
import { CheckCircle, Cancel, Warning } from '@mui/icons-material';
import makeStylesWithTheme from '../../styles/makeStylesAdapter';

const useStyles = makeStylesWithTheme((theme) => ({
  root: {
    padding: '3rem 1.5rem',
    background: '#fff',
    position: 'relative',
    overflow: 'hidden',
    // Add SVG grid background as ::before
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      background: `url("data:image/svg+xml,%3Csvg width='800' height='600' viewBox='0 0 800 600' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L100 80L200 40L300 120L400 60L500 140L600 100L700 180L800 120' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M0 200L100 120L200 180L300 100L400 160L500 80L600 140L700 60L800 100' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M0 400L100 320L200 380L300 300L400 360L500 280L600 340L700 260L800 300' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M0 600L100 520L200 580L300 500L400 560L500 480L600 540L700 460L800 500' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M0 0L0 200L0 400L0 600' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M100 80L100 120L100 320L100 520' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M200 40L200 180L200 380L200 580' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M300 120L300 100L300 300L300 500' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M400 60L400 160L400 360L400 560' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M500 140L500 80L500 280L500 480' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M600 100L600 140L600 340L600 540' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M700 180L700 60L700 260L700 460' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M800 120L800 100L800 300L800 500' stroke='%23F3F3F3' stroke-width='1'/%3E%3C/svg%3E") repeat`,
      backgroundSize: 'cover',
      pointerEvents: 'none',
      opacity: 1,
    },
    zIndex: 1,
    '@media (max-width: 1200px)': {
      padding: '2.5rem 1rem',
    },
    '@media (max-width: 960px)': {
      padding: '2rem 0.8rem',
    },
    '@media (max-width: 600px)': {
      padding: '1.5rem 0.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1.2rem 0.3rem',
    },
    '@media (max-width: 375px)': {
      padding: '1rem 0.2rem',
    },
  },
  container: {
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1200px)': {
      maxWidth: '100%',
    },
    '@media (max-width: 960px)': {
      padding: '0 0.3rem',
    },
    '@media (max-width: 600px)': {
      padding: '0 0.2rem',
    },
    '@media (max-width: 480px)': {
      padding: '0 0.1rem',
    },
    '@media (max-width: 375px)': {
      padding: '0',
    },
  },
  titleWrapper: {
    display: 'block',
    textAlign: 'center',
    width: '100%',
    marginBottom: '2rem',
    '@media (max-width: 1200px)': {
      marginBottom: '1.5rem',
    },
    '@media (max-width: 960px)': {
      marginBottom: '1.2rem',
    },
    '@media (max-width: 600px)': {
      marginBottom: '1rem',
    },
    '@media (max-width: 480px)': {
      marginBottom: '0.8rem',
    },
    '@media (max-width: 375px)': {
      marginBottom: '0.6rem',
    },
  },
  title: {
    fontSize: '2.4rem !important',
    fontWeight: '800 !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '0 !important',
    background: '#fff',
    borderRadius: '18px',
    display: 'inline-block',
    padding: '18px 35px',
    position: 'relative',
    zIndex: 2,
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    border: '1px solid #f0f0f0',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '2.1rem !important',
      padding: '16px 30px',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.8rem !important',
      padding: '14px 25px',
      borderRadius: '15px',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.5rem !important',
      padding: '12px 20px',
      borderRadius: '12px',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.2rem !important',
      padding: '8px 15px',
      borderRadius: '10px',
    },
    '@media (max-width: 375px)': {
      fontSize: '1rem !important',
      padding: '6px 12px',
      borderRadius: '8px',
    },
  },
  tableContainer: {
    background: '#fff',
    borderRadius: '20px',
    overflow: 'hidden',
    marginBottom: '2rem',
    boxShadow: '0 8px 40px 0 rgba(0,0,0,0.12)',
    border: '1px solid #e5e7eb',
    transition: 'all 0.3s ease',
    width: '100%',
    '&:hover': {
      boxShadow: '0 12px 50px 0 rgba(0,0,0,0.15)',
      transform: 'translateY(-2px)',
    },
    '@media (max-width: 1200px)': {
      borderRadius: '15px',
      marginBottom: '1.5rem',
    },
    '@media (max-width: 960px)': {
      borderRadius: '12px',
      marginBottom: '1.2rem',
    },
    '@media (max-width: 600px)': {
      borderRadius: '10px',
      marginBottom: '1rem',
    },
    '@media (max-width: 480px)': {
      borderRadius: '8px',
      marginBottom: '0.8rem',
    },
    '@media (max-width: 375px)': {
      borderRadius: '6px',
      marginBottom: '0.6rem',
    },
  },
  tableWrapper: {
    width: '100%',
    overflow: 'visible',
  },
  table: {
    width: '100%',
    tableLayout: 'fixed', // Forces equal column distribution
  },
  tableHead: {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e3f2fd 50%, #fff3c4 100%)',
  },
  headerCell: {
    color: '#1a202c',
    fontWeight: '700 !important',
    fontSize: '1rem !important',
    borderBottom: '2px solid #e5e7eb',
    padding: '1rem 0.5rem',
    textAlign: 'center',
    background: 'transparent',
    lineHeight: '1.2',
    wordWrap: 'break-word',
    '&:first-child': {
      width: '40%',
      textAlign: 'left',
    },
    '&:nth-child(2)': {
      width: '30%',
    },
    '&:nth-child(3)': {
      width: '30%',
    },
    '@media (max-width: 1200px)': {
      fontSize: '0.9rem !important',
      padding: '0.8rem 0.4rem',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.8rem !important',
      padding: '0.7rem 0.3rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.65rem !important',
      padding: '0.5rem 0.2rem',
      lineHeight: '1.1',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.6rem !important',
      padding: '0.4rem 0.15rem',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.55rem !important',
      padding: '0.3rem 0.1rem',
    },
  },
  tableRow: {
    '&:nth-of-type(even)': {
      background: '#f8fafc',
    },
    '&:hover': {
      background: 'linear-gradient(135deg, #fffde7 0%, #f3e5f5 100%)',
    },
    transition: 'all 0.2s ease',
  },
  tableCell: {
    color: '#374151',
    fontSize: '0.85rem !important',
    borderBottom: '1px solid #e5e7eb',
    padding: '0.8rem 0.5rem',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '1.3',
    wordWrap: 'break-word',
    '@media (max-width: 1200px)': {
      fontSize: '0.8rem !important',
      padding: '0.7rem 0.4rem',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.7rem !important',
      padding: '0.6rem 0.3rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.6rem !important',
      padding: '0.4rem 0.2rem',
      lineHeight: '1.2',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.55rem !important',
      padding: '0.3rem 0.15rem',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.5rem !important',
      padding: '0.25rem 0.1rem',
    },
  },
  featureCell: {
    fontWeight: '600 !important',
    color: '#1a202c !important',
    fontSize: '0.85rem !important',
    textAlign: 'left !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.6rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.55rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.5rem !important',
    },
  },
  iconCell: {
    textAlign: 'center !important',
    minWidth: 'auto',
    width: 'auto',
  },
  successIcon: {
    color: '#10b981',
    fontSize: '1.2rem !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.6rem !important',
    },
  },
  errorIcon: {
    color: '#ef4444',
    fontSize: '1.2rem !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.6rem !important',
    },
  },
  warningIcon: {
    color: '#f59e0b',
    fontSize: '1.2rem !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.8rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.6rem !important',
    },
  },
  statusText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.3rem',
    fontWeight: '600 !important',
    fontSize: '0.75rem !important',
    textAlign: 'center',
    '@media (max-width: 1200px)': {
      gap: '0.25rem',
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 960px)': {
      gap: '0.2rem',
      fontSize: '0.65rem !important',
    },
    '@media (max-width: 600px)': {
      gap: '0.15rem',
      fontSize: '0.5rem !important',
    },
    '@media (max-width: 480px)': {
      gap: '0.1rem',
      fontSize: '0.45rem !important',
    },
    '@media (max-width: 375px)': {
      gap: '0.05rem',
      fontSize: '0.4rem !important',
    },
  },
  successText: {
    color: '#10b981 !important',
    fontWeight: '600 !important',
  },
  errorText: {
    color: '#ef4444 !important',
    fontWeight: '600 !important',
  },
  warningText: {
    color: '#f59e0b !important',
    fontWeight: '600 !important',
  },
  ctaContainer: {
    textAlign: 'center',
    marginTop: '2rem',
    '@media (max-width: 1200px)': {
      marginTop: '1.5rem',
    },
    '@media (max-width: 960px)': {
      marginTop: '1.2rem',
    },
    '@media (max-width: 600px)': {
      marginTop: '1rem',
    },
    '@media (max-width: 480px)': {
      marginTop: '0.8rem',
    },
    '@media (max-width: 375px)': {
      marginTop: '0.6rem',
    },
  },
  ctaText: {
    fontSize: '1.4rem !important',
    fontWeight: '700 !important',
    color: '#ffc614 !important',
    textShadow: '0 2px 4px rgba(255, 198, 20, 0.3)',
    '@media (max-width: 1200px)': {
      fontSize: '1.2rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.8rem !important',
    },
  },
  // Responsive table features text shortening
  featureTextShort: {
    '@media (max-width: 600px)': {
      '& .full-text': {
        display: 'none',
      },
      '& .short-text': {
        display: 'inline',
      },
    },
  },
  featureTextFull: {
    '@media (max-width: 600px)': {
      '& .full-text': {
        display: 'inline',
      },
      '& .short-text': {
        display: 'none',
      },
    },
    '@media (min-width: 601px)': {
      '& .short-text': {
        display: 'none',
      },
    },
  },
}));

const comparisonData = [
  {
    feature: 'Free to Use',
    featureShort: 'Free',
    giga: { status: 'success', text: '100% Free' },
    others: { status: 'warning', text: 'Limited' }
  },
  {
    feature: 'Built for Freshers & Tech Roles',
    featureShort: 'Tech Focused',
    giga: { status: 'success', text: 'Specialized' },
    others: { status: 'warning', text: 'Generic' }
  },
  {
    feature: 'ATS Compatibility Tested',
    featureShort: 'ATS Ready',
    giga: { status: 'success', text: 'Tested' },
    others: { status: 'warning', text: 'Limited' }
  },
  {
    feature: 'Gen AI Skill Recommendations',
    featureShort: 'AI Skills',
    giga: { status: 'success', text: 'Yes' },
    others: { status: 'error', text: 'No' }
  },
  {
    feature: 'Real-Time Project Suggestions',
    featureShort: 'Projects',
    giga: { status: 'success', text: 'Yes' },
    others: { status: 'error', text: 'No' }
  },
  {
    feature: 'One-Click GitHub Projects',
    featureShort: 'GitHub',
    giga: { status: 'success', text: 'Yes' },
    others: { status: 'error', text: 'No' }
  },
];

const ComparisonTableSection = () => {
  const classes = useStyles();

  const renderStatusCell = (item) => {
    const { status, text } = item;
    let icon, textClass;
    
    switch (status) {
      case 'success':
        icon = <CheckCircle className={classes.successIcon} />;
        textClass = classes.successText;
        break;
      case 'error':
        icon = <Cancel className={classes.errorIcon} />;
        textClass = classes.errorText;
        break;
      case 'warning':
        icon = <Warning className={classes.warningIcon} />;
        textClass = classes.warningText;
        break;
      default:
        icon = null;
        textClass = '';
    }

    return (
      <Box className={classes.statusText}>
        {icon}
        <Typography className={textClass} component="span">
          {text}
        </Typography>
      </Box>
    );
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.titleWrapper}>
          <Typography className={classes.title}>
            Why <span>Giga Resume Builder?</span> Stands Out
          </Typography>
        </Box>

        <TableContainer component={Paper} className={classes.tableContainer}>
          <Box className={classes.tableWrapper}>
            <Table className={classes.table}>
              <TableHead className={classes.tableHead}>
                <TableRow>
                  <TableCell className={classes.headerCell}>Feature</TableCell>
                  <TableCell className={classes.headerCell}>Giga Resume</TableCell>
                  <TableCell className={classes.headerCell}>Others</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className={classes.tableRow}>
                    <TableCell className={`${classes.tableCell} ${classes.featureCell}`}>
                      <span className={`${classes.featureTextFull}`}>
                        <span className="full-text">{row.feature}</span>
                        <span className="short-text">{row.featureShort}</span>
                      </span>
                    </TableCell>
                    <TableCell className={`${classes.tableCell} ${classes.iconCell}`}>
                      {renderStatusCell(row.giga)}
                    </TableCell>
                    <TableCell className={`${classes.tableCell} ${classes.iconCell}`}>
                      {renderStatusCell(row.others)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </TableContainer>

        {/* <Box className={classes.ctaContainer}>
          <Typography className={classes.ctaText}>
            Access All these features for Free
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
};

export default ComparisonTableSection;