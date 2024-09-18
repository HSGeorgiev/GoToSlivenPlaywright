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
            'Historical Museum - Dr. Simeon Tabakov',
        ]

        this.modelsLinks = page.locator('//div[@class="sketchfab-embed-wrapper"]//a');

        this.expectedModelsLinksText = [
            'Галерия - Добрович ', 
            'd.ignatov ',
            'Sketchfab',
            'Къща Музей - Хаджи Димитър ', 
            'd.ignatov ', 
            'Sketchfab',
            'Изложбена Зала - Сирак Скитник ',
            'd.ignatov ',
            'Sketchfab',
            'Галерия Миркович ',
            'd.ignatov ', 
            'Sketchfab'
        ]


    }


}

