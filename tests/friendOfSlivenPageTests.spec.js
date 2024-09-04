import { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { GoToSliven } from '../Globals/GlobalConstants.js';
import { FriendOfSlivenPage } from '../pages/FriendOfSlivenPage.js';

let browser;
let context;
let page;



describe("Become Friend of Sliven Page e2e tests", () => {
    
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


    describe("Become Friend of Sliven Page Elements Tests", () => {

        test('Become Friend of Sliven Page Page Title', async ({ page }) => {

            const friendsPage = new FriendOfSlivenPage(page);
            const goToSliven = new GoToSliven();

            await page.goto(goToSliven.baseUrl + friendsPage.path);
            var title = await page.title();
            expect(title).toBe("Become a friend of SLiven – gotosliven Touristic Info Site");
        });

        test('Home Page H3 Headings Check', async ({ page }) => {

            const friendsPage = new FriendOfSlivenPage(page);
            const goToSliven = new GoToSliven();

            await page.goto(goToSliven.baseUrl + friendsPage.path);
            const h3Elements = await friendsPage.h3Headings;


            for (var i = 0; i < friendsPage.h3ExpectedHeadingsTexts.length; i++) {
                let currentText = await h3Elements.nth(i).innerText();
                expect(currentText).toBe(friendsPage.h3ExpectedHeadingsTexts[i]);
            }

        });

      
    });
});