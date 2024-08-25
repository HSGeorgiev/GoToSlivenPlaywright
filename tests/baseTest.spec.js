//const { test, expect } = require('@playwright/test');

import { test, expect } from '@playwright/test';
import { GoToSliven } from '../pages/GlobalConstants.js';
import { BasePage } from '../pages/BasePage.js';

test('Click About Button', async ({ page }) =>{

    const basePage = new BasePage(page);
    const goToSliven = new GoToSliven();

    await page.goto(goToSliven.baseUrl);
    await basePage.aboutMenuLink.click();
    expect(page.url()).toBe('https://gotosliven.com/about-us/');
});