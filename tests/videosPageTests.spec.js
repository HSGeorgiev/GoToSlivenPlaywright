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

    // TODO Here:
    // DONE 1. A test to verify that the h3 headings of the videos are as expected;
    // DONE 2. A test to verify that the names of the videos are as expected;
    // DONE 3. A test to verify that the 'video' buttons texts are as expected.
    // 4. A test to verify that the 'video' buttons work as expected - eventually to chech if the links are corect.
    // BTW there are scripts on both english and bulgarian on the buttons - good to clear that...


    test('Videos Page h3 Headings Check', async ({ page }) => {
        // Verify if the videos heading on the page are correct

        const videosPage = new VideosPage(page);
        const goToSliven = new GoToSliven();

        await page.goto(goToSliven.baseUrl + videosPage.path);
        const videosH2Headings = await videosPage.h3VideoHeadings;


        for (var i = 0; i < videosPage.h3Expected.length; i++) {
            let currentText = await videosH2Headings.nth(i).innerText();
            console.log(currentText);
            console.log(videosPage.h3Expected[i])
            expect(currentText).toBe(videosPage.h3Expected[i]);
        }

    });

    test('Videos Objects Names Headings Check', async ({ page }) => {
        // Verify if the Objects Names on the page are correct

        const videosPage = new VideosPage(page);
        const goToSliven = new GoToSliven();

        await page.goto(goToSliven.baseUrl + videosPage.path);
        const videosObjectsNames = await videosPage.videoObjectsNames;


        for (var i = 0; i < videosPage.videoNamesExpected.length; i++) {
            let currentText = await videosObjectsNames.nth(i).innerText();
            console.log(currentText);
            console.log(videosPage.videoNamesExpected[i])
            expect(currentText).toBe(videosPage.videoNamesExpected[i]);
        }

    });

    // THIS TEST IS JUST TEMPORARLY EXEPCING BOTH STRINGS AS BUTTON TEXT!
    // THE BUTTONS TEXTS SHOULD BE CHANGED AND THE TEST SHOULD BE EDITED AS WELL

    test('Videos Buttons Texts Check', async ({ page }) => {
        // Verify if the buttons texts are correct

        const videosPage = new VideosPage(page);
        const goToSliven = new GoToSliven();

        await page.goto(goToSliven.baseUrl + videosPage.path);
        const buttons = await videosPage.videoButtons;
        const buttonsCount = 6;
        const buttonExpectedtext = 'video';


        for (var i = 0; i < buttonsCount; i++) {
            let currentText = await buttons.nth(i).innerText();
            console.log(currentText);
            const textMatches = currentText.match(buttonExpectedtext) || currentText.match('Видео');
            expect(textMatches).toBeTruthy;
        }

    });

});