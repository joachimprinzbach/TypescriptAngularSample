import {AppComponent} from "./app.component";

const modules = [
];

angular
    .module('app', modules.map(module => module.name))
    .component('app', AppComponent);