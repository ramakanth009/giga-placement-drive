// src/components/hiringpartners/LogoPlaceholders.jsx
// This is a temporary component to use until you have the actual logo files
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

// This function creates a placeholder for a logo
const LogoPlaceholder = ({ name, color = '#666' }) => {
  return (
    <Box
      sx={{
        width: 140,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
        borderRadius: '8px',
        margin: '0 30px',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        }
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: color,
          fontWeight: 'bold',
          textAlign: 'center',
          padding: '0 8px',
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

// Create a version of the HiringPartners component that uses placeholders
const HiringPartnersWithPlaceholders = () => {
  const partnerNames = [
    { name: 'Accenture', color: '#a100ff' },
    { name: 'Adobe', color: '#FF0000' },
    { name: 'Amazon', color: '#FF9900' },
    { name: 'Deloitte', color: '#86BC25' },
    { name: 'Byjus', color: '#2196f3' }
  ];

  // Duplicate for continuous scrolling
  const allPartners = [...partnerNames, ...partnerNames, ...partnerNames, ...partnerNames];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          padding: '60px 0',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          margin: '40px auto',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          height: '180px',
        }}
      >
        {/* Title container on the left */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            width: '30%',
            paddingLeft: '40px',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#0a192f',
              fontWeight: 'bold',
              textAlign: 'left',
              fontSize: '2rem',
            }}
          >
            Our Hiring<br />Partners
          </Typography>
        </Box>

        {/* White fade on the left */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '28%',
            height: '100%',
            background: 'linear-gradient(to right, #ffffff 70%, rgba(255, 255, 255, 0))',
            zIndex: 1,
          }}
        />

        {/* Logo slider */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              animation: 'slideAnimation 25s linear infinite',
              position: 'absolute',
              left: '28%',
              '@keyframes slideAnimation': {
                '0%': {
                  transform: 'translateX(0)',
                },
                '100%': {
                  transform: 'translateX(-50%)',
                },
              },
            }}
          >
            {allPartners.map((partner, index) => (
              <LogoPlaceholder key={index} name={partner.name} color={partner.color} />
            ))}
          </Box>
        </Box>

        {/* White fade on the right */}
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '10%',
            height: '100%',
            background: 'linear-gradient(to left, #ffffff 70%, rgba(255, 255, 255, 0))',
            zIndex: 1,
          }}
        />
      </Box>
    </Container>
  );
};

export default HiringPartnersWithPlaceholders;