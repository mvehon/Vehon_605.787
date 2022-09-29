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
                $scope.messageStyle = {color: 'red', border: '1px solid red'}
            } else {
                $scope.messageStyle = {color: 'green', border: '1px solid green'}

                if (items.length <= 3) {
                    $scope.message = "Enjoy!"
                } else {
                    $scope.message = "Too much!"
                }
            }
        }
    }
})
();