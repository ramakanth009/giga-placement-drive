// src/components/homepagecomponets/faqhomepage/FaqHomepage.jsx
import React from 'react';
import Faq from '../../common/faq/Faq';

const FaqHomepage = () => {
  // FAQs data
  const faqData = [
    {
      id: 'panel1',
      number: '1',
      question: 'What is Gigaversity and how is it different from other tech institutes?',
      answer: 'Gigaversity is India’s premier in-campus tech ecosystem combining advanced labs, real product building, personalized mentorship, and startup funding support—all designed to turn students into industry-ready professionals.',
    },
    {
      id: 'panel2',
      number: '2',
      question: 'What is the duration of the Gigaversity tech programs?',
      answer: 'Gigaversity offers a structured 12-month program—9 months of hands-on learning and product development, followed by 3 months of Career Readiness Training (CRT) including internships and job preparation.',
    },
    {
      id: 'panel3',
      number: '3',
      question: 'Is Gigaversity a residential or campus-based program?',
      answer: `Yes, Gigaversity is an in-campus, immersive learning experience, where students live, learn, and build products in a real tech ecosystem with state-of-the-art infrastructure.`
    },
    {
      id: 'panel4',
      number: '4',
      question: 'Will I get startup funding support at Gigaversity?',
      answer: 'Absolutely! At Gigaversity, selected students receive up to ₹1 Lakh in funding to build, scale, and launch their tech startup idea from within the campus.',
    },
    {
      id: 'panel5',
      number: '5',
      question: 'What kind of projects will I work on at Gigaversity?',
      answer: 'You’ll work on tech incubated, real-world products inside our Product Chamber—ranging from E-Commerce platforms to AI-based applications, using industry-standard tools and agile practices.',
    },
    
    {
      id: 'panel6',
      number: '6',
      question: 'What is the structure of the 12-month learning journey at Gigaversity?',
      answer: `The journey includes 4 phases
              1. Foundation Phase (Months 1–3)
              2. Specialization Phase (Months 4–6)
              3. Product Building Phase (Months 7–9)
              4. Career Launch Phase (Months 10–12)
`,
    },
    {
      id: 'panel7',
      number: '7',
      question: 'What is the Career Readiness Training (CRT) at Gigaversity?',
      answer: 'CRT is a 3-month training module that prepares you for tech careers with mock interviews, internship matching, resume optimization, and communication skill building.',
    },
    {
      id: 'panel8',
      number: '8',
      question: 'Does Gigaversity offer support for launching my startup idea?',
      answer: 'Yes. Through Startup Studio and Venture Hall, you get expert mentorship, product feedback, and access to startup pitching opportunities with VCs and investors.',
    },
    {
      id: 'panel9',
      number: '9',
      question: 'How does Gigaversity support job placement?',
      answer: 'Gigaversity provides access to a smart placement portal, 1000+ verified job openings, employer-facing skill assessments, and exclusive hiring drives with over 300 partners.',
    },
    {
      id: 'panel10',
      number: '10',
      question: 'What makes Gigaversity ideal for career switchers or those with gaps?',
      answer: 'Gigaversity is designed for career restarters, graduates with gaps, and professionals seeking tech transitions—offering personalized pathways to re-enter the tech world confidently.',
    },
    {
      id: 'panel11',
      number: '11',
      question: 'How are students mentored at Gigaversity?',
      answer: 'You’ll receive 1:1 mentorship from startup founders, CTOs, and domain experts at the Mentor Hub, guiding you through every phase of your learning and product development.',
    },
    {
      id: 'panel12',
      number: '12',
      question: 'Who should apply to Gigaversity?',
      answer: 'Anyone passionate about building a tech career—freshers, working professionals, those misled by fake job promises, or anyone looking for hands-on, funded, in-campus learning.',
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