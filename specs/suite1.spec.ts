/*Here is main spec*/
import Api from "../helpers/api";

describe('CRUD tests + additional', function () {

    let api = new Api();
    let idCounter;
    let testUserName = 'AutomationApiUser'

    it('Test1: User is able to add new entity and receive 201\'s response', function () {
        let responseCode: any = 0
        api.addNewEntity({title: testUserName, due: '2018-03-14'})
            .then(statusCode => {
                responseCode = statusCode
            });
        waitsFor(function () {
            return responseCode !== 0;
        }, 'There is no response', 10000);

        runs(function () {
            expect(responseCode).toEqual(201)
        });
    })
    it('Test2: Get request should return body which contain all entities', function () {
        let bodyObj: any = 'initial'
        api.getAllEntities()
            .then(body => {
                bodyObj = body
                let newstr = JSON.stringify(bodyObj)
                let id = parseInt(newstr.slice(newstr.indexOf(testUserName)-18, newstr.indexOf(testUserName)), 10)
                idCounter = id
            });

        waitsFor(function () {
            return bodyObj !== 'initial';
        }, 'There is no response', 10000);

        runs(function () {
            console.log(bodyObj)
            expect(bodyObj.length).toBeGreaterThan(500)
        });

    })
    it('Test3: Get request should return response with status code 200', function () {
        let responseCode: any = 0
        api.getAllEntitiesStatusCode()
            .then (statusCode => {
                responseCode = statusCode
            })
        waitsFor(function () {
            return responseCode !== 0;
        }, 'There is no response', 10000);

        runs(function () {
            expect(responseCode).toEqual(200)
        });
    })
    it('Test4: Create unsuccessful POST request and receive 422 status code and error\'s text', function () {
        let responseCode: any = 0
        api.creationNewEntityFailed('anyInvalidKey')
            .then(statusCode => {
                responseCode = statusCode
            })
        waitsFor(function () {
            return responseCode !== 0;
        }, 'There is no response', 10000);

        runs(function () {
            expect(responseCode).toEqual(422)
        });
    })
    it('Test5: User is able to update entity and receive message "entity is updated', function () {
        let responseCode: any = 0
        api.updateEntity(idCounter,{title: 'AutomationApiUser1', due: '2018-03-10'})
            .then(statusCode => {
                responseCode = statusCode
            })
        waitsFor(function () {
            return responseCode !== 0;
        }, 'There is no response', 10000);

        runs(function () {
            expect(responseCode).toEqual(200)
        });
    })
    it('Test6: User is able to delete entity and receive 204 status response', function () {
        let responseCode: any = 0
        api.deleteEntity(idCounter)
            .then(statusCode => {
                responseCode = statusCode
            })
        waitsFor(function () {
            return responseCode !== 0;
        }, 'There is no response', 10000);

        runs(function () {
            expect(responseCode).toEqual(204)
        });
    })

})