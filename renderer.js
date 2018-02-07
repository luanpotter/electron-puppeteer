const { open } = require('./puppeteer.js');

document.querySelector('#btn').addEventListener('click', async () => {
  console.log('Starting...');
  await open();
  console.log('Started');
});
