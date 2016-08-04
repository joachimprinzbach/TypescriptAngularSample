import {AnimalService} from "./animal.service";
import {Animal} from "./animal";
import IComponentController = angular.IComponentController;

class animalsComponentController implements IComponentController {

    animals: Animal[];

    constructor(private animalService: AnimalService) {
    }

    $onInit() {
        this.animalService.getAnimals()
            .then(animals => this.animals = animals);
    }
}

const animalsComponent = {
    controller: animalsComponentController,
    controllerAs: 'vm',
    templateUrl: 'app/animals/animals.html'
}

export const animalsComponentModule = angular.module('animalsComponentModule', [])
    .component('animals', animalsComponent);