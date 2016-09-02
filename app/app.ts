import {animalServiceModule} from "./animals/animal.service";
import {animalsComponentModule} from "./animals/animals.component";
import IHttpProvider = angular.IHttpProvider;
import {animalComonentModule} from "./animals/animal.component";

const modules = [
    animalServiceModule,
    animalsComponentModule,
    animalComonentModule
];

const AppComponent = {
    templateUrl: './app/app.html'
}

angular
    .module('app', modules.map(module => module.name))
    .component('app', AppComponent);
