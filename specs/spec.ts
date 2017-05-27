import {browser, element, By} from 'protractor'

xdescribe('Test 1', function () {
    it('1 test', function () {
        const URL = 'https://movies-finder.firebaseapp.com/'

        browser.get(URL)
        browser.sleep(10000)
        expect(browser.getCurrentUrl()).toEqual(URL);
        expect(browser.getTitle()).toEqual('Movies Finder')
    })

    it('2 test', function () {
        let locator = By.css('input.form-control')
        let searchField = element(locator)

        const URL = 'https://movies-finder.firebaseapp.com/'

        browser.get(URL)
        browser.sleep(10000)

        expect(searchField.isPresent()).toBeTruthy()
        expect(searchField.isDisplayed()).toBeTruthy()
    })

    it('3 test', function () {
        let locator = By.css('input.form-control')
        let searchField = element(locator)

        const URL = 'https://movies-finder.firebaseapp.com/'

        browser.get(URL)
        browser.sleep(10000) 

        expect(searchField.getAttribute('placeholder')).toEqual('Search for movies...')
    })

    it('4 test', function () {
        let locator = By.css('input.form-control')
        let searchField = element(locator)

        const URL = 'https://movies-finder.firebaseapp.com/'

        browser.get(URL)
        browser.sleep(3000) 

        searchField.sendKeys('HELLO WORLD')
        browser.sleep(10000)
        element(By.css('span.input-group-btn button.btn.btn-primary')).click()
        browser.sleep(10000)
    })

    it('5 test - upcoming', function () {
        let locator = By.partialLinkText('Upcoming Movies')
        let upcomingLink = element(locator)

        const URL = 'https://movies-finder.firebaseapp.com/'
        const URL_upcoming = 'https://movies-finder.firebaseapp.com/upcoming'

        browser.get(URL)
        browser.sleep(3000) 

        expect(upcomingLink.isPresent()).toBeTruthy()
        expect(upcomingLink.isDisplayed()).toBeTruthy()
        browser.sleep(10000)
        element(upcomingLink.click())
        browser.sleep(10000)
        expect(browser.getCurrentUrl()).toEqual(URL_upcoming)
    })

    it('6 test - popular series', function () {
        let locator = By.css('a[href*="popular"]')
        let popularSeriesLink = element(locator)

        const URL = 'https://movies-finder.firebaseapp.com/'
        const popularSeriesURL = 'https://movies-finder.firebaseapp.com/popular/series'

        browser.get(URL)
        browser.sleep(3000) 

        expect(popularSeriesLink.isPresent()).toBeTruthy()
        expect(popularSeriesLink.isDisplayed()).toBeTruthy()
        browser.sleep(10000)
        element(popularSeriesLink.click())
        browser.sleep(10000)
        expect(browser.getCurrentUrl()).toEqual(popularSeriesURL)
    })

    it('7 test - main page', function () {
        let locator_main = By.css('.navbar-brand')
        let locator_pop = By.css('a[href*="popular"]')
        let popularSeriesLink = element(locator_pop)
        let mainPageLink = element(locator_main)

        const URL = 'https://movies-finder.firebaseapp.com/'
        const popularSeriesURL = 'https://movies-finder.firebaseapp.com/popular/series'

        browser.get(URL)
        browser.sleep(3000) 

        expect(popularSeriesLink.isPresent()).toBeTruthy()
        expect(popularSeriesLink.isDisplayed()).toBeTruthy()
        browser.sleep(10000)
        element(popularSeriesLink.click())
        browser.sleep(10000)
        expect(browser.getCurrentUrl()).toEqual(popularSeriesURL)

        expect(mainPageLink.isPresent()).toBeTruthy()
        expect(mainPageLink.isDisplayed()).toBeTruthy()
        browser.sleep(10000)
        element(mainPageLink.click())
        browser.sleep(10000)
        expect(browser.getCurrentUrl()).toEqual(URL)       
    })

    it('8 test - genre count', function () {
        const URL = 'https://movies-finder.firebaseapp.com/'
        const genresNumb = 19

        browser.get(URL)
        browser.sleep(3000) 

        expect(element.all(By.css('.list-group-item')).count()).toEqual(genresNumb)
  
    })
})
