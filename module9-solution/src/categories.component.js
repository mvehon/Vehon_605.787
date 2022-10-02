(function () {

    //TODO create a categories component that shows all available categories in the menu to the user
    //The categories and the items components should NOT directly use the MenuDataService to fetch their own data. Instead, the proper data should be simply passed into the component. (Hint: use the one-way < binding).

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/templates/categories.template.html', //TODO
            bindings: {
                items: '<',
            }
        });

})();
