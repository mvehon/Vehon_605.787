(function () {
    'use strict';

    angular.module('common')
        .service('UserService', UserService);

    function UserService() {
        const service = this;
        let user;

        service.register = function (userInfo) {
            user = userInfo;
        }

        service.isRegistered = function () {
            return !!user;
        }

        service.getUserInfo = function () {
            return user;
        }
    }
}());
