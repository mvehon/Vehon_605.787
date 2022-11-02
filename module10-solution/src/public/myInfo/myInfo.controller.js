(function () {
    'use strict';

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['UserService', 'MenuService']

    function MyInfoController(UserService, MenuService) {
        const controller = this;

        controller.isRegistered = UserService.isRegistered();
        controller.user = UserService.getUserInfo();

        if (controller.isRegistered) {
            MenuService.getMenuItem(controller.user.favoriteMenuItem)
                .then(function (response) {
                    controller.menuItem = response;
                })
        }
    }
}());
