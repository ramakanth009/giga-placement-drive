// src/components/fullstackcomponents/faq/FullStackFaq.jsx
import React from 'react';
import Faq from '../../common/faq/Faq';

const FullStackFaq = () => {
  // FAQs data for fullstack program
  const faqData = [
    {
      id: 'fullstack-panel1',
      number: '1',
      question: 'How much time do I need to commit daily?',
      answer: 'The program requires 1-2 hours of daily commitment to cover the learning materials, complete assignments, and participate in live sessions. The schedule is flexible, allowing you to learn at your own pace while ensuring you complete the program within 30 days.',
    },
    {
      id: 'fullstack-panel2',
      number: '2',
      question: 'Is prior coding or math knowledge required?',
      answer: 'Basic programming familiarity is required. We provide comprehensive support for beginners while building your skills step-by-step.',
    },
    {
      id: 'fullstack-panel3',
      number: '3',
      question: 'What kind of projects will I build during the training?',
      answer: "You'll build mini projects tailored to your chosen job role—whether it's frontend, backend, or full stack. For example, you might build a responsive portfolio site, a login authentication system, or an API-powered dashboard.",
    },
    {
      id: 'fullstack-panel4',
      number: '4',
      question: 'How does the job placement work?',
      answer: "You'll be directly connected to 400+ job Opportunities looking for freshers with Job roles like web developer, Frontend Developer, Backend Developer, API Developer",
    },
    {
      id: 'fullstack-panel5',
      number: '5',
      question: 'What makes this different from free online courses?',
      answer: 'We provide structured learning, real-world projects, personalized feedback, and—most importantly—direct connections to companies actively hiring.',
    },
    {
      id: 'fullstack-panel6',
      number: '6',
      question: 'Is there a certificate upon completion?',
      answer: "Yes! You'll receive a verified completion certificate plus project certifications",
    },
    {
      id: 'fullstack-panel7',
      number: '7',
      question: 'Can I join if I’m still in college or just graduated?',
      answer: 'Absolutely. Our placement drive is designed for college students, recent graduates, and career switchers looking to enter the tech industry with practical job-ready training.',
    },
    {
      id: 'fullstack-panel8',
      number: '8',
      question: 'Is Full Stack Development a good career for freshers in 2025?',
      answer: 'Absolutely. With the rise of startups and product-based companies, full-stack developers are in high demand. Companies prefer freshers who can handle both frontend and backend, making you a versatile asset from day one.',
    },
  ];

  return (
    <Faq 
      faqData={faqData}
      title={<>Full Stack <span>Development FAQ'</span>s</>}
      subtitle="Common questions about our Full Stack Development program"
    />
  );
};

export default FullStackFaq;