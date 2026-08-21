import { chromium } from 'playwright';

async function inspectPage() {
  const browser = await chromium.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage({
    viewport: { width: 1440, height: 2600 }
  });

  console.log('Navigating to live GitHub Pages...');
  await page.goto('https://nikhil49023.github.io/vitt-landing-page/', { waitUntil: 'networkidle' });

  const pageData = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      currentSrc: img.currentSrc,
      alt: img.alt,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      complete: img.complete,
      visible: img.offsetParent !== null
    }));

    const brokenImages = imgs.filter(img => img.naturalWidth === 0);
    return {
      totalImages: imgs.length,
      brokenImagesCount: brokenImages.length,
      imgs
    };
  });

  console.log('Page inspection results:', JSON.stringify(pageData, null, 2));

  // Take screenshot of Hero Phone section
  const heroMockup = await page.$('.phone-mockup-frame, img[alt*="Hero"], img[src*="hero-phone"]');
  if (heroMockup) {
    await heroMockup.screenshot({ path: 'public/mockups/hero-inspected.png' });
    console.log('Captured hero-inspected.png');
  }

  // Take screenshot of Bento section
  const bentoGrid = await page.$('.bento-card-container, #features');
  if (bentoGrid) {
    await bentoGrid.screenshot({ path: 'public/mockups/bento-inspected.png' });
    console.log('Captured bento-inspected.png');
  }

  await browser.close();
}

inspectPage().catch(err => {
  console.error('Error during inspection:', err);
  process.exit(1);
});
