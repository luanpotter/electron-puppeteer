const puppeteer = require('puppeteer');

const open = async() => {
  const browser = await puppeteer.launch({
    timeout: 120 * 1000,
    headless: false
  });

  const page = (await browser.pages())[0];

  await page.goto('https://google.com');
};

module.exports = { open };
