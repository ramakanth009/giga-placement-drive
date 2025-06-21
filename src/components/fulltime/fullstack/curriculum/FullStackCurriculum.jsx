// src/components/fulltime/fullstack/curriculum/FullStackCurriculum.jsx
import React from 'react';
import Curriculum from '../../../common/fulltime/curriculum/Curriculum';
// import CodeIcon from '@mui/icons-material/Code';
// import StorageIcon from '@mui/icons-material/Storage';
// import TerminalIcon from '@mui/icons-material/Terminal';
// import WebIcon from '@mui/icons-material/Web';
// import BuildIcon from '@mui/icons-material/Build';
// import DeploymentIcon from '@mui/icons-material/CloudUpload';

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

  // Icons for each curriculum section
  const sectionIcons = {
    // frontend: <WebIcon />,
    // tools: <BuildIcon />,
    // backend: <TerminalIcon />,
    // database: <StorageIcon />,
    // fullstack: <CodeIcon />,
    // deployment: <DeploymentIcon />
  };

  return (
    <Curriculum 
      title="Full Stack Development"
      subtitle="Our comprehensive full stack curriculum is designed to build your skills from foundational concepts to advanced techniques, ensuring you're industry-ready."
      programName="Full Stack Program" 
      curriculumData={curriculumData}
      // icons={sectionIcons}
    />
  );
};

export default FullStackCurriculum;