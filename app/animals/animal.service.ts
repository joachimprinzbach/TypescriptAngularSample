import IHttpService = angular.IHttpService;
import IQService = angular.IQService;
import IPromise = angular.IPromise;
import {Animal} from "./animal";
import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;

export class AnimalService  {

    constructor(private $http: IHttpService, private $q: IQService) {
    }

    getAnimals(): IPromise<Animal[]> {
        var deferred = this.$q.defer();
        this.$http.get('http://beta.json-generator.com/api/json/get/Eyf96Y2O-').then(response => {
            deferred.resolve(response.data);
        }, err => {
            deferred.reject(err);
        });
        return deferred.promise;
    }
}

export const animalServiceModule = angular.module('animalServiceModule', [])
    .service('animalService', AnimalService);