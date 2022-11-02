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
                        controller.menuItemMissing = false;
                    } else {
                        controller.menuItemMissing = true;
                        controller.isRegistered = false;
                    }
                }).catch(e => {
                controller.menuItemMissing = true;
                controller.isRegistered = false;
            })
        }

        controller.checkIfMenuItemExists = function () {
            MenuService.getMenuItem(controller.favoriteMenuItem)
                .then(response => {
                    controller.menuItemMissing = !response;
                }).catch(e => {
                controller.menuItemMissing = true;
            })
        }
    }
}());
