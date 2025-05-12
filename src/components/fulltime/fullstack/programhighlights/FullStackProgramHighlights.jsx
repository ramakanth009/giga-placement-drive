// src/components/fulltime/fullstack/programhighlights/FullStackProgramHighlights.jsx
import React from 'react';
import ProgramHighlights from '../../../common/fulltime/programhighlights/ProgramHighlights';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TerminalIcon from '@mui/icons-material/Terminal';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MemoryIcon from '@mui/icons-material/Memory';

const FullStackProgramHighlights = () => {
  // Define highlights with appropriate icons
  const highlights = [
    {
      icon: <WebIcon style={{ color: 'white' }} />,
      title: "Project-Based Learning Approach"
    },
    {
      icon: <BuildIcon style={{ color: 'white' }} />,
      title: "In-Demand Tools and Technologies"
    },
    {
      icon: <AssessmentIcon style={{ color: 'white' }} />,
      title: "Skill-Based Assessments & Feedback"
    },
    {
      icon: <TerminalIcon style={{ color: 'white' }} />,
      title: "Capstone Projects (3 Industry-Relevant Builds)"
    },
    {
      icon: <GroupsIcon style={{ color: 'white' }} />,
      title: "Collaborative Learning & Team-Based Execution"
    },
    {
      icon: <QuestionAnswerIcon style={{ color: 'white' }} />,
      title: "Unlimited Mock Interviews with Expert Feedback"
    },
    {
      icon: <BusinessCenterIcon style={{ color: 'white' }} />,
      title: "Recruitment Readiness & Soft Skill Training"
    },
    {
      icon: <MemoryIcon style={{ color: 'white' }} />,
      title: "AI-Powered Job Matching & Placement Support"
    }
  ];

  return <ProgramHighlights highlights={highlights} />;
};

export default FullStackProgramHighlights;