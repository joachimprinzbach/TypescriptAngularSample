import {Book} from "./book";

export class BookService {

    sampleDate: Book[] = [{
        authorFirstName: 'Hans',
        authorLastName: 'Muster',
        isbn: 123213123,
        title: 'Sample'
    }, {
        authorFirstName: 'Peter',
        authorLastName: 'Lustig',
        isbn: 8756568,
        title: 'Test'
    }]

    constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
    }

    getBooks(): ng.IPromise<Book[]> {
        return this.$q(resolve => {
            this.$http.get('https://www.googleapis.com/books/v1/volumes?q=domaindrivendesign').then(response => {
                //resolve(response.data);
            });
            return resolve(this.sampleDate);
        });
    }
}

export const bookServiceModule = angular.module('bookServiceModule', [])
    .service('bookService', BookService);