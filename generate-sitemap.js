const fs = require('fs');
const path = require('path');

// Il tuo dominio ufficiale
const BASE_URL = 'https://salentopropertyprojects.co.uk';

// Le tue rotte statiche in React
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

  // 1. Aggiungiamo le pagine statiche
  staticPages.forEach(page => {
    sitemapXml += `  <url>\n`;
    sitemapXml += `    <loc>${BASE_URL}${page}</loc>\n`;
    sitemapXml += `    <changefreq>monthly</changefreq>\n`;
    sitemapXml += `    <priority>${page === '' ? '1.0' : '0.8'}</priority>\n`;
    sitemapXml += `  </url>\n`;
  });

  // 2. RECUPERO ARTICOLI DINAMICI DA SORO (Opzionale)
  // Se Soro fornisce un feed RSS o una lista degli articoli (in formato JSON) tramite la loro API,
  // puoi scommentare questa parte per mappare i singoli articoli direttamente nella sitemap.
  /*
  try {
    const response = await fetch('INSERISCI_URL_FEED_SORO_O_API_JSON');
    const articles = await response.json();
    articles.forEach(article => {
      sitemapXml += `  <url>\n`;
      // Presupponendo che Soro generi uno slug per ogni articolo
      sitemapXml += `    <loc>${BASE_URL}/buyers-guide/${article.slug}</loc>\n`;
      sitemapXml += `    <changefreq>weekly</changefreq>\n`;
      sitemapXml += `    <priority>0.7</priority>\n`;
      sitemapXml += `  </url>\n`;
    });
  } catch (error) {
    console.log('Nessun articolo dinamico recuperato da API esterne, procedo con le pagine statiche.');
  }
  */

  sitemapXml += `</urlset>`;

  // Determina la cartella di output (solitamente 'dist' per Vite o 'build' per Create React App)
  const buildFolder = fs.existsSync(path.join(process.cwd(), 'dist')) ? 'dist' : 'build';
  const outputPath = path.join(process.cwd(), buildFolder, 'sitemap.xml');

  // Scrive fisicamente il file XML
  fs.writeFileSync(outputPath, sitemapXml);
  console.log(`Sitemap.xml generata con successo in: ${outputPath}`);
}

generateSitemap();
