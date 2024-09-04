import { test, expect } from '@playwright/test';

export class TouristAtractionsPage{
    
    constructor(page){

        this.page = page;
        this.path = '/tourist-attractions/';

        // Slider
        this.h2Elements = page.locator('//h2');
        this.expectedH2Elements = [
            'LANDMARKS',
            'CULTURAL & HISTORICAL HERITAGE',
            'PARKS & PLACES FOR ENTERTAINMENT',
        ];
        this.seeMoreButtons = page.locator('//span[@class="elementor-button-text"]');
        this.expectedUrlTargets = [
            '/landmarks-2/',
            '/cultural-historical-heritage/',
            '/parks-places-for-entertainment/',
        ];

        


        
    }

}

