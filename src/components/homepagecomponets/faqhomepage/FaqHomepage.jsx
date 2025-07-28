// src/components/homepagecomponets/faqhomepage/FaqHomepage.jsx
import React from 'react';
import Faq from '../../common/faq/Faq';

const FaqHomepage = () => {
  // FAQs data
  const faqData = [
    {
      id: 'panel1',
      number: '1',
      question: 'How is Gigaversity different from other EdTech platforms?',
      answer: 'Combines product-based learning, AI-driven assessments, startup funding, 150+ hiring partners, and job portal for career success.',
    },
    {
      id: 'panel2',
      number: '2',
      question: 'What does product-based learning mean at Gigaversity?',
      answer: 'Learn by building real products like CRMs, e-commerce, and OTT apps, gaining portfolio-ready skills employers value.',
    },
    {
      id: 'panel3',
      number: '3',
      question: 'Does Gigaversity offer offline or online classes?',
      answer: `Both. Attend live online sessions or study at our Madhapur, Hyderabad campus with mentors.`
    },
    {
      id: 'panel4',
      number: '4',
      question: 'What programs does Gigaversity offer?',
      answer: 'Full-time Data Science, Full Stack Development, and Master Internship programs with product-building experience.',
    },
    {
      id: 'panel5',
      number: '5',
      question: 'What is the duration of the Data Science program?',
      answer: '8 months core learning plus CRT: resume, portfolio, communication, interview prep, mock interviews, career mentorship.',
    },
    
    {
      id: 'panel6',
      number: '6',
      question: 'What is the duration of the Full Stack Development program?',
      answer: `8 months core learning plus CRT: resume building, portfolio, communication skills, and mock interview training.`,
    },
    {
      id: 'panel7',
      number: '7',
      question: 'What is the learning structure at Gigaversity?',
      answer: ' Four phases: Foundation (1–3), Specialization (4–6), Product Building (7–9), Career Launch (10–12 months). (kept short)',
    },
    {
      id: 'panel8',
      number: '8',
      question: 'What do the L1 and L2 tests mean at Gigaversity?',
      answer: 'L1: AI aptitude test for career mapping. L2: Core skills test for product phase selection.',
    },
    {
      id: 'panel9',
      number: '9',
      question: 'How many hiring partners does Gigaversity have?',
      answer: 'Over 150+ trusted hiring partners across tech and IT sectors, ensuring multiple job opportunities.',
    },
    {
      id: 'panel10',
      number: '10',
      question: 'What is the Gigaversity Job Portal?',
      answer: ' Career platform to apply jobs, build resumes, access 15+ curated job opportunities during training.',
    },
    {
      id: 'panel11',
      number: '11',
      question: 'For how long will I have access to the Job Portal?',
      answer: '6 months extra access after course completion for job applications and career resources.',
    },
    {
      id: 'panel12',
      number: '12',
      question: 'What is the Gigaversity Pre-Screener Test?',
      answer: 'Helps career restarters, non-tech professionals, gap candidates, and fresh learners choose the right program easily.',
    },
    {
      id: 'panel13',
      number: '13',
      question: 'Does Gigaversity include AI in its programs?',
      answer: 'Yes, AI tools, automation, and machine learning are integrated alongside core training.',
    },
    {
      id: 'panel14',
      number: '14',
      question: 'Does Gigaversity provide startup funding to students?',
      answer: 'Yes, up to ₹1 lakh funding to build, prototype, and launch validated student startups.',
    },
    {
      id: 'panel15',
      number: '15',
      question: 'How can I apply for the Gigaversity Startup Program?',
      answer: 'Submit idea → Experts validate → Get prototyping, product-building help, mentorship, and up to ₹1 lakh funding.',
    },
    {
      id: 'panel16',
      number: '16',
      question: 'Will I receive job support after completing my course?',
      answer: 'Yes, 6 months of job portal access, mock interviews, mentorship, and referrals.',
    },
    {
      id: 'panel17',
      number: '17',
      question: 'What is the eligibility criteria for enrolling?',
      answer: 'Minimum 12th pass with basic AI tool knowledge. Coding experience not required.',
    },
    {
      id: 'panel18',
      number: '18',
      question: 'If I don’t know coding, can I still join?',
      answer: 'Yes, a beginner-friendly program teaching coding from scratch with step-by-step guidance.',
    },
    {
      id: 'panel19',
      number: '19',
      question: 'How many real-world projects will I work on?',
      answer: 'Build 3–5 major products, including CRMs, e-commerce, OTT, and AI-driven tools for your portfolio.',
    },
    {
      id: 'panel20',
      number: '20',
      question: 'What job roles can I apply for after Gigaversity?',
      answer: 'Data Analyst, Data Scientist, Full Stack Developer, AI Specialist, or Product Developer.',
    },
  ];

  return (
    <Faq 
      faqData={faqData}
      title={<>FAQ<span>'s</span></>}
      subtitle="Commonly asked questions about our program"
    />
  );
};

export default FaqHomepage;