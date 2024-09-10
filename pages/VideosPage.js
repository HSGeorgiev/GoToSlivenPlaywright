import { test, expect } from '@playwright/test';

export class VideosPage{
    

    constructor(page){

        this.page = page;
        this.path = '/video/';

        this.h3Headings = page.locator('//h3');
        



    }

}

