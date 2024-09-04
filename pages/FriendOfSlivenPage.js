import { test, expect } from '@playwright/test';

export class FriendOfSlivenPage{
    
    constructor(page){

        this.page = page;
        this.path = '/become-a-friend-of-sliven/';

        this.h3Headings = page.locator('//h3');
        this.h3ExpectedHeadingsTexts = [
            '“Become a friend of Sliven” campaign',
            'Objects included in the campaign "Become a friend of Sliven"',
        ];
        this.objectsHeadingsLinks = page.locator('//div[@class="e-hotspot__label"]');
        this.expectedObjectsHeadings = [
            'Historical Museum',
            'House-Museum "H.Dimitar"',
            'House-Museum Of Popular Customs',
            'Tuida Fortress',
            'Museum Of Textile Industry',
            
        ]


        


        
    }

}

