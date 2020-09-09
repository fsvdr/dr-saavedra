const chrome = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

const isDevelopment = process.env.URL.includes('http://localhost');
const cache = new Map();

const getThumbnail = async (url) => {
  const cachedThumbnail = cache.get(url);

  if (cachedThumbnail) return cachedThumbnail;

  // chrome-aws-lambda does not play well on local development so we better
  // take advantage of our local google chrome
  const browser = await puppeteer.launch({
    product: 'chrome',
    args: isDevelopment ? [] : chrome.args,
    executablePath: isDevelopment
      ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      : await chrome.executablePath,
    headless: isDevelopment || chrome.headless,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1.5 });
  await page.goto(url);

  await new Promise((resolve) => setTimeout(resolve, 1500));
  const buffer = await page.screenshot({ type: 'png' });
  const dataURL = buffer.toString('base64');

  cache.set(url, dataURL);

  await browser.close();

  return dataURL;
};

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const qs = new URLSearchParams(event.queryStringParameters);
  const url = `${isDevelopment ? 'http://localhost:8000' : process.env.URL}/thumbnail?${qs.toString()}`;

  const thumbnail = await getThumbnail(url);

  return {
    isBase64Encoded: true,
    statusCode: 200,
    body: thumbnail,
  };
};
