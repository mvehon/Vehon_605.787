(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);


    ItemsController.$inject = ['itemList'];

    function ItemsController(itemList) {
        let mainList = this;
        mainList.category = itemList.category;
        mainList.itemList = itemList.menu_items;
    }
})();
