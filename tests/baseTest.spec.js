import { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { GoToSliven } from '../Globals/GlobalConstants.js';
import { BasePageTopMenu } from '../pages/BasePageTopMenu.js';


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

    
    describe("Top Menu Targets Tests", () => {

        describe('Avout Us Menu Tests', () => {

            test('Click About Button', async ({ page }) =>{

                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.aboutMenuLink.click();
                const title = await page.title();
                expect(title).toBe("About us – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/about-us/');
            });
        });

        describe('Tourist Attractions Menu Tests', () => {

            test('Click Tourist Attractions Button', async ({ page }) =>{

                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.touristAttractionsMenuLink.click();
                const title = await page.title();
                expect(title).toBe("Tourist Attractions – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/tourist-attractions/');
            });
    
            test('Click Become Friend Of Sliven Button', async ({ page }) =>{
    
                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    ``
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.touristAttractionsMenuLink.hover();
                await basePage.friendOfSlivenMenuLink.click();
                const title = await page.title();
                expect(title).toBe("Become a friend of SLiven – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/become-a-friend-of-sliven/');
            });
    
            test('Click Video Button', async ({ page }) =>{
    
                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    ``
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.touristAttractionsMenuLink.hover();
                await basePage.videoMenuLink.click();
                const title = await page.title();
                expect(title).toBe("Video – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/video/');
            });
    
            test('Click 360 Virtual Walk Button', async ({ page }) =>{
    
                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    ``
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.touristAttractionsMenuLink.hover();
                await basePage.virtualWalkMenuLink.click();
                const title = await page.title();
                expect(title).toBe("360 Virtual Walk – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/360-virtual-walk/');
            });
    
            test('Click 3d models Button', async ({ page }) =>{
    
                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    ``
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.touristAttractionsMenuLink.hover();
                await basePage.modelsMenuLink.click();
                const title = await page.title();
                expect(title).toBe("3D Models – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/3d-models/');
            });

        });

        describe('Interactive Map Menu Tests', () => {

            test('Click Map Button', async ({ page }) =>{

                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.mapMenuLink.click();
                const title = await page.title();
                expect(title).toBe("Interactive Map of Sliven – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/interactive-map-of-sliven/');
            });
        });

        describe('Events Menu Tests', () => {

            test('Click Events Button', async ({ page }) =>{

                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.eventsMenuLink.click();
                const title = await page.title();
                expect(title).toBe("Events – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/event-directory/');
            });
        });

        describe('Accommodation Menu Tests', () => {

            test('Click Accommodation Button', async ({ page }) =>{

                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.accommodationMenuLink.click();
                const title = await page.title();
                expect(title).toBe("Accommodation – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/accommodation/');
            });
    
            test('Click Hotels Button', async ({ page }) =>{
    
                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    ``
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.accommodationMenuLink.hover();
                await basePage.hotelsMenuLink.click();
                const title = await page.title();
                expect(title).toBe("Hotels – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/hotels/');
            });

            test('Click Guest House Button', async ({ page }) =>{
    
                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    ``
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.accommodationMenuLink.hover();
                await basePage.guestHousesMenuLink.click();
                const title = await page.title();
                expect(title).toBe("Guest House – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/guest-house/');
            });

            test('Click Holiday Homes Button', async ({ page }) =>{
    
                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    ``
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.accommodationMenuLink.hover();
                await basePage.holidayHomesnMenuLink.click();
                const title = await page.title();
                expect(title).toBe("Holiday Homes – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/holiday-homes/');
            });

            test('Click Hut & Cabins Button', async ({ page }) =>{
    
                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    ``
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.accommodationMenuLink.hover();
                await basePage.hutCabinsHomesnMenuLink.click();
                const title = await page.title();
                expect(title).toBe("Hut & Cabins – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/hut-cabins/');
            });
    
            test('Click Campings Button', async ({ page }) =>{
    
                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    ``
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.accommodationMenuLink.hover();
                await basePage.campingsMenuLink.click();
                const title = await page.title();
                expect(title).toBe("Campings – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/campings/');
            });
           
            test('Click Useful Button', async ({ page }) =>{
    
                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    ``
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.accommodationMenuLink.hover();
                await basePage.usefulMenuLink.click();
                const title = await page.title();
                expect(title).toBe("Useful – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/useful/');
            });

        });

        describe('Restaurants Menu Tests', () => {

            test('Click Restaurants Button', async ({ page }) =>{

                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.restaurantsMenuLink.click();
                const title = await page.title();
                expect(title).toBe("Restaurants – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/restaurants/');
            });
    
            test('Click Pizzerias Button', async ({ page }) =>{
    
                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    ``
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.restaurantsMenuLink.hover();
                await basePage.pizzeriasMenuLink.click();
                const title = await page.title();
                expect(title).toBe("Pizzerias – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/pizzerias/');
            });

            test('Click Fast Food restaurants Button', async ({ page }) =>{
    
                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    ``
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.restaurantsMenuLink.hover();
                await basePage.fastFoodMenuLink.click();
                const title = await page.title();
                expect(title).toBe("Fast Food Restaurants – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/fast-food-restaurants/');
            });

           

        });

        describe('Contact Us Menu Tests', () => {

            test('Click Contact Button', async ({ page }) =>{

                const basePage = new BasePageTopMenu(page);
                const goToSliven = new GoToSliven();
    
                await page.goto(goToSliven.baseUrl + '/');
                await basePage.contactUsMenuLink.click();
                const title = await page.title();
                expect(title).toBe("Contact us – gotosliven Touristic Info Site");
                expect(page.url()).toBe(goToSliven.baseUrl + '/contact-us/');
            });
        });


    });
});