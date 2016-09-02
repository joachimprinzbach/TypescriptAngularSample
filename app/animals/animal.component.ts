import IComponentOptions = angular.IComponentOptions;

const animalComponent: IComponentOptions = {
    bindings: {
        animal: '<'
    },
    templateUrl: 'app/animals/animal.html',
    controllerAs: 'vm'
};

export const animalComonentModule = angular.module('animalComponentModule', [])
    .component('animal', animalComponent);