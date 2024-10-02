import { test } from '@playwright/test';

test('', async ({ page }) => {
  
    // go to www.google.com

    await page.goto('https://www.google.com');    
    // pause to automation for 3 secs  
    await page.pause(3000);

    // search for 'playwright' in Google search bar 

    await page.locator('input[type="text"]').fill('playwright');
    // pause to automation for 3 secs

});