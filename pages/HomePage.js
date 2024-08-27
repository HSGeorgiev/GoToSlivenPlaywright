import { test, expect } from '@playwright/test';

export class HomePage{
    
    constructor(page){
        this.page = page;
        this.path = '/';
        // Slider
        this.sliderLinksButons = page.locator('//div[@class="elementor-slides-wrapper elementor-main-swiper swiper swiper-initialized swiper-horizontal swiper-pointer-events"]//div[@class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"]//span');
        
        // Elements on the page mapping
        
        this.h3Elements = page.locator('h3');
        this.h3 = 
            ['INSPIRATION FROM THE PAST AND NATURE FOR AN UNFORGETTABLE JOURNEY', 
                "Дестинация", 'Historical Heritage', 
                'Landmarks', 
                'Events', 
                'Accommodation', 
                'Annual Events', 
                'Useful'];

        this.bookingSubmitButton = page.locator('//input[@class="b_submitButton"]');
        this.mapSearchInput = page.locator('//input[@class="eapps-google-maps-bar-search-input"]');
        this.mapSearchButton = page.locator('//div[@class="eapps-google-maps-bar-search-location"]');
        this.resultsMapSearch = page.locator('//div[@class="eapps-google-maps-bar-list-item-info-item eapps-google-maps-bar-list-item-info-title"]');
        


        


        
    }

}

