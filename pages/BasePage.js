import { test, expect } from '@playwright/test';

export class BasePage{
    
    constructor(page){
        this.page = page;
        this.aboutMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "about-us")]');
        this.touristAttractionsMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/tourist-attractions/")]');
        this.friendOfSlivenMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/become-a-friend-of-sliven/")]');
        this.videoMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/video/")]');
        this.virtualWalkMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/360-virtual-walk/")]');
        this.modelsMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/3d-models/")]');
    }

}

