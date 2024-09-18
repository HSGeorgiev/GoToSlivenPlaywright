import { test, expect } from '@playwright/test';

export class ModelsPage{
    

    constructor(page){

        this.page = page;
        this.path = '/3d-models/';

        this.h2ModelsHeadings = page.locator('//h2[@class="elementor-heading-title elementor-size-default"]');
        
        this.h2TitlesExpected = [
            'Dobrovich Gallery', 
            'House-Museum Hadzhi Dimitar', 
            'Sirak Skitnik Gallery', 
            'Mirkovich Gallery', 
            'TICC - Blue Stones', 
            'House-Museum Dobri Chintulov',
            'Historical Museum - dr. Simeon Tabakov',
        ]

    }


}

