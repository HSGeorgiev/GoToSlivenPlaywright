import { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { GoToSliven } from '../Globals/GlobalConstants.js';
import { VideosPage } from '../pages/VideosPage.js';

let browser;
let context;
let page;



describe("Videos Page e2e tests", () => {
    
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


    describe("Videos Page Elements Tests", () => {

        test('Videos Page Page Title', async ({ page }) => {

            const videosPage = new VideosPage(page);
            const goToSliven = new GoToSliven();

            await page.goto(goToSliven.baseUrl + videosPage.path);
            var title = await page.title();
            expect(title).toBe("Video – gotosliven Touristic Info Site");
        });

      
    });
});