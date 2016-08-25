import IHttpService = angular.IHttpService;
import IQService = angular.IQService;
import IPromise = angular.IPromise;
import {Animal} from "./animal";
import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;

export class AnimalService  {

    constructor(private $http: IHttpService, private $q: IQService) {
    }

    getAnimals(): IPromise<Animal[]> {
        return this.$q(resolve => {
            this.$http.get('http://beta.json-generator.com/api/json/get/Eyf96Y2O-').then(response => {
                resolve(response.data);
            });
        });
    }
}

export const animalServiceModule = angular.module('animalServiceModule', [])
    .service('animalService', AnimalService);