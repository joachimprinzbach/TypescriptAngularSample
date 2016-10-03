const bookComponentOptions: ng.IComponentOptions = {
    bindings: {
        book: '<'
    },
    templateUrl: 'app/books/book/book.html',
    controllerAs: 'vm'
};

export const bookComonentModule = angular.module('bookComponentModule', [])
    .component('book', bookComponentOptions);