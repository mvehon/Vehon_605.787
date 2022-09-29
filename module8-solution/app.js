(function () {
    'use-strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")

    NarrowItDownController.$inject = ['MenuSearchService']
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];

    /**
     * Controller
     * @param MenuSearchService
     * @constructor
     */
    function NarrowItDownController(MenuSearchService) {
        const menu = this;
        menu.searchTerm = ""

        menu.narrowItDownClick = () => {
            //If user is searching with no search term, return nothing found
            if (!menu.searchTerm) {
                menu.message = "Nothing found"
                return;
            }

            const promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

            promise.then(response => {
                console.log("Final response: %o", response);
                if (response?.length) {
                    menu.message = null
                    menu.found = response
                } else {
                    menu.message = "Nothing found"
                    menu.found = null
                }
            }).catch(error => {
                    console.log(error);
                }
            )
        };

        menu.removeItem = function (itemIndex) {
            console.log('Attempting to remove: %s', itemIndex)
            menu.found.splice(itemIndex, 1);
        };
    }

    /**
     * Service
     * @param $http
     * @param ApiBasePath
     * @constructor
     */
    function MenuSearchService($http, ApiBasePath) {
        const service = this;

        service.getMatchedMenuItems = searchTerm => {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(response => {
                let foundItems = response.data.menu_items.filter(item => item.description.toLowerCase().includes(searchTerm.toLowerCase()));
                return foundItems;
            })
        };

    }

    /**
     * Custom directive
     * @returns {{bindToController: boolean, controller: NarrowItDownController, scope: {onRemove: string, items: string}, controllerAs: string, templateUrl: string}}
     * @constructor
     */
    function FoundItems() {
        const ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'menu',
            bindToController: true
        };

        return ddo;
    }

})
();