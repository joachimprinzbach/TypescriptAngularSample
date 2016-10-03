import {bookServiceModule} from "./books/book.service";
import {booksComponentModule} from "./books/books.component";
import IHttpProvider = angular.IHttpProvider;
import {bookComonentModule} from "./books/book/book.component";

const modules = [
    bookServiceModule,
    booksComponentModule,
    bookComonentModule
];

const appComponentOptions: IComponentOptions = {
    templateUrl: './app/app.html'
}

angular
    .module('app', modules.map(module => module.name))
    .component('app', appComponentOptions);
