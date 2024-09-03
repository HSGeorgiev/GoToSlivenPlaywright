import { test, expect } from '@playwright/test';

export class BasePageProjectIdentification{
    // BasePageProjectIdentification classs represent the mandatory visual identification 
    constructor(page){
        this.page = page;
        this.path = '/';
        // Text - Project Identification
        this.projectIdentificationText = page.locator('//div[@data-id="bab3c01"]//div//pre');
        this.identificationExpectedText = 'The site was created within the framework of project BG16RFOP001-6.002-0015-С01 "Integrated project ' + 
        'for the development of tourism and improvement of the cultural and historical infrastructure in the Municipality of Sliven", which is ' + 
        'implemented with the financial support of the Operational Program "Regions in Growth" 2014 - 2020 co-financed by the European Union through ' + 
        'the European Fund for Regional Development. All responsibility for the content is borne by the beneficiary Municipality of Sliven and under ' + 
        'no circumstances can it be considered that this document reflects the official opinion of the European Union and the Managing Authority of ' + 
        'the OPRD 2014-2020'
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

