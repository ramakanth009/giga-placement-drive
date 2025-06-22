// src/components/fulltime/datascience/programhighlights/DataScienceProgramHighlights.jsx
import React from 'react';
import ProgramHighlights from '../../../common/fulltime/programhighlights/ProgramHighlights';
import DataIcon from '@mui/icons-material/Storage';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import WorkIcon from '@mui/icons-material/Work';

const DataScienceProgramHighlights = () => {
  // Define highlights with appropriate icons
  const highlights = [
    {
      icon: <DataIcon style={{ color: 'white' }} />,
      title: "Project-Based Learning"
    },
    {
      icon: <SmartToyIcon style={{ color: 'white' }} />,
      title: "AI-integrated learning"
    },
    {
      icon: <BarChartIcon style={{ color: 'white' }} />,
      title: "Build products like Multi-Model AI Chatbot, AI Quiz Master, and Advanced Call Auditor"
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

export default DataScienceProgramHighlights;