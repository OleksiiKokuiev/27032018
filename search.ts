import {browser, element, By, $} from 'protractor'

describe('Test', function () {

    const URL = 'https://movies-finder.firebaseapp.com/'
    let searchField = element(By.css('.form-control.ng-pristine'))
    let goButton = element(By.buttonText('Go!'))
    let searchResult = element.all(By.css('movies>.jumbotron+div movie-card'))
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
        expect(searchField.getText()).toEqual(text)
        goButton.click()
    }

    //Strings for Search tests
    const test_1 = 'godfather'
    const test_2 = 'THE GODFATHER'
    const test_3 = 'The Godfather'
    const test_4 = '13'
    const test_5 = '!@#$%^&*()_+?><":}{[]'
    const test_6 = ' '
    const test_7 = ''
    const test_8 = 'Еще один фильм'
    const test_9 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestib'
    const test_10 = 'a'
    const test_11 = 'godfather'



    it('1 test - general positive', function () {
        mainPageLoad()
        searchText(test_1)

        
        //let searchResult = element.all(By.scc('movies>.jumbotron+div movie-card')
        expect(element.all(By.scc('movies>.jumbotron+div movie-card')).count()).not.toBe(0)
        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_1)
        })
    })

    it('2 test - capital positive', function () {
        mainPageLoad()
        searchText(test_2)
   
        expect(searchResult.count()).not.toBe(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_2)
        })
    })

    it('3 test - mix capital positive', function () {
        mainPageLoad()
        searchText(test_3)
   
        expect(searchResult.count()).not.toBe(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_3)
        })
    })
    
    it('4 test - numbers', function () {
        mainPageLoad()
        searchText(test_4)
   
        expect(searchResult.count()).not.toBe(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_4)
        })
    })
    
    it('5 test - symbols', function () {
        mainPageLoad()
        searchText(test_5)
   
        expect(searchResult.count()).not.toBe(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_5)
        })
    })
    
    it('6 test - one space', function () {
        mainPageLoad()
        searchText(test_6)
   
        expect(searchResult.count()).not.toBe(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_6)
        })
    })
    
    it('7 test - empty field', function () {
        mainPageLoad()
        searchText(test_7)
   
        expect(searchResult.count()).not.toBe(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_7)
        })
    })
    
    it('8 test - different languages ', function () {
        mainPageLoad()
        searchText(test_8)
   
        expect(searchResult.count()).not.toBe(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_8)
        })
    })
    
    it('9 test - long string - max number of letters 2000', function () {
        mainPageLoad()
        searchText(test_9)
   
        expect(searchResult.count()).not.toBe(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_9)
        })
    })
    
    it('10 test - short string - min number of letters', function () {
        mainPageLoad()
        searchText(test_10)
   
        expect(searchResult.count()).not.toBe(0)

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_10)
        })
    })
    
    it('11 test - submit/click', function () {
        browser.get(URL)
        searchField.sendKeys(test_11)
        expect(searchField.getText()).toEqual(test_11)
        searchField.submit()

        searchResult.each(function (elem, indx) {
        expect(elem.getText()).toContain(test_11)
        })
    })
})