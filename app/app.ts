import {bookServiceModule} from "./books/book.service";
import {booksComponentModule} from "./books/books.component";
import {bookComponentModule} from "./books/book/book.component";

const modules = [
    bookServiceModule,
    booksComponentModule,
    bookComponentModule
];

const legacyDependencies = [
    'ngMaterial'
];

const appComponentOptions: ng.IComponentOptions = {
    templateUrl: './app/app.html'
};

angular
    .module('app', modules.map(module => module.name).concat(legacyDependencies))
    .component('app', appComponentOptions);
