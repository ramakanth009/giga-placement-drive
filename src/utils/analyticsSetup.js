// ===================================================================
// 1. ANALYTICS INITIALIZATION SCRIPT
// src/utils/analyticsSetup.js
// ===================================================================

export class AnalyticsManager {
  constructor(gaTrackingId = 'G-XXXXXXXXXX') {
    this.trackingId = gaTrackingId;
    this.isInitialized = false;
    this.fallbackAnalytics = [];
  }

  // Initialize Google Analytics
  async initializeGoogleAnalytics() {
    if (this.isInitialized) return;

    try {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingId}`;
      document.head.appendChild(script);

      // Wait for script to load
      await new Promise((resolve) => {
        script.onload = resolve;
      });

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };

      window.gtag('js', new Date());
      window.gtag('config', this.trackingId, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });

      this.isInitialized = true;
      console.log('Google Analytics initialized successfully');

    } catch (error) {
      console.warn('Failed to initialize Google Analytics:', error);
      this.isInitialized = false;
    }
  }

  // Safe gtag wrapper
  gtag(...args) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag(...args);
    } else {
      // Fallback: store events for later sending
      this.fallbackAnalytics.push({
        timestamp: new Date().toISOString(),
        args: args
      });
      console.log('Analytics (fallback):', args);
    }
  }

  // Send fallback analytics once gtag is available
  sendFallbackEvents() {
    if (this.fallbackAnalytics.length > 0 && window.gtag) {
      this.fallbackAnalytics.forEach(event => {
        window.gtag(...event.args);
      });
      this.fallbackAnalytics = [];
    }
  }

  // Check if analytics is available
  isAnalyticsAvailable() {
    return typeof window !== 'undefined' && 
           typeof window.gtag === 'function' && 
           this.isInitialized;
  }

  // Custom event tracking
  trackEvent(eventName, parameters = {}) {
    this.gtag('event', eventName, {
      event_category: 'User Interaction',
      event_label: eventName,
      value: 1,
      ...parameters
    });
  }

  // Page view tracking
  trackPageView(pagePath, pageTitle) {
    this.gtag('config', this.trackingId, {
      page_path: pagePath,
      page_title: pageTitle
    });
  }

  // Custom conversion tracking
  trackConversion(conversionId, value = 0) {
    this.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: 'INR'
    });
  }
}

// Create singleton instance
export const analyticsManager = new AnalyticsManager('G-XXXXXXXXXX'); // Replace with your actual tracking ID