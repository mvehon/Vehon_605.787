(function () {
    //The categories and the items components should NOT directly use the MenuDataService to fetch their own data. Instead, the proper data should be simply passed into the component. (Hint: use the one-way < binding).
    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/templates/categories.template.html',
            bindings: {
                items: '<',
            }
        });
})();
