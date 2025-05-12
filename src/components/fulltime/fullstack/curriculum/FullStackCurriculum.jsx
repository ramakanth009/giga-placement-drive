// src/components/fulltime/fullstack/curriculum/FullStackCurriculum.jsx
import React from 'react';
import Curriculum from '../../../common/fulltime/curriculum/Curriculum';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';
import ArchitectureIcon from '@mui/icons-material/Architecture';

const FullStackCurriculum = () => {
  // The curriculum data structure
  const curriculumData = {
    frontend: {
      title: "Frontend Development",
      topics: [
        "HTML5 & Modern Semantics",
        "CSS3 & Responsive Design",
        "JavaScript Fundamentals",
        "DOM Manipulation & Events",
        "React Components & Hooks",
        "State Management (Redux/Context)",
        "UI/UX Design Principles",
        "Performance Optimization",
        "Progressive Web Apps (PWAs)",
      ],
    },
    backend: {
      title: "Backend Development",
      topics: [
        "Node.js & Express Fundamentals",
        "RESTful API Design",
        "Authentication & Authorization",
        "Server-side Rendering",
        "Microservices Architecture",
        "GraphQL APIs",
        "Websockets & Real-time Applications",
        "Performance Optimization",
        "Error Handling & Logging",
      ],
    },
    database: {
      title: "Database Systems",
      topics: [
        "SQL Fundamentals & Advanced Queries",
        "Database Design & Normalization",
        "PostgreSQL/MySQL Implementation",
        "NoSQL Databases (MongoDB)",
        "ORM & Query Builders",
        "Data Modeling",
        "Database Performance & Indexing",
        "Caching Strategies",
        "Database Security",
      ],
    },
    devops: {
      title: "DevOps & Deployment",
      topics: [
        "Git Version Control & Workflows",
        "CI/CD Pipelines",
        "Docker & Containerization",
        "Kubernetes Basics",
        "Cloud Services (AWS/GCP/Azure)",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Scaling Strategies",
        "Performance Testing",
      ],
    },
    architecture: {
      title: "System Architecture",
      topics: [
        "Design Patterns",
        "MVC & MVVM Architectures",
        "Serverless Architecture",
        "Microservices vs Monoliths",
        "API Gateway Patterns",
        "Event-Driven Architecture",
        "Distributed Systems Concepts",
        "Scalability & Reliability",
        "System Design Principles",
      ],
    },
    security: {
      title: "Web Security",
      topics: [
        "OWASP Top 10 Vulnerabilities",
        "Authentication & Authorization",
        "JWT & OAuth Implementation",
        "XSS & CSRF Prevention",
        "Secure API Development",
        "Data Encryption",
        "Security Headers & CORS",
        "Penetration Testing Basics",
        "Security Auditing",
      ],
    },
    advanced: {
      title: "Advanced Topics",
      topics: [
        "TypeScript & Static Typing",
        "Testing (Unit, Integration, E2E)",
        "Desktop Apps with Electron",
        "Mobile Development with React Native",
        "WebAssembly Fundamentals",
        "AI/ML Integration in Web Apps",
        "Blockchain & Web3 Integration",
        "Accessibility (WCAG Standards)",
        "Internationalization & Localization",
      ],
    },
  };

  // Icons for each curriculum section
  const sectionIcons = {
    frontend: <WebIcon />,
    backend: <TerminalIcon />,
    database: <StorageIcon />,
    devops: <BuildIcon />,
    architecture: <ArchitectureIcon />,
    security: <SecurityIcon />,
    advanced: <CodeIcon />
  };

  return (
    <Curriculum 
      title="Full Stack Development"
      subtitle="Our comprehensive full stack curriculum is designed to build your skills from foundational concepts to advanced techniques, ensuring you're industry-ready."
      programName="Full Stack Program" 
      curriculumData={curriculumData}
      icons={sectionIcons}
    />
  );
};

export default FullStackCurriculum;