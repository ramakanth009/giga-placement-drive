// src/components/common/fulltime/aitoolkit/AIToolkit.jsx
import React, { useState } from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  section: {
    position: 'relative',
    padding: '60px 0',
    backgroundColor: '#2A2B6A',
    backgroundImage: 'linear-gradient(to bottom right, #2A2B6A, #3C3E8D)',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url("/path-to-network-pattern.png")',
      backgroundSize: 'cover',
      opacity: 0.2,
      zIndex: 1,
    },
  },
  content: {
    position: 'relative',
    zIndex: 2,
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    '& span': {
      color: '#FFC614 !important',
    },
  },
  toolsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  },
  toolCard: {
    background: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    },
  },
  selectedToolCard: {
    border: '3px solid',
  },
  premiumBadge: {
    display: 'inline-block',
    backgroundColor: '#8B5CF6',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  toolHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  toolIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px',
  },
  toolName: {
    fontWeight: '700 !important',
    fontSize: '1.1rem !important',
    color: '#333 !important',
  },
  toolDescription: {
    color: '#666 !important',
    fontSize: '0.9rem !important',
    lineHeight: '1.4 !important',
  },
  toolDetails: {
    background: 'white',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '40px',
  },
  toolDetailsHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  toolDetailsName: {
    fontSize: '1.5rem !important',
    fontWeight: '700 !important',
    marginLeft: '15px !important',
  },
  premiumBox: {
    backgroundColor: '#f3f0ff',
    border: '1px solid #d8cffd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '20px',
  },
  premiumBoxTitle: {
    color: '#7c3aed !important',
    fontWeight: '600 !important',
    marginBottom: '5px !important',
  },
  premiumBoxPrice: {
    color: '#8b5cf6 !important',
    fontSize: '0.9rem !important',
  },
  twoColumn: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '30px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  useCases: {
    marginTop: '20px',
  },
  useCaseItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  },
  arrowRight: {
    marginRight: '10px',
    color: '#666',
  },
  capabilitiesSection: {
    marginTop: '30px',
  },
  capabilityChart: {
    marginTop: '20px',
  },
  capabilityBar: {
    height: '25px',
    background: '#e9ecef',
    borderRadius: '4px',
    marginBottom: '15px',
    position: 'relative',
  },
  capabilityBarFill: {
    height: '100%',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    justifyContent: 'space-between',
    color: 'white',
    fontSize: '0.85rem',
    fontWeight: '600',
  },
});

const AIToolkit = ({ tools, programName }) => {
  const classes = useStyles();
  const [selectedToolId, setSelectedToolId] = useState(tools[0]?.id);

  const selectedTool = tools.find(tool => tool.id === selectedToolId);

  const handleToolSelect = (toolId) => {
    setSelectedToolId(toolId);
  };

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg" className={classes.content}>
        <Box className={classes.header}>
          <Typography className={classes.title}>
            Your Complete <span>AI Toolkit</span>
          </Typography>
        </Box>

        {/* Tool Cards Grid */}
        <Box className={classes.toolsGrid}>
          {tools.map((tool) => (
            <Paper 
              key={tool.id} 
              className={`${classes.toolCard} ${selectedToolId === tool.id ? classes.selectedToolCard : ''}`}
              style={{ borderColor: selectedToolId === tool.id ? tool.color : 'transparent' }}
              onClick={() => handleToolSelect(tool.id)}
              elevation={0}
            >
              {tool.isPaid && <span className={classes.premiumBadge}>Premium</span>}
              <Box className={classes.toolHeader}>
                <Box className={classes.toolIcon} style={{ color: tool.iconColor }}>
                  <div dangerouslySetInnerHTML={{ __html: tool.iconHtml }} />
                </Box>
                <Typography className={classes.toolName}>
                  {tool.name}
                </Typography>
              </Box>
              <Typography className={classes.toolDescription}>
                {tool.description.substring(0, 60)}...
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* Selected Tool Details */}
        {selectedTool && (
          <Paper className={classes.toolDetails} elevation={0}>
            <Box className={classes.twoColumn}>
              <Box>
                <Box className={classes.toolDetailsHeader}>
                  <Box className={classes.toolIcon} style={{ color: selectedTool.iconColor }}>
                    <div dangerouslySetInnerHTML={{ __html: selectedTool.iconHtml }} />
                  </Box>
                  <Typography className={classes.toolDetailsName}>
                    {selectedTool.name}
                  </Typography>
                </Box>
                
                {selectedTool.isPaid && (
                  <Box className={classes.premiumBox}>
                    <Typography className={classes.premiumBoxTitle}>Premium Access Included</Typography>
                    <Typography className={classes.premiumBoxPrice}>
                      {selectedTool.price} - No additional cost to students
                    </Typography>
                  </Box>
                )}
                
                <Typography>
                  {selectedTool.description}
                </Typography>
                
                <Box className={classes.useCases}>
                  <Typography variant="h6">Key Use Cases:</Typography>
                  {selectedTool.useCases.map((useCase, index) => (
                    <Box key={index} className={classes.useCaseItem}>
                      <span className={classes.arrowRight}>→</span>
                      <Typography>{useCase}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
              
              <Box className={classes.capabilitiesSection}>
                <Typography variant="h6">Capability Breakdown:</Typography>
                <Box className={classes.capabilityChart}>
                  {selectedTool.capabilities.map((capability, index) => (
                    <Box key={index} className={classes.capabilityBar}>
                      <Box 
                        className={classes.capabilityBarFill} 
                        style={{ 
                          width: `${capability.value}%`, 
                          backgroundColor: selectedTool.color 
                        }}
                      >
                        <span>{capability.name}</span>
                        <span>{capability.value}/100</span>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default AIToolkit;