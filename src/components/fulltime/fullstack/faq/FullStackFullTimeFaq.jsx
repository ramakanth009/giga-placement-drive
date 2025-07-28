// src/components/fulltime/fullstack/faq/FullStackFullTimeFaq.jsx
import React from 'react';
import Faq from '../../../common/faq/Faq';

const FullStackFullTimeFaq = () => {
  // FAQs data for fullstack fulltime program
  const faqData = [
    {
      id: 'fullstack-fulltime-panel1',
      number: '1',
      question: 'Is the Gigaversity Full Stack Development program AI-infused?',
      answer: ' Yes, our curriculum integrates AI tools like LangChain, TensorFlow.js, and AI-driven code assistants for modern development.',
    },
    {
      id: 'fullstack-fulltime-panel2',
      number: '2',
      question: 'What is the duration of the program?',
      answer: 'The program runs for 9 months, plus 2 months of Career Readiness Training (CRT) and job application support.',
    },
    {
      id: 'fullstack-fulltime-panel3',
      number: '3',
      question: 'What is the program fee?',
      answer: ' The fee is ₹1,25,000, with scholarship opportunities for eligible students.',
    },
    {
      id: 'fullstack-fulltime-panel4',
      number: '4',
      question: 'What technologies will I learn?',
      answer: 'You’ll master MERN Stack, Next.js, Docker, Kubernetes, CI/CD, and AI-powered development tools like Copilot and LangChain.',
    },
    {
      id: 'fullstack-fulltime-panel5',
      number: '5',
      question: 'Does this program include real-world projects?',
      answer: 'Yes, students work on weekly mini-projects, two major capstone products, and real-world full stack applications.',
    },
    {
      id: 'fullstack-fulltime-panel6',
      number: '6',
      question: 'What are the capstone products in this program?',
      answer: ' Students build two real-world products, such as a scalable e-commerce platform and an AI-powered job matching platform.',
    },
    {
      id: 'fullstack-fulltime-panel7',
      number: '7',
      question: 'Are mini-projects part of the curriculum?',
      answer: 'Yes, weekly mini-projects build practical skills and lead to the capstone product development phase.',
    },
    {
      id: 'fullstack-fulltime-panel8',
      number: '8',
      question: 'Will I get placement support after the course?',
      answer: ' Yes, with Gigaversity’s job portal, pre-screener tool, and CRT, you’ll get direct job application opportunities.',
    },
    {
      id: 'fullstack-fulltime-panel9',
      number: '9',
      question: 'Does the program include CRT training?',
      answer: 'Yes, a 2-month Career Readiness Training covers interview prep, resume building, and live job applications.',
    },
    {
      id: 'fullstack-fulltime-panel10',
      number: '10',
      question: 'What is the L1 test?',
      answer: ' The L1 test, after the foundation phase, evaluates your core strengths and helps decide whether you’re better suited for frontend, backend, or full stack roles.',
    },
    {
      id: 'fullstack-fulltime-panel11',
      number: '11',
      question: 'What is the L2 test?',
      answer: 'After the specialization phase, the L2 test divides students into groups to build two capstone products for portfolio and industry exposure.',
    },
    {
      id: 'fullstack-fulltime-panel12',
      number: '12',
      question: 'Will I learn deployment and scaling?',
      answer: 'Yes, you’ll deploy applications using AWS/GCP, Docker, and Kubernetes with CI/CD automation.',
    },
    {
      id: 'fullstack-fulltime-panel13',
      number: '13',
      question: 'Do I need prior coding experience?',
      answer: 'No, beginners can join. The foundation phase covers HTML, CSS, JavaScript, and core programming concepts.',
    },
    {
      id: 'fullstack-fulltime-panel14',
      number: '14',
      question: 'What AI tools will I work with?',
      answer: ' You’ll use LangChain, TensorFlow.js, GitHub Copilot, and AI-driven testing tools for rapid development.',
    },
    {
      id: 'fullstack-fulltime-panel15',
      number: '15',
      question: 'How does Gigaversity differ from other coding bootcamps?',
      answer: 'Unlike others, we integrate AI tools, weekly projects, capstones, and a job portal for direct hiring.',
    },
    {
      id: 'fullstack-fulltime-panel16',
      number: '16',
      question: 'Are scholarships available for this program?',
      answer: 'Yes, merit-based scholarships are available to reduce your course fee.',
    },
    {
      id: 'fullstack-fulltime-panel17',
      number: '17',
      question: 'Will I get a certificate after completion?',
      answer: 'Yes, a Gigaversity Full Stack Developer certificate, recognized by our hiring partners, will be awarded.',
    },
    {
      id: 'fullstack-fulltime-panel18',
      number: '18',
      question: 'Can I build my own startup idea here?',
      answer: 'Yes, through the Gigaversity Startup Incubator, you can turn your idea into a funded prototype.',
    },
    {
      id: 'fullstack-fulltime-panel19',
      number: '19',
      question: 'Is this program beginner-friendly?',
      answer: 'Yes, with step-by-step learning, foundation-to-advanced modules, and mentorship, even non-coders can succeed.',
    },
    {
      id: 'fullstack-fulltime-panel20',
      number: '20',
      question: 'How will Gigaversity help me get a job?',
      answer: 'Through AI-driven pre-screening, resume building, career training, and direct job portal access with hiring partners.',
    },
  ];

  return (
    <Faq 
      faqData={faqData}
      title={<>FAQ<span>'s</span></>}
      subtitle="Everything you need to know about our comprehensive full-stack developer program"
    />
  );
};

export default FullStackFullTimeFaq;