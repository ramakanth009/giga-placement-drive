import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WebIcon from '@mui/icons-material/Web';
import HiringRolesBoxes from '../../common/hiringrolesboxes/HiringRolesBoxes';

const FullStackHiringRolesBoxes = () => {
  // Data for roles with Material-UI icons
  const roles = [
    {
      title: 'Frontend Developer',
      icon: <WebIcon />,
    },
    {
      title: 'Backend Developer',
      icon: <StorageIcon />,
    },
    {
      title: 'Full Stack Developer',
      icon: <CodeIcon />,
    },
    {
      title: 'Node.js Developer',
      icon: <DeveloperModeIcon />,
    },
    {
      title: 'React Developer',
      icon: <PhoneIphoneIcon />,
    },
  ];

  return (
    <HiringRolesBoxes
      title="Get Trained For The Roles"
      highlightedText="Companies Are Hiring For!"
      subtitle="Dynamic Tech"
      roles={roles}
      backgroundGradient="linear-gradient(135deg, #f7faff 0%, #f0f6ff 100%)"
      decorativeShapeGradient="radial-gradient(circle, rgba(42, 43, 106, 0.05) 0%, rgba(42, 43, 106, 0) 70%)"
      decorativeShapeBottomGradient="radial-gradient(circle, rgba(255, 198, 20, 0.05) 0%, rgba(255, 198, 20, 0) 70%)"
      iconContainerBgColor="#2A2B6A"
    />
  );
};

export default FullStackHiringRolesBoxes;