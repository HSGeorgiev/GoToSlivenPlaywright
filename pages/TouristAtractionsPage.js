import { test, expect } from '@playwright/test';

export class TouristAtractionsPage{
    
    constructor(page){

        this.page = page;
        this.path = '/tourist-attractions/';

        // Slider
        this.h2Headings = page.locator('//h2');
        this,expectedH2Headings = [
            'LANDMARKS',
            'CULTURAL & HISTORICAL HERITAGE',
            'PARKS & PLACES FOR ENTERTAINMENT',
        ]


        


        
    }

}

