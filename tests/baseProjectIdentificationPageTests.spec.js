import { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { GoToSliven } from '../Globals/GlobalConstants.js';
import { BasePageProjectIdentification } from '../pages/BasePageProjectIdentification.js';


let browser;
let context;
let page;



describe("Project Visual Identification tests", () => {

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

function checkVisualIdentificationElements(path) {

    test('Municipality Of Sliven Logo is visible', async ({ page }) =>{
    
        const identification = new BasePageProjectIdentification(page);
        const goToSliven = new GoToSliven();
``
        await page.goto(goToSliven.baseUrl + path);
        await identification.coatOfArmsSliven.scrollIntoViewIfNeeded();
        
        expect(await identification.coatOfArmsSliven.isVisible()).toBeTruthy();

    });

    test('Friends of Sliven Logo is visible', async ({ page }) =>{

        const identification = new BasePageProjectIdentification(page);
        const goToSliven = new GoToSliven();
``
        await page.goto(goToSliven.baseUrl + path);
        await identification.friendOfSlivenLogo.scrollIntoViewIfNeeded();
        
        expect(await identification.friendOfSlivenLogo.isVisible()).toBeTruthy();

    });

    test('EFRR Logo is visible', async ({ page }) =>{

        const identification = new BasePageProjectIdentification(page);
        const goToSliven = new GoToSliven();
``
        await page.goto(goToSliven.baseUrl + path);
        await identification.fundEFRRLogo.scrollIntoViewIfNeeded();
        
        expect(await identification.fundEFRRLogo.isVisible()).toBeTruthy();

    });

    test('Fund FUG Logo is visible', async ({ page }) =>{

        const identification = new BasePageProjectIdentification(page);
        const goToSliven = new GoToSliven();
``
        await page.goto(goToSliven.baseUrl + path);
        await identification.fundFUGLogo.scrollIntoViewIfNeeded();
        
        expect(await identification.fundFUGLogo.isVisible()).toBeTruthy();

    });

    
    test('OPRR Logo is visible', async ({ page }) =>{

        const identification = new BasePageProjectIdentification(page);
        const goToSliven = new GoToSliven();
``
        await page.goto(goToSliven.baseUrl + path);
        await identification.programOPRRLogo.scrollIntoViewIfNeeded();
        
        expect(await identification.programOPRRLogo.isVisible()).toBeTruthy();

    });

    test('Fund Of Funds Logo is visible', async ({ page }) =>{

        const identification = new BasePageProjectIdentification(page);
        const goToSliven = new GoToSliven();
``
        await page.goto(goToSliven.baseUrl + path);
        await identification.fundOfFundsLogo.scrollIntoViewIfNeeded();
        
        expect(await identification.fundOfFundsLogo.isVisible()).toBeTruthy();

    });

    // const goToSliven = new GoToSliven(); 

    // let numberOfPages = goToSliven.getNumberOfPages();

    // for (let i = 0; i < numberOfPages; i++) {
    //     let currentPath = gotoSliven.sitePages[i].path;

    //     checkVisualIdentificationElements(currentPath);

    // }




}

    describe("Check for Logos Visability", () => {

        test('Municipality Of Sliven Logo is visible', async ({ page }) =>{
    
            const identification = new BasePageProjectIdentification(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + identification.path);
            await identification.coatOfArmsSliven.scrollIntoViewIfNeeded();
            
            expect(await identification.coatOfArmsSliven.isVisible()).toBeTruthy();

        });

        test('Friends of Sliven Logo is visible', async ({ page }) =>{
    
            const identification = new BasePageProjectIdentification(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + identification.path);
            await identification.friendOfSlivenLogo.scrollIntoViewIfNeeded();
            
            expect(await identification.friendOfSlivenLogo.isVisible()).toBeTruthy();

        });

        test('EFRR Logo is visible', async ({ page }) =>{
    
            const identification = new BasePageProjectIdentification(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + identification.path);
            await identification.fundEFRRLogo.scrollIntoViewIfNeeded();
            
            expect(await identification.fundEFRRLogo.isVisible()).toBeTruthy();

        });

        test('Fund FUG Logo is visible', async ({ page }) =>{
    
            const identification = new BasePageProjectIdentification(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + identification.path);
            await identification.fundFUGLogo.scrollIntoViewIfNeeded();
            
            expect(await identification.fundFUGLogo.isVisible()).toBeTruthy();

        });

        
        test('OPRR Logo is visible', async ({ page }) =>{
    
            const identification = new BasePageProjectIdentification(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + identification.path);
            await identification.programOPRRLogo.scrollIntoViewIfNeeded();
            
            expect(await identification.programOPRRLogo.isVisible()).toBeTruthy();

        });

        test('Fund Of Funds Logo is visible', async ({ page }) =>{
    
            const identification = new BasePageProjectIdentification(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + identification.path);
            await identification.fundOfFundsLogo.scrollIntoViewIfNeeded();
            
            expect(await identification.fundOfFundsLogo.isVisible()).toBeTruthy();

        });

        test('ProjectIdentification text should be present and be as expected', 
            
            async ({ page }) => {
            
            const identification = new BasePageProjectIdentification(page);
            const goToSliven = new GoToSliven();
            await page.goto(goToSliven.baseUrl + identification.path);

            console.log(await identification.projectIdentificationText.innerText());

            expect(await identification.projectIdentificationText.innerText()).
                toBe(identification.identificationExpectedText);
        })




    });
});