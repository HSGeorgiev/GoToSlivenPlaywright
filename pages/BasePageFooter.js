import { test, expect } from '@playwright/test';

export class BasePageFooter{
    
    constructor(page){
        this.page = page;
        // Mapping Links in Footer Element
        this.aboutLinkFooter = page.locator('//footer//a[contains(@href, "about-us")]');
        this.touristAttractionLinkFooter = page.locator('//footer//a[contains(@href, "tourist-attraction")]');
        this.interactiveMapLinkFooter = page.locator('//footer//a[contains(@href, "interactive-map-of-sliven")]');
        this.eventsLinkFooter = page.locator('//footer//a[contains(@href, "event-directory")]');
        this.accomodationLinkFooter = page.locator('//footer//a[contains(@href, "accommodation")]');
        this.restaurantLinkFooter = page.locator('//footer//a[contains(@href, "restaurants")]');
        this.contactusLinkFooter = page.locator('//footer//a[contains(@href, "contact-us")]');
    }

}

