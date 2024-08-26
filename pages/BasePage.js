import { test, expect } from '@playwright/test';

export class BasePage{
    
    constructor(page){
        this.page = page;
        // About SumMenu Elements
        this.aboutMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "about-us")]');
        // Tourist Attractions SumMenu Elements
        this.touristAttractionsMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/tourist-attractions/")]');
        this.friendOfSlivenMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/become-a-friend-of-sliven/")]');
        this.videoMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/video/")]');
        this.virtualWalkMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/360-virtual-walk/")]');
        this.modelsMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/3d-models/")]');
        // Map SumMenu Elements
        this.mapMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/interactive-map-of-sliven/")]');
        // Events SumMenu Elements
        this.eventsMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/event-directory/")]');
        // Accommodation SumMenu Elements
        this.accommodationMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/accommodation/")]');
        this.hotelsMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/hotels/")]');
        this.guestHousesMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/guest-house/")]');
        this.holidayHomesnMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/holiday-homes/")]');
        this.hutCabinsHomesnMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/hut-cabins/")]');
        this.campingsMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/campings/")]');
        this.usefulMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/useful/")]');
        // Restaurants SumMenu Elements
        this.restaurantsMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/restaurants/")]');
        this.pizzeriasMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/pizzerias/")]');
        this.fastFoodMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/fast-food-restaurants/")]');
        
    }

}

