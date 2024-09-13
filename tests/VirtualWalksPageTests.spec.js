import { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { GoToSliven } from '../Globals/GlobalConstants.js';
import { VirtualWalksPage } from '../pages/VirtualWalksPage.js';

let browser;
let context;
let page;



describe("Virtual Walks Page e2e tests", () => {
    
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


    test('Virtual Walks Page Page Title', async ({ page }) => {

        const virtualWalksPage = new VirtualWalksPage(page);
        const goToSliven = new GoToSliven();

        await page.goto(goToSliven.baseUrl + virtualWalksPage.path);
        var title = await page.title();
        expect(title).toBe("360 Virtual Walk – gotosliven Touristic Info Site");
    });

    test('Virtual Walks Page h2 Headings Check', async ({ page }) => {


        const virtualWalksPage = new VirtualWalksPage(page);
        const goToSliven = new GoToSliven();

        await page.goto(goToSliven.baseUrl + virtualWalksPage.path);
        const walksH2Headings = await virtualWalksPage.h2ObjectsHeadings;


        for (var i = 0; i < virtualWalksPage.h2ExpectedHeadings.length; i++) {
            let currentText = await walksH2Headings.nth(i).innerText();
            console.log(currentText);
            console.log(virtualWalksPage.h2ExpectedHeadings[i])
            expect(currentText).toBe(virtualWalksPage.h2ExpectedHeadings[i]);
        }

    });



      
   

   

});