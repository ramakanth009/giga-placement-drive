// src/components/common/faq/Faq.jsx
import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles({
  faqContainer: {
    padding: '20px 40px',
    maxWidth: '100%',
    margin: '0 auto',
    boxSizing: 'border-box',
    "@media (max-width: 1200px)": {
      padding: '55px 35px',
    },
    "@media (max-width: 960px)": {
      padding: '50px 30px',
    },
    "@media (max-width: 600px)": {
      padding: '40px 20px',
    },
    "@media (max-width: 480px)": {
      padding: '35px 15px',
    },
    "@media (max-width: 375px)": {
      padding: '30px 12px',
    },
  },
  titleBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '40px',
    "@media (max-width: 1200px)": {
      marginBottom: '35px',
    },
    "@media (max-width: 960px)": {
      marginBottom: '30px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '25px',
    },
    "@media (max-width: 480px)": {
      marginBottom: '22px',
    },
    "@media (max-width: 375px)": {
      marginBottom: '20px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    position: 'relative',
    display: 'inline-block',
    marginBottom: '10px !important',
    textAlign: 'center',
    '& span': {
      color: '#FFC614 !important',
    },
    "@media (max-width: 1200px)": {
      fontSize: '2.3rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.2rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.8rem !important',
      marginBottom: '8px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.6rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '1.4rem !important',
      marginBottom: '6px !important',
    },
  },
  accordionContainer: {
    maxWidth: '100%',
    margin: '0 auto',
    "@media (max-width: 1200px)": {
      maxWidth: '95%',
    },
    "@media (max-width: 960px)": {
      maxWidth: '100%',
    },
    "@media (max-width: 480px)": {
      maxWidth: '100%',
    },
  },
  accordion: {
    boxShadow: 'none !important',
    border: '1px solid #EAF0F6 !important',
    borderRadius: '12px !important',
    marginBottom: '16px !important',
    '&:before': {
      display: 'none',
    },
    '&.Mui-expanded': {
      margin: '0 0 16px 0 !important',
    },
    "@media (max-width: 1200px)": {
      marginBottom: '14px !important',
      '&.Mui-expanded': {
        margin: '0 0 14px 0 !important',
      },
    },
    "@media (max-width: 960px)": {
      marginBottom: '14px !important',
      '&.Mui-expanded': {
        margin: '0 0 14px 0 !important',
      },
    },
    "@media (max-width: 600px)": {
      borderRadius: '8px !important',
      marginBottom: '12px !important',
      '&.Mui-expanded': {
        margin: '0 0 12px 0 !important',
      },
    },
    "@media (max-width: 480px)": {
      marginBottom: '10px !important',
      '&.Mui-expanded': {
        margin: '0 0 10px 0 !important',
      },
    },
    "@media (max-width: 375px)": {
      marginBottom: '8px !important',
      borderRadius: '6px !important',
      '&.Mui-expanded': {
        margin: '0 0 8px 0 !important',
      },
    },
  },
  accordionSummary: {
    padding: '0 24px !important',
    minHeight: '64px !important',
    '&.Mui-expanded': {
      minHeight: '64px !important',
    },
    "@media (max-width: 1200px)": {
      padding: '0 22px !important',
      minHeight: '62px !important',
      '&.Mui-expanded': {
        minHeight: '62px !important',
      },
    },
    "@media (max-width: 960px)": {
      padding: '0 20px !important',
      minHeight: '60px !important',
      '&.Mui-expanded': {
        minHeight: '60px !important',
      },
    },
    "@media (max-width: 600px)": {
      padding: '0 16px !important',
      minHeight: '56px !important',
      '&.Mui-expanded': {
        minHeight: '56px !important',
      },
    },
    "@media (max-width: 480px)": {
      padding: '0 14px !important',
      minHeight: '52px !important',
      '&.Mui-expanded': {
        minHeight: '52px !important',
      },
    },
    "@media (max-width: 375px)": {
      padding: '0 12px !important',
      minHeight: '48px !important',
      '&.Mui-expanded': {
        minHeight: '48px !important',
      },
    },
  },
  summaryContent: {
    margin: '12px 0 !important',
    '&.Mui-expanded': {
      margin: '12px 0 !important',
    },
    "@media (max-width: 1200px)": {
      margin: '11px 0 !important',
      '&.Mui-expanded': {
        margin: '11px 0 !important',
      },
    },
    "@media (max-width: 960px)": {
      margin: '11px 0 !important',
      '&.Mui-expanded': {
        margin: '11px 0 !important',
      },
    },
    "@media (max-width: 600px)": {
      margin: '10px 0 !important',
      '&.Mui-expanded': {
        margin: '10px 0 !important',
      },
    },
    "@media (max-width: 480px)": {
      margin: '9px 0 !important',
      '&.Mui-expanded': {
        margin: '9px 0 !important',
      },
    },
    "@media (max-width: 375px)": {
      margin: '8px 0 !important',
      '&.Mui-expanded': {
        margin: '8px 0 !important',
      },
    },
  },
  question: {
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    flexGrow: 1,
    "@media (max-width: 1200px)": {
      fontSize: '1.05rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.85rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.8rem !important',
    },
  },
  questionNumber: {
    color: '#FFC614 !important',
    fontWeight: 'bold !important',
    marginRight: '10px !important',
    "@media (max-width: 1200px)": {
      marginRight: '9px !important',
    },
    "@media (max-width: 960px)": {
      marginRight: '9px !important',
    },
    "@media (max-width: 600px)": {
      marginRight: '8px !important',
    },
    "@media (max-width: 480px)": {
      marginRight: '7px !important',
    },
    "@media (max-width: 375px)": {
      marginRight: '6px !important',
    },
  },
  expandIcon: {
    color: '#2A2B6A !important',
    fontSize: '1.5rem !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.4rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.3rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.2rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.1rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '1rem !important',
    },
  },
  accordionDetails: {
    padding: '0 24px 24px !important',
    borderTop: '1px solid #EAF0F6',
    "@media (max-width: 1200px)": {
      padding: '0 22px 22px !important',
    },
    "@media (max-width: 960px)": {
      padding: '0 20px 20px !important',
    },
    "@media (max-width: 600px)": {
      padding: '0 16px 16px !important',
    },
    "@media (max-width: 480px)": {
      padding: '0 14px 14px !important',
    },
    "@media (max-width: 375px)": {
      padding: '0 12px 12px !important',
    },
  },
  answer: {
    color: '#4A4A4A !important',
    fontSize: '1rem !important',
    lineHeight: '1.6 !important',
    whiteSpace: 'pre-line !important',
    "@media (max-width: 1200px)": {
      fontSize: '0.98rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '0.95rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
      lineHeight: '1.5 !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.85rem !important',
      lineHeight: '1.45 !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.8rem !important',
      lineHeight: '1.4 !important',
    },
  },
  columnContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    "@media (max-width: 1200px)": {
      gap: '20px',
    },
    "@media (max-width: 960px)": {
      gap: '16px',
    },
    "@media (max-width: 600px)": {
      gap: '10px',
      flexDirection: 'column',
    },
    "@media (max-width: 480px)": {
      gap: '8px',
    },
    "@media (max-width: 375px)": {
      gap: '6px',
    },
  },
  column: {
    flex: 1,
    minWidth: '45%',
    "@media (max-width: 1200px)": {
      minWidth: '45%',
    },
    "@media (max-width: 960px)": {
      minWidth: '45%',
    },
    "@media (max-width: 600px)": {
      minWidth: '100%',
    },
    "@media (max-width: 480px)": {
      minWidth: '100%',
    },
    "@media (max-width: 375px)": {
      minWidth: '100%',
    },
  },
});

const Faq = ({ faqData, title, subtitle }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Logic to distribute FAQs between columns
  const distributeItems = (items) => {
    const totalItems = items.length;
    const firstColumnCount = totalItems % 2 === 0 ? totalItems / 2 : Math.ceil(totalItems / 2);
    
    return {
      firstColumn: items.slice(0, firstColumnCount),
      secondColumn: items.slice(firstColumnCount)
    };
  };

  const { firstColumn, secondColumn } = distributeItems(faqData);

  return (
    <Box className={classes.faqContainer}>
      <Box className={classes.titleBox}>
        <Typography variant="h2" className={classes.title}>
          {typeof title === 'object' ? title : <>Frequently Asked <span>Questions</span></>}
        </Typography>
        {subtitle && (
          <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: '800px', mb: 3 }}>
            {subtitle}
          </Typography>
        )}
      </Box>

      <Box className={classes.columnContainer}>
        {/* First Column */}
        <Box className={classes.column}>
          {firstColumn.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
              className={classes.accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                className={classes.accordionSummary}
                classes={{
                  content: classes.summaryContent,
                }}
                aria-controls={`${faq.id}-content`}
                id={`${faq.id}-header`}
              >
                <Box display="flex" alignItems="center" width="100%">
                  <Typography className={classes.question}>
                    <span className={classes.questionNumber}>{faq.number}.</span>
                    {faq.question}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography className={classes.answer}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Second Column */}
        <Box className={classes.column}>
          {secondColumn.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
              className={classes.accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                className={classes.accordionSummary}
                classes={{
                  content: classes.summaryContent,
                }}
                aria-controls={`${faq.id}-content`}
                id={`${faq.id}-header`}
              >
                <Box display="flex" alignItems="center" width="100%">
                  <Typography className={classes.question}>
                    <span className={classes.questionNumber}>{faq.number}.</span>
                    {faq.question}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography className={classes.answer}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Faq;