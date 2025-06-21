// src/components/fulltime/datascience/learningpathtimeline/DataScienceTimelineData.jsx
import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import FunctionsIcon from '@mui/icons-material/Functions';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import InsightsIcon from '@mui/icons-material/Insights';
import BarChartIcon from '@mui/icons-material/BarChart';
import BiotechIcon from '@mui/icons-material/Biotech';
import ChatIcon from '@mui/icons-material/Chat';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MessageIcon from '@mui/icons-material/Message';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import FlagIcon from '@mui/icons-material/Flag';
import SchoolIcon from '@mui/icons-material/School';
import ExploreIcon from '@mui/icons-material/Explore';

const dataScienceTimelineData = {
  title: "Explore the 4-Phase Learning Cycle at Gigaversity",
  subtitle: "A revolutionary approach to data science education that puts real-world experience first. Not just another bootcamp.",
  placementStats: {
    percentage: "94%",
    text: "industry placement within 60 days"
  },
  phases: [
    {
      id: 1,
      title: "Foundation Phase",
      subtitle: "0–3 Months",
      tagline: "Build Your Core. Discover Your Path.",
      icon: <ExploreIcon />,
      color: "#2196F3",
      description: "From the very first session, you'll build essential skills through real-world case studies, collaborative projects, and mentor guidance.",
      highlights: [
        {
          title: "Orientation to the Data Science Landscape",
          description: "Gain clarity on the fundamentals of data science, its career pathways, and real-world industry applications across various sectors.",
          icon: <CodeIcon />
        },
        {
          title: "Introduction to Python Programming",
          description: "Develop essential programming skills using Python—covering core concepts, data types, control structures, and foundational libraries like NumPy and Pandas.",
          icon: <PeopleIcon />
        },
        {
          title: "Fundamentals of Statistics & Data Interpretation",
          description: "Build a solid base in statistical thinking, learning key concepts such as distributions, averages, correlations, and variability—critical for data-driven decision-making.",
          icon: <MessageIcon />
        },
        {
          title: "Data Handling with Excel & Structured Thinking",
          description: "Master spreadsheet-based analysis to explore and organize data effectively, while developing a structured approach to problem-solving and analytics.",
          icon: <DataUsageIcon />
        }
      ],
      modules: [
        "Python Programming",
        "SQL & Database Fundamentals",
        "Statistics for Data",
        "Git & GitHub Workflow",
        "Problem Solving & Logic",
        "Technical Communication"
      ],
      milestone: {
        name: "Level 1 Test (L1)",
        description: "Maps your strengths → Data Scientist vs. Analyst tracks",
        details: "The pivotal Level 1 Assessment is Gigaversity's proprietary aptitude and skills evaluation that uses AI-driven analysis to map your natural talents to the optimal career path. Unlike traditional tests, L1 evaluates both technical aptitude AND working style preferences through a series of practical mini-projects and scenario responses.",
        features: [
          "Comprehensive skills evaluation across 12 core competencies",
          "AI-powered career path recommendation engine",
          "Personalized strengths and growth areas report",
          "One-on-one guidance session with industry mentor"
        ],
        icon: <SchoolIcon />,
        extraDetails: "The Level 1 Test is unique to Gigaversity's methodology. Unlike traditional assessments, our AI-powered evaluation system maps your natural aptitudes, coding style, and problem-solving approach to identify your optimal career path.",
        extraFeatures: [
          "Industry-recognized certification",
          "Personalized learning path creation",
          "AI-driven aptitude analysis"
        ]
      }
    },
    {
      id: 2,
      title: "Scenario-Based Learning",
      subtitle: "3–6 Months",
      tagline: "Train for Your Subdomain. Master Real Use-Cases.",
      icon: <BiotechIcon />,
      color: "#4CAF50",
      description: "Continue project-first learning with industry case deep-dives and guided workshops tailored to your track.",
      highlights: [
        {
          title: "Industry Case Deep-Dives",
          description: "E-commerce forecasting, sentiment analysis, or finance anomaly detection—each module starts with a real company problem.",
          icon: <WorkIcon />
        },
        {
          title: "Guided Build-Along Workshops",
          description: "Bi-weekly code-along sessions implementing full solutions step by step.",
          icon: <CodeIcon />
        },
        {
          title: "Peer-Led Study Jams",
          description: "Rotate 'Topic Ambassador' role and lead sessions on your favorite tools to earn 'Peer Points'.",
          icon: <PeopleIcon />
        },
        {
          title: "Advanced Analytical Techniques",
          description: "Master statistical methods and machine learning algorithms through practical applications.",
          icon: <AutoGraphIcon />
        }
      ],
      tracks: [
        {
          name: "Data Scientist Track",
          modules: [
            "Machine Learning Algorithms",
            "Deep Learning & Neural Networks",
            "Model Evaluation & Tuning",
            "NLP & Text Analytics",
            "Time-Series Forecasts",
            "Data Engineering Essentials"
          ],
          icon: <PsychologyIcon />
        },
        {
          name: "Data/Business Analyst Track",
          modules: [
            "PostgreSQL for Analytics",
            "Tableau & Power BI Dashboards",
            "Advanced Excel & Sheets",
            "Exploratory Data Analysis (EDA)",
            "Storytelling & Business Reporting"
          ],
          icon: <BarChartIcon />
        }
      ],
      note: "Each week, build a 'Portfolio Mini-Project' that you own end-to-end.",
      milestone: {
        name: "Level 2 Test (L2)",
        description: "Validates industry-readiness and technical mastery",
        details: "The exclusive Level 2 Assessment is where theory meets practical application. Unlike traditional certifications that test memorization, L2 challenges you with real industry problems that require creative problem-solving and technical mastery.",
        features: [
          "72-hour technical challenge with real-world constraints",
          "Comprehensive code review by industry veterans",
          "End-to-end project delivery assessment",
          "Official L2 certification recognized by 100+ hiring partners"
        ],
        icon: <EmojiEventsIcon />,
        extraDetails: "The Level 2 Test is your gateway to industry recognition. This intensive 72-hour technical challenge simulates real workplace scenarios and validates your ability to deliver professional-quality solutions under realistic constraints.",
        extraFeatures: [
          "Recognized by 100+ hiring partners",
          "Project-based assessment methodology",
          "Industry equivalent to 1+ year experience"
        ]
      }
    },
    {
      id: 3,
      title: "Product phase",
      subtitle: "6–9 Months",
      tagline: "Where Learning Becomes Real.",
      icon: <RocketLaunchIcon />,
      color: "#9C27B0",
      description: "Work on 'Launchpad Projects' in agile teams with real briefs from hiring partners.",
      highlights: [
        {
          title: "Live Projects from Hiring Partners",
          description: "Work in squads on real briefs—optimize logistics networks, build customer-segmentation models, and more.",
          icon: <WorkIcon />
        },
        {
          title: "Agile Sprints & Scrum Ceremonies",
          description: "Experience daily stand-ups, sprint planning, demos and retros—just like a true tech team.",
          icon: <CalendarMonthIcon />
        },
        {
          title: "Mentor Office Hours & Guest Workshops",
          description: "Bi-monthly deep-dives by partner-company leads on best practices and deployment pipelines.",
          icon: <MessageIcon />
        },
        {
          title: "Data Engineering Pipelines",
          description: "Build and optimize end-to-end data processing systems for your projects.",
          icon: <StorageIcon />
        }
      ],
      milestone: {
        name: "Launchpad Projects",
        description: "Real Teams, Real Code, Real Impact",
        details: "Your capstone experience culminates in building production-grade solutions for actual businesses. These aren't simulations—they're real projects with real stakeholders and real impact. Your work may go live and be used by thousands of users, giving you the ultimate portfolio piece.",
        features: [
          "End-to-end project ownership in small, agile teams",
          "Direct stakeholder interaction with partner companies",
          "Production deployment experience with CI/CD pipelines",
          "Public project showcase to industry professionals"
        ],
        icon: <FlagIcon />
      }
    },
    {
      id: 4,
      title: "Career Readiness Trail",
      subtitle: "9–12 Months",
      tagline: "Gear Up & Get Hired.",
      icon: <EmojiEventsIcon />,
      color: "#FF9800",
      description: "Perfect your interview skills, build your portfolio, and connect directly with hiring partners.",
      highlights: [
        {
          title: "AI-Powered Mock Interviews",
          description: "Practice live with our proprietary tool—get instant feedback on both tech chops and communication.",
          icon: <PsychologyIcon />
        },
        {
          title: "Resume & Portfolio Clinics",
          description: "One-on-one sessions with hiring-partner HRs to craft standout profiles.",
          icon: <CheckCircleIcon />
        },
        {
          title: "Campus & Online Job Fairs",
          description: "Exclusive 'Gigaversity Connect' events where you pitch directly to recruiters.",
          icon: <PeopleIcon />
        },
        {
          title: "Live Internship Trials",
          description: "4–6 week stints with partners to 'test drive' roles, followed by conversion interviews.",
          icon: <WorkIcon />
        }
      ],
      perks: [
        "Flexible: Attend Online or On-Campus or Hybrid",
        "Hands-On: Mentor-led labs, pop-up hackathons, 'Demo Days'",
        "Community: 24/7 Slack channels, peer study groups, campus hangouts",
        "Career Network: Access to 100+ hiring partners and alumni mentorship"
      ],
      milestone: {
        name: "Industry Placement",
        description: "From learning to earning in top companies",
        details: "Unlike traditional education where you graduate and then start job hunting, our Career Readiness Trail integrates the hiring process directly into your learning journey. With 94% placement rate within 60 days of completion, our approach works.",
        features: [
          "Guaranteed interview opportunities with 5+ hiring partners",
          "Gigaversity talent advocate to represent you to employers",
          "6-month post-placement support and coaching",
          "Alumni salary averaging 27% higher than traditional graduates"
        ],
        icon: <StarIcon />
      }
    }
  ]
};

export default dataScienceTimelineData;