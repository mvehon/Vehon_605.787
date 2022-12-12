(function () {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['UserService', 'MenuService'];

    function SignUpController(UserService, MenuService) {
        const controller = this;

        controller.register = function () {
            let favoriteMenuItem = controller.favoriteMenuItem
            let [category, number] = favoriteMenuItem.split(/(\d+)/)

            MenuService.getMenuItem(category, number)
                .then(response => {
                    if (response) {
                        UserService.register(controller);
                        controller.favoriteMenuItemCategory = category
                        controller.menuItem = response
                        controller.isRegistered = true;
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
            let favoriteMenuItem = controller.favoriteMenuItem
            let [category, number] = favoriteMenuItem.split(/(\d+)/)

            //Only run this check when user has input a category + the number
            if (category && number) {
                MenuService.getMenuItem(category, number)
                    .then(response => {
                        controller.menuItemMissing = false;
                    }).catch(e => {
                    console.log('Menu item exists failure: %s', e.message)
                    controller.menuItemMissing = true;
                })
            }
        }
    }
}());
