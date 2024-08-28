import { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { GoToSliven } from '../Globals/GlobalConstants.js';
import { BasePageFooter } from '../pages/BasePageFooter.js';


let browser;
let context;
let page;



describe("Footer tests", () => {
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

    
    describe("Footer Targets Tests", () => {

        test('Click About Link', async ({ page }) =>{
    
            const footer = new BasePageFooter(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + '/');
            await footer.aboutLinkFooter.click();
            const title = await page.title();
            expect(title).toBe("About us – gotosliven Touristic Info Site");
            expect(page.url()).toBe(goToSliven.baseUrl + '/about-us/');
        });

        test('Click Tourist Attraction Link Test', async ({ page }) =>{
    
            const footer = new BasePageFooter(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + '/');
            await footer.touristAttractionLinkFooter.click();
            const title = await page.title();
            expect(title).toBe("Tourist Attractions – gotosliven Touristic Info Site");
            expect(page.url()).toBe(goToSliven.baseUrl + '/tourist-attractions/');
        });

        test('Click Map Link Test', async ({ page }) =>{
    
            const footer = new BasePageFooter(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + '/');
            await footer.interactiveMapLinkFooter.click();
            const title = await page.title();
            expect(title).toBe("Interactive Map of Sliven – gotosliven Touristic Info Site");
            expect(page.url()).toBe(goToSliven.baseUrl + '/interactive-map-of-sliven/');
        });

        test('Click Events Link Test', async ({ page }) =>{
    
            const footer = new BasePageFooter(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + '/');
            await footer.eventsLinkFooter.click();
            const title = await page.title();
            expect(title).toBe("Events – gotosliven Touristic Info Site");
            expect(page.url()).toBe(goToSliven.baseUrl + '/event-directory/');
        });

        test('Click Accomodation Link Test', async ({ page }) =>{
    
            const footer = new BasePageFooter(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + '/');
            await footer.accomodationLinkFooter.click();
            const title = await page.title();
            expect(title).toBe("Accommodation – gotosliven Touristic Info Site");
            expect(page.url()).toBe(goToSliven.baseUrl + '/accommodation/');
        });

    });
});