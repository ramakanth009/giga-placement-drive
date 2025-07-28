// src/components/fulltime/datascience/faq/DataScienceFullTimeFaq.jsx
import React from 'react';
import Faq from '../../../common/faq/Faq';

const DataScienceFullTimeFaq = () => {
  // FAQs data for data science fulltime program
  const faqData = [
    {
      id: 'datascience-fulltime-panel1',
      number: '1',
      question: 'Is the Gigaversity Data Science course AI-infused? Will I learn AI in this program?',
      answer: 'Yes, the program is AI-infused, covering machine learning, deep learning, NLP, and AI-powered tools like TensorFlow, PyTorch, and automated model optimization techniques.',
    },
    {
      id: 'datascience-fulltime-panel2',
      number: '2',
      question: 'What is the total duration of the Gigaversity Data Science program?',
      answer: 'The program runs for 9 months, followed by 2 months of CRT training and job application support, preparing you for industry roles.',
    },
    {
      id: 'datascience-fulltime-panel3',
      number: '3',
      question: 'Which AI tools and frameworks will I learn in this course?',
      answer: 'Students master tools like TensorFlow, PyTorch, Scikit-learn, Hugging Face Transformers, MLflow, Databricks, and automated AI workflows for building, testing, and deploying models.',
    },
    {
      id: 'datascience-fulltime-panel4',
      number: '4',
      question: 'Does the program cover cloud tools like AWS, GCP, or Azure?',
      answer: ' Yes, you’ll gain hands-on experience with AWS SageMaker, GCP BigQuery, and Azure Machine Learning for scalable data processing, model training, and deployment.',
    },
    {
      id: 'datascience-fulltime-panel5',
      number: '5',
      question: 'What is the L1 test and how does it define my career path?',
      answer: 'After the foundation phase, L1 identifies strengths, recommending roles like Data Analyst, ML Engineer, or Data Engineer for specialization and career focus.',
    },
    {
      id: 'datascience-fulltime-panel6',
      number: '6',
      question: 'What happens in the L2 test and capstone product phase?',
      answer: 'After specialization, L2 groups students by skill to collaboratively build two capstone products, demonstrating end-to-end skills in real-world, industry-ready projects.',
    },
    {
      id: 'datascience-fulltime-panel7',
      number: '7',
      question: 'Are weekly mini-projects included to build practical skills?',
      answer: 'Yes, weekly mini-projects across Python, SQL, ML, and visualization ensure consistent practice, building a strong portfolio and preparing students for interviews.',
    },
    {
      id: 'datascience-fulltime-panel8',
      number: '8',
      question: 'What types of capstone products will I develop during the program?',
      answer: 'Capstones include real products like Multi Model AI Chatbot, Predictive Customer Churn Model, showcasing real-world problem-solving, data pipelines, and deployment to attract employers.',
    },
    {
      id: 'datascience-fulltime-panel9',
      number: '9',
      question: 'Does the program include job readiness and CRT training?',
      answer: 'Yes, two months of Communication, Reasoning, and Technical (CRT) training, resume preparation, mock interviews, and job application guidance are included.',
    },
    {
      id: 'datascience-fulltime-panel10',
      number: '10',
      question: 'What career roles can I apply for after completing this course?',
      answer: 'Graduates qualify for roles like Data Scientist, Data Analyst, ML Engineer, AI Engineer, and Business Intelligence Specialist, depending on specialization.',
    },
    {
      id: 'datascience-fulltime-panel11',
      number: '11',
      question: 'What is the total course fee for the 9-month Data Science program?',
      answer: 'The complete program costs ₹1,50,000, inclusive of training, projects, CRT sessions, and job portal access.',
    },
    {
      id: 'datascience-fulltime-panel12',
      number: '12',
      question: 'Is any scholarship or financial assistance available for students?',
      answer: 'Yes, Gigaversity offers merit-based scholarships and flexible payment plans for eligible students to make learning affordable.',
    },
    {
      id: 'datascience-fulltime-panel13',
      number: '13',
      question: 'Does Gigaversity offer placement assistance or job connections?',
      answer: 'Yes, through the Gigaversity Job Portal, employer tie-ups, and interview preparation, students gain multiple job opportunities post-completion.',
    },
    {
      id: 'datascience-fulltime-panel14',
      number: '14',
      question: 'How does the Gigaversity Job Portal help me get interviews?',
      answer: 'Our portal directly connects students with hiring companies, featuring AI-matched job listings, resume boosting, and recruiter access.',
    },
    {
      id: 'datascience-fulltime-panel15',
      number: '15',
      question: 'Is this program beginner-friendly for non-coders?',
      answer: 'Yes, the program begins with foundational Python, statistics, and SQL, making it beginner-friendly while preparing students for advanced AI topics.',
    },
    {
      id: 'datascience-fulltime-panel16',
      number: '16',
      question: 'Which machine learning libraries and data science tools will I master?',
      answer: 'You’ll learn Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, MLflow, Power BI, and cloud ML tools for data analysis, modeling, and deployment.',
    },
    {
      id: 'datascience-fulltime-panel17',
      number: '17',
      question: 'How is the learning structured from foundation to specialization?',
      answer: 'The course flows from fundamentals (Python, SQL, statistics) to ML, AI, big data, cloud, then specialization, mini-projects, capstones, and job readiness.',
    },
    {
      id: 'datascience-fulltime-panel18',
      number: '18',
      question: 'Are all projects and capstones aligned with real industry standards?',
      answer: 'Yes, projects mirror real company use cases, integrating large datasets, APIs, and cloud deployment to match hiring expectations.',
    },
    {
      id: 'datascience-fulltime-panel19',
      number: '19',
      question: 'Will I receive a certificate after completing the program?',
      answer: 'Yes, students receive a Gigaversity Data Science Certification, validating AI-infused learning, project experience, and career readiness.',
    },
    {
      id: 'datascience-fulltime-panel20',
      number: '20',
      question: 'How does the Pre-Screener help me land better jobs?',
      answer: 'The Pre-Screener evaluates skills, recommends roles, and auto-matches you with job listings, improving interview chances and placement outcomes.',
    },
  ];

  return (
    <Faq 
      faqData={faqData}
      title={<>FAQ<span>'s</span></>}
      subtitle="Everything you need to know about our comprehensive 9-month Data Science program"
    />
  );
};

export default DataScienceFullTimeFaq;