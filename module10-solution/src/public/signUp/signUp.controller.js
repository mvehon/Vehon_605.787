(function () {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['UserService', 'MenuService'];

    function SignUpController(UserService, MenuService) {
        const controller = this;

        controller.register = function () {
            MenuService.getMenuItem(controller.favoriteMenuItem)
                .then(response => {
                    if (response) {
                        UserService.register(controller);
                        controller.isRegistered = true;
                        controller.isMenuItemNotFound = false;
                    } else {
                        controller.isMenuItemNotFound = true;
                        controller.isRegistered = false;
                    }
                }).catch(e => {
                controller.isMenuItemNotFound = true;
                controller.isRegistered = false;
            })
        }
    }
}());
