// ===================================================================
// 1. ADVANCED SEO HOOK WITH STRUCTURED DATA
// src/hooks/useAdvancedSEO.js
// ===================================================================

import { useEffect } from 'react';

const useAdvancedSEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  structuredData,
  hiddenKeywords = [],
  searchTerms = [],
  ogImage,
  articleData = null,
  courseData = null,
  breadcrumbs = []
}) => {
  useEffect(() => {
    // 1. Basic Meta Tags
    document.title = title;
    
    const updateMetaTag = (name, content, attribute = 'name') => {
      if (!content) return;
      
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Core SEO Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('author', 'Gigaversity');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Advanced SEO Meta Tags
    updateMetaTag('theme-color', '#2A2B6A');
    updateMetaTag('msapplication-TileColor', '#2A2B6A');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');

    // Open Graph Meta Tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', articleData ? 'article' : 'website', 'property');
    updateMetaTag('og:url', canonicalUrl || window.location.href, 'property');
    updateMetaTag('og:site_name', 'Gigaversity', 'property');
    updateMetaTag('og:locale', 'en_IN', 'property');
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage, 'property');
      updateMetaTag('og:image:width', '1200', 'property');
      updateMetaTag('og:image:height', '630', 'property');
      updateMetaTag('og:image:alt', title, 'property');
    }

    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@gigaversity');
    updateMetaTag('twitter:creator', '@gigaversity');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    if (ogImage) {
      updateMetaTag('twitter:image', ogImage);
    }

    // Article-specific meta tags
    if (articleData) {
      updateMetaTag('article:published_time', articleData.publishedTime, 'property');
      updateMetaTag('article:modified_time', articleData.modifiedTime, 'property');
      updateMetaTag('article:author', articleData.author, 'property');
      updateMetaTag('article:section', articleData.section, 'property');
      if (articleData.tags) {
        articleData.tags.forEach(tag => {
          const tagElement = document.createElement('meta');
          tagElement.setAttribute('property', 'article:tag');
          tagElement.setAttribute('content', tag);
          document.head.appendChild(tagElement);
        });
      }
    }

    // 2. Canonical URL
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', canonicalUrl || window.location.href);

    // 3. Structured Data (JSON-LD)
    const addStructuredData = (data) => {
      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    if (structuredData) {
      addStructuredData(structuredData);
    }

    // 4. Hidden Semantic Content for SEO (Non-spammy approach)
    const addHiddenSemanticContent = () => {
      // Remove existing hidden content
      const existingContent = document.querySelector('#seo-semantic-content');
      if (existingContent) {
        existingContent.remove();
      }

      if (hiddenKeywords.length > 0 || searchTerms.length > 0) {
        const hiddenDiv = document.createElement('div');
        hiddenDiv.id = 'seo-semantic-content';
        hiddenDiv.style.cssText = `
          position: absolute;
          left: -10000px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
        `;
        
        // Create semantic content that's useful for accessibility and SEO
        const semanticContent = `
          <nav aria-label="Page topics and keywords">
            ${hiddenKeywords.map(keyword => `<span itemprop="keywords">${keyword}</span>`).join(' ')}
          </nav>
          <section aria-label="Related search terms">
            ${searchTerms.map(term => `<span itemprop="about">${term}</span>`).join(' ')}
          </section>
        `;
        
        hiddenDiv.innerHTML = semanticContent;
        document.body.appendChild(hiddenDiv);
      }
    };

    addHiddenSemanticContent();

    // 5. Breadcrumb Structured Data
    if (breadcrumbs.length > 0) {
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      };
      
      addStructuredData(breadcrumbData);
    }

    // Cleanup function
    return () => {
      const hiddenContent = document.querySelector('#seo-semantic-content');
      if (hiddenContent) {
        hiddenContent.remove();
      }
    };

  }, [title, description, keywords, canonicalUrl, structuredData, hiddenKeywords, searchTerms, ogImage, articleData, courseData, breadcrumbs]);
};

export default useAdvancedSEO;