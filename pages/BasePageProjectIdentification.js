import { test, expect } from '@playwright/test';

export class BasePageProjectIdentification{
    // BasePageProjectIdentification classs represent the mandatory visual identification 
    constructor(page){
        this.page = page;
        this.path = '/';
        // Text - Project Identification
        this.projectIdentificationText = page.locator('//div[@data-id="45de748"]');
        // Logos Elements
        // The Sliven Municipality Coat Of Arms
        this.coatOfArmsSliven = page.locator('//img[contains(@src, "Лого-Сливен")]');
        // Be Friend Of Sliven logo
        this.friendOfSlivenLogo = page.locator('//img[contains(@src, "Приятел-на-Сливен")]');
        // European Fund for Regional Development
        this.fundEFRRLogo = page.locator('//img[contains(@src, "Европейски_Фонд_за_регионално_Развитие")]');
        // Fund Sustainable Towns Logo
        this.fundFUGLogo = page.locator('//img[contains(@src, "Фонд_за_Устойчиви_Градове")]');
        // Regional Operational Program Logo
        this.programOPRRLogo = page.locator('//img[contains(@src, "Региони_В_Растеж")]');
        // Fund of Funds Logo
        this.fundOfFundsLogo = page.locator('//img[contains(@src, "Фонд_на_Фондовете")]');
    }

}

