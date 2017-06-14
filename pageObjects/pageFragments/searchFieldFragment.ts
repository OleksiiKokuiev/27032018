import { browser, element, By, $, $$, protractor } from 'protractor'
import { BaseFragment, BaseArrayFragment } from 'protractor-element-extend'


export class SearchFieldFragment extends BaseFragment {
    constructor(searchFieldElement) {
        super(searchFieldElement)

        this.search = searchFieldElement;
        this.searchField = this.search.element(By.name('searchStr'))
        this.goButton = this.search.element(By.buttonText('Go!'))
    }

    enterText() {

    }
    getTextForSearch() {

    }
    clearSearchField() {

    }
    clickGo() {

    }
    searchMovie() {

    }
}