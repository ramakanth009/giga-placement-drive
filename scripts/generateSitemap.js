// ===================================================================
// BUILD-TIME SITEMAP GENERATION SCRIPT
// scripts/generateSitemap.js
// Run this during build process to ensure up-to-date sitemaps
// ===================================================================

const fs = require('fs');
const path = require('path');

// IMPORT: SitemapGenerator (we'll need to modify import for Node.js)
class SitemapGenerator {
  constructor() {
    this.pages = [
      { url: '/', priority: '1.0', changefreq: 'weekly' },
      { url: '/fullstack', priority: '0.9', changefreq: 'weekly' },
      { url: '/datascience', priority: '0.9', changefreq: 'weekly' },
      { url: '/virtual-placement-fullstack', priority: '0.8', changefreq: 'weekly' },
      { url: '/virtual-placement-datascience', priority: '0.8', changefreq: 'weekly' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/contact', priority: '0.7', changefreq: 'monthly' },
      { url: '/blog', priority: '0.8', changefreq: 'weekly' },
      { url: '/campus', priority: '0.8', changefreq: 'monthly' },
    //   { url: '/register', priority: '0.7', changefreq: 'monthly' },
      { url: '/pre-screening-test', priority: '0.6', changefreq: 'monthly' },
      { url: '/giga-resume-builder', priority: '0.7', changefreq: 'monthly' },
    //   { url: '/cart', priority: '0.5', changefreq: 'monthly' },
    //   { url: '/payment-complete', priority: '0.3', changefreq: 'yearly' },
      { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
      { url: '/terms-and-conditions', priority: '0.3', changefreq: 'yearly' },
      { url: '/sitemap', priority: '0.4', changefreq: 'monthly' },
    ];
  }

  generateSitemap(blogPosts = []) {
    const baseUrl = 'https://gigaversity.in';
    const currentDate = new Date().toISOString().split('T')[0];
    
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    this.pages.forEach(page => {
      sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
    });

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

// FUNCTION: Load blog data (adapt this to your blog data source)
function loadBlogPosts() {
  try {
    // CUSTOMIZE: Update this path to match your blog data location
    const blogDataPath = path.join(__dirname, '../src/data/blogData.js');
    
    if (fs.existsSync(blogDataPath)) {
      // Read and parse blog data
      const blogData = require(blogDataPath);
      
      // CUSTOMIZE: Adapt this based on your blogData structure
      if (blogData.blogPosts && Array.isArray(blogData.blogPosts)) {
        return blogData.blogPosts;
      }
    }
  } catch (error) {
    console.warn('Could not load blog posts:', error.message);
  }
  
  // Fallback: Add known blog posts manually
  return [
    {
      slug: 'mern-stack-development-guide',
      date: '2025-01-14',
      title: 'MERN Stack Development Guide'
    }
  ];
}

// MAIN FUNCTION: Generate and save sitemap files
function generateSitemaps() {
  console.log('🚀 Generating sitemaps...');
  
  const generator = new SitemapGenerator();
  const blogPosts = loadBlogPosts();
  
  // Generate main sitemap
  const sitemapContent = generator.generateSitemap(blogPosts);
  
  // Generate robots.txt
  const robotsContent = generator.generateRobotsTxt();
  
  // Define output paths
  const publicDir = path.join(__dirname, '../public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  const robotsPath = path.join(publicDir, 'robots.txt');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  try {
    // Write sitemap.xml
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('✅ Generated sitemap.xml');
    
    // Write robots.txt
    fs.writeFileSync(robotsPath, robotsContent, 'utf8');
    console.log('✅ Generated robots.txt');
    
    // Log statistics
    const urlCount = (sitemapContent.match(/<url>/g) || []).length;
    const fileSize = Buffer.byteLength(sitemapContent, 'utf8');
    
    console.log(`📊 Sitemap statistics:`);
    console.log(`   URLs: ${urlCount}`);
    console.log(`   Size: ${(fileSize / 1024).toFixed(2)} KB`);
    console.log(`   Blog posts: ${blogPosts.length}`);
    
    if (urlCount > 50000 || fileSize > 52428800) {
      console.warn('⚠️  Warning: Sitemap exceeds Google limits (50K URLs or 50MB)');
    }
    
  } catch (error) {
    console.error('❌ Error generating sitemaps:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  generateSitemaps();
}

module.exports = { generateSitemaps, SitemapGenerator };