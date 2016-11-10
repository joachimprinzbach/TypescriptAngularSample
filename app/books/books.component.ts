import {BookService} from "./book.service";
import {Book} from "./book";

class booksComponentController implements ng.IComponentController {

    books: Book[];

    // @ngInject
    constructor(private bookService: BookService) {
    }

    $onInit() {
        this.bookService.getBooks()
            .then(books => this.books = books);
    }
}

const booksComponentOptions: ng.IComponentOptions = {
    controller: booksComponentController,
    controllerAs: 'vm',
    templateUrl: 'app/books/books.html'
};

export const booksComponentModule = angular.module('booksComponentModule', [])
    .component('books', booksComponentOptions);