// ===================================================================
// 6. SITEMAP GENERATION FOR BETTER CRAWLING
// src/utils/sitemapGenerator.js
// ===================================================================

export class SitemapGenerator {
  constructor() {
    this.pages = [
      { url: '/', priority: '1.0', changefreq: 'weekly' },
      { url: '/fullstack', priority: '0.9', changefreq: 'weekly' },
      { url: '/datascience', priority: '0.9', changefreq: 'weekly' },
      { url: '/about', priority: '0.7', changefreq: 'monthly' },
      { url: '/contact', priority: '0.6', changefreq: 'monthly' },
      { url: '/blog', priority: '0.8', changefreq: 'daily' },
      { url: '/campus', priority: '0.6', changefreq: 'monthly' },
      { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    ];
  }

  generateSitemap(blogPosts = []) {
    const baseUrl = 'https://gigaversity.in';
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;

    // Add static pages
    this.pages.forEach(page => {
      sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
    });

    // Add blog posts
    blogPosts.forEach(post => {
      sitemap += `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${post.image}</image:loc>
      <image:title>${post.title}</image:title>
    </image:image>
  </url>
`;
    });

    sitemap += '</urlset>';
    return sitemap;
  }

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

# Sitemap location
Sitemap: https://gigaversity.in/sitemap.xml

# Crawl delay
Crawl-delay: 1`;
  }
}