import { test, expect } from '@playwright/test';
import { testData } from '../testData/DD';

test.describe('Data driven', async () => {
  testData.forEach((site) => {
    test(`${site.url} contains text ${site.expectedText}`, async ({ page }) => {
      await page.goto(site.url);
      await expect(page.locator(site.locator)).toHaveText(site.expectedText);
    });
  });
});
