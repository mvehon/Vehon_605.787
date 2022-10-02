(function () {

    //TODO this file should match the MenuApp from ng-app
    angular.module('MenuApp', ['data', 'ui.router']);

    angular.module('MenuApp')
        .config(function () {
            console.log("MenuApp config fired.");
        })
        .run(function () {
            console.log("MenuApp run fired.");
        });


    //TODO MenuApp module should list data from data.module.js as a dependency

})();
