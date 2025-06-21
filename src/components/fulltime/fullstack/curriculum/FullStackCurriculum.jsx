// src/components/fulltime/fullstack/curriculum/FullStackCurriculum.jsx
import React from 'react';
import Curriculum from '../../../common/fulltime/curriculum/Curriculum';


const FullStackCurriculum = () => {
  // The curriculum data structure based on PDF
  const curriculumData = {
    frontend: {
      title: "Frontend Development",
      topics: [
        "HTML & CSS Fundamentals",
        "Bootstrap Framework",
        "JavaScript Fundamentals",
        "DOM & Browser APIs",
        "Modern JavaScript (ES6+)",
        "API Integration",
        "React Development",
      ],
    },
    backend: {
      title: "Backend Development",
       topics: [
        "Node.js Introduction",
        "Node.js Core", 
        "Express Basics",
        "Express Middleware",
        "REST API Development",
        "API Testing",
        "Authentication",
        "Authorization",
      ],
    },
    database: {
      title: "Database Systems",
      topics: [
        "MongoDB Introduction",
        "Mongoose ODM I",
        "Mongoose ODM II",
      ],
    },
    tools: {
      title: "Development Tools",
      topics: [
        "Git Basics",
        "GitHub Workflows",
        "Collaborative Git",
      ],
    },
    fullstack: {
      title: "Full Stack Integration",
      topics: [
        "Front-Back Integration",
        "Full Stack Debugging",
        "Data Management",
      ],
    },
    deployment: {
      title: "Deployment & Production",
      topics: [
        "Deployment Preparation",
        "Project Deployment",
      ],
    },
  };


  return (
    <Curriculum 
      title="Full Stack Development"
      subtitle="Our comprehensive full stack curriculum is designed to build your skills from foundational concepts to advanced techniques, ensuring you're industry-ready."
      programName="Full Stack Program" 
      curriculumData={curriculumData}
      icons={{}} // Pass icons object (even if empty)
    />
  );
};

export default FullStackCurriculum;