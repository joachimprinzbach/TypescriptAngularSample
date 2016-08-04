import {AnimalService} from "./animal.service";
import {Animal} from "./animal";

const animalsComponent = {
    controller: animalsComponentController,
    controllerAs: 'vm',
    templateUrl: 'app/animals/animals.html'
}

class animalsComponentController {

    animals: Animal[];

    constructor(private animalService: AnimalService) {
        this.animalService.getAnimals()
            .then(animals => this.animals = animals);
    }
}

export const animalsComponentModule = angular.module('animalsComponentModule', [])
    .component('animals', animalsComponent);