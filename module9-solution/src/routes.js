//TODO configure routes and view states


//home state

//categories state (controller and a resolve)
//resolve uses MenuDataService to retrieve categories and inject them into controller

//items state (same as above)

(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider
            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/templates/home.template.html'
            })

            // Premade list page
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/templates/categories.template.html', //TODO
                controller: 'CategoriesController as categories', //TODO
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories()
                    }]
                }
            })

            .state('items', {
                url: '/categories/{category}/items',
                templateUrl: 'src/templates/item-detail.template.html',
                controller: 'ItemsController as items',
                resolve: {
                    itemList: ['MenuDataService', '$stateParams',
                        function (MenuDataService, $stateParams) {
                            const result = MenuDataService.getItemsForCategory($stateParams.category);
                            console.log(result);
                            return result;
                        }]
                }
            })
    }

})();
