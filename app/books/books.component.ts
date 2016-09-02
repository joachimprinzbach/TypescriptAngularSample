import {BookService} from "./book.service";
import {Book} from "./book";
import IComponentController = angular.IComponentController;

class booksComponentController implements IComponentController {

    books: Book[];

    constructor(private bookService: BookService) {
    }

    $onInit() {
        this.bookService.getBooks()
            .then(books => this.books = books);
    }
}

const booksComponent = {
    controller: booksComponentController,
    controllerAs: 'vm',
    templateUrl: 'app/books/books.html'
};

export const booksComponentModule = angular.module('booksComponentModule', [])
    .component('books', booksComponent);