import { test, expect } from '@playwright/test';

export class BasePageProjectIdentification{
    // BasePageProjectIdentification classs represent the mandatory visual identification 
    constructor(page){
        this.page = page;
        this.path = '/';
        // Text - Project Identification
        this.projectIdentificationText = page.locator('//div[@data-id="45de748"]');
        // Logos Elements
        this.coatOfArmsSliven = page.locator('//img[contains(@src, "Лого-Сливен")]');
        this.friendOfSlivenLogo = page.locator('//img[contains(@src, "Приятел-на-Сливен")]');
        this.fundEFRRLogo = page.locator('//img[contains(@src, "Европейски_Фонд_за_регионално_Развитие")]');
        this.fundFUGLogo = page.locator('//img[contains(@src, "Фонд_за_Устойчиви_Градове")]');
        this.programOPRRLogo = page.locator('//img[contains(@src, "Региони_В_Растеж")]');
        this.fundOfFundsLogo = page.locator('//img[contains(@src, "Фонд_на_Фондовете")]');
    }

}

