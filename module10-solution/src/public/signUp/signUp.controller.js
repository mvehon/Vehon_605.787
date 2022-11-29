(function () {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['UserService', 'MenuService'];

    function SignUpController(UserService, MenuService) {
        const controller = this;

        controller.register = function () {
            let favoriteMenuItem = controller.favoriteMenuItem
            let [category] = favoriteMenuItem.split(/(\d+)/)

            MenuService.getMenuItem(category)
                .then(response => {
                    let menuItem = response?.menu_items?.find(x => x.short_name === favoriteMenuItem)
                    let menuItemMissing = !menuItem

                    if (response && !menuItemMissing) {
                        UserService.register(controller);
                        controller.favoriteMenuItemCategory = category
                        controller.menuItem = menuItem
                        controller.isRegistered = true;
                    } else {
                        controller.menuItemMissing = menuItemMissing;
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
                MenuService.getMenuItem(category)
                    .then(response => {
                        controller.menuItemMissing = !response?.menu_items?.find(x => x.short_name === favoriteMenuItem)
                    }).catch(e => {
                    console.log('Menu item exists failure: %s', e.message)
                    controller.menuItemMissing = true;
                })
            }
        }
    }
}());
