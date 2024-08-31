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

        test('Tourist Attractions Page h2 Headings Check', async ({ page }) => {

            const touristAttractionsPage = new TouristAtractionsPage(page);
            const goToSliven = new GoToSliven();

            await page.goto(goToSliven.baseUrl + touristAttractionsPage.path);
            const h2Elements = await touristAttractionsPage.h2Elements;


            for (var i = 0; i < touristAttractionsPage.expectedH2Elements.length; i++) {
                let currentText = await h2Elements.nth(i).innerText();
                console.log(currentText);
                console.log(touristAttractionsPage.expectedH2Elements[i])
                expect(currentText).toBe(touristAttractionsPage.expectedH2Elements[i]);
            }

        });

        test('Tourist Attractions Page See More Butons Check', async ({ page }) => {

            const touristAttractionsPage = new TouristAtractionsPage(page);
            const goToSliven = new GoToSliven();

            await page.goto(goToSliven.baseUrl + touristAttractionsPage.path);

            const numberOfLinks = await touristAttractionsPage.expectedUrlTargets.length;

            for (let i = 0; i < numberOfLinks; i++) {
                await page.goto(goToSliven.baseUrl + touristAttractionsPage.path);
                await touristAttractionsPage.seeMoreButtons.nth(i).click();
                let currentUrl = page.url();
                console.log(currentUrl);
                console.log(touristAttractionsPage.expectedUrlTargets[i])
                expect(currentUrl).toBe(goToSliven.baseUrl + 
                    touristAttractionsPage.expectedUrlTargets[i]);
            }
      


        });

    });
});