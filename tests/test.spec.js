import { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { GoToSliven } from '../Globals/GlobalConstants.js';
import { TouristAtractionsPage } from '../pages/TouristAtractionsPage.js';

let browser;
let context;
let page;



describe("Tourist Attractions Page e2e tests", () => {
    
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


    describe("Tourist Attractions Page Elements Tests", () => {

        test('Tourist Attractions Page Title', async ({ page }) => {

            const touristAttractionsPage = new TouristAtractionsPage(page);
            const goToSliven = new GoToSliven();

            await page.goto(goToSliven.baseUrl + touristAttractionsPage.path);
            var title = await page.title();
            expect(title).toBe("Tourist Attractions – gotosliven Touristic Info Site");
        });


    });
});