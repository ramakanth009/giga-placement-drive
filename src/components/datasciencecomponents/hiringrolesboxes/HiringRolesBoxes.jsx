import React from 'react';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BarChartIcon from '@mui/icons-material/BarChart';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import StorageIcon from '@mui/icons-material/Storage';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import HiringRolesBoxes from '../../common/hiringrolesboxes/HiringRolesBoxes';

const DataScienceHiringRolesBoxes = () => {
  // Data for roles with Material-UI icons
  const roles = [
    {
      title: 'Data Analyst',
      icon: <AnalyticsIcon />,
    },
    {
      title: 'Machine Learning Engineer',
      icon: <PsychologyIcon />,
    },
    {
      title: 'Business Analyst',
      icon: <BarChartIcon />,
    },
    {
      title: 'AI Associate',
      icon: <SmartToyIcon />,
    },
    {
      title: 'Data Engineer',
      icon: <StorageIcon />,
    },
    {
      title: 'Jr. Data Scientist',
      icon: <DataThresholdingIcon />,
    }
  ];

  return (
    <HiringRolesBoxes
      title="Get Trained For The Roles"
      highlightedText="Companies Are Hiring For!"
      subtitle="Sought-After"
      roles={roles}
      backgroundGradient="linear-gradient(135deg, #f7faff 0%, #f0f6ff 100%)"
      iconContainerGradient="linear-gradient(135deg, #2A2B6A 0%, #3f4098 100%)"
    />
  );
};

export default DataScienceHiringRolesBoxes;