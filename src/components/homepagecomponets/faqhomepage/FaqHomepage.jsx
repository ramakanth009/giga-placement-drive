// src/components/homepagecomponets/faqhomepage/FaqHomepage.jsx
import React from 'react';
import Faq from '../../common/faq/Faq';

const FaqHomepage = () => {
  // FAQs data
  const faqData = [
    {
      id: 'panel1',
      number: '1',
      question: 'Who can join the Gigaversity Virtual Placement Drive?',
      answer: 'The Virtual Placement Drive is a structured placement initiative by Gigaversity where students are   trained in specific job roles and directly connected with companies actively hiring for those roles. It bridges the gap between learning and employment with hands-on, targeted training.',
    },
    {
      id: 'panel2',
      number: '2',
      question: 'What is Job Role Specific Training?',
      answer: 'Job Role Specific Training refers to focused training modules designed to prepare students for particular career paths. For example, learners are trained for roles like Front-End Developer, Back-End Developer, Data Analyst, and Data Scientist, ensuring they gain the exact skills companies are seeking.',
    },
    {
      id: 'panel3',
      number: '3',
      question: 'What are the benefits of joining a Virtual Placement Drive?',
      answer: `Gigaversity's Virtual Placement Drive offers a wide range of benefits, including:

• 1-week focused training based on your chosen domain and job role
• Access to 400+ job opportunities from top companies
• ATS-friendly resume optimization to boost your interview shortlisting chances
• Development of mini-projects to add to your portfolio
• Intensive focus on communication and soft skills to perform better in interviews`
    },
    {
      id: 'panel4',
      number: '4',
      question: 'Who can join the Gigaversity Virtual Placement Drive?',
      answer: 'Final-year students, fresh graduates, working professionals, and freelancers seeking job-ready skills and placements.',
    },
    {
      id: 'panel5',
      number: '5',
      question: 'How long is the training program?',
      answer: 'The program lasts 30 days, with job-specific training and hands-on learning',
    },
    {
      id: 'panel6',
      number: '6',
      question: 'What is the daily schedule like?',
      answer: '1-hour live interactive sessions, hands-on projects, and job preparation activities.',
    },
    {
      id: 'panel7',
      number: '7',
      question: 'Do I need prior experience to join?',
      answer: 'Basic familiarity is necessary. We provide extra support for beginners while building your skills step-by-step.',
    },
    {
      id: 'panel8',
      number: '8',
      question: 'Will I receive a certificate after completion?',
      answer: 'Yes, a verified completion and project certificate is provided upon successfully finishing the program.',
    },
    {
      id: 'panel9',
      number: '9',
      question: 'What job roles are covered in the program?',
      answer: 'Full Stack Development (Frontend, Backend, Database, API) and Data Science (Analyst, BI, Engineer, ML Associate).',
    },
  ];

  return (
    <Faq 
      faqData={faqData}
      title={<>FAQ<span>'s</span></>}
      subtitle="Commonly asked questions about our Virtual Placement Drive program"
    />
  );
};

export default FaqHomepage;