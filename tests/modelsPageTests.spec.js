import { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { GoToSliven } from '../Globals/GlobalConstants.js';
import { ModelsPage } from '../pages/ModelsPage.js';

let browser;
let context;
let page;



describe("3D Models Page e2e tests", () => {
    
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

        test('3D Models Page Title', async ({ page }) => {
            // Verify if the page title is correct

            const modelsPage = new ModelsPage(page);
            const goToSliven = new GoToSliven();

            await page.goto(goToSliven.baseUrl + modelsPage.path);
            var title = await page.title();
            expect(title).toBe("3D Models – gotosliven Touristic Info Site");
        });

       



        

    });
});