import React from 'react';
import InsightsIcon from '@mui/icons-material/Insights';
import BarChartIcon from '@mui/icons-material/BarChart';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ImportanceSection from '../../common/importancesection/ImportanceSection';

const DataScienceImportance = () => {
  // Define advantages with icons and colors
  const advantages = [
    {
      icon: <InsightsIcon sx={{ fontSize: '2rem' }} />,
      title: 'Extract Actionable Insights',
      description: 'Transform complex data into meaningful business intelligence',
      color: '#8a5cf7',
    },
    {
      icon: <BarChartIcon sx={{ fontSize: '2rem' }} />,
      title: 'Drive Data-Based Decisions',
      description: 'Empower organizations to make strategic choices backed by evidence',
      color: '#4376eb',
    },
    {
      icon: <AutoGraphIcon sx={{ fontSize: '2rem' }} />,
      title: 'Automate Predictive Analysis',
      description: 'Build models that forecast trends and anticipate market changes',
      color: '#f07c3e',
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: '2rem' }} />,
      title: 'Solve Complex Problems',
      description: 'Apply advanced algorithms to tackle challenging business scenarios',
      color: '#e8518d',
    },
  ];

  return (
    <ImportanceSection
      title="Why Data Science"
      highlightText="Is Essential Today"
      subtitle="In A World Driven By Big Data, Data Scientists Are The Key Interpreters Who Transform Information 
               Into Strategic Value. Organizations Across Industries Are Seeking Skilled Professionals Who Can:"
      advantages={advantages}
      background="linear-gradient(to bottom, #f4f1ff, #ffffff)"
      gradientColor="#E2D7FF"
      decorCircleColor="radial-gradient(circle, rgba(90, 64, 153, 0.05) 0%, rgba(90, 64, 153, 0) 70%)"
    />
  );
};

export default DataScienceImportance;