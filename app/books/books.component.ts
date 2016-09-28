import {BookService} from "./book.service";
import {Book} from "./book";
import IComponentController = angular.IComponentController;
import IComponentOptions = angular.IComponentOptions;

class booksComponentController implements IComponentController {

    books: Book[];

    constructor(private bookService: BookService) {
    }

    $onInit() {
        this.bookService.getBooks()
            .then(books => this.books = books);
    }
}

const booksComponentOptions: IComponentOptions = {
    controller: booksComponentController,
    controllerAs: 'vm',
    templateUrl: 'app/books/books.html'
};

export const booksComponentModule = angular.module('booksComponentModule', [])
    .component('books', booksComponentOptions);