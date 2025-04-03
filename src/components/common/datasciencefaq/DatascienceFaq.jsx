import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles({
  faqContainer: {
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    padding: '40px 0',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#06183D !important',
    '& span': {
      color: '#FFC614 !important',
    },
  },
  accordionContainer: {
    maxWidth: '760px',
    margin: '0 auto',
  },
  accordion: {
    boxShadow: 'none !important',
    borderRadius: '0 !important',
    '&:before': {
      display: 'none',
    },
    '&.Mui-expanded': {
      margin: '0 !important',
    },
    borderBottom: '1px solid #E0E0E0',
  },
  accordionSummary: {
    padding: '24px 0 !important',
    '&.Mui-expanded': {
      minHeight: '48px !important',
    },
  },
  summaryContent: {
    margin: '0 !important',
    '&.Mui-expanded': {
      margin: '0 !important',
    },
  },
  questionContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  questionNumber: {
    color: '#FFC614 !important',
    fontWeight: 'bold !important',
    marginRight: '12px !important',
    fontSize: '1.25rem !important',
  },
  question: {
    fontSize: '1.125rem !important',
    fontWeight: '600 !important',
    color: '#06183D !important',
  },
  expandIcon: {
    color: '#06183D !important',
  },
  accordionDetails: {
    padding: '0 0 24px 36px !important',
  },
  answer: {
    color: '#4A4A4A !important',
    fontSize: '1rem !important',
    lineHeight: '1.6 !important',
  },
});

const DataScienceFaq = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqItems = [
    {
      id: 'panel1',
      number: '1.',
      question: 'Who can join the Gigaversity Data Science Program?',
      answer: 'This program is open to final-year students, recent graduates, career switchers, and professionals looking to upskill. Anyone interested in developing job-ready data skills and connecting with hiring partners in the analytics and AI fields can join.'
    },
    {
      id: 'panel2',
      number: '2.',
      question: 'How long is the training program?',
      answer: 'The Gigaversity Data Science Program is a 30-day intensive training designed to build your analytical skills quickly and connect you with employers seeking data talent.'
    },
    {
      id: 'panel3',
      number: '3.',
      question: 'What is the daily schedule like?',
      answer: 'The program includes daily 1-hour live sessions with data science experts, hands-on project work with real datasets, personalized feedback on your code and models, and job preparation activities. The schedule is flexible to accommodate different time zones and commitments.'
    },
    {
      id: 'panel4',
      number: '4.',
      question: 'Do I need prior experience to join?',
      answer: 'No prior data science experience is required for our beginner tracks. We start with Python fundamentals and gradually introduce analytics concepts. Basic math knowledge (high school level algebra and statistics) is helpful but not mandatory as we cover essential concepts during the training.'
    },
    {
      id: 'panel5',
      number: '5.',
      question: 'Will I receive a certificate after completion?',
      answer: 'Yes, upon successful completion of the program and its projects, you will receive a Gigaversity Data Science certificate that validates your skills in data analysis, visualization, and machine learning fundamentals. This certificate can be shared with potential employers and added to your professional profiles.'
    },
  ];

  return (
    <Box className={classes.faqContainer}>
      <Box className={classes.titleContainer}>
        <Typography variant="h2" className={classes.title}>
          FAQ<span>'S</span>
        </Typography>
      </Box>

      <Box className={classes.accordionContainer}>
        {faqItems.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            className={classes.accordion}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
              className={classes.accordionSummary}
              classes={{
                content: classes.summaryContent,
              }}
            >
              <Box className={classes.questionContainer}>
                <Typography className={classes.questionNumber}>{item.number}</Typography>
                <Typography className={classes.question}>{item.question}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Typography className={classes.answer}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default DataScienceFaq;