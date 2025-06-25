// ===================================================================
// 7. PERFORMANCE OPTIMIZATION FOR SEO
// src/utils/performanceOptimizer.js
// ===================================================================

export class PerformanceOptimizer {
  constructor() {
    this.observer = null;
    this.intersectionObserver = null;
  }

  // Lazy load images for better performance
  initLazyLoading() {
    if ('IntersectionObserver' in window) {
      this.intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              this.intersectionObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        this.intersectionObserver.observe(img);
      });
    }
  }

  // Preload critical resources
  preloadCriticalResources() {
    const criticalResources = [
      { href: '/assets/critical.css', as: 'style' },
      { href: '/assets/logo.webp', as: 'image' },
      { href: '/assets/hero-background.webp', as: 'image' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      document.head.appendChild(link);
    });
  }

  // Implement Core Web Vitals optimization
  optimizeCoreWebVitals() {
    // Largest Contentful Paint (LCP) optimization
    const lcpElements = document.querySelectorAll('img, video, [style*="background-image"]');
    lcpElements.forEach(el => {
      if (el.tagName === 'IMG') {
        el.loading = 'eager';
        el.decoding = 'sync';
      }
    });

    // First Input Delay (FID) optimization
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Load non-critical JavaScript
        this.loadNonCriticalScripts();
      });
    }

    // Cumulative Layout Shift (CLS) optimization
    this.preventLayoutShifts();
  }

  loadNonCriticalScripts() {
    const nonCriticalScripts = [
      '/assets/analytics.js',
      '/assets/chat-widget.js'
    ];

    nonCriticalScripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });
  }

  preventLayoutShifts() {
    // Add aspect ratio to images
    document.querySelectorAll('img:not([width]):not([height])').forEach(img => {
      img.style.aspectRatio = '16/9';
      img.style.objectFit = 'cover';
    });

    // Reserve space for dynamic content
    document.querySelectorAll('.dynamic-content').forEach(el => {
      el.style.minHeight = '200px';
    });
  }
}