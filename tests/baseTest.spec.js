//const { test, expect } = require('@playwright/test');

import { test, expect } from '@playwright/test';
import { GoToSliven } from '../pages/GlobalConstants.js';
import { BasePage } from '../pages/BasePage.js';

test('Click About Button', async ({ page }) =>{

    const basePage = new BasePage(page);
    const goToSliven = new GoToSliven();

    await page.goto(goToSliven.baseUrl);
    await page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "about-us")]').click();
    await basePage.aboutMenuLink.click();
    await expect(page.url()).toBe('https://gotosliven.com/about-us/');
});