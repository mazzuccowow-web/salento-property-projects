/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://salentopropertyprojects.co.uk';

const staticPages = [
  '',
  '/about',
  '/services',
  '/how-it-works',
  '/buyers-guide',
  '/contact'
];

async function generateSitemap() {
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemapXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // 1. Pagine statiche
  staticPages.forEach(page => {
    sitemapXml += `  <url>\n`;
    sitemapXml += `    <loc>${BASE_URL}${page}</loc>\n`;
    sitemapXml += `    <changefreq>monthly</changefreq>\n`;
    sitemapXml += `    <priority>${page === '' ? '1.0' : '0.8'}</priority>\n`;
    sitemapXml += `  </url>\n`;
  });

  // 2. Integrazione con gli articoli (se Soro fornisce un feed o un endpoint)
  /*
  try {
    const response = await fetch('INSERISCI_URL_FEED_SORO');
    const articles = await response.json();
    articles.forEach(article => {
      sitemapXml += `  <url>\n`;
      sitemapXml += `    <loc>${BASE_URL}/buyers-guide/${article.slug}</loc>\n`;
      sitemapXml += `    <changefreq>weekly</changefreq>\n`;
      sitemapXml += `    <priority>0.7</priority>\n`;
      sitemapXml += `  </url>\n`;
    });
  } catch (error) {
    console.log('Nessun articolo dinamico importato. Procedo con la sitemap statica.');
  }
  */

  sitemapXml += `</urlset>`;

  const outputPath = path.join(process.cwd(), 'dist', 'sitemap.xml');

  if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  }

  fs.writeFileSync(outputPath, sitemapXml);
  console.log(`Sitemap.xml generata con successo in: ${outputPath}`);
}

generateSitemap();
