// src/components/fulltime/datascience/programhighlights/DataScienceProgramHighlights.jsx
import React from 'react';
import ProgramHighlights from '../../../common/fulltime/programhighlights/ProgramHighlights';
import DataIcon from '@mui/icons-material/Storage';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PsychologyIcon from '@mui/icons-material/Psychology';

const DataScienceProgramHighlights = () => {
  // Define highlights with appropriate icons
  const highlights = [
    {
      icon: <DataIcon style={{ color: 'white' }} />,
      title: "Project-Based Learning Approach"
    },
    {
      icon: <BarChartIcon style={{ color: 'white' }} />,
      title: "In-Demand Tools and Technologies"
    },
    {
      icon: <AssessmentIcon style={{ color: 'white' }} />,
      title: "Skill-Based Assessments & Feedback"
    },
    {
      icon: <CodeIcon style={{ color: 'white' }} />,
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
      icon: <PsychologyIcon style={{ color: 'white' }} />,
      title: "AI-Powered Job Matching & Placement Support"
    }
  ];

  return <ProgramHighlights highlights={highlights} />;
};

export default DataScienceProgramHighlights;