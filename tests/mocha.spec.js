const opt = require ('../yarg.js');

const {
  chromium
} = require('@playwright/test');
const assert = require('assert');

let browser;

describe('Example', () => {
  before(async () => {
    browser = await chromium.launch({ headless: opt.headless });
  });
  
  after(async () => {
    await browser.close();
  });
  
  let page;
  
  beforeEach(async () => {
    page = await browser.newPage();
  });
  
  afterEach(async () => {
    await page.close();
  });
  
  it('should work', async () => {
    await page.goto('https://www.example.com/');
    assert.equal(await page.title(), 'Example Domain');
  });
});