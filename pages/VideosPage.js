import { test, expect } from '@playwright/test';

export class VideosPage{
    

    constructor(page){

        this.page = page;
        this.path = '/video/';

        this.h3VideoHeadings = page.locator('//h3');
        this.videoObjectsNames = page.locator('//div[@class="elementskit-box-style-content"]')
        this.videoButtons = page.locator('//a[@class="elementskit-btn whitespace--normal"]')
        
        this.h3Expected = [
            'Historical Museum', 
            'House-Museum', 
            'House-Museum', 
            'Fortress', 
            'Textile Factory', 
            'House-Museum',
        ]

        this.videoNamesExpected = [
            'D.r Simeon Tabakov', 
            'Hadzhi Dimitar', 
            'Old Sliven Popular Customs', 
            'Tuida', 
            'The First State Textile Factory In Balkan Peninsula', 
            'Dobri Chintulov',
        ]
    }


}

