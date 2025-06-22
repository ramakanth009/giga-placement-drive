// src/components/fullstackcomponents/projectssection/FullStackProjectsSection.jsx
import React from 'react';
import ProjectsSection from '../../../common/fulltime/projectssection/ProjectsSection';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory'; 
import InsertChartIcon from '@mui/icons-material/InsertChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import UpdateIcon from '@mui/icons-material/Update';
import LockIcon from '@mui/icons-material/Lock';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import socialMediaImage from '../../../../assets/social_med_a_project.png';
import taskManagementImage from '../../../../assets/quick_commerce.png';
import inventoryManagementImage from '../../../../assets/PrototypeProject.jpg';
// import PaymentIcon from '@mui/icons-material/Payment';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import ecommerceImage from '../../../../assets/ecommerce.png';
// import additionalProjectImage from '../../../../assets/additional-project.png';

const FullStackProjectsSection = () => {
  const subtitle = "Build your portfolio with real-world full stack applications. Each project is designed to develop industry-relevant skills and solve practical business problems.";
  const title = (
    <>
      Products You’ll Build in the <span>Full Stack Program</span>
    </>
  );
  
  // Project data for Full Stack program
  const projects = [
    {
      title: "Social Media",
      image: socialMediaImage,
      icon: {
        component: <ViewModuleIcon />,
        bgColor: "#6B4BF3"
      },
      features: [
        {
          icon: <InsertChartIcon />,
          text: "Analytics"
        },
        {
          icon: <BarChartIcon />,
          text: "Data Visualization"
        },
        {
          icon: <UpdateIcon />,
          text: "Real-time Updates"
        }
      ],
      description: "Create impactful Social Media Insights! Build a dynamic Social Media Dashboard that helps track key metrics and analyze performance across multiple platforms.",
      skills: ["Component Design", "State Management", "API Integration", "React/Vue"]
    },
    {
      title: "Quick Commerce / Rider app",
      image: taskManagementImage,
      icon: {
        component: <AssignmentIcon />,
        bgColor: "#6B4BF3"
      },
      features: [
        {
          icon: <LockIcon />,
          text: "Authentication"
        },
        {
          icon: <ViewModuleIcon />,
          text: "Task Organization"
        },
        {
          icon: <PersonIcon />,
          text: "User Management"
        }
      ],
      description: "Boost Productivity with Seamless Task Management! Develop a system that allows users to categorize tasks, set due dates, and implement secure authentication.",
      skills: ["JWT Authentication", "State Management", "Node.js/Express", "MongoDB"]
    },
    {
      title: "Startup Prototype Project/Startup Incubation Build",
      image: inventoryManagementImage,
      icon: {
        component: <InventoryIcon />,
        bgColor: "#6B4BF3"
      },
      features: [
        {
          icon: <CodeIcon />,
          text: "MVP Development"
        },
        {
          icon: <ViewModuleIcon />,
          text: "Scalable Architecture"
        },
        {
          icon: <StorageIcon />,
          text: "Cloud Integration"
        }
      ],
      description: "Launch Your Startup Vision! Build a complete MVP for your startup idea with modern tech stack, scalable architecture, and cloud deployment capabilities.",
      skills: ["Full Stack Development", "Cloud Services", "System Architecture", "DevOps"]
    }
  ];

  return <ProjectsSection projects={projects} subtitle={subtitle} title={title} />;
};

export default FullStackProjectsSection;