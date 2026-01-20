const fs = require('fs');
const path = require('path');

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Static pages
const staticPages = [
  { loc: 'https://lendro.ai/', priority: '1.0', changefreq: 'weekly' },
  { loc: 'https://lendro.ai/platform', priority: '0.9', changefreq: 'monthly' },
  { loc: 'https://lendro.ai/solutions', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://lendro.ai/solutions/integrations', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://lendro.ai/solutions/roi-calculator', priority: '0.7', changefreq: 'monthly' },
  { loc: 'https://lendro.ai/blog', priority: '0.9', changefreq: 'daily' },
  { loc: 'https://lendro.ai/security', priority: '0.6', changefreq: 'monthly' },
  { loc: 'https://lendro.ai/contact', priority: '0.6', changefreq: 'monthly' },
  { loc: 'https://lendro.ai/about', priority: '0.5', changefreq: 'monthly' },
  { loc: 'https://lendro.ai/privacy', priority: '0.3', changefreq: 'yearly' },
  { loc: 'https://lendro.ai/terms', priority: '0.3', changefreq: 'yearly' },
];

// Get all blog post directories
const blogDir = path.join(__dirname, '..', 'frontend', 'src', 'app', 'blog');
const blogSlugs = fs.readdirSync(blogDir)
  .filter(item => {
    const itemPath = path.join(blogDir, item);
    return fs.statSync(itemPath).isDirectory() && item !== 'page.tsx';
  });

// Generate sitemap XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- ============================================ -->
  <!-- STATIC PAGES -->
  <!-- ============================================ -->
`;

// Add static pages
staticPages.forEach(page => {
  sitemap += `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
});

// Add blog section header
sitemap += `
  <!-- ============================================ -->
  <!-- BLOG ARTICLES (${blogSlugs.length} posts) -->
  <!-- ============================================ -->
`;

// Add blog posts
blogSlugs.forEach(slug => {
  sitemap += `  <url>
    <loc>https://lendro.ai/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
});

sitemap += `</urlset>`;

// Write sitemap
const sitemapPath = path.join(__dirname, '..', 'frontend', 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log(`Sitemap generated with ${staticPages.length} static pages and ${blogSlugs.length} blog posts`);
console.log(`Total URLs: ${staticPages.length + blogSlugs.length}`);
console.log(`Written to: ${sitemapPath}`);
