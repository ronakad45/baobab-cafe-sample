import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 320, height: 900 });
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });

const sections = ['#about','#menu','#gallery','#location','footer'];
const names = ['about','menu','gallery','location','footer'];

for (let i = 0; i < sections.length; i++) {
  const el = await page.$(sections[i]);
  if (el) {
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await el.screenshot({ path: `C:/Users/ronak/AppData/Local/Temp/baobab-320-${names[i]}.png` });
  }
}
await browser.close();
