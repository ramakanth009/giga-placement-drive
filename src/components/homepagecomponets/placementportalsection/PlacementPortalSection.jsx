import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AssignmentIcon from '@mui/icons-material/Assignment';
import VideocamIcon from '@mui/icons-material/Videocam';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TimelineIcon from '@mui/icons-material/Timeline';

const features = [
  {
    title: "1000+ Curated Opportunities",
    description: "Access a wide range of verified roles from top startups and leading tech companies actively hiring fresh talent like you.",
    icon: <WorkIcon fontSize="large" color="primary" />,
  },
  {
    title: "Custom Job Alerts",
    description: "Get personalized job alerts based on your skills, interests, and career goals—sourced from India's top job platforms, all in one place.",
    icon: <NotificationsActiveIcon fontSize="large" color="primary" />,
  },
  {
    title: "Skill-Based Assessments",
    description: "Demonstrate your expertise with real-time coding tasks and domain-specific evaluations designed to match industry expectations.",
    icon: <AssignmentIcon fontSize="large" color="primary" />,
  },
  {
    title: "Mock Interview Coach",
    description: "Prepare with AI-powered and expert-led mock interviews. Receive actionable insights and performance analysis to build interview confidence.",
    icon: <VideocamIcon fontSize="large" color="primary" />,
  },
  {
    title: "Proctored Testing & Employer Access",
    description: "Participate in secure, monitored evaluations where your performance speaks for you. High scores enhance your visibility to potential employers, enabling companies to identify and connect directly through the platform.",
    icon: <VerifiedUserIcon fontSize="large" color="primary" />,
  },
  {
    title: "Application Progress Tracker",
    description: "Gain real-time insights into the status of every job application. From resume selection to review and final decision, stay informed at every stage, ensuring complete transparency throughout your hiring journey.",
    icon: <TimelineIcon fontSize="large" color="primary" />,
  },
];

const PlacementPortalSection = () => {
  return (
    <Box sx={{
      py: { xs: 6, md: 10 },
      backgroundColor: '#f7fafd',
      minHeight: '100vh',
    }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              mb: 2,
              letterSpacing: 1,
            }}
          >
            Gigaversity Placement Portal & Smart Tracking
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}
          >
            Everything you need to launch your career, track your progress, and connect with top employers—all in one place.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 3, md: 4 },
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          {features.map((feature, idx) => (
            <Box
              key={idx}
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' },
                minWidth: { xs: '100%', sm: 280, md: 320 },
                maxWidth: { xs: '100%', sm: 360, md: 370 },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  transition: 'box-shadow 0.2s',
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    width: 56,
                    height: 56,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'primary.light',
                    borderRadius: '50%',
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                    mb: 1,
                    textAlign: 'center',
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    textAlign: 'center',
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PlacementPortalSection;