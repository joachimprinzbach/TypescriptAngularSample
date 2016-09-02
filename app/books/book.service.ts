import IHttpService = angular.IHttpService;
import IQService = angular.IQService;
import IPromise = angular.IPromise;
import {Book} from "./book";
import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;

export class BookService  {

    constructor(private $http: IHttpService, private $q: IQService) {
    }

    getBooks(): IPromise<Book[]> {
        return this.$q(resolve => {
            this.$http.get('http://beta.json-generator.com/api/json/get/Eyf96Y2O-').then(response => {
                resolve(response.data);
            });
        });
    }
}

export const bookServiceModule = angular.module('bookServiceModule', [])
    .service('bookService', BookService);