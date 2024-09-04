import { test, expect } from '@playwright/test';

export class FriendOfSlivenPage{
    
    constructor(page){

        this.page = page;
        this.path = '/become-a-friend-of-sliven/';

        this.h3Headings = page.locator('//h3');
        this.h3ExpectedHeadingsTexts = [
            '“Become A Friend Of Sliven” Campaign',
            'Objects included in the campaign "Become a friend of Sliven"',
        ];
        this.objectsHeadingsLinks = page.locator('//div[@class="e-hotspot__label"]');
        this.expectedObjectsHeadings = [
            'Historical Museum',
            'House-Museum "H.Dimitar"',
            'House-Museum Of Popular Customs',
            'Tuida Fortress',
            'Museum Of Textile Industry',
            'Blue Stones Nature Park',
            'Dobri Chintulov House-Museum',
            'Dimitar Dobrovich Art Gallery​',
            'Sirak Skitnik Hall',
            'House Of Mirkovich Art Gallery',
        ];
        this.becomeFriendOfSlivenLogo = page.locator('//img[@class="attachment-large size-large wp-image-4961"]');



    }

}

