(function () {


    angular.module('MenuApp')
        .service('MenuDataService', MenuDataService);


    MenuDataService.$inject = ['$http', '$q', '$timeout']

    function MenuDataService($http, $q, $timeout) {
        let service = this;

        const restaurantUrl = 'https://davids-restaurant.herokuapp.com'
        service.getAllCategories = () => {
            return $http({
                method: "GET",
                url: restaurantUrl + "/categories.json"
            })
                .then(response => {
                    return response.data;
                })
        };

        service.getItemsForCategory = categoryShortName => {
            return $http({
                method: "GET",
                url: restaurantUrl + "/menu_items.json",
                params: {category: categoryShortName}
            })
                .then(response => {
                    return response.data;
                })
        };
    }


//TODO define MenuDataService
    //TODO getAllCategories()
    //returns a promise
    //calls https://davids-restaurant.herokuapp.com/categories.json with $http
    //TODO getItemsForCategory(categoryShortName)
    //returns a promise
    //calls https://davids-restaurant.herokuapp.com/menu_items.json?category=${categoryShortName} with $http

})();
