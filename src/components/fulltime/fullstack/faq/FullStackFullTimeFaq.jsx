// src/components/fulltime/fullstack/faq/FullStackFullTimeFaq.jsx
import React from 'react';
import Faq from '../../../common/faq/Faq';

const FullStackFullTimeFaq = () => {
  // FAQs data for fullstack fulltime program
  const faqData = [
    {
      id: 'fullstack-fulltime-panel1',
      number: '1',
      question: 'What is the duration of the fullstack developer course?',
      answer: 'Our immersive program runs for 9 months, requiring just 2–3 hours daily for comprehensive learning. This structured approach ensures you can balance learning with other commitments while building strong foundational skills.',
    },
    {
      id: 'fullstack-fulltime-panel2',
      number: '2',
      question: 'What is included in the fullstack course syllabus?',
      answer: 'We cover HTML5, CSS3, JavaScript, React, Node.js, Express, MongoDB, TypeScript, DevOps, testing, PWA, and more. Our comprehensive curriculum is designed to make you job-ready with both frontend and backend development skills.',
    },
    {
      id: 'fullstack-fulltime-panel3',
      number: '3',
      question: 'Do you offer live classes and hands-on sessions?',
      answer: 'Yes—interactive live mentoring and practical sessions ensure students can apply real-time learning. Our expert instructors provide personalized guidance and immediate feedback during hands-on coding exercises.',
    },
    {
      id: 'fullstack-fulltime-panel4',
      number: '4',
      question: 'Do beginners need prior coding experience to join?',
      answer: 'No prior experience is required—just a laptop, internet access, and motivation to learn. Our program is specifically designed to take complete beginners and transform them into confident full-stack developers.',
    },
    {
      id: 'fullstack-fulltime-panel5',
      number: '5',
      question: 'Will I get a certification upon completion?',
      answer: 'Yes—you\'ll receive industry-recognized certification and guidance for earning additional credentials. Our certificates are valued by employers and demonstrate your proficiency in modern full-stack development.',
    },
    {
      id: 'fullstack-fulltime-panel6',
      number: '6',
      question: 'Is the course job-oriented?',
      answer: 'Absolutely—our curriculum is crafted around employer needs with real-world projects and placement support. We focus on practical skills that companies are actively seeking in the current job market.',
    },
    {
      id: 'fullstack-fulltime-panel7',
      number: '7',
      question: 'Are there live mentor sessions and tech talks?',
      answer: 'Yes, live mentoring sessions and expert tech talks are included to enhance learning and industry insights. Regular sessions with industry professionals help you stay updated with current trends and best practices.',
    },
    {
      id: 'fullstack-fulltime-panel8',
      number: '8',
      question: 'What projects are part of this fullstack program?',
      answer: 'You\'ll build a portfolio-worthy capstone project—typically a live fullstack web app deployed online. These projects demonstrate your ability to create complete applications from conception to deployment.',
    },
    {
      id: 'fullstack-fulltime-panel9',
      number: '9',
      question: 'Do you teach version control like Git and GitHub?',
      answer: 'Yes, we cover Git basics, branching, merging, and CI/CD using GitHub Actions. Version control is essential for professional development, and you\'ll learn industry-standard workflows and collaboration techniques.',
    },
    {
      id: 'fullstack-fulltime-panel10',
      number: '10',
      question: 'Are DevOps and cloud deployment covered?',
      answer: 'Yes—learn Docker, CI/CD pipelines, AWS, Heroku, Vercel, and serverless deployment fundamentals. Modern development requires understanding of deployment and infrastructure, which we cover comprehensively.',
    },
    {
      id: 'fullstack-fulltime-panel11',
      number: '11',
      question: 'Is placement or internship support provided?',
      answer: 'Yes—we offer placement assistance, resume prep, mock interviews, and vendor matchmaking for job applications. Our dedicated placement team works with you throughout your learning journey and beyond.',
    },
    {
      id: 'fullstack-fulltime-panel12',
      number: '12',
      question: 'Can I get a demo session before enrolling?',
      answer: 'Definitely—schedule a demo to experience our teaching style and course structure firsthand. This allows you to understand our methodology and ensure the program aligns with your learning preferences.',
    },
    {
      id: 'fullstack-fulltime-panel13',
      number: '13',
      question: 'Is there a scholarship or EMI option available?',
      answer: 'Financing and scholarships (up to 100%) are available—please inquire for eligibility criteria. We believe financial constraints shouldn\'t prevent talented individuals from accessing quality education.',
    },
    {
      id: 'fullstack-fulltime-panel14',
      number: '14',
      question: 'What is the teaching format—online or in-person?',
      answer: 'The course offers a hybrid format with both online and offline classes for flexible and effective learning. This approach combines the convenience of online learning with the benefits of in-person interaction.',
    },
    {
      id: 'fullstack-fulltime-panel15',
      number: '15',
      question: 'Does the curriculum cover modern front-end frameworks?',
      answer: 'Yes—we teach React.js, Redux Toolkit, Hooks, React Router, and UI libraries like Material-UI and Tailwind. You\'ll master the most in-demand frontend technologies used by leading companies worldwide.',
    },
    {
      id: 'fullstack-fulltime-panel16',
      number: '16',
      question: 'Do you cover backend development and databases?',
      answer: 'Yes—you\'ll learn Node.js, Express, REST & GraphQL APIs, relational (MySQL/PostgreSQL) and NoSQL (MongoDB) databases. Our comprehensive backend curriculum covers everything needed for server-side development.',
    },
    {
      id: 'fullstack-fulltime-panel17',
      number: '17',
      question: 'What are the different phases of the Full Stack Development program?',
      answer: 'The course is divided into Foundation, Development, and Advanced phases—covering frontend, backend, DevOps, and deployment. Each phase builds upon the previous one, ensuring solid understanding before advancing.',
    },
    {
      id: 'fullstack-fulltime-panel18',
      number: '18',
      question: 'What are L1 and L2 exams in this course?',
      answer: 'L1 and L2 exams test your knowledge and practical skills at key milestones to ensure job readiness. These assessments help track your progress and identify areas that need additional focus before moving to advanced topics.',
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