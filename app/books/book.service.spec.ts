import {bookServiceModule, BookService} from "./book.service";
import {Book} from "./book";

describe('book service', () => {
    let bookService: BookService;
    let $httpBackend: ng.IHttpBackendService;

    beforeEach(() => {
        angular.mock.module(bookServiceModule.name);
        angular.mock.inject((_bookService_, _$httpBackend_) => {
            bookService = _bookService_;
            $httpBackend = _$httpBackend_;
        })
    });

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("should initialize correctly", () => {
        expect(bookService).toBeDefined();
    });

    it('call the correct endpoint to retrieve books', () => {
        let expectedBooks: Book[] = [{
                    "authorFirstName": "Hans",
                    "authorLastName": "Muster",
                    "isbn": 123213123,
                    "title": "Sample"
                }, {
                    "authorFirstName": "Peter",
                    "authorLastName": "Lustig",
                    "isbn": 8756568,
                    "title": "Test"
                }];
        $httpBackend.expectGET("./app/mock/book.mock.json").respond(expectedBooks);

        bookService.getBooks().then(books => {
            expect(books).toEqual(expectedBooks);
        });

        $httpBackend.flush();
    });
});