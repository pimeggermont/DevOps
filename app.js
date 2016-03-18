var app = angular.module("myapp", []);

app.controller("mijnCtrl", function ($scope, $http) {

    $scope.ButtonCheck = function () {

        $http.get("http://localhost:3000/aanwezigen").success(function (aanwezigen) {
            $scope.aanwezigen = aanwezigen;

            $scope.checked = [];

            for (i = 0; i < aanwezigen.data.length; i++) {
                if ($scope.checkNum == aanwezigen.data[i].code) {
                    $scope.checked.push(aanwezigen.data[i].naam);
                    console.log($scope.checked);
                }
            }
        });
    }
});
