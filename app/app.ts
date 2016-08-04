import {animalServiceModule} from "./animals/animal.service";
import {animalsComponentModule} from "./animals/animals.component";
import IHttpProvider = angular.IHttpProvider;

const modules = [
    animalServiceModule,
    animalsComponentModule
];

const AppComponent = {
    templateUrl: './app/app.html'
}

angular
    .module('app', modules.map(module => module.name))
    .component('app', AppComponent);
