import { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { GoToSliven } from '../pages/GlobalConstants.js';
import { HomePage } from '../pages/HomePage.js';


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


    describe("Home Page Elements Tests", () => {


        test('Home Page Title', async ({ page }) => {

            const homePage = new HomePage(page);
            const goToSliven = new GoToSliven();

            await page.goto(goToSliven.baseUrl + homePage.path);
            var title = await page.title();
            expect(title).toBe("gotosliven Touristic Info Site – Touristic Info Site of Sliven. Sites, Places, Hotels, Restaurants, attraction in Sliven City");
        });

        test('Home Page H3 Headings Check', async ({ page }) => {

            const homePage = new HomePage(page);
            const goToSliven = new GoToSliven();

            await page.goto(goToSliven.baseUrl + homePage.path);
            const h3Elements = await homePage.h3Elements;


            for (var i = 0; i < homePage.h3.length; i++) {
                let currentText = await h3Elements.nth(i).innerText();
                expect(currentText).toBe(homePage.h3[i]);
            }


        });



    });
});