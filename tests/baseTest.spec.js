//const { test, expect } = require('@playwright/test');

import { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { GoToSliven } from '../pages/GlobalConstants.js';
import { BasePage } from '../pages/BasePage.js';


let browser;
let context;
let page;


describe("e2e tests", () => {
    beforeAll(async () => {
        browser = await chromium.launch();
    });

    afterAll(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    
    describe("authentication", () => {

        test('Click About Button', async ({ page }) =>{

            const basePage = new BasePage(page);
            const goToSliven = new GoToSliven();

            await page.goto(goToSliven.baseUrl);
            await basePage.aboutMenuLink.click();
            expect(page.url()).toBe('https://gotosliven.com/about-us/');
        });
    });
});