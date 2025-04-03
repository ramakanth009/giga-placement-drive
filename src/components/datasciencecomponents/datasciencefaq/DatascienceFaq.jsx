// src/components/datasciencecomponents/faq/DataScienceFaq.jsx
import React from 'react';
import Faq from '../../common/faq/Faq';

const DataScienceFaq = () => {
  // FAQs data for data science program
  const faqData = [
    {
      id: 'datascience-panel1',
      number: '1',
      question: 'Who can join the Gigaversity Data Science Program?',
      answer: 'This program is open to final-year students, recent graduates, career switchers, and professionals looking to upskill. Anyone interested in developing job-ready data skills and connecting with hiring partners in the analytics and AI fields can join.',
    },
    {
      id: 'datascience-panel2',
      number: '2',
      question: 'How long is the training program?',
      answer: 'The Gigaversity Data Science Program is a 30-day intensive training designed to build your analytical skills quickly and connect you with employers seeking data talent.',
    },
    {
      id: 'datascience-panel3',
      number: '3',
      question: 'What is the daily schedule like?',
      answer: 'The program includes daily 1-hour live sessions with data science experts, hands-on project work with real datasets, personalized feedback on your code and models, and job preparation activities. The schedule is flexible to accommodate different time zones and commitments.',
    },
    {
      id: 'datascience-panel4',
      number: '4',
      question: 'Do I need prior experience to join?',
      answer: 'No prior data science experience is required for our beginner tracks. We start with Python fundamentals and gradually introduce analytics concepts. Basic math knowledge (high school level algebra and statistics) is helpful but not mandatory as we cover essential concepts during the training.',
    },
    {
      id: 'datascience-panel5',
      number: '5',
      question: 'Will I receive a certificate after completion?',
      answer: 'Yes, upon successful completion of the program and its projects, you will receive a Gigaversity Data Science certificate that validates your skills in data analysis, visualization, and machine learning fundamentals. This certificate can be shared with potential employers and added to your professional profiles.',
    },
  ];

  return (
    <Faq 
      faqData={faqData}
      title={<>Data Science FAQ<span>'s</span></>}
      subtitle="Common questions about our Data Science program"
    />
  );
};

export default DataScienceFaq;