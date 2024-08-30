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

    describe("Check for Logos Visability", () => {

        test('Municipality Of Sliven Logo is visible', async ({ page }) =>{
    
            const identification = new BasePageProjectIdentification(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + identification.path);
            await identification.coatOfArmsSliven.scrollIntoViewIfNeeded();
            
            expect(identification.coatOfArmsSliven).toBeTruthy();

        });

        test('Friends of Sliven Logo is visible', async ({ page }) =>{
    
            const identification = new BasePageProjectIdentification(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + identification.path);
            await identification.friendOfSlivenLogo.scrollIntoViewIfNeeded();
            
            expect(identification.friendOfSlivenLogo).toBeTruthy();

        });

        test('EFRR Logo is visible', async ({ page }) =>{
    
            const identification = new BasePageProjectIdentification(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + identification.path);
            await identification.fundEFRRLogo.scrollIntoViewIfNeeded();
            
            expect(identification.fundEFRRLogo).toBeTruthy();

        });

        test('Fund FUG Logo is visible', async ({ page }) =>{
    
            const identification = new BasePageProjectIdentification(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + identification.path);
            await identification.fundFUGLogo.scrollIntoViewIfNeeded();
            
            expect(identification.fundFUGLogo).toBeTruthy();

        });

        
        test('OPRR Logo is visible', async ({ page }) =>{
    
            const identification = new BasePageProjectIdentification(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + identification.path);
            await identification.programOPRRLogo.scrollIntoViewIfNeeded();
            
            expect(identification.programOPRRLogo).toBeTruthy();

        });


    });
});