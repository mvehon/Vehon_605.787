(function () {
    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/templates/item-detail.template.html',
            bindings: {
                itemList: '<'
            }
        })
})();