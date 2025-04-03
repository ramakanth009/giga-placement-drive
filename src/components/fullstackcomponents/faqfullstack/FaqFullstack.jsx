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
      answer: 'No prior coding experience is necessary for our beginner tracks. We start with fundamentals and gradually build to advanced concepts. Basic computer skills and a willingness to learn are all you need. For math, just high school level knowledge is sufficient for most programming concepts.',
    },
    {
      id: 'fullstack-panel3',
      number: '3',
      question: 'How does the job placement work?',
      answer: 'Our placement process connects you directly with our network of 100+ hiring partners. After completing the program, your portfolio and skills profile are shared with relevant companies based on your preferences. We arrange interviews, provide interview preparation, and support you throughout the hiring process with dedicated placement coordinators.',
    },
    {
      id: 'fullstack-panel4',
      number: '4',
      question: 'What makes this different from free online courses?',
      answer: 'Unlike free courses, we provide structured learning with industry-aligned curriculum, daily live sessions with experienced developers, personalized feedback on your code, real-world projects for your portfolio, and direct connections to hiring companies. Our focused approach ensures you build job-ready skills in just 30 days with active support throughout.',
    },
    {
      id: 'fullstack-panel5',
      number: '5',
      question: 'Is there a certificate upon completion?',
      answer: 'Yes, you will receive an industry-recognized certificate upon successful completion of the program. This certificate validates your skills in Full Stack Development and can be added to your LinkedIn profile and resume. More importantly, you`ll have a portfolio of projects that demonstrate your practical abilities to employers.',
    },
  ];

  return (
    <Faq 
      faqData={faqData}
      title={<>Full Stack Development FAQ<span>'s</span></>}
      subtitle="Common questions about our Full Stack Development program"
    />
  );
};

export default FullStackFaq;