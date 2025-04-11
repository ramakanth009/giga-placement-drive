import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import SpeedIcon from '@mui/icons-material/Speed';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ImportanceSection from '../../common/importancesection/ImportanceSection';

const FullStackImportance = () => {
  // Define advantages with icons and colors
  const advantages = [
    {
      icon: <CodeIcon sx={{ fontSize: '2rem' }} />,
      title: 'Solve End-to-End Solutions',
      description: 'Create complete web applications from concept to deployment',
      color: '#8a5cf7',
    },
    {
      icon: <GroupWorkIcon sx={{ fontSize: '2rem' }} />,
      title: 'Reduce Development Overhead',
      description: 'Minimize communication gaps between different development teams',
      color: '#4376eb',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: '2rem' }} />,
      title: 'Accelerate Product Development',
      description: 'Deliver integrated solutions faster and more efficiently',
      color: '#f07c3e',
    },
    {
      icon: <EmojiObjectsIcon sx={{ fontSize: '2rem' }} />,
      title: 'Drive Innovation',
      description: 'Build applications with cutting-edge technological capabilities',
      color: '#e8518d',
    },
  ];

  return (
    <ImportanceSection
      title="Why Full Stack Development"
      highlightText="Is Important To Learn"
      subtitle="In Today's Competitive Tech Market, Full-Stack Developers Are Not Just Programmers – They Are
               Strategic Problem Solvers Who Bridge Multiple Technological Domains. Companies Are Actively
               Seeking Versatile Developers Who Can:"
      advantages={advantages}
      background="linear-gradient(to bottom, #f0f6ff, #ffffff)"
      gradientColor="#BCE1FF"
    />
  );
};

export default FullStackImportance;