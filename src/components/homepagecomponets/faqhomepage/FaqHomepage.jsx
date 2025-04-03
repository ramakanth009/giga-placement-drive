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
    <Faq 
      faqData={faqData}
      title={<>FAQ<span>'s</span></>}
      subtitle="Commonly asked questions about our Virtual Placement Drive program"
    />
  );
};

export default FaqHomepage;