(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);


    CategoriesController.$inject = ['items'];

    function CategoriesController(items) {
        let mainList = this;
        mainList.items = items;
    }
})();
