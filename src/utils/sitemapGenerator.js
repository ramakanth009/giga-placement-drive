// ===================================================================
// FIXED SITEMAP GENERATION FOR GOOGLE SEARCH CONSOLE COMPLIANCE
// src/utils/sitemapGenerator.js
// ===================================================================

export class SitemapGenerator {
  constructor() {
    // UPDATED: Complete URL list matching current routing structure
    this.pages = [
      { url: '/', priority: '1.0', changefreq: 'weekly' },
      { url: '/fullstack', priority: '0.9', changefreq: 'weekly' },
      { url: '/datascience', priority: '0.9', changefreq: 'weekly' },
      { url: '/virtual-placement-fullstack', priority: '0.7', changefreq: 'weekly' },
      { url: '/virtual-placement-datascience', priority: '0.7', changefreq: 'weekly' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/contact', priority: '0.8', changefreq: 'monthly' },
      { url: '/blog', priority: '0.8', changefreq: 'weekly' },
      { url: '/campus', priority: '0.8', changefreq: 'monthly' },
      // { url: '/register', priority: '0.7', changefreq: 'monthly' },
      { url: '/pre-screening-test', priority: '0.8', changefreq: 'monthly' },
      { url: '/giga-resume-builder', priority: '0.8', changefreq: 'monthly' },
      // { url: '/cart', priority: '0.5', changefreq: 'monthly' },
      // { url: '/payment-complete', priority: '0.3', changefreq: 'yearly' },
      { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
      { url: '/terms-and-conditions', priority: '0.3', changefreq: 'yearly' },
      { url: '/sitemap', priority: '0.4', changefreq: 'monthly' },
    ];
  }

  // FIXED: Proper XML structure following Google's specification
  generateSitemap(blogPosts = []) {
    const baseUrl = 'https://gigaversity.in';
    const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    
    // CRITICAL: Proper XML declaration and namespace
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    // Add static pages with proper XML structure
    this.pages.forEach(page => {
      sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
    });

    // FIXED: Proper blog post handling with error checking
    if (Array.isArray(blogPosts) && blogPosts.length > 0) {
      blogPosts.forEach(post => {
        // ADDED: Validation to prevent XML errors
        if (post && post.slug) {
          const postDate = post.date ? new Date(post.date).toISOString().split('T')[0] : currentDate;
          sitemap += `  <url>
    <loc>${baseUrl}/blog/${this.escapeXml(post.slug)}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
        }
      });
    }

    sitemap += '</urlset>';
    return sitemap;
  }

  // ADDED: XML escaping for special characters
  escapeXml(unsafe) {
    if (typeof unsafe !== 'string') return '';
    return unsafe.replace(/[<>&'"]/g, function (c) {
      switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
        default: return c;
      }
    });
  }

  // ENHANCED: More comprehensive robots.txt
  generateRobotsTxt() {
    return `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Disallow admin and private sections
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /*.json$

# Allow important resources
Allow: /assets/
Allow: /images/
Allow: /*.css$
Allow: /*.js$

# CRITICAL: Sitemap location
Sitemap: https://gigaversity.in/sitemap.xml

# Crawl delay
Crawl-delay: 1`;
  }

  // ADDED: Generate sitemap index for large sites
  generateSitemapIndex(sitemaps = []) {
    const currentDate = new Date().toISOString();
    
    let sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    sitemaps.forEach(sitemap => {
      if (sitemap && sitemap.url) {
        sitemapIndex += `  <sitemap>
    <loc>${this.escapeXml(sitemap.url)}</loc>
    <lastmod>${sitemap.lastmod || currentDate}</lastmod>
  </sitemap>
`;
      }
    });

    sitemapIndex += '</sitemapindex>';
    return sitemapIndex;
  }

  // ADDED: Validate sitemap size (Google's 50MB/50K URL limits)
  validateSitemap(sitemapContent) {
    const sizeInBytes = new Blob([sitemapContent]).size;
    const urlCount = (sitemapContent.match(/<url>/g) || []).length;
    
    return {
      isValid: sizeInBytes <= 52428800 && urlCount <= 50000, // 50MB and 50K URLs
      size: sizeInBytes,
      urlCount: urlCount,
      warnings: []
    };
  }

  // ADDED: Generate blog-specific sitemap
  generateBlogSitemap(blogPosts = []) {
    const baseUrl = 'https://gigaversity.in';
    const currentDate = new Date().toISOString().split('T')[0];
    
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    // Add blog index page
    sitemap += `  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;

    // Add individual blog posts
    if (Array.isArray(blogPosts) && blogPosts.length > 0) {
      blogPosts.forEach(post => {
        if (post && post.slug) {
          const postDate = post.date ? new Date(post.date).toISOString().split('T')[0] : currentDate;
          sitemap += `  <url>
    <loc>${baseUrl}/blog/${this.escapeXml(post.slug)}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
        }
      });
    }

    sitemap += '</urlset>';
    return sitemap;
  }
}