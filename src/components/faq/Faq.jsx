// src/components/faq/Faq.jsx
import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles({
  faqContainer: {
    padding: '60px 40px',
    maxWidth: '100%',
    margin: '0 auto',
    boxSizing: 'border-box',
    "@media (max-width: 960px)": {
      padding: '50px 30px',
    },
    "@media (max-width: 600px)": {
      padding: '40px 20px',
    },
  },
  titleBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '40px',
    "@media (max-width: 960px)": {
      marginBottom: '30px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '25px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    position: 'relative',
    display: 'inline-block',
    marginBottom: '10px !important',
    '& span': {
      color: '#FFC614 !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.2rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.8rem !important',
    },
  },
  accordionContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    "@media (max-width: 960px)": {
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
    "@media (max-width: 600px)": {
      borderRadius: '8px !important',
      marginBottom: '12px !important',
    },
  },
  accordionSummary: {
    padding: '0 24px !important',
    minHeight: '64px !important',
    '&.Mui-expanded': {
      minHeight: '64px !important',
    },
    "@media (max-width: 600px)": {
      padding: '0 16px !important',
      minHeight: '56px !important',
      '&.Mui-expanded': {
        minHeight: '56px !important',
      },
    },
  },
  summaryContent: {
    margin: '12px 0 !important',
    '&.Mui-expanded': {
      margin: '12px 0 !important',
    },
    "@media (max-width: 600px)": {
      margin: '10px 0 !important',
      '&.Mui-expanded': {
        margin: '10px 0 !important',
      },
    },
  },
  question: {
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
    color: '#2A2B6A !important',
    flexGrow: 1,
    "@media (max-width: 960px)": {
      fontSize: '1rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
    },
  },
  questionNumber: {
    color: '#FFC614 !important',
    fontWeight: 'bold !important',
    marginRight: '10px !important',
    "@media (max-width: 600px)": {
      marginRight: '8px !important',
    },
  },
  expandIcon: {
    color: '#2A2B6A !important',
    fontSize: '1.5rem !important',
    "@media (max-width: 600px)": {
      fontSize: '1.3rem !important',
    },
  },
  accordionDetails: {
    padding: '0 24px 24px !important',
    borderTop: '1px solid #EAF0F6',
    "@media (max-width: 600px)": {
      padding: '0 16px 16px !important',
    },
  },
  answer: {
    color: '#4A4A4A !important',
    fontSize: '1rem !important',
    lineHeight: '1.6 !important',
    "@media (max-width: 960px)": {
      fontSize: '0.95rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
      lineHeight: '1.5 !important',
    },
  },
});

const Faq = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      id: 'panel1',
      number: '1',
      question: 'Who can join the Gigaversity Virtual Placement Drive?',
      answer: 'This program is open to final-year students, recent graduates, career switchers, and freelancers looking to enhance their skills. Anyone interested in developing job-ready technical skills and connecting with hiring partners can join.',
    },
    {
      id: 'panel2',
      number: '2',
      question: 'How long is the training program?',
      answer: 'The Gigaversity Virtual Placement Drive is a 30-day intensive training program designed to quickly build your skills and connect you with employers.',
    },
    {
      id: 'panel3',
      number: '3',
      question: 'What is the daily schedule like?',
      answer: 'The program includes daily 1-hour live project sessions with industry experts, hands-on project work, personalized feedback, and job preparation activities. The schedule is flexible to accommodate different time zones and commitments.',
    },
    {
      id: 'panel4',
      number: '4',
      question: 'Do I need prior experience to join?',
      answer: 'No prior experience is required for beginners tracks. We offer different entry points based on your current skill level. Basic computer literacy and a strong willingness to learn are all you need to get started.',
    },
    {
      id: 'panel5',
      number: '5',
      question: 'Will I receive a certificate after completion?',
      answer: 'Yes, upon successful completion of the program, you will receive a Gigaversity certificate that validates your skills and can be shared with potential employers and on your professional profiles.',
    },
    {
      id: 'panel6',
      number: '6',
      question: 'How does the placement process work?',
      answer: 'Our placement process connects you directly with our 100+ hiring partners. We share your portfolio and skills with relevant companies, arrange interviews, and provide support throughout the hiring process. We add new opportunities weekly.',
    },
    {
      id: 'panel7',
      number: '7',
      question: 'What job roles are covered in the program?',
      answer: 'The program covers in-demand roles in Full Stack Development (UI/UX Developer, Frontend Developer, MERN Stack Developer, Backend Engineer, Full Stack Developer) and Data Science (Data Analyst, Data Scientist, ML Engineer, Data Engineer, AI Specialist).',
    },
  ];

  return (
    <Box className={classes.faqContainer}>
      <Box className={classes.titleBox}>
        <Typography variant="h2" className={classes.title}>
          FAQ'<span>s</span>
        </Typography>
      </Box>

      <Box className={classes.accordionContainer}>
        {faqData.map((faq) => (
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
  );
};

export default Faq;