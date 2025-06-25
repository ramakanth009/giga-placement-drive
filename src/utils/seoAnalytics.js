// ===================================================================
// 5. UPDATED SEO ANALYTICS (Integrating with your existing GTM)
// src/utils/seoAnalytics.js
// ===================================================================

export class SEOAnalytics {
  constructor() {
    this.searchData = [];
    this.performanceData = [];
    this.isInitialized = false;
    this.trackingId = null;
    this.gtmId = null;
  }

  async init(trackingId, gtmId) {
    if (this.isInitialized) return;

    this.trackingId = trackingId;
    this.gtmId = gtmId;

    try {
      // Initialize Google Analytics if tracking ID is provided and different from GTM
      if (trackingId && trackingId !== 'G-XXXXXXXXXX') {
        await this.initializeGoogleAnalytics();
      }

      // GTM is already loaded from index.html
      if (typeof window.dataLayer !== 'undefined') {
        console.log('✅ GTM detected and ready');
      }

      this.isInitialized = true;
      console.log('✅ SEO Analytics initialized successfully');

    } catch (error) {
      console.warn('⚠️ Failed to initialize SEO Analytics:', error);
    }
  }

  async initializeGoogleAnalytics() {
    // Only load GA if not already loaded and trackingId is valid
    if (typeof window.gtag === 'undefined' && this.trackingId) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingId}`;
      document.head.appendChild(script);

      await new Promise((resolve) => {
        script.onload = resolve;
      });

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };

      window.gtag('js', new Date());
      window.gtag('config', this.trackingId);
    }
  }

  // Enhanced tracking that works with both GTM and GA
  trackEvent(eventName, parameters = {}) {
    // Track with GTM (dataLayer)
    if (typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push({
        event: eventName,
        ...parameters,
        timestamp: new Date().toISOString()
      });
    }

    // Track with GA if available
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        event_category: 'User Interaction',
        event_label: eventName,
        value: 1,
        ...parameters
      });
    }

    // Fallback logging
    console.log('📊 Analytics Event:', eventName, parameters);
  }

  async trackSearchArrival(searchQuery, route, source) {
    const data = {
      timestamp: new Date().toISOString(),
      searchQuery,
      targetRoute: route,
      source,
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };

    this.searchData.push(data);
    
    // Track with enhanced parameters
    this.trackEvent('search_arrival', {
      search_term: searchQuery,
      target_route: route,
      traffic_source: source,
      event_category: 'SEO',
      event_label: 'Auto Route',
      page_location: window.location.href,
      page_title: document.title
    });

    // Send to your custom analytics endpoint
    this.sendToCustomAnalytics('search_arrival', data);
  }

  async trackPagePerformance() {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0];
      const paint = performance.getEntriesByType('paint');
      
      const performanceData = {
        page: window.location.pathname,
        loadTime: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
        domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
        firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
        timestamp: new Date().toISOString()
      };

      this.performanceData.push(performanceData);

      this.trackEvent('page_performance', {
        page_load_time: performanceData.loadTime,
        dom_content_loaded: performanceData.domContentLoaded,
        first_paint: Math.round(performanceData.firstPaint),
        first_contentful_paint: Math.round(performanceData.firstContentfulPaint),
        event_category: 'Performance'
      });

      this.sendToCustomAnalytics('page_performance', performanceData);
    }
  }

  async trackCoreWebVitals() {
    try {
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
      
      getCLS(this.sendWebVital.bind(this));
      getFID(this.sendWebVital.bind(this));
      getFCP(this.sendWebVital.bind(this));
      getLCP(this.sendWebVital.bind(this));
      getTTFB(this.sendWebVital.bind(this));
    } catch (error) {
      console.warn('Web Vitals library not available:', error);
    }
  }

  sendWebVital(metric) {
    this.trackEvent('web_vital', {
      metric_name: metric.name,
      metric_value: Math.round(metric.value),
      metric_id: metric.id,
      page_path: window.location.pathname,
      event_category: 'Web Vitals'
    });
  }

  // Integration with your existing API service
  sendToCustomAnalytics(eventName, data) {
    // Use your existing API service structure
    const analyticsEndpoint = process.env.REACT_APP_ANALYTICS_ENDPOINT;
    
    if (analyticsEndpoint && analyticsEndpoint !== 'DISABLED') {
      // Using similar structure to your api.js
      fetch(analyticsEndpoint, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          event: eventName, 
          data,
          timestamp: new Date().toISOString(),
          sessionId: this.getSessionId(),
          page: window.location.pathname,
          referrer: document.referrer
        })
      }).catch(err => console.log('Custom analytics error:', err));
    }
  }

  getSessionId() {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = 'sess_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }

  // Helper methods for conversions and page views
  trackConversion(conversionId, value = 0) {
    this.trackEvent('conversion', {
      send_to: conversionId,
      value: value,
      currency: 'INR',
      event_category: 'Conversion'
    });
  }

  trackPageView(pagePath, pageTitle) {
    this.trackEvent('page_view', {
      page_path: pagePath,
      page_title: pageTitle,
      page_location: window.location.href,
      event_category: 'Navigation'
    });
  }

  getAnalyticsData() {
    return {
      searchData: this.searchData,
      performanceData: this.performanceData,
      isInitialized: this.isInitialized,
      sessionId: this.getSessionId(),
      trackingId: this.trackingId,
      gtmId: this.gtmId
    };
  }
}

// Create singleton instance
export const seoAnalytics = new SEOAnalytics();