import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal'; // Changed to Terminal icon
import WebIcon from '@mui/icons-material/Web';
import HiringRolesBoxes from '../../common/hiringrolesboxes/HiringRolesBoxes';

const FullStackHiringRolesBoxes = () => {
  // Data for roles with Material-UI icons and specific points
  const roles = [
    {
      title: 'Frontend Developer',
      icon: <WebIcon />,
      points: [
        'Create user interfaces with React.js',
        'Build responsive UIs that work on all devices',
        'Implement state management with Redux',
        'Design UI/UX for optimal user experience',
        'Optimize web performance',
      ]
    },
    {
      title: 'Backend Developer',
      icon: <TerminalIcon />, // Changed to Terminal icon for better representation of backend
      points: [
        'Design and build RESTful APIs',
        'Implement database schema & models',
        'Create authentication & security systems',
        'Optimize server performance & scaling',
        'Integrate with third-party services',
      ]
    },
    {
      title: 'Full Stack Developer',
      icon: <CodeIcon />,
      points: [
        'End-to-end application development',
        'Build both client and server solutions',
        'Deploy applications to cloud platforms',
        'Implement CI/CD pipelines for deployment',
        'Develop & maintain complete web systems',
      ]
    },
    {
      title: 'Database Engineer',
      icon: <StorageIcon />,
      points: [
        'Design and optimize database architectures',
        'Implement data security and backup solutions',
        'Manage database performance and scaling',
        'Create data migration strategies',
        'Maintain data integrity and consistency',
      ]
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