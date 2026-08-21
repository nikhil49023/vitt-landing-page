import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, '../dist');

// Simple static server for dist
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath.startsWith('/vitt-landing-page')) {
    reqPath = reqPath.replace('/vitt-landing-page', '') || '/';
  }
  let filePath = path.join(distDir, reqPath === '/' ? 'index.html' : reqPath);

  if (!fs.existsSync(filePath)) {
    filePath = path.join(distDir, 'index.html');
  }

  const ext = path.extname(filePath);
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml'
  };

  const contentType = mimeTypes[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(4173, async () => {
  console.log('Local test server running on http://localhost:4173/vitt-landing-page/');
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 2600 } });

  await page.goto('http://localhost:4173/vitt-landing-page/', { waitUntil: 'networkidle' });

  const results = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      alt: img.alt,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      broken: img.naturalWidth === 0
    }));
    return {
      total: imgs.length,
      broken: imgs.filter(i => i.broken).length,
      imgs
    };
  });

  console.log('Local Preview Inspection Results:');
  console.log(`Total images: ${results.total}, Broken: ${results.broken}`);
  results.imgs.forEach(img => {
    console.log(`- ${img.src} -> ${img.broken ? '❌ BROKEN' : `✓ OK (${img.naturalWidth}x${img.naturalHeight})`}`);
  });

  await page.screenshot({ path: 'public/mockups/local_verification.png', fullPage: true });
  console.log('Saved local_verification.png');

  await browser.close();
  server.close();
});
