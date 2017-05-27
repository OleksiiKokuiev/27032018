import { browser, element, By, $, $$ } from 'protractor'

export class BasePage {
    public URL

    open() {
        browser.get(this.URL)
        expect(browser.getCurrentUrl()).toEqual(this.URL)
    }


}