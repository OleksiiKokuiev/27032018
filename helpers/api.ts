import endpoints from "./endpoints.helper";
const request = require('request');

export default class Api {

    //My initial attempt
    test() {
        console.log("It works!");
    }


    getAllEntities(){
        return new Promise((resolve, reject) => {
            request.get(endpoints.getAllEntities, function (error, response, body) {
                //console.log('body:', body); // Print the HTML .
                return resolve(body);
            });
        });

    }


    getAllEntitiesStatusCode() {
        return new Promise((resolve, reject) => {
            request.get(endpoints.getAllEntities, function (error, response) {
                //console.log('statusCode:', response.statusCode);
                return resolve(response.statusCode);
            });
        });
    }

    creationNewEntityFailed(invalidKey) {
        return new Promise((resolve, reject) => {
            request.post(endpoints.getAllEntities, invalidKey, function(error, response, body) {
                /* var newObj = new Object();
                 newObj.error = error;
                 newObj.response = response.statusCode;
                 newObj.body = body;*/
                return resolve(response.statusCode);
            });
        });
    }

    addNewEntity(newEntity) {
        return new Promise((resolve, reject) => {
            request.post(endpoints.getAllEntities, {form: newEntity}, function (error, response) {
                console.log(newEntity);
                return resolve(response.statusCode);
            });
        });
    }

    updateEntity(entityId, newEntity) {
        return new Promise((resolve, reject) => {
            request.put(endpoints.updateEntity + entityId, {form: newEntity}, function (error, response) {
                return resolve(response.statusCode);
            });
        });
    }

    deleteEntity(entityId) {
        return new Promise((resolve, reject) => {
            request.delete(endpoints.updateEntity + entityId, function (error, response, body) {
                return resolve(response.statusCode);
            });
        });
    }

    getTheLatestEntityId(){
        let theLatestId;
        let body: any='initial';
            this.getAllEntities()
            .then(theLatestId => {
                body = theLatestId
            });
        setTimeout(function () {
            let newst = body.slice(body.length-1,body.length)
            let newstr = JSON.stringify(newst)
            theLatestId = parseInt(newstr.slice(7))
            console.log(theLatestId)
            return theLatestId;
        }, 2000);
        return theLatestId

    }
}