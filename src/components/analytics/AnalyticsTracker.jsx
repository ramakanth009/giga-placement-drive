// src/components/analytics/AnalyticsTracker.jsx
import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackScrollDepth } from '../../utils/analytics';

/**
 * Component that tracks page views and user behavior
 * This should be included once in the main App component
 */
const AnalyticsTracker = () => {
  const location = useLocation();
  
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    
    if (docHeight === windowHeight) return; // No scroll possible
    
    // Calculate scroll percentage
    const scrollPercent = Math.round((scrollTop / (docHeight - windowHeight)) * 100);
    
    // Track scroll milestones if they haven't been tracked yet
    [25, 50, 75, 90].forEach(milestone => {
      if (!window.scrollProgress[milestone] && scrollPercent >= milestone) {
        window.scrollProgress[milestone] = true;
        trackScrollDepth(milestone, location.pathname);
      }
    });
  }, [location.pathname]);

  // Track page views when location changes
  useEffect(() => {
    const pageTitle = document.title;
    trackPageView(location.pathname, pageTitle);
    
    window.scrollProgress = {
      25: false,
      50: false,
      75: false,
      90: false
    };
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location, handleScroll]);
  
  // Set up scroll tracking
  useEffect(() => {
    if (!window.scrollProgress) {
      window.scrollProgress = {
        25: false,
        50: false,
        75: false,
        90: false
      };
    }
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();
    
    return () => {
      // Only track if user spent more than 5 seconds on the page
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      if (timeSpent >= 5) {
        import('../../utils/analytics')
          .then(({ trackTimeOnPage }) => {
            trackTimeOnPage(location.pathname, timeSpent);
          });
      }
    };
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default AnalyticsTracker;