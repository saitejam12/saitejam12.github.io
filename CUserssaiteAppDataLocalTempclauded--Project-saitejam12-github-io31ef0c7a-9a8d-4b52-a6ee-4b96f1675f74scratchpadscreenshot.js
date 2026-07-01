const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5175/', { waitUntil: 'networkidle' });
  
  // Take full page screenshot
  await page.screenshot({ 
    path: 'C:\Users\saite\AppData\Local\Temp\claude\d--Project-saitejam12-github-io\31ef0c7a-9a8d-4b52-a6ee-4b96f1675f74\scratchpad\homepage.png',
    fullPage: true
  });
  
  // Scroll to experience section
  await page.goto('http://localhost:5175/#experience', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ 
    path: 'C:\Users\saite\AppData\Local\Temp\claude\d--Project-saitejam12-github-io\31ef0c7a-9a8d-4b52-a6ee-4b96f1675f74\scratchpad\experience.png',
    fullPage: true
  });
  
  await browser.close();
  console.log('Screenshots taken successfully!');
})();
