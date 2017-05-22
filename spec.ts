import {browser, element, By} from 'protractor'
/*
describe('Test 1', function () {
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
})*/

describe('Test', function () {

    const URL = 'https://movies-finder.firebaseapp.com/'
    let searchField = element(By.name('searchStr'))
    let goButton = element(By.buttonText('Go!'))
    let searchResult = element.all(By.css('movies>.jumbotron+div movie-card'))
    let searchResultTitle = element.all(By.css('movies>.jumbotron+div movie-card  [title]'))
    
    let movieCards = element.all(By.css('movie-card'))
    
    //Funtions
    let elemCheck = function(elemForCheck) {
        expect(elemForCheck.isDisplayed()).toBeTruthy()
    }

    let mainPageLoad = function() {
        browser.get(URL)
        expect(browser.getCurrentUrl()).toEqual(URL)
        expect(browser.getTitle()).toEqual('Movies Finder')
    }

    let searchText = function(text) {
        elemCheck(searchField)
        searchField.sendKeys(text)
       // browser.sleep(500)
        goButton.click()
    }

    //Strings for Search tests
    const test_1: string = 'godfather'
    const test_2: string = 'THE GODFATHER'
    const test_3: string = 'The Godfather'
    const test_4 = 13
    const test_5: string = '!@#$%^&*()_+?><":}{[]'
    const test_6: string = ' '
    const test_7: string = ''
    const test_8: string = 'Еще один фильм'
    const test_9: string = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestib'
    const test_10: string = 'a'
    const test_11: string = 'godfather'


    it('1 test - general positive', function () {
        mainPageLoad()
        searchText(test_1)
        browser.sleep(2000)
        expect(searchResult.count()).toBeGreaterThan(0)
           
        searchResultTitle.each(function (elem, indx) {
        expect(elem.getText()).toContain('Godfather')
        })
    })

    it('2 test - capital positive', function () {
        mainPageLoad()
        searchText(test_2)
        browser.sleep(2000)
        expect(searchResult.count()).toBeGreaterThan(0)

        searchResultTitle.each(function (elem, indx) {
        expect(elem.getText()).toContain('Godfather')
        })
    })

    it('3 test - mix capital positive', function () {
        mainPageLoad()
        searchText(test_3)
        browser.sleep(2000)
        expect(searchResult.count()).toBeGreaterThan(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain('Godfather')
        })
    })
    
    it('4 test - numbers', function () {
        mainPageLoad()
        searchText(test_4)
        browser.sleep(2000)
        expect(searchResult.count()).toBeGreaterThan(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_4)
        })
    })
    
    it('5 test - symbols', function () {
        mainPageLoad()
        searchText(test_5)
        browser.sleep(2000)
        expect(searchResult.count()).toEqual(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_5)
        })
    })
    
    it('6 test - one space', function () {
        mainPageLoad()
        searchText(test_6)
        browser.sleep(2000)
        expect(searchResult.count()).toEqual(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_6)
        })
    })
    
    it('7 test - empty field', function () {
        mainPageLoad()
        searchText(test_7)
        browser.sleep(2000)
        expect(searchResult.count()).toEqual(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_7)
        })
    })
    
    it('8 test - different languages ', function () {
        mainPageLoad()
        searchText(test_8)
        browser.sleep(2000)
        expect(searchResult.count()).toBeGreaterThan(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_8)
        })
    })
    
    it('9 test - long string - max number of letters 2000', function () {
        mainPageLoad()
        searchText(test_9)
        browser.sleep(2000)
        expect(searchResult.count()).toEqual(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_9)
        })
    })
    
    it('10 test - short string - min number of letters', function () {
        mainPageLoad()
        searchText(test_10)
        browser.sleep(2000)
        expect(searchResult.count()).toBeGreaterThan(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_10)
        })
    })
    
    it('11 test - submit/click', function () {
        browser.get(URL)
        searchField.sendKeys(test_11)
        searchField.submit()
        browser.sleep(2000)
        searchResultTitle.each(function (elem, indx) {
        expect(elem.getText()).toContain('Godfather')
        })
    })
})