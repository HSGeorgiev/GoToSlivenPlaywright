import { test, expect } from '@playwright/test';

export class VirtualWalksPage{
    

    constructor(page){

        this.page = page;
        this.path = '/360-virtual-walk/';

        this.h2ObjectsHeadings = page.locator('//h2[@class="elementor-heading-title elementor-size-default"]');
        this.h2ExpectedHeadings = [
            'House - Museum Hadzhi Dimitar',
            'Museum of Textyle Industry',
            'TICC - Blue Stones',
            'Sirak Skitnik Galery',
            'Mirkovich Galery',
            'Dobrovich Galery',
        ];

  
    }


}

