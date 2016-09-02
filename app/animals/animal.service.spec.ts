import {animalServiceModule, AnimalService} from "./animal.service";
import IHttpBackendService = angular.IHttpBackendService;
import {Animal} from "./animal";

describe('animal service', () => {
    let animalService: AnimalService;
    let $httpBackend: IHttpBackendService;

    beforeEach(() => {
        angular.mock.module(animalServiceModule.name);
        angular.mock.inject((_animalService_, _$httpBackend_) => {
            animalService = _animalService_;
            $httpBackend = _$httpBackend_;
        })
    });

    afterEach(() => {
       $httpBackend.verifyNoOutstandingExpectation();
       $httpBackend.verifyNoOutstandingRequest();
    });

    it("should initialize correctly", () => {
        expect(animalService).toBeDefined();
    });

    it('should work', () => {
        let exeptedAnimals: Animal[] = [{
            age: 12
        }, {
            age: 22
        }];
        $httpBackend.expectGET("http://beta.json-generator.com/api/json/get/Eyf96Y2O-").respond(exeptedAnimals);

        animalService.getAnimals().then(animals => {
            expect(animals).toEqual(exeptedAnimals);
        });

        $httpBackend.flush();
    });
});