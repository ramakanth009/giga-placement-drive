// src/components/fullstackcomponents/curriculum/FullStackCurriculum.jsx
import React from 'react';
import Curriculum from '../../common/curriculum/Curriculum';
import { 
  Palette as UiUxIcon, 
  Storage as DatabaseIcon,
  Terminal as BackendIcon,
  Code as FullStackIcon
} from '@mui/icons-material';

const FullStackCurriculum = () => {
  // Define weeks data with appropriate icons
  const weeks = [
    {
      title: "UI/UX Developer",
      icon: <UiUxIcon />  // Design palette icon for UI/UX Developer
    },
    {
      title: "Frontend Developer",
      icon: <FullStackIcon />  // Code icon for Frontend Developer
    },
    {
      title: "Backend Developer",
      icon: <BackendIcon />  // Terminal icon for Backend Developer
    },
    {
      title: "Database Engineer",
      icon: <DatabaseIcon />  // Storage icon for Database Engineer
    }
  ];
  
  const skills = [
    // UI/UX Developer skills
    [
      "Research UI/UX trends and define website purpose",
      "Create user flow & wireframes for all pages",
      "Design high-fidelity UI for Home & About pages",
      "Design high-fidelity UI for Projects & Contact pages",
      "Plan and prototype animations (hover effects, transitions)",
      "Conduct usability testing and gather feedback",
      "Finalize design and prepare assets for handoff"
    ],
    
    // Frontend Developer skills
    [
      "Set up project with React, Vite, and TailwindCSS",
      "Develop responsive Home & Product Listings pages",
      "Build Product Details, Cart & Checkout pages",
      "Implement animations & micro-interactions",
      "Add scroll animations, lazy loading, filtering UI",
      "Test and debug for responsiveness and performance",
      "Deploy to Netlify/Vercel and document code"
    ],
    
    // Backend Developer skills
    [
      "Set up project structure and configure environment",
      "Develop secure User Authentication System (JWT)",
      "Build Product Management APIs (CRUD operations)",
      "Implement Cart & Checkout Functionality",
      "Add Order Management & User Dashboard",
      "Implement Security & Performance Optimization",
      "Complete testing, documentation, and deployment"
    ],
    
    // Database Engineer skills
    [
      "Choose database type and set up environments",
      "Design schema & relationships for all entities",
      "Implement CRUD operations for key entities",
      "Optimize queries with indexes and caching",
      "Implement data security & backup strategies",
      "Integrate database with backend APIs",
      "Perform stress testing and scaling strategies"
    ]
  ];

  return (
    <Curriculum 
      title={<>Our 30-Day Journey <span>To Job Readiness</span></>}
      weeks={weeks}
      skills={skills}
      domain="fullstack"
    />
  );
};

export default FullStackCurriculum;