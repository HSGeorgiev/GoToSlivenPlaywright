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

    describe("Verify Footer Non-link Element Presented", () => {

        test('Check if h5 headings are presented', async ({ page }) =>{
    
            const footer = new BasePageFooter(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + '/');

            for (let i = 0; i < footer.h5Expected.length; i++){
                let currentHeading = await footer.h5Headings.nth(i).innerText();
                expect(footer.h5Headings.nth(i)).toBeVisible;
                expect(currentHeading).toBe(footer.h5Expected[i]);
            }
        });

        test('Check if text contaners are presented', async ({ page }) =>{
    
            const footer = new BasePageFooter(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + '/');

            for (let i = 0; i < footer.containersExpected.length; i++){
                let currentContainer = await footer.textContainersFooter.nth(i).innerText();
                console.log(currentContainer);
                console.log(footer.containersExpected[i]);
                expect(footer.textContainersFooter.nth(i)).toBeVisible;
                expect(currentContainer).toBe(footer.containersExpected[i]);
            }
        });

        test('Check if Get In Touch Li Elements are presented', async ({ page }) =>{
    
            const footer = new BasePageFooter(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + '/');

            for (let i = 0; i < footer.getInTouchFooterExpected.length; i++){
                let currentLiElement = await footer.getInTouchLiFooter.nth(i).innerText();
                console.log(currentLiElement);
                console.log(footer.containersExpected[i]);
                expect(footer.getInTouchLiFooter.nth(i)).toBeVisible;
                expect(currentLiElement).toBe(footer.getInTouchFooterExpected[i]);
            }
        });
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

        test('Click Restaurants Link Test', async ({ page }) =>{
    
            const footer = new BasePageFooter(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + '/');
            await footer.restaurantsLinkFooter.click();
            const title = await page.title();
            expect(title).toBe("Restaurants – gotosliven Touristic Info Site");
            expect(page.url()).toBe(goToSliven.baseUrl + '/restaurants/');
        });

        test('Click Contact Us Link Test', async ({ page }) =>{
    
            const footer = new BasePageFooter(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + '/');
            await footer.contactusLinkFooter.click();
            const title = await page.title();
            expect(title).toBe("Contact us – gotosliven Touristic Info Site");
            expect(page.url()).toBe(goToSliven.baseUrl + '/contact-us/');
        });

    });
});