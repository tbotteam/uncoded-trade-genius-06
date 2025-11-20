#!/usr/bin/env node

/**
 * Dynamic Sitemap Generator for unCoded Blog
 * 
 * This script fetches blog posts from Contentful and generates a sitemap.xml file
 * Run with: node scripts/generate-sitemap.mjs
 */

import { createClient } from 'contentful';
import { writeFileSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
const envPath = join(__dirname, '..', '.env');
try {
  const envContent = readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith('#')) {
      const [key, ...valueParts] = trimmedLine.split('=');
      const value = valueParts.join('=').trim();
      if (key && value) {
        process.env[key.trim()] = value;
      }
    }
  });
  console.log('✅ Environment variables loaded from .env');
} catch (error) {
  console.log('⚠️  No .env file found, using system environment variables');
}

// Contentful configuration
const SPACE_ID = process.env.VITE_CONTENTFUL_SPACEID;
const ACCESS_TOKEN = process.env.VITE_CONTENTFUL_CONTENT_DELIVERY_TOKEN;

if (!SPACE_ID || !ACCESS_TOKEN) {
  console.error('⚠️  Contentful credentials not found.');
  console.error('');
  console.error('💡 To fix this, run:');
  console.error('');
  console.error('   VITE_CONTENTFUL_SPACEID=your_space_id VITE_CONTENTFUL_CONTENT_DELIVERY_TOKEN=your_token npm run generate-sitemap');
  console.error('');
  console.error('Or add these to your .env file:');
  console.error('   VITE_CONTENTFUL_SPACEID=your_space_id');
  console.error('   VITE_CONTENTFUL_CONTENT_DELIVERY_TOKEN=your_token');
  console.error('');
  process.exit(1);
}

const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

// Generate slug from title
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Format date for sitemap
const formatDate = (date) => {
  return new Date(date).toISOString().split('T')[0];
};

async function generateSitemap() {
  console.log('🔄 Fetching blog posts from Contentful...');
  
  try {
    const response = await client.getEntries({
      content_type: 'blogPage',
      order: ['-sys.createdAt'],
    });

    console.log(`✅ Found ${response.items.length} blog posts`);

    const blogUrls = response.items.map((post) => {
      const slug = generateSlug(post.fields.title);
      const lastmod = formatDate(post.sys.updatedAt);
      
      return `  <url>
    <loc>https://www.uncoded.ch/blogs/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    }).join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://www.uncoded.ch/</loc>
    <lastmod>${formatDate(new Date())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Pricing -->
  <url>
    <loc>https://www.uncoded.ch/pricing</loc>
    <lastmod>${formatDate(new Date())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Affiliate -->
  <url>
    <loc>https://www.uncoded.ch/affiliate</loc>
    <lastmod>${formatDate(new Date())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- About -->
  <url>
    <loc>https://www.uncoded.ch/about</loc>
    <lastmod>${formatDate(new Date())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Terms -->
  <url>
    <loc>https://www.uncoded.ch/terms</loc>
    <lastmod>${formatDate(new Date())}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <!-- Blog Index -->
  <url>
    <loc>https://www.uncoded.ch/blogs</loc>
    <lastmod>${formatDate(new Date())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Blog Posts -->
${blogUrls}
</urlset>`;

    const sitemapPath = join(__dirname, '..', 'public', 'sitemap.xml');
    writeFileSync(sitemapPath, sitemap, 'utf-8');
    
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
    console.log(`📊 Total URLs: ${response.items.length + 6}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();

