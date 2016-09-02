import {Animal} from "./animal";
import IComponentOptions = angular.IComponentOptions;

class AnimalComponentController {
    animal: Animal;
}

const animalComponent: IComponentOptions = {
    bindings: {
        animal: '<'
    },
    templateUrl: 'app/animals/animal.html',
    controllerAs: 'vm',
    controller: AnimalComponentController
};

export const animalComonentModule = angular.module('animalComponentModule', [])
    .component('animal', animalComponent);