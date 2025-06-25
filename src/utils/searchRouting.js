// ===================================================================
// 4. UPDATED SEARCH ROUTING WITH CORRECT ROUTE MAPPING
// src/utils/searchRouting.js
// ===================================================================

import { seoAnalytics } from './seoAnalytics';

export class SearchRoutingManager {
  constructor() {
    // Updated to match your actual routes
    this.keywordRouteMap = {
      // Full Stack Development Keywords → Virtual Placement
      'full stack development course': '/virtual-placement-fullstack',
      'mern stack training': '/virtual-placement-fullstack',
      'react nodejs course': '/virtual-placement-fullstack',
      'web development bootcamp': '/virtual-placement-fullstack',
      'frontend backend development': '/virtual-placement-fullstack',
      'javascript full stack': '/virtual-placement-fullstack',
      'full stack developer course': '/virtual-placement-fullstack',
      'virtual placement full stack': '/virtual-placement-fullstack',
      
      // Full Stack Keywords → Full-Time Program
      'full stack programming course': '/fullstack',
      'mern stack bootcamp': '/fullstack',
      'full stack certification': '/fullstack',
      'react developer training': '/fullstack',
      'nodejs training program': '/fullstack',
      
      // Data Science Keywords → Virtual Placement
      'data science course': '/virtual-placement-datascience',
      'machine learning training': '/virtual-placement-datascience',
      'python data analysis': '/virtual-placement-datascience',
      'ai artificial intelligence course': '/virtual-placement-datascience',
      'data scientist training': '/virtual-placement-datascience',
      'ml algorithms course': '/virtual-placement-datascience',
      'data analytics bootcamp': '/virtual-placement-datascience',
      'virtual placement data science': '/virtual-placement-datascience',
      
      // Data Science Keywords → Full-Time Program
      'data science certification': '/datascience',
      'machine learning bootcamp': '/datascience',
      'python programming course': '/datascience',
      'ai training program': '/datascience',
      'data analytics certification': '/datascience',
      
      // Career Keywords
      'tech career change': '/about',
      'programming career guidance': '/blog',
      'software developer jobs': '/virtual-placement-fullstack',
      'data scientist jobs': '/virtual-placement-datascience',
      'tech internship programs': '/blog',
      'coding bootcamp placement': '/',
      'tech placement program': '/',
      
      // General Education Keywords
      'online coding courses': '/',
      'tech education platform': '/',
      'programming training institute': '/',
      'software development institute': '/',
      'tech skills training': '/',
      'gigaversity courses': '/',
      
      // Location-based Keywords
      'coding bootcamp india': '/',
      'programming course bangalore': '/campus',
      'tech education mumbai': '/campus',
      'software training delhi': '/campus',
      'data science course india': '/virtual-placement-datascience',
      'full stack course india': '/virtual-placement-fullstack',
      
      // Specific Technology Keywords
      'react training course': '/virtual-placement-fullstack',
      'nodejs backend development': '/virtual-placement-fullstack',
      'mongodb database course': '/virtual-placement-fullstack',
      'python machine learning': '/virtual-placement-datascience',
      'tensorflow keras course': '/virtual-placement-datascience',
      'pandas numpy training': '/virtual-placement-datascience',
      
      // Product/Service Keywords
      'gigaversity products': '/giga-resume-builder',
      'tech products': '/giga-resume-builder',
      'resume builder': '/giga-resume-builder',
      'placement test': '/pre-screening-test',
      'screening test': '/pre-screening-test',
    };

    this.urlParamRouteMap = {
      'course': {
        'fullstack': '/virtual-placement-fullstack',
        'full-stack': '/virtual-placement-fullstack',
        'datascience': '/virtual-placement-datascience',
        'data-science': '/virtual-placement-datascience',
        'mern': '/virtual-placement-fullstack',
        'react': '/virtual-placement-fullstack',
        'python': '/virtual-placement-datascience',
        'ml': '/virtual-placement-datascience',
        'ai': '/virtual-placement-datascience',
        'fulltime-fullstack': '/fullstack',
        'fulltime-datascience': '/datascience'
      },
      'program': {
        'web-development': '/virtual-placement-fullstack',
        'data-analytics': '/virtual-placement-datascience',
        'machine-learning': '/virtual-placement-datascience',
        'frontend': '/virtual-placement-fullstack',
        'backend': '/virtual-placement-fullstack',
        'placement': '/',
        'virtual-placement': '/'
      },
      'track': {
        'developer': '/virtual-placement-fullstack',
        'scientist': '/virtual-placement-datascience',
        'engineer': '/virtual-placement-fullstack',
        'analyst': '/virtual-placement-datascience'
      },
      'type': {
        'virtual': '/',
        'fulltime': '/fullstack',
        'bootcamp': '/',
        'course': '/'
      }
    };
  }

  async analyzeAndRoute(navigate) {
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = document.referrer;
    const currentPath = window.location.pathname;
    
    // 1. Check URL parameters first
    const routeFromParams = this.getRouteFromParams(urlParams);
    if (routeFromParams && routeFromParams !== currentPath) {
      await this.trackRouting('url_parameter', urlParams.toString(), routeFromParams);
      navigate(routeFromParams);
      return routeFromParams;
    }

    // 2. Check referrer for search engines
    if (this.isFromSearchEngine(referrer)) {
      const searchQuery = this.extractSearchQuery(urlParams, referrer);
      if (searchQuery) {
        const routeFromKeywords = this.getRouteFromKeywords(searchQuery);
        if (routeFromKeywords && routeFromKeywords !== currentPath) {
          await this.trackSearchLanding(searchQuery, routeFromKeywords, referrer);
          navigate(routeFromKeywords);
          return routeFromKeywords;
        }
      }
    }

    // 3. Check for UTM parameters
    const utmCampaign = urlParams.get('utm_campaign');
    const utmSource = urlParams.get('utm_source');
    if (utmCampaign || utmSource) {
      const routeFromUTM = this.getRouteFromUTM(utmCampaign, utmSource);
      if (routeFromUTM && routeFromUTM !== currentPath) {
        await this.trackRouting('utm_parameter', `${utmSource}/${utmCampaign}`, routeFromUTM);
        navigate(routeFromUTM);
        return routeFromUTM;
      }
    }

    return null;
  }

  getRouteFromParams(urlParams) {
    for (const [param, routes] of Object.entries(this.urlParamRouteMap)) {
      const value = urlParams.get(param);
      if (value && routes[value.toLowerCase()]) {
        return routes[value.toLowerCase()];
      }
    }
    return null;
  }

  getRouteFromKeywords(searchQuery) {
    const query = searchQuery.toLowerCase();
    
    // Direct keyword matching
    for (const [keywords, route] of Object.entries(this.keywordRouteMap)) {
      if (query.includes(keywords.toLowerCase())) {
        return route;
      }
    }

    // Fuzzy matching for partial keywords
    const queryWords = query.split(' ');
    const scores = {};

    for (const [keywords, route] of Object.entries(this.keywordRouteMap)) {
      const keywordWords = keywords.toLowerCase().split(' ');
      let score = 0;
      
      queryWords.forEach(word => {
        if (keywordWords.some(kw => kw.includes(word) || word.includes(kw))) {
          score++;
        }
      });

      if (score > 0) {
        scores[route] = (scores[route] || 0) + score;
      }
    }

    // Return route with highest score
    const bestRoute = Object.entries(scores).reduce((a, b) => 
      scores[a[0]] > scores[b[0]] ? a : b, [null, 0]
    );

    return bestRoute[1] > 1 ? bestRoute[0] : null;
  }

  getRouteFromUTM(campaign, source) {
    const utmRoutes = {
      // Campaign-based routing
      'fullstack-ads': '/virtual-placement-fullstack',
      'datascience-ads': '/virtual-placement-datascience',
      'fulltime-fullstack': '/fullstack',
      'fulltime-datascience': '/datascience',
      'general-course': '/',
      'blog-content': '/blog',
      'campus-tour': '/campus',
      'products-promo': '/giga-resume-builder',
      'screening-test': '/pre-screening-test',
      
      // Source-based routing
      'google-ads': '/',
      'facebook': '/',
      'linkedin': '/about',
      'instagram': '/blog',
      'youtube': '/campus'
    };

    return utmRoutes[campaign] || utmRoutes[source] || null;
  }

  isFromSearchEngine(referrer) {
    const searchEngines = [
      'google.com', 'bing.com', 'yahoo.com', 'duckduckgo.com',
      'baidu.com', 'yandex.com', 'ask.com', 'aol.com'
    ];
    
    return searchEngines.some(engine => referrer.includes(engine));
  }

  extractSearchQuery(urlParams, referrer) {
    // Extract from URL parameters (Google, Bing, etc.)
    const searchParams = ['q', 'query', 'search', 'keywords', 'p'];
    for (const param of searchParams) {
      const query = urlParams.get(param);
      if (query) return decodeURIComponent(query);
    }

    // Extract from referrer URL
    try {
      const referrerUrl = new URL(referrer);
      const referrerParams = new URLSearchParams(referrerUrl.search);
      for (const param of searchParams) {
        const query = referrerParams.get(param);
        if (query) return decodeURIComponent(query);
      }
    } catch (e) {
      console.log('Could not parse referrer URL');
    }

    return null;
  }

  async trackSearchLanding(searchQuery, route, referrer) {
    const source = this.getSearchEngineFromReferrer(referrer);
    await seoAnalytics.trackSearchArrival(searchQuery, route, source);
    console.log(`🔍 Search routing: "${searchQuery}" → ${route} (from ${source})`);
  }

  async trackRouting(routingType, source, route) {
    await seoAnalytics.init();
    seoAnalytics.trackEvent('auto_routing', {
      routing_type: routingType,
      source: source,
      target_route: route,
      event_category: 'Navigation',
      event_label: 'Auto Route'
    });
  }

  getSearchEngineFromReferrer(referrer) {
    const engines = {
      'google.com': 'Google',
      'bing.com': 'Bing',
      'yahoo.com': 'Yahoo',
      'duckduckgo.com': 'DuckDuckGo',
      'baidu.com': 'Baidu',
      'yandex.com': 'Yandex'
    };

    for (const [domain, name] of Object.entries(engines)) {
      if (referrer.includes(domain)) return name;
    }
    return 'Unknown Search Engine';
  }
}