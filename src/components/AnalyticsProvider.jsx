// ===================================================================
// 2. ANALYTICS PROVIDER COMPONENT
// src/components/AnalyticsProvider.jsx
// ===================================================================

import React, { useEffect, createContext, useContext, useState } from 'react';
import { seoAnalytics } from '../utils/seoAnalytics';

const AnalyticsContext = createContext();

export const AnalyticsProvider = ({ children, trackingId, gtmId, enabled = true }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!enabled) {
      console.log('Analytics disabled via environment variable');
      return;
    }

    const initAnalytics = async () => {
      try {
        // Initialize SEO Analytics with your tracking ID
        await seoAnalytics.init(trackingId, gtmId);
        setIsInitialized(true);
        
        // Track initial page load performance after a short delay
        setTimeout(() => {
          seoAnalytics.trackPagePerformance();
          seoAnalytics.trackCoreWebVitals();
        }, 1000);

        console.log('Analytics initialized successfully');
      } catch (error) {
        console.warn('Failed to initialize analytics:', error);
      }
    };

    initAnalytics();
  }, [trackingId, gtmId, enabled]);

  const value = {
    isInitialized,
    seoAnalytics,
    trackEvent: (eventName, parameters) => {
      if (isInitialized) {
        seoAnalytics.trackEvent(eventName, parameters);
      }
    },
    trackPageView: (pagePath, pageTitle) => {
      if (isInitialized) {
        seoAnalytics.trackPageView(pagePath, pageTitle);
      }
    },
    trackConversion: (conversionId, value) => {
      if (isInitialized) {
        seoAnalytics.trackConversion(conversionId, value);
      }
    }
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};