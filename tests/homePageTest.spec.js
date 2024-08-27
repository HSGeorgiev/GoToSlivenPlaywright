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

        test('Verify if Booking Serch Form works', async ({ page }) => {

            const homePage = new HomePage(page);
            const goToSliven = new GoToSliven();

            
            // Just to check if it works we need to create a new context 
            // and a new page inside this method.
            // It should be fixed later...
            const browserContext = await browser.newContext();
            const nPage = await browserContext.newPage();

            await nPage.goto(goToSliven.baseUrl + homePage.path);

            const [newPage] = await Promise.all([
                browserContext.waitForEvent('page'),
                //homePage.bookingSubmitButton.click()
                nPage.click('//input[@class="b_submitButton"]') 
              ]);
              

            
            
              // Wait for the new page to load
            await newPage.waitForLoadState();

            // Verify the URL of the new page
            const newPageURL = newPage.url();
            const expectedPartUrlBooking = 'www.booking.com/searchresults.html?';
            const expectedPartUrlSliven = '%D0%A1%D0%BB%D0%B8%D0%B2%D0%B5%D0%BD&'; //it seems to be 'Сливен' in the url
            expect(newPageURL).toEqual(expect.stringContaining(expectedPartUrlBooking));
            expect(newPageURL).toEqual(expect.stringContaining(expectedPartUrlSliven));

            await nPage.close();
            await browserContext.close();


        });

        test('Verify if search functionality of the map works', async ({ page }) => {

            const homePage = new HomePage(page);
            const goToSliven = new GoToSliven();

            let queriesResponses = [
                {
                    query: 'Hadzhi Dimitar',
                    response: 'Hadzhi Dimitar House-Museum'},
                {
                    query: 'Dobri Chintulov',
                    response: 'Dobri Chintulov House-Museum'},   
                {
                    query: 'Kushbunar',
                    response: 'Historical Place - Kushbunar'},   
                {
                    query: 'Kaloyanovo',
                    response: 'Tomb - Kaloyanovo'},   
                {
                    query: 'Panayot Hitov',
                    response: 'Panayot Hitov Monument'},                     
                  
            ];

            for (let i = 0; i < queriesResponses.length; i++) {

                await page.goto(goToSliven.baseUrl + homePage.path);

                    let query = queriesResponses[i].query;
                    let response = queriesResponses[i].response;
                    await homePage.mapSearchInput.fill(query);
                    await homePage.mapSearchButton.click();
                    let firstResultTitle = await homePage.resultsMapSearch.first().textContent();
                    console.log(query);
                    console.log(firstResultTitle.trim());
                    console.log(response);
                    expect(firstResultTitle.trim()).toBe(response);
                // Next query

            }







        });



    });
});