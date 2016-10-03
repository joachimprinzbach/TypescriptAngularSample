import {Book} from "./book";

export class BookService {

    constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
    }

    getBooks(): ng.IPromise<Book[]> {
        return this.$q(resolve => {
            this.$http.get('./app/mock/book.mock.json').then(response => {
                return resolve(response.data);
            });
        });
    }
}

export const bookServiceModule = angular.module('bookServiceModule', [])
    .service('bookService', BookService);