// src/components/fulltime/fullstack/programhighlights/FullStackProgramHighlights.jsx
import React from 'react';
import ProgramHighlights from '../../../common/fulltime/programhighlights/ProgramHighlights';
import CodeIcon from '@mui/icons-material/Code';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import WorkIcon from '@mui/icons-material/Work';

const FullStackProgramHighlights = () => {
  // Define highlights with appropriate icons
  const highlights = [
    {
      icon: <CodeIcon style={{ color: 'white' }} />,
      title: "Project-Based Learning"
    },
    {
      icon: <SmartToyIcon style={{ color: 'white' }} />,
      title: "AI-integrated learning"
    },
    {
      icon: <ShoppingCartIcon style={{ color: 'white' }} />,
      title: "Build products like e-commerce, large-scale applications, and quick commerce"
    },
    {
      icon: <AssessmentIcon style={{ color: 'white' }} />,
      title: "Mock Interviews and skill-based Assessments with personalized feedback"
    },
    {
      icon: <WorkIcon style={{ color: 'white' }} />,
      title: "Recruitment Readiness and AI-Powered Job Matching support"
    },
  ];

  return <ProgramHighlights highlights={highlights} />;
};

export default FullStackProgramHighlights;