import {bookServiceModule, BookService} from "./book.service";
import IHttpBackendService = angular.IHttpBackendService;
import {Book} from "./book";

describe('book service', () => {
    let bookService: BookService;
    let $httpBackend: IHttpBackendService;

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
        let exeptedBooks: Book[] = [{
            isbn: 12545561
        }, {
            isbn: 56746545
        }];
        $httpBackend.expectGET("http://beta.json-generator.com/api/json/get/Eyf96Y2O-").respond(exeptedBooks);

        bookService.getBooks().then(books => {
            expect(books).toEqual(exeptedBooks);
        });

        $httpBackend.flush();
    });
});