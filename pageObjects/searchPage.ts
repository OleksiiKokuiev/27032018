import { browser, element, By, $, $$ } from 'protractor'
import { BasePage } from './basePage'

export class SearchPage extends BasePage {
    public searchField = element(By.name('searchStr'))
    public goButton = element(By.buttonText('Go!'))
    public searchResult = $$('movies>.jumbotron+div movie-card')
    public searchResultTitle = $$('movies>.jumbotron+div movie-card  [title]')
    public pageTitleResult = $('.orange-text')
    public movieCards = $$('movie-card')
    public URL = ''

    elemCheck = function (elemForCheck) {
        expect(elemForCheck.isDisplayed()).toBeTruthy()
    }

    searchText = function (text) {
        this.elemCheck(this.searchField)
        this.searchField.sendKeys(text)
        browser.sleep(1500)
        expect(this.searchField.getAttribute('ng-reflect-model')).toContain(text, `Check a text in the search field`)
        this.goButton.click()
    }

}