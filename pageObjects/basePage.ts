import { browser, element, By, $, $$ } from 'protractor'

export class BasePage {
    public URL
    public movieCard = {
         title: $('.caption a[ng-reflect-title]'),
         releaseDate: $('.caption p:nth-child(2)'),
         detailsLink: $('.caption p a'),
         rating: $('.caption small')
     }

    open() {
        browser.get(this.URL)

    }
    elemCheck = function (elemForCheck) {
        expect(elemForCheck.isDisplayed()).toBeTruthy()
    }
}