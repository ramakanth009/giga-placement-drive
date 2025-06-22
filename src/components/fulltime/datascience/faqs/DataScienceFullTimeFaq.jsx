// src/components/fulltime/datascience/faq/DataScienceFullTimeFaq.jsx
import React from 'react';
import Faq from '../../../common/faq/Faq';

const DataScienceFullTimeFaq = () => {
  // FAQs data for data science fulltime program
  const faqData = [
    {
      id: 'datascience-fulltime-panel1',
      number: '1',
      question: 'What does the 9-month full-time Data Science program at Gigaversity include?',
      answer: 'It includes training in Python, SQL, Excel, Tableau, statistics, machine learning algorithms, data visualization, real-world case studies, and a capstone project to make learners industry-ready.',
    },
    {
      id: 'datascience-fulltime-panel2',
      number: '2',
      question: 'Is this program suitable for beginners with no coding background?',
      answer: 'Yes, it is designed for complete beginners. The curriculum starts with basic programming in Python and Excel before moving into advanced analytics and data science tools.',
    },
    {
      id: 'datascience-fulltime-panel3',
      number: '3',
      question: 'What career support is provided after completing the program?',
      answer: 'Gigaversity offers resume-building workshops, mock interviews, access to job boards, alumni referrals, and direct hiring partner connections for full-time roles.',
    },
    {
      id: 'datascience-fulltime-panel4',
      number: '4',
      question: 'What is the average placement salary after completing this program?',
      answer: 'The average package is between ₹5–7 LPA, with the highest package offered up to ₹10 LPA depending on performance and project execution.',
    },
    {
      id: 'datascience-fulltime-panel5',
      number: '5',
      question: 'Which tools and technologies will I learn during the course?',
      answer: 'You will learn Python, SQL, Tableau, Pandas, NumPy, Excel, Matplotlib, Seaborn, machine learning libraries, and project collaboration tools used in the industry.',
    },
    {
      id: 'datascience-fulltime-panel6',
      number: '6',
      question: 'How are practical projects and capstones structured in this program?',
      answer: 'You\'ll work on hands-on projects based on real-world scenarios, such as food delivery predictions, housing price estimations, and sentiment analysis. The final capstone project helps you showcase your skills to recruiters.',
    },
    {
      id: 'datascience-fulltime-panel7',
      number: '7',
      question: 'What is the L1 Test in the Gigaversity application process?',
      answer: 'The Level 1 Test is Gigaversity\'s proprietary AI-driven aptitude and skills evaluation. It maps your natural talents, coding style, and problem-solving ability to the most suitable career path in tech.',
    },
    {
      id: 'datascience-fulltime-panel8',
      number: '8',
      question: 'How does the L1 Test differ from other aptitude tests?',
      answer: 'Unlike traditional tests, the L1 Test evaluates both your technical abilities and working style through mini-projects and situational responses, generating a personalized career and learning path.',
    },
    {
      id: 'datascience-fulltime-panel9',
      number: '9',
      question: 'What are the features of the L1 Test?',
      answer: 'It includes evaluation across 12 core competencies, AI-powered career path recommendations, a personalized strengths and growth report, and a one-on-one session with an industry mentor.',
    },
    {
      id: 'datascience-fulltime-panel10',
      number: '10',
      question: 'Do I receive a certification after the L1 Test?',
      answer: 'Yes, upon completion of the L1 Test, you receive an industry-recognized certification that validates your readiness and provides insights into your strengths and potential career tracks.',
    },
    {
      id: 'datascience-fulltime-panel11',
      number: '11',
      question: 'Can I retake the L1 Test if I don\'t clear it the first time?',
      answer: 'Yes, multiple attempts are generally allowed. However, it\'s recommended to review your personalized feedback before reattempting.',
    },
    {
      id: 'datascience-fulltime-panel12',
      number: '12',
      question: 'What is Gigaversity\'s learning model like?',
      answer: 'Gigaversity follows a cycle of live classes, interactive labs, project-based learning, and one-on-one mentoring sessions designed to reinforce practical understanding.',
    },
    {
      id: 'datascience-fulltime-panel13',
      number: '13',
      question: 'How frequently are live sessions and project labs conducted?',
      answer: 'Live sessions are usually held 2–3 times per week, with weekend or evening lab sessions focused on building practical projects and solving real-time challenges.',
    },
    {
      id: 'datascience-fulltime-panel14',
      number: '14',
      question: 'Does the program include peer collaboration and mentorship?',
      answer: 'Yes, students collaborate on projects, participate in community forums, and receive regular mentorship from industry experts throughout the course duration.',
    },
    {
      id: 'datascience-fulltime-panel15',
      number: '15',
      question: 'How is student progress monitored during the program?',
      answer: 'Progress is tracked through quizzes, assignments, weekly feedback, mini-project submissions, and milestone reviews leading up to the capstone.',
    },
    {
      id: 'datascience-fulltime-panel16',
      number: '16',
      question: 'How does this program compare to other data science bootcamps?',
      answer: 'Gigaversity offers a comprehensive and job-focused curriculum at par with leading bootcamps, with added benefits like AI-driven assessments, personalized learning paths, and strong placement support.',
    },
    {
      id: 'datascience-fulltime-panel17',
      number: '17',
      question: 'Is there a job guarantee or refund if I don\'t get placed?',
      answer: 'While Gigaversity does not offer a job guarantee, it provides strong placement assistance, hiring partner access, and personalized support to increase your employability.',
    },
    {
      id: 'datascience-fulltime-panel18',
      number: '18',
      question: 'Are there any scholarships or EMI options for this program?',
      answer: 'Yes, flexible payment options like EMIs and occasional scholarships are available. Details can be found on the admissions page or by speaking with a counselor.',
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