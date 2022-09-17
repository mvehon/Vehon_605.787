(function () {
    'use-strict';

    angular.module('LunchCheck', [])

        .controller('LunchCheckController', LunchCheckController)

    LunchCheckController.$inject = ['$scope', '$filter']

    function LunchCheckController($scope) {
        $scope.itemString = ""

        $scope.checkTooMuch = function () {
            const items = $scope.itemString
                .split(",")
                .filter(x => x.trim().length) //Removes empty or whitespace strings

            if (!$scope.itemString.length) {
                $scope.message = "Please enter data first"
            } else if (items.length <= 3) {
                $scope.message = "Enjoy!"
            } else if (items.length > 3) {
                $scope.message = "Too much!"
            }
        }
    }
})
();