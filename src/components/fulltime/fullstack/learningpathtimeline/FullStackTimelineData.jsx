// src/components/fulltime/fullstack/learningpathtimeline/FullStackTimelineData.jsx
import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BugReportIcon from '@mui/icons-material/BugReport';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CloudIcon from '@mui/icons-material/Cloud';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MessageIcon from '@mui/icons-material/Message';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import FlagIcon from '@mui/icons-material/Flag';
import SchoolIcon from '@mui/icons-material/School';
import ExploreIcon from '@mui/icons-material/Explore';

const fullStackTimelineData = {
  title: "Explore the 4-Phase Learning Cycle at Gigaversity",
  subtitle: "A revolutionary approach to full stack development education that puts real-world experience first. Not just another bootcamp.",
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
      description: "From the very first session, you'll build essential full stack skills through real-world case studies, collaborative projects, and mentor guidance.",
      highlights: [
        {
          title: "Logical Thinking and Algorithmic Skill",
          description: "Learn to break problems into steps and solve them using clear, logical thinking and algorithms.",
          icon: <WebIcon />
        },
        {
          title: "Code Comprehension & Refactoring",
          description: "Understand existing code, improve its structure, and make it cleaner without changing what it does.",
          icon: <PeopleIcon />
        },
        {
          title: "Live Mentor Sessions & Tech Talks",
          description: "Join live expert sessions to clear doubts, gain insights, and stay updated with industry trends.",
          icon: <MessageIcon />
        },
        {
          title: "Interest & Productivity Observation",
          description: " Track your learning pace, consistency, and passion to help mentors guide your learning path better.",
          icon: <AutoAwesomeIcon />
        }
      ],
      modules: [
        "HTML5 & CSS3 Fundamentals",
        "JavaScript & DOM Manipulation",
        "Responsive Design Principles",
        "Version Control with Git & GitHub",
        "Command Line & Development Tools",
        "Web Accessibility Standards"
      ],
      milestone: {
        name: "Level 1 Test (L1)",
        description: "Maps your strengths → Frontend vs. Backend tracks",
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
      title: "Specialization Phase",
      subtitle: "3–6 Months",
      tagline: "Train for Your Subdomain. Master Real Use-Cases.",
      icon: <CodeIcon />,
      color: "#4CAF50",
      description: "Continue project-first learning with industry case deep-dives and guided workshops tailored to your track.",
      highlights: [
        {
          title: "Industry Case Deep-Dives",
          description: "E-commerce platforms, content management systems, or API architecture—each module starts with a real company problem.",
          icon: <WorkIcon />
        },
        {
          title: "Guided Build-Along Workshops",
          description: "Bi-weekly code-along sessions implementing full solutions step by step.",
          icon: <BuildIcon />
        },
        {
          title: "Peer-Led Study Jams",
          description: "Rotate 'Topic Ambassador' role and lead sessions on your favorite tools to earn 'Peer Points'.",
          icon: <PeopleIcon />
        },
        {
          title: "Architecture & Design Patterns",
          description: "Learn foundational patterns for scalable, maintainable applications that stand up to real-world demands.",
          icon: <AccountTreeIcon />
        }
      ],
      tracks: [
        {
          name: "Frontend Development Track",
          modules: [
            "Modern JavaScript (ES6+) & TypeScript",
            "React & Component Architecture",
            "State Management (Redux, Context API)",
            "CSS Frameworks & Preprocessors",
            "UI/UX Design Principles",
            "Web Performance Optimization"
          ],
          icon: <WebIcon />
        },
        {
          name: "Backend Development Track",
          modules: [
            "Node.js & Express Fundamentals",
            "RESTful API Design & Implementation",
            "Database Design & SQL/NoSQL",
            "Authentication & Authorization",
            "Server-side Rendering",
            "Microservices Architecture"
          ],
          icon: <StorageIcon />
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
          description: "Work in squads on real briefs—build e-commerce platforms, content management systems, and data dashboards.",
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
          title: "CI/CD Implementation",
          description: "Set up professional deployment pipelines and testing frameworks for your projects.",
          icon: <IntegrationInstructionsIcon />
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
        "Flexible: Attend Online or On-Campus (or mix both!)",
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

export default fullStackTimelineData;